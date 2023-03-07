import { parse } from 'path';
import { foodService } from './../providers/foodService';
import { Bookcombo, foodInfo } from './../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform, ModalController, AlertController } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../providers/flightService';
import {FlightpricedetailPage} from './../flightpricedetail/flightpricedetail.page';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { FlightBookingDetailsPage } from '../flightbookingdetails/flightbookingdetails.page';
import { FlightquickbackPage } from '../flightquickback/flightquickback.page';
import { CustomAnimations } from '../providers/CustomAnimations';
import { BizTravelService } from '../providers/bizTravelService';
import { voucherService } from '../providers/voucherService';

@Component({
  selector: 'app-flightpaymentselect',
  templateUrl: './flightpaymentselect.page.html',
  styleUrls: ['./flightpaymentselect.page.scss'],
})
export class FlightPaymentSelectPage implements OnInit {
  priceshow; listmenu = []; arrmenu; ischeckvisa = false
  public loader: any; returnUrl; arrbankrmb = [];tokenid
  bookingCode = ""; startDate; endDate; ischeckpay = true; jti='';isbtn=false;
  adult: any;
  child: any;
  totalpricedisplay: any;
  departtitle: string;
  returntitle: string;
  showline: boolean;
  paymentfirst: boolean = false;
  blockPaylate: any;
  blockPayCard: any;
  intervalID: any;
  itemflight: any;
  infant: any;
  allowCheckHoldTicket: boolean = true;
  checkInDisplayFullYear: string;
  checkOutDisplayFullYear: string;
  isremember=true;isdisable=false;
  checkInDisplay: string;
  checkOutDisplay: string;
  totalPaxStr: string;
  totalRoom: string;
  ischeckedDK=true;
  totalPrice: number;
  allowApplyVoucher: boolean=true;
  constructor(private navCtrl:NavController,public _flightService: flightService
    ,public gf: GlobalFunction, public loadingCtrl: LoadingController
    ,public searchhotel:SearchHotel,private safariViewController: SafariViewController, public storage: Storage,
    private modalCtrl: ModalController,
    private platform: Platform,
    private backgroundmode: BackgroundMode,
    private alertCtrl: AlertController,
    private zone: NgZone,
    public bizTravelService: BizTravelService,
    public _voucherService: voucherService
    ) { 
    
    if(this._flightService.itemFlightCache){
      this.showline = this._flightService.itemFlightCache.roundTrip ? true : false;
      this.bookingCode =  this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
      this.startDate = moment(this._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
      this.endDate = moment(this._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
      if(this._flightService.itemFlightCache.pnr){
        this.blockPaylate = this._flightService.itemFlightCache.pnr.blockPaylate;
        this.blockPayCard = this._flightService.itemFlightCache.pnr.blockPayCard;
      }
     
      
      this.adult = this._flightService.itemFlightCache.adult;
      this.child = this._flightService.itemFlightCache.child;
      this.infant = this._flightService.itemFlightCache.infant;
      this.totalpricedisplay=this._flightService.itemFlightCache.totalPriceDisplay;
      this.totalPrice = this.gf.convertStringToNumber(this._flightService.itemFlightCache.totalPriceDisplay);
      
      this.departtitle = this._flightService.itemFlightCache.departPaymentTitleDisplay + moment(this._flightService.itemFlightCache.departFlight.departTime).format("HH:mm") + " - " + moment(this._flightService.itemFlightCache.departFlight.landingTime).format("HH:mm")+ " · " +this._flightService.itemFlightCache.departFlight.airlineCode;
      
      if(this._flightService.itemFlightCache.returnFlight){
          this.returntitle = this._flightService.itemFlightCache.returnPaymentTitleDisplay + moment(this._flightService.itemFlightCache.returnFlight.departTime).format("HH:mm") + " - " + moment(this._flightService.itemFlightCache.returnFlight.landingTime).format("HH:mm")+ " · " +this._flightService.itemFlightCache.returnFlight.airlineCode; 
      }
      
      this.itemflight = this._flightService.itemFlightCache;
      this.checkInDisplayFullYear = this.itemflight.departTimeDisplay +", "+ moment(this.itemflight.departFlight.departTime).format("YYYY");
      if(this._flightService.itemFlightCache.returnFlight){
        this.checkOutDisplayFullYear = this.itemflight.returnTimeDisplay + ", " + moment(this.itemflight.returnFlight.departTime).format("YYYY");
      }
      if(this._flightService.itemFlightCache.objHotelCitySelected){
        let itemhotel = this._flightService.itemFlightCache.objHotelCitySelected;
        this.checkInDisplay = moment(this._flightService.itemFlightCache.checkInDate).format('DD-MM-YYYY');
        this.checkOutDisplay = moment(this._flightService.itemFlightCache.checkOutDate).format('DD-MM-YYYY');
        this.totalPaxStr = "" +this.adult +" người lớn" + (this.child ? (" | " + this.child + "trẻ em" ) : "") + (this.infant ? (" | " + this.infant + "em bé" ) : "");
        this.totalRoom = ""+ itemhotel.TotalRoom +"x"+ itemhotel.RoomName + (itemhotel.BreakfastIncludeName ?  (" | " + itemhotel.BreakfastIncludeName ) : "");
      }
    }
    
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })

    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
            let text = "Bearer " + auth_token;
            let headers =
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }

