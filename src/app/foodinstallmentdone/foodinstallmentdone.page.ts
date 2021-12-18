import { GlobalFunction } from './../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { RoomInfo, SearchHotel } from './../providers/book-service';
import { Component, OnInit, NgZone } from '@angular/core';
import { ActivityService } from '../providers/globalfunction';
import { NavController } from '@ionic/angular';
import { Booking, ValueGlobal } from '../providers/book-service'
import * as moment from 'moment';
import { foodService } from '../providers/foodService';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';

@Component({
  selector: 'app-foodinstallmentdone',
  templateUrl: './foodinstallmentdone.page.html',
  styleUrls: ['./foodinstallmentdone.page.scss'],
})
export class FoodinstallmentdonePage implements OnInit {

  paymentsuccess: any = false;
  code: any;
  errorcode: string="";
  email: string;
  startdate;enddate;isDinner
  constructor(public activityService: ActivityService,
    private navCtrl: NavController,
    public booking: Booking,
    public valueGlobal: ValueGlobal,public RoomInfo:RoomInfo,private activatedRoute: ActivatedRoute,
    private zone: NgZone,
    public foodService: foodService,
    private storage: Storage,
    private gf: GlobalFunction,
    public searchhotel: SearchHotel,
    ) {
    var se = this;
    this.isDinner =this.foodService.isDinner
    if(se.activityService.installmentPaymentSuccess){
      se.paymentsuccess = true;
      se.activityService.installmentPaymentSuccess = false;
      se.email = se.RoomInfo.email;
      // let url = C.urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request="+se.foodService.bookkingCode;
      // se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
      //   console.log(dataemail);
      // })
    }else{
      if(se.activityService.installmentPaymentErrorCode){
        se.errorcode = se.activityService.installmentPaymentErrorCode;
        se.email = se.RoomInfo.email;
      }
    }
    
   }

   ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.startdate = moment(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
    this.enddate = moment(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
  }
  next() {
    if(this.paymentsuccess){
      this.zone.run(()=>{
       
        if(this.foodService.isDinner){
          this.foodService.itemActiveFoodTab.emit(2);
          this.foodService.listDinnerItemsCart= [];
          this.foodService.itemDinnerAddToCart =[];
        }
        else
        {
          this.storage.remove("listItemsCart");
          this.foodService.itemCartChange.emit(0);
        this.foodService.countcart=0;
        this.foodService.listAddToCart =[];
        this.foodService.listItemsCart=[];
        }
        this.foodService.totalPrice=0;
      })
    }
    this.activityService.objBankInStallment = null;
    this.searchhotel.backPage = "foodinstallmentdone";
    this.navCtrl.navigateForward('/homefood');
  }

}
