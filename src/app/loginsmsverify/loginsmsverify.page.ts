import { SearchHotel } from 'src/app/providers/book-service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { GlobalFunction } from './../providers/globalfunction';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NavController, ToastController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ValueGlobal } from '../providers/book-service';
import * as request from 'requestretry';
import { C } from './../providers/constants';
import { FCM } from '@ionic-native/fcm/ngx';
import jwt_decode from 'jwt-decode';
import { foodService } from '../providers/foodService';
import { flightService } from '../providers/flightService';
@Component({
  selector: 'app-loginsmsverify',
  templateUrl: './loginsmsverify.page.html',
  styleUrls: ['./loginsmsverify.page.scss'],
})
export class LoginsmsverifyPage implements OnInit {

  @ViewChild('ipOTP1') ipOTP1;
  @ViewChild('ipOTP2') ipOTP2;
  @ViewChild('ipOTP3') ipOTP3;
  @ViewChild('ipOTP4') ipOTP4;
  @ViewChild('ipOTP5') ipOTP5;
  @ViewChild('ipOTP6') ipOTP6;
  @ViewChild('ipOTPALL') ipOTPALL;
  checkreview;
  num1 = ""; num2 = ""; num3 = ""; num4 = ""; num5 = ""; num6 = ""; phone; obj; strwarning; public deviceToken;refreshTokenTimer;appversion;numall="";
  constructor(public modalCtrl: ModalController,public appVersion:AppVersion,public searchhotel: SearchHotel,
    private fcm: FCM, public zone: NgZone, public navCtrl: NavController, public keyboard: Keyboard, 
    public storage: Storage, public valueGlobal: ValueGlobal, public toastCtrl: ToastController, 
    public gf: GlobalFunction,
    public foodService: foodService,
    public _flightService: flightService) {
    this.phone = this.valueGlobal.phone;
    this.storage.get('checkreview').then(checkreview => {
      this.checkreview=checkreview;
    })
      //Lấy app version
    this.appVersion.getVersionNumber().then(version => {
      this.appversion=version;
    })
  }

  ngOnInit() {
  }
  goback() {
    this.navCtrl.back();
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.ipOTPALL.setFocus();
    }, 150);
    this.keyboard.show();
  }
  changeAll(e){
    console.log(e.detail.value);
    let val = e.detail.value;
    if (val && val.length==6) {
      this.num1 = val.substring(0,1);
      this.num2 = val.substring(1,2);
      this.num3 = val.substring(2,3);
      this.num4 = val.substring(3,4);
      this.num5 = val.substring(4,5);
      this.num6 = val.substring(5,6);
    }
    else if (val && val.length==5) {
      this.num1 = val.substring(0,1);
      this.num2 = val.substring(1,2);
      this.num3 = val.substring(2,3);
      this.num4 = val.substring(3,4);
      this.num5 = val.substring(4,5);
      this.ipOTP6.setFocus();
    }
    else if (val && val.length==4) {
      this.num1 = val.substring(0,1);
      this.num2 = val.substring(1,2);
      this.num3 = val.substring(2,3);
      this.num4 = val.substring(3,4);
      this.ipOTP5.setFocus();
    }
    else if (val && val.length==3) {
      this.num1 = val.substring(0,1);
      this.num2 = val.substring(1,2);
      this.num3 = val.substring(2,3);
      this.ipOTP4.setFocus();
    }
    else if (val && val.length==2) {
      this.num1 = val.substring(0,1);
      this.num2 = val.substring(1,2);
      this.ipOTP3.setFocus();
    }
    else if (val && val.length==1) {
      this.num1 = val.substring(0,1);
      this.ipOTP2.setFocus();
    }
  }
  changeOTP(index){
    if(index ==1 && this.num1) {
        this.ipOTP2.setFocus();
    }
    else if(index ==2 && this.num2) {
      this.ipOTP3.setFocus();
    }
    else if(index ==3 && this.num3) {
      this.ipOTP4.setFocus();
    }
    else if(index ==4 && this.num4) {
      this.ipOTP5.setFocus();
    }
    else if(index ==5 && this.num5) {
      this.ipOTP6.setFocus();
    }
    this.keyboard.show();
  }
  clearOTP(){
    this.zone.run(()=>{
      this.num1 = "";
      this.num2 = "";
      this.num3 = "";
      this.num4 = "";
      this.num5 = "";
      this.num6 = "";

      this.ipOTP1.setFocus();
    });
  }
  confirm() {
    var se = this;
    if (this.num1 && this.num2 && this.num3 && this.num4 && this.num6) {
      se.obj = this.num1 + this.num2 + this.num3 + this.num4 + this.num5 + this.num6;
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile +'/api/account/LoginSMS',
        headers:
        {
          'postman-token': 'aac9e726-944b-2180-2416-63d2b1031a7a',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { PhoneNumber: this.phone, Token: se.obj },
        json: true
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if (body.result) {
          if (body.auth_token) {
            var decoded = jwt_decode(body.auth_token);
            se.refreshTokenTimer=decoded.refreshTokenTimer;
            se.storage.set("email", decoded.email);
            se.storage.set("auth_token", body.auth_token);
            se.storage.set("username", decoded.fullname);
            se.storage.set("phone", decoded.phone);
            var checkfullname = false;
            if(decoded.fullname){
              checkfullname=se.hasWhiteSpace(decoded.fullname);
            }
            //var checkfullname=se.hasWhiteSpace(decoded.fullname);
            se.storage.remove('deviceToken');
            se.fcm.getToken().then(token => {
              se.deviceToken = token;
              se.storage.set('deviceToken',token);
              if(se.deviceToken){
                se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
              }
            });
            var info;
            if (checkfullname) {
              var textfullname=decoded.fullname.trim();
              textfullname=decoded.fullname.split(' ');
              if(textfullname.length >2){
                let name = '';
                for(let i = 1; i < textfullname.length; i++){
                  if(i == 1){
                    name += textfullname[i];
                  }else{
                    name +=' ' +textfullname[i];
                  }
                }
                info = { ho: textfullname[0], ten: name , phone: decoded.phone, gender: decoded.gender}
              }else if(textfullname.length>1){
                info = { ho: textfullname[0], ten: textfullname[1], phone: decoded.phone, gender: decoded.gender}
              }
              else if(textfullname.length==1){
                info = { ho: textfullname[0], ten: "", phone: decoded.phone, gender: decoded.gender}
              }
              se.storage.set("infocus", info);
            } else {
              info = { ho: "", ten: "", phone: decoded.phone,fullname:"", gender: decoded.gender}
              se.storage.set("infocus", info);
            }
            if (Array.isArray(decoded.jti)) {
              se.storage.set("jti", decoded.jti[0]);
            }
            else {
              se.storage.set("jti", decoded.jti);
            }
            
            se.storage.remove('blogtripdefault');
            se.storage.remove('regionnamesuggest');
            se.storage.remove('listtopdealdefault');
            
            se.valueGlobal.countNotifi = 0;
            se.gf.setParams(true,'resetBlogTrips');
            if (!se.checkreview) {
              se.storage.set("checkreview", 0);
            }
            se.storage.set("point", decoded.point);
         
            se.searchhotel.rootPage ='login';
            //se.countdownRefreshToken();
            if(se.valueGlobal.backValue == 'foodaccount'){
              se.foodService.menuFooterClick.emit(4);
            }
            if(se.valueGlobal.backValue == "flightaccount"){
              se._flightService.itemMenuFlightClick.emit(4);
            }
            if (se.valueGlobal.logingoback) {
              if(se.valueGlobal.logingoback =="flightadddetails" || se.valueGlobal.logingoback == "flightadddetailsinternational"){
                se._flightService.itemFlightLogin.emit(1);
              }
              se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
            }
            else{
              se.navCtrl.navigateRoot('/');
            }
          }
        }
        else{
          alert(body.msg);
        }
       
      });
    }
    else {
      se.presentToast("XIn nhập đầy đủ mã OTP");
    }

  }
  countdownRefreshToken() {
    var timer = parseInt(this.refreshTokenTimer);
    this.countdownTimer(timer);
  }
  countdownTimer(timer: number) {
    if (timer >= 0) {
      this.valueGlobal.interval = setInterval(() => {
        //console.log(timer);
        timer--;

        if (timer < 0) {
          clearInterval(this.valueGlobal.interval);
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
            if (body) {
              var json=JSON.parse(body);
              if (json.auth_token) {
                se.storage.remove('auth_token').then(()=>{
                  se.storage.set("auth_token", json.auth_token);
                })
              //se.countdownRefreshToken();
            }
            }
          }
        })
      }
    })
  }
  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  } 
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: 'top',
    });
    toast.present();
  }
  
  sendOTP() {
    var se = this;
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/account/OTPLoginSMS',
        headers:
        {
          'postman-token': '0b9f3a80-3e35-1af7-058f-597d733e7cee',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { PhoneNumber: this.phone },
        json: true
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if (!body.result) {
          alert(body.msg);
        }
        se.numall = "";
        setTimeout(() => {
          se.ipOTPALL.setFocus();
        }, 100);
        this.keyboard.show();
      });
    }

}
