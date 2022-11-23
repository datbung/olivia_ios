(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentdoneean-roompaymentdoneean-module"],{

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



/***/ }),

/***/ "./src/app/roompaymentdoneean/roompaymentdoneean.html":
/*!************************************************************!*\
  !*** ./src/app/roompaymentdoneean/roompaymentdoneean.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentdonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;\">\n      <div style=\"align-self: center\" >\n          <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n<ion-content padding>\n  <img  src=\"./assets/step/step_4.svg\">\n    <!-- <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/fc_step_3.svg\">\n      </div> -->\n    <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='0'\">\n      <div>\n        <ion-label style=\"font-weight: bold\">\n          Cảm ơn Quý khách sử dụng dịch vụ iVIVU.com\n        </ion-label>\n      </div>\n      <div>\n        <ion-label>\n          Mã {{texttype}} của quý khách là\n          <span style=\"font-weight: bold\">{{code}}</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Giao dịch thanh toán thành công. Tổng số tiền thanh toán là :\n          <span style=\"font-weight: bold\">{{total}} VND</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Xác nhận {{texttype}} đã được gửi đến email của Quý khách.\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email tc@ivivu.com để được trợ giúp.\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Hồ Chí Minh: 1900 1870\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Hà Nội: 1900 2045\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Cần Thơ: 1900 2087\n        </ion-label>\n      </div>\n\n    </div>\n    <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='1'\">\n      <div>\n        <ion-label style=\"font-weight: bold\">\n          Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n        </ion-label>\n      </div>\n      <div>\n        <ion-label>\n          Mã đặt phòng của quý khách là\n          <span style=\"font-weight: bold\">{{code}}</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Nhân viên iVIVU.COM sẽ liên lạc với Quý Khách trong thời gian sớm nhất.\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Nếu cần sự hỗ trợ vui lòng liên hệ qua email tc@ivivu.com hoặc tổng đài sau:\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Hồ Chí Minh: 1900 1870\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Hà Nội: 1900 2045\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Cần Thơ: 1900 2087\n        </ion-label>\n      </div>\n    </div>\n\n  \n  <!-- <div class=\"div-paymentmytrip\" *ngIf=\"paymentmytrip\">\n      <div>\n        <ion-label style=\"font-weight: bold\">\n          Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n        </ion-label>\n      </div>\n      <div>\n        <ion-label>\n          Mã đặt phòng của quý khách là\n          <span style=\"font-weight: bold\">{{bookingCode}}</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Thông tin thanh toán đã được gửi đến email của Quý khách.\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Mời quý khách thanh toán số tiền\n          <span style=\"font-weight: bold\">{{priceshow}} VND</span> trong vòng\n          <span style=\"font-weight: bold\">12 tiếng</span> để hoàn tất việc đặt phòng.\n        </ion-label>\n      </div>\n\n      <div class=\"div-split-color\"></div>\n      <div><ion-label class=\"text-title\">Thông tin thanh toán:</ion-label></div>\n      <div class=\"div-text-payment\">\n          <p class=\"text-payment-info\" text-wrap >\n              {{bankName}}\n              <br>{{bankBranch}}\n              <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a> \n              <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n          </p>\n      </div>\n      <div class=\"div-text-paymentlink\" (click)=\"openPaymentLink()\"><a class=\"text-info text-link\">{{textLinkPayment}}</a></div>\n    </div> -->\n\n\n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button *ngIf=\"ischeckshow=='0'||payment=='AL'||!payment\" (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button *ngIf=\"ischeckshow=='1'\" (click)=\"next(0)\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n    <button *ngIf=\"ischeckshow=='0'\" (click)=\"next(1)\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roompaymentdoneean/roompaymentdoneean.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roompaymentdoneean/roompaymentdoneean.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoompaymentdoneeanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentdoneeanPageModule", function() { return RoompaymentdoneeanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roompaymentdoneean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roompaymentdoneean */ "./src/app/roompaymentdoneean/roompaymentdoneean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RoompaymentdoneeanPageModule = class RoompaymentdoneeanPageModule {
};
RoompaymentdoneeanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roompaymentdoneean__WEBPACK_IMPORTED_MODULE_5__["RoompaymentdoneeanPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roompaymentdoneean__WEBPACK_IMPORTED_MODULE_5__["RoompaymentdoneeanPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoompaymentdoneeanPageModule);



/***/ }),

