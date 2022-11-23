(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combodoneprepay-combodoneprepay-module"],{

/***/ "./src/app/combodoneprepay/combodoneprepay.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/combodoneprepay/combodoneprepay.module.ts ***!
  \***********************************************************/
/*! exports provided: CombodoneprepayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombodoneprepayPageModule", function() { return CombodoneprepayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combodoneprepay.page */ "./src/app/combodoneprepay/combodoneprepay.page.ts");







const routes = [
    {
        path: '',
        component: _combodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__["CombodoneprepayPage"]
    }
];
let CombodoneprepayPageModule = class CombodoneprepayPageModule {
};
CombodoneprepayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__["CombodoneprepayPage"]]
    })
], CombodoneprepayPageModule);



/***/ }),

/***/ "./src/app/combodoneprepay/combodoneprepay.page.html":
/*!***********************************************************!*\
  !*** ./src/app/combodoneprepay/combodoneprepay.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentdonePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_4.svg\">\n  <!-- <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img  src=\"./assets/step/fc_step_3.svg\">\n    </div> -->\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n  </div>\n  <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='0'\">\n    <div>\n      <p class=\"text\" style=\"font-weight: bold\">\n        Cảm ơn Quý khách sử dụng dịch vụ iVIVU.com\n        <p>\n    </div>\n    <div>\n      <p class=\"text\">\n        Mã đặt phòng của quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Giao dịch thanh toán thành công. Tổng số tiền thanh toán là :\n        <span style=\"font-weight: bold\">{{total}} VND</span>\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Xác nhận đặt phòng đã được gửi đến email của Quý khách.\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email tc@ivivu.com để được trợ giúp.\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hồ Chí Minh: 1900 1870\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hà Nội: 1900 2045\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Cần Thơ: 1900 2087\n        <p>\n    </div>\n\n\n\n\n\n    <!-- <ion-row>\n      <ion-checkbox (ionChange)=\"edit(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n      <p class=\"text\" style=\"margin: 1px 10px\">Xuất hóa đơn<p>\n      <button item-end (click)=\"edit(1)\" ion-button round outline class=\"button4\">Edit</button>\n    </ion-row> -->\n\n    <!-- <ion-row style=\"margin-top: 20px\">\n      <ion-checkbox  [(ngModel)]=\"ischeck\"  color=\"secondary\"></ion-checkbox>\n      <p class=\"text\" style=\"margin: 0 10px\">Xuất hóa đơn<p>\n    </ion-row> -->\n  </div>\n  <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='1'\">\n    <div>\n      <p class=\"text\" style=\"font-weight: bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n        <p>\n    </div>\n    <div>\n      <p class=\"text\">\n        Mã đặt phòng của quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nhân viên iVIVU.COM sẽ liên lạc với Quý Khách trong thời gian sớm nhất.\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ qua email tc@ivivu.com hoặc tổng đài sau:\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hồ Chí Minh: 1900 1870\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hà Nội: 1900 2045\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Cần Thơ: 1900 2087\n        <p>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button *ngIf=\"ischeckshow=='0'||payment=='AL'\" (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Xem cẩm nang du lịch</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combodoneprepay/combodoneprepay.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/combodoneprepay/combodoneprepay.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.button1 {\n  color: #26bed6;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  margin-right: 0px;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n}\n\n::ng-deep {\n  align-items: center !important;\n}\n\n::ng-deep .cls-reivewapp .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-reivewapp .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-reivewapp .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-reivewapp .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2RvbmVwcmVwYXkvY29tYm9kb25lcHJlcGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tYm9kb25lcHJlcGF5L2NvbWJvZG9uZXByZXBheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBQTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVBO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRWxEOztBREFBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFSjs7QURDQTtFQUNJLDJCQUFBO0VBQ0EsU0FBQTtBQ0VKOztBREFBO0VBQ0ksaUJBQUE7QUNHSjs7QUREQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBRERBO0VBQ0ksOEJBQUE7QUNJSjs7QURGSTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7R0FBQSxnQ0FBQTtPQUFBLDRCQUFBO0FDR1I7O0FEQUk7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0VKOztBREFJO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDRUo7O0FEQUk7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDRUo7O0FEQUk7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNFSjs7QURBSTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ0VKOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUNFUjs7QURDSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDUjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvZG9uZXByZXBheS9jb21ib2RvbmVwcmVwYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmJ1dHRvbjFcclxue1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGl2LWJ0blxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxyXG59XHJcbi5idXR0b240XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgXHJcbn1cclxuLmltYWdlLWNhcmQxe1xyXG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQlXHJcbn1cclxuLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuLmltZy10cmlwLWVtcHR5XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5jbHMtcmVpdmV3YXBwIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxufVxyXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSIsIi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW1hZ2UtY2FyZDEge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0JTtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmltZy10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59Il19 */"

/***/ }),

/***/ "./src/app/combodoneprepay/combodoneprepay.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/combodoneprepay/combodoneprepay.page.ts ***!
  \*********************************************************/
/*! exports provided: CombodoneprepayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombodoneprepayPage", function() { return CombodoneprepayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! request */ "./node_modules/request/index.js");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");















