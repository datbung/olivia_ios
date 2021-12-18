import { GlobalFunction } from './../providers/globalfunction';
import { NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../providers/constants';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../providers/flightService';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ValueGlobal } from '../providers/book-service';
@Component({
  selector: 'app-flightpaymenterror',
  templateUrl: './flightpaymenterror.page.html',
  styleUrls: ['./flightpaymenterror.page.scss'],
})
export class FlightpaymenterrorPage implements OnInit {

  bookingCode;stt;text;qrimg;BillingCode;total;PeriodPaymentDate
  intervalID: any;
  allowCheck: any = true;
  constructor(private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private _flightService: flightService,private safariViewController: SafariViewController,
    private backgroundmode: BackgroundMode,
    private platform: Platform,
    public valueGlobal: ValueGlobal) { 
        this.clearItemCache();
    
    }

  ngOnInit() {
  }

  clearItemCache(){
    this._flightService.itemFlightCache = {};
    this._flightService.itemFlightCache.departLuggage = [];
    this._flightService.itemFlightCache.returnLuggage = [];
    this._flightService.itemFlightCache.jsonSeats = null;
        this._flightService.itemFlightCache.listdepartseatselected = "";
        this._flightService.itemFlightCache.listreturnseatselected = "";
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.hasChoiceLuggage = false;
        this._flightService.itemFlightCache.listSeatNormal = [];
        this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this._flightService.itemFlightCache.departConditionInfo = null;
        this._flightService.itemFlightCache.returnConditionInfo = null;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
  }

  gohome(){
    this._flightService.itemTabFlightActive.emit(true);
    this.valueGlobal.backValue = "homeflight";
    this.navCtrl.navigateBack('/tabs/tab1');
  }
}