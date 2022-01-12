import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth-service';
import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, Platform,AlertController, ToastController } from '@ionic/angular';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import * as request from 'request';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import jwt_decode from 'jwt-decode';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { GlobalFunction, ActivityService } from '../providers/globalfunction';

import { Clipboard } from '@ionic-native/clipboard/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import * as moment from 'moment';
import { MytripService } from '../providers/mytrip-service.service';
import { flightService } from '../providers/flightService';
import {  ValueGlobal } from './../providers/book-service';
/**
 * Generated class for the RoompaymentdoneeanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'app-roompaymentdoneean',
  templateUrl: 'roompaymentdoneean.html',
  styleUrls: ['roompaymentdoneean.scss'],
})
export class RoompaymentdoneeanPage implements OnInit {
  checkreview;
  paymentmytrip = false;
  textPayment: any;
  textLinkPayment: any;
  urlPayment: string;
  bankName: any;
  bankBranch: any;
  accountNumber: any;
  bookingCode: any;
  ischeck: boolean; ishide; code; total; companyname; address; tax; addressorder; timeStamp; jti; cin; cout; ischeckshow; ischeckpayment
  priceshow: any;texttype="đặt phòng"; nameroom = ""; room;isaddCalendar=0;payment;
  hoten="";
  HotelName="";CheckInDate;CheckOutDate;
  constructor(public _platform: Platform, public navCtrl: NavController, public Roomif: RoomInfo, public activatedRoute: ActivatedRoute,
    public zone: NgZone, public booking: Booking, public authService: AuthService, public storage: Storage, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public gf: GlobalFunction,
    public activityService: ActivityService,
    
    public clipboard: Clipboard,
    private toastCtrl: ToastController,
    public searchhotel: SearchHotel,
    private fb: Facebook, private _calendar: Calendar, public _mytripservice: MytripService,
    public _flightService: flightService,
    public valueGlobal: ValueGlobal) {
    this.ischeckpayment = Roomif.ischeckpayment;
    this.Roomif.ischeckpoint = false;
    Roomif.priceshow = "";
    this.ishide = true;
    this.storage.get('checkreview').then(checkreview => {
      if (checkreview==0) {
        this.checkreview=0;
      }else
      {
        this.checkreview=checkreview;
      }
    })
    //this.gf.googleAnalytion('payment','ecommerce_purchase',this.booking.code+'|'+this.booking.CheckInDate+'|'+this.booking.CheckOutDate+'|'+this.booking.Adults+'|'+this.booking.Child+'|'+ this.booking.roomNb+ '|'+this.booking.cost);
    //this.gf.googleAnalytionCustom('ecommerce_purchase',{item_category:'roompayment-ean' , item_name: this.booking.HotelName, item_id: this.booking.code, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate,number_of_rooms: (this.booking.roomNb ?this.booking.roomNb : 1),value: this.booking.code+'|'+this.booking.CheckInDate+'|'+this.booking.CheckOutDate+'|'+this.booking.Adults+'|'+this.booking.Child+ '|'+this.booking.cost});
 
    this.GetUserInfo();
    // if(this.activityService.objPaymentMytrip && this.activityService.objPaymentMytrip.textPayment){
    //   this.textPayment = this.activityService.objPaymentMytrip.textPayment;
    //   this.textLinkPayment = this.activityService.objPaymentMytrip.textLinkPayment;
    //   this.urlPayment = this.activityService.objPaymentMytrip.urlPayment;
    //   this.bankName = this.activityService.objPaymentMytrip.bankName;
    //   this.bankBranch = this.activityService.objPaymentMytrip.bankBranch;
    //   this.accountNumber = this.activityService.objPaymentMytrip.accountNumber;
    //   this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
    // }
    //google analytic
    // if(!(this.activityService.objPaymentMytrip && this.activityService.objPaymentMytrip.trip)){
    //   var pricestring = this.Roomif.priceshowtt ? this.Roomif.priceshowtt : this.Roomif.pricepoint;
    //   //this.gf.googleAnalytionCustom('ecommerce_purchase', { item_category: 'roompayment', item_name: this.booking.HotelName, item_id: this.booking.code, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1), value: Number(pricestring.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });
    //   this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: this.booking.HotelName, item_id: this.booking.code, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate }], value: this.gf.convertNumberToDouble(pricestring), currency: "VND" });
    // }else{
    //   if(this.activityService.objPaymentMytrip && this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.payment_status == 1)
    //   this.code = this.activityService.objPaymentMytrip.trip.HotelIdERP;
    //   this.priceshow = this.activityService.objPaymentMytrip.trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    //   this.paymentmytrip = true;
    //   this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: this.booking.HotelName, item_id: this.booking.code, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate }], value: this.gf.convertNumberToDouble(pricestring), currency: "VND" });
    // }

    
  }

  ionViewWillEnter(){
    let se = this;
    
    //google analytic
    if(!(se.activityService.objPaymentMytrip && se.activityService.objPaymentMytrip.trip)){
      this.room = this.Roomif.arrroom;
      this.nameroom = this.room[0].ClassName;
      this.payment=this.Roomif.payment;
      this.HotelName=se.booking.HotelName;
      this.hoten=se.Roomif.hoten;
      se.CheckInDate=se.booking.CheckInDate;
      se.CheckOutDate=se.booking.CheckOutDate;
      var pricestring = se.Roomif.priceshowtt ? se.Roomif.priceshowtt : se.Roomif.pricepoint;
      se.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: se.booking.HotelName, item_id: se.booking.code, start_date: se.booking.CheckInDate, end_date: se.booking.CheckOutDate }], value: se.gf.convertNumberToDouble(pricestring), currency: "VND" });

      se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(pricestring) ,  'fb_currency': 'VND' ,  
    'checkin_date': se.booking.CheckInDate ,'checkout_date ': se.booking.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
    'value': se.gf.convertNumberToDouble(pricestring) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(pricestring) );

    }else{
      if(se.activityService.objPaymentMytrip && se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.payment_status == 1)
      se.code = se.activityService.objPaymentMytrip.trip.HotelIdERP;
      if (se.activityService.objPaymentMytrip.trip.booking_type == 'COMBO_FLIGHT') {
        this.texttype="combo";
      } else if (se.activityService.objPaymentMytrip.trip.booking_type == 'COMBO_VXR') {
        this.texttype="combo";
      }
      se.nameroom=this.activityService.objPaymentMytrip.trip.room_name;
      se.priceshow = se.activityService.objPaymentMytrip.trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
      se.paymentmytrip = true;
      this.HotelName=this.activityService.objPaymentMytrip.trip.hotel_name;
      this.hoten=this.activityService.objPaymentMytrip.trip.cus_name;
      se.CheckInDate=se.activityService.objPaymentMytrip.trip.start_day;
      se.CheckOutDate=se.activityService.objPaymentMytrip.trip.checkOutDate;
      se.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: se.booking.HotelName, item_id: se.booking.code, start_date: se.booking.CheckInDate, end_date: se.booking.CheckOutDate }], value: se.gf.convertNumberToDouble(se.priceshow), currency: "VND" });

      se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' ,  
      'checkin_date': se.booking.CheckInDate ,'checkout_date ': se.booking.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
      'value': se.gf.convertNumberToDouble(se.priceshow) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow) );

    }

    
  }
  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.ischeckshow = this.activatedRoute.snapshot.paramMap.get('ischeck');
    this.total = this.Roomif.priceshowtt;
  }
  next() {
    this.Roomif.priceshowtt = "";
    
    //google analytic
    //this.gf.googleAnalytion('payment','Purchases','hotelid:'+this.booking.code+'/cin:'+this.booking.CheckInDate+'/cout:'+this.booking.CheckOutDate+'/adults:'+this.booking.Adults+'/child:'+this.booking.Child+'/roomnumber:'+ this.booking.roomNb+ '/price:'+this.booking.cost);
    
    if (this.checkreview==0) {
      this.showConfirm();
    }
    if(this.activityService.objPaymentMytrip){
      this._mytripservice.itemEnableHeader.emit(1);

      this._flightService.itemTabFlightActive.emit(true);
      this.valueGlobal.backValue = "homeflight";
      this._flightService.itemMenuFlightClick.emit(2);
      this._mytripservice.orderPageState.emit(1);
    
      this.navCtrl.navigateBack('/tabs/tab1');
    }else{
      if(this.searchhotel.rootPage == "topdeallist"){
        this.navCtrl.navigateBack('/topdeallist');
        this.searchhotel.rootPage = "";
      }else{
        this.navCtrl.navigateBack('/');
      }
    }
  }
  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roompaymentdoneean",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentdoneean";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var au = JSON.parse(body);
            se.zone.run(() => {
              se.storage.remove('auth_token');
              se.storage.set('auth_token', au.auth_token);
              var decoded = jwt_decode(au.auth_token);
              se.storage.remove('point');
              se.storage.set('point', decoded.point);
            })
          }
        })
      }
    })
  }

  clearClonePage(pagename) {
    //Xóa clone do push page
    let elements = [];
    elements = Array.from(document.querySelectorAll(pagename));
    if (elements != null && elements.length > 0) {
      elements.forEach(el => {
        if (el != null && el.length > 0) {
          el.remove();
        }
      });
    }
  }
  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'Bạn thích iVIVU.com?',
      message: 'Đánh giá ứng dụng trên App Store',
      mode: "ios",
      cssClass: 'cls-reivewapp',
      buttons: [
        {
          text: 'Hủy',
          handler: () => {
          }
        },
        {
          text: 'Đánh giá',
          role: 'OK',
          handler: () => {
            this.launchReview.launch()
              .then(() => console.log('Successfully launched store app'));
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss().then((data) => {
    })
  }
  GetUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roomdetailreview",
              func: "GetUserInfo",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            if (body) {
              var data = JSON.parse(body);
                var info;
                var checkfullname = se.validateEmail(data.fullname);
                
                if (!checkfullname) {
                  var textfullname = data.fullname.split(' ')
                  //info = { ho: textfullname[0], ten: textfullname[1], phone: data.phone }
                  if (textfullname.length > 2) {
                    let name = '';
                    for (let i = 1; i < textfullname.length; i++) {
                      if (i == 1) {
                        name += textfullname[i];
                      } else {
                        name += ' ' + textfullname[i];
                      }
                    }
                    info = { ho: textfullname[0], ten: name, phone: data.phone }
                  } else {
                    info = { ho: textfullname[0], ten: textfullname[1], phone: data.phone }
                  }
                  se.storage.set("infocus", info);
                } else {
                  info = { ho: "", ten: "", phone: data.phone }
                  se.storage.set("infocus", info);
                }
                se.storage.set("email", data.email);
                se.storage.set("jti", data.memberId);
                //se.storage.set("auth_token", body.auth_token);
                se.storage.set("username", data.fullname);
                se.storage.set("phone", data.phone);
                se.storage.set("point", data.point);
            }

          }
        });
      }
    })
  }
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  checkPayment(): Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlPost + '/mCheckBooking',
        qs: { code: se.activityService.objPaymentMytrip.trip.code },
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
          resolve(rs);
        }
        else {
          error.page = "roomchoosebank";
          error.func = "mCheckBooking";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
          alert("Đã có sự cố xảy ra, vui lòng thử lại!");
        }
  
      })
    })
    
  }

  copyClipboard(type){
    if(type == 1){
      this.clipboard.copy(this.accountNumber);
    }else if(type == 2){
      this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
    }else if(type == 3){
      this.clipboard.copy(this.bookingCode);
    }
    this.presentToastr('Đã sao chép');
  }

  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  addToCalendar() {
    let se = this;
    if (se._platform.is("cordova")) {
      if (se.isaddCalendar==0) {
        se.createCalendar(true);
      }
    }
  }
  createCalendar(createOrModify) {
    var se = this;
    this.isaddCalendar=1;
    if (!se.booking.CheckinTime) {
      se.booking.CheckinTime="14:00"
    }

    let calOptions = se._calendar.getCalendarOptions();
    let strmess = `Mã đặt phòng: ` + se.code + `

Tên phòng: ` + this.nameroom + 
    `

Khách hàng: ` + this.hoten
  strmess += `

`;
strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân."
    calOptions.firstReminderMinutes = 120;
    calOptions.calendarId = 1;
    let event = {
      title: se.code+"-"+se.HotelName,
      location: "",
      message: strmess,
      startDate: se.CheckInDate+"T"+se.booking.CheckinTime+":00",
      endDate: se.CheckInDate+"T"+se.booking.CheckinTime+":59",
      calOptions
    };
    se._calendar.hasReadWritePermission().then((allow) => {
      // let sdate = new Date(event.startDate),
      //   edate = new Date(event.endDate);
          var year=Number(moment(event.startDate).format("YYYY"));
      var month=Number(moment(event.startDate).format("MM"));
      var days=Number(moment(event.startDate).format("DD"));
      var hour=Number(moment(event.startDate).format("HH"));
      var minutes=Number(moment(event.startDate).format("mm"));
      var seconds=Number(moment(event.startDate).format("ss"));

      var yearendDate=Number(moment(event.endDate).format("YYYY"));
      var monthendDate=Number(moment(event.endDate).format("MM"));
      var daysendDate=Number(moment(event.endDate).format("DD"));
      var hourendDate=Number(moment(event.endDate).format("HH"));
      var minutesendDate=Number(moment(event.endDate).format("mm"));
      var secondssendDate=Number(moment(event.endDate).format("ss"));
      let sdate = new Date(year,month-1,days,hour,minutes,seconds),
        edate = new Date(yearendDate,monthendDate-1,daysendDate,hourendDate,minutesendDate,secondssendDate);
      if (allow) {
        if (createOrModify) {//true - tạo mới
          //se.gf.showLoadingwithtimeout();
          se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
            se._calendar.openCalendar(sdate).then(() => {
            });
          });
       
        }
      } else {
        se._calendar.requestReadWritePermission().then(() => {
          if (createOrModify) {//true - tạo mới
            // se.gf.showLoadingwithtimeout();
            se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {

              se._calendar.openCalendar(new Date(se.CheckInDate+"T"+se.booking.CheckinTime+":00")).then(() => {

              });
            });
          }
        })
      }
      se._mytripservice.itemEnableHeader.emit(1);
      se.navCtrl.navigateBack(['/app/tabs/tab3']);
     
    })
  }
}