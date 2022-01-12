import { Bookcombo, RoomInfo, SearchHotel, ValueGlobal } from './../../providers/book-service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import * as moment from 'moment';
import { NavController, ModalController, Platform,AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { flightService } from '../../providers/flightService';
import { ActivityService, GlobalFunction } from '../../providers/globalfunction';
import { FlightBookingDetailsPage } from '../../flightbookingdetails/flightbookingdetails.page';
import { FlightquickbackPage } from '../../flightquickback/flightquickback.page';
import { CustomAnimations } from '../../providers/CustomAnimations';
import { Facebook } from '@ionic-native/facebook/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';
import { BizTravelService } from 'src/app/providers/bizTravelService';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
@Component({
  selector: 'app-confirmpaymentdone',
  templateUrl: './confirmpaymentdone.page.html',
  styleUrls: ['./confirmpaymentdone.page.scss'],
})
export class ConfirmPaymentDonePage implements OnInit {
  event;
  code="";startdate;enddate;_email="";stt= 1;total;text;isDinner
  bookingCode: any;
  bookingFlight: any;
  pacificVNA: string = "";
  pacificVNAReturn: string="";listDiChung: any = "";
  checkInDisplayDC: string;
  checkOutDisplayDC: string;
  totaldisplay: any;
  checkreview: number;
  constructor(private activatedRoute: ActivatedRoute,public _flightService: flightService,
    private navCtrl:NavController, public searchhotel: SearchHotel,public storage: Storage, private zone: NgZone,
    public valueGlobal: ValueGlobal,
    public gf: GlobalFunction,
    private modalCtrl: ModalController,
    private fb: Facebook,
    private _platform: Platform,
    private _calendar: Calendar,
    public bizTravelService: BizTravelService,
    public bookCombo: Bookcombo,
    public roomInfo: RoomInfo,
    public activityService: ActivityService,public alertCtrl: AlertController, private launchReview: LaunchReview) { 
      if(this.bizTravelService.paymentType == 1 && this._flightService.itemFlightCache && this._flightService.itemFlightCache.pnr){
          this.total = this._flightService.itemFlightCache.totalPrice;
          this._email = this._flightService.itemFlightCache.email;
          this.bookingCode =  this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
          this.bookingFlight = this._flightService.itemFlightCache;
          this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this._flightService.itemFlightCache.totalPrice;
          this.totaldisplay = this.gf.convertNumberToString(this._flightService.itemFlightCache.totalPrice);
      }else if(this.bizTravelService.paymentType == 3){
        this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.bookCombo.totalprice;
        this.total = this.bookCombo.totalprice;
        this.totaldisplay = this.gf.convertNumberToString(this.bookCombo.totalprice);
        this.bookingCode = this.bookCombo.bookingcode;
      }
      else if(this.bizTravelService.paymentType == 2){//room
        
        if (roomInfo.priceshow) {
          this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.gf.convertStringToNumber(this.roomInfo.priceshow);
          this.totaldisplay= this.gf.convertNumberToString(roomInfo.priceshow);
          this.total = this.roomInfo.priceshow;
        }
        else
        {
          this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.gf.convertStringToNumber((roomInfo.roomtype as any).PriceAvgPlusTAStr);
          this.totaldisplay= this.gf.convertNumberToString((roomInfo.roomtype as any).PriceAvgPlusTAStr);
          this.total = (roomInfo.roomtype as any).PriceAvgPlusTAStr;
        }
        this.bookingCode = this.roomInfo.bookingCode;
      }
      else if(this.bizTravelService.paymentType == 4){//mytrip
        this.total = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
        this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.total;
        this.totaldisplay= this.activityService.objPaymentMytrip.trip.priceShow;
        this.bookingCode = this.bizTravelService.mytripPaymentBookingCode ;
      }
      this.storage.get('checkreview').then(checkreview => {
        if (checkreview==0) {
          this.checkreview=0;
        }else
        {
          this.checkreview=checkreview;
        }
      })
    }

 
  ngOnInit() {
    
  }

  ionViewWillEnter(){
    
  }

  

  next()
  {
    if (this.checkreview==0) {
      this.showConfirm();
    }
    this.gf.hideLoading();
    this.clearItemCache();
    this.navCtrl.navigateBack('/tabs/tab1');
  }

  async showBooking(){
    var se = this;
     if (this.checkreview==0) {
      this.showConfirm();
    }
    se.clearItemCache();
    se.navCtrl.navigateBack('/tabs/tab1');
   
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

  public async showConfirm() {
    this.storage.set("checkreview", 1);
    let alert = await this.alertCtrl.create({
      header: 'Bạn thích iVIVU.com?',
      message: 'Đánh giá ứng dụng trên App Store',
      mode: "ios",
      cssClass: 'cls-reivewapp',
      buttons: [
        {
          text: 'Hủy',
          handler: () => {
          }
        },
        {
          text: 'Đánh giá',
          role: 'OK',
          handler: () => {
            this.launchReview.launch()
              .then(() => console.log('Successfully launched store app'));
          }
        }
      ]
    });
    alert.present();
    alert.onDidDismiss().then((data) => {
    })
  }
}
