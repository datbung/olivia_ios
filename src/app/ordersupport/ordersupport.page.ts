import { Component, OnInit } from '@angular/core';
import { NavController,LoadingController } from '@ionic/angular';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import { ActivatedRoute, Router } from '@angular/router';
import {  ActivityService} from './../providers/globalfunction';

@Component({
  selector: 'app-ordersupport',
  templateUrl: './ordersupport.page.html',
  styleUrls: ['./ordersupport.page.scss'],
})
export class OrdersupportPage implements OnInit {
  booking_id="";cus_email;cus_name;cus_phone;note="";requestType;
  public loader: any;stt
  constructor(public navCtrl: NavController, private storage: Storage,public loadingCtrl: LoadingController,public activityService: ActivityService , private activatedRoute: ActivatedRoute) { 
    this.booking_id=this.activityService.objPaymentMytrip.trip.booking_id;
    this.cus_email=this.activityService.objPaymentMytrip.trip.cus_email;
    this.cus_name=this.activityService.objPaymentMytrip.trip.cus_name;
    this.cus_phone=this.activityService.objPaymentMytrip.trip.cus_phone;
  }

  ngOnInit() {
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
  }
  goback() {
  
    this.navCtrl.back();

  }
  ionViewDidEnter() {
    // ion-select customizing
    const ionSelects: any = document.querySelectorAll('ion-select');
    ionSelects.forEach((ionSelect) => {
      const selectIconInner = ionSelect.shadowRoot.querySelector('.select-icon');
      const selectTextInner = ionSelect.shadowRoot.querySelector('.select-text');
      const selectTextPlace = ionSelect.shadowRoot.querySelector('.select-placeholder');
      if (selectIconInner) {
        selectIconInner.setAttribute('style', ' position: absolute;right: 12px;top:13px');
      }
    
      if (selectTextPlace) {
        selectTextInner.setAttribute('style', '   opacity: 1;position: absolute;top:13px;  font-size: 14px !important;   letter-spacing: -0.28px !important;     color: #333 !important;  line-height: 1.5 !important');
      }
    });
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  next(){
    var se=this;
    if(!this.requestType){
      alert('Vui lòng chọn thông tin cần thay đổi');
      return;
    }
    if(!this.note){
      alert('Vui lòng nhập nội dung cần hỗ trợ');
      return;
    }
    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        this.presentLoading()
        var text = "Bearer " + auth_token;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlMobile + '/app/CRMOldApis/CreateSupportRequest',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json'
          },
          body:
          {
            bookingCode: this.booking_id,
            customerEmail:this.cus_email,
            customerName: this.cus_name,
            customerPhone: this.cus_phone,
            requestContent: this.note,
            requestType: this.requestType,
            sourceRequest: "App"
          },
          json: true
        };
        request(options, function (error, response, body) {
          if(body.error==0)
          {
            if(se.loader)
            {
              se.loader.dismiss();
            }
            se.navCtrl.navigateBack(['/ordersupportdone']);
          }
          // var json = JSON.parse(body);
          // console.log(json)
        })
      }
    })
  }
  getValue(event){
    this.requestType=event.detail.value;

  }
}
