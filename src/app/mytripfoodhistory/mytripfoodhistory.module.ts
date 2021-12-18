import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MytripFoodHistoryPage } from './mytripfoodhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [MytripFoodHistoryPage],
  exports: [MytripFoodHistoryPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MytripFoodHistoryPageModule {}
