import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomefoodPage } from './homefood.page';
import { FoodItemPageModule } from '../fooditem/fooditem.module';
import { FoodDinnerItemPageModule } from '../fooddinneritem/fooddinneritem.module';
//import { FoodmyOrderPageModule } from '../foodmyorder/foodmyorder.module';
import { FoodMenuFooterPageModule } from '../foodmenufooter/foodmenufooter.module';
import { FoodAccountPageModule } from '../foodaccount/foodaccount.module';
import { FoodNotifyPageModule } from '../foodnotify/foodnotify.module';
import { IonicImageLoader } from 'ionic-image-loader';
import { OrderPageModule } from '../order/order.module';
import { BookingPageModule } from '../bizTravel/booking/booking.module';

@NgModule({
  declarations: [
    HomefoodPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomefoodPage
      }
    ]),
    FoodItemPageModule,
    //FoodmyOrderPageModule,
    FoodMenuFooterPageModule,
    FoodAccountPageModule,
    FoodNotifyPageModule,
    IonicImageLoader,
    FoodDinnerItemPageModule,
    OrderPageModule,
    BookingPageModule
  ],
  //declarations: [HomefoodPage],
  //exports: [HomefoodPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomefoodPageModule {}
