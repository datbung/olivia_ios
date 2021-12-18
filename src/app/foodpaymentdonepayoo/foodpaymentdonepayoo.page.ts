import { NavController } from '@ionic/angular';
import { SearchHotel } from './../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { foodService } from './../providers/foodService';
import { Component, OnInit, NgZone } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
@Component({
  selector: 'app-foodpaymentdonepayoo',
  templateUrl: './foodpaymentdonepayoo.page.html',
  styleUrls: ['./foodpaymentdonepayoo.page.scss'],
})
export class FoodpaymentdonepayooPage implements OnInit {

  total;_email;code;stt;startdate;enddate;PeriodPaymentDate;qrimg;
  PeriodPaymentHour;BillingCode
  isDinner: any=false;
  constructor(private activatedRoute: ActivatedRoute,public storage: Storage,public foodService:foodService, 
    private navCtrl:NavController, public searchhotel: SearchHotel, private zone: NgZone,private safariViewController: SafariViewController) { 
    this.total=this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.isDinner = this.foodService.isDinner;
    this.storage.get('email').then(email => {
      if(email){
        this._email = email;
      }
    })
  }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    this.stt = this.foodService.ischeckpayment;
    if (this.stt=='0') {
      this.BillingCode=this.foodService.BillingCode;
      this.qrimg=this.foodService.qrimg;
    }
    this.PeriodPaymentDate=moment(this.foodService.PeriodPaymentDate).format('DD/MM/YYYY');
    this.PeriodPaymentHour=moment(this.foodService.PeriodPaymentDate).format('HH:mm');
  }
  next()
  {
    this.zone.run(()=>{
      
        this.storage.remove("listItemsCart");
        this.foodService.itemCartChange.emit(0);
        this.foodService.countcart=0;
        this.foodService.listAddToCart =[];
        this.foodService.listItemsCart=[];
      this.foodService.totalPrice=0;
    })
    //this.foodService.itemActiveFoodTab.emit(3);
    //this.searchhotel.backPage = "foodpaymentdonepage";
    this.navCtrl.navigateForward('/homefood');
  }
  openWebpage() {
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
