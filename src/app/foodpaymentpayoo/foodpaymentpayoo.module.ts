import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodpaymentpayooPage } from './foodpaymentpayoo.page';

const routes: Routes = [
  {
    path: '',
    component: FoodpaymentpayooPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodpaymentpayooPage]
})
export class FoodpaymentpayooPageModule {}
