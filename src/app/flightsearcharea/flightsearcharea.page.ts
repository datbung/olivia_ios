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
  selector: 'app-flightsearcharea',
  templateUrl: './flightsearcharea.page.html',
  styleUrls: ['./flightsearcharea.page.scss'],
})
export class FlightSearchAreaPage implements OnInit {
  //@ViewChild('ipSearchAiport') ipSearchAiport ;
  loadpricedone = false;
  items: any = [];
  itemsfull: any = [];
  itemsHasSameCity: any=[];
  isdepart:any;
  listLastSearch = [];
  itemsRegular = [];
  itemsRegularInternational = [];

  constructor(private navCtrl: NavController, private gf: GlobalFunction,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private imageLoader: ImageLoaderService,
    public storage: Storage,
    private actionsheetCtrl: ActionSheetController,
    public valueGlobal: ValueGlobal,
    public searchhotel: SearchHotel,
    public _flightService: flightService) { 
       this.isdepart = this._flightService.searchDepartCode;
        if(!this._flightService.listAllPlaceByArea){
          this.gf.getAllPlaceByArea().then((data) => {
              this.zone.run(() => data.sort(function (a, b) {
                return a.order - b.order;
              })
            )
            this._flightService.listAllPlaceByArea = data;
          });
        }else{

          this.zone.run(()=>{
          this.items = [...this._flightService.listAllPlaceByArea];
          
        })
        }

    }

    ngOnInit(){

    }


    goback(){
      if(this.valueGlobal.backValue == "flightchangeinfo"){
        this.modalCtrl.dismiss();
      }else{
        $('.flightsearchairport-header').css('background', 'transparent');
        this.navCtrl.back();
      }
        
    }

    async itemclick(item){
      var se = this;
      // if(se._flightService.searchDepartCode){
      //   se._flightService.itemFlightCache.departCode = item.code;
      //   se._flightService.itemFlightCache.departCity = item.city;
      //   se._flightService.itemFlightCache.departAirport = item.airport;
      //   se._flightService.itemFlightCache.itemDepartLocation = item;
      // }else{
        se._flightService.searchDepartCode = false;
        se._flightService.itemFlightCache.returnCode = item.code;
        se._flightService.itemFlightCache.returnCity = item.city;
        se._flightService.itemFlightCache.returnAirport = item.airport;
        se._flightService.itemFlightCache.itemReturnLocation = item;
      //}
      se.gf.createListLastSearchFlight(item);
      se._flightService.itemFlightChangeLocation.emit(item);
      se.navCtrl.back();
    }
}