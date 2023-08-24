import { ValueGlobal } from './../providers/book-service';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
var request = require("request");
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  phoneoremail='';
  public forgotpassData: FormGroup;
  //validCaptcha: boolean = false;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public valueGlobal: ValueGlobal, public gf: GlobalFunction, private formBuilder: FormBuilder) { 
   this.forgotpassData = this.formBuilder.group({
      phoneoremail: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  }
  goback() {
    this.navCtrl.back();
  }
  next() {
  //  if(!this.phoneoremail){
  //   this.gf.showToastWarning('Email không hợp lệ!');
  //   return;
  //  }
  //  if(!this.validCaptcha){
  //   this.gf.showToastWarning('Captcha không hợp lệ!');
  //   return;
  //  }
   this.gf.showLoading();
   try {
    var se = this;
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/account/OTPForgotPassWord',
        headers:
        {

          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: { EmailOrPhone: this.phoneoremail },
        json: true
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        if (body.result) {
          se.valueGlobal.phone = se.phoneoremail
          se.navCtrl.navigateForward('forgotpassotp');
          se.gf.hideLoading();
        }
        else {
          se.gf.showAlertMessageOnly(body.msg);
          se.gf.hideLoading();
        }
      });
   } catch (error) {
    se.gf.hideLoading();
   }
  
      
    
  }

  // resolved(response: string) {
  //   if(response != null && response != undefined) {
  //     this.validCaptcha = !this.validCaptcha;
  //   }else {
  //     this.validCaptcha = false;
  //   }
  // }

}
