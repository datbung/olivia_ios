import { Booking, RoomInfo, SearchHotel,Bookcombo } from '../providers/book-service';
import { Component, NgZone, ViewChild, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController,Platform,AlertController } from '@ionic/angular';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';

import { GlobalFunction } from '../providers/globalfunction';
import * as moment from 'moment';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from './../providers/globalfunction';
/**
 * Generated class for the RoomchoosebankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-roomchoosebank',
  templateUrl: 'roomchoosebank.html',
  styleUrls: ['roomchoosebank.scss'],
})
export class RoomchoosebankPage implements OnInit{ 
  ischeck; timestamp; public ischeckbox;
  Avatar; Name; Address; cin; cout; dur; room; nameroom; jsonroom; ischecktext = true
  roomnumber; adults; children; breakfast; PriceAvgPlusTAStr; priceshow
  imgroom; roomtype; indexme; indexroom; cin1; cout1; checkpayment; book; id; pricetemp; hotelid
  public loader: any
  auth_token: any = '';arrbankrmb=[];totalPrice=0;bookingCode;isckb = false; TokenId;bankid="";jti;intervalID: NodeJS.Timeout;
  _inAppBrowser: any;  isremember=true;stt;isdisable=false;isshowRemember=false;
  constructor(public navCtrl: NavController, private toastCtrl: ToastController, public booking: Booking,  public alertCtrl: AlertController,
    public Roomif: RoomInfo, public storage: Storage, public zone: NgZone, public searchhotel: SearchHotel,
    public loadingCtrl: LoadingController, public platform: Platform, public gf: GlobalFunction,public bookCombo:Bookcombo,private safariViewController: SafariViewController,private activatedRoute: ActivatedRoute,public activityService: ActivityService) {
   
    //google analytic
    gf.googleAnalytion('roomchoosebank', 'load', '');
  }
  ngOnInit() {
    this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
    if (this.stt==0) {
      this.indexme = this.booking.indexmealtype;
      this.indexroom = this.booking.indexroom;
      this.jsonroom = this.Roomif.jsonroom;
      this.room = this.Roomif.arrroom;
      this.searchhotel.rootPage = "roomchoosebank";
      this.roomtype = this.Roomif.roomtype;
      this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
      if (this.Roomif.priceshow) {
        this.priceshow = this.Roomif.priceshow;
      }
      else {
        this.priceshow = this.PriceAvgPlusTAStr;
      }
    } else {
      this.Roomif.phone=this.activityService.objPaymentMytrip.trip.cus_phone;
      this.bookingCode=this.activityService.objPaymentMytrip.trip.booking_id;
      this.priceshow=this.activityService.objPaymentMytrip.trip.priceShow;
    }
    this.totalPrice=this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
  }
  ionViewWillEnter() {
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.isshowRemember=true;
        this.isremember=false;
        this.GeTokensOfMember();
      }
    })
  }
  next() {
    // var se=this;
    // se.Roomif.promocode ="ttkkm45";
    // if (se.Roomif.promocode ) {
    //   // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
    //   se.Roomif.bookingCode=se.bookingCode
    //   se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
    //   // se.Roomif.promocode="";
     
    // }
    this.TokenId="";
    this.bankid="";
    this.arrbankrmb.forEach(element => {
      if (element.checked) {
        this.TokenId=element.id;
        this.bankid=element.vpc_Card;
      }
    });
    this.checkBank();

  }
  checkBank(){
    if (this.TokenId) {
      this.presentLoading();
      if (this.bookingCode) {
        this.CreateUrlOnePay(this.bankid);
      } else {
        this.CreateBookingRoom(this.bankid);
      } 
    }
    else{
      if (this.id) {
        this.presentLoading();
        if (this.bookingCode) {
          this.CreateUrlOnePay(this.id);
        } else {
          this.CreateBookingRoom(this.id);
        } 
      } else {
        this.presentToast();
      }
    }
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
               
                se.Roomif.bookingCode=se.bookingCode;
                se.showInfo("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!")
                
               
              }
              // se.Roomif.promocode ="ttkkm45";
              if (se.Roomif.promocode && se.bookingCode) {
                // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
                se.Roomif.bookingCode=se.bookingCode
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
  ionViewDidLoad() {
    // this.navBar.backButtonClick = (e: UIEvent) => {
    //   // todo something
    //   //this.navCtrl.push("RoomadddetailsPage");
    //   if (this.book) {
    //     if (this.book.code) {
    //       this.clearClonePage('page-hoteldetail');
    //       clearInterval(this.Roomif.setInter);
    //       this.searchhotel.rootPage = "roompaymentselect";
    //       this.navCtrl.navigateForward("HoteldetailPage");
    //     }
    //     else {
    //       this.navCtrl.pop();
    //     }
    //   }
    //   else {
    //     this.navCtrl.pop();
    //   }

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
      this.Roomif.promocode="";
      this.navCtrl.navigateBack('/roomdetailreview');
    }else{
      this.navCtrl.back();
    }
  }
  async presentToastr(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
    toast.present();
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
      this.id="";
    }
    else{
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
      var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
      var paymentTime=moment(temptime).format('YYYYMMDDHHmmss');
      var paymentDate=moment(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
      if (paymentTime < paymentDate) {
        var url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + this.TokenId + '&rememberToken='+se.isremember+'&callbackUrl='+C.urls.baseUrl.urlPayment+'/Home/BlankDeepLink'
        this.gf.CreateUrl(url).then(datapayoo => {
          if (datapayoo) {
            datapayoo = JSON.parse(datapayoo);
            if( se.loader){
              se.loader.dismiss();
            }
            se.openWebpage(datapayoo.returnUrl);
          } else {
            if(se.loader){
              se.loader.dismiss();
            }
          }
        
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
  //Tạo booking phòng
  CreateBookingRoom(bankid): Promise<any>{
    var Invoice = 0;
    var se=this;
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
          paymentMethod: "0",
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
          comboid: this.bookCombo.ComboId,
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
        if (body.error==0) {
          se.bookingCode = body.code;
          se.Roomif.bookingCode = body.code;
          if (se.roomtype.Supplier == 'EAN') {
            se.gf.checkroomEAN(se.bookingCode).then(data => {
              if (data == '0') {
                se.CreateUrlOnePay(bankid);
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
          else{
            se.CreateUrlOnePay(bankid);
          }
        }
        else{
          if(se.loader){
            se.loader.dismiss();
          }
          alert(body.Msg);
          if(se.Roomif.point &&  se.Roomif.bookingCode)
          {
            se.navCtrl.navigateBack('/roomdetailreview');
          }
          if(se.Roomif.promocode &&  se.Roomif.bookingCode)
          {
            se.navCtrl.navigateBack('/roomdetailreview');
          }
        }
      });
    });
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
          // var id = { BookingCode: rs.BookingCode, total: se.pricetemp,ischeck:'0' };
          var id = rs.BookingCode;
          var total = se.priceshow;
          se.Roomif.priceshowtt = se.priceshow;
          var ischeck = '0'
          se.clearClonePage('page-roompaymentdone');
          se.safariViewController.hide();
          clearInterval(se.intervalID);
          se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
          // clearInterval(se.Roomif.setInter);

        }
        else if(rs.StatusBooking == 9||rs.StatusBooking == 2)
        {
          clearInterval(se.intervalID);
          se.safariViewController.hide();
          if (se.Roomif.point && se.bookingCode) {
            // se.navCtrl.navigateForward('/roomdetailreview');
            // alert("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
            se.showInfo("Điểm tích luỹ "+se.Roomif.point+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
          }
          if (se.Roomif.promocode && se.bookingCode) {
            // se.navCtrl.navigateForward('/roomdetailreview');
            // alert("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
            se.showInfo("Mã giảm giá "+se.Roomif.promocode+" đã được dùng cho booking "+se.bookingCode+".Xin vui lòng thao tác lại booking!");
            
          }
        }
      
        // else {
        //   se.searchhotel.backPage = "roompaymentselect";
        //   alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng quay lại trang Thông tin Khách Sạn!");
        //   //se.router.navigateByUrl('/hoteldetail/'+se.booking.HotelId);
        //   se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);

        //   // se.refreshToken();

        // }
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
          this.navCtrl.navigateForward('/roomdetailreview');
        }
      }
      ]
    });
    alert.present();
  }
}