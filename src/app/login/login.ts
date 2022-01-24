import { Component,OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController,IonRouterOutlet,Platform, ModalController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';
import { AuthService } from './../providers/auth-service';
import { ToastController } from '@ionic/angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import * as request from 'requestretry';
import jwt_decode from 'jwt-decode';
import { GlobalFunction } from './../providers/globalfunction';
import { Router } from '@angular/router';
import { FCM } from '@ionic-native/fcm/ngx';
import { SearchHotel, ValueGlobal } from '../providers/book-service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { foodService } from '../providers/foodService';
import { flightService } from '../providers/flightService';
import { SignInWithApple, AppleSignInResponse, AppleSignInErrorResponse, ASAuthorizationAppleIDRequest } from '@ionic-native/sign-in-with-apple/ngx';
import { ConfirmemailPage } from '../confirmemail/confirmemail.page';
import { OverlayEventDetail } from '@ionic/core';
import { IDFAService } from '../providers/IDFATrackingService.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
})
export class LoginPage implements OnInit{
  toUser: Object;
  public loginData: FormGroup;
  id: string;
  isLoggedIn: boolean = false;
  userData: any;
  loader;
  checkreview;
  public deviceToken;
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;
  appversion: string;refreshTokenTimer
  constructor(
    public navCtrl: NavController, public authService: AuthService, public platform: Platform, private fb: Facebook, private storage: Storage,
    private fcm: FCM,public searchhotel: SearchHotel,private appVersion: AppVersion,public valueGlobal: ValueGlobal,
    private googlePlus: GooglePlus, private alertCtrl: AlertController, private toastCtrl: ToastController, 
    public loadingCtrl: LoadingController, public gf: GlobalFunction,
    public foodService: foodService,
    public _flightService: flightService,
    private signInWithApple: SignInWithApple,
    private modalCtrl: ModalController,
    public _IDFAService: IDFAService) {
    //google analytic
    this.storage.get('checkreview').then(checkreview => {
      this.checkreview=checkreview;
    })
    //Lấy app version
    this.appVersion.getVersionNumber().then(version => {
      this.appversion=version;
    })
    gf.googleAnalytion('login', 'load', '');
  
  }

  ngOnInit() {
  }

