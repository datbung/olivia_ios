import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightcombopaymentPage } from './flightcombopayment.page';
import { VoucherSlidePageModule } from '../voucher/voucherslide/voucherslide.module';

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
    VoucherSlidePageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightcombopaymentPage]
})
export class FlightcombopaymentPageModule {}
