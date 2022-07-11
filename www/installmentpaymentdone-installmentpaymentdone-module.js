(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["installmentpaymentdone-installmentpaymentdone-module"],{

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.module.ts ***!
  \*************************************************************************/
/*! exports provided: InstallmentpaymentdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentdonePageModule", function() { return InstallmentpaymentdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installmentpaymentdone.page */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.ts");







const routes = [
    {
        path: '',
        component: _installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentdonePage"]
    }
];
let InstallmentpaymentdonePageModule = class InstallmentpaymentdonePageModule {
};
InstallmentpaymentdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentdonePage"]]
    })
], InstallmentpaymentdonePageModule);



/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-payment-done-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"title-header\"><label class=\"text-title\">Hoàn thành</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"installment-payment-done-content\">\n    <img src=\"./assets/step/step_4.svg\">\n    <div class=\"div-label-title\">\n      <ion-label class=\"cls-primary f-bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n      </ion-label>\n    </div>\n    \n    <div *ngIf=\"paymentsuccess else paymentcancel\">\n      <div>\n        <ion-label class=\"f-bold\">\n          Mã đặt phòng của quý khách là\n          <span class=\"f-bold cls-code\">{{code}}</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Thông tin thanh toán đã được gửi đến email của Quý khách.\n        </ion-label>\n      </div>\n    </div>\n    <ng-template #paymentcancel>\n      <div *ngIf=\"!errorcode else haserrorcode\">\n        <ion-label text-wrap>\n          Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">Khách hàng hủy giao dịch</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n        </ion-label>\n      </div>\n      <ng-template #haserrorcode>\n        <div >\n          <ion-label text-wrap>\n            Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">{{errorcode}}</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n          </ion-label>\n        </div>\n      </ng-template>\n    </ng-template>\n    \n    <div>\n      <ion-label text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email tc@ivivu.com để được trợ giúp.\n      </ion-label>\n    </div>\n    <div>\n      <ion-label text-wrap>\n        Hồ Chí Minh: 1900 1870\n      </ion-label>\n    </div>\n    <div>\n      <ion-label text-wrap>\n        Hà Nội: 1900 2045\n      </ion-label>\n    </div>\n    <div>\n    <ion-label text-wrap>\n      Cần Thơ: 1900 2087\n    </ion-label>\n    </div>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".installment-payment-done-header .text-center {\n  text-align: center;\n}\n.installment-payment-done-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-done-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-done-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-done-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-done-content {\n  padding: 16px;\n}\n.installment-payment-done-content .div-label-title {\n  padding-top: 12px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.installment-payment-done-content .f-bold {\n  font-weight: 600;\n}\n.installment-payment-done-content .cls-primary {\n  color: #26bed6;\n}\n.installment-payment-done-content .cls-cancel {\n  color: red;\n}\n.installment-payment-done-content .cls-code {\n  color: #ff9500;\n}\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS9pbnN0YWxsbWVudHBheW1lbnRkb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS9pbnN0YWxsbWVudHBheW1lbnRkb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ0VwRDtBREFRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVo7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURHQTtFQUNJLGFBQUE7QUNBSjtBRENJO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ1I7QURDSTtFQUNJLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7QUNDUjtBRENJO0VBQ0ksVUFBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURHQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDREo7QURHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxtZW50cGF5bWVudGRvbmUvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlclxyXG57XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC5kaXYtbGFiZWwtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmYtYm9sZHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmNscy1wcmltYXJ5e1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgfVxyXG4gICAgLmNscy1jYW5jZWx7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5jbHMtY29kZXtcclxuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmRpdi1idXR0b24tcGF5bWVudC1kb25le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iLCIuaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuZGl2LWxhYmVsLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmNscy1wcmltYXJ5IHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmNscy1jYW5jZWwge1xuICBjb2xvcjogcmVkO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtY29kZSB7XG4gIGNvbG9yOiAjZmY5NTAwO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"
=======
module.exports = ".installment-payment-done-header .text-center {\n  text-align: center;\n}\n.installment-payment-done-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-done-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-done-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-done-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-done-content {\n  padding: 16px;\n}\n.installment-payment-done-content .div-label-title {\n  padding-top: 12px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.installment-payment-done-content .f-bold {\n  font-weight: 600;\n}\n.installment-payment-done-content .cls-primary {\n  color: #26bed6;\n}\n.installment-payment-done-content .cls-cancel {\n  color: red;\n}\n.installment-payment-done-content .cls-code {\n  color: #ff9500;\n}\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2luc3RhbGxtZW50cGF5bWVudGRvbmUvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc3RhbGxtZW50cGF5bWVudGRvbmUvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNFcEQ7QURBUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0FDQUo7QURDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURDSTtFQUNJLFVBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FER0E7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0RKO0FER0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9pbnN0YWxsbWVudHBheW1lbnRkb25lL2luc3RhbGxtZW50cGF5bWVudGRvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXJcclxue1xyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGlnbi1zZWxmLWNlbnRlcntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdvYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O3RvcDogMHB4O1xyXG5cclxuICAgICAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAuZGl2LWxhYmVsLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5jbHMtcHJpbWFyeXtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIH1cclxuICAgIC5jbHMtY2FuY2Vse1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWNvZGV7XHJcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59IiwiLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogMHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmRpdi1sYWJlbC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5mLWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtY2FuY2VsIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuY2xzLWNvZGUge1xuICBjb2xvcjogI2ZmOTUwMDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.ts ***!
  \***********************************************************************/
