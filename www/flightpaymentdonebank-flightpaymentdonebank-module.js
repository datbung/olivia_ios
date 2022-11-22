(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentdonebank-flightpaymentdonebank-module"],{

/***/ "./src/app/flightpaymentdonebank/flightpaymentdonebank.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentdonebank/flightpaymentdonebank.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlightpaymentdonebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentdonebankPageModule", function() { return FlightpaymentdonebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentdonebank.page */ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentdonebankPage"]
    }
];
let FlightpaymentdonebankPageModule = class FlightpaymentdonebankPageModule {
};
FlightpaymentdonebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentdonebankPage"]]
    })
], FlightpaymentdonebankPageModule);



/***/ }),

/***/ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentdonebank/flightpaymentdonebank.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div  style=\"text-align: center\">\n  <img  src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div class=\"mt12\">\n    \n    <div>\n      <ion-label class=\"text-payment-info\" text-wrap>\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU\n      </ion-label>\n    </div>\n   <div>\n    <ion-label class=\"text-payment-info\" text-wrap>\n      Vé máy bay đã được giữ đến {{text}}\n    </ion-label>\n   </div>\n   <div>\n    <ion-label class=\"text-payment-info\" text-wrap>\n      Vui lòng thanh toán đặt chỗ {{bookingCode}} theo thông tin bên dưới\n    </ion-label>\n  </div>\n  </div>\n    <div class=\"d-flex-later\">\n      <div class=\"d-img\">\n        <img src={{urlimgbank}}>\n      </div>\n      <div>\n        <ion-label class=\"cls-text\">\n         {{bankName}}\n        </ion-label>\n        <div class=\"mt6\">\n          <ion-label (click)=\"openWebpage()\" class=\"cls-textopen\">\n            Mở website/ứng dụng {{textbank}}\n          </ion-label>\n        </div>\n      </div>\n    </div>\n    <div class=\"div-text-payment\">\n      <p class=\"text-payment-info\" text-wrap>\n        Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" >\n        Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" text-wrap>\n        Nội dung chuyển tiền: <b class=\"text-booking\">{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" text-wrap>\n        Tổng tiền: <b class=\"text-bold\">{{total}} VND</b><a class='text-copy' (click)='copyClipboard(4)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" text-wrap>\n        Hạn thanh toán: <b class=\"text-bold\">Trước {{text}}</b>\n      </p>\n    </div>\n    <div class=\"div-split-panel\"></div>\n    <div> <p class=\"text-payment-info\" text-wrap>\n      Xác nhận đặt vé sẽ được gửi đến email của Quý khách <span class=\"text-bold\">{{_email}}</span> sau khi iVIVU.com nhận được tiền thanh toán. Nếu Quý khách không nhận được email Xác nhận sau 30 phút, vui lòng gửi chứng từ thanh toán (Uỷ nhiệm chi, Lệnh thanh toán) về email <span class=\"text-bold\">support@ivivu.com</span> để được hỗ trợ xử lý.\n    </p>\n  </div>\n</ion-content>\n<ion-footer>\n<div class=\"div-button-payment-done\">\n  <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm thông tin chuyến bay vào lịch</button>\n  <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/flightpaymentdonebank/flightpaymentdonebank.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-copy {\n  padding-left: 4px;\n}\n\n.text-booking {\n  color: #e52822;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-img {\n  width: 60%;\n  margin-right: 10px;\n  align-self: center;\n}\n\n.cls-text {\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n\n.cls-textopen {\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n\n.mt6 {\n  margin-top: 6px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin-top: 18px;\n  margin-bottom: 13px;\n}\n\n.d-flex-later {\n  display: flex;\n  margin-top: 20px;\n}\n\n.mt20 {\n  margin-top: 20px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 16px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: -5px;\n}\n\n.text-title {\n  font-size: 18px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.mt12 {\n  margin-top: 12px;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRwYXltZW50ZG9uZWJhbmsvZmxpZ2h0cGF5bWVudGRvbmViYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0cGF5bWVudGRvbmViYW5rL2ZsaWdodHBheW1lbnRkb25lYmFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksYUFBQTtBQ0dKOztBRERBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREhBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0tKOztBREhBO0VBRUksZUFBQTtBQ0tKOztBREhBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFFSSxnQkFBQTtBQ09KOztBRExBO0VBQ0ksY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUNRSjs7QURORTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDU0o7O0FETkE7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDU0o7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FDV0o7O0FEVEE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksZ0JBQUE7QUNhSjs7QURWQTtFQUVRLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDWVI7O0FEVEk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDV1I7O0FEVFE7RUFDSSx3QkFBQTtBQ1daIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0cGF5bWVudGRvbmViYW5rL2ZsaWdodHBheW1lbnRkb25lYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jb3B5e1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLnRleHQtYm9va2luZ3tcbiAgICBjb2xvcjogI2U1MjgyMjtcbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kLWltZ3tcbiAgICB3aWR0aDogNjAlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY2xzLXRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xufVxuLmNscy10ZXh0b3Blblxue1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbn1cbi5tdDZcbntcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uZGl2LXNwbGl0LXBhbmVse1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luLXRvcDogMThweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuLmQtZmxleC1sYXRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG4ubXQyMFxue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5wIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG4gIH1cbiAgLnRleHQtYm9sZHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuXG4udGV4dC1wYXltZW50LWluZm97XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLmRpdi10ZXh0LXBheW1lbnR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmRpdi1xdWljay1iYWNrIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMy41cHg7XG4gICAgdG9wOiAtNXB4O1xufVxuLnRleHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubXQxMntcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICBcbiAgICAuZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAubS10b3AtMHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH0iLCIudGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50ZXh0LWJvb2tpbmcge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kLWltZyB7XG4gIHdpZHRoOiA2MCU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2xzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xufVxuXG4uY2xzLXRleHRvcGVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG59XG5cbi5tdDYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cblxuLmQtZmxleC1sYXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tdDIwIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cblxuLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXYtdGV4dC1wYXltZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmRpdi1xdWljay1iYWNrIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0zLjVweDtcbiAgdG9wOiAtNXB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm10MTIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUgLm0tdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentdonebank/flightpaymentdonebank.page.ts ***!
  \*********************************************************************/
