(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentflightpayoo-mytripaymentflightpayoo-module"],{

/***/ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.module.ts ***!
  \***************************************************************************/
/*! exports provided: MytripaymentflightpayooPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightpayooPageModule", function() { return MytripaymentflightpayooPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentflightpayoo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentflightpayoo.page */ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentflightpayoo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightpayooPage"]
    }
];
let MytripaymentflightpayooPageModule = class MytripaymentflightpayooPageModule {
};
MytripaymentflightpayooPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentflightpayoo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightpayooPage"]]
    })
], MytripaymentflightpayooPageModule);



/***/ }),

/***/ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n         \n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\">\n            <label *ngIf=\"stt==0\" class=\"text-title\">Hoàn thành</label>\n            <label *ngIf=\"stt!=0\" class=\"text-title\">Thanh toán</label>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div *ngIf=\"stt=='0'\">\n    <div class=\"mt12\">\n      \n      <div>\n        <ion-label class=\"text\" text-wrap>\n          Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU\n        </ion-label>\n      </div>\n     <div>\n      <ion-label class=\"text\" text-wrap>\n        Vé máy bay đã được giữ đến {{textHours}} {{PeriodPaymentDate}}\n      </ion-label>\n     </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Vui lòng thanh toán đặt chỗ {{bookingCode}} theo thông tin bên dưới\n      </ion-label>\n    </div>\n    \n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Tổng tiền: <span class=\"totalPrice\">{{total}}</span>\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Mã thanh toán Payoo: <span class=\"totalPrice\">{{BillingCode}}</span>\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Hạn thanh toán: <span class=\"totalPrice\">Trước {{textHours}} </span><span>{{PeriodPaymentDate}}</span>\n      </ion-label>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/PayooStore.png\">\n    </div>\n    <div (click)=\"openWebpagePayoo()\">\n      <label class=\"text-size-12\" >Để tìm cửa hàng gần nhất, hãy <a style=\"color:#46a7ef\" target=\"_blank\" >xem tại đây</a></label>\n    </div>\n    <div class=\"div-split-panel\"></div>\n    <div> <p class=\"text-payment-info\" text-wrap>\n      Thông tin thanh toán cũng được gửi đến email <span class=\"text-bold\">{{_email}}</span>. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư Spam hoặc Junk Folder. \n    </p>\n     <p class=\"text-payment-info mt20\" text-wrap>\n      Chúng tôi sẽ gửi vé máy bay ngay khi nhận được thanh toán của Quý khách.\n    </p>\n  </div>\n  </div>\n  <div *ngIf=\"stt=='1'&&qrimg\">\n    <p>\n      Quý khách vui lòng quét mã QR dưới đây để thanh toán trước khi \"Tiếp tục\"\t\t\t\t\t\t\t\t\t\t\n    </p>\n    <div>\n      <img style=\"width:170px\"  src={{qrimg}}>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/help_qrcode.jpg\">\n    </div>\n  </div>\n </ion-content>\n <ion-footer>\n  <div *ngIf=\"stt==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm thông tin chuyến bay vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n  <div *ngIf=\"stt!=0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n.button2 {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.totalPrice {\n  font-weight: bold;\n  color: #26BED6;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.mt20 {\n  margin-top: 20px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin-top: 18px;\n  margin-bottom: 13px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.mt12 {\n  margin-top: 12px;\n}\n\n.text-size-12 {\n  font-size: 12px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 16px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL215dHJpcGF5bWVudGZsaWdodHBheW9vL215dHJpcGF5bWVudGZsaWdodHBheW9vLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0cGF5b28vbXl0cmlwYXltZW50ZmxpZ2h0cGF5b28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFLUSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0xSOztBRFFBO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNKbEQ7O0FETUE7RUFFSSxnQkFBQTtBQ0pKOztBRE1BO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDSEo7O0FES0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURJQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNESjs7QURHQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFSjs7QURBQTtFQUVJLGdCQUFBO0FDRUo7O0FEQUE7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0cGF5b28vbXl0cmlwYXltZW50ZmxpZ2h0cGF5b28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICAudG90YWxQcmljZVxue1xuICAgIGNvbG9yOiAjMjZCRUQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxufVxuLmJ1dHRvbjJcbntcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgLy8gY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtYnRuXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbn1cbi5tdDE1XG57XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi50b3RhbFByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzI2QkVENjtcbn1cbi50ZXh0cGF5bWVudHtcbiAgICBjb2xvcjojMDAzQzcxOyBcbiAgICBmb250LXdlaWdodDpib2xkXG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cbi50ZXh0LXBheW1lbnQtaW5mb3tcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBtYXJnaW46IDA7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG4ubXQyMFxue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4uZGl2LXNwbGl0LXBhbmVse1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLm10MTJcbntcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLnRleHQtc2l6ZS0xMlxue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuLmRpdi1xdWljay1iYWNrIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMy41cHg7XG4gICAgdG9wOiAtNXB4O1xufVxuXG4iLCI6Om5nLWRlZXAgLnRvdGFsUHJpY2Uge1xuICBjb2xvcjogIzI2QkVENjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tdDE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRvdGFsUHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNkJFRDY7XG59XG5cbi50ZXh0cGF5bWVudCB7XG4gIGNvbG9yOiAjMDAzQzcxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4udGV4dC1wYXltZW50LWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuXG4ubXQyMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4ubXQxMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi50ZXh0LXNpemUtMTIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZGl2LXF1aWNrLWJhY2sge1xuICBmb250LXNpemU6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBsZXR0ZXItc3BhY2luZzogLTMuNXB4O1xuICB0b3A6IC01cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.ts ***!
  \*************************************************************************/
