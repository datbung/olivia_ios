(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombopaymentdonebank-flightcombopaymentdonebank-module"],{

/***/ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FlightcombopaymentdonebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombopaymentdonebankPageModule", function() { return FlightcombopaymentdonebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombopaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombopaymentdonebank.page */ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombopaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombopaymentdonebankPage"]
    }
];
let FlightcombopaymentdonebankPageModule = class FlightcombopaymentdonebankPageModule {
};
FlightcombopaymentdonebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombopaymentdonebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombopaymentdonebankPage"]]
    })
], FlightcombopaymentdonebankPageModule);



/***/ }),

/***/ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.html":
/*!*********************************************************************************!*\
  !*** ./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img  src=\"./assets/step/step_4.svg\">\n  <div class=\"mt12\">\n    <div>\n      <ion-label class=\"text-payment-info\" text-wrap>\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU\n      </ion-label>\n    </div>\n   <div *ngIf=\"status=='AL'\">\n    <ion-label class=\"text-payment-info\" text-wrap>\n      Vé máy bay đã được giữ đến {{text}}\n    </ion-label>\n   </div>\n   <div>\n    <ion-label class=\"text-payment-info\" text-wrap>\n      Vui lòng thanh toán đặt chỗ {{code}} theo thông tin bên dưới\n    </ion-label>\n  </div>\n  </div>\n    <div class=\"d-flex-later\">\n      <div class=\"d-img\">\n        <img src={{urlimgbank}}>\n      </div>\n      <div>\n        <ion-label class=\"cls-text\">\n         {{bankName}}\n        </ion-label>\n        <div class=\"mt6\">\n          <ion-label (click)=\"openWebpage()\" class=\"cls-textopen\">\n            Mở website/ứng dụng {{textbank}}\n          </ion-label>\n        </div>\n      </div>\n    </div>\n    <div class=\"div-text-payment\">\n      <p class=\"text-payment-info\" text-wrap>\n        Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" >\n        Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" text-wrap>\n        Nội dung chuyển tiền: <b class=\"text-booking\">{{code}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n      </p>\n      <p class=\"text-payment-info\" text-wrap>\n        Tổng tiền: <b class=\"text-bold\">{{priceshow}} VND</b><a class='text-copy' (click)='copyClipboard(4)'>Sao chép</a>\n      </p>\n      <p *ngIf=\"status=='AL'\" class=\"text-payment-info\" text-wrap>\n        Hạn thanh toán: <b class=\"text-bold\">Trước {{text}}</b>\n      </p>\n    </div>\n    <div class=\"div-split-panel\"></div>\n    <div> <p class=\"text-payment-info\" text-wrap>\n      Thông tin thanh toán cũng được gửi đến email <span class=\"text-bold\">{{_email}}</span>. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư Spam hoặc Junk Folder. \n    </p>\n     <p class=\"text-payment-info mt20\" text-wrap>\n      Chúng tôi sẽ gửi xác nhận đặt Combo ngay khi nhận được thanh toán của Quý khách\n    </p>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào\n      lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-copy {\n  padding-left: 4px;\n}\n\n.text-booking {\n  color: #e52822;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-img {\n  width: 60%;\n  margin-right: 10px;\n  align-self: center;\n}\n\n.cls-text {\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n\n.cls-textopen {\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n\n.mt6 {\n  margin-top: 6px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin-top: 18px;\n  margin-bottom: 13px;\n}\n\n.d-flex-later {\n  display: flex;\n  margin-top: 20px;\n}\n\n.mt20 {\n  margin-top: 20px;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 16px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: -5px;\n}\n\n.text-title {\n  font-size: 18px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.mt12 {\n  margin-top: 12px;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvcGF5bWVudGRvbmViYW5rL2ZsaWdodGNvbWJvcGF5bWVudGRvbmViYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29tYm9wYXltZW50ZG9uZWJhbmsvZmxpZ2h0Y29tYm9wYXltZW50ZG9uZWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLGFBQUE7QUNHSjs7QUREQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUVJLGVBQUE7QUNLSjs7QURIQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ09KOztBRExBO0VBRUksZ0JBQUE7QUNPSjs7QURMQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDUUo7O0FETkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1NKOztBRFBBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNTSjs7QURQQTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNVSjs7QURSQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNZSjs7QURWQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDYUo7O0FEWEE7RUFFSSxnQkFBQTtBQ2FKOztBRFhBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ2FKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9wYXltZW50ZG9uZWJhbmsvZmxpZ2h0Y29tYm9wYXltZW50ZG9uZWJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY29weXtcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi50ZXh0LWJvb2tpbmd7XG4gICAgY29sb3I6ICNlNTI4MjI7XG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZC1pbWd7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNscy10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbn1cbi5jbHMtdGV4dG9wZW5cbntcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG59XG4ubXQ2XG57XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmRpdi1zcGxpdC1wYW5lbHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTNweDtcbn1cbi5kLWZsZXgtbGF0ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm10MjBcbntcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxucCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICB9XG4gIC50ZXh0LWJvbGR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cbi5idXR0b24yXG57XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDA7XG59XG4udGV4dC1wYXltZW50LWluZm97XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwO1xufVxuLmRpdi10ZXh0LXBheW1lbnR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmRpdi1xdWljay1iYWNrIHtcbiAgICBmb250LXNpemU6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMy41cHg7XG4gICAgdG9wOiAtNXB4O1xufVxuLnRleHQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubXQxMlxue1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLnRleHQtYm9va2luZyB7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmQtaW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjU2cHg7XG59XG5cbi5jbHMtdGV4dG9wZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbn1cblxuLm10NiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xufVxuXG4uZC1mbGV4LWxhdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm10MjAge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4udGV4dC1wYXltZW50LWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRpdi10ZXh0LXBheW1lbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uZGl2LXF1aWNrLWJhY2sge1xuICBmb250LXNpemU6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBsZXR0ZXItc3BhY2luZzogLTMuNXB4O1xuICB0b3A6IC01cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubXQxMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.ts ***!
  \*******************************************************************************/
