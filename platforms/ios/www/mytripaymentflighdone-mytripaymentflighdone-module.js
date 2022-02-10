(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentflighdone-mytripaymentflighdone-module"],{

/***/ "./src/app/mytripaymentflighdone/mytripaymentflighdone.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mytripaymentflighdone/mytripaymentflighdone.module.ts ***!
  \***********************************************************************/
/*! exports provided: MytripaymentflighdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflighdonePageModule", function() { return MytripaymentflighdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentflighdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentflighdone.page */ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentflighdone_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflighdonePage"]
    }
];
let MytripaymentflighdonePageModule = class MytripaymentflighdonePageModule {
};
MytripaymentflighdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentflighdone_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflighdonePage"]]
    })
], MytripaymentflighdonePageModule);



/***/ }),

/***/ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/mytripaymentflighdone/mytripaymentflighdone.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div  style=\"text-align: center\">\n  <img  src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n</div>\n<div style=\"margin-top: 5px\">\n  <div>\n    <ion-label class=\"text\">\n      Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n    </ion-label>\n  </div>\n  <div >\n    <div class=\"p-top-12\">  \n      <ion-label class=\"text\">\n        Thanh toán số tiền <span style=\"font-weight: bold\">{{totalpricedisplay}}đ</span> thành công cho đơn hàng <span class=\"text-bold\">{{bookingCode}}</span>\n      </ion-label>\n    </div>\n    <div class=\"p-top-12\">\n      <ion-label class=\"text\" text-wrap>\n        Thông tin đơn hàng sẽ được gửi đến email <span class=\"text-tealish\">{{_email}}</span> trong vòng vài phút. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư <span class=\"text-bold\">Spam</span> hoặc <span class=\"text-bold\">Junk Folder</span>\n      </ion-label>\n    </div>\n  </div>\n</div>\n</ion-content>\n<ion-footer>\n<div class=\"div-button-payment-done\">\n  <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm thông tin chuyến bay vào lịch</button>\n  <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Quay về trang chủ</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/mytripaymentflighdone/mytripaymentflighdone.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 16px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.logocss {\n  background-image: url('icon.png');\n}\n\n.div-paymentmytrip {\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n\n.div-paymentmytrip .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n  margin: 8px -16px;\n}\n\n.div-paymentmytrip .text-title {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.div-paymentmytrip .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-paymentmytrip .div-text-paymentlink {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  text-decoration: underline;\n}\n\n.div-paymentmytrip .text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-paymentmytrip .text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.div-paymentmytrip .text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.div-paymentmytrip .text-copy {\n  padding-left: 4px;\n}\n\n.div-quick-back {\n  font-size: 32px;\n  position: absolute;\n  right: 16px;\n  color: #bdbdbd;\n  letter-spacing: -3.5px;\n  top: 0px;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  padding: 0 16px;\n}\n\n.text-normal {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.text-see-more {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  text-align: right;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.m-bottom-10 {\n  margin-bottom: 10px;\n}\n\n.div-split {\n  border-bottom: solid 0.5px rgba(205, 205, 205, 0.5) !important;\n  margin: 16px 0;\n}\n\n.div-split-1 {\n  border-bottom: solid 0.5px rgba(205, 205, 205, 0.5);\n  margin: 16px 0;\n}\n\n.div-width-400 {\n  width: 400%;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.div-width-200 {\n  width: 200%;\n}\n\n.text-name {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n\n.text-phone {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.pax-title {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #828282;\n  margin-bottom: 8px;\n}\n\n.pax-gender {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n  width: 50px;\n}\n\n.pax-name {\n  font-size: 16px;\n  color: #333333;\n}\n\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n\n.div-width-600 {\n  width: 600%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-flight-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n\n.text-cin {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #4f4f4f;\n  margin-bottom: 12px;\n}\n\n.div-logo {\n  margin-right: 8px;\n}\n\n.div-logo .img-logo {\n  height: 34px;\n}\n\n.div-icon-flight {\n  margin-left: 32px;\n  margin-right: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.img-flight {\n  width: 14px;\n  margin-left: 15%;\n  position: absolute;\n  margin-top: 4px;\n}\n\n.div-icon {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: 8px;\n  margin-top: -2px;\n}\n\n.text-airlinecode {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #333333;\n}\n\n.div-airlineclass {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.text-time {\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.text-code {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-flight-condition {\n  margin: 0 -16px;\n  padding: 10px 16px;\n  background: #f2f2f2;\n}\n\n.img-info {\n  width: 14px;\n  height: 14px;\n}\n\n.div-flight-condition {\n  margin-top: 16px;\n}\n\n.text-pacificVNA {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #e52822;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text-bold {\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.text-tealish {\n  color: #26bed6 !important;\n}\n\n.p-top-12 {\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL215dHJpcGF5bWVudGZsaWdoZG9uZS9teXRyaXBheW1lbnRmbGlnaGRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9teXRyaXBheW1lbnRmbGlnaGRvbmUvbXl0cmlwYXltZW50ZmxpZ2hkb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDQVI7O0FERVE7RUFDSSx3QkFBQTtBQ0FaOztBREdJO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNDdEQ7O0FEQ0k7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSwyQkFBQTtFQUNBLFNBQUE7QUNFUjs7QURDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUVJLGlDQUFBO0FDRVI7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNHUjs7QUREUTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDR1o7O0FERFE7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0daOztBRERRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7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QTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ09KOztBREpBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURKQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDT0o7O0FESkE7RUFDSSxnQkFBQTtBQ09KOztBREpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDT0o7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKQTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUNPSjs7QURKQTtFQUNJLHlCQUFBO0FDT0o7O0FESkE7RUFDSSxpQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2hkb25lL215dHJpcGF5bWVudGZsaWdoZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmJ1dHRvbjFcbiAgICB7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5tLXRvcC0we1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kaXYtYnRuXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxuICAgIH1cbiAgICAuYnV0dG9uNFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDsgXG4gICAgfVxuICAgIC5pbWFnZS1jYXJkMXtcbiAgICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogNCVcbiAgICB9XG4gICBcbiAgICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgfSAgXG4gICAgLmxvZ29jc3NcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNvbi5wbmcnKVxuICAgIH1cbiAgICAuZGl2LXBheW1lbnRteXRyaXB7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG5cbiAgICAgICAgLmRpdi1zcGxpdC1jb2xvcntcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IC0xNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi10ZXh0LXBheW1lbnR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRleHQtcGF5bWVudGxpbmt7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1wYXltZW50LWluZm97XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWluZm97XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtbGlua3tcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1jb3B5e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmRpdi1xdWljay1iYWNre1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTMuNXB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICB9XG4vLy8vLy8vLy8vLy8vL1xuOjpuZy1kZWVwIHtcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xuICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgfVxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICB9XG59XG4uYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZHtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxufVxuLmltZy10cmlwLWVtcHR5XG57XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbi50ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVse1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbn1cbi50ZXh0LW5vcm1hbHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG4udGV4dC1zZWUtbW9yZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLy8vLy8vLy8vXG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubS1ib3R0b20tMTB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRpdi1zcGxpdHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCByZ2JhKDIwNSwyMDUsMjA1LCAwLjUpICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxNnB4IDA7XG59XG4uZGl2LXNwbGl0LTF7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsMjA1LDIwNSwgMC41KTtcbiAgICBtYXJnaW46IDE2cHggMDtcbn1cbi5kaXYtd2lkdGgtNDAwe1xuICAgIHdpZHRoOiA0MDAlO1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LXdpZHRoLTIwMHtcbiAgICB3aWR0aDogMjAwJTtcbn1cblxuLnRleHQtbmFtZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1waG9uZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYXgtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wYXgtZ2VuZGVye1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICB3aWR0aDogNTBweDtcbn1cblxuLnBheC1uYW1le1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogIzMzMzMzMztcbn1cblxuXG4uZGl2LWZsaWdodC1pbm91dHtcbiAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmltZy1mbGlnaHQtaW5vdXR7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IC0ycHg7XG4gICAgfVxuICB9XG4gIC5kaXYtd2lkdGgtNjAwe1xuICAgIHdpZHRoOiA2MDAlO1xuICB9XG4gIC5kaXYtd2lkdGgtNjB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuICAudGV4dC1yaWdodHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAudGV4dC1mbGlnaHQtZGF0ZXRpbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgLnRleHQtZmxpZ2h0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLnYtYWxpZ24tY2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAuaW1nLW9uZXdheXtcbiAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG5cbi50ZXh0LWNpbntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kaXYtbG9nb3tcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAuaW1nLWxvZ297XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG59XG4uZGl2LWljb24tZmxpZ2h0e1xuICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBcbn1cblxuLmltZy1mbGlnaHR7XG4gICAgd2lkdGg6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZGl2LWljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi50ZXh0LWFpcmxpbmVjb2Rle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kaXYtYWlybGluZWNsYXNze1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC10aW1le1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udGV4dC1jb2Rle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1mbGlnaHQtY29uZGl0aW9ue1xuICAgIG1hcmdpbjogMCAtMTZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cblxuLmltZy1pbmZve1xuICAgIHdpZHRoOiAxNHB4O1xuICAgIGhlaWdodDogMTRweDtcbn1cblxuLmRpdi1mbGlnaHQtY29uZGl0aW9ue1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LXBhY2lmaWNWTkF7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjZTUyODIyO1xufVxuXG4udGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10ZWFsaXNoe1xuICAgIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5wLXRvcC0xMntcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcbn0iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRpdi1idXR0b24tcGF5bWVudC1kb25lIC5tLXRvcC0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbjQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuXG4uaW1hZ2UtY2FyZDEge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0JTtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmxvZ29jc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY29uLnBuZ1wiKTtcbn1cblxuLmRpdi1wYXltZW50bXl0cmlwIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAuZGl2LXNwbGl0LWNvbG9yIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG1hcmdpbjogOHB4IC0xNnB4O1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC5kaXYtdGV4dC1wYXltZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAuZGl2LXRleHQtcGF5bWVudGxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC1wYXltZW50LWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmRpdi1xdWljay1iYWNrIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0zLjVweDtcbiAgdG9wOiAwcHg7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4udGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG5cbi50ZXh0LXNlZS1tb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tYm90dG9tLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4IHJnYmEoMjA1LCAyMDUsIDIwNSwgMC41KSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmRpdi1zcGxpdC0xIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggcmdiYSgyMDUsIDIwNSwgMjA1LCAwLjUpO1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmRpdi13aWR0aC00MDAge1xuICB3aWR0aDogNDAwJTtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi13aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC1waG9uZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYXgtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucGF4LWdlbmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4ucGF4LW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuXG4uZGl2LXdpZHRoLTYwMCB7XG4gIHdpZHRoOiA2MDAlO1xufVxuXG4uZGl2LXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZmxpZ2h0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW1nLW9uZXdheSB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4udGV4dC1jaW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRpdi1sb2dvIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZGl2LWxvZ28gLmltZy1sb2dvIHtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuXG4uZGl2LWljb24tZmxpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pbWctZmxpZ2h0IHtcbiAgd2lkdGg6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNSU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uZGl2LWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG59XG5cbi50ZXh0LWFpcmxpbmVjb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kaXYtYWlybGluZWNsYXNzIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC10aW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi50ZXh0LWNvZGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtZmxpZ2h0LWNvbmRpdGlvbiB7XG4gIG1hcmdpbjogMCAtMTZweDtcbiAgcGFkZGluZzogMTBweCAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xufVxuXG4uaW1nLWluZm8ge1xuICB3aWR0aDogMTRweDtcbiAgaGVpZ2h0OiAxNHB4O1xufVxuXG4uZGl2LWZsaWdodC1jb25kaXRpb24ge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGV4dC1wYWNpZmljVk5BIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjZTUyODIyO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRlYWxpc2gge1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4ucC10b3AtMTIge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mytripaymentflighdone/mytripaymentflighdone.page.ts ***!
  \*********************************************************************/
