import { foodInfo } from './../providers/book-service';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { Component, OnInit, NgZone } from '@angular/core';
import { foodService } from '../providers/foodService';
import { GlobalFunction } from '../providers/globalfunction';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

@Component({
  selector: 'app-foodorder',
  templateUrl: './foodorder.page.html',
  styleUrls: ['./foodorder.page.scss'],
})
export class FoodorderPage implements OnInit {
  extraOther;extraWater
  menutitle: any;
  totalPrice: number;
  totalPriceDisplay: any;
  item: any = {};
  itemExtraOther = [];
  itemExtraWater = [];
  dayofweek = 5;
  currentItem: any;
  isBook: boolean;
  constructor(public modalCtrl: ModalController, public navCtrl: NavController,private foodInfo: foodInfo,
    public _foodService: foodService,
    private zone: NgZone,
    public gf: GlobalFunction,
    private toastCtrl: ToastController,
    private storage: Storage) {
    if (this.foodInfo.extraOther&&this.foodInfo.extraOther.length>0) {
      this.extraOther=this.foodInfo.extraOther;
      for (let i = 0; i < this.extraOther.length; i++) {
        this.extraOther[i].priceDisplay=this.extraOther[i].price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.extraOther[i].quantity = 1;
        this.extraOther[i].show = true;

        this.dayofweek =0;
            this.dayofweek += this._foodService.itemAddToCart.menuId2 && !this._foodService.itemAddToCart.menuId2.remove ? 1 : 0;
            this.dayofweek += this._foodService.itemAddToCart.menuId3 && !this._foodService.itemAddToCart.menuId3.remove ? 1 : 0;
            this.dayofweek += this._foodService.itemAddToCart.menuId4 && !this._foodService.itemAddToCart.menuId4.remove ? 1 : 0;
            this.dayofweek += this._foodService.itemAddToCart.menuId5 && !this._foodService.itemAddToCart.menuId5.remove ? 1 : 0;
            this.dayofweek += this._foodService.itemAddToCart.menuId6 && !this._foodService.itemAddToCart.menuId6.remove ? 1 : 0;
            this.totalPrice =this.extraOther[i].price * this.dayofweek;

        if(i==1){
          this.itemExtraOther.push(this.extraOther[i]);
          this.totalPrice =this.extraOther[i].price * this.dayofweek;
          //if(this._foodService.itemAddToCart.focomboPeriod.isChangePrice){
            
          //}
          
        }
        if(this._foodService.itemAddToCart && this.extraOther[i].id == 10 && this._foodService.itemAddToCart.categoryId == 15){
          this.extraOther[i].show = false;
        }
      }
      
    }
    if (this.foodInfo.extraWater&&this.foodInfo.extraWater.length>0) {
      this.extraWater=this.foodInfo.extraWater;
      for (let i = 0; i < this.foodInfo.extraWater.length; i++) {
        this.extraWater[i].priceDisplay=this.extraWater[i].price.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.extraWater[i].quantity = 1;
        this.extraWater[i].checked = false;
      }
    }
    let listitemcart = [...this._foodService.listItemsCart];
    if(this._foodService.itemAddToCart){
      this.isBook = this._foodService.isBook;
      this.item = {};
      this.item = this.gf.deepClone(this._foodService.itemAddToCart);
      this.item.quantity = 1;
      this.menutitle = "Tuần thứ 2, "+ moment(this.item.startDate).format("DD.MM") + " → " +"Thứ 6, "+ moment(this.item.endDate).format("DD.MM");  //this._foodService.itemAddToCart.focomboPeriod.name; 
      
        this.dayofweek =0;
        this.item.applyFor ="";
        this.dayofweek += this.item.menuId2 && !this.item.menuId2.remove ? 1 : 0;
        this.dayofweek += this.item.menuId3 && !this.item.menuId3.remove ? 1 : 0;
        this.dayofweek += this.item.menuId4 && !this.item.menuId4.remove ? 1 : 0;
        this.dayofweek += this.item.menuId5 && !this.item.menuId5.remove ? 1 : 0;
        this.dayofweek += this.item.menuId6 && !this.item.menuId6.remove ? 1 : 0;
        this.item.dayofweek = this.dayofweek;
        this.item.focategory.dayofweek = this.dayofweek;
        let unitprice = (this.item.focategory.price*1)/5;
        this.item.focategory.pricePerDay = unitprice;
        this.totalPrice += (unitprice * this.dayofweek);
        this.item.applyFor ='';
        this.item.applyFor += this.item.menuId2 && !this.item.menuId2.remove ? "1" : "0";
        this.item.applyFor += this.item.menuId3 && !this.item.menuId3.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId4 && !this.item.menuId4.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId5 && !this.item.menuId5.remove ? "|1" : "|0";
        this.item.applyFor += this.item.menuId6 && !this.item.menuId6.remove ? "|1" : "|0";
        this.item.applyFor += "|0|0";
      this.totalPriceDisplay = this.gf.convertNumberToString(Math.round(this.totalPrice));
      this.item.focategory.totalPriceItem = this.totalPrice;
    }
    //this._foodService.listItemsCart = listitemcart;
  }
  ngOnInit() {
  }
  closeModal()
  {
    this._foodService.countcart = this._foodService.listItemsCart.length;
    this.modalCtrl.dismiss("justclose");
  }
  next()
  {
    this.modalCtrl.dismiss();
    if(this.itemExtraOther){
      this.item.itemExtraOther= this.itemExtraOther;
    }
    if(this.itemExtraWater){
      this.item.itemExtraWater= this.itemExtraWater;
    }
    this.item.totalPrice = this.totalPrice;
    let newitem = {...this.item};
    this.checkDuplicateItem({newitem}).then((dup)=>{
      if(!dup){
        this._foodService.listItemsCart.push({newitem});
        this.zone.run(()=>{
          this._foodService.countcart = this._foodService.listItemsCart.length;
        })
      }
    });
    if(this._foodService.listItemsCart && this._foodService.listItemsCart.length >0){
      this.gf.checkData(this._foodService.listItemsCart).then(()=>{
        this.navCtrl.navigateForward('/foodbill');
      })
    }
    
  }

