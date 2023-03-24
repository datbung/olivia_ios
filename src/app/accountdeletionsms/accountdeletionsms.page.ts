import { ValueGlobal } from './../providers/book-service';
import { json } from 'body-parser';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
var request = require("request");
import { C } from '../providers/constants';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-accountdeletionsms',
  templateUrl: './accountdeletionsms.page.html',
  styleUrls: ['./accountdeletionsms.page.scss'],
})
export class AccountDeletionSmsPage implements OnInit {
  phone
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public valueGlobal: ValueGlobal, public storage: Storage) { }
  ngOnInit() {
    this.storage.get('phone').then(phone => {
      if(phone){
        this.phone = phone
      }
      })
  }
  goback() {
    this.navCtrl.back();
  }
  next() {
    if (this.phonenumber(this.phone)) {
      var se = this;
      se.valueGlobal.phone = se.phone
      
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
        if (body.result) {
          se.navCtrl.navigateForward('accountdeletionsmsverify');
        }
        else {
          alert(body.msg);
        }
      });
    } else {
      this.presentToastPhone();
    }
  }
  async presentToastPhone() {
    let toast = await this.toastCtrl.create({
      message: "Số điện thoại không hợp lệ. Xin vui lòng nhập lại.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  phonenumber(inputtxt) {
    var n = Number(inputtxt);
    if (n) {
      var test1 = inputtxt.length;
      if (inputtxt) {
        if (test1 == 10) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
}
