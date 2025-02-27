import {RoomInfo, Booking, Bookcombo} from '../providers/book-service';
import {Component, NgZone, OnInit} from '@angular/core';
import {
    NavController,
    ToastController,
    LoadingController,
    Platform,
    AlertController,
    ModalController
} from '@ionic/angular';
import {Storage} from '@ionic/storage';
import {C} from '../providers/constants';
import * as request from 'requestretry';
import {GlobalFunction, ActivityService} from '../providers/globalfunction';
import jwt_decode from 'jwt-decode';
import {ConfirmemailPage} from '../confirmemail/confirmemail.page';
import {OverlayEventDetail} from '@ionic/core';
import * as moment from "moment";
/**
 * Generated class for the RoomadddetailsEanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({selector: 'app-roomadddetails-ean', templateUrl: 'roomadddetails-ean.html', styleUrls: ['roomadddetails-ean.scss']})
export class RoomadddetailsEanPage implements OnInit {
    hoten;
    phone = "";
    note;
    arr = [];
    roomnumber;
    room;
    arr1 = [];
    BedType;
    priceshow;
    ischeckpoint;
    arrpush = [];
    ishide = false;
    companyname;
    address;
    tax;
    addressorder;
    bed;
    bedchuoi;
    arrbed = [];
    _email : any;
    validemail : boolean = true;
    auth_token : any;
    jti : any;;
    ischeck = false;
    timestamp;
    paymentMethod;
    jsonroom;
    ischeckbtn;
    textbed;
    ischeckpayment;
    public loader : any ;
    checkchangeemail = false;
    hotenhddt;
    emailhddt;
    ishideNameMail = true;
    showInstallmentButton : boolean = false;
    installmentPriceStr : any;
    inputtext : boolean = false;
    listPaxSuggestByMemberId = [];
    listpaxhint : any = [];
    hidepaxhint : boolean = false;
    currentSelectPax : any;

    constructor(public platform : Platform, public navCtrl : NavController, public Roomif : RoomInfo, private toastCtrl : ToastController, public booking : Booking, public bookcombo : Bookcombo, public zone : NgZone, public storage : Storage, public loadingCtrl : LoadingController, public gf : GlobalFunction, public alertCtrl : AlertController, private modalCtrl : ModalController, public activityService : ActivityService) {
        this.ischeckpayment = Roomif.ischeckpayment;
        this.roomnumber = Roomif.roomnumber;
        this.note = Roomif.notetotal;
        this.room = this.Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.ischeckpoint = this.Roomif.ischeckpoint;
        this.storage.get('email').then(email => {
            if (email) {
                this._email = email;
                // this._email = 'abc@vivumember.info';
                var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                if (checkappleemail) {
                    this.validemail = false;
                }
            } else {
                this.validemail = false;
            }

        })
        if (this.ischeckpoint == true || this.Roomif.promocode) {
            if (this.Roomif.priceshow == "0") {
                this.priceshow = this.Roomif.priceshow;
            } else {
                this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
            }

        } else {
            this.ischeckbtn = true;
        }
        if (this.Roomif.arrrbed && this.Roomif.arrrbed.length > 1) { // this.arrbed = this.Roomif.arrrbed;
            this.BedType = this.Roomif.arrrbed[0];
        } else if (this.Roomif.arrrbed && this.Roomif.arrrbed.length == 1) {
            this.BedType = this.Roomif.arrrbed[0];
            this.textbed = this.Roomif.arrrbed[0];
            this.textbed = this.textbed.description;
        }

        // if (Roomif.ischeck) {
        // this.ischeck = Roomif.ischeck;
        // }
        this.storage.get('infocus').then(infocus => {
            this.arrbed = [];
            this.bed = this.Roomif.arrrbed;
            if (this.roomnumber > 1) {
                var item1;
                if (infocus) {
                    for (let i = 0; i < this.roomnumber; i++) {
                        let number = i + 1;
                        if (i == 0) {
                            if (infocus.ho && infocus.ten) {
                                item1 = {
                                    text: "Khách nhận phòng " + number + "",
                                    hoten: infocus.ho + ' ' + infocus.ten,
                                    arrbed: this.arrbed,
                                    phone: infocus.phone
                                }
                            } else {
                                if (infocus.ho) {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: infocus.ho,
                                        arrbed: this.arrbed,
                                        phone: infocus.phone
                                    }
                                } else if (infocus.ten) {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: infocus.ten,
                                        arrbed: this.arrbed,
                                        phone: infocus.phone
                                    }
                                } else {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: "",
                                        arrbed: this.arrbed,
                                        phone: infocus.phone ? infocus.phone : ""
                                    }
                                }
                            }

                        } else {
                            item1 = {
                                text: "Khách nhận phòng " + number + "",
                                hoten: "",
                                arrbed: this.arrbed,
                                phone: ""
                            }
                        }
                        this.arr.push(item1);
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[i] = this.bed[0];
                        }
                    }
                } else {
                    for (let i = 0; i < this.roomnumber; i++) {
                        let number = i + 1;
                        item1 = {
                            text: "Khách nhận phòng " + number + "",
                            fristname: "",
                            lastname: "",
                            arrbed: this.arrbed,
                            phone: ""
                        }
                        this.arr.push(item1);
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[i] = this.bed[0];
                        }

                    }
                }
                if (this.bed) {
                    if (this.bed.length > 1) {
                        for (let i = 0; i < this.bed.length; i++) {
                            var item;
                            if (i == 0) {
                                item = {
                                    text: this.bed[i],
                                    ischeck: true
                                };
                                this.bedchuoi = this.bed[i];
                            } else {
                                item = {
                                    text: this.bed[i],
                                    ischeck: false
                                }
                            }
                            this.arrbed.push(item);
                        }
                    }
                }
            } else {
                if (infocus) {
                    if (infocus.ho && infocus.ten) {
                        this.hoten = infocus.ho + ' ' + infocus.ten;
                    } else {
                        if (infocus.ho) {
                            this.hoten = infocus.ho;
                        } else if (infocus.ten) {
                            this.hoten = infocus.ten;
                        }
                    }
                    this.phone = infocus.phone;
                }
                this.room = this.Roomif.arrroom;
                if (this.Roomif.arrrbed && this.Roomif.arrrbed.length > 1) {
                    this.bed = this.Roomif.arrrbed
                    for (let i = 0; i < this.bed.length; i++) {
                        var item;
                        if (i == 0) {
                            item = {
                                text: this.bed[i],
                                ischeck: true
                            };
                            this.bedchuoi = this.bed[i];
                        } else {
                            item = {
                                text: this.bed[i],
                                ischeck: false
                            }
                        }
                        this.arrbed.push(item);
                    }
                    if (this.bed && this.bed.length > 0) {
                        this.arrpush[0] = this.bed[0];
                    }

                } else {
                    this.bed = this.Roomif.arrrbed;
                    if (this.bed) {
                        if (this.bed.length > 1) {
                            for (let i = 0; i < this.bed.length; i++) {
                                var item;
                                if (i == 0) {
                                    item = {
                                        text: this.bed[i],
                                        ischeck: true
                                    };
                                    this.bedchuoi = this.bed[i];
                                } else {
                                    item = {
                                        text: this.bed[i],
                                        ischeck: false
                                    }
                                }
                                this.arrbed.push(item);
                            }
                        }
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[0] = this.bed[0];
                        }
                    }
                }
            }

        })

        var priceBooking: any = "";
        if (this.Roomif.priceshow) {
            priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
        } else if (this.booking.cost) {
            priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
        }
        this.jsonroom.RoomClasses = this.room;
        let mealtype = this.jsonroom.RoomClasses[0].MealTypeRates[this.booking.indexmealtype];

        this.showInstallmentButton = (priceBooking * 1 >= 3000000 && this.Roomif.payment == 'AL' && (mealtype && mealtype.Supplier == "VINPEARL" || mealtype.Supplier == "SMD" || mealtype.Supplier == 'SERI')) ? true : false;
        this.getInstallment(priceBooking * 1);
        this.zone.run(() => {
            let priceinstallment = Math.round(priceBooking * 1 / 12 * 1.05);
            this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
        })
        this.GetUserInfo();
        // google analytic
        this.gf.googleAnalytion('roomadddetails-ean', 'add_payment_info', '');

        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.gf.RequestApi('GET', C.urls.baseUrl.urlMobile + '/api/Dashboard/GetListNameHotel?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListName').then((data) => {
                    if (data && data.length > 0) {
                        this.listPaxSuggestByMemberId = [...data];
                    }
                })
            }
        })
    }
    getInstallment(price) {
        var se = this;
        var options = {
            method: 'GET',
            url: C.urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
            qs: {
                amount: price.toString()
            },
            headers: {}
        };

        request(options, function (error, response, body) {
            var rs = JSON.parse(body);
            se.activityService.objBankInStallment = rs;
        });
    }
    ngOnInit() {}
    ionViewWillEnter() { // this.GetUserInfo();
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
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
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
                                var corpInfomations = data.corpInfomations[0];
                                if (corpInfomations) {
                                    se.companyname = corpInfomations.legalName;
                                    se.address = corpInfomations.address;
                                    se.tax = corpInfomations.taxCode;
                                    // se.addressorder = corpInfomations.addressorder;
                                    // se.hotenhddt=corpInfomations.hotenhddt;
                                    // se.emailhddt=corpInfomations.emailhddt;
                                    // se.ishideNameMail=corpInfomations.ishideNameMail;
                                    se.ishide = true;
                                    se.ischeck = true;
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
                                            se.ishide = true;
                                            se.ischeck = true;
                                        }
                                    })
                                }
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
                                    se.ishide = true;
                                    se.ischeck = true;
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
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    next(value) {
        this.checkchangeemail = false;
        this.Roomif.notetotal = "";
        if (this.roomnumber == 1) {
            if (this.hoten) {
                this.hoten = this.hoten.trim();
                var checktext = this.hasWhiteSpace(this.hoten);
                if (! checktext) {
                    this.presentToastName();
                    return;
                }
            } else {
                this.presentToastName();
                return;
            }
            if (this.ischeck) {
                if (this.hoten) {
                    this.hoten = this.hoten.trim();
                    var checktext = this.hasWhiteSpace(this.hoten);
                    if (! checktext) {
                        this.presentToastName();
                        return;
                    }
                    if (this.phonenumber(this.phone)) { // validate mail
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        } else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(0, value);
                            }
                        }
                        if (this.companyname && this.address && this.tax) {
                            this.companyname = this.companyname.trim();
                            this.address = this.address.trim();
                            this.tax = this.tax.trim();
                        } else {
                            this.presentToastOrder();
                            return;
                        }
                        if (this.companyname && this.address && this.tax) {
                            this.Roomif.hoten = this.hoten;
                            // this.Roomif.ten = this.ten;
                            this.Roomif.notetotal = this.note;
                            this.Roomif.phone = this.phone;
                            // var info = { ho: this.ho, ten: this.ten, phone: this.phone }
                            // this.storage.set("infocus", info);
                            var texthoten = this.hoten.split(' ');
                            var item1;
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    } else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (this.hoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (this.hoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            }
                            this.arr1 = [];
                            this.arr1.push(item1);
                            this.Roomif.arrcustomer = this.arr1;
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
                                        return;
                                    } else {
                                        this.Roomif.addressorder = this.emailhddt;
                                        this.Roomif.nameOrder = this.hotenhddt;
                                    }

                                } else {
                                    this.presentToastOrder();
                                    return;
                                }
                            }
                            var order1 = {
                                companyname: this.companyname,
                                address: this.address,
                                tax: this.tax,
                                addressorder: this.addressorder,
                                ishideNameMail: this.ishideNameMail,
                                hotenhddt: this.hotenhddt,
                                emailhddt: this.emailhddt
                            }
                            this.storage.set("order", order1);
                            this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                            this.storage.set("email", this._email);
                            this.booking.CEmail = this._email;
                            if (!this.checkchangeemail) {
                                if (this.Roomif.payment == 'true') {
                                    this.paymentnotAL();
                                } else {
                                    if (value == 0) {
                                      if(this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED'){
                                        if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                          this.checkhbed(this.Roomif.roomtype);
                                        } else {
                                          if (this.Roomif.roomtype.Penaltys.length == 0) {
                                            this.checkhbed(this.Roomif.roomtype);
                                          }else {
                                            this.navCtrl.navigateForward("roompaymentselect-ean");
                                          }
                                        }
                                      }else{
                                        this.navCtrl.navigateForward("roompaymentselect-ean");
                                      }
                                    } else {
                                        this.installment();
                                    }
                                }
                            }
                        } else {
                            this.presentToastOrder();
                        }
                    } else {
                        this.presentToastPhone();
                    }
                } else {
                    this.presentToastName();
                }

            } else {
                if (this.hoten) {
                    this.hoten = this.hoten.trim();
                    var checktext = this.hasWhiteSpace(this.hoten);
                    if (! checktext) {
                        this.presentToastName();
                        return;
                    }
                    if (this.phonenumber(this.phone)) { // validate mail
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        } else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(0, value);
                            }
                        }
                        this.booking.CEmail = this._email;
                        this.Roomif.hoten = this.hoten;
                        this.Roomif.phone = this.phone;
                        this.Roomif.notetotal = this.note;
                        // var info = { ho: this.ho, ten: this.ten, phone: this.phone }
                        // this.storage.set("infocus", info);
                        var texthoten = this.hoten.split(' ');
                        if (texthoten.length > 2) {
                            let name = '';
                            for (let j = 1; j < texthoten.length; j++) {
                                if (j == 1) {
                                    name += texthoten[j];
                                } else {
                                    name += ' ' + texthoten[j];
                                }
                            }
                            item1 = {
                                Title: "MR",
                                FirstName: name,
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        } else if (texthoten.length > 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: texthoten[1],
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        } else if (texthoten.length == 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: "",
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        }

                        this.arr1 = [];
                        this.arr1.push(item1);
                        this.Roomif.arrcustomer = this.arr1;
                        this.storage.set("email", this._email);
                        this.booking.CEmail = this._email;
                        if (!this.checkchangeemail) {
                            if (this.Roomif.payment == 'true') {
                                this.paymentnotAL();
                            } else {
                                if (value == 0) {
                                  if(this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED'){
                                    if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                      this.checkhbed(this.Roomif.roomtype);
                                    } else {
                                      if (this.Roomif.roomtype.Penaltys.length == 0) {
                                        this.checkhbed(this.Roomif.roomtype);
                                      }else{
                                        this.navCtrl.navigateForward("roompaymentselect-ean");
                                      }
                                    }
                                  }else{
                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                  }
                                } else {
                                    this.installment();
                                }
                            }
                        }
                    } else {
                        this.presentToastPhone();
                    }
                } else {
                    this.presentToastName();
                }
            }

        } else {
            if (this.ischeck) {
                if (this.companyname && this.address && this.tax) {
                    this.companyname = this.companyname.trim();
                    this.address = this.address.trim();
                    this.tax = this.tax.trim();
                } else {
                    this.presentToastOrder();
                    return;
                }
                if (this.companyname && this.address && this.tax) {
                    this.Roomif.companyname = this.companyname;
                    this.Roomif.address = this.address;
                    this.Roomif.tax = this.tax;
                    this.Roomif.notetotal = this.note;
                    this.Roomif.addressorder = this.addressorder;
                    this.Roomif.addressorder = this._email;
                    this.Roomif.nameOrder = this.hoten;

                    if (!this.ishideNameMail) {
                        if (this.emailhddt && this.hotenhddt) {
                            if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                                this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                return;
                            } else {
                                this.Roomif.addressorder = this.emailhddt;
                                this.Roomif.nameOrder = this.hotenhddt;
                            }
                        } else {
                            this.presentToastOrder();
                            return;
                        }
                    }

                    var order1 = {
                        companyname: this.companyname,
                        address: this.address,
                        tax: this.tax,
                        addressorder: this.addressorder,
                        ishideNameMail: this.ishideNameMail,
                        hotenhddt: this.hotenhddt,
                        emailhddt: this.emailhddt
                    }
                    this.storage.set("order", order1);
                    this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder
                    this.pushdata1(value);
                } else {
                    this.presentToastOrder();
                }
            } else {
                this.pushdata1(value);
            }
        }
    }
    pushdata1(value) {
        var item1;
        var co = 0;
        for (let i = 0; i < this.arr.length; i++) {
            if(this.arr[i].hoten){
                this.arr[i].hoten = this.arr[i].hoten.trim();
            }else{
                this.presentToastName();
                return;
            }
            

            if (i == 0) {
                if (this.arr[i].hoten) {
                    var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                    if (! checktext) {
                        co = 1;
                        break;
                    }
                } else {
                    co = 1;
                    break;
                }
                if (!this.arr[i].phone) {
                    co = 2;
                    break;
                }
            } else {
                if (this.arr[i].hoten) {
                    var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                    if (! checktext) {
                        co = 1;
                        break;
                    }
                } else {
                    co = 1;
                    break;
                }
            }
        }

        if (co == 0) { // validate mail
            if (!this.validateEmail(this._email) || !this._email) {
                this.presentToastEmail();
                this.validemail = false;
                return;
            } else if (this._email) {
                var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                if (checkappleemail) {
                    this.checkchangeemail = true;
                    this.showConfirmEmail(0, value);
                }
            }
            this.arr1 = [];
            // console.log(this.arr);
            if (this.arrbed.length > 1) {
                for (let i = 0; i < this.arr.length; i++) {
                    var texthoten = this.arr[i].hoten.split(' ');
                    if (texthoten.length > 2) {
                        let name = '';
                        for (let j = 1; j < texthoten.length; j++) {
                            if (j == 1) {
                                name += texthoten[j];
                            } else {
                                name += ' ' + texthoten[j];
                            }
                        }
                        item1 = {
                            Title: "MR",
                            FirstName: name,
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        }
                    } else if (texthoten.length > 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: texthoten[1],
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        }
                    } else if (texthoten.length == 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: "",
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        }
                    }
                    this.arr1.push(item1);
                }
            } else {
                for (let i = 0; i < this.arr.length; i++) {
                    var texthoten = this.arr[i].hoten.split(' ');
                    if (texthoten.length > 2) {
                        let name = '';
                        for (let j = 1; j < texthoten.length; j++) {
                            if (j == 1) {
                                name += texthoten[j];
                            } else {
                                name += ' ' + texthoten[j];
                            }
                        }
                        item1 = {
                            Title: "MR",
                            FirstName: name,
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        }
                    } else if (texthoten.length > 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: texthoten[1],
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        }
                    } else if (texthoten.length == 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: "",
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        }
                    }
                    this.arr1.push(item1);
                    // item1 = { Title: "MR", FirstName: this.arr[i].fristname, LastName: this.arr[i].lastname, Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType }
                    // this.arr1.push(item1);
                }

            }

            this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
            this.Roomif.phone = this.arr1[0].Phone;
            // var info = { ho: this.arr1[0].LastName, ten: this.arr1[0].FirstName, phone: this.arr1[0].Phone }
            // this.storage.set("infocus", info);
            this.Roomif.arrcustomer = this.arr1;
            this.Roomif.notetotal = this.note;
            this.storage.set("email", this._email);
            this.booking.CEmail = this._email;
            if (!this.checkchangeemail) {
                if (this.Roomif.payment == 'true') {
                    this.paymentnotAL();
                } else {
                    if (value == 0) {
                      if(this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED'){
                        if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                          this.checkhbed(this.Roomif.roomtype);
                        } else {
                          if (this.Roomif.roomtype.Penaltys.length == 0) {
                            this.checkhbed(this.Roomif.roomtype);
                          }else{
                            this.navCtrl.navigateForward("roompaymentselect-ean");
                          }
                        }
                      }else{
                        this.navCtrl.navigateForward("roompaymentselect-ean");
                      }
                    } else {
                        this.installment();
                    }
                }
            }
        } else {
            if (co == 1) {
                this.presentToastName();
            } else if (co == 2) {
                this.presentToastPhone();
            }
        }
    }
    next1() {
        this.Roomif.notetotal = "";
        if (this.roomnumber == 1) {
            if (this.hoten) {
                this.hoten = this.hoten.trim();
                var checktext = this.hasWhiteSpace(this.hoten);
                if (! checktext) {
                    this.presentToastName();
                    return;
                }
            } else {
                this.presentToastName();
                return;
            }
            if (this.ischeck) {
                if (this.hoten) {
                    if (this.phonenumber(this.phone)) {
                        if (this.companyname && this.address && this.tax) {
                            this.companyname = this.companyname.trim();
                            this.address = this.address.trim();
                            this.tax = this.tax.trim();
                        } else {
                            this.presentToastOrder();
                            return;
                        }

                        // validate mail
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        } else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }

                        if (this.companyname && this.address && this.tax) {
                            this.Roomif.hoten = this.hoten;
                            // this.Roomif.ten = this.ten;
                            this.Roomif.phone = this.phone;
                            // var info = { ho:  this.ho, ten:  this.ten, phone:  this.phone }
                            // this.storage.set("infocus", info);
                            var texthoten = this.hoten.split(' ');
                            var item1;
                            if (this.hoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    } else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            }
                            this.arr1 = [];
                            this.arr1.push(item1);
                            this.Roomif.arrcustomer = this.arr1;
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
                                        return;
                                    } else {
                                        this.Roomif.addressorder = this.emailhddt;
                                        this.Roomif.nameOrder = this.hotenhddt;
                                    }
                                } else {
                                    this.presentToastOrder();
                                    return;
                                }
                            }

                            var order1 = {
                                companyname: this.companyname,
                                address: this.address,
                                tax: this.tax,
                                addressorder: this.addressorder,
                                ishideNameMail: this.ishideNameMail,
                                hotenhddt: this.hotenhddt,
                                emailhddt: this.emailhddt
                            }
                            this.storage.set("order", order1);
                            this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                            this.pushdata();
                        } else {
                            this.presentToastOrder();
                        }
                    } else {
                        this.presentToastPhone();
                    }
                } else {
                    this.presentToastName();
                }

            } else {
                if (this.hoten) {
                    if (this.phonenumber(this.phone)) { // validate mail
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        } else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }
                        this.Roomif.hoten = this.hoten;
                        this.Roomif.phone = this.phone;
                        // var info = { ho: this.ho, ten: this.ten, phone: this.phone }
                        // this.storage.set("infocus", info);
                        var texthoten = this.hoten.split(' ');
                        var item1;
                        if (this.hoten.length > 2) {
                            let name = '';
                            for (let j = 1; j < texthoten.length; j++) {
                                if (j == 1) {
                                    name += texthoten[j];
                                } else {
                                    name += ' ' + texthoten[j];
                                }
                            }
                            item1 = {
                                Title: "MR",
                                FirstName: name,
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        } else if (texthoten.length > 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: texthoten[1],
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        } else if (texthoten.length == 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: "",
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            }
                        }
                        this.arr1 = [];
                        this.arr1.push(item1);
                        this.Roomif.arrcustomer = this.arr1;

                        this.pushdata();
                    } else {
                        this.presentToastPhone();
                    }
                } else {
                    this.presentToastName();
                }
            }

        } else {
            if (this.ischeck) {
                if (this.companyname && this.address && this.tax) {
                    this.companyname = this.companyname.trim();
                    this.address = this.address.trim();
                    this.tax = this.tax.trim();
                } else {
                    this.presentToastOrder();
                    return;
                }
                if (this.companyname && this.address && this.tax) {
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
                                return;
                            } else {
                                this.Roomif.addressorder = this.emailhddt;
                                this.Roomif.nameOrder = this.hotenhddt;
                            }
                        } else {
                            this.presentToastOrder();
                            return;
                        }
                    }
                    var order1 = {
                        companyname: this.companyname,
                        address: this.address,
                        tax: this.tax,
                        addressorder: this.addressorder,
                        ishideNameMail: this.ishideNameMail,
                        hotenhddt: this.hotenhddt,
                        emailhddt: this.emailhddt
                    }
                    this.storage.set("order", order1);
                    this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;

                    var co = 0;
                    for (let i = 0; i < this.arr.length; i++) {
                        this.arr[i].hoten = this.arr[i].hoten.trim();
                        if (i == 0) {
                            if (this.arr[i].hoten) {
                                var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                                if (! checktext) {
                                    co = 1;
                                    break;
                                }
                            } else {
                                co = 1;
                                break;
                            }
                            if (!this.arr[i].phone) {
                                co = 2;
                                break;
                            }
                        } else {
                            if (!this.arr[i].hoten) {
                                var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                                if (! checktext) {
                                    co = 1;
                                    break;
                                }
                            }
                        }
                    }
                    if (co == 0) {
                        this.arr1 = [];
                        // console.log(this.arr);
                        if (this.arrbed.length > 1) {
                            for (let i = 0; i < this.arr.length; i++) {
                                var texthoten = this.arr[i].hoten.split(' ');
                                if (texthoten.length > 2) {
                                    let name = '';
                                    for (let j = 1; j < texthoten.length; j++) {
                                        if (j == 1) {
                                            name += texthoten[j];
                                        } else {
                                            name += ' ' + texthoten[j];
                                        }
                                    }
                                    item1 = {
                                        Title: "MR",
                                        FirstName: name,
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    }
                                } else if (texthoten.length > 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: texthoten[1],
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    }
                                } else if (texthoten.length == 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: "",
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    }
                                }
                                this.arr1.push(item1);
                            }
                        } else {
                            for (let i = 0; i < this.arr.length; i++) {
                                var texthoten = this.arr[i].hoten.split(' ');
                                if (texthoten > 2) {
                                    let name = '';
                                    for (let j = 1; j < texthoten.length; j++) {
                                        if (j == 1) {
                                            name += texthoten[j];
                                        } else {
                                            name += ' ' + texthoten[j];
                                        }
                                    }
                                    item1 = {
                                        Title: "MR",
                                        FirstName: name,
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    }
                                } else if (texthoten.length > 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: texthoten[1],
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    }
                                } else if (texthoten.length == 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: "",
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    }
                                }
                                this.arr1.push(item1);
                                // item1 = { Title: "MR", FirstName: this.arr[i].fristname, LastName: this.arr[i].lastname, Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType }
                                // this.arr1.push(item1);
                            }

                        }

                        this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
                        this.Roomif.phone = this.arr1[0].Phone;
                        // info = { ho: this.arr1[0].LastName, ten: this.arr1[0].FirstName, phone: this.arr1[0].Phone }
                        // this.storage.set("infocus", info);
                        this.Roomif.arrcustomer = this.arr1;
                        this.Roomif.notetotal = this.note;
                        // validate mail
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        } else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }

                        this.pushdata();
                    } else {
                        if (co == 1) {
                            this.presentToastName();
                        } else if (co == 2) {
                            this.presentToastPhone();
                        }
                    }
                } else {
                    this.presentToastOrder();
                }
            } else {
                var co = 0;
                for (let i = 0; i < this.arr.length; i++) {
                    this.arr[i].hoten = this.arr[i].hoten.trim();
                    if (i == 0) {
                        if (this.arr[i].hoten) {
                            var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                            if (! checktext) {
                                co = 1;
                                break;
                            }
                        } else {
                            co = 1;
                            break;
                        }
                        if (!this.arr[i].phone) {
                            co = 2;
                            break;
                        }
                    } else {
                        if (this.arr[i].hoten) {
                            var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                            if (! checktext) {
                                co = 1;
                                break;
                            }
                        } else {
                            co = 1;
                            break;
                        }
                    }
                }
                if (co == 0) {
                    this.arr1 = [];
                    // console.log(this.arr);
                    if (this.arrbed.length > 1) {
                        for (let i = 0; i < this.arr.length; i++) {
                            var texthoten = this.arr[i].hoten.split(' ');
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    } else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                }
                            } else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                }
                            } else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                }
                            }
                            this.arr1.push(item1);
                        }
                    } else {
                        for (let i = 0; i < this.arr.length; i++) {
                            var texthoten = this.arr[i].hoten.split(' ');
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    } else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            } else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                }
                            }
                            this.arr1.push(item1);
                            // item1 = { Title: "MR", FirstName: this.arr[i].fristname, LastName: this.arr[i].lastname, Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType }
                            // this.arr1.push(item1);
                        }

                    }

                    this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
                    this.Roomif.phone = this.arr1[0].Phone;
                    // info = { ho: this.arr1[0].LastName, ten: this.arr1[0].FirstName, phone: this.arr1[0].Phone }
                    // this.storage.set("infocus", info);
                    this.Roomif.arrcustomer = this.arr1;
                    this.Roomif.notetotal = this.note;
                    // validate mail
                    if (!this.validateEmail(this._email) || !this._email) {
                        this.presentToastEmail();
                        this.validemail = false;
                        return;
                    } else if (this._email) {
                        var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                        if (checkappleemail) {
                            this.checkchangeemail = true;
                            this.showConfirmEmail(1, 0);
                        }
                    }

                    this.pushdata();
                } else {
                    this.presentToastName();
                }
            }
        }
    }
    async presentToast() {
        let toast = await this.toastCtrl.create({message: "Xin vui lòng nhập họ tên", duration: 3000, position: 'top'});
        toast.present();
    }
    async presentToastOrder() {
        let toast = await this.toastCtrl.create({message: "Xin vui lòng nhập thông tin xuất hóa đơn", duration: 3000, position: 'top'});
        toast.present();
    }
    async presentToastName() {
        let toast = await this.toastCtrl.create({message: "Xin vui lòng nhập đầy đủ họ tên", duration: 3000, position: 'top'});
        toast.present();
    }
    async presentToastPhone() {
        let toast = await this.toastCtrl.create({message: "Xin vui lòng nhập số điện thoại", duration: 3000, position: 'top'});

        toast.present();
    }
    pushdata() {
        if (this.checkchangeemail) {
            return;
        }
        if(this.Roomif.roomtype.Supplier == 'SERI'){
            //Check allotment trước khi book
              this.gf.checkAllotmentSeri(
              this.booking.HotelId,
              this.Roomif.RoomId,
              this.booking.CheckInDate,
              this.booking.CheckOutDate,
              this.Roomif.roomnumber,
              'SERI', this.Roomif.roomtype.HotelCheckDetailTokenInternal
              ).then((allow)=> {
                if(allow){
                 this.continueBook();
                }else{
                  if (this.loader) {
                    this.loader.dismiss();
                  }
                  this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
              })
          }else{
           this.continueBook();
          }
    }

    continueBook() {
        this.presentLoading();
        var se = this;
        this.jsonroom.RoomClasses = this.room;
        this.timestamp = Date.now();
        // this.storage.get('auth_token').then(auth_token => {
        var Invoice = 0;
        if (se.Roomif.order) {
            Invoice = 1;
        }
        var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlPost + '/mInsertBooking',
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                CName: se.Roomif.hoten.trim(),
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
                promotionCode: se.Roomif.promocode,
                comboid: se.bookcombo.ComboId,
                PenaltyDescription: se.Roomif.textcancel
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
                C.writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomadddetails";
                error.func = "next";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error, response);
            };
            if (body) {
                if (body.error == 0) {
                   
                    var id = body.code;
                    var total = se.Roomif.pricepoint.toString().replace(/\./g, '').replace(/\,/g, '');
                    var ischeck = '1';
                    let mealtype = se.jsonroom.RoomClasses[0].MealTypeRates[se.booking.indexmealtype];
                    // PDANH 22/03/2021 - Case cấn trừ điểm của VIN gọi thêm hàn build link để đẩy xuống backend luồng VIN
                    // if(mealtype && (mealtype.Supplier == "VINPEARL" || mealtype.Supplier == "SMD")){
                    let url = C.urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + total + '&orderCode=' + body.code + '&buyerPhone=' + se.Roomif.phone + '&memberId=' + se.jti;
                    se.gf.CreateUrl(url);
                    // }
                    se.clearClonePage('page-roompaymentdoneean');
                    se.loader.dismiss();
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
                } else {
                    se.loader.dismiss();
                    //alert(body.Msg);
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
            } else {
                error.page = "roomadddetails-ean";
                error.func = "pushdata";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }

        });
    }
    async presentToasterror() {
        let toast = await this.toastCtrl.create({message: "Số điểm không đủ để tạo booking", duration: 3000, position: 'top'});
        toast.present();
    }
    clearClonePage(pagename) { // Xóa clone do push page
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
    // async presentToastPhone() {
    // let toast = await this.toastCtrl.create({
    //     message: "Xin vui lòng nhập số điện thoại",
    //     duration: 3000,
    //     position: 'top'
    // });

    // toast.present();
    // }
    // async presentToastName() {
    // let toast = await this.toastCtrl.create({
    //     message: "Xin vui lòng nhập đầy đủ thông tin",
    //     duration: 3000,
    //     position: 'top'
    // });
    // toast.present();
    // }
    itemrd(item, itemindex) {
        if (this.arr.length == 0) {
            this.BedType = item;
        } else {
            this.zone.run(() => {
                this.arrpush[itemindex] = item;
                // if (this.arrpush) {
                // for (let i = 0; i < this.arrpush.length; i++) {


                // }
                // }
                // for (let i = 0; i < this.arr[itemindex].arrbed.length; i++) {
                // if (this.arr[itemindex].arrbed[i].text.description == event.detail.value) {
                //     this.arr[itemindex].arrbed[i] =  event.detail;
                // }
                // else {
                //     this.arr[itemindex].arrbed[i].ischeck = false;
                // }
                // }

            })
        }

    }
    edit(co) {
        this.zone.run(() => {
            if (co == 0) {
                if (this.ischeck) {
                    this.ishide = false;
                } else {
                    this.ishide = true;
                }
            } else {
                this.ishide = false;
                this.ischeck = true;
            }
        })

    }
    async presentLoading() {
        this.loader = await this.loadingCtrl.create({});
        this.loader.present();
    }
    // closeLoading() { this.loader.dismiss(); }
    // async presentToast() {
    // let toast =await this.toastCtrl.create({
    //     message: "Xin vui lòng nhập họ tên",
    //     duration: 3000,
    //     position: 'top'
    // });
    // toast.present();
    // }
    // async presentToastOrder() {
    // let toast =await this.toastCtrl.create({
    //     message: "Xin vui lòng nhập thông tin xuất hóa đơn",
    //     duration: 3000,
    //     position: 'top'
    // });
    // toast.present();
    // }
    phonenumber(inputtxt) {
        if (inputtxt) {
            var n = Number(inputtxt);
            if (n) {
                var test1 = inputtxt.length;
                if (inputtxt) {
                    if (test1 == 10) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: C.urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                }
                request(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning"
                        };
                        C.writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        C.writeErrorLog(error, response);
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
    goback() {
        this.navCtrl.navigateBack('roomdetailreview');
    }
    paymentnotAL() {
        this.presentLoading();
        var se = this;
        // var arrMealTypeRates = [];
        // var room1 = [];
        // arrMealTypeRates.push(this.room[0].MealTypeRates[this.booking.indexmealtype]);
        // var itemroom1 = {
        // Penalty_Type: this.room[0].Rooms[0].Penalty_Type, RoomID: this.room[0].Rooms[0].RoomID, RoomPriceBreak: this.room[0].Rooms[0].RoomPriceBreak,
        // SupplierRef: this.room[0].Rooms[0].SupplierRef, SalesTax: this.room[0].Rooms[0].SalesTax
        // }
        // room1.push(itemroom1);
        // this.jsonroom.RoomClasses = this.room;
        // this.jsonroom.RoomClasses[0].MealTypeRates = arrMealTypeRates;
        // this.jsonroom.RoomClasses[0].Rooms = room1;
        // this.jsonroom.RoomClassesHidden = [];
        // this.booking.Hotels = this.jsonroom
        se.jsonroom.RoomClasses = se.room;
        se.timestamp = Date.now();

        var Invoice = 0;
        if (se.Roomif.order) {
            Invoice = 1;
        }
        var options = {
            method: 'POST',
            url: C.urls.baseUrl.urlPost + '/mInsertBooking',
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                CName: se.Roomif.hoten.trim(),
                CEmail: se.booking.CEmail,
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
                promotionCode: se.Roomif.promocode,
                comboid: se.bookcombo.ComboId,
                PenaltyDescription: se.Roomif.textcancel
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
                C.writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomadddetails";
                error.func = "next";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error, response);
            };
            if (body) {
                if (body.error == 0) { // console.log(body.code);
                    var code = body.code;
                    var stt = body.bookingStatus;
                    se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + stt);
                    se.loader.dismiss();
                    // se.gf.googleAnalytion('paymentdirect', 'Purchases', 'hotelid:' + se.booking.cost + '/cin:' + se.jsonroom.CheckInDate + '/cout:' + se.jsonroom.CheckOutDate + '/adults:' + se.booking.Adults + '/child:' + se.booking.Child + '/price:' + se.booking.cost)
                } else {
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
            } else {
                error.page = "roomadddetails-ean";
                error.func = "paymentnotAL";
                error.param = JSON.stringify(options);
                C.writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }

        });


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
        let toast = await this.toastCtrl.create({message: "Thông tin email không hợp lệ. Vui lòng nhập lại.", duration: 3000, position: 'top'});
        toast.present();
    }
    public async showConfirmEmail(input, value) {
        let alert = await this.alertCtrl.create({
            message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
            cssClass: "cls-alert-showmore",
            buttons: [
                {
                    text: 'Đổi email',
                    role: 'OK',
                    handler: () => {
                        this.showChangeEmail(input, value);
                    }
                }

            ]
        });
        alert.present();
    }

    async showChangeEmail(type, value) {
        var se = this;
        const modal: HTMLIonModalElement = await se.modalCtrl.create({
            component: ConfirmemailPage,
            componentProps: {
                aParameter: true
            }
        });
        modal.present();

        modal.onDidDismiss().then((data : OverlayEventDetail) => {
            if (data && data.data && data.data.email) {
                if (data.data.email) {
                    se.storage.remove("email");
                    se.storage.set("email", data.data.email);
                    se.storage.set("saveemail", data.data.email);
                    se._email = data.data.email;
                    se.booking.CEmail = data.data.email;
                    se.checkchangeemail = false;
                    if (type == 1) {
                        se.pushdata();
                    } else {
                        if (se.Roomif.payment == 'true') {
                            se.paymentnotAL();
                        } else {
                            if (value == 0) {
                              if(this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED'){
                                if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                  this.checkhbed(this.Roomif.roomtype);
                                } else {
                                  if (this.Roomif.roomtype.Penaltys.length == 0) {
                                    this.checkhbed(this.Roomif.roomtype);
                                  }else {
                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                  }
                                }
                              }else{
                                this.navCtrl.navigateForward("roompaymentselect-ean");
                              }
                            } else {
                                this.installment();
                            }
                        }
                    }

                }
            }


        })
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
    installment() {
        var se = this;
        if (! se.activityService.objBankInStallment) {
            se.presentToastWarning("Đang tính giá trả góp, xin quý khách vui lòng đợi trong giây lát!");
            return;
        }
        se.navCtrl.navigateForward('/installmentpayment');
    }
    async presentToastWarning(msg) {
        let toast = await this.toastCtrl.create({message: msg, duration: 3000, position: 'top'});

        toast.present();
    }

    inputFocus(item, event) {
        var se = this;
        se.zone.run(() => {
            if (! se.inputtext) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.createHintPaxName(null, se.listPaxSuggestByMemberId);
                }
            } else {
                se.inputtext = true;
                se.updateHintPaxName(item, event.target.value, se.listPaxSuggestByMemberId)
            }
        })

    }

    inputLostFocus(item, isadult) {
        var se = this;
        se.zone.run(() => {
            setTimeout(() => {
                se.inputtext = false;

                // se.checkInput(item, 2, isadult);
                if (se.hidepaxhint) {
                    if (item) {
                        item.hidePaxHint = true;
                    }
                    // item.hidePaxHint = true;
                    se.hidepaxhint = false;
                }
            }, 400)
        })

    }

    async createHintPaxName(item, listpaxhint) {
        var se = this;
        se.zone.run(() => {
            if (item) {
                se.currentSelectPax = item;
            }
            se.listpaxhint = [...listpaxhint];
        })
    }

    updateHintPaxName(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        se.zone.run(() => {
            se.currentSelectPax = item;

            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (element.fullName && value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    arraypax.push(element);
                }

            }


            se.listpaxhint = [... arraypax];
        })
    }

    selectPaxHint(paxhint) {
        var se = this;
        se.zone.run(() => {
            if (paxhint) {
                if (se.currentSelectPax) {
                    se.currentSelectPax.hoten = paxhint.fullName ? paxhint.fullName : se.currentSelectPax.hoten;
                    se.currentSelectPax.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.currentSelectPax.phone;
                } else {
                    se.hoten = paxhint.fullName ? paxhint.fullName : se.hoten;
                    se.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.phone;
                }

            }
        })
    }
    hidePaxHint() {
        this.hidepaxhint = true;
    }

    inputOnFocus(item, type) {
        var se = this;

        // se.clearError(item, type);
        if (type == 9 && ! se.hoten) {

            if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                se.inputtext = true;
                se.createHintPaxName(item, se.listPaxSuggestByMemberId);

            } else {
                se.storage.get('listpaxcache').then((data) => {
                    if (data) {
                        se.inputtext = true;
                        se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                    }
                })
            }
        }
        
    }
    checkhbed(MealTypeRates) {
      var self = this;
      this.presentLoading();
      var form = {
        GrossProfitOnline: MealTypeRates.HotelRoomHBedReservationRequest.GrossProfitOnline,
        rooms: MealTypeRates.HotelRoomHBedReservationRequest.rooms,
        rateCommentId: MealTypeRates.HotelRoomHBedReservationRequest.rateCommentId
      }
      var options = {
        method: 'POST',
        url: C.urls.baseUrl.urlContracting + '/api/contracting/GetRateCommonHbedAjax',
        headers: {},
        form
      };
      request(options, function (error, response, body) {
        if (error) throw new Error(error);
        var json = JSON.parse(body);
        self.loader.dismiss();
        if (json.totalNetTa && json.totalNetTa > MealTypeRates.PriceAvgPlusTotalTA) {
          self.gf.showAlertMessage("Giá đã thay đổi, vui lòng thực hiện lại booking !", '');
          return;
        }
        if (json.cancelPolicy) {
          self.Roomif.payment = json.cancelPolicy[0].IsPenaltyFree;
          self.Roomif.ischeckpayment = true;
          var Penalty_Datetemp = json.cancelPolicy[0].Penalty_Date;
          var Penalty_Date1 = new Date(Penalty_Datetemp);
          var Penalty_Date = Penalty_Date1.setTime(Penalty_Date1.getTime() - (1 * 24 * 60 * 60 * 1000));
          var Penalty_Date2 = moment(Penalty_Date).format('DD-MM-YYYY');
          var thu = moment(Penalty_Date).format('dddd');
          switch (thu) {
            case "Monday":
              thu = "Thứ 2"
              break;
            case "Tuesday":
              thu = "Thứ 3"
              break;
            case "Wednesday":
              thu = "Thứ 4"
              break;
            case "Thursday":
              thu = "Thứ 5"
              break;
            case "Friday":
              thu = "Thứ 6"
              break;
            case "Saturday":
              thu = "Thứ 7"
              break;
            default:
              thu = "Chủ nhật"
              break;
          }
          var a = json.cancelPolicy[0].Penalty_Val_OTA;
          var money = Math.ceil(a / 100) * 100;
          var money1 = money.toLocaleString()
          var text = "Sau 12:00 PM ngày " + thu + ", " + Penalty_Date2 + " sẽ bị tính phí là: " + money1 + " VND";
          self.Roomif.objMealType = MealTypeRates;
          self.Roomif.textcancel = text;
          self.Roomif.roomcancelhbed = 0;
          self.navCtrl.navigateForward('/roompaymentselect-ean');
        }
        else {
        alert("Đã hết phòng, vui lòng chọn lại phòng khác!");
        }
      });
    }

}

