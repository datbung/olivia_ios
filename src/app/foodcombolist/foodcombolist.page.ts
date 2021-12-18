import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { foodService } from '../providers/foodService';

@Component({
  selector: 'app-foodcombolist',
  templateUrl: './foodcombolist.page.html',
  styleUrls: ['./foodcombolist.page.scss'],
})
export class FoodcombolistPage implements OnInit {

  foods = [
    { id: 3, CategoryName: "Bữa trưa thanh đạm vị Bắc",CategoryCode: "bua-trua-thanh-dam-vi-bac-deluxe", CategoryTypeId: 0, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-bac-it-dau-mo-deluxe.jpg', PromoTitle: "Được yêu thích", AvgPoint: 9.2, commend: 54,TypePriceId: 3},
    { id: 4, CategoryName: "Bữa trưa đậm đà vị Bắc",CategoryCode: "bua-trua-dam-da-vi-bac-standard", CategoryTypeId: 0, GroupId: 1, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-bac-binh-thuong-standard.jpg', PromoTitle: "", AvgPoint: 9.2, commend: 54,TypePriceId: 1},
    { id: 7, CategoryName: "Bữa trưa thanh đạm vị Trung",CategoryCode: "bua-trua-thanh-dam-vi-trung-standard", CategoryTypeId: 1, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-trung-it-dau-mo-standard.png', PromoTitle: "", AvgPoint: 9.2, commend: 54,TypePriceId: 1},
    { id: 13, CategoryName: "Bữa trưa thanh đạm vị Nam",CategoryCode: "bua-trua-thanh-dam-vi-nam-standard", CategoryTypeId: 2, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-nam-it-dau-mo-standard.jpg', PromoTitle: "iVIVU Recommend", AvgPoint: 9.2, commend: 54,TypePriceId: 1},
    { id: 24, CategoryName: "Bữa trưa đậm đà vị 3 miền",CategoryCode: "bua-trua-dam-da-vi-3-mien-deluxe", CategoryTypeId: 3, GroupId: 1, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-3-mien-binh-thuong-deluxe.jpg', PromoTitle: "Được yêu thích", AvgPoint: 9.2, commend: 54,TypePriceId: 3},
  ]

  constructor(private navCtrl: NavController,
    public foodService: foodService) { }

  ngOnInit() {
    this.foodService.listItemsFood = this.foods;
  }
  goback(){

  }

  itemComboClick(item){
    var se = this;
    se.foodService.itemFoodDetail = item;
    se.navCtrl.navigateForward('/foodcombodetail');
  }

  showFilter(){

  }
  addToCart(){

  }
}
