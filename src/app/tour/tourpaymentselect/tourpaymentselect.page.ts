import { parse } from 'path';
import { foodService } from './../../providers/foodService';
import { Bookcombo, foodInfo } from './../../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform, ModalController, AlertController } from '@ionic/angular';
import { C } from '../../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { ActivityService, GlobalFunction } from '../../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { flightService } from '../../providers/flightService';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { BizTravelService } from '../../providers/bizTravelService';
import { tourService } from 'src/app/providers/tourService';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { FlightquickbackPage } from 'src/app/flightquickback/flightquickback.page';


@Component({
  selector: 'app-tourpaymentselect',
  templateUrl: './tourpaymentselect.page.html',
  styleUrls: ['./tourpaymentselect.page.scss'],
})
export class TourPaymentSelectPage implements OnInit {
  ischeckvisa = false;
  public loader: any;
  adult: any;
  child: any;
  totalpricedisplay: any;
  departtitle: string;
  returntitle: string;
  paymentfirst: boolean = false;
  intervalID: any;
  itemflight: any;
  jti: any;
  _windowmomo: any;
  arrbankrmb=[];
  tokenid: any;
  isbtn: boolean;
  isdisable: boolean;
  isremember: boolean;
  bookingCode: string;
  phone: any;
  blockPayCard = false;
  constructor(private navCtrl:NavController,public _flightService: flightService
    ,public gf: GlobalFunction, public loadingCtrl: LoadingController
    ,public searchhotel:SearchHotel, public storage: Storage,
    private modalCtrl: ModalController,
    private platform: Platform,
    private alertCtrl: AlertController,
    private zone: NgZone,
    public bizTravelService: BizTravelService,
    public activityService: ActivityService,
    public tourService: tourService,
    private safariViewController: SafariViewController) { 
    
    if(this.tourService.itemDetail){
      let totalPrice = ((this.tourService.itemDepartureCalendar.PriceAdultAvg ||0)* this.searchhotel.adult) + (this.tourService.itemDepartureCalendar.PriceChildAvg ? ((this.tourService.itemDepartureCalendar.PriceChildAvg || 0 )* (this.searchhotel.child || 0)) : 0);
      this.zone.run(()=>{
        this.tourService.totalPrice = totalPrice;
        this.tourService.totalPriceStr = this.gf.convertNumberToString(totalPrice);
      })

      this.tourService.departureCalendarStr = this.gf.getDayOfWeek(this.searchhotel.CheckInDate).dayname +', '+ moment(this.searchhotel.CheckInDate).format('DD') + ' tháng ' + moment(this.searchhotel.CheckInDate).format('MM') + ' ' + moment(this.searchhotel.CheckInDate).format('YYYY')
     
      this.bookingCode = this.tourService.dataBookResponse.Code;
    }
    
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })
    this.storage.get('infocus').then(infocus => {
      if (infocus) {
        this.phone = infocus.phone;
      }
    })

    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
            let text = "Bearer " + auth_token;
            let headers =
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }

            this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'tourpaymentselect', 'initpage').then((data)=>{
              if(data && data.bizAccount){
                this.zone.run(()=>{
                  this.bizTravelService.bizAccount = data.bizAccount;
                  this.bizTravelService.isCompany = true;
                })
               
              }else{
                this.bizTravelService.isCompany = false;
              }
            })
          }else{
            this.bizTravelService.isCompany = false;
          }
        });

    this.platform.ready().then(()=>{
    
      setTimeout(() => {
        clearInterval(this.intervalID);
    }, 1000 * 60 * 10);
    })

   
    //C.writePaymentLog("flight", "paymentselect", "purchase", this.bookingCode);
  }
  ngOnInit() {
  }
  
  goback()
  {
    var se = this;
    this.navCtrl.back();
  }
  
  tourpaymentbank()
  {
    clearInterval(this.intervalID);
    this.navCtrl.navigateForward('tourpaymentbank');
  }
  tourpaymentatm()
  {
    clearInterval(this.intervalID);
    this.navCtrl.navigateForward('tourpaymentatm');
  }
  tourpaymentvisa() {
   
    this.presentLoading();
    this.GeTokensOfMember(1);
  }

  openWebpage(url: string) {
    var se=this;
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
            else if(result.event === 'closed') {
            let url = C.urls.baseUrl.urlMobile + "/tour/api/BookingsApi/GetBookingByCode?code="+se.bookingCode;
              se.gf.Checkpayment(url).then((res)=>{
                let checkpay = JSON.parse(res);
                if (checkpay.Response && checkpay.Response.PaymentStatus == 3) { 
                  se.hideLoading();
                  se.gf.hideLoading();
                  if(se.safariViewController){
                    se.safariViewController.hide();
                  }
                  clearInterval(se.intervalID);
                  se.navCtrl.navigateForward('tourpaymentdone');
                }
                else if (checkpay.Response && checkpay.Response.PaymentStatus == 2)
                {
                  se.hideLoading();
                  se.gf.hideLoading();
                  if(se.safariViewController){
                    se.safariViewController.hide();
                  }
                  clearInterval(se.intervalID);
                  this.gf.showAlertTourPaymentFail(checkpay.internalNote);
                }    
              })
            }
            clearInterval(se.intervalID);
            setTimeout(() => {
              clearInterval(this.intervalID);
            }, 60000 * 15);
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }

  openWebpageMomo(url: string) {
    var se=this;
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
            else if(result.event === 'closed') {
              let url = C.urls.baseUrl.urlMobile + "/tour/api/BookingsApi/GetBookingByCode?code="+se.bookingCode;
                se.gf.Checkpayment(url).then((res)=>{
                  let checkpay = JSON.parse(res);
                  if (checkpay.Response && checkpay.Response.PaymentStatus == 3) { 
                    se.hideLoading();
                    se.gf.hideLoading();
                    if(se.safariViewController){
                      se.safariViewController.hide();
                    }
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('tourpaymentdone');
                  }
                  else if (checkpay.Response && checkpay.Response.PaymentStatus == 2)
                  {
                    se.hideLoading();
                    se.gf.hideLoading();
                    if(se.safariViewController){
                      se.safariViewController.hide();
                    }
                    clearInterval(se.intervalID);
                    this.gf.showAlertTourPaymentFail(checkpay.internalNote);
                  }        

                })
              }
                clearInterval(se.intervalID);
                setTimeout(() => {
                  clearInterval(this.intervalID);
                }, 60000 * 15);
              },
              (error: any) => console.error(error)
            );
    
          } else {
            // use fallback browser, example InAppBrowser
          }
        }
      );
      }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }

  async hideLoading(){
    if(this.loader){
      this.loader.dismiss();
    }
  }
  tourpaymentmomo(){
    this.CreateBooking('momo');
  }

  setinterval()
  {
    if (this.loader) {
      this.loader.dismiss();
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
        let url = C.urls.baseUrl.urlMobile + "/tour/api/BookingsApi/GetBookingByCode?code="+this.bookingCode;
        this.zone.run(() => {
          this.gf.Checkpayment(url).then((res) => {
            let checkpay = JSON.parse(res);
            if (checkpay.Response && checkpay.Response.PaymentStatus == 3) { 
              this.hideLoading();
              this.gf.hideLoading();
              if(this.safariViewController){
                this.safariViewController.hide();
              }
              clearInterval(this.intervalID);
              this.navCtrl.navigateForward('tourpaymentdone');
            }
            else if (checkpay.Response && checkpay.Response.PaymentStatus == 2)
            {
              this.hideLoading();
              this.gf.hideLoading();
              if(this.safariViewController){
                this.safariViewController.hide();
              }
              clearInterval(this.intervalID);
              this.gf.showAlertTourPaymentFail(checkpay.internalNote);
            }    
          
          })
        })
      
    }, 2000 * 1);

    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000 * 10.5);
  }

  createBookingTourTransaction() {
    let urlApiTrans = C.urls.baseUrl.urlMobile+'/tour/api/BookingsApi/UpdateTransaction?bookingCode='+this.bookingCode;
    let headers = {
      apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
      apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
    };
    this.gf.RequestApi('GET', urlApiTrans, headers, null , 'tourpaymentbank', 'UpdateTransaction').then((dataTrans)=>{
      console.log(dataTrans);
      if(dataTrans){
        this.navCtrl.navigateForward('/tourpaymentdone');
      }
    });
  }
  
  GeTokensOfMember(stt) {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          this.arrbankrmb=[];
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var cardname=this.getCardName(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
              this.arrbankrmb.push(item);
            }
          }
          if ( this.arrbankrmb.length>0) {
            this.arrbankrmb[0].checked=true;
            this.tokenid= this.arrbankrmb[0].id;
            this.isbtn=true;
            this.isdisable=true;
            this.ischeckvisa=true
          }
        }
      }
      if (stt==1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          if (this.bookingCode) {
            this.CreateBooking('visa');
          } 
        } 
      }
    })
  }
  next() {
   
    //this.presentLoading();
    clearInterval(this.intervalID);
    this.CreateBooking('visa');
    //this.navCtrl.navigateForward('/tourpaymentdone');
  }
  chooseacc(item)
  {
    
    this.tokenid=item.id;
    this.isbtn=true;
    this.isdisable=true;
    this.isremember=true;
  }
  nochooseacc()
  {
   
    this.tokenid="";
    this.isbtn=true;
    this.isdisable=false;
    this.isremember=true;
  }
  
  CreateBooking(paymentType)
  {
    var se=this;
    let itemcache = this.tourService;
    se.createBookingTour().then((bookingCode) => {
      if(bookingCode){
        se.bookingCode = bookingCode;
        let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + itemcache.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.phone + '&memberId=' + se.jti + '&TokenId='+(se.tokenid ? se.tokenid : '') +'&rememberToken='+(se.isremember ? se.isremember : 'false')+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
        se.gf.CreatePayoo(url).then(datapayoo => {
          if(datapayoo.success){
            se.openWebpage(datapayoo.returnUrl);
            se.zone.run(()=>{
              se.setinterval();
            })
            se.hideLoading();
          }
          else{
            se.showAlertPaymentError();
            se.hideLoading();
          }
        })
      }
    })
    
  }
  
  getCardName(text)
  {
    var cardStr="";
    switch (text) {
      case "MC":
        cardStr = "Mastercard";
        break;
    case "VC":
        cardStr = "Visacard";
        break;
    case "JC":
        cardStr = "JCBCard";
        break;
    case "AE":
        cardStr = "AECard";
    }
    return cardStr;
  }

  tourpaymentpayoostore() {
   //return;
    let itemcache = this.tourService;
    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_store&source=app&amount=' + itemcache.totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.phone+'&memberId='+this.jti+'&version=2';
    this.gf.CreatePayoo(url).then(datapayoo => {
      this.hideLoading();
      //datapayoo = JSON.parse(datapayoo);
      if (datapayoo.success) {
        this.tourService.BillingCode = datapayoo.payooStoreData.BillingCode;
        this.tourService.periodPaymentDate = datapayoo.payooStoreData.periodPayment;
        if (this.loader) {
          this.loader.dismiss();
        }
        // this.openWebpage(datapayoo.returnUrl);
        // this.zone.run(()=>{
        //   this.setinterval();
        // })
        this.navCtrl.navigateForward('tourpaymentpayoo/' + this.bookingCode + '/0');
      }
      else{
        this.showAlertPaymentError();
        this.hideLoading();
      }
    })
  }
  tourpaymentpayooqr() {
    var se=this;
    let itemcache = this.tourService;
    se.createBookingTour().then((bookingCode) => {
      if(bookingCode){
        se.bookingCode = bookingCode;
        let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.phone + '&memberId=' + se.jti + '&TokenId='+(se.tokenid ? se.tokenid : '') +'&rememberToken='+(se.isremember ? se.isremember : 'false')+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
        se.gf.CreatePayoo(url).then(datapayoo => {
          se.hideLoading();
          if (datapayoo.success) {
            se.tourService.qrimg = datapayoo.payooQrData.QRCodeUrl;
            se.navCtrl.navigateForward('tourpaymentpayoo/' + se.bookingCode + '/1');
          }else{
            se.hideLoading();
            se.showAlertPaymentError();
          }
        })
      }
    })
  }

    tourpaymentatoffice(){
      
      //this.gf.showLoadingwithtimeout();
      this.navCtrl.navigateForward('/tourpaymentatoffice');
    }

   
    rememberCard(){
      this.isremember=!this.isremember
    }


    paymentbiztravel(){
      if(this.bizTravelService.bizAccount.balanceAvaiable - this.activityService.objRequestAddLuggage.totalPrice<=0){
        return;
      }
      this.storage.get('auth_token').then(auth_token => {
        if(auth_token){
          var text = "Bearer " + auth_token;
          var  headers =
          {
              'cache-control': 'no-cache',
              'content-type': 'application/json',
              authorization: text
          }
          var params = {memberid: this.jti, totalprice: this.activityService.objRequestAddLuggage.totalPrice};
          this.presentLoading();
          this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
            if(data && data.error == 0){
              this.bizTravelService.phoneOtp = data.phoneOtp;
              this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
              this.bizTravelService.paymentType = 1;
              this.flightPayment().then((checkvalid) => {
                if(checkvalid){
                  this.navCtrl.navigateForward('tourpaymentdone');
                }
                
              })
              
            }else{
              this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
            }
          })
        }else{

        }
       
      })
    }

    flightPayment(): Promise<any>{
      return new Promise((resolve, reject) => {
        let itemcache = this.activityService.objRequestAddLuggage;
                  var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.phone +'&memberId='+this.jti+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
                  this.gf.CreatePayoo(url).then(datapayoo => {
                    //datapayoo = JSON.parse(datapayoo);
                    if (datapayoo.success) {
                      this.hideLoading();
                      resolve(true);
                    }else{
                      this.hideLoading();
                      resolve(false);
                      this.showAlertPaymentError();
                    }
                  })
      })
      
        
    }
  
    async showAlertPaymentError(){
      var se = this;
      let msg ='Thanh toán không thành công. Xin vui lòng thử lại sau!';
      let alert = await se.alertCtrl.create({
        message: msg,
        header: 'Rất tiếc, đã có lỗi xảy ra',
        cssClass: "cls-alert-refreshPrice",
        backdropDismiss: false,
        buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
    }

    createBookingTour():Promise<any> {
      var se = this;
      this.gf.showLoading();
      return new Promise((resolve, reject) => {
        if (se.tourService.TourBooking.CustomerEmail) {
          var Invoice=0;
          if (se.tourService.order) {
            Invoice=1;
          }
            let urlApi = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CreateBookingVerApi';
            let headers = {
              apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
              apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            };
            se.gf.RequestApi('POST', urlApi, headers, se.tourService.TourBooking, 'tourpaymentbank', 'CreateBookingVerApi').then((data)=>{
              if(data && data.Status == "Success" && data.Response && data.Response.BookingCode){
                se.tourService.tourBookingCode = data.Response.BookingCode;
                se.tourService.tourTotal = data.Response.Total;
                resolve(data.Response.BookingCode)
              }else{
                resolve(false);
              }
              se.gf.hideLoading();
            });
      }else{
        se.gf.hideLoading();
        se.gf.showToastWarning('Email không hợp lệ. Vui lòng kiểm tra lại.');
        resolve(false);
      }
      })
         
    }

    async showQuickBack(){
      const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FlightquickbackPage,
        componentProps: {
          aParameter: true,
        },
        showBackdrop: true,
        backdropDismiss: true,
        enterAnimation: CustomAnimations.iosCustomEnterAnimation,
        leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
        cssClass: "modal-flight-quick-back",
      });
    modal.present();
    }
}
