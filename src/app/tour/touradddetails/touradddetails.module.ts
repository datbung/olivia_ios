import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { TourAddDetailsPage } from './touradddetails.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TourAddDetailsPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: TourAddDetailsPage
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TourAddDetailsPageModule {}
