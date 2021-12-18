import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';
import { ImageLoaderConfigService } from 'ionic-image-loader';

@Component({
  selector: 'app-fooddinneritemlike',
  templateUrl: './fooddinneritemlike.page.html',
  styleUrls: ['./fooddinneritemlike.page.scss'],
})
export class FoodDinnerItemLikePage {
    @Input() item:any;
    restaurant_before:any;
    restaurant_name:any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public _foodService: foodService,
        private imageLoaderConfig: ImageLoaderConfigService) {
          imageLoaderConfig.enableSpinner(false);
    
          // set the maximum concurrent connections to 10
          imageLoaderConfig.setConcurrency(10);
          // if(this.item){
          //   this.item.priceDisplay = this.gf.convertNumberToString(this.item.price);
          // }
          
       }

       
  itemComboClick(item){
    var se = this;
    se._foodService.itemDinnerDetail = item;
    //chọn từ menu liên quan trên detail
    if(item.isFromRelate){
      this._foodService.itemDinnerRelateClick.emit(item);
    }else{
      item.isFromFoodbill = true;
      se.navCtrl.navigateForward('/fooddinnerdetail');
    }
    
  }
}