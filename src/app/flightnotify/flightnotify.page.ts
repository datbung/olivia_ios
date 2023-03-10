import * as $ from "jquery";
import { Component, OnInit, NgZone } from "@angular/core";
import {
  NavController,
  Platform,
  ToastController,
  ModalController,
  AlertController,
} from "@ionic/angular";
import { C } from "./../providers/constants";
import { ActivityService, GlobalFunction } from "./../providers/globalfunction";
import { Badge } from "@ionic-native/badge/ngx";
import { Storage } from "@ionic/storage";
import * as request from "requestretry";
import * as moment from "moment";
import { ValueGlobal, SearchHotel } from "../providers/book-service";
import { flightService } from "../providers/flightService";
import { tourService } from "../providers/tourService";
import { FirebaseMessaging } from "@ionic-native/firebase-messaging/ngx";
@Component({
  selector: "app-flightnotify",
  templateUrl: "./flightnotify.page.html",
  styleUrls: ["./flightnotify.page.scss"],
})
export class FlightnotifyPage {
  public items = [];
  public phone = "";
  public email = "";
  loaddatadone: boolean = false;
  public itemskeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  loadend: boolean;
  pageIndex: number = 1;
  pageSize = 10;
  isAll = true;
  isProduct = false;
  isOrder = false;
  objnotication: any;
  textnotifyType = "";
  countNoti;
  listStatus: any;
  itembookings = [];
  constructor(
    private navCtrl: NavController,
    private gf: GlobalFunction,
    public _flightService: flightService,
    public platform: Platform,
    private badge: Badge,
    private storage: Storage,
    private zone: NgZone,
    public toastCtrl: ToastController,
    public valueGlobal: ValueGlobal,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    public activityService: ActivityService,
    public tourService: tourService,
    public searchhotel: SearchHotel,
    private fcm: FirebaseMessaging
  ) {
    // get phone
    this.storage.get("phone").then((data) => {
      if (data) {
        this.phone = data;
      }
    });
    // get email
    this.storage.get("email").then((e) => {
      if (e) {
        this.email = e;
      }
    });
    this.loadUserNotificationStatus();
  }

