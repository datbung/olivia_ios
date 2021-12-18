import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { HotelListPageModule } from '../hotel-list/hotel-list.module';
import { HotelDetailPageModule } from '../hoteldetail/hoteldetail.module';
import { HotelListMoodPageModule } from '../hotel-list-mood/hotel-list-mood.module';
import { TabsPage } from './tabs.page';
import { FoodMenuFooterPageModule } from '../foodmenufooter/foodmenufooter.module';
import { FlightMenuFooterPageModule } from '../flightmenufooter/flightmenufooter.module';

const routes: Routes = [
  {
    path: '',
    component: TabsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    //RouterModule.forChild(routes)
    TabsPageRoutingModule,
    HotelListPageModule,
    FoodMenuFooterPageModule,
    FlightMenuFooterPageModule
  ],
  declarations: [TabsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TabsPageModule {}
