(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentatoffice-flightpaymentatoffice-module"],{

/***/ "./src/app/flightpaymentatoffice/flightpaymentatoffice.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentatoffice/flightpaymentatoffice.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlightpaymentatofficePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentatofficePageModule", function() { return FlightpaymentatofficePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flightpaymentatoffice_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightpaymentatoffice.page */ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.ts");






let FlightpaymentatofficePageModule = class FlightpaymentatofficePageModule {
};
FlightpaymentatofficePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightpaymentatoffice_page__WEBPACK_IMPORTED_MODULE_5__["FlightpaymentatofficePage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _flightpaymentatoffice_page__WEBPACK_IMPORTED_MODULE_5__["FlightpaymentatofficePage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightpaymentatofficePageModule);



/***/ }),

/***/ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentatoffice/flightpaymentatoffice.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\" >\n        <div style=\"position: absolute;height: 48px;width: 48px;top: 0px;\" (click)=\"goback()\" >\n            <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: 4px;margin-left:-8px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n\n\n<ion-content padding>\n    <div style=\"text-align: center\">\n      <img src=\"./assets/ic_flight/step_3.svg\">\n    </div>\n  <div style=\"margin-top: 20px;\n    margin-top: 20px;\n    line-height: 1.5;\n    letter-spacing: -0.34px;\n    font-size: 15px;\">\n  <b>Văn phòng TP. Hồ Chí Minh:</b>\n  Lầu 7, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3.\n  <br>\n   \n  <br>\n  <b>Văn phòng Hà Nội:</b>\n  Tầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội.\n  <br>\n  \n  <br>\n  <b>Văn phòng Cần Thơ:</b>\n  Tầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều.\n  <br>\n  <br>\n  Thời gian làm việc: 08h00 - 20h00\n    <br>\n    <b>Hotline: (028) 3933 8008</b>\n\n\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 button-footer\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentatoffice/flightpaymentatoffice.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dailytime {\n  margin: 0 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodHBheW1lbnRhdG9mZmljZS9mbGlnaHRwYXltZW50YXRvZmZpY2UucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRwYXltZW50YXRvZmZpY2UvZmxpZ2h0cGF5bWVudGF0b2ZmaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRXREOztBREFJO0VBQ0ksa0JBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHBheW1lbnRhdG9mZmljZS9mbGlnaHRwYXltZW50YXRvZmZpY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgfVxuICAgIC5idXR0b24xXG4gICAge1xuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuZGl2LWJ0blxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbiAgICB9XG4gICAgLmRhaWx5dGltZSB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcbiAgICB9XG5cbiIsIi5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJ1dHRvbjEge1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRhaWx5dGltZSB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentatoffice/flightpaymentatoffice.page.ts ***!
  \*********************************************************************/
