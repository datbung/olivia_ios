import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RoompaymentselectEanPage } from './roompaymentselect-ean';
import { FormsModule } from '@angular/forms';
import { VoucherSlidePageModule } from '../voucher/voucherslide/voucherslide.module';
@NgModule({
  declarations: [
    RoompaymentselectEanPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    VoucherSlidePageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoompaymentselectEanPage
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoompaymentselectEanPageModule {}
