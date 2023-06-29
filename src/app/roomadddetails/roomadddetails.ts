
import { Booking, SearchHotel } from '../providers/book-service';
import { Component,  NgZone, OnInit } from '@angular/core';
import {  NavController, ToastController,LoadingController,Platform ,AlertController, ModalController} from '@ionic/angular';
import { RoomInfo,Bookcombo } from '../providers/book-service';
import { C } from '../providers/constants';
import * as request from 'requestretry';
import { Storage } from '@ionic/storage';
import { GlobalFunction, ActivityService } from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { ConfirmemailPage } from '../confirmemail/confirmemail.page';
import { OverlayEventDetail } from '@ionic/core';
import { Z_ERRNO } from 'zlib';
import { voucherService } from '../providers/voucherService';
/**
 * Generated class for the RoomadddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-roomadddetails',
  templateUrl: 'roomadddetails.html',
  styleUrls: ['roomadddetails.scss'],
  providers: [Keyboard]
})
export class RoomadddetailsPage implements OnInit {
  hoten;phone = ""; note; arr; roomnumber; room; ischeck: boolean; ishide;ishidehddt;
  companyname; address; tax; addressorder; bed; bedchuoi; priceshow; ischeckpoint; ischeckbtn
  timestamp; paymentMethod; jsonroom; ischeckpayment;public loader:any
  _email: any;
  validemail = true;
  auth_token: any;
  isKeyboardHide = true;
  showInstallmentButton: boolean;
  installmentPriceStr: string;
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
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone,public bookcombo:Bookcombo,
    private toastCtrl: ToastController, public Roomif: RoomInfo, public storage: Storage, public loadingCtrl: LoadingController,
    public booking: Booking, public gf: GlobalFunction,
    public keyboard: Keyboard,
    public activityService: ActivityService,public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public searchhotel: SearchHotel,
    public _voucherService: voucherService) {
    this.ischeckpayment = Roomif.ischeckpayment;
    this.storage.get('email').then(email => {
      if(email){
        this._email = email;
        var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
        if (checkappleemail) {
          this.validemail = false;
        }
      }else{
        this.validemail = false;
      }
      
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
    this.storage.get('order').then(order => {
      if (order) {
        this.companyname = order.companyname;
        this.address = order.address;
        this.tax = order.tax;
        this.addressorder = order.addressorder;
        this.hotenhddt=order.hotenhddt;
        this.emailhddt=order.emailhddt;
        this.ishideNameMail=order.ishideNameMail;
        this.ishide = true;
        this.ischeck = true;
      } else {
        this.ishide = false;
        this.ischeck = false;
      }
    })
    this.note = Roomif.notetotal;
    this.room = this.Roomif.arrroom;
    this.jsonroom = Roomif.jsonroom;
    this.ischeckpoint = this.Roomif.ischeckpoint;
    if (this.ischeckpoint == true || this.Roomif.promocode)  {
      if (this.Roomif.priceshow == "0") {
        this.priceshow = this.Roomif.priceshow;
      }
      else if(this.Roomif.priceshow){
        this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
      }else {
        this.priceshow = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
      }

    }
    else {
      this.ischeckbtn = true;
    }
    if (Roomif.ischeck) {
      this.ischeck = Roomif.ischeck;
    }
    var priceBooking:any = "";
    if(this.Roomif.priceshow){
      priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
    }else if(this.booking.cost){
      priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
    }
     
    this.showInstallmentButton = (priceBooking*1 >= 3000000 && this.Roomif.payment == 'AL') ? true : false;
    this.getInstallment(priceBooking*1);
    this.zone.run(()=>{
      let priceinstallment = Math.round(priceBooking*1 / 12 * 1.05);
      this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
    })
    this.GetUserInfo();

    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
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
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })
    
  }
  next() {
    this.checkchangeemail=false;
    this.Roomif.notetotal = "";
    //this.gf.googleAnalytion('roomadddetails', 'add_payment_info', '');
    this.gf.logEventFirebase('',this.searchhotel, 'roomadddetails', 'add_shipping_info', 'Hotels');
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
        //validate mail
        if(!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        else if (this._email) {
          var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail(0);
          }
        }
        this.booking.CEmail = this._email;
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
          this.storage.set("email", this._email);
          //this.Roomif.arrrbed = this.arrbed;
          //console.log(this.Roomif.notetotal);
          if (!this.checkchangeemail) {
            if (this.Roomif.payment == 'AL') {
              this.navCtrl.navigateForward("roompaymentselect");
            }
            else {
              this.paymentnotAL();
            }
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
        if(!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        else if (this._email) {
          var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail(0);
          }
        }
        this.booking.CEmail = this._email;
        this.Roomif.hoten = this.hoten;
        this.Roomif.phone = this.phone;
        this.Roomif.notetotal = this.note;
        this.Roomif.ischeck = this.ischeck;
        this.clearClonePage('page-roompaymentselect');
        this.Roomif.notetotal = this.note;
        this.storage.set("email", this._email);
        //console.log(this.Roomif.notetotal);
        if (!this.checkchangeemail) {
          if (this.Roomif.payment == 'AL') {
            this.navCtrl.navigateForward("roompaymentselect");
          }
          else {
            this.paymentnotAL();
          }
        }
      } else {
        this.presentToastPhone();
      }

    }
  }
  next1() {
    this.checkchangeemail=false;
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
        //validate mail
        if(!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        else if (this._email) {
          var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail(1);
          }
        }
        this.booking.CEmail = this._email;
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

          if (!this.ishideNameMail) {
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
          
          // this.Roomif.addressorder = this.addressorder;
          var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder,ishideNameMail: this.ishideNameMail,hotenhddt:this.hotenhddt,emailhddt:this.emailhddt }
          this.storage.set("order", order1);
          this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder
          this.Roomif.notetotal = this.note;
          this.Roomif.ischeck = this.ischeck;
          this.storage.set("email", this._email);
          if (!this.checkchangeemail) {
            this.pushdata();
          }
        } else {
          this.presentToastOrder();
        }

      } else {
        this.presentToastPhone();
      }
    } else {
      if (this.phonenumber(this.phone)) {
        this.Roomif.hoten = this.hoten;
        this.Roomif.phone = this.phone;
        this.Roomif.notetotal = this.note;
        this.Roomif.ischeck = this.ischeck;
        this.clearClonePage('page-roompaymentdoneean');
        this.Roomif.notetotal = this.note;
        //validate mail
        if(!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)){
          this.presentToastEmail();
          this.validemail = false;
          return;
        }
        else if (this._email) {
          this.booking.CEmail = this._email;
          var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
          if (checkappleemail) {
            this.checkchangeemail=true;
            this.showConfirmEmail(1);
          }
          else{
            this.pushdata();
          }
        }
       
        //this.storage.set("email", this._email);
        // if (!this.checkchangeemail) {
        //   this.pushdata();
        // }
      } else {
        this.presentToastPhone();
      }
    }
  }
  pushdata() {
    this.presentLoading();
    var se = this;
    this.jsonroom.RoomClasses = this.room;
    this.timestamp = Date.now();
  
        var Invoice = 0;
        if (se.Roomif.order) {
          Invoice = 1;
        }

        let voucherSelectedMap = this._voucherService.voucherSelected.map(v => {
          let newitem = {};
          newitem["voucherCode"] = v.code;
          newitem["voucherName"] = v.rewardsItem.title;
          newitem["voucherType"] = v.applyFor || v.rewardsItem.rewardsType;
          newitem["voucherDiscount"] = v.rewardsItem.price;
          newitem["keepCurrentVoucher"] = false;
          return newitem;
        });
        let promoSelectedMap = this._voucherService.listObjectPromoCode.map(v => {
          let newitem = {};
          newitem["voucherCode"] = v.code;
          newitem["voucherName"] = v.name;
          newitem["voucherType"] = 2;
          newitem["voucherDiscount"] = v.price;
          newitem["keepCurrentVoucher"] = false;
          return newitem;
        });

        let checkpromocode = this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listObjectPromoCode && this._voucherService.listObjectPromoCode.length ==0;
        let arrpromocode = this.Roomif.promocode ?[{"voucherCode": this.Roomif.promocode, "voucherName": this.Roomif.promocode,"voucherType": 1,"voucherDiscount": this.Roomif.priceshow ,"keepCurrentVoucher": false  }] : [];


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
            source: '6',
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
            //promotionCode:se.Roomif.promocode,
            comboid:se.bookcombo.ComboId,
            PenaltyDescription:se.Roomif.textcancel,
            companycontactname: se.Roomif.nameOrder,
            vouchers : !checkpromocode ? [...voucherSelectedMap,...promoSelectedMap] : arrpromocode,
          },
          json: true
        };
        //console.log(JSON.stringify(options.body));
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
          if (body) {
            if (body.error == 0) {
              //console.log(body.code);
              // var value = { BookingCode: body.code, total: se.Roomif.pricepoint ,ischeck:'1'};
              //se.closeLoading();
              var id = body.code;
              var total = se.Roomif.pricepoint;
              var ischeck = '1'
              se.clearClonePage('page-roompaymentdoneean');
              se.loader.dismiss();
              
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
              se.searchhotel.paymentType = 'office';
              se.gf.logEventFirebase('office',se.searchhotel, 'roomadddetails', 'add_payment_info', 'Hotels');
              if (se.Roomif.notetotal) {
                se.gf.CreateSupportRequest(body.code,se.booking.CEmail,se.Roomif.hoten,se.Roomif.phone,se.Roomif.notetotal);
              }
              se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
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
              //alert(body.Msg);
              //se.refreshToken();
              //se.navCtrl.popToRoot();
              //se.app.getRootNav().getActiveChildNav().select(0);
            }
          }
          else{
            error.page = "roomadddetails";
            error.func = "pushdata";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error, response);
            se.loader.dismiss();
            alert("Đã có sự cố xảy ra, vui lòng thử lại!");
          }
          
       

      
    })
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
              page: "roompaymentdoneean",
              func: "refreshToken",
              message: response.statusMessage,
              content: response.body,
              type: "warning",
              param: JSON.stringify(options)
            };
            C.writeErrorLog(objError,response);
          }
          if (error) {
            error.page = "roompaymentdoneean";
            error.func = "refreshToken";
            error.param = JSON.stringify(options);
            C.writeErrorLog(error,response);
          } else {
            var au = JSON.parse(body);
            se.zone.run(() => {
              se.storage.remove('auth_token');
              se.storage.set('auth_token', au.auth_token);
              var decoded = jwt_decode(au.auth_token);
              se.storage.remove('point');
              se.storage.set('point', decoded.point);
              se.navCtrl.navigateForward('/hoteldetail/' + this.booking.HotelId);
            })
          }
        })
      }
    })
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
      message: "Xin vui lòng nhập số điện thoại",
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

  async presentToastEmail() {
    let toast = await this.toastCtrl.create({
      message: "Thông tin email không hợp lệ. Vui lòng nhập lại.",
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

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  phonenumber(inputtxt) {
    if(inputtxt){
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
    }else{
      return false;
    }
  }
  goback() {
    this.navCtrl.navigateBack('roomdetailreview');
  }
  paymentnotAL() {
    this.presentLoading();
    var se = this;
    se.jsonroom.RoomClasses = se.room;
    se.timestamp = Date.now();
    //se.storage.get('auth_token').then(auth_token => {
      if (se.booking.CEmail) {
        var Invoice = 0;
        if (se.Roomif.order) {
          Invoice = 1;
        }
        let voucherSelectedMap = this._voucherService.voucherSelected.map(v => {
          let newitem = {};
          newitem["voucherCode"] = v.code;
          newitem["voucherName"] = v.rewardsItem.title;
          newitem["voucherType"] = v.applyFor || v.rewardsItem.rewardsType;
          newitem["voucherDiscount"] = v.rewardsItem.price;
          newitem["keepCurrentVoucher"] = false;
          return newitem;
        });
        let promoSelectedMap = this._voucherService.listObjectPromoCode.map(v => {
          let newitem = {};
          newitem["voucherCode"] = v.code;
          newitem["voucherName"] = v.name;
          newitem["voucherType"] = 2;
          newitem["voucherDiscount"] = v.price;
          newitem["keepCurrentVoucher"] = false;
          return newitem;
        });

        let checkpromocode = this._voucherService.voucherSelected && this._voucherService.voucherSelected.length ==0 && this._voucherService.listObjectPromoCode && this._voucherService.listObjectPromoCode.length ==0;
        let arrpromocode = this.Roomif.promocode ? [{"voucherCode": this.Roomif.promocode, "voucherName": this.Roomif.promocode,"voucherType": 1,"voucherDiscount": this.Roomif.discountpromo ,"keepCurrentVoucher": false  }] : [];

        
        var options = {
          method: 'POST',
          url: C.urls.baseUrl.urlPost + '/mInsertBooking',
          //url: 'http://192.168.10.103:24993/mInsertBooking',
          timeout: 10000, maxAttempts: 5, retryDelay: 2000,
          headers:
          {
            'content-type': 'application/json'
          },
          body:
          {
            RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
            CName: se.Roomif.hoten,
            CEmail: se.booking.CEmail,
            CPhone: se.Roomif.phone,
            timestamp: se.timestamp,
            HotelID: se.booking.HotelId,
            paymentMethod: '51',
            note: se.Roomif.notetotal,
            source: '6',
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
            //promotionCode:se.Roomif.promocode,
            comboid:se.bookcombo.ComboId,
            PenaltyDescription:se.Roomif.textcancel,
            companycontactname: this.Roomif.nameOrder,
            vouchers : !checkpromocode ? [...voucherSelectedMap,...promoSelectedMap] : arrpromocode,
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
          // var rs = JSON.parse(body);
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
              se.searchhotel.paymentType = 'On request';
              se.gf.logEventFirebase('On request',se.searchhotel, 'roomadddetails', 'add_payment_info', 'Hotels');
              se.loader.dismiss();
              if (se.Roomif.notetotal) {
                se.gf.CreateSupportRequest(body.code,se.booking.CEmail,se.Roomif.hoten,se.Roomif.phone,se.Roomif.notetotal);
              }
            se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + se.Roomif.payment);
      
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
                se.gf.showAlertMessageOnly(body.Msg);
              }
              
            })
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
    this.checkchangeemail=false;
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
      else if(!se.validateEmail(se._email) || !se._email || !se.gf.checkUnicodeCharactor(this._email)){
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
    else if(!se.validateEmail(se._email) || !se._email || !se.gf.checkUnicodeCharactor(this._email)){
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
    else if (this._email) {
      var checkappleemail=(this._email.includes("appleid") || this._email.includes('vivumember.info'));
      if (checkappleemail) {
        this.checkchangeemail=true;
        this.showConfirmEmail(2);
      }
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
          se.Roomif.addressorder = se._email;
          se.Roomif.nameOrder = se.hoten;

          if (!se.ishideNameMail) {
            se.Roomif.addressorder = se.emailhddt;
            se.Roomif.nameOrder = se.hotenhddt;
          } 
          // var order1 = { companyname: se.companyname, address: se.address, tax: se.tax, addressorder: se.addressorder }
          // se.storage.set("order", order1);
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
    if(se.activityService.objBankInStallment && !se.activityService.objBankInStallment.banks){
      se.presentToastWarning("Phương thức thanh toán đang cập nhật, vui lòng chọn hình thức thanh toán khác!");
      return;
    }
    let checkappleemail=(se._email.includes("appleid") || se._email.includes('vivumember.info'));
    if (!checkappleemail) {
      se.navCtrl.navigateForward('/installmentpayment');
    }
    else{
      this.showConfirmEmail(2);
    }
  }

  async presentToastWarning(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }
  public async showConfirmEmail(input){
    let alert = await this.alertCtrl.create({
      message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
      cssClass: "cls-alert-showmore",
      buttons: [
        {
        text: 'Đổi email',
        role: 'OK',
        handler: () => {
          this.showChangeEmail(input);
        }
      }
    ]
  });
  alert.present();
}

async showChangeEmail(input){
  var se = this;
  const modal: HTMLIonModalElement =
          await se.modalCtrl.create({
            component: ConfirmemailPage,
            componentProps: {
              aParameter: true,
            }
          });
        modal.present();
      
        modal.onDidDismiss().then((data: OverlayEventDetail) => {
          if(data && data.data && data.data.email){
            if(data.data.email){
              se.storage.remove("email");
              se.storage.set("email", data.data.email);
              se.storage.set("saveemail", data.data.email);
              se._email = data.data.email;
              se.booking.CEmail = data.data.email;
              
              if (input==0) {
                if (se.Roomif.payment == 'AL') {
                  se.navCtrl.navigateForward("roompaymentselect");
                }
                else {
                  se.paymentnotAL();
                }
              } else if (input==1) {
                se.pushdata();
              }
              else if(input==2)
              {
                se.navCtrl.navigateForward('/installmentpayment');
              }
            }
          }
          
         
        })
  }
  showNameMail(ev)
  {
    this.ishideNameMail=ev.detail.checked;
  }
  textChange(){

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

          setFocusInput(){
            document.getElementById('ipNote').scrollIntoView({  block: 'center' });
          }
}
