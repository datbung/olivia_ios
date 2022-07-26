import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightpricedetailPage } from './flightpricedetail.page';

const routes: Routes = [
  {
    path: '',
    component: FlightpricedetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightpricedetailPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FlightpricedetailPageModule {}
