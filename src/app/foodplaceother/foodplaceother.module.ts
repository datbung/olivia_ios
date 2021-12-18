import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodplaceotherPage } from './foodplaceother.page';

const routes: Routes = [
  {
    path: '',
    component: FoodplaceotherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodplaceotherPage]
})
export class FoodplaceotherPageModule {}
