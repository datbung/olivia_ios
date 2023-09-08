import { Bookcombo, SearchHotel, ValueGlobal } from '../../providers/book-service';

import { Booking } from '../../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, Platform, AlertController, ModalController, ActionSheetController } from '@ionic/angular';
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
import { voucherService } from '../../providers/voucherService';
import { AdddiscountPage } from 'src/app/adddiscount/adddiscount.page';
import { OverlayEventDetail } from '@ionic/core';

import { ticketService } from 'src/app/providers/ticketService';
import { forEach } from '@angular/router/src/utils/collection';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the RoomadddetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-ticketadddetails.page',
  templateUrl: 'ticketadddetails.page.html',
  styleUrls: ['ticketadddetails.page.scss'],
})
export class TicketAdddetailsPage implements OnInit {
  private readonly DATA_NAME = ['']
  hoten; phone = ""; note; arr; roomnumber; room; ischeck: boolean = false; ishide = false;
  companyname; address; tax; addressorder; bed; bedchuoi; priceshow; ischeckbtn
  timestamp; paymentMethod; jsonroom; ischeckpayment; public loader: any
  _email: any;
  validemail: boolean = true;
  auth_token: any = '';
  installmentPriceStr: any;
  showInstallmentButton: boolean = false;
  ishideNameMail = true; hotenhddt; emailhddt;

