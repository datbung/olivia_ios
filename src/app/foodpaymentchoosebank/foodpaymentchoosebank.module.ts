import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodpaymentchoosebankPage } from './foodpaymentchoosebank.page';

const routes: Routes = [
  {
    path: '',
    component: FoodpaymentchoosebankPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodpaymentchoosebankPage]
})
export class FoodpaymentchoosebankPageModule {}
