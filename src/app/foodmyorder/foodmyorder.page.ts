import { Component, OnInit, ViewChild, HostListener, NgZone } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';
import { C } from './../providers/constants';
import { FoodfilterPage } from '../foodfilter/foodfilter.page';
import { OverlayEventDetail } from '@ionic/core';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { foodInfo } from '../providers/book-service';

@Component({
  selector: 'app-foodmyorder',
  templateUrl: './foodmyorder.page.html',
  styleUrls: ['./foodmyorder.page.scss'],
})

export class FoodmyOrderPage {
    
orders =[]
    memberid: any;
    mylistOrders: any=[];
    mylistOrdersdinner: any=[];
    itemsks = [1,2,3,4,5,6];
    loaddatadone = false;
  listOrderActive: any=[];
  public activeTab = 1;
  public taborder: string="tabordernodinner";
  listOrderDinnerActive: any=[];
  listWeek = [];
constructor(private navCtrl: NavController, private gf: GlobalFunction,
    public foodService: foodService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private storage: Storage,
    private loadCtrl: LoadingController,
    public foodInfo: foodInfo) {
      //this.gf.refreshToken();
      this.storage.get('jti').then((memberid) => {
        this.storage.get('deviceToken').then((devicetoken) => {
          this.gf.refreshToken(memberid, devicetoken).then((token) =>{
          });
  
        })
      })
        this.storage.get('jti').then((uid: any) => {
            if(uid){
                this.memberid = uid;
                this.gf.getCurrentPeriod().then(data => {
                    if(data){
                      this.listWeek.push({ id: 1, weekname: "Gói tuần " + moment(data.periodStartDate).format("DD.MM") + " - " + moment(data.periodEndDate).format("DD.MM"), startDate: data.periodStartDate, endDate: data.periodEndDate });
                      this.listWeek.push({ id: 2, weekname: "Gói tuần " + moment(data.periodStartDateNextWeek).format("DD.MM") + " - " + moment(data.periodEndDateNextWeek).format("DD.MM"), startDate: data.periodStartDateNextWeek, endDate: data.periodEndDateNextWeek });

                      this.loadOrder(uid);
                    }
                })
                
                
                
            }else{
                this.mylistOrders = [];
            }
        })
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
                  let itemreview = se.mylistOrders.filter((or)=>{
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

    ngOnInit(){
        this.foodService.menuFooterClick.pipe().subscribe(data => {
            if(data == 2){
                this.loaddatadone = false;
                this.storage.get('jti').then((uid: any) => {
                    if(uid){
                      this.gf.getCurrentPeriod().then(data => {
                        if(data){
                          this.listWeek.push({ id: 1, weekname: "Gói bữa ăn tuần " + moment(data.periodStartDate).format("DD.MM") + " - " + moment(data.periodEndDate).format("DD.MM"), startDate: data.periodStartDate, endDate: data.periodEndDate });
                          this.listWeek.push({ id: 2, weekname: "Gói bữa ăn tuần " + moment(data.periodStartDateNextWeek).format("DD.MM") + " - " + moment(data.periodEndDateNextWeek).format("DD.MM"), startDate: data.periodStartDateNextWeek, endDate: data.periodEndDateNextWeek });

                          this.loadOrder(uid);
                        }
                    })
                        this.memberid = uid;
                      
                    }else{
                        this.loaddatadone = true;
                        this.mylistOrders = [];
                    }
                })
            }
          })
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
                     
                        se.mylistOrders = result.response;
                        if(se.mylistOrders && se.mylistOrders.length >0){
                            
                            se.executeBindDetailOrder(se.mylistOrders).then(()=>{
                                
                                se.zone.run(() => se.mylistOrders.sort(function (a, b) {
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
                                    se.loaddatadone = true;
                                },100)
                               
                            })
                            
                            
                        }else{
                            se.mylistOrders = [];
                            se.loaddatadone = true;
                        }
                    }else{
                      se.mylistOrders = [];
                      se.loaddatadone = true;
                  }
                }
              })
        
    }

