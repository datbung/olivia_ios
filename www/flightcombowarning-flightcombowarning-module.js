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

<<<<<<< HEAD
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: 16px;\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede !important;\n  position: initial;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29tYm93YXJuaW5nL2ZsaWdodGNvbWJvd2FybmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbWJvd2FybmluZy9mbGlnaHRjb21ib3dhcm5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtBQ0RKOztBRElBO0VBQ0ksMkJBQUE7QUNESjs7QURFSTtFQUNFLGVBQUE7QUNBTjs7QURJQTtFQUNJLGFBQUE7QUNESjs7QURHSTtFQUNJLGtCQUFBO0FDRFI7O0FER1E7RUFDSSxxQkFBQTtBQ0RaOztBRE1JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNKUjs7QURPSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTFI7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUlI7O0FEVVE7RUFDSywyQkFBQTtFQUNELHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNSWjs7QURZSTtFQUNJLGlCQUFBO0FDVlI7O0FEYUE7RUFDSSw4Q0FBQTtFQUNBLGlCQUFBO0FDVko7O0FEWUE7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNWSjs7QURZQTtFQUNJLDJCQUFBO0VBQ0Qsc0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1RIIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm93YXJuaW5nL2ZsaWdodGNvbWJvd2FybmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xuICAgIC5kaXYtdGl0bGV7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgfVxufVxuXG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAudGV4dC1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW1nLXBheW1lbnQtd2FybmluZ3tcbiAgICAgICAgICAgIG1hcmdpbjogMjRweCAwIDI0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgXG4gICAgfVxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG5cbiAgICAudGV4dC13YXJuaW5ne1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcblxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogOTElO1xuICAgICAgICBib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmJ0bmhvbWV7XG4gICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGNvbG9yOiAjRjc5MjIxO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5jbHMtaW9uLWZvb3RlcntcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZSAhaW1wb3J0YW50OztcbiAgICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cbi5kaXYtZm9vdGVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5idG5ob21le1xuICAgIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICBjb2xvcjogI0Y3OTIyMTtcbiAgIHdpZHRoOiA5MCU7XG4gICBoZWlnaHQ6IDQ4cHg7XG4gICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWhlYWRlci10aXRsZSAuZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC1jZW50ZXIgLmltZy1wYXltZW50LXdhcm5pbmcge1xuICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LXdhcm5pbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLmRpdi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA5MSU7XG4gIGJvdHRvbTogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLmRpdi1idXR0b24gLmJ0bmhvbWUge1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xzLWlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmJ0bmhvbWUge1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjRjc5MjIxO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufSJdfQ== */"
=======
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: 16px;\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede !important;\n  position: initial;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvd2FybmluZy9mbGlnaHRjb21ib3dhcm5pbmcucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib3dhcm5pbmcvZmxpZ2h0Y29tYm93YXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FERUk7RUFDRSxlQUFBO0FDQU47O0FESUE7RUFDSSxhQUFBO0FDREo7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBREdRO0VBQ0kscUJBQUE7QUNEWjs7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSlI7O0FET0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRFVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JSOztBRFVRO0VBQ0ssMkJBQUE7RUFDRCxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDUlo7O0FEWUk7RUFDSSxpQkFBQTtBQ1ZSOztBRGFBO0VBQ0ksOENBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRFlBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDVko7O0FEWUE7RUFDSSwyQkFBQTtFQUNELHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNUSCIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvd2FybmluZy9mbGlnaHRjb21ib3dhcm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbiAgICAuZGl2LXRpdGxle1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbn1cblxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmltZy1wYXltZW50LXdhcm5pbmd7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgIFxuICAgIH1cbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLnRleHQtd2FybmluZ3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5idG5ob21le1xuICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4uY2xzLWlvbi1mb290ZXJ7XG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGUgIWltcG9ydGFudDs7XG4gICAgcG9zaXRpb246IGluaXRpYWw7XG59XG4uZGl2LWZvb3Rlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uYnRuaG9tZXtcbiAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNGNzkyMjE7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgY29sb3I6ICNGNzkyMjE7XG4gICB3aWR0aDogOTAlO1xuICAgaGVpZ2h0OiA0OHB4O1xuICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuLmRpdi1oZWFkZXItdGl0bGUgLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtY2VudGVyIC5pbWctcGF5bWVudC13YXJuaW5nIHtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC13YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC5kaXYtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTElO1xuICBib3R0b206IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC5kaXYtYnV0dG9uIC5idG5ob21lIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNscy1pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5idG5ob21lIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn0iXX0= */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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