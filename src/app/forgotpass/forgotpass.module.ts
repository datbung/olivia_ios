import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ForgotpassPage } from './forgotpass.page';

const routes: Routes = [
  {
    path: '',
    component: ForgotpassPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ForgotpassPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [

  ],
})
export class ForgotpassPageModule {}
