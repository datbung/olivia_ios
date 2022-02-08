(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombodoneprepay-flightcombodoneprepay-module"],{

/***/ "./src/app/flightcombodoneprepay/flightcombodoneprepay.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightcombodoneprepay/flightcombodoneprepay.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlightcombodoneprepayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombodoneprepayPageModule", function() { return FlightcombodoneprepayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombodoneprepay.page */ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombodoneprepayPage"]
    }
];
let FlightcombodoneprepayPageModule = class FlightcombodoneprepayPageModule {
};
FlightcombodoneprepayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombodoneprepay_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombodoneprepayPage"]]
    })
], FlightcombodoneprepayPageModule);



/***/ }),

/***/ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/flightcombodoneprepay/flightcombodoneprepay.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n  </div>\n  <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='0'\">\n    <div>\n      <p class=\"text\">\n        Cảm ơn Quý khách sử dụng dịch vụ iVIVU.com\n        <p>\n    </div>\n    \n    <div>\n      <p class=\"text\" text-wrap>\n        Thanh toán số tiền {{total}}đ thành công cho đơn hàng <span>{{code}}</span>\n        <p>\n    </div>\n\n    <div>\n      <p class=\"text\" text-wrap>\n        Thông tin đơn hàng sẽ được gửi đến email <span class=\"color-line-blue\">{{email}}</span> trong vòng vài phút. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư <span>Spam</span> hoặc <span>Junk Folder</span>\n        <p>\n    </div>\n\n  </div>\n  <div style=\"margin-top: 15px\" *ngIf=\"ischeckshow=='1'\">\n    <div>\n      <p class=\"text\" style=\"font-weight: bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n        <p>\n    </div>\n    <div>\n      <p class=\"text\">\n        Mã đặt phòng của quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nhân viên iVIVU.COM sẽ liên lạc với Quý Khách trong thời gian sớm nhất.\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ qua email tc@ivivu.com hoặc tổng đài sau:\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hồ Chí Minh: 1900 1870\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hà Nội: 1900 2045\n        <p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Cần Thơ: 1900 2087\n        <p>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button *ngIf=\"ischeckshow=='1'\" (click)=\"next(0)\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n    <button *ngIf=\"ischeckshow=='0'\" (click)=\"next(1)\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/flightcombodoneprepay/flightcombodoneprepay.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.button1 {\n  color: #26bed6;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  margin-right: 0px;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text span {\n  font-weight: bold;\n}\n\n.text-code {\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n.mt-10 {\n  margin-top: 10.5px;\n}\n\n.mt-16 {\n  margin-top: 16px;\n}\n\n.text-see {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  position: absolute;\n  right: 16px;\n}\n\n.text-hotel-name {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n\n.text-charge {\n  right: 17px;\n  position: absolute;\n}\n\n.div-flight-label {\n  padding-bottom: 6px;\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-flight-time .div-time {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.div-flight-time .div-location {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  text-align: center;\n}\n\n.div-flight-time .flight-img-arrow {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.div-flight-time .font-size-14 {\n  font-size: 14px;\n}\n\n.letter-spacing {\n  letter-spacing: 1.7px;\n}\n\n.font-size-14 {\n  font-size: 14px;\n}\n\n.font-size-12 {\n  font-size: 12px;\n}\n\n.div-logo {\n  height: 21px;\n}\n\n.div-logo .img-logo {\n  height: 21px;\n}\n\n.div-logo .logo-vna {\n  height: 16px !important;\n}\n\n.div-flight-name {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.36px;\n  color: #333333;\n}\n\n.div-flight-ticket {\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n  font-size: 12px;\n}\n\n.margin-left-5 {\n  margin-left: 5px;\n}\n\n.margin-right-5 {\n  margin-right: 5px;\n}\n\n.div-none {\n  display: none;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.div-split {\n  border-bottom: solid 0.5px rgba(205, 205, 205, 0.5) !important;\n  margin: 16px 0;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n\n.color-line-blue {\n  color: #26bed6;\n}\n\n::ng-deep {\n  align-items: center !important;\n}\n\n::ng-deep .cls-reivewapp .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-reivewapp .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-reivewapp .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-reivewapp .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvZG9uZXByZXBheS9mbGlnaHRjb21ib2RvbmVwcmVwYXkucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2RvbmVwcmVwYXkvZmxpZ2h0Y29tYm9kb25lcHJlcGF5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDQUY7O0FERUE7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREVBO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNFbEQ7O0FEQUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VKOztBRENBO0VBQ0ksMkJBQUE7RUFDQSxTQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBRERBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREhJO0VBQ0UsaUJBQUE7QUNLTjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNLRjs7QURIQTtFQUVJLGtCQUFBO0FDS0o7O0FESEE7RUFFSSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNB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eUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9kb25lcHJlcGF5L2ZsaWdodGNvbWJvZG9uZXByZXBheS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uMlxue1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cbi5idXR0b24xXG57XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5kaXYtYnRuXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbn1cbi5idXR0b240XG57XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIFxufVxuLmltYWdlLWNhcmQxe1xuICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNCVcbn1cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbi5pbWctdHJpcC1lbXB0eVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgc3BhbntcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi50ZXh0LWNvZGV7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cbi5jbHMtaHJcbntcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuLm10LTEwXG57XG4gICAgbWFyZ2luLXRvcDogMTAuNXB4O1xufVxuLm10LTE2XG57XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50ZXh0LXNlZXtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gIH1cbiAgLnRleHQtaG90ZWwtbmFtZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuLnRleHQtY2hhcmdle1xuICAgIHJpZ2h0OiAxN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAuZGl2LWZsaWdodC1sYWJlbHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4uZGl2LWZsaWdodC10aW1le1xuXG4gICAgLmRpdi10aW1le1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbiAgICAuZGl2LWxvY2F0aW9ue1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZsaWdodC1pbWctYXJyb3d7XG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG4gICAgLmZvbnQtc2l6ZS0xNHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gIH1cbiAgLmxldHRlci1zcGFjaW5ne1xuICAgIGxldHRlci1zcGFjaW5nOjEuN3B4XG4gIH1cbiAgLmZvbnQtc2l6ZS0xNHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmZvbnQtc2l6ZS0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbiAgLmRpdi1sb2dve1xuICAgIGhlaWdodDogMjFweDtcbiAgXG4gICAgLmltZy1sb2dve1xuICAgICAgICBoZWlnaHQ6IDIxcHg7XG4gICAgfVxuICBcbiAgICAubG9nby12bmF7XG4gICAgICAgIGhlaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuZGl2LWZsaWdodC1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbiAgLmRpdi1mbGlnaHQtdGlja2V0XG4gIHtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuICAubWFyZ2luLWxlZnQtNVxuICB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICAubWFyZ2luLXJpZ2h0LTVcbiAge1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICB9XG4gIC5kaXYtbm9uZVxuICB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuZC1mbGV4e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAudGV4dC1jZW50ZXJcbiAge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50ZXh0LWluZm97XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICB9XG4gIC5kaXYtc3BsaXR7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsMjA1LDIwNSwgMC41KSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTZweCAwO1xufVxuLmNscy1pb24tZm9vdGVye1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xufVxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uY29sb3ItbGluZS1ibHVlXG57XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLy8vLy8vLy8vLy8vLy9cbjo6bmctZGVlcCB7XG5cbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLmNscy1yZWl2ZXdhcHAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB9XG5cbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW1hZ2UtY2FyZDEge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0JTtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmltZy10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4udGV4dCBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0LWNvZGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuLm10LTEwIHtcbiAgbWFyZ2luLXRvcDogMTAuNXB4O1xufVxuXG4ubXQtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGV4dC1zZWUge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cblxuLnRleHQtaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1jaGFyZ2Uge1xuICByaWdodDogMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZGl2LWZsaWdodC1sYWJlbCB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1mbGlnaHQtdGltZSAuZGl2LXRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtZmxpZ2h0LXRpbWUgLmRpdi1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1mbGlnaHQtdGltZSAuZmxpZ2h0LWltZy1hcnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uZGl2LWZsaWdodC10aW1lIC5mb250LXNpemUtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sZXR0ZXItc3BhY2luZyB7XG4gIGxldHRlci1zcGFjaW5nOiAxLjdweDtcbn1cblxuLmZvbnQtc2l6ZS0xNCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZvbnQtc2l6ZS0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1sb2dvIHtcbiAgaGVpZ2h0OiAyMXB4O1xufVxuLmRpdi1sb2dvIC5pbWctbG9nbyB7XG4gIGhlaWdodDogMjFweDtcbn1cbi5kaXYtbG9nbyAubG9nby12bmEge1xuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1mbGlnaHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZGl2LWZsaWdodC10aWNrZXQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5tYXJnaW4tbGVmdC01IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1hcmdpbi1yaWdodC01IHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5kaXYtbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsIDIwNSwgMjA1LCAwLjUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4uY2xzLWlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uY29sb3ItbGluZS1ibHVlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbjo6bmctZGVlcCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightcombodoneprepay/flightcombodoneprepay.page.ts ***!
  \*********************************************************************/
