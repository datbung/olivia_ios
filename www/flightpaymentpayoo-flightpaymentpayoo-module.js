(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentpayoo-flightpaymentpayoo-module"],{

/***/ "./src/app/flightpaymentpayoo/flightpaymentpayoo.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymentpayoo/flightpaymentpayoo.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightpaymentpayooPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentpayooPageModule", function() { return FlightpaymentpayooPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentpayoo.page */ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentpayooPage"]
    }
];
let FlightpaymentpayooPageModule = class FlightpaymentpayooPageModule {
};
FlightpaymentpayooPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentpayooPage"]]
    })
], FlightpaymentpayooPageModule);



/***/ }),

/***/ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymentpayoo/flightpaymentpayoo.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n         \n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\">\n            <label *ngIf=\"stt==0\" class=\"text-title\">Hoàn thành</label>\n            <label *ngIf=\"stt!=0\" class=\"text-title\">Thanh toán</label>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div *ngIf=\"stt=='0'\">\n    <div class=\"mt12\">\n      \n      <div>\n        <ion-label class=\"text\" text-wrap>\n          Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU\n        </ion-label>\n      </div>\n     <div>\n      <ion-label class=\"text\" text-wrap>\n        Vé máy bay đã được giữ đến {{textHours}} {{PeriodPaymentDate}}\n      </ion-label>\n     </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Vui lòng thanh toán đặt chỗ {{bookingCode}} theo thông tin bên dưới\n      </ion-label>\n    </div>\n    \n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Tổng tiền: <span class=\"totalPrice\">{{total}}</span>\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Mã thanh toán Payoo: <span class=\"totalPrice\">{{BillingCode}}</span>\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Hạn thanh toán: <span class=\"totalPrice\">Trước {{textHours}} </span><span>{{PeriodPaymentDate}}</span>\n      </ion-label>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/PayooStore.png\">\n    </div>\n    <div (click)=\"openWebpagePayoo()\">\n      <label class=\"text-size-12\" >Để tìm cửa hàng gần nhất, hãy <a style=\"color:#46a7ef\" target=\"_blank\" >xem tại đây</a></label>\n    </div>\n    <div class=\"div-split-panel\"></div>\n    <div> <p class=\"text-payment-info\" text-wrap>\n      Thông tin thanh toán cũng được gửi đến email <span class=\"text-bold\">{{_email}}</span>. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư Spam hoặc Junk Folder. \n    </p>\n     <p class=\"text-payment-info mt20\" text-wrap>\n      Chúng tôi sẽ gửi vé máy bay ngay khi nhận được thanh toán của Quý khách.\n    </p>\n  </div>\n  </div>\n  <div *ngIf=\"stt=='1'&&qrimg\">\n    <p>\n      Quý khách vui lòng quét mã QR dưới đây để thanh toán trước khi \"Tiếp tục\"\t\t\t\t\t\t\t\t\t\t\n    </p>\n    <div>\n      <img style=\"width:170px\"  src={{qrimg}}>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/help_qrcode.jpg\">\n    </div>\n  </div>\n </ion-content>\n <ion-footer>\n  <div *ngIf=\"stt==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm thông tin chuyến bay vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n  <div *ngIf=\"stt!=0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymentpayoo/flightpaymentpayoo.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.totalPrice {\n  font-weight: bold;\n  color: #26BED6;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.mt20 {\n  margin-top: 20px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin-top: 18px;\n  margin-bottom: 13px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.mt12 {\n  margin-top: 12px;\n}\n\n.text-size-12 {\n  font-size: 12px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 16px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodHBheW1lbnRwYXlvby9mbGlnaHRwYXltZW50cGF5b28ucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRwYXltZW50cGF5b28vZmxpZ2h0cGF5bWVudHBheW9vLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVBLGNBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBS1EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNMUjs7QURRQTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDSmxEOztBRE1BO0VBRUksZ0JBQUE7QUNKSjs7QURNQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0hKOztBREtBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDRko7O0FESUE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREo7O0FER0E7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0NKOztBRENBO0VBRUksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFFSSxnQkFBQTtBQ0VKOztBREFBO0VBRUksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHBheW1lbnRwYXlvby9mbGlnaHRwYXltZW50cGF5b28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICAudG90YWxQcmljZVxue1xuICAgIGNvbG9yOiAjMjZCRUQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxufVxuLmJ1dHRvbjJcbntcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgLy8gY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ0blxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG59XG4ubXQxNVxue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4udG90YWxQcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyNkJFRDY7XG59XG4udGV4dHBheW1lbnR7XG4gICAgY29sb3I6IzAwM0M3MTsgXG4gICAgZm9udC13ZWlnaHQ6Ym9sZFxufVxuLnRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG4udGV4dC1wYXltZW50LWluZm97XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLnRleHQtYm9sZHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuLm10MjBcbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmRpdi1zcGxpdC1wYW5lbHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5tdDEyXG57XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi50ZXh0LXNpemUtMTJcbntcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cbi5kaXYtcXVpY2stYmFjayB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICBjb2xvcjogI2JkYmRiZDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTMuNXB4O1xuICAgIHRvcDogLTVweDtcbn1cblxuIiwiOjpuZy1kZWVwIC50b3RhbFByaWNlIHtcbiAgY29sb3I6ICMyNkJFRDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG90YWxQcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI2QkVENjtcbn1cblxuLnRleHRwYXltZW50IHtcbiAgY29sb3I6ICMwMDNDNzE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi50ZXh0LXBheW1lbnQtaW5mbyB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG5cbi5tdDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi5tdDEyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnRleHQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59XG5cbi5kaXYtcXVpY2stYmFjayB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMy41cHg7XG4gIHRvcDogLTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightpaymentpayoo/flightpaymentpayoo.page.ts ***!
  \***************************************************************/
