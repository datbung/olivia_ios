import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlightInternationalFilterClassPage } from './flightinternationalfilterclass.page';

const routes: Routes = [
  {
    path: '',
    component: FlightInternationalFilterClassPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FlightInternationalFilterClassPage]
})
export class FlightInternationalFilterClassPageModule {}