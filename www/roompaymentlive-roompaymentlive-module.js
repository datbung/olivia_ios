(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentlive-roompaymentlive-module"],{

/***/ "./src/app/roompaymentlive/roompaymentlive.html":
/*!******************************************************!*\
  !*** ./src/app/roompaymentlive/roompaymentlive.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\" >\n        <div style=\"position: absolute;height: 48px;width: 48px;top: 0px;\" (click)=\"goback()\" >\n            <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: 4px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n\n<ion-content padding>\n    <div *ngIf=\"stt==0\" style=\"text-align: center\">\n        <img  src=\"./assets/step/step_3.svg\">\n    </div>\n    <!-- <div *ngIf=\"stt==1&&(booking_type=='COMBO_FLIGHT'||booking_type=='VMB')\" style=\"text-align: center\">\n      <img  src=\"./assets/ic_flight/step_3.svg\">\n    </div> -->\n  <div style=\"margin-top: 20px\">\n  <b>Văn phòng tại TP. Hồ Chí Minh:</b>\n  Lầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp.HCM.\n  <br>\n   \n  Thời gian làm việc:\n  <br>\n  <ul class=\"dailytime\">\n    <li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li>\n    <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n    <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19001870\">1900 1870</a></li>\n  </ul>\n  <br>\n  <b>Văn phòng tại Hà Nội:</b>\n  P.308, Tầng 3, Tòa nhà The One, số 2 Chương Dương Độ, Q.Chương Dương, Q.Hoàn Kiếm, Hà Nội\n  <br>\n  \n  Thời gian làm việc:\n  <br>\n  <ul class=\"dailytime\">\n    <li>Thứ 2 - Chủ Nhật: từ 08h00 đến 20h00</li>\n    <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002045\">1900 2045</a></li>\n  </ul>\n  <br>\n  <b>Văn phòng tại Cần Thơ:</b>\n  Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ.\n  <br>\n  \n  Thời gian làm việc:\n  <ul class=\"dailytime\">\n    <li>Thứ 2 - Chủ Nhật: từ 07h30 đến 21h00</li>\n    <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n    <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002087\">1900 2087</a></li>\n  </ul>\n\n  </div>\n  <!-- <ion-row style=\"margin-top: 30px\">\n    <ion-checkbox color=\"secondary\" (ionChange)=\"check()\" [(ngModel)]=\"ischeck\"></ion-checkbox>\n    <ion-label style=\"margin: 0 10px\" text-wrap>Tôi đồng ý các\n      <a href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n        target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n  </ion-row> -->\n</ion-content>\n<ion-footer>\n  <div *ngIf=\"stt==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 button-footer\">Tiếp tục</button>\n  </div>\n  <div *ngIf=\"stt==1\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"goback()\" ion-button round outline class=\"button button2 button-footer\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roompaymentlive/roompaymentlive.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/roompaymentlive/roompaymentlive.module.ts ***!
  \***********************************************************/
/*! exports provided: RoompaymentlivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentlivePageModule", function() { return RoompaymentlivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roompaymentlive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roompaymentlive */ "./src/app/roompaymentlive/roompaymentlive.ts");






let RoompaymentlivePageModule = class RoompaymentlivePageModule {
};
RoompaymentlivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roompaymentlive__WEBPACK_IMPORTED_MODULE_5__["RoompaymentlivePage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roompaymentlive__WEBPACK_IMPORTED_MODULE_5__["RoompaymentlivePage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoompaymentlivePageModule);



/***/ }),

/***/ "./src/app/roompaymentlive/roompaymentlive.scss":
/*!******************************************************!*\
  !*** ./src/app/roompaymentlive/roompaymentlive.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dailytime {\n  margin: 0 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tcGF5bWVudGxpdmUvcm9vbXBheW1lbnRsaXZlLnNjc3MiLCJzcmMvYXBwL3Jvb21wYXltZW50bGl2ZS9yb29tcGF5bWVudGxpdmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRXREOztBREFJO0VBQ0ksa0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL3Jvb21wYXltZW50bGl2ZS9yb29tcGF5bWVudGxpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAuYnV0dG9uMVxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1idG5cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC5kYWlseXRpbWUge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgfVxuXG4iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kYWlseXRpbWUge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/roompaymentlive/roompaymentlive.ts":
/*!****************************************************!*\
  !*** ./src/app/roompaymentlive/roompaymentlive.ts ***!
  \****************************************************/
