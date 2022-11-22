(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bizTravel-confirmpayment-confirmpayment-module"],{

/***/ "./src/app/bizTravel/confirmpayment/confirmpayment.html":
/*!**************************************************************!*\
  !*** ./src/app/bizTravel/confirmpayment/confirmpayment.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"biztravel-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"cancel()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Xác thực thanh toán</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n    <div class=\"div-confirmpayment-content\">\n        <div class=\"d-flex\">\n            <div class=\"div-width-40 text-label\">Mã đơn hàng</div>\n            <div class=\"div-width-60 cls-ivivu\">{{bookingCode}}</div>\n        </div>\n\n        <div class=\"d-flex\">\n            <div class=\"div-width-40 text-label\">Số dư credit</div>\n            <div class=\"div-width-60\" *ngIf=\"bizTravelService.bizAccount.balanceAvaiable\">{{ gf.numberToCurrency(bizTravelService.bizAccount.balanceAvaiable, '.') }} đ</div>\n        </div>\n\n        <div class=\"d-flex\">\n            <div class=\"div-width-40 text-label\">Số tiền</div>\n            <div class=\"div-width-60\">{{totalPriceDisplay}} đ</div>\n        </div>\n\n        <div class=\"div-split-panel\"></div>\n\n        <div class=\"text-bold m-bottom-19\">Xác thực thanh toán</div>\n        <div>Vui lòng nhập mã OTP được gửi đến số điện thoại {{bizTravelService.phoneOtpShort}}</div>\n\n            <form padding=\"true\" style=\"padding: 0; border-bottom: solid 1px #ccc;\" [formGroup]=\"otpData\" >\n                <ion-input  #user  clearInput type=\"tel\" [(ngModel)]=\"otp\" formControlName=\"otp\" autocomplete=\"one-time-code\"></ion-input>\n            </form>\n       \n\n        <div class=\" t-right p-16\" (click)=\"resendOTP()\">Gửi lại OTP</div>\n    </div>\n  </ion-content>\n  <ion-footer>\n      <div class=\"div-confirmpayment-footer\">\n        <button (click)=\"cancel()\" ion-button round outline class=\"button button-cancel\">Hủy</button>\n        <button (click)=\"confirm()\" ion-button round outline class=\"button button-confirm\">Xác nhận</button>\n      </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/bizTravel/confirmpayment/confirmpayment.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/bizTravel/confirmpayment/confirmpayment.module.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPageModule", function() { return ConfirmPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmpayment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirmpayment */ "./src/app/bizTravel/confirmpayment/confirmpayment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







const routes = [
    {
        path: '',
        component: _confirmpayment__WEBPACK_IMPORTED_MODULE_5__["ConfirmPaymentPage"]
    }
];
let ConfirmPaymentPageModule = class ConfirmPaymentPageModule {
};
ConfirmPaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [_confirmpayment__WEBPACK_IMPORTED_MODULE_5__["ConfirmPaymentPage"]]
    })
], ConfirmPaymentPageModule);



/***/ }),

