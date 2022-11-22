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

module.exports = ".margin-left-25 {\n  margin-left: 25px;\n}\n\n.margin-left-65 {\n  margin-left: 65px;\n}\n\n.margin-top-12 {\n  margin-top: 12px;\n}\n\n.margin-top-25 {\n  margin-top: 25px;\n}\n\n.margin-top-19 {\n  margin-top: 19px;\n}\n\n.margin-top-2 {\n  margin-top: 2px;\n}\n\n.margin-left-15 {\n  margin-left: -15px;\n}\n\n.text-title {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #828282;\n}\n\n.text-bookingCode {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  color: #00c1de;\n}\n\n.text-total {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #333333;\n}\n\n.font-weight-bold {\n  font-weight: 600;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 42px;\n  height: 43px;\n  text-align: center;\n  --padding-start: 0px;\n}\n\n.row-otp {\n  margin-top: 13px;\n}\n\n.no-padding {\n  padding: 0px 0px 0px 15px;\n  align-self: center;\n  text-align: right;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 162px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 20px;\n}\n\n.button-cancel {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 160px;\n  font-size: 17px !important;\n  height: 44px !important;\n  margin-left: 15px;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.text-sendOTP {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #003c71;\n}\n\n.text-right {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb29wZXJhdGV2ZXJpZnlvdHAvY29vcGVyYXRldmVyaWZ5b3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29vcGVyYXRldmVyaWZ5b3RwL2Nvb3BlcmF0ZXZlcmlmeW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksaUJBQUE7QUNFSjs7QURBQTtFQUNJLGdCQUFBO0FDR0o7O0FEREE7RUFDSSxnQkFBQTtBQ0lKOztBREZBO0VBQ0ksZ0JBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7QUNNSjs7QURKQTtFQUNJLGtCQUFBO0FDT0o7O0FETEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUUY7O0FETkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNTRjs7QURQQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNVSjs7QURSQTtFQUNJLGdCQUFBO0FDV0o7O0FEVEE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDV0Y7O0FEVEE7RUFDSSxhQUFBO0FDWUo7O0FEVkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDYUo7O0FEWEE7RUFDSSxnQkFBQTtBQ2NKOztBRFpBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDZUo7O0FEYkE7RUFDSSx3QkFBQTtBQ2dCSjs7QURkQTtFQUVRLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ2dCUjs7QURiSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtBQ2VSOztBRGJJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNnQlI7O0FEZE07RUFDRSxtQ0FBQTtFQUNBLGlCQUFBO0FDaUJSOztBRGZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2tCUjs7QURmSTtFQUNJLGlCQUFBO0FDa0JSIiwiZmlsZSI6InNyYy9hcHAvY29vcGVyYXRldmVyaWZ5b3RwL2Nvb3BlcmF0ZXZlcmlmeW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyZ2luLWxlZnQtMjV7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4ubWFyZ2luLWxlZnQtNjV7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG59XG4ubWFyZ2luLXRvcC0xMntcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm1hcmdpbi10b3AtMjV7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5tYXJnaW4tdG9wLTE5e1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG59XG4ubWFyZ2luLXRvcC0ye1xuICAgIG1hcmdpbi10b3A6IDJweDtcbn1cbi5tYXJnaW4tbGVmdC0xNXtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4udGV4dC10aXRsZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi50ZXh0LWJvb2tpbmdDb2Rle1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDBjMWRlO1xufVxuLnRleHQtdG90YWx7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG4uZm9udC13ZWlnaHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmNscy1oclxue1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5wdXQtb3Rwe1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHdpZHRoOiA0MnB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4ucm93LW90cHtcbiAgICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuLm5vLXBhZGRpbmd7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMTVweDtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubGFiZWwtb3Rwe1xuICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cbi5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMTYycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIFxuICAgIH0gXG4gICAgLmJ1dHRvbi1jYW5jZWxcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfSBcbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5jbHMtaW9uLWZvb3RlcntcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cbiAgICAudGV4dC1zZW5kT1RQe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xuICAgICAgIFxuICAgIH1cbiAgICAudGV4dC1yaWdodHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfSIsIi5tYXJnaW4tbGVmdC0yNSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4ubWFyZ2luLWxlZnQtNjUge1xuICBtYXJnaW4tbGVmdDogNjVweDtcbn1cblxuLm1hcmdpbi10b3AtMTIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubWFyZ2luLXRvcC0yNSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXJnaW4tdG9wLTE5IHtcbiAgbWFyZ2luLXRvcDogMTlweDtcbn1cblxuLm1hcmdpbi10b3AtMiB7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTE1IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi50ZXh0LWJvb2tpbmdDb2RlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzAwYzFkZTtcbn1cblxuLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZm9udC13ZWlnaHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtb3RwIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogNDJweDtcbiAgaGVpZ2h0OiA0M3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4ucm93LW90cCB7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggMTVweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxhYmVsLW90cCB7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTYycHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5idXR0b24tY2FuY2VsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiAxNjBweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmRpdi1idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2xzLWlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi50ZXh0LXNlbmRPVFAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */"

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