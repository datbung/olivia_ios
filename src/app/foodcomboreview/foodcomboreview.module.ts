import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodcomboreviewPage } from './foodcomboreview.page';
import { FoodChefItemPageModule } from '../foodchefitem/foodchefitem.module';

const routes: Routes = [
  {
    path: '',
    component: FoodcomboreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodChefItemPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodcomboreviewPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodcomboreviewPageModule {}
