import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides, IonContent, AlertController, PickerController } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from './../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from './../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flighttopdealdetail',
  templateUrl: './flighttopdealdetail.page.html',
  styleUrls: ['./flighttopdealdetail.page.scss'],
})
export class FlighttopdealdetailPage implements OnInit {
    item: any;

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private zone: NgZone,
        public storage: Storage,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            if(this._flightService.itemFlightTopDeal){
                this.item = this._flightService.itemFlightTopDeal;
                this.item.content = this.item.content.replace('target="_blank"','');
                this.item.content = this.item.content.replace('target="_blank"','');
            }
        }

        ngOnInit(){

        }

        goback(){
            //this._flightService.itemHomeFlightScrollTop.emit(1);
            this.navCtrl.back();
        }

        book(){
            this._flightService.itemHomeFlightScrollTop.emit(1);
            this.navCtrl.back();
        }

        showLink(item) {
        }
}