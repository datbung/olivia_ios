import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FoodreviewweekPage } from './foodreviewweek.page';

const routes: Routes = [
  {
    path: '',
    component: FoodreviewweekPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodreviewweekPage]
})
export class FoodreviewweekPageModule {}