  inputtext: boolean = false;
  listPaxSuggestByMemberId = [];
  listpaxhint: any = [];
  hidepaxhint: boolean = false;
  currentSelectPax: any;
  jti: any;
  memberid: any = '';
  totalPriceStr: any;
  point: number;
  promocode: string = '';
  discountpromo: number = 0;
  itemVoucherTour: any;
  ischeckpoint = false;
  msg: string;
  textpromotion: any;
  Pricepointshow: any;
  ischeckpromo: boolean;
  usePointPrice: number;
  kkdayValue: any;
  ischeckkkdayValue: boolean = false;
  idAddress: any;
  nameAddress: any;
  objdataRaw: any;
  isCustom: boolean = false;
  isTraffic: boolean = false;
  summaryBooking: any;
  kkdayResource: any;
  customs: any;
  traffic: any;
  customInfo: any;
  customInfoGeneral: any;
  generalInfo: any;
  groupDataOutputs: any=[];
  groupDataBinding: any=[];
  customInfoArr: any=[];
  customGeneralInfoArr: any=[];
  trafficInfoArr: any=[];
  trafficCarInfoArr: any=[];
  trafficFlightInfoArr: any=[];
  arrHours = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
  arrMinutes = ['00','01','02','03','04','05','06','07','08','09','10',
  '11','12','13','14','15','16','17','18','19','20',
  '21','22','23','24','25','26','27','28','29','30',
  '31','32','33','34','35','36','37','38','39','40',
  '41','42','43','44','45','46','47','48','49','50',
  '51','52','53','54','55','56','57','58','59',];
  hours: any='00';
  minutes: any='00';
  trafficQtyInfoArr: any=[];
  //public ticketCustomData: FormGroup;
  ngOnInit() {

  }
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone,
    private toastCtrl: ToastController, public Roomif: RoomInfo, public storage: Storage, public loadingCtrl: LoadingController,
    public booking: Booking, public gf: GlobalFunction, public bookCombo: Bookcombo, public httpClient: HttpClient,
    private alertCtrl: AlertController,
    public activityService: ActivityService,
    public searchhotel: SearchHotel,
    public tourService: tourService,
    public _voucherService: voucherService,
    public ticketService: ticketService, public valueGlobal: ValueGlobal, public actionsheetCtrl: ActionSheetController,
    private formBuilder: FormBuilder) {
    this.ischeckpayment = Roomif.ischeckpayment;
    // let tp =0;

    if (this.ticketService && this.ticketService.itemTicketService) {
      // tp = ((this.ticketService.itemTicketService.PriceAdultAvg ||0) * this.searchhotel.adult || 0) + ((this.ticketService.itemTicketService.PriceChildAvg ||0) * this.searchhotel.child || 0) + ((this.ticketService.itemTicketService.PriceElderAvg ||0) * this.searchhotel.elder || 0);
      this.totalPriceStr = this.gf.convertNumberToString(this.ticketService.totalPriceNum);
    }

    // this.totalPriceStr = this.gf.convertNumberToString(tp);
    this.storage.get('jti').then((memberid) => {
      this.memberid = memberid;
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

    this.note = Roomif.notetotal;
    this.room = this.Roomif.arrroom;
    this.jsonroom = { ...Roomif.jsonroom };
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
    // var priceBooking: any = "";
    // if (this.Roomif.priceshow) {
    //   priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
    // } else if (this.booking.cost) {
    //   priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
    // }
    this.getSummary();
   
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
          }
          else if (response.statusCode == 401) {
            se.storage.get('jti').then((memberid) => {
              se.storage.get('deviceToken').then((devicetoken) => {
                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                  se.storage.remove('auth_token').then(() => {
                    se.storage.set('auth_token', token);
                  })
                  setTimeout(() => {
                    se.GetUserInfo();
                  }, 300)
                });

              })
            })
          }
          else {
            if (body) {
              var data = JSON.parse(body);
              se.zone.run(() => {
                var corpInfomations = data.corpInfomations[0];
                if (corpInfomations) {
                  se.companyname = corpInfomations.legalName;
                  se.address = corpInfomations.address;
                  se.tax = corpInfomations.taxCode;
                  se.addressorder = corpInfomations.addressorder;
                  se.hotenhddt = corpInfomations.fullName;
                  se.emailhddt = corpInfomations.email;
                  se.ishideNameMail = true;
                }
                else {
                  se.storage.get('order').then(order => {
                    if (order) {
                      se.companyname = order.companyname;
                      se.address = order.address;
                      se.tax = order.tax;
                      se.addressorder = order.addressorder;
                      se.hotenhddt = order.hotenhddt;
                      se.emailhddt = order.emailhddt;
                      se.ishideNameMail = order.ishideNameMail;
                    }
                  })
                }
                if (data.point) {
                  se.Roomif.point = data.point;
                  se.point = data.point * 1000;
                  //se.price = se.point.toLocaleString();
                }
                se.hoten = data.fullname;
                se.phone = data.phone;
              })
            } else {
              se.storage.get('order').then(order => {
                if (order) {
                  se.companyname = order.companyname;
                  se.address = order.address;
                  se.tax = order.tax;
                  se.addressorder = order.addressorder;
                  se.hotenhddt = order.hotenhddt;
                  se.emailhddt = order.emailhddt;
                  se.ishideNameMail = order.ishideNameMail;
                } else {
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
  ionViewWillEnter() {
    this.storage.get('email').then(email => {
      if (email) {
        this._email = email;
      } else {
        this.validemail = false;
      }

    })
    this.storage.get('auth_token').then(auth_token => {
      this.auth_token = auth_token;
    })

    this.zone.run(() => {
      if (this._voucherService.selectVoucher) {
        this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
        this._voucherService.selectVoucher = null;
      }

      this.itemVoucherTour = null;
      this.promocode = "";
      this.discountpromo = 0;
      this.ischeckpromo = false;
      this.tourService.promocode = "";
      this.tourService.discountpromo = 0;
      this.tourService.totalPriceBeforeDiscount = 0;
      this.tourService.discountPrice = null;
      this.tourService.usePointPrice = 0;
      this.edit(2);
    })
    this.GetUserInfo()
  }

  next() {
    this.createObjectBooking().then((checkvalid) => {
      if (checkvalid) {
        this.CustomerSave();
        // if (this.ticketService.bookingInfo.booking.supplierCode=='KKDAY' && this.ticketService.bookingInfo.kkdayResource) {

        //   this.CustomerSave();
        // }else{
        //   this.CustomerSave();
        // }

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
      if (co != 2) {//use point
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
      }

      let tp = 0;
      this.tourService.discountPrice = 0;
      tp = ((this.ticketService.itemTicketService.PriceAdultAvg || 0) * this.searchhotel.adult || 0) + ((this.ticketService.itemTicketService.PriceChildAvg || 0) * this.searchhotel.child || 0) + ((this.ticketService.itemTicketService.PriceElderAvg || 0) * this.searchhotel.elder || 0);
      // if(this.tourService.itemDepartureCalendar && this.tourService.itemDepartureCalendar.TotalRate){
      //   tp = this.tourService.itemDepartureCalendar.TotalRate;
      // }else{
      //   tp = ((this.tourService.itemDepartureCalendar.RateAdultAvg || (this.tourService.itemDepartureCalendar.PriceAdultAvg ||0)) * this.searchhotel.adult || 0) + ((this.tourService.itemDepartureCalendar.RateChildAvg ||0) * this.searchhotel.child || 0);
      // }
      // if(this.ischeck && this.tourService.itemDetail.Inbound){
      //   tp = tp *1.08;
      // }
      this.tourService.totalPriceBeforeDiscount = tp;
      if (this.ischeckpoint && this.point > 0) {
        if (this.point >= tp) {
          this.usePointPrice = tp;
        } else {
          this.usePointPrice = this.point;
        }
        this.tourService.usePointPrice = this.usePointPrice;

        tp = tp - this.point;
        if (tp <= 0) {
          this.Pricepointshow = 0;
          tp = 0;
        }
        this.tourService.discountPrice = tp;
      }

      if (this.discountpromo) {
        tp = this.ischeckpromo ? tp - this.discountpromo : tp;
        if (tp <= 0) {
          this.Pricepointshow = 0;
          tp = 0;
        }
        this.tourService.discountPrice = tp;
      }

      this.tourService.totalPrice = tp;
      this.zone.run(() => {
        this.totalPriceStr = tp > 0 ? this.gf.convertNumberToString(tp) : "0";
      })
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
    this.itemVoucherTour = null;
    this.promocode = "";
    this.discountpromo = 0;
    this.ischeckpromo = false;
    this.tourService.promocode = "";
    this.tourService.discountpromo = 0;
    this.tourService.totalPriceBeforeDiscount = 0;
    this.tourService.discountPrice = null;
    this.tourService.usePointPrice = 0;
    // this.navCtrl.back()
    this.navCtrl.navigateBack('ticketservice');
  }

  async showAlertMessageOnly(msg) {
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

  getInstallment(price) {
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

  checkInput() {
    var se = this, res = true;
    if (se.hoten) {
      se.hoten = se.hoten.trim();
      var checktext = se.hasWhiteSpace(se.hoten);
      if (!checktext) {
        se.presentToastHo();
        res = false;
      }
      else if (!se.hoten) {
        se.presentToastHo();
        res = false;
      }
      //validate mail
      else if (!se.validateEmail(se._email) || !se._email) {
        se.presentToastEmail();
        se.validemail = false;
        res = false;
      }
      else if (!se.phone || !se.phonenumber(se.phone)) {
        se.presentToastPhone();
        res = false;
      }
      else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
        se.presentToastOrder();
        res = false;
      }
    }
    else if (!se.hoten) {
      se.presentToastHo();
      res = false;
    }
    //validate mail
    else if (!se.validateEmail(se._email) || !se._email) {
      se.presentToastEmail();
      se.validemail = false;
      res = false;
    }
    else if (!se.phone || !se.phonenumber(se.phone)) {
      se.presentToastPhone();
      res = false;
    }
    else if (se.ischeck && !(se.companyname && se.address && se.tax)) {
      se.presentToastOrder();
      res = false;
    }

    if (res) {
      if (se._email) {
        se.booking.CEmail = se._email;
      }
      if (se.ischeck) {
        if (se.companyname && se.address && se.tax) {
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
      } else {
        se.Roomif.hoten = se.hoten;
        se.Roomif.phone = se.phone;
        se.Roomif.notetotal = se.note;
        se.Roomif.ischeck = se.ischeck;
        se.Roomif.notetotal = se.note;
      }
    }


    return res;
  }

  installment() {
    var se = this;
    if (!se.checkInput()) {
      return;
    }
    if (!se.activityService.objBankInStallment) {
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
  showNameMail(ev) {
    this.ishideNameMail = ev.detail.checked;
  }

  updateHintPaxName(value, listpaxhint) {
    var se = this;
    let arraypax = [];
    se.listpaxhint = [];
    for (let index = 0; index < listpaxhint.length; index++) {
      const element = listpaxhint[index];
      if (element.fullName && value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
        arraypax.push(element);
      }

    }

    se.listpaxhint = [...arraypax];
  }

  inputFocus(event) {
    var se = this;
    se.zone.run(() => {
      if (!se.inputtext) {
        if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
          se.inputtext = true;
          se.createHintPaxName(null, se.listPaxSuggestByMemberId);
        }
      } else {
        se.inputtext = true;
        se.updateHintPaxName(event.target.value, se.listPaxSuggestByMemberId)
      }
    })


  }

  inputLostFocus(item) {
    var se = this;
    setTimeout(() => {
      se.zone.run(() => {
        se.inputtext = false;

        if (se.hidepaxhint) {
          item.hidePaxHint = true;
          se.hidepaxhint = false;
        }
      })

    }, 400)

  }

  async createHintPaxName(item, listpaxhint) {
    var se = this;
    se.listpaxhint = [...listpaxhint];
  }

  selectPaxHint(paxhint) {
    var se = this;
    se.zone.run(() => {
      if (paxhint) {
        if (se.currentSelectPax) {
          se.currentSelectPax.hoten = paxhint.fullName ? paxhint.fullName : se.currentSelectPax.hoten;
          se.currentSelectPax.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.currentSelectPax.phone;
        }
        else {
          se.hoten = paxhint.fullName ? paxhint.fullName : se.hoten;
          se.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.phone;
        }

      }
    })

  }

  promofunc(vc) {
    var se = this;
    if (se.promocode) {
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlMobile + '/api/data/validpromocode',
        headers:
        {
          'postman-token': '37a7a641-c2dd-9fc6-178b-6a5eed1bc611',
          'cache-control': 'no-cache',
          'content-type': 'application/json'
        },
        body: {
          bookingCode: 'TOUR', code: se.promocode, totalAmount: se.totalPriceStr.toString().replace(/\./g, '').replace(/\,/g, ''), comboDetailId: "",
          couponData: {
            "tour": {
              "tourId": se.tourService.itemDetail.tourDetailId,
              "totalAdult": se.searchhotel.adult,
              "totalChild": se.searchhotel.child,
              "jsonObject": "",
              "checkIn": se.searchhotel.CheckInDate,
              "checkOut": se.searchhotel.CheckOutDate
            }
          }
        },
        json: true
      };

      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        se.zone.run(() => {
          var json = body;
          if (json.error == 0) {
            var total = se.totalPriceStr.toString().replace(/\./g, '').replace(/\,/g, '');

            se.discountpromo = json.data.orginDiscount ? json.data.orginDiscount : json.data.discount;
            se.Pricepointshow = total - se.discountpromo;
            se.tourService.discountpromo = se.discountpromo;
            se.ischeckpromo = true;
            // if (se.ischeckpoint) {
            //   total = se.Pricepointshow.toString().replace(/\./g, '').replace(/\,/g, '');
            // }
            if (se.Pricepointshow > 0) {
              se.Pricepointshow = se.Pricepointshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
              //se.ischeckpromo = true;
            }
            else {
              //se.ischeckbtnpromo = true;
              se.Pricepointshow = 0;
            }
            se.msg = json.msg;
            se.edit(2);
            //se.ischecktext=0;
            //se.ischeckerror=0;
          }
          else if (json.error == 1) {
            se.ischeckpromo = false;
            se.msg = json.msg;
            se.discountpromo = 0;
            //se.ischecktext=1;
            //se.ischeckerror=1;
          }
          else if (json.error == 2) {
            //se.ischeckbtnpromo = false;
            se.ischeckpromo = false;
            se.msg = json.msg;
            se.discountpromo = 0;
            //se.ischecktext=2;
            //se.ischeckerror=1;
          }
          else {
            //se.ischeckbtnpromo = false;
            se.ischeckpromo = false;
            se.msg = json.msg;
            se.discountpromo = 0;
            //se.ischecktext = 2;
            //se.ischeckerror = 1;
          }
        })
      });
    }
  }

  scrollToElement(type) {
    let el = type == 1 ? 'ipEmail' : 'ipNote';
    if ($('#' + el) && $('#' + el).length > 0) {
      document.getElementById(el).scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  checkVoucherClaimed() {
    if (this.itemVoucherTour && this.itemVoucherTour.claimed) {
      this._voucherService.vouchers.forEach((element) => {
        if (element.id == this.itemVoucherTour.id) {
          element.claimed = true;
        }
      });
    }
  }

  showTicketPrice() {
    this.ticketService.totalPriceStr = this.totalPriceStr;
    this.navCtrl.navigateForward('/ticketpricedetail');
  }
  CustomerSave() {
    let isInvoice = 0;
    if (this.ischeck) {
      isInvoice = 1;
    }
    let objCustomer = 
    {
      memberId: this.memberid || '',
      username: this.hoten || '',
      customerTitle: '',
      customerName: this.hoten,
      customerPhone: this.phone,
      // customerEmail: email,
      leadingTitle: '',
      leadingName: this.hoten,
      leadingPhone: this.phone,
      // leadingEmail: email,
      isInvoice: isInvoice ? 1 : 0,
      companyName: isInvoice ? this.companyname : '',
      companyTaxCode: isInvoice ? this.tax: '',
      companyAddress: isInvoice ? this.address : '',
      companyContactEmail: isInvoice ? this.emailhddt : '',
      companyContactName: isInvoice ? this.hotenhddt : '',
      paxList: '',
      tourNotes: this.note,
      kkdayResource: this.kkdayResource,
      code: []//this.vouchers.filter(x => x.checked).map(x => x.code)
    };
    let headers =
    {
      'content-type': 'application/json'
    }
    this.gf.RequestApi('POST', C.urls.baseUrl.urlTicket + '/api/Booking/CustomerSave/' + this.ticketService.itemTicketService.objbooking.bookingCode, headers, objCustomer, 'ticketservice', 'RecheckRateBooking').then((data: any) => {
      if (data && data.success) {
        this.ticketService.totalPriceStr = this.totalPriceStr;
        this.navCtrl.navigateForward('/ticketpaymentselect');
      } else {
        alert(data.error);
      }
    });
  }

  createObjectBooking(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.Roomif.notetotal = "";
      //this.gf.googleAnalytion('touradddetails', 'tour_payment_info', '');
      if (this.hoten) {
        this.hoten = this.hoten.trim();
        var checktext = this.hasWhiteSpace(this.hoten);
        if (!checktext) {
          this.presentToastHo();
          resolve(false);
          return;
        }
      }
      else {
        this.presentToastHo();
        resolve(false);
        return;

      }
      this.Roomif.order = "";

      if (!this.phonenumber(this.phone)) {
        this.presentToastPhone();
        resolve(false);
        return;

      }
      if (this.ischeck) {
        if (this.companyname && this.address && this.tax) {
          this.companyname = this.companyname.trim();
          this.address = this.address.trim();
          this.tax = this.tax.trim();
        }
        else {
          this.presentToastOrder();
          resolve(false);
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
              if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                resolve(false);
                return;
              }
              else {
                this.Roomif.addressorder = this.emailhddt;
                this.Roomif.nameOrder = this.hotenhddt;

                var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt }
                this.storage.set("order", order1);
                this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                this.Roomif.notetotal = this.note;
                this.Roomif.ischeck = this.ischeck;


              }
            }
            else {
              this.presentToastOrder();
              resolve(false);
              return;
            }
          }

        } else {
          this.presentToastOrder();
          resolve(false);
          return;
        }
      }
      if(this.customInfoArr){
        for (let index = 0; index < this.customInfoArr.length; index++) {
          const element = this.customInfoArr[index];
          for (let indexc = 0; indexc < element.listCustom.length; indexc++) {
            const elementCheck = element.listCustom[indexc];
            if(!elementCheck[elementCheck.name]){
              if(this.customInfoArr.length >1){
                this.gf.showToastWarning(`${elementCheck.label} Khách ${index+1} không hợp lệ. Vui lòng kiểm tra lại`);
              }else if(this.customInfoArr.length ==1){
                this.gf.showToastWarning(`${elementCheck.label} không hợp lệ. Vui lòng kiểm tra lại`);
              }
              
                resolve(false);
                return;
            }else{
              this.kkdayResource.dataInput.custom[index][elementCheck.name] = elementCheck[elementCheck.name];
            }
          }
          
        }
      }
      if(this.customGeneralInfoArr){
        for (let index = 0; index < this.customGeneralInfoArr.length; index++) {
          const element = this.customGeneralInfoArr[index];
          for (let indexc = 0; indexc < element.listCustom.length; indexc++) {
            const elementCheck = element.listCustom[indexc];
            if(!elementCheck[elementCheck.name] && elementCheck.name != 'have_app'){
              if((elementCheck.name == 'contact_app' || elementCheck.name == 'contact_app_account') && !elementCheck['allowInput']){
                this.kkdayResource.dataInput.custom[index][elementCheck.name] = '';
              }else{
                this.gf.showToastWarning(`${elementCheck.label} không hợp lệ. Vui lòng kiểm tra lại`);
                resolve(false);
                return;
              }
            }
            else if(!this.kkdayResource.dataInput.custom && this.kkdayResource.dataInput.mobile_device){
              this.kkdayResource.dataInput.mobile_device[elementCheck.name] = elementCheck[elementCheck.name];
            }else{
              this.kkdayResource.dataInput.custom[index][elementCheck.name] = elementCheck[elementCheck.name];
            }
          }
          
        }
      }
      if(this.trafficInfoArr){
        for (let index = 0; index < this.trafficInfoArr.length; index++) {
          const element = this.trafficInfoArr[index];
          if(!element[element.name]){
            this.gf.showToastWarning(`${element.label} không hợp lệ. Vui lòng kiểm tra lại`);
              resolve(false);
              return;
          }
          else{
            this.kkdayResource.dataInput.traffic.car[element.name] = element[element.name];
          }
        }
      }
      if(this.trafficCarInfoArr){
        for (let index = 0; index < this.trafficCarInfoArr.length; index++) {
          const element = this.trafficCarInfoArr[index];
          if(!element[element.name]){
            this.gf.showToastWarning(`${element.label} không hợp lệ. Vui lòng kiểm tra lại`);
              resolve(false);
              return;
          }else{
            this.kkdayResource.dataInput.traffic.car[element.name] = element[element.name];
          }
        }
      }
      if(this.trafficFlightInfoArr){
        for (let index = 0; index < this.trafficFlightInfoArr.length; index++) {
          const element = this.trafficFlightInfoArr[index];
          if(!element[element.name]){
            this.gf.showToastWarning(`${element.label} không hợp lệ. Vui lòng kiểm tra lại`);
              resolve(false);
              return;
          }else{
            this.kkdayResource.dataInput.traffic.flight[element.name] = element[element.name];
          }
        }
      }

      //console.log(this.kkdayResource.dataInput);
      resolve(true);
    })

  }
  goToLogin() {
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        this.valueGlobal.backValue = "";
        this.valueGlobal.logingoback = 'ticketadddetails';
        this.navCtrl.navigateForward('/login');
      }
    });
  }
  getSummary() {
    this.gf.RequestApi('GET', C.urls.baseUrl.urlTicket + '/api/Booking/Summary/' + this.ticketService.itemTicketService.objbooking.bookingCode, {}, {}, '', '').then((data) => {
      if (data && data.success && data.data.kkdayResource) {
        this.summaryBooking = data.data;
        this.ticketService.bookingInfo = data.data;
        this.kkdayResource = data.data.kkdayResource;
        if (this.summaryBooking.booking.supplement) {
          try {
            this.kkdayResource.dataInput = JSON.parse(data.data.booking.supplement);
          } catch {

          }
        }
        // set default value custom
        if (this.kkdayResource.dataInput.custom && this.kkdayResource.dataInput.custom.length !== 0) {
          this.kkdayResource.dataInput.custom.forEach(_custom => {
            if ('tel_country_code' in _custom && !_custom['tel_country_code']) {
              _custom['tel_country_code'] = '84';
            }
            if ('nationality' in _custom && !_custom['nationality']) {
              _custom['nationality'] = 'VN';
            }
          })
        }

        // set default value traffic
        if (this.kkdayResource.dataInput.traffic) {
          const _trafficValid = Object.entries(this.kkdayResource.dataInput.traffic).filter(([_key, _value]) => _value)
          const _trafficValidConverted: { [key: string]: any } = {};
          _trafficValid.forEach(([key, value]) => {
            _trafficValidConverted[key] = value;
          });
          console.log(_trafficValidConverted);
          // const _trafficValidConverted = Object.fromEntries(_trafficValid)
          // console.log(_trafficValidConverted)
          for (const [_key, _value] of Object.entries(_trafficValidConverted)) {
            for (const [_keyEntries, _valueEntries] of Object.entries(_value as any)) {
              const [dataOutput] = this.kkdayResource.data.filter(x => x.name === _keyEntries);

              if (dataOutput && dataOutput.dataRaw && dataOutput.dataRaw.length === 1) {
                const [firstDataRaw] = dataOutput.dataRaw;
                if (typeof firstDataRaw === 'string') {
                  this.kkdayResource.dataInput.traffic[_key][_keyEntries] = firstDataRaw;
                } else {
                  this.kkdayResource.dataInput.traffic[_key][_keyEntries] = firstDataRaw[dataOutput.field];
                }
              }
            }
          }
        }

        // console.log(this.kkdayResource.dataInput.custom)
       //let _formGroup = {};
        if (this.kkdayResource.dataInput.custom) {
          this.customs = this.kkdayResource.dataInput.custom;
          
          // this.customs.forEach(element => {
          //   _formGroup[element] = ['', Validators.compose([Validators.required])]
          // });
        }
        if (this.kkdayResource.dataInput.traffic) {
          this.traffic = this.kkdayResource.dataInput.traffic;
         
          
        }

        const dataOutputNotfound = this.kkdayResource.data.filter(x => !this.DATA_NAME.includes(x.name) && x.label)

        if(this.kkdayResource.dataInput.custom){
          const [_firstCustom] = this.kkdayResource.dataInput.custom;
          const _customKeys = Object.keys(_firstCustom);
          

          let _customInfo = dataOutputNotfound.filter(x => _customKeys.includes(x.name) && x.session === 'CustomInfo');
          //Thông tin khách
          for (let index = 0; index < this.kkdayResource.dataInput.custom.length; index++) {
            let element = this.kkdayResource.dataInput.custom[index];
            let _listCustom = [];
            _customInfo.forEach(elementCustom => {
              elementCustom.index = index+1;
              elementCustom[elementCustom.name] = '';
              if ('tel_country_code' == elementCustom.name) {
                elementCustom[elementCustom.name] = '+84';
              }
              if ('nationality' == elementCustom.name) {
                elementCustom[elementCustom.name] = 'Vietnam';
              }
              
              elementCustom.dataRawSearch = [...elementCustom.dataRaw];
              if(elementCustom.type == 'array' && elementCustom.dataRawSearch && elementCustom.dataRawSearch.length ==1){
                elementCustom[elementCustom.name] = elementCustom.dataRawSearch[0].name;
              }
              _listCustom.push({...elementCustom});
            });
           let _itemCustom = {listCustom: _listCustom};
            this.customInfoArr.push(_itemCustom);
          }
          //Thông tin chung
          this.customInfoGeneral = dataOutputNotfound.filter(x => _customKeys.includes(x.name) && x.session === 'GeneralInfo');
          let _customInfoGeneral = dataOutputNotfound.filter(x => _customKeys.includes(x.name) && x.session === 'GeneralInfo');
          if(_customInfoGeneral && _customInfoGeneral.length >0){
            let _refField = [];
            for (let index = 0; index < _customInfoGeneral.length; index++) {
              let element = _customInfoGeneral[index];
              element[element.name] = '';
              element.dataRawSearch = [...element.dataRaw];

              _customInfoGeneral.forEach(elementCustom => {
                elementCustom.index = index+1;
                elementCustom[elementCustom.name] = '';
                
                elementCustom.dataRawSearch = [...elementCustom.dataRaw];
                if(elementCustom.name == 'have_app' && elementCustom.ref && elementCustom.ref.length >0){
                  _refField = elementCustom.ref;
                }
                if(elementCustom.name && _refField.indexOf(elementCustom.name) != -1){
                  elementCustom['allowInput'] = true;
                }else {
                  elementCustom['allowInput'] ='undefined';
                }

                if(elementCustom.type == 'array' && elementCustom.dataRawSearch && elementCustom.dataRawSearch.length ==1){
                  elementCustom[elementCustom.name] = elementCustom.dataRawSearch[0].name;
                }
              });
             
            }
            let _itemGeneralCustom = {listCustom: _customInfoGeneral};
            this.customGeneralInfoArr.push(_itemGeneralCustom);
          }

          console.log(this.customInfoArr);
          console.log(this.customGeneralInfoArr);
        }

        //device
        if(this.kkdayResource.dataInput.mobile_device){
          const _customKeys = Object.keys(this.kkdayResource.dataInput.mobile_device);

          let _mobileDeviceInfoGeneral = dataOutputNotfound.filter(x => _customKeys.includes(x.name) && x.session === 'GeneralInfo');
          if(_mobileDeviceInfoGeneral && _mobileDeviceInfoGeneral.length >0){
            for (let index = 0; index < _mobileDeviceInfoGeneral.length; index++) {
              let element = _mobileDeviceInfoGeneral[index];
              element[element.name] = '';
              element.dataRawSearch = [...element.dataRaw];

              _mobileDeviceInfoGeneral.forEach(elementCustom => {
                elementCustom.index = index+1;
                elementCustom[elementCustom.name] = '';
                elementCustom['allowInput'] ='undefined';
                elementCustom.dataRawSearch = [...elementCustom.dataRaw];

                if(elementCustom.type == 'array' && elementCustom.dataRawSearch && elementCustom.dataRawSearch.length ==1){
                  elementCustom[elementCustom.name] = elementCustom.dataRawSearch[0].name;
                }
              });
             
            }
            let _itemGeneralCustom = {listCustom: _mobileDeviceInfoGeneral};
            this.customGeneralInfoArr.push(_itemGeneralCustom);
          }
        }

        //Quầy nhận vé
        if(this.kkdayResource.dataInput.traffic){
          let _trafficInfo = dataOutputNotfound.filter(x => x.session === 'GeneralInfo' && x.name == 's_location' && x.label == "Quầy nhận vé");
          if(_trafficInfo && _trafficInfo.length >0 && _trafficInfo[0].dataRaw && _trafficInfo[0].dataRaw.length >0){
            _trafficInfo[0][_trafficInfo[0].name] = _trafficInfo[0].dataRaw[0].name;
            _trafficInfo[0].dataRawSearch = [..._trafficInfo[0].dataRaw];
            this.trafficInfoArr.push({..._trafficInfo[0]});
          }
          //Thông tin đưa đón
          if(this.kkdayResource.dataInput.traffic && this.kkdayResource.dataInput.traffic.car){
              const _customCarKeys = Object.keys(this.kkdayResource.dataInput.traffic.car);
            let _trafficCarInfo = dataOutputNotfound.filter(x => x.session === 'GeneralInfo' && _customCarKeys.includes(x.name) && x.label != "Quầy nhận vé");
            if(_trafficCarInfo && _trafficCarInfo.length >0){
              _trafficCarInfo.forEach(element => {
                element.dataRawSearch = [...element.dataRaw];
                if(element.type == 'date' && this.ticketService.selectedDate){
                  element[element.name]= this.ticketService.selectedDate;
                }
                this.trafficCarInfoArr.push({...element});
              });
              
              //console.log(this.trafficCarInfoArr);
            }
          }
          
          //Thông tin chuyến bay
          if(this.kkdayResource.dataInput.traffic && this.kkdayResource.dataInput.traffic.flight){
            const _customFlightKeys = Object.keys(this.kkdayResource.dataInput.traffic.flight);
            let _trafficFlightInfo = dataOutputNotfound.filter(x => x.session === 'GeneralInfo' && _customFlightKeys.includes(x.name));
            if(_trafficFlightInfo && _trafficFlightInfo.length >0){
              _trafficFlightInfo.forEach(element => {
                element.dataRawSearch = [...element.dataRaw];
                if(element.name == 'arrival_time'){
                  element.showHours = false;
                  element.showMinutes = false;
                }
                else if(element.type == 'date' && this.ticketService.selectedDate){
                  element[element.name]= this.ticketService.selectedDate;
                }
                this.trafficFlightInfoArr.push({...element});
              });
            }
          }
          //Thông tin số lượng
          if(this.kkdayResource.dataInput.traffic && this.kkdayResource.dataInput.traffic.qty){
            const _customFlightKeys = Object.keys(this.kkdayResource.dataInput.traffic.qty);
            let _trafficQtyInfo = dataOutputNotfound.filter(x => x.session === 'GeneralInfo' && _customFlightKeys.includes(x.name));
            if(_trafficQtyInfo && _trafficQtyInfo.length >0){
              _trafficQtyInfo.forEach(element => {
                element.dataRawSearch = [...element.dataRaw];
                this.trafficQtyInfoArr.push({...element});
              });
              //console.log(this.trafficFlightInfoArr);
            }
          }
         
          //_formGroup[_trafficInfo[0].name] = ['', Validators.compose([Validators.required])];
          // const [_firstCustom] = this.kkdayResource.dataInput.custom;
          // const _customKeys = Object.keys(_firstCustom);
          // let __customInfo = dataOutputNotfound.filter(x => _customKeys.includes(x.name) && x.session === 'CustomInfo');
          // const _allCustomKeys = [...__customInfo.map(x => x.name), ...this.customInfoGeneral.map(x => x.name)];
          // this.generalInfo = dataOutputNotfound.filter(x => !_allCustomKeys.includes(x.name) && x.session === 'GeneralInfo');
          
          // const titleFilters = this.generalInfo.map(x => x.title);
          // // console.log(titleFilters)

          // const titleDistincts = [...new Set(titleFilters)];
          // // console.log(titleDistincts)
          // titleDistincts.forEach(_item =>{
          //   const _dataOutputs = this.generalInfo.filter(x => x.title === _item);

          //   this.groupDataOutputs.push({
          //     title: _item,
          //     dataOutputs: _dataOutputs
          //   });

          //   const valueObject: any[] = [];
          //   _dataOutputs.forEach(_data =>{
          //     // console.log(_data)
          //     // valueObject.push({
          //     //   [_data.name]: ''
          //     // })
          //   })
          //   this.groupDataBinding.push(valueObject);

          //})

         
        }

        //console.log(_formGroup);
      }
      else if(data && data.success && data.data){
        this.ticketService.bookingInfo = data.data;
      }
    });
  }
  async selectValue(ev, item) {
    //   console.log('test');
    //   let arrButton = [];
    //   this.ticketService.bookingInfo.kkdayResource.data[1].dataRaw.forEach(element => {
    //     var obj = {
    //         text: element.name,
    //         cssClass: this.idAddress==element.id ? 'text-bold' : '',
    //         handler: () => {
    //           this.clickoptions(element);
    //         }
    //     }
    //     arrButton.push(obj)
    //   });
    //   let actionSheet = await this.actionsheetCtrl.create({
    //     cssClass: 'action-sheets-ticketselect',
    //     mode: 'md',
    //     header: 'Quầy nhận vé',
    //     buttons: arrButton

    //   });

    //   actionSheet.present();
    //   actionSheet.onDidDismiss().then((data: OverlayEventDetail) => {

    // })
    // this.idAddress=ev.detail.value;
    // this.kkdayValue.traffic.car.s_location= this.idAddress;
    // this.objdataRaw = this.ticketService.bookingInfo.kkdayResource.data[1].dataRaw.filter((f) => { return f.id == this.idAddress});
    // this.ischeckkkdayValue=true;

    // if (this.isCustom) {
    // this.kkdayValue.custom[0][item.name]=ev.detail.value;
    // console.log(this.kkdayValue);
    // }
  }
  clickoptions(el) {
    this.idAddress = el.id;
    this.nameAddress = el.name;
    this.ischeckkkdayValue = true;
  }
  inputEvent(ev, item) {
    // if (this.isCustom) {
    //   
    // }else if (this.isTraffic) {
    //   if (item.name=='s_location' || item.name=='e_location') {
    //     this.kkdayValue.traffic.car[item.name]=ev.detail.value;
    //   }else{
    //     this.kkdayValue.traffic.flight[item.name]=ev.detail.value;
    //   }
    // }
    // if (item.name == 'native_last_name' || item.name == 'native_first_name') {
    //   this.kkdayValue.custom[0][item.name]=ev.detail.value;
    // }else{
    //   if (item.name=='s_location' || item.name=='e_location' || item.name=='s_time') {
    //     this.kkdayValue.traffic.car[item.name]=ev.detail.value;
    //   }else{
    //     this.kkdayValue.traffic.flight[item.name]=ev.detail.value;
    //   }
    // }
    // console.log(this.kkdayValue);
  }

  getCusInfoDataRaw(ev, item){
    var se = this;
      

        se.zone.run(()=>{
          if(ev != 'dropdownicon'){
            item.showDataRaw = true;
          }else{
            item.showDataRaw = !item.showDataRaw;
            if(!item.showDataRaw && !item[item.name]){
              item.errorDataRaw = true;
            }
          }
          
        })
        
        if(ev != 'dropdownicon' && ev.detail && ev.detail.data){
          
          const val =  ev.detail.data.toLowerCase();
          let filteritems = item.dataRawSearch.filter((element) => { return se.gf.convertFontVNI(element.name.toLowerCase()).indexOf(val) != -1 });
    
          se.zone.run(()=>{
            if(filteritems && filteritems.length >0){
              item.dataRawSearch = [...filteritems];
            }
          })
         
        }else{
          se.zone.run(()=>{
            item.dataRawSearch = [...item.dataRaw];
          })
        }
       // console.log('input_'+item.name);
       
      setTimeout(()=>{
        if(document.getElementById('input_'+item.name)){
          if(item.name == 'fullName'){
            $('.div-ticket-adddetail-content').addClass('cls-minheight-900');

            setTimeout(()=>{
              $('.div-ticket-adddetail-content').removeClass('cls-minheight-900');
            },5000)
          }
          document.getElementById('input_'+item.name).scrollIntoView({ behavior: 'smooth', block: 'center'  });
        }
        
      },100)
  }

  selectCusInfoDataRaw(item, _selectData){
      var se = this;
      se.zone.run(()=>{
        item[item.name] = item.name != 'meal' ? _selectData.name : _selectData.meal_type_name;
        item.showDataRaw = false;
        item.errorDataRaw = false;
        item.textErrorPassportCountry = "";
      })
    }

    changeContactApp(event, _cusGeneralInfo){
      
      if(event.detail.value && _cusGeneralInfo && _cusGeneralInfo.ref && _cusGeneralInfo.ref.length >0){
        this.zone.run(()=>{
          this.customGeneralInfoArr.forEach(elementGIA => {
            elementGIA.listCustom.forEach(elementItem => {
                if(elementItem && elementItem.allowInput != 'undefined'){
                  elementItem.allowInput = event.detail.value=="1" ? false : true;
                  //elementItem[elementItem.name] = event.detail.value=="1" ? false : true;
                }
                if(elementItem.name=='have_app'){
                  elementItem['have_app'] = event.detail.value=="1" ? false : true;
                }
            });
          });
        })
        
      }
    }

    onBlurCusInfoDataRaw(event, item) {
      setTimeout(()=>{
        item.showDataRaw = false;
      },100)
      
    }

    clickShowHours(item){
      item.showHours = !item.showHours;
    }
    clickShowMinutes(item){
      item.showMinutes = !item.showMinutes;
    }
    selectTime(type,value,item){
      if(type==1){
        this.hours = value;
        item.hours = value;
        item[item.name] = `${value}:${this.minutes}`;
        //this.kkdayResource.dataInput.traffic.flight.arrival_time = `${value}:${this.minutes}`;
      }else{
        this.minutes = value;
        item.minutes = value;
        item[item.name] = `${this.hours}:${value}`;
        //this.kkdayResource.dataInput.traffic.flight.arrival_time = `${this.hours}:${value}`;
      }
    }

    inputFocusCustom(event, item){
      setTimeout(()=>{
        if(document.getElementById('input_'+item.name)){
          document.getElementById('input_'+item.name).scrollIntoView({ behavior: 'smooth', block: 'center'  });
        }
        
      },100)
    }
}

