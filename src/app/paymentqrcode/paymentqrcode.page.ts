import { Component, NgZone } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';
import { SearchHotel, ValueGlobal, Bookcombo, RoomInfo, Booking } from './../providers/book-service';
import * as moment from 'moment';
import { ActivityService, GlobalFunction } from './../providers/globalfunction';
import { OnInit } from '@angular/core';
import { Platform, NavController, ModalController, ToastController, AlertController} from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { normalizeURL } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { flightService } from '../providers/flightService';
import { LaunchReview } from '@ionic-native/launch-review/ngx';
import { Storage } from '@ionic/storage';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import {tourService } from '../providers/tourService';
import { voucherService } from '../providers/voucherService';

@Component({
  selector: 'app-paymentqrcode',
  templateUrl: './paymentqrcode.page.html',
  styleUrls: ['paymentqrcode.page.scss'],
})

export class PaymentqrcodePage implements OnInit {
    qrcodeurl: string;
    bankTransfer: string;
    totalPrice: any;
    bookingCode: any;
    accountNumber: string;
    bankName: string;
  checkreview: number;
  _email: any;
  defaultEmail: any;
  paymentDate: string;
  contactOption: any;
  periodPaymentDisplay: string;

    constructor(public platform:Platform,  public zone: NgZone,public navCtrl: NavController,public modalCtrl: ModalController,
        public searchhotel: SearchHotel,public valueGlobal:ValueGlobal,public gf: GlobalFunction,private launchReview: LaunchReview,
        private file: File,
        private socialSharing: SocialSharing,
        public activityService: ActivityService,
        private clipboard: Clipboard,
        private toastCtrl: ToastController,
        public _flightService: flightService,
        private storage: Storage,
        private alertCtrl: AlertController,
        public tourService: tourService,
        public bookCombo: Bookcombo,
        public Roomif: RoomInfo,
        public booking: Booking,
        public _voucherService: voucherService
         ){
            this.bankName = activityService.bankName;
            this.bankTransfer = activityService.bankTransfer;
            this.accountNumber = activityService.bankAccount;
            this.totalPrice = activityService.totalPriceTransfer;
            this.bookingCode = activityService.bookingCode;
            this.buildLinkQrCode();
            this.storage.get('contactOption').then((option)=>{
              this.contactOption = option;
            })
            this.storage.get('checkreview').then(checkreview => {
              if (checkreview==0) {
                this.checkreview=0;
              }else
              {
                this.checkreview=checkreview;
              }
            })
            this.storage.get('email').then(email => {
              this.defaultEmail = email || '';

              this._email = (this.activityService.qrcodepaymentfrom == 1 ? this._flightService.itemFlightCache.email : 
                (( (this.activityService.qrcodepaymentfrom == 2 || this.activityService.qrcodepaymentfrom == 4 || this.activityService.qrcodepaymentfrom == 5)? this.Roomif.addressorder : 
                  (this.activityService.qrcodepaymentfrom == 3 ? this.booking.CEmail : (
                    (this.activityService.qrcodepaymentfrom == 4 ? this.booking.CEmail : this.defaultEmail
                  )))))) ;
            })
            var ti = new Date();
            this.paymentDate= moment(ti).add(1, 'hours').format('HH:mm, DD/MM/YYYY');
        }
    ngOnInit() {

    }
    async ionViewWillEnter(){

      let dataSummary = await this.gf.getSummaryBooking(this._flightService.itemFlightCache);
      let date = dataSummary.periodPaymentDate;
      if(date){
        this.periodPaymentDisplay= moment(date).format("HH:mm") + " " + this.gf.getDayOfWeek(date).dayname +", "+ moment(date).format("DD") + " thg " + moment(date).format("MM");
      }
    }


    buildLinkQrCode() {
        this.zone.run(()=>{
         this.qrcodeurl = `https://cdn1.ivivu.com/newcdn/qr-payment?bankname=${this.bankTransfer}&amount=${this.gf.convertStringToNumber(this.totalPrice)}&description=${this.bookingCode}`;
        })
         
       }

