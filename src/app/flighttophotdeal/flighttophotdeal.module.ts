import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightTopHotDealPage } from './flighttophotdeal.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [FlightTopHotDealPage],
  exports: [FlightTopHotDealPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FlightTopHotDealPageModule {}