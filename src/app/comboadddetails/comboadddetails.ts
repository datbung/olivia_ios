import { json } from 'body-parser';
import { Bookcombo, SearchHotel } from './../providers/book-service';

import { Booking } from '../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, Platform,AlertController, ModalController } from '@ionic/angular';
import { RoomInfo } from '../providers/book-service';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { GlobalFunction } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { ConfirmemailPage } from '../confirmemail/confirmemail.page';
import { OverlayEventDetail } from '@ionic/core';
import { Facebook } from '@ionic-native/facebook/ngx';
import { BizTravelService } from '../providers/bizTravelService';

/**
 * Generated class for the RoomadddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-comboadddetails',
  templateUrl: 'comboadddetails.html',
  styleUrls: ['comboadddetails.scss'],
})
export class ComboadddetailsPage implements OnInit {
  hoten; phone = ""; note; arr; roomnumber; room; ischeck: boolean; ishide;
  companyname; address; tax; addressorder; bed; bedchuoi; priceshow; ischeckpoint; ischeckbtn
  timestamp; paymentMethod; jsonroom; ischeckpayment; public loader: any; listcars; email; totalAdult
  _email: any;
  validemail = true;
  checkchangeemail=false;
  ishideNameMail=true;hotenhddt;emailhddt;

  inputtext: boolean = false;
  listPaxSuggestByMemberId= [];
  listpaxhint: any = [];
  hidepaxhint: boolean = false;
  currentSelectPax: any;
  jti: any;
  ngOnInit() {
  }
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone,
    private toastCtrl: ToastController, public Roomif: RoomInfo, public storage: Storage, public loadingCtrl: LoadingController,
    public booking: Booking, public gf: GlobalFunction, public Bookcombo: Bookcombo,public alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private fb: Facebook,
    public searchhotel: SearchHotel,
    public bizTravelService: BizTravelService) {
    this.ischeckpayment = Roomif.ischeckpayment;
    this.totalAdult = Bookcombo.totalAdult;
    this.listcars = this.gf.getParams('carscombo');
    this.storage.get('email').then(email => {
      if(email){
        this.email = email;
        // this._email = 'abc@vivumember.info';
        var checkappleemail=(this.email.includes("appleid") || this.email.includes('vivumember.info'));
        if (checkappleemail) {
          this.validemail = false;
        }
      }else{
        this.validemail = false;
      }
    })
    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
      }
    })
    this.storage.get('infocus').then(infocus => {
      if (infocus) {
        if (infocus.ho && infocus.ten) {
          this.hoten = infocus.ho + ' ' + infocus.ten;
        } else {
          if (infocus.ho) {
            this.hoten = infocus.ho;
          }
          else if (infocus.ten) {
            this.hoten = infocus.ten;
          }
        }
        this.phone = infocus.phone;
      }
    })
    // this.storage.get('order').then(order => {
    //   if (order) {
    //     this.companyname = order.companyname;
    //     this.address = order.address;
    //     this.tax = order.tax;
    //     this.addressorder = order.addressorder;
    //     this.hotenhddt=order.hotenhddt;
    //     this.emailhddt=order.emailhddt;
    //     this.ishideNameMail=order.ishideNameMail;
    //     this.ishide = true;
    //     this.ischeck = true;
    //   } else {
    //     this.ishide = false;
    //     this.ischeck = false;
    //   }
    // })
    this.storage.get('email').then(email => {
      if(email){
        this._email = email;
        var checkappleemail=this._email.includes("appleid");
        if (checkappleemail) {
          this.validemail = false;
        }
      }else{
        this.validemail = false;
      }
    })
    this.note = Roomif.notetotal;
    this.room = this.Roomif.arrroom;
    this.jsonroom = Roomif.jsonroom;
    this.ischeckpoint = this.Roomif.ischeckpoint;
    if (this.ischeckpoint == true) {
      if (this.listcars.HotelBooking.TotalPrices == "0") {
        this.priceshow = 0;
      }
      else {
        this.priceshow = 1;
      }

    }
    else {
      this.ischeckbtn = true;
      if (this.Roomif.promocode) {
        if (this.listcars.HotelBooking.TotalPrices == "0") {
          this.priceshow = 0;
          this.ischeckbtn = false;
        }
        else {
          this.priceshow = 1;
        }
      }
      else {
        this.priceshow = 1;
      }
    }
    if (Roomif.ischeck) {
      this.ischeck = Roomif.ischeck;
    }
    this.GetUserInfo();
    //facebook analytic
    let se = this;
    se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_INITIATED_CHECKOUT, {'fb_content_type': 'hotel'  ,'fb_content_id': se.Bookcombo.HotelCode ? se.Bookcombo.HotelCode : se.booking.code,'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.listcars.HotelBooking.TotalPrices) ,  'fb_currency': 'VND' , 
    'checkin_date': se.listcars.HotelBooking.CheckInDate ,'checkout_date ': se.listcars.HotelBooking.CheckOutDate,'num_adults': se.listcars.HotelBooking.Adult,'num_children': (se.listcars.HotelBooking.Child ? se.listcars.HotelBooking.Child : 0), 'value': se.gf.convertNumberToDouble(se.listcars.HotelBooking.TotalPrices) ,  'currency': 'VND' }, se.gf.convertNumberToFloat(se.listcars.HotelBooking.TotalPrices) );

    this.storage.get('jti').then(jti => {
      if (jti) {
        this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile+'/api/Dashboard/GetListNameHotel?memberid='+jti, {},{}, 'flightadddetails', 'GetListName').then((data)=>{
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
                  se.ischeck = true;
                }else {
                  se.ischeck = false;
                }
              })
            }

          }
        });
      }
    })
  }
  insertbooking() {
    var se = this;
    var form = this.listcars;
    form.HotelBooking.PaymentMethod="51"
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
      headers:
      {
      },
      form
    };
    request(options, function (error, response, body) {
      var obj = JSON.parse(body);
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
        se.loader.dismiss();
        var json = JSON.parse(body);
        if (json.Error == 0) {
          var ischeck = '1';
          se.Roomif.priceshowtt = '0';
          var total = 0;
          se.loader.dismiss();
          if(se.bizTravelService.isCompany){
            let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.listcars.HotelBooking.TotalPrices.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + obj.Code + '&buyerPhone=' + se.phone + '&memberId=' + se.jti ;
            se.gf.CreateUrl(url);
          }
          if (se.Roomif.payment == "AL") {
            se.navCtrl.navigateForward('/combodoneprepay/' + obj.Code + '/' + total + '/' + ischeck);
          }
          else {
            se.navCtrl.navigateForward('/combodone/' + obj.Code);
          }
        }
      });
    })

  }
  next() {
    this.checkchangeemail=false;
    this.Roomif.notetotal = "";
    this.gf.googleAnalytion('roomadddetails', 'add_payment_info', '');
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

    this.clearClonePage('page-roompaymentselect');
    this.Roomif.order = "";
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
        //validate mail
        if(!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        else if (this.email) {
          var checkappleemail=(this.email.includes("appleid")|| this.email.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail();
          }
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
          this.listcars.HotelBooking.Note = this.note;
          this.listcars.HotelBooking.CompName = this.companyname;
          this.listcars.HotelBooking.CompAddress = this.address;
          this.listcars.HotelBooking.CompTaxCode = this.tax;
          this.listcars.HotelBooking.CAddress = this.addressorder;
          this.listcars.HotelBooking.CompanyContactEmail = this.Roomif.addressorder;
          this.listcars.HotelBooking.CompanyContactName = this.Roomif.nameOrder;
          this.listcars.HotelBooking.IsInvoice = 1;
          this.storage.set("email", this.email);
          //xử lý tiếp ở đây
          // this.postapibook();
          if(this.checkchangeemail){
            return;
          }
          if (this.priceshow > 0) {
            //this.loader.dismiss();
            if (this.Roomif.payment == "AL") {
              this.Roomif.bookingCode="";
              this.navCtrl.navigateForward("combopayment");
            }
            else {
              this.postapibook();
            }
          } else {
            this.postapibook();
          }
        } else {
          this.presentToastOrder();
        }

      } else {
        this.presentToastPhone();
      }

    } else {
      if (this.phonenumber(this.phone)) {
          //validate mail
          if(!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)){
            this.presentToastEmail();
            this.validemail = false;
            return;
          }
          else if (this.email) {
            var checkappleemail=(this.email.includes("appleid")|| this.email.includes('vivumember.info'));
            if (checkappleemail) {
              this.checkchangeemail=true;
              this.showConfirmEmail();
            }
          }
        this.Roomif.hoten = this.hoten;
        this.Roomif.phone = this.phone;
        this.Roomif.notetotal = this.note;
        this.Roomif.ischeck = this.ischeck;
        this.clearClonePage('page-roompaymentselect');
        this.Roomif.notetotal = this.note;
        this.listcars.HotelBooking.Note = this.note;
        this.storage.set("email", this.email);
        if (!this.checkchangeemail) {
          if (this.priceshow > 0) {
            //this.loader.dismiss();
            if (this.Roomif.payment == "AL") {
              this.Roomif.bookingCode="";
              this.navCtrl.navigateForward("combopayment");
            }
            else {
              this.postapibook();
            }
          } else {
            this.postapibook();
          }
        }
      } else {
        this.presentToastPhone();
      }

    }
  }
  postapibook1() {
    var se = this;
    se.presentLoading();
    var options = {
      method: 'POST',
      url: C.urls.baseUrl.urlMobile + '/reserve-transfer-seat',
      headers:
      {
        apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
        apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
      },
      body:
      {

        trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
        seats: this.totalAdult,
        customer_phone: this.phone,
        customer_name: this.hoten,
        customer_email: 'tc@ivivu.com',
        coupon: "",
        pickup_id: this.listcars.TransferBooking.departTransfer.PickupPlaceCode,
        pickup: this.listcars.TransferBooking.departTransfer.PickupPlaceName,
        drop_off_id: this.listcars.TransferBooking.departTransfer.DropoffPlaceCode,
        drop_off: this.listcars.TransferBooking.departTransfer.DropoffPlaceName
      },
      json: true
    };
    request(options, function (error, response, body) {
      if (body.status == 0) {
        var json = body.data;
        if (json.length > 0) {
          // se.postapibook2();

        } else {
          se.loader.dismiss();
          alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
        }
      }
      else {
        se.loader.dismiss();
        alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
      }

    });
  }
  postapibook() {
    var se = this;
    se.presentLoading();
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
          total_seats: this.Bookcombo.totalseatsdep,
          total_price: this.Bookcombo.pricedep,
          code: '',
          dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
          pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
        },
        returnParams:
        {
          trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
          total_seats: this.Bookcombo.totalseatsret,
          total_price: this.Bookcombo.priceret,
          code: '',
          pickup_place: this.listcars.TransferBooking.returnTransfer.PickupPlaceName,
          dropoff_place:  this.listcars.TransferBooking.returnTransfer.DropoffPlaceName
        },
        customer_phone: this.phone,
        customer_name: this.hoten,
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
          se.listcars.HotelBooking.CName = se.hoten;
          se.listcars.HotelBooking.CPhone = se.phone;
          se.listcars.HotelBooking.LeadingName = se.hoten;
          se.listcars.HotelBooking.LeadingEmail = se.email;
          se.listcars.HotelBooking.LeadingPhone = se.phone;
          se.insertbooking();
          // if (se.priceshow > 0) {
          //   se.loader.dismiss();
          //   se.navCtrl.navigateForward("combopayment");
          // } else {
          //     se.insertbooking();
          // }

        } else {
          se.loader.dismiss();
          alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
        }
      }
      else {
        se.loader.dismiss();
        alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
      }

    });
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
    this.clearClonePage('page-roompaymentdoneean');
    if (this.ischeck) {
      if (this.phonenumber(this.phone)) {
        if (this.companyname && this.address && this.tax) {
          this.Roomif.hoten = this.hoten;
           this.Roomif.phone = this.phone;
           this.Roomif.companyname = this.companyname;
           this.Roomif.address = this.address;
           this.Roomif.tax = this.tax;
           this.Roomif.notetotal = this.note;
           this.Roomif.addressorder = this._email;
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
 
           this.listcars.HotelBooking.Note = this.note;
           this.listcars.HotelBooking.CompName = this.companyname;
           this.listcars.HotelBooking.CompAddress = this.address;
           this.listcars.HotelBooking.CompTaxCode = this.tax;
           this.listcars.HotelBooking.CAddress = this.addressorder;
           this.listcars.HotelBooking.CompanyContactEmail = this.Roomif.addressorder;
           this.listcars.HotelBooking.CompanyContactName = this.Roomif.nameOrder;
           this.listcars.HotelBooking.IsInvoice = 1;
          this.storage.set("email", this.email);
          //debugger
          if(this.checkchangeemail){
            return;
          }
          if (this.priceshow > 0) {
            //this.loader.dismiss();
            if (this.Roomif.payment == "AL") {
              this.Roomif.bookingCode="";
              this.navCtrl.navigateForward("combopayment");
            }
            else {
              this.postapibook();
            }
          } else {
            this.postapibook();
          }
        } else {
          this.presentToastOrder();
        }

      } else {
        this.presentToastPhone();
      }
    } else {
      if (this.phonenumber(this.phone)) {
          //validate mail
          if(!this.validateEmail(this.email) || !this.email || !this.gf.checkUnicodeCharactor(this.email)){
            this.presentToastEmail();
            this.validemail = false;
            return;
          }
          else if (this.email) {
            var checkappleemail=(this.email.includes("appleid")|| this.email.includes('vivumember.info'));
            if (checkappleemail) {
              this.checkchangeemail=true;
              this.showConfirmEmail();
            }
          }
        // var info = { ho: this.ho, ten: this.ten, phone: this.phone }
        // this.storage.set("infocus", info);
        this.Roomif.hoten = this.hoten;
        this.Roomif.phone = this.phone;
        this.Roomif.notetotal = this.note;
        this.Roomif.ischeck = this.ischeck;
        this.clearClonePage('page-roompaymentdoneean');
        this.Roomif.notetotal = this.note;
        this.listcars.HotelBooking.Note = this.note;
        this.storage.set("email", this.email);
        //debugger
        if(this.checkchangeemail){
          return;
        }
        if (this.priceshow > 0) {
          //this.loader.dismiss();
          if (this.Roomif.payment == "AL") {
            this.Roomif.bookingCode="";
            this.navCtrl.navigateForward("combopayment");
          }
          else {
            this.postapibook();
          }
        } else {
          this.postapibook();
        }
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
    this.navCtrl.back();
  }
  hasWhiteSpace(s) {
    return s.indexOf(' ') >= 0;
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
  public async showConfirmEmail(){
    if(this.loader){
      this.loader.dismiss();
    }
    let alert = await this.alertCtrl.create({
      message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
      cssClass: "cls-alert-showmore",
      buttons: [
        {
        text: 'Đổi email',
        role: 'OK',
        handler: () => {
          this.showChangeEmail();
        }
      }
    ]
  });
  alert.present();
}

  async showChangeEmail(){
    var se = this;
    const modal: HTMLIonModalElement =
            await this.modalCtrl.create({
              component: ConfirmemailPage,
              componentProps: {
                aParameter: true,
              }
            });
          modal.present();
        
          modal.onDidDismiss().then((data: OverlayEventDetail) => {
            if(data && data.data && data.data.email){
              if(data.data.email){
                se.storage.set("email", data.data.email);
                se.storage.set("saveemail", data.data.email);
                se.email = data.data.email;
                se.listcars.HotelBooking.CEmail = data.data.email;

                if (se.priceshow > 0) {
                  if (this.Roomif.payment == "AL") {
                    this.Roomif.bookingCode="";
                    this.navCtrl.navigateForward("combopayment");
                  }
                  else {
                    this.postapibook();
                  }
                } else {
                  se.postapibook();
                }
              }
            }

            
          })
  }
  showNameMail(ev)
  {
    this.ishideNameMail=ev.detail.checked;
  }

  inputFocus(event){
    var se = this;
    if(!se.inputtext){
      if(se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length >0){
        se.inputtext = true;
        se.createHintPaxName(null, se.listPaxSuggestByMemberId);
      }
    }else{
      se.inputtext = true;
      se.updateHintPaxName(event.target.value, se.listPaxSuggestByMemberId)
    }
      
  }

  inputLostFocus(item){
    var se = this;
      setTimeout(()=>{
        se.inputtext = false;

        //se.checkInput(item, 2, isadult);
        if(se.hidepaxhint){
          if(item){
            item.hidePaxHint = true;
          }
          //item.hidePaxHint = true;
          se.hidepaxhint = false;
        }
      }, 400)
    
  }

  updateHintPaxName(value, listpaxhint){
    var se = this;
    let arraypax =[];
    for (let index = 0; index < listpaxhint.length; index++) {
      const element = listpaxhint[index];
      if(value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1 ){
        arraypax.push(element);
      }
    }
    se.listpaxhint = [...arraypax];
  }

  async createHintPaxName(value, listpaxhint){
    var se = this;
    let arraypax =[];
    for (let index = 0; index < listpaxhint.length; index++) {
      const element = listpaxhint[index];
      if(value && element.fullName && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1 ){
        arraypax.push(element);
      }
    }
    se.listpaxhint = [...arraypax];
  }

  selectPaxHint(paxhint){
    var se = this;
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
  }
  hidePaxHint(){
    this.hidepaxhint = true;
  }

  inputOnFocus(item, type){
    var se = this;
    
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
}
