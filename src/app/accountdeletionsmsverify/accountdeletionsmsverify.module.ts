import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountDeletionSmsVerifyPage } from './accountdeletionsmsverify.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDeletionSmsVerifyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountDeletionSmsVerifyPage]
})
export class AccountDeletionSmsVerifyPageModule {}