/*! exports provided: RoompaymentlivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentlivePage", function() { return RoompaymentlivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");











let RoompaymentlivePage = class RoompaymentlivePage {
    constructor(activityService, platform, bookcombo, navCtrl, Roomif, storage, booking, loadingCtrl, gf, zone, toastCtrl, activatedRoute, alertCtrl, _voucherService) {
        this.activityService = activityService;
        this.platform = platform;
        this.bookcombo = bookcombo;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.booking = booking;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.activatedRoute = activatedRoute;
        this.alertCtrl = alertCtrl;
        this._voucherService = _voucherService;
        this.isenabled = true;
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
        gf.googleAnalytion('roompaymentlive', 'load', '');
    }
    ;
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        if (this.stt == 0) {
            this.text = "<b>Văn phòng tại TP. Hồ Chí Minh:</b> Lầu 2, tòa nhà Saigon Prime, 107-109-111 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh<br />Thời gian làm việc:<br /><ul><li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li><li>Chủ Nhật: từ 07h30 đến 20h00</li></ul><br /><b>Văn phòng tại Hà Nội:</b> Lầu 9, 70-72 Bà Triệu, Quận Hoàn Kiếm<br />Thời gian làm việc:<br /><ul ><li>Thứ 2 - Thứ 6: từ 07h30 đến 17h30</li></ul>";
            this.room = this.Roomif.arrroom;
            this.jsonroom = this.Roomif.jsonroom;
        }
    }
    ionViewWillEnter() {
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
    }
    next() {
        var se = this;
        if (se.Roomif.roomtype.Supplier == 'SERI') {
            se.gf.checkAllotmentSeri(se.booking.HotelId, se.Roomif.RoomId, se.booking.CheckInDate, se.booking.CheckOutDate, se.Roomif.roomnumber, 'SERI', se.Roomif.roomtype.HotelCheckDetailTokenInternal).then((allow) => {
                if (allow) {
                    se.createBooking();
                }
                else {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    se.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
            });
        }
        else {
            se.createBooking();
        }
    }
    createBooking() {
        this.presentLoading();
        var se = this;
        se.jsonroom.RoomClasses = se.room;
        se.timestamp = Date.now();
        if (se.booking.CEmail) {
            var Invoice = 0;
            if (se.Roomif.order) {
                Invoice = 1;
            }
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {
                    'content-type': 'application/json'
                },
                body: {
                    RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                    CName: se.Roomif.hoten,
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
                    PenaltyDescription: se.Roomif.textcancel,
                    companycontactname: this.Roomif.nameOrder
                },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roompaymentlive",
                        func: "next",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roompaymentlive";
                    error.func = "next";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                }
                ;
                if (body) {
                    if (body.error == 0) {
                        var code = body.code;
                        var stt = body.bookingStatus;
                        se.clearClonePage('page-roompaymentdone');
                        se.loader.dismiss();
                        let mealtype = se.jsonroom.RoomClasses[0].MealTypeRates[se.booking.indexmealtype];
                        let totalprice = '';
                        if (se.Roomif.priceshow) {
                            totalprice = se.Roomif.priceshow;
                        }
                        else {
                            totalprice = se.Roomif.roomtype.PriceAvgPlusTAStr;
                        }
                        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + body.code + '&memberId=' + se.jti + '&buyerPhone=' + se.Roomif.phone;
                        se.gf.CreateUrl(url);
                        if (se._voucherService.selectVoucher) {
                            se._voucherService.rollbackSelectedVoucher.emit(se._voucherService.selectVoucher);
                            se._voucherService.publicClearVoucherAfterPaymentDone(1);
                            setTimeout(() => {
                                se._voucherService.selectVoucher = null;
                            }, 300);
                        }
                        se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + stt);
                    }
                    else {
                        se.loader.dismiss();
                        se.storage.get('jti').then((memberid) => {
                            if (memberid) {
                                se.storage.get('deviceToken').then((devicetoken) => {
                                    if (devicetoken) {
                                        se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                            setTimeout(() => {
                                                se.auth_token = token;
                                            }, 100);
                                        });
                                    }
                                    else {
                                        se.showAlertMessageOnly(body.Msg);
                                    }
                                });
                            }
                            else {
                                se.showAlertMessageOnly(body.Msg);
                            }
                        });
                    }
                }
                else {
                    error.page = "roompaymentlive";
                    error.func = "next";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    se.loader.dismiss();
                    alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                }
            });
        }
        else {
            se.loader.dismiss();
            se.presentToastr('Email không hợp lệ. Vui lòng kiểm tra lại.');
        }
    }
    showAlertMessageOnly(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
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
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(au.auth_token);
                            se.storage.remove('point');
                            se.storage.set('point', decoded.point);
                        });
                    }
                });
            }
        });
    }
    clearClonePage(pagename) {
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
    check() {
        if (this.ischeck) {
            this.isenabled = false;
        }
        else {
            this.isenabled = true;
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.back();
    }
    presentToastr(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
};
RoompaymentlivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roompaymentlive',
        template: __webpack_require__(/*! ./roompaymentlive.html */ "./src/app/roompaymentlive/roompaymentlive.html"),
        styles: [__webpack_require__(/*! ./roompaymentlive.scss */ "./src/app/roompaymentlive/roompaymentlive.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_10__["voucherService"]])
], RoompaymentlivePage);



/***/ })

}]);
//# sourceMappingURL=roompaymentlive-roompaymentlive-module.js.map