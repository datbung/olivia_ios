import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController,Platform } from '@ionic/angular';
import { Booking, ValueGlobal, RoomInfo, Bookcombo, SearchHotel } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import * as request from 'requestretry';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import {FlightDeparturePage } from '../flightdeparture/flightdeparture';
import { OverlayEventDetail } from '@ionic/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
/**
 * Generated class for the FacilitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-flightcombopaymentdone',
  templateUrl: 'flightcombopaymentdone.html',
  styleUrls: ['flightcombopaymentdone.scss'],
})
export class FlightComboPaymentDonePage implements OnInit{
    code;status;priceshow;checkreview;text="";
    objectFlight;room;nameroom
    constructor(public _platform: Platform,public valueGlobal: ValueGlobal, public navCtrl: NavController, private Roomif: RoomInfo, public zone: NgZone, private launchReview: LaunchReview,
        public booking: Booking, public storage: Storage, public alertCtrl: AlertController, public value: ValueGlobal, public modalCtrl: ModalController, public gf: GlobalFunction,
        public bookCombo: Bookcombo, private activatedRoute: ActivatedRoute, public searchhotel: SearchHotel, private fb: Facebook, private _calendar: Calendar) {

          this.storage.get('checkreview').then(checkreview => {
            if (checkreview==0) {
              this.checkreview=0;
            }else
            {
              this.checkreview=checkreview;
            }
            //this.refreshToken();
          })
          this.objectFlight = this.gf.getParams('flightcombo');
          this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
          this.room = Roomif.arrroom;
          this.nameroom = this.room[0].ClassName;
            this.GetUserInfo();
           
        }

        ionViewWillEnter(){
            this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flightcombopayment', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1) }], value: this.gf.convertNumberToDouble(this.priceshow), currency: "VND"});

            let se = this;
            se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, {'fb_content_type': 'hotel'  ,'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow) ,  'fb_currency': 'VND' ,
            'checkin_date': se.booking.CheckInDate ,'checkout_date ': se.booking.CheckOutDate,'num_adults': se.searchhotel.adult,'num_children': (se.searchhotel.child ? se.searchhotel.child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow) );
              
        }

        ngOnInit(){
          var se=this;
          this.status = this.activatedRoute.snapshot.paramMap.get('stt');
          this.code=se.bookCombo.bookingcode;
          if (this.status == 'AL') {
            var options = {
              'method': 'GET',
              'url': C.urls.baseUrl.urlFlight + 'gate/apiv1/GetPeriodPayment/' + this.bookCombo.FlightCode + '',
              'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
              }
            };
            request(options, function (error, response) {
              if (error) throw new Error(error);
              var json = JSON.parse(response.body);
              var PaymentPeriod = json.periodPaymentDate;
              var ti = new Date();
              var DateNow = moment(ti).format('YYYYMMDD');
              var ho = ti.getHours();
              var addhours = moment(ti).add(1, 'hours').format('HH:mm');
              se.text = addhours + ' cùng ngày';
                if (PaymentPeriod) {
                  var PaymentPeriodcovert = moment(PaymentPeriod).format('YYYYMMDDHHmm');
                  var thu = moment(PaymentPeriod).format('dddd');
                  if (ho > 0 && ho < 6) {
                    DateNow = DateNow + '1100';
                    if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                      se.text = '11 am cùng ngày';
                    }
                    else {
                      var textthu= se.getDay(thu);
                      var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                      se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                  }
                  else if (ho >= 6 && ho < 12) {
                    DateNow = DateNow + '1700';
                    if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                      se.text = '17h cùng ngày';
                     
                    }
                    else {
                      var textthu= se.getDay(thu);
                      var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                      se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                  }
                  else if (ho >= 12 && ho < 20) {
                    DateNow = DateNow + '2030';
                    if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                      se.text = '20h30 cùng ngày'
                    }
                    else {
                      var textthu= se.getDay(thu);
                      var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                      se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
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
                      var day=moment(PaymentPeriod).format('DD')+ ' '+ 'thg' + ' ' +  moment(PaymentPeriod).format('MM') +', ' +moment(PaymentPeriod).format('YYYY') 
                      se.text = moment(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                  }
                }
                else {
                  if (ho > 0 && ho < 6) {
                    se.text = '11 am cùng ngày';
                  }
                  else if (ho >= 6 && ho < 12) {
                    se.text = '17h cùng ngày'
                  }
                  else if (ho >= 12 && ho < 20) {
                    se.text = '20h30 cùng ngày'
                  }
                  else {
                    se.text = '11 am hôm sau';
                  }
                }
            });
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
        next(){
          if (this.checkreview==0) {
            this.showConfirm();
         }
          let infant=0;
            this.booking.ChildAge.forEach(element => {
              if(element == "<1" || Number(element) < 2){
                infant +=1;
              }
            });
            // if(this.searchhotel.rootPage == "topdeallist"){
            //   this.navCtrl.navigateBack('/topdeallist');
            //   this.searchhotel.rootPage = "";
            // }else{
            //   
            // }
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
                      page: "userprofile",
                      func: "refreshToken",
                      message: response.statusMessage,
                      content: response.body,
                      type: "warning",
                      param: JSON.stringify(options)
                    };
                    C.writeErrorLog(objError,response);
                  }
                  if (error) {
                    error.page = "userprofile";
                    error.func = "refreshToken";
                    error.param =  JSON.stringify(options);
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
          addToCalendar() {
            let se = this;
            if (se._platform.is("cordova")) {
              let itemflight = this.objectFlight.FlightBooking;
              se.createCalendar(itemflight, true, true)
            }
        
          }
        
          createCalendar(itemflight, isdepart, createOrModify) {
            let se = this;
            let calOptions = se._calendar.getCalendarOptions();
        
            let strmess = `Mã đặt combo: ` + se.code + `
        
        Tên khách sạn: ` + this.booking.HotelName + 
            `
        
        Tên phòng: ` + this.nameroom + 
                `
        
        Giờ ra tàu bay: `+ (isdepart ? (moment(itemflight.departFlight.DepartTime).format("HH") + "h" + moment(itemflight.departFlight.DepartTime).format("mm")) : (moment(itemflight.returnFlight.DepartTime).format("HH") + "h" + moment(itemflight.returnFlight.DepartTime).format("mm"))) +
              `	
              
        Hành khách:
        
        `;
            //Người lớn
            itemflight.adults.forEach((elementA, index) => {
              if (index != 0) {
                strmess += `
        
        `;
              }
              strmess += index + 1 + ". " + elementA.genderdisplay + " " + elementA.hoten;
              //chuyến đi
              if (isdepart && elementA.AncillaryJson) {
                let objjson = JSON.parse(elementA.AncillaryJson);
                if (objjson && objjson.length > 0) {
                  strmess += " | ";
                  objjson.forEach((elementAncillary, indexanci) => {
                    strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                  });
                }
              }
              //chuyến về
              if (!isdepart && elementA.AncillaryReturnJson) {
                let objjson = JSON.parse(elementA.AncillaryReturnJson);
                if (objjson && objjson.length > 0) {
                  strmess += " | ";
                  objjson.forEach((elementAncillary, indexanci) => {
                    strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                  });
                }
              }
            });
            //trẻ em
            itemflight.childs.forEach((elementC, index) => {
              strmess += `
        
        `;
              strmess += (index + 1 + itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.hoten;
              if (isdepart && elementC.ancillaryJson) {
                let objjson = JSON.parse(elementC.ancillaryJson);
                if (objjson && objjson.length > 0) {
                  strmess += " | ";
                  objjson.forEach((elementAncillary, indexanci) => {
                    strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                  });
                }
              }
        
              //chuyến về
              if (!isdepart && elementC.ancillaryReturnJson) {
                let objjson = JSON.parse(elementC.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                  strmess += " | ";
                  objjson.forEach((elementAncillary, indexanci) => {
                    strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                  });
                }
              }
            });
            strmess += `
        
        `;
        
            if (itemflight.childs && itemflight.childs.length > 0) {
              strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.childs.map((c) => { return c.hoten }).join(', ') + ".";
            } else {
              strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân."
            }
        
            calOptions.firstReminderMinutes = 120;
            calOptions.calendarName = "Chuyến đi " + (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  -  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + ", " + (isdepart ? moment(itemflight.departFlight.DepartTime).format('DD/MM/YYYY') : moment(itemflight.returnFlight.DepartTime).format('DD/MM/YYYY'));
            calOptions.calendarId = 1;
            let event = {
              // title: (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  ✈  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + " (" + (isdepart ? itemflight.departFlight.FlightNumber : itemflight.returnFlight.FlightNumber) + ")",
               title: se.code+"-"+se.booking.HotelName + " (" + (isdepart ? itemflight.departFlight.FlightNumber : itemflight.returnFlight.FlightNumber) + ")",
              location: (isdepart ? itemflight.departAirport : itemflight.returnAirport),
              message: strmess,
              startDate: (isdepart ? itemflight.departFlight.DepartTime : itemflight.returnFlight.DepartTime),
              endDate: (isdepart ? itemflight.departFlight.LandingTime : itemflight.returnFlight.LandingTime),
              calOptions
            };
        
            se._calendar.hasReadWritePermission().then((allow) => {
              let sdate = new Date(event.startDate),
                edate = new Date(event.endDate);
              if (allow) {
                if (createOrModify) {//true - tạo mới
                  se.gf.showLoadingwithtimeout();
                  try {
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                   
                      if (!isdepart) {
                        se.navCtrl.navigateBack('/app/tabs/tab3/');
                        se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {
                        });
                      }
                      else{
                        let itemflight = this.objectFlight.FlightBooking;
                        se.createCalendar(itemflight, false, true)
                      } 
                       
                    });
                  } catch (error) {
                    console.log(error);
                  }
                  
                } 
              } else {
                se._calendar.requestReadWritePermission().then(() => {
        
                  if (createOrModify) {//true - tạo mới
                    se.gf.showLoadingwithtimeout();
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                 
                        se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {
        
                        });
                      
                    });
                  }
                })
              }
        
            })
          }
        }
        