  minusItem(){
    var se = this;
    se.zone.run(()=>{
      if(se.item.quantity==1){
        se.item.quantity = 1;
      }else{
        se.item.quantity -=1;
        se.totalPrice = (se.item.focategory.pricePerDay * se.dayofweek -1000)* se.item.quantity;

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
        se.item.focategory.totalPriceItem = Math.round(se.totalPrice);
        se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
      }
    })
  }

  plusItem(){
    var se = this;
    se.item.quantity +=1;
      //se.totalPrice = se.item.focategory.price*se.item.quantity;
      se.totalPrice = (se.item.focategory.pricePerDay * se.dayofweek -1000)* se.item.quantity;
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
      se.item.focategory.totalPriceItem = Math.round(se.totalPrice);
      se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
  }

  itemOtherCheck(ev,item){
    var se = this;
    if(ev.detail.checked){
      item.quantity = item.quantity* se.item.quantity;
      se.itemExtraOther.push(item);
      se.totalPrice = se.totalPrice + (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
    }
    else{
      item.quantity = 1;
      se.totalPrice = se.totalPrice - (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
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
      se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
    }
    else{
      item.checked = false;
      ev.target.checked = false;
      ev.target.classList.remove("radio-checked");
      se.totalPrice = se.totalPrice - (se.gf.convertStringToNumber(item.price) * se.item.quantity * se.dayofweek);
      se.totalPriceDisplay = se.gf.convertNumberToString(Math.round(se.totalPrice));
      if(se.itemExtraWater.length>0){
        se.gf.removeItemInArray(se.itemExtraWater, item);
      }
      
    }
  }

  addToCart(){
    if(this.itemExtraOther){
      this.item.itemExtraOther= this.itemExtraOther;
    }
    if(this.itemExtraWater){
      this.item.itemExtraWater= this.itemExtraWater;
    }
    this.item.totalPrice = this.totalPrice;
    
    let newitem = {...this.item};
    this.checkDuplicateItem(newitem).then((dup)=>{
      if(!dup){
        
        this._foodService.listItemsCart.push(newitem);
        this.zone.run(()=>{
          this._foodService.countcart = this._foodService.listItemsCart.length;
          this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
        })
      }
    });
   
    if(!this._foodService.isBook){
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
      if(se._foodService.listItemsCart.length == 0){
        resolve(false);
      }else{
        se._foodService.listItemsCart.forEach(element => {
          if(item.id == element.id && item.focategory.dayofweek == element.focategory.dayofweek){
            if(!item.itemExtraWater && !item.itemExtraOther && !element.itemExtraWater && !element.itemExtraOther){
              element.quantity += item.quantity;
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
                element.quantity +=item.quantity;
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
            if (a[i].id == b[j].id ) {
                continue aLoop;
            }
        }
        return true;
    }

    return false;
  }
}
