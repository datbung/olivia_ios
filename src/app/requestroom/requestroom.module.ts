import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { RequestRoomPage } from './requestroom';

@NgModule({
  declarations: [
    RequestRoomPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild( [{
      path: '',
      component: RequestRoomPage
    }]),
  ],
})
export class RequestRoomPageModule {}
