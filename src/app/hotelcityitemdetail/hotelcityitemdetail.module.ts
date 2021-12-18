import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelCityItemDetailPage } from './hotelcityitemdetail';
import { IonicImageLoader } from 'ionic-image-loader';

@NgModule({
  declarations: [
    HotelCityItemDetailPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    RouterModule.forChild([
      {
        path: '',
        component: HotelCityItemDetailPage
      }
    ])
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HotelCityItemDetailPageModule {}
