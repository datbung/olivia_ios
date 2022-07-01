import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShuttlebusnotePage } from './shuttlebusnote.page';

const routes: Routes = [
  {
    path: '',
    component: ShuttlebusnotePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShuttlebusnotePage]
})
export class ShuttlebusnotePageModule {}
