import { GlobalFunction } from './../providers/globalfunction';
import { NavController } from '@ionic/angular';
import { foodService } from './../providers/foodService';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../providers/constants';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
@Component({
  selector: 'app-foodpaymentpayoo',
  templateUrl: './foodpaymentpayoo.page.html',
  styleUrls: ['./foodpaymentpayoo.page.scss'],
})
export class FoodpaymentpayooPage implements OnInit {

  bookingCode;stt;text;qrimg;BillingCode;total;PeriodPaymentDate
  intervalID: NodeJS.Timeout;
  constructor(private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private foodService:foodService,private safariViewController: SafariViewController) { }

  ngOnInit() {
    this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    if (this.stt=='0') {
      this.BillingCode=this.foodService.BillingCode;
    }
    else
    {
      this.qrimg=this.foodService.qrimg;
      this.intervalID = setInterval(() => {
        let url = C.urls.baseUrl.urlFood+'/api/FOBooking/GetBookingByCode?bookingCode='+this.bookingCode+'';
        this.gf.CheckpaymentFood(url).then((data) => {
          console.log(data);
          var checkpay=data
          if (checkpay=="true") {
            clearInterval(this.intervalID);
            this.checkqrcode();
          }
        })
      }, 1000 * 5);
      setTimeout(() => {
        clearInterval(this.intervalID);
      }, 60000 * 15);
    }
    this.total=this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.PeriodPaymentDate=moment(this.foodService.PeriodPaymentDate).format('HH:mm DD/MM/YYYY');
  }
  goback()
  {
    if (this.stt=='1') {
      clearInterval(this.intervalID);
    }
    this.navCtrl.back();
  }
  next()
  {
    var se=this;
    if (this.stt=='0') {
      let url = C.urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request="+se.bookingCode;
      se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
        var options = {
          'method': 'GET',
          'url': C.urls.baseUrl.urlFood+'/api/FOBooking/GetBookingByCode?bookingCode='+se.bookingCode+'',
          'headers': {
          }
        };
        request(options, function (error, response) {
          var rs=JSON.parse(response.body); 
          se.foodService.qrimg="";
          se.foodService.ischeckpayment='0';
          se.navCtrl.navigateForward('foodpaymentdonepayoo/'+se.bookingCode+'/'+rs.response.startDate+'/'+rs.response.endDate);
        })
     
      })
     
    }
    else
    {
      clearInterval(this.intervalID);
      se.checkqrcode();
    }

  }
  checkqrcode()
  {
    var se=this;
    var options = {
      'method': 'GET',
      'url': C.urls.baseUrl.urlFood+'/api/FOBooking/GetBookingByCode?bookingCode='+se.bookingCode+'',
      'headers': {
      }
    };
    request(options, function (error, response) { 
      if (error) throw new Error(error);
      var rs=JSON.parse(response.body);
      if (rs.response.status==3) {
        se.foodService.ischeckpayment='1';
        se.navCtrl.navigateForward('foodpaymentdonepayoo/'+se.bookingCode+'/'+rs.response.startDate+'/'+rs.response.endDate);
      }
      else{
        se.foodService.ischeckpayment='0';
        se.foodService.BillingCode="";
        let url = C.urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request="+se.bookingCode;
        se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
          se.navCtrl.navigateForward('foodpaymentdonepayoo/'+se.bookingCode+'/'+rs.response.startDate+'/'+rs.response.endDate);
        })
      }
    });
  }
  openWebpagePayoo() {
    var url="https://payoo.vn/mapv2/public/index.php?verify=true";
    this.safariViewController.isAvailable()
    .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: url,
          hidden: false,
          animated: false,
          transition: 'curl',
          enterReaderModeIfAvailable: true,
          tintColor: '#23BFD8'
        })
        .subscribe((result: any) => {
            if(result.event === 'opened') console.log('Opened');
            else if(result.event === 'loaded') console.log('Loaded');
            else if(result.event === 'closed') 
            {
            }
            
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    })
  }
}
