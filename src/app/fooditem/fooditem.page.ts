import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.page.html',
  styleUrls: ['./fooditem.page.scss'],
})
export class FoodItemPage {
    @Input() item:any;
    restaurant_before:any;
    restaurant_name:any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public foodService: foodService) {
          
       }
}