  ionViewWilEnter(){
    //Test notification
    this.platform.ready().then(() => {
    
      // this.fcm.hasPermission().then((data) => {
      // if(!data.isEnabled){
      // this.firbase.grantPermission();
      // }
      // })
      console.log('read token complete')
  })
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  

  /**
     * Hàm show cảnh báo
     * @param header header của warning
     * @param msg nội dung warning
     * @param textButtonOK text hiển thị button ok
     */
   public async showWarningYesNo(header,msg) {
     let alert = await this.alertCtrl.create({
       header: header,
       message: msg,
       buttons: [
        {
          text: 'Hủy',
          role: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        },  
        {
        text: 'Tiếp tục',
        role: 'OK',
        handler: () => {
          this.allowLoginFb();
        }
      },
     ]
     });
     alert.present();
     
 }

  async loginfb() {
    // this.userData = { btn: ['1'] }
    // this.app.getActiveNav().push('BlankPage', this.userData);
    //this.loader.present();

    var se = this;
    //await se.showWarningYesNo('"iVIVU.com" muốn sử dụng "facebook.com" để đăng nhập', "Việc này cho phép ứng dụng và trang web chia sẻ thông tin về bạn");
    // if (this.platform.is('cordova') && this.platform.is('ios')) {
    //   se.askTrackingPermission()
    //   .then(idfaOrAaid => {
    //       if (idfaOrAaid) {
    //           se.allowLoginFb();
    //       }else{
    //         se.askTrackingPermission().then((allow) => {
    //           se.allowLoginFb();
    //         })
    //       }
    //   });
      //const idfaPlugin = (cordova.plugins as any).idfa;

      // this._IDFAService.getIdfa()
      //     .then(idfaOrAaid => {
      //         if (idfaOrAaid) {
      //             console.log(idfaOrAaid);
      //             se.allowLoginFb();
      //         }
      //     });
      se.allowLoginFb();
  }

  allowLoginFb(){
    var se = this;
    se.presentLoadingnotime();
              const permissions = ["public_profile", "email"];
              se.fb.login(permissions).then((response: FacebookLoginResponse) => {
                se.fb.api('me?fields=id,name,email,first_name,gender,picture.width(720).height(720).as(picture_large)', permissions).then(profile => {
                  se.fb.getLoginStatus().then(response => {
                    var test = response.authResponse.accessToken;
                    se.storage.set('fbaccesstoken',test);
                    se.userData = { accessToken: test, id: profile['id'], email: profile['email'], UserName: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'], phone: profile['phone'], gender: profile['gender'] }
                    if (se.userData.email) {
                      se.postDatafb();
                    } else {
                      se.checknomail();
                    }
                  });

                });
              }).catch((reason:any) =>{
                if(reason != "User cancelled."){
                  se.fb.logout().then(()=>{
                    se.loginfb();
                  })
                }
               
                se.loader.dismiss();
              });
              //google analytic
              se.gf.googleAnalytion('login', 'loginfacebook', '');
  }

  postDatafb() {
    var se = this;
    //alert("test");
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/api/account/socialLogin',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body:
      {
        userData:
        {
          email: this.userData.email,
          name: this.userData.username,
          id: this.userData.id,
          image: this.userData.picture,
          provider: 'facebook',
          token: '',
          idToken: this.userData.accessToken
        }
      },
      json: true
    };
    // console.log(JSON.stringify(options.body))
    request(options, function (error, response, body) {
   
      if (error) {
        error.page = "login";
        error.func = "postDataFb";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if (response.statusCode != 200) {
        var objError = {
          page: "login",
          func: "postDataFb",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError,response);
      }
      if (body.result) {
        var decoded = jwt_decode(body.auth_token);
        se.refreshTokenTimer=decoded.refreshTokenTimer;
        // console.log(JSON.stringify(decoded))
        se.storage.set("email", decoded.email);
        se.storage.set("auth_token", body.auth_token);
        se.storage.set("username", decoded.fullname);
        var checkfullname=se.hasWhiteSpace(decoded.fullname);
        var info;
        if (checkfullname) {
          var textfullname=decoded.fullname.split(' ')
          if(textfullname.length >2){
            let name = '';
            for(let i = 1; i < textfullname.length; i++){
              if(i == 1){
                name += textfullname[i];
              }else{
                name +=' ' +textfullname[i];
              }
            }
            info = { ho: textfullname[0], ten: name , phone: decoded.phone}
          }else if(textfullname.length >1){
            info = { ho: textfullname[0], ten: textfullname[1], phone: decoded.phone}
          }
          else if(textfullname.length == 1){
            info = { ho: textfullname[0], ten: "", phone: decoded.phone}
          }
          se.storage.remove('infocus');
          se.storage.remove('listblogtripdefault');
          se.storage.remove('listblogdefault');
          se.storage.remove('listtopdealdefault');
          se.storage.remove('regionnamesuggest');
          se.valueGlobal.countNotifi = 0;
    
          se.storage.set("infocus", info);
          se.gf.setParams(true,'resetBlogTrips');
        } else {
          info = { ho: "", ten: "", phone: decoded.phone}
          se.storage.set("infocus", info);
        }
        // se.storage.set("jti", decoded.jti[0]);
        if (Array.isArray(decoded.jti)) {
          se.storage.set("jti", decoded.jti[0]);
        }
        else {
          se.storage.set("jti", decoded.jti);
        }
        if (!se.checkreview) {
          se.storage.set("checkreview", 0);
        }
        se.storage.set("point", decoded.point);
        se.fcm.getToken().then(token => {
          se.deviceToken = token;
          se.storage.set('deviceToken',token);
          //PDANH 19/07/2019: Push memberid & devicetoken
          if(se.deviceToken){
            se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
          }
       });
       se.searchhotel.rootPage ='login';
       //se.countdownRefreshToken();
       if(se.valueGlobal.backValue == 'foodaccount'){
        se.valueGlobal.logingoback = "";
        se.foodService.menuFooterClick.emit(4);
      }
      if(se.valueGlobal.backValue == "flightaccount"){
        se.valueGlobal.logingoback = "";
        se._flightService.itemMenuFlightClick.emit(4);
      }
        // se.navCtrl.navigateForward('/');
        if(se.loader){
          se.loader.dismiss();
        }
        if (se.valueGlobal.logingoback) {
          se.valueGlobal.backValue = "";
          if(se.valueGlobal.logingoback =="flightadddetails"){
            se._flightService.itemFlightLogin.emit(1);
          }
          se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
        }
        else{
          se.navCtrl.navigateRoot('/');
        }
        
      }else if(!body.result && body.msg){
          if(se.loader){
            se.loader.dismiss();
          }
          se.gf.showMessageWarning(body.msg);
      }
    });
  }
  countdownRefreshToken() {
    var timer = parseInt(this.refreshTokenTimer);
    //var timer = 10;
    this.countdownTimer(timer);
  }
  countdownTimer(timer: number) {
    if (timer >= 0) {
      clearInterval(this.valueGlobal.interval);
      this.valueGlobal.interval = setInterval(() => {
        timer--;
        //console.log(timer);
        if (timer < 0) {
          clearInterval(this.valueGlobal.interval);
          // Reload lại Token để lấy User Info mới nhất
          this.reloadToken()
           
        }
      }, 1000);

    }
  }
  reloadToken() {
    this.refreshToken();
  }

  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roompaymentdoneean",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentdoneean";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var json=JSON.parse(body);
            if (json.auth_token) {
              se.storage.remove('auth_token').then(()=>{
                se.storage.set("auth_token", json.auth_token);
              })
              
              //se.countdownRefreshToken();
            }
          
          }
        })
      }
    })
  }
  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  } 
  checknomail() {
    var se = this;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/api/account/CheckSocialNoEmail',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body:
      {
        userData:
        {
          id: this.userData.id,
          idToken: '',
          image: this.userData.picture,
          name: this.userData.username,
          provider: 'facebook',
          token: this.userData.accessToken
        }
      },
      json: true
    };
    // console.log(JSON.stringify(options.body))
    request(options, function (error, response, body) {
      if (error) {
        error.page = "login";
        error.func = "checknomail";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if (response.statusCode != 200) {
        var objError = {
          page: "login",
          func: "checknomail",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError,response);
      }
      if (body.result) {
        se.postDatafb();
      } else {
        if(se.loader){
          se.loader.dismiss();
        }
        se.presentPrompt();
      }
    });
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  logingg() {
    this.userData = { btn: ['2'] }
    //this.app.getActiveNav().push('BlankPage', this.userData);
    //google analytic
    this.navCtrl.navigateForward('/blank');
    this.gf.googleAnalytion('login', 'logingoogle', '');
  }
  logout() {
    this.fb.logout()
      .then(res => this.isLoggedIn = false)
      .catch(e => {
        console.log('Error logout from Facebook', e)
        if (e) {
          e.page = "login";
          e.func = "logout";
          C.writeErrorLog(e,null);
        };
      });
    //google analytic
    this.gf.googleAnalytion('login', 'logout', '');
  }
  logintk() {
    //use this.loginData.value to authenticate the user

    // this.app.getActiveNav().push('LoginusernamePage');
    //google analytic
    this.navCtrl.navigateForward('loginusername')
    this.gf.googleAnalytion('login', 'logintk', '');

  }

  bypasslogin() {
    // let elements = Array.from(document.querySelectorAll('page-main'));
    //     if(elements && elements.length >0){
    //       this.app.getActiveNav().setRoot('MainPage');
    //       this.app.getRootNav().getActiveChildNav().select(0);
    //     }else{
    //       this.navCtrl.push("MainPage").then(()=>{this.view.dismiss()});
    //     }
    //this.navCtrl.popToRoot();
    //google analytic
    this.gf.googleAnalytion('login', 'bypasslogin', '');
  }
 
  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: "Email hoặc mật khẩu không đúng.",
      duration: 3000,
      position: 'top'
    });
   
    toast.present();
  }
  /**
   * Opens a paage
   * 
   * @param page string Page name
   */
  openPage(page: string) {
    //this.navCtrl.push(page);
  }

  goback() {
    // if (this.navCtrl.canGoBack()) {
    //   this.view.dismiss();
    // } else {
    //   this.platform.exitApp();
    // }
    this.navCtrl.back();
  }
  
  async presentPrompt() {
    let alert = await  this.alertCtrl.create({
      subHeader: 'Tài khoản của bạn không có email hoặc không để ở chế độ công khai. Vui lòng cung cấp email để iVIVU có thể xác định và bảo mật tài khoản của bạn:',
      inputs: [
        {
          name: 'email',
          placeholder: 'Nhập email'
        }
      ],
      buttons: [
        {
          text: 'Bỏ qua',
          role: 'cancel',
          handler: data => {
          }
        },
        {
          text: 'Xác nhận',
          handler: data => {
            if (data.email) {
              // logged in!
              this.userData.email = data.email;
              var test = this.validateEmail(data.email);
              if (test == true) {
                this.postDatafb();
              } else {
                this.presentToastemail();
              }
            } else {
              // invalid login
              return false;
            }
          }
        }

      ]
    });
    await alert.present();
  }
  async presentToastemail() {
    let toast = await this.toastCtrl.create({
      message: "Định dạng email không đúng",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  register(){
    this.navCtrl.navigateForward('register');
  }

  /**
    * Đẩy token + memberid lưu xuống db
    * @param devicetoken key token của device
    * @param authentoken key id member user
    */
   pushTokenAndMemberID(authentoken, devicetoken, appversion){
    var se = this;
    if (authentoken) {
        var text = "Bearer " + authentoken;
        var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile +'/mobile/OliviaApis/PushTokenOfUser',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json-patch+json',
            authorization: text
        },
        body: { tokenId: devicetoken, appVersion: appversion.replace(/\./g, '') },
        json: true
      };
      request(options, function (error, response, body) {
          if (error) {
              error.page = "login";
              error.func = "pushTokenAndMemberID";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
          }else if(body){
              var obj = JSON.parse(body);
             
          }
      })
    }
  }
  async presentLoadingnotime() {
    this.loader = await this.loadingCtrl.create({
      message: "",
    });
    this.loader.present();
  }
  logintksms()
  {
    this.navCtrl.navigateForward('loginsms')
  }

  checkExistUser(res): Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile +'/api/Account/CheckValidUser',
        //url: "http://192.168.10.103:340/api/Account/CheckValidUser",
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
            'content-type': 'application/json-patch+json',
        },
        body: { "userData": 
          {
            email: res.email,
            id: res.user,
            provider: "apple",
          }
        },
        json: true
      };
      request(options, function (error, response, body) {
          if (error) {
              error.page = "login";
              error.func = "checkExistUser";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error,response);
          }else {
            resolve(body);
          }
      })
    })
  }

  loginapple(){
    var se = this;
    se.signInWithApple.signin({
      requestedScopes: [
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
        ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail
      ]
    })
    .then((res: AppleSignInResponse) => {
      // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
      console.log(res);
      if (res ) {
        // se.checkExistUser(res).then((data)=> {
        //   if(data.result){
        //     se.postDataApple(res);
        //   }
        //   else {
        //     //se.presentPromptApple(res);
        //     se.showConfirmEmail(res);
        //   }
        // })
        //se.showConfirmEmail(res);
        se.postDataApple(res);
      } 
    })
    .catch((error: AppleSignInErrorResponse) => {
      if(error.error == "PLUGIN_ERROR"){
        alert('Đã có lỗi xảy ra. Vui lòng nâng cấp phiên bản IOS để sử dụng chức năng này!');
      }else{
        console.log(error)
      }
      
    });
  }

 async showConfirmEmail(res){
    var se = this;
    const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
              component: ConfirmemailPage,
              componentProps: {
                aParameter: true,
              }
            });
          modal.present();
        
          modal.onDidDismiss().then((data: OverlayEventDetail) => {
            if(data && data.data && data.data.email){
              //console.log(data.data);
              if(data.data.email){
                res.email = data.data.email;
              }
              se.postDataApple(res);
            }else if(data && data.data && data.data.bypass){//khách chọn bỏ qua
              se.postDataApple(res);
            }
          })
  }

  async warningInactiveAccount(msg){
    let alert = await this.alertCtrl.create({
      subHeader: 'Đăng nhập không thành công',
      message: "Tài khoản đang tạm khóa. Vui lòng liên hệ iVIVU để biết thêm thông tin.",
      buttons: [{
          text: 'Xác nhận',
          handler: data => {
            
          }
        }

      ]
    });
    await alert.present();
  }

  postDataApple(res) {
    var se = this;
    console.log(res);
    //alert("test");
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/api/account/socialLogin',
      //url: 'http://192.168.10.103:3400/api/account/socialLogin',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body:
      {
        userData:
        {
          email: res.email,
          name: res.fullName.familyName + " " + res.fullName.givenName,
          id: res.user,
          provider: 'apple',
        }
      },
      json: true
    };
    // console.log(JSON.stringify(options.body))
    request(options, function (error, response, body) {
   
      if (error) {
        error.page = "login";
        error.func = "postDataFb";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if (response.statusCode != 200) {
        var objError = {
          page: "login",
          func: "postDataFb",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError,response);
      }
      if(response.statusCode == 400){
        if(body && body.msg == "Tài khoản này đã bị khóa !"){
          se.warningInactiveAccount(body.msg);
        }
      }
      if (body.result) {
        var decoded = jwt_decode(body.auth_token);
        se.refreshTokenTimer=decoded.refreshTokenTimer;
        se.storage.set("email", se.validateEmail(decoded.email) ? decoded.email : "");
        se.storage.remove("auth_token");
        se.storage.set("auth_token", body.auth_token);
        se.storage.set("username", decoded.fullname);
        var checkfullname=se.hasWhiteSpace(decoded.fullname);
        var info;
        if (checkfullname) {
          var textfullname=decoded.fullname.split(' ')
          if(textfullname.length >2){
            let name = '';
            for(let i = 1; i < textfullname.length; i++){
              if(i == 1){
                name += textfullname[i];
              }else{
                name +=' ' +textfullname[i];
              }
            }
            info = { ho: textfullname[0], ten: name , phone: decoded.phone}
          }else if(textfullname.length >1){
            info = { ho: textfullname[0], ten: textfullname[1], phone: decoded.phone}
          }
          else if(textfullname.length == 1){
            info = { ho: textfullname[0], ten: "", phone: decoded.phone}
          }
          se.storage.remove('infocus');
          se.storage.remove('listblogtripdefault');
          se.storage.remove('listblogdefault');
          se.storage.remove('listtopdealdefault');
          se.storage.remove('regionnamesuggest');
          se.valueGlobal.countNotifi = 0;
    
          se.storage.set("infocus", info);
          se.gf.setParams(true,'resetBlogTrips');
        } else {
          info = { ho: "", ten: "", phone: decoded.phone}
          se.storage.set("infocus", info);
        }
        // se.storage.set("jti", decoded.jti[0]);
        if (Array.isArray(decoded.jti)) {
          se.storage.set("jti", decoded.jti[0]);
        }
        else {
          se.storage.set("jti", decoded.jti);
        }
        if (!se.checkreview) {
          se.storage.set("checkreview", 0);
        }
        se.storage.set("point", decoded.point);
        se.fcm.getToken().then(token => {
          se.deviceToken = token;
          se.storage.set('deviceToken',token);
          //PDANH 19/07/2019: Push memberid & devicetoken
          if(se.deviceToken){
            se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
          }
       });
       se.searchhotel.rootPage ='login';
       //se.countdownRefreshToken();
       if(se.valueGlobal.backValue == 'foodaccount'){
        se.valueGlobal.logingoback = "";
        se.foodService.menuFooterClick.emit(4);
      }
      if(se.valueGlobal.backValue == "flightaccount"){
        se.valueGlobal.logingoback = "";
        se._flightService.itemMenuFlightClick.emit(4);
      }
        // se.navCtrl.navigateForward('/');
        if(se.loader){
          se.loader.dismiss();
        }
        if (se.valueGlobal.logingoback) {
          se.valueGlobal.backValue = "";
          if(se.valueGlobal.logingoback =="flightadddetails"){
            se._flightService.itemFlightLogin.emit(1);
          }
          se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
        }
        else{
          se.navCtrl.navigateRoot('/');
        }
        
      }
    });
  }

  checknomailApple(res) {
    var se = this;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/api/account/CheckSocialNoEmail',
      timeout: 10000, maxAttempts: 5, retryDelay: 2000,
      headers:
      {
        'cache-control': 'no-cache',
        'content-type': 'application/json'
      },
      body:
      {
        userData:
        {
          name: res.fullName.familyName + " " + res.fullName.givenName,
          id: res.user,
          provider: 'apple',
        }
      },
      json: true
    };
    // console.log(JSON.stringify(options.body))
    request(options, function (error, response, body) {
      if (error) {
        error.page = "login";
        error.func = "checknomail";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if (response.statusCode != 200) {
        var objError = {
          page: "login",
          func: "checknomail",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError,response);
      }
      if (body.result) {
        se.postDataApple(res);
      } else {
        se.presentPrompt();
      }
    });
  }

  async presentPromptApple(res) {
    let alert = await  this.alertCtrl.create({
      subHeader: 'Tài khoản của bạn không có email hoặc không để ở chế độ công khai. Vui lòng cung cấp email để iVIVU có thể xác định và bảo mật tài khoản của bạn:',
      inputs: [
        {
          name: 'email',
          placeholder: 'Nhập email'
        }
      ],
      buttons: [
        {
          text: 'Bỏ qua',
          role: 'cancel',
          handler: data => {
            this.postDataApple(res);
          }
        },
        {
          text: 'Xác nhận',
          handler: data => {
            if (data.email) {
              // logged in!
              var test = this.validateEmail(data.email);
              if (test == true) {
                if(data.email){
                  res.email = data.email;
                }
                this.postDataApple(res);
              } else {
                this.presentToastemail();
              }
            } else {
              // invalid login
              return false;
            }
          }
        }

      ]
    });
    await alert.present();
  }
}
