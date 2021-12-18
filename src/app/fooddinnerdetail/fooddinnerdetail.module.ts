import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodDinnerDetailPage } from './fooddinnerdetail.page';
//import { FooddinnerItemPageModule } from '../fooddinneritem/fooddinneritem.module';
//import { FoodChefItemPageModule } from '../foodchefitem/foodchefitem.module';
import { FoodDinnerItemLikePageModule } from '../fooddinneritemlike/fooddinneritemlike.module';
import { IonicImageLoader } from 'ionic-image-loader';

const routes: Routes = [
  {
    path: '',
    component: FoodDinnerDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //FooddinnerItemPageModule,
    //FoodChefItemPageModule,
    IonicImageLoader,
    FoodDinnerItemLikePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodDinnerDetailPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodDinnerDetailPageModule {}
