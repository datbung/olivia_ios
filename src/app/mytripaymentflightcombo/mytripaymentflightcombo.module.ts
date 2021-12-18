import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripaymentflightcomboPage } from './mytripaymentflightcombo.page';

const routes: Routes = [
  {
    path: '',
    component: MytripaymentflightcomboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MytripaymentflightcomboPage]
})
export class MytripaymentflightcomboPageModule {}
