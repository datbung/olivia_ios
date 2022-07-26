import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RoompaymentselectPage } from './roompaymentselect';
import { FormsModule } from '@angular/forms';
import { VoucherSlidePageModule } from '../voucher/voucherslide/voucherslide.module';
@NgModule({
  declarations: [
    RoompaymentselectPage,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    VoucherSlidePageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoompaymentselectPage
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class RoompaymentselectPageModule {}
