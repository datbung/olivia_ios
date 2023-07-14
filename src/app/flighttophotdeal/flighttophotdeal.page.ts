import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../providers/globalfunction';
import * as $ from 'jquery';
import { C } from '../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { ImageLoaderService } from 'ionic-image-loader';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../providers/book-service';
import { DayConfig, CalendarModalOptions, CalendarResult, CalendarModal } from 'ion2-calendar';
import {flightService} from '../providers/flightService';
import * as request from 'requestretry';

@Component({
  selector: 'app-flighttophotdeal',
  templateUrl: './flighttophotdeal.page.html',
  styleUrls: ['./flighttophotdeal.page.scss'],
})
export class FlightTopHotDealPage {
    listflighttophotdeal: any= [];
    memberid: any;
    tabInbound: number=1;
    slideOpts = {
      loop: false,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 10,
      zoom: {
        toggle: false
      }
    };
    loadinterflighttopdealdone: boolean=false;
    loadflighttopdealdone: boolean=false;
    listflighttopdealoneway: any=[];
    listflighttopdealroundtrip: any=[];
    roundTrip: any;
    hassomelistinteroneway: boolean;
    hassomelistintertwoway: boolean;
    listflighttopdeal = [];
    listinternationalflighttopdeal=[];
    sliderInboundTab: any;
    sliderOutboundTab1: any;
    sliderOutboundTab2: any;
    sliderOutboundTab3: any;
    sliderOutboundTab4: any;
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        private imageLoader: ImageLoaderService,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public _flightService: flightService) { 
            this.storage.get('jti').then(jti => {``
            if (jti) {
              this.memberid = jti;
            }
          })
            //this.loadflighttophotdeal();
        }
    
        ngOnInit(){
            
        }

        

          slidetabchange(type){
            this.sliderInboundTab.getActiveIndex().then(index => {
                this.tabInbound = index+1;
            });
        }

        slidetaboutboundchange(itemchange, index){
          let slider = index == 1? this.sliderOutboundTab1 : (index==2 ? this.sliderOutboundTab2 : (index==3 ? this.sliderOutboundTab3 : this.sliderOutboundTab4));
          slider.getActiveIndex().then(index => {
            itemchange.tabInbound = index+1;
          });
        }

        selectDot(idx){
          this.tabInbound=idx;
          this.sliderInboundTab.slideTo(this.tabInbound);
        }

        selectDotOutbound(itemchange, index, indextab){
          let slider = index == 1? this.sliderOutboundTab1 : (index==2 ? this.sliderOutboundTab2 : (index==3 ? this.sliderOutboundTab3 : this.sliderOutboundTab4));
          itemchange.tabInbound=indextab;
          slider.slideTo(indextab);
        }
}