/***/ "./src/app/roompaymentdoneean/roompaymentdoneean.scss":
/*!************************************************************!*\
  !*** ./src/app/roompaymentdoneean/roompaymentdoneean.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.button1 {\n  color: #26bed6;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  margin-right: 0px;\n}\n\n::ng-deep {\n  align-items: center !important;\n}\n\n::ng-deep .cls-reivewapp .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-reivewapp .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-reivewapp .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-reivewapp .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n.div-paymentmytrip {\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n\n.div-paymentmytrip .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n  margin: 8px -16px;\n}\n\n.div-paymentmytrip .text-title {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.div-paymentmytrip .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-paymentmytrip .div-text-paymentlink {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  text-decoration: underline;\n}\n\n.div-paymentmytrip .text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-paymentmytrip .text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.div-paymentmytrip .text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.div-paymentmytrip .text-copy {\n  padding-left: 4px;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tcGF5bWVudGRvbmVlYW4vcm9vbXBheW1lbnRkb25lZWFuLnNjc3MiLCJzcmMvYXBwL3Jvb21wYXltZW50ZG9uZWVhbi9yb29tcGF5bWVudGRvbmVlYW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQVI7O0FERUk7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNFdEQ7O0FEQUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VSOztBRENJO0VBQ0ksMkJBQUE7RUFDQSxTQUFBO0FDRVI7O0FEQUk7RUFDSSxpQkFBQTtBQ0dSOztBRENBO0VBRUksOEJBQUE7QUNDSjs7QURDSTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7R0FBQSxnQ0FBQTtPQUFBLDRCQUFBO0FDQVI7O0FER0k7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREdJO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDREo7O0FER0k7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDREo7O0FER0k7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNESjs7QURHSTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ0RKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNEUjs7QURJSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNGUjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0pKOztBRE1JO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSlI7O0FETUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKUjs7QURNSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0pSOztBRE9JO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0xSOztBRE9JO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNMUjs7QURPSTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNMUjs7QURPSTtFQUNJLGlCQUFBO0FDTFI7O0FEUUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9yb29tcGF5bWVudGRvbmVlYW4vcm9vbXBheW1lbnRkb25lZWFuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5idXR0b24xXG4gICAge1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAuZGl2LWJ0blxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbiAgICB9XG4gICAgLmJ1dHRvbjRcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIFxuICAgIH1cbiAgICAuaW1hZ2UtY2FyZDF7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDQlXG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgfVxuXG4vLy8vLy8vLy8vLy8vL1xuOjpuZy1kZWVwIHtcblxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBcbiAgICAuY2xzLXJlaXZld2FwcCAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XG4gICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB9XG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cblxufVxuXG4uZGl2LXBheW1lbnRteXRyaXB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgLmRpdi1zcGxpdC1jb2xvcntcbiAgICAgICAgaGVpZ2h0OiA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgICAgIG1hcmdpbjogOHB4IC0xNnB4O1xuICAgIH1cbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZGl2LXRleHQtcGF5bWVudHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB9XG4gICAgLmRpdi10ZXh0LXBheW1lbnRsaW5re1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICAudGV4dC1wYXltZW50LWluZm97XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAudGV4dC1pbmZve1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgLnRleHQtbGlua3tcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgfVxuICAgIC50ZXh0LWNvcHl7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59IiwiLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmJ1dHRvbjEge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbjQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pbWFnZS1jYXJkMSB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgd2lkdGg6IDQlO1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG46Om5nLWRlZXAge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5kaXYtcGF5bWVudG15dHJpcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi1zcGxpdC1jb2xvciB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDhweCAtMTZweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAuZGl2LXRleHQtcGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi10ZXh0LXBheW1lbnRsaW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC50ZXh0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roompaymentdoneean/roompaymentdoneean.ts":
/*!**********************************************************!*\
  !*** ./src/app/roompaymentdoneean/roompaymentdoneean.ts ***!
  \**********************************************************/
/*! exports provided: RoompaymentdoneeanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentdoneeanPage", function() { return RoompaymentdoneeanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! request */ "./node_modules/request/index.js");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");




















