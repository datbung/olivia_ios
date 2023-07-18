import { ValueGlobal } from './../providers/book-service';
import { ToastController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
var request = require("request");
import { C } from '../providers/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.page.html',
  styleUrls: ['./forgotpass.page.scss'],
})
export class ForgotpassPage implements OnInit {
  phoneoremail='';
  captcha:any=null;
  public forgotpassData: FormGroup;
  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public valueGlobal: ValueGlobal, public formBuilder: FormBuilder,) { 
   this.forgotpassData = this.formBuilder.group({
      //captcha: [null, Validators.compose([Validators.required])],
      phoneoremail: ['', Validators.compose([Validators.required])],
    });
  }
  ngOnInit() {
  }
  goback() {
    this.navCtrl.back();
  }
  next() {
   
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
          se.navCtrl.navigateForward('forgotpassotp')
        }
        else {
          alert(body.msg);
        }
      });
    
  }
}
