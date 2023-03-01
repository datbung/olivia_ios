import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController, Platform,ToastController } from '@ionic/angular';
import { Booking, ValueGlobal, RoomInfo, Bookcombo, SearchHotel } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { voucherService } from '../providers/voucherService';
@Component({
  selector: 'app-combodonebank',
  templateUrl: './combodonebank.page.html',
  styleUrls: ['./combodonebank.page.scss'],
})
export class CombodonebankPage implements OnInit {

  code; status; priceshow=""; number; checkreview = 1;text="";
  accountNumber: any;
  bookingCode: any; textbank; bankName; url = ""; urlimgbank = ""; paymentbank; _email
  listcars; room; nameroom;
  constructor(public _platform: Platform, public valueGlobal: ValueGlobal, public navCtrl: NavController, private Roomif: RoomInfo, public zone: NgZone,
    public booking: Booking, public storage: Storage, public alertCtrl: AlertController, public value: ValueGlobal, public modalCtrl: ModalController, public gf: GlobalFunction,
    public bookCombo: Bookcombo, public clipboard: Clipboard, private activatedRoute: ActivatedRoute, private launchReview: LaunchReview, private toastCtrl: ToastController
    ,private safariViewController: SafariViewController,
    private fb: Facebook,
    public searchhotel: SearchHotel, private _calendar: Calendar,
    public _voucherService: voucherService) {
      if(this._voucherService.selectVoucher){
        
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
      }
      this.bookCombo.promoCode="";
      this.bookCombo.discountpromo=0;
      this._voucherService.publicClearVoucherAfterPaymentDone(1);
    this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.accountNumber = this.Roomif.accountNumber;
    this.textbank = this.Roomif.textbank;
    this.bankName = this.Roomif.bankName + " . " + this.Roomif.bankBranch;
    this.paymentbank = this.Roomif.paymentbank;
    let infant = 0;
    this.listcars = this.gf.getParams('carscombo');
    this.booking.ChildAge.forEach(element => {
      if (element == "<1" || Number(element) < 2) {
        infant += 1;
      }
    });
    this.room = Roomif.arrroom;
    this.nameroom = this.room[0].ClassName;
    this.getbank();
    this.storage.get('email').then(e => {
      if (e !== null) {
        this._email = e;
      }
    })
    //this.gf.googleAnalytion('flightcombopayment','purchase',this.bookCombo.titleComboShort+'|'+this.bookCombo.HotelCode+'|'+this.booking.CheckInDate+'|'+this.booking.CheckOutDate+'|'+this.booking.Adults+'|'+this.booking.Child+'|'+this.priceshow);
    //this.gf.googleAnalytionCustom('purchase', { item_category: 'flightcombopayment', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1), value: Number(this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '')), currency: "VND" });
    //this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flightcombopayment', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: moment(this.booking.CheckInDate).format("YYYY-MM-DD"), end_date: moment(this.booking.CheckOutDate).format("YYYY-MM-DD"), number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1) }], value: this.gf.convertNumberToDouble(this.priceshow), currency: "VND" });
  
    let se = this;
    se.searchhotel.totalPrice = se.priceshow;
    se.gf.logEventFirebase(se.searchhotel.paymentType,se.searchhotel, 'combodone', 'purchase', 'Combo');
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel' ,'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' ,
    'checkin_date': se.booking.CheckInDate ,'checkout_date ': se.booking.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow) );

  }

  ngOnInit() {
    var se=this;
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.status = this.Roomif.payment;
    //this.checkPaymentperiod();
    se.gf.CheckPaymentDate(this.code).then(data => {
      data=JSON.parse(data);
      this.text=moment(data.booking.DeliveryPaymentDate).format('HH:mm DD/MM/YYYY');
    })
   
  }
  checkPaymentperiod()
  {
    var ti = new Date();
    var DateNow = moment(ti).format('YYYYMMDD');
    var ho = ti.getHours();
    if (this.status == 'AL'&&this.Roomif.expiredtime) {
      var se=this;
 
      var year=Number(moment(this.Roomif.expiredtime).format("YYYY"));
      var month=Number(moment(this.Roomif.expiredtime).format("MM"));
      var days=Number(moment(this.Roomif.expiredtime).format("DD"));
      var hour=Number(moment(this.Roomif.expiredtime).format("HH"));
      var minutes=Number(moment(this.Roomif.expiredtime).format("mm"));
      var _timetemp=new Date(year,month-1,days,hour,minutes);
      var timetemp=new Date(year,month-1,days,hour,minutes)
      var restime = timetemp.setTime(timetemp.getTime() - (60 * 60 * 1000));
      var PaymentPeriodcovert=moment(restime).format('YYYYMMDDHHmm');
      var thu = moment(restime).format('dddd');
      let PaymentPeriod = this.Roomif.expiredtime;
      if(se.bookCombo.isHBEDBooking){
        if(PaymentPeriod){
          let _paymentPeriodcovert = moment(PaymentPeriod).format('YYYYMMDDHHmm');
          let _dateNow = moment(ti).add(30, 'minutes').format('YYYYMMDDHHmm');
          if (parseInt(_paymentPeriodcovert) >= parseInt(_dateNow)) {
            let addhours = moment(ti).add(30, 'minutes').format('HH:mm');
            se.text = addhours + ' cùng ngày';
          }else{
            let textthu= se.getDay(thu);
            let day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
            se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
        }else{
          let addhours = moment(ti).add(30, 'minutes').format('HH:mm');
          se.text = addhours + ' cùng ngày';
        }
        
      }else if(se.bookCombo.isAGODABooking){
        if(PaymentPeriod){
          let _paymentPeriodcovert = moment(PaymentPeriod).format('YYYYMMDDHHmm');
          let _dateNow = moment(ti).add(1, 'hours').format('YYYYMMDDHHmm');
          if (parseInt(_paymentPeriodcovert) >= parseInt(_dateNow)) {
            let addhours = moment(ti).add(1, 'hours').format('HH:mm');
            se.text = addhours + ' cùng ngày';
          }else{
            let textthu= se.getDay(thu);
            let day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
            se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
        }
        else{
          let addhours = moment(ti).add(1, 'hours').format('HH:mm');
          se.text = addhours + ' cùng ngày';
        }
        
      }
        else {
        if (ho > 0 && ho < 6) {
          DateNow = DateNow + '1100';
          if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
            se.text = '11 am cùng ngày';
          }
          else {
            var textthu= se.getDay(thu);
            if(Math.abs(moment(ti).diff(timetemp,'minutes')) < 30) {
              var day=moment(_timetemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(_timetemp).format('MM') +', ' +moment(_timetemp).format('YYYY') 
              se.text = moment(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          else{
            var day=moment(restime).format('DD')+ ' '+ 'thg' + ' ' +  moment(restime).format('MM') +', ' +moment(restime).format('YYYY') 
            se.text = moment(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
  
        
          }
        }
        else if (ho >= 6 && ho < 12) {
          DateNow = DateNow + '1700';
          if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
            se.text = '17h cùng ngày';
          
          }
          else {
            var textthu= se.getDay(thu);
            if(Math.abs(moment(ti).diff(timetemp,'minutes')) < 30) {
              var day=moment(_timetemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(_timetemp).format('MM') +', ' +moment(_timetemp).format('YYYY') 
              se.text = moment(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          else{
            var day=moment(restime).format('DD')+ ' '+ 'thg' + ' ' +  moment(restime).format('MM') +', ' +moment(restime).format('YYYY') 
            se.text = moment(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          }
        }
        else if (ho >= 12 && ho < 20) {
          DateNow = DateNow + '2030';
          if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
            se.text = '20h30 cùng ngày'
          }
          else {
            var textthu= se.getDay(thu);
            if(Math.abs(moment(ti).diff(timetemp,'minutes')) < 30) {
              var day=moment(_timetemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(_timetemp).format('MM') +', ' +moment(_timetemp).format('YYYY') 
              se.text = moment(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          else{
            var day=moment(restime).format('DD')+ ' '+ 'thg' + ' ' +  moment(restime).format('MM') +', ' +moment(restime).format('YYYY') 
            se.text = moment(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          }
        }
        else {
          var res = ti.setTime(ti.getTime() + (24 * 60 * 60 * 1000));
          var date = new Date(res);
          var checkDate = moment(date).format('YYYYMMDD') + '1100';
          if (parseInt(PaymentPeriodcovert) >= parseInt(checkDate)) {
            se.text = '11 am hôm sau';
          } else {
            var textthu= se.getDay(thu);
            if(Math.abs(moment(ti).diff(timetemp,'minutes')) < 30) {
              var day=moment(_timetemp).format('DD')+ ' '+ 'thg' + ' ' +  moment(_timetemp).format('MM') +', ' +moment(_timetemp).format('YYYY') 
              se.text = moment(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          else{
            var day=moment(restime).format('DD')+ ' '+ 'thg' + ' ' +  moment(restime).format('MM') +', ' +moment(restime).format('YYYY') 
            se.text = moment(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
          }
          }
        }
      }
    }
    else{
      if (ho > 0 && ho < 6) {
        this.text = '11 am cùng ngày';
      }
      else if (ho >= 6 && ho < 12) {
        this.text = '17h cùng ngày'
      }
      else if (ho >= 12 && ho < 20) {
        this.text = '20h30 cùng ngày'
      }
      else {
        this.text = '11 am hôm sau';
      }
    }
  }
  getDay(thu)
  {
    switch (thu) {
      case "Monday":
        thu = "Thứ 2"
        break;
      case "Tuesday":
        thu = "Thứ 3"
        break;
      case "Wednesday":
        thu = "Thứ 4"
        break;
      case "Thursday":
        thu = "Thứ 5"
        break;
      case "Friday":
        thu = "Thứ 6"
        break;
      case "Saturday":
        thu = "Thứ 7"
        break;
      default:
        thu = "Chủ nhật"
        break;
    }
    return thu;
  }
  next() {
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.gf.setParams(null, 'flightcombo');
    this.bookCombo.isAGODABooking = false;
    this.bookCombo.isHBEDBooking = false;
    this.bookCombo.roomPenalty = false;
    this.navCtrl.navigateBack('/');
  }
  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'Bạn thích iVIVU.com?',
      message: 'Đánh giá ứng dụng trên CH Play',
      cssClass: 'cls-reivewapp',
      mode: "ios",
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
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
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
  copyClipboard(type) {
    if (type == 1) {
      this.clipboard.copy(this.accountNumber);
    } else if (type == 2) {
      this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
    } else if (type == 3) {
      this.clipboard.copy(this.code);
    }
    else if (type == 4) {
      this.clipboard.copy(this.priceshow);
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
  openWebpage() {
    var se=this;
    this.safariViewController.isAvailable()
  .then((available: boolean) => {
      if (available) {
        this.safariViewController.show({
          url: this.url,
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
    }
  );
  }
  getbank() {
    switch (this.paymentbank) {
      case "41":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
        this.url = 'https://online.acb.com.vn/acbib';
        break;
      case "42":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
        this.url = 'https://www.vietcombank.com.vn/IBanking2020';
        break;
      case "43":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
        this.url = 'https://ebanking.dongabank.com.vn/khcn/';
        break;
      case "44":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
        this.url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
        break;
      case "45":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
        this.url = 'https://ebanking.vietinbank.vn/rcas';
        break;
      case "46":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
        this.url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
        break;
      case "47":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
        this.url = 'https://ibank.agribank.com.vn/ibank';
        break;
      case "48":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
        this.url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
        break;
      case "49":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
        this.url = 'https://ebanking.scb.com.vn/?module=login';
        break;
      case "50":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
        this.url = 'https://ebanking.hdbank.vn/ipc/vi/';
        break;
      case "53":
        this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
        this.url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
        break;
      default:
        break;
    }
  }
  addToCalendar() {
    let se = this;
    //se.createCalendar(true,true);
    if (se._platform.is("cordova")) {
        se.createCalendar(true,true);
    }
  }
  createCalendar(createOrModify,isdepart) {
    var se = this;
    let calOptions = se._calendar.getCalendarOptions();
    let CompanyName=(isdepart?this.listcars.TransferBooking.departTransfer.CompanyName : this.listcars.TransferBooking.returnTransfer.CompanyName)
    let Seats=(isdepart?this.listcars.TransferBooking.departTransfer.Seats : this.listcars.TransferBooking.returnTransfer.Seats)
    let strmess = `Mã đặt combo: ` + se.code + `

Tên phòng: ` + this.nameroom + 
    `

Khách hàng: ` + this.Roomif.hoten +
    `

Hãng xe: ` + CompanyName +
    `
    
Số ghế: ` + Seats

  strmess += `

`;

strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân."
    calOptions.firstReminderMinutes = 120;
    calOptions.calendarId = 1;
    let event = {
      title: se.code+"-"+se.booking.HotelName+" ("+CompanyName+")",
      location: "",
      message: strmess,
      startDate: (isdepart ?se.booking.CheckInDate+"T"+this.listcars.TransferBooking.departTransfer.DepartTime+":00" : se.booking.CheckOutDate+"T"+this.listcars.TransferBooking.returnTransfer.DepartTime+":00"),
      endDate: (isdepart ?se.booking.CheckInDate+"T"+this.listcars.TransferBooking.departTransfer.DepartTime+":59" : se.booking.CheckOutDate+"T"+this.listcars.TransferBooking.returnTransfer.DepartTime+":59"),
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
            if (!isdepart) {
              se.navCtrl.navigateBack(['/app/tabs/tab3/']);
              se._calendar.openCalendar(sdate).then(() => {
              });
            }
            else{
              se.createCalendar(true,false);
            } 
          });

        }
      } else {
        se._calendar.requestReadWritePermission().then(() => {
          if (createOrModify) {//true - tạo mới
            // se.gf.showLoadingwithtimeout();
            se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
              if (!isdepart) {
                se.navCtrl.navigateBack(['/app/tabs/tab3/']);
                se._calendar.openCalendar(new Date(se.booking.CheckInDate+"T"+this.listcars.TransferBooking.departTransfer.DepartTime+":00")).then(() => {
                });
              }
              else{
                se.createCalendar(true,false);
              } 
            });

          }
        })
      }

    })
  }
}


