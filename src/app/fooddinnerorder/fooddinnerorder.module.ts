import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodDinnerOrderPage } from './fooddinnerorder.page';

const routes: Routes = [
  {
    path: '',
    component: FoodDinnerOrderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodDinnerOrderPage]
})
export class FoodDinnerOrderPageModule {}
