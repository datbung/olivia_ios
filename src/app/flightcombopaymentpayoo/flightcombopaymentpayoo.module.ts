import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightcombopaymentpayooPage } from './flightcombopaymentpayoo.page';

const routes: Routes = [
  {
    path: '',
    component: FlightcombopaymentpayooPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightcombopaymentpayooPage]
})
export class FlightcombopaymentpayooPageModule {}
