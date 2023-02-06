import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TicketAdddetailsPage } from './ticketadddetails.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { VoucherSlideTourPageModule } from '../../voucher/voucherslidetour/voucherslidetour.module';

@NgModule({
  declarations: [
    TicketAdddetailsPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    //VoucherSlideTourPageModule,
    RouterModule.forChild([
      {
        path: '',
        component: TicketAdddetailsPage
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TicketAdddetailsPageModule {}
