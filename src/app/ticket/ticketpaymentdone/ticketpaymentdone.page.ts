import { SearchHotel, ValueGlobal } from '../../providers/book-service';
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
import { ticketService } from 'src/app/providers/ticketService';
import { voucherService } from 'src/app/providers/voucherService';
import { tourService } from 'src/app/providers/tourService';
@Component({
  selector: 'app-ticketpaymentdone',
  templateUrl: './ticketpaymentdone.page.html',
  styleUrls: ['./ticketpaymentdone.page.scss'],
})
export class TicketPaymentDonePage implements OnInit {
  code = ""; startdate; enddate; _email = ""; stt; total; text; isDinner
  bookingCode: any='IVIVUVE007';
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string = "";
  listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;
  checkreview;
  paymentDate: string;
  constructor(private activatedRoute: ActivatedRoute, public _flightService: flightService,
    private navCtrl: NavController, public searchhotel: SearchHotel, public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _calendar: Calendar,
    private _platform: Platform, public alertCtrl: AlertController, private launchReview: LaunchReview,
    public ticketService: ticketService,
    public tourService: tourService,
    public _voucherService: voucherService) {
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview == 0) {
          this.checkreview = 0;
        } else {
          this.checkreview = checkreview;
        }
      })
      var ti = new Date();
      this.paymentDate= moment(ti).add(1, 'hours').format('HH:mm, DD/MM/YYYY');

  }


  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.gf.hideLoading();
    // if(this.ticketService.BookingTourMytrip) {
    //   this.bookingCode = this.ticketService.BookingTourMytrip.booking_id;
    //   this.total = this.gf.convertNumberToString(this.ticketService.BookingTourMytrip.amount_after_tax);
    // }else{
    //   this.bookingCode = this.ticketService.tourBookingCode;
    //   if(this.ticketService.discountPrice){
    //     this.total = this.gf.convertNumberToString(this.ticketService.discountPrice);
    //   }else{
    //     this.total = this.gf.convertNumberToString(this.ticketService.totalPrice);
    //   }
    // }
    
    // let se = this;
    // se.gf.googleAnalytionCustom('purchase', { item_category: 'tour', start_date: se.ticketService.DepartureDate, end_date: se.searchhotel.CheckOutDate, origin: this.ticketService.itemSearchDestination ? this.ticketService.itemSearchDestination.Name || this.ticketService.itemSearchDestination.RegionCode : '', destination: se.ticketService.itemDetail.Destinations, value: se.ticketService.tourTotal, currency: "VND" });
    //   se._voucherService.publicClearVoucherAfterPaymentDone(1);
    //   se.ticketService.promocode = "";
    //   se.ticketService.discountpromo = 0;
  }

  next() {
    this.gf.hideLoading();
    this.tourService.itemPaymentDone.emit(3);
    this.valueGlobal.backValue = "hometicket";
    //this.ticketService.BookingTourMytrip = null;
    // 
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
  goMyTrip(){
    this.navCtrl.navigateBack(['/app/tabs/tab3']);
  }
}