let RoompaymentdoneeanPage = class RoompaymentdoneeanPage {
    constructor(_platform, navCtrl, Roomif, activatedRoute, zone, booking, authService, storage, alertCtrl, launchReview, gf, activityService, clipboard, toastCtrl, searchhotel, fb, _calendar, _mytripservice, _flightService, valueGlobal, _voucherService) {
        this._platform = _platform;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.booking = booking;
        this.authService = authService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this.gf = gf;
        this.activityService = activityService;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.searchhotel = searchhotel;
        this.fb = fb;
        this._calendar = _calendar;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.valueGlobal = valueGlobal;
        this._voucherService = _voucherService;
        this.paymentmytrip = false;
        this.texttype = "đặt phòng";
        this.nameroom = "";
        this.isaddCalendar = 0;
        this.hoten = "";
        this.HotelName = "";
        if (this._voucherService.selectVoucher) {
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this._voucherService.publicClearVoucherAfterPaymentDone(1);
        this.ischeckpayment = Roomif.ischeckpayment;
        this.Roomif.ischeckpoint = false;
        Roomif.priceshow = "";
        this.ishide = true;
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
        this.GetUserInfo();
    }
    ionViewWillEnter() {
        let se = this;
        if (!(se.activityService.objPaymentMytrip && se.activityService.objPaymentMytrip.trip)) {
            this.room = this.Roomif.arrroom;
            this.nameroom = this.room[0].ClassName;
            this.payment = this.Roomif.payment;
            this.HotelName = se.booking.HotelName;
            this.hoten = se.Roomif.hoten;
            se.CheckInDate = se.booking.CheckInDate;
            se.CheckOutDate = se.booking.CheckOutDate;
            var pricestring = se.Roomif.priceshowtt ? se.Roomif.priceshowtt : se.Roomif.pricepoint;
            se.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: se.booking.HotelName, item_id: se.booking.code, start_date: se.booking.CheckInDate, end_date: se.booking.CheckOutDate }], value: se.gf.convertNumberToDouble(pricestring), currency: "VND" });
            se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'hotel', 'fb_content_id': se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(pricestring), 'fb_currency': 'VND',
                'checkin_date': se.booking.CheckInDate, 'checkout_date ': se.booking.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
                'value': se.gf.convertNumberToDouble(pricestring), 'currency': 'VND' }, se.gf.convertNumberToFloat(pricestring));
        }
        else {
            if (se.activityService.objPaymentMytrip && se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.payment_status == 1)
                se.code = se.activityService.objPaymentMytrip.trip.HotelIdERP;
            if (se.activityService.objPaymentMytrip.trip.booking_type == 'COMBO_FLIGHT') {
                this.texttype = "combo";
            }
            else if (se.activityService.objPaymentMytrip.trip.booking_type == 'COMBO_VXR') {
                this.texttype = "combo";
            }
            se.nameroom = this.activityService.objPaymentMytrip.trip.room_name;
            se.priceshow = se.activityService.objPaymentMytrip.trip.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
            se.paymentmytrip = true;
            this.HotelName = this.activityService.objPaymentMytrip.trip.hotel_name;
            this.hoten = this.activityService.objPaymentMytrip.trip.cus_name;
            se.CheckInDate = se.activityService.objPaymentMytrip.trip.start_day;
            se.CheckOutDate = se.activityService.objPaymentMytrip.trip.checkOutDate;
            se.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'hotel_room', item_name: se.booking.HotelName, item_id: se.booking.code, start_date: se.booking.CheckInDate, end_date: se.booking.CheckOutDate }], value: se.gf.convertNumberToDouble(se.priceshow), currency: "VND" });
            se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'hotel', 'fb_content_id': se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow), 'fb_currency': 'VND',
                'checkin_date': se.booking.CheckInDate, 'checkout_date ': se.booking.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0),
                'value': se.gf.convertNumberToDouble(se.priceshow), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow));
        }
    }
    ngOnInit() {
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        this.ischeckshow = this.activatedRoute.snapshot.paramMap.get('ischeck');
        this.total = this.Roomif.priceshowtt;
    }
    next() {
        this.Roomif.priceshowtt = "";
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        if (this.activityService.objPaymentMytrip) {
            this._mytripservice.itemEnableHeader.emit(1);
            this._flightService.itemTabFlightActive.emit(true);
            this.valueGlobal.backValue = "homeflight";
            this._flightService.itemMenuFlightClick.emit(2);
            this._mytripservice.orderPageState.emit(1);
            this.navCtrl.navigateBack('/tabs/tab1');
        }
        else {
            if (this.searchhotel.rootPage == "topdeallist") {
                this.navCtrl.navigateBack('/topdeallist');
                this.searchhotel.rootPage = "";
            }
            else {
                this.navCtrl.navigateBack('/');
            }
        }
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                request__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(au.auth_token);
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
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set("checkreview", 1);
            let alert = yield this.alertCtrl.create({
                header: 'Bạn thích iVIVU.com?',
                message: 'Đánh giá ứng dụng trên App Store',
                mode: "ios",
                cssClass: 'cls-reivewapp',
                buttons: [
                    {
                        text: 'Hủy',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Đánh giá',
                        role: 'OK',
                        handler: () => {
                            this.launchReview.launch()
                                .then(() => console.log('Successfully launched store app'));
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
            });
        });
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                request__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            var info;
                            var checkfullname = se.validateEmail(data.fullname);
                            if (!checkfullname) {
                                var textfullname = data.fullname.split(' ');
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
                                    info = { ho: textfullname[0], ten: name, phone: data.phone };
                                }
                                else {
                                    info = { ho: textfullname[0], ten: textfullname[1], phone: data.phone };
                                }
                                se.storage.set("infocus", info);
                            }
                            else {
                                info = { ho: "", ten: "", phone: data.phone };
                                se.storage.set("infocus", info);
                            }
                            se.storage.set("email", data.email);
                            se.storage.set("jti", data.memberId);
                            se.storage.set("username", data.fullname);
                            se.storage.set("phone", data.phone);
                            se.storage.set("point", data.point);
                        }
                    }
                });
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    checkPayment() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
                qs: { code: se.activityService.objPaymentMytrip.trip.code },
                headers: {}
            };
            request__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomchoosebank",
                        func: "roomchoosebank-mCheckBooking",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomchoosebank";
                    error.func = "roomchoosebank-mCheckBooking";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                }
                ;
                if (body) {
                    var rs = JSON.parse(body);
                    resolve(rs);
                }
                else {
                    error.page = "roomchoosebank";
                    error.func = "mCheckBooking";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                }
            });
        });
    }
    copyClipboard(type) {
        if (type == 1) {
            this.clipboard.copy(this.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy(this.bookingCode);
        }
        this.presentToastr('Đã sao chép');
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
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            if (se.isaddCalendar == 0) {
                se.createCalendar(true);
            }
        }
    }
    createCalendar(createOrModify) {
        var se = this;
        this.isaddCalendar = 1;
        if (!se.booking.CheckinTime) {
            se.booking.CheckinTime = "14:00";
        }
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt phòng: ` + se.code + `

Tên phòng: ` + this.nameroom +
            `

Khách hàng: ` + this.hoten;
        strmess += `

`;
        strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarId = 1;
        let event = {
            title: se.code + "-" + se.HotelName,
            location: "",
            message: strmess,
            startDate: se.CheckInDate + "T" + se.booking.CheckinTime + ":00",
            endDate: se.CheckInDate + "T" + se.booking.CheckinTime + ":59",
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            var year = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("YYYY"));
            var month = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("MM"));
            var days = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("DD"));
            var hour = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("HH"));
            var minutes = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("mm"));
            var seconds = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.startDate).format("ss"));
            var yearendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("YYYY"));
            var monthendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("MM"));
            var daysendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("DD"));
            var hourendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("HH"));
            var minutesendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("mm"));
            var secondssendDate = Number(moment__WEBPACK_IMPORTED_MODULE_15__(event.endDate).format("ss"));
            let sdate = new Date(year, month - 1, days, hour, minutes, seconds), edate = new Date(yearendDate, monthendDate - 1, daysendDate, hourendDate, minutesendDate, secondssendDate);
            if (allow) {
                if (createOrModify) {
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        se._calendar.openCalendar(sdate).then(() => {
                        });
                    });
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            se._calendar.openCalendar(new Date(se.CheckInDate + "T" + se.booking.CheckinTime + ":00")).then(() => {
                            });
                        });
                    }
                });
            }
            se._mytripservice.itemEnableHeader.emit(1);
            se.navCtrl.navigateBack(['/app/tabs/tab3']);
        });
    }
};
RoompaymentdoneeanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roompaymentdoneean',
        template: __webpack_require__(/*! ./roompaymentdoneean.html */ "./src/app/roompaymentdoneean/roompaymentdoneean.html"),
        styles: [__webpack_require__(/*! ./roompaymentdoneean.scss */ "./src/app/roompaymentdoneean/roompaymentdoneean.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_10__["LaunchReview"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__["GlobalFunction"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__["ActivityService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_12__["Clipboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["SearchHotel"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__["Facebook"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__["Calendar"], _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_16__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_17__["flightService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["ValueGlobal"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_18__["voucherService"]])
], RoompaymentdoneeanPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentdoneean-roompaymentdoneean-module.js.map