/*! exports provided: FlightcombodoneprepayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombodoneprepayPage", function() { return FlightcombodoneprepayPage; });
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
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let FlightcombodoneprepayPage = class FlightcombodoneprepayPage {
    constructor(_platform, navCtrl, Roomif, activatedRoute, zone, booking, authService, storage, alertCtrl, launchReview, gf, bookCombo, searchhotel, _calendar) {
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
        this.bookCombo = bookCombo;
        this.searchhotel = searchhotel;
        this._calendar = _calendar;
        this.checkreview = 1;
        this.bookingCode = "";
        this.objectFlight = this.gf.getParams('flightcombo');
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        this.storage.get('email').then(email => {
            this.email = email;
        });
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
        this.navCtrl.navigateForward('/app/tabs/tab1');
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
    btnsee() {
        this.navCtrl.navigateForward('/app/tabs/tab3');
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

Giờ ra tàu bay: ` + (isdepart ? (moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.departFlight.DepartTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.departFlight.DepartTime).format("mm")) : (moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.returnFlight.DepartTime).format("HH") + "h" + moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.returnFlight.DepartTime).format("mm"))) +
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
        calOptions.calendarName = "Chuyến đi " + (isdepart ? se.bookCombo.ComboDetail.departureName : se.bookCombo.objComboDetail.arrivalName) + "  -  " + (isdepart ? se.bookCombo.objComboDetail.arrivalName : se.bookCombo.ComboDetail.departureName) + ", " + (isdepart ? moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.departFlight.DepartTime).format('DD/MM/YYYY') : moment__WEBPACK_IMPORTED_MODULE_12__(itemflight.returnFlight.DepartTime).format('DD/MM/YYYY'));
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
FlightcombodoneprepayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightcombodoneprepay',
        template: __webpack_require__(/*! ./flightcombodoneprepay.page.html */ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.html"),
        styles: [__webpack_require__(/*! ./flightcombodoneprepay.page.scss */ "./src/app/flightcombodoneprepay/flightcombodoneprepay.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__["LaunchReview"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["SearchHotel"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_11__["Calendar"]])
], FlightcombodoneprepayPage);



/***/ })

}]);
//# sourceMappingURL=flightcombodoneprepay-flightcombodoneprepay-module.js.map