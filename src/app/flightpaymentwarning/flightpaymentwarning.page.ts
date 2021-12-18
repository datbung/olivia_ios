import { GlobalFunction } from './../providers/globalfunction';
import { NavController, Platform, ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../providers/constants';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../providers/flightService';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { ValueGlobal } from '../providers/book-service';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
@Component({
  selector: 'app-flightpaymentwarning',
  templateUrl: './flightpaymentwarning.page.html',
  styleUrls: ['./flightpaymentwarning.page.scss'],
})
export class FlightpaymentwarningPage implements OnInit {

  bookingCode;stt;text;qrimg;BillingCode;total;PeriodPaymentDate
  intervalID: any;
  allowCheck: any = true;
    totalpricedisplay: any;
    phone: any;
    bookingNo: string;
  constructor(private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private _flightService: flightService,private safariViewController: SafariViewController,
    private backgroundmode: BackgroundMode,
    private platform: Platform,
    public valueGlobal: ValueGlobal,
    private modalCtrl: ModalController) { 
        this.totalpricedisplay= this._flightService.itemFlightCache.totalPriceDisplay;
        this.phone = this._flightService.itemFlightCache.phone;
        this.bookingNo = this._flightService.itemFlightCache.pnr.resNo;
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
    this.clearItemCache();
    this._flightService.itemTabFlightActive.emit(true);
    this.valueGlobal.backValue = "homeflight";
    this.navCtrl.navigateBack('/tabs/tab1');
  }

  goback(){
    this.navCtrl.navigateBack('/tabs/tab1');
  }

    async showQuickBack(){
        const modal: HTMLIonModalElement =
        await this.modalCtrl.create({
        component: FlightquickbackPage,
        componentProps: {
            aParameter: true,
        },
        showBackdrop: true,
        backdropDismiss: true,
        enterAnimation: CustomAnimations.iosCustomEnterAnimation,
        leaveAnimation: CustomAnimations.iosCustomLeaveAnimation,
        cssClass: "modal-flight-quick-back",
        });
    modal.present();
    }
}