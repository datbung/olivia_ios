(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodpaymentdone-foodpaymentdone-module"],{

/***/ "./src/app/foodpaymentdone/foodpaymentdone.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentdone/foodpaymentdone.module.ts ***!
  \***********************************************************/
/*! exports provided: FoodpaymentdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentdonePageModule", function() { return FoodpaymentdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodpaymentdone.page */ "./src/app/foodpaymentdone/foodpaymentdone.page.ts");







const routes = [
    {
        path: '',
        component: _foodpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentdonePage"]
    }
];
let FoodpaymentdonePageModule = class FoodpaymentdonePageModule {
};
FoodpaymentdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentdonePage"]]
    })
], FoodpaymentdonePageModule);



/***/ }),

/***/ "./src/app/foodpaymentdone/foodpaymentdone.page.html":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentdone/foodpaymentdone.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<div  style=\"text-align: center\">\n  <img  src=\"./assets/step/food_step_3.svg\">\n  </div>\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n</div>\n<div style=\"margin-top: 5px\">\n  <div>\n    <ion-label class=\"text\" style=\"font-weight: bold\">\n      Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n    </ion-label>\n  </div>\n  <div *ngIf='stt==1'>\n    <div>  <ion-label class=\"text\">\n      Quý khách đã thanh toán {{total}} VND cho đơn hàng \n    </ion-label></div>\n    <div>\n    <ion-label class=\"text\"  style=\"font-weight: bold\">\n      {{code}} thành công.  \n    </ion-label>\n    </div>\n  </div>\n  <div *ngIf='stt==0'>\n   \n    <ion-label class=\"text\">\n      Mã đơn hàng của Quý khách là\n      <span style=\"font-weight: bold\">{{code}}</span>\n    </ion-label>\n  </div>\n  <div>\n    <ion-label class=\"text\" text-wrap>\n      Thông tin thanh toán đã được gửi đến email {{_email}}.\n    </ion-label>\n  </div>\n  <div *ngIf='stt==0'>\n    <ion-label class=\"text\" text-wrap>\n      Mời quý khách thanh toán số tiền\n      <span style=\"font-weight: bold\">{{total}} VND</span> trước\n      <span style=\"font-weight: bold\">{{text}}</span> để hoàn tất việc đặt món ăn.\n    </ion-label>\n  </div>\n  \n  <div>\n    <ion-label class=\"text\" text-wrap>\n      Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài <b>(028) 3933 8000</b>, thời gian làm việc: từ <b>8:30-18:30</b>. Hoặc email <b>food@ivivu.com</b> để được trợ giúp.\n    </ion-label>\n  </div>\n  \n</div>\n</ion-content>\n<ion-footer>\n<div style=\"background-color: #ffffff; text-align: center\">\n  <button (click)=\"next()\" ion-button round outline class=\"button button2\">Về trang chủ</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentdone/foodpaymentdone.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentdone/foodpaymentdone.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #26bed6;\n  border-color: #26bed6;\n  margin-top: -5px;\n}\n\n.image-card1 {\n  display: initial !important;\n  width: 4%;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.logocss {\n  background-image: url('icon.png');\n}\n\n.div-paymentmytrip {\n  margin-top: 15px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n}\n\n.div-paymentmytrip .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n  margin: 8px -16px;\n}\n\n.div-paymentmytrip .text-title {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n}\n\n.div-paymentmytrip .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.div-paymentmytrip .div-text-paymentlink {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  text-decoration: underline;\n}\n\n.div-paymentmytrip .text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.div-paymentmytrip .text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.div-paymentmytrip .text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.div-paymentmytrip .text-copy {\n  padding-left: 4px;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n\n::ng-deep .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n\n::ng-deep .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kcGF5bWVudGRvbmUvZm9vZHBheW1lbnRkb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZHBheW1lbnRkb25lL2Zvb2RwYXltZW50ZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0V0RDs7QURBSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURBSTtFQUNJLDJCQUFBO0VBQ0EsU0FBQTtBQ0dSOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERJO0VBRUksaUNBQUE7QUNHUjs7QURESTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0lSOztBREZRO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNJWjs7QURGUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDSVo7O0FERlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJWjs7QURGUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0laOztBRERRO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0daOztBRERRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QUREUTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNHWjs7QUREUTtFQUNJLGlCQUFBO0FDR1o7O0FER0k7RUFDQSw4QkFBQTtBQ0FKOztBREVJO0VBQ0ksOEZBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtHQUFBLGdDQUFBO09BQUEsNEJBQUE7QUNEUjs7QURJSTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDRko7O0FESUk7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNGSjs7QURJSTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURJSTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0ZKOztBRElJO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDRko7O0FESUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0ZSOztBREtJO0VBQ0ksb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0hSOztBRE1BO0VBQ0ksaUJBQUE7QUNKSjs7QURNQTtFQUNJLHVCQUFBO0FDSko7O0FETUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0pKOztBRE9BO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTEo7O0FET0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9mb29kcGF5bWVudGRvbmUvZm9vZHBheW1lbnRkb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMVxyXG4gICAge1xyXG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWJ0blxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uNFxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7IFxyXG4gICAgfVxyXG4gICAgLmltYWdlLWNhcmQxe1xyXG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNCVcclxuICAgIH1cclxuICAgXHJcbiAgICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICAgICAgfSAgXHJcbiAgICAubG9nb2Nzc1xyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNvbi5wbmcnKVxyXG4gICAgfVxyXG4gICAgLmRpdi1wYXltZW50bXl0cmlwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuXHJcbiAgICAgICAgLmRpdi1zcGxpdC1jb2xvcntcclxuICAgICAgICAgICAgaGVpZ2h0OiA3cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IC0xNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC10aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LXRleHQtcGF5bWVudHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi10ZXh0LXBheW1lbnRsaW5re1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LXBheW1lbnQtaW5mb3tcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWluZm97XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1saW5re1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtY29weXtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG59XHJcbi5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1ke1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbn1cclxufVxyXG4uaW1nLXRyaXAtZW1wdHlcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn0iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cblxuLmltYWdlLWNhcmQxIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICB3aWR0aDogNCU7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5sb2dvY3NzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNvbi5wbmdcIik7XG59XG5cbi5kaXYtcGF5bWVudG15dHJpcCB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi1zcGxpdC1jb2xvciB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW46IDhweCAtMTZweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAuZGl2LXRleHQtcGF5bWVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLmRpdi10ZXh0LXBheW1lbnRsaW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG4uZGl2LXBheW1lbnRteXRyaXAgLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmRpdi1wYXltZW50bXl0cmlwIC50ZXh0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cbi5kaXYtcGF5bWVudG15dHJpcCAudGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1tZCB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/foodpaymentdone/foodpaymentdone.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodpaymentdone/foodpaymentdone.page.ts ***!
  \*********************************************************/