/***/ "./src/app/bizTravel/confirmpayment/confirmpayment.scss":
/*!**************************************************************!*\
  !*** ./src/app/bizTravel/confirmpayment/confirmpayment.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-width-40 {\n  width: 40%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.m-bottom-19 {\n  margin-bottom: 19px;\n}\n\n.m-top-16 {\n  margin-top: 16px;\n}\n\n.t-right {\n  text-align: right;\n  text-decoration: underline;\n  color: #003c71;\n}\n\n.div-confirmpayment-content {\n  padding: 16px;\n  font-size: 16px;\n  line-height: 1.5;\n  text-align: left;\n  color: #333;\n}\n\n.div-confirmpayment-content .text-label {\n  font-size: 14px;\n  line-height: 1.5;\n  text-align: left;\n  color: #828282;\n}\n\n.div-confirmpayment-content .cls-ivivu {\n  color: #26bed6;\n}\n\n.div-confirmpayment-content .div-split-panel {\n  height: 8px;\n  margin: 23px -16px 25px -16px;\n  background-color: #f9fbfc;\n}\n\n.div-confirmpayment-content .text-bold {\n  font-weight: 600;\n}\n\n.div-confirmpayment-content .p-16 {\n  padding: 16px 0;\n}\n\n.div-confirmpayment-footer {\n  display: flex;\n  margin: 0 16px;\n}\n\n.div-confirmpayment-footer .button-cancel {\n  border-radius: 4px;\n  background: #fff;\n  color: #f79321;\n  border: solid 1px #f59233;\n  font-size: 17px;\n  font-weight: 600;\n  padding: 12px 0 11px;\n  margin-right: 8px;\n  text-align: center;\n  width: 100%;\n}\n\n.div-confirmpayment-footer .button-confirm {\n  border-radius: 4px;\n  background-color: #f59233;\n  color: #fff;\n  border: solid 1px #f59233;\n  font-size: 17px;\n  font-weight: 600;\n  padding: 12px 0 11px;\n  text-align: center;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9iaXpUcmF2ZWwvY29uZmlybXBheW1lbnQvY29uZmlybXBheW1lbnQuc2NzcyIsInNyYy9hcHAvYml6VHJhdmVsL2NvbmZpcm1wYXltZW50L2NvbmZpcm1wYXltZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxVQUFBO0FDRUo7O0FEQUE7RUFDSSxVQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDT0o7O0FETEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNPUjs7QURKSTtFQUNJLGNBQUE7QUNNUjs7QURISTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDS1I7O0FERkk7RUFDSSxnQkFBQTtBQ0lSOztBREZJO0VBQ0ksZUFBQTtBQ0lSOztBREVBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQ1I7O0FERUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2JpelRyYXZlbC9jb25maXJtcGF5bWVudC9jb25maXJtcGF5bWVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtd2lkdGgtNDAge1xuICAgIHdpZHRoOiA0MCU7XG59XG4uZGl2LXdpZHRoLTYwIHtcbiAgICB3aWR0aDogNjAlO1xufVxuLm0tYm90dG9tLTE5e1xuICAgIG1hcmdpbi1ib3R0b206IDE5cHg7XG59XG4ubS10b3AtMTYge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG4udC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LWNvbmZpcm1wYXltZW50LWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgLnRleHQtbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLmNscy1pdml2dXtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdC1wYW5lbCB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBtYXJnaW46IDIzcHggLTE2cHggMjVweCAtMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgICB9XG5cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAucC0xNntcbiAgICAgICAgcGFkZGluZzogMTZweCAwO1xuICAgIH1cbn1cblxuXG5cbi5kaXYtY29uZmlybXBheW1lbnQtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG5cbiAgICAuYnV0dG9uLWNhbmNlbCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmNzkzMjE7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDExcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5idXR0b24tY29uZmlybSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OTIzMztcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZzogMTJweCAwIDExcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuIiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtd2lkdGgtNDAge1xuICB3aWR0aDogNDAlO1xufVxuXG4uZGl2LXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLm0tYm90dG9tLTE5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTlweDtcbn1cblxuLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZGl2LWNvbmZpcm1wYXltZW50LWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi1jb25maXJtcGF5bWVudC1jb250ZW50IC50ZXh0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtY29uZmlybXBheW1lbnQtY29udGVudCAuY2xzLWl2aXZ1IHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LWNvbmZpcm1wYXltZW50LWNvbnRlbnQgLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogOHB4O1xuICBtYXJnaW46IDIzcHggLTE2cHggMjVweCAtMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbn1cbi5kaXYtY29uZmlybXBheW1lbnQtY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtY29uZmlybXBheW1lbnQtY29udGVudCAucC0xNiB7XG4gIHBhZGRpbmc6IDE2cHggMDtcbn1cblxuLmRpdi1jb25maXJtcGF5bWVudC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cbi5kaXYtY29uZmlybXBheW1lbnQtZm9vdGVyIC5idXR0b24tY2FuY2VsIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2Y3OTMyMTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMnB4IDAgMTFweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbmZpcm1wYXltZW50LWZvb3RlciAuYnV0dG9uLWNvbmZpcm0ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEycHggMCAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bizTravel/confirmpayment/confirmpayment.ts":
/*!************************************************************!*\
  !*** ./src/app/bizTravel/confirmpayment/confirmpayment.ts ***!
  \************************************************************/
