import { Component, NgZone, OnInit } from '@angular/core';
import { LoadingController, ModalController, NavController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { NetworkProvider } from '../network-provider.service';
import { foodService } from '../providers/foodService';
import { GlobalFunction } from '../providers/globalfunction';
import { MytripService } from '../providers/mytrip-service.service';
import { UserReviewsPage } from '../userreviews/userreviews';
import { OverlayEventDetail } from '@ionic/core';
import { UserFeedBackPage } from '../userfeedback/userfeedback';
import request from 'requestretry';
import * as moment from 'moment';
import { C } from './../providers/constants';
import $ from 'jquery';
import { flightService } from '../providers/flightService';
import { ValueGlobal } from '../providers/book-service';

@Component({
  selector: 'app-mytripfoodhistory',
  templateUrl: './mytripfoodhistory.page.html',
  styleUrls: ['./mytripfoodhistory.page.scss'],
})
export class MytripFoodHistoryPage implements OnInit {
  listHistoryTrips: any = [];
  historytripcount: number=0;
  isConnected: boolean;
  hasloaddata: boolean = false;
  listFoodOrders: any=[];
  selectedTab: string= "1";
  showOnlyOne: boolean;
  myloader: any;
  nodata: boolean = false;
  memberid: any;
  listWeek: any=[];
  _infiniteScroll: any;
  totalHistoryTrip: any;
  pageIndex: number = 1;
  pageSize: number = 25;

  constructor(public _mytripservice: MytripService,
    public networkProvider: NetworkProvider,
    public gf: GlobalFunction,
    private platform: Platform,
    private navCtrl: NavController,
    public _foodService: foodService,
    private zone: NgZone,
    private storage: Storage,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    public _flightService: flightService,
    public valueGlobal: ValueGlobal) { 
    this.networkProvider.getNetworkStatus().subscribe((connected: boolean) => {
      this.isConnected = connected;
      if (!this.isConnected) {
        this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
      }
    });

    this.platform.resume.subscribe(async () => {
      this.loadMytripHistory();
    })

    this.storage.get('jti').then((uid: any) => {
      if(uid){
        this.memberid = uid;
          this.gf.getCurrentPeriod().then(data => {
              if(data){
                this.listWeek.push({ id: 1, weekname: "Tuần " + moment(data.periodStartDate).format("DD.MM") + " - " + moment(data.periodEndDate).format("DD.MM"), startDate: data.periodStartDate, endDate: data.periodEndDate });
                this.listWeek.push({ id: 2, weekname: "Tuần " + moment(data.periodStartDateNextWeek).format("DD.MM") + " - " + moment(data.periodEndDateNextWeek).format("DD.MM"), startDate: data.periodStartDateNextWeek, endDate: data.periodEndDateNextWeek });
              }
          })
      }else{
          this.listFoodOrders = [];
      }
    })
  }

  ngOnInit() {
    this.loadMytripHistory();

    this._foodService.itemRefreshTripHistoryAfterReview.pipe().subscribe((data)=> {
      if(data){
        this.loadReviewMember();
      }
    })
  }

  loadMytripHistory() {
    var se = this;
    se.listFoodOrders = se._mytripservice.mylistOrders ? se._mytripservice.mylistOrders : [];
    se.historytripcount = se.listHistoryTrips ? se.listHistoryTrips.length : 0;
    se.hasloaddata = true;
    se.isConnected = true;
    let itemf = se.listFoodOrders.filter((o) => !o.isActive);
    if(itemf.length ==0){
      se.nodata = true;
    }
    else if(itemf.length ==1){
      se.showOnlyOne = itemf[0].detailBooking.length ==1 ? true : false;
      se.nodata = false;
    }
    else{
      se.zone.run(()=>{
        se._mytripservice.totalHistoryFoodCountText= " (" + itemf.length + ")";
      });
      se.showOnlyOne = false;
      se.nodata = false;
    }
  }

  goback(){
    this._mytripservice.backroute = "";
    if(this._mytripservice.rootPage == "homefood"){
      this._mytripservice.rootPage = "homefood";
      this.valueGlobal.backValue = "";
      this._foodService.menuFooterClick.emit(2);
      this.navCtrl.navigateForward('/homefood');
      this.storage.remove('TabHomeActive').then(()=>{
        this.storage.set('TabHomeActive', 3);
      })
    }
    else{
      this.navCtrl.back();
    }
  }

  gohomepage(){
    this.navCtrl.navigateRoot('/');
  }

  showOrderDetail(order,orderdetail){
    this.gf.hideStatusBar();
      this._foodService.itemOrder = order;
      this._foodService.itemOrderDetail = orderdetail;
      this.navCtrl.navigateForward("/foodmyorderdetail");
  }

  showFoodReview(detail, order){
    //Review tuần
    if(order.isOver || order.allowReview){
      this._foodService.itemOrderBookingDetail = detail;
      this._foodService.itemOrderDetail = order;
      this.navCtrl.navigateForward('/foodreviewweek');
    }
  }

  async feedback(trip: any) {
    var se = this;
    if (trip.booking_id) {
      se.gf.showLoading();
      se.checkBookingReview(trip).then((result) => {
        if (result) {
          se.showUserFeedBackPage(trip);
        }else{
          se.gf.hideLoading();
        }
      })
    }
  }

  async showUserFeedBackPage(trip) {
    var se = this;
    se.gf.setParams(trip, 'tripFeedBack');
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: UserFeedBackPage,
        componentProps: {
          aParameter: true,
        }
      });
    modal.present().then(()=>{
      se.gf.hideLoading();
    });

    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.reloadHistoryTrip();

    })
  }
  reloadHistoryTrip() {
    var se = this;
    se.presentLoadingData();
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=true&pageIndex=1&pageSize=100',
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "mytrips",
              func: "getdata",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError, response);
          }
          if (error) {
            error.page = "mytrips";
            error.func = "getdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              se.zone.run(() => {
                se.historytripcount = 0;
                se.listHistoryTrips = [];

                let lstTrips = JSON.parse(body);
                //List trip đã đi
                se.loadMytrip(lstTrips, true);
              });
            } else {
              if (response.statusCode != 200) {
                se.historytripcount = 0;
                se.listHistoryTrips = [];
                se.hasloaddata = true;
                se.hideloader();
              }
            }

          }

        });
      } else {
        se.hasloaddata = true;
        se.listHistoryTrips = [];
        se.historytripcount = 0;
        se.hideloader();
      }
    });
    setTimeout(() => {
      se.hideloader();
    }, 500)
  }

  getRatingStar(trip){
    let se = this;
    switch (trip.rating) {
      case 50:
        trip.RatingStar = "./assets/star/ic_star_5.svg";
        break;
      case 45:
        trip.RatingStar = "./assets/star/ic_star_4.5.svg";
        break;
      case 40:
        trip.RatingStar = "./assets/star/ic_star_4.svg";
        break;
      case 35:
        trip.RatingStar = "./assets/star/ic_star_3.5.svg";
        break;
      case 30:
        trip.RatingStar = "./assets/star/ic_star_3.svg";
        break;
      case 25:
        trip.RatingStar = "./assets/star/ic_star_2.5.svg";
        break;
      case 20:
        trip.RatingStar = "./assets/star/ic_star_2.svg";
        break;
      case 15:
        trip.RatingStar = "./assets/star/ic_star_1.5.svg";
        break;
      case 10:
        trip.RatingStar = "./assets/star/ic_star_1.svg";
        break;
      case 5:
        trip.RatingStar = "./assets/star/ic_star_0.5.svg";
        break;
      default:
        break;
    }
  }

  checkItemHasNotClaim(listItem) {
    var res = false;
    listItem.forEach(element => {
      if (!element.isClaim) {
        res = true;
        return;
      }
    });
    return res;
  }

  async checkBookingReview(trip): Promise<any> {
    var se = this;
    var result = false;
    return new Promise((resolve, reject) => {
      se.storage.get('auth_token').then(auth_token => {
        if (auth_token) {
          var text = "Bearer " + auth_token;
          var headerobj =
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }

          se.gf.RequestApi('GET', C.urls.baseUrl.urlSVC3 + 'review?BookingId=' + trip.booking_id, null, null, 'MyTrip', 'CheckBookingReview').then((data: any) => {
            if (data) {
              //Trả về isSuccess = true => chưa review
              //Trả về false => đã review hoặc có lỗi
              data = JSON.parse(data);
              result = data.isSuccess && !data.isReview;
              resolve(result);
            }
          });
        }
      })
    })
  }

  async presentLoadingData() {
    this.myloader = await this.loadingCtrl.create({
    });
    this.myloader.present();
  }  
  
  async hideloader() {
    var se = this;
    if (se.myloader) {
      se.myloader.dismiss();
    }
  }

  gotomenu(tabindex){
    this._foodService.tabFoodIndex = tabindex;
    this._foodService.menuFooterClick.emit(1);
    this._foodService.itemActiveFoodTab.emit(tabindex);
    $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
    $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");

    $(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
    $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
    $(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
    this._mytripservice.rootPage = "homefood";
    this.navCtrl.navigateForward('/homefood');
  }

  showtripdetail(trip){
    if(trip){
      trip.isHistoryItem = true;
      this._mytripservice.tripdetail = trip;
      this._mytripservice.backroute = "mytriphistory";
      this.navCtrl.navigateForward('mytripdetail');
    }
  }

  /***
     * Gọi tổng đài hỗ trợ
     * PDANH 26/02/2019
     */
   async makeCallSupport(phone) {
    try {
      setTimeout(() => {
        window.open(`tel:${phone}`, '_system');
      }, 10);
    }
    catch (error) {
      if (error) {
        error.page = "mytrips";
        error.func = "makeCallSupport";
        C.writeErrorLog(error, null);
      };
    }
    //google analytic
    this.gf.googleAnalytion('mytrips', 'Search', 'callsupport');
  }
  getAirportByCode(code){
    var se = this, res ="";
    if(se._flightService.listAirport && se._flightService.listAirport.length >0){
      let itemmap = se._flightService.listAirport.filter((item) => { return item.code == code});
      res = (itemmap && itemmap.length >0) ? itemmap[0].airport : ""; 
    } 
    return res;
  }

  loadOrder(memberid){
    var se = this;
        var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlFood + "/api/FOBooking/GetBookingByMember?memberid="+ se.memberid,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers:
            {
              token: "584f470f-7a45-4793-a136-0084fadea81c",
            }
          };
          request(options, function (error, response, body) {
            if(body){
                var result = JSON.parse(body);
                if(result.response){
                  se.loadReviewMember();
                 
                    se.listFoodOrders = result.response;
                    if(se.listFoodOrders && se.listFoodOrders.length >0){
                        
                        se.executeBindDetailOrder(se.listFoodOrders).then(()=>{
                            
                            se.zone.run(() => se.listFoodOrders.sort(function (a, b) {
                              let fcount = se.listFoodOrders.filter((o) => o.isActive).length;
                                let itemf = se.listFoodOrders.filter((o) => o.isActive);
                                if(itemf.length ==1){
                                  se.showOnlyOne = itemf[0].detailBooking.length ==1 ? true : false;
                                }else{
                                  se.showOnlyOne = false;
                                }
                                
                                if(se.showOnlyOne){
                                  let item = se.listFoodOrders.filter((o) => o.isActive);
                                  se.getFoodDetail(item[0]);
                                }
                                let direction = -1;
                                if (moment(a["bookingDate"]).diff(moment(b["bookingDate"]),'minutes') >0) {
                                    return 1 * direction;
                                  }
                                  else {
                                    return -1 * direction;
                                  }
                                })
                            )
                            setTimeout(()=>{
                                se.hasloaddata = true;
                                se._mytripservice.mylistOrders = se.listFoodOrders;
                            },100)
                           
                        })
                        
                        
                    }else{
                        se.listFoodOrders = [];
                        se.hasloaddata = true;
                    }
                }else{
                  se.listFoodOrders = [];
                  se.hasloaddata = true;
              }
            }
          })
    
}

executeBindDetailOrder(listorder):Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
        let count=0;
        for (let index = 0; index < listorder.length; index++) {
            const element = listorder[index];
            element.listDetailCurrentWeek = [];
            element.listDetailNextWeek = [];
            element.listDetailHistory = [];
              let timediffminutes = moment(new Date()).diff(moment(element.startDate), 'minutes');
              let timediffhours = moment(new Date()).diff(moment(element.startDate), 'hours');
              let timediffdays = moment(new Date()).diff(moment(element.endDate), 'days');
            //tạm rem
            let maxId = Math.max(...element.fobookingDetail.map(o => o.combo.categoryId), 0);
            let minId = Math.min(...element.fobookingDetail.map(o => o.combo.categoryId));
            if(minId <=24 && maxId >24){
              element.isComplexOrder = true;
            }

            if(element.isComplexOrder){
              element.detailBooking = [];
                element.fobookingDetail.forEach(elementbd => {
                  if( (moment(elementbd.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(elementbd.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate) || 
                  (moment(element.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(element.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate) )
                  {
                      elementbd.iscurrentweek = true;
                      element.hasitemcurrentweek = true;
                  }else{
                    if(moment(elementbd.startDate).diff(new Date(),'days') >0){
                      elementbd.iscurrentweek = false;
                      elementbd.isnextweek = true;
                      element.hasitemnextweek = true;
                    }
                  }

                  let timediffminutes = moment(new Date()).diff(moment(elementbd.startDate), 'minutes');
                  let timediffhours = moment(new Date()).diff(moment(elementbd.startDate), 'hours');
                  let timediffdays = moment(new Date()).diff(moment(elementbd.endDate), 'days');
                  let ishistory = moment(new Date()).diff(moment(elementbd.endDate), 'hours') >= 24 ? true : false;
                  if(element.status != 4 &&element.status != 1 && (element.status != 2 || (element.status == 2 && timediffdays <=0) )&& !ishistory){
                    if(elementbd.combo.categoryId <=24){
                      elementbd.isDinner = false;
                      if(elementbd.startDate && elementbd.endDate){
                        elementbd.nameDisplay = "Gói Tuần " + moment(elementbd.startDate).format("DD/MM") + " - "+ moment(moment(elementbd.startDate).add('days',4)).format("DD/MM");
                      }else{
                        elementbd.nameDisplay = "Gói Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
                      }
                      
  
                      element.isOver = moment(new Date()).diff(moment(elementbd.endDate), 'hours') >= 13 ? true : false;
                    
                      element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 690 ? 2 : (timediffminutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
                      element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
  
                    }else{
                      elementbd.isDinner = true;
                      elementbd.nameDisplay = elementbd.combo.category.name;
                      elementbd.weeknameDisplay = elementbd.combo.category.name;

                      if(elementbd.startDate && elementbd.endDate){
                        elementbd.weekDisplay = "Tuần "+ moment(elementbd.startDate).format("DD/MM") + " - "+ moment(moment(elementbd.startDate).add('days',4)).format("DD/MM") + " · "+(elementbd.quantity ?  elementbd.quantity : element.quantity)+ " khẩu phần";
                      }else{
                        elementbd.weekDisplay = "Tuần "+ moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM") + " · "+ (elementbd.quantity ?  elementbd.quantity : element.quantity) + " khẩu phần";
                      }
                      
                      
  
                      //element.isActive = true;
                      element.isOver = moment(new Date()).diff(moment(elementbd.endDate), 'hours') >= 19 ? true : false;
  
                      element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 1140 ? 2 : (timediffminutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
                      element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
                    }
  
                    elementbd.priceDisplay = se.gf.convertNumberToString(elementbd.itemPrice);
                    se.loadMenuOrderDetail(elementbd, element);
                  }
                  else{
                    if(element.status != 4){
                      if(elementbd.combo.categoryId <=24){
                        elementbd.isDinner = false;
                        if(elementbd.startDate && elementbd.endDate){
                          elementbd.nameDisplay = "Gói Tuần " + moment(elementbd.startDate).format("DD/MM") + " - "+ moment(moment(elementbd.startDate).add('days',4)).format("DD/MM");
                        }else{
                          elementbd.nameDisplay = "Gói Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
                        }
                        
    
                        element.isOver = moment(new Date()).diff(moment(elementbd.endDate), 'hours') >= 13 ? true : false;
                      
                        element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 690 ? 2 : (timediffminutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
                        element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
    
                      }else{
                        elementbd.isDinner = true;
                        elementbd.nameDisplay = elementbd.combo.category.name;
                        elementbd.weeknameDisplay = elementbd.combo.category.name;
  
                        if(elementbd.startDate && elementbd.endDate){
                          elementbd.weekDisplay = "Tuần "+ moment(elementbd.startDate).format("DD/MM") + " - "+ moment(moment(elementbd.startDate).add('days',4)).format("DD/MM") + " · "+(elementbd.quantity ?  elementbd.quantity : element.quantity)+ " khẩu phần";
                        }else{
                          elementbd.weekDisplay = "Tuần "+ moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM") + " · "+ (elementbd.quantity ?  elementbd.quantity : element.quantity) + " khẩu phần";
                        }
                        
                        
    
                        //element.isActive = true;
                        element.isOver = moment(new Date()).diff(moment(elementbd.endDate), 'hours') >= 19 ? true : false;
    
                        element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 1140 ? 2 : (timediffminutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
                        element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
                      }
    
                      elementbd.priceDisplay = se.gf.convertNumberToString(elementbd.itemPrice);
                      se.loadMenuOrderDetailHistory(elementbd, element);
                    }
                    element.isActive = false;
                  }
                });
            }else{
              
              let ishistory = moment(new Date()).diff(moment(element.endDate), 'hours') >= 13 ? true : false;
              if(element.status != 4 &&element.status != 1 && (element.status != 2 || (element.status == 2 && timediffdays <=0) )&& !ishistory){
                if(element.fobookingDetail && element.fobookingDetail.length >0){
                    element.detailBooking = [];
                    element.fobookingDetail.forEach(detail => {
                      
                      if( (moment(detail.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(detail.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate) 
                      || (moment(element.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(element.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate))
                        {
                            detail.iscurrentweek = true;
                            element.hasitemcurrentweek = true;
                        }else{
                          if(moment(detail.startDate).diff(moment(new Date()),'days') >0){
                            detail.iscurrentweek = false;
                            detail.isnextweek = true;
                            element.hasitemnextweek = true;
                          }
                        }
                        
                      if(detail.combo.categoryId <=24){
                        detail.isDinner = false;
                        //detail.nameDisplay = "Gói bữa ăn Tuần " + moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM");
    
                        if(detail.startDate && detail.endDate){
                          detail.nameDisplay = "Gói Tuần " + moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM");
                        }else{
                          detail.nameDisplay = "Gói Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
                        }

                        detail.isOver = moment(new Date()).diff(moment(detail.endDate), 'hours') >= 13 ? true : false;
                      
                        element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 690 ? 2 : (timediffminutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
                        element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
    
                      }else{
                        detail.isDinner = true;
                        detail.weeknameDisplay = detail.combo.category.name;
                        detail.nameDisplay = detail.combo.category.name;
                        //detail.weekDisplay = "Tuần "+ moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM") + " · "+detail.quantity + " khẩu phần";
                        if(detail.startDate && detail.endDate){
                          detail.weekDisplay = "Tuần "+ moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM") + " · "+(detail.quantity ?  detail.quantity : element.quantity) + " khẩu phần";
                        }else{
                          detail.weekDisplay = "Tuần "+ moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM") + " · "+(detail.quantity ?  detail.quantity : element.quantity) + " khẩu phần";
                        }
    
                        //detail.isActive = true;
                        element.isOver = moment(new Date()).diff(moment(element.endDate), 'hours') >= 19 ? true : false;
    
                        element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 1140 ? 2 : (timediffminutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
                        element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
                      }
                        detail.priceDisplay = se.gf.convertNumberToString(detail.itemPrice);
                        se.loadMenuOrderDetail(detail, element);
                    });

                   
                }
              }
              else{
                element.isActive = false;
                if(element.status != 4 && element.fobookingDetail && element.fobookingDetail.length >0){
                  element.detailBooking = [];
                  element.fobookingDetail.forEach(detail => {
                    
                    if( (moment(detail.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(detail.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate) 
                    || (moment(element.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(element.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate))
                      {
                          detail.iscurrentweek = true;
                          element.hasitemcurrentweek = true;
                      }else{
                        if(moment(detail.startDate).diff(moment(new Date()),'days') >0){
                          detail.iscurrentweek = false;
                          detail.isnextweek = true;
                          element.hasitemnextweek = true;
                        }
                      }
                      
                    if(detail.combo.categoryId <=24){
                      detail.isDinner = false;
  
                      if(detail.startDate && detail.endDate){
                        detail.nameDisplay = "Gói Tuần " + moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM");
                      }else{
                        detail.nameDisplay = "Gói Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
                      }

                      detail.isOver = moment(new Date()).diff(moment(detail.endDate), 'hours') >= 13 ? true : false;
                    
                      element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 690 ? 2 : (timediffminutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
                      element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
  
                    }else{
                      detail.isDinner = true;
                      detail.weeknameDisplay = detail.combo.category.name;
                      detail.nameDisplay = detail.combo.category.name;
                      if(detail.startDate && detail.endDate){
                        detail.weekDisplay = "Tuần "+ moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM") + " · "+(detail.quantity ?  detail.quantity : element.quantity) + " khẩu phần";
                      }else{
                        detail.weekDisplay = "Tuần "+ moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM") + " · "+(detail.quantity ?  detail.quantity : element.quantity) + " khẩu phần";
                      }
  
                      element.isOver = moment(new Date()).diff(moment(element.endDate), 'hours') >= 19 ? true : false;
  
                      element.statusOrder = timediffdays <= 0 ? ( timediffdays == 0 ? ( timediffminutes < 1140 ? 2 : (timediffminutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
                      element.allowReview = (element.statusOrder ==4 || (timediffdays >=1 && (element.status == 1 || element.status == 3) )) ? true : false;
                    }
                      detail.priceDisplay = se.gf.convertNumberToString(detail.itemPrice);
                      se.loadMenuOrderDetailHistory(detail, element);
                  });

                 
                }
              }
            }
            
            
            count++;
        }
        if(count == listorder.length){
            resolve(listorder);
            
        }
    })
}

loadMenuOrderDetailHistory(orderdetail, order){
  var se = this;

  let data = orderdetail.detailCombo;
  if(data){
    orderdetail.categoryId = orderdetail.combo.categoryId;
      orderdetail.menu ={};
      orderdetail.menus = [];
      orderdetail.menus.push(data.menuId2);
      orderdetail.menus.push(data.menuId3);
      orderdetail.menus.push(data.menuId4);
      orderdetail.menus.push(data.menuId5);
      orderdetail.menus.push(data.menuId6);

      if(data.menuId2){
        orderdetail.menu = data.menuId2;
      }
      if(order.statusOrder == 1){
        if(data.menuId2){
          orderdetail.menu = data.menuId2;
        }
      }else if(order.statusOrder == 2){
        let curdate = moment(order.bookingDate);
        let startdatemenu = moment(order.startDate);
        if(curdate.diff(startdatemenu,'days') == 0){
          if(data.menuId2){
            orderdetail.menu = data.menuId2;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 1){
          if(data.menuId3){
            orderdetail.menu = data.menuId3;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 2){
          if(data.menuId4){
            orderdetail.menu = data.menuId4;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 3){
          if(data.menuId5){
            orderdetail.menu = data.menuId5;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 4){
          if(data.menuId6){
            orderdetail.menu = data.menuId6;
          }
        }
        
      }
      
      se.orderMenu(orderdetail.menu);
      orderdetail.name = orderdetail.combo.category.name;
      orderdetail.typePriceId = orderdetail.combo.category.typePriceId;
      orderdetail.totalPriceDisplay = se.gf.convertNumberToString(orderdetail.itemPrice * orderdetail.quantity);
      orderdetail.image = orderdetail.detailCombo.image;
      if(orderdetail.image.indexOf('104x104') == -1){
        let urlavatar = orderdetail.image.substring(0, orderdetail.image.length - 4);
        let tail = orderdetail.image.substring(orderdetail.image.length - 4, orderdetail.image.length);
        orderdetail.image = urlavatar + "-104x104" + tail;
      }
      let extraitem = JSON.parse(orderdetail.extra);
      var extraText = "";
      if(extraitem && extraitem.length >0){
        extraText =  extraitem.map((item) => item.name).join(" · ");
      }
      orderdetail.extraDisplay = extraText;
      order.detailBooking.push(orderdetail);
      //order.isActive = true;
      orderdetail.isDinner = orderdetail.combo.categoryId >24 ? true : false;
      // if(order.isComplexOrder){
        
      //   se.listOrderDinnerActive.push(order);
      //   se.listOrderActive.push(order);
      // }else{
      //   if(order.isDinner){
      //     se.listOrderDinnerActive.push(order);
      //   }else{
      //     se.listOrderActive.push(order);
      //   }
      // }
     
      orderdetail.weekname = "Tuần " + moment(orderdetail.startDate).format('DD/MM') + " - " + moment(orderdetail.endDate).format('DD/MM');
      order.listDetailHistory.push(orderdetail);
      
  }else{
      order.isActive = false;
  }
}


loadMenuOrderDetail(orderdetail, order){
  var se = this;

  let data = orderdetail.detailCombo;
  if(data ){
    orderdetail.categoryId = orderdetail.combo.categoryId;
      orderdetail.menu ={};
      orderdetail.menus = [];
      orderdetail.menus.push(data.menuId2);
      orderdetail.menus.push(data.menuId3);
      orderdetail.menus.push(data.menuId4);
      orderdetail.menus.push(data.menuId5);
      orderdetail.menus.push(data.menuId6);

      if(data.menuId2){
        orderdetail.menu = data.menuId2;
      }
      if(order.statusOrder == 1){
        if(data.menuId2){
          orderdetail.menu = data.menuId2;
        }
      }else if(order.statusOrder == 2){
        let curdate = moment(order.bookingDate);
        let startdatemenu = moment(order.startDate);
        if(curdate.diff(startdatemenu,'days') == 0){
          if(data.menuId2){
            orderdetail.menu = data.menuId2;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 1){
          if(data.menuId3){
            orderdetail.menu = data.menuId3;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 2){
          if(data.menuId4){
            orderdetail.menu = data.menuId4;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 3){
          if(data.menuId5){
            orderdetail.menu = data.menuId5;
          }
        }
        else if(curdate.diff(startdatemenu,'days') == 4){
          if(data.menuId6){
            orderdetail.menu = data.menuId6;
          }
        }
        
      }
      
      se.orderMenu(orderdetail.menu);
      orderdetail.name = orderdetail.combo.category.name;
      orderdetail.typePriceId = orderdetail.combo.category.typePriceId;
      orderdetail.totalPriceDisplay = se.gf.convertNumberToString(orderdetail.itemPrice * orderdetail.quantity);
      orderdetail.image = orderdetail.detailCombo.image;
      if(orderdetail.image.indexOf('104x104') == -1){
        let urlavatar = orderdetail.image.substring(0, orderdetail.image.length - 4);
        let tail = orderdetail.image.substring(orderdetail.image.length - 4, orderdetail.image.length);
        orderdetail.image = urlavatar + "-104x104" + tail;
      }
      let extraitem = JSON.parse(orderdetail.extra);
      var extraText = "";
      if(extraitem && extraitem.length >0){
        extraText =  extraitem.map((item) => item.name).join(" · ");
      }
      orderdetail.extraDisplay = extraText;
      order.detailBooking.push(orderdetail);
      order.isActive = true;
      orderdetail.isDinner = orderdetail.combo.categoryId >24 ? true : false;
      // if(order.isComplexOrder){
        
      //   se.listOrderDinnerActive.push(order);
      //   se.listOrderActive.push(order);
      // }else{
      //   if(order.isDinner){
      //     se.listOrderDinnerActive.push(order);
      //   }else{
      //     se.listOrderActive.push(order);
      //   }
      // }
      if(orderdetail.iscurrentweek){
        order.listDetailCurrentWeek.push(orderdetail);
      }else if(orderdetail.isnextweek){
        order.listDetailNextWeek.push(orderdetail);
      }
      else{
        if(!order.isOver){
          orderdetail.weekname = "Tuần " + moment(orderdetail.startDate).format('DD/MM') + " - " + moment(orderdetail.endDate).format('DD/MM');
          order.listDetailHistory.push(orderdetail);
        }else{
          order.isActive = false;
          orderdetail.weekname = "Tuần " + moment(orderdetail.startDate).format('DD/MM') + " - " + moment(orderdetail.endDate).format('DD/MM');
          order.listDetailHistory.push(orderdetail);
          
          
        }
        
      }
      
  }else{
      order.isActive = false;
  }
//  })
}

orderMenu(menu){
  this.zone.run(() => {
    menu.listmenu = [];
    if(menu && menu.forecipe && menu.forecipe.length>0){
      menu.forecipe.forEach(element => {
        if(element.type == 5){
          menu.listmenu.push(element);
        }
        if(element.type == 4 || element.type == 7 || element.type ==6){
          menu.listmenu.push(element);
        }
        if(element.type == 3 || element.type == 8){
          menu.listmenu.push(element);
        }
      });
    }
    
    }
  )
}

loadReviewMember(){
  var se = this;
  var options = {
    method: 'GET',
    url: C.urls.baseUrl.urlFood + "/api/FOReview/GetReviewByMember?memberId="+ se.memberid,
    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
    headers:
    {
      token: "584f470f-7a45-4793-a136-0084fadea81c",
    }
  };
  request(options, function (error, response, body) {
    if(body){
        var result = JSON.parse(body);
        if(result.response){
          let reviews = result.response;
          se.zone.run(()=>{
            reviews.filter((re)=>{
              let itemreview = se.listFoodOrders.filter((or)=>{
               return re.bookingId == or.id
              })

              if(itemreview && itemreview.length>0){
                itemreview.forEach(element => {
                  element.allowReview = false;
                });
              }
            })
          })
        }
      }
    })
}

  getFoodDetail(order){
    let se = this;
    
    let id = order.detailBooking[0].combo.categoryId;
            if(id){
                let element = order.detailBooking[0];
                let timediffminutes = 0,timediffhours = 0, timediffdays =0;
                if(element.startDate){
                  timediffminutes = moment(new Date()).diff(moment(element.startDate), 'minutes');
                  timediffhours = moment(new Date()).diff(moment(element.startDate), 'hours');
                  timediffdays = moment(new Date()).diff(moment(element.startDate), 'days');
                }else{
                  timediffminutes = moment(new Date()).diff(moment(order.startDate), 'minutes');
                  timediffhours = moment(new Date()).diff(moment(order.startDate), 'hours');
                  timediffdays = moment(new Date()).diff(moment(order.startDate), 'days');
                }
                
              element.menu ={};
              if(element.detailCombo.menuId2){
                element.menu = element.detailCombo.menuId2;
              }

              if(timediffdays == 0)//thứ 2
              {
                element.menu = element.detailCombo.menuId2;
                se.setOrderStatus(element, 0);

              }else if(timediffdays == 1){
                if(element.detailCombo.menuId3){
                  element.menu = element.detailCombo.menuId3;
                  se.setOrderStatus(element, 1);

                }
              }
              else if(timediffdays == 2){
                if(element.detailCombo.menuId4){
                  element.menu = element.detailCombo.menuId4;
                  se.setOrderStatus(element, 2);

                }
              }
              else if(timediffdays == 3){
                if(element.detailCombo.menuId5){
                  element.menu = element.detailCombo.menuId5;
                  se.setOrderStatus(element, 3);

                }
              }
              else if(timediffdays == 4){
                if(element.detailCombo.menuId6){
                  element.menu = element.detailCombo.menuId6;
                  se.setOrderStatus(element, 4);

                }
              }else if(timediffdays >4 ){
                element.statusOrderDetail = 4;
              }
              else{
                element.statusOrderDetail = 1;
              }
              
              se.orderMenu(element.menu);
              
                element.typePriceId = element.combo.category.typePriceId;
                element.totalPriceDisplay = this.gf.convertNumberToString(element.itemPrice* element.quantity) ;
                let extraitem = JSON.parse(element.extra);
                var extraText = "";
                if(extraitem && extraitem.length >0){
                  extraText =  extraitem.map((item) => item.name).join(" · ");
                }
                element.extraDisplay = extraText;
            }
  }

  setOrderStatus(element, count){
    var se = this;
    let curdate =  moment(element.startDate).add(count, 'days');
    let days = moment(new Date()).diff(curdate, 'days');
    let minutes:any = moment(new Date()).diff(moment(curdate), 'minutes');
    if(element.isDinner){
      element.statusOrderDetail = days <= 0 ? ( days == 0 ? ( minutes < 990 ? 2 : (minutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
    }else{
      element.statusOrderDetail = days <= 0 ? ( days == 0 ? ( minutes < 690 ? 2 : (minutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
    }
  }

  doInfinite(infiniteScroll){
    this.zone.run(() => {
      if(this.listHistoryTrips.length < this.totalHistoryTrip){
        this.pageIndex = this.pageIndex + 1;
        this.getdata(null, true);
        this._infiniteScroll = infiniteScroll;
      }
    })
  }

  getdata(token, ishistory) {
    var se = this;
    if(!se.isConnected){
      se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
      se.hasloaddata = true;
      return;
    }
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token || token) {
        var text = "Bearer " + (token ? token : auth_token);
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory='+ishistory+'&pageIndex='+se.pageIndex+'&pageSize='+se.pageSize,
          headers:
          {
            'accept': 'application/json',
            'content-type': 'application/json-patch+json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "mytrips";
            error.func = "getdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          }
          else if (response.statusCode == 401) {
            se.storage.get('jti').then((memberid) => {
              se.storage.get('deviceToken').then((devicetoken) => {
                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                  setTimeout(() => {
                    se.getdatanewtoken(token, ishistory);
                  }, 100)
                });

              })
            })
          }
          else {
            if (body) {
              se.zone.run(() => {
                let lstTrips = JSON.parse(body);
                se.loadMytrip(lstTrips, true);
                se.hideloader();
              });
            } else {
              if (response.statusCode != 200) {
                se.listHistoryTrips = [];
                se.hasloaddata = true;
                se.historytripcount = 0;
                se.hideloader();

              }
              else if (response.statusCode == 401) {
                se.storage.get('jti').then((memberid) => {
                  se.storage.get('deviceToken').then((devicetoken) => {
                    se.gf.refreshToken(memberid, devicetoken).then((token) => {
                      setTimeout(() => {
                        se.getdatanewtoken(token, ishistory);
                      }, 100)
                    });

                  })
                })
              }
            }

          }

        });
      } else {
        se.hasloaddata = true;
        se.listHistoryTrips = [];
        se.hideloader();
        se.historytripcount = 0;
      }
    });
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 1000)
  }

  getdatanewtoken(token, ishistory) {
    var se = this;
    if (token) {
      var text = "Bearer " + token;
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory='+ishistory+'&pageIndex='+se.pageIndex+'&pageSize='+se.pageSize,
        headers:
        {
          'accept': 'application/json',
          'content-type': 'application/json-patch+json',
          authorization: text
        }
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "mytrips";
          error.func = "getdata";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
        }

        else {
          if (body) {
            se.zone.run(() => {

              let lstTrips = JSON.parse(body);
              se.loadMytrip(lstTrips, true);
              se.hideloader();
            });
          } else {
            if (response.statusCode != 200) {
              se.listHistoryTrips = [];
              se.hasloaddata = true;
              se.historytripcount = 0;
              se.hideloader();

            }

          }

        }

      });
    } else {
      se.hasloaddata = true;
      se.listHistoryTrips = [];
      se.historytripcount = 0;
      se.hideloader();
    }
    setTimeout(() => {
      if (se.myloader) {
        se.myloader.dismiss();
      }
    }, 500)
  }

  loadMytrip(listtrips, ishistory) {
    var se = this;
    if(listtrips.trips && listtrips.trips.length ==0){
      se.pageIndex =1;
    }
    se.valueGlobal.countclaim = 0;
    se.totalHistoryTrip = listtrips.total;

    let lstTrips = listtrips;
   
    //List trip đã đi
    if (lstTrips && lstTrips.trips && lstTrips.trips.length > 0) {
      lstTrips.trips.forEach(elementHis => {
        if(!se.gf.checkExistsItemInArray(se.listHistoryTrips, elementHis, 'order')){
          if (elementHis.avatar) {
            let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
            let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
            elementHis.avatar157 = urlavatar + "-" + "110x157" + tail;
            elementHis.avatar104 = urlavatar + "-" + "110x104" + tail;
            elementHis.avatar110 = urlavatar + "-" + "110x118" + tail;
          } else {
            elementHis.avatar110 = "//cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x124.jpg";
          }
          elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort+", " + moment(elementHis.checkInDate).format('DD') +" thg "+moment(elementHis.checkInDate).format('MM')
          elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort+", " + moment(elementHis.checkOutDate).format('DD') +" thg "+moment(elementHis.checkOutDate).format('MM')
          se.getRatingStar(elementHis);
  
          //map thông tin giống với trip future
        if (elementHis.booking_id.indexOf("FLY") == -1 && elementHis.booking_id.indexOf("VMB") == -1 && elementHis.booking_type != "CB_FLY_HOTEL") {
          if (elementHis.flight_ticket_info && elementHis.flight_ticket_info.indexOf("VXR") != -1) {
            elementHis.booking_type = "COMBO_VXR";
          }
          if(elementHis.booking_type == "20" || elementHis.booking_id.indexOf('OFF') != -1 || elementHis.booking_id.indexOf('TO') != -1){
            elementHis.isFlyBooking = false;
              if(elementHis.hotel_name && (elementHis.room_id || elementHis.hotel_name.toUpperCase().indexOf('VOUCHER') != -1) ){
                elementHis.bookingOffType = 1;//KS
              }
              else if(elementHis.hotel_name && (elementHis.hotel_name.toUpperCase().indexOf('VIETJET') != -1 
               || elementHis.hotel_name.toUpperCase().indexOf('VIETNAM') != -1) 
               || elementHis.hotel_name.toUpperCase().indexOf('JETSTAR') != -1 
               || elementHis.hotel_name.toUpperCase().indexOf('BAMBOO') != -1
               || elementHis.hotel_name.toUpperCase().indexOf('VMB') != -1
               || elementHis.hotel_name.toUpperCase().indexOf('VÉ MÁY BAY') != -1){
                 elementHis.bookingOffType = 2;//VMB
               }
               else if(elementHis.hotel_name && (elementHis.hotel_name.toUpperCase().indexOf('TRANSFER') != -1 || elementHis.hotel_name.toUpperCase().indexOf('XE') != -1)){
                elementHis.bookingOffType = 3;//DC
               }
               else if(elementHis.booking_id.indexOf('TO') != -1){
                elementHis.bookingOffType = 4;//TOUR
               }
               
          }
          //if (elementHis.payment_status != 3 && elementHis.payment_status != -2) {
            if (elementHis.avatar && elementHis.avatar.indexOf("104x104") ==-1) {
              let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
              let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
              elementHis.avatar = urlavatar + "-" + "104x104" + tail;
            }
            if (elementHis.delivery_payment_date) {
              let arrpaymentdate = elementHis.delivery_payment_date.split("T");
              let hour ='',day='';
              let arrday;
              if(arrpaymentdate && arrpaymentdate.length >1){
                //hour = arrpaymentdate[1].substring(0,5);
                let arrhour = arrpaymentdate[1].substring(0,5).split(":");
                if(arrhour && arrhour.length>0){
                  hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                }
                  arrday = arrpaymentdate[0].split('-');
                if(arrday && arrday.length>0){
                  day = arrday[2].toString()+"-"+arrday[1].toString();
                }
              }
                elementHis.deliveryPaymentDisplay = "Trước " +hour + ", " + day;
                  let arrhours = arrpaymentdate[1].split(":");
                  let today = new Date();
                  let d = new Date(Number(arrday[0]), Number(arrday[1])-1, Number(arrday[2]),Number(arrhours[0]),Number(arrhours[1]),0);
                  let diffminutes = moment(d).diff(today, 'minutes');
                  //Quá hạn thanh toán thì không hiển thị thông tin thanh toán
                  if(diffminutes <0){
                    elementHis.deliveryPaymentDisplay = "";
                  }
            
             
              if (elementHis.extra_guest_info) {
                let arrpax = elementHis.extra_guest_info.split('|');
                if (arrpax && arrpax.length > 1 && arrpax[1] > 0) {
                  elementHis.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em";
                } else if (arrpax && arrpax.length > 1 && arrpax[1] == 0) {
                  elementHis.paxDisplay = arrpax[0].toString() + " người lớn";
                }
              }
              if (elementHis.amount_after_tax) {
                elementHis.priceShow = Math.round(elementHis.amount_after_tax).toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
              }
            }
            elementHis.isRequestTrip = false;
            //date display
            elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).daynameshort+", " + moment(elementHis.checkInDate).format('DD') +" thg "+moment(elementHis.checkInDate).format('MM')
            elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).daynameshort+", " + moment(elementHis.checkOutDate).format('DD') +" thg "+moment(elementHis.checkOutDate).format('MM')
            se.getRatingStar(elementHis);
            if (elementHis.insuranceInfo && elementHis.insuranceInfo.adultList.length > 0) {
              if (se.checkItemHasNotClaim(elementHis.insuranceInfo.adultList) || se.checkItemHasNotClaim(elementHis.insuranceInfo.childList)) {
                se.zone.run(() => {
                  se.valueGlobal.countclaim++;
                })
              }
            }
  
            //tính giờ bay
            if(elementHis.bookingsComboData && elementHis.bookingsComboData.length >0){
              let diffhours = elementHis.bookingsComboData[0].arrivalTime.replace(':','')*1 - elementHis.bookingsComboData[0].departureTime.replace(':','')*1;
              if(diffhours){
                let str = diffhours.toString();
                let m = str.substring(str.length - 2, str.length);
                let h = str.substring(0, str.length - 2);
                h = h.length <2 ? "0"+h +"h" : h +"h";
                m = m != "00" ? m + "m" : "";
                elementHis.bookingsComboData[0].flightTimeDisplay = h + m;
              }
              let ddate = elementHis.checkInDate;
              elementHis.bookingsComboData[0].checkInDisplay = se.gf.getDayOfWeek(ddate).dayname+", " + moment(ddate).format('DD') +" thg "+moment(ddate).format('MM')
              if(elementHis.bookingsComboData[1]){
                let diffhours = elementHis.bookingsComboData[1].arrivalTime.replace(':','')*1 - elementHis.bookingsComboData[1].departureTime.replace(':','')*1;
                if(diffhours){
                  let str = diffhours.toString();
                  let m = str.substring(str.length - 2, str.length);
                  let h = str.substring(0, str.length - 2);
                  h = h.length <2 ? "0"+h +"h" : h +"h";
                  m = m != "00" ? m + "m" : "";
                  elementHis.bookingsComboData[1].flightTimeDisplay = h + m;
                }
  
                let rdate = elementHis.checkOutDate;
                elementHis.bookingsComboData[1].checkOutDisplay = se.gf.getDayOfWeek(rdate).dayname+", " + moment(rdate).format('DD') +" thg "+moment(rdate).format('MM')
              }
            }
            
          //}
        }
        //list vmb
        else{
          if(elementHis.flight_ticket_info && elementHis.flight_ticket_info.indexOf("VXR") != -1){
            elementHis.booking_type = "COMBO_VXR";
          }
          //if (elementHis.payment_status != 3 && elementHis.payment_status != -2) {
            //if (elementHis.payment_status != 3) {
            if (elementHis.avatar) {
              let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
              let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
              elementHis.avatar = urlavatar + "-" + "104x104" + tail;
            }
            if(elementHis.booking_id.indexOf("FLY") != -1 || elementHis.booking_id.indexOf("VMB") != -1 || elementHis.booking_type == "CB_FLY_HOTEL"){
              elementHis.isFlyBooking = true;
              elementHis.totalpricedisplay = se.gf.convertNumberToString(Math.round(elementHis.amount_after_tax));
             
              elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).dayname +", "+ moment(elementHis.checkInDate).format("DD") + " thg " + moment(elementHis.checkInDate).format("MM");
              elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).dayname +", "+ moment(elementHis.checkOutDate).format("DD") + " thg " + moment(elementHis.checkOutDate).format("MM");
              let departFlight = elementHis.bookingsComboData.filter((f) => { return f.departureDate == elementHis.checkInStr && elementHis.airlineCode});
              if(departFlight && departFlight.length >0){
                elementHis.itemdepart = departFlight[0];
               
              }else{
                elementHis.itemdepart = elementHis.bookingsComboData[0];
                
              }
              elementHis.flightFrom = elementHis.itemdepart.flightFrom;
              elementHis.flightTo = elementHis.itemdepart.flightTo;
              elementHis.departAirport = se.getAirportByCode(elementHis.itemdepart.departCode);
              elementHis.returnAirport = se.getAirportByCode(elementHis.itemdepart.arrivalCode);
              
              let idxlug =0;
              elementHis.textChildDisplay = "";
              elementHis.bookingsComboData.forEach(el => {
               
                if(el.airlineName.indexOf('Vietnam Airlines') != -1 ){
                  //chặng dừng
                  if(el.flightNumner.indexOf(',') != -1){
                    let fnstring = el.flightNumner.split(',')[0].trim();
                    let fn = fnstring.substring(2, el.flightNumner.length)*1;
                    if(fn >= 6000){
                      el.operatedBy = "Khai thác bởi Pacific Airlines";
                    }
                  }else{//bay thẳng
                    let fn = el.flightNumner.substring(2, el.flightNumner.length)*1;
                    if(fn >= 6000){
                      el.operatedBy = "Khai thác bởi Pacific Airlines";
                    }
                  }
                  
                }
                
                  if(el.passengers && el.passengers.length >0){
                    for (let index = 0; index < el.passengers.length; index++) {
                      el.passengers[index].arrlug = [];
                    }
                    for (let index = 0; index < el.passengers.length; index++) {
                      const elementHislug = el.passengers[index];
                      let departElementHisLug= null;
                      if(idxlug ==1){
                        departElementHisLug = elementHis.bookingsComboData[idxlug-1].passengers;
                      }
                      
                      if(elementHislug.hanhLy && elementHislug.hanhLy.indexOf(':') == -1 && (elementHislug.hanhLy.replace('kg',''))*1 >0){
                        if(idxlug ==1){
                          if(departElementHisLug){
                            let itemfilter = departElementHisLug.filter((l) => { return l.arrlug && l.name == elementHislug.name});
                            if(itemfilter && itemfilter.length >0){
                              itemfilter[0].arrlug.push({lugname: el.departCode + " - " + el.arrivalCode , lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy})
                            }
                          }else{
                            elementHislug.arrlug.push({lugname: el.departCode + " - " + el.arrivalCode , lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy})
                          }
                        }else{
                            if(elementHislug.arrlug.length >0){
                              let itemfilter = elementHislug.arrlug.filter((l) => { return l.paxname == elementHislug.name});
                              if(itemfilter && itemfilter.length >0){
                                itemfilter[0].arrlug.push({lugname: el.departCode + " - " + el.arrivalCode , lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy})
                              }
                          }else{
                            elementHislug.arrlug.push({lugname: el.departCode + " - " + el.arrivalCode , lugweight: elementHislug.hanhLy, lugprice: elementHislug.giaTienHanhLy})
                          }
                        }
                        
                      }
                    
                    }
                   
                  }
                  
                  idxlug++;
              })
  
              if(elementHis.bookingsComboData.length >1){
                let returnFlight = elementHis.bookingsComboData.filter((f) => { return f.departureDate == elementHis.checkOutStr && elementHis.airlineCode});
                if(returnFlight && returnFlight.length >0){
                  elementHis.itemreturn = returnFlight[0];
                  
                }else{
                  elementHis.itemreturn = elementHis.bookingsComboData[1];
                
                }
                  elementHis.textReturn = se.gf.getDayOfWeek(elementHis.itemreturn.departureDate).daynameshort + ', ' + elementHis.itemreturn.departureDate;
              }
      
              if(elementHis.bookingsComboData && elementHis.bookingsComboData[0].passengers && elementHis.bookingsComboData[0].passengers.length >0){
                elementHis.adult =0;
                elementHis.child =0;
                elementHis.infant =0;
  
                elementHis.bookingsComboData[0].passengers.forEach( (elementHislug, index) => {
                  let yearold = 18;
                  
                  if(elementHislug.dob){
                    let arr = elementHislug.dob.split('/');
                    let newdob = new Date(arr[2], arr[1]-1, arr[0]);
                    yearold = moment(elementHis.checkInDate).diff(moment(newdob), 'years');
  
                    elementHislug.isAdult = yearold > 12 ? true : false;
                    if(elementHislug.isAdult){
                      elementHis.adult += 1;
                    }else{
                      if(!elementHis.textChildDisplay){
                        elementHis.textChildDisplay = "(";
                      }
                        if(yearold< 2){
                            elementHis.infant += 1;
                            elementHislug.isInfant = true;
                            elementHis.textChildDisplay +=elementHis.textChildDisplay && elementHis.textChildDisplay.length > 1 ? ", "+(yearold >0 ? yearold : 1) : (yearold >0 ? yearold : 1);
                        }else{
                            elementHis.child += 1;
                            elementHis.textChildDisplay +=elementHis.textChildDisplay && elementHis.textChildDisplay.length > 1 ? ", "+(yearold >0 ? yearold : 1) : (yearold >0 ? yearold : 1);
                        }
                    }
                   
                      if(index == elementHis.bookingsComboData[0].passengers.length -1 && elementHis.textChildDisplay){
                          elementHis.textChildDisplay += ")";
                      }

                  }
                  
                  if(elementHislug.hanhLy && elementHislug.hanhLy.length >0 && elementHislug.hanhLy.indexOf(':') != -1){
                    elementHislug.hanhLy = elementHislug.hanhLy.replace(/\n/ig, ':');
                    let arrlug = elementHislug.hanhLy.split(':');
                    elementHislug.arrlug = [];
                    if(arrlug && arrlug.length >0){
                      let idx =0;
                      arrlug.forEach(lug => {
                        if(idx >0){
                          let arrlugname = lug;
                          if(arrlugname.length > 4){
                            arrlugname = arrlugname.substring(0,4);
                          }
                          let lugweight = arrlugname.substring(0,2);
                          if(idx == 1 && lugweight >0){
                            elementHislug.arrlug.push({lugname: elementHis.bookingsComboData[0].departCode + " - " + elementHis.bookingsComboData[0].arrivalCode , lugweight: arrlugname});
                          }
                          else if(idx == 3 && lugweight >0){
                            elementHislug.arrlug.push({lugname: elementHis.bookingsComboData[0].arrivalCode + " - " + elementHis.bookingsComboData[0].departCode, lugweight: arrlugname});
                          }
                        }
                        idx++;
                      });
                    }
                  }
  
                });
              }
            }
        }
        elementHis.isRequestTrip = false;
        if(elementHis.totalPaxStr){
          elementHis.totalPaxStr = elementHis.totalPaxStr.replace('|', ',');
        }

        se.listHistoryTrips.push(elementHis);
        se.historytripcount++;
        //}
      }

       

        if (elementHis.insuranceInfo && elementHis.insuranceInfo.adultList.length > 0) {
          if (se.checkItemHasNotClaim(elementHis.insuranceInfo.adultList) || se.checkItemHasNotClaim(elementHis.insuranceInfo.childList)) {
            se.zone.run(() => {
              se.valueGlobal.countclaim++;
            })
          }
        }
      });
    }
      

      se._mytripservice.listHistoryTrips = se.listHistoryTrips;

      //se.historytripcounttext = " (" + se.historytripcount + ")";
    
    if(se._infiniteScroll && se._infiniteScroll.target){
      se._infiniteScroll.target.complete();
    }
    
    se.hideloader();
  }

}



