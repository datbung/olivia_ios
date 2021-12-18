import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
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
  selector: 'app-flighttopdeal',
  templateUrl: './flighttopdeal.page.html',
  styleUrls: ['./flighttopdeal.page.scss'],
})
export class FlighttopdealPage {
    listflighttopdeal: any= [];

    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            this.loadDataFlightTopdeal();
        }
    
        ngOnInit(){
            
        }

        loadDataFlightTopdeal(){
            let url = C.urls.baseUrl.urlFlight + "gate/apiv1/GetSlideHome";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
                }, {}, "homeflight", "GetSlideHome").then((data) =>{
                  if(data){
                      data.forEach(element => {
                          if(element.version == 2 && element.content){
                              element.validToText = moment(element.validTo).format("DD/MM/YYYY");
                                this.listflighttopdeal.push(element);
                          }
                        
                      });
                      
                  }
                })
        }

        itemclickht(item){
            this._flightService.itemFlightTopDeal = item;
            this.navCtrl.navigateForward('/flighttopdealdetail');
        }

}