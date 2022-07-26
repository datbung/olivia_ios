import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccountDeletionSmsPage } from './accountdeletionsms.page';

const routes: Routes = [
  {
    path: '',
    component: AccountDeletionSmsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccountDeletionSmsPage]
})
export class AccountDeletionSmsPageModule {}