/*! exports provided: InstallmentpaymentdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentdonePage", function() { return InstallmentpaymentdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");






let InstallmentpaymentdonePage = class InstallmentpaymentdonePage {
    constructor(activityService, navCtrl, booking, valueGlobal, _platform, _calendar, Roomif) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.booking = booking;
        this.valueGlobal = valueGlobal;
        this._platform = _platform;
        this._calendar = _calendar;
        this.Roomif = Roomif;
        this.paymentsuccess = false;
        this.errorcode = "";
        this.nameroom = "";
        this.isaddCalendar = 0;
        var se = this;
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        if (se.activityService.installmentPaymentSuccess) {
            se.paymentsuccess = true;
            se.activityService.installmentPaymentSuccess = false;
            se.code = se.booking.code;
            se.booking.code = null;
        }
        else {
            if (se.activityService.installmentPaymentErrorCode) {
                se.errorcode = se.activityService.installmentPaymentErrorCode;
            }
        }
    }
    ngOnInit() {
    }
    next() {
        this.activityService.objBankInStallment = null;
        this.valueGlobal.backValue = "";
        this.navCtrl.navigateBack('/');
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            se.createCalendar(true);
        }
    }
    createCalendar(createOrModify) {
        var se = this;
        this.isaddCalendar = 1;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt phòng: ` + se.code + `

Tên phòng: ` + this.nameroom +
            `

Khách hàng: ` + this.Roomif.hoten;
        strmess += `

`;
        strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarId = 1;
        let event = {
            title: se.booking.HotelName,
            location: "",
            message: strmess,
            startDate: se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00",
            endDate: se.booking.CheckInDate + "T" + se.booking.CheckoutTime + ":00",
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
                if (createOrModify) {
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        se._calendar.openCalendar(new Date(se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00")).then(() => {
                        });
                    });
                }
                se.navCtrl.navigateBack(['/app/tabs/tab3']);
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            se._calendar.openCalendar(new Date(se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00")).then(() => {
                            });
                        });
                    }
                    else {
                    }
                });
            }
        });
    }
};
InstallmentpaymentdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installmentpaymentdone',
        template: __webpack_require__(/*! ./installmentpaymentdone.page.html */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.html"),
        styles: [__webpack_require__(/*! ./installmentpaymentdone.page.scss */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_5__["Calendar"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["RoomInfo"]])
], InstallmentpaymentdonePage);



/***/ })

}]);
//# sourceMappingURL=installmentpaymentdone-installmentpaymentdone-module.js.map