  ngOnInit() {
    // this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
    //     if (data == 3) {
    //         this.storage.get('objnotication').then(datanoti => {
    //             if (datanoti) {
    //                 this.objnotication = datanoti;
    //             }
    //             this.loadUserNotification();
    //         })
    //     }
    // })
  }
  loadUserNotificationBooking() {
    var se = this;

    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "GET",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/GetNotificationByUserOrderIVV?pageIndex=" +
            se.pageIndex +
            "&pageSize=" +
            se.pageSize,
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body && body != "[]") {
              var data = JSON.parse(body);
              if (data && data.length > 0) {
                data.forEach(element =>{
                    if(element.notifyType != "fly" && element.notifyAction != "flychangeinfo"){
                      let arrdate = moment(element.created).format('DD/MM/YYYY/HH/mm').split('/');
                      let d = new Date(Number(arrdate[2]), Number(arrdate[1])-1, Number(arrdate[0]),Number(arrdate[3]),Number(arrdate[4]));
                      let today = new Date();
                      if( moment(today).diff(d, 'hours') <= 24){
                        let diffhours = moment(today).diff(d, 'hours');
                        element.date = moment(today).diff(d, 'hours') + " giờ trước";
                        if(diffhours == 0){
                          element.date = moment(today).diff(d, 'minutes') + " phút trước";
                        }
                        
                      }else{
                        element.date = moment(element.created).format('DD/MM/YYYY');
                      }
                      element.deleted = false;
                      if (element.memberId=='alluser') {
                        element.status=0;
                        if (this.listStatus && this.listStatus.length>0) {
                          if(se.checkItemInArray(element.id)){
                            element.status=1
                          }
                        }
                      }
                     
                    
                      if(se.itembookings.length >0){
                        if(!se.gf.checkExistsItemInArray(se.itembookings,element,'trip')){
                          se.itembookings.push(element)
                        }
                      }else{
                        se.itembookings.push(element);
                      }
                    }
                  });
                setTimeout(() => {
                    se.zone.run(() => { // count số notifi
                        // let countNoti = se.items.filter(item => {
                        //     return !item.status
                        // }).length;
                        // se.badge.set(countNoti);
                        // se.valueGlobal.countNotifi = countNoti;
                        // sort lại notifi mới nhất lên trước
                        se.sortNotifi('booking');
                      
                        se.loaddatadone = true;
                    })
                }, 100)

            }
            } else {
              se.zone.run(() => {
                se.loadend = true;
                se.loaddatadone = true;
                if (se.pageIndex == 1) {
                  se.items = [];
                  se.valueGlobal.countNotifi = 0;
                }
              });
            }
          }
        });
      } else {
        se.zone.run(() => {
          se.loadend = true;
          se.loaddatadone = true;
          if (se.pageIndex == 1) {
            se.items = [];
            se.valueGlobal.countNotifi = 0;
          }
        });
      }
    });
  }
  /**
   * Load thông báo của user
   */
  loadUserNotification() {
    var se = this;
    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "GET",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/GetNotificationByUserIVV?pageIndex=" +
            se.pageIndex +
            "&pageSize=" +
            se.pageSize,
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body && body != "[]") {
              var data = JSON.parse(body);

              if (data && data.length > 0) {
                data.forEach((element) => {
                  let arrdate = moment(element.created)
                    .format("DD/MM/YYYY/HH/mm")
                    .split("/");
                  let d = new Date(
                    Number(arrdate[2]),
                    Number(arrdate[1]) - 1,
                    Number(arrdate[0]),
                    Number(arrdate[3]),
                    Number(arrdate[4])
                  );
                  let today = new Date();
                  if (moment(today).diff(d, "hours") <= 24) {
                    let diffhours = moment(today).diff(d, "hours");
                    element.date =
                      moment(today).diff(d, "hours") + " giờ trước";
                    if (diffhours == 0) {
                      element.date =
                        moment(today).diff(d, "minutes") + " phút trước";
                    }
                  } else {
                    element.date = moment(element.created).format("DD/MM/YYYY");
                  }
                  element.deleted = false;
                  if (element.memberId == "alluser") {
                    element.status = 0;
                    if (se.listStatus && se.listStatus.length > 0) {
                      if (se.checkItemInArray(element.id)) {
                        element.status = 1;
                      }
                    }
                  }

                  if (se.items.length > 0) {
                    if (
                      !se.gf.checkExistsItemInArray(se.items, element, "trip")
                    ) {
                      se.items.push(element);
                    }
                  } else {
                    se.items.push(element);
                  }
                });
                setTimeout(() => {
                  se.zone.run(() => {
                    // count số notifi
                    // let countNoti = se.items.filter(item => {
                    //     return !item.status
                    // }).length;
                    // se.badge.set(countNoti);
                    // se.valueGlobal.countNotifi = countNoti;
                    // sort lại notifi mới nhất lên trước
                    se.sortNotifi('');

                    se.loaddatadone = true;
                  });
                }, 100);
              }
            } else {
              se.zone.run(() => {
                se.loadend = true;
                se.loaddatadone = true;
                if (se.pageIndex == 1) {
                  se.items = [];
                  se.valueGlobal.countNotifi = 0;
                }
              });
            }
          }
        });
      } else {
        se.zone.run(() => {
          se.loadend = true;
          se.loaddatadone = true;
          if (se.pageIndex == 1) {
            se.items = [];
            se.valueGlobal.countNotifi = 0;
          }
        });
      }
    });
  }

  checkItemInArray(id) {
    var co = false;
    for (let i = 0; i < this.listStatus.length; i++) {
      const element = this.listStatus[i];
      if (element == id) {
        co = true;
        break;
      }
    }
    return co;
  }
  /**
   * Thực hiện sort theo date
   */
  sortNotifi(stt) {
    var se = this;
    if (!stt) {
      if (se.items && se.items.length > 0) {
        se.zone.run(() => se.items.sort(function (a, b) {
          let direction = -1;
            if (moment(a['created']).diff(moment(b['created']), 'minutes') <0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
        }));
      }
    }else{
      if (se.itembookings && se.itembookings.length > 0) {
        se.zone.run(() => se.itembookings.sort(function (a, b) {
          let direction = -1;
            if (moment(a['created']).diff(moment(b['created']), 'minutes') <0) {
              return -1 * direction;
            }
            else {
              return 1 * direction;
            }
        }));
      }
    }
    
  }
  sortNotifibyBooking() {
    var se = this;
    if (se.items && se.items.length > 0) {
      se.zone.run(() =>
        se.items.sort(function (a, b) {
          let direction = -1;
          if (a.notifyType == "booking" && b.notifyType == "booking") {
            return -1 * direction;
          } else {
            return 1 * direction;
          }
        })
      );
    }
  }

  /**
   * Hàm set lại trạng thái thông báo
   */
  updateStatusMessage(item) {
    var se = this;
    se.items.forEach((element) => {
      if (element.id == item.id) {
        se.zone.run(() => {
          if (element.status == 0) {
            element.status = 1;
            se.valueGlobal.countNotifi--;
            se.fcm.setBadge(se.valueGlobal.countNotifi);
            // update status xuống db
            if (element.memberId == "alluser") {
              se.callUpdateStatusProduct(element);
            } else {
              se.callUpdateStatus(element);
            }
          }
          if (se.searchhotel.gbitem) {
            se.searchhotel.gbitem.hotelId = "";
          }
          if (se.searchhotel.rootPage) {
            se.searchhotel.rootPage = "";
          }
          if (element.dataLink) {
            if (element.dataLink.indexOf("tourdetail") != -1) {
              let arr = element.dataLink.replace("/", "").split("/");
              if (arr && arr.length == 2) {
                this.tourService.tourDetailId = arr[1];
                this.tourService.backPage = "hometour";
                this.navCtrl.navigateForward("/tourdetail");
              }
            } else {
              se.navCtrl.navigateForward(element.dataLink);
            }
          } else {
            if (element.memberId == "alluser") {
              if (element.bookingCode.indexOf("tourdetail") != -1) {
                let arr = element.bookingCode.replace("/", "").split("/");
                if (arr && arr.length == 2) {
                  this.tourService.tourDetailId = arr[1];
                  this.tourService.backPage = "hometour";
                  this.navCtrl.navigateForward("/tourdetail");
                }
              } else {
                if (element.bookingCode == "1") {
                  this._flightService.itemTabFlightActive.emit(true);
                  this.valueGlobal.backValue = "homeflight";
                  //this._flightService.itemFlightMytripRefresh.emit(true);
                  this._flightService.itemMenuFlightClick.emit(1);
                } else {
                  se.navCtrl.navigateForward(element.bookingCode);
                }
              }
            }
          }
        });
      }
    });

    // chuyển qua tab mytrip
    if (item && item.bookingCode && item.notifyAction != "cancel") {
      if (item.notifyAction == "sharereviewofhotel") {
        se.navCtrl.navigateForward(["/app/tabs/tab3"]);
        se.gf.setParams(item.bookingCode, "notifiBookingCode");
        se.gf.setParams(2, "selectedTab3");
      } else if (
        item.notifyType == "blog" &&
        item.notifyAction == "blogofmytrip"
      ) {
        se.valueGlobal.backValue = "tab4";
        se.navCtrl.navigateForward("/blog/" + item.bookingCode);
      } else if (
        item.notifyType == "fly" &&
        item.notifyAction == "flychangeinfo"
      ) {
        se.navCtrl.navigateForward(["/app/tabs/tab3"]);
        se.gf.setParams(item.bookingCode, "notifiBookingCode");
        se.gf.setParams(item.switchObj, "notifiSwitchObj");
      } else if (item.notifyType == "alert") {
        se.presentToastNotifi(item);
      } else {
        if (item.memberId != "alluser") {
          se.gf.setParams(item.bookingCode, "notifiBookingCode");
          //se.navCtrl.navigateForward(['/app/tabs/tab3']);
          this.mapBookingAndPayment(item.bookingCode);
        }
      }
    } else {
      // show notifi
      if (!item.dataLink) {
        if (item.flyNotify == "1") {
          se._flightService.tabFlightIndex = 1;
          se._flightService.itemMenuFlightClick.emit(1);
        } else {
          se.presentToastNotifi(item);
        }
      }
    }
  }
  mapBookingAndPayment(BookingCode: any) {
    let se = this;
    if (BookingCode) {
      // Map số bkg trong listtrip để focus vào bkg được notifi
      se.getdatamytrip().then((data) => {
        se.gf.hideLoading();
        var idxMap = data.map((item, index) => {
          return item.booking_id == BookingCode;
        });
        var itemMap = data.filter((item) => {
          return item.booking_id == BookingCode;
        });
        if (itemMap && itemMap.length > 0) {
          let idx = idxMap.findIndex((el) => {
            return el == true;
          });
          // Đã thanh toán về mytrip
          if (
            itemMap[0].payment_status == 1 ||
            itemMap[0].payment_status == 5
          ) {
            se.gf.setParams(BookingCode, "notifiBookingCode");
            se._flightService.tabFlightIndex = 2;
            se._flightService.itemMenuFlightClick.emit(2);

            $(".div-wraper-slide")
              .removeClass("cls-visible")
              .addClass("cls-disabled");
            $(".div-wraper-home")
              .removeClass("cls-visible")
              .addClass("cls-disabled");
            $(".cls-notice")
              .removeClass("cls-visible")
              .addClass("cls-disabled");
          } else {
            // Chưa thanh toán về trang thanh toán
            se.paymentselect(itemMap[0], idx);
          }
        } else {
          se.getdatamytripHis().then((data) => {
            se.gf.hideLoading();
            se.valueGlobal.BookingCodeHis = BookingCode;
            var idxMap = data.map((item, index) => {
              return item.booking_id == BookingCode;
            });
            var itemMap = data.filter((item) => {
              return item.booking_id == BookingCode;
            });
            if (itemMap && itemMap.length > 0) {
              se.gf.setParams(BookingCode, "notifiBookingCode");
              se._flightService.tabFlightIndex = 2;
              se._flightService.itemMenuFlightClick.emit(2);

              $(".div-wraper-slide")
                .removeClass("cls-visible")
                .addClass("cls-disabled");
              $(".div-wraper-home")
                .removeClass("cls-visible")
                .addClass("cls-disabled");
              $(".cls-notice")
                .removeClass("cls-visible")
                .addClass("cls-disabled");
            }
          });
        }
      });
    }
  }
  getdatamytripHis(): Promise<any> {
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      se.storage.get("auth_token").then((auth_token) => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: "GET",
            //url: C.urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
            url:
              C.urls.baseUrl.urlMobile +
              "/api/dashboard/getMyTripPaging?getall=true&getHistory=true&pageIndex=1&pageSize=100",
            headers: {
              accept: "application/json",
              "content-type": "application/json-patch+json",
              authorization: text,
            },
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "mytrips";
              error.func = "getdata";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
            } else {
              if (body) {
                se.zone.run(() => {
                  let lstTrips = JSON.parse(body);

                  resolve(lstTrips.trips);
                });
              }
            }
          });
        }
      });
    });
  }
  paymentselect(trip, tripidx) {
    var se = this;
    if (trip.amount_after_tax) {
      trip.priceShow = trip.amount_after_tax;
    }
    se.activityService.objPaymentMytrip = {
      returnPage: "mytrip",
      tripindex: tripidx,
      paymentStatus: 0,
      bookingid: trip.HotelIdERP,
      trip: trip,
    };
    if (trip.booking_type == "COMBO_FLIGHT") {
      if (trip.pay_method != 51) {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentflightcombo/1");
      }
    } else if (trip.booking_type == "COMBO_VXR") {
      if (trip.pay_method != 51) {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentcarcombo/1");
      }
    } else {
      if (trip.pay_method != 51) {
        se.navCtrl.navigateForward("/mytripaymentselect/0");
      } else {
        se.navCtrl.navigateForward("/mytripaymentselect/1");
      }
    }
  }
  getdatamytrip(): Promise<any> {
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      se.storage.get("auth_token").then((auth_token) => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var options = {
            method: "GET",
            // url: C.urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
            url:
              C.urls.baseUrl.urlMobile +
              "/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25",
            headers: {
              accept: "application/json",
              "content-type": "application/json-patch+json",
              authorization: text,
            },
          };
          request(options, function (error, response, body) {
            if (error) {
              error.page = "mytrips";
              error.func = "getdata";
              error.param = JSON.stringify(options);
              C.writeErrorLog(error, response);
            } else {
              if (body) {
                se.zone.run(() => {
                  let lstTrips = JSON.parse(body);
                  resolve(lstTrips.trips);
                });
              }
            }
          });
        }
      });
    });
  }

  /**
   * Hàm update trạng thái đã đọc thông báo
   */
  callUpdateStatus(item) {
    var se = this;
    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "POST",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/UpdateStatusNotificationOfUser",
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
          body: {
            id: item.id,
            phoneNumber: this.phone,
            email: this.email,
            memberId: auth_token,
            switchTypeOf: item.switchTypeOf,
            switchAction: item.switchAction,
            switchObj: item.switchObj,
            title: item.title,
            message: item.message,
            status: 1,
          },
          json: true,
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else if (body && body.success) {
            // se.valueGlobal.countNotifi --;
          }
        });
      }
    });
  }
  callUpdateStatusProduct(item) {
    var se = this;
    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "POST",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/UpdateStatusNotification",
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
          body: {
            Id: item.id,
          },
          json: true,
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          }
        });
      }
    });
  }
  /**
   * Hàm xóa thông báo
   */
  deleteNotifi(item) {
    var se = this;
    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "POST",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/DeleteNotificationOfUser",
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
          body: {
            id: item.id,
            phoneNumber: this.phone,
            email: this.email,
            memberId: auth_token,
            switchTypeOf: item.switchTypeOf,
            switchAction: item.switchAction,
            switchObj: item.switchObj,
            title: item.title,
            message: item.message,
            status: 1,
          },
          json: true,
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else if (body && body.success) {
            se.zone.run(() => {
              item.deleted = true;
            });
          }
        });
      }
    });
  }

  /**
   * Hàm show cảnh báo
   */
  async presentToastNotifi(item) {
    const toast = await this.toastCtrl.create({
      message: item.message,
      duration: 3000,
      position: "top",
    });
    toast.present();
  }

  public async showConfirm(msg) {
    let alert = await this.alertCtrl.create({
      message: msg,
      cssClass: "cls-alert-showmore",
      buttons: [
        {
          text: "Để sau",
          handler: () => {
            this.storage.remove("auth_token");
            this.storage.remove("email");
            this.storage.remove("username");
            this.storage.remove("jti");
            this.storage.remove("userInfoData");
            this.storage.remove("userRewardData");
            this.storage.remove("point");
            this.storage.remove("infocus");
            this.zone.run(() => {
              this.valueGlobal.countNotifi = 0;
            });
            if (this.modalCtrl) {
              this.modalCtrl.dismiss();
            }
            this.navCtrl.navigateBack("/");
          },
        },
        {
          text: "Đăng nhập",
          role: "OK",
          handler: () => {
            this.storage.remove("auth_token");
            this.storage.remove("email");
            this.storage.remove("username");
            this.storage.remove("jti");
            this.storage.remove("userInfoData");
            this.storage.remove("userRewardData");
            this.storage.remove("point");
            this.storage.remove("infocus");
            this.zone.run(() => {
              this.valueGlobal.countNotifi = 0;
            });
            // this.valueGlobal.logingoback = "MainPage";
            if (this.modalCtrl) {
              this.modalCtrl.dismiss();
            }
            this.navCtrl.navigateForward("/login");
          },
        },
      ],
    });
    alert.present();
  }

  doRefresh(event) {
    var se = this;
    se.loadUserNotification();
    setTimeout(() => {
      event.target.complete();
    }, 1500);
  }

  onSwipe(event) {
    debugger;
  }

  doInfinite(infiniteScroll) {
    this.zone.run(() => {
      this.pageIndex += 1;
      this.loadUserNotification();
      infiniteScroll.target.complete();
    });
  }

  refreshToken() {
    var se = this;
    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "GET",
          url: C.urls.baseUrl.urlMobile + "/api/Account/reloadTokenClaims",
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "tab4";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            var json = JSON.parse(body);
            if (json.auth_token) {
              se.storage.remove("auth_token");
              se.storage.set("auth_token", json.auth_token);
              se.loadUserNotification();
            }
          }
        });
      }
    });
  }
  funcAll() {
    this.isAll = true;
    this.isProduct = false;
    this.isOrder = false;
    this.textnotifyType = "";
  }
  funcProduct() {
    this.isAll = false;
    this.isProduct = true;
    this.isOrder = false;
    this.textnotifyType = "product";
    this.countNoti = this.items.filter((item) => {
      return item.notifyType == this.textnotifyType;
    }).length;
  }
  funcOrder() {
    this.isAll = false;
    this.isProduct = false;
    this.isOrder = true;
    this.textnotifyType = "booking";
    this.countNoti = this.itembookings.filter((item) => {
      return item.notifyType == this.textnotifyType;
    }).length;
  }
  loadUserNotificationStatus() {
    var se = this;

    se.storage.get("auth_token").then((auth_token) => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: "GET",
          url:
            C.urls.baseUrl.urlMobile +
            "/mobile/OliviaApis/GetNotificationStatus",
          timeout: 10000,
          maxAttempts: 5,
          retryDelay: 2000,
          headers: {
            "cache-control": "no-cache",
            "content-type": "application/json",
            authorization: text,
          },
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "inbox";
            error.func = "loadUserNotification";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body && body != "[]") {
              se.listStatus = JSON.parse(body);
            }
          }
          se.loadUserNotification();
          se.loadUserNotificationBooking();
        });
      } else {
        se.zone.run(() => {
          se.loadend = true;
          se.loaddatadone = true;
          if (se.pageIndex == 1) {
            se.items = [];
            se.valueGlobal.countNotifi = 0;
          }
        });
      }
    });
  }
  // funcOther() {
  //     this.isAll = false;
  //     this.isProduct = false;
  //     this.isOrder = false;
  //     this.isOther = true;
  //     this.textnotifyType = "other";
  //     this.countNoti = this.items.filter(item => {
  //         return item.notifyType == this.textnotifyType
  //     }).length;

  // }
}
