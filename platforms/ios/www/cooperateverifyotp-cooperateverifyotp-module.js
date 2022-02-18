(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cooperateverifyotp-cooperateverifyotp-module"],{

/***/ "./src/app/cooperateverifyotp/cooperateverifyotp.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/cooperateverifyotp/cooperateverifyotp.module.ts ***!
  \*****************************************************************/
/*! exports provided: CooperateverifyotpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperateverifyotpPageModule", function() { return CooperateverifyotpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cooperateverifyotp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cooperateverifyotp.page */ "./src/app/cooperateverifyotp/cooperateverifyotp.page.ts");







const routes = [
    {
        path: '',
        component: _cooperateverifyotp_page__WEBPACK_IMPORTED_MODULE_6__["CooperateverifyotpPage"]
    }
];
let CooperateverifyotpPageModule = class CooperateverifyotpPageModule {
};
CooperateverifyotpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cooperateverifyotp_page__WEBPACK_IMPORTED_MODULE_6__["CooperateverifyotpPage"]]
    })
], CooperateverifyotpPageModule);



/***/ }),

/***/ "./src/app/cooperateverifyotp/cooperateverifyotp.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/cooperateverifyotp/cooperateverifyotp.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label>Xác thực thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"d-flex\">\n    <div class=\"text-title\">Mã đơn hàng</div>\n    <div class=\"text-bookingCode margin-left-25\">IVIVU123456</div>\n  </div>\n  <div class=\"d-flex margin-top-12\">\n    <div class=\"text-title\">Số tiền</div>\n    <div class=\"text-total margin-left-65\">1.234.000 đ</div>\n  </div>\n  <hr class=\"cls-hr\">\n  <div class=\"margin-top-25 text-total font-weight-bold\">\n    Xác thực thanh toán\n  </div>\n  <div class=\"margin-top-19 text-total\">\n    Vui lòng nhập mã OTP được gửi số điện thoại ******1234\n  </div>\n  <ion-row class=\"row-otp margin-left-15\">\n    <ion-col size=\"2\" (ionChange)=\"change1()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num1\" #ipOTP1 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"2\" (ionChange)=\"change2()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num2\" #ipOTP2 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"2\" (ionChange)=\"change3()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num3\" #ipOTP3 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"2\" (ionChange)=\"change4()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num4\" #ipOTP4 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"2\" (ionChange)=\"change5()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num5\" #ipOTP5 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"2\" class=\"no-padding\">\n      <ion-input #ipOTP6 maxlength=1 [(ngModel)]=\"num6\" type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n  </ion-row>\n  <div>\n    <div class=\"text-right margin-top-2\">\n      <u class=\"text-sendOTP\">\n        Gửi lại OTP\n      </u>\n    </div>\n  \n  </div>\n</ion-content>\n<ion-footer class=\"cls-ion-footer\">\n  <div  style=\"background-color: #ffffff; text-align: center; display: flex;\">\n    <div  class=\"div-button-flex\">\n      <button  ion-button round outline class=\"button button-cancel\">Hủy</button>\n      <button  ion-button round outline class=\"button button2\">Xác nhận</button>\n    </div>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/cooperateverifyotp/cooperateverifyotp.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/cooperateverifyotp/cooperateverifyotp.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-left-25 {\n  margin-left: 25px;\n}\n\n.margin-left-65 {\n  margin-left: 65px;\n}\n\n.margin-top-12 {\n  margin-top: 12px;\n}\n\n.margin-top-25 {\n  margin-top: 25px;\n}\n\n.margin-top-19 {\n  margin-top: 19px;\n}\n\n.margin-top-2 {\n  margin-top: 2px;\n}\n\n.margin-left-15 {\n  margin-left: -15px;\n}\n\n.text-title {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.text-bookingCode {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #00c1de;\n}\n\n.text-total {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #333333;\n}\n\n.font-weight-bold {\n  font-weight: 600;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 42px;\n  height: 43px;\n  text-align: center;\n  --padding-start: 0px;\n}\n\n.row-otp {\n  margin-top: 13px;\n}\n\n.no-padding {\n  padding: 0px 0px 0px 15px;\n  align-self: center;\n  text-align: right;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 162px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 20px;\n}\n\n.button-cancel {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 160px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 15px;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.text-sendOTP {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #003c71;\n}\n\n.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Nvb3BlcmF0ZXZlcmlmeW90cC9jb29wZXJhdGV2ZXJpZnlvdHAucGFnZS5zY3NzIiwic3JjL2FwcC9jb29wZXJhdGV2ZXJpZnlvdHAvY29vcGVyYXRldmVyaWZ5b3RwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxpQkFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0FDSUo7O0FERkE7RUFDSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtBQ01KOztBREpBO0VBQ0ksa0JBQUE7QUNPSjs7QURMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1NGOztBRFBBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1VKOztBRFJBO0VBQ0ksZ0JBQUE7QUNXSjs7QURUQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNXRjs7QURUQTtFQUNJLGFBQUE7QUNZSjs7QURWQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNhSjs7QURYQTtFQUNJLGdCQUFBO0FDY0o7O0FEWkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNlSjs7QURiQTtFQUNJLHdCQUFBO0FDZ0JKOztBRGRBO0VBRVEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDZ0JSOztBRGJJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FDZVI7O0FEYkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2dCUjs7QURkTTtFQUNFLG1DQUFBO0VBQ0EsaUJBQUE7QUNpQlI7O0FEZkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDa0JSOztBRGZJO0VBQ0ksaUJBQUE7QUNrQlIiLCJmaWxlIjoic3JjL2FwcC9jb29wZXJhdGV2ZXJpZnlvdHAvY29vcGVyYXRldmVyaWZ5b3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJnaW4tbGVmdC0yNXtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi5tYXJnaW4tbGVmdC02NXtcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcbn1cbi5tYXJnaW4tdG9wLTEye1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubWFyZ2luLXRvcC0yNXtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm1hcmdpbi10b3AtMTl7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbn1cbi5tYXJnaW4tdG9wLTJ7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufVxuLm1hcmdpbi1sZWZ0LTE1e1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi50ZXh0LXRpdGxle1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLnRleHQtYm9va2luZ0NvZGV7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwMGMxZGU7XG59XG4udGV4dC10b3RhbHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cbi5mb250LXdlaWdodC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2xzLWhyXG57XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5pbnB1dC1vdHB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0M3B4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbi5yb3ctb3Rwe1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG4ubm8tcGFkZGluZ3tcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sYWJlbC1vdHB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxNjJweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgXG4gICAgfSBcbiAgICAuYnV0dG9uLWNhbmNlbFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9IFxuICAgIC5kaXYtYnV0dG9uLWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmNscy1pb24tZm9vdGVye1xuICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuICAgIC50ZXh0LXNlbmRPVFB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XG4gICAgICAgXG4gICAgfVxuICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9IiwiLm1hcmdpbi1sZWZ0LTI1IHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5tYXJnaW4tbGVmdC02NSB7XG4gIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuXG4ubWFyZ2luLXRvcC0xMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5tYXJnaW4tdG9wLTI1IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm1hcmdpbi10b3AtMTkge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuXG4ubWFyZ2luLXRvcC0yIHtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4ubWFyZ2luLWxlZnQtMTUge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLnRleHQtYm9va2luZ0NvZGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDBjMWRlO1xufVxuXG4udGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5mb250LXdlaWdodC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbnB1dC1vdHAge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiA0MnB4O1xuICBoZWlnaHQ6IDQzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5yb3ctb3RwIHtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggMHB4IDBweCAxNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGFiZWwtb3RwIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxNjJweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLmJ1dHRvbi1jYW5jZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDE2MHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZGl2LWJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jbHMtaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLnRleHQtc2VuZE9UUCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/cooperateverifyotp/cooperateverifyotp.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/cooperateverifyotp/cooperateverifyotp.page.ts ***!
  \***************************************************************/
