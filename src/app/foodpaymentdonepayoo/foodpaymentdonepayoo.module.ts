import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodpaymentdonepayooPage } from './foodpaymentdonepayoo.page';

const routes: Routes = [
  {
    path: '',
    component: FoodpaymentdonepayooPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodpaymentdonepayooPage]
})
export class FoodpaymentdonepayooPageModule {}