/*! exports provided: FoodpaymentdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentdonePage", function() { return FoodpaymentdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");









let FoodpaymentdonePage = class FoodpaymentdonePage {
    constructor(activatedRoute, foodService, alertCtrl, launchReview, navCtrl, searchhotel, storage, zone) {
        this.activatedRoute = activatedRoute;
        this.foodService = foodService;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.storage = storage;
        this.zone = zone;
        this.code = "";
        this._email = "";
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
        this.total = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.isDinner = this.foodService.isDinner;
        this.storage.get('email').then(email => {
            if (email) {
                this._email = email;
            }
        });
    }
    ngOnInit() {
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        this.startdate = moment__WEBPACK_IMPORTED_MODULE_5__(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
        this.enddate = moment__WEBPACK_IMPORTED_MODULE_5__(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
        this.stt = this.foodService.ischeckpayment;
        this.text = moment__WEBPACK_IMPORTED_MODULE_5__(this.foodService.PeriodPaymentDate).format('HH:mm DD/MM/YYYY');
    }
    next() {
        this.zone.run(() => {
            this.storage.remove("listItemsCart");
            this.foodService.itemCartChange.emit(0);
            this.foodService.countcart = 0;
            this.foodService.listAddToCart = [];
            this.foodService.listItemsCart = [];
            this.foodService.totalPrice = 0;
        });
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.navCtrl.navigateForward('/homefood');
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
FoodpaymentdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-foodpaymentdone',
        template: __webpack_require__(/*! ./foodpaymentdone.page.html */ "./src/app/foodpaymentdone/foodpaymentdone.page.html"),
        styles: [__webpack_require__(/*! ./foodpaymentdone.page.scss */ "./src/app/foodpaymentdone/foodpaymentdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_8__["LaunchReview"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]])
], FoodpaymentdonePage);



/***/ })

}]);
//# sourceMappingURL=foodpaymentdone-foodpaymentdone-module.js.map