    executeBindDetailOrder(listorder):Promise<any>{
        var se = this;
        return new Promise((resolve, reject) => {
            let count=0;
            se.listOrderDinnerActive = [];
            se.listOrderActive = [];
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

                      if(element.status != 4 &&element.status != 1 && (element.status != 2 || (element.status == 2 && timediffdays <=0) )){
                        if(elementbd.combo.categoryId <=24){
                          elementbd.isDinner = false;
                          if(elementbd.startDate && elementbd.endDate){
                            elementbd.nameDisplay = "Gói bữa ăn Tuần " + moment(elementbd.startDate).format("DD/MM") + " - "+ moment(moment(elementbd.startDate).add('days',4)).format("DD/MM");
                          }else{
                            elementbd.nameDisplay = "Gói bữa ăn Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
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
                        element.isActive = false;
                      }
                    });
                }else{
                  if(element.status != 4 &&element.status != 1 && (element.status != 2 || (element.status == 2 && timediffdays <=0) )){
                    
  
                    if(element.fobookingDetail && element.fobookingDetail.length >0){
                        element.detailBooking = [];
                        element.fobookingDetail.forEach(detail => {
                          
                          if( (moment(detail.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(detail.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate) 
                          || (moment(element.startDate).format('YYYY-MM-DD') == this.listWeek[0].startDate && moment(element.endDate).format('YYYY-MM-DD') == this.listWeek[0].endDate))
                            {
                                detail.iscurrentweek = true;
                                element.hasitemcurrentweek = true;
                            }else{
                              if(moment(element.startDate).diff(new Date(),'days') >0){
                                detail.iscurrentweek = false;
                                detail.isnextweek = true;
                                element.hasitemnextweek = true;
                              }
                            }
                            
                          if(detail.combo.categoryId <=24){
                            detail.isDinner = false;
                            //detail.nameDisplay = "Gói bữa ăn Tuần " + moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM");
        
                            if(detail.startDate && detail.endDate){
                              detail.nameDisplay = "Gói bữa ăn Tuần " + moment(detail.startDate).format("DD/MM") + " - "+ moment(moment(detail.startDate).add('days',4)).format("DD/MM");
                            }else{
                              detail.nameDisplay = "Gói bữa ăn Tuần " + moment(element.startDate).format("DD/MM") + " - "+ moment(moment(element.startDate).add('days',4)).format("DD/MM");
                            }
                            element.isOver = moment(new Date()).diff(moment(detail.endDate), 'hours') >= 13 ? true : false;
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
                  }
                }
                
                
                count++;
            }
            if(count == listorder.length){
                resolve(listorder);
                
            }
        })
    }

    refreshData(){
        this.storage.get('jti').then((uid: any) => {
            if(uid){
                this.presentLoading();
                this.memberid = uid;
                this.loadOrder(uid);
            }
        })
    }

    async presentLoading() {
        var loader = await this.loadCtrl.create({
          duration: 1000,
        });
        loader.present();
      }

    gotomenu(tabindex){
        this.foodService.tabFoodIndex = tabindex;
        this.foodService.menuFooterClick.emit(1);
        this.foodService.itemActiveFoodTab.emit(tabindex);
        $(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
        $(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
        $(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");

        //$(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
        $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
        $(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
    }

    showOrderDetail(order,orderdetail){
      this.gf.hideStatusBar();
        this.foodService.itemOrder = order;
        this.foodService.itemOrderDetail = orderdetail
        this.foodService.myorderActiveTab = this.activeTab;
        this.navCtrl.navigateForward("/foodmyorderdetail");
    }

    async foodReOrder(item){
        var se = this;
        let newdate = moment(new Date()).format('YYYY-MM-DD');
        if(item && item.fobookingDetail.length>0){
            for(let i=0; i<item.fobookingDetail.length; i++){
                let url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryId?id="+item.fobookingDetail[i].comboId+"&date="+newdate;
                se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then(async(data)=>{
                    var objExtra = JSON.parse(item.fobookingDetail[i].extra);
                    if(objExtra && objExtra.length >0){
                    data.itemExtraWater = [];
                    data.itemExtraOther = [];
                    objExtra.forEach(element => {
                        if(element.type ==1){
                        data.itemExtraWater.push(element);
                        }else{
                        data.itemExtraOther.push(element);
                        }
                    });
                    }
                    data.quantity = item.fobookingDetail[i].quantity;
                    data.itemExtraOther=data.extraOther;
                    data.itemExtraWater=data.extraWater;
                    se.foodService.listItemsCart.push(data);
                    se.foodService.isBook = true;
                })
            }
            se.foodService.itemCartChange.emit(se.foodService.listItemsCart.length);
            se.navCtrl.navigateForward('/foodbill');
        }
        
        
      }


      loadMenuOrderDetail(orderdetail, order){
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
            let extraitem = JSON.parse(orderdetail.extra);
            var extraText = "";
            if(extraitem && extraitem.length >0){
              extraText =  extraitem.map((item) => item.name).join(" · ");
            }
            orderdetail.extraDisplay = extraText;
            order.detailBooking.push(orderdetail);
            order.isActive = true;
            orderdetail.isDinner = orderdetail.combo.categoryId >24 ? true : false;
            if(order.isComplexOrder){
              
              se.listOrderDinnerActive.push(order);
              se.listOrderActive.push(order);
            }else{
              if(order.isDinner){
                se.listOrderDinnerActive.push(order);
              }else{
                se.listOrderActive.push(order);
              }
            }
            if(orderdetail.iscurrentweek){
              order.listDetailCurrentWeek.push(orderdetail);
            }else if(orderdetail.isnextweek){
              order.listDetailNextWeek.push(orderdetail);
            }
            else{
              orderdetail.weekname = "Gói bữa ăn tuần " + moment(orderdetail.startDate).format('DD/MM') + " - " + moment(orderdetail.endDate).format('DD/MM');
              order.listDetailHistory.push(orderdetail);
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

      showFoodReview(detail, order){
        //Review tuần
        if(order.isOver || order.allowReview){
          this.foodService.itemOrderBookingDetail = detail;
          this.foodService.itemOrderDetail = order;
          this.navCtrl.navigateForward('/foodreviewweek');
        }
      }
      Selecttab()
      {
        this.zone.run((()=>{
          this.activeTab=1;
          this.taborder="tabordernodinner";
        }))
        
      }
      Selecttabdinner()
      {
        this.zone.run((()=>{
          this.activeTab=2;
          this.taborder="taborderdinner";
        }))
      }
}