let CombodoneprepayPage = class CombodoneprepayPage {
    constructor(_platform, navCtrl, Roomif, activatedRoute, zone, booking, authService, storage, alertCtrl, launchReview, gf, searchhotel, fb, bookCombo, _calendar, _voucherService) {
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
        this.searchhotel = searchhotel;
        this.fb = fb;
        this.bookCombo = bookCombo;
        this._calendar = _calendar;
        this._voucherService = _voucherService;
        if (this._voucherService.selectVoucher) {
            this._voucherService.publicClearVoucherAfterPaymentDone(1);
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this.bookCombo.promoCode = "";
        this.bookCombo.discountpromo = 0;
        this.listcars = this.gf.getParams('carscombo');
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        this.loccation = this.listcars.TransferBooking.toPlaceName;
        this.priceshow = this.listcars.HotelBooking.TotalPrices.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
        let se = this;
        se.fb.logEvent(se.fb.EVENTS.EVENT_NAME_PURCHASED, { 'fb_content_type': 'hotel', 'fb_content_id': se.bookCombo.HotelCode ? se.bookCombo.HotelCode : se.booking.code, 'fb_num_items': se.searchhotel.roomnumber, 'fb_value': se.gf.convertNumberToDouble(se.priceshow), 'fb_currency': 'VND',
            'checkin_date': se.listcars.HotelBooking.CheckInDate, 'checkout_date ': se.listcars.HotelBooking.CheckOutDate, 'num_adults': se.listcars.HotelBooking.Adult, 'num_children': (se.listcars.HotelBooking.Child ? se.listcars.HotelBooking.Child : 0), 'value': se.gf.convertNumberToDouble(se.priceshow), 'currency': 'VND' }, se.gf.convertNumberToFloat(se.priceshow));
        se.GetUserInfo();
    }
    ngOnInit() {
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        this.ischeckshow = this.activatedRoute.snapshot.paramMap.get('ischeck');
        this.total = this.Roomif.priceshowtt;
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                request__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
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
    next() {
        this.Roomif.priceshowtt = "";
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.gf.setParams(2, 'seemoreblog');
        this.navCtrl.navigateForward('/bloglist');
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
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            se.createCalendar(true, true);
        }
    }
    createCalendar(createOrModify, isdepart) {
        var se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let CompanyName = (isdepart ? this.listcars.TransferBooking.departTransfer.CompanyName : this.listcars.TransferBooking.returnTransfer.CompanyName);
        let Seats = (isdepart ? this.listcars.TransferBooking.departTransfer.Seats : this.listcars.TransferBooking.returnTransfer.Seats);
        let strmess = `Mã đặt combo: ` + se.code + `

Tên phòng: ` + this.nameroom +
            `

Khách hàng: ` + this.Roomif.hoten +
            `

Hãng xe: ` + CompanyName +
            `
    
Số ghế: ` + Seats;
        strmess += `

`;
        strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarId = 1;
        let event = {
            title: se.code + "-" + se.booking.HotelName + " (" + CompanyName + ")",
            location: "",
            message: strmess,
            startDate: (isdepart ? se.booking.CheckInDate + "T" + this.listcars.TransferBooking.departTransfer.DepartTime + ":00" : se.booking.CheckOutDate + "T" + this.listcars.TransferBooking.returnTransfer.DepartTime + ":00"),
            endDate: (isdepart ? se.booking.CheckInDate + "T" + this.listcars.TransferBooking.departTransfer.DepartTime + ":59" : se.booking.CheckOutDate + "T" + this.listcars.TransferBooking.returnTransfer.DepartTime + ":59"),
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            var year = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("YYYY"));
            var month = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("MM"));
            var days = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("DD"));
            var hour = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("HH"));
            var minutes = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("mm"));
            var seconds = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.startDate).format("ss"));
            var yearendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("YYYY"));
            var monthendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("MM"));
            var daysendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("DD"));
            var hourendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("HH"));
            var minutesendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("mm"));
            var secondssendDate = Number(moment__WEBPACK_IMPORTED_MODULE_13__(event.endDate).format("ss"));
            let sdate = new Date(year, month - 1, days, hour, minutes, seconds), edate = new Date(yearendDate, monthendDate - 1, daysendDate, hourendDate, minutesendDate, secondssendDate);
            if (allow) {
                if (createOrModify) {
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        if (!isdepart) {
                            se.navCtrl.navigateBack(['/app/tabs/tab3/']);
                            se._calendar.openCalendar(sdate).then(() => {
                            });
                        }
                        else {
                            se.createCalendar(true, false);
                        }
                    });
                }
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            if (!isdepart) {
                                se.navCtrl.navigateBack(['/app/tabs/tab3/']);
                                se._calendar.openCalendar(new Date(se.booking.CheckInDate + "T" + this.listcars.TransferBooking.departTransfer.DepartTime + ":00")).then(() => {
                                });
                            }
                            else {
                                se.createCalendar(true, false);
                            }
                        });
                    }
                });
            }
        });
    }
};
CombodoneprepayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-combodoneprepay',
        template: __webpack_require__(/*! ./combodoneprepay.page.html */ "./src/app/combodoneprepay/combodoneprepay.page.html"),
        styles: [__webpack_require__(/*! ./combodoneprepay.page.scss */ "./src/app/combodoneprepay/combodoneprepay.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__["LaunchReview"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["SearchHotel"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Bookcombo"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_12__["Calendar"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_14__["voucherService"]])
], CombodoneprepayPage);



/***/ })

}]);
//# sourceMappingURL=combodoneprepay-combodoneprepay-module.js.map