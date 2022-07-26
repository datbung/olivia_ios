import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdddiscountPage } from './adddiscount.page';
import { VoucherSlidePageModule } from '../voucher/voucherslide/voucherslide.module';
import { VoucherSlideCarComboPageModule } from '../voucher/voucherslidecarcombo/voucherslidecarcombo.module';
import { VoucherSlideHotelPageModule } from '../voucher/voucherslidehotel/voucherslidehotel.module';
import { VoucherSlideFlightComboPageModule } from '../voucher/voucherslideflightcombo/voucherslideflightcombo.module';

const routes: Routes = [
  {
    path: '',
    component: AdddiscountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoucherSlidePageModule,
    VoucherSlideHotelPageModule,
    VoucherSlideCarComboPageModule,
    VoucherSlideFlightComboPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdddiscountPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdddiscountPageModule {}
