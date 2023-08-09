import { Bookcombo, SearchHotel, ValueGlobal } from '../../providers/book-service';

import { Booking } from '../../providers/book-service';
import { Component, NgZone, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, Platform, AlertController, ModalController } from '@ionic/angular';
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
  ngOnInit() {
    // this._voucherService.getTourObservable().subscribe((itemVoucher)=> {
    //   if(itemVoucher){
    //     if(itemVoucher.applyFor && itemVoucher.applyFor != 'tour'){
    //       this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
    //       this.gf.showAlertMessageOnly(`Mã voucher ${this.promocode} không áp dụng cho chương trình này. Quý khách vui lòng kiểm tra lại.`);
    //       return;
    //     }
    //     if(this.promocode && this.promocode != itemVoucher.code && !this.itemVoucherTour){
    //       this._voucherService.rollbackSelectedVoucher.emit(itemVoucher);
    //       this.gf.showAlertMessageOnly(`Mã voucher ${this.promocode} đang được sử dụng. Quý khách vui lòng kiểm tra lại.`);
    //       return;
    //     }
    //     if(itemVoucher.claimed){
    //       this.zone.run(()=>{
    //         this._voucherService.selectVoucher = itemVoucher;
    //         this.itemVoucherTour = itemVoucher;
    //         this.promocode = itemVoucher.code;
    //         this.discountpromo = itemVoucher.rewardsItem.price;
    //         this.ischeckpromo = true;
    //         this.tourService.promocode = itemVoucher.code;
    //         this.tourService.discountpromo = this.discountpromo;

    //       })
    //     }else{
    //       this.zone.run(()=>{
    //         this._voucherService.selectVoucher = null;
    //         this.itemVoucherTour = null;
    //         this.promocode = "";
    //         this.discountpromo = 0;
    //         this.ischeckpromo = false;
    //         this.tourService.promocode = "";
    //         this.tourService.discountpromo = 0;
    //         this.tourService.totalPriceBeforeDiscount = 0;
    //         this.tourService.discountPrice = null;

    //       })

    //     }
    //     this.edit(2);

    //     this.modalCtrl.dismiss();
    //     setTimeout(()=> {
    //       this.checkVoucherClaimed();
    //     },300)
    //   }
    // })

    // this._voucherService.getObservableClearVoucherAfterPaymentDone().subscribe((check)=> {
    //   if(check){
    //     this._voucherService.selectVoucher = null;
    //       this.itemVoucherTour = null;
    //       this.promocode = "";
    //       this.discountpromo = 0;
    //       this.tourService.usePointPrice = 0;
    //       //this.ischeckbtnpromo = false;
    //       //this.ischeckpromo = false;
    //       this.edit(2);
    //   }
    // })
  }
  constructor(public platform: Platform, public navCtrl: NavController, public zone: NgZone,
    private toastCtrl: ToastController, public Roomif: RoomInfo, public storage: Storage, public loadingCtrl: LoadingController,
    public booking: Booking, public gf: GlobalFunction, public bookCombo: Bookcombo, public httpClient: HttpClient,
    private alertCtrl: AlertController,
    public activityService: ActivityService,
    public searchhotel: SearchHotel,
    public tourService: tourService,
    public _voucherService: voucherService,
    private modalCtrl: ModalController,
    public ticketService: ticketService,public valueGlobal:ValueGlobal) {
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
    this.jsonroom = {...Roomif.jsonroom};
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
    var priceBooking: any = "";
    if (this.Roomif.priceshow) {
      priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
    } else if (this.booking.cost) {
      priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
    }

    this.GetUserInfo();
    //tour nước ngoài mặc định tích chọn xuất HD
    // if(!this.tourService.itemDetail.Inbound){
    //   this.ishide = true;
    //   this.ischeck = true;
    // }

    this.storage.get('jti').then(jti => {
      if (jti) {
        this.jti = jti;
        this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetListNameHotel?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListNameHotel').then((data) => {
          if (data && data.length > 0) {
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
                  se.hotenhddt=corpInfomations.fullName;
                  se.emailhddt=corpInfomations.email;
                  se.ishideNameMail=true;
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
                se.hoten=data.fullname;
                se.phone=data.phone;
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
    this.createObjectBooking().then((checkvalid)=>{
      if(checkvalid){
        this.CustomerSave();
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
    let isInvoice=0;
    if (this.ischeck) {
      isInvoice=1;
    }
    let objCustomer = {
      companyAddress: this.address,
      companyContactEmail: this.emailhddt,
      companyContactName: this.hotenhddt,
      companyName: this.companyname,
      companyTaxCode: this.tax,
      customerName: this.hoten,
      customerPhone: this.phone,
      isInvoice: isInvoice,
      leadingName:  this.hoten,
      leadingPhone: this.phone,
      memberId: "",
      paxList: "",
      tourNotes: this.note,
      username: ""
    }
    let headers =
    {
      'content-type': 'application/json'
    }
    this.gf.RequestApi('POST', C.urls.baseUrl.urlTicket + '/api/Booking/CustomerSave/' + this.ticketService.itemTicketService.objbooking.bookingCode, headers, objCustomer, 'ticketservice', 'RecheckRateBooking').then((data: any) => {
      if (data && data.success) {
        console.log(data);
        this.ticketService.totalPriceStr = this.totalPriceStr;
        this.navCtrl.navigateForward('/ticketpaymentselect');
      }else{
        alert(data.error);
      }
    });
  }

  createObjectBooking(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.Roomif.notetotal = "";
      this.gf.googleAnalytion('touradddetails', 'tour_payment_info', '');
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
      //validate mail
      // if (!this.validateEmail(this._email) || !this._email || !this.gf.checkUnicodeCharactor(this._email)) {
      //   this.presentToastEmail();
      //   this.validemail = false;
      //   resolve(false);
      //   return;

      // }
      // this.booking.CEmail = this._email;
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
      resolve(true);
    })

  }
  goToLogin(){
    this.storage.get('auth_token').then(auth_token => {
      if (!auth_token) {
        this.valueGlobal.backValue= "";
        this.valueGlobal.logingoback = 'ticketadddetails';
        this.navCtrl.navigateForward('/login');
      }
    });
  }
}

