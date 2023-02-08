import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CalendarModule } from "ion2-calendar";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PaymentqrcodePage } from './paymentqrcode.page';

@NgModule({
  declarations: [
    PaymentqrcodePage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( [{
      path: '',
      component: PaymentqrcodePage
    }]),
    CalendarModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class PaymentqrcodePageModule {}