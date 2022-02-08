(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combodone-combodone-module"],{

/***/ "./src/app/combodone/combodone.module.ts":
/*!***********************************************!*\
  !*** ./src/app/combodone/combodone.module.ts ***!
  \***********************************************/
/*! exports provided: CombodonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombodonePageModule", function() { return CombodonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combodone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combodone.page */ "./src/app/combodone/combodone.page.ts");







const routes = [
    {
        path: '',
        component: _combodone_page__WEBPACK_IMPORTED_MODULE_6__["CombodonePage"]
    }
];
let CombodonePageModule = class CombodonePageModule {
};
CombodonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combodone_page__WEBPACK_IMPORTED_MODULE_6__["CombodonePage"]]
    })
], CombodonePageModule);



/***/ }),

/***/ "./src/app/combodone/combodone.page.html":
/*!***********************************************!*\
  !*** ./src/app/combodone/combodone.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar style=\"min-height: 0px;text-align: center\">\n        <ion-row>\n          <ion-col style=\"text-align: center\">\n            <div style=\"align-self: center\" >\n                <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        </ion-toolbar>\n  </ion-header>\n<ion-content padding>\n  <img  src=\"./assets/step/step_4.svg\">\n  <!-- <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img  src=\"./assets/step/fc_step_3.svg\">\n    </div> -->\n    <div class=\"img-trip-empty\">\n        <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n    </div>\n  <div style=\"margin-top: 5px\" *ngIf=\"status=='AL'\">\n    <div>\n      <p class=\"text\" style=\"font-weight: bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n      </p>\n    </div>\n    <div>\n      <p class=\"text\">\n        Mã đặt combo của quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Thông tin thanh toán đã được gửi đến email của Quý khách.\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Mời quý khách thanh toán số tiền\n        <span style=\"font-weight: bold\">{{priceshow}} VND</span> trước\n        <span style=\"font-weight: bold\">{{text}}</span> để hoàn tất việc đặt combo.\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email tc@ivivu.com để được trợ giúp.\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hồ Chí Minh: 1900 1870\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hà Nội: 1900 2045\n      </p>\n    </div>\n    <div>\n    <p class=\"text\" text-wrap>\n      Cần Thơ: 1900 2087\n    </p>\n    </div>\n  </div>\n\n  <div style=\"margin-top: 5px\" *ngIf=\"status=='RQ'\">\n    <div>\n      <p class=\"text\" style=\"font-weight: bold\" text-wrap>\n        Cảm ơn Quý khách sử dụng dịch vụ iVIVU.com\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Mã đặt combo của quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Nhân viên iVIVU.COM sẽ liên lạc với Quý Khách trong thời gian sớm nhất.\n      </p>\n    </div>\n    <div>\n      <p text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ qua email tc@ivivu.com hoặc tổng đài sau:\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Hồ Chí Minh: 1900 1870\n      </p>\n    </div>\n    <div>\n\n      <p class=\"text\" text-wrap>\n        Hà Nội: 1900 2045\n      </p>\n    </div>\n    <div>\n      <p class=\"text\" text-wrap>\n        Cần Thơ: 1900 2087\n      </p>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button *ngIf=\"status=='AL'\" (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Xem cẩm nang du lịch</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combodone/combodone.page.scss":
/*!***********************************************!*\
  !*** ./src/app/combodone/combodone.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button2 {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 16px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.button1 {\n  color: #26bed6;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  margin-right: 0px;\n}\n\n::ng-deep {\n  align-items: center !important;\n}\n\n::ng-deep .cls-reivewapp .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-reivewapp .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-reivewapp .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-reivewapp .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-reivewapp .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2NvbWJvZG9uZS9jb21ib2RvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9jb21ib2RvbmUvY29tYm9kb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURFQTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0VsRDs7QURBQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQ0E7RUFDSSwyQkFBQTtFQUNBLFNBQUE7QUNFSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQ0E7RUFDSSw4QkFBQTtBQ0VKOztBREFJO0VBQ0ksOEZBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtHQUFBLGdDQUFBO09BQUEsNEJBQUE7QUNDUjs7QURFSTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FERUk7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNBSjs7QURFSTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURFSTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVJO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDQUo7O0FERUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0FSOztBREdJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0RSOztBRElBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZKOztBRElJO0VBQ0ksd0JBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2NvbWJvZG9uZS9jb21ib2RvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmJ1dHRvbjFcclxue1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGl2LWJ0blxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxyXG59XHJcbi5idXR0b240XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcclxuICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgXHJcbn1cclxuLmltYWdlLWNhcmQxe1xyXG4gICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQlXHJcbn1cclxuLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIC5jbHMtcmVpdmV3YXBwIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNscy1yZWl2ZXdhcHAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWR7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxufVxyXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAubS10b3AtMHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIuYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaW1hZ2UtY2FyZDEge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0JTtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuOjpuZy1kZWVwIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLXJlaXZld2FwcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtcmVpdmV3YXBwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUgLm0tdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/combodone/combodone.page.ts":
/*!*********************************************!*\
  !*** ./src/app/combodone/combodone.page.ts ***!
  \*********************************************/
