import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';
import { ImageLoaderConfigService } from 'ionic-image-loader';

@Component({
  selector: 'app-fooddinneritem',
  templateUrl: './fooddinneritem.page.html',
  styleUrls: ['./fooddinneritem.page.scss'],
})
export class FoodDinnerItemPage {
    @Input() item:any;
    restaurant_before:any;
    restaurant_name:any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public foodService: foodService,
        private imageLoaderConfig: ImageLoaderConfigService) {
          imageLoaderConfig.enableSpinner(false);
    
          // set the maximum concurrent connections to 10
          imageLoaderConfig.setConcurrency(10);
          // if(this.item){
          //   this.item.priceDisplay = this.gf.convertNumberToString(this.item.price);
          // }
       }
}