import { Bookcombo } from './../providers/book-service';
import { Booking, RoomInfo, SearchHotel } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, Platform,AlertController } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction } from '../providers/globalfunction';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

@Component({
  selector: 'app-combochoosebank',
  templateUrl: './combochoosebank.page.html',
  styleUrls: ['./combochoosebank.page.scss'],
})
export class CombochoosebankPage implements OnInit {

  ischeck; timestamp; public ischeckbox; listcars; id; book; priceshow; ischecktext
  public loader: any; hoten; phone; totalAdult; email
  auth_token: any = ''; arrbankrmb = []; totalPrice = 0; bookingCode; isckb = false; TokenId; bankid = ""; jti;
  intervalID: NodeJS.Timeout;
  _inAppBrowser: any;
  isremember=true;isdisable=false;
  ischeckedDK=true;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public booking: Booking, 
    public Roomif: RoomInfo, public storage: Storage, public zone: NgZone, public searchhotel: SearchHotel,public alertCtrl: AlertController,
    public loadingCtrl: LoadingController, public platform: Platform, public gf: GlobalFunction, public bookCombo: Bookcombo,private safariViewController:SafariViewController) {
    this.searchhotel.rootPage = "combochoosebank";
    this.listcars = this.gf.getParams('carscombo');
    this.hoten = this.Roomif.hoten;
    this.phone = this.Roomif.phone
    this.totalAdult = bookCombo.totalAdult;
    this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    this.storage.get('email').then(e => {
      if (e !== null) {
        this.email = e;
      }
    })
    //google analytic
    //gf.googleAnalytion('roomchoosebank', 'load', '');
    this.gf.logEventFirebase('atm',this.searchhotel, 'combocarbank', 'add_payment_info', 'Combo');
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
  }
  postapibook(bankid) {
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
          dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
          pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
        },
        returnParams:
        {
          trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
          total_seats: this.bookCombo.totalseatsret,
          total_price: this.bookCombo.priceret,
          code: '',
          pickup_place: this.listcars.TransferBooking.returnTransfer.PickupPlaceName,
          dropoff_place: this.listcars.TransferBooking.returnTransfer.DropoffPlaceName
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
          se.listcars.HotelBooking.LeadingName = se.hoten;
          se.listcars.HotelBooking.LeadingEmail = se.email;
          se.listcars.HotelBooking.LeadingPhone = se.phone;
          se.CreateComboTransferBooking(bankid);

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
  CreateComboTransferBooking(bankid) {
    this.timestamp = Date.now();
    this.storage.get('auth_token').then(auth_token => {
      if (auth_token) {
        this.timestamp = Date.now();
        var se = this;
        var form = this.listcars;
        form.HotelBooking.PaymentMethod = "0"
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
          if (error) throw new Error(error);
          se.loader.dismiss();
          var obj = JSON.parse(body);
          se.book = {
            code: obj.Code,
            timestamp: se.timestamp,
            cost: se.priceshow,
            BanhkID: se.id,
            paymentType: "1",
            DepartATCode: obj.TransferReserveCode.DepartReserveCode,
            ReturnATCode: obj.TransferReserveCode.ReturnReserveCode
          }
          se.bookingCode=obj.Code;
          //05-07-2022 thêm đoạn sync crm
          var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
            headers:
              {},
            form:
            {
              BookingCode: obj.Code,
              DepartATCode: obj.TransferReserveCode.DepartReserveCode,
              ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
              FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
            }
          };
          request(options, function (error, response, body) {
            if (error) throw new Error(error);
            var json = JSON.parse(body);
            if (json.Error == 0) {
              se.CreateUrlOnePay(bankid);
            }
          });
          //se.Roomif.bookingCode=obj.Code;

          // var url = C.urls.baseUrl.urlPayment + "/Home/PaymentAppCombo?info=" + JSON.stringify(se.book);
          // se.openWebpage(url);

        })
      }
    })

  }
  async presentToast() {
    let toast = await this.toastCtrl.create({
      message: "Xin chọn 1 ngân hàng",
      duration: 3000,
      position: 'top'
    });
    toast.present();
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

  clickitem(id) {
    this.zone.run(() => {
      this.id = id;
      this.TokenId="";
      this.isdisable=false;
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
  goback() {
    if((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode))
    {
      this.Roomif.bookingCode=this.bookingCode;
      this.navCtrl.navigateBack('/combocarnew');
    }else{
      this.navCtrl.back();
    }
  }
  checkacc(item, ev) {
    var se = this;
    if (ev.target.checked) {
      se.arrbankrmb.forEach(element => {
        element.checked = false;
      });
      item.checked = true;
      this.isdisable=true;
      this.isremember=true;
      this.id = "";
    }
    else {
      item.checked = false;
      ev.target.checked = false;
      ev.target.classList.remove("radio-checked");
    }

  }
  CreateUrlOnePay(bankid) {
    var se = this;
    // var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + this.totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankappNew';
    se.gf.CheckPaymentDate(this.bookingCode).then(data => {
      data=JSON.parse(data);
      var timestamp=new Date();
      //var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
      var paymentTime=moment(timestamp).format('YYYYMMDDHHmmss');
      var paymentDate=moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
      if (paymentTime < paymentDate) {
        var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + this.TokenId + '&rememberToken='+se.isremember+'&callbackUrl=' + C.urls.baseUrl.urlPayment + '/Home/BlankDeepLink'
        this.gf.CreateUrl(url).then(datapayoo => {
          datapayoo = JSON.parse(datapayoo);
          se.openWebpage(datapayoo.returnUrl);
        })
      }
      else{
        if(se.loader){
          se.loader.dismiss();
        }
        alert('Đã hết phòng, vui lòng chọn phòng khác');
        se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
      }
    })
   
  }
  next() {
    this.TokenId = "";
    this.bankid = "";
    this.arrbankrmb.forEach(element => {
      if (element.checked) {
        this.TokenId = element.id;
        this.bankid = element.vpc_Card;
      }
    });

    // if (this.TokenId) {
    //   this.presentLoading();
    //   this.postapibook(this.bankid);
      
    // }
    // else {
    //   if (this.id) {
    //     this.presentLoading();
    //     this.postapibook(this.id);
    //   } else {
    //     this.presentToast();
    //   }
    // }
    let _id = "";

    if (this.TokenId) {
      _id = this.bankid;
    }
    else {
      if (this.id) {
        _id = this.id;
      } else {
        this.presentToast();
        return;
      }
    }

    if(this.bookCombo.mealTypeRates.Supplier == 'SERI' && this.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal){
      //Check allotment trước khi book
      this.gf.checkAllotmentSeri(
        this.booking.HotelId,
        this.bookCombo.mealTypeRates.RoomId,
        this.booking.CheckInDate,
        this.booking.CheckOutDate,
        this.bookCombo.mealTypeRates.TotalRoom,
        'SERI', this.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal
        ).then((allow)=> {
          if(allow){
            this.presentLoading();
            this.postapibook(_id);
          }else{
            
            this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
          }
        })
    }else{
      this.presentLoading();
      this.postapibook(_id);
    }
  }

  GeTokensOfMember() {
    var se = this;
    se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
      if (dataTokens) {
        dataTokens = JSON.parse(dataTokens);
        if (dataTokens.tokens.length > 0) {
          for (let i = 0; i < dataTokens.tokens.length; i++) {
            if (dataTokens.tokens[i].vpc_Card != 'VC' && dataTokens.tokens[i].vpc_Card != 'MC' && dataTokens.tokens[i].vpc_Card != 'JC' && dataTokens.tokens[i].vpc_Card != 'AE') {
              // this.TokenId = dataTokens.tokens[i].id;
              var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
              vpc_CardNum = vpc_CardNum[1];
              var name_Bank = this.getnameBank(dataTokens.tokens[i].vpc_Card);
              var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: name_Bank, checked: false, vpc_Card: dataTokens.tokens[i].vpc_Card };
              this.arrbankrmb.push(item);
            }
          }
          if (this.arrbankrmb.length > 0) {
            this.arrbankrmb[0].checked = true;
            this.isdisable=true;
            this.TokenId = this.arrbankrmb[0].id;
          }

          // item = { id: '999', imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[0].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank:name_Bank,checked:false};
          // this.arrbankrmb.push(item);
        }

      }
    })
  }
  getnameBank(text) {
    var cardStr = "";
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
  //check payment
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
rememberCard(){
  this.isremember=!this.isremember
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

