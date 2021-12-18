import { OverlayEventDetail } from '@ionic/core';
import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { foodService } from '../providers/foodService';
import { GlobalFunction } from '../providers/globalfunction';
import { itemLocal, ValueGlobal, foodInfo } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import * as moment from 'moment';
import * as request from 'requestretry';

@Component({
  selector: 'app-foodmyorderdetail',
  templateUrl: './foodmyorderdetail.page.html',
  styleUrls: ['./foodmyorderdetail.page.scss'],
})
export class FoodMyOrderDetailPage implements OnInit {
  listItems: any=[];
  totalPrice = 0;
  totalPriceDisplay ="0";
  listItemsFood = [];
  arrDistrict=[];District="";
  dayofweek = 5;
    order: any;
    combodetail: any;
    menu: any;
    bookingDetails = [];
  hoten: any;
  phone: any;
  cusaddress: string;
  orderdetail: any;
  detail: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public _foodService : foodService,
    public gf: GlobalFunction,
    public valueGlobal: ValueGlobal,
    private zone: NgZone,
    public storage: Storage,
    public foodInfo: foodInfo) {
        if(this._foodService.itemOrderDetail){
          var se = this;
            se.order = se._foodService.itemOrder;
            se.orderdetail = se._foodService.itemOrderDetail;
            //se.order.totalPriceDisplay = se.gf.convertNumberToString(se.order.totalPrice);
            let id = se.orderdetail.combo.categoryId;
            if(id){
                //se.loadMenuOrderDetail(id,se.order.bookingDate);
                
                let element = se._foodService.itemOrderDetail;
                se.combodetail = element;
                let timediffminutes = 0,timediffhours = 0, timediffdays =0;
                if(se.combodetail.startDate){
                  timediffminutes = moment(new Date()).diff(moment(se.combodetail.startDate), 'minutes');
                  timediffhours = moment(new Date()).diff(moment(se.combodetail.startDate), 'hours');
                  timediffdays = moment(new Date()).diff(moment(se.combodetail.startDate), 'days');
                }else{
                  timediffminutes = moment(new Date()).diff(moment(se.order.startDate), 'minutes');
                  timediffhours = moment(new Date()).diff(moment(se.order.startDate), 'hours');
                  timediffdays = moment(new Date()).diff(moment(se.order.startDate), 'days');
                }
                
              element.menu ={};
              if(se.combodetail.detailCombo.menuId2){
                element.menu = se.combodetail.detailCombo.menuId2;
              }

              if(timediffdays == 0)//thứ 2
              {
                element.menu = se.combodetail.detailCombo.menuId2;
                se.setOrderStatus(element, 0);

              }else if(timediffdays == 1){
                if(se.combodetail.detailCombo.menuId3){
                  element.menu = se.combodetail.detailCombo.menuId3;
                  se.setOrderStatus(element, 1);

                }
              }
              else if(timediffdays == 2){
                if(se.combodetail.detailCombo.menuId4){
                  element.menu = se.combodetail.detailCombo.menuId4;
                  se.setOrderStatus(element, 2);

                }
              }
              else if(timediffdays == 3){
                if(se.combodetail.detailCombo.menuId5){
                  element.menu = se.combodetail.detailCombo.menuId5;
                  se.setOrderStatus(element, 3);

                }
              }
              else if(timediffdays == 4){
                if(se.combodetail.detailCombo.menuId6){
                  element.menu = se.combodetail.detailCombo.menuId6;
                  se.setOrderStatus(element, 4);

                }
              }else if(timediffdays >4 ){
                se.order.statusOrderDetail = 4;
              }
              else{
                se.order.statusOrderDetail = 1;
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
                //se.bookingDetails.push(element);
                se.detail  = element;
            }

           se.hoten = se.order.customerName;
           se.phone = se.order.customerPhone;
           se.cusaddress = se.order.fullAddress;
        }
    }

    ngOnInit(){

    }

    setOrderStatus(element, count){
      var se = this;
      let curdate =  moment(se.order.startDate).add(count, 'days');
      let days = moment(new Date()).diff(curdate, 'days');
      let minutes:any = moment(new Date()).diff(moment(curdate), 'minutes');
      if(se.order.isDinner){
        se.order.statusOrderDetail = days <= 0 ? ( days == 0 ? ( minutes < 990 ? 2 : (minutes <= 1050 ? 3 : 4 ) ) : 1 ) : 1;
      }else{
        se.order.statusOrderDetail = days <= 0 ? ( days == 0 ? ( minutes < 690 ? 2 : (minutes <= 750 ? 3 : 4 ) ) : 1 ) : 1;
      }
    }

    loadMenuOrderDetail(id,date){
        var se = this;
    let newdate = moment(date).format('YYYY-MM-DD');
    if(se.order && se.order.fobookingDetail && se.order.fobookingDetail.length>0){
      se.order.fobookingDetail.forEach(element => {
        const id = element.combo.categoryId;
        let url = '';
        if(se.order.isDinner){
          url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryIdDinner?id="+id+"&date="+newdate;
        }else{
          url = C.urls.baseUrl.urlFood +"/api/FODetail/GetDetailByCategoryId?id="+id+"&date="+newdate;
        }
      se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data)=>{
        if(data && data.id){
          se.combodetail = data;
              let timediffminutes = moment(new Date()).diff(moment(se.order.startDate), 'minutes');
              let timediffhours = moment(new Date()).diff(moment(se.order.startDate), 'hours');
              let timediffdays = moment(new Date()).diff(moment(se.order.startDate), 'days');
            element.menu ={};
            if(se.combodetail.menuId2){
              element.menu = se.combodetail.menuId2;
            }

            if(timediffdays == 0)//thứ 2
            {
              element.menu = se.combodetail.menuId2;
              se.setOrderStatus(element, 0);

            }else if(timediffdays == 1){
              if(se.combodetail.menuId3){
                element.menu = se.combodetail.menuId3;
                se.setOrderStatus(element, 1);

              }
            }
            else if(timediffdays == 2){
              if(se.combodetail.menuId4){
                element.menu = se.combodetail.menuId4;
                se.setOrderStatus(element, 2);

              }
            }
            else if(timediffdays == 3){
              if(se.combodetail.menuId5){
                element.menu = se.combodetail.menuId5;
                se.setOrderStatus(element, 3);

              }
            }
            else if(timediffdays == 4){
              if(se.combodetail.menuId6){
                element.menu = se.combodetail.menuId6;
                se.setOrderStatus(element, 4);

              }
            }else if(timediffdays >4 ){
              se.order.statusOrderDetail = 4;
            }
            else{
              se.order.statusOrderDetail = 1;
            }
            
            se.orderMenu(element.menu);
            element.typePriceId = data.focategory.typePriceId;
            element.totalPriceDisplay = se.gf.convertNumberToString(element.itemPrice);
            let extraitem = JSON.parse(element.extra);
            var extraText = "";
            if(extraitem && extraitem.length >0){
              extraText =  extraitem.map((item) => item.name).join(" · ");
            }
            element.extraDisplay = extraText;
            se.bookingDetails.push(element);
          }
            });
        })
        }
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

    goback(){
        this.navCtrl.back();
    }

    showFoodReview(detail, order){
      this.gf.hideStatusBar();
        this._foodService.itemOrderBookingDetail = detail;
        this._foodService.itemOrder = order;
        this._foodService.itemOrderDetail = detail;
        this.navCtrl.navigateForward('/foodreview');
    }

    async foodReOrder(item){
      var se = this;
      let newdate = moment(new Date()).format('YYYY-MM-DD');
        if(item && item.extra != "[]"){
                var objExtra = JSON.parse(item.extra);
                if(objExtra && objExtra.length >0){
                item.itemExtraWater = [];
                item.itemExtraOther = [];
                objExtra.forEach(element => {
                    if(element.type ==1){
                    item.itemExtraWater.push(element);
                    }else{
                    item.itemExtraOther.push(element);
                    }
                });
                }
                se._foodService.listItemsCart.push(item);
                se._foodService.isBook = true;

                se._foodService.itemCartChange.emit(se._foodService.listItemsCart.length);
                se.navCtrl.navigateForward('/foodbill');
              }
    }


  showBlog(menu){
    var se = this;
    if(menu.linkBlog){
      se.gf.showLoading();
      se.mapBlogId(menu.linkBlog).then((id)=>{
        se.gf.hideLoading();
        if(id){
          se.valueGlobal.backValue = "fooddinner";
          se.navCtrl.navigateForward("/blog/"+id);
        }else{
          se.gf.showToastWarning("Không tìm thấy bài viết. Xin vui lòng quay lại sau!");
        }
      })
      //se.navCtrl.navigateForward("/blog/"+);
    }
  }

  mapBlogId(item): Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: 'https://svc3.ivivu.com/GetBlogByUrl',
        qs: { url: item },
        headers:
        {
        }
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
          se.zone.run(()=>{
            var data = JSON.parse(body);
            resolve(data.post.ID);
          })
        })
    })
    

  }
}