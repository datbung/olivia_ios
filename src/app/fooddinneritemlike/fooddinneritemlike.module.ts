import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodDinnerItemLikePage } from './fooddinneritemlike.page';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader
  ],
  declarations: [FoodDinnerItemLikePage],
  exports: [FoodDinnerItemLikePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodDinnerItemLikePageModule {}
