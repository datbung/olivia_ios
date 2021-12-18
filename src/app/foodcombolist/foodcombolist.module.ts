import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodcombolistPage } from './foodcombolist.page';
import { FoodItemPageModule } from '../fooditem/fooditem.module';

const routes: Routes = [
  {
    path: '',
    component: FoodcombolistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodItemPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodcombolistPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FoodcombolistPageModule {}