/*! exports provided: FlightcombopaymentdonebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombopaymentdonebankPage", function() { return FlightcombopaymentdonebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");















let FlightcombopaymentdonebankPage = class FlightcombopaymentdonebankPage {
    constructor(_platform, valueGlobal, navCtrl, Roomif, zone, booking, storage, alertCtrl, value, modalCtrl, gf, bookCombo, activatedRoute, launchReview, clipboard, toastCtrl, safariViewController, fb, searchhotel, _calendar) {
        this._platform = _platform;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.zone = zone;
        this.booking = booking;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.value = value;
        this.modalCtrl = modalCtrl;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.activatedRoute = activatedRoute;
        this.launchReview = launchReview;
        this.clipboard = clipboard;
        this.toastCtrl = toastCtrl;
        this.safariViewController = safariViewController;
        this.fb = fb;
        this.searchhotel = searchhotel;
        this._calendar = _calendar;
        this.priceshow = "";
        this.checkreview = 1;
        this.text = "";
        this.url = "";
        this.urlimgbank = "";
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.accountNumber = this.Roomif.accountNumber;
        this.textbank = this.Roomif.textbank;
        this.bankName = this.Roomif.bankName + " . " + this.Roomif.bankBranch;
        this.paymentbank = this.Roomif.paymentbank;
        let infant = 0;
        this.objectFlight = this.gf.getParams('flightcombo');
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        this.getbank();
        this.listfly = this.gf.getParams('flightcombo');
        this._email = this.listfly.HotelBooking.CEmail;
        this.booking.ChildAge.forEach(element => {
            if (element == "<1" || Number(element) < 2) {
                infant += 1;
            }
        });
    }
    ionViewWillEnter() {
        this.gf.googleAnalytionCustom('purchase', { items: [{ item_category: 'flightcombopayment', item_name: this.bookCombo.ComboTitle, item_id: this.bookCombo.HotelCode, start_date: this.booking.CheckInDate, end_date: this.booking.CheckOutDate, number_of_rooms: (this.booking.roomNb ? this.booking.roomNb : 1) }], value: this.gf.convertNumberToDouble(this.priceshow), currency: "VND" });
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'hotel', 'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow), 'fb_currency': 'VND',
            'checkin_date': se.booking.CheckInDate, 'checkout_date ': se.booking.CheckOutDate, 'num_adults': se.searchhotel.adult, 'num_children': (se.searchhotel.child ? se.searchhotel.child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow));
    }
    ngOnInit() {
        var se = this;
        this.status = this.activatedRoute.snapshot.paramMap.get('stt');
        this.code = se.bookCombo.bookingcode;
        if (this.status == 'AL') {
            var options = {
                'method': 'GET',
                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + 'gate/apiv1/GetPeriodPayment/' + this.bookCombo.FlightCode + '',
                'headers': {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response) {
                if (error)
                    throw new Error(error);
                var json = JSON.parse(response.body);
                var PaymentPeriod = json.periodPaymentDate;
                var ti = new Date();
                var DateNow = moment__WEBPACK_IMPORTED_MODULE_9__(ti).format('YYYYMMDD');
                var ho = ti.getHours();
                var addhours = moment__WEBPACK_IMPORTED_MODULE_9__(ti).add(1, 'hours').format('HH:mm');
                se.text = addhours + ' cùng ngày';
                if (PaymentPeriod) {
                    var PaymentPeriodcovert = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('YYYYMMDDHHmm');
                    var thu = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('dddd');
                    if (ho > 0 && ho < 6) {
                        DateNow = DateNow + '1100';
                        if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                            se.text = '11 am cùng ngày';
                        }
                        else {
                            var textthu = se.getDay(thu);
                            var day = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('YYYY');
                            se.text = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                        }
                    }
                    else if (ho >= 6 && ho < 12) {
                        DateNow = DateNow + '1700';
                        if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                            se.text = '17h cùng ngày';
                        }
                        else {
                            var textthu = se.getDay(thu);
                            var day = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('YYYY');
                            se.text = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                        }
                    }
                    else if (ho >= 12 && ho < 20) {
                        DateNow = DateNow + '2030';
                        if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                            se.text = '20h30 cùng ngày';
                        }
                        else {
                            var textthu = se.getDay(thu);
                            var day = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('YYYY');
                            se.text = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                        }
                    }
                    else {
                        var res = ti.setTime(ti.getTime() + (24 * 60 * 60 * 1000));
                        var date = new Date(res);
                        var checkDate = moment__WEBPACK_IMPORTED_MODULE_9__(date).format('YYYYMMDD') + '1100';
                        if (parseInt(PaymentPeriodcovert) >= parseInt(checkDate)) {
                            se.text = '11 am hôm sau';
                        }
                        else {
                            var textthu = se.getDay(thu);
                            var day = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('YYYY');
                            se.text = moment__WEBPACK_IMPORTED_MODULE_9__(PaymentPeriod).format('HH:mm') + ' ' + textthu + ', ' + day;
                        }
                    }
                }
                else {
                    if (ho > 0 && ho < 6) {
                        se.text = '11 am cùng ngày';
                    }
                    else if (ho >= 6 && ho < 12) {
                        se.text = '17h cùng ngày';
                    }
                    else if (ho >= 12 && ho < 20) {
                        se.text = '20h30 cùng ngày';
                    }
                    else {
                        se.text = '11 am hôm sau';
                    }
                }
            });
        }
    }
    getDay(thu) {
        switch (thu) {
            case "Monday":
                thu = "Thứ 2";
                break;
            case "Tuesday":
                thu = "Thứ 3";
                break;
            case "Wednesday":
                thu = "Thứ 4";
                break;
            case "Thursday":
                thu = "Thứ 5";
                break;
            case "Friday":
                thu = "Thứ 6";
                break;
            case "Saturday":
                thu = "Thứ 7";
                break;
            default:
                thu = "Chủ nhật";
                break;
        }
        return thu;
    }
    next() {
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.gf.setParams(null, 'flightcombo');
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set("checkreview", 1);
            let alert = yield this.alertCtrl.create({
                header: 'Bạn thích iVIVU.com?',
                message: 'Đánh giá ứng dụng trên CH Play',
                cssClass: 'cls-reivewapp',
                mode: "ios",
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
    openWebpage() {
        var se = this;
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
    copyClipboard(type) {
        if (type == 1) {
            this.clipboard.copy(this.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy(this.code);
        }
        else if (type == 4) {
            this.clipboard.copy(this.priceshow);
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
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            let itemflight = this.objectFlight.FlightBooking;
            se.createCalendar(itemflight, true, true);
        }
    }
    createCalendar(itemflight, isdepart, createOrModify) {
        let se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt combo: ` + se.code + `

Tên khách sạn: ` + this.booking.HotelName +
            `

Tên phòng: ` + this.nameroom +
            `

Giờ ra tàu bay: ` + (isdepart ? (moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.departFlight.DepartTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.departFlight.DepartTime).format("mm")) : (moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.returnFlight.DepartTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.returnFlight.DepartTime).format("mm"))) +
            `	
      
Hành khách:

`;
        itemflight.adults.forEach((elementA, index) => {
            if (index != 0) {
                strmess += `

`;
            }
            strmess += index + 1 + ". " + elementA.genderdisplay + " " + elementA.hoten;
            if (isdepart && elementA.AncillaryJson) {
                let objjson = JSON.parse(elementA.AncillaryJson);
                if (objjson && objjson.length > 0) {
                    strmess += " | ";
                    objjson.forEach((elementAncillary, indexanci) => {
                        strmess += (elementAncillary.Type == "Baggage" ? "Hành lý" : "Chỗ ngồi") + ": " + (elementAncillary.Type == "Baggage" ? elementAncillary.Value + 'kg' : elementAncillary.Value) + (indexanci != objjson.length - 1 ? " | " : '');
                    });
                }
            }
            if (!isdepart && elementA.AncillaryReturnJson) {
                let objjson = JSON.parse(elementA.AncillaryReturnJson);
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
            strmess += (index + 1 + itemflight.adults.length) + ". " + elementC.genderdisplay + " " + elementC.hoten;
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
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.childs.map((c) => { return c.hoten; }).join(', ') + ".";
        }
        else {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        }
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarName = "Chuyến đi " + (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  -  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.departFlight.DepartTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_9__(itemflight.returnFlight.DepartTime).format('DD/MM/YYYY'));
        calOptions.calendarId = 1;
        let event = {
            title: se.code + "-" + se.booking.HotelName + " (" + (isdepart ? itemflight.departFlight.FlightNumber : itemflight.returnFlight.FlightNumber) + ")",
            location: (isdepart ? itemflight.departAirport : itemflight.returnAirport),
            message: strmess,
            startDate: (isdepart ? itemflight.departFlight.DepartTime : itemflight.returnFlight.DepartTime),
            endDate: (isdepart ? itemflight.departFlight.LandingTime : itemflight.returnFlight.LandingTime),
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
                if (createOrModify) {
                    se.gf.showLoadingwithtimeout();
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        if (!isdepart) {
                            se.navCtrl.navigateBack(['/app/tabs/tab3/']);
                            se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {
                            });
                        }
                        else {
                            let itemflight = this.objectFlight.FlightBooking;
                            se.createCalendar(itemflight, false, true);
                        }
                    });
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se.gf.showLoadingwithtimeout();
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            se._calendar.openCalendar(new Date(itemflight.departFlight.DepartTime)).then(() => {
                            });
                        });
                    }
                });
            }
        });
    }
};
FlightcombopaymentdonebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightcombopaymentdonebank',
        template: __webpack_require__(/*! ./flightcombopaymentdonebank.page.html */ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.html"),
        styles: [__webpack_require__(/*! ./flightcombopaymentdonebank.page.scss */ "./src/app/flightcombopaymentdonebank/flightcombopaymentdonebank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["Booking"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["Bookcombo"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__["LaunchReview"], _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Clipboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__["SafariViewController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_13__["Facebook"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["SearchHotel"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_14__["Calendar"]])
], FlightcombopaymentdonebankPage);



/***/ })

}]);
//# sourceMappingURL=flightcombopaymentdonebank-flightcombopaymentdonebank-module.js.map