  async downloadqrcode(){
    let storageDirectory ='';
    if (this.platform.is('ios')) {
      storageDirectory = this.file.dataDirectory + `qrcode_${this.bookingCode}.png`;
    }
    else if (this.platform.is('android')) {
        storageDirectory = this.file.externalDataDirectory + `qrcode_${this.bookingCode}.png`;
    }
    else {
        return false;
    }
    storageDirectory = normalizeURL(storageDirectory);
    this.gf.showLoading();
    try {
      this.socialSharing.saveToPhotoAlbum(this.qrcodeurl).then(()=>{
        this.gf.hideLoading();
        this.presentToastr('Đã lưu');
      });
    } catch (error) {
      this.gf.hideLoading();
    }
  }

  copyClipboard(type){
    if(type == 1){
      this.clipboard.copy(this.accountNumber);
    }else if(type == 2){
      this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
    }else if(type == 3){
      this.clipboard.copy(this.bookingCode);
    }else if(type == 4){
        this.clipboard.copy(this.totalPrice);
      }
    
    this.presentToastr('Đã sao chép');
  }

  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  gotohomepage(){
    this.gf.hideLoading();
    if (this.checkreview == 0) {
      this.showConfirm();
    }
    this._flightService.itemMenuFlightClick.emit(2);
    this._voucherService.publicClearVoucherAfterPaymentDone(1);
    if(this.activityService.qrcodepaymentfrom == 1){//vmb
      this._flightService.itemTabFlightActive.emit(true);
      this.valueGlobal.backValue = "homeflight";
      
      this._flightService.bookingCodePayment = this.bookingCode;
      this._flightService.bookingSuccess = true;
      this.navCtrl.navigateBack('/tabs/tab1');
    }else if(this.activityService.qrcodepaymentfrom == 2){//ks
      if(this.searchhotel.rootPage == "topdeallist"){
        this.navCtrl.navigateBack('/topdeallist');
        this.searchhotel.rootPage = "";
      }else{
        this.navCtrl.navigateBack('/');
      }
    }
    else if(this.activityService.qrcodepaymentfrom == 3){//tour
      this.tourService.itemPaymentDone.emit(3);
      this.valueGlobal.backValue = "hometour";
      this.tourService.BookingTourMytrip = null;
      this.navCtrl.navigateBack('/app/tabs/tab1');
    }
    else if(this.activityService.qrcodepaymentfrom == 4) {
      this.gf.setParams(null, 'flightcombo');
      this.bookCombo.isAGODABooking = false;
      this.bookCombo.isHBEDBooking = false;
      this.bookCombo.roomPenalty = false;
      this.navCtrl.navigateBack('/tabs/tab1');
    }
    else if(this.activityService.qrcodepaymentfrom == 5){
      this.gf.setParams(2, 'seemoreblog');
      this.bookCombo.isAGODABooking = false;
      this.bookCombo.isHBEDBooking = false;
      this.bookCombo.roomPenalty = false;
      this.navCtrl.navigateForward('/bloglist');
    }else{
      this.navCtrl.navigateBack('/tabs/tab1');
    }
   
    
    //this.navCtrl.navigateBack('/tabs/tab1');
  }

  gotomytrip(){
    this._voucherService.publicClearVoucherAfterPaymentDone(1);
    this._flightService.itemMenuFlightClick.emit(2);
    if(this.activityService.qrcodepaymentfrom == 1){//vmb
      this._flightService.itemTabFlightActive.emit(true);
      this.valueGlobal.backValue = "homeflight";
      
      this._flightService.bookingCodePayment = this.bookingCode;
      this._flightService.bookingSuccess = true;
      this.navCtrl.navigateBack(['/app/tabs/tab3']);
    }else{
      this.navCtrl.navigateBack(['/app/tabs/tab3']);
    }
    
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