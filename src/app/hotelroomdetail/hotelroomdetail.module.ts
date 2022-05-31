import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HotelRoomDetailPage } from './hotelroomdetail';
import { IonicImageLoader } from 'ionic-image-loader';
@NgModule({
  declarations: [
    HotelRoomDetailPage,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicImageLoader,
    RouterModule.forChild([
      {
        path: '',
        component: HotelRoomDetailPage
      }
    ],)
    
  ],
  
})
export class HotelRoomDetailPageModule {}