/*! exports provided: MytripaymentflighdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflighdonePage", function() { return MytripaymentflighdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");













let MytripaymentflighdonePage = class MytripaymentflighdonePage {
    constructor(valueGlobal, activityService, navCtrl, _platform, _calendar, _flightService, gf, zone, storage, _mytripservice) {
        this.valueGlobal = valueGlobal;
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this._platform = _platform;
        this._calendar = _calendar;
        this._flightService = _flightService;
        this.gf = gf;
        this.zone = zone;
        this.storage = storage;
        this._mytripservice = _mytripservice;
        this._email = "";
        this.totalpricedisplay = this.activityService.objPaymentMytrip.trip.priceShow;
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        this._email = this.activityService.objPaymentMytrip.trip.cus_email;
        this.storage.get("listAirport").then((data) => {
            if (!data) {
                this.loadLocation().then((data) => {
                    this._flightService.listAirport = data;
                });
            }
            else {
                this._flightService.listAirport = data;
            }
        });
    }
    ngOnInit() {
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            let itemflight = se.activityService.objPaymentMytrip.trip;
            itemflight.isRoundTrip = itemflight.bookingsComboData && itemflight.bookingsComboData.length > 1 && itemflight.bookingsComboData[1].airlineCode ? true : false;
            se.createCalendar(itemflight, true, true);
            if (itemflight.isRoundTrip) {
                setTimeout(() => {
                    se.createCalendar(itemflight, false, true);
                }, 300);
            }
        }
    }
    createCalendar(itemflight, isdepart, createOrModify) {
        let se = this;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt chỗ: ` + (isdepart ? (itemflight.bookingsComboData[0] && itemflight.bookingsComboData[0].ticketCode ? itemflight.bookingsComboData[0].ticketCode : '') : (itemflight.bookingsComboData[1] && itemflight.bookingsComboData[1].ticketCode ? itemflight.bookingsComboData[1].ticketCode : '')) + `
      
Giờ ra tàu bay: ` + (isdepart ? (itemflight.bookingsComboData[0].departureTime.replace(':', 'h')) : (itemflight.bookingsComboData[1].departureTime.replace(':', 'h'))) +
            `	
      
Hành khách:

`;
        if (!isdepart && itemflight.isRoundTrip) {
            itemflight.bookingsComboData[1].passengers.forEach((elementA, index) => {
                if (index != 0) {
                    strmess += `
  
  `;
                }
                strmess += index + 1 + ". " + elementA.gender + " " + elementA.name;
                if (elementA.hanhLy || elementA.seatNumber) {
                    if (elementA.hanhLy) {
                        strmess += " | ";
                        strmess += "Hành lý" + ": " + elementA.hanhLy;
                    }
                    if (elementA.seatNumber) {
                        strmess += " | ";
                        strmess += "Chỗ ngồi" + ": " + elementA.seatNumber;
                    }
                }
            });
        }
        else {
            itemflight.bookingsComboData[0].passengers.forEach((elementA, index) => {
                if (index != 0) {
                    strmess += `
  
  `;
                }
                strmess += index + 1 + ". " + elementA.gender + " " + elementA.name;
                if (isdepart) {
                    if (elementA.hanhLy || elementA.seatNumber) {
                        if (elementA.hanhLy) {
                            strmess += " | ";
                            strmess += "Hành lý" + ": " + elementA.hanhLy;
                        }
                        if (elementA.seatNumber) {
                            strmess += " | ";
                            strmess += "Chỗ ngồi" + ": " + elementA.seatNumber;
                        }
                    }
                }
            });
        }
        strmess += `

`;
        if (itemflight.booking_type == "CB_FLY_HOTEL") {
            strmess += `
Khách sạn:` + itemflight.hotel_name + `
  
Tên phòng: ` + itemflight.roomCountNameStr + `
    
Khách hàng: ` + itemflight.cus_name;
            strmess += `
    
`;
        }
        itemflight.bookingsComboData[0].passengers.forEach(elementlug => {
            if (elementlug.dob) {
                let arr = elementlug.dob.split('/');
                let newdob = new Date(arr[2], arr[1] - 1, arr[0]);
                let yearold = moment__WEBPACK_IMPORTED_MODULE_5__(itemflight.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_5__(newdob), 'years');
                elementlug.isAdult = yearold > 12 ? true : false;
            }
            else {
                elementlug.isAdult = true;
            }
        });
        let itemchild = itemflight.bookingsComboData[0].passengers.filter((item) => { return !item.isAdult; });
        if (itemchild && itemchild.length > 0) {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân và giấy khai sinh của " + itemflight.bookingsComboData[0].passengers.map((c) => { return c.name; }).join(', ') + ".";
        }
        else {
            strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        }
        let dtime = itemflight.checkInDate, rtime = itemflight.checkOutDate;
        let ddepaturetime = itemflight.checkInDate, darrivaltime = itemflight.checkInDate, rdepaturetime = itemflight.checkInDate, rarrivaltime = itemflight.checkInDate;
        if (itemflight.checkInDate && itemflight.checkInDate.indexOf('T') != -1) {
            let arrdate = itemflight.checkInDate.split('T');
            ddepaturetime = arrdate[0] + "T" + itemflight.bookingsComboData[0].departureTime + ":00";
            darrivaltime = arrdate[0] + "T" + itemflight.bookingsComboData[0].arrivalTime + ":00";
        }
        if (!isdepart && itemflight.isRoundTrip && itemflight.checkOutDate && itemflight.checkOutDate.indexOf('T') != -1) {
            let arrdate = itemflight.checkOutDate.split('T');
            rdepaturetime = arrdate[0] + "T" + itemflight.bookingsComboData[1].departureTime + ":00";
            rarrivaltime = arrdate[0] + "T" + itemflight.bookingsComboData[1].arrivalTime + ":00";
        }
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarName = "Chuyến đi " + (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[0].flightTo) + "  -  " + (isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[0].flightFrom) + ", " + (isdepart ? itemflight.bookingsComboData[0].departureDate : itemflight.bookingsComboData[1].departureDate);
        calOptions.calendarId = null;
        let event = {
            title: (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[0].flightTo) + "  ✈  " + (isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[0].flightFrom) + " (" + (isdepart ? itemflight.bookingsComboData[0].flightNumner : itemflight.bookingsComboData[1].flightNumner) + ")",
            location: (isdepart ? se.getAirportByCode(itemflight.bookingsComboData[0].departCode) : se.getAirportByCode(itemflight.bookingsComboData[0].arrivalCode)),
            message: strmess,
            startDate: (isdepart ? ddepaturetime : rdepaturetime),
            endDate: (isdepart ? darrivaltime : rarrivaltime),
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
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
                        }).catch(() => {
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
                                    se._calendar.openCalendar(new Date(itemflight.checkInDate)).then(() => {
                                    });
                                }
                            }).catch(() => {
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
        let calendarname = "Chuyến đi " + (isdepart ? itemflight.bookingsComboData[0].flightFrom : itemflight.bookingsComboData[1].flightFrom) + "  -  " + (isdepart ? itemflight.bookingsComboData[0].flightTo : itemflight.bookingsComboData[1].flightTo) + ", " + (isdepart ? itemflight.bookingsComboData[0].departureDate : itemflight.bookingsComboData[1].departureDate);
        se.storage.get('objectflightpaymentbank').then((data) => {
            if (data) {
                let arrobject = JSON.parse(data);
                if (arrobject && arrobject.length > 0) {
                    let objexists = arrobject.filter((item) => {
                        return item.resNo == itemflight.booking_id;
                    });
                    se.createCalendar(itemflight, isdepart, true);
                }
            }
            else {
                se.createCalendar(itemflight, isdepart, true);
            }
        });
    }
    next() {
        try {
            this.storage.get('objectflightpaymentbank').then((data) => {
                if (data) {
                    let arrobject = JSON.parse(data);
                    if (arrobject && arrobject.length > 0) {
                        arrobject.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache: this.activityService.objPaymentMytrip.trip });
                    }
                    else {
                        arrobject = [];
                        arrobject.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache: this.activityService.objPaymentMytrip.trip });
                    }
                    this.storage.remove('objectflightpaymentbank').then(() => {
                        this.storage.set('objectflightpaymentbank', JSON.stringify(arrobject));
                    });
                }
                else {
                    let arr = [];
                    arr.push({ resNo: this.bookingCode, checkInDate: this.activityService.objPaymentMytrip.trip.checkInDate, checkOutDate: this.activityService.objPaymentMytrip.trip.checkOutDate, totalPrice: this.totalpricedisplay, itemFlightCache: this.activityService.objPaymentMytrip.trip });
                    this.storage.set('objectflightpaymentbank', JSON.stringify(arr));
                }
            });
        }
        catch (error) {
            console.log('fail to set storage object');
        }
        this.gf.hideLoading();
        this._flightService.itemTabFlightActive.emit(true);
        this.valueGlobal.backValue = "homeflight";
        this._flightService.itemMenuFlightClick.emit(2);
        this._mytripservice.orderPageState.emit(1);
        this._flightService.bookingCodePayment = this.bookingCode;
        this._flightService.bookingSuccess = true;
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    showQuickBack() {
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
    getAirportByCode(code) {
        var se = this, res = "";
        if (se._flightService.listAirport && se._flightService.listAirport.length > 0) {
            let itemmap = se._flightService.listAirport.filter((item) => { return item.code == code; });
            res = (itemmap && itemmap.length > 0) ? itemmap[0].airport : "";
        }
        return res;
    }
    loadLocation() {
        var se = this;
        return new Promise((resolve, reject) => {
            if (se._flightService.listAirport && se._flightService.listAirport.length > 1) {
                resolve(se._flightService.listAirport);
            }
            else {
                let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
                var options = {
                    method: 'GET',
                    url: urlPath,
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    'headers': {
                        "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                        'Content-Type': 'application/json; charset=utf-8'
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_10__(options, function (error, response, body) {
                    if (error) {
                        error.page = "searchhotel";
                        error.func = "getItems";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                        resolve([]);
                        throw new Error(error);
                    }
                    ;
                    let result = JSON.parse(body);
                    if (result && result.length > 0) {
                        se.zone.run(() => {
                            se._flightService.listAirport = [...result];
                            resolve([...result]);
                        });
                    }
                    else {
                        resolve([]);
                    }
                });
            }
        });
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
};
MytripaymentflighdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripaymentflighdone',
        template: __webpack_require__(/*! ./mytripaymentflighdone.page.html */ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentflighdone.page.scss */ "./src/app/mytripaymentflighdone/mytripaymentflighdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__["Calendar"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_8__["flightService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_11__["MytripService"]])
], MytripaymentflighdonePage);



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
//# sourceMappingURL=mytripaymentflighdone-mytripaymentflighdone-module.js.map