/*! exports provided: CooperateverifyotpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperateverifyotpPage", function() { return CooperateverifyotpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");



let CooperateverifyotpPage = class CooperateverifyotpPage {
    constructor(keyboard) {
        this.keyboard = keyboard;
        this.num1 = "";
        this.num2 = "";
        this.num3 = "";
        this.num4 = "";
        this.num5 = "";
        this.num6 = "";
    }
    ngOnInit() {
    }
    goback() {
    }
    change1() {
        if (this.num1) {
            this.ipOTP2.setFocus();
            this.keyboard.show();
        }
    }
    change2() {
        if (this.num2) {
            this.ipOTP3.setFocus();
            this.keyboard.show();
        }
    }
    change3() {
        if (this.num3) {
            this.ipOTP4.setFocus();
            this.keyboard.show();
        }
    }
    change4() {
        if (this.num4) {
            this.ipOTP5.setFocus();
            this.keyboard.show();
        }
    }
    change5() {
        if (this.num5) {
            this.ipOTP6.setFocus();
            this.keyboard.show();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP1'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP2'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP3'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP4'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP5'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP5", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipOTP6'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CooperateverifyotpPage.prototype, "ipOTP6", void 0);
CooperateverifyotpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cooperateverifyotp',
        template: __webpack_require__(/*! ./cooperateverifyotp.page.html */ "./src/app/cooperateverifyotp/cooperateverifyotp.page.html"),
        styles: [__webpack_require__(/*! ./cooperateverifyotp.page.scss */ "./src/app/cooperateverifyotp/cooperateverifyotp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__["Keyboard"]])
], CooperateverifyotpPage);



/***/ })

}]);
//# sourceMappingURL=cooperateverifyotp-cooperateverifyotp-module.js.map