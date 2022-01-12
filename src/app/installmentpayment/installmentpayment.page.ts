import { Component, OnInit, NgZone } from '@angular/core';
import { NavController, ToastController, LoadingController } from '@ionic/angular';
import { RoomInfo, Booking, Bookcombo, SearchHotel } from '../providers/book-service';
import { ActivityService } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-installmentpayment',
  templateUrl: './installmentpayment.page.html',
  styleUrls: ['./installmentpayment.page.scss'],
})
export class InstallmentpaymentPage implements OnInit {
  ischeckpayment: boolean;
  arrchild: any;
  titlecombo: string;
  Avatar: string;
  Name: string;
  Address: string;
  cin: any;
  cout: any;
  adults: any;
  children: any;
  room: any;
  nameroom: any;
  breakfast: any;
  PriceAvgPlusTAStr: any;
  roomtype: any;
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
  loader: any;
  ischeckNote=true;
  constructor(private navCtrl: NavController,
    public Roomif: RoomInfo,
    public booking: Booking,
    public bookCombo: Bookcombo,
    public searchhotel: SearchHotel,
    public activityService: ActivityService,
    private toastCtrl: ToastController,
    private storage: Storage,
    
    private loadingCtrl: LoadingController,
    private zone: NgZone,
    private safariViewController: SafariViewController) {
    var se = this;

    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        se.auth_token = auth_token;
      }
    })
    //setTimeout(()=>{
      se.ischeckpayment = Roomif.ischeckpayment;
      se.arrchild = se.searchhotel.arrchild;
      se.titlecombo = se.bookCombo.ComboTitle;
      se.Avatar = se.Roomif.imgHotel;
      se.Name = se.booking.HotelName;
      se.Address = se.Roomif.Address;
      se.cin = se.booking.CheckInDate;
      se.cout = se.booking.CheckOutDate;
      var chuoicin = se.cin.split('-');
      var chuoicout = se.cout.split('-');
      se.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
      se.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
      se.adults = se.booking.Adults;
      se.children = se.booking.Child;
      se.room = se.Roomif.arrroom;
      se.nameroom = se.room[0].ClassName;
      se.breakfast = se.Roomif.objMealType.Name;
      se.roomtype = se.Roomif.roomtype;
      se.jsonroom = se.Roomif.jsonroom;
      //se.PriceAvgPlusTAStr = se.Roomif.priceshow;
      if(se.Roomif.priceshow){
        se.PriceAvgPlusTAStr = se.Roomif.priceshow;
      }else if(se.booking.cost){
        se.PriceAvgPlusTAStr = se.booking.cost;
      }
      //se.roomtype.PriceAvgPlusTAStr.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
      if(se.activityService.objBankInStallment){
        se.banks = se.activityService.objBankInStallment.banks.data;
      }
    //},150)
   }

  ngOnInit() {
  }

  goback(){
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

  async presentLoader(){
    var se = this;
    se.loader = await this.loadingCtrl.create({
      message: "",
    });
    this.loader.present();
  }

  installment(){
    var se = this;
    if(!se.validInstallment()){
      return;
    }
    // var req = {
    //   method: 'POST',
    //   async: false,
    //   crossDomain: true,
    //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //   url: url,
    //   data: $.param(param)
    // } 
    se.presentLoader();
    se.processBooking().then((data) => {
      if(data){
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlContracting +"/api/toolsapi/sendOrderToAlepay",
          form:
          {
            buyerEmail: se.booking.CEmail,
            buyerName: se.Roomif.hoten,
            buyerPhone: se.Roomif.phone,
            orderCode: data.code,
            orderDescription: "Thanh toan tra gop don hang:"+ data.code,
            amount: se.PriceAvgPlusTAStr.replace(/\,/g, '').replace(/\./g, ''),
            bankCode: se.bankCode,
            paymentMethod: se.paymentMethod,
            month: se.month,
            cancelUrl:'https://beta-olivia.ivivu.com/payment/Home/BlankNew?code=111&ivivuapp=1',
            callbackUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankNew?code=000&ivivuapp=1'
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
          }else{
            if (se.loader) {
              se.loader.dismiss();
            }
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

  processBooking() : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      if (se.booking.CEmail) {
        var Invoice = 0;
        if (se.Roomif.order) {
          Invoice = 1;
        }
        var jsonroom:any = se.Roomif.arrroom[0];
        //var roomclass = jsonroom.ListObjRoomClass;
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlPost + '/mInsertBooking',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'content-type': 'application/json'
          },
          body:
          {
            RoomClassObj: jsonroom.ListObjRoomClass,
            CName: se.Roomif.hoten,
            CEmail: se.booking.CEmail,
            CPhone: se.Roomif.phone,
            timestamp: Date.now(),
            HotelID: se.booking.HotelId,
            paymentMethod: "2",//payment = 8 => trả góp
            note: se.Roomif.notetotal,
            source: '6',
            MemberToken: se.auth_token,
            CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
            UsePointPrice: se.Roomif.pricepoint,
            NoteCorp: se.Roomif.order,
            Invoice: Invoice,
            UserPoints: se.Roomif.point,
            CheckInDate: se.booking.CheckInDate,
            CheckOutDate: se.booking.CheckOutDate,
            TotalNight: se.jsonroom.TotalNight,
            MealTypeIndex: se.booking.indexmealtype,
            CompanyName: se.Roomif.companyname,
            CompanyAddress: se.Roomif.address,
            CompanyTaxCode: se.Roomif.tax,
            BillingAddress: se.Roomif.addressorder,
            promotionCode:se.Roomif.promocode,
            comboid:se.bookCombo.ComboId
          },
          json: true
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "installmentPayment",
              func: "processBooking",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "installmentPayment";
            error.func = "processBooking";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          if(body)
          {
            if (body.error == 0) {
              se.booking.code = body.code;
              var code = body.code;
              var stt = body.bookingStatus;

              //se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + stt);
              resolve(body);
            }
            else {
              resolve(false);
            }
          }
          else{
            error.page = "roomadddetails";
            error.func = "paymentnotAL";
            error.param = JSON.stringify(options);
            resolve(false);
          }
        
        });
      }
    })
      
    }

    // openWebpage(url: string) {
    //   var se = this;
    //   const options: InAppBrowserOptions = {
    //     zoom: 'no',
    //     location: 'yes',
    //     toolbar: 'yes',
    //     hideurlbar: 'yes',
    //     closebuttoncaption: 'Đóng'
    //   };
    //   const browser = se.iab.create(url, '_self', options);
    //   setTimeout(()=>{
    //     if (se.loader) {
    //       se.loader.dismiss();
    //   }
    //   },500)

    //   browser.on("loadstop").subscribe(function (event) { 
    //     if(event && event.url.indexOf('ivivuapp') != -1){
    //       let params = event.url.split('&');
    //       params.forEach(element => {
    //         if(element.indexOf('errorCode') != -1){
    //           let errorcodes = element.split('=');
    //           let errorvalue = errorcodes[1];
    //           if(errorvalue == "000"){
    //             browser.close();
    //             se.activityService.installmentPaymentSuccess = true;
    //             se.activityService.installmentPaymentErrorCode = "";
    //             se.navCtrl.navigateForward('/installmentpaymentdone');
    //           }else{
    //             browser.close();
    //             se.activityService.installmentPaymentSuccess = false;
    //             if(errorvalue == "150"){
    //               se.activityService.installmentPaymentErrorCode = "Thẻ bị review";
    //             }
    //             else if(errorvalue == "155"){
    //               se.activityService.installmentPaymentErrorCode = "Đợi người mua xác nhận trả góp";
    //             }
                
    //             se.navCtrl.navigateForward('/installmentpaymentdone');
    //           }
    //         }
    //       });
    //     }
    //   });
      
    //   browser.on('exit').subscribe(() => {
    //     se.presentLoader();
    //     se.checkBooking().then((data)=>{
    //       if(data){
    //         se.activityService.installmentPaymentSuccess = true;
    //       }else{
    //         se.activityService.installmentPaymentSuccess = false;
    //       }
    //       se.navCtrl.navigateForward('/installmentpaymentdone');
    //     })
        
    //   }, err => {
    //     console.error(err);
    //   });
    //   browser.show();
  
    // }

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
                        se.navCtrl.navigateForward('/installmentpaymentdone');
                      }else{
                        se.safariViewController.hide();
                        se.activityService.installmentPaymentSuccess = false;
                        if(errorvalue == "150"){
                          se.activityService.installmentPaymentErrorCode = "Thẻ bị review";
                        }
                        else if(errorvalue == "155"){
                          se.activityService.installmentPaymentErrorCode = "Đợi người mua xác nhận trả góp";
                        }
                        
                        se.navCtrl.navigateForward('/installmentpaymentdone');
                      }
                    }
                  });
                }
              }
              else if(result.event === 'closed') 
              {
                se.presentLoader();
                se.checkBooking().then((data)=>{
                  if(data){
                    se.activityService.installmentPaymentSuccess = true;
                  }else{
                    se.activityService.installmentPaymentSuccess = false;
                  }
                  se.navCtrl.navigateForward('/installmentpaymentdone');
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

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  checkBooking():Promise<any>{
    var se = this;
    
    return new Promise((resolve, reject) =>{
      //wait 5s
      setTimeout(()=>{
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlPost + '/mCheckBooking',
          qs: { code: se.booking.code },
          headers:
          {
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roomchoosebank",
              func: "roomchoosebank-mCheckBooking",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "roomchoosebank";
            error.func = "roomchoosebank-mCheckBooking";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          };
          if (body) {
            var rs = JSON.parse(body);
            if (rs.StatusBooking == 3) {
              console.log(rs);
              // var id = rs.BookingCode;
              // var total = se.activityService.objPaymentMytrip.trip.priceShow;
              // se.Roomif.priceshowtt = se.activityService.objPaymentMytrip.trip.priceShow;
              // var ischeck = '0';
              // se.activityService.objPaymentMytrip.trip.payment_status = 1;
              if(se.loader){
                se.loader.dismiss();
              }
              resolve(true);
            }
            else {
              //alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng thử lại sau!");
              if(se.loader){
                se.loader.dismiss();
              }
              resolve(false);
            }
          }
          else {
            error.page = "roomchoosebank";
            error.func = "mCheckBooking";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            if(se.loader){
              se.loader.dismiss();
            }
            alert("Đã có sự cố xảy ra, vui lòng thử lại!");
          }
  
        });
      }, 5000)
      
    })
  }

  checknote(ev){
    this.ischeckNote = ev.detail.checked;
  }
}
