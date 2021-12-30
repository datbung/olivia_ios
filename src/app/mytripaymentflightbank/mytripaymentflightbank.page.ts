import { foodService } from './../providers/foodService';
import { Bookcombo, foodInfo } from './../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction,ActivityService } from '../providers/globalfunction';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { flightService } from '../providers/flightService';
import * as moment from 'moment';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';

@Component({
  selector: 'app-mytripaymentflightbank',
  templateUrl: './mytripaymentflightbank.page.html',
  styleUrls: ['./mytripaymentflightbank.page.scss'],
})
export class MytripaymentflightbankPage implements OnInit {

  ischeck; timestamp; public ischeckbox; jti
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; ischecktext = true
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr; priceshow
  imgroom; roomtype; indexme; indexroom; cin1; cout1; checkpayment; book; id; pricetemp; hotelid
  public loader: any; startDate; endDate; arrbankrmb=[];
  auth_token: any = ''; bookingCode = ""; isckb = false; TokenId;bankid="";
  intervalID: any;
  allowCheckHoldTicket: boolean = true;
  isremember=true;
  totalpricedisplay: any;
  cus_phone;isdisable=false;
  constructor(public activityService: ActivityService,public navCtrl: NavController, private toastCtrl: ToastController, public booking: Booking, 
    public Roomif: RoomInfo, public storage: Storage, public zone: NgZone, public searchhotel: SearchHotel,private safariViewController: SafariViewController,
    public loadingCtrl: LoadingController,public _flightService : flightService, public platform: Platform, public gf: GlobalFunction,public bookCombo:Bookcombo,
    private backgroundmode: BackgroundMode) {
      this.priceshow = this._flightService.itemFlightCache.totalPriceDisplay;

      this.platform.ready().then(()=>{
        this.backgroundmode.on('activate').subscribe(()=>{
            console.log('background mode enabled');
            //this.callCheckPayment();
        })
        this.backgroundmode.enable();
      })
  }
  ngOnInit() {
    
  }
  ionViewWillEnter() {
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember();
      }
    })
    this.totalpricedisplay=this.activityService.objPaymentMytrip.trip.priceShow;
    this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
    this.cus_phone=this.activityService.objPaymentMytrip.trip.cus_phone;
  }
  next() {
    this.gf.showLoading();
    this.TokenId="";
    this.bankid="";
    this.arrbankrmb.forEach(element => {
      if (element.checked) {
        this.TokenId=element.id;
        this.bankid=element.vpc_Card;
      }
    });
    if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      if (this.TokenId) {
        if (this.bookingCode) {
          this.CreateUrlOnePay(this.bankid);
        } 
      }
      else{
        if (this.id) {
          if (this.bookingCode) {
            this.CreateUrlOnePay(this.id);
          }
        } else {
          this.gf.hideLoading();
          this.presentToast();
        }
      }
    }else{
      this.checkAllowRepay().then((check)=>{
        if(check){
          if (this.TokenId) {
            if (this.bookingCode) {
              this.CreateUrlOnePay(this.bankid);
            } 
          }
          else{
            if (this.id) {
              if (this.bookingCode) {
                this.CreateUrlOnePay(this.id);
              }
            } else {
              this.gf.hideLoading();
              this.presentToast();
            }
          }
        }else{
          this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) =>{
              if(check){
                if (this.TokenId) {
                  if (this.bookingCode) {
                    this.CreateUrlOnePay(this.bankid);
                  } 
                }
                else{
                  if (this.id) {
                    if (this.bookingCode) {
                      this.CreateUrlOnePay(this.id);
                    }
                  } else {
                    this.gf.hideLoading();
                    this.presentToast();
                  }
                }
              }else{
                this.gf.hideLoading();
                this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                clearInterval(this.intervalID);
              
              }
          })
        }
        
      })
    }
  }
  openWebpage(url: string) {
    var se = this;
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
              if(result.event === 'opened') {
                console.log(url.link);
              }
              else if(result.event === 'loaded'){
                console.log(url.link);
              }
              else if(result.event === 'closed') 
              {
                if(se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
                  se.checkComboHotelCityPayment();
                }else{
                  let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+se._flightService.itemFlightCache.reservationId;
                  se.gf.Checkpayment(url).then((datapayment) => {
                    var checkpay=JSON.parse(datapayment);
                    if (checkpay.ipnCall == "CALLED_OK") {
                          se.hideLoading();
                          se.gf.hideLoading();
                          se.safariViewController.hide();
                          clearInterval(se.intervalID);
                          se.getSummaryBooking().then((databkg:any) => {
                            se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                          })
                          se.navCtrl.navigateForward('/mytripaymentflighdone');
                    }
                    else//case còn lại không thành công
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
          se.gf.showLoading();
          se.hideLoading();
          // use fallback browser, example InAppBrowser
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

  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: "Xin chọn 1 ngân hàng",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  clickitem(id) {
    this.zone.run(() => {
      this.id = id;
      this.isdisable=false;
      this.TokenId="";
      this.arrbankrmb.forEach(element => {
        element.checked =false;
      });
    })
  }

  edit() {
    this.zone.run(() => {
      if (this.ischeck) {
        this.ischecktext = true;
      } else {
        this.ischecktext = false;
      }
    })
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
  goback() {
    this.navCtrl.back();
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  CreateUrlOnePay(bankid) {
    var se = this;
    var totalPrice=this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
    if(se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
      se.gf.updatePaymentMethodForCombo(se.bookingCode, "1");
      se._flightService.itemFlightCache.periodPaymentDate = se.activityService.objPaymentMytrip.trip.delivery_payment_date;
          var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
          se.gf.CreatePayoo(url).then(datapayoo => {
          datapayoo = JSON.parse(datapayoo);
          if(datapayoo.success){
            se.openWebpage(datapayoo.returnUrl);
            se.zone.run(()=>{
              se.setinterval(null);
            })
          }else{
            se.hideLoading();
            se.gf.hideLoading();
            se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
          }
        
        })
    }else{
      se.gf.updatePaymentMethodNew(se.bookingCode, 2, se.bankid,"").then((data)=>{
        if(data && data.isHoldSuccess){
          se._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;

          var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
          se.gf.CreatePayoo(url).then(datapayoo => {
          datapayoo = JSON.parse(datapayoo);
          if(datapayoo.success){
            se.openWebpage(datapayoo.returnUrl);
            se.zone.run(()=>{
              se.setinterval(null);
            })
          }else{
            se.hideLoading();
            se.gf.hideLoading();
            se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
          }
        
        })

        }else{
          se.hideLoading();
          se.gf.hideLoading();
          se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
        }
      })
    }
  }
  GeTokensOfMember() {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          this.arrbankrmb=[];
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card != 'VC' && dataTokens.tokens[i].vpc_Card != 'MC' && dataTokens.tokens[i].vpc_Card != 'JC' && dataTokens.tokens[i].vpc_Card != 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var name_Bank=this.getnameBank(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank:name_Bank,checked:false,vpc_Card:dataTokens.tokens[i].vpc_Card};
              this.arrbankrmb.push(item);
            }
          }
          if ( this.arrbankrmb.length>0) {
            this.arrbankrmb[0].checked=true;
            this.isdisable=true;
            this.TokenId= this.arrbankrmb[0].id;
          }
          // item = { id: '999', imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[0].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank:name_Bank,checked:false};
          // this.arrbankrmb.push(item);
        }
      
      }
    })
  }
  getnameBank(text) {
    var cardStr="";
    switch (text) {
      case "970436":
        cardStr = "VietcomBank";
        break;
      case "970412":
        cardStr = "VRBank";
        break;
      case "970407":
        cardStr = "TechcomBank";
        break;
      case "970423":
        cardStr = "TienPhongBank";
        break;
      case "970415":
        cardStr = "ViettinBank";
        break;
      case "970441":
        cardStr = "VIB";
        break;
      case "970406":
        cardStr = "DongABank";
        break;
      case "970437":
        cardStr = "HDBank";
        break;
      case "970422":
        cardStr = "MB";
        break;
      case "970427":
        cardStr = "VietABank";
        break;
      case "970426":
        cardStr = "MaritimeBank";
        break;
      case "970431":
        cardStr = "EximBank";
        break;
      case "970443":
        cardStr = "SHB";
        break;
      case "970432":
        cardStr = "VPBank";
        break;
      case "970425":
        cardStr = "AnBinhBank";
        break;
      case "970403":
        cardStr = "SacomBank";
        break;
      case "970428":
        cardStr = "NamABank";
        break;
      case "970414":
        cardStr = "OceanBank";
        break;
      case "970418":
        cardStr = "BIDV";
        break;
      case "970440":
        cardStr = "SeaBank";
        break;
      case "970409":
        cardStr = "BacABank";
        break;
      case "970419":
        cardStr = "NaviBank";
        break;
      case "970405":
        cardStr = "AgriBank";
        break;
      case "970429":
        cardStr = "SaigonBank";
        break;
      case "970454":
        cardStr = "VietCapital";
        break;
      default:
        break;
    }
    return cardStr;
  }
  checkacc(item,ev)
  {
    var se = this;
    if(ev.target.checked){
      se.arrbankrmb.forEach(element => {
        element.checked = false;
      });
      item.checked = true;
      this.isdisable=true;
      this.isremember=true;
      se.id = '';
    }
    else{
      item.checked = false;
      ev.target.checked = false;
      ev.target.classList.remove("radio-checked");
    }
  
  }

  setinterval(timeout)
  {
    if (this.loader) {
      this.loader.dismiss();
    }
    this.gf.hideLoading();
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      if(this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL"){
        this.checkComboHotelCityPayment();
      }else{
        let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+this.bookingCode;
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
          else if(checkpay.ipnCall == "CALLED_FAIL" || checkpay.ipnCall == "CALLED_TIMEOUT")//hủy
                    {
                      this.hideLoading();
                      this.gf.hideLoading();
                      this.safariViewController.hide();
                      clearInterval(this.intervalID);
                      this._flightService.paymentError = checkpay;
                      this.navCtrl.navigateForward('/flightpaymenttimeout/1');
                    }
        })
      }
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, timeout ? timeout : 60000 * 9.1);
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

  checkHoldTicket(data){
    var se = this, res = false;
    let url = C.urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/"+this.bookingCode;
    
        se.callCheckHoldTicket().then((check) => {
          if (!check && se.allowCheckHoldTicket) {
              res = false;
              setTimeout(() => {
                se.checkHoldTicket(data);
              }, 3000);
          }else{

            if(check){
              se.gf.hideLoading();
              window.close();
              se.safariViewController.hide();
              clearInterval(se.intervalID);
              se.navCtrl.navigateForward('/mytripaymentflighdone');
            }else{//hold vé thất bại về trang tìm kiếm
              clearInterval(se.intervalID);
              se.gf.hideLoading();
              se.safariViewController.hide();
              window.close();
              se.navCtrl.navigateForward('/flightpaymentwarning');
             
            }
                
          }
        })
      

      setTimeout(() => {
       
        se.allowCheckHoldTicket = false;
       
      }, 1000 * 60 * 7);
   
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

  callCheckPayment(){
    var se = this;
      se.checkPayment();
  }

  checkPayment(){
    var se = this;
    let url = C.urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id="+se._flightService.itemFlightCache.reservationId;
    se.gf.Checkpayment(url).then((data) => {
      var checkpay=JSON.parse(data);
      if (!checkpay.status) {
        setTimeout(()=>{
          se.callCheckPayment();
        },1000 *2)
      }else{
          se.backgroundmode.disable();
          se.safariViewController.hide();
      }
    })
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
  rememberCard(){
    this.isremember=!this.isremember
  }
}
