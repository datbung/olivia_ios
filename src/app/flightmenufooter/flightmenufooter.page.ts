import { Component, OnInit, ViewChild, HostListener, NgZone } from '@angular/core';
import { NavController, ModalController, ToastController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { flightService } from '../providers/flightService';
import { C } from './../providers/constants';
import { FoodfilterPage } from '../foodfilter/foodfilter.page';
import { OverlayEventDetail } from '@ionic/core';

@Component({
  selector: 'app-flightmenufooter',
  templateUrl: './flightmenufooter.page.html',
  styleUrls: ['./flightmenufooter.page.scss'],
})

export class FlightMenuFooterPage {
    menuindex:any = 1;
    countflight = 0;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        public _flightService: flightService,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone) {

        }

        ngOnInit(){
          this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            this.zone.run(()=>{
              this.menuindex = data;
              if(data == 1){
                $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                $(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
              }
              else {
                $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                $(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
              }
            })
              
            })
      }

      menuFlightClick(menuindex){
        var se = this;
        se.zone.run(()=>{
            se.menuindex = menuindex;
            se._flightService.tabFlightIndex = menuindex;
            se._flightService.itemMenuFlightClick.emit(menuindex);
        })
        
        if(menuindex == 1){
          $(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
          $(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
          $(".cls-notice").removeClass("cls-disabled").addClass("cls-visible");
        }
        else {
          $(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
          $(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
          $(".cls-notice").removeClass("cls-visible").addClass("cls-disabled");
        }
      }
}