import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-fooditemlike',
  templateUrl: './fooditemlike.page.html',
  styleUrls: ['./fooditemlike.page.scss'],
})
export class FoodItemLikePage {
    @Input() item:any;
    restaurant_before:any;
    restaurant_name:any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public _foodService: foodService) {
       }

       
  itemComboClick(item){
    var se = this;
    se._foodService.itemFoodDetail = item;
    //chọn từ menu liên quan trên detail
    if(item.isFromRelate){
      this._foodService.itemRelateClick.emit(item);
    }else{
      item.isFromFoodbill = true;
      se.navCtrl.navigateForward('/foodcombodetail');
    }
    
  }
}