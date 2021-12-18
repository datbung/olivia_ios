import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CooperateverifyotpPage } from './cooperateverifyotp.page';

const routes: Routes = [
  {
    path: '',
    component: CooperateverifyotpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CooperateverifyotpPage]
})
export class CooperateverifyotpPageModule {}
