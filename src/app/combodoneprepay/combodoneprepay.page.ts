import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../providers/auth-service';
import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { Bookcombo, Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import * as request from 'request';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import jwt_decode from 'jwt-decode';
import { GlobalFunction } from '../providers/globalfunction';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import * as moment from 'moment';
import { voucherService } from '../providers/voucherService';
@Component({
  selector: 'app-combodoneprepay',
  templateUrl: './combodoneprepay.page.html',
  styleUrls: ['./combodoneprepay.page.scss'],
})
export class CombodoneprepayPage implements OnInit {
  code; priceshow; text; listcars; loccation; checkreview; ischeckshow; total; room; nameroom;payment
  constructor(public _platform: Platform, public navCtrl: NavController, public Roomif: RoomInfo, public activatedRoute: ActivatedRoute,
    public zone: NgZone, public booking: Booking, public authService: AuthService, public storage: Storage, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public gf: GlobalFunction,
    public searchhotel: SearchHotel,
    private fb: Facebook,
    public bookCombo: Bookcombo, private _calendar: Calendar,
    public _voucherService: voucherService) {
      if(this._voucherService.selectVoucher){
        this._voucherService.publicClearVoucherAfterPaymentDone(1);
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
      }
      this.bookCombo.promoCode="";
      this.bookCombo.discountpromo=0;
    
      this.listcars = this.gf.getParams('carscombo');
      this.room = Roomif.arrroom;
      this.nameroom = this.room[0].ClassName;
    this.loccation = this.listcars.TransferBooking.toPlaceName;
    this.priceshow = this.listcars.HotelBooking.TotalPrices.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.storage.get('checkreview').then(checkreview => {
      if (checkreview == 0) {
        this.checkreview = 0;
      } else {
        this.checkreview = checkreview;
      }
    })

    let se = this;
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel' ,'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' ,
    'checkin_date': se.listcars.HotelBooking.CheckInDate ,'checkout_date ': se.listcars.HotelBooking.CheckOutDate,'num_adults': se.listcars.HotelBooking.Adult,'num_children': (se.listcars.HotelBooking.Child ? se.listcars.HotelBooking.Child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow) );
    
    se.GetUserInfo();
  }

  ngOnInit() {
    this.code = this.activatedRoute.snapshot.paramMap.get('code');
    this.ischeckshow = this.activatedRoute.snapshot.paramMap.get('ischeck');
    this.total = this.Roomif.priceshowtt;
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
  next() {
    this.Roomif.priceshowtt = "";
    //google analytic
    //this.gf.googleAnalytion('payment','Purchases','hotelid:'+this.booking.code+'/cin:'+this.booking.CheckInDate+'/cout:'+this.booking.CheckOutDate+'/adults:'+this.booking.Adults+'/child:'+this.booking.Child+'/roomnumber:'+ this.booking.roomNb+ '/price:'+this.booking.cost);

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