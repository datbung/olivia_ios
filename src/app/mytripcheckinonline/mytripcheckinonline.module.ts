import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripCheckinOnlinePage } from './mytripcheckinonline.page';

const routes: Routes = [
  {
    path: '',
    component: MytripCheckinOnlinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MytripCheckinOnlinePage]
})
export class MytripCheckinOnlinePageModule {}
