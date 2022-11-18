import { Component, ViewChild, NgZone, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController,Platform, ToastController,AlertController } from '@ionic/angular';
import { Booking, RoomInfo, SearchHotel ,Bookcombo} from '../providers/book-service';
import { AuthService } from '../providers/auth-service';
import * as request from 'requestretry';

import { Storage } from '@ionic/storage';
import { C } from '../providers/constants';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { BizTravelService } from '../providers/bizTravelService';
import { voucherService } from '../providers/voucherService';
/**
 * Generated class for the RoompaymentselectEanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'app-roompaymentselect-ean',
  templateUrl: 'roompaymentselect-ean.html',
  styleUrls: ['roompaymentselect-ean.scss'],
})
export class RoompaymentselectEanPage implements OnInit{
  timestamp;
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom;arrchild; textage = "";
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr; priceshow; hotelid
  imgroom; roomtype; indexme; indexroom; cin1; cout1; checkpayment; book; roomcancel; pricetemp;loader:any;
  auth_token: any;
  ischeckroom;
  intervalID: NodeJS.Timeout;ischeckvisa = false
  bookingCode = ""; jti; arrbankrmb = []; tokenid; isbtn = false;
  isremember=true;isdisable=false;isshowRemember=false;
  totalPrice: any;
  ischeckedDK=true;
  constructor(public platform: Platform, public searchhotel: SearchHotel,public bookcombo:Bookcombo, public navCtrl: NavController, public Roomif: RoomInfo, public storage: Storage,  public booking1: Booking, public booking: Booking, public authService: AuthService, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    public gf: GlobalFunction, public zone: NgZone,private router: Router,private safariViewController: SafariViewController,private toastCtrl: ToastController,public alertCtrl: AlertController,
    public bizTravelService: BizTravelService,
    public _voucherService: voucherService) {
    this.Avatar = Roomif.imgHotel;
    this.Name = booking.HotelName;
    this.Address = Roomif.Address;
    this.cin = booking.CheckInDate;
    this.cout = booking.CheckOutDate;
    this.dur = Roomif.dur;
    this.roomnumber = Roomif.roomnumber;
    this.adults = booking.Adults;
    this.children = booking.Child;
    this.roomtype = Roomif.roomtype;
    this.indexme = booking.indexmealtype;
    this.indexroom = booking.indexroom;
    this.jsonroom = Roomif.jsonroom;
    this.room = Roomif.arrroom;
    var chuoicin = this.cin.split('-');
    var chuoicout = this.cout.split('-');
    this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
    this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
    this.nameroom = this.room[0].ClassName;
    this.roomcancel = this.room[0].MealTypeRates[this.indexme];
    this.breakfast = this.room[0].MealTypeRates[this.indexme].Name;
    this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
    this.checkpayment = Roomif.payment;
    this.arrchild = this.searchhotel.arrchild;
    if(this.arrchild){
      for (let i = 0; i < this.arrchild.length; i++) {
        if (i == this.arrchild.length - 1) {
          this.textage = this.textage + this.arrchild[i].numage;
        } else {
          this.textage = this.textage + this.arrchild[i].numage + ",";
        }
      }
    }
    
    if (this.textage) {
      this.textage = "(" + this.textage + ")";
    }
    if (Roomif.priceshow) {
      this.priceshow = Roomif.priceshow;
    }
    else {
      this.priceshow = this.PriceAvgPlusTAStr;
    }
    this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
    this.searchhotel.backPage="roompaymentselect-ean";
    this.searchhotel.rootPage="roompaymentselect-ean";
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.isshowRemember=true;
        this.GeTokensOfMember(0);
      }
      else{
        this.isremember=false;
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

            this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data)=>{
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
    //google analytic
    gf.googleAnalytion('roompaymentselect-ean', 'load', '');
    C.writePaymentLog("hotel", "paymentselect", "purchase", this.bookingCode);
  }
  ngOnInit() {
    // this._voucherService.getObservable().subscribe((itemVoucher)=> {
    //   if(this._voucherService.itemSelectVoucher.observers && this._voucherService.itemSelectVoucher.observers.length >1){
    //     if(this._voucherService.itemSelectVoucher.observers[0]){
    //         this._voucherService.itemSelectVoucher.observers = [...this._voucherService.itemSelectVoucher.observers[0]];
    //     }
    //   }
    //   if(itemVoucher){
    //     let totalprice = this.gf.convertStringToNumber(this.Roomif.priceshow || this.PriceAvgPlusTAStr);
    //     if(totalprice < itemVoucher.rewardsItem.price){
    //       //this.priceshow =0;
    //       // this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
    //       // this.gf.showAlertMessageOnly('Giá trị đơn hàng nhỏ hơn giá trị giảm giá. Quý khách vui lòng chọn mã khác!');
    //       // return;
    //     }else{
    //       this._voucherService.selectVoucher = itemVoucher;
    //     }
    //   }
    // })
  }
  roompaymentbank() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentbank');
    this.navCtrl.navigateForward("/roompaymentbanknew");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentbankselect', '');
  }
  roompaymentlive() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentlive');
    this.navCtrl.navigateForward("/roompaymentlive/0");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentliveselect', '');
  }
  roompaymentatm() {
    this.navCtrl.navigateForward("/roomchoosebank/0");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect-ean', 'roompaymentatmselect', '');
  }
  roompaymentvisa() {
    var se = this;
    if (se.booking.CEmail) {
      if (this.arrbankrmb.length==0) {
        this.GeTokensOfMember(1);
      }
    } else {
      se.presentToastr('Email không hợp lệ. Vui lòng kiểm tra lại.');
    }
   
  }
   //thêm các phương thức thanh toán
   roompaymentpayoolive() {
    this.CreateBooking('payoo_store');
  }
  roompaymentpayooqr() {
    this.CreateBooking('payoo_qr');
  }
  roompaymentmomo() {
    this.CreateBooking('momo');
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
            this.ischeckvisa = true;
            this.isdisable=true;
          }
        }
      }
      if (stt == 1) {
        if (this.arrbankrmb.length > 0) {
          this.ischeckvisa = true;
        } else {
          //this.presentLoading();
          this.CreateBooking('visa');
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
  refreshToken() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          },
        }
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roompaymentselect-ean",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param:  JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentselect-ean";
            error.func = "refreshToken";
            error.param =  JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var au = JSON.parse(body);
            se.zone.run(() => {
              se.storage.remove('auth_token');
              se.storage.set('auth_token', au.auth_token);
              var decoded = jwt_decode(au.auth_token);
              se.storage.remove('point');
              se.storage.set('point', decoded.point);
             
              
            })
          }
        })
      }
    })
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
               if (se.Roomif.point && se.bookingCode) {
               
                se.showInfo("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
                
               
              }
              if (se.Roomif.promocode && se.bookingCode) {
                // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
                se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
                // se.Roomif.promocode="";
               
              }
              clearInterval(se.intervalID);
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
  callCheckBooking(countCheck){
    var se = this;
    console.log(countCheck);
    if(countCheck <5){
      se.checkBookingStatus().then((data) =>{
        if(data){
          se.checkdone(data.id);
        }else{
          setTimeout(()=> {
            countCheck ++;
            se.callCheckBooking(countCheck);
          },5000);
          
        }
      })
    }else{
      alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng quay lại trang Thông tin Khách Sạn!");
      se.loader.dismiss();
      se.searchhotel.backPage = "roompaymentselect";
      se.navCtrl.navigateBack('/hoteldetail/'+se.booking.HotelId);
    }
  }

  checkdone(id){
    var se = this;
    se.loader.dismiss();
    se.Roomif.priceshowtt = se.priceshow;
    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + se.priceshow + '/' + '0');
  }

  checkBookingStatus() : Promise<any>{
    var se = this;
    return new Promise((resolve, reject) =>{
      var options = {
        method: 'GET',
        url: C.urls.baseUrl.urlPost + '/mCheckBooking',
        qs: { code: se.book.code },
        headers:
        {
        }
      };
      request(options, function (error, response, body) {
        if (response.statusCode != 200) {
          var objError = {
            page: "roomchoosebank",
            func: "roomchoosebank-mCheckBooking",
            message: response.statusMessage,
            content: response.body,
            type: "warning",
            param:  JSON.stringify(options)
          };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page = "roomchoosebank";
          error.func = "roomchoosebank-mCheckBooking";
          error.param =  JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
        if (body) {
          var rs = JSON.parse(body);
          if (rs.StatusBooking == 3) {
            
            var data = {
              id: rs.BookingCode
            }
            resolve(data);
          }
          else {
            resolve(false);
            // alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng quay lại trang Thông tin Khách Sạn!");
            // se.loader.dismiss();
            // se.searchhotel.backPage = "roompaymentselect";
            // //se.refreshToken();
            // se.navCtrl.navigateBack('/hoteldetail/'+se.booking.HotelId);
            //se.navCtrl.navigateBack(['/app/tabs/hoteldetail/'+se.booking.HotelId]);
          }
        }
        else{
          error.page = "roomchoosebank";
          error.func = "next";
          error.param = JSON.stringify(options);
          C.writeErrorLog(error, response);
          se.loader.dismiss();
          alert("Đã có sự cố xảy ra, vui lòng thử lại!");
        }
      });
    })
    
  }

  roompaymentbreakdow() {
    var dur = this.dur;
    var roomnumber = this.roomnumber;
    this.clearClonePage("page-roompaymentbreakdown");
    this.navCtrl.navigateForward('/roompaymentbreakdown/' + dur + '/' + roomnumber);

  }
  clearClonePage(pagename) {
    //Xóa clone do push page
    let elements = [];
    elements = Array.from(document.querySelectorAll(pagename));
    if (elements != null && elements.length > 0) {
      elements.forEach(el => {
        if (el != null && el.length > 0) {
          el.remove();
        }
      });
    }
  }
  // openRoomCancel(){
  //   let modal = this.modalCtrl.create('RoomcanceldatPage',{roomInfo: this.roomcancel});
  //   modal.present();
  // }
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }
  goback() {
    clearInterval(this.intervalID);
    
    if((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode))
    {
      // // this.Roomif.promocode="";
      // if(this._voucherService.selectVoucher){
      //   this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
      //   this._voucherService.publicClearVoucherAfterPaymentDone(1);
      //   this._voucherService.selectVoucher = null;
      // }
      this.Roomif.bookingCode=this.bookingCode;
      this.navCtrl.navigateBack('/roomdetailreview');
    }else{
      this.navCtrl.back();
    }
  }
  openRoomCancel(){
    this.gf.setParams(this.roomcancel,'roomInfo');
    this.searchhotel.backPage = "roompaymentselect-ean";
    this.navCtrl.navigateForward('/roomcancel');
  }

  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  CreateBooking(paymentType) {
    var se = this;
    se.presentLoading();
    if(se.Roomif.roomtype.Supplier == 'SERI'){
      //Check allotment trÆ°á»›c khi book
        se.gf.checkAllotmentSeri(
        se.booking.HotelId,
        se.Roomif.RoomId,
        se.booking.CheckInDate,
        se.booking.CheckOutDate,
        se.Roomif.roomnumber,
        'SERI', se.Roomif.roomtype.HotelCheckDetailTokenInternal
        ).then((allow)=> {
          if(allow){
            se.continueBooking(paymentType);
          }else{
            if (se.loader) {
              se.loader.dismiss();
            }
            se.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
          }
        })
    }else{
      se.continueBooking(paymentType);
    }
  
  }

  continueBooking(paymentType){
    var se= this;
    var paymentMethod=se.gf.funcpaymentMethod(paymentType);
    this.CreateBookingRoom(paymentMethod).then(databook => {
      if (databook) {
        if (databook.error == 0) {
          this.bookingCode = databook.code;
          this.Roomif.bookingCode = databook.code;
          if (this.roomtype.Supplier == 'HBED') {
            var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
            if(se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed){
              totalPrice = totalPrice - se._voucherService.selectVoucher.rewardsItem.price;
            }
            // var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankapBlankDeepLinkpNew';
            var url="";
            if (paymentType=='visa') {
              //url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankappNew';
              url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.Roomif.phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
            }
            else{
              url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti+ '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
            }
            this.gf.CreateUrl(url).then(dataBuildLink => {
              dataBuildLink = JSON.parse(dataBuildLink);
              if (dataBuildLink.success) {
                // if(se._voucherService.selectVoucher){
                //   se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                //   se._voucherService.publicClearVoucherAfterPaymentDone(1);
                //   setTimeout(()=> {
                //       se._voucherService.selectVoucher = null;
                //     },300)
                // }
                if (paymentType == 'visa') {
                  se.openWebpage(dataBuildLink.returnUrl);
                }
                else if (paymentType == 'payoo_store') {
                  this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                  this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                  if (this.loader) {
                    this.loader.dismiss();
                  }
                  this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                }
                else if (paymentType == 'payoo_qr') {
                  if (dataBuildLink.success) {
                    this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                    if (this.loader) {
                      this.loader.dismiss();
                    }
                    this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                  }
                }
                else if (paymentType == 'momo') {
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
          }
          //pdanh 12/03/2021 luồng book VIN
          else if(se.roomtype.Supplier == "VINPEARL" 
          || se.roomtype.Supplier == "SMD" || se.Roomif.roomtype.Supplier == 'SERI' || se.Roomif.roomtype.Supplier == 'AGD'
          ){
            var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
            if(se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed){
              totalPrice = totalPrice - se._voucherService.selectVoucher.rewardsItem.price;
            }
                var url="";
                if (paymentType=='visa') {
                  url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.Roomif.phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
                }
                else{
                  url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti+ '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                }
                this.gf.CreateUrl(url).then(dataBuildLink => {
                  dataBuildLink = JSON.parse(dataBuildLink);
                  if (dataBuildLink.success) {
                    // if(se._voucherService.selectVoucher){
                    //   se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                    //   se._voucherService.publicClearVoucherAfterPaymentDone(1);
                    //   setTimeout(()=> {
                    //   se._voucherService.selectVoucher = null;
                    // },300)
                    // }
                    if (paymentType == 'visa') {
                      se.openWebpage(dataBuildLink.returnUrl);
                    }
                    else if (paymentType == 'payoo_store') {
                      this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                      this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                      if (this.loader) {
                        this.loader.dismiss();
                      }
                      this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                    }
                    else if (paymentType == 'payoo_qr') {
                      if (dataBuildLink.success) {
                        this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                        if (this.loader) {
                          this.loader.dismiss();
                        }
                        this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                      }
                    }
                    else if (paymentType == 'momo') {
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
          }
          else{
            se.gf.checkroomEAN(se.bookingCode).then(data => {
              if (data == '0') {
                var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
                if(se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed){
                  totalPrice = totalPrice - se._voucherService.selectVoucher.rewardsItem.price;
                }
                var url="";
                if (paymentType=='visa') {
                  url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +this.Roomif.phone + '&memberId=' + se.jti + '&TokenId='+se.tokenid+'&rememberToken='+se.isremember+'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
                }
                else{
                  url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti+ '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                }
                this.gf.CreateUrl(url).then(dataBuildLink => {
                  dataBuildLink = JSON.parse(dataBuildLink);
                  if (dataBuildLink.success) {
                    // if(se._voucherService.selectVoucher){
                    //   se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                    //   se._voucherService.publicClearVoucherAfterPaymentDone(1);
                    //   setTimeout(()=> {
                    //   se._voucherService.selectVoucher = null;
                    // },300)
                    // }
                    if (paymentType == 'visa') {
                      se.openWebpage(dataBuildLink.returnUrl);
                    }
                    else if (paymentType == 'payoo_store') {
                      this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                      this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                      if (this.loader) {
                        this.loader.dismiss();
                      }
                      this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/0');
                    }
                    else if (paymentType == 'payoo_qr') {
                      if (dataBuildLink.success) {
                        this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                        if (this.loader) {
                          this.loader.dismiss();
                        }
                        this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
                      }
                    }
                    else if (paymentType == 'momo') {
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
              }
              else {
                if(se.loader){
                  se.loader.dismiss();
                }
                alert('Đã hết phòng, vui lòng chọn phòng khác');
                se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
              }
            })
          }
         
        }
        else {
          if(se.loader){
            se.loader.dismiss();
          }
          se.storage.get('jti').then((memberid) => {
            if(memberid){
              se.storage.get('deviceToken').then((devicetoken) => {
                if(devicetoken){
                  se.gf.refreshToken(memberid, devicetoken).then((token) =>{
                    setTimeout(()=>{
                      se.auth_token = token;
                    },100)
                  });
                }else{
                  se.showAlertMessageOnly(databook.Msg);
                }
              })
            }else{
              se.showAlertMessageOnly(databook.Msg);
            }
            
          })
         
        }
      }
      else {
        if(se.loader){
          se.loader.dismiss();
        }
        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
      }
    })
  }

  async showAlertMessageOnly(msg){
    let alert = await this.alertCtrl.create({
      header: '',
      message: 'Mã đăng nhập đã hết hạn, vui lòng đăng nhập lại!',
      cssClass: "cls-alert-message",
      backdropDismiss: false,
      buttons: [
      {
        text: 'OK',
        role: 'OK',
        handler: () => {
          this.navCtrl.navigateForward('/login');
          alert.dismiss();
        }
      }
      ]
    });
    alert.present();
  }
  
  //Tạo booking phòng
  CreateBookingRoom(paymentMethod): Promise<any>{
    var Invoice = 0;
    this.timestamp = Date.now();
    this.jsonroom.RoomClasses=this.room;
    if (this.Roomif.order) {
      Invoice = 1;
    }
    return new Promise((resolve, reject) => {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlPost + '/mInsertBooking',
        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
        headers:
        {
          'content-type': 'application/json'
        },
        body:
        {
          RoomClassObj: this.jsonroom.RoomClasses[0].ListObjRoomClass,
          CName: this.Roomif.hoten,
          CEmail: this.booking.CEmail,
          CPhone: this.Roomif.phone,
          timestamp: this.timestamp,
          HotelID: this.booking.HotelId,
          paymentMethod: paymentMethod,
          note: this.Roomif.notetotal,
          source: '6',
          MemberToken: this.auth_token,
          Customers: this.Roomif.arrcustomer,
          UsePointPrice: this.Roomif.pricepoint,
          NoteCorp: this.Roomif.order,
          Invoice: Invoice,
          UserPoints: this.Roomif.point,
          CheckInDate: this.jsonroom.CheckInDate,
          CheckOutDate: this.jsonroom.CheckOutDate,
          TotalNight: this.jsonroom.TotalNight,
          MealTypeIndex: this.booking.indexmealtype,
          CompanyName: this.Roomif.companyname,
          CompanyAddress: this.Roomif.address,
          CompanyTaxCode: this.Roomif.tax,
          BillingAddress: this.Roomif.addressorder,
          promotionCode: this.Roomif.promocode,
          comboid: this.bookcombo.ComboId,
          PenaltyDescription: this.Roomif.textcancel,
          companycontactname: this.Roomif.nameOrder
        },
        json: true
      };
      request(options, function (error, response, body) {
        if(response.statusCode != 200){
          var objError ={
              page: "roompaymentselect",
              func: "roompaymentvisa",
              message : response.statusMessage,
              content : response.body,
              type: "warning",
              param:  JSON.stringify(options)
            };
          C.writeErrorLog(objError,response);
        }
        if (error) {
          error.page="roompaymentselect";
          error.func="roompaymentvisa";
          error.param =  JSON.stringify(options);
          C.writeErrorLog(error,response);
        };
        if (body) {
          resolve(body);
        }
      });
    });
  }
  setinterval()
  {
    clearInterval(this.intervalID);
    // this.searchhotel.backPage = "foodpaymentselect";
    // this.navCtrl.navigateBack('/app/tabs/tab1');
    this.intervalID = setInterval(() => {
      this.checkPayment();
    }, 1000 * 1);
    setTimeout(() => {
      clearInterval(this.intervalID);
    }, 60000 * 15);
  }
  //check Payment
  checkPayment(){
    var se = this;
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
          se.clearClonePage('page-roompaymentdone');
          clearInterval(se.intervalID);
          if (se.safariViewController) {
            se.safariViewController .hide();
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
            se.safariViewController .hide();
          }
          clearInterval(se.intervalID);
          if (se.Roomif.point && se.bookingCode) {
               
            se.showInfo("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
            
           
          }
          if (se.Roomif.promocode && se.bookingCode) {
            // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
            se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
            // se.Roomif.promocode="";
           
          }
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
  next() {
    this.CreateBooking('visa');
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


  paymentbiztravel(){
    if(this.bizTravelService.bizAccount.balanceAvaiable - this.totalPrice*1<=0){
      return;
    }
    this.gf.showLoading();
    this.storage.get('auth_token').then(auth_token => {
      if(auth_token){
        var text = "Bearer " + auth_token;
        var  headers =
        {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
        }
        var params = {memberid: this.jti, totalprice: this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') };
        this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
          if(data && data.error == 0){
            this.bizTravelService.phoneOtp = data.phoneOtp;
            this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
            this.bizTravelService.paymentType = 2;
            this.roomPayment();
          }else{
            this.gf.hideLoading();
            this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
          }
        })
      }else{
        this.gf.hideLoading();
      }
     
    })
  }

  roomPayment(){
    let se = this;
      var url="";
        se.CreateBookingRoom('companycredit').then(databook => {
          if (databook) {
            if (databook.error == 0) {
              se.bookingCode = databook.code;
              se.Roomif.bookingCode = databook.code;
              var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
              if(se._voucherService.selectVoucher && se._voucherService.selectVoucher.claimed){
                totalPrice = totalPrice - se._voucherService.selectVoucher.rewardsItem.price;
              }
              url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' +se.Roomif.phone + '&memberId=' + se.jti +'&callbackUrl='+ C.urls.baseUrl.urlPayment +'/Home/BlankDeepLink';
              
              se.gf.CreateUrl(url).then(dataBuildLink => {
                dataBuildLink = JSON.parse(dataBuildLink);
                se.gf.hideLoading();
                if (dataBuildLink.success) {
                  // if(se._voucherService.selectVoucher){
                  //   se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                  //   se._voucherService.publicClearVoucherAfterPaymentDone(1);
                  //   setTimeout(()=> {
                  //     se._voucherService.selectVoucher = null;
                  //   },300)
                  // }
                  se.bizTravelService.routeBackWhenCancel = 'roomdetailreview';
                  se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                  se.navCtrl.navigateForward('confirmpayment');
                }else{
                  alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                }
              })
            }
            else {
              se.gf.hideLoading();
              alert(databook.Msg );
              if(se.Roomif.point &&  se.Roomif.bookingCode)
              {
                se._voucherService.publicClearVoucherAfterPaymentDone(1);
                se.navCtrl.navigateBack('/roomdetailreview');
              }
              if(se.Roomif.promocode &&  se.Roomif.bookingCode)
              {
                se._voucherService.publicClearVoucherAfterPaymentDone(1);
                se.navCtrl.navigateBack('/roomdetailreview');
              }
            }
          }
          else {
            se.gf.hideLoading();
            alert("Đã có sự cố xảy ra, vui lòng thử lại!");
          }
        })
       
  }
  async showInfo(msg) {
    let alert = await this.alertCtrl.create({
      header: "Thông báo",
      message: msg,
      buttons: [{
        text: 'OK',
        role: 'OK',
        handler: () => {
          alert.dismiss();
          this.Roomif.promocode="";
          this._voucherService.publicClearVoucherAfterPaymentDone(1);
          this.navCtrl.navigateForward('/roomdetailreview');
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
}

