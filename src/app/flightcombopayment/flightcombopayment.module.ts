import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightcombopaymentPage } from './flightcombopayment.page';

const routes: Routes = [
  {
    path: '',
    component: FlightcombopaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightcombopaymentPage]
})
export class FlightcombopaymentPageModule {}
