import { Component, OnInit, ViewChild, HostListener, NgZone, Input } from '@angular/core';
import { NavController, ModalController, ToastController, ActionSheetController, IonSlides } from '@ionic/angular';
import { GlobalFunction } from '../../providers/globalfunction';
import * as $ from 'jquery';
import { C } from './../../providers/constants';
import { OverlayEventDetail } from '@ionic/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { ValueGlobal, SearchHotel } from '../../providers/book-service';
import {flightService} from './../../providers/flightService';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { tourService } from '../../providers/tourService';


@Component({
  selector: 'app-flightinternationalfilterclass',
  templateUrl: './flightinternationalfilterclass.page.html',
  styleUrls: ['./flightinternationalfilterclass.page.scss'],
})

export class FlightInternationalFilterClassPage implements OnInit {
  currentVersion: string;
  
    constructor(private navCtrl: NavController, private gf: GlobalFunction,
        private modalCtrl: ModalController,
        private toastCtrl: ToastController,
        private zone: NgZone,
        public storage: Storage,
        private actionsheetCtrl: ActionSheetController,
        public valueGlobal: ValueGlobal,
        public searchhotel: SearchHotel,
        public _flightService: flightService,
        private appVersion: AppVersion,
        public tourService: tourService) { 
          this.appVersion.getVersionNumber().then((version) => {
            console.log(version)
            this.zone.run(()=>{
              this.currentVersion = version;
            })
           
          })
              
        }

        ngOnInit(){
            var se = this;
        }

        close(){
            this.modalCtrl.dismiss();
        }

        checkItemClass(item, value){
          if(!this._flightService.objectFilterInternational){
            this._flightService.objectFilterInternational = {};
          }
          //item.stopEventDefault;
          //this._flightService.objectFilterInternational.classSelected = -1;
          //this._flightService.objectFilterInternational.classSelected = this.getTicketClassByType(value);
          //this._flightService.objectFilterInternational.classSelectedName = '';
          //this._flightService.objectFilterInternational.classSelectedName = this.getTicketClassNameByType(value);
          this._flightService.classSelected = this.getTicketClassByType(value);
          this._flightService.classSelectedName = this.getTicketClassNameByType(value);
          this.modalCtrl.dismiss();
        }

        getTicketClassByType(type){
          let res = '-1';
          switch(type){
            case 1:
                res = 'Economy';
              break;
                case 2:
                res = 'PremiumEconomy';
              break;
                case 3:
                res = 'Business';
              break;
              case 4:
                res = 'First';
                break;
              case 5:
                res = 'PremiumFirst';
                break;
              default:
                res = '-1';
              break;
          }
          return res;
        }

        getTicketClassNameByType(type){
          let res = '-1';
          switch(type){
            case 1:
                res = 'Phổ thông';
              break;
                case 2:
                res = 'Phổ thông đặc biệt';
              break;
                case 3:
                res = 'Thương gia';
              break;
              case 4:
                res = 'Hạng nhất';
                break;
              case 5:
                res = 'Hạng nhất đặc biệt';
                break;
              default:
                res = 'Nhiều hạng'
              break;
          }
          return res;
        }
}