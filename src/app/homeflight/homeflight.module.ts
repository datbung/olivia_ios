import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeflightPage } from './homeflight.page';
import { FlightmytripPageModule } from '../flightmytrip/flightmytrip.module';
import { FlightnotifyPageModule } from '../flightnotify/flightnotify.module';
import { FlightaccountPageModule } from '../flightaccount/flightaccount.module';
import { FlighttopdealPageModule } from '../flighttopdeal/flighttopdeal.module';
import { FlightusefulPageModule } from '../flightuseful/flightuseful.module';
import { OrderPageModule } from '../order/order.module';
import { BookingPageModule } from '../bizTravel/booking/booking.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlightmytripPageModule,
    FlightnotifyPageModule,
    FlightaccountPageModule,
    FlighttopdealPageModule,
    FlightusefulPageModule,
    OrderPageModule,
    BookingPageModule
  ],
  declarations: [HomeflightPage],
  exports: [HomeflightPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeflightPageModule {}
