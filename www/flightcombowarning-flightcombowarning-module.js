(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombowarning-flightcombowarning-module"],{

/***/ "./src/app/flightcombowarning/flightcombowarning.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombowarning/flightcombowarning.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightcombowarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombowarningPageModule", function() { return FlightcombowarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombowarning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombowarning.page */ "./src/app/flightcombowarning/flightcombowarning.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombowarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombowarningPage"]
    }
];
let FlightcombowarningPageModule = class FlightcombowarningPageModule {
};
FlightcombowarningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombowarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombowarningPage"]]
    })
], FlightcombowarningPageModule);



/***/ }),

/***/ "./src/app/flightcombowarning/flightcombowarning.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombowarning/flightcombowarning.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n         \n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Hoàn thành</div>\n        </div>\n       \n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content>\n  <div class=\"flight-payment-warning-content\">\n    <div class=\"text-center\">\n      <div class=\"m-top-8\">\n        <img src=\"./assets/ic_flight/step_4.svg\">\n      </div>\n      <img class=\"img-payment-warning\" src=\"./assets/ic_flight/payment_warning.svg\">\n    </div>\n    <!-- <div class=\"text-title\">Giao dịch không thành công</div> -->\n    <div class=\"text-warning\">Quý khách đã thanh toán {{ total }}đ thành công cho booking {{bookingcode}}</div>\n    <div class=\"text-warning\">Tuy nhiên đã hết thời hạn giao dịch, vé đã hết hạn giữ.</div>\n    <div class=\"text-warning\">Chúng tôi sẽ liên lạc lại trong vòng 30 phút (trong thời gian hành chính) qua đến số điện\n      thoại <span class=\"text-bold\"> {{ phone }} </span> để hoàn tiển hoặc hỗ trợ đặt vé khác.</div>\n    <div class=\"text-warning\">Mong Quý khách thông cảm vì sự bất tiện này.</div>\n  </div>\n</ion-content>\n\n<ion-footer class=\"cls-ion-footer\">\n  <div class=\"div-footer\">\n    <button (click)=\"gohome()\" ion-button round outline class=\"button btnhome\">Quay về trang chủ</button>\n  </div>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/flightcombowarning/flightcombowarning.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombowarning/flightcombowarning.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: calc(env(safe-area-inset-bottom) + 16px);\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede !important;\n  position: initial;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGNvbWJvd2FybmluZy9mbGlnaHRjb21ib3dhcm5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib3dhcm5pbmcvZmxpZ2h0Y29tYm93YXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FERUk7RUFDRSxlQUFBO0FDQU47O0FESUE7RUFDSSxhQUFBO0FDREo7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBREdRO0VBQ0kscUJBQUE7QUNEWjs7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSlI7O0FET0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRFVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0RBQUE7QUNSUjs7QURVUTtFQUNLLDJCQUFBO0VBQ0Qsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1JaOztBRFlJO0VBQ0ksaUJBQUE7QUNWUjs7QURhQTtFQUNJLDhDQUFBO0VBQ0EsaUJBQUE7QUNWSjs7QURZQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1ZKOztBRFlBO0VBQ0ksMkJBQUE7RUFDRCxzQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDVEgiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib3dhcm5pbmcvZmxpZ2h0Y29tYm93YXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgLmRpdi10aXRsZXtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG59XG5cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5pbWctcGF5bWVudC13YXJuaW5ne1xuICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICBcbiAgICB9XG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC50ZXh0LXdhcm5pbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgIGJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAxNnB4KTtcblxuICAgICAgICAuYnRuaG9tZXtcbiAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmNscy1pb24tZm9vdGVye1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlICFpbXBvcnRhbnQ7O1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuLmRpdi1mb290ZXJcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmJ0bmhvbWV7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgIGNvbG9yOiAjRjc5MjIxO1xuICAgd2lkdGg6IDkwJTtcbiAgIGhlaWdodDogNDhweDtcbiAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxlIC5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWNlbnRlciAuaW1nLXBheW1lbnQtd2FybmluZyB7XG4gIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtd2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAuZGl2LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkxJTtcbiAgYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDE2cHgpO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAuZGl2LWJ1dHRvbiAuYnRuaG9tZSB7XG4gIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uYnRuaG9tZSB7XG4gIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightcombowarning/flightcombowarning.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightcombowarning/flightcombowarning.page.ts ***!
  \***************************************************************/
/*! exports provided: FlightcombowarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombowarningPage", function() { return FlightcombowarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");





let FlightcombowarningPage = class FlightcombowarningPage {
    constructor(navCtrl, Roomif, bookCombo, gf) {
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.bookCombo = bookCombo;
        this.gf = gf;
        this.bookingcode = "";
    }
    ngOnInit() {
        this.total = this.Roomif.priceshowtt;
        this.bookingcode = this.bookCombo.bookingcode;
    }
    gohome() {
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    goback() {
        this.navCtrl.navigateBack('/tabs/tab1');
    }
};
FlightcombowarningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightcombowarning',
        template: __webpack_require__(/*! ./flightcombowarning.page.html */ "./src/app/flightcombowarning/flightcombowarning.page.html"),
        styles: [__webpack_require__(/*! ./flightcombowarning.page.scss */ "./src/app/flightcombowarning/flightcombowarning.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"]])
], FlightcombowarningPage);



/***/ })

}]);
//# sourceMappingURL=flightcombowarning-flightcombowarning-module.js.map