/*! exports provided: ConfirmPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentPage", function() { return ConfirmPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var src_app_providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var src_app_providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var src_app_providers_foodService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
















let ConfirmPaymentPage = class ConfirmPaymentPage {
    constructor(navCtrl, bizTravelService, _flightService, formBuilder, gf, safariViewController, loadingCtrl, zone, storage, alertCtrl, bookCombo, roomInfo, activityService, Roomif, _mytripservice, _foodService, valueGlobal, keyboard) {
        this.navCtrl = navCtrl;
        this.bizTravelService = bizTravelService;
        this._flightService = _flightService;
        this.formBuilder = formBuilder;
        this.gf = gf;
        this.safariViewController = safariViewController;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.bookCombo = bookCombo;
        this.roomInfo = roomInfo;
        this.activityService = activityService;
        this.Roomif = Roomif;
        this._mytripservice = _mytripservice;
        this._foodService = _foodService;
        this.valueGlobal = valueGlobal;
        this.keyboard = keyboard;
        this.typeSearch = 0;
        this.otp = '';
        this.otpData = this.formBuilder.group({
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
        });
        if (this.bizTravelService.paymentType == 1) {
            if (this._flightService.itemFlightCache) {
                this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
                this.startDate = moment__WEBPACK_IMPORTED_MODULE_3__(this._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
                this.endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
                this.totalPriceDisplay = _flightService.itemFlightCache.totalPriceDisplay;
                this.totalPrice = this.gf.convertStringToNumber(_flightService.itemFlightCache.totalPriceDisplay);
            }
        }
        else if (this.bizTravelService.paymentType == 3) {
            this.bookingCode = this.bookCombo.bookingcode;
            this.totalPriceDisplay = this.gf.convertNumberToString(this.bookCombo.totalprice);
            this.totalPrice = this.bookCombo.totalprice;
        }
        else if (this.bizTravelService.paymentType == 2) {
            if (roomInfo.priceshow) {
                this.totalPriceDisplay = this.gf.convertNumberToString(roomInfo.priceshow);
                this.totalPrice = this.gf.convertStringToNumber(roomInfo.priceshow);
            }
            else {
                this.totalPriceDisplay = roomInfo.roomtype.PriceAvgPlusTAStr;
                this.totalPrice = this.gf.convertStringToNumber(roomInfo.roomtype.PriceAvgPlusTAStr);
            }
            this.bookingCode = this.roomInfo.bookingCode;
        }
        else if (this.bizTravelService.paymentType == 4) {
            this.totalPrice = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
            this.totalPriceDisplay = this.activityService.objPaymentMytrip.trip.priceShow;
            this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        }
        this.storage.get('jti').then(jti => {
            this.jti = jti;
        });
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.input.setFocus();
        }, 150);
        this.keyboard.show();
    }
    goback() {
        this.navCtrl.back();
    }
    cancel() {
        var se = this;
        if (se.bizTravelService.routeBackWhenCancel && se.bizTravelService.routeBackWhenCancel == 'roomdetailreview' && (se.Roomif.point || se.Roomif.promocode)) {
            se.redirectConfirm(se.Roomif.point, se.Roomif.promocode, se.bookingCode, se.bizTravelService.routeBackWhenCancel, 2);
        }
        else {
            se.goback();
        }
    }
    redirectConfirm(point, promocode, bookingcode, routecancel, type) {
        var se = this;
        if (point && bookingcode) {
            se.navCtrl.navigateForward('/roomdetailreview');
            se.showConfirm("Điểm tích luỹ " + point + " đã được dùng cho booking " + bookingcode + ".Xin vui lòng thao tác lại booking!");
            se.Roomif.point = "";
            se.Roomif.bookingCode = "";
        }
        else if (promocode && bookingcode) {
            se.navCtrl.navigateForward('/roomdetailreview');
            se.showConfirm("Mã giảm giá " + promocode + " đã được dùng cho booking " + bookingcode + ".Xin vui lòng thao tác lại booking!");
            se.Roomif.promocode = "";
            se.Roomif.bookingCode = "";
        }
        else {
            this.navCtrl.navigateBack('/' + this.bizTravelService.routeBackWhenCancel);
        }
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: 'cls-global-confirm',
                buttons: [
                    {
                        text: 'Xác nhận',
                        role: 'OK',
                        handler: () => {
                            this.navCtrl.navigateBack('/' + this.bizTravelService.routeBackWhenCancel);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    confirm() {
        if (!this.otpData.value.otp) {
            this.gf.showToastWarning("Vui lòng nhập mã OTP");
            return;
        }
        this.gf.showLoading();
        this.checkOTP(this.otpData.value.otp);
    }
    checkOTP(otp) {
        try {
            this.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var headers = {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    };
                    var params = { bookingCode: this.bookingCode, otp: otp };
                    this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/biz-otp-valid', headers, params, 'confirmpayment', 'checkOTP').then((data) => {
                        this.gf.hideLoading();
                        if (data && data.success) {
                            this.navCtrl.navigateForward('confirmpaymentdone');
                        }
                        else {
                            this.gf.showToastWarning(data.msg);
                        }
                    });
                }
            });
        }
        catch (error) {
            this.gf.showToastWarning("Đã có lỗi xảy ra. Vui lòng thử lại sau");
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
        });
    }
    resendOTP() {
        var se = this;
        se.presentLoading();
        if (this.jti) {
            var options = {
                'method': 'POST',
                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/biz-otp-resend',
                'headers': {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                form: {
                    'bookingCode': this.bookingCode,
                    'memberid': this.jti,
                    'totalPrice': this.totalPrice
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response) {
                if (error)
                    throw new Error(error);
                let data = JSON.parse(response.body);
                se.hideLoading();
                if (data) {
                    se.gf.showToastWarning(data.msg);
                }
            });
        }
        else {
            se.gf.showToastWarning('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
            se.hideLoading();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('user'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConfirmPaymentPage.prototype, "input", void 0);
ConfirmPaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmpayment',
        template: __webpack_require__(/*! ./confirmpayment.html */ "./src/app/bizTravel/confirmpayment/confirmpayment.html"),
        styles: [__webpack_require__(/*! ./confirmpayment.scss */ "./src/app/bizTravel/confirmpayment/confirmpayment.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_4__["BizTravelService"],
        src_app_providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
        src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_12__["Bookcombo"],
        src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_12__["RoomInfo"],
        src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"],
        src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_12__["RoomInfo"],
        src_app_providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_13__["MytripService"],
        src_app_providers_foodService__WEBPACK_IMPORTED_MODULE_14__["foodService"],
        src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_12__["ValueGlobal"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_15__["Keyboard"]])
], ConfirmPaymentPage);



/***/ }),

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=bizTravel-confirmpayment-confirmpayment-module.js.map