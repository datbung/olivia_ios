(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombolive-flightcombolive-module"],{

/***/ "./src/app/flightcombolive/flightcombolive.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightcombolive/flightcombolive.module.ts ***!
  \***********************************************************/
/*! exports provided: FlightcombolivePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombolivePageModule", function() { return FlightcombolivePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombolive_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombolive.page */ "./src/app/flightcombolive/flightcombolive.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombolive_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombolivePage"]
    }
];
let FlightcombolivePageModule = class FlightcombolivePageModule {
};
FlightcombolivePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombolive_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombolivePage"]]
    })
], FlightcombolivePageModule);



/***/ }),

/***/ "./src/app/flightcombolive/flightcombolive.page.html":
/*!***********************************************************!*\
  !*** ./src/app/flightcombolive/flightcombolive.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 0px;\" (click)=\"goback()\" >\n                <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n                <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n<div style=\"margin-top: 20px\">\n<b>Văn phòng tại TP. Hồ Chí Minh:</b>\nLầu 2, Tòa nhà Anh Đăng, 215 Nam Kỳ Khởi Nghĩa, Phường 7, Quận 3, Tp.HCM.\n<br>\n \nThời gian làm việc:\n<br>\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Thứ 7: từ 07h30 đến 21h00</li>\n  <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19001870\">1900 1870</a></li>\n</ul>\n<br>\n<b>Văn phòng tại Hà Nội:</b>\nTầng 1, Tòa nhà Ladeco, 266 Đội Cấn, Phường Liễu Giai, Quận Ba Đình, Hà Nội\n<br>\n\nThời gian làm việc:\n<br>\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Chủ Nhật: từ 08h00 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002045\">1900 2045</a></li>\n</ul>\n<br>\n<b>Văn phòng tại Cần Thơ:</b>\nTầng 7 - Tòa nhà STS - 11B Đại Lộ Hòa Bình, P. Tân An, Q. Ninh Kiều, TP. Cần Thơ.\n<br>\n\nThời gian làm việc:\n<ul class=\"dailytime\">\n  <li>Thứ 2 - Chủ Nhật: từ 07h30 đến 21h00</li>\n  <li>Chủ Nhật: từ 07h30 đến 20h00</li>\n  <li>Hotline: <a class=\"hotline-link\" id=\"DeskHotlineNumber\" href=\"tel:19002087\">1900 2087</a></li>\n</ul>\n\n</div>\n\n</ion-content>\n<ion-footer>\n<div style=\"background-color: #ffffff; text-align: center\">\n  <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombolive/flightcombolive.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/flightcombolive/flightcombolive.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.dailytime {\n  margin: 0 0 0 20px;\n}\n\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGNvbWJvbGl2ZS9mbGlnaHRjb21ib2xpdmUucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2xpdmUvZmxpZ2h0Y29tYm9saXZlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRXREOztBREFJO0VBQ0ksa0JBQUE7QUNHUjs7QURESTtFQUVGLGtCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib2xpdmUvZmxpZ2h0Y29tYm9saXZlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAuYnV0dG9uMVxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1idG5cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC5kYWlseXRpbWUge1xuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XG4gICAgfVxuICAgIC50ZXh0LWNlbnRlclxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiIsIi5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJ1dHRvbjEge1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRhaWx5dGltZSB7XG4gIG1hcmdpbjogMCAwIDAgMjBweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightcombolive/flightcombolive.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/flightcombolive/flightcombolive.page.ts ***!
  \*********************************************************/
/*! exports provided: FlightcombolivePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombolivePage", function() { return FlightcombolivePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");









let FlightcombolivePage = class FlightcombolivePage {
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
    next() {
        var se = this;
        this.presentLoading();
        var options = {
            'method': 'POST',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookCombo.bookingcode + '&paymentMethod=51',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response) {
            if (error)
                throw new Error(error);
            se.gf.holdflight(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
                se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                    if (data) {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        if (se.jti) {
                            var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&memberId=' + se.jti;
                            se.gf.CreatePayoo(url);
                        }
                        se.gf.createFlightTransactionCombo(se.bookCombo.FlightCode);
                        if (se.Roomif.payment == 'AL' && datafly.depcode && datafly.retcode) {
                            se.navCtrl.navigateForward('/flightcombopaymentdone/AL');
                        }
                        else {
                            se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                        }
                    }
                    else {
                        alert('Gặp sự cố, vui lòng thử lại');
                    }
                });
            });
        });
    }
    goback() {
        this.navCtrl.back();
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
};
FlightcombolivePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightcombolive',
        template: __webpack_require__(/*! ./flightcombolive.page.html */ "./src/app/flightcombolive/flightcombolive.page.html"),
        styles: [__webpack_require__(/*! ./flightcombolive.page.scss */ "./src/app/flightcombolive/flightcombolive.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], FlightcombolivePage);



/***/ })

}]);
//# sourceMappingURL=flightcombolive-flightcombolive-module.js.map