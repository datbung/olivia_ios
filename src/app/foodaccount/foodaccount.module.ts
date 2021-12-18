import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodAccountPage } from './foodaccount.page';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader
  ],
  declarations: [FoodAccountPage],
  exports: [FoodAccountPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodAccountPageModule {}
