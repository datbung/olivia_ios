import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodcombodetailPage } from './foodcombodetail.page';
import { FoodItemPageModule } from '../fooditem/fooditem.module';
import { FoodChefItemPageModule } from '../foodchefitem/foodchefitem.module';
import { FoodItemLikePageModule } from '../fooditemlike/fooditemlike.module';
import { IonicImageLoader } from 'ionic-image-loader';

const routes: Routes = [
  {
    path: '',
    component: FoodcombodetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodItemPageModule,
    FoodChefItemPageModule,
    IonicImageLoader,
    FoodItemLikePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodcombodetailPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodcombodetailPageModule {}
