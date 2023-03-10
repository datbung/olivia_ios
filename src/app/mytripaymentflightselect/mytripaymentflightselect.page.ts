import { Component, OnInit,NgZone } from '@angular/core';
import { ActivityService,GlobalFunction } from './../providers/globalfunction';
import { Storage } from '@ionic/storage';
import { NavController, LoadingController, ToastController, Platform, ModalController, AlertController } from '@ionic/angular';
import * as request from 'requestretry';
import { C } from '../providers/constants';
import { flightService } from '../providers/flightService';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { ActivatedRoute } from '@angular/router';
import { MytripService } from '../providers/mytrip-service.service';
import { BizTravelService } from '../providers/bizTravelService';

import * as moment from 'moment';
@Component({
  selector: 'app-mytripaymentflightselect',
  templateUrl: './mytripaymentflightselect.page.html',
  styleUrls: ['./mytripaymentflightselect.page.scss'],
})
export class MytripaymentflightselectPage implements OnInit {
  departCity;departCode;checkInDisplayFullYear;returnCity;returnCode;checkOutDisplayFullYear;totalPaxStr
  public loader: any; returnUrl; arrbankrmb = [];tokenid
  bookingCode = ""; startDate; endDate; ischeckpay = true; jti;isbtn=false;
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
  ischeckvisa = false;
  isremember=true;isdisable=false;cus_phone;stt
  totalPrice: any;
  ischeckedDK=true;
  constructor(public activityService: ActivityService,public gf: GlobalFunction,private navCtrl:NavController,public storage: Storage,public loadingCtrl: LoadingController,private _flightService: flightService,
    private safariViewController: SafariViewController,private zone: NgZone, public activatedRoute: ActivatedRoute,
    public _mytripService: MytripService,
    public bizTravelService: BizTravelService) { 
    this.departCity=this.activityService.objPaymentMytrip.trip.flightFrom;
    this.departCode=this.activityService.objPaymentMytrip.trip.bookingsComboData[0].departCode;
    this.checkInDisplayFullYear=this.activityService.objPaymentMytrip.trip.checkInDisplay;
    if(this.activityService.objPaymentMytrip.trip.delivery_payment_date && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      this._flightService.itemFlightCache.periodPaymentDate = this.activityService.objPaymentMytrip.trip.delivery_payment_date;
    }
    if (this.activityService.objPaymentMytrip.trip.flightTo) {
      this.returnCity=this.activityService.objPaymentMytrip.trip.flightTo;
      this.returnCode=this.activityService.objPaymentMytrip.trip.bookingsComboData[0].arrivalCode;

    }
    if (this.activityService.objPaymentMytrip.trip.checkOutDisplay) {
      this.checkOutDisplayFullYear=this.activityService.objPaymentMytrip.trip.checkOutDisplay;
    } 
    this.totalPaxStr=this.activityService.objPaymentMytrip.trip.totalPaxStr;

    if (this.activityService.objPaymentMytrip.trip.priceShow) {
      this.totalpricedisplay = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
      
    }else{
      this.totalpricedisplay = this.activityService.objPaymentMytrip.trip.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    }
    this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
    this.cus_phone=this.activityService.objPaymentMytrip.trip.cus_phone;
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })
    this.loadCheckPayment();
    if (this.activityService.objPaymentMytrip.trip.priceShow) {
      this.totalPrice = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
      
    }else{
      this.totalPrice = this.activityService.objPaymentMytrip.trip.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    }
   
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
  }

  async loadCheckPayment(){
    //luồng CityHotel ko gọi lại updatepayment
    if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type != "CB_FLY_HOTEL"){
      let datacheck = await this.gf.checkAllowPayment(this.bookingCode);
      this.blockPayCard = datacheck.response.blockPaymentCard;
      this.blockPaylate = datacheck.response.blockPaymentLate;
    }
  }

  ngOnInit() {
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
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
            this.isdisable=true;
            this.isbtn=true;
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
  gobac(){
    this.navCtrl.back();
  }
  flightpaymentvisa() {
    var se = this;
    if(se.blockPayCard){
      return;
    }
    se.presentLoading();
    if(se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      se.buildLinkPaymentVisa();
    }else{
      se.gf.updatePaymentMethodNew(se.bookingCode, 3, "","").then(datatype => {
        if (datatype && datatype.isHoldSuccess) {
          // se._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
            se.buildLinkPaymentVisa();
          }else{
            se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
            clearInterval(se.intervalID);
            se.hideLoading();
          }
        })
    }
  }
  flightpaymentatm()
  {
    if(this.blockPayCard){
      return;
    }
    
    //luồng CityHotel ko gọi lại updatepayment
    if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      clearInterval(this.intervalID);
      this.navCtrl.navigateForward('mytripaymentflightbank');
    }else{
      this.presentLoading();
    this.checkAllowRepay().then((check) => {
      if(check){
        clearInterval(this.intervalID);
        this.navCtrl.navigateForward('mytripaymentflightbank');
        this.hideLoading();
      }else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
            if(check){
              clearInterval(this.intervalID);
              this.navCtrl.navigateForward('mytripaymentflightbank');
              this.hideLoading();
            }else{
              this.hideLoading();
              this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
              clearInterval(this.intervalID);
              
            }
          })
        }
      })
    }
  }

  buildLinkPayment(type){
    var totalPrice=this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+type+'&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + this.jti+'&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight';
                this.gf.CreatePayoo(url).then(datapayoo => {
                  //datapayoo = JSON.parse(datapayoo);
                  if (datapayoo.success) {
                    this._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
                    this.openWebpage(datapayoo.returnUrl.payUrl);
                    this.zone.run(()=>{
                      this.setinterval(null);
                    })
                    
                  }else{
                    this.hideLoading();
                    this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                  }
                })
  }

  flightpaymentmomo(){
    if(this.blockPayCard){
      return;
    }
    var totalPrice=this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    //luồng CityHotel ko gọi lại updatepayment
    if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      this.buildLinkPayment('momo');
    }else{
      this.presentLoading();
      this.checkAllowRepay().then((check) => {
        if(check){
          clearInterval(this.intervalID);
            this.gf.updatePaymentMethodNew(this.bookingCode, 4, "","").then(datatype => {
              if (datatype && datatype.isHoldSuccess) {
                // this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                  this.buildLinkPayment('momo');
                }else{
                  this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                  clearInterval(this.intervalID);
                  this.hideLoading();
                }
              })
        }else{
            this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
              if(check){
                    this.gf.updatePaymentMethodNew(this.bookingCode, 4, "","").then(datatype => {
                      if (datatype && datatype.isHoldSuccess) {
                        // this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                        this.buildLinkPayment('momo');
                        }else{
                          this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                          clearInterval(this.intervalID);
                          this.hideLoading();
                        }
                      })
                }else{
                  this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                  clearInterval(this.intervalID);
                }
              })
            }
          })
    }
    
  }

  buildLinkPaymentPayoo(){
    var totalPrice=this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone+ '&memberId=' + this.jti;
                this.gf.CreatePayoo(url).then(datapayoo => {
                  this.hideLoading();
                  //datapayoo = JSON.parse(datapayoo);
                  if (datapayoo.success) {
                    this._flightService.itemFlightCache.qrimg = datapayoo.payooQrData.QRCodeUrl;
                    this.navCtrl.navigateForward('mytripaymentflightpayoo/' + this.bookingCode + '/1');
                  }else{
                    this.hideLoading();
                    this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                  }
                })
  }

  flightpaymentpayooqr() {
    if(this.blockPayCard){
      return;
    }
    this.presentLoading();
     //luồng CityHotel ko gọi lại updatepayment
    if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      this.buildLinkPaymentPayoo();
      this.hideLoading();
    }
    else{
      var totalPrice=this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
      this.checkAllowRepay().then((check) => {
        if(check){
              this.gf.updatePaymentMethodNew(this.bookingCode, 6, "","").then(datatype => {
                if (datatype && datatype.isHoldSuccess) {
                  this.buildLinkPaymentPayoo();
                }else{
                  this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                  clearInterval(this.intervalID);
                  this.hideLoading();
                }
              })
        }
        else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
            if(check){
                    this.gf.updatePaymentMethodNew(this.bookingCode, 6, "","").then(datatype => {
                      if (datatype && datatype.isHoldSuccess) {
                        this.buildLinkPaymentPayoo();
                      }else{
                        this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                        clearInterval(this.intervalID);
                        this.hideLoading();
                      }
                    })
                }else{
                  this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                  clearInterval(this.intervalID);
                }
              })
            }
          })
    }
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  checkAllowRepay(){
    var se = this;
    return new Promise((resolve, reject) => {
      se.callCheckHoldTicket().then((check) => {
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
  callCheckHoldTicket(){
    var res = false;
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+this.bookingCode,
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
            //trả trước
      
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
      })
     
      
    })
  }
  async hideLoading(){
    if(this.loader){
      this.loader.dismiss();
    }
  }
  goback(){
    if (this._flightService.tabFlightIndex == 2) {
      if (this._mytripService.listcount==1) {
        this.navCtrl.back();
      }
      else{
        this._mytripService.backfrompage = "mytripdetail"
        this.navCtrl.navigateForward('mytripdetail', {animated: true});
      }
    

    }else{
      if (this._mytripService.listcount==1) {
        this.navCtrl.navigateForward(['/app/tabs/tab3']);
      }
      else{
        this.navCtrl.navigateForward('mytripdetail', {animated: true});
      }
    }
  
  }

  buildLinkPaymentVisa(){
    var se = this;
    var totalPrice=se.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.cus_phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
    se.gf.CreatePayoo(url).then(datapayoo => {
    //datapayoo = JSON.parse(datapayoo);
    if(datapayoo.success){
      se._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
      se._flightService.itemFlightCache.ischeckpayment = 1;
      se.openWebpage(datapayoo.returnUrl);
      se.setinterval(null);
      }else{
        se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
        se.hideLoading();
      }
                    
    })
  }

  NoCreateBooking()
  {
    var se=this;
    if(se.blockPayCard){
      return;
    }
      if(se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
        se.buildLinkPaymentVisa();
      }else{
        se.gf.updatePaymentMethodNew(se.bookingCode, 3, "","").then(datatype => {
          if (datatype && datatype.isHoldSuccess) {
            // se._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
              se.buildLinkPaymentVisa();
            }else{
              se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
              clearInterval(se.intervalID);
              se.hideLoading();
            }
          })
      }
  }
  setinterval(timeout)
  {
    if (this.loader) {
      this.loader.dismiss();
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
        this.checkComboHotelCityPayment();
      }else{
      let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+this.bookingCode;
      this.zone.run(()=>{
        this.gf.Checkpayment(url).then((data) => {
          var checkpay=JSON.parse(data);
          if (checkpay.ipnCall == "CALLED_OK") {
           
            this._flightService.itemFlightCache.ischeckpayment= 1;
            this.hideLoading();
            this.gf.hideLoading();
            this.safariViewController.hide();
            clearInterval(this.intervalID);
            this.getSummaryBooking().then((databkg:any) => {
              this._flightService.itemFlightCache.dataSummaryBooking = databkg;
          })
            this.navCtrl.navigateForward('/mytripaymentflighdone');
          }
          else if(checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL")//case timeout
          {
            this.hideLoading();
            this.gf.hideLoading();
            this.safariViewController.hide();
            clearInterval(this.intervalID);
            this._flightService.paymentError = checkpay;
            this.navCtrl.navigateForward('/flightpaymenttimeout/1');
          }
        })
      })
    }
      
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
     
    }, timeout ? timeout : 60000 * 9.1);
  }
  openWebpage(url: string) {
    var se = this;
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
              if(result.event === 'opened') console.log('Opened');
              else if(result.event === 'loaded') console.log('Loaded');
              else if(result.event === 'closed') 
              {  
                if(se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
                  se.checkComboHotelCityPayment();
                }else{
                  let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+se.bookingCode;
                  se.gf.Checkpayment(url).then((datapayment)=>{
                    let checkpay=JSON.parse(datapayment);
                    if (checkpay.ipnCall == "CALLED_OK") { 
                      se._flightService.itemFlightCache.ischeckpayment= 1;
                      se.hideLoading();
                      se.gf.hideLoading();
                      se.safariViewController.hide();
                      clearInterval(se.intervalID);
                      se.getSummaryBooking().then((databkg:any) => {
                          se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                      })
                      se.navCtrl.navigateForward('/mytripaymentflighdone');
                    }
                    else
                    {
                      se.hideLoading();
                      se.gf.hideLoading();
                      se.safariViewController.hide();
                      clearInterval(se.intervalID);
                      se._flightService.paymentError = checkpay;
                      se.navCtrl.navigateForward('/flightpaymenttimeout/1');
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
          page: "mytrippaymentflightselect",
          func: "checkComboHotelCityPayment",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          param: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "mytrippaymentflightselect";
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
                      se.getSummaryBooking().then((databkg:any) => {
                          se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                      })
                      se.navCtrl.navigateForward('/mytripaymentflighdone');
        }
        else if(rs.error){
          se.hideLoading();
                      se.gf.hideLoading();
                      se.safariViewController.hide();
                      clearInterval(se.intervalID);
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
                      se._flightService.paymentError = rs.error;
                      se.navCtrl.navigateForward('/flightpaymenttimeout/0');
      }

    });
  }

  getSummaryBooking() : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+this.bookingCode,
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
  next() {
    this.presentLoading();
    if (this.bookingCode) {
      this.NoCreateBooking();
    }
  }
  rememberCard(){
    this.isremember=!this.isremember
  }
  chooseacc(item)
  {
    this.tokenid=item.id;
    this.isbtn=true;
    this.isdisable=true;
    this.isremember=true;
  }
  nochooseacc()
  {
    this.tokenid="";
    this.isbtn=true;
    this.isdisable=false;
    this.isremember=true;
  }
  roompaymentbank(){
    this._mytripService.isFlightPaymentBank = true;
    this.navCtrl.navigateForward("/mytrippaymentbank");
  }

  paymentbiztravel(){
    if(this.bizTravelService.bizAccount.balanceAvaiable - this.totalPrice <=0){
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
        var params = {memberid: this.jti, totalprice: this.totalPrice };
        this.gf.showLoading();
        this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
          if(data && data.error == 0){
            this.bizTravelService.phoneOtp = data.phoneOtp;
            this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
            this.bizTravelService.paymentType = 4;
            this.flightComboPayment();
          }else{
            this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
          }
        })
      }else{
        
      }
     
    })
  }

  flightComboPayment(){
    var se =this;
      se.gf.CheckPaymentDate(this.bookingCode).then(data => {
          data = JSON.parse(data);
          var timestamp = new Date();
          var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
          var paymentTime = moment(temptime).format('YYYYMMDDHHmmss');
          var paymentDate = moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
          if (paymentTime < paymentDate) {
            se.buildLinkPaymentFlight().then((checkvalid) => {
              if(checkvalid){
                se.bizTravelService.routeBackWhenCancel = 'mybooking';
                se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                se.navCtrl.navigateForward('confirmpayment');
              }
            })
          }else{

          }
        })
  }

  buildLinkPaymentFlight(): Promise<any>{
    let se = this;
    return new Promise((resolve, reject) => {
    let url;
      url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.cus_phone + '&memberId=' + se.jti +'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
      se.gf.CreateUrl(url).then(dataBuildLink => {
        //dataBuildLink = JSON.parse(dataBuildLink);
        if (dataBuildLink.success) {
          se.gf.hideLoading();
          resolve(true);
        }else{
          se.gf.hideLoading();
          resolve(false);
        }
      })
    })
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
    var se = this;
    var totalPrice=se.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=bnpl&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.cus_phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&BankId=bnpl'+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
    se.gf.CreatePayoo(url).then(datapayoo => {
    if(datapayoo.success){
      se._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
      se._flightService.itemFlightCache.ischeckpayment = 1;
      se.openWebpage(datapayoo.returnUrl);
      se.setinterval(null);
      }else{
        se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
        se.hideLoading();
      }
                    
    })
  }
}
