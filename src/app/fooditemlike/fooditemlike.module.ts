import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodItemLikePage } from './fooditemlike.page';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader
  ],
  declarations: [FoodItemLikePage],
  exports: [FoodItemLikePage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodItemLikePageModule {}
