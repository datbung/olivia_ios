import { SearchHotel } from 'src/app/providers/book-service';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { ActivityService, GlobalFunction } from './../providers/globalfunction';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { NavController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ValueGlobal } from '../providers/book-service';
import * as request from 'requestretry';
import { C } from './../providers/constants';
import { FCM } from '@ionic-native/fcm/ngx';
import jwt_decode from 'jwt-decode';
import { foodService } from '../providers/foodService';
import { flightService } from '../providers/flightService';
import { BizTravelService } from '../providers/bizTravelService';
@Component({
  selector: 'app-accountdeletionsmsverify',
  templateUrl: './accountdeletionsmsverify.page.html',
  styleUrls: ['./accountdeletionsmsverify.page.scss'],
})
export class AccountDeletionSmsVerifyPage implements OnInit {

  @ViewChild('ipOTP1') ipOTP1;
  @ViewChild('ipOTP2') ipOTP2;
  @ViewChild('ipOTP3') ipOTP3;
  @ViewChild('ipOTP4') ipOTP4;
  @ViewChild('ipOTP5') ipOTP5;
  @ViewChild('ipOTP6') ipOTP6;
  checkreview;
  num1 = ""; num2 = ""; num3 = ""; num4 = ""; num5 = ""; num6 = ""; phone; obj; strwarning; public deviceToken;refreshTokenTimer;appversion
  phonedisplay: string;
  constructor(public modalCtrl: ModalController,public appVersion:AppVersion,public searchhotel: SearchHotel,
    private fcm: FCM, public zone: NgZone, public navCtrl: NavController, public keyboard: Keyboard, 
    public storage: Storage, public valueGlobal: ValueGlobal, public toastCtrl: ToastController, 
    public gf: GlobalFunction,
    public foodService: foodService,
    public _flightService: flightService,
    public bizTravelService: BizTravelService,
    public activityService: ActivityService,
    private alertCtrl: AlertController) {
    this.phone = this.valueGlobal.phone;
    this.phonedisplay = this.valueGlobal.phone.substring(this.valueGlobal.phone.length-3, this.valueGlobal.phone.length);
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
      this.ipOTP1.setFocus();
    }, 150);
    this.keyboard.show();
  }
  change1() {
    if (this.num1) {
      this.ipOTP2.setFocus();
      this.keyboard.show();
    }
  }
  change2() {
    if (this.num2) {
      this.ipOTP3.setFocus();
      this.keyboard.show();
    }
  }
  change3() {
    if (this.num3) {
      this.ipOTP4.setFocus();
      this.keyboard.show();
    }
  }
  change4() {
    if (this.num4) {
      this.ipOTP5.setFocus();
      this.keyboard.show();
    }
  }
  change5() {
    if (this.num5) {
      this.ipOTP6.setFocus();
      this.keyboard.show();
    }
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
          se.showAlertConfirm();
          
        }
        else{
          //alert(body.msg);
          alert('Đã có lỗi xảy ra. Vui lòng liên hệ iVIVU để được hỗ trợ!');
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
      });
    }

    postRevokeTokens(objAppid) {
      var options = {
        'method': 'POST',
        'url': 'https://appleid.apple.com/auth/revoke',
        'headers': {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
          'client_id': '1464844301',
          'client_secret': objAppid.identityToken,
          'token': objAppid.authorizationCode
        }
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
      });
    }

    async showAlertConfirm(){
      var se = this;
      let alert = await this.alertCtrl.create({
        header: 'Bạn có thật sự muốn thế?',
        message: 'Bạn sẽ mất toàn bộ iVIVU points và quyền lợi. Bạn thực sự muốn xóa tài khoản chứ?',
        cssClass: "cls-alert-message",
        backdropDismiss: false,
        buttons: [
        {
          text: 'Có',
          role: 'OK',
          handler: () => {
            se.storage.get('jti').then((memberid) => {
              if(memberid){
                var options1 = {
                  method: 'GET',
                  url: C.urls.baseUrl.urlMobile +'/api/Dashboard/DeleteMemberUser?userId='+ memberid,
                  headers:
                  {
                    'content-type': 'application/json'
                  }
                };
                request(options1, function (error, response, body) {
                  if (error) throw new Error(error);
                  se.storage.get('objAppid').then(objAppid => {
                    //Invalidate the tokens and associated user authorizations for a user when they are no longer associated with your app.
                    se.postRevokeTokens(objAppid)
                   })
                  // se.valueGlobal.refreshUserToken.emit(1);
                  // se.activityService.itemRefreshDeletionAccount.emit(1);
                  se.navCtrl.navigateForward('accountdeletiondone');
                  })
              }
            })
          }
        },
        {
          text: 'Không',
          role: 'Cancel',
          handler: () => {
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
    }
}
