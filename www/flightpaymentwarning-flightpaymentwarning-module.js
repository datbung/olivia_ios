(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentwarning-flightpaymentwarning-module"],{

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.module.ts ***!
  \*********************************************************************/
/*! exports provided: FlightpaymentwarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentwarningPageModule", function() { return FlightpaymentwarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentwarning.page */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentwarningPage"]
    }
];
let FlightpaymentwarningPageModule = class FlightpaymentwarningPageModule {
};
FlightpaymentwarningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentwarningPage"]]
    })
], FlightpaymentwarningPageModule);



/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n            \n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Hoàn thành</div>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"flight-payment-warning-content\">\n        \n            <div class=\"text-center\">\n                <div class=\"m-top-8\">\n                    <img  src=\"./assets/ic_flight/step_4.svg\">\n                </div>\n\n                <img class=\"img-payment-warning\" src=\"./assets/ic_flight/payment_warning.svg\" >\n\n                \n            </div>\n            <div class=\"text-title\">Giao dịch không thành công</div>\n\n                <div class=\"text-warning\">Quý khách thanh toán số tiền {{ totalpricedisplay }}đ thành công.</div>\n                <div class=\"text-warning\">Tuy nhiên đã hết thời hạn giao dịch, vé đã hết hạn giữ.</div>\n                <div class=\"text-warning\">Chúng tôi sẽ liên lạc lại trong vòng 30 phút (trong thời gian hành chính) qua số điện thoại <span class=\"text-bold\"> {{ phone }} </span> để hoàn tiển hoặc hỗ trợ đặt vé khác.</div>\n                <div class=\"text-warning\">Mong Quý khách thông cảm vì sự bất tiện này.</div>\n\n                <div class=\"div-button\">\n                    <button (click)=\"gohome()\" ion-button round outline class=\"button btnhome\">Quay về trang chủ</button>\n                </div>\n      </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: 16px;\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0cGF5bWVudHdhcm5pbmcvZmxpZ2h0cGF5bWVudHdhcm5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRwYXltZW50d2FybmluZy9mbGlnaHRwYXltZW50d2FybmluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBREVJO0VBQ0UsZUFBQTtBQ0FOOztBRElBO0VBQ0ksYUFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7QUNEUjs7QURHUTtFQUNJLHFCQUFBO0FDRFo7O0FETUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0pSOztBRE9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNMUjs7QURVSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNSUjs7QURVUTtFQUNLLDJCQUFBO0VBQ0Qsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1JaOztBRFlJO0VBQ0ksaUJBQUE7QUNWUiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHBheW1lbnR3YXJuaW5nL2ZsaWdodHBheW1lbnR3YXJuaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gICAgLmRpdi10aXRsZXtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG59XG5cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5pbWctcGF5bWVudC13YXJuaW5ne1xuICAgICAgICAgICAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICBcbiAgICB9XG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cblxuICAgIC50ZXh0LXdhcm5pbmd7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuXG4gICAgICAgIFxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgIGJvdHRvbTogMTZweDtcblxuICAgICAgICAuYnRuaG9tZXtcbiAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxlIC5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWNlbnRlciAuaW1nLXBheW1lbnQtd2FybmluZyB7XG4gIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtd2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAuZGl2LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDkxJTtcbiAgYm90dG9tOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAuZGl2LWJ1dHRvbiAuYnRuaG9tZSB7XG4gIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6ICNGNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"
=======
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: 16px;\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodHBheW1lbnR3YXJuaW5nL2ZsaWdodHBheW1lbnR3YXJuaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0cGF5bWVudHdhcm5pbmcvZmxpZ2h0cGF5bWVudHdhcm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURFSTtFQUNFLGVBQUE7QUNBTjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURHSTtFQUNJLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxxQkFBQTtBQ0RaOztBRE1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURPSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTFI7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUlI7O0FEVVE7RUFDSywyQkFBQTtFQUNELHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNSWjs7QURZSTtFQUNJLGlCQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRwYXltZW50d2FybmluZy9mbGlnaHRwYXltZW50d2FybmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xuICAgIC5kaXYtdGl0bGV7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxufVxuXG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAudGV4dC1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW1nLXBheW1lbnQtd2FybmluZ3tcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgfVxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAudGV4dC13YXJuaW5ne1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICBib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmJ0bmhvbWV7XG4gICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjRjc5MjIxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWhlYWRlci10aXRsZSAuZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1jZW50ZXIgLmltZy1wYXltZW50LXdhcm5pbmcge1xuICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LXdhcm5pbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLmRpdi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MSU7XG4gIGJvdHRvbTogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLmRpdi1idXR0b24gLmJ0bmhvbWUge1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.ts ***!
  \*******************************************************************/
/*! exports provided: FlightpaymentwarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentwarningPage", function() { return FlightpaymentwarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");











let FlightpaymentwarningPage = class FlightpaymentwarningPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal, modalCtrl) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.backgroundmode = backgroundmode;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this.allowCheck = true;
        this.totalpricedisplay = this._flightService.itemFlightCache.totalPriceDisplay;
        this.phone = this._flightService.itemFlightCache.phone;
        this.bookingNo = this._flightService.itemFlightCache.pnr.resNo;
    }
    ngOnInit() {
    }
    clearItemCache() {
        this._flightService.itemFlightCache = {};
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.jsonSeats = null;
        this._flightService.itemFlightCache.listdepartseatselected = "";
        this._flightService.itemFlightCache.listreturnseatselected = "";
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.hasChoiceLuggage = false;
        this._flightService.itemFlightCache.listSeatNormal = [];
        this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this._flightService.itemFlightCache.departConditionInfo = null;
        this._flightService.itemFlightCache.returnConditionInfo = null;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
    }
    gohome() {
        this.clearItemCache();
        this._flightService.itemTabFlightActive.emit(true);
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    goback() {
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_9__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
};
FlightpaymentwarningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightpaymentwarning',
        template: __webpack_require__(/*! ./flightpaymentwarning.page.html */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentwarning.page.scss */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__["SafariViewController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], FlightpaymentwarningPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentwarning-flightpaymentwarning-module.js.map