/*! exports provided: FlightpaymentdonebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentdonebankPage", function() { return FlightpaymentdonebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");


















let FlightpaymentdonebankPage = class FlightpaymentdonebankPage {
    constructor(activatedRoute, _flightService, navCtrl, searchhotel, storage, zone, valueGlobal, gf, Roomif, modalCtrl, toastCtrl, clipboard, safariViewController, fb, _platform, _calendar, alertCtrl, launchReview, _voucherService) {
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.storage = storage;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.Roomif = Roomif;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.clipboard = clipboard;
        this.safariViewController = safariViewController;
        this.fb = fb;
        this._platform = _platform;
        this._calendar = _calendar;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this._voucherService = _voucherService;
        this.code = "";
        this._email = "";
        this.stt = 0;
        this.pacificVNA = "";
        this.pacificVNAReturn = "";
        this.accountNumber = "";
        this.url = "";
        this.urlimgbank = "";
        this.listDiChung = "";
        this.accountNumber = this.Roomif.accountNumber;
        this.textbank = this.Roomif.textbank;
        this.bankName = this.Roomif.bankName + " . " + this.Roomif.bankBranch;
        this.paymentbank = this.Roomif.paymentbank;
        this.total = this._flightService.itemFlightCache.totalPriceDisplay;
        this._email = this._flightService.itemFlightCache.email;
        this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
        this.bookingFlight = this._flightService.itemFlightCache;
        this.getbank();
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
        if (this._voucherService.selectVoucher) {
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this._voucherService.publicClearVoucherAfterPaymentDone(1);
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.code = this.activatedRoute.snapshot.paramMap.get('code');
            this.startdate = moment__WEBPACK_IMPORTED_MODULE_4__(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
            this.enddate = moment__WEBPACK_IMPORTED_MODULE_4__(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
            this.stt = this._flightService.itemFlightCache.ischeckpayment;
            let dataSummary = yield this.gf.getSummaryBooking(this._flightService.itemFlightCache);
            console.log(dataSummary);
            let date = dataSummary.periodPaymentDate;
            if (this._flightService.itemFlightCache.departFlight && this._flightService.itemFlightCache.departFlight.operatedBy) {
                this.pacificVNA = this._flightService.itemFlightCache.departFlight.operatedBy;
            }
            if (this._flightService.itemFlightCache.returnFlight && this._flightService.itemFlightCache.returnFlight.operatedBy) {
                this.pacificVNAReturn = this._flightService.itemFlightCache.returnFlight.operatedBy;
            }
            if (date) {
                this.text = moment__WEBPACK_IMPORTED_MODULE_4__(date).format("HH:mm") + " " + this.gf.getDayOfWeek(date).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_4__(date).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_4__(date).format("MM");
            }
            var se = this;
            se.gf.googleAnalytionCustom('ecommerce_purchase', { item_category: 'flights', start_date: moment__WEBPACK_IMPORTED_MODULE_4__(se._flightService.itemFlightCache.checkInDate).format("YYYY-MM-DD"), end_date: moment__WEBPACK_IMPORTED_MODULE_4__(se._flightService.itemFlightCache.checkOutDate).format("YYYY-MM-DD"), item_name: se._flightService.itemFlightCache.departCode + '-' + se._flightService.itemFlightCache.returnCode, item_id: se._flightService.itemFlightCache.departCode, value: se._flightService.itemFlightCache.totalPrice, currency: "VND" });
            if (this._flightService.itemFlightCache.roundTrip) {
                this.gf.googleAnalytionCustom('purchase', { items: [
                        { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber },
                        { item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.returnCode, destination: se._flightService.itemFlightCache.departCode, flight_number: se._flightService.itemFlightCache.returnFlight.flightNumber }
                    ], value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
            }
            else {
                this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flight', start_date: se._flightService.itemFlightCache.checkInDate, end_date: se._flightService.itemFlightCache.checkOutDate, origin: se._flightService.itemFlightCache.departCode, destination: se._flightService.itemFlightCache.returnCode, flight_number: se._flightService.itemFlightCache.departFlight.flightNumber }], value: se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice), currency: "VND" });
            }
            se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'flight', 'fb_content_id': 'flightpaymentdonebank', 'fb_num_items': 1, 'fb_value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'fb_currency': 'VND',
                'origin_airport': se._flightService.itemFlightCache.departFlight.fromPlaceCode,
                'destination_airport': se._flightService.itemFlightCache.departFlight.toPlaceCode,
                'departing_departure_date': se._flightService.itemFlightCache.checkInDate, 'returning_departure_date ': se._flightService.itemFlightCache.checkOutDate, 'num_adults': se._flightService.itemFlightCache.adult, 'num_children': se._flightService.itemFlightCache.child ? se._flightService.itemFlightCache.child : 0, 'num_infants': se._flightService.itemFlightCache.infant ? se._flightService.itemFlightCache.infant : 0,
                'value': (se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToDouble(se._flightService.itemFlightCache.totalPrice) : 0), 'currency': 'VND' }, se._flightService.itemFlightCache.totalPrice ? se.gf.convertNumberToFloat(se._flightService.itemFlightCache.totalPrice) : 0);
            let flightItem = se._flightService.itemFlightCache;
        });
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            let itemflight = se._flightService.itemFlightCache;
            se.createCalendar(itemflight, true, true);
            if (itemflight.roundTrip) {
                setTimeout(() => {
                    se.createCalendar(itemflight, false, true);
                }, 1000);
            }
        }
    }
    createCalendar(itemflight, isdepart, createOrModify) {
        let se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt chỗ: ` + (isdepart ? (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.departFlight ? itemflight.dataSummaryBooking.departFlight.atBookingCode : '') : (itemflight.dataSummaryBooking && itemflight.dataSummaryBooking.returnFlight ? itemflight.dataSummaryBooking.returnFlight.atBookingCode : '')) + `
      
Giờ ra tàu bay: ` + (isdepart ? (moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.departFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.departFlight.departTime).format("mm")) : (moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.returnFlight.departTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.returnFlight.departTime).format("mm"))) +
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
                    objjson.forEach((elementAncillary, indexanci) => {
                        if (elementAncillary.Type != "Transfer") {
                            strmess += " | ";
                            strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                        }
                    });
                }
            }
            if (!isdepart && elementA.ancillaryReturnJson) {
                let objjson = JSON.parse(elementA.ancillaryReturnJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        if (elementAncillary.Type != "Transfer") {
                            strmess += " | ";
                            strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                        }
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
        if (itemflight.objHotelCitySelected) {
            strmess += `
Khách sạn:` + itemflight.objHotelCitySelected.HotelName + `

Tên phòng: ` + itemflight.objHotelCitySelected.RoomName + `
  
Khách hàng: ` + itemflight.hoten;
            strmess += `

`;
            if (itemflight.childs && itemflight.childs.length > 0) {
                strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.childs.map((c) => { return c.name; }).join(', ') + ".";
            }
            else {
                strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
            }
            strmess += `
  
`;
        }
        if (this._flightService.itemFlightCache.DICHUNGParam) {
            se.listDiChung = this._flightService.itemFlightCache.DICHUNGParam;
            this.checkInDisplayDC = this.bookingFlight.checkInDisplaysort;
            if (this.bookingFlight && this.bookingFlight.returnFlight) {
                this.checkOutDisplayDC = this.bookingFlight.checkOutDisplaysort;
            }
            if (se._flightService.itemFlightCache.departCity && se.listDiChung.PhaseGo) {
                strmess += `Xe đưa đón tại ` + se._flightService.itemFlightCache.departCity + `
` + se.checkInDisplayDC + `     ` + se.listDiChung.PhaseGo.pickUpTime.text + `     Chiều đi`;
            }
            if (se._flightService.itemFlightCache.departCity && se.listDiChung.PhaseGo_RoundTrip) {
                strmess += `

`;
                strmess += `Xe đưa đón tại ` + se._flightService.itemFlightCache.departCity + `
` + se.checkOutDisplayDC + `     ` + se.listDiChung.PhaseGo_RoundTrip.pickUpTime.text + `     Chiều về`;
            }
            if (se._flightService.itemFlightCache.returnCity && se.listDiChung.PhaseReturn) {
                strmess += `

`;
                strmess += `Xe đưa đón tại ` + se._flightService.itemFlightCache.returnCity + `
` + se.checkInDisplayDC + `     ` + se.listDiChung.PhaseReturn.pickUpTime.text + `     Chiều đi`;
            }
            if (se._flightService.itemFlightCache.returnCity && se.listDiChung.PhaseReturn_RoundTrip) {
                strmess += `

`;
                strmess += `Xe đưa đón tại ` + se._flightService.itemFlightCache.returnCity + `
` + se.checkOutDisplayDC + `     ` + se.listDiChung.PhaseReturn_RoundTrip.pickUpTime.text + `     Chiều về`;
            }
        }
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
        calOptions.calendarId = null;
        let event = {
            title: (isdepart ? itemflight.departCity : itemflight.returnCity) + "  ✈  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + " (" + (isdepart ? itemflight.departFlight.flightNumber : itemflight.returnFlight.flightNumber) + ")",
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
                    if (!se.checkExistCalendar(event.calOptions.calendarName)) {
                        try {
                            se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                                if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                                    se.zone.run(() => {
                                        se.gf.hideLoading();
                                        se.clearItemCache();
                                        se._flightService.itemMenuFlightClick.emit(2);
                                        se.next();
                                    });
                                    se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                                    });
                                }
                            }).catch(() => {
                                se.gf.hideLoading();
                            });
                        }
                        catch (error) {
                            console.log(error);
                        }
                    }
                    else {
                        se.gf.showToastWarning("Đã có lịch hẹn tương tự! Vui lòng thử lại sau.");
                        se.gf.hideLoading();
                    }
                }
                else {
                    se.clearItemCache();
                    se._flightService.itemMenuFlightClick.emit(2);
                    se.next();
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se.gf.showLoadingwithtimeout();
                        if (!se.checkExistCalendar(event.calOptions.calendarName)) {
                            se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                                if ((itemflight.roundTrip && !isdepart) || !itemflight.roundTrip) {
                                    se.zone.run(() => {
                                        se.gf.hideLoading();
                                        se.clearItemCache();
                                        se._flightService.itemMenuFlightClick.emit(2);
                                        se.next();
                                    });
                                    se._calendar.openCalendar(new Date(itemflight.departFlight.departTime)).then(() => {
                                    });
                                }
                            })
                                .catch(() => {
                                se.gf.hideLoading();
                            });
                        }
                        else {
                            se.gf.showToastWarning("Đã có lịch hẹn tương tự! Vui lòng thử lại sau.");
                            se.gf.hideLoading();
                        }
                    }
                    else {
                        se.clearItemCache();
                        se._flightService.itemMenuFlightClick.emit(2);
                        se.next();
                    }
                });
            }
        });
    }
    checkExistCalendarName(itemflight, isdepart) {
        let se = this;
        let calendarname = "Chuyến đi " + (isdepart ? itemflight.departCity : itemflight.returnCity) + "  -  " + (isdepart ? itemflight.returnCity : itemflight.departCity) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.departFlight.departTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_4__(itemflight.returnFlight.departTime).format('DD/MM/YYYY'));
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
        else if (type == 4) {
            this.clipboard.copy(this.total);
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
    getbank() {
        switch (this.paymentbank) {
            case "41":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/2.acb.png";
                this.url = 'https://online.acb.com.vn/acbib';
                break;
            case "42":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/1.vietcombank.png";
                this.url = 'https://www.vietcombank.com.vn/IBanking2020';
                break;
            case "43":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/5.dongabank.png";
                this.url = 'https://ebanking.dongabank.com.vn/khcn/';
                break;
            case "44":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/4.techcombank.png";
                this.url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
                break;
            case "45":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/3.viettinbank.png";
                this.url = 'https://ebanking.vietinbank.vn/rcas';
                break;
            case "46":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/8.sacombank.png";
                this.url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
                break;
            case "47":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/6.agribank.png";
                this.url = 'https://ibank.agribank.com.vn/ibank';
                break;
            case "48":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/7.bidv.png";
                this.url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
                break;
            case "49":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/scb-icon.png";
                this.url = 'https://ebanking.scb.com.vn/?module=login';
                break;
            case "50":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/hdb-icon.png";
                this.url = 'https://ebanking.hdbank.vn/ipc/vi/';
                break;
            case "53":
                this.urlimgbank = "https://res.ivivu.com/payment/img/banklogo/ocb-logo.png";
                this.url = 'https://omni.ocb.com.vn/frontend-web/app/auth.html#/login';
                break;
            default:
                break;
        }
    }
    openWebpage() {
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: this.url,
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
    next() {
        this.gf.hideLoading();
        this.valueGlobal.backValue = "homeflight";
        this._flightService.bookingCodePayment = this.bookingCode;
        this._flightService.bookingSuccess = true;
        this._flightService.itemTabFlightActive.emit(true);
        try {
            this.storage.get('objectflightpaymentbank').then((data) => {
                if (data) {
                    let arrobject = JSON.parse(data);
                    if (arrobject && arrobject.length > 0) {
                        arrobject.push({ accountNumber: this.accountNumber, textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache: this._flightService.itemFlightCache });
                    }
                    else {
                        arrobject = [];
                        arrobject.push({ accountNumber: this.accountNumber, textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache: this._flightService.itemFlightCache });
                    }
                    this.storage.remove('objectflightpaymentbank').then(() => {
                        this.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
                    });
                }
                else {
                    let arr = [];
                    arr.push({ accountNumber: this.accountNumber, textbank: this.textbank, bankName: this.bankName, paymentBank: this.paymentbank, resNo: this.bookingCode, checkInDate: this._flightService.itemFlightCache.checkInDate, checkOutDate: this._flightService.itemFlightCache.checkOutDate, urlimgbank: this.urlimgbank, totalPrice: this.total, text: this.text, itemFlightCache: this._flightService.itemFlightCache });
                    this.storage.set('objectflightpaymentbank', JSON.stringify(arr));
                }
            });
        }
        catch (error) {
            console.log('fail to set storage object');
        }
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.navCtrl.navigateBack('/tabs/tab1');
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
    checkExistCalendar(name) {
        var se = this;
        try {
            se._calendar.findAllEventsInNamedCalendar(name);
        }
        catch (error) {
            console.log(error);
            return true;
        }
        return false;
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
};
FlightpaymentdonebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightpaymentdonebank',
        template: __webpack_require__(/*! ./flightpaymentdonebank.page.html */ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentdonebank.page.scss */ "./src/app/flightpaymentdonebank/flightpaymentdonebank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_7__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Clipboard"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__["SafariViewController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__["Calendar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_15__["LaunchReview"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_16__["voucherService"]])
], FlightpaymentdonebankPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentdonebank-flightpaymentdonebank-module.js.map