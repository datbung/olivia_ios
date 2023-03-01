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
  selector: 'app-tourrequestdone',
  templateUrl: './tourrequestdone.page.html',
  styleUrls: ['./tourrequestdone.page.scss'],
})
export class TourRequestDonePage implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, public _flightService: flightService,
    private navCtrl: NavController, public searchhotel: SearchHotel, public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _calendar: Calendar,
    private _platform: Platform, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public tourService: tourService) {
  }


  ngOnInit() {

  }

  async ionViewWillEnter() {
    let se = this;
    //se.gf.googleAnalytionCustom('purchase', { item_category: 'tour', start_date: se.tourService.DepartureDate, end_date: se.searchhotel.CheckOutDate, origin: this.tourService.itemSearchDestination ? this.tourService.itemSearchDestination.Name || this.tourService.itemSearchDestination.RegionCode : '', destination: se.tourService.itemDetail.Destinations, value: se.tourService.tourTotal, currency: "VND" });
    se.gf.logEventFirebase(se.tourService.gaPaymentType,se.tourService, 'tourrequestdone', 'purchase', 'Tours');
  }

  next() {
    this.tourService.itemPaymentDone.emit(3);
    this.valueGlobal.backValue = "hometour";
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
