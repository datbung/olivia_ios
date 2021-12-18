import { FoodplaceotherPage } from './../foodplaceother/foodplaceother.page';
import { OverlayEventDetail } from '@ionic/core';
import { NavController, ModalController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { foodService } from '../providers/foodService';
import { GlobalFunction } from '../providers/globalfunction';
import { itemLocal, ValueGlobal } from '../providers/book-service';
import { Storage } from '@ionic/storage';
import { C } from './../providers/constants';
import * as $ from 'jquery';
import { SearchHotel } from 'src/app/providers/book-service';
import * as moment from 'moment';
@Component({
  selector: 'app-foodbill',
  templateUrl: './foodbill.page.html',
  styleUrls: ['./foodbill.page.scss'],
})
export class FoodbillPage implements OnInit {
  listItems: any=[];
  totalPrice = 0;
  totalPriceDisplay ="0";
  listItemsFood = [];
  arrDistrict=[];District=[];
  dayofweek = 5;
  listItemsDinnerFood: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController,
    public _foodService : foodService,
    public gf: GlobalFunction,
    public valueGlobal: ValueGlobal,
    private zone: NgZone,
    public storage: Storage, public searchhotel: SearchHotel) {
   this.loaddata();
    
    if(this._foodService.listItemsFood.length >0){
      this.listItemsFood = this._foodService.listItemsFoodNextweek;
    }

    if(this._foodService.listItemsDinnerNextWeek && this._foodService.listItemsDinnerNextWeek.length >0){
      this.listItemsDinnerFood = this._foodService.listItemsDinnerNextWeek;
    }
   }

  loaddata(){
    setTimeout(()=>{
      $(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
      if(document.getElementsByClassName("homefood-footer")[1]){
        document.getElementsByClassName("homefood-footer")[0]['style'].display ='none';
        document.getElementsByClassName("homefood-footer")[1]['style'].display ='none';
      }
    },200)
   
    if(this._foodService.listItemsCart.length >0){
      this.gf.checkData(this._foodService.listItemsCart).then(()=>{
        this.dayofweek =0;
       
        this.dayofweek += this._foodService.listItemsCart[0].menuId2 && !this._foodService.listItemsCart[0].menuId2.remove ? 1 : 0;
        this.dayofweek += this._foodService.listItemsCart[0].menuId3 && !this._foodService.listItemsCart[0].menuId3.remove ? 1 : 0;
        this.dayofweek += this._foodService.listItemsCart[0].menuId4 && !this._foodService.listItemsCart[0].menuId4.remove ? 1 : 0;
        this.dayofweek += this._foodService.listItemsCart[0].menuId5 && !this._foodService.listItemsCart[0].menuId5.remove ? 1 : 0;
        this.dayofweek += this._foodService.listItemsCart[0].menuId6 && !this._foodService.listItemsCart[0].menuId6.remove ? 1 : 0;
      
        this.listItems = this._foodService.listItemsCart;
      
        this._foodService.listItemsCart = this.listItems;
        this.listItems.forEach(element => {
          element.totalPriceItem=0;
          if(!element.quantity){
            element.quantity = 1;
          }
          
          element.hadread = true;
          
          
          if(element.image.indexOf("640x480") != -1){
            element.image164 = element.image.replace("640x480","164x164");
          }else{
            if(element.image.indexOf("104x104") == -1){
              let urlimage = element.image.substring(0, element.image.length - 4);
              let tail = element.image.substring(element.image.length - 4, element.image.length);
              element.image = urlimage + "-104x104" + tail;
              
            }
            if(element.image.indexOf("164x164") == -1){
              if(element.image.indexOf("104x104") != -1){
                element.image164 = element.image.replace('104x104','164x164');
              }else{
                let urlimage = element.image.substring(0, element.image.length - 4);
                let tail = element.image.substring(element.image.length - 4, element.image.length);
                element.image164 = urlimage + "-164x164" + tail;
              }
            }
          }
          
          element.extraDisplay = "";
          if(element.itemExtraOther && element.itemExtraOther.length >0){
            element.itemExtraOther.forEach(extra => {
              if(!element.extraDisplay){
                element.extraDisplay += extra.name;
              }else{
                element.extraDisplay += " · " + extra.name;
              }
              this.totalPrice = this.totalPrice + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
              element.totalPriceItem += (this.gf.convertStringToNumber(extra.price) * 1 * element.focategory.dayofweek);
            });
          }
          if(element.itemExtraWater && element.itemExtraWater.length >0){
            element.itemExtraWater.forEach(extra => {
              if(!element.extraDisplay){
                element.extraDisplay += extra.name;
              }else{
                element.extraDisplay += " · " + extra.name;
              }
              this.totalPrice = this.totalPrice + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
              element.totalPriceItem += (this.gf.convertStringToNumber(extra.price) * 1 * element.focategory.dayofweek);
            });
          }
          this.storage.set("listItemsCart", this.listItems);
          this._foodService.countcart = this.listItems.length;
          this.totalPrice += (element.focategory.pricePerDay * element.focategory.dayofweek)* element.quantity;
            element.totalPriceItem = element.totalPriceItem + element.focategory.pricePerDay * element.focategory.dayofweek;
            element.totalPriceItemDisplay = this.gf.convertNumberToString(element.totalPriceItem);
            element.focategory.totalPriceItem = element.totalPriceItem;
          
          this.totalPriceDisplay = this.gf.convertNumberToString(this.totalPrice);
          element.applyFor = "";
          element.applyFor += element.menuId2 && !element.menuId2.remove ? "1" : "0";
          element.applyFor += element.menuId3 && !element.menuId3.remove ? "|1" : "|0";
          element.applyFor += element.menuId4 && !element.menuId4.remove ? "|1" : "|0";
          element.applyFor += element.menuId5 && !element.menuId5.remove ? "|1" : "|0";
          element.applyFor += element.menuId6 && !element.menuId6.remove ? "|1" : "|0";
          element.applyFor += "|0|0";
        });
      })
        
    }else{
      this.listItems = [];
      this.storage.remove("listItemsCart");
    }
    if(this._foodService.listItemsFood.length >0){
      this.listItemsFood = this._foodService.listItemsFood;
    }
    this.District=this._foodService.district;
   }

  ngOnInit() {
    this._foodService.itemAddToCartFromFoodbill.pipe().subscribe((data)=>{
      if(data){
        this.loaddata();

        if(this._foodService.listItemsFood.length >0){
          this.listItemsFood = this._foodService.listItemsFoodNextweek;
        }
    
        if(this._foodService.listItemsDinnerNextWeek && this._foodService.listItemsDinnerNextWeek.length >0){
          this.listItemsDinnerFood = this._foodService.listItemsDinnerNextWeek;
        }
      }
    })
  }
  goback() {
    if (this._foodService.fromPage == "homefood") {
      this.searchhotel.backPage = 'foodbill';
      this.navCtrl.navigateBack('/homefood');
    } 
    else if(this._foodService.fromPage == "fooddinnerorder"){
      this._foodService.fromPage = '';
      this.navCtrl.navigateBack('/fooddinnerdetail');
    }
    else {
      this.setCacheCart();
      this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
      this.navCtrl.navigateBack('/foodcombodetail');
    }
    this._foodService.itemActiveFoodTab.emit(1);
  }
  async changeplace() {
    if(this._foodService.listItemsCart.length >0){
       this._foodService.listItemsCart.forEach(element => {
         var itemPrice = 0;
         itemPrice += (element.focategory.pricePerDay * element.focategory.dayofweek);
         if(element.itemExtraOther && element.itemExtraOther.length >0){
           element.itemExtraOther.forEach(elementother => {
             itemPrice += this.gf.convertStringToNumber(elementother.price * element.focategory.dayofweek);
           });
         }
         if(element.itemExtraWater && element.itemExtraWater.length >0){
           element.itemExtraWater.forEach(elementwater => {
             itemPrice += this.gf.convertStringToNumber(elementwater.price* element.focategory.dayofweek);
           });
         }
         element.itemPrice = itemPrice;
       });
     }
     this._foodService.totalPrice=this.totalPrice;
    this._foodService.ischeckchangeplace="0";
    const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
        component: FoodplaceotherPage,
      });
    modal.present();
    modal.onDidDismiss().then((data: OverlayEventDetail) => {
      this.navCtrl.navigateForward(['/app/tabs/tab1']);
    })
  }

  setCacheCart(){
    this.storage.get("listItemsCart").then((data)=>{
      if(data){
        this.storage.remove("listItemsCart").then(()=>{
          this.storage.set("listItemsCart", this.listItems);
        })
      }else{
        this.storage.set("listItemsCart", this.listItems);
      }
    })
  }

  next() {
    if(this.checkpaymentTime()){
      if(this._foodService.listItemsCart.length==0){
        this.navCtrl.back();
      }
      return;
    }
    if(this._foodService.listItemsCart.length >0){
     this.setCacheCart();
      this._foodService.listItemsCart.forEach(element => {
        var itemPrice = 0;
        itemPrice += (element.focategory.pricePerDay * element.focategory.dayofweek);
        if(element.itemExtraOther && element.itemExtraOther.length >0){
          element.itemExtraOther.forEach(elementother => {
            itemPrice += this.gf.convertStringToNumber(elementother.price * element.focategory.dayofweek);
          });
        }
        if(element.itemExtraWater && element.itemExtraWater.length >0){
          element.itemExtraWater.forEach(elementwater => {
            itemPrice += this.gf.convertStringToNumber(elementwater.price* element.focategory.dayofweek);
          });
        }
        element.itemPrice = itemPrice;
      });
    }
    this._foodService.totalPrice=this.totalPrice;
    this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
    this.navCtrl.navigateForward('/foodadddetail');
  }

  deleteItem(index){
    if(this.listItems.length>0){
      this.listItems.splice(index, 1);
      if(this._foodService.countcart >0){
        this._foodService.countcart -=1;
      }else{
        this._foodService.countcart =0;
      }
      this.setCacheCart();
      this.reTotalAll();
      this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
    }
   
    // this.totalPrice = 0;
    // this.totalPriceDisplay= "0";
  }

  minusItem(item){
    var se = this;
    if(item.isDinner && item.quantity==2){
      item.quantity = 2;
      se.gf.showToastWarning("Số lượng tối thiểu cần đặt là 2");
    }else{
      se.zone.run(()=>{
        if(item.quantity==1){
          item.quantity = 1;
        }else{
          item.quantity -=1;
          se.callTotalPriceAll(false, item);
        }
      })
    }
  }

  reTotalAll(){
    var total = 0;
    this.listItems.forEach(element => {
      if(element.itemExtraOther && element.itemExtraOther.length >0){
        element.itemExtraOther.forEach(extra => {
          total = total + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
        });
      }
      if(element.itemExtraWater && element.itemExtraWater.length >0){
        element.itemExtraWater.forEach(extra => {
          total = total + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
        });
      }
      total += ((element.focategory.pricePerDay * element.focategory.dayofweek) * element.quantity);
      
    });

    this.zone.run(()=>{
      this.totalPrice = total;
      this.totalPriceDisplay = this.gf.convertNumberToString(total);
    })
  }

  callTotalPriceAll(isPlus, item){
    var se = this;
    if(se._foodService.listItemsCart && se._foodService.listItemsCart.length >0){
      let totalPriceItem =0;
        totalPriceItem = (item.focategory.pricePerDay * item.focategory.dayofweek);
        if(item.itemExtraOther && item.itemExtraOther.length >0){
          item.itemExtraOther.forEach(element => {
            totalPriceItem = totalPriceItem + (se.gf.convertStringToNumber(element.price) * item.focategory.dayofweek);
          });
        }
        if(item.itemExtraWater && item.itemExtraWater.length >0){
          item.itemExtraWater.forEach(element => {
            totalPriceItem = totalPriceItem + (se.gf.convertStringToNumber(element.price) * item.focategory.dayofweek);
          });
        }

      se.zone.run(()=>{
        if(isPlus){
          se.totalPrice = se.totalPrice + totalPriceItem;
        }else{
          se.totalPrice = se.totalPrice - totalPriceItem;
        }
        se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
      })
    }
    

  }

  plusItem(item){
    var se = this;
      item.quantity +=1;
      //se.totalPrice = item.focategory.price * item.quantity;
      se.callTotalPriceAll(true, item);
     
  }

  goToHomeFood(){
    var se = this;
    se.valueGlobal.backValue = "foodbill";
    se._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
    se.navCtrl.navigateBack("/homefood");
  }
  checkpaymentTime(){
    if(this._foodService.listItemsCart.length >0){
      for (let i = 0; i < this._foodService.listItemsCart.length; i++) {
        const element = this._foodService.listItemsCart[i];
        var arr = element.applyFor.split('|');
        for (let j = 0; j < arr.length-2; j++) {
          if(arr[j]=='1'){
            if (j==0) {
              var ischeckTime=this.checkItemMenuEnable(element, 2);
              if (ischeckTime) {
                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                this.deleteItem(i);
                return true;
              }
            } else if (j==1) {
              var ischeckTime=this.checkItemMenuEnable(element, 3);
              if (ischeckTime) {
                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                this.deleteItem(i);
                return true;
              }
            }else if (j==2) {
              var ischeckTime=this.checkItemMenuEnable(element, 4);
              if (ischeckTime) {
                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                this.deleteItem(i);
                return true;
              }
            }else if (j==3) {
              var ischeckTime=this.checkItemMenuEnable(element, 5);
              if (ischeckTime) {
                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                this.deleteItem(i);
                return true;
              }
            }else if (j==4) {
              var ischeckTime=this.checkItemMenuEnable(element, 6);
              if (ischeckTime) {
                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                this.deleteItem(i);
                return true;
              }
            }
          }
        }
      }
    }
    return false;
  }
  checkItemMenuEnable(itemcombo, dayofweek){
    let today = new Date();
    let startdate = moment(itemcombo.startDate).add(dayofweek -2, 'days');
    let difftime = moment(startdate).diff(moment(today),'hours');
    let diffday = moment(startdate).diff(moment(moment(today).format('YYYY-MM-DD')),'days');
    return (diffday == 0 || difftime <= 11 ) ? true : false; 
  }
  
}