/*! exports provided: FlightpaymentpayooPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentpayooPage", function() { return FlightpaymentpayooPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
















let FlightpaymentpayooPage = class FlightpaymentpayooPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal, modalCtrl, storage, _platform, _calendar, zone) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.backgroundmode = backgroundmode;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this._platform = _platform;
        this._calendar = _calendar;
        this.zone = zone;
        this.allowCheck = true;
        this.allowCheckHoldTicket = true;
        this.platform.ready().then(() => {
            this.backgroundmode.on('activate').subscribe(() => {
                console.log('background mode enabled');
                this.callCheckPayment();
            });
            this.backgroundmode.enable();
        });
        this.getSummaryBooking(this._flightService.itemFlightCache).then((databkg) => {
            this._flightService.itemFlightCache.dataSummaryBooking = databkg;
        });
    }
    ngOnInit() {
        this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        this._email = this._flightService.itemFlightCache.email;
        if (this.stt == 0) {
            this.BillingCode = this._flightService.itemFlightCache.BillingCode;
        }
        else {
            this.qrimg = this._flightService.itemFlightCache.qrimg;
            this.intervalID = setInterval(() => {
                clearInterval(this.intervalID);
                this.callCheckPayment();
            }, 1000 * 5);
            setTimeout(() => {
                clearInterval(this.intervalID);
            }, 60000 * 9.1);
        }
        this.total = this._flightService.itemFlightCache.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.textHours = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.periodPaymentDate).format("HH:mm");
        this.PeriodPaymentDate = this._flightService.itemFlightCache.periodPaymentDate ? this.gf.getDayOfWeek(this._flightService.itemFlightCache.periodPaymentDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.periodPaymentDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.periodPaymentDate).format("MM") : "";
    }
    goback() {
        if (this.stt == 1) {
            clearInterval(this.intervalID);
        }
        this.allowCheck = false;
        this.navCtrl.back();
    }
    next() {
        var se = this;
        if (se.stt == 0) {
            se.gf.hideLoading();
            se.clearItemCache();
            se._flightService.itemTabFlightActive.emit(true);
            se.valueGlobal.backValue = "homeflight";
            se._flightService.bookingCodePayment = se.bookingCode;
            se._flightService.bookingSuccess = true;
            se.navCtrl.navigateBack('/tabs/tab1');
        }
        else {
            clearInterval(this.intervalID);
            se.checkqrcode();
            se.allowCheck = false;
        }
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
                let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                let endDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                if (check) {
                    se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    });
                    if (!se._flightService.itemFlightCache.ischeckpayment) {
                        se.gf.hideLoading();
                        se.gf.createFlightTransaction(se._flightService.itemFlightCache);
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + startDate + '/' + endDate);
                    }
                    else {
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + startDate + '/' + endDate);
                    }
                }
                else {
                    se.gf.hideLoading();
                    if (!se._flightService.itemFlightCache.ischeckpayment) {
                        se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 1);
                        clearInterval(se.intervalID);
                    }
                    else {
                        se.navCtrl.navigateForward('/flightpaymentwarning');
                    }
                }
            }
        });
        setTimeout(() => {
            se.allowCheckHoldTicket = false;
        }, 1000 * 60 * 9.1);
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
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
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
                    if (result.expIssueTicket) {
                        se.allowCheckHoldTicket = false;
                        resolve(false);
                    }
                    else {
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
                }
            });
        });
    }
    checkqrcode() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + '/gate/apiv1/PaymentCheck?id=' + se._flightService.itemFlightCache.reservationId,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var rs = JSON.parse(response.body);
            let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
            let endDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
            if (rs.ipnCall == "CALLED_OK") {
                clearInterval(this.intervalID);
                se._flightService.itemFlightCache.ischeckpayment = 1;
                se.gf.hideLoading();
                clearInterval(se.intervalID);
                se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + startDate + '/' + endDate);
            }
            else if (rs.ipnCall == "CALLED_FAIL" && rs.errorCode == '99') {
                se.gf.hideLoading();
                clearInterval(se.intervalID);
                se.navCtrl.navigateForward('/flightpaymenterror');
            }
            else if (rs.ipnCall == "CALLED_TIMEOUT" && rs.errorCode == '253') {
                se.gf.hideLoading();
                clearInterval(se.intervalID);
                se._flightService.paymentError = rs;
                se.navCtrl.navigateForward('/flightpaymenttimeout');
            }
            else if (rs.ipnCall == "CALLED_FAIL" && rs.errorCode != '99') {
                se.gf.hideLoading();
                clearInterval(se.intervalID);
                se._flightService.paymentError = rs;
                se.navCtrl.navigateForward('/flightpaymenttimeout');
            }
            else {
                se.allowCheck = true;
                se.callCheckPayment();
            }
        });
    }
    callCheckPayment() {
        var se = this;
        if (se.allowCheck) {
            se.checkPayment();
        }
    }
    checkComboHotelCityPayment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "flightpaymentpayoo",
                    func: "checkComboHotelCityPayment",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "flightpaymentpayoo";
                error.func = "checkComboHotelCityPayment";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3 && !rs.error) {
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    });
                    let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                    let endDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                    se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + startDate + '/' + endDate);
                }
                else if (rs.error) {
                    setTimeout(() => {
                        se.checkComboHotelCityPayment();
                    }, 1000);
                }
            }
            else {
                error.page = "roomchoosebank";
                error.func = "mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                se.gf.hideLoading();
                clearInterval(se.intervalID);
                se._flightService.paymentError = rs.error;
                se.navCtrl.navigateForward('/flightpaymenttimeout/0');
            }
        });
    }
    checkPayment() {
        var se = this;
        if (se._flightService.itemFlightCache.objHotelCitySelected) {
            se.checkComboHotelCityPayment();
        }
        else {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se._flightService.itemFlightCache.reservationId;
            se.gf.Checkpayment(url).then((data) => {
                var checkpay = JSON.parse(data);
                let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                let endDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                if (checkpay.ipnCall == "CALLED_OK") {
                    clearInterval(this.intervalID);
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se.backgroundmode.disable();
                    se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + startDate + '/' + endDate);
                }
                else if (checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL") {
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = checkpay;
                    se.navCtrl.navigateForward('/flightpaymenttimeout');
                }
                else {
                    setTimeout(() => {
                        se.callCheckPayment();
                    }, 1000);
                }
            });
        }
    }
    openWebpagePayoo() {
        var url = "https://payoo.vn/mapv2/public/index.php?verify=true";
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
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
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_12__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_13__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            let itemflight = this._flightService.itemFlightCache;
            se.checkExistCalendarName(itemflight, true);
            if (itemflight.roundTrip) {
                setTimeout(() => {
                    se.checkExistCalendarName(itemflight, false);
                }, 300);
            }
        }
    }
    createCalendar(itemflight, isdepart, createOrModify) {
        let se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt chỗ: ` + (isdepart ? (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.departFlight ? itemflight.dataSummaryBooking.departFlight.atBookingCode : '') : (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.returnFlight ? itemflight.dataSummaryBooking.returnFlight.atBookingCode : '')) + `
      
Giờ ra tàu bay: ` + (isdepart ? (moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format("mm")) : (moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format("mm"))) +
            `	
      
Hành khách:

`;
        itemflight.adults.forEach((elementA, index) => {
            if (index != 0) {
                strmess += `

`;
            }
            strmess += index + 1 + ". " + elementA.genderdisplay + " " + elementA.name;
            if (isdepart && elementA.ancillaryJson) {
                let objjson = JSON.parse(elementA.ancillaryJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
            if (!isdepart && elementA.ancillaryReturnJson) {
                let objjson = JSON.parse(elementA.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
        });
        itemflight.childs.forEach((elementC, index) => {
            strmess += `

`;
            strmess += (index + 1 + itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.name;
            if (isdepart && elementC.ancillaryJson) {
                let objjson = JSON.parse(elementC.ancillaryJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
            if (!isdepart && elementC.ancillaryReturnJson) {
                let objjson = JSON.parse(elementC.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
        });
        strmess += `

`;
        if (itemflight.childs && itemflight.childs.length > 0) {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.childs.map((c) => { return c.name; }).join(', ') + ".";
        }
        else {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        }
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
        calOptions.calendarId = 1;
        let event = { title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + " (" + (isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) + ")",
            location: (isdepart ? itemflight.departAirport : itemflight.returnAirport),
            message: strmess,
            startDate: (isdepart ? itemflight.departFlight.departTime : itemflight.returnFlight.departTime),
            endDate: (isdepart ? itemflight.departFlight.landingTime : itemflight.returnFlight.landingTime),
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
                if (createOrModify) {
                    se.gf.showLoadingwithtimeout();
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                            se.zone.run(() => {
                                se.gf.hideLoading();
                                se._flightService.itemFlightCache = {};
                                se._flightService.itemMenuFlightClick.emit(2);
                                se.next();
                            });
                            se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                            });
                        }
                    });
                }
                else {
                    se._flightService.itemFlightCache = {};
                    se._flightService.itemMenuFlightClick.emit(2);
                    se.next();
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se.gf.showLoadingwithtimeout();
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                                se.zone.run(() => {
                                    se.gf.hideLoading();
                                    se._flightService.itemFlightCache = {};
                                    se._flightService.itemMenuFlightClick.emit(2);
                                    se.next();
                                });
                                se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                                });
                            }
                        });
                    }
                    else {
                        se._flightService.itemFlightCache = {};
                        se._flightService.itemMenuFlightClick.emit(2);
                        se.next();
                    }
                });
            }
        });
    }
    getSummaryBooking(data) {
        var se = this;
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
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightpaymentselect";
                    error.func = "getSummaryBooking";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    checkExistCalendarName(itemflight, isdepart) {
        let se = this;
        let calendarname = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_7__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
        this.storage.get('objectflightpaymentbank').then((data) => {
            if (data) {
                let arrobject = JSON.parse(data);
                if (arrobject && arrobject.length > 0) {
                    let objexists = arrobject.filter((item) => {
                        return item.resNo == itemflight.pnr.resNo;
                    });
                    if (objexists && objexists.length > 0) {
                        se.createCalendar(itemflight, isdepart, false);
                    }
                    else {
                        se.createCalendar(itemflight, isdepart, true);
                    }
                }
            }
            else {
                se.createCalendar(itemflight, isdepart, true);
            }
        });
    }
};
FlightpaymentpayooPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightpaymentpayoo',
        template: __webpack_require__(/*! ./flightpaymentpayoo.page.html */ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentpayoo.page.scss */ "./src/app/flightpaymentpayoo/flightpaymentpayoo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_11__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_15__["Calendar"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]])
], FlightpaymentpayooPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentpayoo-flightpaymentpayoo-module.js.map