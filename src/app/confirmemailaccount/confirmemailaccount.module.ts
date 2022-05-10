import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConfirmemailaccountPage } from './confirmemailaccount.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmemailaccountPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ConfirmemailaccountPage]
})
export class ConfirmemailaccountPageModule {}
