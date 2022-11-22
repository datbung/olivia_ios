(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combocarlive-combocarlive-module"],{

/***/ "./src/app/combocarlive/combocarlive.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/combocarlive/combocarlive.module.ts ***!
  \*****************************************************/
/*! exports provided: CombocarlivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarlivePageModule", function() { return CombocarlivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combocarlive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combocarlive.page */ "./src/app/combocarlive/combocarlive.page.ts");







const routes = [
    {
        path: '',
        component: _combocarlive_page__WEBPACK_IMPORTED_MODULE_6__["CombocarlivePage"]
    }
];
let CombocarlivePageModule = class CombocarlivePageModule {
};
CombocarlivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combocarlive_page__WEBPACK_IMPORTED_MODULE_6__["CombocarlivePage"]]
    })
], CombocarlivePageModule);



/***/ }),

/***/ "./src/app/combocarlive/combocarlive.page.html":
/*!*****************************************************!*\
  !*** ./src/app/combocarlive/combocarlive.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 0px;\" (click)=\"goback()\" >\n                <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n                <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n<img src=\"./assets/step/step_3.svg\">\n<div style=\"margin-top: 20px\">\n<b>Văn phòng tại TP. Hồ Chí Minh:</b>\nLầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp.HCM.\n<br>\n \nThời gian làm việc:\n<br>\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li>\n  <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19001870\">1900 1870</a></li>\n</ul>\n<br>\n<b>Văn phòng tại Hà Nội:</b>\nTầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội\n<br>\n\nThời gian làm việc:\n<br>\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Chủ Nhật: từ 08h00 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002045\">1900 2045</a></li>\n</ul>\n<br>\n<b>Văn phòng tại Cần Thơ:</b>\nTầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ.\n<br>\n\nThời gian làm việc:\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Chủ Nhật: từ 07h30 đến 21h00</li>\n  <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002087\">1900 2087</a></li>\n</ul>\n\n</div>\n<!-- <ion-row style=\"margin-top: 30px\">\n  <ion-checkbox color=\"secondary\" (ionChange)=\"check()\" [(ngModel)]=\"ischeck\"></ion-checkbox>\n  <ion-label style=\"margin: 0 10px\" text-wrap>Tôi đồng ý các\n    <a href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n      target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n</ion-row> -->\n</ion-content>\n<ion-footer>\n<div style=\"background-color: #ffffff; text-align: center\">\n  <button (click)=\"postapibook()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combocarlive/combocarlive.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/combocarlive/combocarlive.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dailytime {\n  margin: 0 0 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2NhcmxpdmUvY29tYm9jYXJsaXZlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tYm9jYXJsaXZlL2NvbWJvY2FybGl2ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0V0RDs7QURBSTtFQUNJLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9jb21ib2NhcmxpdmUvY29tYm9jYXJsaXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWJ0blxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XHJcbiAgICB9XHJcbiAgICAuZGFpbHl0aW1lIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbiAgICB9XHJcblxyXG4iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kYWlseXRpbWUge1xuICBtYXJnaW46IDAgMCAwIDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/combocarlive/combocarlive.page.ts":
/*!***************************************************!*\
  !*** ./src/app/combocarlive/combocarlive.page.ts ***!
  \***************************************************/
