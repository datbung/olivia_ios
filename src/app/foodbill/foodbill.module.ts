import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodbillPage } from './foodbill.page';
import { FoodItemLikePageModule } from '../fooditemlike/fooditemlike.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { FoodDinnerItemLikePageModule } from '../fooddinneritemlike/fooddinneritemlike.module';

const routes: Routes = [
  {
    path: '',
    component: FoodbillPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodItemLikePageModule,
    IonicImageLoader,
    FoodDinnerItemLikePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodbillPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodbillPageModule {}
