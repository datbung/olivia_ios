import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeflightPage } from './homeflight.page';
import { FlighttopdealPageModule } from '../flighttopdeal/flighttopdeal.module';
import { FlightusefulPageModule } from '../flightuseful/flightuseful.module';
import { OrderPageModule } from '../order/order.module';
import { BookingPageModule } from '../bizTravel/booking/booking.module';
import { FlighttopplanPageModule } from '../flighttopplan/flighttopplan.module';
import { FlightTopReviewPageModule } from '../flighttopreview/flighttopreview.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlighttopdealPageModule,
    FlightusefulPageModule,
    OrderPageModule,
    BookingPageModule,
    FlighttopplanPageModule,
    FlightTopReviewPageModule,
  ],
  declarations: [HomeflightPage],
  exports: [HomeflightPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeflightPageModule {}