/*! exports provided: FlightpaymentatofficePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentatofficePage", function() { return FlightpaymentatofficePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











let FlightpaymentatofficePage = class FlightpaymentatofficePage {
    constructor(platform, bookcombo, navCtrl, Roomif, storage, booking, loadingCtrl, gf, zone, toastCtrl, _flightService, fb) {
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
        this._flightService = _flightService;
        this.fb = fb;
        this.isenabled = true;
        this.allowCheckHoldTicket = true;
        this.text = "<b>Văn phòng tại TP. Hồ Chí Minh:</b> Lầu 2, tòa nhà Saigon Prime, 107-109-111 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh<br />Thời gian làm việc:<br /><ul><li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li><li>Chủ Nhật: từ 07h30 đến 20h00</li></ul><br /><b>Văn phòng tại Hà Nội:</b> Lầu 9, 70-72 Bà Triệu, Quận Hoàn Kiếm<br />Thời gian làm việc:<br /><ul ><li>Thứ 2 - Thứ 6: từ 07h30 đến 17h30</li></ul>";
        this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
    }
    ;
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.gf.hideLoading();
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
    }
    next() {
        var se = this;
        se.gf.showLoading();
        se.gf.updatePaymentMethod(se._flightService.itemFlightCache, 8, se.paymentMethod, "").then(data => {
            if (data && data.isHoldSuccess) {
                se._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                se._flightService.itemFlightCache.ischeckpayment = 0;
                if (se._flightService.itemFlightCache.objHotelCitySelected) {
                    se.gf.updatePaymentMethodForCombo(se.bookingCode, se.paymentMethod);
                }
                se.checkHoldTicket(se._flightService.itemFlightCache);
            }
            else {
                se.gf.hideLoading();
                se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
            }
        });
    }
    checkHoldTicket(data) {
        var se = this, res = false;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo;
        se.callCheckHoldTicket(url, data).then((check) => {
            if (!check && se.allowCheckHoldTicket) {
                res = false;
                setTimeout(() => {
                    se.checkHoldTicket(data);
                }, 3000);
            }
            else {
                if (check) {
                    let itemcache = se._flightService.itemFlightCache;
                    if (se._flightService.itemFlightCache.objHotelCitySelected) {
                        se.gf.hideLoading();
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '&memberId=' + se.jti + '&rememberToken=&buyerPhone=' + itemcache.phone;
                        se.gf.CreatePayoo(url).then(dataoffice => {
                            se.navCtrl.navigateForward('flightpaymentdone/' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_10__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_10__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                        });
                    }
                    else {
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '&memberId=' + se.jti + '&rememberToken=&buyerPhone=' + itemcache.phone;
                        se.gf.CreatePayoo(url).then(() => {
                            se.gf.hideLoading();
                            se.navCtrl.navigateForward('flightpaymentdone/' + (itemcache.pnr.bookingCode ? itemcache.pnr.bookingCode : itemcache.pnr.resNo) + '/' + moment__WEBPACK_IMPORTED_MODULE_10__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD') + '/' + moment__WEBPACK_IMPORTED_MODULE_10__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD'));
                        });
                    }
                }
                else {
                    se.gf.hideLoading();
                    se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 1);
                }
            }
        });
        setTimeout(() => {
            se.allowCheckHoldTicket = false;
        }, 1000 * 60);
    }
    callCheckHoldTicket(url, data) {
        var res = false, se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                if (error) {
                    error.page = "globalfunction";
                    error.func = "updatePaymentMethod";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    if (se._flightService) {
                        se._flightService.itemFlightCache.dataSummaryBooking = result;
                    }
                    if (data.ischeckpayment == 0) {
                        if (result.isRoundTrip) {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1) {
                                resolve(true);
                            }
                            else {
                                if (!result.departFlight.atBookingCode || result.departFlight.atBookingCode.indexOf("T__") != -1) {
                                    se._flightService.itemFlightCache.errorHoldTicket = 1;
                                }
                                else if (!result.returnFlight.atBookingCode || result.returnFlight.atBookingCode.indexOf("T__") != -1) {
                                    se._flightService.itemFlightCache.errorHoldTicket = 2;
                                }
                                else if ((!result.returnFlight.atBookingCode || result.returnFlight.atBookingCode.indexOf("T__") != -1) && (!result.departFlight.atBookingCode || result.departFlight.atBookingCode.indexOf("T__") != -1)) {
                                    se._flightService.itemFlightCache.errorHoldTicket = 3;
                                }
                                resolve(false);
                            }
                        }
                        else {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1) {
                                resolve(true);
                            }
                            else {
                                se._flightService.itemFlightCache.errorHoldTicket = 1;
                                resolve(false);
                            }
                        }
                    }
                    else {
                        if (result.isRoundTrip) {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1
                                && result.departFlight.status == 4 && result.returnFlight.status == 4) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.departFlight.status == 4) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                    }
                }
            });
        });
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
FlightpaymentatofficePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightpaymentatoffice',
        template: __webpack_require__(/*! ./flightpaymentatoffice.page.html */ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentatoffice.page.scss */ "./src/app/flightpaymentatoffice/flightpaymentatoffice.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_8__["flightService"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]])
], FlightpaymentatofficePage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentatoffice-flightpaymentatoffice-module.js.map