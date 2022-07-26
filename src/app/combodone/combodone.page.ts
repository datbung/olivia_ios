import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../providers/auth-service';
import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Booking, RoomInfo,Bookcombo, SearchHotel } from '../providers/book-service';
import * as request from 'request';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import { Facebook } from '@ionic-native/facebook/ngx';
import * as moment from 'moment';
import { Calendar } from '@ionic-native/calendar/ngx';
import { voucherService } from '../providers/voucherService';
@Component({
  selector: 'app-combodone',
  templateUrl: './combodone.page.html',
  styleUrls: ['./combodone.page.scss'],
})
export class CombodonePage implements OnInit {
  code; priceshow; text; listcars; loccation; checkreview; status; room; nameroom;payment
  constructor(public _platform: Platform, public Roomif: RoomInfo, public navCtrl: NavController, public zone: NgZone,
    public booking: Booking, public authService: AuthService, public activatedRoute: ActivatedRoute, public router: Router,
    public storage: Storage, public gf: GlobalFunction, public alertCtrl: AlertController, private launchReview: LaunchReview,public bookCombo:Bookcombo,
    public searchhotel: SearchHotel,
    private fb: Facebook, private _calendar: Calendar,
    public _voucherService: voucherService) {
      if(this._voucherService.selectVoucher){
        
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
      }
      this._voucherService.publicClearVoucherAfterPaymentDone(1);
      this.bookCombo.promoCode="";
      this.bookCombo.discountpromo=0;
      
    this.listcars = this.gf.getParams('carscombo');
    this.room = Roomif.arrroom;
    this.nameroom = this.room[0].ClassName;
    this.payment=Roomif.payment;
    this.loccation = this.listcars.TransferBooking.toPlaceName;
    this.priceshow =this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    // var ti = new Date();
    // var ho = ti.getHours();
    // if (ho > 0 && ho < 6) {
    //   this.text = '11 am cùng ngày';
    // }
    // else if (ho >= 6 && ho < 12) {
    //   this.text = '17h cùng ngày'
    // }
    // else if (ho >= 12 && ho < 20) {
    //   this.text = '20h30 cùng ngày'
    // }
    // else {
    //   this.text = '11 am hôm sau';
    // }
    this.storage.get('checkreview').then(checkreview => {
      if (checkreview == 0) {
        this.checkreview = 0;
      } else {
        this.checkreview = checkreview;
      }
    })

    let se = this;
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' ,
      'checkin_date': se.listcars.HotelBooking.CheckInDate ,'checkout_date ': se.listcars.HotelBooking.CheckOutDate,'num_adults': se.listcars.HotelBooking.Adult,'num_children': (se.listcars.HotelBooking.Child ? se.listcars.HotelBooking.Child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow) );
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
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              var data = JSON.parse(body);
              se.storage.set("email", data.email);
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
  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.status = this.Roomif.payment;
    this.checkPaymentperiod();
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
      var _timetemp=new Date(year,month-1,days,hour,minutes)
      var timetemp=new Date(year,month-1,days,hour,minutes)
      var restime = timetemp.setTime(timetemp.getTime() - (30 * 60 * 1000));
      var PaymentPeriodcovert=moment(restime).format('YYYYMMDDHHmm');
      var thu = moment(restime).format('dddd');
      // var test=moment(ti).diff(timetemp,'minutes');
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
    var value = 1;
    this.gf.setParams(value, 'seemoreblog');
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this.gf.setParams(2, 'seemoreblog');
    this.navCtrl.navigateForward('/bloglist');
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