/*! exports provided: CombocarlivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombocarlivePage", function() { return CombocarlivePage; });
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);











let CombocarlivePage = class CombocarlivePage {
    constructor(bookCombo, platform, navCtrl, Roomif, storage, booking, loadingCtrl, gf, zone) {
        this.bookCombo = bookCombo;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.storage = storage;
        this.booking = booking;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.zone = zone;
        this.text = "<b>Văn phòng tại TP. Hồ Chí Minh:</b> Lầu 2, tòa nhà Saigon Prime, 107-109-111 Nguyễn Đình Chiểu, Phường 6, Quận 3, Thành phố Hồ Chí Minh<br />Thời gian làm việc:<br /><ul><li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li><li>Chủ Nhật: từ 07h30 đến 20h00</li></ul><br /><b>Văn phòng tại Hà Nội:</b> Lầu 9, 70-72 Bà Triệu, Quận Hoàn Kiếm<br />Thời gian làm việc:<br /><ul ><li>Thứ 2 - Thứ 6: từ 07h30 đến 17h30</li></ul>";
        this.listcars = this.gf.getParams('carscombo');
        this.hoten = this.Roomif.hoten;
        this.phone = this.Roomif.phone;
        this.totalAdult = bookCombo.totalAdult;
        this.storage.get('email').then(e => {
            if (e !== null) {
                this.email = e;
            }
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
        gf.googleAnalytion('roompaymentlive', 'load', '');
    }
    ngOnInit() {
    }
    CreateCombo() {
        var se = this;
        var form = this.listcars;
        form.HotelBooking.PaymentMethod = "51";
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            var obj = JSON.parse(body);
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: {
                    BookingCode: obj.Code,
                    DepartATCode: obj.TransferReserveCode.DepartReserveCode,
                    ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
                    FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.loader.dismiss();
                var json = JSON.parse(body);
                if (json.Error == 0) {
                    if (se.jti) {
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + obj.Code + '&memberId=' + se.jti;
                        se.gf.CreatePayoo(url).then(() => {
                        });
                    }
                    se.navCtrl.navigateForward('/combodone/' + obj.Code);
                }
            });
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.back();
    }
    postapibook() {
        var se = this;
        se.presentLoading();
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/booking',
            headers: {
                apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
                apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
            },
            body: {
                departParams: {
                    trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
                    total_seats: this.bookCombo.totalseatsdep,
                    total_price: this.bookCombo.pricedep,
                    code: '',
                    dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
                    pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
                },
                returnParams: {
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
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (body.status == 0) {
                var json = body.data;
                if (json.length > 0) {
                    se.listcars.TransferBooking.departTransfer.ReservedTickets = JSON.stringify(json[0].data.reserve_Tickets);
                    se.listcars.TransferBooking.returnTransfer.ReservedTickets = JSON.stringify(json[1].data.reserve_Tickets);
                    var expiredtimedep = moment__WEBPACK_IMPORTED_MODULE_9__(json[0].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
                    var expiredtimeret = moment__WEBPACK_IMPORTED_MODULE_9__(json[1].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
                    if (Number(expiredtimedep) == Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[0].data.reserve_Tickets.expired_time;
                    }
                    else if (Number(expiredtimedep) > Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[1].data.reserve_Tickets.expired_time;
                    }
                    else if (Number(expiredtimedep) < Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[0].data.reserve_Tickets.expired_time;
                    }
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
                    var textfullname = se.hoten.split(' ');
                    var FirstName;
                    var LastName;
                    if (textfullname.length > 2) {
                        let name = '';
                        for (let i = 1; i < textfullname.length; i++) {
                            if (i == 1) {
                                name += textfullname[i];
                            }
                            else {
                                name += ' ' + textfullname[i];
                            }
                        }
                        FirstName = textfullname[0];
                        LastName = name;
                    }
                    else if (textfullname.length > 1) {
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
                    if (se.bookCombo.mealTypeRates.Supplier == 'SERI' && se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal) {
                        se.gf.checkAllotmentSeri(se.booking.HotelId, se.bookCombo.mealTypeRates.RoomId, se.booking.CheckInDate, se.booking.CheckOutDate, se.bookCombo.mealTypeRates.TotalRoom, 'SERI', se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal).then((allow) => {
                            if (allow) {
                                se.CreateCombo();
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
                        se.CreateCombo();
                    }
                }
                else {
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
};
CombocarlivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-combocarlive',
        template: __webpack_require__(/*! ./combocarlive.page.html */ "./src/app/combocarlive/combocarlive.page.html"),
        styles: [__webpack_require__(/*! ./combocarlive.page.scss */ "./src/app/combocarlive/combocarlive.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CombocarlivePage);



/***/ })

}]);
//# sourceMappingURL=combocarlive-combocarlive-module.js.map