import { Bookcombo } from './../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import {  NavController, ModalController, LoadingController,Platform,AlertController } from '@ionic/angular';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { AuthService } from '../providers/auth-service';
import * as request from 'requestretry';

import { C } from '../providers/constants';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { BizTravelService } from '../providers/bizTravelService';
@Component({
  selector: 'app-combopayment',
  templateUrl: './combopayment.page.html',
  styleUrls: ['./combopayment.page.scss'],
})
export class CombopaymentPage implements OnInit {
  departtime;
  timestamp;
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; textage = ""; arrchild;
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr; priceshow
  imgroom; roomtype; indexme; indexroom; cin1; cout1; checkpayment; book; roomcancel; hotelid
  pricetemp; public loader: any; titlecombo; departTicketSale; departTicketSaleshow; loadpricedone = false;
  returnTicketSale; returnTicketSaleshow; checkdiscountdepart; checkdiscountreturn; departObject; returnObject;
  departDateTimeStr: string;
  returnDateTimeStr: string;
  departTimeStr: string;
  returnTimeStr: string;
  departVehicleStr: any;
  returnVehicleStr: any; listcars; fromPlace; totalAdult; hoten; phone; email; bookingCode;
  jti; arrbankrmb = []; tokenid; isbtn = false;
  intervalID: NodeJS.Timeout; ischeckvisa = false;
  _inAppBrowser: any;
  _windowmomo: any;
  isremember=true;isdisable=false
  ischeckTransaction: boolean;
  constructor(public platform: Platform, public searchhotel: SearchHotel, public navCtrl: NavController,
    public storage: Storage, public Roomif: RoomInfo,  public booking1: Booking,
    public booking: Booking, public authService: AuthService, public modalCtrl: ModalController, public loadingCtrl: LoadingController,public alertCtrl: AlertController,
    public gf: GlobalFunction, public zone: NgZone, private router: Router, private bookCombo: Bookcombo,private safariViewController:SafariViewController,
    public bizTravelService: BizTravelService) {
    this.listcars = this.gf.getParams('carscombo');

    this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.hoten = this.Roomif.hoten;
    this.phone = this.Roomif.phone
    this.totalAdult = bookCombo.totalAdult;
    this.Avatar = Roomif.imgHotel;
    this.Name = booking.HotelName;
    this.Address = Roomif.Address;
    this.cin = booking.CheckInDate;
    this.cout = booking.CheckOutDate;
    this.dur = moment(this.cout).diff(moment(this.cin), 'days');
    this.roomnumber = this.searchhotel.roomnumber;
    this.adults = booking.Adults;
    this.children = booking.Child;
    this.roomtype = Roomif.roomtype;
    this.jsonroom = Roomif.jsonroom;
    this.room = Roomif.arrroom;
    var chuoicin = this.cin.split('-');
    var chuoicout = this.cout.split('-');
    this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
    this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
    this.nameroom = this.room[0].ClassName;
    this.breakfast = (this.bookCombo.MealTypeCode == 'CUS' ? 'Ăn 3 bữa' : this.bookCombo.MealTypeName);
    this.titlecombo = this.bookCombo.ComboTitle;
    this.arrchild = this.searchhotel.arrchild;
    this.departObject = this.bookCombo.departObjectCar;
    this.returnObject = this.bookCombo.returnObjectCar;
    this.departTicketSale = this.bookCombo.ComboDetail.comboDetail.departTicketSale;
    this.returnTicketSale = this.bookCombo.ComboDetail.comboDetail.returnTicketSale;
    this.fromPlace = this.bookCombo.ComboDetail.comboDetail.departurePlace;
    if (this.arrchild) {
      for (let i = 0; i < this.arrchild.length; i++) {
        if (i == this.arrchild.length - 1) {
          this.textage = this.textage + this.arrchild[i].numage;
        } else {
          this.textage = this.textage + this.arrchild[i].numage + ",";

        }
      }
      if (this.textage) {
        this.textage = "(" + this.textage + ")";
      }
    }
    this.searchhotel.backPage = "roompaymentselect";
    this.searchhotel.rootPage = "roompaymentselect-ean";
    this.checkpayment = Roomif.payment;
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.GeTokensOfMember(0);
      }
    })
    this.storage.get('email').then(e => {
      if (e !== null) {
        this.email = e;
        this.loadTransferInfo();
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
    gf.googleAnalytion('roompaymentselect', 'load', '');

  }
  ngOnInit() {
  }
  roompaymentbank() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentbank');
    this.navCtrl.navigateForward("/combocarbank");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect', 'roompaymentbankselect', '');
  }
  roompaymentlive() {
    clearInterval(this.Roomif.setInter);
    this.clearClonePage('page-roompaymentlive');
    this.navCtrl.navigateForward("/combocarlive");
    //google analytic
    this.gf.googleAnalytion('roompaymentselect', 'roompaymentliveselect', '');
  }
  roompaymentatm() {
    this.navCtrl.navigateForward("/combochoosebank")
    //google analytic
    this.gf.googleAnalytion('combopayment', 'combopayment', '');
  }
  roompaymentvisa() {
    if (this.arrbankrmb.length==0) {
      this.GeTokensOfMember(1);
    }
  }
  postapibook(paymentType) {
    var se = this;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/booking',
      headers:
      {
        apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
        apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
      },
      body:
      {
        departParams:
        {
          trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
          total_seats: this.bookCombo.totalseatsdep,
          total_price: this.bookCombo.pricedep,
          code: '',
          dropoff_place: "",
          pickup_place: ""
        },
        returnParams:
        {
          trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
          total_seats: this.bookCombo.totalseatsret,
          total_price: this.bookCombo.priceret,
          code: '',
          pickup_place: '',
          dropoff_place: ''
        },
        customer_phone: se.phone,
        customer_name: se.hoten,
        customer_email: 'tc@ivivu.com',
        pay_status: 0
      },
      json: true
    };
    request(options, function (error, response, body) {
      if (body.status == 0) {
        var json = body.data;
        if (json.length > 0) {
          se.listcars.TransferBooking.departTransfer.ReservedTickets = JSON.stringify(json[0].data.reserve_Tickets);
          se.listcars.TransferBooking.returnTransfer.ReservedTickets = JSON.stringify(json[1].data.reserve_Tickets);
         
          var Seatsde = json[0].data.seats;
          var Seatsre = json[1].data.seats;
          var seatstextde = "";
          var seatstextre = "";
          for (let i = 0; i < Seatsde.length; i++) {
            if (i == Seatsde.length - 1) {
              seatstextde = seatstextde + Seatsde[i].seat_code;
            }
            else {
              seatstextde = seatstextde + Seatsde[i].seat_code + ',';
            }
          }
          for (let i = 0; i < Seatsre.length; i++) {
            if (i == Seatsre.length - 1) {
              seatstextre = seatstextre + Seatsre[i].seat_code;
            }
            else {
              seatstextre = seatstextre + Seatsre[i].seat_code + ',';
            }
          }
          se.listcars.TransferBooking.departTransfer.Seats = seatstextde;
          se.listcars.TransferBooking.returnTransfer.Seats = seatstextre;

           //thêm hạn thanh toán
           var expiredtimedep=moment(json[0].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
           var expiredtimeret=moment(json[1].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
           
           if(Number(expiredtimedep)==Number(expiredtimeret))
           {
             se.Roomif.expiredtime=json[0].data.reserve_Tickets.expired_time;
           }
           else if(Number(expiredtimedep)>Number(expiredtimeret))
           {
             se.Roomif.expiredtime=json[1].data.reserve_Tickets.expired_time;
           }
           else if(Number(expiredtimedep)<Number(expiredtimeret))
           {
             se.Roomif.expiredtime=json[0].data.reserve_Tickets.expired_time;
           }
          // se.listcars.TransferBooking.departTransfer.CancelPolicy = seatstextde;
          // se.listcars.TransferBooking.returnTransfer.CancelPolicy = seatstextre;
          var textfullname = se.hoten.split(' ')
          var FirstName;
          var LastName;
          if (textfullname.length > 2) {
            let name = '';
            for (let i = 1; i < textfullname.length; i++) {
              if (i == 1) {
                name += textfullname[i];
              } else {
                name += ' ' + textfullname[i];
              }
            }
            FirstName = textfullname[0];
            LastName = name;
          } else if (textfullname.length > 1) {
            FirstName = textfullname[0];
            LastName = textfullname[1];
          }
          else if (textfullname.length == 1) {
            FirstName = textfullname[0];
            LastName = "";
          }
          se.listcars.TransferBooking.passengerInfo.FirstName = FirstName;
          se.listcars.TransferBooking.passengerInfo.LastName = LastName;
          se.listcars.TransferBooking.passengerInfo.Email = se.email;
          se.listcars.TransferBooking.passengerInfo.MobileNumber = se.phone;
          se.listcars.HotelBooking.CPhone = se.phone;
          se.listcars.HotelBooking.CName = se.hoten;
          se.listcars.HotelBooking.LeadingName = se.hoten;
          se.listcars.HotelBooking.LeadingEmail = se.email;
          se.listcars.HotelBooking.LeadingPhone = se.phone;
          se.CreateCombo(paymentType);

        } else {
          se.loader.dismiss();
          alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
          se.navCtrl.navigateForward('/combocarnew');
        }
      }
      else {
        se.loader.dismiss();
        alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
        se.navCtrl.navigateForward('/combocarnew');
      }

    });
  }
  CreateCombo(paymentType) {
    this.timestamp = Date.now();
    var se = this;
    var form = this.listcars;
    var paymentMethod=se.gf.funcpaymentMethod(paymentType); 
    form.HotelBooking.PaymentMethod = paymentMethod;
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
      headers:
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form
    };
    request(options, function (error, response, body) {
      var obj = JSON.parse(body);
      se.bookingCode = obj.Code;
      se.CreateBuildLink(paymentType);
      // se.book = {
      //   code: obj.Code,
      //   timestamp: se.timestamp,
      //   cost: se.priceshow,
      //   paymentType: "0",
      //   DepartATCode: obj.TransferReserveCode.DepartReserveCode,
      //   ReturnATCode: obj.TransferReserveCode.ReturnReserveCode
      // }
      // var url = C.urls.baseUrl.urlPayment + "/Home/PaymentAppCombo?info=" + JSON.stringify(se.book);
      // se.openWebpage(url);
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
              // se.Roomif.promocode ="ttkkm45";
              if (se.Roomif.promocode && se.bookingCode) {
                // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
                se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
                // se.Roomif.promocode="";
               
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
  goback() {
    if((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode))
    {
      this.Roomif.bookingCode=this.bookingCode;
      this.navCtrl.navigateBack('/combocarnew');
    }else{
      this.navCtrl.back();
    }
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
      message: "Giao dịch đang xử lý, xin quý khách đợi trong giây lát!",
    });
    this.loader.present();
  }
  openRoomCancel() {
    this.gf.setParams(this.roomcancel, 'roomInfo')
    this.searchhotel.backPage = "roompaymentselect";
    this.navCtrl.navigateForward('/roomcancel');
  }
  loadTransferInfo() {
    var se = this;
    //bind thông tin chiều đi

    let de_date = this.departObject.route.departure_date;
    se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment(de_date).format('DD-MM-YYYY');
    se.departTimeStr = this.listcars.TransferBooking.departTransfer.DepartTime + ' → ' + this.listcars.TransferBooking.departTransfer.ArrivalTime;
    se.departVehicleStr = this.departObject.company.name;
    this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
    if (this.departTicketSaleshow <= 0) {
      this.checkdiscountdepart = true;
      this.departTicketSaleshow = Math.abs(this.departTicketSaleshow);
    }
    else {
      this.checkdiscountdepart = false;
    }
    this.departTicketSaleshow = this.departTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");


    //bind thông tin chiều về

    let re_date = this.returnObject.route.departure_date;
    se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment(re_date).format('DD-MM-YYYY');
    se.returnTimeStr = this.listcars.TransferBooking.returnTransfer.DepartTime + ' → ' + this.listcars.TransferBooking.returnTransfer.ArrivalTime;
    se.returnVehicleStr = this.returnObject.company.name;
    this.returnTicketSaleshow = this.returnObject.route.schedules[0].fare.price - this.returnTicketSale;
    if (this.returnTicketSaleshow <= 0) {
      this.checkdiscountreturn = true;
      this.returnTicketSaleshow = Math.abs(this.returnTicketSaleshow);
    }
    else {
      this.checkdiscountreturn = false;
    }
    this.returnTicketSaleshow = this.returnTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");

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
  CreateBuildLink(paymentType) {
    var se = this;
    se.gf.CheckPaymentDate(this.bookingCode).then(data => {
      data=JSON.parse(data);
      var url="";
      var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
      var timestamp=new Date();
      //var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
      var paymentTime=moment(timestamp).format('YYYYMMDDHHmmss');
      var paymentDate=moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
      if (paymentTime < paymentDate) {
        if (paymentType == 'visa') {
          //url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType='+paymentType+'&source=app&amount=' + totalPrice + '&orderCode=' + databook.code + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankappNew';
          url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken='+se.isremember+'&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
        }
        else {
          url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&memberId=' + se.jti + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
        }
        this.gf.CreateUrl(url).then(dataBuildLink => {
          dataBuildLink = JSON.parse(dataBuildLink);
          if (dataBuildLink.success) {
            if (paymentType == 'visa') {
              if (this.loader) {
                this.loader.dismiss();
              }
              se.openWebpage(dataBuildLink.returnUrl);
            }
            else if (paymentType == 'payoo_store') {
              this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
              this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
              if (this.loader) {
                this.loader.dismiss();
              }
              this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/0');
            }
            else if (paymentType == 'payoo_qr') {
              if (dataBuildLink.success) {
                this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                if (this.loader) {
                  this.loader.dismiss();
                }
                this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/1');
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
        if (paymentType == 'payoo_store') {
          url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&memberId=' + se.jti + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
          this.gf.CreateUrl(url).then(dataBuildLink => {
            if (this.loader) {
              this.loader.dismiss();
            }
            dataBuildLink = JSON.parse(dataBuildLink);
            this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
            this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/0');
          })

        } else {
          se.checkpayment = "RQ";
          if (this.loader) {
            this.loader.dismiss();
          }
          alert('Đã hết phòng, vui lòng chọn phòng khác hoặc chọn phương thức thanh toán khác');
          se.navCtrl.navigateBack('combocarnew');
        }
        //se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
      }
    }) 
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
          this.presentLoading();
          this.postapibook('visa');
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
  setinterval() {
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
  checkPayment() {
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlPost + '/mCheckBooking',
      qs: { code:  se.bookingCode },
      headers:
      {
      }
    };
    request(options, function (error, response, body) {
      if(response.statusCode != 200){
        var objError ={
            page: "roompaymentselect",
            func: "roompaymentatm-mCheckBooking",
            message : response.statusMessage,
            content : response.body,
            type: "warning",
            para:  JSON.stringify(options)
          };
        C.writeErrorLog(objError,response);
      }
      if (error) {
        error.page="roompaymentselect";
        error.func="roompaymentatm-mCheckBooking";
        error.param =  JSON.stringify(options);
        C.writeErrorLog(error,response);
      };
      if (body) {
        var rs = JSON.parse(body);
        if (rs.StatusBooking == 3) {
          var id = rs.BookingCode;
          var total = se.priceshow;
          se.Roomif.priceshowtt = se.priceshow;
          var ischeck = '0';
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          clearInterval(se.intervalID);
          if (se.loader) {
            se.loader.dismiss();
          }
          se.navCtrl.navigateForward('/combodoneprepay/' + id + '/' + total + '/' + ischeck)
        }
        //9: khách hủy giao dịch 2:thanh toán thất bại (bao gồm case hết hạn thanh toán)
        else if(rs.StatusBooking == 9||rs.StatusBooking == 2)
        {
          if (se.loader) {
            se.loader.dismiss();
          }
          clearInterval(se.intervalID);
          if (se.safariViewController) {
            se.safariViewController.hide();
          }
          if (se.Roomif.point && se.bookingCode) {
            se.showInfo("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
            
           
          }
          // se.Roomif.promocode ="ttkkm45";
          if (se.Roomif.promocode && se.bookingCode) {
            // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
            se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
            // se.Roomif.promocode="";
           
          }
        }
      }
      else {
        error.page = "combopayment";
        error.func = "combopayment-mCheckBooking";
        error.param = JSON.stringify(options);
        C.writeErrorLog(error, response);
        se.loader.dismiss();
        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
      }
    });
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
  //thêm các phương thức thanh toán
  roompaymentpayoolive() {
    this.presentLoading();
    this.postapibook('payoo_store');
  }
  roompaymentpayooqr() {
    this.presentLoading();
    this.postapibook('payoo_qr');
  }
  roompaymentmomo() {
    this.presentLoading();
    this.postapibook('momo');
  }
  next() {
    this.presentLoading();
    this.postapibook('visa');
  }
  rememberCard(){
    this.isremember=!this.isremember
  }

  paymentbiztravel(){
    if(this.bizTravelService.bizAccount.balanceAvaiable - this.bookCombo.totalprice <=0){
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
        var params = {memberid: this.jti, totalprice: this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') };
        this.gf.checkAcceptBizCredit('POST', C.urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
          if(data && data.error == 0){
            this.bizTravelService.phoneOtp = data.phoneOtp;
            this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
            this.bizTravelService.paymentType = 3;
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
      se.gf.showLoading();
      se.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
          data = JSON.parse(data);
          var timestamp = new Date();
          var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
          var paymentTime = moment(temptime).format('YYYYMMDDHHmmss');
          var paymentDate = moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
          if (paymentTime < paymentDate) {
            se.buildLinkPayment().then((checkvalid) => {
              if(checkvalid){
                se.bizTravelService.routeBackWhenCancel = 'combocarnew';
                se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                se.navCtrl.navigateForward('confirmpayment');
              }
            })
          }else{
            se.checkpayment = "RQ";
            se.gf.hideLoading();
            alert('Đã hết phòng, vui lòng chọn phòng khác hoặc chọn phương thức thanh toán khác');
            se.navCtrl.navigateBack('combocarnew');
          }
        })
  }

  buildLinkPayment(): Promise<any>{
    let se = this;
    return new Promise((resolve, reject) => {
    let url;
    var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
      url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti +'&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
          this.navCtrl.navigateForward('/combocarnew');
        }
      }
      ]
    });
    alert.present();
  }
  
}


