import { FlightcombobookingdetailPage } from './../flightcombobookingdetail/flightcombobookingdetail.page';
import { Bookcombo } from './../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, Platform } from '@ionic/angular';
import { Booking, RoomInfo, SearchHotel,ValueGlobal } from '../providers/book-service';
import { AuthService } from '../providers/auth-service';
import * as request from 'requestretry';

import { C } from '../providers/constants';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import * as moment from 'moment';
import { ActivityService } from './../providers/globalfunction';
import { ActivatedRoute } from '@angular/router';
import { BizTravelService } from '../providers/bizTravelService';
@Component({
  selector: 'app-mytripaymentcarcombo',
  templateUrl: './mytripaymentcarcombo.page.html',
  styleUrls: ['./mytripaymentcarcombo.page.scss'],
})
export class MytripaymentcarcomboPage implements OnInit {

  departTimeStr; returnTimeStr; airlineCodedep; airlineCoderet; arrchild; textage = ""; children; timestamp;
  public loader: any; ischeckpaymentCard; ischeckpaymentLater; titlecombo; jti;
  scheckvisa = false; returnUrl; arrbankrmb = []; tokenid; startDate; endDate; ischeckpay = true; isbtn = false; ischeckvisa = false;
  intervalID: any; ischeckTransaction = false;
  isremember=true;isdisable=false;Name;
  departDateTimeStr: string;
  returnDateTimeStr: string;
  cin; cout;
  roomnumber; breakfast; PriceAvgPlusTAStr;priceshow;totalPaxStr;
  auth_token: any = '';  bookingCode = "";cus_phone="";Avatar;nameroom;stt
  totalPrice: any;
  ischeckedDK=true;
  constructor(public navCtrl: NavController,  public activityService: ActivityService, public loadingCtrl: LoadingController,public storage: Storage,public gf: GlobalFunction,private safariViewController: SafariViewController,public Roomif: RoomInfo, public activatedRoute: ActivatedRoute,
    public bizTravelService: BizTravelService,
    public zone: NgZone) { 
    this.Avatar=this.activityService.objPaymentMytrip.trip.avatar;
    this.Avatar = (this.Avatar.toLocaleString().trim().indexOf("http") != -1) ? this.Avatar : 'https:' + this.Avatar;
    this.titlecombo=this.activityService.objPaymentMytrip.trip.combo_name;
    this.cin=moment(this.activityService.objPaymentMytrip.trip.checkInDate).format('DD-MM-YYYY');
    this.cout=moment(this.activityService.objPaymentMytrip.trip.checkOutDate).format('DD-MM-YYYY');
    this.Name=this.activityService.objPaymentMytrip.trip.hotel_name;
    this.priceshow=this.activityService.objPaymentMytrip.trip.priceShow;
    this.cus_phone=this.activityService.objPaymentMytrip.trip.cus_phone;
    this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
    this.totalPaxStr=this.activityService.objPaymentMytrip.trip.totalPaxStr;
    this.roomnumber=this.activityService.objPaymentMytrip.trip.room_count;
    this.breakfast=this.activityService.objPaymentMytrip.trip.meal_plan;
    this.nameroom=this.activityService.objPaymentMytrip.trip.room_name;
    this.loadTransferInfo()
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })
    this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
            let text = "Bearer " + auth_token;
            let headers =
                {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }

            this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'mytripflightcombopaymentselect', 'initpage').then((data)=>{
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
  loadTransferInfo() {
    var se = this;
    //bind thông tin chiều đi

    se.departTimeStr = this.activityService.objPaymentMytrip.trip.bookingsComboData[0].departureTime + ' → ' + this.activityService.objPaymentMytrip.trip.bookingsComboData[0].arrivalTime;
    
    //bind thông tin chiều về
    se.returnTimeStr = this.activityService.objPaymentMytrip.trip.bookingsComboData[1].departureTime + ' → ' + this.activityService.objPaymentMytrip.trip.bookingsComboData[1].arrivalTime;
    
  }
  getDayOfWeek(date): string {
    let coutthu = moment(date).format('dddd');
    switch (coutthu) {
      case "Monday":
        coutthu = "thứ 2"
        break;
      case "Tuesday":
        coutthu = "thứ 3"
        break;
      case "Wednesday":
        coutthu = "thứ 4"
        break;
      case "Thursday":
        coutthu = "thứ 5"
        break;
      case "Friday":
        coutthu = "thứ 6"
        break;
      case "Saturday":
        coutthu = "thứ 7"
        break;
      default:
        coutthu = "Chủ nhật"
        break;
    }
    return coutthu;
  }
  ngOnInit() {
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
  }
  goback() {
    clearInterval(this.intervalID);
    if(this.activityService.backValue == 'tab3'){
      this.navCtrl.navigateBack(['/app/tabs/tab3']);
      this.activityService.backValue ='';
    }else{
      this.navCtrl.back();
    }
  }
  roompaymentatm() {
    this.Roomif.point=null;
    this.gf.CheckPaymentDate(this.bookingCode).then(data => {
      // this.presentLoading();
      data = JSON.parse(data);
      var timestamp = new Date();
      var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
      var paymentTime = moment(temptime).format('YYYYMMDDHHmmss');
      var paymentDate = moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
      if (paymentTime < paymentDate) {
        this.navCtrl.navigateForward("/roomchoosebank/1");
      }
      else{
        this.goMytrip();
      }
    })
    
  }
  roompaymentvisa() {
    if (this.arrbankrmb.length==0) {
      this.GeTokensOfMember(1);
    }
  }
  roompaymentpayooqr() {
    this.buildLink('payoo_qr');
  }
  roompaymentmomo() {
    this.buildLink('momo');
  }
  openWebpage(url: string) {
    var se=this;
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
              if(se.loader){
                se.loader.dismiss();
               }
            }
            clearInterval(se.intervalID);
            this.intervalID = setInterval(() => {
              this.checkPayment();
            }, 1000 * 1);
            setTimeout(() => {
              clearInterval(this.intervalID);
            }, 60000 * 15);
          },
          (error: any) => console.error(error)
        );

      } else {
        // use fallback browser, example InAppBrowser
      }
    }
  );
  }
  setinterval()
  {
    clearInterval(this.intervalID);
    this.intervalID = setInterval(() => {
      this.checkPayment();
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000 * 15);
  }
  checkPayment() {
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code:  this.bookingCode },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if (response.statusCode != 200) {
        var objError = {
          page: "roompaymentselect",
          func: "openWebpage",
          message: response.statusMessage,
          content: response.body,
          type: "warning",
          para: JSON.stringify(options)
        };
        C.writeErrorLog(objError, response);
      }
      if (error) {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
      };
      if (body) {
        var rs = JSON.parse(body);
        if (rs.StatusBooking == 3) {
          var id = rs.BookingCode;
          var total = se.priceshow;
          se.Roomif.priceshowtt = se.priceshow;
          var ischeck = '0'
          clearInterval(se.intervalID);
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          if(se.loader){
            se.loader.dismiss();
          }
          se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
        }
        else if(rs.StatusBooking == 9||rs.StatusBooking == 2)
        {
          if(se.loader){
            se.loader.dismiss();
          }
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          clearInterval(se.intervalID);
        }
      }
      else {
        error.page = "roompaymentselect";
        error.func = "openWebpage";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        se.loader.dismiss();
        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
      }
    });
  }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  GeTokensOfMember(stt) {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          this.arrbankrmb = [];
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var cardname = this.getCardName(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
              this.arrbankrmb.push(item);
            }
          }
          if (this.arrbankrmb.length > 0) {
            this.arrbankrmb[0].checked = true;
            this.tokenid = this.arrbankrmb[0].id;
            this.isbtn = true;
            this.isdisable = true;
            this.ischeckvisa = true;
          }
        }
      }
      if (stt == 1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          //this.presentLoading();
          this.buildLink('visa');
        }
      }
    })
  }
  getCardName(text) {
    var cardStr = "";
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
  buildLink(paymentType)
  {
    var se=this;
    var url="";
    this.presentLoading();
    var totalPrice=se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
    this.gf.CheckPaymentDate(this.bookingCode).then(data => {
   
      data = JSON.parse(data);
      var timestamp = new Date();
      var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
      var paymentTime = moment(temptime).format('YYYYMMDDHHmmss');
      var paymentDate = moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
      if (paymentTime < paymentDate) {
        if (paymentType=='visa') {
          url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.cus_phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
        }
        else{
          url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
        }
        this.gf.CreateUrl(url).then(dataBuildLink => {
          dataBuildLink = JSON.parse(dataBuildLink);
          if (dataBuildLink.success) {
            if (paymentType=='visa') {
              se.openWebpage(dataBuildLink.returnUrl);
            }
            else if(paymentType=='payoo_qr'){
              if (dataBuildLink.success) {
                this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                if (this.loader) {
                  this.loader.dismiss();
                }
                this.Roomif.roomtype="";
                this.Roomif.priceshow=this.priceshow;
                this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
              }
            }
            else if(paymentType=='momo'){
              if (dataBuildLink.success) {
                if (this.loader) {
                  this.loader.dismiss();
                }
                window.open(dataBuildLink.returnUrl.payUrl, '_system');
                this.setinterval();
              }
            }
          }
        })
      }else{
        this.goMytrip();
      }
    })
  }
  next() {
    this.buildLink('visa');
  }
  chooseacc(item) {
    this.tokenid = item.id;
    this.isbtn = true;
    this.isdisable=true;
    this.isremember=true;
  }
  nochooseacc() {
    this.tokenid = "";
    this.isbtn = true;
    this.isdisable=false;
    this.isremember=true;
  }
  rememberCard(){
    this.isremember=!this.isremember
  }
  roompaymentbank(){
    this.navCtrl.navigateForward("/mytrippaymentbank");
  }
  goMytrip(){
    alert("Booking không thoả thời hạn thanh toán. Vui lòng tạo booking mới hoặc liên hệ nhân viên tư vấn để được hỗ trợ");
    if (this.loader) {
      this.loader.dismiss();
    }
    clearInterval(this.intervalID);
    this.navCtrl.back();
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
            this.carComboPayment();
          }else{
            this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
          }
        })
      }else{

      }
     
    })
  }

  carComboPayment(){
    var se =this;
     
      se.gf.CheckPaymentDate(this.bookingCode).then(data => {
          data = JSON.parse(data);
          var timestamp = new Date();
          var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
          var paymentTime = moment(temptime).format('YYYYMMDDHHmmss');
          var paymentDate = moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
          if (paymentTime < paymentDate) {
            se.buildLinkPayment().then((checkvalid) => {
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

  buildLinkPayment(): Promise<any>{
    let se = this;
    return new Promise((resolve, reject) => {
    let url;
      url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.cus_phone + '&memberId=' + se.jti +'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
      se.gf.CreateUrl(url).then(dataBuildLink => {
        dataBuildLink = JSON.parse(dataBuildLink);
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
  checkKDk(){
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
}