/*! exports provided: MytripaymentflightpayooPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightpayooPage", function() { return MytripaymentflightpayooPage; });
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
















let MytripaymentflightpayooPage = class MytripaymentflightpayooPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal, modalCtrl, storage, _platform, _calendar, zone, activityService) {
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
        this.activityService = activityService;
        this.allowCheck = true;
        this.allowCheckHoldTicket = true;
        this.platform.ready().then(() => {
            this.backgroundmode.on('activate').subscribe(() => {
                console.log('background mode enabled');
                this.callCheckPayment();
            });
            this.backgroundmode.enable();
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
        this.getSummaryBooking().then((databkg) => {
            this._flightService.itemFlightCache.dataSummaryBooking = databkg;
        });
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
            try {
                se.storage.get('objectflightpaymentbank').then((data) => {
                    if (data) {
                        let arrobject = JSON.parse(data);
                        if (arrobject && arrobject.length > 0) {
                            arrobject.push({ resNo: se.bookingCode, checkInDate: se._flightService.itemFlightCache.checkInDate, checkOutDate: se._flightService.itemFlightCache.checkOutDate, totalPrice: se.total, itemFlightCache: se._flightService.itemFlightCache });
                        }
                        else {
                            arrobject = [];
                            arrobject.push({ resNo: se.bookingCode, checkInDate: se._flightService.itemFlightCache.checkInDate, checkOutDate: se._flightService.itemFlightCache.checkOutDate, totalPrice: se.total, itemFlightCache: se._flightService.itemFlightCache });
                        }
                        se.storage.remove('objectflightpaymentbank').then(() => {
                            se.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
                        });
                    }
                    else {
                        let arr = [];
                        arr.push({ resNo: se.bookingCode, checkInDate: se._flightService.itemFlightCache.checkInDate, checkOutDate: se._flightService.itemFlightCache.checkOutDate, totalPrice: se.total, itemFlightCache: se._flightService.itemFlightCache });
                        se.storage.set('objectflightpaymentbank', JSON.stringify(arr));
                    }
                });
            }
            catch (error) {
                console.log('fail to set storage object');
            }
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
    checkHoldTicket() {
        var se = this, res = false;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + se.bookingCode;
        se.callCheckHoldTicket().then((check) => {
            if (!check && se.allowCheckHoldTicket) {
                res = false;
                setTimeout(() => {
                    se.checkHoldTicket();
                }, 3000);
            }
            else {
                let startDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                let endDate = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                if (check) {
                    se.getSummaryBooking().then((databkg) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    });
                    if (!se._flightService.itemFlightCache.ischeckpayment) {
                        se.gf.hideLoading();
                        se.gf.createFlightTransaction(se._flightService.itemFlightCache);
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('/mytripaymentflighdone');
                    }
                    else {
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('/mytripaymentflighdone');
                    }
                }
                else {
                    se.gf.hideLoading();
                    if (!se._flightService.itemFlightCache.ischeckpayment) {
                        se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 1);
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
    callCheckHoldTicket() {
        var res = false, se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode,
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
    checkqrcode() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + '/gate/apiv1/PaymentCheck?id=' + this.bookingCode,
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
                se.navCtrl.navigateForward('/mytripaymentflighdone');
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
                se.navCtrl.navigateForward('/flightpaymenttimeout/1');
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
                    clearInterval(se.intervalID);
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                }
                else if (rs.error) {
                    se.gf.hideLoading();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = rs;
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
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
        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            se.checkComboHotelCityPayment();
        }
        else {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + this.bookingCode;
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
                    se.navCtrl.navigateForward('/mytripaymentflighdone');
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
    getSummaryBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + se.bookingCode,
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
MytripaymentflightpayooPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-mytripaymentflightpayoo',
        template: __webpack_require__(/*! ./mytripaymentflightpayoo.page.html */ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentflightpayoo.page.scss */ "./src/app/mytripaymentflightpayoo/mytripaymentflightpayoo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_11__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_14__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_15__["Calendar"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["ActivityService"]])
], MytripaymentflightpayooPage);



/***/ })

}]);
//# sourceMappingURL=mytripaymentflightpayoo-mytripaymentflightpayoo-module.js.map