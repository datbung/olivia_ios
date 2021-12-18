import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodItemPage } from './fooditem.page';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader
  ],
  declarations: [FoodItemPage],
  exports: [FoodItemPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodItemPageModule {}
