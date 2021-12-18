import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripaymentcarcomboPage } from './mytripaymentcarcombo.page';

const routes: Routes = [
  {
    path: '',
    component: MytripaymentcarcomboPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MytripaymentcarcomboPage]
})
export class MytripaymentcarcomboPageModule {}
