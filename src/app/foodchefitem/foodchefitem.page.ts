import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-foodchefitem',
  templateUrl: './foodchefitem.page.html',
  styleUrls: ['./foodchefitem.page.scss'],
})
export class FoodChefItemPage {
    @Input() item:any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public foodService: foodService) {
       }
}