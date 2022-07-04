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

module.exports = ".margin-left-25 {\n  margin-left: 25px;\n}\n\n.margin-left-65 {\n  margin-left: 65px;\n}\n\n.margin-top-12 {\n  margin-top: 12px;\n}\n\n.margin-top-25 {\n  margin-top: 25px;\n}\n\n.margin-top-19 {\n  margin-top: 19px;\n}\n\n.margin-top-2 {\n  margin-top: 2px;\n}\n\n.margin-left-15 {\n  margin-left: -15px;\n}\n\n.text-title {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.text-bookingCode {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #00c1de;\n}\n\n.text-total {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #333333;\n}\n\n.font-weight-bold {\n  font-weight: 600;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 42px;\n  height: 43px;\n  text-align: center;\n  --padding-start: 0px;\n}\n\n.row-otp {\n  margin-top: 13px;\n}\n\n.no-padding {\n  padding: 0px 0px 0px 15px;\n  align-self: center;\n  text-align: right;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 162px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 20px;\n}\n\n.button-cancel {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 160px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 15px;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.text-sendOTP {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #003c71;\n}\n\n.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvY29vcGVyYXRldmVyaWZ5b3RwL2Nvb3BlcmF0ZXZlcmlmeW90cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nvb3BlcmF0ZXZlcmlmeW90cC9jb29wZXJhdGV2ZXJpZnlvdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0FDTUo7O0FESkE7RUFDSSxrQkFBQTtBQ09KOztBRExBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1FGOztBRE5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDVUo7O0FEUkE7RUFDSSxnQkFBQTtBQ1dKOztBRFRBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ1dGOztBRFRBO0VBQ0ksYUFBQTtBQ1lKOztBRFZBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ2FKOztBRFhBO0VBQ0ksZ0JBQUE7QUNjSjs7QURaQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ2VKOztBRGJBO0VBQ0ksd0JBQUE7QUNnQko7O0FEZEE7RUFFUSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNnQlI7O0FEYkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUNlUjs7QURiSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDZ0JSOztBRGRNO0VBQ0UsbUNBQUE7RUFDQSxpQkFBQTtBQ2lCUjs7QURmSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNrQlI7O0FEZkk7RUFDSSxpQkFBQTtBQ2tCUiIsImZpbGUiOiJzcmMvYXBwL2Nvb3BlcmF0ZXZlcmlmeW90cC9jb29wZXJhdGV2ZXJpZnlvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1sZWZ0LTI1e1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuLm1hcmdpbi1sZWZ0LTY1e1xuICAgIG1hcmdpbi1sZWZ0OiA2NXB4O1xufVxuLm1hcmdpbi10b3AtMTJ7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tYXJnaW4tdG9wLTI1e1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG4ubWFyZ2luLXRvcC0xOXtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xufVxuLm1hcmdpbi10b3AtMntcbiAgICBtYXJnaW4tdG9wOiAycHg7XG59XG4ubWFyZ2luLWxlZnQtMTV7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnRleHQtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4udGV4dC1ib29raW5nQ29kZXtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzAwYzFkZTtcbn1cbi50ZXh0LXRvdGFse1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZvbnQtd2VpZ2h0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jbHMtaHJcbntcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmlucHV0LW90cHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQzcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLnJvdy1vdHB7XG4gICAgbWFyZ2luLXRvcDogMTNweDtcbn1cbi5uby1wYWRkaW5ne1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmxhYmVsLW90cHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG4uYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDE2MnB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBcbiAgICB9IFxuICAgIC5idXR0b24tY2FuY2VsXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIH0gXG4gICAgLmRpdi1idXR0b24tZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuY2xzLWlvbi1mb290ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICB9XG4gICAgLnRleHQtc2VuZE9UUHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzAwM2M3MTtcbiAgICAgICBcbiAgICB9XG4gICAgLnRleHQtcmlnaHR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH0iLCIubWFyZ2luLWxlZnQtMjUge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTY1IHtcbiAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG5cbi5tYXJnaW4tdG9wLTEyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm1hcmdpbi10b3AtMjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubWFyZ2luLXRvcC0xOSB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG59XG5cbi5tYXJnaW4tdG9wLTIge1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tYXJnaW4tbGVmdC0xNSB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC1ib29raW5nQ29kZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwMGMxZGU7XG59XG5cbi50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmZvbnQtd2VpZ2h0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmlucHV0LW90cCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnJvdy1vdHAge1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5sYWJlbC1vdHAge1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDE2MnB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4uYnV0dG9uLWNhbmNlbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogMTYwcHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNscy1pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4udGV4dC1zZW5kT1RQIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn0iXX0= */"

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