import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { VoucherSlideFlightComboPage } from './voucherslideflightcombo.page';

@NgModule({
  declarations: [
    VoucherSlideFlightComboPage,
  ],
  exports: [ VoucherSlideFlightComboPage ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
})
export class VoucherSlideFlightComboPageModule {}