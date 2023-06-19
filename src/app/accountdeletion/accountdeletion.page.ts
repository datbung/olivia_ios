
import { AlertController,NavController } from '@ionic/angular';
import { Component, OnInit,NgZone } from '@angular/core';
var request = require("request");
import { C } from '../providers/constants';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'app-accountdeletion',
  templateUrl: './accountdeletion.page.html',
  styleUrls: ['./accountdeletion.page.scss'],
})
export class AccountDeletionPage implements OnInit {
  ischeckDK1;ischeckDK2;ischeckDK3;ischeckDK4;ischeckDK5
  constructor(private alertCtrl: AlertController,public navCtrl: NavController,public storage: Storage, public zone : NgZone) { }
  ngOnInit() {
  }
  goback() {
    this.navCtrl.back();
  }
  checkDk1(){
    this.zone.run(() => {
      this.ischeckDK1=!this.ischeckDK1;
    
    })
   
  }
  checkDk2(){
    this.zone.run(() => {
      this.ischeckDK2=!this.ischeckDK2;
   
    })
 
  }
  checkDk3(){
    this.zone.run(() => {
      this.ischeckDK3=!this.ischeckDK3;
    
    })
 
  }
  checkDk4(){
    this.zone.run(() => {
      this.ischeckDK4=!this.ischeckDK4;
     
    })
  
  }
  checkDk5(){
    this.zone.run(() => {
      this.ischeckDK5=!this.ischeckDK5;
    })

  }
  next(){
    this.showAlertConfirm();
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
              var options1 ;
              se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                  var text = "Bearer " + auth_token;
                  options1  = {
                    method: 'GET',
                    url: C.urls.baseUrl.urlMobile +'/api/Dashboard/DeleteMemberUser?userId='+ memberid,
                    headers:
                    {
                      'cache-control': 'no-cache',
                      'content-type': 'application/json',
                      authorization: text
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
}
