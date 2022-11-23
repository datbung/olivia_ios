(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginsmsverify-loginsmsverify-module"],{

/***/ "./src/app/loginsmsverify/loginsmsverify.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/loginsmsverify/loginsmsverify.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginsmsverifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsmsverifyPageModule", function() { return LoginsmsverifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loginsmsverify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginsmsverify.page */ "./src/app/loginsmsverify/loginsmsverify.page.ts");







const routes = [
    {
        path: '',
        component: _loginsmsverify_page__WEBPACK_IMPORTED_MODULE_6__["LoginsmsverifyPage"]
    }
];
let LoginsmsverifyPageModule = class LoginsmsverifyPageModule {
};
LoginsmsverifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loginsmsverify_page__WEBPACK_IMPORTED_MODULE_6__["LoginsmsverifyPage"]]
    })
], LoginsmsverifyPageModule);



/***/ }),

/***/ "./src/app/loginsmsverify/loginsmsverify.page.html":
/*!*********************************************************!*\
  !*** ./src/app/loginsmsverify/loginsmsverify.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Mã xác minh</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"content-confirm\">\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 14px\">\n      Vui lòng nhập mã xác minh được gửi đến số\n    </label>\n  </div>\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 16px;color: #333333\">\n      {{phone}}\n    </label>\n  </div>\n  <ion-row class=\"row-otp\" >\n    <ion-col size=\"1.8\" class=\"no-padding\">\n      <ion-label class=\"label-otp\">IVV-</ion-label>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\" (ionChange)=\"changeOTP(1)\">\n      <ion-input  [(ngModel)]=\"num1\" maxlength=\"1\" #ipOTP1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\" (ionChange)=\"changeOTP(2)\">\n      <ion-input  [(ngModel)]=\"num2\" maxlength=\"1\" #ipOTP2 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\" (ionChange)=\"changeOTP(3)\" >\n      <ion-input [(ngModel)]=\"num3\" maxlength=\"1\" #ipOTP3 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\" (ionChange)=\"changeOTP(4)\">\n      <ion-input  [(ngModel)]=\"num4\" maxlength=\"1\" #ipOTP4 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\" (ionChange)=\"changeOTP(5)\">\n      <ion-input  [(ngModel)]=\"num5\" maxlength=\"1\" #ipOTP5 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.2\" class=\"no-padding\">\n      <ion-input #ipOTP6 maxlength=1 [(ngModel)]=\"num6\" type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.6\" class=\"no-padding text-left z-99\" (click)=\"clearOTP()\">\n      <ion-label class=\"label-delete\">Xóa</ion-label>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col [ngClass]=\"!numall ? 'no-padding ip-all' : 'no-padding ip-all cls-hidden' \">\n      <ion-input #ipOTPALL (ionChange)=\"changeAll($event)\" maxlength=\"6\" [(ngModel)]=\"numall\" type=tel autofocus autocomplete=\"one-time-code\"></ion-input>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngIf=\"strwarning\" style=\"margin-top: 10px;margin-right: 30px\">\n    <ion-col class=\"no-padding\"><ion-label class=\"label-warning\">{{strwarning}}</ion-label></ion-col>\n</ion-row>\n  <div style=\"margin-top: 25px\"><button (click)=\"confirm()\" ion-button round outline class=\"button btn-save-phone\">Xác nhận</button></div>\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center\" >\n      <ion-label style=\"color: #828282;font-size: 14px\">Chưa nhận được tin nhắn? <span (click)=\"sendOTP()\"\n          style=\"color: #26bed6;font-size: 14px\">Gửi lại mã xác minh</span></ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/loginsmsverify/loginsmsverify.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/loginsmsverify/loginsmsverify.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-confirm .input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 36px;\n  height: 36px;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 25px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n  margin-right: 4px;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n::ng-deep .content-confirm .native-input.sc-ion-input-md {\n  text-align: center;\n  margin-right: 10px;\n}\n\n::ng-deep .input-opt .sc-ion-input-md-h {\n  --padding-top: 10px ;\n  --padding-end: 0;\n  --padding-bottom: 10px;\n  --padding-start: 4px;\n}\n\n::ng-deep .ip-all .native-input.sc-ion-input-md {\n  text-align: left !important;\n  padding-left: 70px;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red;\n  white-space: normal;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 0;\n}\n\n.ip-all {\n  position: absolute;\n  margin-top: -29px;\n  text-align: left !important;\n  padding-left: 70px !important;\n}\n\n.cls-hidden {\n  visibility: hidden;\n}\n\n.label-delete {\n  color: #26bed6;\n  padding-left: 4px;\n  text-decoration: underline;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.z-99 {\n  z-index: 99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9sb2dpbnNtc3ZlcmlmeS9sb2dpbnNtc3ZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luc21zdmVyaWZ5L2xvZ2luc21zdmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1I7O0FEREk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQ0dSOztBREVRO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQ0FaOztBRElBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0FKOztBREVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLFdBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luc21zdmVyaWZ5L2xvZ2luc21zdmVyaWZ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWNvbmZpcm1cclxuLmlucHV0LW90cHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ucm93LW90cHtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLm5vLXBhZGRpbmd7XHJcbiAgICBwYWRkaW5nOiAwcHggOHB4IDBweCAwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbi1yaWdodDogNHB4O1xyXG59XHJcbi5sYWJlbC1vdHB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gICAgLmNvbnRlbnQtY29uZmlybSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1vcHQgLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAxMHB4IDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlwLWFsbCB7XHJcblxyXG4gICAgICAgIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5sYWJlbC13YXJuaW5ne1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJlZCA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5sYWJlbC1zZW50LW90cHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4uYnRuLXNhdmUtcGhvbmV7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4uaXAtYWxsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IC0yOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNscy1oaWRkZW4ge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sYWJlbC1kZWxldGUge1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi50ZXh0LWxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uei05OSB7XHJcbiAgICB6LWluZGV4OiA5OTtcclxufSIsIi5jb250ZW50LWNvbmZpcm0gLmlucHV0LW90cCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yb3ctb3RwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XG59XG5cbi5sYWJlbC1vdHAge1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbjo6bmctZGVlcCAuY29udGVudC1jb25maXJtIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46Om5nLWRlZXAgLmlucHV0LW9wdCAuc2MtaW9uLWlucHV0LW1kLWgge1xuICAtLXBhZGRpbmctdG9wOiAxMHB4IDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG59XG46Om5nLWRlZXAgLmlwLWFsbCAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiA3MHB4O1xufVxuXG4ubGFiZWwtd2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxhYmVsLXNlbnQtb3RwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmJ0bi1zYXZlLXBob25lIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG5cbi5pcC1hbGwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC0yOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogNzBweCAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmxhYmVsLWRlbGV0ZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi50ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uei05OSB7XG4gIHotaW5kZXg6IDk5O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/loginsmsverify/loginsmsverify.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/loginsmsverify/loginsmsverify.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginsmsverifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsmsverifyPage", function() { return LoginsmsverifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");















let LoginsmsverifyPage = class LoginsmsverifyPage {
    constructor(modalCtrl, appVersion, searchhotel, fcm, zone, navCtrl, keyboard, storage, valueGlobal, toastCtrl, gf, foodService, _flightService) {
        this.modalCtrl = modalCtrl;
        this.appVersion = appVersion;
        this.searchhotel = searchhotel;
        this.fcm = fcm;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this.toastCtrl = toastCtrl;
        this.gf = gf;
        this.foodService = foodService;
        this._flightService = _flightService;
        this.num1 = "";
        this.num2 = "";
        this.num3 = "";
        this.num4 = "";
        this.num5 = "";
        this.num6 = "";
        this.numall = "";
        this.phone = this.valueGlobal.phone;
        this.storage.get('checkreview').then(checkreview => {
            this.checkreview = checkreview;
        });
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.ipOTPALL.setFocus();
        }, 150);
        this.keyboard.show();
    }
    changeAll(e) {
        console.log(e.detail.value);
        let val = e.detail.value;
        if (val && val.length == 6) {
            this.num1 = val.substring(0, 1);
            this.num2 = val.substring(1, 2);
            this.num3 = val.substring(2, 3);
            this.num4 = val.substring(3, 4);
            this.num5 = val.substring(4, 5);
            this.num6 = val.substring(5, 6);
        }
        else if (val && val.length == 5) {
            this.num1 = val.substring(0, 1);
            this.num2 = val.substring(1, 2);
            this.num3 = val.substring(2, 3);
            this.num4 = val.substring(3, 4);
            this.num5 = val.substring(4, 5);
            this.ipOTP6.setFocus();
        }
        else if (val && val.length == 4) {
            this.num1 = val.substring(0, 1);
            this.num2 = val.substring(1, 2);
            this.num3 = val.substring(2, 3);
            this.num4 = val.substring(3, 4);
            this.ipOTP5.setFocus();
        }
        else if (val && val.length == 3) {
            this.num1 = val.substring(0, 1);
            this.num2 = val.substring(1, 2);
            this.num3 = val.substring(2, 3);
            this.ipOTP4.setFocus();
        }
        else if (val && val.length == 2) {
            this.num1 = val.substring(0, 1);
            this.num2 = val.substring(1, 2);
            this.ipOTP3.setFocus();
        }
        else if (val && val.length == 1) {
            this.num1 = val.substring(0, 1);
            this.ipOTP2.setFocus();
        }
    }
    changeOTP(index) {
        if (index == 1 && this.num1) {
            this.ipOTP2.setFocus();
        }
        else if (index == 2 && this.num2) {
            this.ipOTP3.setFocus();
        }
        else if (index == 3 && this.num3) {
            this.ipOTP4.setFocus();
        }
        else if (index == 4 && this.num4) {
            this.ipOTP5.setFocus();
        }
        else if (index == 5 && this.num5) {
            this.ipOTP6.setFocus();
        }
        this.keyboard.show();
    }
    clearOTP() {
        this.zone.run(() => {
            this.num1 = "";
            this.num2 = "";
            this.num3 = "";
            this.num4 = "";
            this.num5 = "";
            this.num6 = "";
            this.ipOTP1.setFocus();
        });
    }
    confirm() {
        var se = this;
        if (this.num1 && this.num2 && this.num3 && this.num4 && this.num6) {
            se.obj = this.num1 + this.num2 + this.num3 + this.num4 + this.num5 + this.num6;
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/LoginSMS',
                headers: {
                    'postman-token': 'aac9e726-944b-2180-2416-63d2b1031a7a',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { PhoneNumber: this.phone, Token: se.obj },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body.result) {
                    if (body.auth_token) {
                        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_11___default()(body.auth_token);
                        se.refreshTokenTimer = decoded.refreshTokenTimer;
                        se.storage.set("email", decoded.email);
                        se.storage.set("auth_token", body.auth_token);
                        se.storage.set("username", decoded.fullname);
                        se.storage.set("phone", decoded.phone);
                        var checkfullname = false;
                        if (decoded.fullname) {
                            checkfullname = se.hasWhiteSpace(decoded.fullname);
                        }
                        se.storage.remove('deviceToken');
                        se.fcm.getToken().then(token => {
                            se.deviceToken = token;
                            se.storage.set('deviceToken', token);
                            if (se.deviceToken) {
                                se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
                            }
                        });
                        var info;
                        if (checkfullname) {
                            var textfullname = decoded.fullname.trim();
                            textfullname = decoded.fullname.split(' ');
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
                                info = { ho: textfullname[0], ten: name, phone: decoded.phone, gender: decoded.gender };
                            }
                            else if (textfullname.length > 1) {
                                info = { ho: textfullname[0], ten: textfullname[1], phone: decoded.phone, gender: decoded.gender };
                            }
                            else if (textfullname.length == 1) {
                                info = { ho: textfullname[0], ten: "", phone: decoded.phone, gender: decoded.gender };
                            }
                            se.storage.set("infocus", info);
                        }
                        else {
                            info = { ho: "", ten: "", phone: decoded.phone, fullname: "", gender: decoded.gender };
                            se.storage.set("infocus", info);
                        }
                        if (Array.isArray(decoded.jti)) {
                            se.storage.set("jti", decoded.jti[0]);
                        }
                        else {
                            se.storage.set("jti", decoded.jti);
                        }
                        se.storage.remove('blogtripdefault');
                        se.storage.remove('regionnamesuggest');
                        se.storage.remove('listtopdealdefault');
                        se.valueGlobal.countNotifi = 0;
                        se.gf.setParams(true, 'resetBlogTrips');
                        if (!se.checkreview) {
                            se.storage.set("checkreview", 0);
                        }
                        se.storage.set("point", decoded.point);
                        se.searchhotel.rootPage = 'login';
                        if (se.valueGlobal.backValue == 'foodaccount') {
                            se.foodService.menuFooterClick.emit(4);
                        }
                        if (se.valueGlobal.backValue == "flightaccount") {
                            se._flightService.itemMenuFlightClick.emit(4);
                        }
                        if (se.valueGlobal.logingoback) {
                            if (se.valueGlobal.logingoback == "flightadddetails" || se.valueGlobal.logingoback == "flightadddetailsinternational") {
                                se._flightService.itemFlightLogin.emit(1);
                            }
                            se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
                        }
                        else {
                            se.navCtrl.navigateRoot('/');
                        }
                    }
                }
                else {
                    alert(body.msg);
                }
            });
        }
        else {
            se.presentToast("XIn nhập đầy đủ mã OTP");
        }
    }
    countdownRefreshToken() {
        var timer = parseInt(this.refreshTokenTimer);
        this.countdownTimer(timer);
    }
    countdownTimer(timer) {
        if (timer >= 0) {
            this.valueGlobal.interval = setInterval(() => {
                timer--;
                if (timer < 0) {
                    clearInterval(this.valueGlobal.interval);
                    this.reloadToken();
                }
            }, 1000);
        }
    }
    reloadToken() {
        this.refreshToken();
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var json = JSON.parse(body);
                            if (json.auth_token) {
                                se.storage.remove('auth_token').then(() => {
                                    se.storage.set("auth_token", json.auth_token);
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    sendOTP() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/OTPLoginSMS',
            headers: {
                'postman-token': '0b9f3a80-3e35-1af7-058f-597d733e7cee',
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: { PhoneNumber: this.phone },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            if (!body.result) {
                alert(body.msg);
            }
            se.numall = "";
            setTimeout(() => {
                se.ipOTPALL.setFocus();
            }, 100);
            this.keyboard.show();
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP1'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP2'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP3'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP4'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP5'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP5", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP6'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTP6", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTPALL'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsverifyPage.prototype, "ipOTPALL", void 0);
LoginsmsverifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-loginsmsverify',
        template: __webpack_require__(/*! ./loginsmsverify.page.html */ "./src/app/loginsmsverify/loginsmsverify.page.html"),
        styles: [__webpack_require__(/*! ./loginsmsverify.page.scss */ "./src/app/loginsmsverify/loginsmsverify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_12__["foodService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_13__["flightService"]])
], LoginsmsverifyPage);



/***/ })

}]);
//# sourceMappingURL=loginsmsverify-loginsmsverify-module.js.map