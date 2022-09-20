import { GlobalFunction } from './../../providers/globalfunction';
import { NavController, Platform,ModalController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as request from 'requestretry';
import { C } from '../../providers/constants';
import * as moment from 'moment';
import { tourService } from '../../providers/tourService';
import { ValueGlobal } from '../../providers/book-service';
import { Calendar } from '@ionic-native/calendar/ngx';
import { Storage } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { FlightquickbackPage } from 'src/app/flightquickback/flightquickback.page';
import { CustomAnimations } from 'src/app/providers/CustomAnimations';

@Component({
  selector: 'app-tourpaymentpayoo',
  templateUrl: './tourpaymentpayoo.page.html',
  styleUrls: ['./tourpaymentpayoo.page.scss'],
})
export class TourPaymentPayooPage implements OnInit {

  bookingCode; stt; text; qrimg; BillingCode; total; PeriodPaymentDate; textHours;
  intervalID: any;
  allowCheck: any = true;
  allowCheckHoldTicket: boolean = true;
  _inAppBrowser: any; _email
  constructor(private navCtrl: NavController, public gf: GlobalFunction,
    private activatedRoute: ActivatedRoute, private _tourService: tourService,
    private platform: Platform, public valueGlobal: ValueGlobal,private modalCtrl: ModalController,
    private zone: NgZone,
    private _calendar: Calendar,
    private _platform: Platform,
    private storage: Storage,
    private safariViewController: SafariViewController) {

  }

  ngOnInit() {
    this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
    this.stt= this.activatedRoute.snapshot.paramMap.get('stt');
    if (this.stt == 0) {
      this.BillingCode = this._tourService.BillingCode;
      this.textHours = moment(this._tourService.periodPaymentDate).format("HH:mm");
      this.PeriodPaymentDate = this._tourService.periodPaymentDate ? this.gf.getDayOfWeek(this._tourService.periodPaymentDate).dayname + ", " + moment(this._tourService.periodPaymentDate).format("DD") + " thg " + moment(this._tourService.periodPaymentDate).format("MM") : "";
    }
    else {
      this.qrimg = this._tourService.qrimg;
      clearInterval(this.intervalID);
      this.intervalID = setInterval(() => {
        //this.checkqrcode();
        this.zone.run(()=>{
          this.callCheckPayment();
        })
       
      }, 1000 * 5);

      setTimeout(() => {
        clearInterval(this.intervalID);
      }, 60000 * 15);
    }
    this.total = this._tourService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
  }
  goback() {
    if (this.stt == 1) {
      clearInterval(this.intervalID);
    }
    this.allowCheck = false;
    this.navCtrl.back();
  }
  next() {
    var se = this;
    if (se.stt == 0) {
      this._tourService.paymentType = -1;
      this.navCtrl.navigateForward('/tourpaymentdone');
      //se.navCtrl.navigateBack('/app/tabs/tab1');
    }
    else {
      clearInterval(se.intervalID);
      se.checkqrcode();
      se.allowCheck = false;
    }

  }

  checkqrcode() {
    var se = this;
    se.gf.showLoading();
    clearInterval(this.intervalID);
    se.intervalID = setInterval(() => {
        let url = C.urls.baseUrl.urlMobile + "/tour/api/BookingsApi/GetBookingByCode?code="+se.bookingCode;
        se.zone.run(() => {
          se.gf.Checkpayment(url).then((res) => {
            let checkpay = JSON.parse(res);
            if (checkpay.Response && checkpay.Response.PaymentStatus == 3) { 
              se.gf.hideLoading();
              if(se.safariViewController){
                se.safariViewController.hide();
              }
              clearInterval(se.intervalID);
              se._tourService.BookingTourMytrip = null;
              se.navCtrl.navigateForward('tourpaymentdone');
            }
            else if (checkpay.Response && checkpay.Response.PaymentStatus == 2)
            {
              se.gf.hideLoading();
              if(se.safariViewController){
                se.safariViewController.hide();
              }
              clearInterval(se.intervalID);
              se.gf.showAlertTourPaymentFail(checkpay.internalNote);
            }    
          
          })
        })
      
    }, 2000 * 1);

    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000 * 10.5);
  }

  callCheckPayment() {
    var se = this;
    if (se.allowCheck) {
      se.checkPayment();
    }

  }

  checkPayment() {
    var se = this;
    let url = C.urls.baseUrl.urlMobile + "/tour/api/BookingsApi/GetBookingByCode?code="+se.bookingCode;
        se.zone.run(() => {
          se.gf.CheckPaymentTour(url).then((res) => {
            let checkpay = JSON.parse(res);
            if (checkpay.Response && checkpay.Response.PaymentStatus == 3) { 
              se.gf.hideLoading();
              if(se.safariViewController){
                se.safariViewController.hide();
              }
              clearInterval(se.intervalID);
              se._tourService.BookingTourMytrip = null;
              se.navCtrl.navigateForward('tourpaymentdone');
            }
            else if (checkpay.Response && checkpay.Response.PaymentStatus == 2)
            {
              se.gf.hideLoading();
              if(se.safariViewController){
                se.safariViewController.hide();
              }
              clearInterval(se.intervalID);
              se.gf.showAlertTourPaymentFail(checkpay.internalNote);
            }
          
          })
        })
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