/*! exports provided: CombodonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombodonePage", function() { return CombodonePage; });
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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");














let CombodonePage = class CombodonePage {
    constructor(_platform, Roomif, navCtrl, zone, booking, authService, activatedRoute, router, storage, gf, alertCtrl, launchReview, bookCombo, searchhotel, fb, _calendar) {
        this._platform = _platform;
        this.Roomif = Roomif;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.booking = booking;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.storage = storage;
        this.gf = gf;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this.bookCombo = bookCombo;
        this.searchhotel = searchhotel;
        this.fb = fb;
        this._calendar = _calendar;
        this.listcars = this.gf.getParams('carscombo');
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        this.payment = Roomif.payment;
        this.loccation = this.listcars.TransferBooking.toPlaceName;
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
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
                            se.storage.set("email", data.email);
                            se.storage.set("username", data.fullname);
                            se.storage.set("phone", data.phone);
                            se.storage.set("point", data.point);
                        }
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        this.status = this.Roomif.payment;
        this.checkPaymentperiod();
    }
    checkPaymentperiod() {
        var ti = new Date();
        var DateNow = moment__WEBPACK_IMPORTED_MODULE_12__(ti).format('YYYYMMDD');
        var ho = ti.getHours();
        if (this.status == 'AL' && this.Roomif.expiredtime) {
            var se = this;
            var year = Number(moment__WEBPACK_IMPORTED_MODULE_12__(this.Roomif.expiredtime).format("YYYY"));
            var month = Number(moment__WEBPACK_IMPORTED_MODULE_12__(this.Roomif.expiredtime).format("MM"));
            var days = Number(moment__WEBPACK_IMPORTED_MODULE_12__(this.Roomif.expiredtime).format("DD"));
            var hour = Number(moment__WEBPACK_IMPORTED_MODULE_12__(this.Roomif.expiredtime).format("HH"));
            var minutes = Number(moment__WEBPACK_IMPORTED_MODULE_12__(this.Roomif.expiredtime).format("mm"));
            var _timetemp = new Date(year, month - 1, days, hour, minutes);
            var timetemp = new Date(year, month - 1, days, hour, minutes);
            var restime = timetemp.setTime(timetemp.getTime() - (30 * 60 * 1000));
            var PaymentPeriodcovert = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('YYYYMMDDHHmm');
            var thu = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('dddd');
            if (ho > 0 && ho < 6) {
                DateNow = DateNow + '1100';
                if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                    se.text = '11 am cùng ngày';
                }
                else {
                    var textthu = se.getDay(thu);
                    if (Math.abs(moment__WEBPACK_IMPORTED_MODULE_12__(ti).diff(timetemp, 'minutes')) < 30) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                    else {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                }
            }
            else if (ho >= 6 && ho < 12) {
                DateNow = DateNow + '1700';
                if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                    se.text = '17h cùng ngày';
                }
                else {
                    var textthu = se.getDay(thu);
                    if (Math.abs(moment__WEBPACK_IMPORTED_MODULE_12__(ti).diff(timetemp, 'minutes')) < 30) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                    else {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                }
            }
            else if (ho >= 12 && ho < 20) {
                DateNow = DateNow + '2030';
                if (parseInt(PaymentPeriodcovert) >= parseInt(DateNow)) {
                    se.text = '20h30 cùng ngày';
                }
                else {
                    var textthu = se.getDay(thu);
                    if (Math.abs(moment__WEBPACK_IMPORTED_MODULE_12__(ti).diff(timetemp, 'minutes')) < 30) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                    else {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                }
            }
            else {
                var res = ti.setTime(ti.getTime() + (24 * 60 * 60 * 1000));
                var date = new Date(res);
                var checkDate = moment__WEBPACK_IMPORTED_MODULE_12__(date).format('YYYYMMDD') + '1100';
                if (parseInt(PaymentPeriodcovert) >= parseInt(checkDate)) {
                    se.text = '11 am hôm sau';
                }
                else {
                    var textthu = se.getDay(thu);
                    if (Math.abs(moment__WEBPACK_IMPORTED_MODULE_12__(ti).diff(timetemp, 'minutes')) < 30) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(_timetemp).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                    else {
                        var day = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('MM') + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('YYYY');
                        se.text = moment__WEBPACK_IMPORTED_MODULE_12__(restime).format('HH:mm') + ' ' + textthu + ', ' + day;
                    }
                }
            }
        }
        else {
            if (ho > 0 && ho < 6) {
                this.text = '11 am cùng ngày';
            }
            else if (ho >= 6 && ho < 12) {
                this.text = '17h cùng ngày';
            }
            else if (ho >= 12 && ho < 20) {
                this.text = '20h30 cùng ngày';
            }
            else {
                this.text = '11 am hôm sau';
            }
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
        var value = 1;
        this.gf.setParams(value, 'seemoreblog');
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
            var year = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("YYYY"));
            var month = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("MM"));
            var days = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("DD"));
            var hour = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("HH"));
            var minutes = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("mm"));
            var seconds = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.startDate).format("ss"));
            var yearendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("YYYY"));
            var monthendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("MM"));
            var daysendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("DD"));
            var hourendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("HH"));
            var minutesendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("mm"));
            var secondssendDate = Number(moment__WEBPACK_IMPORTED_MODULE_12__(event.endDate).format("ss"));
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
CombodonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-combodone',
        template: __webpack_require__(/*! ./combodone.page.html */ "./src/app/combodone/combodone.page.html"),
        styles: [__webpack_require__(/*! ./combodone.page.scss */ "./src/app/combodone/combodone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["RoomInfo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_1__["LaunchReview"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["SearchHotel"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_11__["Facebook"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_13__["Calendar"]])
], CombodonePage);



/***/ })

}]);
//# sourceMappingURL=combodone-combodone-module.js.map