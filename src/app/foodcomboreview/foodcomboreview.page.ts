import { Component, OnInit } from '@angular/core';
import { foodService } from '../providers/foodService';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-foodcomboreview',
  templateUrl: './foodcomboreview.page.html',
  styleUrls: ['./foodcomboreview.page.scss'],
})
export class FoodcomboreviewPage implements OnInit {
  comboname: string;
  chef: any;

  constructor(public _foodService : foodService, private navCtrl: NavController) { 
    this.comboname = "Thanh đạm vị Bắc";
  }

  ngOnInit() {
    this.chef = this._foodService.chef;
  }

  goback(){
    this.navCtrl.back();
  }
}
