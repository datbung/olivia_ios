import { SearchHotel, ValueGlobal } from './../../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';
import { NavController, ModalController, Platform,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { flightService } from '../../providers/flightService';
import { GlobalFunction } from '../../providers/globalfunction';
import { FlightquickbackPage } from '../../flightquickback/flightquickback.page';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { Facebook } from '@ionic-native/facebook/ngx';
//import { Appsflyer } from '@ionic-native/appsflyer/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { tourService } from 'src/app/providers/tourService';
@Component({
  selector: 'app-tourpaymentdone',
  templateUrl: './tourpaymentdone.page.html',
  styleUrls: ['./tourpaymentdone.page.scss'],
})
export class TourPaymentDonePage implements OnInit {
  code = ""; startdate; enddate; _email = ""; stt; total; text; isDinner
  bookingCode: any;
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string = "";
  listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;
  checkreview;
  constructor(private activatedRoute: ActivatedRoute, public _flightService: flightService,
    private navCtrl: NavController, public searchhotel: SearchHotel, public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _calendar: Calendar,
    private _platform: Platform, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public tourService: tourService) {
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview == 0) {
          this.checkreview = 0;
        } else {
          this.checkreview = checkreview;
        }
      })

      if(tourService.itemDetail) {
        this.total = tourService.totalPriceStr;
      }
  }


  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.bookingCode = this.tourService.tourBookingCode;
    this.total = this.gf.convertNumberToString(this.tourService.tourTotal);
    let se = this;
    se.gf.googleAnalytionCustom('ecommerce_purchase', { item_category: 'tour', start_date: se.tourService.DepartureDate, end_date: se.searchhotel.CheckOutDate, origin: this.tourService.itemSearchDestination ? this.tourService.itemSearchDestination.Name || this.tourService.itemSearchDestination.RegionCode : '', destination: se.tourService.itemDetail.Destinations, value: se.tourService.tourTotal, currency: "VND" });

  }

  next() {
    this.gf.hideLoading();
    this.tourService.itemPaymentDone.emit(true);
    this.valueGlobal.backValue = "hometour";
    // this._flightService.itemMenuFlightClick.emit(2);
    // this._flightService.bookingCodePayment = this.bookingCode;
    // this._flightService.bookingSuccess = true;
    this.navCtrl.navigateBack('/app/tabs/tab1');
  }
  

  async showQuickBack() {
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
