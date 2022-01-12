import { foodService } from './../providers/foodService';
import { GlobalFunction } from './../providers/globalfunction';
import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { RoomInfo, Booking, Bookcombo, SearchHotel } from '../providers/book-service';
import { ActivityService } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-foodinstallment',
  templateUrl: './foodinstallment.page.html',
  styleUrls: ['./foodinstallment.page.scss'],
})
export class FoodinstallmentPage implements OnInit {
  priceshow;listmenu=[];arrmenu;
  public loader: any;
  bookingCode="";startDate;endDate;
  banks: any=[];
  cards: any=[];
  periods: any=[];
  periodSelected: any;
  amountByMonth: any;
  amountFinal: any;
  amountFee: any;
  bankCode: any;
  paymentMethod: any;
  month: any;
  auth_token: any;
  jsonroom: any;
  constructor(private navCtrl:NavController,private foodService:foodService
    ,public gf: GlobalFunction, public loadingCtrl: LoadingController
    ,public searchhotel:SearchHotel,private toastCtrl: ToastController,
    private zone: NgZone,public activityService: ActivityService,public Roomif:RoomInfo,private safariViewController: SafariViewController) { 
    this.priceshow=this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    if(!this.foodService.isDinner){
      this.arrmenu = this.foodService.listItemsCart;
    }else{
      this.arrmenu = this.foodService.listDinnerItemsCart;
    }
    for (let i = 0; i < this.arrmenu.length; i++) {
      var chuoi="";
      if (this.arrmenu[i].itemExtraOther&&this.arrmenu[i].itemExtraOther.length>0) {
        for (let j = 0; j < this.arrmenu[i].itemExtraOther.length; j++) {
          if (j==this.arrmenu[i].itemExtraOther.length-1) {
            if (this.arrmenu[i].itemExtraWater.length>0) {
              chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name+' · ';
            }
            else
            {
              chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name;
            }
          }
          else{
            chuoi=chuoi+this.arrmenu[i].itemExtraOther[j].name+' · ';
          }
        }
      }
      if (this.arrmenu[i].itemExtraWater&&this.arrmenu[i].itemExtraWater.length>0) {
        for (let m = 0; m < this.arrmenu[i].itemExtraWater.length; m++) {
          if (m==this.arrmenu[i].itemExtraWater.length-1) {
            chuoi=chuoi+this.arrmenu[i].itemExtraWater[m].name;
          }
          else{
            chuoi=chuoi+this.arrmenu[i].itemExtraWater[m].name+' · ';
          }

        }
      }
      this.arrmenu[i].totalPrice = this.arrmenu[i].itemPrice * this.arrmenu[i].quantity; 
      var item={quantity:this.arrmenu[i].quantity,name:this.arrmenu[i].focategory.name,chuoi:chuoi,totalPrice:this.arrmenu[i].totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."),typePriceId:this.arrmenu[i].focategory.typePriceId}
      this.listmenu.push(item);
    }
    if(this.activityService.objBankInStallment){
      this.banks = this.activityService.objBankInStallment.banks.data;
    }
  }

  ngOnInit() {
  }
  goback()
  {
    this.navCtrl.back();
  }
  itemBankClick(item){
    var se = this;
    if(item){
      $("#"+item.bankCode).siblings().removeClass('selected');
      $("#"+item.bankCode).addClass('selected');
      se.bankCode = item.bankCode;
      se.periods = [];
      se.periodSelected = null;
      if(item.paymentMethods && item.paymentMethods.length >0){
        se.cards = item.paymentMethods;
        
      }
    }
  }
  itemPeriodClick(item){
    var se =this;
    if(item){
      $("#"+item.month).siblings().removeClass('period-selected');
      $("#"+item.month).addClass('period-selected');
      se.month = item.month;
      se.periodSelected = item;
      //góp mỗi tháng
      se.amountByMonth = item.amountByMonth.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
      //tổng tiền trả góp
      se.amountFinal = item.amountFinal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
      //chênh lệch trả thẳng
      se.amountFee = item.amountFee.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
    }
  }
  itemCardClick(item){
    var se = this;
    if(item){
      $("#"+item.paymentMethod).siblings().removeClass('selected');
      $("#"+item.paymentMethod).addClass('selected');
      se.paymentMethod = item.paymentMethod;
      se.periodSelected = null;
      if(item.periods && item.periods.length >0){
        se.periods = item.periods;
        se.zone.run(() => se.periods.sort(function (a, b) {
          let direction = -1;
          let property='month';
            if (a[property] * 1 < b[property] * 1) {
              return 1 * direction;
            }
            else if (a[property] * 1 > b[property] * 1) {
              return -1 * direction;
            }
        }));
      }
    }
  }
  installment(){
    var se = this;
    if(!se.validInstallment()){
      return;
    }

    se.presentLoader();
    se.processBooking().then((data) => {
      if(data){
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlContracting +"/api/toolsapi/sendOrderToAlepay",
          form:
          {
            buyerEmail: se.Roomif.email,
            buyerName: se.Roomif.hoten,
            buyerPhone: se.Roomif.phone,
            orderCode: data.response.bookingCode,
            orderDescription: "Thanh toan tra gop don hang:"+ data.code,
            amount: se.priceshow.replace(/\,/g, '').replace(/\./g, ''),
            bankCode: se.bankCode,
            paymentMethod: se.paymentMethod,
            month: se.month,
            cancelUrl:'https://beta-olivia.ivivu.com/payment/Home/BlankFoodNew?code=111&ivivuapp=1',
            callbackUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankFoodNew?code=000&ivivuapp=1'
          },
          headers:
            {}
        };
        
        request(options, function (error, response, body) {
          var rs = JSON.parse(body);
          se.activityService.objBankInStallment = rs;
          console.log(rs);
          if(rs.DataOrder && rs.DataOrder.errorCode=="000"){
            se.openWebpage(rs.DataOrder.data.checkoutUrl);
          }
        });
      }else{
        if (se.loader) {
          se.loader.dismiss();
        }
        se.presentToastWarning("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
      }
    })
  }
  validInstallment(){
    var se = this,
    res = true;
    if(!se.bankCode){
      res = false;
      se.presentToastWarning("Chưa chọn ngân hàng trả góp. Xin vui lòng chọn lại!");
    }
    else if(!se.paymentMethod){
      res = false;
      se.presentToastWarning("Chưa chọn phương thức thanh toán. Xin vui lòng chọn lại!");
    }
    else if(!se.month){
      res = false;
      se.presentToastWarning("Chưa số tháng trả góp. Xin vui lòng chọn lại!");
    }
    return res;
  }
  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  openWebpage(url: string) {
    var se=this;
      setTimeout(()=>{
        if (se.loader) {
          se.loader.dismiss();
      }
      },500)
      se.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {
          se.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded'){
                console.log(result);
                if(event && result.url.indexOf('ivivuapp') != -1){
                  let params = result.url.split('&');
                  params.forEach(element => {
                    if(element.indexOf('errorCode') != -1){
                      let errorcodes = element.split('=');
                      let errorvalue = errorcodes[1];
                      if(errorvalue == "000"){
                        se.safariViewController.hide();
                        se.activityService.installmentPaymentSuccess = true;
                        se.activityService.installmentPaymentErrorCode = "";
                        se.foodService.bookkingCode=se.bookingCode;
                        //update lại status nếu thanh toán thành công
                        se.gf.Updatefoodpaytype(se.bookingCode,3).then(datatype => {
                          se.navCtrl.navigateForward('foodinstallmentdone/'+se.bookingCode+'/'+se.startDate+'/'+se.endDate);
                        })
                      }else{
                        se.safariViewController.hide();
                        se.activityService.installmentPaymentSuccess = false;
                        if(errorvalue == "150"){
                          se.activityService.installmentPaymentErrorCode = "Thẻ bị review";
                        }
                        else if(errorvalue == "155"){
                          se.activityService.installmentPaymentErrorCode = "Đợi người mua xác nhận trả góp";
                        }
                        
                        se.navCtrl.navigateForward('foodinstallmentdone/'+se.bookingCode+'/'+se.startDate+'/'+se.endDate);
                      }
                    }
                  });
                }
              }
              else if(result.event === 'closed') 
              {
                se.presentLoader();
                //update lại status nếu thanh toán thành công
                se.gf.Updatefoodpaytype(se.bookingCode,3).then(datatype => {
                  se.checkBooking().then((data)=>{
                    if(data){
                      se.activityService.installmentPaymentSuccess = true;
                      se.foodService.bookkingCode=se.bookingCode;
                    }else{
                      se.activityService.installmentPaymentSuccess = false;
                    }
                    se.navCtrl.navigateForward('foodinstallmentdone/'+se.bookingCode+'/'+se.startDate+'/'+se.endDate);
                  })
                })
                
              }
              
            },
            (error: any) => console.error(error)
          );
  
        } else {
          // use fallback browser, example InAppBrowser
        }
      }
    );
    
  }
  async presentLoader(){
    var se = this;
    se.loader = await this.loadingCtrl.create({
      message: "",
    });
    this.loader.present();
  }
  checkBooking():Promise<any>{
    var se = this;
    
    return new Promise((resolve, reject) =>{
      //wait 5s
      setTimeout(()=>{ var options = {
        'method': 'GET',
        'url': C.urls.baseUrl.urlFood+'/api/FOBooking/GetBookingByCode?bookingCode='+ se.bookingCode+'',
        'headers': {
        }
      };
      request(options, function (error, response) { 
        if (error) throw new Error(error);
        var rs=JSON.parse(response.body);
        if (rs.response.status==3) {
          if(se.loader){
            se.loader.dismiss();
          }
          resolve(true);
        }
        else{
          if(se.loader){
            se.loader.dismiss();
          }
          resolve(false);
        }
      });
      }, 5000)
      
    })
  }
  processBooking() : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      se.gf.CreateBooking(se.foodService.objBooking).then(data => {
        data=JSON.parse(data);
        if (data.status==1) {
          se.bookingCode=data.response.bookingCode;
          se.startDate=data.response.startDate;
          se.endDate=data.response.endDate;
          resolve(data);
        }
      })
    })
      
    }
}
