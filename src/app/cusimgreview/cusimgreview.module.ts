import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicImageLoader } from 'ionic-image-loader';
import { IonicModule } from '@ionic/angular';

import { CusimgreviewPage } from './cusimgreview.page';

const routes: Routes = [
  {
    path: '',
    component: CusimgreviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    RouterModule.forChild(routes)
  ],
  declarations: [CusimgreviewPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CusimgreviewPageModule {}
