import { GlobalFunction ,ActivityService} from './../../providers/globalfunction';
import { AlertController, NavController, Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../../providers/constants';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../../providers/flightService';
import { ValueGlobal } from '../../providers/book-service';
import { MytripService } from '../../providers/mytrip-service.service';
import { voucherService } from '../../providers/voucherService';
@Component({
  selector: 'app-flightinternationalpaymenttimeout',
  templateUrl: './flightinternationalpaymenttimeout.page.html',
  styleUrls: ['./flightinternationalpaymenttimeout.page.scss'],
})
export class FlightInternationalPaymentTimeoutPage implements OnInit {

  bookingCode;stt;text;qrimg;BillingCode;total;PeriodPaymentDate
  intervalID: any;
  allowCheck: any = true;
  allowrepay: boolean = false;
  errorCode: string='';
  errorMsg: string = '';
  showbutton: boolean = true;
  constructor(public activityService: ActivityService,private navCtrl:NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute,private _flightService: flightService,private safariViewController: SafariViewController,
    private platform: Platform,
    public valueGlobal: ValueGlobal,
    private zone: NgZone,
    private alertCtrl: AlertController,
    public _mytripservice: MytripService,
    public _voucherService: voucherService) { 
 
    }

  ngOnInit() {
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    // if (this.stt==0) {
    //   this.errorMsg = this._flightService.paymentError.noteIpn;
    //   this.callCheckHoldTicket('',this._flightService.itemFlightCache).then((check) => {
    //         if(this._flightService.itemFlightCache.dataSummaryBooking && this._flightService.itemFlightCache.dataSummaryBooking.urlPaymentAgain){
    //           this.zone.run(()=>{
    //             this.allowrepay = true;
    //           })
                
    //         }
    //       })
    // }
    // else{
    //   this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
    //   this.callCheckHoldTicketNew('',this.bookingCode).then((check) => {
    //     if(this._flightService.itemFlightCache.dataSummaryBooking && this._flightService.itemFlightCache.dataSummaryBooking.urlPaymentAgain){
    //       this.zone.run(()=>{
    //         this.allowrepay = true;
    //       })
            
    //     }
    //   })
    // }
    this.allowrepay = true;
  }

  callCheckHoldTicket(url, data){
    var res = false;
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+data.pnr.resNo,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "globalfunction";
          error.func = "updatePaymentMethod";
          error.param = JSON.stringify(options);
          se.gf.hideLoading();
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(se._flightService){
            se._flightService.itemFlightCache.dataSummaryBooking = result;
            se.zone.run(()=>{
              se.showbutton = true;
              se.gf.hideLoading();
              if(result && result.urlPaymentAgain){
                  se.allowrepay = true;
              }
            })
          }
        }
      })
    })
  }
  callCheckHoldTicketNew(url, bookingCode){
    var res = false;
    var se = this;
    se.gf.showLoading();
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+bookingCode,
        timeout: 180000, maxAttempts: 5, retryDelay: 20000,
        headers: {
          "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
          'Content-Type': 'application/json; charset=utf-8',
        },
      };
      request(options, function (error, response, body) {
        if (error) {
          error.page = "globalfunction";
          error.func = "updatePaymentMethod";
          error.param = JSON.stringify(options);
          se.gf.hideLoading();
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(se._flightService){
            se._flightService.itemFlightCache.dataSummaryBooking = result;
            se.zone.run(()=>{
              se.showbutton = true;
              se.gf.hideLoading();
              if(result && result.urlPaymentAgain){
                  se.allowrepay = true;
              }
            })
          }
        }
      })
    })
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

  gotoSearchPage(){
  
    if (this.stt==0) {
      if(!this.showbutton){
        return;
      }
       this._flightService.itemChangeTicketFlight.emit(1);
        this.navCtrl.navigateBack('flightsearchresultinternational');
    }
    else{
      this._flightService.itemTabFlightActive.emit(true);
        setTimeout(()=>{
              this._flightService.itemMenuFlightClick.emit(2);
            },200)
      this.valueGlobal.backValue = "homeflight";
      this.navCtrl.navigateBack('/tabs/tab1');
    }
  }

  async rePayment(){
    if(!this.allowrepay){
        let alert = await this.alertCtrl.create({
          message: 'Vé máy bay hết hạn thanh toán. Vui lòng chọn vé khác!',
          cssClass: "cls-alert-flighttimeout",
          backdropDismiss: false,
          buttons: [
          {
            text: 'OK',
            role: 'OK',
            handler: () => {
              this._flightService.itemChangeTicketFlight.emit(1);
              if(this._voucherService.selectVoucher){
                
                this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                this._voucherService.selectVoucher = null;
                
              }
              this._voucherService.publicClearVoucherAfterPaymentDone(1);
              this._flightService.itemFlightCache.promotionCode = "";
              this._flightService.itemFlightCache.promocode = "";
              this._flightService.itemFlightCache.discount = 0;
              this.navCtrl.navigateBack('flightsearchresultinternational');
              alert.dismiss();
            }
          }
        ]
      });
      alert.present();
      return;
    }
    if (this.stt==0) {
      this.navCtrl.navigateBack('flightinternationalpaymentselect');
    } else {
      this.navCtrl.back();
    }
   
  }
}