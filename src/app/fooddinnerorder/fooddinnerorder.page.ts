import { foodInfo } from './../providers/book-service';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { foodService } from '../providers/foodService';
import { GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-fooddinnerorder',
  templateUrl: './fooddinnerorder.page.html',
  styleUrls: ['./fooddinnerorder.page.scss'],
})
export class FoodDinnerOrderPage implements OnInit {
  extraOther:any = [
    {id: 1, name: "Thái sẵn", quantity: 1, price: 2000, priceDisplay: "2.000" },
    {id: 2, name: "Ướp gia vị", quantity: 1, price: 5000, priceDisplay: "5.000" },
  ];
  extraWater;
  menutitle: any;
  totalPrice: number;
  totalPriceDisplay: any;
  item: any;
  itemExtraOther = [];
  itemExtraWater = [];
  dayofweek = 5;
  currentItem: any;
  isBook: boolean;
  weekmenutitle: string;
  weekmenutitle1: string;
  allowBook= true;
  totalPriceOther: number=0;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController,private foodInfo: foodInfo,
    public _foodService: foodService,
    private zone: NgZone,
    public gf: GlobalFunction,
    private toastCtrl: ToastController,
    private storage: Storage) {
    this._foodService.listDinnerItemsCart =[];

    if (this.foodInfo.extraOther&&this.foodInfo.extraOther.length>0) {
      this.extraOther=this.foodInfo.extraOther;
      this.totalPriceOther =0;
      for (let i = 0; i < this.extraOther.length; i++) {
        this.extraOther[i].priceDisplay=this.extraOther[i].price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.extraOther[i].quantity = 2;
        //if(i == 0 && this._foodService.itemDinnerAddToCart.focomboPeriod.isChangePrice){
          this.dayofweek =0;
          this.dayofweek += this._foodService.itemDinnerAddToCart.menuId2 && !this._foodService.itemDinnerAddToCart.menuId2.remove ? 1 : 0;
          this.dayofweek += this._foodService.itemDinnerAddToCart.menuId3 && !this._foodService.itemDinnerAddToCart.menuId3.remove ? 1 : 0;
          this.dayofweek += this._foodService.itemDinnerAddToCart.menuId4 && !this._foodService.itemDinnerAddToCart.menuId4.remove ? 1 : 0;
          this.dayofweek += this._foodService.itemDinnerAddToCart.menuId5 && !this._foodService.itemDinnerAddToCart.menuId5.remove ? 1 : 0;
          this.dayofweek += this._foodService.itemDinnerAddToCart.menuId6 && !this._foodService.itemDinnerAddToCart.menuId6.remove ? 1 : 0;
        //}
        this.totalPriceOther += (this.extraOther[i].price * this.extraOther[i].quantity * this.dayofweek);
      }
      this.itemExtraOther = [...this.extraOther];
    }
    if (this.foodInfo.extraDinner&&this.foodInfo.extraDinner.length>0) {
      this.extraWater=this.foodInfo.extraDinner;
      for (let i = 0; i < this.foodInfo.extraDinner.length; i++) {
        this.extraWater[i].priceDisplay=this.extraWater[i].price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.extraWater[i].quantity = 2;
        this.extraWater[i].checked = false;
      }
    }
    if(this._foodService.itemDinnerAddToCart){
      this.isBook = this._foodService.isBook;
      this.item = this.gf.deepClone(this._foodService.itemDinnerAddToCart);
      this.item.quantity = 2;
      this.menutitle = this._foodService.itemDinnerAddToCart.focomboPeriod.name;

      //if(this._foodService.itemDinnerAddToCart.focomboPeriod.isChangePrice){
        //this._foodService.itemDinnerAddToCart.focategory.price = this._foodService.itemDinnerAddToCart.focomboPeriod.price;
        //this.totalPrice = this._foodService.itemDinnerAddToCart.focategory.price;
        this.totalPrice =0;
        this.dayofweek =0;
        this.dayofweek += this.item.menuId2 && !this.item.menuId2.remove ? 1 : 0;
        this.dayofweek += this.item.menuId3 && !this.item.menuId3.remove ? 1 : 0;
        this.dayofweek += this.item.menuId4 && !this.item.menuId4.remove ? 1 : 0;
        this.dayofweek += this.item.menuId5 && !this.item.menuId5.remove ? 1 : 0;
        this.dayofweek += this.item.menuId6 && !this.item.menuId6.remove ? 1 : 0;

        this.item.focategory.dayofweek = this.dayofweek;
        let unitprice = (this.item.focategory.price*1 + 1000)/5;
        this.item.focategory.pricePerDay = unitprice;
        this.totalPrice += (unitprice * this.dayofweek -1000)* 2;
        this.item.applyFor ='';
        this.item.applyFor += this.item.menuId2 && !this.item.menuId2.remove ? "1" : "0";
        this.item.applyFor += this.item.menuId3 && !this.item.menuId3.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId4 && !this.item.menuId4.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId5 && !this.item.menuId5.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId6 && !this.item.menuId6.remove ? "|1" : "|0";
        this.item.applyFor += "|0|0";
      //}

      //this.totalPrice = this._foodService.itemDinnerAddToCart.focategory.price * this.item.quantity;
      this.totalPrice = this.totalPrice + this.totalPriceOther;
      this.totalPriceDisplay = this.gf.convertNumberToString(this.totalPrice);
      this.item.focategory.totalPriceItem = this.totalPrice;
    }

    this.weekmenutitle = "Tuần Thứ 2, "+ moment(this._foodService.itemDinnerAddToCart.startDate).format("DD.MM");
    this.weekmenutitle1 = "Thứ 6, "+ moment(this._foodService.itemDinnerAddToCart.endDate).format("DD.MM");
  }
  ngOnInit() {
  }
  closeDinnerModal()
  {
    this.modalCtrl.dismiss("justclose");
  }
  next()
  {
    this.modalCtrl.dismiss("next");
    if(this.itemExtraOther){
      this.item.itemExtraOther= this.itemExtraOther;
    }
    if(this.itemExtraWater){
      this.item.itemExtraWater= this.itemExtraWater;
    }
    this.item.totalPrice = this.totalPrice;
    this.item.isDinner = true;
    this.checkDuplicateItem(this.item).then((dup)=>{
      if(!dup){
        //this._foodService.listDinnerItemsCart.push(this.item);
        this._foodService.listItemsCart.push(this.item);
        this.zone.run(()=>{
          this._foodService.countcart = this._foodService.listItemsCart.length;
        })
      }

      
    });
    this._foodService.fromPage = "fooddinnerorder";
    this.navCtrl.navigateForward('/foodbill');

    
  }

  minusItem(){
    var se = this;
    se.zone.run(()=>{
      if(se.item.quantity==2){
        se.item.quantity = 2;
        se.gf.showToastWarning("Số lượng tối thiểu cần đặt là 2");
      }else{
       se.item.quantity -=1;
        se.totalPrice = (se.item.focategory.pricePerDay * se.dayofweek -1000) * se.item.quantity;
        //se.totalPrice = se.item.focategory.price * se.item.quantity;

        if(se.itemExtraOther.length >0){
          se.itemExtraOther.forEach(element => {
            se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(element.price) * se.item.quantity * se.dayofweek);
          });
        }
        if(se.itemExtraWater.length >0){
          se.itemExtraWater.forEach(element => {
            se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(element.price) * se.item.quantity * se.dayofweek);
          });
        }
        se.item.focategory.totalPriceItem = se.totalPrice;
        se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
      }
      se.allowBook = se.item.quantity >=2 ? true : false;
    })
  }

  plusItem(){
    var se = this;
    se.item.quantity +=1;
    se.zone.run(()=>{
      se.allowBook = se.item.quantity >=2 ? true : false;
    })
      //se.totalPrice = se.item.focategory.price*se.item.quantity;
      se.totalPrice = (se.item.focategory.pricePerDay * se.dayofweek -1000) * se.item.quantity;
      if(se.itemExtraOther.length >0){
        se.itemExtraOther.forEach(element => {
          se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(element.price) * se.item.quantity * se.dayofweek);
        });
      }
      if(se.itemExtraWater.length >0){
        se.itemExtraWater.forEach(element => {
          se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(element.price) * se.item.quantity * se.dayofweek);
        });
      }
      se.item.focategory.totalPriceItem = se.totalPrice;
      se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
  }

  itemOtherCheck(ev,item){
    var se = this;
    if(ev.detail.checked){
      item.quantity = item.quantity* se.item.quantity;
      se.itemExtraOther.push(item);
      se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
    }
    else{
      //item.quantity = 1;
      se.totalPrice = se.totalPrice - (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
      if(se.itemExtraOther.length>0){
        se.gf.removeItemInArray(se.itemExtraOther, item);
      }
      
    }
  }

  itemWaterCheck(ev,item){
    var se = this;
    if(ev.target.checked){
      se.extraWater.forEach(element => {
        element.checked = false;
      });
      item.checked = true;
      se.currentItem = item;
      se.currentItem.checked = true;
      item.quantity = item.quantity* se.item.quantity;
      se.itemExtraWater.push(item);
      se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
    }
    else{
      item.checked = false;
      ev.target.checked = false;
      ev.target.classList.remove("radio-checked");
      se.totalPrice = se.totalPrice - (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
      if(se.itemExtraWater.length>0){
        se.gf.removeItemInArray(se.itemExtraWater, item);
      }
      
    }
  }

  addToCart(){
    if(!this.allowBook){
      this.gf.showToastWarning("Số lượng tối thiểu cần đặt là 2");
      return;
    }
    if(this.itemExtraOther){
      this.item.itemExtraOther= this.itemExtraOther;
    }
    if(this.itemExtraWater){
      this.item.itemExtraWater= this.itemExtraWater;
    }
    this.item.totalPrice = this.totalPrice;
    this.item.isDinner = true;

    this.checkDuplicateItem(this.item).then((dup)=>{
      if(!dup){
        //this._foodService.listDinnerItemsCart.push(this.item);
        this._foodService.listItemsCart.push(this.item);
        this.zone.run(()=>{
          this._foodService.countcart = this._foodService.listItemsCart.length;
          this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
        })
      }

      if(this._foodService.listDinnerItemsCart && this._foodService.listDinnerItemsCart.length >0){
        this._foodService.listDinnerItemsCart.forEach(element => {
          var itemPrice = 0;
          itemPrice += element.focategory.price;
          if(element.itemExtraOther && element.itemExtraOther.length >0){
            element.itemExtraOther.forEach(elementother => {
              itemPrice += this.gf.convertStringToNumber(elementother.price * this.dayofweek);
            });
          }
          if(element.itemExtraWater && element.itemExtraWater.length >0){
            element.itemExtraWater.forEach(elementwater => {
              itemPrice += this.gf.convertStringToNumber(elementwater.price* this.dayofweek);
            });
          }
          element.itemPrice = itemPrice;
        });
      }
      this._foodService.totalPrice=this.totalPrice;
      this.item.focategory.totalPriceItem = this.totalPrice;
      
    });
    //this.modalCtrl.dismiss("next");
    //}
    if(!this._foodService.isBookDinner){
      this.showToastWarning("Một sản phẩm đã được thêm vào giỏ hàng thành công!");
    }

    this.setCacheCart();
    this.modalCtrl.dismiss();
  }

  setCacheCart(){
    this.storage.get("listItemsCart").then((data)=>{
      if(data){
        this.storage.remove("listItemsCart").then(()=>{
          this.storage.set("listItemsCart", this._foodService.listItemsCart);
        })
      }else{
        this.storage.set("listItemsCart", this._foodService.listItemsCart);
      }
    })
  }

  public async showToastWarning(msg){
    let alert = await this.toastCtrl.create(({
      message: msg,
      duration: 1500,
      position: "top",
      cssClass: "cls-addcart-success"
    }))
    alert.present();
  }

  checkDuplicateItem(item){
    var se = this, res = false;
    return new Promise((resolve, reject) => {
      if(se._foodService.listDinnerItemsCart.length == 0){
        resolve(false);
      }else{
        se._foodService.listDinnerItemsCart.forEach(element => {
          if(item.id == element.id){
            if(!item.itemExtraWater && !item.itemExtraOther && !element.itemExtraWater && !element.itemExtraOther){
              element.quantity +=1;
              resolve(true);
            }
            else{
              var list1 = [];
              var list2 = [];
              if(item.itemExtraWater && item.itemExtraWater.length >0){
                list1 = [...item.itemExtraWater];
              }
              if(item.itemExtraOther && item.itemExtraOther.length >0){
                if(list1.length>0){
                  list1 = [...list1,...item.itemExtraOther];
                }else{
                  list1 = [...item.itemExtraOther];
                }
              }

              if(element.itemExtraWater && element.itemExtraWater.length >0){
                list2 = [...element.itemExtraWater];
              }
              if(element.itemExtraOther && element.itemExtraOther.length >0){
                if(list2.length>0){
                  list2 = [...list2,...element.itemExtraOther];
                }else{
                  list2 = [...element.itemExtraOther];
                }
              }
              if(!se.checkArrayEqual(list1, list2)){
                element.quantity +=1;
                resolve(true);
              }else{
                res = false;
              }
              
            }
          }else{
            res = false;
          }
        });
      }

      resolve(res);
    })
  }

  checkArrayEqual(a, b) {
    if (a.length !== b.length) {
        return true;
    }

    aLoop: for (var i = 0; i < a.length; ++i) {
        bLoop: for (var j = 0; j < b.length; ++j) {
            if (a[i].id == b[j].id) {
                continue aLoop;
            }
        }
        return true;
    }

    return false;
  }
}