            this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightpaymentselect', 'initpage').then((data)=>{
              if(data && data.bizAccount){
                this.zone.run(()=>{
                  this.bizTravelService.bizAccount = data.bizAccount;
                  this.bizTravelService.isCompany = true;
                })
               
              }else{
                this.bizTravelService.isCompany = false;
              }
            })
          }else{
            this.bizTravelService.isCompany = false;
          }
        });

    this.platform.ready().then(()=>{
      this.backgroundmode.on('activate').subscribe(()=>{
          this.backgroundmode.enable();
          //this.callCheckPayment();
         
          setTimeout(() => {
              clearInterval(this.intervalID);
          }, 1000 * 60 * 10);
      })
      
    })

    C.writePaymentLog("flight", "paymentselect", "purchase", this.bookingCode);
  }
  async showPriceDetail(){
    const modal: HTMLIonModalElement =
    await this.modalCtrl.create({
      component: FlightpricedetailPage,
    });
  modal.present();
}
  checkpayment()
  {
    var ti = new Date();
    var thu=moment(ti).format('dddd');
    var hours = moment(ti).format('HHmm');
    if (thu=='Friday') {
      if (parseInt(hours)>=2100) {
        this.ischeckpay=false;
      }
    }
    else if(thu=='Saturday'||thu=='Sunday')
    {
      this.ischeckpay=false;
    }
  }
  ngOnInit() {
  }
  gobackpage(){
    this.gf.hideLoading();
    this.navCtrl.navigateBack('flightadddetails');
  }
  gotoaddservicepage(){
    this.gf.hideLoading();
    this.navCtrl.navigateBack('flightadddetails');
  }

  goback()
  {
    var se = this;
      se.gf.showLoading();
      se._flightService.itemFlightCache.hasvoucher = se._flightService.itemFlightCache.promotionCode;//set param xac dinh da nhap voucher o buoc chon dich vu
      se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg:any) => {
        let data = se._flightService.itemFlightCache;
        let dataancinaly = databkg.paxInfo.passengers[0].ancillaryJson ? JSON.parse(databkg.paxInfo.passengers[0].ancillaryJson) : '';
        let dataancinalyReturn = databkg.paxInfo.passengers[0].ancillaryReturnJson ? JSON.parse(databkg.paxInfo.passengers[0].ancillaryReturnJson) : '';
        if(dataancinaly || dataancinalyReturn){
          let ancinaly, ancinalyreturn;
          if(dataancinaly && dataancinaly.length >0){
            ancinaly = dataancinaly;
          }
  
          if(dataancinalyReturn && dataancinalyReturn.length >0){
            ancinalyreturn = dataancinalyReturn;
          }
          let checkseat = false, checkseatreturn = false;
          if(ancinaly && ancinaly.length >0){
            checkseat = ancinaly.some((item) => { return item.Type == "Seat"});
          }
  
          if(ancinalyreturn && ancinalyreturn.length >0){
            checkseatreturn = ancinalyreturn.some((item) => { return item.Type == "Seat"});
          }
          
          if(data.ischeckpayment == 0)//trả sau
          {
              if(databkg.isRoundTrip){//khứ hồi
                if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1 
                && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && (checkseat || checkseatreturn))
                {
                  se._flightService.itemFlightCache.backtochoiceseat = true;
                  se.gotoaddservicepage();
                }
                else{
                 se.gobackpage();
                }
              }else{
                if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && checkseat)
                {
                  se._flightService.itemFlightCache.backtochoiceseat = true;
                  se.gotoaddservicepage();
                }
                else{
                 se.gobackpage();
                }
              }
            }else{//trả trước
    
              if(databkg.isRoundTrip){//khứ hồi
                //Có mã giữ chỗ và trạng thái đã xuất vé cả 2 chiều thì trả về true - hoàn thành
                if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1 
                && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && (checkseat || checkseatreturn))
                {
                  se._flightService.itemFlightCache.backtochoiceseat = true;
                  se.gotoaddservicepage();
                }
                else{
                  se.gobackpage();
                }
              }else{//Có mã giữ chỗ và trạng thái đã xuất vé thì trả về true - hoàn thành
                if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && checkseat)
                {
                  se._flightService.itemFlightCache.backtochoiceseat = true;
                  se.gotoaddservicepage();
                }
                else{
                  se.gobackpage();
                }
              }
            }
        }else{
          se.gobackpage();
        }
        
      })
  }

  

  
  
  flightpaymentbank()
  {
    if(this.blockPaylate){
      return;
    }
    this.presentLoading();
    
    this._flightService.itemFlightCache.paymentType = 'banktransfer';
    this.checkAllowRepay().then((check) => {
      if(check){
        clearInterval(this.intervalID);
        this.navCtrl.navigateForward('flightpaymentbank');
        this.hideLoading();
      }else{
        this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
          if(check){
            clearInterval(this.intervalID);
            this.navCtrl.navigateForward('flightpaymentbank');
            this.hideLoading();
          }else{
            this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
            clearInterval(this.intervalID);
            this.hideLoading();
          }
        })
      }
    })
    
  }
  flightpaymentatm()
  {
    if(this.blockPayCard){
      return;
    }
    this._flightService.itemFlightCache.paymentType = 'atm';
    this.presentLoading();
    this.checkAllowRepay().then((check) => {
      if(check){
        clearInterval(this.intervalID);
        this.navCtrl.navigateForward('flightpaymentchoosebank');
        this.hideLoading();
      }else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
            if(check){
              clearInterval(this.intervalID);
              this.navCtrl.navigateForward('flightpaymentchoosebank');
              this.hideLoading();
            }else{
              this.hideLoading();
              this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
              clearInterval(this.intervalID);
              
            }
          })
        }
      })
  }


  flightpaymentvisa() {
    if(this.blockPayCard){
      return;
    }
    this._flightService.itemFlightCache.paymentType = 'visa';
    this.presentLoading();
    this.checkAllowRepay().then((check) => {
      if(check){
        clearInterval(this.intervalID);
        this.GeTokensOfMember(1);
      }else{
        this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
          if(check){
            clearInterval(this.intervalID);
              this.GeTokensOfMember(1);
            }else{
              this.hideLoading();
              this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
              clearInterval(this.intervalID);
            }
          })
        }
      })
  }
  openWebpage(url: string) {
    var se = this;
    se.gf.logEventFirebase(se._flightService.itemFlightCache.paymentType, se._flightService.itemFlightCache, 'flightpaymentselect', 'add_payment_info', 'Flights');
    se.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {
          se.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
          .subscribe((result: any) => {
            se._flightService.itemFlightCache.hasvoucher = se._flightService.itemFlightCache.promotionCode;//set param xac dinh da nhap voucher o buoc chon dich vu
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') 
              {  
                //Có chọn khách sạn thì gọi check theo luồng check ks
                if(se._flightService.itemFlightCache.objHotelCitySelected){
                  se.checkComboHotelCityPayment();
                }else{
                  let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+se._flightService.itemFlightCache.reservationId;
                  se.gf.Checkpayment(url).then((datapayment)=>{
                    let checkpay=JSON.parse(datapayment);
                    if (checkpay.ipnCall == "CALLED_OK") { 
                      se._flightService.itemFlightCache.ischeckpayment= 1;
                      se.hideLoading();
                      se.gf.hideLoading();
                      se.safariViewController.hide();
                      clearInterval(se.intervalID);
                      se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg:any) => {
                          se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                      })
                      se.navCtrl.navigateForward('flightpaymentdone/'+se.bookingCode+'/'+se.startDate+'/'+se.endDate);
                    }
                    else
                    {
                      se.hideLoading();
                      se.gf.hideLoading();
                      se.safariViewController.hide();
                      clearInterval(se.intervalID);
                      se._flightService.paymentError = checkpay;
                      se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                    }
                  })
                }
              }
            },
            (error: any) => console.error(error)
          );
  
        } else {
          // use fallback browser, example InAppBrowser
          se.hideLoading();
          se.gf.hideLoading();
        }
      }
    );
  }

  checkComboHotelCityPayment() {
    var se = this;
    //wait 5s
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code: se.bookingCode },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "flightpaymentselect",
          func: "checkComboHotelCityPayment",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "flightpaymentselect";
        error.func = "checkComboHotelCityPayment";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
      };
      if (body) {
        var rs = JSON.parse(body);
        
        if (rs.StatusBooking == 3 && !rs.error) {
          se._flightService.itemFlightCache.ischeckpayment= 1;
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg:any) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    })
                    se.navCtrl.navigateForward('flightpaymentdone/'+se.bookingCode+'/'+se.startDate+'/'+se.endDate);
        }
        else if(rs.error){
          se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    console.log(rs);
                    se._flightService.paymentError = rs.error;
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
        }
      }
      else {
        error.page = "roomchoosebank";
        error.func = "mCheckBooking";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        se.hideLoading();
        se.gf.hideLoading();
        se.safariViewController.hide();
        clearInterval(se.intervalID);
        console.log(rs);
        se._flightService.paymentError = "";
        se.navCtrl.navigateForward('/flightpaymenttimeout/0');
      }

    });
  }

  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }

  async hideLoading(){
    if(this.loader){
      this.loader.dismiss();
    }
  }
  flightpaymentmomo(){
    if(this.blockPayCard){
      return;
    }
    this._flightService.itemFlightCache.paymentType = 'momo';
    this.presentLoading();
    this.checkAllowRepay().then((check) => {
      if(check){
        clearInterval(this.intervalID);
        
        this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 4, "","").then(datatype => {
          if (datatype && datatype.isHoldSuccess) {
            // this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
              let itemcache = this._flightService.itemFlightCache;
              var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode +'&rememberToken='+this.isremember+ '&buyerPhone=' + itemcache.phone +'&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight'+ '&memberId=' + this.jti+'&version=2';
              this.gf.CreatePayoo(url).then((data) => {
                //let data = JSON.parse(datapayoo);
                if (data.success) {
                  // if(this._voucherService.selectVoucher){
                  //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                  //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                  //   this._voucherService.selectVoucher = null;
                  // }

                  this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                  this.openWebpage(data.returnUrl.payUrl);
                  this.zone.run(()=>{
                    this.setinterval(null);
                  })
                  
                }else{
                  this.hideLoading();
                  this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                }
              })
            }else{
              this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
              clearInterval(this.intervalID);
              this.hideLoading();
            }
          })
      }else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
            if(check){
              this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 4, "","").then(datatype => {
                if (datatype && datatype.isHoldSuccess) {

                  //this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                    let itemcache = this._flightService.itemFlightCache;
                    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone +'&rememberToken='+this.isremember+'&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight'+ '&memberId=' + this.jti+'&version=2';
                    this.gf.CreatePayoo(url).then((data) => {
                      //let data = JSON.parse(datapayoo);
                      if (data.success) {
                        // if(this._voucherService.selectVoucher){
                        //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                        //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                        //   this._voucherService.selectVoucher = null;
                        // }

                        this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                        this.openWebpage(data.returnUrl.payUrl);
                        this.zone.run(()=>{
                          this.setinterval(null);
                        })
                        
                      }else{
                        this.hideLoading();
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                      }
                    })
                  }else{
                    this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                    clearInterval(this.intervalID);
                    this.hideLoading();
                  }
                })
              }else{
                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                clearInterval(this.intervalID);
              }
            })
          }
        })
  }

  setinterval(timeout)
  {
    if (this.loader) {
      this.loader.dismiss();
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      //Có chọn khách sạn thì gọi check theo luồng check ks
      if(this._flightService.itemFlightCache.objHotelCitySelected){
        this.checkComboHotelCityPayment();
      }else{
        let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+this._flightService.itemFlightCache.reservationId;
        this.zone.run(()=>{
          this.gf.Checkpayment(url).then((data) => {
            var checkpay=JSON.parse(data);
            if (checkpay.ipnCall == "CALLED_OK") {
            
              this._flightService.itemFlightCache.ischeckpayment= 1;
              this.hideLoading();
              this.gf.hideLoading();
              this.safariViewController.hide();
              clearInterval(this.intervalID);
              this.getSummaryBooking(this._flightService.itemFlightCache).then((databkg:any) => {
                this._flightService.itemFlightCache.dataSummaryBooking = databkg;
            })
              this.navCtrl.navigateForward('flightpaymentdone/'+this.bookingCode+'/'+this.startDate+'/'+this.endDate);
            }
            else if(checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL")//case timeout
            {
              this.hideLoading();
              this.gf.hideLoading();
              this.safariViewController.hide();
              clearInterval(this.intervalID);
              this._flightService.paymentError = checkpay;
              this.navCtrl.navigateForward('/flightpaymenttimeout/0');
            }
          })
        })
      }
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
     
    }, timeout ? timeout : 60000 * 9.1);
  }
  
  callCheckHoldTicket(url, data){
    var res = false;
    var se = this;
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
        }
        if (response.statusCode == 200) {
          let result = JSON.parse(body);
          if(se._flightService){
            se._flightService.itemFlightCache.dataSummaryBooking = result;
          }
          
          //Thêm case check thanh toán thành công nhưng quá hạn giữ vé
          if(result.expIssueTicket){
              se.allowCheckHoldTicket = false;
              resolve(false);
          }else{
            if(data.ischeckpayment == 0)//trả sau
            {
                if(result.isRoundTrip){//khứ hồi
                  if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1){
                    resolve(true);
                  }else{
                    resolve(false);
                  }
                }else{
                  if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1){
                    resolve(true);
                  }else{
                    resolve(false);
                  }
                }
              }else{//trả trước
      
                if(result.isRoundTrip){//khứ hồi
                  //Có mã giữ chỗ và trạng thái đã xuất vé cả 2 chiều thì trả về true - hoàn thành
                  if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1
                  && result.departFlight.status == 4 && result.returnFlight.status == 4){
                    resolve(true);
                  }else{
                    resolve(false);
                  }
                }else{//Có mã giữ chỗ và trạng thái đã xuất vé thì trả về true - hoàn thành
                  if(result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.departFlight.status == 4){
                    resolve(true);
                  }else{
                    resolve(false);
                  }
                }
              }
          }

          
        }
      })
     
      
    })
  }
  
  GeTokensOfMember(stt) {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          this.arrbankrmb=[];
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var cardname=this.getCardName(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
              this.arrbankrmb.push(item);
            }
          }
          if ( this.arrbankrmb.length>0) {
            this.arrbankrmb[0].checked=true;
            this.tokenid= this.arrbankrmb[0].id;
            this.isbtn=true;
            this.isdisable=true;
            this.ischeckvisa=true
          }
        }
      }
      if (stt==1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          //this.presentLoading();
          if (this.bookingCode) {
            this.NoCreateBooking();
          } 
        } 
      }
    })
  }
  next() {
    if(this.blockPayCard){
      return;
    }
    this.presentLoading();
    if (this.bookingCode) {
      this.NoCreateBooking();
    }
  }
  chooseacc(item)
  {
    if(this.blockPayCard){
      return;
    }
    this.tokenid=item.id;
    this.isbtn=true;
    this.isdisable=true;
    this.isremember=true;
  }
  nochooseacc()
  {
    if(this.blockPayCard){
      return;
    }
    this.tokenid="";
    this.isbtn=true;
    this.isdisable=false;
    this.isremember=true;
  }
  
  NoCreateBooking()
  {
    var se=this;
          se.gf.updatePaymentMethod(se._flightService.itemFlightCache, 3, "","").then(datatype => {
            if (datatype && datatype.isHoldSuccess) {
              let itemcache = se._flightService.itemFlightCache;
                  let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookingCode + '&buyerPhone=' +itemcache.phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
                  se.gf.CreatePayoo(url).then((data) => {
                    if(data.success){
                      se._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                        se._flightService.itemFlightCache.ischeckpayment = 1;
                        se.openWebpage(data.returnUrl);
                        se.setinterval(null);
                        
                    }else{
                      se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                      se.hideLoading();
                    }
                    
                  })
                }else{
                  se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                  clearInterval(se.intervalID);
                  se.hideLoading();
                }
          })
  }
  
  getCardName(text)
  {
    var cardStr="";
    switch (text) {
      case "MC":
        cardStr = "Mastercard";
        break;
    case "VC":
        cardStr = "Visacard";
        break;
    case "JC":
        cardStr = "JCBCard";
        break;
    case "AE":
        cardStr = "AECard";
    }
    return cardStr;
  }

  flightpaymentpayoostore() {
    if(this.blockPaylate){
      return;
    }
    this._flightService.itemFlightCache.paymentType = 'payoo';
    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
      if(check){
          this.presentLoading();
          this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 5, "","").then(datatype => {
            if (datatype && datatype.isHoldSuccess) {
              
                  let itemcache = this._flightService.itemFlightCache;
                    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_store&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken='+this.isremember+'&buyerPhone=' + itemcache.phone+ '&memberId=' + this.jti+'&version=2';
                    this.gf.CreatePayoo(url).then((data) => {
                      this.hideLoading();
                      //let data = JSON.parse(datapayoo);
                      if (data.success) {
                      //   if(this._voucherService.selectVoucher){
                      //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                      //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                      //   this._voucherService.selectVoucher = null;
                      // }

                        this._flightService.itemFlightCache.BillingCode = data.payooStoreData.BillingCode;
                        this._flightService.itemFlightCache.periodPaymentDate = data.payooStoreData.periodPayment;
                        console.log(this._flightService.itemFlightCache.periodPaymentDate);
                        if (this.loader) {
                          this.loader.dismiss();
                        }
                        
                        this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/0');
                      }else{
                        this.hideLoading();
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        clearInterval(this.intervalID);
                      }
                    })
                  }else{
                    this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                    clearInterval(this.intervalID);
                    this.hideLoading();
                  }
              })
            }else{
              this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
              clearInterval(this.intervalID);
              this.hideLoading();
            }
          })
  }
  flightpaymentpayooqr() {
    if(this.blockPayCard){
      return;
    }
    this._flightService.itemFlightCache.paymentType = 'payoo';
    this.presentLoading();
    this.checkAllowRepay().then((check) => {
      if(check){
        
        this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 6, "","").then(datatype => {
          if (datatype && datatype.isHoldSuccess) {
            let itemcache = this._flightService.itemFlightCache;
            //this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
            var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken='+this.isremember+'&buyerPhone=' + itemcache.phone+ '&memberId=' + this.jti+'&version=2';
            this.gf.CreatePayoo(url).then((data) => {
              this.hideLoading();
              //let data = JSON.parse(datapayoo);
              if (data.success) {
                // if(this._voucherService.selectVoucher){
                //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                //   this._voucherService.selectVoucher = null;
                // }
                

                this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                this._flightService.itemFlightCache.qrimg = data.payooQrData.QRCodeUrl;
                
                this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/1');
              }else{
                this.hideLoading();
                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
              }
            })
          }else{
            this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
            clearInterval(this.intervalID);
            this.hideLoading();
          }
        })
      }
      else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
            if(check){
              //this.presentLoading();
                  this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 6, "","").then(datatype => {
                    if (datatype && datatype.isHoldSuccess) {
                      let itemcache = this._flightService.itemFlightCache;
                      //this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                      var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken='+this.isremember+'&buyerPhone=' + itemcache.phone+ '&memberId=' + this.jti+'&version=2';
                      this.gf.CreatePayoo(url).then((data) => {
                        this.hideLoading();
                        //let data = JSON.parse(datapayoo);
                        if (data.success) {
                          // if(this._voucherService.selectVoucher){
                          //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                          //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                          //   this._voucherService.selectVoucher = null;
                          // }
                          this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                          this._flightService.itemFlightCache.qrimg = data.payooQrData.QRCodeUrl;
                          if (this.loader) {
                            this.loader.dismiss();
                          }
                          this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/1');
                          //console.log(datapayoo.payooStoreData.BillingCode);
                        }else{
                          this.hideLoading();
                          this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        }
                      })
                    }else{
                      this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                      clearInterval(this.intervalID);
                      this.hideLoading();
                    }
                  })
                }else{
                  this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                  clearInterval(this.intervalID);
                }
              })
            }
          })
  }

  callCheckPayment(){
    var se = this;
      se.checkpayment();
  }

  checkPayment(){
    var se = this;
    if(se._flightService.itemFlightCache && se._flightService.itemFlightCache.reservationId){
      let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+se._flightService.itemFlightCache.reservationId;
      se.gf.Checkpayment(url).then((data) => {
        var checkpay=JSON.parse(data);
        if (checkpay.status == 0) {
          setTimeout(()=>{
            se.callCheckPayment();
          },1000)
        }
       
        else if(checkpay.ipnCall == "CALLED_FAIL" && checkpay.errorCode == '99')//hủy
                  {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/flightpaymenterror');
                  }
                  else if(checkpay.ipnCall == "CALLED_TIMEOUT" && checkpay.errorCode == '253')//case timeout
                  {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                  }
        else{
            se._flightService.itemFlightCache.ischeckpayment= 1;
            //se.checkHoldTicket(se._flightService.itemFlightCache);
        }
      })
    }
    
  }

  async showFlightDetail(){
      var se = this;
        const modal: HTMLIonModalElement =
        await se.modalCtrl.create({
          component: FlightBookingDetailsPage,
          componentProps: {
            aParameter: true,
          },
          showBackdrop: true,
          backdropDismiss: true,
          
          cssClass: "modal-flight-booking-detail"
        });
      modal.present();
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

    flightpaymentatoffice(){
      if(this.blockPaylate){
        return;
      }
      this._flightService.itemFlightCache.paymentType = 'office';
      this.gf.showLoading();
      
      this.navCtrl.navigateForward('/flightpaymentatoffice');
    }

    checkAllowRepay(){
      var se = this;
      return new Promise((resolve, reject) => {
        se.callCheckHoldTicket('',se._flightService.itemFlightCache).then((check) => {
          let databkg = se._flightService.itemFlightCache.dataSummaryBooking;
          let data = se._flightService.itemFlightCache;
             if(data.ischeckpayment == 0)//trả sau
              {
                  if(databkg.isRoundTrip){//khứ hồi
                    if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1 
                    && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                    && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain)
                    {
                      resolve(true);
                    }
                    else{
                      resolve(false);
                    }
                  }else{
                    if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                    && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain)
                    {
                      resolve(true);
                    }
                    else{
                      resolve(false);
                    }
                  }
                }else{//trả trước
        
                  if(databkg.isRoundTrip){//khứ hồi
                    //Có mã giữ chỗ và trạng thái đã xuất vé cả 2 chiều thì trả về true - hoàn thành
                    if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1 
                    && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                    && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain)
                    {
                      resolve(true);
                    }
                    else{
                      resolve(false);
                    }
                  }else{//Có mã giữ chỗ và trạng thái đã xuất vé thì trả về true - hoàn thành
                    if(databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                    && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain)
                    {
                      resolve(true);
                    }
                    else{
                      resolve(false);
                    }
                  }
                }
        })
      })
      
    }
 
    rememberCard(){
      this.isremember=!this.isremember
    }

    getSummaryBooking(data) : Promise<any>{
      var se = this;
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
            error.page = "flightpaymentselect";
            error.func = "getSummaryBooking";
            error.param = JSON.stringify(options);
          }
          if (response.statusCode == 200) {
            let result = JSON.parse(body);
            resolve(result);
          }
        })
      })
    }

    async showAlertChoiceSeat(){
      var se = this;
      let msg ='Vui lòng chọn lại ghế ngồi!';
      let alert = await se.alertCtrl.create({
        message: msg,
        cssClass: "cls-alert-choiceseat",
        backdropDismiss: false,
        buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            se._flightService.itemFlightCache.backtochoiceseat = true;
            se._flightService.itemFlightReChoiceSeat.emit(1);
            se.navCtrl.navigateBack('flightaddservice');
          }
        }
      ]
    });
    alert.present();
    }

    paymentbiztravel(){
      if(this.bizTravelService.bizAccount.balanceAvaiable - this._flightService.itemFlightCache.totalPrice<=0){
        return;
      }
      this.storage.get('auth_token').then(auth_token => {
        if(auth_token){
          var text = "Bearer " + auth_token;
          var  headers =
          {
              'cache-control': 'no-cache',
              'content-type': 'application/json',
              authorization: text
          }
          var params = {memberid: this.jti, totalprice: this._flightService.itemFlightCache.totalPrice};
          this.presentLoading();
          this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
            if(data && data.error == 0){
              this.bizTravelService.phoneOtp = data.phoneOtp;
              this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
              this.bizTravelService.paymentType = 1;
              this.flightPayment().then((checkvalid) => {
                if(checkvalid){
                  this.bizTravelService.routeBackWhenCancel = 'flightsearchresult';
                  this.navCtrl.navigateForward('confirmpayment');
                }
                
              })
              
            }else{
              this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
            }
          })
        }else{

        }
       
      })
    }

    flightPayment(): Promise<any>{
      return new Promise((resolve, reject) => {
        this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
          if(check){
                  let itemcache = this._flightService.itemFlightCache;
                  var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone +'&memberId='+this.jti+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
                  this.gf.CreatePayoo(url).then((data) => {
                    //let data = JSON.parse(datapayoo);
                    if (data.success) {
                      // if(this._voucherService.selectVoucher){
                      //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
                      //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
                      //   this._voucherService.selectVoucher = null;
                      // }
                      this.hideLoading();
                      resolve(true);
                    }else{
                      this.hideLoading();
                      resolve(false);
                      this.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                    }
                  })
            }else{
              this.hideLoading();
              resolve(false);
              this.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
            }
          })
      })
      
        
    }
  
    async showAlertOutOfTicket(itemFlight, type){
      var se = this;
      let msg ='';
      if(itemFlight.errorHoldTicket == 1){
          msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
      }
      else if(itemFlight.errorHoldTicket == 2){
          msg = 'Chuyến bay '+itemFlight.returnFlight.airlineCode + ' từ ' + itemFlight.returnCity + ' đi ' + itemFlight.departCity + ' vào ' + itemFlight.checkOutDisplay + ' lúc ' + moment(itemFlight.returnFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.returnFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
      }
      else{
          msg = 'Các chuyến bay đã chọn không giữ được vé. Vui lòng chọn chuyến bay khác!';
      }
      //let msg = 'Chuyến bay '+itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
      let alert = await se.alertCtrl.create({
        message: msg,
        header: type == 1 ? 'Rất tiếc, vé máy bay đã hết' : 'Rất tiếc, vé không giữ được',
        cssClass: "cls-alert-refreshPrice",
        backdropDismiss: false,
        buttons: [
        {
          text: 'OK',
          role: 'OK',
          handler: () => {
            
          }
        }
      ]
    });
    alert.present();
    }
    checkDk(){
      this.ischeckedDK=!this.ischeckedDK;
    }
    openWebpageDK(url: string) {
      this.safariViewController.isAvailable()
    .then((available: boolean) => {
        if (available) {
          this.safariViewController.show({
            url: url,
            hidden: false,
            animated: false,
            transition: 'curl',
            enterReaderModeIfAvailable: true,
            tintColor: '#23BFD8'
          })
          .subscribe((result: any) => {
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') 
              {
                
              }
          
            },
            (error: any) => console.error(error)
          );
  
        } else {
          // use fallback browser, example InAppBrowser
        }
      }
    );
    }

    flightbuynowpaylater(){
      this._flightService.itemFlightCache.paymentType = 'bnpl';
      
      this.gf.showLoading();
      this.checkAllowRepay().then((check)=>{
        if(check){
          this.CreateUrlOnePay();
        }else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
              if(check){
                this.CreateUrlOnePay();
              }else{
                this.gf.hideLoading();
                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                clearInterval(this.intervalID);
               
              }
          })
        }
        
      })
    }
    //Buildlink mua trước trả sau
    CreateUrlOnePay() {
      var se = this;
      let itemcache = this._flightService.itemFlightCache;
      se.gf.updatePaymentMethod(se._flightService.itemFlightCache, 12, "bnpl","").then((data)=>{
        if(data && data.isHoldSuccess){
          var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=bnpl&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode :  itemcache.pnr.resNo) + '&buyerPhone=' + itemcache.phone + '&memberId=' + se.jti + '&BankId=bnpl' + '&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink'+'&version=2';
          se.gf.CreatePayoo(url).then(datapayoo => {
            se.hideLoading();
            se.gf.hideLoading();
          if(datapayoo.success){
            //se._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
            se.openWebpage(datapayoo.returnUrl);
            se.zone.run(()=>{
              se.setinterval(null);
            })
          }else{
            se.hideLoading();
            se.gf.hideLoading();
            se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
          }
        
        })
  
        }else{
          se.hideLoading();
          se.gf.hideLoading();
          se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
        }
      })
      
    }
  }
  
  
