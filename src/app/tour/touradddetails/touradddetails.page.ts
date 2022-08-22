import { Bookcombo, SearchHotel } from './../../providers/book-service';

import { Booking } from '../../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, Platform, AlertController } from '@ionic/angular';
import { RoomInfo } from '../../providers/book-service';
import { C } from '../../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { GlobalFunction, ActivityService } from '../../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { tourService } from 'src/app/providers/tourService';
import * as moment from 'moment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as $ from 'jquery';
/**
 * Generated class for the RoomadddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-touradddetails.page',
  templateUrl: 'touradddetails.page.html',
  styleUrls: ['touradddetails.page.scss'],
})
export class TourAddDetailsPage implements OnInit {

  hoten;phone = ""; note; arr; roomnumber; room; ischeck: boolean; ishide;
  companyname; address; tax; addressorder; bed; bedchuoi; priceshow; ischeckpoint; ischeckbtn
  timestamp; paymentMethod; jsonroom; ischeckpayment;public loader:any
  _email: any;
  validemail: boolean= true;
  auth_token: any='';
  installmentPriceStr: any;
  showInstallmentButton: boolean = false;
  ishideNameMail=true;hotenhddt;emailhddt;

  inputtext: boolean = false;
  listPaxSuggestByMemberId= [];
  listpaxhint: any = [];
  hidepaxhint: boolean = false;
  currentSelectPax: any;
  jti: any;
  memberid: any='';
  ngOnInit() {
  }
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone,
    private toastCtrl: ToastController, public Roomif: RoomInfo, public storage: Storage, public loadingCtrl: LoadingController,
    public booking: Booking, public gf: GlobalFunction,public bookCombo:Bookcombo, public httpClient: HttpClient,
    private alertCtrl: AlertController,
    public activityService: ActivityService,
    public searchhotel: SearchHotel,
    public tourService: tourService) {
    this.ischeckpayment = Roomif.ischeckpayment;
    this.storage.get('jti').then((memberid) => {
      this.memberid = memberid;
    })
    this.storage.get('infocus').then(infocus => {
      if (infocus) {
        if (infocus.ho&&infocus.ten) {
          this.hoten = infocus.ho+' '+infocus.ten;
        } else {
          if (infocus.ho) {
            this.hoten=infocus.ho;
          }
          else if (infocus.ten) {
            this.hoten=infocus.ten;
          }
        }
        this.phone = infocus.phone;
      }
    })
   
    this.note = Roomif.notetotal;
    this.room = this.Roomif.arrroom;
    this.jsonroom = Roomif.jsonroom;
    this.ischeckpoint = this.Roomif.ischeckpoint;
    if (this.ischeckpoint == true) {
      if (this.Roomif.priceshow == "0") {
        this.priceshow = this.Roomif.priceshow;
      }
      else {
        this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
      }

    }
    else {
      this.ischeckbtn = true;
      if (this.Roomif.promocode) {
        if (this.Roomif.priceshow == "0") {
          this.priceshow = this.Roomif.priceshow;
          this.ischeckbtn = false;
        }
        else {
          this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
        }
      }
    }
    if (Roomif.ischeck) {
      this.ischeck = Roomif.ischeck;
    }
    //var roomtype:any = this.Roomif.roomtype;
    var priceBooking:any = "";
    if(this.Roomif.priceshow){
      priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
    }else if(this.booking.cost){
      priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
    }
   
    this.GetUserInfo();

    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile+'/api/Dashboard/GetListNameHotel?memberid='+jti, {},{}, 'flightadddetails', 'GetListNameHotel').then((data)=>{
          if(data && data.length >0){
            this.listPaxSuggestByMemberId = [...data];
          }
        })
      }
    })
  }
  GetUserInfo() {
    var se = this;
    se.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
      if (auth_token) {
        var text = "Bearer " + auth_token;
        var options = {
          method: 'GET',
          url: C.urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'cache-control': 'no-cache',
            'content-type': 'application/json',
            authorization: text
          }
        };
        request(options, function (error, response, body) {
          if (error) {
            error.page = "roomdetailreview";
            error.func = "GetUserInfo";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
          } else {
            if (body) {
              var data = JSON.parse(body);
              se.zone.run(() => {
                se.ishide = false;
                se.ischeck = false;
                var corpInfomations=data.corpInfomations[0];
                if(corpInfomations){
                  se.companyname = corpInfomations.legalName;
                  se.address = corpInfomations.address;
                  se.tax = corpInfomations.taxCode;
                  // se.addressorder = corpInfomations.addressorder;
                  // se.hotenhddt=corpInfomations.hotenhddt;
                  // se.emailhddt=corpInfomations.emailhddt;
                  // se.ishideNameMail=corpInfomations.ishideNameMail;
                  se.ishide = true;
                  se.ischeck = true;
                }
                else{
                  se.storage.get('order').then(order => {
                    if (order) {
                      se.companyname = order.companyname;
                      se.address = order.address;
                      se.tax = order.tax;
                      se.addressorder = order.addressorder;
                      se.hotenhddt=order.hotenhddt;
                      se.emailhddt=order.emailhddt;
                      se.ishideNameMail=order.ishideNameMail;
                      se.ishide = true;
                      se.ischeck = true;
                    }
                  })
                }
              })
            }else{
              se.storage.get('order').then(order => {
                if (order) {
                  se.companyname = order.companyname;
                  se.address = order.address;
                  se.tax = order.tax;
                  se.addressorder = order.addressorder;
                  se.hotenhddt=order.hotenhddt;
                  se.emailhddt=order.emailhddt;
                  se.ishideNameMail=order.ishideNameMail;
                  se.ishide = true;
                  se.ischeck = true;
                }else {
                  se.ishide = false;
                  se.ischeck = false;
                }
              })
            }

          }
        });
      }
    })
  }
  ionViewWillEnter(){
    this.storage.get('email').then(email => {
      if(email){
        this._email = email;
      }else{
        this.validemail = false;
      }
      
    })
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
  }
  next() {
    this.Roomif.notetotal = "";
    this.gf.googleAnalytion('touradddetails', 'tour_payment_info', '');
    if (this.hoten) {
      this.hoten = this.hoten.trim();
      var checktext=this.hasWhiteSpace(this.hoten);
      if (!checktext) {
        this.presentToastHo();
        return;
      }
    }
    else {
      this.presentToastHo();
      return;
    }
    
  
    //this.clearClonePage('page-roompaymentselect');
    this.Roomif.order = "";
    
      if (this.phonenumber(this.phone)) {
        //validate mail
        if(!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        this.booking.CEmail = this._email;
      
        let objTourReq:any = {};
        objTourReq.TourId = this.tourService.tourDetailId;
        objTourReq.StartDate =  moment(this.tourService.DepartureDate).format('YYYY-MM-DD');
        objTourReq.AdultNo = this.searchhotel.adult;
        objTourReq.ChildNo = this.searchhotel.child ? this.searchhotel.child :0;
        //objTourReq.ChildAges = this.searchhotel.child ? this.searchhotel.arrchild.join(',') : "";
        objTourReq.NightNo = this.tourService.itemDetail.NightNo;
        objTourReq.PaymentStatus = -1;
        

        if (this.ischeck) {
          if (this.companyname && this.address && this.tax) {
            this.companyname = this.companyname.trim();
            this.address = this.address.trim();
            this.tax = this.tax.trim();
          }
          else {
            this.presentToastOrder();
            return;
          }

          if (this.companyname && this.address && this.tax) {
            this.Roomif.hoten = this.hoten;
            this.Roomif.phone = this.phone;
            this.Roomif.companyname = this.companyname;
            this.Roomif.address = this.address;
            this.Roomif.tax = this.tax;
            this.Roomif.notetotal = this.note;
            this.Roomif.addressorder = this._email;
            this.Roomif.nameOrder = this.hoten;
  
            objTourReq.CustomerEmail = this._email;
            objTourReq.CustomerName = this.hoten;
            objTourReq.CustomerPhone = this.phone;
            objTourReq.CustomerTitle = "";
            objTourReq.BillingAddress = this.addressorder;
            objTourReq.CompanyAddress = this.address;
            objTourReq.CompanyTaxCode = this.tax;
            objTourReq.CompanyName = this.companyname;
            objTourReq.CooperatorEmail = "";
            objTourReq.CooperatorName = "";
            objTourReq.CooperatorPhone = "";
            objTourReq.IsInvoice = 1;
  
            if (!this.ishideNameMail ) {
              if (this.emailhddt && this.hotenhddt) {
                if(!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)){
                  this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                  return;
                }
                else{
                  this.Roomif.addressorder = this.emailhddt;
                  this.Roomif.nameOrder = this.hotenhddt;

                  var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder,ishideNameMail: this.ishideNameMail,hotenhddt:this.hotenhddt,emailhddt:this.emailhddt }
                  this.storage.set("order", order1);
                  this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                  this.Roomif.notetotal = this.note;
                  this.Roomif.ischeck = this.ischeck;
                  
                  this.tourService.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                  this.tourService.notetotal = this.note;
                  this.tourService.ischeck = this.ischeck;
                }
              }
              else{
                this.presentToastOrder();
                return;
              }
            } 
            
          } else {
            this.presentToastOrder();
          }
        } else{
            objTourReq.CustomerTitle = "";
            objTourReq.BillingAddress = "";
            objTourReq.CompanyAddress = "";
            objTourReq.CompanyTaxCode = "";
            objTourReq.CompanyName = "";
            objTourReq.CooperatorEmail = "";
            objTourReq.CooperatorName = "";
            objTourReq.CooperatorPhone = "";
            objTourReq.IsInvoice = 0;
        }

            objTourReq.CustomerEmail = this._email;
            objTourReq.CustomerName = this.hoten;
            objTourReq.CustomerPhone = this.phone;
            objTourReq.AdultNo = this.searchhotel.adult;
            objTourReq.ChildNo = this.searchhotel.child;
            if(this.searchhotel.arrchild && this.searchhotel.arrchild.length >0){
              let arrChildAges = this.searchhotel.arrchild.map((a) => a.numage);
              objTourReq.ChildAges = arrChildAges.join(',');
            }else{
              objTourReq.ChildAges ='';
            }
            
            objTourReq.LeadingTitle = "";
            objTourReq.LeadingName = this.hoten;
            objTourReq.LeadingPhone = this.phone;
            objTourReq.LeadingEmail = this._email;
            objTourReq.BookingChanel = 'Olivia_App';
            objTourReq.BookingType = 'TOUR';
            objTourReq.CancelRules = this.tourService.itemDetail.CancelRules;
            objTourReq.CancelRulesChange = this.tourService.itemDetail.CancelRules;
            objTourReq.Destinations = this.tourService.itemDetail.Destination;
            objTourReq.IncludePrice = this.tourService.itemDetail.IncludePrice;
            objTourReq.NoIncludePrice = this.tourService.itemDetail.NoIncludePrice;
            objTourReq.InternalNote = this.tourService.itemDetail.CancelRules;
            objTourReq.IsInLand = this.tourService.itemDetail.Inbound ? 1 :0 ;
            objTourReq.TourNotes = this.note;
            objTourReq.InternalNote = "";
            objTourReq.PaxList = "";
            objTourReq.MemberId = this.memberid;
            objTourReq.UsePointPrice = 0;
            objTourReq.Source = 8;
            objTourReq.SupplierCode = "Internal";
            objTourReq.SupplierOrderID = "";
            objTourReq.RequestBookingXml = "";
            objTourReq.BookingType = "Tour";
            objTourReq.IsNonRefundable = false;
            objTourReq.DiscountCode = "";
            objTourReq.Discount = 0;
            objTourReq.Username = "itsupport";
            
            this.tourService.TourBooking = objTourReq;
            console.log(objTourReq.childAges);
            this.checkTourAllotment().then((data)=>{
              if(data.Status != 'Error' && data.Status != 'False'){
                this.tourService.dataBookResponse = data.Response;
                this.navCtrl.navigateForward('/tourpaymentselect');
              }else{
                this.gf.showAlertMessageOnly(data.Msg);
              }
            })
        

      } else {
        this.presentToastPhone();
      }
  }
  next1() {
    this.Roomif.notetotal = "";
    if (this.hoten) {
      this.hoten = this.hoten.trim();
      var checktext=this.hasWhiteSpace(this.hoten);
      if (!checktext) {
        this.presentToastHo();
        return;
      }
    }
    else {
      this.presentToastHo();
      return;
    }
    this.Roomif.order = "";
    //this.clearClonePage('page-roompaymentdoneean');
    if (this.ischeck) {
      if (this.phonenumber(this.phone)) {
        if (this.companyname && this.address && this.tax) {
          this.companyname = this.companyname.trim();
          this.address = this.address.trim();
          this.tax = this.tax.trim();
        }
        else {
          this.presentToastOrder();
          return;
        }
        if (this.companyname && this.address && this.tax) {
          this.Roomif.hoten = this.hoten;
          this.Roomif.phone = this.phone;
          this.Roomif.companyname = this.companyname;
          this.Roomif.address = this.address;
          this.Roomif.tax = this.tax;
          this.Roomif.notetotal = this.note;
          this.Roomif.addressorder = this.addressorder;
          this.Roomif.nameOrder = this.hoten;

          if (!this.ishideNameMail ) {
            if (this.emailhddt && this.hotenhddt) {
              if(!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)){
                this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                return;
              }
              else{
                this.Roomif.addressorder = this.emailhddt;
                this.Roomif.nameOrder = this.hotenhddt;
              }
            }
            else{
              this.presentToastOrder();
              return;
            }
          }
          var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder,ishideNameMail: this.ishideNameMail,hotenhddt:this.hotenhddt,emailhddt:this.emailhddt }
          this.storage.set("order", order1);
          this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder
          this.Roomif.notetotal = this.note;
          this.Roomif.ischeck = this.ischeck;
          //this.pushdata();
        } else {
          this.presentToastOrder();
        }

      } else {
        this.presentToastPhone();
      }
    } else {
      if (this.phonenumber(this.phone)) {
        // var info = { ho: this.ho, ten: this.ten, phone: this.phone }
        // this.storage.set("infocus", info);
        this.Roomif.hoten = this.hoten;
        this.Roomif.phone = this.phone;
        this.Roomif.notetotal = this.note;
        this.Roomif.ischeck = this.ischeck;
        //this.clearClonePage('page-roompaymentdoneean');
       
        this.Roomif.notetotal = this.note;
        //console.log(this.Roomif.notetotal);
        //this.pushdata();

      } else {
        this.presentToastPhone();
      }
    }
  }
  async presentToasterror() {
    let toast = await this.toastCtrl.create({
      message: "Số điểm không đủ để tạo booking",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  async presentToastHo() {
    let toast = await this.toastCtrl.create({
      message: "Xin vui lòng nhập họ tên",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  async presentToastTen() {
    let toast = await this.toastCtrl.create({
      message: "Xin vui lòng nhập tên",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  async presentToastPhone() {
    let toast = await this.toastCtrl.create({
      message: "Số điện thoại không hợp lệ. Xin vui lòng nhập lại.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  async presentToastOrder() {
    let toast = await this.toastCtrl.create({
      message: "Xin vui lòng nhập thông tin xuất hóa đơn",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  edit(co) {
    this.zone.run(() => {
      if (co == 0) {
        if (this.ischeck) {
          this.ishide = false;
        } else {
          this.ishide = true;
        }
      }
      else {
        this.ishide = false;
        this.ischeck = true;
      }
    })

  }
  ionViewDidLoad() {
    // this.navBar.backButtonClick = (e: UIEvent) => {
    //   // todo something
    //   //this.clearClonePage('page-roomdetailreview');
    //   //this.navCtrl.push("RoomdetailreviewPage");
    //   this.navCtrl.pop();
    // }
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
  async presentLoading() {
    this.loader = await this.loadingCtrl.create({
    });
    this.loader.present();
  }

  phonenumber(inputtxt) {
    var n = Number(inputtxt);
    if (n) {
      var test1 = inputtxt.length;
      if (inputtxt) {
        if (test1 == 10) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }
  goback() {
    this.navCtrl.navigateBack('tourdeparturecalendar');
  }
  paymentnotAL() {
    this.presentLoading();
    var se = this;
    // var arrMealTypeRates = [];
    // var room1 = [];
    // arrMealTypeRates.push(this.room[0].MealTypeRates[this.booking.indexmealtype]);
    // var itemroom1 = {
    //   Penalty_Type: this.room[0].Rooms[0].Penalty_Type, RoomID: this.room[0].Rooms[0].RoomID, RoomPriceBreak: this.room[0].Rooms[0].RoomPriceBreak,
    //   SupplierRef: this.room[0].Rooms[0].SupplierRef, SalesTax: this.room[0].Rooms[0].SalesTax
    // }
    // room1.push(itemroom1);
    // this.jsonroom.RoomClasses = this.room;
    // this.jsonroom.RoomClasses[0].MealTypeRates = arrMealTypeRates;
    // this.jsonroom.RoomClasses[0].Rooms = room1;
    // this.jsonroom.RoomClassesHidden = [];
    // this.booking.Hotels = this.jsonroom
    se.jsonroom.RoomClasses = se.room;
    se.timestamp = Date.now();
    if(se._email){
      se.booking.CEmail = se._email;
    }
    //29/11/2019: Cho phép book không cần đăng nhập => bỏ validate auth_token, chỉ cần email
    //se.storage.get('auth_token').then(auth_token => {
      if (se.booking.CEmail) {
        var Invoice = 0;
        if (se.Roomif.order) {
          Invoice = 1;
        }
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
            RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
            CName: se.Roomif.hoten,
            CEmail: se._email,
            CPhone: se.Roomif.phone,
            timestamp: se.timestamp,
            HotelID: se.booking.HotelId,
            paymentMethod: "51",
            note: se.Roomif.notetotal,
            source: '8',
            MemberToken: se.auth_token,
            CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
            UsePointPrice: se.Roomif.pricepoint,
            NoteCorp: se.Roomif.order,
            Invoice: Invoice,
            UserPoints: se.Roomif.point,
            CheckInDate: se.jsonroom.CheckInDate,
            CheckOutDate: se.jsonroom.CheckOutDate,
            TotalNight: se.jsonroom.TotalNight,
            MealTypeIndex: se.booking.indexmealtype,
            CompanyName: se.Roomif.companyname,
            CompanyAddress: se.Roomif.address,
            CompanyTaxCode: se.Roomif.tax,
            BillingAddress: se.Roomif.addressorder,
            promotionCode:se.Roomif.promocode,
            comboid:se.bookCombo.ComboId,
            PenaltyDescription:se.Roomif.textcancel,
            companycontactname: se.Roomif.nameOrder
          },
          json: true
        };
        request(options, function (error, response, body) {
          if (response.statusCode != 200) {
            var objError = {
              page: "roomadddetails",
              func: "next",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roomadddetails";
            error.func = "next";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          };
          if(body)
          {
            if (body.error == 0) {
              // console.log(body.code);
              var code = body.code;
              var stt = body.bookingStatus;
              var priceBooking:any = "";
              
              if(se.Roomif.priceshow){
                priceBooking = se.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
              }else if(se.booking.cost){
                priceBooking = se.booking.cost.replace(/\./g, '').replace(/\,/g, '');
              }
              if(priceBooking){
                let url  = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + priceBooking + '&orderCode=' + body.code + '&buyerPhone=' + se.Roomif.phone+ '&memberId=' + se.jti;
                se.gf.CreateUrl(url);
              }
              
              se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + se.Roomif.payment);
              se.loader.dismiss();
              //se.gf.googleAnalytion('paymentdirect', 'Purchases', 'hotelid:' + se.booking.cost + '/cin:' + se.jsonroom.CheckInDate + '/cout:' + se.jsonroom.CheckOutDate + '/adults:' + se.booking.Adults + '/child:' + se.booking.Child + '/price:' + se.booking.cost)
            }
            else {
              se.loader.dismiss();
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
                      se.showAlertMessageOnly(body.Msg);
                    }
                  })
                }else{
                  se.showAlertMessageOnly(body.Msg);
                }
                
              })
            }
          }
          else{
            error.page = "roomadddetails";
            error.func = "paymentnotAL";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
            se.loader.dismiss();
            se.gf.showAlertMessageOnly("Đã có sự cố xảy ra, vui lòng thử lại!");
          }
         
        });

      }
    //})

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
  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async presentToastEmail() {
    let toast = await this.toastCtrl.create({
      message: "Thông tin email không hợp lệ. Vui lòng nhập lại.",
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
  } 

  getInstallment(price){
    var se = this;
    var options = {
      method: 'GET',
      url: C.urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
      qs:
      {
        amount: price.toString()
      },
      headers:
        {}
    };
    
    request(options, function (error, response, body) {
      var rs = JSON.parse(body);
      se.activityService.objBankInStallment = rs;
    });
  }

  checkInput(){
    var se = this, res = true;
    if (se.hoten) {
      se.hoten = se.hoten.trim();
      var checktext=se.hasWhiteSpace(se.hoten);
      if (!checktext) {
        se.presentToastHo();
        res = false;
      }
      else if(!se.hoten) {
        se.presentToastHo();
        res = false;
      }
      //validate mail
      else if(!se.validateEmail(se._email) || !se._email){
        se.presentToastEmail();
        se.validemail = false;
        res = false;
      }
      else if(!se.phone || !se.phonenumber(se.phone)) {
        se.presentToastPhone();
        res = false;
      }
      else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
        se.presentToastOrder();
        res = false;
      }
    }
    else if(!se.hoten) {
      se.presentToastHo();
      res = false;
    }
    //validate mail
    else if(!se.validateEmail(se._email) || !se._email){
      se.presentToastEmail();
      se.validemail = false;
      res = false;
    }
    else if(!se.phone || !se.phonenumber(se.phone)) {
      se.presentToastPhone();
      res = false;
    }
    else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
      se.presentToastOrder();
      res = false;
    }

    if(res){
      if(se._email){
        se.booking.CEmail = se._email;
      }
      if(se.ischeck){
        if(se.companyname && se.address && se.tax){
          se.Roomif.hoten = se.hoten;
          se.Roomif.phone = se.phone;
          se.Roomif.companyname = se.companyname;
          se.Roomif.address = se.address;
          se.Roomif.tax = se.tax;
          se.Roomif.notetotal = se.note;
          se.Roomif.addressorder = se.addressorder;
          var order1 = { companyname: se.companyname, address: se.address, tax: se.tax, addressorder: se.addressorder }
          se.storage.set("order", order1);
          se.Roomif.order = se.companyname + "," + se.address + "," + se.tax + "," + se.addressorder
          se.Roomif.notetotal = se.note;
          se.Roomif.ischeck = se.ischeck;
        }
      }else{
        se.Roomif.hoten = se.hoten;
        se.Roomif.phone = se.phone;
        se.Roomif.notetotal = se.note;
        se.Roomif.ischeck = se.ischeck;
        se.Roomif.notetotal = se.note;
      }
    }
    

    return res;
  }
  
  installment(){
    var se = this;
    if(!se.checkInput()){
      return;
    }
    if(!se.activityService.objBankInStallment){
      se.presentToastWarning("Đang tính giá trả góp, xin quý khách vui lòng đợi trong giây lát!");
      return;
    }
    se.navCtrl.navigateForward('/installmentpayment');
  }

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  showNameMail(ev)
  {
    this.ishideNameMail=ev.detail.checked;
  }

  updateHintPaxName(value, listpaxhint){
    var se = this;
      let arraypax =[];
      se.listpaxhint = [];
        for (let index = 0; index < listpaxhint.length; index++) {
          const element = listpaxhint[index];
          if(element.fullName &&value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1 ){
            arraypax.push(element);
          }
          
        }
     
      se.listpaxhint = [...arraypax];
  }

  inputFocus(event){
    var se = this;
    se.zone.run(()=>{
      if(!se.inputtext){
        if(se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length >0){
          se.inputtext = true;
          se.createHintPaxName(null, se.listPaxSuggestByMemberId);
        }
      }else{
        se.inputtext = true;
        se.updateHintPaxName(event.target.value, se.listPaxSuggestByMemberId)
      }
    })
    
    
  }

  inputLostFocus(item){
    var se = this;
      setTimeout(()=>{
        se.zone.run(()=>{
          se.inputtext = false;

          if(se.hidepaxhint){
            item.hidePaxHint = true;
            se.hidepaxhint = false;
          }
        })
        
      }, 400)
    
  }

  async createHintPaxName(item, listpaxhint){
    var se = this;
    se.listpaxhint = [...listpaxhint];
  }

  selectPaxHint(paxhint){
    var se = this;
    se.zone.run(()=>{
      if(paxhint){
        if(se.currentSelectPax){
          se.currentSelectPax.hoten = paxhint.fullName ? paxhint.fullName :se.currentSelectPax.hoten;
          se.currentSelectPax.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.currentSelectPax.phone;
        }
        else{
          se.hoten = paxhint.fullName ? paxhint.fullName :se.hoten;
          se.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.phone;
        }
        
      }
    })
    
  }
  hidePaxHint(){
    this.hidepaxhint = true;
  }
  
  inputOnFocus(item, type){
            var se = this;
            
            //se.clearError(item, type);
            if(type == 9 && !se.hoten){

              if(se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length >0){
                se.inputtext = true;
                se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                
              }else{
                se.storage.get('listpaxcache').then((data)=>{
                      if(data){
                          se.inputtext = true;
                          se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                      }
                    })
              }
            }
          }
          book() {
            if(this.tourService.hasDeparture){
              this.navCtrl.navigateForward('/tourpaymentselect');
            }else{
              this.navCtrl.navigateForward('/tourpaymentdone');
            }
            
          }

          checkTourAllotment() : Promise<any>{
            var se = this;
            let body = { "TourId": se.tourService.tourDetailId,
            "StartDate": moment(se.tourService.DepartureDate).format('YYYY-MM-DD'),
            "AdultNo": se.searchhotel.adult,
            "ChildNo": se.searchhotel.child ? se.searchhotel.child :0,
            "ChildAges": se.searchhotel.child ? se.searchhotel.arrchild.map(c=>c.numage).join(',') : ""
            };
          
            return new Promise((resolve, reject) => {
              let urlApi = C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CheckAllotmentPreBooking';
              let headers = {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
              };
              se.gf.RequestApi('POST', C.urls.baseUrl.urlMobile+'/tour/api/TourApi/CheckAllotmentPreBooking', headers, body, 'touradddetails', 'CheckAllotmentPreBooking').then((data)=>{
                  resolve(data);
               })
            })
          }

          request(type){
            let se = this;
            //if(type ==3){
              se.gf.showLoading();
              let urlApi = C.urls.baseUrl.urlMobile+`/tour/api/TourApi/CreateRequestQuote?TourId=${se.tourService.tourDetailId}&date=${moment(se.tourService.DepartureDate).format('YYYY-MM-DD')}&adult=${se.searchhotel.adult}&child=${se.searchhotel.child || 0}&childAges=${se.searchhotel.child ? se.searchhotel.arrchild.map(c=>c.numage).join(',') : ""}&nightNo=${se.tourService.itemDetail.NightNo}&totalRate=${se.tourService.totalPrice}&act=book&paymentMethod=1&receiverAddress&customerName=${this.hoten}&customerphone=${this.phone}&customeremail=${this._email}&notes=${this.note}&qty=1`;
                  let headers = {
                    apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                    apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
                  };
                  se.gf.RequestApi('GET', urlApi, headers, {}, 'touradddetails', 'CreateRequestQuote').then((data)=>{
                     if(data && data.Status == 'Success'){
                      se.gf.hideLoading();
                      //se.gf.showToastWarning(`${type==3? 'Gửi yêu cầu tư vấn':'Gửi yêu cầu đặt'} thành công!`);
                      se.navCtrl.navigateForward('/tourrequestdone');
                     }else{
                      se.gf.hideLoading();
                      se.gf.showAlertMessageOnly(data.Msg);
                     }
                  })
            // }
            // else if(type==2){

            // }
          }
}

