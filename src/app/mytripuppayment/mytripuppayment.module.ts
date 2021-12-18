import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripuppaymentPage } from './mytripuppayment.page';

const routes: Routes = [
  {
    path: '',
    component: MytripuppaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MytripuppaymentPage]
})
export class MytripuppaymentPageModule {}
