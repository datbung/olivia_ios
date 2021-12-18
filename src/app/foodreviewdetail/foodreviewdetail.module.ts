import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodreviewdetailPage } from './foodreviewdetail.page';

const routes: Routes = [
  {
    path: '',
    component: FoodreviewdetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodreviewdetailPage]
})
export class FoodreviewdetailPageModule {}
