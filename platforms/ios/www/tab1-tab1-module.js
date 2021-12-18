(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/flightaccount/flightaccount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.module.ts ***!
  \*******************************************************/
/*! exports provided: FlightaccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaccountPageModule", function() { return FlightaccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaccount_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightaccount.page */ "./src/app/flightaccount/flightaccount.page.ts");






let FlightaccountPageModule = class FlightaccountPageModule {
};
FlightaccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightaccount_page__WEBPACK_IMPORTED_MODULE_5__["FlightaccountPage"]],
        exports: [_flightaccount_page__WEBPACK_IMPORTED_MODULE_5__["FlightaccountPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaccountPageModule);



/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightaccount-header\">\r\n    <ion-row style=\"height: 56px;\">\r\n        <ion-title *ngIf=\"!username\" class=\"title-header\">Thêm</ion-title>\r\n        <ion-title *ngIf=\"username\" class=\"title-header\">Chào {{username}}</ion-title>\r\n    </ion-row>\r\n</ion-header>\r\n    <div class=\"flightaccount-content no-margin-bottom\">\r\n        <div  *ngIf=\"loginuser\">\r\n                <ion-row>\r\n                        <ion-col class=\"text-center\" style=\"padding:0\">\r\n                            <div class=\"div-wrapimg\" (click)=\"changeAvatar()\">\r\n                                <ion-card style=\"height:110px !important; box-shadow:none !important;margin-top:14px\">\r\n                                        <img *ngIf=\"avatar && !croppedImagepath\" class=\"img-user-avatar\" src=\"{{avatar}}\">\r\n                                        <img *ngIf=\"croppedImagepath\" class=\"img-user-avatar\" [src]=\"croppedImagepath\">\r\n                                </ion-card>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row  (click)=\"changeAvatar()\">\r\n                        <ion-col class=\"text-center\"  style=\"padding:0\">\r\n                            <div class=\"text-color\">Khách hàng thân thiết</div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"!loginuser\">\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_login.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogin()\">Đăng nhập/Đăng ký</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser\" [ngClass]=\"loginuser ? 'p-top-20' : ''\" >\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_i_p.svg\">\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                    <span (click)=\"Point()\" class=\"item-list\">iVIVUPoint</span>\r\n                </ion-col>\r\n                <ion-col size=\"5\" style=\"text-align: right\" *ngIf=\"point\">\r\n                    <label style=\"font-size:16px; color: #26bed6; font-weight: 500\">{{ point }} điểm</label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <ion-row (click)=\"showUserProfile()\">\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_people.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Hồ sơ của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser && bizTravelService.isCompany\">\r\n            <ion-row (click)=\"showCompanyInfo()\">\r\n                <ion-col size=\"1\">\r\n                    <img class=\"img-suit\" src=\"./assets/ic_biztravel/suit.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Thông tin công ty</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        \r\n        <div *ngIf=\"!loginuser\" class=\"item-support div-item\">\r\n        <div class=\"support\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                    <ion-col size=\"1\">\r\n                            <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"support-text\"  (click)=\"makeCallSupport(1)\">\r\n                            <span class=\"item-list item-call\">iVIVU Hà Nội - 19002045</span>\r\n                    </ion-col>\r\n                    <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(1)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                    <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                </ion-row>\r\n                <ion-row >\r\n                        <ion-col size=\"1\">\r\n                                <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                        </ion-col>\r\n                        <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                <span class=\"item-list item-call\">iVIVU Hồ Chí Minh - 19001870</span>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                    </ion-row>\r\n                    <ion-row >\r\n                            <ion-col size=\"1\">\r\n                                    <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                            </ion-col>\r\n                            <ion-col size=\"10\" class=\"support-text\">\r\n                                    <span class=\"item-list item-call\" (click)=\"makeCallSupport(3)\">iVIVU Cần Thơ - 19002087</span>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(3)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                        </ion-row>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"item-support div-item\">\r\n                <div class=\"support\">\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                    <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row *ngFor=\"let sp of listSupport\">\r\n                                <ion-col style=\"padding:0\" *ngIf=\"sp.name\">\r\n                                        <ion-row>\r\n\r\n                                                <ion-col size=\"1\" >\r\n                                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text\" *ngIf=\"sp.phone && sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text-offline\" *ngIf=\"!sp.phone || !sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(sp.phone)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"!sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\"><img class=\"img-support\" src=\"./assets/imgs/ic_call_offline.svg\"></ion-col>\r\n                                        </ion-row>\r\n                                </ion-col>\r\n                        </ion-row>\r\n                        <ion-row >\r\n                                <ion-col size=\"1\">\r\n                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                </ion-col>\r\n                                <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                        <span class=\"item-list item-call\">19001870</span>\r\n                                </ion-col>\r\n                                <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                        </ion-row>\r\n                        \r\n                    </div>\r\n                </div>\r\n        <div>\r\n            <div class=\"setting div-item\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                            <span class=\"label-header\">Cài đặt</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                \r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"div-item\">\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_logout.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogout()\">Đăng xuất</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n       \r\n    </div>\r\n        "

/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-top: 2px;\n}\n\n.label-md {\n  margin: 10px 0px 10px 0;\n}\n\n.no-margin-bottom {\n  padding: 16px 16px 16px 11px;\n  margin-bottom: 0px;\n}\n\n.div-item {\n  padding-bottom: 10px;\n}\n\n.title-header {\n  text-align: center;\n  padding: 0;\n  padding-top: env(safe-area-inset-top);\n}\n\n.label-header {\n  font-size: 12px;\n  font-weight: 300;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n\n.item-list {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n\n.icon-list {\n  opacity: 0.7;\n}\n\n.support {\n  padding-top: 20px;\n}\n\n.support-text {\n  color: #26bed6;\n}\n\n.support-text-offline {\n  color: #bdbdbd;\n}\n\n.setting {\n  padding-top: 20px;\n}\n\n.item-support .item-inner {\n  border-bottom: none !important;\n}\n\n.item-call {\n  font-weight: 300;\n}\n\n.list-md .item-block .item-inner {\n  margin-right: 16px;\n}\n\n.img-review img {\n  fill: #26bed6;\n}\n\n.t-right {\n  text-align: right;\n  padding: 5px 0px 5px 0px;\n}\n\n.s-text {\n  padding: 5px 0px 5px 0px;\n}\n\n.img-support {\n  width: 16px;\n  height: 16px;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.img-support-offline {\n  width: 16px;\n  height: 16px;\n  opacity: 0.4;\n}\n\n.p-top-20 {\n  padding-top: 20px;\n}\n\n@media (min-width: 351px) and (max-width: 400px) {\n  .support-text {\n    color: #26bed6;\n    padding-right: 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding-right: 0;\n  }\n}\n\n@media (min-width: 287px) and (max-width: 350px) {\n  .support-text {\n    color: #26bed6;\n    padding: 5px 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding: 5px 0;\n  }\n\n  .item-list {\n    font-size: 12px;\n  }\n}\n\n.flightaccount-header {\n  position: fixed;\n}\n\n.flightaccount-content {\n  padding: calc( env(safe-area-inset-bottom) + 80px) 16px 90px 11px;\n  position: -webkit-sticky;\n}\n\n::ng-deep cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  border-color: #bdbdbd;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-showmore {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  padding: 0;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n\n.img-heart {\n  width: 13px;\n  height: 12px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0YWNjb3VudC9mbGlnaHRhY2NvdW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0YWNjb3VudC9mbGlnaHRhY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FDQVI7O0FERUk7RUFDSSx1QkFBQTtBQ0NSOztBRENJO0VBQ0ksNEJBQUE7RUFDQSxrQkFBQTtBQ0VSOztBREFJO0VBQ0ksb0JBQUE7QUNHUjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHFDQUFBO0FDSVI7O0FEREk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDS1I7O0FESEk7RUFDSSxZQUFBO0FDTVI7O0FESkk7RUFDSSxpQkFBQTtBQ09SOztBREpJO0VBQ0ksY0FBQTtBQ09SOztBRExJO0VBQ0ksY0FBQTtBQ1FSOztBRE5JO0VBQ0ksaUJBQUE7QUNTUjs7QURQSTtFQUNJLDhCQUFBO0FDVVI7O0FEUkk7RUFDSSxnQkFBQTtBQ1dSOztBRFRJO0VBQ0ksa0JBQUE7QUNZUjs7QURUaUI7RUFDVCxhQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0FDYVI7O0FEWEk7RUFDSSx3QkFBQTtBQ2NSOztBRFpJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNlUjs7QURiSTtFQUNJLGtCQUFBO0FDZ0JSOztBRGRJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDaUJSOztBRGZJO0VBQ0ksaUJBQUE7QUNrQlI7O0FEaEJJO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUNtQlY7O0VEakJNO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDb0JWO0FBQ0Y7O0FEbEJJO0VBQ0k7SUFDSSxjQUFB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SSxrQkFBQTtBQ2lCWjs7QURiSTtFQUVJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNlUjs7QURiSTtFQUNJLGVBQUE7QUNlUjs7QURUQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksa0JBQUE7QUNhSjs7QURYQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDY0o7O0FEWkE7RUFDSSwwQkFBQTtBQ2VKOztBRFpBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNlSjs7QURiQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2dCSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFjY291bnQvZmxpZ2h0YWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5yb3d7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1tZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubm8tbWFyZ2luLWJvdHRvbXtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtaXRlbXtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiM0ZjRmNGY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1saXN0e1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIC5zdXBwb3J0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZ3tcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jYWxse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5pbWctcmV2aWV3IHtpbWd7XHJcbiAgICAgICAgZmlsbDogIzI2YmVkNjtcclxuICAgIH19XHJcbiAgICAudC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucy10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctc3VwcG9ydCB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1zdXBwb3J0LW9mZmxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0yMHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzUxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAuc3VwcG9ydC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdXBwb3J0LXRleHQtb2ZmbGluZXtcclxuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZmxpZ2h0YWNjb3VudC1oZWFkZXJ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgLmZsaWdodGFjY291bnQtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4IDkwcHggMTFweDtcclxuICAgICAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICBjbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zaG93bW9yZXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe31cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4vL2F2YXRhciBzdHlsZVxyXG4uZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxNDBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmltZy11c2VyLWF2YXRhciB7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4udGV4dC1jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHQtY29sb3J7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uaXRlbS1tZCwuaXRlbS1pb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctY2FsbGNlbnRlcntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcbi5pbWctaGVhcnR7XHJcbiAgICB3aWR0aDoxM3B4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59IiwiLnJvdyB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwO1xufVxuXG4ubm8tbWFyZ2luLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDExcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRpdi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi50aXRsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG59XG5cbi5sYWJlbC1oZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmljb24tbGlzdCB7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLnN1cHBvcnQge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnN1cHBvcnQtdGV4dCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uc3VwcG9ydC10ZXh0LW9mZmxpbmUge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLnNldHRpbmcge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY2FsbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJldmlldyBpbWcge1xuICBmaWxsOiAjMjZiZWQ2O1xufVxuXG4udC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5zLXRleHQge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5pbWctc3VwcG9ydCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5pbWctc3VwcG9ydC1vZmZsaW5lIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ucC10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5zdXBwb3J0LXRleHQtb2ZmbGluZSB7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAuc3VwcG9ydC10ZXh0LW9mZmxpbmUge1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgLml0ZW0tbGlzdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uZmxpZ2h0YWNjb3VudC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5mbGlnaHRhY2NvdW50LWNvbnRlbnQge1xuICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4IDkwcHggMTFweDtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xufVxuXG46Om5nLWRlZXAgY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy11c2VyLWF2YXRhciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLml0ZW0tbWQsIC5pdGVtLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWNhbGxjZW50ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uaW1nLWhlYXJ0IHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTJweDtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightaccount/flightaccount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightaccount/flightaccount.page.ts ***!
  \*****************************************************/
/*! exports provided: FlightaccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaccountPage", function() { return FlightaccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cuspoints/cuspoints */ "./src/app/cuspoints/cuspoints.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");



















let FlightaccountPage = class FlightaccountPage {
    constructor(platform, navCtrl, storage, modalCtrl, router, callNumber, valueGlobal, zone, alertCtrl, gf, loadingCtrl, network, networkProvider, actionsheetCtrl, camera, crop, file, fcm, _flightService, bizTravelService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.callNumber = callNumber;
        this.valueGlobal = valueGlobal;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.network = network;
        this.networkProvider = networkProvider;
        this.actionsheetCtrl = actionsheetCtrl;
        this.camera = camera;
        this.crop = crop;
        this.file = file;
        this.fcm = fcm;
        this._flightService = _flightService;
        this.bizTravelService = bizTravelService;
        this.loginuser = null;
        this.username = null;
        this.listSupport = [];
        this.isShowConfirm = false;
        this.point = 0;
        this.point = 0;
        storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        setInterval(() => {
            this.refreshUserName();
            this.refreshPoint();
        }, 20000);
        gf.googleAnalytion('show-more', 'Search', '');
        this.networkProvider.getNetworkStatus().subscribe((connected) => {
            this.isConnected = connected;
            if (this.isConnected) {
                setTimeout(() => {
                    this.loadEmployeeSupport();
                }, 100);
            }
            else {
                this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
            }
        });
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    se.zone.run(() => {
                        se.loginuser = auth_token;
                        se.refreshUserName();
                        se.point = 0;
                        se.storage.get('point').then(point => {
                            se.point = point;
                        });
                    });
                    se.onRefreshAvatar();
                }
                else {
                    se.loginuser = null;
                    se.username = "";
                    se.point = 0;
                }
            });
            se._flightService.itemMenuFlightClick.pipe().subscribe(data => {
                if (data == 4) {
                    se.isConnected = true;
                    setTimeout(() => {
                        se.storage.get('auth_token').then(auth_token => {
                            if (auth_token) {
                                se.zone.run(() => {
                                    se.loginuser = auth_token;
                                    se.refreshUserName();
                                    se.point = 0;
                                    se.storage.get('point').then(point => {
                                        se.zone.run(() => {
                                            se.point = point;
                                        });
                                    });
                                });
                                se.onRefreshAvatar();
                            }
                            else {
                                se.loginuser = null;
                                se.username = "";
                                se.point = 0;
                            }
                        });
                    }, 350);
                }
            });
        });
    }
    onRefreshAvatar() {
        var se = this;
        se.zone.run(() => {
            se.storage.get('userInfoData').then((data) => {
                if (data) {
                    se.avatar = data.avatar;
                    if (data.bizAccount) {
                        se.bizTravelService.bizAccount = data.bizAccount;
                        se.bizTravelService.isCompany = true;
                    }
                    else {
                        se.bizTravelService.bizAccount = null;
                        se.bizTravelService.isCompany = false;
                    }
                }
                else {
                    se.loadUserInfo();
                    se.bizTravelService.accountBizTravelChange.emit(1);
                }
            });
            if (se.gf.getParams('userAvatar')) {
                se.croppedImagepath = se.gf.getParams('userAvatar');
            }
        });
    }
    refreshUserName() {
        this.storage.get('username').then(username => {
            this.username = username;
        });
    }
    refreshPoint() {
        this.storage.get('point').then(point => {
            this.zone.run(() => {
                this.point = point;
            });
        });
    }
    loadEmployeeSupport() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/BookingMemberDetailByUser',
                    timeout: 100000, maxAttempts: 5, retryDelay: 20000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (error) {
                        error.page = "show-more";
                        error.func = "loadEmployeeSupport";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                var listemployee = JSON.parse(body);
                                listemployee.forEach(element => {
                                    if (se.listSupport.length == 0) {
                                        se.listSupport.push(element);
                                    }
                                    else if (!se.checkExistEmployee(se.listSupport, element)) {
                                        se.listSupport.push(element);
                                    }
                                });
                            });
                        }
                        else {
                        }
                    }
                });
            }
        });
    }
    checkExistEmployee(list, itemcheck) {
        var se = this, res = false;
        var obj = list.filter((item) => { return item.name == itemcheck.name; });
        if (obj && obj.length > 0) {
            res = true;
        }
        return res;
    }
    enabledTabbar() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'flex';
            });
        }
    }
    ionViewDidLoad() {
        this.enabledTabbar();
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateRoot('/');
            });
        });
    }
    ionViewWillEnter() {
        var se = this;
        se.point = 0;
        this.loginuser = null;
        se.storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            setTimeout(() => {
                this.loadEmployeeSupport();
                this.GetUserInfo();
            }, 100);
            this.loadUserInfo();
            this.bizTravelService.accountBizTravelChange.emit(1);
        }
        else {
            this.isConnected = false;
            this.gf.showWarning('Không có kết nối mạng', 'Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng', 'Đóng');
        }
        setTimeout(() => {
            se.zone.run(() => {
                se.storage.get('auth_token').then(auth_token => {
                    se.loginuser = auth_token;
                    se.storage.get('username').then(username => {
                        se.username = username;
                    });
                    se.storage.get('point').then(point => {
                        se.zone.run(() => {
                            se.point = point;
                        });
                    });
                });
            });
        }, 100);
        if (document.querySelector(".tabbar")) {
            document.querySelector(".tabbar")['style'].display = 'flex';
        }
    }
    ionViewDidEnter() {
        var se = this;
        se.storage.get('username').then(username => {
            se.username = username;
        });
    }
    handleSplashScreen() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
            }
            catch (error) {
                if (error) {
                    error.page = "show-more";
                    error.func = "handleSplashScreen";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
                    throw new Error(error);
                }
                ;
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => { splash.remove(); }, 300);
            }
        });
    }
    goToLogin() {
        this.valueGlobal.logingoback = "";
        this.valueGlobal.backValue = 'flightaccount';
        this.navCtrl.navigateForward('/login');
    }
    goToLogout() {
        this.storage.get('auth_token').then(id_token => {
            if (id_token !== null) {
                this.showConfirmLogout('Bạn có chắc chắn muốn đăng xuất?', id_token);
            }
        });
    }
    makeCallSupport(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                let tel = "19001870";
                if (value == 1) {
                    tel = "19002045";
                }
                else if (value == 2) {
                    tel = "19001870";
                }
                else if (value > 3) {
                    tel = value;
                }
                else {
                    tel = "19002087";
                }
                setTimeout(() => {
                    this.callNumber.callNumber(tel, true);
                }, 100);
            }
            catch (error) {
                if (error) {
                    error.page = "show-more";
                    error.func = "makeCallSupport";
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
                }
                ;
            }
            this.gf.googleAnalytion('show-more', 'callsupport', '');
        });
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
                this.storage.remove('auth_token');
                this.storage.remove('email');
                this.storage.remove('username');
                this.storage.remove('jti');
                this.storage.remove('userInfoData');
                this.storage.remove('userRewardData');
                this.storage.remove('point');
                this.storage.remove('infocus');
                this.zone.run(() => {
                    this.point = 0;
                    this.loginuser = null;
                    this.username = "";
                    this.valueGlobal.countNotifi = 0;
                    this.isShowConfirm = false;
                });
                this.navCtrl.navigateBack('/');
            });
        });
    }
    showConfirmLogin(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.valueGlobal.backValue = 'foodaccount';
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.valueGlobal.backValue = 'foodaccount';
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
                this.isShowConfirm = false;
            });
        });
    }
    showConfirmLogout(msg, id_token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [{
                        text: 'Có',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('weatherInfo');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.gf.setParams(true, 'resetBlogTrips');
                            this.storage.remove('listblogtripdefault');
                            this.croppedImagepath = null;
                            this.avatar = null;
                            this.valueGlobal.backValue = 'tab5';
                            this.zone.run(() => {
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                                this.bizTravelService.bizAccount = null;
                                this.bizTravelService.actionHistory = null;
                                this.bizTravelService.isCompany = false;
                            });
                            this.bizTravelService.accountBizTravelChange.emit(2);
                            this.fcm.getToken().then(token => {
                                this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                            });
                            this.valueGlobal.backValue = 'flightaccount';
                            this.navCtrl.navigateForward('/login');
                        }
                    },
                    {
                        text: 'Không',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showUserReward() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/userreward');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userreward');
    }
    showUserProfile() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.gf.setParams(se.croppedImagepath, 'userAvatar');
                this.navCtrl.navigateForward('/userprofile');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userprofile');
    }
    Point() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.presentModal(_cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_17__["CuspointsPage"]);
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userpoint');
    }
    showUserReviews() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/userreviews');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
        se.gf.googleAnalytion('show-more', 'Search', 'userreviews');
    }
    presentModal(comp) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: comp,
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
        });
    }
    sendSMSSupport() {
        this.presentLoadingnavi();
        var se = this;
        this.navCtrl.navigateForward('/sendsms');
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 1000
            });
            loader.present();
        });
    }
    showUserTravelHobby() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.navCtrl.navigateForward('/usertravelhobby');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
    }
    loadUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "loadUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "loadUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.avatar = data.avatar;
                            });
                            se.storage.remove('userInfoData');
                            se.storage.set('userInfoData', data);
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                            }
                            else {
                                se.bizTravelService.bizAccount = null;
                                se.bizTravelService.isCompany = false;
                            }
                        }
                    }
                });
            }
        });
    }
    changeAvatar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-basic-page',
                buttons: [
                    {
                        text: 'Chụp ảnh',
                        role: 'destructive',
                        icon: 'camera',
                        handler: () => {
                            this.captureImage();
                        }
                    },
                    {
                        text: 'Chọn ảnh từ bộ sưu tập',
                        icon: 'image',
                        handler: () => {
                            this.captureImageGallery();
                        }
                    },
                ]
            });
            actionSheet.present();
        });
    }
    captureImageGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const options = {
                quality: 76,
                sourceType: se.camera.PictureSourceType.SAVEDPHOTOALBUM,
                destinationType: se.camera.DestinationType.FILE_URI,
                encodingType: se.camera.EncodingType.JPEG,
                mediaType: se.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
                correctOrientation: true,
            };
            se.camera.getPicture(options).then((imageData) => {
                let filename, path;
                se.base64Image = imageData;
                path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                let index = filename.indexOf('?');
                if (index > -1) {
                    filename = filename.substring(0, index);
                }
                se.croppedImagefilename = filename;
                se.cropImage(imageData);
            });
        });
    }
    captureImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const options = {
                quality: 76,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: this.camera.PictureSourceType.CAMERA,
                correctOrientation: true,
            };
            this.zone.run(() => {
                this.camera.getPicture(options).then((imageData) => {
                    let filename, path;
                    se.base64Image = imageData;
                    path = imageData.substring(0, imageData.lastIndexOf('/') + 1);
                    filename = imageData.substring(imageData.lastIndexOf('/') + 1);
                    let index = filename.indexOf('?');
                    if (index > -1) {
                        filename = filename.substring(0, index);
                    }
                    se.croppedImagefilename = filename;
                    se.cropImage(imageData);
                });
            });
        });
    }
    uploadAvatar(image) {
        var se = this;
        se.getFullImage(se.base64Image.split('?')[0]).then((data) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'POST',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/UploadAvatarBase64',
                        headers: {
                            Authorization: text,
                        },
                        body: {
                            "imgBase64Full": data,
                            "imgBase64Crop": image,
                            "fileExtension": se.fileType
                        },
                        json: true
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                        if (error) {
                            error.page = "userprofile";
                            error.func = "captureImage";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        }
                        else {
                            se.storage.remove('userInfoData');
                        }
                    });
                }
            });
        });
    }
    cropImage(imgPath) {
        this.crop.crop(imgPath, { quality: 100 })
            .then(newPath => {
            this.showCroppedImage(newPath.split('?')[0]);
        }, error => {
            throw error;
        });
    }
    getFullImage(ImagePath) {
        return new Promise((resolve, reject) => {
            var copyPath = ImagePath;
            var splitPath = copyPath.split('/');
            var imageName = splitPath[splitPath.length - 1];
            var filePath = ImagePath.split(imageName)[0];
            var splitType = imageName.split('.');
            var imageType = splitType[splitType.length - 1];
            var se = this;
            se.file.readAsDataURL(filePath, imageName).then(base64 => {
                let b64 = base64.split(',')[1];
                resolve(b64);
            });
        });
    }
    showCroppedImage(ImagePath) {
        var copyPath = ImagePath;
        var splitPath = copyPath.split('/');
        var imageName = splitPath[splitPath.length - 1];
        var filePath = ImagePath.split(imageName)[0];
        var splitType = imageName.split('.');
        var imageType = splitType[splitType.length - 1];
        var se = this;
        se.fileType = imageType;
        se.file.readAsDataURL(filePath, imageName).then(base64 => {
            se.zone.run(() => {
                se.croppedImagepath = base64;
            });
            const contentType = 'image/' + imageType;
            let b64 = base64.split(',')[1];
            se.uploadAvatar(b64);
        });
    }
    doRefresh(event) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.loginuser = auth_token;
                se.zone.run(() => {
                    se.refreshUserName();
                    se.storage.get('point').then(point => {
                        se.point = point;
                    });
                });
            }
        });
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('deviceToken').then((devicetoken) => {
                                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                    se.loginuser = token;
                                    se.storage.remove('auth_token').then(() => {
                                        se.storage.set('auth_token', token);
                                    });
                                    setTimeout(() => {
                                        se.GetUserInfoRefresh(token);
                                    }, 100);
                                });
                            });
                        });
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
                            se.storage.get('auth_token').then(auth_token => {
                                se.loginuser = auth_token;
                            });
                            se.storage.get('username').then(username => {
                                se.username = username;
                            });
                            se.storage.get('point').then(point => {
                                se.point = point;
                            });
                            se.point = data.point;
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                            }
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
    GetUserInfoRefresh(token) {
        var se = this;
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomdetailreview",
                        func: "GetUserInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomdetailreview";
                    error.func = "GetUserInfo";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        var data = JSON.parse(body);
                        var info;
                        se.point = data.point;
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
                        se.zone.run(() => {
                            se.username = data.fullname;
                        });
                        if (data.bizAccount) {
                            se.bizTravelService.bizAccount = data.bizAccount;
                            se.bizTravelService.isCompany = true;
                        }
                    }
                }
            });
        }
    }
    showCompanyInfo() {
        this.navCtrl.navigateForward('/companyinfo');
    }
};
FlightaccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightaccount',
        template: __webpack_require__(/*! ./flightaccount.page.html */ "./src/app/flightaccount/flightaccount.page.html"),
        styles: [__webpack_require__(/*! ./flightaccount.page.scss */ "./src/app/flightaccount/flightaccount.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__["CallNumber"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_9__["Network"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_10__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_13__["Camera"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_11__["Crop"],
        _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_12__["File"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_14__["FCM"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_15__["flightService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__["BizTravelService"]])
], FlightaccountPage);



/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightmytripPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightmytripPageModule", function() { return FlightmytripPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightmytrip.page */ "./src/app/flightmytrip/flightmytrip.page.ts");






let FlightmytripPageModule = class FlightmytripPageModule {
};
FlightmytripPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__["FlightmytripPage"]],
        exports: [_flightmytrip_page__WEBPACK_IMPORTED_MODULE_5__["FlightmytripPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightmytripPageModule);



/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flight-mytrip-header\">\n    <ion-toolbar>\n        <ion-title class=\"text-title\">\n          Chuyến đi của tôi\n        </ion-title>\n        <ion-buttons slot=\"primary\" (click)=\"refreshData()\">\n          <button ion-button icon-only class=\"btn-header\">\n            <img class=\"img-refresh\" src=\"./assets/imgs/refresh.svg\" >\n            </button>\n        </ion-buttons>\n      </ion-toolbar>\n      <ion-row>\n        <ion-segment [(ngModel)]=\"tabflight\" class=\"div-segment\"  mode=\"md\">\n          <ion-segment-button (click)=\"Selecttab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\">\n            Sắp đi {{ nextflightcounttext }}\n            </ion-segment-button>\n            <ion-segment-button (click)=\"Selecttab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\" >\n            Đã đi {{ historyflightcounttext }}\n            </ion-segment-button>\n          \n          </ion-segment>\n      </ion-row>\n</ion-header>\n\n    <div class=\"div-flight-mytrip-content\">\n    <div *ngIf=\"hasloaddata else loadsk\">\n        <div *ngIf=\"tabflight ==1 else historyTab\">\n            <div *ngIf=\"(listMyTrips && listMyTrips.length >0) else mytripEmpty\">\n                <ion-list *ngFor=\"let trip of listMyTrips; let i = index\" class=\"div-flight-mytrip\">\n                    <div [ngClass]=\"i == 0 ? 'div-mytrip m-top-24' : 'div-mytrip'\">\n                    <div [ngClass]=\"i == 0 ? 'first-content m-top-42' : 'first-content'\">\n                    <ion-item-group >\n                          <ion-row class=\"row-bkg-id\" >\n                            <ion-col size=\"8\" class=\"col-flight-mytrip\"><label>BookingID: <span class=\"bkg-id\">{{trip.booking_id}}</span></label></ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"\n                              *ngIf=\"trip.payment_status != 9 && (trip.payment_status != 3 && trip.payment_status != -2) && trip.bookingsComboData.length>1\">\n                              <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && trip.bookingsComboData[0].issueTicketDate && trip.bookingsComboData[1].issueTicketDate\"\n                                class=\"fly-bkg-code\">Đã xuất vé</label>\n                                <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && (!trip.bookingsComboData[0].issueTicketDate || !trip.bookingsComboData[1].issueTicketDate)\"\n                                class=\"fly-bkg-code\">Đã thanh toán</label>\n                              <label *ngIf=\"!(trip.payment_status == 1 || trip.payment_status == 5)\" class=\"fly-bkg-code\">Chưa thanh toán</label>\n                            </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"\n                            *ngIf=\"trip.payment_status != 9 && (trip.payment_status != 3 && trip.payment_status != -2) && trip.bookingsComboData.length==1\">\n                            <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && trip.bookingsComboData[0].issueTicketDate\"\n                              class=\"fly-bkg-code\">Đã xuất vé</label>\n                              <label *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5) && !trip.bookingsComboData[0].issueTicketDate\"\n                              class=\"fly-bkg-code\">Đã thanh toán</label>\n                            <label *ngIf=\"!(trip.payment_status == 1 || trip.payment_status == 5)\" class=\"fly-bkg-code\">Chưa thanh toán</label>\n                          </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\"  *ngIf=\"trip.payment_status == 9\">\n                              <label class=\"fly-bkg-code\">\n                                Chờ hỏi phòng\n                              </label>\n                            </ion-col>\n                            <ion-col size=\"4\" class=\"col-flight-mytrip col-bkg-status\" style=\"text-align: right;font-size: 12px;color:#f79221;padding: 5px 5px 5px 0px;\" *ngIf=\"(trip.payment_status == 3 || trip.payment_status == -2)\">\n                              Đã hủy\n                            </ion-col>\n                          </ion-row>\n                          <ion-row *ngIf=\"trip.payment_status == 3 || trip.payment_status == -2\">\n                            <ion-col class=\"col-flight-mytrip\">\n                              {{ trip.cancellation_policy}}\n                            </ion-col>\n                          </ion-row>\n                          \n                          <div *ngIf=\"trip.combo_name\" >\n                            <ion-label class=\"label-comboname\">{{trip.combo_name}}</ion-label>\n                          </div>\n        \n                          <!-- Vùng booking fly -->\n                        <div *ngIf=\"hasloaddata && tabflight == 1\">\n                          <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div>\n                            <div class=\"div-flybooking\">\n                                <!-- Chiều đi -->\n                                <div class=\"padding-5\">\n                                    <div class=\"d-flex text-thin\">\n                                        <div class=\"div-width-100\">{{ trip.checkInDisplay }}</div>\n                                        <div class=\"text-departure div-width-100\" *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5)\">\n                                            <div class=\"t-right\">Mã đặt chỗ hãng</div>\n                                        </div>\n                                    </div>\n                                    <div class=\"d-flex text-thin\">\n                                      <div class=\"div-width-200 d-flex\">\n                                        <div class=\"div-img-logo\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0].airlineName.indexOf('VIETJET') != -1 \" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                                          <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[0].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && !trip.bookingsComboData[0].operatedBy \"  src=\"./assets/ic_airticket/logo_vna.png\">\n                                          <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[0].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && trip.bookingsComboData[0].operatedBy\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0].airlineName.indexOf('JETSTAR') != -1\"  src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                          <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[0] && trip.bookingsComboData[0].airlineName.indexOf('BAMBOO') != -1 \"  src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                                          \n                                        </div>\n                                        <div class=\"div-ticket\">{{trip.bookingsComboData[0].flightNumner }} - {{trip.bookingsComboData[0].ticketClass }}</div>\n                                      </div>\n                                      <div class=\"text-departure div-width-100 \" *ngIf=\"trip.bookingsComboData[0] &&trip.bookingsComboData[0].ticketCode.indexOf('T__') == -1 && (trip.payment_status == 1 || trip.payment_status == 5)\">\n                                          <div class=\"t-right text-hold-ticket\">{{ trip.bookingsComboData[0].ticketCode }}</div>\n                                      </div>\n                                    </div>\n                                \n                                    <div class=\"div-departure m-top-8\">\n                                        <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[0].departureTime}}</div>\n                                        <div class=\"div-info-departure\">\n                                        <div class=\"f-bold\">{{trip.flightFrom}}</div>\n                                        <div class=\"text-thin\">{{ trip.departAirport}} | {{ trip.bookingsComboData[0].departCode }}</div>\n                                        </div>\n                                        <div class=\"placepoint\" style=\"top:33%\">\n                                        </div>\n                                        <div class=\"placeline\">\n                                        </div>\n                                    </div>\n                                    <div class=\"div-return m-top-28\"> \n                                        <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[0].arrivalTime}}</div>\n                                        <div class=\"div-info-return\">\n                                        <div class=\"f-bold\">{{ trip.flightTo }}</div>\n                                        <div class=\"text-thin\">{{ trip.returnAirport }} | {{ trip.bookingsComboData[0].arrivalCode }}</div>\n                                        </div>\n                                        <div class=\"placepoint-return\">\n                                        </div>\n                                    </div>\n                                </div >\n                                <!-- Chiều về -->\n                            <div *ngIf=\"textReturn && trip.bookingsComboData.length >1\" class=\"div-arrival\">\n                                <div class=\"div-split\"></div>\n                    \n                                <div class=\"d-flex text-thin\">\n                                  <div class=\"div-width-100\">{{ trip.checkOutDisplay }}</div>\n                                  <div class=\"text-departure div-width-100\" *ngIf=\"(trip.payment_status == 1 || trip.payment_status == 5)\">\n                                      <div class=\"t-right\">Mã đặt chỗ hãng</div>\n                                  </div>\n                              </div>\n                              <div class=\"d-flex text-thin\">\n                                <div class=\"div-width-200 d-flex\">\n                                  <div class=\"div-img-logo\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1].airlineName.indexOf('VIETJET') != -1 \" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                                    <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && !trip.bookingsComboData[1].operatedBy\"  src=\"./assets/ic_airticket/logo_vna.png\">\n                                    <img class=\"img-logo logo-vna\" *ngIf=\"trip.bookingsComboData[1].airlineName.toLowerCase().indexOf('vietnam airlines') != -1 && trip.bookingsComboData[1].operatedBy\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1].airlineName.indexOf('JETSTAR') != -1  \"  src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                                    <img class=\"img-logo\" *ngIf=\"trip.bookingsComboData[1] && trip.bookingsComboData[1].airlineName.indexOf('BAMBOO') != -1  \"  src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                                    \n                                  </div>\n                                  <div class=\"div-ticket\">{{trip.bookingsComboData[1].flightNumner }} - {{trip.bookingsComboData[1].ticketClass }}</div>\n                                </div>\n                                <div class=\"text-departure div-width-100 \" *ngIf=\"trip.bookingsComboData[1].ticketCode && trip.bookingsComboData[1].ticketCode.indexOf('T__') == -1 && (trip.payment_status == 1 || trip.payment_status == 5)\">\n                                    <div class=\"t-right text-hold-ticket\">{{ trip.bookingsComboData[1].ticketCode }}</div>\n                                </div>\n                              </div>\n                    \n                                <div class=\"div-departure m-top-8\">\n                                    <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[1].departureTime}}</div>\n                                    <div class=\"div-info-departure\">\n                                    <div class=\" f-bold\">{{ trip.flightTo }}</div>\n                                    <div class=\"text-thin\">{{ trip.returnAirport }} | {{ trip.bookingsComboData[1].departCode }}</div>\n                                    </div>\n                                    <div class=\"placepoint\" style=\"top:33%\">\n                                    </div>\n                                    <div class=\"placeline\">\n                                    </div>\n                                </div>\n                                <div class=\"div-return m-top-28\"> \n                                    <div class=\"div-time-departure f-bold\">{{trip.bookingsComboData[1].arrivalTime}}</div>\n                                    <div class=\"div-info-return\">\n                                    <div class=\" f-bold\">{{trip.flightFrom}}</div>\n                                    <div class=\"text-thin\">{{ trip.departAirport }} | {{ trip.bookingsComboData[1].arrivalCode }}</div>\n                                    </div>\n                                    <div class=\"placepoint-return\">\n                                    </div>\n                                </div>\n                    \n                            </div>\n\n                            <div *ngIf=\"isFlyBooking\" class=\"div-pax m-top-64\">\n                              <div class=\"p-top-8\" *ngFor=\"let pax of trip.bookingsComboData[0].passengers; let idx = index\">\n                                <div class=\"div-pax-lug\">\n                                  <div [ngClass]=\"idx==0 ? 'pax-name m-top-8' : (pax.arrlug && pax.arrlug.length >0) ? 'pax-name m-top-27' : 'pax-name m-top-8'\"><label>{{idx+1}}. <span class=\"f-bold\">{{pax.name}}</span> <span class=\"text-age\" *ngIf=\"!pax.isAdult\"> ({{pax.dob}})</span></label></div>\n                                  <div class=\"pax-type \">{{pax.gender}}</div>\n                                \n                                </div>\n              \n                                <div *ngFor=\"let lugg of pax.arrlug\">\n                                  <div class=\"div-luggest d-flex\" >\n                                    <div><img class=\"img-luggage\" src=\"./assets/ic_flight/vali.svg\"> </div>\n                                    <div class=\"p-top-1\">{{lugg.lugname}} <span *ngIf=\"lugg.lugweight\">| {{lugg.lugweight}} </span><span *ngIf=\"lugg.seatnumber\" class=\"p-left-4\">| {{lugg.seatnumber}}</span></div>\n                                  </div>\n                                </div>\n                              </div>\n                               \n                            </div>\n\n                              <div class=\"div-split-panel\"></div>\n                              <!-- <div class=\"d-flex m-8\">\n                                  <div class=\"div-width-100 v-align-center\">\n                                      <div class=\"text-pax\">{{ trip.adult }} người lớn</div>\n                                      <div class=\"text-pax\" *ngIf=\"trip.child && trip.child >0\">{{ trip.child }} trẻ em</div>\n                                      <div class=\"text-pax\" *ngIf=\"trip.infant && trip.infant >0\">{{ trip.infant }} em bé</div>\n                                  </div>\n                                  <div class=\"div-width-100 text-right v-align-center\">\n                                    <div class=\"text-total-price\">{{trip.totalpricedisplay}}đ\n                                    </div>\n                                    <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n                                    \n                                  </div>\n                                </div>  -->\n                                <!-- <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div> -->\n                                <div *ngIf=\"trip.delivery_payment_date_display && (trip.pay_method==0||trip.pay_method==5||trip.pay_method==10)\" class=\"div-btn-payment\">\n                                  <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Thanh toán</button>\n                              </div>\n                                <div *ngIf=\"trip.delivery_payment_date_display&&!(trip.pay_method==0||trip.pay_method==5||trip.pay_method==10)\">\n                                  <div style=\"padding: 8px;\" *ngIf=\"trip.pay_method==51\">\n                                    <div class=\"div-payment-combo-flight\">\n                                      <div class=\"div-payment-left\">\n                                        <div><label class=\"text-name\" position=\"stacked\">{{ trip.paxDisplay}}</label></div>\n                                        <div class=\"div-text-fee\"><label class=\"text-fee\">Giá đã bao gồm thuế & phí</label></div>\n                                      </div>\n                                      <div class=\"div-price\">\n                                        <label  class=\"total-price\">\n                                          {{trip.priceShow}}đ\n                                        </label>\n                                      </div>\n                                  </div>\n                                  <div *ngIf=\"trip.booking_type == 'COMBO_FLIGHT' else notcomboflight\">\n                                      <label class=\"text-note\">Quý khách thanh toán trước hạn thanh toán để đảm bảo tình trạng phòng và vé máy bay</label>\n                                  </div>\n                                  <ng-template #notcomboflight>\n                                      <label class=\"text-note\">Quý khách thanh toán trước hạn thanh toán để đảm bảo tình trạng phòng</label>\n                                  </ng-template>\n                                  <div >\n                                      <label class=\"text-note\">Khi Quý khách nhấn nút “Thanh toán” cũng đồng nghĩa là Quý khách đã đồng ý với các <a class=\"text-policy\" (click)=\"showRules()\">điều khoản và chính sách</a> thay đổi hoặc hủy đặt phòng.</label>\n                                  </div>\n                                  <div class=\"div-btn-payment\">\n                                      <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Thanh toán</button>\n                                  </div>\n                                  </div>\n                                    <!-- Hình thức ck ngân hàng -->\n                                    <div *ngIf=\"!(trip.pay_method==3||trip.pay_method==51)\">\n                                      <div class=\"d-flex-later\">\n                                        <div class=\"d-img\">\n                                          <img src={{trip.urlimgbank}}>\n                                        </div>\n                                        <div>\n                                          <ion-label class=\"cls-text\">\n                                           {{trip.bankName}}\n                                          </ion-label>\n                                          <!-- <div class=\"mt6\">\n                                            <ion-label (click)=\"openWebpage()\" class=\"cls-textopen\">\n                                              Mở website/ứng dụng {{trip.textbank}}\n                                            </ion-label>\n                                          </div> -->\n                                        </div>\n                                      </div>\n                                      <div class=\"div-text-payment\">\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Số TK: <b>{{trip.accountNumber}}</b><a class='text-copy' (click)='copyClipboard(trip.accountNumber)'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" >\n                                          Người nhận: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(\"Người nhận: Công ty Cổ Phần IVIVU.COM\")'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Nội dung chuyển tiền: <b class=\"text-booking text-red\">{{trip.booking_id}}</b><a class='text-copy' (click)='copyClipboard(trip.booking_id)'>Sao chép</a>\n                                        </p>\n                                        <p class=\"text-payment-info\" text-wrap>\n                                          Tổng tiền: <b class=\"text-bold\">{{trip.priceShow}} VND</b><a class='text-copy' (click)='copyClipboard(trip.priceShow)'>Sao chép</a>\n                                        </p>                    \n                                      </div>\n                                    \n                                    </div>\n                                    <!-- payoo tại của hàng -->\n                                    <div *ngIf=\"trip.pay_method==3\" class=\"d-flex-later\">\n                                      <p class=\"text-payment-info\" text-wrap>\n                                        Mã thanh toán Payoo: {{trip.PaymentCode}}, số tiền: <b class=\"text-bold\">{{trip.priceShow}} VND</b>\n                                      </p>\n                                    </div>\n                                    <div *ngIf=\"trip.pay_method!=51\" class=\"mt16\">\n                                      <label class=\"text-other\">Hoặc thanh toán bằng phương thức khác</label>\n                                    </div>\n                                    <div *ngIf=\"trip.pay_method!=51\" class=\"div-btn-payment mt16\">\n                                      <button (click)=\"paymentselect(trip)\" ion-button round outline class=\"button btn-payment\">Đổi phương thức thanh toán</button>\n                                  </div>\n                                </div>\n                               \n                            \n                        </div>\n                    </div>\n                    \n                    <!-- <div class=\"div-paymentbank\" *ngIf=\"trip.payment_status == 0 && trip.delivery_payment_date_display\">\n                     \n                        <div class=\"div-split-panel\"></div>\n                        <div class=\"div-delivery_payment\" *ngIf=\"trip.delivery_payment_date_display\">{{ trip.delivery_payment_date_display}}</div>\n                        <div class=\"div-text-payment\">\n                          <div class=\"text-payment-bank\">\n                            <div class=\"d-flex\">\n                              <div class=\"d-img\">\n                                <img src={{trip.urlimgbank}}>\n                              </div>\n                              <div class=\"div-width-200\">\n                                <ion-label class=\"cls-text\">\n                                 {{trip.bankName}}\n                                </ion-label>\n                              </div>\n                            </div>\n\n                            <p class=\"text-payment-info\" text-wrap>\n                              Số TK: <b>{{trip.accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" >\n                              Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" text-wrap>\n                              Nội dung chuyển tiền: <b class=\"text-booking\">{{trip.bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n                            </p>\n                            <p class=\"text-payment-info\" text-wrap>\n                              Tổng tiền: <b class=\"text-bold\">{{trip.total}} VND</b><a class='text-copy' (click)='copyClipboard(4)'>Sao chép</a>\n                            </p>\n                           \n                            \n                          </div>\n                         \n                        </div>\n\n                        <div class=\"div-text-otherpayment\">\n                          Hoặc thanh toán bằng phương thức khác\n                        </div>\n                        <div class=\"m-lr-8\">\n                          <button ion-button round outline class=\"button btn-paymentother\" (click)=\"gotoflightpaymentselect(trip.itemFlightCache)\">Đổi phương thức thanh toán</button>\n                        </div>\n                    </div> -->\n                    \n                        \n                        </ion-item-group>\n                        </div>\n                    </div>\n                </ion-list>\n\n            </div>\n            <ng-template #mytripEmpty>\n                    <div class=\"div-empty-trip\">\n                            <img src=\"./assets/empty/trip_empty.svg\">\n                    </div>\n                    <div *ngIf=\"loginuser else notloginyet\">\n                      <div class=\"text-trip-empty\">\n                        <label>Quý khách chưa có chuyến bay nào với iVIVU.</label>\n                      </div>\n                      <div class=\"button-trip-empty\">\n                          <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goback()\">Đặt vé ngay</button>\n                      </div>\n                    </div>\n                    <ng-template #notloginyet>\n                      <div class=\"text-trip-empty\">\n                        <label>Vui lòng đăng nhập để xem chuyến đi!</label>\n                      </div>\n                      <div class=\"button-trip-empty\">\n                          <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"gotologin()\">Đăng nhập ngay</button>\n                      </div>\n                    </ng-template>\n                    \n            </ng-template>\n            \n        </div>\n        <ng-template #historyTab>\n                <div *ngIf=\"(listHistoryTrips && listHistoryTrips.length >0) else historyflightempty\" class=\"card-background-page-history-trips\">\n                  <ion-list *ngFor=\"let tripHistory of listHistoryTrips; let i = index\" >\n                    <div [ngClass]=\"i == 0 ? 'div-mytrip m-top-16' : 'div-mytrip'\" style=\"padding-bottom: 0\">\n                    <div [ngClass]=\"i == 0 ? 'first-content-history ' : 'first-content-history'\">\n                        <div class=\"div-bkg-history\"><span class=\"text-bkg-history\">{{tripHistory.booking_id}}</span></div>\n\n                        <div class=\"text-flight-title d-flex\">\n                          <div>\n                              <div>{{ tripHistory.flightFrom }} ({{tripHistory.bookingsComboData[0].departCode}})</div>\n                              <div class=\"text-bkg-history\">{{ tripHistory.checkInDisplay }} </div>\n                          </div>\n                          <div class=\"div-flight-inout\">\n                              <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"tripHistory.roundTrip else oneway\">\n                              <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"../assets/imgs/ic_arrow.svg\"></ng-template>\n                          </div> \n                          <div>\n                              <div>{{ tripHistory.flightTo }} ({{tripHistory.bookingsComboData[0].arrivalCode}})</div>\n                              <div class=\"text-bkg-history\">{{ tripHistory.checkOutDisplay }} </div>\n                          </div>\n                        </div>\n                        \n                        <div class=\"div-split-history\"></div>\n                      </div>\n                    </div>\n                </ion-list>\n                </div>\n                <ng-template #historyflightempty>\n                    <div class=\"div-empty-trip\">\n                        <img src=\"./assets/empty/trip_empty.svg\">\n                </div>\n                <div *ngIf=\"loginuser else notloginyet\">\n                    <div class=\"text-trip-empty\">\n                      <label>Quý khách chưa có chuyến bay nào với iVIVU.</label>\n                    </div>\n                    <div class=\"button-trip-empty\">\n                        <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"goback()\">Đặt vé ngay</button>\n                    </div>\n                </div>\n                <ng-template #notloginyet>\n                    <div class=\"text-trip-empty\">\n                      <label>Vui lòng đăng nhập để xem chuyến đi!</label>\n                    </div>\n                    <div class=\"button-trip-empty\">\n                        <button ion-button round outline class=\"button btn-trip-empty\" (click)=\"gotologin()\">Đăng nhập ngay</button>\n                    </div>\n                </ng-template>\n                \n                </ng-template>\n        </ng-template>\n        \n    </div>         \n\n    <ng-template #loadsk>\n        <div class=\"padding-16\">\n            <div>\n                <ion-skeleton-text  animated style=\"width:104px;margin: 0;height: 16px;\"></ion-skeleton-text>\n            </div>\n                    <div >\n                        <div class=\"div-sk-detail\" >\n                            <div class=\"row-item-hoteldetail-sk\">\n                                <ion-col size=\"4\" style=\"padding: 0\">\n                                    <ion-skeleton-text animated style=\"width:104px;height:104px;border-radius:6px;margin:0;margin-top:16px;\"></ion-skeleton-text>\n                                </ion-col>\n                                <ion-col size=\"8\" class=\"col-description-hoteldetail-sk\" style=\"line-height: 16px;padding-top: 0\">\n                                    <ion-skeleton-text animated style=\"width: 50%;margin: 0;height: 16px;\"></ion-skeleton-text>\n                                    <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:40px;height: 16px;\"></ion-skeleton-text>\n                                    <ion-skeleton-text animated style=\"width: 50%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                </ion-col>\n                            </div>\n                            <div class=\"row-item-description-sk\">\n                                <ion-skeleton-text animated style=\"width: 104px;margin: 0;margin-top:32px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 83%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                                <ion-skeleton-text animated style=\"width: 67%;margin: 0;margin-top:16px;height: 16px;\"></ion-skeleton-text>\n                            </div>\n                            <div class=\"row-item-button-sk\">\n                                <ion-skeleton-text animated style=\"width: 100%;margin: 0;height: 48px;border-radius: 6px;margin-top:48px\"></ion-skeleton-text>\n                            </div>\n                        </div>\n                    </div>\n          </div>\n    </ng-template>\n     \n    </div>"

/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.flight-mytrip-header {\n  position: fixed;\n}\n.flight-mytrip-header .text-title {\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  padding-left: 80px;\n  padding-top: 0;\n}\n.flight-mytrip-header .btn-header {\n  background: #fff;\n  width: 32px;\n  opacity: 0.8;\n  padding: 6px;\n}\n.flight-mytrip-header .sp-counttext {\n  position: absolute;\n  right: 18%;\n}\n.flight-mytrip-header .sp-counttext-his {\n  position: absolute;\n  right: 25%;\n}\n.d-flex {\n  display: flex;\n}\n.m-top-64 {\n  margin-top: 64px !important;\n}\n.m-top-24 {\n  margin-top: 24px !important;\n}\n.m-8 {\n  margin: 8px;\n}\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-width-200 {\n  width: 200%;\n}\n.text-right {\n  text-align: right;\n}\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flight-mytrip-content, .card-background-page-history-trips {\n  height: auto;\n  padding: calc( env(safe-area-inset-bottom) + 94px) 0px;\n  position: -webkit-sticky;\n}\n.div-flight-mytrip-content .div-flight-mytrip, .card-background-page-history-trips .div-flight-mytrip {\n  background: #f2f2f2;\n}\n.div-flight-mytrip-content .div-delivery_payment, .card-background-page-history-trips .div-delivery_payment {\n  background: rgba(254, 237, 199, 0.4);\n  padding: 10px 8px;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  text-align: center;\n  color: #333333;\n}\n.div-flight-mytrip-content .div-mytrip, .card-background-page-history-trips .div-mytrip {\n  padding-bottom: 24px;\n}\n.div-flight-mytrip-content .col-flight-mytrip, .card-background-page-history-trips .col-flight-mytrip {\n  padding: 5px 0 5px 8px;\n}\n.div-flight-mytrip-content .div-img-logo, .card-background-page-history-trips .div-img-logo {\n  height: 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flight-mytrip-content .div-img-logo .img-logo, .card-background-page-history-trips .div-img-logo .img-logo {\n  width: 24px;\n  height: 24px;\n}\n.div-flight-mytrip-content .div-img-logo .logo-vna, .card-background-page-history-trips .div-img-logo .logo-vna {\n  height: 12px !important;\n}\n.div-flight-mytrip-content .text-thin, .card-background-page-history-trips .text-thin {\n  font-size: 14px;\n  font-weight: 100 !important;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #222222;\n}\n.div-flight-mytrip-content .text-hold-ticket, .card-background-page-history-trips .text-hold-ticket {\n  color: #26bed6;\n  font-weight: 600;\n}\n.div-flight-mytrip-content .row-bkg-id, .card-background-page-history-trips .row-bkg-id {\n  align-items: center;\n  background-color: rgba(242, 242, 242, 0.5);\n}\n.div-flight-mytrip-content .div-ticket, .card-background-page-history-trips .div-ticket {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 8px;\n  font-size: 14px;\n}\n.div-flight-mytrip-content .t-right, .card-background-page-history-trips .t-right {\n  text-align: right;\n}\n.div-empty-trip {\n  margin-top: 124px;\n  text-align: center;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  margin-top: 16px;\n}\n.segment-button.activated, .segment-button.segment-activated, .segment-button-checked {\n  border-color: #26bed6 !important;\n  opacity: 1;\n  color: #26bed6 !important;\n  text-transform: none;\n  font-size: 17px;\n}\n.cls-strike {\n  text-decoration: line-through;\n}\n.segment-button {\n  text-transform: none !important;\n  font-size: 17px !important;\n}\n.card-background-page-mytrips .item-room {\n  position: relative;\n  min-height: 104px;\n  margin: 0 5px;\n  margin-top: 13px;\n}\n.card-background-page-mytrips .div-split-color {\n  height: 7px;\n  background-color: #f2f2f2;\n}\n.card-background-page-mytrips .div-wrapimg {\n  position: absolute;\n  height: 104px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.card-background-page-mytrips .img-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n  min-height: 104px;\n}\n.card-background-page-mytrips .col-mytrip-text-description {\n  padding-left: 112px;\n}\n.card-background-page-mytrips .div-cin-cout {\n  margin: 0 5px;\n  display: flex;\n}\n.card-background-page-mytrips .div-cin-cout .div-cin {\n  width: 34%;\n}\n.card-background-page-mytrips .div-cin-cout .div-cout {\n  width: 33%;\n  margin-left: 8px;\n}\n.card-background-page-mytrips .div-cin-cout .div-duration {\n  width: 22%;\n  margin-left: 8px;\n}\n.card-background-page-mytrips .div-cin-cout .div-label-date {\n  font-size: 12px;\n  color: #4f4f4f;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .div-date {\n  border-right: solid 1px #cdcdcd;\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .div-cin-cout .no-border {\n  border: none;\n}\n.card-background-page-mytrips .d-flex {\n  display: flex;\n  margin: 0 5px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n}\n.card-background-page-mytrips .d-flex .div-left {\n  width: 20px;\n}\n.card-background-page-mytrips .d-flex .div-center {\n  width: 338px;\n}\n.card-background-page-mytrips .d-flex .div-right {\n  text-align: right;\n}\n.card-background-page-mytrips .m-top-3 {\n  margin-top: 3px;\n}\n.card-background-page-mytrips .m-top-14 {\n  margin-top: 14px;\n}\n.card-background-page-mytrips .m-top-8 {\n  margin-top: 8px;\n}\n.card-background-page-mytrips .col-nopd-top {\n  padding: 0 5px;\n  align-self: center;\n}\n.card-background-page-mytrips .img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n.card-background-page-mytrips .second-content {\n  padding: 9px 11px;\n  font-size: 14px;\n}\n.card-background-page-mytrips .second-content .p-lr-5 {\n  padding: 0 5px;\n}\n.card-background-page-mytrips .div-flight-label {\n  font-size: 12px;\n  color: #4f4f4f;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n}\n.card-background-page-mytrips .text-ticket {\n  font-weight: bold;\n  font-size: 14px;\n}\n.m-lf-0 {\n  margin: 8px 0 !important;\n}\n.div-request-payment {\n  position: absolute;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #fff;\n  background: #003c71;\n  height: 32px;\n  top: 0;\n  left: 0;\n  margin-bottom: 15px;\n}\n.div-request-payment .lbl-request-payment {\n  top: 7px;\n  position: relative;\n}\n.m-top-27 {\n  margin-top: 27px;\n}\n.first-content {\n  margin: 0 8px;\n  font-size: 14px;\n  background: #fff;\n}\n.first-content .col-bookingid {\n  align-self: baseline;\n  padding-left: 0;\n}\n.first-content .p-r-0 {\n  padding-right: 0;\n}\n.first-content .col-bkg-status {\n  text-align: right;\n  font-size: 12px;\n  color: #26bed6;\n  padding: 5px 5px 5px 0px;\n}\n.first-content .fly-bkg-code {\n  font-size: 12px;\n  color: #ffffff;\n  letter-spacing: -0.4px;\n  font-weight: 600;\n  padding: 4px;\n  border-radius: 2px;\n  background: #26bed6;\n}\n.first-content .f-bold {\n  font-weight: 600;\n}\n.first-content-history {\n  margin: 0 16px;\n  font-size: 14px;\n  background: #fff;\n}\n.div-payment {\n  padding: 16px 16px 24px 16px;\n}\n.div-payment .div-split-payment {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 0 16px 0;\n}\n.div-payment .div-payment-combo-flight {\n  display: flex;\n}\n.div-payment .div-payment-combo-flight .div-payment-left {\n  width: 100%;\n}\n.div-payment .div-payment-combo-flight .div-price {\n  text-align: right;\n  width: 100%;\n}\n.div-payment .div-payment-combo-flight .div-text-fee {\n  line-height: 12px;\n}\n.div-payment .text-policy {\n  text-decoration: underline;\n}\n.div-payment .text-name {\n  font-weight: 600;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n  margin-top: 12px;\n}\n.div-payment .text-name .text-green {\n  color: #26bed6;\n}\n.div-payment .text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.div-payment .text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.div-payment .text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.div-payment .total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 8px;\n  height: 50px;\n}\n.div-payment .div-btn-payment {\n  margin-top: 12px;\n}\n.div-payment .btn-payment {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 100%;\n  margin: 0;\n  font-size: 17px !important;\n}\n.div-payment .div-penalty, .div-payment .div-rules {\n  position: relative;\n  min-height: 22px;\n}\n.div-payment .div-penalty .div-label-left, .div-payment .div-rules .div-label-left {\n  float: left;\n  font-size: 14px;\n  font-weight: 300;\n}\n.div-payment .div-penalty .div-arrow-right, .div-payment .div-rules .div-arrow-right {\n  float: right;\n}\n.div-payment .div-penalty .div-arrow-right .cls-icon-arrow, .div-payment .div-rules .div-arrow-right .cls-icon-arrow {\n  font-size: 24px;\n  position: absolute;\n  right: -5px;\n  top: -2px;\n}\n.header-title {\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n.header-title .div-refresh {\n  position: absolute;\n  right: 16px;\n  top: 8px;\n}\n.header-title .div-refresh .img-refresh {\n  width: 24px;\n}\n.header-arrow {\n  margin: 3px 11px;\n}\n.label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n  padding-top: 3px;\n}\n.align-center {\n  text-align: center;\n}\n.badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  margin-top: -10%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  border-radius: 10px;\n  display: block;\n  padding: 4px 8px;\n}\n.badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n.room-class-name {\n  font-size: 18px;\n}\n.bkg-id {\n  padding-left: 4px;\n  font-size: 14px;\n  font-weight: bold;\n}\nh2 {\n  margin: 0;\n}\n.cls-avg-point {\n  margin: 8px 0px;\n}\n.support-text {\n  text-align: right;\n}\n.div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 5px 16px 5px;\n}\n.col-icon {\n  padding: 3px 0px;\n}\n.col-text {\n  padding: 2px 0px;\n}\n.col-address {\n  padding: 0;\n}\n.hidden-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.div-date-cout {\n  font-size: 14px;\n  color: #222222;\n  font-weight: bold;\n  margin-top: 8px;\n  padding-top: 0;\n}\n.icon-arrow-right {\n  text-align: right;\n  font-size: 24px;\n  padding-right: 0 !important;\n}\n.col-normaltext-nopd-top {\n  padding: 0 5px;\n  align-self: center;\n  font-size: 14px;\n  font-weight: 200;\n}\n.room-name {\n  font-size: 18px;\n  font-weight: 500;\n}\n.btn-next {\n  border: solid 1px #f79221;\n  color: #f79221;\n  background: #ffffff;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px !important;\n  font-weight: bold;\n  border-radius: 6px;\n  margin: 8px;\n  letter-spacing: -0.6px;\n}\n.img-trip-empty {\n  height: 320px;\n  text-align: center;\n}\n.img-empty {\n  padding-top: 20%;\n}\n.text-trip-empty {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n.button-trip-empty {\n  text-align: center;\n}\n.btn-trip-empty {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 90%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px !important;\n  font-weight: normal;\n  margin-top: 16px;\n}\n.history-trip {\n  align-self: center;\n  margin-right: 11px;\n}\n.label-comboname {\n  white-space: normal;\n  padding-left: 5px;\n  font-size: 18px;\n  font-weight: 500;\n}\n.label-flight-start, .label-flight-return {\n  font-size: 12px;\n  color: #4f4f4f;\n}\n.flight-start-code {\n  text-align: center;\n  font-weight: 500;\n}\n.col-nopadding-left {\n  padding: 5px 5px 5px 0px;\n}\n.combo-info {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #4f4f4f;\n}\n.combo-departure-date {\n  font-weight: normal;\n}\n.flight-from, .flight-numner {\n  color: #4f4f4f;\n}\n.img-luggage {\n  margin-right: 8px;\n}\n.card-background-page-history-trips {\n  padding: calc( env(safe-area-inset-bottom) + 54px) 0px;\n}\n.card-background-page-history-trips .text-left {\n  font-size: 13px;\n}\n.card-background-page-history-trips .label-reviews {\n  color: #26bed6;\n  font-weight: bold;\n}\n.card-background-page-history-trips .div-wrapimg {\n  position: relative;\n  height: 118px;\n  width: 110px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n.card-background-page-history-trips img {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.card-background-page-history-trips .header-title {\n  padding: 12px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  padding-right: 15%;\n}\n.card-background-page-history-trips .header-arrow {\n  margin: 3px 11px;\n}\n.card-background-page-history-trips .label-badge {\n  color: #222222;\n  font-size: 12px;\n  font-weight: 400;\n  margin-left: 3px;\n}\n.card-background-page-history-trips .badgescss {\n  position: absolute;\n  color: #ffffff;\n  z-index: 10;\n  margin-left: 84%;\n  margin-top: -10%;\n  background: rgba(0, 0, 0, 0.5);\n  border: 0.5px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  font-weight: 100;\n  display: block;\n}\n.card-background-page-history-trips .badge-md {\n  border-radius: 9px;\n  color: #fff;\n  background-color: #26bed6;\n}\n.card-background-page-history-trips .room-class-name {\n  font-size: 16px;\n  color: #003c71;\n  line-height: 18px;\n}\n.card-background-page-history-trips h2 {\n  margin: 0;\n}\n.card-background-page-history-trips .cls-avg-point {\n  margin: 8px 0px;\n}\n.card-background-page-history-trips .support-text {\n  text-align: right;\n}\n.card-background-page-history-trips .div-split {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 5px 11px 5px;\n}\n.div-split-history {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 16px 0;\n}\n.card-background-page-request-trips {\n  padding: 11px;\n}\n.header-md::after {\n  background-image: none !important;\n}\n.header-ios::after {\n  background-image: none !important;\n}\n.div-request-button {\n  position: fixed;\n  bottom: 58px;\n  width: 100%;\n}\n@media (min-height: 812px) and (max-height: 896px) {\n  .div-request-button {\n    position: fixed;\n    bottom: 88px;\n    width: 100%;\n  }\n\n  .div-empty-trip {\n    margin-top: 154px;\n  }\n}\n.col-img-historytrip {\n  padding: 5px 0;\n}\n.div-myrequesttrip {\n  padding: 11px;\n}\n@media (min-width: 300px) and (max-width: 370px) {\n  .col-mytrip-text-description, .col-historytrip-text-description, .col-requestrip-text-description {\n    left: 12px;\n  }\n\n  .btn-next {\n    font-size: 18px !important;\n    height: 48px;\n    letter-spacing: -0.5px;\n  }\n\n  .col-text-right {\n    font-size: 13px;\n  }\n}\n:host {\n  --ion-color-primary:#26bed6;\n}\nion-list {\n  padding: 0;\n}\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > .segment-button-checked {\n  border: none !important;\n  color: white !important;\n}\n::ng-deep .sc-ion-segment-ios-hion-toolbar:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button, ::ng-deep ion-toolbar .sc-ion-segment-ios-h:not(.ion-color).sc-ion-segment-ios-s > ion-segment-button {\n  border: none !important;\n}\n::ng-deep .list-ios {\n  padding: 0;\n  margin: 0;\n}\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top)*2 - 14px );\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n}\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n@media (min-width: 300px) and (max-width: 359px) {\n  .col-mytrip-text-description, .col-historytrip-text-description, .col-requestrip-text-description {\n    left: 12px;\n  }\n\n  .btn-next {\n    font-size: 14px;\n    height: 48px;\n    letter-spacing: 0, 5px;\n  }\n\n  .col-text-right {\n    font-size: 13px;\n  }\n}\n:host {\n  --ion-color-primary:#26bed6;\n}\nion-list {\n  padding: 0;\n}\n::ng-deep .ios.segment-button-layout-icon-top.ion-activatable.ion-activatable-instant.hydrated.segment-button-checked {\n  color: white !important;\n}\n::ng-deep .segment-button-checked .sp-counttext {\n  right: 10% !important;\n}\n::ng-deep .segment-button-checked .sp-counttext-his {\n  right: 20% !important;\n}\n::ng-deep .list-ios {\n  padding: 0;\n  margin: 0;\n}\n::ng-deep .sc-ion-segment-ios-h {\n  margin: 0 16px;\n}\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n}\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n::ng-deep .trip-empty p {\n  margin: 4px 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  color: black;\n  font-weight: bold;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-ios {\n  text-align: left;\n  font-size: 18px;\n  color: #222222;\n  font-weight: bold;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: left;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  color: #222222;\n  height: 60px;\n  text-align: left;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-button-inner.sc-ion-action-sheet-md {\n  justify-content: flex-start;\n  border-top: solid 1px #ccc;\n}\n::ng-deep .action-sheets-insurrance .action-sheet-title.sc-ion-action-sheet-md {\n  font-size: 18px;\n  font-weight: bold;\n}\n::ng-deep .has-claimed .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  opacity: 0.3;\n}\n@media (min-width: 414px) and (max-width: 414px) {\n  ::ng-deep .div-center {\n    width: 377px;\n  }\n}\n.div-button {\n  background-color: #ffffff !important;\n  position: absolute;\n  width: 100%;\n  bottom: calc( env(safe-area-inset-bottom) + 120px);\n}\nion-content {\n  background-color: #ffffff !important;\n}\n.trip-empty {\n  padding: 13px 16px 16px 16px;\n  height: 100%;\n}\n.trip-suggest-content {\n  border-radius: 6px;\n  box-shadow: 0px 0px 2px 1px #dedede;\n  position: relative;\n}\n.img {\n  border-radius: 6px 6px 0 0;\n  box-shadow: 0px 0px 2px 1px #dedede;\n}\n.float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n  z-index: 11;\n}\n.float-promo {\n  position: absolute;\n  top: 83px;\n  left: 12px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  width: 88%;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  z-index: 99;\n}\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.hotel-name {\n  font-size: 17px;\n  margin-top: -10px;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 310px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  letter-spacing: -0.34px;\n}\n.float-promo:before {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.grad1 {\n  position: absolute;\n  width: 100%;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  /* Standard syntax (must be last) */\n  z-index: 10;\n  bottom: 5px;\n  left: 0px;\n  opacity: 0.25;\n}\n.text-empty-title {\n  font-size: 14px;\n  color: #828282;\n  text-align: left;\n  letter-spacing: -0.2px;\n  font-weight: 300;\n  padding-bottom: 13px;\n}\n.combo-content {\n  padding: 11px 10px 13px 8px;\n}\n.combo-text {\n  font-size: 14px;\n  color: #333333;\n  text-align: left;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.btn-combo-suggest {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 95%;\n  height: 48px;\n  margin: 0 10px 0 8px;\n}\n.div-button-combo-suggest {\n  bottom: 8px;\n  position: relative;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n.div-button-combo-other {\n  padding: 20px 0;\n  color: #26bed6;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n}\n@media (min-height: 458px) and (max-height: 666px) {\n  .text-empty-title {\n    font-size: 12px;\n    color: #828282;\n    text-align: left;\n    letter-spacing: -0.2px;\n    font-weight: 300;\n    padding-bottom: 13px;\n  }\n\n  .combo-text {\n    font-size: 12px;\n    color: #333333;\n    text-align: left;\n    letter-spacing: -0.3px;\n    font-weight: 300;\n  }\n\n  .btn-combo-suggest {\n    border-color: #f79221;\n    color: #ffffff;\n    background: #f79221;\n    width: 95%;\n    height: 44px !important;\n    margin: 0 10px 0 8px;\n    font-size: 17px !important;\n    margin-top: -10px;\n  }\n\n  .div-button-combo-suggest {\n    bottom: 10px;\n  }\n\n  .trip-empty {\n    max-height: 570px;\n    height: 450px;\n  }\n}\n@media (min-height: 667px) and (max-height: 736px) {\n  .trip-empty {\n    padding: 13px 16px 16px 16px;\n    height: 100%;\n    max-height: 570px;\n  }\n\n  .div-button-combo-suggest {\n    bottom: 10px;\n  }\n}\n@media (min-height: 737px) and (max-height: 812px) {\n  .trip-empty {\n    padding: 13px 16px 16px 16px;\n    height: 100%;\n    max-height: 576px;\n  }\n}\n[nav-view-transition=“ios”][nav-view-direction=“forward”],\n[nav-view-transition=“ios”][nav-view-direction=“back”] {\n  background-color: #ffffff;\n  --background: #ffffff;\n}\n.div-insurance {\n  padding-top: 8px;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.div-insurance .lbl-hadclaimed {\n  font-size: 14px;\n  color: #828282;\n}\n.div-insurance .logo-insurance {\n  width: 36px;\n  height: 22px;\n}\n.div-insurance .cls-label-text {\n  font-size: 12px;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n.div-insurance .p-lt-4 {\n  position: absolute;\n  padding-left: 4px;\n  padding-top: 4px;\n}\n.div-insurance .item-text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n}\n.div-insurance .cls-insuranceno {\n  padding-left: 4px;\n  font-weight: bold;\n}\n.div-insurance .cls-require-text {\n  color: #26bed6;\n  text-decoration: underline;\n  padding: 8px 8px 0 8px;\n}\n.div-insurance .cls-hadclaimed {\n  font-size: 14px;\n  color: #828282;\n}\n.div-insurance .div-item-insurance {\n  padding-bottom: 16px;\n}\n.div-insurance .p-top-8 {\n  padding-top: 8px;\n}\n.div-insurance .img-hadclaimed {\n  margin: -6px 4px;\n  width: 24px;\n  height: 24px;\n}\n.div-insurance .insurrance-contact {\n  font-size: 14px;\n  position: relative;\n}\n.div-insurance .insurrance-contact .insurrance-contact-name {\n  position: relative;\n}\n.div-insurance .insurrance-contact .insurrance-contact-phone {\n  position: absolute;\n  top: 0;\n  left: 116px;\n  color: #26bed6;\n}\n.div-insurance .insurrance-contact .insurrance-contact-arrow {\n  position: absolute;\n  right: -5px;\n  top: -3px;\n}\n.div-insurance .insurrance-contact .insurrance-support-phone, .div-insurance .insurrance-contact .insurrance-detail-info {\n  padding: 10px 0;\n}\n.div-insurance .insurrance-contact .text-support-center {\n  color: #26bed6;\n  font-weight: bold;\n  padding-left: 4px;\n}\n.div-insurance .insurrance-contact .img-support {\n  padding-left: 8px;\n}\n.div-insurance .insurrance-contact .img-call {\n  right: 0px;\n}\n.div-insurance .p-bottom-8 {\n  padding-bottom: 8px;\n}\n.div-insurance .div-split-insurrance {\n  border-bottom: solid 1px #dedede;\n  opacity: 0.6;\n  margin: 11px 0;\n}\n.cls-col-popover-history {\n  height: 24px;\n}\n.cls-col-popover-history .mustClaim {\n  color: #e52822;\n}\n.popover-history {\n  float: right;\n  font-size: 44px;\n  color: #222222;\n  opacity: 0.54;\n  letter-spacing: -4.84px;\n  line-height: 18px;\n  position: absolute;\n  right: 0;\n  top: -11px;\n  padding-right: 5px;\n}\n.p-top-23 {\n  padding-top: 23px;\n}\n.text-age {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #828282;\n}\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.div-flybooking {\n  font-size: 14px;\n  min-height: 120px;\n}\n.div-flybooking .m-top-28 {\n  margin-top: 28px;\n}\n.div-flybooking .padding-5 {\n  padding: 0 8px;\n  position: relative;\n  margin-bottom: 32px;\n  padding-top: 16px;\n}\n.div-flybooking .m-top-8 {\n  margin-top: 8px;\n}\n.div-flybooking .m-11 {\n  margin: 11px 0;\n}\n.div-flybooking .b-16 {\n  bottom: 16px !important;\n}\n.div-flybooking .div-arrival {\n  margin-top: 32px;\n  min-height: 120px;\n  padding: 0 5px;\n  position: relative;\n}\n.div-flybooking .text-right {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.div-flybooking .text-departure {\n  position: relative;\n}\n.div-flybooking .logo {\n  position: absolute;\n  bottom: 0;\n  right: 24px;\n}\n.div-flybooking .div-departure, .div-flybooking .div-return {\n  position: relative;\n}\n.div-flybooking .div-departure .div-line, .div-flybooking .div-return .div-line {\n  position: absolute;\n  padding-left: 46px;\n  top: 6px;\n}\n.div-flybooking .div-departure .div-time-departure, .div-flybooking .div-return .div-time-departure {\n  width: 50px;\n}\n.div-flybooking .div-departure .div-info-departure, .div-flybooking .div-departure .div-info-return, .div-flybooking .div-return .div-info-departure, .div-flybooking .div-return .div-info-return {\n  position: absolute;\n  left: 60px;\n  top: 0;\n}\n.div-flybooking .div-departure .placeline, .div-flybooking .div-return .placeline {\n  content: \"\";\n  position: absolute;\n  height: 34px;\n  width: 1px;\n  top: 16px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 47px;\n}\n.div-flybooking .div-departure .placepoint, .div-flybooking .div-return .placepoint {\n  position: absolute;\n  top: 46%;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n  left: 44px;\n}\n.div-flybooking .div-departure .placepoint-return, .div-flybooking .div-return .placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #CCCCCC;\n  top: 6px;\n  left: 44px;\n}\n.div-flybooking .text-thin {\n  font-weight: 200;\n}\n.text-bkg-history {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.div-width-250 {\n  width: 250px;\n}\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.text-flight-title {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.div-flight-inout .img-oneway {\n  width: 12px !important;\n  margin-left: 8px;\n  top: -5px;\n}\n.div-pax {\n  padding: 0px 8px;\n}\n.div-pax .div-split {\n  margin: 11px 0px 16px 0px;\n}\n.div-pax .pax-label {\n  font-size: 18px;\n  font-weight: 600;\n}\n.div-pax .m-top-27 {\n  margin-top: 27px;\n}\n.div-pax .m-top-8 {\n  margin-top: 8px;\n}\n.div-pax .div-pax-lug {\n  position: relative;\n}\n.div-pax .div-pax-lug .pax-type {\n  font-size: 12px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  text-align: right;\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-weight: 100;\n}\n.div-pax .div-pax-lug .text-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.div-pax .div-luggest {\n  padding-top: 8px;\n  font-weight: 200;\n}\n.div-section-pax {\n  padding: 0 16px;\n}\n.div-section-pax .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n}\n.div-section-pax .text-pax {\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n}\n.div-section-pax .text-right {\n  text-align: right;\n  font-weight: 100;\n}\n::ng-deep ion-footer {\n  box-shadow: none;\n}\n.div-paymentbank .div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-paymentbank .div-text-payment .d-flex {\n  display: flex;\n}\n.div-paymentbank .div-text-payment .d-flex .d-img {\n  width: 60%;\n  margin-right: 10px;\n  align-self: center;\n}\n.div-paymentbank .div-text-payment .d-flex .cls-text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.56px;\n  text-align: left;\n  color: #222222;\n  white-space: initial;\n}\n.div-paymentbank .div-text-payment .text-copy {\n  padding-left: 8px;\n}\n.div-paymentbank .div-text-payment .text-booking {\n  color: #e52822;\n}\n.div-paymentbank .div-text-payment p {\n  display: block;\n  -webkit-margin-before: 0em;\n          margin-block-start: 0em;\n  -webkit-margin-after: 0em;\n          margin-block-end: 0em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.div-paymentbank .div-text-payment .text-warning-payment {\n  height: 32px;\n  margin: 24px 0 0;\n  padding: 8px 39px 7px;\n  background-color: rgba(254, 237, 199, 0.4);\n}\n.div-paymentbank .div-text-payment .text-payment-bank {\n  margin: 0;\n  padding: 8px;\n  background-color: #feedc7;\n}\n.div-paymentbank .div-text-otherpayment {\n  margin: 16px 8px;\n}\n.div-paymentbank .btn-paymentother {\n  text-align: center;\n  width: 100%;\n  height: 44px !important;\n  background: rgba(245, 146, 51, 0.1);\n  color: #f59233;\n  padding: 11px 0 10px 0;\n}\n.div-paymentbank .m-lr-8 {\n  margin: 0 8px;\n}\n.d-flex-later {\n  display: flex;\n  background: #feedc7;\n  padding-top: 8px;\n}\n.d-img {\n  margin-right: 10px;\n}\n.cls-text {\n  font-size: 14px;\n  letter-spacing: -0.56px;\n  white-space: normal;\n}\n.cls-textopen {\n  color: #26bed6;\n  font-size: 14px;\n  letter-spacing: -0.56px;\n}\n.mt6 {\n  margin-top: 6px;\n}\n.mt16 {\n  margin-top: 16px;\n}\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n  background: #feedc7;\n  padding-left: 8px;\n}\n.div-text-payment {\n  font-size: 14px;\n  line-height: 28px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.text-copy {\n  padding-left: 4px;\n}\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #222222;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n.text-other {\n  font-size: 14px;\n  color: #000000;\n}\n.div-btn-payment {\n  margin-top: 12px;\n}\n.btn-payment {\n  background-color: #feedc7;\n  color: #f59233;\n  width: 100%;\n  margin: 0;\n  font-size: 17px !important;\n}\n.div-payment-combo-flight {\n  display: flex;\n}\n.div-payment-combo-flight .div-payment-left {\n  width: 100%;\n}\n.div-payment-combo-flight .div-price {\n  text-align: right;\n  width: 100%;\n}\n.div-payment-combo-flight .div-text-fee {\n  line-height: 12px;\n}\n.text-name {\n  font-weight: 600;\n  font-size: 18px;\n  letter-spacing: -0.6px;\n  margin-bottom: 0;\n  margin-top: 12px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-fee {\n  margin: 2px 0px 5px 0px;\n  color: #828282;\n  letter-spacing: -0.34px;\n  font-size: 12px;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin-bottom: 0;\n  margin-top: 8px;\n  height: 50px;\n}\n.text-red {\n  color: #e52822;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpZ2h0bXl0cmlwL2ZsaWdodG15dHJpcC5wYWdlLnNjc3MiLCIvVXNlcnMvaXRkZXYvRG9jdW1lbnRzL0RldmVsb3AvT2xpdmlhX25ldyAwOTExMjAyMS9zcmMvYXBwL2ZsaWdodG15dHJpcC9mbGlnaHRteXRyaXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUVJLGVBQUE7QURBSjtBQ0NJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURDUjtBQ0NJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QURDUjtBQ0VJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FEQVI7QUNHSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBRERSO0FDS0E7RUFDSSxhQUFBO0FERko7QUNJQTtFQUNJLDJCQUFBO0FEREo7QUNHQTtFQUNJLDJCQUFBO0FEQUo7QUNFQTtFQUNJLFdBQUE7QURDSjtBQ0NBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0UsY0FBQTtBREVOO0FDQUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QURHTjtBQ0RFO0VBQ0ksV0FBQTtBRElOO0FDRkU7RUFDRSxXQUFBO0FES0o7QUNIRTtFQUNJLGlCQUFBO0FETU47QUNKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBRE9KO0FDTEU7RUFDSSxhQUFBO0VBQ0Ysc0JBQUE7RUFDQSx1QkFBQTtBRFFKO0FDTEE7RUFDSSxZQUFBO0VBQ0Esc0RBQUE7RUFDQSx3QkFBQTtBRFFKO0FDTkk7RUFDSSxtQkFBQTtBRFFSO0FDSkk7RUFDUSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QURNWjtBQ0pJO0VBQ0ksb0JBQUE7QURNUjtB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LGNBQUE7QUQvQ0oiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRteXRyaXAvZmxpZ2h0bXl0cmlwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5mbGlnaHQtbXl0cmlwLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbi5mbGlnaHQtbXl0cmlwLWhlYWRlciAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmZsaWdodC1teXRyaXAtaGVhZGVyIC5idG4taGVhZGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDMycHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgcGFkZGluZzogNnB4O1xufVxuLmZsaWdodC1teXRyaXAtaGVhZGVyIC5zcC1jb3VudHRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOCU7XG59XG4uZmxpZ2h0LW15dHJpcC1oZWFkZXIgLnNwLWNvdW50dGV4dC1oaXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNSU7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubS10b3AtNjQge1xuICBtYXJnaW4tdG9wOiA2NHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXRvcC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm0tOCB7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4udGV4dC1wYXgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC10b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXdpZHRoLTIwMCB7XG4gIHdpZHRoOiAyMDAlO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLnYtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50LCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyB7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgOTRweCkgMHB4O1xuICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LWZsaWdodC1teXRyaXAsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtZmxpZ2h0LW15dHJpcCB7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LWRlbGl2ZXJ5X3BheW1lbnQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtZGVsaXZlcnlfcGF5bWVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyMzcsIDE5OSwgMC40KTtcbiAgcGFkZGluZzogMTBweCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCAuZGl2LW15dHJpcCwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmRpdi1teXRyaXAge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5jb2wtZmxpZ2h0LW15dHJpcCwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmNvbC1mbGlnaHQtbXl0cmlwIHtcbiAgcGFkZGluZzogNXB4IDAgNXB4IDhweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5kaXYtaW1nLWxvZ28sIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtaW1nLWxvZ28ge1xuICBoZWlnaHQ6IDI0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLmRpdi1pbWctbG9nbyAuaW1nLWxvZ28sIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtaW1nLWxvZ28gLmltZy1sb2dvIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC5kaXYtaW1nLWxvZ28gLmxvZ28tdm5hLCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAuZGl2LWltZy1sb2dvIC5sb2dvLXZuYSB7XG4gIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLnRleHQtdGhpbiwgLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLnRleHQtdGhpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC50ZXh0LWhvbGQtdGlja2V0LCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAudGV4dC1ob2xkLXRpY2tldCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLnJvdy1ia2ctaWQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5yb3ctYmtnLWlkIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCAwLjUpO1xufVxuLmRpdi1mbGlnaHQtbXl0cmlwLWNvbnRlbnQgLmRpdi10aWNrZXQsIC5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtdGlja2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtZmxpZ2h0LW15dHJpcC1jb250ZW50IC50LXJpZ2h0LCAuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAudC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZGl2LWVtcHR5LXRyaXAge1xuICBtYXJnaW4tdG9wOiAxMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCwgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkLCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxO1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4uY2xzLXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4uc2VnbWVudC1idXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLml0ZW0tcm9vbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTA0cHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LXNwbGl0LWNvbG9yIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmltZy1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiAxMDRweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCB7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtY2luIHtcbiAgd2lkdGg6IDM0JTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtY2luLWNvdXQgLmRpdi1jb3V0IHtcbiAgd2lkdGg6IDMzJTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtY2luLWNvdXQgLmRpdi1kdXJhdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtbGFiZWwtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCAuZGl2LWRhdGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZGl2LWNpbi1jb3V0IC5kaXYtZGF0ZS1jb3V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmRpdi1jaW4tY291dCAubm8tYm9yZGVyIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuZC1mbGV4IC5kaXYtbGVmdCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLmQtZmxleCAuZGl2LWNlbnRlciB7XG4gIHdpZHRoOiAzMzhweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kLWZsZXggLmRpdi1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLm0tdG9wLTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAubS10b3AtMTQge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLm0tdG9wLTgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuY29sLW5vcGQtdG9wIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5pbWctY2FsbGNlbnRlciB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAuc2Vjb25kLWNvbnRlbnQge1xuICBwYWRkaW5nOiA5cHggMTFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLW15dHJpcHMgLnNlY29uZC1jb250ZW50IC5wLWxyLTUge1xuICBwYWRkaW5nOiAwIDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1teXRyaXBzIC5kaXYtZmxpZ2h0LWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwcyAudGV4dC10aWNrZXQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubS1sZi0wIHtcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXJlcXVlc3QtcGF5bWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogIzAwM2M3MTtcbiAgaGVpZ2h0OiAzMnB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZGl2LXJlcXVlc3QtcGF5bWVudCAubGJsLXJlcXVlc3QtcGF5bWVudCB7XG4gIHRvcDogN3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5tLXRvcC0yNyB7XG4gIG1hcmdpbi10b3A6IDI3cHg7XG59XG5cbi5maXJzdC1jb250ZW50IHtcbiAgbWFyZ2luOiAwIDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmZpcnN0LWNvbnRlbnQgLmNvbC1ib29raW5naWQge1xuICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuLmZpcnN0LWNvbnRlbnQgLnAtci0wIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbn1cbi5maXJzdC1jb250ZW50IC5jb2wtYmtnLXN0YXR1cyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG59XG4uZmlyc3QtY29udGVudCAuZmx5LWJrZy1jb2RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDY7XG59XG4uZmlyc3QtY29udGVudCAuZi1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmZpcnN0LWNvbnRlbnQtaGlzdG9yeSB7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kaXYtcGF5bWVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAyNHB4IDE2cHg7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1zcGxpdC1wYXltZW50IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gIG9wYWNpdHk6IDAuNjtcbiAgbWFyZ2luOiAxMXB4IDAgMTZweCAwO1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQgLmRpdi1wYXltZW50LWxlZnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LXBheW1lbnQtY29tYm8tZmxpZ2h0IC5kaXYtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wYXltZW50LWNvbWJvLWZsaWdodCAuZGl2LXRleHQtZmVlIHtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtcG9saWN5IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtcGF5bWVudCAudGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LXBheW1lbnQgLnRleHQtZmVlIHtcbiAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRpdi1wYXltZW50IC50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmRpdi1wYXltZW50IC50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LXBheW1lbnQgLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LWJ0bi1wYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtcGF5bWVudCAuYnRuLXBheW1lbnQge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudCAuZGl2LXBlbmFsdHksIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAyMnB4O1xufVxuLmRpdi1wYXltZW50IC5kaXYtcGVuYWx0eSAuZGl2LWxhYmVsLWxlZnQsIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIC5kaXYtbGFiZWwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wZW5hbHR5IC5kaXYtYXJyb3ctcmlnaHQsIC5kaXYtcGF5bWVudCAuZGl2LXJ1bGVzIC5kaXYtYXJyb3ctcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uZGl2LXBheW1lbnQgLmRpdi1wZW5hbHR5IC5kaXYtYXJyb3ctcmlnaHQgLmNscy1pY29uLWFycm93LCAuZGl2LXBheW1lbnQgLmRpdi1ydWxlcyAuZGl2LWFycm93LXJpZ2h0IC5jbHMtaWNvbi1hcnJvdyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTVweDtcbiAgdG9wOiAtMnB4O1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmhlYWRlci10aXRsZSAuZGl2LXJlZnJlc2gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDhweDtcbn1cbi5oZWFkZXItdGl0bGUgLmRpdi1yZWZyZXNoIC5pbWctcmVmcmVzaCB7XG4gIHdpZHRoOiAyNHB4O1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgcGFkZGluZy10b3A6IDNweDtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJhZGdlc2NzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tbGVmdDogODQlO1xuICBtYXJnaW4tdG9wOiAtMTAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LXdlaWdodDogMTAwO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogNHB4IDhweDtcbn1cblxuLmJhZGdlLW1kIHtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLnJvb20tY2xhc3MtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmJrZy1pZCB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNscy1hdmctcG9pbnQge1xuICBtYXJnaW46IDhweCAwcHg7XG59XG5cbi5zdXBwb3J0LXRleHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICBvcGFjaXR5OiAwLjY7XG4gIG1hcmdpbjogMTFweCA1cHggMTZweCA1cHg7XG59XG5cbi5jb2wtaWNvbiB7XG4gIHBhZGRpbmc6IDNweCAwcHg7XG59XG5cbi5jb2wtdGV4dCB7XG4gIHBhZGRpbmc6IDJweCAwcHg7XG59XG5cbi5jb2wtYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5oaWRkZW4tdGV4dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZGl2LWRhdGUtY291dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uaWNvbi1hcnJvdy1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbC1ub3JtYWx0ZXh0LW5vcGQtdG9wIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ucm9vbS1uYW1lIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uYnRuLW5leHQge1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjc5MjIxO1xuICBjb2xvcjogI2Y3OTIyMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbn1cblxuLmltZy10cmlwLWVtcHR5IHtcbiAgaGVpZ2h0OiAzMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW1nLWVtcHR5IHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cblxuLnRleHQtdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLmJ1dHRvbi10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLXRyaXAtZW1wdHkge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmhpc3RvcnktdHJpcCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufVxuXG4ubGFiZWwtY29tYm9uYW1lIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxhYmVsLWZsaWdodC1zdGFydCwgLmxhYmVsLWZsaWdodC1yZXR1cm4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uZmxpZ2h0LXN0YXJ0LWNvZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jb2wtbm9wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG59XG5cbi5jb21iby1pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5mbGlnaHQtZnJvbSwgLmZsaWdodC1udW1uZXIge1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLmltZy1sdWdnYWdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIHtcbiAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgNTRweCkgMHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLnRleHQtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5sYWJlbC1yZXZpZXdzIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDExOHB4O1xuICB3aWR0aDogMTEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIGltZyB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE1JTtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDNweCAxMXB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLmxhYmVsLWJhZGdlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5iYWRnZXNjc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxMDtcbiAgbWFyZ2luLWxlZnQ6IDg0JTtcbiAgbWFyZ2luLXRvcDogLTEwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAuYmFkZ2UtbWQge1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgLnJvb20tY2xhc3MtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xufVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMgaDIge1xuICBtYXJnaW46IDA7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwcyAuY2xzLWF2Zy1wb2ludCB7XG4gIG1hcmdpbjogOHB4IDBweDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5zdXBwb3J0LXRleHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5jYXJkLWJhY2tncm91bmQtcGFnZS1oaXN0b3J5LXRyaXBzIC5kaXYtc3BsaXQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDExcHggNXB4IDExcHggNXB4O1xufVxuXG4uZGl2LXNwbGl0LWhpc3Rvcnkge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLXJlcXVlc3QtdHJpcHMge1xuICBwYWRkaW5nOiAxMXB4O1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1pb3M6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXJlcXVlc3QtYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDU4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDgxMnB4KSBhbmQgKG1heC1oZWlnaHQ6IDg5NnB4KSB7XG4gIC5kaXYtcmVxdWVzdC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDg4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZGl2LWVtcHR5LXRyaXAge1xuICAgIG1hcmdpbi10b3A6IDE1NHB4O1xuICB9XG59XG4uY29sLWltZy1oaXN0b3J5dHJpcCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uZGl2LW15cmVxdWVzdHRyaXAge1xuICBwYWRkaW5nOiAxMXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAuY29sLW15dHJpcC10ZXh0LWRlc2NyaXB0aW9uLCAuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24sIC5jb2wtcmVxdWVzdHJpcC10ZXh0LWRlc2NyaXB0aW9uIHtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbiAgLmJ0bi1uZXh0IHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcbiAgfVxuXG4gIC5jb2wtdGV4dC1yaWdodCB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG46aG9zdCB7XG4gIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xufVxuXG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQsIDo6bmctZGVlcCBpb24tdG9vbGJhciAuc2MtaW9uLXNlZ21lbnQtaW9zLWg6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oaW9uLXRvb2xiYXI6bm90KC5pb24tY29sb3IpLnNjLWlvbi1zZWdtZW50LWlvcy1zID4gaW9uLXNlZ21lbnQtYnV0dG9uLCA6Om5nLWRlZXAgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5saXN0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKjIgLSAxNHB4ICk7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfaG9tZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfbWVzc2FnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjlweCkge1xuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiAxMDJweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLW15dHJpcC10ZXh0LWRlc2NyaXB0aW9uLCAuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24sIC5jb2wtcmVxdWVzdHJpcC10ZXh0LWRlc2NyaXB0aW9uIHtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbiAgLmJ0bi1uZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLCA1cHg7XG4gIH1cblxuICAuY29sLXRleHQtcmlnaHQge1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufVxuOmhvc3Qge1xuICAtLWlvbi1jb2xvci1wcmltYXJ5OiMyNmJlZDY7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbn1cblxuOjpuZy1kZWVwIC5pb3Muc2VnbWVudC1idXR0b24tbGF5b3V0LWljb24tdG9wLmlvbi1hY3RpdmF0YWJsZS5pb24tYWN0aXZhdGFibGUtaW5zdGFudC5oeWRyYXRlZC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNwLWNvdW50dGV4dCB7XG4gIHJpZ2h0OiAxMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuc2VnbWVudC1idXR0b24tY2hlY2tlZCAuc3AtY291bnR0ZXh0LWhpcyB7XG4gIHJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubGlzdC1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1zZWdtZW50LWlvcy1oIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAudHJpcC1lbXB0eSBwIHtcbiAgbWFyZ2luOiA0cHggMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWluc3VycmFuY2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1tZCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG46Om5nLWRlZXAgLmhhcy1jbGFpbWVkIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcbiAgOjpuZy1kZWVwIC5kaXYtY2VudGVyIHtcbiAgICB3aWR0aDogMzc3cHg7XG4gIH1cbn1cblxuLmRpdi1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMTIwcHgpO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLnRyaXAtZW1wdHkge1xuICBwYWRkaW5nOiAxM3B4IDE2cHggMTZweCAxNnB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50cmlwLXN1Z2dlc3QtY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAycHggMXB4ICNkZWRlZGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggI2RlZGVkZTtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiA4cHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODNweDtcbiAgbGVmdDogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDg4JTtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAzcHggOHB4IDBweCAxMnB4O1xuICB6LWluZGV4OiA5OTtcbn1cblxuLmZsb2F0LXByb21vLWRlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMzEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogI2ZmZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi5mbG9hdC1wcm9tbzpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5ncmFkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIC8qIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAqL1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA1cHg7XG4gIGxlZnQ6IDBweDtcbiAgb3BhY2l0eTogMC4yNTtcbn1cblxuLnRleHQtZW1wdHktdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbn1cblxuLmNvbWJvLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxMXB4IDEwcHggMTNweCA4cHg7XG59XG5cbi5jb21iby10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmJ0bi1jb21iby1zdWdnZXN0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW46IDAgMTBweCAwIDhweDtcbn1cblxuLmRpdi1idXR0b24tY29tYm8tc3VnZ2VzdCB7XG4gIGJvdHRvbTogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5kaXYtYnV0dG9uLWNvbWJvLW90aGVyIHtcbiAgcGFkZGluZzogMjBweCAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDogNDU4cHgpIGFuZCAobWF4LWhlaWdodDogNjY2cHgpIHtcbiAgLnRleHQtZW1wdHktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgfVxuXG4gIC5jb21iby10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIH1cblxuICAuYnRuLWNvbWJvLXN1Z2dlc3Qge1xuICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgIHdpZHRoOiA5NSU7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwIDEwcHggMCA4cHg7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIH1cblxuICAuZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0IHtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cblxuICAudHJpcC1lbXB0eSB7XG4gICAgbWF4LWhlaWdodDogNTcwcHg7XG4gICAgaGVpZ2h0OiA0NTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4taGVpZ2h0OiA2NjdweCkgYW5kIChtYXgtaGVpZ2h0OiA3MzZweCkge1xuICAudHJpcC1lbXB0eSB7XG4gICAgcGFkZGluZzogMTNweCAxNnB4IDE2cHggMTZweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNTcwcHg7XG4gIH1cblxuICAuZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0IHtcbiAgICBib3R0b206IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLWhlaWdodDogNzM3cHgpIGFuZCAobWF4LWhlaWdodDogODEycHgpIHtcbiAgLnRyaXAtZW1wdHkge1xuICAgIHBhZGRpbmc6IDEzcHggMTZweCAxNnB4IDE2cHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDU3NnB4O1xuICB9XG59XG5bbmF2LXZpZXctdHJhbnNpdGlvbj3igJxpb3PigJ1dW25hdi12aWV3LWRpcmVjdGlvbj3igJxmb3J3YXJk4oCdXSxcbltuYXYtdmlldy10cmFuc2l0aW9uPeKAnGlvc+KAnV1bbmF2LXZpZXctZGlyZWN0aW9uPeKAnGJhY2vigJ1dIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uZGl2LWluc3VyYW5jZSB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4uZGl2LWluc3VyYW5jZSAubGJsLWhhZGNsYWltZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1pbnN1cmFuY2UgLmxvZ28taW5zdXJhbmNlIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMjJweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5jbHMtbGFiZWwtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLnAtbHQtNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuaXRlbS10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLmNscy1pbnN1cmFuY2VubyB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5jbHMtcmVxdWlyZS10ZXh0IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBwYWRkaW5nOiA4cHggOHB4IDAgOHB4O1xufVxuLmRpdi1pbnN1cmFuY2UgLmNscy1oYWRjbGFpbWVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtaW5zdXJhbmNlIC5kaXYtaXRlbS1pbnN1cmFuY2Uge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbWctaGFkY2xhaW1lZCB7XG4gIG1hcmdpbjogLTZweCA0cHg7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IC5pbnN1cnJhbmNlLWNvbnRhY3QtbmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmluc3VycmFuY2UtY29udGFjdC1waG9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAxMTZweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IC5pbnN1cnJhbmNlLWNvbnRhY3QtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNXB4O1xuICB0b3A6IC0zcHg7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IC5pbnN1cnJhbmNlLXN1cHBvcnQtcGhvbmUsIC5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmluc3VycmFuY2UtZGV0YWlsLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4IDA7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IC50ZXh0LXN1cHBvcnQtY2VudGVyIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cbi5kaXYtaW5zdXJhbmNlIC5pbnN1cnJhbmNlLWNvbnRhY3QgLmltZy1zdXBwb3J0IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuaW5zdXJyYW5jZS1jb250YWN0IC5pbWctY2FsbCB7XG4gIHJpZ2h0OiAwcHg7XG59XG4uZGl2LWluc3VyYW5jZSAucC1ib3R0b20tOCB7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG4uZGl2LWluc3VyYW5jZSAuZGl2LXNwbGl0LWluc3VycmFuY2Uge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgb3BhY2l0eTogMC42O1xuICBtYXJnaW46IDExcHggMDtcbn1cblxuLmNscy1jb2wtcG9wb3Zlci1oaXN0b3J5IHtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNscy1jb2wtcG9wb3Zlci1oaXN0b3J5IC5tdXN0Q2xhaW0ge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cblxuLnBvcG92ZXItaGlzdG9yeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgb3BhY2l0eTogMC41NDtcbiAgbGV0dGVyLXNwYWNpbmc6IC00Ljg0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0xMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG5cbi5wLXRvcC0yMyB7XG4gIHBhZGRpbmctdG9wOiAyM3B4O1xufVxuXG4udGV4dC1hZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udi1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpdi1mbHlib29raW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAubS10b3AtMjgge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuLmRpdi1mbHlib29raW5nIC5wYWRkaW5nLTUge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAubS10b3AtOCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kaXYtZmx5Ym9va2luZyAubS0xMSB7XG4gIG1hcmdpbjogMTFweCAwO1xufVxuLmRpdi1mbHlib29raW5nIC5iLTE2IHtcbiAgYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1hcnJpdmFsIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIHBhZGRpbmc6IDAgNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZseWJvb2tpbmcgLnRleHQtcmlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLnRleHQtZGVwYXJ0dXJlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mbHlib29raW5nIC5sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyNHB4O1xufVxuLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlLCAuZGl2LWZseWJvb2tpbmcgLmRpdi1yZXR1cm4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLmRpdi1saW5lLCAuZGl2LWZseWJvb2tpbmcgLmRpdi1yZXR1cm4gLmRpdi1saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwYWRkaW5nLWxlZnQ6IDQ2cHg7XG4gIHRvcDogNnB4O1xufVxuLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlIC5kaXYtdGltZS1kZXBhcnR1cmUsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAuZGl2LXRpbWUtZGVwYXJ0dXJlIHtcbiAgd2lkdGg6IDUwcHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLmRpdi1kZXBhcnR1cmUgLmRpdi1pbmZvLWRlcGFydHVyZSwgLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlIC5kaXYtaW5mby1yZXR1cm4sIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAuZGl2LWluZm8tZGVwYXJ0dXJlLCAuZGl2LWZseWJvb2tpbmcgLmRpdi1yZXR1cm4gLmRpdi1pbmZvLXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNjBweDtcbiAgdG9wOiAwO1xufVxuLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlIC5wbGFjZWxpbmUsIC5kaXYtZmx5Ym9va2luZyAuZGl2LXJldHVybiAucGxhY2VsaW5lIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogMTZweDtcbiAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxLjVweCAjYmRiZGJkO1xuICBsZWZ0OiA0N3B4O1xufVxuLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlIC5wbGFjZXBvaW50LCAuZGl2LWZseWJvb2tpbmcgLmRpdi1yZXR1cm4gLnBsYWNlcG9pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDYlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBsZWZ0OiA0NHB4O1xufVxuLmRpdi1mbHlib29raW5nIC5kaXYtZGVwYXJ0dXJlIC5wbGFjZXBvaW50LXJldHVybiwgLmRpdi1mbHlib29raW5nIC5kaXYtcmV0dXJuIC5wbGFjZXBvaW50LXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgdG9wOiA2cHg7XG4gIGxlZnQ6IDQ0cHg7XG59XG4uZGl2LWZseWJvb2tpbmcgLnRleHQtdGhpbiB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi50ZXh0LWJrZy1oaXN0b3J5IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXdpZHRoLTI1MCB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZmxpZ2h0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1mbGlnaHQtaW5vdXQge1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTJweDtcbn1cbi5kaXYtZmxpZ2h0LWlub3V0IC5pbWctb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgdG9wOiAtNXB4O1xufVxuXG4uZGl2LXBheCB7XG4gIHBhZGRpbmc6IDBweCA4cHg7XG59XG4uZGl2LXBheCAuZGl2LXNwbGl0IHtcbiAgbWFyZ2luOiAxMXB4IDBweCAxNnB4IDBweDtcbn1cbi5kaXYtcGF4IC5wYXgtbGFiZWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXBheCAubS10b3AtMjcge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xufVxuLmRpdi1wYXggLm0tdG9wLTgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGl2LXBheCAuZGl2LXBheC1sdWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LXBheCAuZGl2LXBheC1sdWcgLnBheC10eXBlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uZGl2LXBheCAuZGl2LXBheC1sdWcgLnRleHQtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG4uZGl2LXBheCAuZGl2LWx1Z2dlc3Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4uZGl2LXNlY3Rpb24tcGF4IHtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLmRpdi1zZWN0aW9uLXBheCAuZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kaXYtc2VjdGlvbi1wYXggLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kaXYtc2VjdGlvbi1wYXggLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuOjpuZy1kZWVwIGlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC5kLWZsZXggLmQtaW1nIHtcbiAgd2lkdGg6IDYwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC5kLWZsZXggLmNscy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xufVxuLmRpdi1wYXltZW50YmFuayAuZGl2LXRleHQtcGF5bWVudCAudGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC50ZXh0LWJvb2tpbmcge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmRpdi10ZXh0LXBheW1lbnQgcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDBlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMGVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC50ZXh0LXdhcm5pbmctcGF5bWVudCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgcGFkZGluZzogOHB4IDM5cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwgMjM3LCAxOTksIDAuNCk7XG59XG4uZGl2LXBheW1lbnRiYW5rIC5kaXYtdGV4dC1wYXltZW50IC50ZXh0LXBheW1lbnQtYmFuayB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGM3O1xufVxuLmRpdi1wYXltZW50YmFuayAuZGl2LXRleHQtb3RoZXJwYXltZW50IHtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbn1cbi5kaXYtcGF5bWVudGJhbmsgLmJ0bi1wYXltZW50b3RoZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDE0NiwgNTEsIDAuMSk7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICBwYWRkaW5nOiAxMXB4IDAgMTBweCAwO1xufVxuLmRpdi1wYXltZW50YmFuayAubS1sci04IHtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLmQtZmxleC1sYXRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQ6ICNmZWVkYzc7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbi5kLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmNscy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmNscy10ZXh0b3BlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xufVxuXG4ubXQ2IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubXQxNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LXBheW1lbnQtaW5mbyB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmVlZGM3O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLmRpdi10ZXh0LXBheW1lbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cblxuLnRleHQtb3RoZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LWJ0bi1wYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmJ0bi1wYXltZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRjNztcbiAgY29sb3I6ICNmNTkyMzM7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LXBheW1lbnQtY29tYm8tZmxpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQgLmRpdi1wYXltZW50LWxlZnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQgLmRpdi1wcmljZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcGF5bWVudC1jb21iby1mbGlnaHQgLmRpdi10ZXh0LWZlZSB7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1mZWUge1xuICBtYXJnaW46IDJweCAwcHggNXB4IDBweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4udGV4dC1yZWQge1xuICBjb2xvcjogI2U1MjgyMjtcbn0iLCJcbi5mbGlnaHQtbXl0cmlwLWhlYWRlclxue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgfVxuICAgIC5idG4taGVhZGVye1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgfVxuXG4gICAgLnNwLWNvdW50dGV4dHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMTglO1xuICAgIH1cblxuICAgIC5zcC1jb3VudHRleHQtaGlze1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAyNSU7XG4gICAgfVxuXG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubS10b3AtNjR7XG4gICAgbWFyZ2luLXRvcDogNjRweCAhaW1wb3J0YW50O1xufVxuLm0tdG9wLTI0e1xuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cbi5tLTh7XG4gICAgbWFyZ2luOiA4cHg7XG59XG4udGV4dC1wYXh7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgfVxuICAudGV4dC10b3RhbC1wcmljZXtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICB9XG4gIC5kaXYtd2lkdGgtMTAwe1xuICAgICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmRpdi13aWR0aC0yMDB7XG4gICAgd2lkdGg6IDIwMCU7XG59XG4gIC50ZXh0LXJpZ2h0e1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLnRleHQtc3Vie1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICB9XG4gIC52LWFsaWduLWNlbnRlcntcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuXG4uZGl2LWZsaWdodC1teXRyaXAtY29udGVudCwuY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtaGlzdG9yeS10cmlwc3tcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgOTRweCkgMHB4O1xuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcblxuICAgIC5kaXYtZmxpZ2h0LW15dHJpcHtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRpdi1kZWxpdmVyeV9wYXltZW50e1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTQsMjM3LDE5OSwgMC40KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICAgIC5kaXYtbXl0cmlwe1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbiAgICB9XG5cbiAgICAuY29sLWZsaWdodC1teXRyaXB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwIDVweCA4cHg7XG4gICAgfVxuXG4gICAgLmRpdi1pbWctbG9nb3tcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAuaW1nLWxvZ297XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvLXZuYXtcbiAgICAgICAgICAgIGhlaWdodDogMTJweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQtdGhpbntcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cblxuICAgIC50ZXh0LWhvbGQtdGlja2V0e1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAucm93LWJrZy1pZHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLy9wYWRkaW5nOiAxMXB4IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC41KTtcbiAgICB9XG4gICAgLmRpdi10aWNrZXR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG59XG5cbi5kaXYtZW1wdHktdHJpcHtcbiAgICBtYXJnaW4tdG9wOiAxMjRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuICAgIFxuLnNlZ21lbnQtYnV0dG9uLmFjdGl2YXRlZCwgLnNlZ21lbnQtYnV0dG9uLnNlZ21lbnQtYWN0aXZhdGVkLC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICBib3JkZXItY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuLmNscy1zdHJpa2V7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG4uc2VnbWVudC1idXR0b24ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uY2FyZC1iYWNrZ3JvdW5kLXBhZ2UtbXl0cmlwc3tcbiAgICAuaXRlbS1yb29te1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwNHB4O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgIH1cbiAgICAuZGl2LXNwbGl0LWNvbG9ye1xuICAgICAgICBoZWlnaHQ6IDdweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICB9XG4gICAgLmRpdi13cmFwaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6MTA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuaW1nLWF2YXRhciB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwNHB4O1xuICAgICAgICAvL21heC13aWR0aDogMzAwcHg7XG4gICAgICAgIC8vbWF4LWhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTEycHg7XG4gICAgfVxuICAgIC5kaXYtY2luLWNvdXR7XG4gICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgLmRpdi1jaW57XG4gICAgICAgICAgICB3aWR0aDogMzQlO1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtY291dHtcbiAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9IFxuICAgICAgICAuZGl2LWR1cmF0aW9ue1xuICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kaXYtbGFiZWwtZGF0ZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtZGF0ZSB7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjY2RjZGNkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1kYXRlLWNvdXQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm5vLWJvcmRlcntcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZC1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgICAgIC5kaXYtbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1jZW50ZXJ7XG4gICAgICAgICAgICB3aWR0aDogMzM4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1yaWdodHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5tLXRvcC0ze1xuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgfVxuICAgIC5tLXRvcC0xNHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICB9XG4gICAgLm0tdG9wLTh7XG4gICAgICAgIG1hcmdpbi10b3A6OHB4O1xuICAgIH1cbiAgICAuY29sLW5vcGQtdG9we1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgICAuaW1nLWNhbGxjZW50ZXJ7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgfVxuICAgIC5zZWNvbmQtY29udGVudHtcbiAgICAgICAgcGFkZGluZzogOXB4IDExcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAucC1sci01e1xuICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWZsaWdodC1sYWJlbHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjojNGY0ZjRmO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICB9XG4gICAgLnRleHQtdGlja2V0e1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOjE0cHhcbiAgICB9XG5cbn1cblxuLm0tbGYtMHtcbiAgICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG59XG4uZGl2LXJlcXVlc3QtcGF5bWVudHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMwMDNjNzE7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cblxuICAgIC5sYmwtcmVxdWVzdC1wYXltZW50e1xuICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbn1cbi5tLXRvcC0yN3tcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xufVxuXG4uZmlyc3QtY29udGVudHtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuXG4gICAgLmNvbC1ib29raW5naWR7XG4gICAgICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxuICAgIC5wLXItMHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICB9XG4gICAgLmNvbC1ia2ctc3RhdHVze1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjojMjZiZWQ2O1xuICAgICAgICBwYWRkaW5nOiA1cHggNXB4IDVweCAwcHg7XG4gICAgfVxuICAgIC5mbHktYmtnLWNvZGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuZi1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxuLmZpcnN0LWNvbnRlbnQtaGlzdG9yeXtcbiAgICBtYXJnaW46IDAgMTZweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5kaXYtcGF5bWVudHtcbiAgICBwYWRkaW5nOiAxNnB4IDE2cHggMjRweCAxNnB4O1xuICAgIC5kaXYtc3BsaXQtcGF5bWVudHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDAgMTZweCAwO1xuICAgIH1cbiAgICAuZGl2LXBheW1lbnQtY29tYm8tZmxpZ2h0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5kaXYtcGF5bWVudC1sZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1wcmljZXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi10ZXh0LWZlZXtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXh0LXBvbGljeXtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuICAgIC50ZXh0LW5hbWVcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOjEycHg7XG4gICAgICAgICAgICAudGV4dC1ncmVlblxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtZmVle1xuICAgICAgICAgICAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LW5vdGV7XG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcbiAgICAgICAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1kYXRlXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC50b3RhbC1wcmljZXtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1idG4tcGF5bWVudHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1wYXltZW50XG4gICAgICAgIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAuZGl2LXBlbmFsdHksIC5kaXYtcnVsZXN7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMjJweDtcblxuICAgICAgICAuZGl2LWxhYmVsLWxlZnR7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1hcnJvdy1yaWdodHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcblxuICAgICAgICAgICAgLmNscy1pY29uLWFycm93e1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXItdGl0bGV7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgLmRpdi1yZWZyZXNoe1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDhweDtcblxuICAgICAgICAuaW1nLXJlZnJlc2h7XG4gICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5oZWFkZXItYXJyb3d7XG4gICAgbWFyZ2luOiAzcHggMTFweDtcbn1cbi5sYWJlbC1iYWRnZXtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6NDAwO1xuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgfVxuICAuYWxpZ24tY2VudGVye1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4uYmFkZ2VzY3NzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgei1pbmRleDogMTA7XG4gICAgbWFyZ2luLWxlZnQ6IDg0JTtcbiAgICBtYXJnaW4tdG9wOiAtMTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiA0cHggOHB4O1xufVxuLmJhZGdlLW1kIHtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cbi5yb29tLWNsYXNzLW5hbWUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ia2ctaWR7XG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMntcbiAgICBtYXJnaW46IDA7XG59XG4uY2xzLWF2Zy1wb2ludHtcbiAgICBtYXJnaW46IDhweCAwcHg7XG59XG4uc3VwcG9ydC10ZXh0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1zcGxpdHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgbWFyZ2luOiAxMXB4IDVweCAxNnB4IDVweDtcbn1cbi5jb2wtaWNvbntcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xufVxuLmNvbC10ZXh0e1xuICAgIHBhZGRpbmc6IDJweCAwcHg7XG59XG4uY29sLWFkZHJlc3N7XG4gICAgcGFkZGluZzogMDtcbn1cbi5oaWRkZW4tdGV4dHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kaXYtZGF0ZS1jb3V0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuLmljb24tYXJyb3ctcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbC1ub3JtYWx0ZXh0LW5vcGQtdG9we1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5yb29tLW5hbWV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uYnRuLW5leHRcbntcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjc5MjIxO1xuICAgIGNvbG9yOiAjZjc5MjIxO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDhweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xufVxuXG4uaW1nLXRyaXAtZW1wdHl7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW1nLWVtcHR5e1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG59XG4udGV4dC10cmlwLWVtcHR5e1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG4uYnV0dG9uLXRyaXAtZW1wdHl7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmJ0bi10cmlwLWVtcHR5e1xuICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBtYXJnaW4tdG9wOjE2cHg7XG59XG4uaGlzdG9yeS10cmlwe1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG5cbi8vLy8vLy8vLy8vLy8vY29tYm9cbi5sYWJlbC1jb21ib25hbWV7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5sYWJlbC1mbGlnaHQtc3RhcnQsIC5sYWJlbC1mbGlnaHQtcmV0dXJue1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBjb2xvcjojNGY0ZjRmO1xufVxuLmZsaWdodC1zdGFydC1jb2Rle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uY29sLW5vcGFkZGluZy1sZWZ0e1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDBweDtcbn1cbi5jb21iby1pbmZve1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICBjb2xvcjogIzRmNGY0Zjtcbn1cbi5jb21iby1kZXBhcnR1cmUtZGF0ZXtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLmZsaWdodC1mcm9tLC5mbGlnaHQtbnVtbmVye1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xufVxuLmltZy1sdWdnYWdle1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLy9TdHlsZSB0cmlwaGlzdG9yeVxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLWhpc3RvcnktdHJpcHMge1xuICAgIHBhZGRpbmc6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDU0cHgpIDBweDtcbiAgICAudGV4dC1sZWZ0e1xuICAgICAgICBmb250LXNpemU6MTNweDtcbiAgICB9XG4gICAgLmxhYmVsLXJldmlld3N7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4uZGl2LXdyYXBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6MTE4cHg7XG4gICAgd2lkdGg6IDExMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaW1nIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xufVxuLmhlYWRlci1hcnJvd3tcbiAgICBtYXJnaW46IDNweCAxMXB4O1xufVxuLmxhYmVsLWJhZGdle1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDo0MDA7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cbi5iYWRnZXNjc3Mge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBtYXJnaW4tbGVmdDogODQlO1xuICAgIG1hcmdpbi10b3A6IC0xMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi5iYWRnZS1tZCB7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG4ucm9vbS1jbGFzcy1uYW1lIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICMwMDNjNzE7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5cblxuaDJ7XG4gICAgbWFyZ2luOiAwO1xufVxuLmNscy1hdmctcG9pbnR7XG4gICAgbWFyZ2luOiA4cHggMHB4O1xufVxuLnN1cHBvcnQtdGV4dHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtc3BsaXR7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIG1hcmdpbjogMTFweCA1cHggMTFweCA1cHg7XG59XG5cbn1cblxuLmRpdi1zcGxpdC1oaXN0b3J5e1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmNhcmQtYmFja2dyb3VuZC1wYWdlLXJlcXVlc3QtdHJpcHN7XG4gICAgcGFkZGluZzogMTFweDtcbn1cbi5oZWFkZXItbWQ6OmFmdGVye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5oZWFkZXItaW9zOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XG59XG4uZGl2LXJlcXVlc3QtYnV0dG9ue1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDU4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbkBtZWRpYSAobWluLWhlaWdodDo4MTJweCkgYW5kIChtYXgtaGVpZ2h0Ojg5NnB4KXtcbiAgICAuZGl2LXJlcXVlc3QtYnV0dG9ue1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogODhweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmRpdi1lbXB0eS10cmlwe1xuICAgICAgICBtYXJnaW4tdG9wOiAxNTRweDtcbiAgICB9XG59XG5cbi5jb2wtaW1nLWhpc3Rvcnl0cmlwe1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuLmRpdi1teXJlcXVlc3R0cmlwe1xuICAgIHBhZGRpbmc6MTFweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzBweCkge1xuICAgIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24sLmNvbC1oaXN0b3J5dHJpcC10ZXh0LWRlc2NyaXB0aW9uLC5jb2wtcmVxdWVzdHJpcC10ZXh0LWRlc2NyaXB0aW9ue1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gICAgLmJ0bi1uZXh0e1xuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xuICAgIH1cbiAgICAuY29sLXRleHQtcmlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgXG4gIH1cbiAgOmhvc3R7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeTojMjZiZWQ2O1xufVxuaW9uLWxpc3R7XG4gICAgcGFkZGluZzogMDtcbn1cblxuXG4vLy9zdHlsZSBpb3Ncbjo6bmctZGVlcHtcbiAgICAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiAuc2VnbWVudC1idXR0b24tY2hlY2tlZCwgaW9uLXRvb2xiYXIgLnNjLWlvbi1zZWdtZW50LWlvcy1oOm5vdCguaW9uLWNvbG9yKS5zYy1pb24tc2VnbWVudC1pb3MtcyA+IC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2MtaW9uLXNlZ21lbnQtaW9zLWhpb24tdG9vbGJhcjpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b24sIGlvbi10b29sYmFyIC5zYy1pb24tc2VnbWVudC1pb3MtaDpub3QoLmlvbi1jb2xvcikuc2MtaW9uLXNlZ21lbnQtaW9zLXMgPiBpb24tc2VnbWVudC1idXR0b257XG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubGlzdC1pb3N7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAvL3N0eWxlIG5vdGlmeVxuICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSoyIC0gMTRweCApO1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogOHB4O1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHVuc2V0O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5pY19idXMyIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6OmJlZm9yZXtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfYnVzMi5zdmcnKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xuICAgICAgfVxuICAgICAgLmljX2hvbWUgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19ob21lLnN2ZycpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweCA7XG4gICAgICAgIC8vdG9wOjEzcHg7XG4gICAgICB9XG4gICAgICAuaWNfcGFwZXIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19wYXBlci5zdmcnKTtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHggO1xuICAgICAgfVxuICAgICAgLmljX21lc3NhZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2ZycpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTNweCA7XG4gICAgICB9XG4gICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XG4gICAgICAgYm9yZGVyLXJhZGl1czoxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6NjBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAgICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgXG4gICAgICAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OjQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICB9XG4gICAgXG4gICAgICAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OjgwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAgICAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gICAgICBib3JkZXItYm90dG9tOm5vbmU7XG4gICAgICB9XG4gICAgXG4gICAgICAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gICAgICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBtaW4taGVpZ2h0OjkwcHggIWltcG9ydGFudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAgICAgICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgICAgfVxuICAgICAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBmb250LXNpemU6MTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB9XG4gICAgXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjlweCkge1xuICAgICAgICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgbWluLWhlaWdodDo3MnB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgbWluLWhlaWdodDo0NHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5maXhoZWlnaHQtODAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgbWluLWhlaWdodDo4MHB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5maXhoZWlnaHQtOTAgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgbWluLWhlaWdodDoxMDJweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAgIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24sLmNvbC1oaXN0b3J5dHJpcC10ZXh0LWRlc2NyaXB0aW9uLC5jb2wtcmVxdWVzdHJpcC10ZXh0LWRlc2NyaXB0aW9ue1xuICAgICAgbGVmdDogMTJweDtcbiAgICB9XG4gICAgLmJ0bi1uZXh0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLDVweDtcbiAgICB9XG4gICAgLmNvbC10ZXh0LXJpZ2h0e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIFxuICB9XG4gIDpob3N0e1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6IzI2YmVkNjtcbn1cbmlvbi1saXN0e1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi8vL3N0eWxlIGlvc1xuOjpuZy1kZWVwe1xuXG4gICAgLmlvcy5zZWdtZW50LWJ1dHRvbi1sYXlvdXQtaWNvbi10b3AuaW9uLWFjdGl2YXRhYmxlLmlvbi1hY3RpdmF0YWJsZS1pbnN0YW50Lmh5ZHJhdGVkLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XG4gICAgICAgXG4gICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5zZWdtZW50LWJ1dHRvbi1jaGVja2VkIC5zcC1jb3VudHRleHR7XG4gICAgICAgIHJpZ2h0OiAxMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWQgLnNwLWNvdW50dGV4dC1oaXN7XG4gICAgICAgIHJpZ2h0OiAyMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG4gICAgLmxpc3QtaW9ze1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5zYy1pb24tc2VnbWVudC1pb3MtaHtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgfVxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC50cmlwLWVtcHR5IHB7XG4gICAgICAgIG1hcmdpbjogNHB4IDA7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLy9zdHlsZSBjaG8gaW9zXG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1pbnN1cnJhbmNlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuXG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LW1kIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2NjYztcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtaW5zdXJyYW5jZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5oYXMtY2xhaW1lZCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6NDE0cHgpe1xuICAgICAgICAuZGl2LWNlbnRlcntcbiAgICAgICAgICAgIHdpZHRoOiAzNzdweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpdi1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDEyMHB4KTtcbn1cblxuaW9uLWNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLy8gU3R5bGUgdHJpcCBzdWdnZXN0XG4udHJpcC1lbXB0eXtcbiAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTZweCAxNnB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi50cmlwLXN1Z2dlc3QtY29udGVudHtcbiAgICBib3JkZXItcmFkaXVzOjZweDtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAxcHggI2RlZGVkZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW1ne1xuICAgIGJvcmRlci1yYWRpdXM6IDZweCA2cHggMCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMnB4IDFweCAjZGVkZWRlO1xufVxuLmZsb2F0LWluZm97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogOHB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICB6LWluZGV4OiAxMTtcbiAgfVxuXG4uZmxvYXQtcHJvbW97XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogODNweDtcbiAgICBsZWZ0OiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiA4OCU7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHBhZGRpbmc6IDNweCA4cHggMHB4IDEycHg7XG4gICAgei1pbmRleDogOTk7XG4gIH1cblxuICAuZmxvYXQtcHJvbW8tZGVzY3JpcHRpb257XG4gICAgbWFyZ2luOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuXG4gIC5ob3RlbC1uYW1lXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgY29sb3I6I2ZmZjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgfVxuXG4gICAgLmZsb2F0LXByb21vOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgdG9wOiAyMnB4O1xuICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgIC5ncmFkMSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpOyAvKiBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgKi9cbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGJvdHRvbTo1cHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWVtcHR5LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbToxM3B4O1xuICAgICAgfVxuXG4gICAgICAuY29tYm8tY29udGVudHtcbiAgICAgICAgcGFkZGluZzogMTFweCAxMHB4IDEzcHggOHB4O1xuICAgICAgfVxuXG4gICAgICAuY29tYm8tdGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIH1cblxuICAgICAgLmJ0bi1jb21iby1zdWdnZXN0e1xuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDAgOHB4O1xuICAgICAgfVxuICAgICAgLmRpdi1idXR0b24tY29tYm8tc3VnZ2VzdHtcbiAgICAgICAgYm90dG9tOiA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIH1cbiAgICAgIC5kaXYtYnV0dG9uLWNvbWJvLW90aGVye1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICBmb250LXNpemU6MTdweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OjQ1OHB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2NnB4KSB7XG4gICAgICAgIC50ZXh0LWVtcHR5LXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbWJvLXRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1jb21iby1zdWdnZXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDAgOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWJ1dHRvbi1jb21iby1zdWdnZXN0e1xuICAgICAgICAgICAgYm90dG9tOjEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaXAtZW1wdHkge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTcwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBtZWRpYSAobWluLWhlaWdodDo2NjdweCkgYW5kIChtYXgtaGVpZ2h0OiA3MzZweCkge1xuICAgICAgICAudHJpcC1lbXB0eSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTZweCAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTcwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1idXR0b24tY29tYm8tc3VnZ2VzdHtcbiAgICAgICAgICAgIGJvdHRvbToxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWluLWhlaWdodDo3MzdweCkgYW5kIChtYXgtaGVpZ2h0OiA4MTJweCkge1xuICAgICAgICAudHJpcC1lbXB0eSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxM3B4IDE2cHggMTZweCAxNnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogNTc2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbi8vLy9GaXggbOG7l2kgbcOgbiBiYWNrZ3JvdW5kIGLhu4sgxJFlbiB0csOqbiBpb3MgMTFcbltuYXYtdmlldy10cmFuc2l0aW9uPeKAnGlvc+KAnV1bbmF2LXZpZXctZGlyZWN0aW9uPeKAnGZvcndhcmTigJ1dLFxuW25hdi12aWV3LXRyYW5zaXRpb2494oCcaW9z4oCdXVtuYXYtdmlldy1kaXJlY3Rpb2494oCcYmFja+KAnV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4kY29udGVudC1pb3MtdHJhbnNpdGlvbi1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uZGl2LWluc3VyYW5jZXtcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICBcbiAgICAubGJsLWhhZGNsYWltZWR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC5sb2dvLWluc3VyYW5jZXtcbiAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICB9XG4gICAgLmNscy1sYWJlbC10ZXh0e1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgIFxuICAgIH1cbiAgICAucC1sdC00e1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIH1cbiAgICAuaXRlbS10ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuICAgIC5jbHMtaW5zdXJhbmNlbm97XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmNscy1yZXF1aXJlLXRleHR7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweCAwIDhweDtcbiAgICB9XG4gICAgLmNscy1oYWRjbGFpbWVke1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAuZGl2LWl0ZW0taW5zdXJhbmNle1xuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5wLXRvcC04e1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAuaW1nLWhhZGNsYWltZWR7XG4gICAgICBtYXJnaW46IC02cHggNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgLmluc3VycmFuY2UtY29udGFjdHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLmluc3VycmFuY2UtY29udGFjdC1uYW1le1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmluc3VycmFuY2UtY29udGFjdC1waG9uZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDExNnB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIH1cbiAgICAgICAgLmluc3VycmFuY2UtY29udGFjdC1hcnJvd3tcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgICAgdG9wOiAtM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5pbnN1cnJhbmNlLXN1cHBvcnQtcGhvbmUsIC5pbnN1cnJhbmNlLWRldGFpbC1pbmZve1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1zdXBwb3J0LWNlbnRlcntcbiAgICAgICAgICBjb2xvcjogIzI2YmVkNjsgXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1zdXBwb3J0e1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1jYWxse1xuICAgICAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucC1ib3R0b20tOHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG4gICAgLmRpdi1zcGxpdC1pbnN1cnJhbmNle1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICBtYXJnaW46IDExcHggMDtcbiAgICAgIH1cbn1cbi8vc3R5bGUgcG9wb3Zlci1oaXN0b3J5XG4uY2xzLWNvbC1wb3BvdmVyLWhpc3Rvcnl7XG4gIGhlaWdodDogMjRweDtcblxuICAubXVzdENsYWlte1xuICAgICAgY29sb3I6ICNlNTI4MjI7XG4gIH1cbn1cbi5wb3BvdmVyLWhpc3Rvcnl7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiA0NHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgb3BhY2l0eTogMC41NDtcbiAgbGV0dGVyLXNwYWNpbmc6IC00Ljg0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IC0xMXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG59XG4ucC10b3AtMjN7XG4gICAgcGFkZGluZy10b3A6MjNweDtcbn1cbi50ZXh0LWFnZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLnYtYWxpZ24tY2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXYtZmx5Ym9va2luZ3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG5cbiAgICAubS10b3AtMjh7XG4gICAgICAgIG1hcmdpbi10b3A6MjhweDtcbiAgICB9XG4gICAgLnBhZGRpbmctNXtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzJweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5tLXRvcC04e1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICAgIC5tLTExe1xuICAgICAgICBtYXJnaW46IDExcHggMDtcbiAgICB9XG4gICAgLmItMTZ7XG4gICAgICAgIGJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWFycml2YWx7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICAudGV4dC1yaWdodHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH1cbiAgICAudGV4dC1kZXBhcnR1cmV7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgXG4gICAgfVxuICAgIC5sb2dve1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgcmlnaHQ6IDI0cHg7XG4gICAgfVxuICAgIC5kaXYtZGVwYXJ0dXJlLCAuZGl2LXJldHVybntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIFxuICAgICAgICAuZGl2LWxpbmV7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQ2cHg7XG4gICAgICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRpbWUtZGVwYXJ0dXJle1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1pbmZvLWRlcGFydHVyZSwgLmRpdi1pbmZvLXJldHVybntcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDYwcHg7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBsYWNlbGluZVxuICAgICAgICB7ICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICB0b3A6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIDEuNXB4ICNiZGJkYmQ7XG4gICAgICAgICAgICBsZWZ0OiA0N3B4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGFjZXBvaW50e1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA0NiU7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICAgICAgbGVmdDogNDRweDtcbiAgICAgICAgfVxuICAgICAgICAucGxhY2Vwb2ludC1yZXR1cm57XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICAgICAgdG9wOiA2cHg7XG4gICAgICAgICAgICBsZWZ0OiA0NHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC50ZXh0LXRoaW57XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxufVxuXG4udGV4dC1ia2ctaGlzdG9yeXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LXdpZHRoLTI1MHtcbiAgICB3aWR0aDogMjUwcHg7XG59XG4udGV4dC1mbGlnaHQtZGF0ZXRpbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIFxuXG4udGV4dC1mbGlnaHQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG4gIC5kaXYtZmxpZ2h0LWlub3V0e1xuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuaW1nLWZsaWdodC1pbm91dHtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogLTJweDtcbiAgICB9XG5cbiAgICAuaW1nLW9uZXdheXtcbiAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgfVxuICB9XG4gIFxuXG4uZGl2LXBheHtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgbWFyZ2luOiAxMXB4IDBweCAxNnB4IDBweDtcbiAgICB9XG5cbiAgICAucGF4LWxhYmVse1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5tLXRvcC0yN3tcbiAgICAgICAgbWFyZ2luLXRvcDoyN3B4O1xuICAgIH1cbiAgICAubS10b3AtOHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIH1cbiAgICAuZGl2LXBheC1sdWd7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLnBheC10eXBle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGV4dC1yaWdodHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAuZGl2LWx1Z2dlc3R7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxufVxuXG4vLy8vL1xuLmRpdi1zZWN0aW9uLXBheHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG5cbiAgICAuZGl2LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cblxuICAgIC50ZXh0LXBheHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG5cbiAgICAudGV4dC1yaWdodHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgfVxufVxuXG46Om5nLWRlZXB7XG4gICAgaW9uLWZvb3RlciB7XG4gICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuLmRpdi1wYXltZW50YmFua3tcbiBcbiAgICAuZGl2LXRleHQtcGF5bWVudHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG4gICAgLmQtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAuZC1pbWd7XG4gICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNscy10ZXh0e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41NnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC50ZXh0LWNvcHl7XG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWJvb2tpbmd7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW07XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbTtcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xuICAgICAgfVxuXG4gICAgICAudGV4dC13YXJuaW5nLXBheW1lbnR7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgbWFyZ2luOiAyNHB4IDAgMDtcbiAgICAgICAgcGFkZGluZzogOHB4IDM5cHggN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NCwyMzcsMTk5LCAwLjQpO1xuICAgICAgfVxuXG4gICAgICAudGV4dC1wYXltZW50LWJhbmt7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZGM3O1xuICAgICAgfVxuXG4gICAgIFxuICAgIFxuICAgIH1cbiAgIFxuICAgIC5kaXYtdGV4dC1vdGhlcnBheW1lbnR7XG4gICAgICAgIG1hcmdpbjogMTZweCA4cHg7XG4gICAgfVxuXG4gICAgLmJ0bi1wYXltZW50b3RoZXJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsMTQ2LDUxLCAwLjEpO1xuICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgICBwYWRkaW5nOiAxMXB4IDAgMTBweCAwO1xuICAgIH0gICBcbiAgICAubS1sci04e1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgIH1cbn1cbi5kLWZsZXgtbGF0ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kOiAjZmVlZGM3O1xuICAgIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZC1pbWd7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNscy10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLmNscy10ZXh0b3Blblxue1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTZweDtcbn1cbi5tdDZcbntcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ubXQxNlxue1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG4udGV4dC1wYXltZW50LWluZm97XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQ6ICNmZWVkYzc7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LXRleHQtcGF5bWVudHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuXG59XG4udGV4dC1jb3B5e1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xufVxuLnRleHQtYm9sZHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuLnRleHQtb3RoZXJ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1idG4tcGF5bWVudHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLmJ0bi1wYXltZW50XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZWRjNztcbiAgICBjb2xvcjogI2Y1OTIzMztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXBheW1lbnQtY29tYm8tZmxpZ2h0e1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZGl2LXBheW1lbnQtbGVmdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kaXYtcHJpY2V7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRpdi10ZXh0LWZlZXtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XG4gICAgfVxufVxuLnRleHQtbmFtZVxue1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gICAgbWFyZ2luLWJvdHRvbTowO1xuICAgIG1hcmdpbi10b3A6MTJweDtcbiAgICAudGV4dC1ncmVlblxuICAgIHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICB9XG59XG4udGV4dC1mZWV7XG4gICAgbWFyZ2luOiAycHggMHB4IDVweCAwcHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLnRleHQtbm90ZXtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBjb2xvcjojODI4MjgyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi50ZXh0LWRhdGVcbntcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4XG59XG5cbi50b3RhbC1wcmljZXtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLnRleHQtcmVke1xuICAgIGNvbG9yOiAjZTUyODIyXG59Il19 */"

/***/ }),

/***/ "./src/app/flightmytrip/flightmytrip.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightmytrip/flightmytrip.page.ts ***!
  \***************************************************/
/*! exports provided: FlightmytripPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightmytripPage", function() { return FlightmytripPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");












let FlightmytripPage = class FlightmytripPage {
    constructor(navCtrl, gf, _flightService, modalCtrl, toastCtrl, zone, storage, valueGlobal, clipboard, activityService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this.clipboard = clipboard;
        this.activityService = activityService;
        this.tabflight = 1;
        this.hasloaddata = false;
        this.nextflightcounttext = '';
        this.historyflightcounttext = '';
        this.listAirport = [];
        jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
        this.storage.get('listmytrips').then(data => {
            if (data) {
                this.loadMytrip(data);
            }
            else {
                this.getdata(null);
            }
        });
        if (this._flightService.listAirport) {
            this.listAirport = this._flightService.listAirport;
        }
        else {
            this.storage.get("listAirport").then((data) => {
                if (!data) {
                    this.loadLocation();
                }
                else {
                    this.listAirport = data;
                    this._flightService.listAirport = data;
                }
            });
        }
    }
    ngOnInit() {
        this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            if (data == 2) {
                this.zone.run(() => {
                    this.storage.get('listmytrips').then(data => {
                        if (data) {
                            this.loadMytrip(data);
                        }
                        else {
                            this.getdata(null);
                        }
                    });
                });
            }
        });
    }
    loadLocation() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
            if (error) {
                error.page = "searchhotel";
                error.func = "getItems";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.zone.run(() => {
                    se.listAirport = [...result];
                    se._flightService.listAirport = [...result];
                });
            }
        });
    }
    Selecttab(value) {
        this.zone.run(() => {
            this.tabflight = value;
        });
    }
    refreshData() {
        var se = this;
        se.listMyTrips = [];
        se.listHistoryTrips = [];
        se.hasloaddata = false;
        se.mytripcount = 0;
        se.historyflightcount = 0;
        se.nextflightcounttext = "";
        se.historyflightcounttext = "";
        se.getdata(null);
    }
    getdata(token) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            se.loginuser = auth_token;
            console.log(auth_token);
            if (auth_token || token) {
                var text = "Bearer " + (token ? token : auth_token);
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('deviceToken').then((devicetoken) => {
                                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                    setTimeout(() => {
                                        se.getdatanewtoken(token);
                                    }, 100);
                                });
                            });
                        });
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                let lstTrips = JSON.parse(body);
                                se.storage.get('listmytrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listmytrips').then(() => {
                                            se.storage.set('listmytrips', lstTrips);
                                        });
                                    }
                                    else {
                                        se.storage.set('listmytrips', lstTrips);
                                    }
                                });
                                se.loadMytrip(lstTrips);
                            });
                        }
                        else {
                            if (response.statusCode != 200) {
                                se.listMyTrips = [];
                                se.listHistoryTrips = [];
                                se.hasloaddata = true;
                                se.mytripcount = 0;
                                se.historyflightcount = 0;
                                se.nextflightcounttext = "";
                                se.historyflightcounttext = "";
                            }
                        }
                    }
                });
            }
            else {
                se.hasloaddata = true;
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.mytripcount = 0;
                se.historyflightcount = 0;
                se.nextflightcounttext = "";
                se.historyflightcounttext = "";
            }
        });
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 500);
    }
    getdatanewtoken(token) {
        var se = this;
        se.loginuser = token;
        console.log(token);
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                headers: {
                    'accept': 'application/json',
                    'content-type': 'application/json-patch+json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
                if (error) {
                    error.page = "mytrips";
                    error.func = "getdata";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        se.zone.run(() => {
                            let lstTrips = JSON.parse(body);
                            se.storage.get('listmytrips').then(data => {
                                if (data) {
                                    se.storage.remove('listmytrips').then(() => {
                                        se.storage.set('listmytrips', lstTrips);
                                    });
                                }
                                else {
                                    se.storage.set('listmytrips', lstTrips);
                                }
                            });
                            se.loadMytrip(lstTrips);
                        });
                    }
                    else {
                        if (response.statusCode != 200) {
                            se.listMyTrips = [];
                            se.listHistoryTrips = [];
                            se.hasloaddata = true;
                            se.mytripcount = 0;
                            se.historyflightcount = 0;
                            se.nextflightcounttext = "";
                            se.historyflightcounttext = "";
                        }
                    }
                }
            });
        }
        else {
            se.hasloaddata = true;
            se.listMyTrips = [];
            se.listHistoryTrips = [];
            se.mytripcount = 0;
            se.historyflightcount = 0;
            se.nextflightcounttext = "";
            se.historyflightcounttext = "";
        }
        setTimeout(() => {
            if (se.myloader) {
                se.myloader.dismiss();
            }
        }, 500);
    }
    goback() {
        this.zone.run(() => {
            this._flightService.itemMenuFlightClick.emit(1);
            this._flightService.itemTabFlightActive.emit(1);
        });
    }
    loadMytrip(listtrips) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            se.loginuser = auth_token;
            if (auth_token) {
                se.mytripcount = 0;
                se.listMyTrips = [];
                se.historyflightcount = 0;
                se.listHistoryTrips = [];
                let lstTrips = listtrips;
                if (lstTrips.tripFuture.length > 0) {
                    lstTrips.tripFuture.forEach(element => {
                        if (element.flight_ticket_info && element.flight_ticket_info.indexOf("VXR") != -1) {
                            element.booking_type = "COMBO_VXR";
                        }
                        if (element.payment_status != 3 && element.payment_status != -2) {
                            if (element.avatar) {
                                let urlavatar = element.avatar.substring(0, element.avatar.length - 4);
                                let tail = element.avatar.substring(element.avatar.length - 4, element.avatar.length);
                                element.avatar = urlavatar + "-" + "104x104" + tail;
                            }
                            if (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1) {
                                element.totalpricedisplay = se.gf.convertNumberToString(element.amount_after_tax);
                                if (element.payment_status == 0 && element.delivery_payment_date) {
                                    let diffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date), 'minutes');
                                    if (diffminutes <= 0) {
                                        let hours = Math.floor(diffminutes * (-1) / 60);
                                        let minutes = diffminutes * (-1) - (hours * 60);
                                        if (hours < 10) {
                                            hours = hours != 0 ? "0" + hours : "0";
                                        }
                                        if (minutes < 10) {
                                            minutes = "0" + minutes;
                                        }
                                        element.delivery_payment_date_display = "Hạn thanh toán trước " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("HH:mm") + " " + se.gf.getDayOfWeek(element.delivery_payment_date).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("MM") + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.delivery_payment_date).format("YYYY");
                                        if (!(element.pay_method == 3 || element.pay_method == 51)) {
                                            var obj = se.gf.getbank(element.pay_method);
                                            element.urlimgbank = obj.urlimgbank;
                                            element.textbank = obj.textbank;
                                            element.accountNumber = obj.accountNumber;
                                            element.bankName = obj.bankName;
                                            element.url = obj.url;
                                        }
                                        else if (element.pay_method == 3) {
                                            element.payment_info = JSON.parse(element.payment_info);
                                            element.PaymentCode = element.payment_info.PaymentCode;
                                        }
                                    }
                                }
                                element.checkInDisplay = se.gf.getDayOfWeek(element.checkInDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).format("MM");
                                element.checkOutDisplay = se.gf.getDayOfWeek(element.checkOutDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkOutDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(element.checkOutDate).format("MM");
                                element.flightFrom = element.bookingsComboData[0].flightFrom;
                                element.flightTo = element.bookingsComboData[0].flightTo;
                                element.departAirport = se.getAirportByCode(element.bookingsComboData[0].departCode);
                                element.returnAirport = se.getAirportByCode(element.bookingsComboData[0].arrivalCode);
                                se.textDeparture = se.getDayOfWeek(element.bookingsComboData[0].departureDate) + ', ' + element.bookingsComboData[0].departureDate;
                                se.textRegionDepart = se.getRegionByCode(element.bookingsComboData[0].departCode);
                                se.textRegionReturn = se.getRegionByCode(element.bookingsComboData[0].arrivalCode);
                                se.textAirpotDepart = se.getAirpot(element.bookingsComboData[0].departCode);
                                se.textAirpotReturn = se.getAirpot(element.bookingsComboData[0].arrivalCode);
                                let idxlug = 0;
                                element.bookingsComboData.forEach(el => {
                                    if (el.airlineName.indexOf('Vietnam Airlines') != -1) {
                                        if (el.flightNumner.indexOf(',') != -1) {
                                            let fnstring = el.flightNumner.split(',')[0].trim();
                                            let fn = fnstring.substring(2, el.flightNumner.length) * 1;
                                            if (fn >= 6000) {
                                                el.operatedBy = "Khai thác bởi Pacific Airlines";
                                            }
                                        }
                                        else {
                                            let fn = el.flightNumner.substring(2, el.flightNumner.length) * 1;
                                            if (fn >= 6000) {
                                                el.operatedBy = "Khai thác bởi Pacific Airlines";
                                            }
                                        }
                                    }
                                    if (el.passengers && el.passengers.length > 0) {
                                        for (let index = 0; index < el.passengers.length; index++) {
                                            el.passengers[index].arrlug = [];
                                        }
                                        for (let index = 0; index < el.passengers.length; index++) {
                                            const elementlug = el.passengers[index];
                                            let departElementLug = null;
                                            if (idxlug == 1) {
                                                departElementLug = element.bookingsComboData[idxlug - 1].passengers;
                                            }
                                            if (elementlug.hanhLy && elementlug.hanhLy.indexOf(':') == -1 && (elementlug.hanhLy.replace('kg', '')) * 1 > 0) {
                                                if (idxlug == 1) {
                                                    if (departElementLug) {
                                                        let itemfilter = departElementLug.filter((l) => { return l.arrlug && l.name == elementlug.name; });
                                                        if (itemfilter && itemfilter.length > 0) {
                                                            itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                        }
                                                        else {
                                                            if (elementlug.seatNumber) {
                                                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                    }
                                                }
                                                else {
                                                    if (elementlug.arrlug.length > 0) {
                                                        let itemfilter = elementlug.arrlug.filter((l) => { return l.paxname == elementlug.name; });
                                                        if (itemfilter && itemfilter.length > 0) {
                                                            itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                        }
                                                        else {
                                                            if (elementlug.seatNumber) {
                                                                itemfilter[0].arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: "", lugprice: 0, seatnumber: elementlug.seatNumber });
                                                            }
                                                        }
                                                    }
                                                    else {
                                                        elementlug.arrlug.push({ lugname: el.departCode + " - " + el.arrivalCode, lugweight: elementlug.hanhLy, lugprice: elementlug.giaTienHanhLy, seatnumber: elementlug.seatNumber });
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    idxlug++;
                                });
                                if (element.bookingsComboData.length > 1) {
                                    se.textReturn = se.getDayOfWeek(element.bookingsComboData[1].departureDate) + ', ' + element.bookingsComboData[1].departureDate;
                                    se.textArrivalRegionDepart = se.getRegionByCode(element.bookingsComboData[1].departCode);
                                    se.textArrivalRegionReturn = se.getRegionByCode(element.bookingsComboData[1].arrivalCode);
                                    se.textAirpotArrivalDepart = se.getAirpot(element.bookingsComboData[1].departCode);
                                    se.textAirpotArrivalReturn = se.getAirpot(element.bookingsComboData[1].arrivalCode);
                                }
                                if (element.bookingsComboData && element.bookingsComboData[0].passengers && element.bookingsComboData[0].passengers.length > 0) {
                                    element.adult = 0;
                                    element.child = 0;
                                    element.infant = 0;
                                    element.bookingsComboData[0].passengers.forEach((elementlug, index) => {
                                        let yearold = 18;
                                        if (elementlug.dob) {
                                            let arr = elementlug.dob.split('/');
                                            let newdob = new Date(arr[2], arr[1] - 1, arr[0]);
                                            yearold = moment__WEBPACK_IMPORTED_MODULE_8__(element.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(newdob), 'years');
                                        }
                                        elementlug.isAdult = yearold > 12 ? true : false;
                                        if (elementlug.isAdult) {
                                            element.adult += 1;
                                        }
                                        else {
                                            if (yearold < 2) {
                                                element.infant += 1;
                                                elementlug.isInfant = true;
                                            }
                                            else {
                                                element.child += 1;
                                            }
                                        }
                                        if (elementlug.hanhLy && elementlug.hanhLy.length > 0 && elementlug.hanhLy.indexOf(':') != -1) {
                                            elementlug.hanhLy = elementlug.hanhLy.replace(/\n/ig, ':');
                                            let arrlug = elementlug.hanhLy.split(':');
                                            elementlug.arrlug = [];
                                            if (arrlug && arrlug.length > 0) {
                                                let idx = 0;
                                                arrlug.forEach(lug => {
                                                    if (idx > 0) {
                                                        let arrlugname = lug;
                                                        if (arrlugname.length > 4) {
                                                            arrlugname = arrlugname.substring(0, 4);
                                                        }
                                                        let lugweight = arrlugname.substring(0, 2);
                                                        if (idx == 1 && lugweight > 0) {
                                                            elementlug.arrlug.push({ lugname: element.bookingsComboData[0].departCode + " - " + element.bookingsComboData[0].arrivalCode, lugweight: arrlugname });
                                                        }
                                                        else if (idx == 3 && lugweight > 0) {
                                                            elementlug.arrlug.push({ lugname: element.bookingsComboData[0].arrivalCode + " - " + element.bookingsComboData[0].departCode, lugweight: arrlugname });
                                                        }
                                                    }
                                                    idx++;
                                                });
                                            }
                                        }
                                    });
                                }
                            }
                            if (element.delivery_payment_date) {
                                let arrpaymentdate = element.delivery_payment_date.split(" ");
                                let hour = '', day = '';
                                let arrday;
                                if (arrpaymentdate && arrpaymentdate.length > 1) {
                                    let arrhour = arrpaymentdate[1].substring(0, 5).split(":");
                                    if (arrhour && arrhour.length > 0) {
                                        hour = arrhour[0].toString() + "h" + arrhour[1].toString();
                                    }
                                    arrday = arrpaymentdate[0].split('-');
                                    if (arrday && arrday.length > 0) {
                                        day = arrday[2].toString() + "-" + arrday[1].toString();
                                    }
                                }
                                element.deliveryPaymentDisplay = "Trước " + hour + ", " + day;
                                let arrhours = arrpaymentdate[1].split(":");
                                let today = new Date();
                                let d = new Date(Number(arrday[0]), Number(arrday[1]) - 1, Number(arrday[2]), Number(arrhours[0]), Number(arrhours[1]), Number(arrhours[2]));
                                let diffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(d).diff(today, 'minutes');
                                if (diffminutes < 0) {
                                    element.deliveryPaymentDisplay = "";
                                }
                                let hours = Math.round(diffminutes / 60);
                                let minutes = diffminutes - (hours * 60);
                                element.paymentBefore = hours + "h" + minutes + "'";
                                if (element.extra_guest_info) {
                                    let arrpax = element.extra_guest_info.split('|');
                                    if (arrpax && arrpax.length > 1 && arrpax[1] > 0) {
                                        element.paxDisplay = arrpax[0].toString() + " người lớn, " + arrpax[1].toString() + " trẻ em";
                                    }
                                    else if (arrpax && arrpax.length > 1 && arrpax[1] == 0) {
                                        element.paxDisplay = arrpax[0].toString() + " người lớn";
                                    }
                                }
                                if (element.amount_after_tax) {
                                    element.priceShow = element.amount_after_tax.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
                                }
                            }
                            element.isRequestTrip = false;
                            if (element.booking_id.indexOf("FLY") != -1 || element.booking_id.indexOf("VMB") != -1) {
                                se.listMyTrips.push(element);
                                se.mytripcount++;
                                se.nextflightcounttext = "(" + se.mytripcount + ")";
                            }
                        }
                    });
                }
                if (lstTrips.tripHistory.length > 0) {
                    lstTrips.tripHistory.forEach(elementHis => {
                        if (elementHis.avatar) {
                            let urlavatar = elementHis.avatar.substring(0, elementHis.avatar.length - 4);
                            let tail = elementHis.avatar.substring(elementHis.avatar.length - 4, elementHis.avatar.length);
                            elementHis.avatar157 = urlavatar + "-" + "104x157" + tail;
                            elementHis.avatar104 = urlavatar + "-" + "104x104" + tail;
                            elementHis.avatar110 = urlavatar + "-" + "110x118" + tail;
                        }
                        else {
                            elementHis.avatar110 = "//cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-110x118.jpg";
                        }
                        if (elementHis.booking_id.indexOf("FLY") != -1 || elementHis.booking_id.indexOf("VMB") != -1) {
                            elementHis.checkInDisplay = se.gf.getDayOfWeek(elementHis.checkInDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkInDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkInDate).format("MM");
                            elementHis.checkOutDisplay = se.gf.getDayOfWeek(elementHis.checkOutDate).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkOutDate).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(elementHis.checkOutDate).format("MM");
                            elementHis.flightFrom = elementHis.bookingsComboData[0].flightFrom;
                            elementHis.flightTo = elementHis.bookingsComboData[0].flightTo;
                            elementHis.departAirport = se.getAirportByCode(elementHis.bookingsComboData[0].departCode);
                            elementHis.returnAirport = se.getAirportByCode(elementHis.bookingsComboData[0].arrivalCode);
                            elementHis.roundTrip = elementHis.bookingsComboData.length > 1 ? true : false;
                            if (elementHis.bookingsComboData && elementHis.bookingsComboData[0].passengers && elementHis.bookingsComboData[0].passengers.length > 0) {
                                elementHis.bookingsComboData[0].passengers.forEach((elementHisLug, index) => {
                                    let yearold = 18;
                                    if (elementHisLug.dob) {
                                        let arr = elementHisLug.dob.split('/');
                                        let newdate = new Date(arr[2], arr[1], arr[0]);
                                        yearold = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(newdate), 'years');
                                    }
                                    elementHisLug.isAdult = yearold > 12 ? true : false;
                                    if (elementHisLug.hanhLy && elementHisLug.hanhLy.length > 0) {
                                        let arrlug = elementHisLug.hanhLy.split(':');
                                        elementHisLug.arrlug = [];
                                        if (arrlug && arrlug.length > 0) {
                                            let idx = 0;
                                            arrlug.forEach(lug => {
                                                if (idx > 0) {
                                                    let arrlugname = lug;
                                                    if (arrlugname.length > 4) {
                                                        arrlugname = arrlugname.substring(0, 4);
                                                    }
                                                    if (idx == 1) {
                                                        elementHisLug.arrlug.push({ lugname: elementHis.bookingsComboData[0].flightFrom + " - " + elementHis.bookingsComboData[0].flightTo, lugweight: arrlugname });
                                                    }
                                                    else if (elementHis.bookingsComboData.length > 1 && idx == 2) {
                                                        elementHisLug.arrlug.push({ lugname: elementHis.bookingsComboData[1].flightFrom + " - " + elementHis.bookingsComboData[1].flightTo, lugweight: arrlugname });
                                                    }
                                                }
                                                idx++;
                                            });
                                        }
                                    }
                                });
                            }
                            se.listHistoryTrips.push(elementHis);
                            se.historyflightcount++;
                        }
                    });
                    se.historyflightcounttext = "(" + se.historyflightcount + ")";
                }
                se.sortMytrip();
                se.hasloaddata = true;
                se.currentTrip = 0;
                if (se.listMyTrips && se.listMyTrips.length > 0) {
                    se.hasdata = true;
                    let firstitem = se.listMyTrips[0];
                    if (se._flightService.bookingCodePayment) {
                        let itempayment = se.listMyTrips.filter((itemf) => { return itemf.booking_id == se._flightService.bookingCodePayment; });
                        if (itempayment && itempayment.length > 0) {
                            se.setCheckInCheckOutInfo(itempayment[0]);
                        }
                        else {
                            se.setCheckInCheckOutInfo(firstitem);
                        }
                        se._flightService.bookingCodePayment = "";
                    }
                    else {
                        se.setCheckInCheckOutInfo(firstitem);
                    }
                }
            }
            else {
                se.hasloaddata = true;
                se.listMyTrips = [];
                se.listHistoryTrips = [];
                se.mytripcount = 0;
                se.historyflightcount = 0;
                se.nextflightcounttext = "";
                se.historyflightcounttext = "";
            }
        });
    }
    sortMytrip() {
        var se = this;
        if (se.listMyTrips && se.listMyTrips.length > 0) {
            se.zone.run(() => se.listMyTrips.sort(function (a, b) {
                let direction = -1;
                if (!a['isRequestTrip'] && !b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['checkInDate']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['checkInDate']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else if (!a['isRequestTrip'] && b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['checkInDate']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['start_date']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else if (a['isRequestTrip'] && !b['isRequestTrip']) {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['start_date']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['checkInDate']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
                else {
                    if (moment__WEBPACK_IMPORTED_MODULE_8__(a['start_date']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['start_date']), 'days') > 0) {
                        return -1 * direction;
                    }
                    else {
                        return 1 * direction;
                    }
                }
            }));
        }
    }
    setCheckInCheckOutInfo(obj) {
        var se = this;
        se.isFlyBooking = (obj.booking_id.indexOf("FLY") != -1 || obj.booking_id.indexOf("VMB") != -1) ? true : false;
        se.datecin = new Date(obj.checkInDate);
        se.datecout = new Date(obj.checkOutDate);
        se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format('DD-MM-YYYY');
        se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format('DD-MM-YYYY');
        if (obj.bookingsComboData) {
            se.cincombodeparturedisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[0].departureDate)).format('DD-MM-YYYY');
            se.cincomboarrivaldisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[0].arrivalDate)).format('DD-MM-YYYY');
            if (obj.bookingsComboData.length > 1) {
                se.coutcombodeparturedisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[1].departureDate)).format('DD-MM-YYYY');
                se.coutcomboarrivaldisplay = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(obj.bookingsComboData[1].arrivalDate)).format('DD-MM-YYYY');
            }
        }
        se.numberOfDay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin), 'days');
        if (obj.flight_ticket_info) {
            let arrInfo = obj.flight_ticket_info.split("<br/>");
            if (arrInfo.length == 2) {
                let arrFlightStart = arrInfo[0].split("|");
                let arrFlightReturn = arrInfo[1].split("|");
                se.cincombodeparturedisplay = arrFlightStart[0];
                se.cincombodeparturelocationdisplay = arrFlightStart[1];
                se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
                se.cincomboarrivaldisplay = arrFlightReturn[0];
                se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
            }
            else if (arrInfo.length > 2) {
                let arrFlightStart = arrInfo[0].split("|");
                let arrFlightReturn = arrInfo[1].split("|");
                se.cincombodeparturedisplay = arrFlightStart[0];
                se.cincombodeparturelocationdisplay = arrFlightStart[1];
                se.cincombodepartureflightnumberdisplay = arrFlightStart[2];
                se.cincomboarrivaldisplay = arrFlightReturn[0];
                se.cincomboarrivallocationdisplay = arrFlightReturn[1];
                se.cincomboarrivalflightnumberdisplay = arrFlightReturn[2];
            }
            if (obj.bookingsComboData && obj.bookingsComboData.length > 2) {
                obj.bookingsComboData = obj.bookingsComboData.slice(0, 2);
            }
            if (obj.bookingsComboData && obj.bookingsComboData.length > 1) {
                se.departCodeDisplay = obj.bookingsComboData[0].departCode + ' → ' + obj.bookingsComboData[0].arrivalCode;
                if (obj.bookingsComboData.length > 1) {
                    se.arrivalCodeDisplay = obj.bookingsComboData[1].departCode + ' → ' + obj.bookingsComboData[1].arrivalCode;
                }
            }
        }
    }
    setCheckInCheckOutRQInfo(obj) {
        var se = this;
        var datecinRQ = new Date(obj.start_date);
        var datecoutRQ = new Date(obj.end_date);
        se.cinRQdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(datecinRQ).format('DD-MM-YYYY');
        se.coutRQdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(datecoutRQ).format('DD-MM-YYYY');
        se.numberOfRQDay = moment__WEBPACK_IMPORTED_MODULE_8__(datecoutRQ).diff(moment__WEBPACK_IMPORTED_MODULE_8__(datecinRQ), 'days');
    }
    getDayOfWeek(day) {
        let arrdate = day.split('/');
        let newdate = new Date(arrdate[2], arrdate[1], arrdate[0]);
        let cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(newdate).format("dddd");
        switch (cinthu) {
            case "Monday":
                cinthu = "Thứ 2";
                break;
            case "Tuesday":
                cinthu = "Thứ 3";
                break;
            case "Wednesday":
                cinthu = "Thứ 4";
                break;
            case "Thursday":
                cinthu = "Thứ 5";
                break;
            case "Friday":
                cinthu = "Thứ 6";
                break;
            case "Saturday":
                cinthu = "Thứ 7";
                break;
            default:
                cinthu = "Chủ nhật";
                break;
        }
        return cinthu;
    }
    getAirpot(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].airport : '';
    }
    getRegionByCode(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].city : '';
    }
    nextTrip() {
        this.currentTrip = this.currentTrip + 1;
        let obj = this.listMyTrips[this.currentTrip];
        if (!obj.isRequestTrip) {
            this.setCheckInCheckOutInfo(obj);
            this.isRequestTrip = false;
        }
        else {
            this.setCheckInCheckOutRQInfo(obj);
            this.isRequestTrip = true;
        }
        this.content.scrollToTop(50);
        this.gf.googleAnalytion('mytrips', 'Search', 'nexttrip');
    }
    previousTrip() {
        this.currentTrip = this.currentTrip - 1;
        let obj = this.listMyTrips[this.currentTrip];
        if (!obj.isRequestTrip) {
            this.setCheckInCheckOutInfo(obj);
            this.isRequestTrip = false;
        }
        else {
            this.setCheckInCheckOutRQInfo(obj);
            this.isRequestTrip = true;
        }
        this.content.scrollToTop(50);
        this.gf.googleAnalytion('mytrips', 'Search', 'previoustrip');
    }
    getAirportByCode(code) {
        var se = this, res = "";
        if (se.listAirport && se.listAirport.length > 0) {
            let itemmap = se.listAirport.filter((item) => { return item.code == code; });
            res = (itemmap && itemmap.length > 0) ? itemmap[0].airport : "";
        }
        return res;
    }
    gotologin() {
        this.valueGlobal.backValue = "flightmytrip";
        this.navCtrl.navigateForward('/login');
    }
    copyClipboard(type) {
        if (type == 1) {
            this.clipboard.copy(this.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy(this.bookingCode);
        }
        else if (type == 4) {
            this.clipboard.copy(this.total);
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
    gotoflightpaymentselect(itemflight) {
        this._flightService.itemFlightCache = itemflight;
        this.navCtrl.navigateForward('/flightpaymentselect');
    }
    payment(trip) {
        var se = this;
        se.navCtrl.navigateForward("/roompaymentlive/1");
    }
    paymentselect(trip) {
        this.activityService.objPaymentMytrip = { trip: trip };
        this.navCtrl.navigateForward("/mytripaymentflightselect");
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FlightmytripPage.prototype, "content", void 0);
FlightmytripPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightmytrip',
        template: __webpack_require__(/*! ./flightmytrip.page.html */ "./src/app/flightmytrip/flightmytrip.page.html"),
        styles: [__webpack_require__(/*! ./flightmytrip.page.scss */ "./src/app/flightmytrip/flightmytrip.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["ValueGlobal"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Clipboard"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["ActivityService"]])
], FlightmytripPage);



/***/ }),

/***/ "./src/app/flightnotify/flightnotify.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightnotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightnotifyPageModule", function() { return FlightnotifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightnotify_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightnotify.page */ "./src/app/flightnotify/flightnotify.page.ts");






let FlightnotifyPageModule = class FlightnotifyPageModule {
};
FlightnotifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_flightnotify_page__WEBPACK_IMPORTED_MODULE_5__["FlightnotifyPage"]],
        exports: [_flightnotify_page__WEBPACK_IMPORTED_MODULE_5__["FlightnotifyPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightnotifyPageModule);



/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightnotify-header\">\r\n      <ion-row>\r\n        <ion-col class=\"header-title\"><label>Thông báo</label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-header>\r\n<div class=\"flightnotify-content\">\r\n  <div class=\"inbox-content\" *ngIf=\"!loaddatadone else loaddone\">\r\n    <ion-row *ngFor=\"let item of itemskeleton\">\r\n        <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\r\n                <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--inner-padding-end:0;width: 100%;\">\r\n                  <ion-row style=\"width:100%\">\r\n                      <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                          <div>\r\n                            <ion-skeleton-text animated style=\"width:100%;margin-top: 6px;height: 24px;width: 24px;border-radius:24px\"></ion-skeleton-text>\r\n                          </div>\r\n                        </ion-col>\r\n                        <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                          <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                          <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                          <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                      </ion-col>\r\n                  </ion-row>\r\n                </ion-item>\r\n      </ion-row>\r\n    </ion-row>\r\n  </div>\r\n  <ng-template #loaddone>\r\n    <div class=\"inbox-content-empty\" *ngIf=\"items.length == 0 && loaddatadone\">\r\n      <div class=\"img-inbox-empty\">\r\n        <div class=\"img-empty\"><img  src=\"../../assets/empty/trip_empty.svg\"></div>\r\n      </div>\r\n      <div class=\"text-trip-empty\">\r\n        <label>Hiện chưa có thư mới nào.</label>\r\n      </div>\r\n  </div>\r\n\r\n  \r\n  \r\n  <div class=\"inbox-content\" *ngIf=\"items && items.length > 0 && loaddatadone\">\r\n      <ion-row *ngFor=\"let item of items\" [ngClass]=\"items && items.length > 0 && !item.status ? 'item-unread' : '' \">\r\n        <div *ngIf=\"!item.deleted\" style=\"width:100%\">\r\n          <ion-row class=\"cls-border-bottom\">\r\n            <ion-item-sliding>\r\n                  <ion-item style=\"--padding-start:0;--inner-padding-end:0;--background: transparent;--border-style:none\"  (click)=\"updateStatusMessage(item)\">\r\n                    <ion-row style=\"width:100%\">\r\n                        <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                            <div>\r\n                              <img style=\"margin-top: 4px;\" name=\"home\" src=\"./assets/imgs/ic_home.svg\" *ngIf=\" item.notifyAction == 'approve' || item.notifyAction == 'cancel' || item.notifyAction == 'sharereviewofhotel' || item.notifyAction== 'waitingconfirmtopayment' || item.notifyAction == 'paymented' || item.notifyAction == 'bookingbegoingroom'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"bus\" src=\"./assets/imgs/ic_bus2.svg\" *ngIf=\"item.notifyType == 'bookingbegoingcombotransfer'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"message\" src=\"./assets/imgs/ic_message.svg\" *ngIf=\"item.notifyAction == 'blogofmytrip'\" >\r\n                              <img style=\"margin-top: 4px;\" name=\"paper\" src=\"./assets/imgs/ic_paper.svg\" *ngIf=\"item.notifyAction == 'bookingbegoingcombofly' || item.notifyAction == 'flychangeinfo'\" >\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                            <div><ion-label class=\"inbox-title\">{{item.title}}</ion-label></div>\r\n                            <div><ion-label [ngClass]=\"!item.status ? 'inbox-message hidden-text' : 'inbox-message readed-text' \">{{item.message}}</ion-label></div>\r\n                            <div><ion-label class=\"inbox-date\">{{item.date}}</ion-label></div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n                  <ion-item-options side=\"end\">\r\n                    <ion-item-option  side=\"end\" color=\"danger\" (click)=\"deleteNotifi(item)\">\r\n                      Xóa\r\n                    </ion-item-option>\r\n                  </ion-item-options>\r\n                 \r\n            </ion-item-sliding>\r\n        </ion-row>\r\n        </div>\r\n      </ion-row>\r\n  </div>\r\n  </ng-template>\r\n\r\n    \r\n</div>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"!loadend\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n"

/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flightnotify-header {\n  position: fixed;\n}\n\n.header-title {\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #bdbdbd;\n}\n\n.img-inbox-empty {\n  text-align: center;\n}\n\n.flightnotify-content {\n  height: auto;\n  padding: calc( env(safe-area-inset-bottom) + 80px) 16px;\n  padding-bottom: 110px;\n  position: -webkit-sticky;\n}\n\n.cls-icon {\n  background-color: #003c71;\n  border-radius: 20px;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n}\n\n.cls-row-content {\n  padding: 0px 16px 16px 16px;\n}\n\n.inbox-content-empty {\n  padding: 16px;\n}\n\n.cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n\n.inbox-title {\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n}\n\n.inbox-message {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.4px;\n}\n\n.inbox-date {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.item-unread {\n  background-color: rgba(0, 60, 113, 0.1);\n}\n\n.inbox-content:first-child {\n  padding-top: 4px;\n}\n\n.readed-text {\n  white-space: normal;\n}\n\n.img-empty {\n  padding-top: 96px;\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0bm90aWZ5L2ZsaWdodG5vdGlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodG5vdGlmeS9mbGlnaHRub3RpZnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZUFBQTtBQ0FGOztBREVBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREdNO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0FWOztBREVRO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NWOztBRENNO0VBQ0Usa0JBQUE7QUNFUjs7QURBRTtFQUVFLFlBQUE7RUFDQSx1REFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7QUNFSjs7QURBSTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDR047O0FEREk7RUFDRSwyQkFBQTtBQ0lOOztBREZJO0VBQ0UsYUFBQTtBQ0tOOztBREhFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7QUNNSjs7QURKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDT0o7O0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ09KOztBREpFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ09KOztBREpFO0VBQ0UsdUNBQUE7QUNPSjs7QURKRTtFQUNFLGdCQUFBO0FDT0o7O0FETEU7RUFDRSxtQkFBQTtBQ1FKOztBRExFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0bm90aWZ5L2ZsaWdodG5vdGlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZsaWdodG5vdGlmeS1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcbi5oZWFkZXItdGl0bGV7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyLWFycm93e1xyXG4gIG1hcmdpbjogM3B4IDExcHg7XHJcbn1cclxuXHJcblxyXG4gICAgICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgLnRleHQtdHJpcC1lbXB0eXtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctaW5ib3gtZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgLmZsaWdodG5vdGlmeS1jb250ZW50XHJcbiAge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgODBweCkgMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMTBweDtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICB9XHJcbiAgICAuY2xzLWljb257XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jbHMtcm93LWNvbnRlbnR7XHJcbiAgICAgIHBhZGRpbmc6IDBweCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuICAgIC5pbmJveC1jb250ZW50LWVtcHR5e1xyXG4gICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG4gIC5jbHMtYm9yZGVyLWJvdHRvbXtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xyXG4gIH1cclxuICAuaW5ib3gtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmJveC1tZXNzYWdle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gIH1cclxuICBcclxuICAuaW5ib3gtZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLXVucmVhZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjAsIDExMywgMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgLmluYm94LWNvbnRlbnQ6Zmlyc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAucmVhZGVkLXRleHR7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuaW1nLWVtcHR5e1xyXG4gICAgcGFkZGluZy10b3A6IDk2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxufSIsIi5mbGlnaHRub3RpZnktaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLnRleHQtdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLmltZy1pbmJveC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsaWdodG5vdGlmeS1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbn1cblxuLmNscy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2M3MTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xzLXJvdy1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uaW5ib3gtY29udGVudC1lbXB0eSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jbHMtYm9yZGVyLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbn1cblxuLmluYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmluYm94LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uaW5ib3gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaXRlbS11bnJlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XG59XG5cbi5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnJlYWRlZC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmltZy1lbXB0eSB7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightnotify/flightnotify.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightnotify/flightnotify.page.ts ***!
  \***************************************************/
/*! exports provided: FlightnotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightnotifyPage", function() { return FlightnotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");











let FlightnotifyPage = class FlightnotifyPage {
    constructor(navCtrl, gf, _flightService, platform, badge, storage, zone, toastCtrl, valueGlobal, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this._flightService = _flightService;
        this.platform = platform;
        this.badge = badge;
        this.storage = storage;
        this.zone = zone;
        this.toastCtrl = toastCtrl;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.phone = '';
        this.email = '';
        this.loaddatadone = false;
        this.itemskeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.pageIndex = 1;
        this.pageSize = 10;
        this.storage.get('phone').then(data => {
            if (data) {
                this.phone = data;
            }
        });
        this.storage.get('email').then(e => {
            if (e) {
                this.email = e;
            }
        });
        this.loadUserNotification();
    }
    ngOnInit() {
        this._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            if (data == 3) {
                this.loadUserNotification();
            }
        });
    }
    loadUserNotification() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser?pageIndex=' + se.pageIndex + '&pageSize=' + se.pageSize,
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            if (data && data.length > 0) {
                                data.forEach(element => {
                                    if (element.notifyType == "fly" || element.notifyAction == "flychangeinfo") {
                                        let arrdate = moment__WEBPACK_IMPORTED_MODULE_8__(element.created).format('DD/MM/YYYY/HH/mm').split('/');
                                        let d = new Date(Number(arrdate[2]), Number(arrdate[1]) - 1, Number(arrdate[0]), Number(arrdate[3]), Number(arrdate[4]));
                                        let today = new Date();
                                        if (moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours') <= 24) {
                                            let diffhours = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours');
                                            element.date = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'hours') + " giờ trước";
                                            if (diffhours == 0) {
                                                element.date = moment__WEBPACK_IMPORTED_MODULE_8__(today).diff(d, 'minutes') + " phút trước";
                                            }
                                        }
                                        else {
                                            element.date = moment__WEBPACK_IMPORTED_MODULE_8__(element.created).format('DD/MM/YYYY');
                                        }
                                        element.deleted = false;
                                        if (se.items.length > 0) {
                                            if (!se.gf.checkExistsItemInArray(se.items, element, 'trip')) {
                                                se.items.push(element);
                                            }
                                        }
                                        else {
                                            se.items.push(element);
                                        }
                                    }
                                });
                                setTimeout(() => {
                                    se.zone.run(() => {
                                        let countNoti = se.items.filter(item => { return !item.status; }).length;
                                        se.badge.set(countNoti);
                                        se.valueGlobal.countNotifi = countNoti;
                                        se.sortNotifi(se.items);
                                        se.loaddatadone = true;
                                    });
                                }, 100);
                            }
                        }
                        else {
                            se.zone.run(() => {
                                se.loadend = true;
                                se.loaddatadone = true;
                                if (se.pageIndex == 1) {
                                    se.items = [];
                                    se.valueGlobal.countNotifi = 0;
                                }
                            });
                        }
                    }
                });
            }
            else {
                se.zone.run(() => {
                    se.items = [];
                    se.valueGlobal.countNotifi = 0;
                    se.loaddatadone = true;
                });
                se.refreshToken();
            }
        });
    }
    sortNotifi(data) {
        var se = this;
        if (data && data.length > 0) {
            se.zone.run(() => data.sort(function (a, b) {
                let direction = -1;
                if (moment__WEBPACK_IMPORTED_MODULE_8__(a['created']).diff(moment__WEBPACK_IMPORTED_MODULE_8__(b['created']), 'minutes') <= 0) {
                    return -1 * direction;
                }
                else {
                    return 1 * direction;
                }
            }));
        }
    }
    ;
    updateStatusMessage(item) {
        var se = this;
        se.items.forEach(element => {
            if (element.id == item.id) {
                se.zone.run(() => {
                    if (!element.status) {
                        element.status = 1;
                        se.callUpdateStatus(element);
                    }
                });
            }
        });
        if (item && item.bookingCode && item.notifyAction != "cancel") {
            if (item.notifyAction == "sharereviewofhotel") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(2, 'selectedTab3');
            }
            else if (item.notifyType == "blog" && item.notifyAction == "blogofmytrip") {
                se.valueGlobal.backValue = "tab4";
                se.navCtrl.navigateForward("/blog/" + item.bookingCode);
            }
            else if (item.notifyType == "fly" && item.notifyAction == "flychangeinfo") {
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.gf.setParams(item.switchObj, 'notifiSwitchObj');
            }
            else {
                se.gf.setParams(item.bookingCode, 'notifiBookingCode');
                se.navCtrl.navigateForward(['/app/tabs/tab3']);
            }
        }
        else {
            se.presentToastNotifi(item.message);
        }
    }
    callUpdateStatus(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/UpdateStatusNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else if (body && body.success) {
                        se.valueGlobal.countNotifi--;
                    }
                });
            }
        });
    }
    deleteNotifi(item) {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationOfUser',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                    body: {
                        "id": item.id,
                        "phoneNumber": this.phone,
                        "email": this.email,
                        "memberId": auth_token,
                        "switchTypeOf": item.switchTypeOf,
                        "switchAction": item.switchAction,
                        "switchObj": item.switchObj,
                        "title": item.title,
                        "message": item.message,
                        "status": 1
                    },
                    json: true,
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else if (body && body.success) {
                        se.zone.run(() => {
                            item.deleted = true;
                        });
                    }
                });
            }
        });
    }
    presentToastNotifi(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: item.message,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    showConfirm(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Để sau',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateBack('/');
                        }
                    },
                    {
                        text: 'Đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.storage.remove('auth_token');
                            this.storage.remove('email');
                            this.storage.remove('username');
                            this.storage.remove('jti');
                            this.storage.remove('userInfoData');
                            this.storage.remove('userRewardData');
                            this.storage.remove('point');
                            this.storage.remove('infocus');
                            this.zone.run(() => {
                                this.valueGlobal.countNotifi = 0;
                            });
                            if (this.modalCtrl) {
                                this.modalCtrl.dismiss();
                            }
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    doRefresh(event) {
        var se = this;
        se.loadUserNotification();
        setTimeout(() => {
            event.target.complete();
        }, 1500);
    }
    onSwipe(event) {
        debugger;
    }
    doInfinite(infiniteScroll) {
        this.zone.run(() => {
            this.pageIndex += 1;
            this.loadUserNotification();
            infiniteScroll.target.complete();
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error) {
                        error.page = "tab4";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var json = JSON.parse(body);
                        if (json.auth_token) {
                            se.storage.remove('auth_token');
                            se.storage.set("auth_token", json.auth_token);
                            se.loadUserNotification();
                        }
                    }
                });
            }
        });
    }
};
FlightnotifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightnotify',
        template: __webpack_require__(/*! ./flightnotify.page.html */ "./src/app/flightnotify/flightnotify.page.html"),
        styles: [__webpack_require__(/*! ./flightnotify.page.scss */ "./src/app/flightnotify/flightnotify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_10__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_5__["Badge"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], FlightnotifyPage);



/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.module.ts ***!
  \*******************************************************/
/*! exports provided: FlighttopdealPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealPageModule", function() { return FlighttopdealPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flighttopdeal.page */ "./src/app/flighttopdeal/flighttopdeal.page.ts");






let FlighttopdealPageModule = class FlighttopdealPageModule {
};
FlighttopdealPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__["FlighttopdealPage"]],
        exports: [_flighttopdeal_page__WEBPACK_IMPORTED_MODULE_5__["FlighttopdealPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlighttopdealPageModule);



/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flighttopdeal-section\">\n    <div class=\"title-padding\">\n        <ion-label class=\"text-title2\">\n          Khuyến mãi và ưu đãi \n        </ion-label>\n      </div>\n\n      <div class=\"sub-title\">\n        <ion-label class=\"text-subtitle\">\n          Tận hưởng ưu đãi - Trải nghiệm thoải mái\n        </ion-label>\n      </div>\n\n      <div class=\"innerdeals1 slide2-scroll\">\n      <div (click)=\"itemclickht(slide)\"\n          class=\"cls-deal\" *ngFor=\"let slide of listflighttopdeal\">\n          <img class=\"slide2 img\" [src]=\"slide.linkImage\" />\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flighttopdeal-section .title-padding {\n  padding: 38px 0px 0px 0px;\n  padding-right: 16px !important;\n}\n.flighttopdeal-section .sub-title {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.flighttopdeal-section .text-title2 {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #222222;\n}\n.flighttopdeal-section .div-seemore {\n  margin-top: 5px;\n  text-align: right;\n  float: right;\n  color: #26bed6;\n}\n.flighttopdeal-section .innerdeals1 {\n  height: 100%;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  margin-top: 16px;\n}\n.flighttopdeal-section .innerdeals1 div {\n  display: table-cell;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal {\n  padding-left: 16px;\n  position: relative;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 16px;\n  z-index: 11;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .float-info p {\n  margin: 0;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal .hotel-name {\n  font-size: 16px;\n  margin: 0;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 260px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal:first-child {\n  padding-left: 0;\n}\n.flighttopdeal-section .innerdeals1 .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.flighttopdeal-section .innerdeals1 .cls-deal:last-child {\n  padding-right: 16px !important;\n}\n.flighttopdeal-section .innerdeals1 .slide2 {\n  min-width: 272px;\n  height: 356px;\n}\n.flighttopdeal-section .innerdeals1 .img {\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.flighttopdeal-section .innerdeals1 .slide2-scroll {\n  height: 356px;\n  margin-left: -19px;\n  margin-top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0dG9wZGVhbC9mbGlnaHR0b3BkZWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0dG9wZGVhbC9mbGlnaHR0b3BkZWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7QUNEUjtBRElNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRlI7QURLSTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0pSO0FET0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0xSO0FET1E7RUFDRSxtQkFBQTtBQ0xWO0FEUVE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDTlo7QURRWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTmhCO0FEUWdCO0VBQ0ksU0FBQTtBQ05wQjtBRFVjO0VBRU0sZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNUcEI7QURhUTtFQUNJLGVBQUE7QUNYWjtBRGNRO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUFjLCtDQUFBO0VBQ2QsNEVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7QUNaWjtBRGVVO0VBQ0UsOEJBQUE7QUNiWjtBRGdCVTtFQUVFLGdCQUFBO0VBQ0EsYUFBQTtBQ2ZaO0FEa0JZO0VBRUEsa0JBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDakJaO0FEb0JZO0VBRUksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNuQmhCIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0dG9wZGVhbC9mbGlnaHR0b3BkZWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlnaHR0b3BkZWFsLXNlY3Rpb257XG5cbiAgICAudGl0bGUtcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzogMzhweCAwcHggMHB4IDBweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDoxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gIFxuICAgICAgLnN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICB9XG5cbiAgICAudGV4dC10aXRsZTJcbiAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5kaXYtc2VlbW9yZXtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBjb2xvcjogIzI2YmVkNlxuICAgIH1cblxuICAgIC5pbm5lcmRlYWxzMXtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG5cbiAgICAgICAgZGl2e1xuICAgICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtZGVhbHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmZsb2F0LWluZm97XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogOHB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTE7XG5cbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmhvdGVsLW5hbWVcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjojZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmFkMSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICAgICAgd2lkdGg6IDI3MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4OyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIGJvdHRvbTo0cHg7XG4gICAgICAgICAgICBsZWZ0OiA4cHg7XG4gICAgICAgICAgICAvL29wYWNpdHk6IDAuNTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgIG9wYWNpdHk6MC41O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jbHMtZGVhbDpsYXN0LWNoaWxke1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zbGlkZTJcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI3MnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzNTZweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmltZyBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2xpZGUyLXNjcm9sbFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1NnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTlweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDozMjBweCkgYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgICAgICAgICAgLy8gICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzIwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzMjBweDtcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzIwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAzMjBweDtcblxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgICAgIC8vICAgICBoZWlnaHQ6IDMyMHB4O1xuXG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogMzMwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIGhlaWdodDogNTcwcHg7XG5cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgfVxufSIsIi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLnRpdGxlLXBhZGRpbmcge1xuICBwYWRkaW5nOiAzOHB4IDBweCAwcHggMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLnRleHQtdGl0bGUyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmRpdi1zZWVtb3JlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLmNscy1kZWFsIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuY2xzLWRlYWwgLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAxNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5jbHMtZGVhbCAuZmxvYXQtaW5mbyBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLmNscy1kZWFsIC5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMjYwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5ncmFkMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuY2xzLWRlYWw6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbi5mbGlnaHR0b3BkZWFsLXNlY3Rpb24gLmlubmVyZGVhbHMxIC5zbGlkZTIge1xuICBtaW4td2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDM1NnB4O1xufVxuLmZsaWdodHRvcGRlYWwtc2VjdGlvbiAuaW5uZXJkZWFsczEgLmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uZmxpZ2h0dG9wZGVhbC1zZWN0aW9uIC5pbm5lcmRlYWxzMSAuc2xpZGUyLXNjcm9sbCB7XG4gIGhlaWdodDogMzU2cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTlweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/flighttopdeal/flighttopdeal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flighttopdeal/flighttopdeal.page.ts ***!
  \*****************************************************/
/*! exports provided: FlighttopdealPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealPage", function() { return FlighttopdealPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");










let FlighttopdealPage = class FlighttopdealPage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.valueGlobal = valueGlobal;
        this._flightService = _flightService;
        this.listflighttopdeal = [];
        this.loadDataFlightTopdeal();
    }
    ngOnInit() {
    }
    loadDataFlightTopdeal() {
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetSlideHome";
        this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
        }, {}, "homeflight", "GetSlideHome").then((data) => {
            if (data) {
                data.forEach(element => {
                    if (element.version == 2 && element.content) {
                        element.validToText = moment__WEBPACK_IMPORTED_MODULE_7__(element.validTo).format("DD/MM/YYYY");
                        this.listflighttopdeal.push(element);
                    }
                });
            }
        });
    }
    itemclickht(item) {
        this._flightService.itemFlightTopDeal = item;
        this.navCtrl.navigateForward('/flighttopdealdetail');
    }
};
FlighttopdealPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flighttopdeal',
        template: __webpack_require__(/*! ./flighttopdeal.page.html */ "./src/app/flighttopdeal/flighttopdeal.page.html"),
        styles: [__webpack_require__(/*! ./flighttopdeal.page.scss */ "./src/app/flighttopdeal/flighttopdeal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"]])
], FlighttopdealPage);



/***/ }),

/***/ "./src/app/flightuseful/flightuseful.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.module.ts ***!
  \*****************************************************/
/*! exports provided: FlightusefulPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightusefulPageModule", function() { return FlightusefulPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightuseful_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flightuseful.page */ "./src/app/flightuseful/flightuseful.page.ts");






let FlightusefulPageModule = class FlightusefulPageModule {
};
FlightusefulPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_flightuseful_page__WEBPACK_IMPORTED_MODULE_5__["FlightusefulPage"]],
        exports: [_flightuseful_page__WEBPACK_IMPORTED_MODULE_5__["FlightusefulPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightusefulPageModule);



/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.html":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-useful-content\" #divuseful>\n  <div class=\"div-useful-title\">\n    <div class=\"title-padding\">\n      <ion-label class=\"text-title2\">\n      Thông tin hữu ích\n      </ion-label>\n    </div>\n\n    <div class=\"sub-title\">\n      <ion-label class=\"text-subtitle\">\n        Có một hành trình hơn cả mong đợi\n      </ion-label>\n    </div>\n  </div>\n    \n\n      <div class=\"item-useful\">\n        <div *ngFor=\"let itemuseful of listUseful\">\n            <div [ngClass]=\"itemuseful.clicked ? 'd-flex has-clicked' : 'd-flex' \" *ngIf=\"!itemuseful.clicked else itemhasclicked\" (click)=\"itemClick(itemuseful)\">\n                <span class=\"p-right-16\">›  <span class=\"text-content\">{{itemuseful.title}}</span></span>\n            </div>\n            <ng-template #itemhasclicked>\n                <div (click)=\"itemClick(itemuseful)\" id=\"{{itemuseful.id}}\">\n                    <div class=\"d-flex \">\n                       <span class=\"p-right-4\"><img src=\"./assets/ic_flight/ic_down_primary.svg\"></span> <span class=\"text-content has-clicked\">{{itemuseful.title}}</span>\n                    </div>\n                    <div class=\"div-useful-show\">\n                        <div [innerHTML]=\"itemuseful.contents\"></div>\n                    </div>\n                </div>\n              \n            </ng-template>\n        </div>\n      </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.p-right-16 {\n  padding-right: 16px;\n}\n\n.p-right-4 {\n  padding-right: 4px;\n}\n\n.div-useful-content .item-useful {\n  border-radius: 4px;\n  background-color: #ffffff;\n  padding: 8px;\n  margin-top: 12px;\n  margin-bottom: 68px;\n}\n\n.div-useful-content .item-useful .text-content {\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 2;\n  color: #333333;\n}\n\n.div-useful-content .div-useful-show {\n  border-radius: 4px;\n  background-color: rgba(242, 242, 242, 0.5);\n  padding: 8px;\n  margin-top: 11px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 2;\n  color: #333333;\n}\n\n.div-useful-content .title-padding {\n  padding: 38px 0px 0px 0px;\n  padding-right: 16px !important;\n}\n\n.div-useful-content .sub-title {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n\n.div-useful-content .text-title2 {\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 1.5;\n  color: #222222;\n}\n\n.div-useful-content .has-clicked {\n  font-weight: 500 !important;\n  color: #003c71 !important;\n}\n\n.div-useful-title.cls-topdeal-float .title-padding {\n  padding-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0dXNlZnVsL2ZsaWdodHVzZWZ1bC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHVzZWZ1bC9mbGlnaHR1c2VmdWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksbUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0FDR0o7O0FEQ1E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNFWjs7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRWhCOztBREVRO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRFo7O0FESUk7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0FDRlI7O0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNIUjs7QURNSTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRFFJO0VBQ0ksMkJBQUE7RUFDQSx5QkFBQTtBQ05SOztBRGFBO0VBQ0ksMkJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHVzZWZ1bC9mbGlnaHR1c2VmdWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLnAtcmlnaHQtMTZ7XG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cbi5wLXJpZ2h0LTR7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLmRpdi11c2VmdWwtY29udGVudHtcbiAgIFxuICAgICAgICAuaXRlbS11c2VmdWx7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDY4cHg7XG5cbiAgICAgICAgICAgIC50ZXh0LWNvbnRlbnR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmRpdi11c2VmdWwtc2hvd3tcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLDI0MiwyNDIsIDAuNSk7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMXB4O1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgfVxuICAgIFxuICAgIC50aXRsZS1wYWRkaW5ne1xuICAgICAgICBwYWRkaW5nOiAzOHB4IDBweCAwcHggMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OjE2cHggIWltcG9ydGFudDtcbiAgICAgIH1cbiAgXG4gICAgICAuc3ViLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIH1cblxuICAgIC50ZXh0LXRpdGxlMlxuICAgIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG5cbiAgICAuaGFzLWNsaWNrZWR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICMwMDNjNzEgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBcbn1cblxuXG4uZGl2LXVzZWZ1bC10aXRsZS5jbHMtdG9wZGVhbC1mbG9hdCAudGl0bGUtcGFkZGluZ3tcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIH0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnAtcmlnaHQtMTYge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG4ucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4uZGl2LXVzZWZ1bC1jb250ZW50IC5pdGVtLXVzZWZ1bCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiA2OHB4O1xufVxuLmRpdi11c2VmdWwtY29udGVudCAuaXRlbS11c2VmdWwgLnRleHQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmRpdi11c2VmdWwtY29udGVudCAuZGl2LXVzZWZ1bC1zaG93IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwgMjQyLCAyNDIsIDAuNSk7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMTFweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LXVzZWZ1bC1jb250ZW50IC50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMzhweCAwcHggMHB4IDBweDtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuLmRpdi11c2VmdWwtY29udGVudCAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LXVzZWZ1bC1jb250ZW50IC50ZXh0LXRpdGxlMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZGl2LXVzZWZ1bC1jb250ZW50IC5oYXMtY2xpY2tlZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDNjNzEgIWltcG9ydGFudDtcbn1cblxuLmRpdi11c2VmdWwtdGl0bGUuY2xzLXRvcGRlYWwtZmxvYXQgLnRpdGxlLXBhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightuseful/flightuseful.page.ts":
/*!***************************************************!*\
  !*** ./src/app/flightuseful/flightuseful.page.ts ***!
  \***************************************************/
/*! exports provided: FlightusefulPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightusefulPage", function() { return FlightusefulPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");









let FlightusefulPage = class FlightusefulPage {
    constructor(navCtrl, gf, zone, storage, valueGlobal, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.zone = zone;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this._flightService = _flightService;
        this.loadDataFlightUseful();
    }
    ngOnInit() {
    }
    loadDataFlightUseful() {
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetUsefulHome";
        this.gf.RequestApi("GET", url, {
            "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
            'Content-Type': 'application/json; charset=utf-8'
        }, {}, "homeflight", "GetUsefulHome").then((data) => {
            if (data) {
                this.listUseful = data;
            }
        });
    }
    itemClick(item) {
        if (this.itemclick && this.itemclick.id == item.id) {
            this.itemclick = item;
        }
        else {
            this.itemclick = item;
            for (let index = 0; index < this.listUseful.length; index++) {
                const element = this.listUseful[index];
                element.clicked = false;
            }
        }
        if (item.clicked) {
            item.clicked = false;
        }
        else {
            item.clicked = true;
            setTimeout(() => {
                this._flightService.itemUseFulClick.emit(parseInt(jquery__WEBPACK_IMPORTED_MODULE_4__("#" + item.id)[0].offsetTop) - 70);
            }, 10);
        }
    }
};
FlightusefulPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightuseful',
        template: __webpack_require__(/*! ./flightuseful.page.html */ "./src/app/flightuseful/flightuseful.page.html"),
        styles: [__webpack_require__(/*! ./flightuseful.page.scss */ "./src/app/flightuseful/flightuseful.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_8__["flightService"]])
], FlightusefulPage);



/***/ }),

/***/ "./src/app/homeflight/homeflight.module.ts":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.module.ts ***!
  \*************************************************/
/*! exports provided: HomeflightPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeflightPageModule", function() { return HomeflightPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homeflight_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homeflight.page */ "./src/app/homeflight/homeflight.page.ts");
/* harmony import */ var _flightmytrip_flightmytrip_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../flightmytrip/flightmytrip.module */ "./src/app/flightmytrip/flightmytrip.module.ts");
/* harmony import */ var _flightnotify_flightnotify_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../flightnotify/flightnotify.module */ "./src/app/flightnotify/flightnotify.module.ts");
/* harmony import */ var _flightaccount_flightaccount_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../flightaccount/flightaccount.module */ "./src/app/flightaccount/flightaccount.module.ts");
/* harmony import */ var _flighttopdeal_flighttopdeal_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flighttopdeal/flighttopdeal.module */ "./src/app/flighttopdeal/flighttopdeal.module.ts");
/* harmony import */ var _flightuseful_flightuseful_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../flightuseful/flightuseful.module */ "./src/app/flightuseful/flightuseful.module.ts");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../order/order.module */ "./src/app/order/order.module.ts");
/* harmony import */ var _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bizTravel/booking/booking.module */ "./src/app/bizTravel/booking/booking.module.ts");













let HomeflightPageModule = class HomeflightPageModule {
};
HomeflightPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _flightmytrip_flightmytrip_module__WEBPACK_IMPORTED_MODULE_6__["FlightmytripPageModule"],
            _flightnotify_flightnotify_module__WEBPACK_IMPORTED_MODULE_7__["FlightnotifyPageModule"],
            _flightaccount_flightaccount_module__WEBPACK_IMPORTED_MODULE_8__["FlightaccountPageModule"],
            _flighttopdeal_flighttopdeal_module__WEBPACK_IMPORTED_MODULE_9__["FlighttopdealPageModule"],
            _flightuseful_flightuseful_module__WEBPACK_IMPORTED_MODULE_10__["FlightusefulPageModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_11__["OrderPageModule"],
            _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_12__["BookingPageModule"]
        ],
        declarations: [_homeflight_page__WEBPACK_IMPORTED_MODULE_5__["HomeflightPage"]],
        exports: [_homeflight_page__WEBPACK_IMPORTED_MODULE_5__["HomeflightPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomeflightPageModule);



/***/ }),

/***/ "./src/app/homeflight/homeflight.page.html":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-flight-content\" *ngIf=\"flightTabActive == 1\">\n    <!-- <div [ngClass]=\"isNotice ? 'background mb50' : 'background'\"> -->\n        <div class=\"background\">\n        <!-- <img [ngClass]=\"isNotice ? 'img-background-notice' : 'img-background'\"  src=\"./assets/ic_flight/flight_bg.jpg\"> -->\n        <img class=\"img-background\" src=\"./assets/ic_flight/flight_bg.jpg\">\n        <div class=\"div-wrap-background\"></div>\n        <div class=\"text-center\">\n            <img class=\"img-logo\" src=\"./assets/logo/logo.svg\" />\n        </div>\n        <div class=\"padding div-wrap-content\">\n            <!-- <div [ngClass]=\"isNotice ? 'text-home-hotel-notice' : 'text-home-hotel'\"  > -->\n                <div class=\"text-home-hotel\"  >\n                <label class=\"label-home-hotel\">\n                    Lựa chọn thông minh - Hành trình như ý\n                </label>\n            </div>\n            <div class=\"div-wrap-search-input\"></div>\n            <div class=\"div-direction\">\n                <ion-row>\n                    <ion-list class=\"div-list-flighttype\">\n                        <ion-radio-group name=\"rdgroup\" class=\"list-flighttype d-flex\" [(ngModel)]=\"flighttype\" mode=\"md\">\n                            <div class=\"div-twoway d-flex rd-active\">\n                                <ion-radio style=\"--color-checked:#fff;width: 19px; height: 19px;--border-width: 0.5px;\" value=\"twoway\" class=\"rd-departure\" (click)=\"radioCheck(1)\" checked=\"true\" mode=\"md\"></ion-radio>\n                                <div class=\"rd-text\" (click)=\"radioCheck(1)\">Khứ hồi</div>\n                            </div>\n                               <div class=\"div-oneway d-flex\">\n                                <ion-radio value=\"oneway\" class=\"rd-departure\" style=\"padding-left:32px;width: 47px; height: 19px;--color-checked:#fff;--border-width: 0.5px;\" (click)=\"radioCheck(2)\" mode=\"md\"></ion-radio>\n                                <div class=\"rd-text\" (click)=\"radioCheck(2)\">Một chiều</div>\n                               </div>\n                                \n                        </ion-radio-group>\n                        \n                </ion-list>\n                </ion-row>\n                \n            </div>\n\n            <ion-row class=\"row-flight m-top-16\">\n                <div class=\"div-width div-relative\">\n                    <div class=\"img-input\"  (click)=\"searchFlight(1)\">\n                        <img class=\"img-padding img-location\" src=\"./assets/ic_flight/flight_cin.svg\"/>\n                    </div>\n\n                    <div class=\"div-input-right text-input-flight div-flex-center \" *ngIf=\"departCode else choiceDepartCode\"  (click)=\"searchFlight(1)\">\n                        <div class=\"text-location div-departcode\">{{departCity}}<span class=\"text-code\">{{departCode}}</span></div>\n                        <div class=\"text-location-desc div-departcode\">{{departAirport}}</div>\n                    </div>\n                    <ng-template #choiceDepartCode>\n                        <div class=\"div-input-right text-input-flight div-flex-center\" (click)=\"searchFlight(1)\">\n                            <div class=\"text-code-empty f-14\">\n                                Chọn nơi khởi hành\n                            </div>\n                        </div>\n                    </ng-template>\n\n                    <div class=\"div-switch\" (click)=\"switchDepart()\" *ngIf=\"departCode && returnCode\">\n                        <img class=\"img-switch\" src=\"./assets/ic_flight/ic_switch.svg\">\n                    </div>\n                </div>\n            </ion-row>\n\n            <ion-row class=\"row-flight\">\n                <div class=\"div-width\">\n                    <div class=\"img-input\"  (click)=\"searchFlight(2)\">\n                        <img class=\"img-padding img-location\" src=\"./assets/ic_flight/flight_cout.svg\"/>\n                    </div>\n\n                    <div class=\"div-input-right text-input-flight div-flex-center\" *ngIf=\"returnCode else choiceReturnCode\"  (click)=\"searchFlight(2)\">\n                        <div class=\"text-location div-returncode\">{{returnCity}}<span class=\"text-code\">{{returnCode}}</span></div>\n                        <div class=\"text-location-desc div-returncode\">{{returnAirport}}</div>\n                    </div>\n                    <ng-template #choiceReturnCode>\n                        <div class=\"div-input-right text-input-flight div-flex-center\"  (click)=\"searchFlight(2)\">\n                            <div class=\"text-code-empty f-14\">\n                                Chọn nơi đến\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n            </ion-row>\n\n            <div>\n                <ion-row class=\"row-cin-cout\" (click)=\"openPickupCalendar()\">\n                    <div class=\"div-width\">\n                        <div class=\"div-cin\">\n                            <div class=\"img-cin-cout\">\n                                <img class=\"img-padding img-checkin\" src=\"./assets/iocnsearch/ic_checkin.svg\"/>\n                            </div>\n                            <div class=\"div-input-right text-input-cin div-flex-center\">\n                                <div class=\"text-cin\">\n                                    <label class=\"text-cin-input\">{{ cindisplaymonth }}</label>\n                                </div>\n                                <div class=\"font-thu\" *ngIf=\"cofdate==0\">\n                                    <label class=\"text-color text-cinthu\">{{ cinthu }}</label>\n                                </div>\n                                <div class=\"font-thu\" *ngIf=\"cofdate==1\">\n                                    <label class=\"text-color text-cinthu text-red\">{{cinthu}}</label>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"div-cout\" [ngClass]=\"flighttype == 'twoway' ? '' : 'div-hidden'\">\n                            <div class=\"img-cin-cout p-top-12\">\n                                <!-- <img class=\"img-padding img-checkout\" src=\"./assets/iocnsearch/ic_checkout.svg\"/> -->\n                                <img class=\"img-padding img-checkout\" src=\"./assets/ic_flight/icon_arrow_gray.svg\">\n                            </div>\n                            <div class=\"div-input-right text-input-cout div-flex-center\">\n                                <div class=\"text-cin\">\n                                    <label class=\"text-cin-input\">{{ coutdisplaymonth }}</label>\n                                </div>\n                                <div class=\"font-thu\">\n                                    <label *ngIf=\"cotdate==0\" class=\"text-color text-cinthu\">{{coutthu}}</label>\n                                    <label *ngIf=\"cotdate==1\" class=\"text-color text-cinthu text-red\">{{coutthu}}</label>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </ion-row>\n\n                <ion-row class=\"row-pax\" (click)=\"choicePax()\">\n                    <div class=\"div-width\">\n                        <div class=\"img-cin-cout\">\n                            <img class=\"img-padding img-people\" src=\"./assets/iocnsearch/ic_people.svg\"/>\n                        </div>\n\n                        <div class=\"div-input-right div-flex-center\">\n                            <div class=\"text-pax\">\n                                <div class=\"div-adult\">{{ adult }} người lớn<span *ngIf=\"child\">, {{ child }}  trẻ em</span><span *ngIf=\"infant\">, {{ infant }} em bé</span></div>\n                                <!-- <div class=\"div-child text-color\">{{ child }} trẻ em, {{ infant }} trẻ sơ sinh</div> -->\n                            </div>\n                        </div>\n                    </div>\n                </ion-row>\n\n                <ion-row>\n                    <button ion-button round (click)=\"search()\" class=\"button btn-search\" clear>\n                        Tìm kiếm\n                    </button>\n                </ion-row>\n            </div>\n\n            \n\n            \n            \n        </div>\n    </div>\n    <div class=\"div-topdeal\">\n        <app-flighttopdeal></app-flighttopdeal>\n    </div>\n    \n\n    <div [ngClass]=\"(myflight && myflight.departCity && myflight.returnCity) ? 'div-topdeal-flight' : 'div-topdeal-flight'\" *ngIf=\"listflighttopdeal && listflighttopdeal.length >0\">\n        \n        <div *ngIf=\"myflight && myflight.departCity && myflight.returnCity\" (click)=\"showMyFlight()\">\n            <div class=\"div-text-yourflight\">\n                Chuyến bay của bạn\n            </div>\n            <div class=\"div-content-yourflight\">\n                <div class=\"d-flex\">\n                    <div class=\"text-flight-title div-width-250 d-flex\">\n                        <div>\n                            <div>{{ myflight.departCity }} </div>\n                            <div class=\"text-flight-datetime\">{{ myflight.checkInDisplayMonth }} </div>\n                        </div>\n                        <div class=\"div-flight-inout\">\n                            <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"myflight.roundTrip else oneway\">\n                            <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"./assets/imgs/ic_arrow.svg\"></ng-template>\n                        </div> \n                        <div>\n                            <div>{{ myflight.returnCity }} </div>\n                            <div class=\"text-flight-datetime\" *ngIf=\"myflight.roundTrip\">{{ myflight.checkOutDisplayMonth }} </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"div-flight-topdeal p-top-32\">\n            <div class=\"title-topdeal\">Giá vé tốt nhất hiện tại</div>\n            <div class=\"subtitle-topdeal m-bottom-16\">Giá tốt hôm nay chớ để ngày mai</div>\n        </div>\n            \n            <div [ngClass]=\"dx == listflighttopdeal.length-1? 'div-item-flight':'div-item-flight m-bottom-16'\" *ngFor=\"let itemdeal of listflighttopdeal; let idx = index\" (click)=\"select(itemdeal)\">\n                <div class=\"div-first d-flex\">\n    \n                    <div class=\"text-flight-title div-width-600 d-flex\">\n                        <div>\n                            <div>{{ itemdeal.fromPlaceName }} </div>\n                            <div class=\"text-flight-datetime\">{{ itemdeal.dateDepartDisplay }} </div>\n                        </div>\n                        <div class=\"div-flight-inout\">\n                            <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"itemdeal.roundTrip else oneway\">\n                            <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"../assets/imgs/ic_arrow.svg\"></ng-template>\n                        </div> \n                        <div>\n                            <div>{{ itemdeal.toPlaceNameDisplay }} </div>\n                            <div class=\"text-flight-datetime\">{{ itemdeal.dateReturnDisplay }} </div>\n                        </div>\n                    </div>\n                  \n                    <div class=\"div-logo div-width-100 text-right\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'VietJetAir'\" src=\"./assets/ic_airticket/ic_vietjet_b.png\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'JetStar'\" src=\"./assets/ic_airticket/ic_jetstar_b.png\">\n                        <img class=\"img-logo logo-vna\" *ngIf=\"itemdeal.depart.airCode == 'VietnamAirlines'\"src=\"./assets/ic_airticket/logo_vna.png\">\n                        <img class=\"img-logo\" *ngIf=\"itemdeal.depart.airCode == 'BambooAirways'\" src=\"./assets/ic_airticket/ic_bamboo_b.png\">\n                    </div>\n      \n                </div>\n                <div class=\"div-date m-top-4 div-width-250\">\n                </div>\n      \n                <div class=\"div-second d-flex p-top-8 m-bottom-16\">\n                    <div class=\"flight-price\">{{itemdeal.priceDisplay}} <span class=\"text-sub-price\">đ</span></div> \n                    <div class=\"div-button\">\n                        <button ion-button round (click)=\"select(itemdeal)\" class=\"button btn-select\" clear>\n                        Xem\n                        </button>\n                    </div>\n                </div>\n              \n            </div>\n    </div>\n\n    <div class=\"div-useful\">\n        <app-flightuseful></app-flightuseful>\n    </div>\n</div>\n\n<div class=\"div-flight-trip\" *ngIf=\"flightTabActive == 2\">\n    <!-- <app-flightmytrip></app-flightmytrip> -->\n    <app-order *ngIf=\"!isBizAccount else bookings\"></app-order>\n    <ng-template #bookings>\n        <app-booking></app-booking>\n    </ng-template>\n    \n</div>\n\n<div class=\"div-flight-notify\" *ngIf=\"flightTabActive == 3\">\n    <app-flightnotify></app-flightnotify>\n  </div>\n\n  <div class=\"div-flight-account\" *ngIf=\"flightTabActive == 4\">\n    <app-flightaccount></app-flightaccount>\n  </div>"

/***/ }),

/***/ "./src/app/homeflight/homeflight.page.scss":
/*!*************************************************!*\
  !*** ./src/app/homeflight/homeflight.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-flight-content .d-flex {\n  display: flex;\n}\n.div-flight-content .m-offset-top-104 {\n  margin-top: -104px;\n}\n.div-flight-content .p-top-4 {\n  padding-top: 4px;\n}\n.div-flight-content .p-top-12 {\n  padding-top: 12px !important;\n}\n.div-flight-content .m-top-16 {\n  margin-top: 16px !important;\n}\n.div-flight-content .div-hidden {\n  visibility: hidden;\n}\n.div-flight-content .background {\n  height: calc(env(safe-area-inset-top) + 582px);\n  position: relative;\n  z-index: 0;\n}\n.div-flight-content .background .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 370px;\n  margin-top: -34px;\n}\n.div-flight-content .background .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 582px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.div-flight-content .background .img-background-notice {\n  width: 100% !important;\n  height: calc( env(safe-area-inset-top) + 657px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: 0;\n}\n.div-flight-content .background .div-wrap-content {\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n}\n.div-flight-content .background .f-14 {\n  font-size: 14px;\n}\n.div-flight-content .background .div-relative {\n  position: relative;\n}\n.div-flight-content .background .div-switch {\n  position: absolute;\n  right: 12px;\n  top: 34px;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border: solid 0.5px #fff;\n  background: #26bed6;\n  border-radius: 36px;\n}\n.div-flight-content .background .div-switch .img-switch {\n  width: 36px;\n  height: 36px;\n}\n.div-flight-content .background .div-direction {\n  margin-top: 12px;\n}\n.div-flight-content .background .div-direction .rd-active {\n  opacity: 1 !important;\n}\n.div-flight-content .background .div-direction .div-twoway, .div-flight-content .background .div-direction .div-oneway {\n  opacity: 0.7;\n}\n.div-flight-content .background .div-direction .list-departure {\n  margin: 2;\n  display: inline-flex;\n}\n.div-flight-content .background .div-direction .rd-departure {\n  padding: 4px;\n  margin-left: -4px;\n}\n.div-flight-content .background .div-direction .rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n.div-flight-content .background .div-direction .rd-text {\n  padding-left: 4px;\n  padding-top: 1px;\n  font-size: 16px;\n  font-weight: 300;\n}\n.div-flight-content .background .div-direction .radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n.div-flight-content .background .div-direction .div-list-flighttype {\n  margin-bottom: 0;\n  background: none;\n  color: #fff;\n}\n.div-flight-content .background .img-logo {\n  width: 76px;\n  margin-top: calc(env(safe-area-inset-top) + 22px );\n  z-index: 10;\n  position: relative;\n}\n.div-flight-content .background .text-center {\n  text-align: center;\n}\n.div-flight-content .background .padding {\n  padding: 16px;\n}\n.div-flight-content .background .padding .text-home-hotel {\n  margin-top: 116px;\n}\n.div-flight-content .background .padding .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .text-home-hotel-notice {\n  margin-top: 185px;\n}\n.div-flight-content .background .padding .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .div-width {\n  width: 100%;\n}\n.div-flight-content .background .padding .text-code {\n  padding-left: 4px;\n  color: #828282;\n}\n.div-flight-content .background .padding .text-code-empty {\n  color: #828282;\n}\n.div-flight-content .background .padding .row-flight {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 48px;\n  margin-top: 8px;\n}\n.div-flight-content .background .padding .row-flight .img-input {\n  height: 48px;\n  margin-top: 14px;\n  margin-left: 16px;\n  width: 50px;\n  position: absolute;\n}\n.div-flight-content .background .padding .row-cin-cout {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 48px;\n  margin-top: 8px;\n}\n.div-flight-content .background .padding .row-cin-cout .div-cin {\n  position: absolute;\n  width: 46%;\n  height: 48px;\n}\n.div-flight-content .background .padding .row-cin-cout .img-checkin, .div-flight-content .background .padding .row-cin-cout .img-people {\n  width: 16px;\n  height: 16px;\n}\n.div-flight-content .background .padding .row-cin-cout .img-checkout {\n  width: 16px;\n  height: 10px;\n}\n.div-flight-content .background .padding .div-input-right {\n  margin-left: 51px;\n}\n.div-flight-content .background .padding .img-cin-cout {\n  padding: 16px 20px 16px 17px;\n  position: absolute;\n}\n.div-flight-content .background .padding .row-pax {\n  background: #ffffff;\n  border-radius: 2px;\n  margin-top: 8px;\n  height: 48px;\n}\n.div-flight-content .background .padding .text-input-flight {\n  font-weight: 300;\n  margin-left: 51px;\n}\n.div-flight-content .background .padding .text-location {\n  font-size: 16px;\n}\n.div-flight-content .background .padding .text-location-desc {\n  font-size: 12px;\n  color: #828282;\n}\n.div-flight-content .background .padding .text-input-search {\n  margin: 0px 0 14px 51px;\n}\n.div-flight-content .background .padding .text-input-search-wraptext {\n  margin: 4px 0 14px 51px;\n}\n.div-flight-content .background .padding .text-middle {\n  display: table-cell;\n  vertical-align: middle;\n  height: 48px;\n}\n.div-flight-content .background .padding .text-cin, .div-flight-content .background .padding .text-pax {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333333;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n.div-flight-content .background .padding .text-color {\n  color: #828282;\n}\n.div-flight-content .background .padding .text-red {\n  color: #e52822;\n}\n.div-flight-content .background .padding .font-thu {\n  margin-top: 1px;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.div-flight-content .background .padding .div-cout {\n  position: absolute;\n  margin-left: 148px;\n  height: 48px;\n}\n.div-flight-content .background .padding .div-img-coffee {\n  bottom: 40px;\n}\n.div-flight-content .background .padding .img-coffee {\n  height: 32px;\n}\n.div-flight-content .background .padding .div-child {\n  font-size: 12px;\n}\n.div-flight-content .background .padding .btn-search {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 52px;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  margin-top: 12px;\n}\n.div-flight-content .background .padding .div-flex-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: 48px;\n}\n.div-flight-content .div-text-yourflight {\n  font-size: 18px;\n  font-weight: 600;\n  letter-spacing: -0.51px;\n  line-height: 1.5;\n  color: #222222;\n  padding-top: 36px;\n}\n.div-flight-content .div-content-yourflight {\n  height: 59px;\n  opacity: 0.9;\n  border-radius: 4px;\n  background: #fff;\n  padding: 8px;\n  margin-top: 8px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title .div-flight-inout {\n  padding: 0px 22px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin-left: 12px;\n}\n.div-flight-content .div-content-yourflight .text-flight-title .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -8px;\n}\n.div-flight-content .div-content-yourflight .text-flight-content {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 1.5;\n}\n.div-flight-content .text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n  margin-top: 4px;\n}\n.div-flight-content .div-topdeal {\n  padding-left: 16px;\n  background: #f2f2f2;\n}\n.div-flight-content .div-topdeal-flight {\n  padding: 0 16px;\n  background: #f2f2f2;\n  padding-bottom: 1px;\n}\n.div-flight-content .div-topdeal-flight .title-topdeal {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #222222;\n}\n.div-flight-content .div-topdeal-flight .subtitle-topdeal {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n}\n.div-flight-content .div-topdeal-flight .div-oneway {\n  width: 12px !important;\n  margin-left: 10px !important;\n  margin-top: 1px !important;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight {\n  width: 100%;\n  height: 126px;\n  border-radius: 3px;\n  background-color: #fff;\n  padding: 16px 8px 0px 8px;\n  justify-content: space-between;\n  display: flex;\n  flex-direction: column;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .text-flight-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first {\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo {\n  height: 30px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo .img-logo {\n  height: 30px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .div-logo .logo-vna {\n  height: 16px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-first .flight-type {\n  width: 110px;\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #4f4f4f;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .flight-price {\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 1.13;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  height: 34px;\n  padding-top: 11px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .text-sub-price {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-time {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second {\n  margin-top: 8px;\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-time {\n  width: 110px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-flight-time {\n  font-size: 16px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n  padding-left: 8px;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n}\n.div-flight-content .div-topdeal-flight .div-item-flight .div-second .div-button .btn-select {\n  width: 66px !important;\n  height: 34px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n}\n.div-flight-content .div-topdeal-flight .div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n.div-flight-content .div-topdeal-flight .div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n.div-flight-content .div-topdeal-flight .div-width-250 {\n  width: 250%;\n}\n.div-flight-content .div-topdeal-flight .div-width-100 {\n  width: 100%;\n}\n.div-flight-content .div-topdeal-flight .div-width-600 {\n  width: 600%;\n}\n.div-flight-content .div-topdeal-flight .text-right {\n  text-align: right;\n}\n.div-flight-content .img-oneway {\n  width: 12px !important;\n  margin-left: 8px;\n  top: -5px;\n}\n@media (min-width: 300px) and (max-width: 350px) {\n  .img-padding.img-location {\n    margin-left: -2px !important;\n  }\n\n  .img-padding.img-checkin {\n    margin-left: -4px !important;\n  }\n\n  .img-padding.img-checkout {\n    margin-left: -22px !important;\n  }\n\n  .img-padding.img-people {\n    margin-left: -4px !important;\n  }\n\n  .col-calendar {\n    padding-right: 0;\n  }\n}\n.div-useful {\n  padding: 0 16px;\n  background: #f2f2f2;\n  padding-bottom: 16px;\n}\n@media (min-width: 412px) and (max-width: 420px) {\n  .div-wrap-search-input {\n    width: 96.2% !important;\n  }\n\n  .swiper-pagination {\n    width: 96.2% !important;\n  }\n}\n.div-flight-trip {\n  height: 100%;\n}\n.mb50 {\n  margin-bottom: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvaG9tZWZsaWdodC9ob21lZmxpZ2h0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZWZsaWdodC9ob21lZmxpZ2h0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUNBSjtBREVFO0VBQ0Usa0JBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0UsNEJBQUE7QUNBSjtBREVFO0VBQ0UsMkJBQUE7QUNBSjtBREdFO0VBQ0Usa0JBQUE7QUNESjtBRElJO0VBRUksOENBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNIUjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNKUjtBRFFRO0VBQ0Usc0JBQUE7RUFFQSw4Q0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNQVjtBRFNNO0VBQ0Usc0JBQUE7RUFFQSwrQ0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNSUjtBRFVNO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1JSO0FEVU07RUFDRSxlQUFBO0FDUlI7QURXUTtFQUNFLGtCQUFBO0FDVFY7QURXUTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDVFY7QURXVTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDVFo7QURhUTtFQUNJLGdCQUFBO0FDWFo7QURhWTtFQUNJLHFCQUFBO0FDWGhCO0FEY1k7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aEZKOztFRGtGRTtJQUNFLDRCQUFBO0VDL0VKOztFRGlGRTtJQUNFLDZCQUFBO0VDOUVKOztFRGdGRTtJQUNFLDRCQUFBO0VDN0VKOztFRCtFRTtJQUNFLGdCQUFBO0VDNUVKO0FBQ0Y7QUQrRUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQzdFSjtBRCtFRTtFQUNFO0lBQ0UsdUJBQUE7RUM1RUo7O0VEOEVFO0lBQ0UsdUJBQUE7RUMzRUo7QUFDRjtBRDhFRTtFQUNFLFlBQUE7QUM1RUo7QUQ4RUU7RUFDRSxtQkFBQTtBQzNFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWVmbGlnaHQvaG9tZWZsaWdodC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LWZsaWdodC1jb250ZW50e1xuICAuZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLm0tb2Zmc2V0LXRvcC0xMDR7XG4gICAgbWFyZ2luLXRvcDogLTEwNHB4O1xuICB9XG4gIC5wLXRvcC00e1xuICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gIH1cbiAgLnAtdG9wLTEye1xuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLm0tdG9wLTE2e1xuICAgIG1hcmdpbi10b3A6IDE2cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgLmRpdi1oaWRkZW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG5cbiAgICAuYmFja2dyb3VuZHtcblxuICAgICAgICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTgycHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDA7XG5cblxuICAgICAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW46IC04cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICB3aWR0aDogOTUuOCU7XG4gICAgICAgIGhlaWdodDogMzcwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zNHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICBcbiAgICAgICAgLmltZy1iYWNrZ3JvdW5ke1xuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU4MnB4KTtcbiAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG4gICAgICAuaW1nLWJhY2tncm91bmQtbm90aWNle1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAvL2hlaWdodDogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjcycHgpICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNjU3cHgpO1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICAgIC5kaXYtd3JhcC1jb250ZW50e1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmYtMTR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5kaXYtcmVsYXRpdmV7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtc3dpdGNoe1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMTJweDtcbiAgICAgICAgICB0b3A6IDM0cHg7XG4gICAgICAgICAgd2lkdGg6IDM2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNmZmY7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzNnB4O1xuXG4gICAgICAgICAgLmltZy1zd2l0Y2h7XG4gICAgICAgICAgICB3aWR0aDogMzZweDtcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGl2LWRpcmVjdGlvbntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgICAgICAgICAgIC5yZC1hY3RpdmV7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LXR3b3dheSwuZGl2LW9uZXdheXtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubGlzdC1kZXBhcnR1cmV7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJkLWRlcGFydHVyZXtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgLy9tYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbntcbiAgICAgICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmQtdGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJhZGlvLW1kIC5yYWRpby1pbm5lcntcbiAgICAgICAgICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtbGlzdC1mbGlnaHR0eXBle1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWctbG9nb3tcbiAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4ICk7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRleHQtY2VudGVye1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBcbiAgICAgICAgLnBhZGRpbmd7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgICAgICAudGV4dC1ob21lLWhvdGVse1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTZweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5sYWJlbC1ob21lLWhvdGVse1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjNweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2V7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE4NXB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLmxhYmVsLWhvbWUtaG90ZWx7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdi13aWR0aHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0LWNvZGV7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dC1jb2RlLWVtcHR5e1xuICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yb3ctZmxpZ2h0e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgICAgICAgICAgICAgICAuaW1nLWlucHV0e1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yb3ctY2luLWNvdXR7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAuZGl2LWNpbntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5pbWctY2hlY2tpbiwgLmltZy1wZW9wbGV7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuaW1nLWNoZWNrb3V0e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdi1pbnB1dC1yaWdodHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNTFweDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbWctY2luLWNvdXR7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4IDE2cHggMTdweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucm93LXBheHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIC50ZXh0LWlucHV0LWZsaWdodHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1MXB4O1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnRleHQtbG9jYXRpb257XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC50ZXh0LWxvY2F0aW9uLWRlc2N7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50ZXh0LWlucHV0LXNlYXJjaHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwIDE0cHggNTFweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50ZXh0LWlucHV0LXNlYXJjaC13cmFwdGV4dHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwIDE0cHggNTFweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC50ZXh0LW1pZGRsZXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnRleHQtY2luLCAudGV4dC1wYXh7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgLnRleHQtY29sb3JcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudGV4dC1yZWR7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNlNTI4MjI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLmZvbnQtdGh1XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdi1jb3V0e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0OHB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRpdi1pbWctY29mZmVle1xuICAgICAgICAgICAgICAgICAgYm90dG9tOjQwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW1nLWNvZmZlZXtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXYtY2hpbGR7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnRuLXNlYXJjaFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LWZsZXgtY2VudGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFxuXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICBcbiAgICAgICBcbiAgICAgIH1cblxuICAgICAgLmRpdi10ZXh0LXlvdXJmbGlnaHR7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzZweDtcbiAgICB9XG5cbiAgICAgIC5kaXYtY29udGVudC15b3VyZmxpZ2h0e1xuICAgICAgICBoZWlnaHQ6IDU5cHg7XG4gICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgICAgICAudGV4dC1mbGlnaHQtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuXG4gICAgICAgICAgICAuZGl2LWZsaWdodC1pbm91dHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDIycHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG5cbiAgICAgICAgICAgICAgLmltZy1mbGlnaHQtaW5vdXR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHRvcDogLThweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIC50ZXh0LWZsaWdodC1jb250ZW50e1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgIC50ZXh0LWZsaWdodC1kYXRldGltZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgfVxuXG4gICAgICAuZGl2LXRvcGRlYWx7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICAgIH1cbiAgICAgIC8vLy8vLy8vLy8vLy9cblxuICAgICAgLmRpdi10b3BkZWFsLWZsaWdodHtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMXB4O1xuXG4gICAgICAgIC50aXRsZS10b3BkZWFse1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIH1cbiAgICAgICAgLnN1YnRpdGxlLXRvcGRlYWx7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmRpdi1vbmV3YXl7XG4gICAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtaXRlbS1mbGlnaHR7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMjZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4IDhweCAwcHggOHB4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICAgICAgICAgIC50ZXh0LWZsaWdodC10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpdi1maXJzdHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgICAgICAgICAgLmRpdi1sb2dve1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICBcbiAgICAgICAgICAgICAgICAgIC5pbWctbG9nb3tcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5sb2dvLXZuYXtcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIC5mbGlnaHQtdHlwZXtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gIFxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmxpZ2h0LXByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xMztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQtc3ViLXByaWNle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGl2LXRpbWV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICAgIC5kaXYtc2Vjb25ke1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgICAgICAgICAgIC5kaXYtdGltZXtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTBweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDk0YjU1O1xuICAgICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgICAuZGl2LWZsaWdodC10aW1le1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNDk0YjU1O1xuICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgXG4gICAgICAgICAgICAgICAgICAuYnRuLXNlbGVjdHtcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjZweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICBcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH1cbiAgICAgIC5kaXYtZmxpZ2h0LWlub3V0e1xuICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgICAgICAgLmltZy1mbGlnaHQtaW5vdXR7XG4gICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmRpdi13aWR0aC0yNTB7XG4gICAgICAgIHdpZHRoOiAyNTAlO1xuICAgICAgfVxuICAgICAgLmRpdi13aWR0aC0xMDB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmRpdi13aWR0aC02MDB7XG4gICAgICAgIHdpZHRoOiA2MDAlO1xuICAgICAgfVxuICAgICAgLnRleHQtcmlnaHR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgICAgfVxuICAgICAgLmltZy1vbmV3YXl7XG4gICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgIH1cbn1cblxuLy8vLy8vbWVkaWFcbkBtZWRpYShtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOjM1MHB4KXtcbiAgICAuaW1nLXBhZGRpbmcuaW1nLWxvY2F0aW9ue1xuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltZy1wYWRkaW5nLmltZy1jaGVja2lue1xuICAgICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmltZy1wYWRkaW5nLmltZy1jaGVja291dHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuaW1nLXBhZGRpbmcuaW1nLXBlb3BsZXtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb2wtY2FsZW5kYXJ7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxuXG4gIC5kaXYtdXNlZnVse1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dHtcbiAgICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc3dpcGVyLXBhZ2luYXRpb257XG4gICAgICB3aWR0aDogOTYuMiUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAuZGl2LWZsaWdodC10cmlwe1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICAubWI1MHtcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICB9IiwiLmRpdi1mbGlnaHQtY29udGVudCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLm0tb2Zmc2V0LXRvcC0xMDQge1xuICBtYXJnaW4tdG9wOiAtMTA0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5wLXRvcC00IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLnAtdG9wLTEyIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQge1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTgycHgpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDA7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5NS44JTtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgbWFyZ2luLXRvcDogLTM0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5pbWctYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1ODJweCk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQtbm90aWNlIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA2NTdweCk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1jb250ZW50IHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmYtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtc3dpdGNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAzNHB4O1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LXN3aXRjaCAuaW1nLXN3aXRjaCB7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLnJkLWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLmRpdi10d293YXksIC5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLmRpdi1vbmV3YXkge1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5saXN0LWRlcGFydHVyZSB7XG4gIG1hcmdpbjogMjtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5yZC1kZXBhcnR1cmUge1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LWRpcmVjdGlvbiAucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLmRpdi1kaXJlY3Rpb24gLnJkLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAuZGl2LWRpcmVjdGlvbiAucmFkaW8tbWQgLnJhZGlvLWlubmVyIHtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5kaXYtZGlyZWN0aW9uIC5kaXYtbGlzdC1mbGlnaHR0eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NnB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHggKTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWhvbWUtaG90ZWwge1xuICBtYXJnaW4tdG9wOiAxMTZweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaG9tZS1ob3RlbCAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2Uge1xuICBtYXJnaW4tdG9wOiAxODVweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2UgLmxhYmVsLWhvbWUtaG90ZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5kaXYtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtY29kZSB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtY29kZS1lbXB0eSB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWZsaWdodCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5yb3ctZmxpZ2h0IC5pbWctaW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICB3aWR0aDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWNpbi1jb3V0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnJvdy1jaW4tY291dCAuZGl2LWNpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWNpbi1jb3V0IC5pbWctY2hlY2tpbiwgLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LWNpbi1jb3V0IC5pbWctcGVvcGxlIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnJvdy1jaW4tY291dCAuaW1nLWNoZWNrb3V0IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTBweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLmRpdi1pbnB1dC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiA1MXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuaW1nLWNpbi1jb3V0IHtcbiAgcGFkZGluZzogMTZweCAyMHB4IDE2cHggMTdweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAucm93LXBheCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWlucHV0LWZsaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiA1MXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtbG9jYXRpb24tZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC50ZXh0LWlucHV0LXNlYXJjaCB7XG4gIG1hcmdpbjogMHB4IDAgMTRweCA1MXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1pbnB1dC1zZWFyY2gtd3JhcHRleHQge1xuICBtYXJnaW46IDRweCAwIDE0cHggNTFweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtbWlkZGxlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1jaW4sIC5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAudGV4dC1yZWQge1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLmZvbnQtdGh1IHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZGl2LWNvdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiAxNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZGl2LWltZy1jb2ZmZWUge1xuICBib3R0b206IDQwcHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5iYWNrZ3JvdW5kIC5wYWRkaW5nIC5pbWctY29mZmVlIHtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuZGl2LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuYmFja2dyb3VuZCAucGFkZGluZyAuYnRuLXNlYXJjaCB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmJhY2tncm91bmQgLnBhZGRpbmcgLmRpdi1mbGV4LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdGV4dC15b3VyZmxpZ2h0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LWNvbnRlbnQteW91cmZsaWdodCB7XG4gIGhlaWdodDogNTlweDtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LWNvbnRlbnQteW91cmZsaWdodCAudGV4dC1mbGlnaHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LWNvbnRlbnQteW91cmZsaWdodCAudGV4dC1mbGlnaHQtdGl0bGUgLmRpdi1mbGlnaHQtaW5vdXQge1xuICBwYWRkaW5nOiAwcHggMjJweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi1jb250ZW50LXlvdXJmbGlnaHQgLnRleHQtZmxpZ2h0LXRpdGxlIC5kaXYtZmxpZ2h0LWlub3V0IC5pbWctZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC04cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtY29udGVudC15b3VyZmxpZ2h0IC50ZXh0LWZsaWdodC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAudGV4dC1mbGlnaHQtZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZy1ib3R0b206IDFweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAudGl0bGUtdG9wZGVhbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLnN1YnRpdGxlLXRvcGRlYWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LW9uZXdheSB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDFweCAhaW1wb3J0YW50O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMjZweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxNnB4IDhweCAwcHggOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAudGV4dC1mbGlnaHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmlyc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LWZpcnN0IC5kaXYtbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmlyc3QgLmRpdi1sb2dvIC5pbWctbG9nbyB7XG4gIGhlaWdodDogMzBweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmlyc3QgLmRpdi1sb2dvIC5sb2dvLXZuYSB7XG4gIGhlaWdodDogMTZweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtZmlyc3QgLmZsaWdodC10eXBlIHtcbiAgd2lkdGg6IDExMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS4xMztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLnRleHQtc3ViLXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LXNlY29uZCAuZGl2LXRpbWUge1xuICB3aWR0aDogMTEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtaXRlbS1mbGlnaHQgLmRpdi1zZWNvbmQgLmRpdi1mbGlnaHQtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWl0ZW0tZmxpZ2h0IC5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1pdGVtLWZsaWdodCAuZGl2LXNlY29uZCAuZGl2LWJ1dHRvbiAuYnRuLXNlbGVjdCB7XG4gIHdpZHRoOiA2NnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTJweDtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAuZGl2LXdpZHRoLTI1MCB7XG4gIHdpZHRoOiAyNTAlO1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuZGl2LXRvcGRlYWwtZmxpZ2h0IC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWZsaWdodC1jb250ZW50IC5kaXYtdG9wZGVhbC1mbGlnaHQgLmRpdi13aWR0aC02MDAge1xuICB3aWR0aDogNjAwJTtcbn1cbi5kaXYtZmxpZ2h0LWNvbnRlbnQgLmRpdi10b3BkZWFsLWZsaWdodCAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1mbGlnaHQtY29udGVudCAuaW1nLW9uZXdheSB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHRvcDogLTVweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLmltZy1wYWRkaW5nLmltZy1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tvdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1wYWRkaW5nLmltZy1wZW9wbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sLWNhbGVuZGFyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG4uZGl2LXVzZWZ1bCB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICAgIHdpZHRoOiA5Ni4yJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICB3aWR0aDogOTYuMiUgIWltcG9ydGFudDtcbiAgfVxufVxuLmRpdi1mbGlnaHQtdHJpcCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1iNTAge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/homeflight/homeflight.page.ts":
/*!***********************************************!*\
  !*** ./src/app/homeflight/homeflight.page.ts ***!
  \***********************************************/
/*! exports provided: HomeflightPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeflightPage", function() { return HomeflightPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
















let HomeflightPage = class HomeflightPage {
    constructor(navCtrl, gf, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, valueGlobal, searchhotel, _flightService, appVersion, networkProvider, platform, bizTravelService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this._flightService = _flightService;
        this.appVersion = appVersion;
        this.networkProvider = networkProvider;
        this.platform = platform;
        this.bizTravelService = bizTravelService;
        this.cindisplay = '25-05-2020';
        this.coutdisplay = '27-05-2020';
        this.cinthu = "Thứ 3";
        this.coutthu = "Thứ 5";
        this.cotdate = 0;
        this.cofdate = 0;
        this.adult = 1;
        this.child = 0;
        this.infant = 0;
        this.flighttype = "twoway";
        this.departCity = "";
        this.departCode = "";
        this.departAirport = "";
        this.returnCity = "";
        this.returnCode = "";
        this.returnAirport = "";
        this.myflight = {};
        this.cinthushort = "";
        this.coutthushort = "";
        this.listflighttopdeal = [];
        this.flightTabActive = 1;
        this.isConnected = true;
        this.roundtriptext = "khứ hồi/khách";
        this.countdaydisplay = 0;
        this.monthtext = "Tháng";
        this.showlowestprice = false;
        this.allowclickcalendar = true;
        this.isNotice = false;
        this.getShowNotice();
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.memberid = jti;
            }
        });
        this.networkProvider.getNetworkStatus().subscribe((connected) => {
            this.isConnected = connected;
        });
        this.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.networkProvider.getNetworkStatus().subscribe((connected) => {
                this.isConnected = connected;
            });
        }));
        this.storage.remove("listAirport");
        this.storage.get("listAirport").then((data) => {
            if (!data) {
                this.loadLocation();
            }
            else {
                this._flightService.listAirport = data;
            }
        });
        this.storage.get("itemFlightCache").then((data) => {
            if (data) {
                data = JSON.parse(data);
                this._flightService.itemFlightCache = data;
                if (data.roundTrip != undefined) {
                    this.flighttype = data.roundTrip ? 'twoway' : 'oneway';
                }
                this.myflight = Object.assign({}, data);
                this.departCode = data.departCode;
                this.departCity = data.departCity;
                this.departAirport = data.departAirport;
                this.returnCode = data.returnCode;
                this.returnCity = data.returnCity;
                this.returnAirport = data.returnAirport;
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(data.checkInDate).diff(new Date(), 'days');
                if (diffday <= 0) {
                    this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
                    this.cout = this.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).add(2, 'days') : this.cin;
                }
                else {
                    this.cin = data.checkInDate;
                    this.cout = data.checkOutDate;
                }
                this.getDayName(this.cin, this.cout);
                this.adult = data.adult;
                this.child = data.child;
                this.infant = data.infant ? data.infant : 0;
                this.arrchild = data.arrchild;
                this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
                this.isExtenal = data.isExtenal;
                if (data.itemSameCity) {
                    this.itemSameCity = data.itemSameCity,
                        this.itemDepartSameCity = data.itemDepartSameCity,
                        this.itemReturnSameCity = data.itemReturnSameCity,
                        this.departCity = data.departCity,
                        this.returnCity = data.returnCity;
                }
            }
            else {
                this.reloadInfo();
            }
        });
        this.storage.get('flighttopdeal').then((data) => {
            if (data) {
                this.loadcachetopdeal(data);
            }
            else {
                this.loadflighttopdeal();
            }
        });
        setTimeout(() => {
            this.loadflighttopdeal();
        }, 60 * 1000);
        this.loadCalendarPrice();
        this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
        if (this.departCode && this.returnCode) {
            if (this.showlowestprice) {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
            }
        }
        this.loadUserInfo();
    }
    ngOnInit() {
        var se = this;
        se._flightService.itemFlightChangePax.pipe().subscribe(data => {
            if (data == 1) {
                se.reloadInfo();
            }
        });
        se._flightService.itemFlightChangeLocation.pipe().subscribe(data => {
            if (data) {
                se.changeLocationInfo(data, se._flightService.searchDepartCode ? true : false);
            }
        });
        se._flightService.itemMenuFlightClick.pipe().subscribe(data => {
            se.zone.run(() => {
                se.flightTabActive = data;
                if (data == 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                }
                else {
                    if (data == 2) {
                        se.loadUserInfo();
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }
            });
        });
        se._flightService.itemFlightReloadInfo.pipe().subscribe(data => {
            if (data == 1) {
                se.reloadInfoFlight();
            }
        });
        se._flightService.itemTabFlightFocus.pipe().subscribe(data => {
            if (data) {
                se.bindlunar();
            }
        });
        se._flightService.itemCheckTabActive.pipe().subscribe((data) => {
            if (se.flightTabActive != 1) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-visible").addClass("cls-disabled");
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".cls-notice").removeClass("cls-disabled").addClass("cls-visible");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            }
        });
        se.bizTravelService.accountBizTravelChange.pipe().subscribe((check) => {
            if (check == 1) {
                se.loadUserInfo();
            }
            else if (check == 2) {
                se.isBizAccount = false;
            }
        });
    }
    loadUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                    if (response.statusCode == 200) {
                        if (body) {
                            var data = JSON.parse(body);
                            se.storage.remove('userInfoData');
                            se.storage.set('userInfoData', data);
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                                se.isBizAccount = true;
                            }
                            else {
                                se.bizTravelService.bizAccount = null;
                                se.bizTravelService.isCompany = false;
                                se.isBizAccount = false;
                            }
                        }
                    }
                    else {
                        se.isBizAccount = false;
                    }
                });
            }
        });
    }
    loadLocation() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/AllPlace?token=3b760e5dcf038878925b5613c32615ea3ds";
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
            if (error) {
                error.page = "homeflight";
                error.func = "loadlocation";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.storage.set("listAirport", result);
                se._flightService.listAirport = result;
            }
        });
    }
    changeLocationInfo(data, isdepart) {
        var se = this;
        if (isdepart) {
            if (!data.SameCity) {
                se.departCode = data.code;
                se.departCity = data.city;
                se.departAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
            }
            else {
                se.itemDepartSameCity = data;
                se.departCity = data.city;
                se.departAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.departCode = "";
            }
        }
        else {
            if (!data.SameCity) {
                se.returnCode = data.code;
                se.returnCity = data.city;
                se.returnAirport = data.airport;
                se.itemSameCity = false;
                se._flightService.itemFlightCache.itemSameCity = false;
                se._flightService.itemFlightCache.itemDepartSameCity = null;
                se._flightService.itemFlightCache.itemReturnSameCity = null;
            }
            else {
                se.itemReturnSameCity = data;
                se.returnCity = data.city;
                se.returnAirport = data.country;
                se._flightService.itemFlightCache.itemSameCity = true;
                se.itemSameCity = true;
                se.returnCode = "";
            }
        }
        se.isExtenal = data.country != "Việt Nam" ? true : false;
        se._flightService.itemFlightCache.isExtenal = data.country != "Việt Nam" ? true : false;
    }
    reloadInfoFlight() {
        if (this._flightService.itemFlightCache) {
            if (this._flightService.itemFlightCache.checkInDate) {
                this.cin = this._flightService.itemFlightCache.checkInDate;
            }
            else {
                this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
            }
            if (this._flightService.itemFlightCache.checkOutDate) {
                this.cout = this._flightService.itemFlightCache.checkOutDate;
            }
            else {
                this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(9, 'days');
            }
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
            this.coutthu = this.getDayOfWeek(this.cout).dayname;
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
            this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            if (this._flightService.itemFlightCache) {
                this.departCity = this._flightService.itemFlightCache.departCity;
                this.returnCity = this._flightService.itemFlightCache.returnCity;
                this.departCode = this._flightService.itemFlightCache.departCode;
                this.returnCode = this._flightService.itemFlightCache.returnCode;
                this.departAirport = this.getAirpot(this.departCode);
                this.returnAirport = this.getAirpot(this.returnCode);
                this.myflight.departCity = this._flightService.itemFlightCache.departCity;
                this.myflight.returnCity = this._flightService.itemFlightCache.returnCity;
                this.myflight.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
                this.myflight.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
                this.myflight.roundTrip = this._flightService.itemFlightCache.roundTrip;
                this.myflight.isExtenal = this._flightService.itemFlightCache.isExtenal;
                this.flighttype = this._flightService.itemFlightCache.roundTrip ? 'twoway' : 'oneway';
            }
        }
    }
    reloadInfo() {
        if (!this.cin) {
            this.cin = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(7, 'days');
            this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
            this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
            this.cinthu = this.getDayOfWeek(this.cin).dayname;
        }
        if (!this.cout) {
            this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).add(9, 'days');
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
            this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
            this.coutthu = this.getDayOfWeek(this.cout).dayname;
        }
        this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.adult) {
            this.adult = this._flightService.itemFlightCache.adult;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.arrchild) {
            this.arrchild = this._flightService.itemFlightCache.arrchild;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.child && this._flightService.itemFlightCache.arrchild) {
            this.child = this._flightService.itemFlightCache.child;
            if (this._flightService.itemFlightCache.arrchild) {
                for (let i = 0; i < this._flightService.itemFlightCache.arrchild.length; i++) {
                    let itemchild = this._flightService.itemFlightCache.arrchild[i];
                    if (itemchild.numage >= 12) {
                        if (this.child > 1) {
                            this.child--;
                            this.adult++;
                        }
                        else {
                            this.child = 0;
                            this.adult++;
                        }
                    }
                }
            }
        }
        else {
            this.child = 0;
        }
        if (this._flightService.itemFlightCache && this._flightService.itemFlightCache.child == 0 && this._flightService.itemFlightCache.arrchild && this._flightService.itemFlightCache.arrchild.length == 0) {
            this._flightService.itemFlightCache.infant = 0;
        }
        this.infant = this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0;
        this._flightService.itemFlightCache.adult = this.adult;
        this._flightService.itemFlightCache.child = this.child;
        this._flightService.itemFlightCache.infant = this.infant ? this.infant : 0;
        this._flightService.itemFlightCache.pax = this.adult + (this.child ? this.child : 0) + (this.infant ? this.infant : 0);
        this._flightService.itemFlightCache.arrchild = this.arrchild;
        this.storage.get("itemFlightCache").then((data) => {
            if (data) {
                this.storage.remove("itemFlightCache").then(() => {
                    this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
                });
            }
            else {
                this.storage.set("itemFlightCache", JSON.stringify(this._flightService.itemFlightCache));
            }
        });
    }
    reloadInfoOneway(isoneway) {
        if (isoneway) {
            this.cout = this.cin;
        }
        else {
            this.cout = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).add(2, 'days');
        }
        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD-MM-YYYY");
        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD-MM-YYYY");
        this.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        this.checkInDisplayMonth = this.getDayOfWeek(this.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format("MM");
        this.checkOutDisplayMonth = this.getDayOfWeek(this.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format("MM");
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format('dddd');
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                this.cinthushort = "T2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                this.cinthushort = "T3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                this.cinthushort = "T4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                this.cinthushort = "T5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                this.cinthushort = "T6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                this.cinthushort = "T7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                this.cinthushort = "CN";
                break;
        }
        this.coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format('dddd');
        switch (this.coutthu) {
            case "Monday":
                this.coutthu = "Thứ 2";
                this.coutthushort = "T2";
                break;
            case "Tuesday":
                this.coutthu = "Thứ 3";
                this.coutthushort = "T3";
                break;
            case "Wednesday":
                this.coutthu = "Thứ 4";
                this.coutthushort = "T4";
                break;
            case "Thursday":
                this.coutthu = "Thứ 5";
                this.coutthushort = "T5";
                break;
            case "Friday":
                this.coutthu = "Thứ 6";
                this.coutthushort = "T6";
                break;
            case "Saturday":
                this.coutthu = "Thứ 7";
                this.coutthushort = "T7";
                break;
            default:
                this.coutthu = "Chủ nhật";
                this.coutthushort = "CN";
                break;
        }
        this.bindlunar();
    }
    radioCheck(value) {
        var itemListDeparture = document.getElementsByClassName('list-flighttype');
        var itemRadioDeparture = document.getElementsByClassName('rd-departure');
        if (value == 1) {
            itemListDeparture[0].setAttribute('aria-activedescendant', "rb-1-0");
            this.flighttype = "twoway";
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-oneway").removeClass("rd-active");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-twoway").addClass("rd-active");
            this.reloadInfoOneway(false);
        }
        else if (value == 2) {
            itemListDeparture[0].setAttribute('aria-activedescendant', "rb-1-1");
            this.flighttype = "oneway";
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-twoway").removeClass("rd-active");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-oneway").addClass("rd-active");
            this.reloadInfoOneway(true);
        }
    }
    searchFlight(index) {
        if (!this.isConnected) {
            this.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        this.valueGlobal.backValue = "homeflight";
        this._flightService.searchDepartCode = index == 1 ? true : false;
        this.navCtrl.navigateForward("/flightsearchairport");
    }
    clickedElement(e) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if ((this.flighttype == "twoway" && (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("endSelection") || jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass("startSelection"))) || (this.flighttype == "oneway" && jquery__WEBPACK_IMPORTED_MODULE_4__(obj).hasClass('on-selected'))) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    this.cofdate = 0;
                    this.cotdate = 0;
                    this.cinthu = "";
                    this.coutthu = "";
                    if (this.flighttype == "twoway") {
                        this.roundtriptext = "khứ hồi/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__(obj.parentNode).hasClass('endSelection')) {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                        else {
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                            }
                            else {
                                fday = jquery__WEBPACK_IMPORTED_MODULE_4__(obj)[0].children[0].textContent;
                            }
                            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                            }
                            else {
                                tday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days.endSelection .days-btn > p')[0].innerText;
                            }
                            objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__(obj).closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                            objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.endSelection').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        }
                    }
                    else {
                        this.roundtriptext = "một chiều/khách";
                        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected > p')[0].textContent;
                        }
                        tday = fday;
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_4__('.on-selected').closest('.month-box').children()[0].textContent.replace('Tháng ', '');
                        objTextMonthEndDate = objTextMonthStartDate;
                    }
                    if (objTextMonthEndDate &&
                        objTextMonthEndDate.length > 0 &&
                        objTextMonthStartDate &&
                        objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.trim().split(",")[0];
                        yearstartdate = objTextMonthStartDate.trim().split(",")[1];
                        monthenddate = objTextMonthEndDate.trim().split(",")[0];
                        yearenddate = objTextMonthEndDate.trim().split(",")[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(fromdate, "days");
                        this.countday = diffday;
                        this.countdaydisplay = this.countday + 1;
                        var se = this;
                        let allowseach = (diffday >= 0) ? true : false;
                        if (fromdate && todate && allowseach) {
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 300);
                            se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("YYYY-MM-DD");
                            se.cout = se.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(todate).format("YYYY-MM-DD") : moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).format("YYYY-MM-DD");
                            se.zone.run(() => {
                                se.datecin = new Date(se.cin);
                                se.datecout = new Date(se.cout);
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD-MM-YYYY");
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD-MM-YYYY");
                                se.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                                se.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                                se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                                se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                                se.storage.get("itemFlightCache").then((data) => {
                                    if (data) {
                                        se.storage.remove("itemFlightCache").then(() => {
                                            se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                                        });
                                    }
                                    else {
                                        se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                                    }
                                });
                                se.bindlunar();
                            });
                        }
                    }
                }
            }
        });
    }
    openPickupCalendar() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.gf.hideStatusBar();
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).format('YYYY-MM-DD'));
            let todate = new Date(moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).format('YYYY-MM-DD'));
            let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
            this.storage.get(key).then((data) => {
                if (!data || (data.arrivals.length == 0 && data.departs.length == 0)) {
                    this.loadCalendarPrice();
                }
            });
            this.countday = moment__WEBPACK_IMPORTED_MODULE_8__(todate).diff(moment__WEBPACK_IMPORTED_MODULE_8__(fromdate), 'days');
            this.countdaydisplay = (this.flighttype == "twoway") ? (this.countday + 1) : 1;
            let _daysConfig = [];
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                _daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: moment__WEBPACK_IMPORTED_MODULE_8__(this.valueGlobal.listlunar[j].date).format("DD/MM") + ': ' + this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
            var options;
            if (this.flighttype == "twoway") {
                options = {
                    pickMode: "range",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDateRange: { from: fromdate, to: todate },
                    daysConfig: _daysConfig
                };
            }
            else {
                options = {
                    pickMode: "single",
                    title: "Chọn ngày",
                    monthFormat: " M, YYYY",
                    weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                    closeLabel: "",
                    doneLabel: "",
                    step: 0,
                    defaultScrollTo: fromdate,
                    defaultDate: fromdate,
                    daysConfig: _daysConfig
                };
            }
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModal"],
                cssClass: 'flight-calendar-custom',
                animated: true,
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                this.allowclickcalendar = true;
                let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
                this.storage.get(key).then((data) => {
                    if (data) {
                        if (this.flighttype == "twoway") {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                });
                this.showlowestprice = this._flightService.itemFlightCache.showCalendarLowestPrice;
                setTimeout(() => {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-toolbar ion-buttons[slot=end]').append("<div class='div-close' (click)='closecalendar()'> <img class='header-img-close' src='./assets/ic_close.svg' ></div>");
                    if (this.countdaydisplay > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'>${this.countdaydisplay} ngày <img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex bg-f2'><div class='div-width-100'> <div class='text-header-normal'>Giá ${this.roundtriptext}</div> </div> <div class='text-header-normal div-width-100 text-right div-calendar-cincout'>Hành trình <span class='text-tealish p-l-4'><img class='img-down' src='./assets/imgs/ic_down.svg'></span></div></div>`);
                    }
                    if (this.flighttype == "twoway") {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> <div class='div-width-100'><div class='text-date-normal p-l-8'>Ngày về</div> <div class='text-flight-datetime p-l-8 border-left' *ngIf='flighttype=='twoway''>${this.checkOutDisplayMonth} </div></div></div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal ion-calendar-week ion-toolbar').before(`<div class='d-flex p-16 div-show-calendar-cincout calendar-visible'> <div class='div-width-100'> <div class='text-date-normal'>Ngày đi</div><div class='text-flight-datetime'>${this.checkInDisplayMonth} </div></div> </div>`);
                    }
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' (ionChange)="showLowestPrice($event)" [(ngModel)]="showlowestprice" checked></ion-toggle></div> </div>`);
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom ion-calendar-modal').append(`<div class='d-flex div-lowest-price'><div class='div-width-100 text-lowest-price'>Xem giá ước tính thấp nhất</div> <div class='div-width-100 toggle-right'><ion-toggle style='--handle-height: 24px' class='button-show-lowest-price' mode='ios' [(ngModel)]="showlowestprice"></ion-toggle></div> </div>`);
                    }
                    var container = document.querySelector(".button-show-lowest-price");
                    container.addEventListener("touchend", (e) => {
                        this.showLowestPrice(e);
                    }, false);
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length > 0) {
                        for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title').length; index++) {
                            const elementMonthTitle = jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .month-box .month-title')[index];
                            elementMonthTitle.textContent = 'Tháng' + elementMonthTitle.textContent;
                        }
                    }
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.flight-calendar-custom .header-img-close').click((e => this.closecalendar()));
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".days-btn").click(e => this.clickedElement(e));
                    if (this.showlowestprice) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                    }
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout')) {
                        jquery__WEBPACK_IMPORTED_MODULE_4__('.div-calendar-cincout').click(e => this.showCalendarCinCout());
                    }
                    let divmonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box');
                    if (divmonth && divmonth.length > 0) {
                        for (let index = 0; index < divmonth.length; index++) {
                            const em = divmonth[index];
                            let divsmall = jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' small');
                            if (divsmall && divsmall.length > 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id).append("<div class='div-month-text-small'></div>");
                                for (let i = 0; i < divsmall.length; i++) {
                                    const es = divsmall[i];
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('#' + em.id + ' .div-month-text-small').append("<div class='sm-" + em.id + '-' + i + "'></div>");
                                    jquery__WEBPACK_IMPORTED_MODULE_4__('.sm-' + em.id + '-' + i).append(es);
                                }
                            }
                        }
                    }
                }, 10);
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            const date = event.data;
            if (event.data) {
                const from = date.from;
                const to = date.to;
                se.cin = moment__WEBPACK_IMPORTED_MODULE_8__(from.dateObj).format("YYYY-MM-DD");
                se.cout = se.flighttype == "twoway" ? moment__WEBPACK_IMPORTED_MODULE_8__(to.dateObj).format("YYYY-MM-DD") : moment__WEBPACK_IMPORTED_MODULE_8__(from.dateObj).format("YYYY-MM-DD");
                se.zone.run(() => {
                    se.datecin = new Date(se.cin);
                    se.datecout = new Date(se.cout);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD-MM-YYYY");
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD-MM-YYYY");
                    se.cindisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                    se.coutdisplaymonth = moment__WEBPACK_IMPORTED_MODULE_8__(se.datecout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                    se.checkInDisplayMonth = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
                    se.checkOutDisplayMonth = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
                    se.getDayName(se.datecin, se.datecout);
                });
            }
        });
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    bindlunar() {
        var se = this;
        se.cofdate = 0;
        se.cotdate = 0;
        if (se.valueGlobal.listlunar) {
            for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
                var checkdate = moment__WEBPACK_IMPORTED_MODULE_8__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
                if (checkdate == se.cin) {
                    se.cofdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.cinthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
                if (checkdate == se.cout) {
                    se.cotdate = 1;
                    if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                        var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                        if (ischecklunar) {
                            se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                        }
                        else {
                            se.coutthu = se.valueGlobal.listlunar[i].name;
                        }
                    }
                }
                else {
                    this.getDayName(this.datecin, this.datecout);
                }
            }
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu || !this.cinthushort) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    this.cinthushort = "T2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    this.cinthushort = "T3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    this.cinthushort = "T4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    this.cinthushort = "T5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    this.cinthushort = "T6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    this.cinthushort = "T7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    this.cinthushort = "CN";
                    break;
            }
        }
        if (!this.coutthu || !this.coutthushort) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_8__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    this.coutthushort = "T2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    this.coutthushort = "T3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    this.coutthushort = "T4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    this.coutthushort = "T5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    this.coutthushort = "T6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    this.coutthushort = "T7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    this.coutthushort = "CN";
                    break;
            }
        }
    }
    getDayOfWeek(date) {
        let d = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('dddd');
        let dayname = '', daynameshort = '';
        switch (d) {
            case "Monday":
                dayname = "Thứ 2";
                daynameshort = "T2";
                break;
            case "Tuesday":
                dayname = "Thứ 3";
                daynameshort = "T3";
                break;
            case "Wednesday":
                dayname = "Thứ 4";
                daynameshort = "T4";
                break;
            case "Thursday":
                dayname = "Thứ 5";
                daynameshort = "T5";
                break;
            case "Friday":
                dayname = "Thứ 6";
                daynameshort = "T6";
                break;
            case "Saturday":
                dayname = "Thứ 7";
                daynameshort = "T7";
                break;
            default:
                dayname = "Chủ nhật";
                daynameshort = "CN";
                break;
        }
        return { dayname: dayname, daynameshort: daynameshort };
    }
    choicePax() {
        this.gf.hideStatusBar();
        if (this.adult) {
            this._flightService.itemFlightCache.adult = this.adult;
        }
        if (this.child) {
            this._flightService.itemFlightCache.child = this.child;
        }
        if (this.infant) {
            this._flightService.itemFlightCache.infant = this.infant;
        }
        if (this.arrchild) {
            this._flightService.itemFlightCache.arrchild = this.arrchild;
        }
        this.gf.setParams(false, "requestcombo");
        this.navCtrl.navigateForward("/flightselectpax");
    }
    checkValidDate() {
        return moment__WEBPACK_IMPORTED_MODULE_8__(this.cin).diff(new Date(), 'days') < 0 ? false : true;
    }
    search() {
        var se = this;
        se._flightService.itemFlightCache = {};
        se._flightService.objectFilter = {};
        se._flightService.objectFilterReturn = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
        if (!se.departCode || !se.returnCode) {
            se.gf.showToastWarning('Vui lòng chọn chiều đi, chiều về.');
            return;
        }
        if (se.departCode && se.returnCode && se.departCode === se.returnCode) {
            se.gf.showToastWarning('Điểm khởi hành không được trùng với điểm đến. Vui lòng kiểm tra lại.');
            return;
        }
        if (!se.checkValidDate()) {
            se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại.');
            return;
        }
        se._flightService.objSearch = {
            departCode: se.departCode,
            arrivalCode: se.returnCode,
            departDate: se.cin,
            returnDate: se.cout,
            adult: se.adult,
            child: se.child ? se.child : 0,
            infant: se.infant ? se.infant : 0,
            title: "Đi " + se.departCity + " - " + se.returnCity,
            subtitle: se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách",
            titleReturn: "Về " + se.returnCity + " - " + se.departCity,
            subtitleReturn: se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD-M-YYYY") + " · " + (se.adult + se.child + (se.infant ? se.infant : 0)) + " khách",
            itemSameCity: se.itemSameCity,
            itemDepartSameCity: se.itemDepartSameCity,
            itemReturnSameCity: se.itemReturnSameCity,
            departCity: se.departCity,
            returnCity: se.returnCity,
            roundTrip: (se.flighttype == "twoway") ? true : false
        };
        se._flightService.itemFlightCache.roundTrip = (se.flighttype == "twoway") ? true : false;
        se._flightService.itemFlightCache.checkInDate = se.cin;
        se._flightService.itemFlightCache.checkOutDate = se.cout;
        se._flightService.itemFlightCache.checkInDisplayMonth = se.cindisplaymonth;
        se._flightService.itemFlightCache.checkOutDisplayMonth = se.coutdisplaymonth;
        se._flightService.itemFlightCache.adult = se.adult;
        se._flightService.itemFlightCache.child = se.child;
        se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
        se._flightService.itemFlightCache.pax = se.adult + (se.child ? se.child : 0) + (se.infant ? se.infant : 0);
        se._flightService.itemFlightCache.arrchild = se.arrchild;
        se._flightService.itemFlightCache.departCity = se.departCity;
        se._flightService.itemFlightCache.departCode = se.departCode;
        se._flightService.itemFlightCache.departAirport = se.departAirport;
        se._flightService.itemFlightCache.returnCity = se.returnCity;
        se._flightService.itemFlightCache.returnCode = se.returnCode;
        se._flightService.itemFlightCache.returnAirport = se.returnAirport;
        se._flightService.itemFlightCache.step = 1;
        se._flightService.itemFlightCache.isExtenal = se.isExtenal;
        se._flightService.itemFlightCache.departTimeDisplay = se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.returnTimeDisplay = se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + se.cinthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + se.coutthu + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.departPaymentTitleDisplay = se.cinthushort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD-MM") + " · " + se.departCode + " - " + se.returnCode + " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = se.coutthushort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD-MM") + " · " + se.returnCode + " - " + se.departCode + " · ";
        se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(se.cin).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(se.cout).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.checkInDisplaysort = se.getDayOfWeek(se.cin).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cin).format("MM");
        se._flightService.itemFlightCache.checkOutDisplaysort = se.getDayOfWeek(se.cout).daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(se.cout).format("MM");
        se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
        if (se.itemSameCity) {
            se._flightService.itemFlightCache.itemSameCity = se.itemSameCity;
            se._flightService.itemFlightCache.itemDepartSameCity = se.itemDepartSameCity;
            se._flightService.itemFlightCache.itemReturnSameCity = se.itemReturnSameCity;
        }
        se.storage.get("itemFlightCache").then((data) => {
            if (data) {
                se.storage.remove("itemFlightCache").then(() => {
                    se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
                });
            }
            else {
                se.storage.set("itemFlightCache", JSON.stringify(se._flightService.itemFlightCache));
            }
        });
        se.navCtrl.navigateForward("/flightsearchresult");
    }
    showMyFlight() {
        var se = this;
        if (!se.isConnected) {
            se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        se.storage.get("itemFlightCache").then((data) => {
            data = JSON.parse(data);
            if (data.objSearch) {
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(data.checkInDate).diff(new Date(), 'days');
                if (diffday < 0) {
                    se.gf.showToastWarning('Ngày khởi hành không được nhỏ hơn ngày hiện tại. Vui lòng chọn lại!');
                    return;
                }
                se._flightService.itemFlightCache = data;
                se._flightService.objSearch = data.objSearch;
                se.navCtrl.navigateForward("/flightsearchresult");
            }
        });
    }
    switchDepart() {
        var se = this;
        let dc = document.getElementsByClassName('div-departcode')[0];
        let rc = document.getElementsByClassName('div-returncode')[0];
        let tempdepartcity = se.returnCity;
        let tempdepartcode = se.returnCode;
        let tempdepartairport = se.returnAirport;
        se.returnCity = se.departCity;
        se.returnCode = se.departCode;
        se.returnAirport = se.departAirport;
        se._flightService.itemFlightCache.returnCity = se.returnCity;
        se._flightService.itemFlightCache.returnCode = se.returnCode;
        se._flightService.itemFlightCache.returnAirport = se.returnAirport;
        se.departCity = tempdepartcity;
        se.departCode = tempdepartcode;
        se.departAirport = tempdepartairport;
        se._flightService.itemFlightCache.departCity = se.departCity;
        se._flightService.itemFlightCache.departCode = se.departCode;
        se._flightService.itemFlightCache.departAirport = se.departAirport;
    }
    loadflighttopdeal() {
        var se = this;
        let urlPath = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetHotDeal" + (se.memberid ? "?memberid=" + se.memberid : "");
        var options = {
            method: 'GET',
            url: urlPath,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            'headers': {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            },
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
            if (error) {
                error.page = "homeflight";
                error.func = "loadflighttopdeal";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            ;
            let result = JSON.parse(body);
            if (result && result.length > 0) {
                se.storage.get('flighttopdeal').then((data) => {
                    if (data) {
                        se.storage.remove('flighttopdeal').then(() => {
                            se.storage.set("flighttopdeal", result);
                            se.loadcachetopdeal(data);
                        });
                    }
                    else {
                        se.storage.set("flighttopdeal", result);
                        se.loadcachetopdeal(result);
                    }
                });
            }
        });
    }
    loadcachetopdeal(data) {
        var se = this;
        se.zone.run(() => data.sort(function (a, b) {
            let direction = -1;
            if (a['price'] * 1 < b['price'] * 1) {
                return 1 * direction;
            }
            else if (a['price'] * 1 > b['price'] * 1) {
                return -1 * direction;
            }
        }));
        data.forEach(element => {
            element.roundTrip = false;
            if (element.depart) {
                element.fromPlaceName = element.depart.fromPlaceName;
                element.toPlaceNameDisplay = element.depart.toPlaceName.split(',')[0];
                element.dateDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('DD.MM');
                element.dateDepartDisplay = se.getDayOfWeek(element.depart.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('DD') + ' thg ' + moment__WEBPACK_IMPORTED_MODULE_8__(element.depart.departTime).format('MM');
            }
            if (element.return) {
                element.dateDisplay += " - " + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('DD.MM');
                element.dateReturnDisplay = se.getDayOfWeek(element.return.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('DD') + ' thg ' + moment__WEBPACK_IMPORTED_MODULE_8__(element.return.departTime).format('MM');
                element.roundTrip = true;
            }
            element.priceDisplay = se.gf.convertNumberToString(element.price);
        });
        se.listflighttopdeal = data;
    }
    select(item) {
        var se = this;
        if (!se.isConnected) {
            se.gf.showToastWarning('Thiết bị đang không kết nối mạng, vui lòng bật kết nối để tiếp tục thao tác!');
            return;
        }
        se._flightService.objectFilter = {};
        se._flightService.itemFlightCache.departFlight = null;
        se._flightService.itemFlightCache.returnFlight = null;
        se._flightService.itemFlightCache.itemFlight = null;
        se.storage.remove('flightfilterobject');
        let objday = se.getDayOfWeek(item.depart.departTime);
        let objdayreturn = se.getDayOfWeek(item.return.departTime);
        se._flightService.objSearch = {
            departCode: item.depart.fromPlace,
            arrivalCode: item.return.fromPlace,
            departDate: item.depart.departTime,
            returnDate: item.return.departTime,
            adult: se.adult ? se.adult : 1,
            child: se.child ? se.child : 0,
            infant: se.infant ? se.infant : 0,
            title: "Đi " + item.fromPlaceName + " - " + item.toPlaceNameDisplay,
            subtitle: objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD-M-YYYY") + " · " + ((se.adult ? se.adult : 1) + (se.child ? se.child : 0) + (se.infant ? se.infant : 0)) + " khách",
            titleReturn: "Về " + item.toPlaceNameDisplay + " - " + item.fromPlaceName,
            subtitleReturn: objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD-M-YYYY") + " · " + 1 + " khách",
            itemSameCity: null,
            itemDepartSameCity: "",
            itemReturnSameCity: "",
            departCity: item.fromPlaceName,
            returnCity: item.toPlaceNameDisplay,
            roundTrip: item.roundTrip
        };
        se._flightService.itemFlightCache.roundTrip = item.roundTrip;
        se._flightService.itemFlightCache.checkInDate = item.depart.departTime;
        se._flightService.itemFlightCache.checkOutDate = item.return.departTime;
        se._flightService.itemFlightCache.checkInDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.checkOutDisplayMonth = moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.adult = se.adult ? se.adult : 1;
        se._flightService.itemFlightCache.child = se.child ? se.child : 0;
        se._flightService.itemFlightCache.infant = se.infant ? se.infant : 0;
        se._flightService.itemFlightCache.pax = se._flightService.itemFlightCache.adult * 1 + se._flightService.itemFlightCache.child * 1 + se._flightService.itemFlightCache.infant * 1;
        se._flightService.itemFlightCache.arrchild = se.arrchild ? se.arrchild : [];
        se._flightService.itemFlightCache.departCity = item.fromPlaceName;
        se._flightService.itemFlightCache.departCode = item.depart.fromPlace;
        se._flightService.itemFlightCache.departAirport = "";
        se._flightService.itemFlightCache.returnCity = item.toPlaceNameDisplay;
        se._flightService.itemFlightCache.returnCode = item.return.fromPlace;
        se._flightService.itemFlightCache.returnAirport = "";
        se._flightService.itemFlightCache.step = 1;
        se._flightService.itemFlightCache.departTimeDisplay = objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.returnTimeDisplay = objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.departInfoDisplay = "Chiều đi" + " · " + objday.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.returnInfoDisplay = "Chiều về" + " · " + objdayreturn.dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.departPaymentTitleDisplay = objday.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD-MM") + " · " + item.depart.fromPlace + " - " + item.return.fromPlace + " · ";
        se._flightService.itemFlightCache.returnPaymentTitleDisplay = objdayreturn.daynameshort + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD-MM") + " · " + item.return.fromPlace + " - " + item.depart.fromPlace + " · ";
        se._flightService.itemFlightCache.checkInDisplay = se.getDayOfWeek(item.depart.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.depart.departTime).format("MM");
        se._flightService.itemFlightCache.checkOutDisplay = se.getDayOfWeek(item.return.departTime).dayname + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("DD") + " thg " + moment__WEBPACK_IMPORTED_MODULE_8__(item.return.departTime).format("MM");
        se._flightService.itemFlightCache.objSearch = se._flightService.objSearch;
        se.navCtrl.navigateForward("/flightsearchresult");
    }
    getAirpot(code) {
        let name = '';
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].airport : '';
        return name;
    }
    getRegionByCode(code) {
        let itemairport = this._flightService.listAirport.filter((itemairport) => { return itemairport.code == code; });
        return itemairport && itemairport.length > 0 ? itemairport[0].city : '';
    }
    closecalendar() {
        this.modalCtrl.dismiss();
    }
    showLowestPrice(event) {
        setTimeout(() => {
            this.showlowestprice = event.target.checked;
            this._flightService.itemFlightCache.showCalendarLowestPrice = this.showlowestprice;
            if (this.departCode && this.returnCode) {
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
            else {
                this.gf.showToastWarning('Vui lòng chọn điểm khởi hành và điểm đến trước khi xem lịch giá rẻ.');
            }
        }, 100);
    }
    loadCalendarPrice() {
        if (this.departCode && this.returnCode) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetHotDealCalendar?fromplace=" + this.departCode + "&toplace=" + this.returnCode + "&getincache=false";
            this.gf.RequestApi("GET", url, {
                "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                'Content-Type': 'application/json; charset=utf-8'
            }, {}, "homeflight", "showCalendarPrice").then((data) => {
                if (data) {
                    let key = "listHotDealCalendar_" + this.departCode + "_" + this.returnCode;
                    if (data && data.departs && data.departs.length > 0) {
                        this.storage.set(key, data);
                        if (this.flighttype == "twoway") {
                            this.renderCalenderPrice(1, data.departs, data.arrivals);
                        }
                        else {
                            this.renderCalenderPrice(2, data.departs, null);
                        }
                    }
                }
            });
        }
    }
    renderCalenderPrice(type, departs, arrivals) {
        var se = this;
        try {
            if (jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length > 0) {
                let diffday = moment__WEBPACK_IMPORTED_MODULE_8__(this.cout).diff(this.cin, "days");
                for (let index = 0; index < jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box').length; index++) {
                    const elementMonth = jquery__WEBPACK_IMPORTED_MODULE_4__('.month-box')[index];
                    let objtextmonth = elementMonth.children[0].textContent.replace('Tháng ', '');
                    let monthstartdate = objtextmonth.trim().split(",")[0];
                    let yearstartdate = objtextmonth.trim().split(",")[1];
                    let textmonth = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, 1)).format('YYYY-MM');
                    if (objtextmonth && objtextmonth.length > 0) {
                        let listdepartinmonth = departs.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        let listreturninmonth;
                        if (this.flighttype == "twoway") {
                            listreturninmonth = arrivals.filter((item) => { return moment__WEBPACK_IMPORTED_MODULE_8__(item.departTime).format('YYYY-MM') == textmonth; });
                        }
                        let listdayinmonth = elementMonth.children[1].children[0].children[0].children;
                        if (listdayinmonth && listdayinmonth.length > 0) {
                            for (let j = 0; j < listdayinmonth.length; j++) {
                                const elementday = listdayinmonth[j];
                                if (elementday && elementday.textContent) {
                                    let fday = elementday.textContent;
                                    let fromdate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(yearstartdate, monthstartdate - 1, fday)).format('YYYY-MM-DD');
                                    let todate = moment__WEBPACK_IMPORTED_MODULE_8__(fromdate).add(diffday, 'days').format('YYYY-MM-DD');
                                    if (fromdate) {
                                        if (type == 1) {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minreturnvalue = Math.min(...listreturninmonth.map(o => o.price));
                                            let minvalue = mindepartvalue + minreturnvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let pricetodate = 0;
                                            let itemtodate = listreturninmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == todate; });
                                            if (itemtodate && itemtodate.length > 0) {
                                                pricetodate = itemtodate[0].price;
                                            }
                                            if (pricefromdate && pricetodate) {
                                                let totalpriceitem = pricefromdate + pricetodate;
                                                let totalprice = (totalpriceitem) / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(totalpriceitem / 1000)) : Math.round((totalpriceitem / 1000));
                                                totalprice = totalprice + "K";
                                                if (minvalue == totalpriceitem) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                        else {
                                            let mindepartvalue = Math.min(...listdepartinmonth.map(o => o.price));
                                            let minvalue = mindepartvalue;
                                            let pricefromdate = 0;
                                            let itemfromdate = listdepartinmonth.filter((d) => { return moment__WEBPACK_IMPORTED_MODULE_8__(d.departTime).format('YYYY-MM-DD') == fromdate; });
                                            if (itemfromdate && itemfromdate.length > 0) {
                                                pricefromdate = itemfromdate[0].price;
                                            }
                                            let totalprice = pricefromdate / 1000 >= 1000 ? se.gf.convertNumberToString(Math.round(pricefromdate / 1000)) : Math.round(pricefromdate / 1000);
                                            totalprice = totalprice + "K";
                                            if (pricefromdate) {
                                                if (minvalue == pricefromdate) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled min-price'>${totalprice}</span>`);
                                                }
                                                else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_4__(elementday.children[0]).append(`<span class='price-calendar-text m-l-5 price-calendar-disabled'>${totalprice}</span>`);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this.showlowestprice) {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-disabled').addClass('price-calendar-visible');
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_4__('.price-calendar-text').removeClass('price-calendar-visible').addClass('price-calendar-disabled');
                }
            }
        }
        catch (error) {
            console.log('Lỗi jquery khi show lịch giá rẻ: ' + error);
        }
    }
    showCalendarCinCout() {
        var se = this;
        if (jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').hasClass('calendar-visible')) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-visible').addClass('calendar-disabled');
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-show-calendar-cincout').removeClass('calendar-disabled').addClass('calendar-visible');
        }
    }
    loadflighttrips() {
        return new Promise((resolve, reject) => {
            this.storage.get('listmytrips').then(data => {
                if (data) {
                    resolve(data);
                }
                else {
                    this.getdata().then((data) => {
                        resolve(data);
                    });
                }
            });
        });
    }
    getdata() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.storage.get('auth_token').then(auth_token => {
                if (auth_token) {
                    var text = "Bearer " + auth_token;
                    var options = {
                        method: 'GET',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getMyTripPaging?getall=true&getHistory=false&pageIndex=1&pageSize=25',
                        headers: {
                            'accept': 'application/json',
                            'content-type': 'application/json-patch+json',
                            authorization: text
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response, body) {
                        if (error) {
                            error.page = "mytrips";
                            error.func = "getdata";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                        }
                        else {
                            if (body) {
                                se.zone.run(() => {
                                    let lstTrips = JSON.parse(body);
                                    se.storage.get('listmytrips').then(data => {
                                        if (data) {
                                            se.storage.remove('listmytrips').then(() => {
                                                se.storage.set('listmytrips', lstTrips);
                                            });
                                        }
                                        else {
                                            se.storage.set('listmytrips', lstTrips);
                                        }
                                    });
                                    resolve(lstTrips);
                                });
                            }
                        }
                    });
                }
                else {
                    resolve([]);
                }
            });
        });
    }
    filterFlightTopDealByTrips(data) {
        var se = this;
        data = data.filter((datatrip) => { return datatrip.booking_id.indexOf('FLY') != -1 || datatrip.booking_id.indexOf('VMB') != -1 || datatrip.booking_type == 'FLY' || datatrip.booking_type == 'VMB'; });
        if (data && data.length > 0) {
            let listdepartcode = data.map((itemfilter) => { return itemfilter.bookingsComboData[0].departCode; });
            if (listdepartcode && listdepartcode.length > 0) {
                let res = listdepartcode.some(r => r == se.departCode);
                if (!res) {
                    listdepartcode.push(se.departCode);
                }
                const uniqueCode = [...new Set(listdepartcode.map(obj => obj))];
                if (uniqueCode && uniqueCode.length > 0) {
                    se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => {
                        let res = uniqueCode.some(code => code == itemdhd.depart.fromPlace);
                        return res;
                    });
                }
            }
            else {
                if (se.departCode) {
                    se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode; });
                }
            }
        }
        else {
            if (se.departCode) {
                se.listflighttopdeal = se.listflighttopdeal.filter((itemdhd) => { return itemdhd.depart.fromPlace === se.departCode; });
            }
        }
    }
    getShowNotice() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/getCovidNotify',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_12__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var data = JSON.parse(response.body);
            se.isNotice = data.show;
        });
    }
};
HomeflightPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homeflight',
        template: __webpack_require__(/*! ./homeflight.page.html */ "./src/app/homeflight/homeflight.page.html"),
        styles: [__webpack_require__(/*! ./homeflight.page.scss */ "./src/app/homeflight/homeflight.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["SearchHotel"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_11__["flightService"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_14__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_15__["BizTravelService"]])
], HomeflightPage);



/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");
/* harmony import */ var _homeflight_homeflight_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../homeflight/homeflight.module */ "./src/app/homeflight/homeflight.module.ts");








const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]
    }
];
let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _homeflight_homeflight_module__WEBPACK_IMPORTED_MODULE_7__["HomeflightPageModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content\n  #scrollArea\n  [fullscreen]=\"true\"\n  class=\"cls-content-cover\"\n  style=\"-background:transparent;overflow: hidden;--offset-bottom: 0px !important;\"\n  [scrollEvents]=\"true\"\n  (ionScroll)=\"scrollFunction($event)\"\n>\n  <ion-refresher *ngIf=\"activeTab ==0\"\n    style=\"margin-top: 24px;\"\n    slot=\"fixed\"\n    pullMin=\"100\"\n    pullMax=\"200\"\n    (ionRefresh)=\"doRefresh($event)\"\n  >\n    <ion-refresher-content\n      pullingIcon=\"none\"\n      refreshingSpinner=\"circles\"\n      refreshingText=\"\"\n    ></ion-refresher-content>\n  </ion-refresher>\n  \n<div class=\"div-wraper-home\">\n  <div class=\"cls-notice cls-disabled\" *ngIf=\"isNotice\">\n    <div class=\"div-notice\">\n      <img class=\"img-notice\" src=\"./assets/ic_home/info.svg\" />\n    </div>\n    <div class=\"margin-left-11\">\n      <div class=\"text-info\">\n        Cập Nhật Thông Tin Kiểm Soát Dịch Bệnh Tại Các Địa Phương Trong Nước. <a (click)=\"openWebpage('https://www.ivivu.com/blog/2021/06/nhung-dieu-quan-trong-can-luu-y-khi-du-lich-trong-mua-dich/')\"\n          target=\"_blank\">Xem chi tiết</a></div>\n    </div>\n  </div>\n  <div [ngClass]=\"isNotice ? 'swiper-pagination-notice' : 'swiper-pagination'\">\n    <div (click)=\"setActiveTab(0)\" [ngClass]=\"activeTab ==0 ? 'div-hotel' : 'div-hotel home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/hotel_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/hotel_disabled.svg\" *ngIf=\"activeTab !=0\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==0 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Khách sạn</div>\n    </div>\n\n    <div (click)=\"setActiveTab(1)\" [ngClass]=\"activeTab ==1 ? 'div-flight' : 'div-flight home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/flight_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/flight_disabled.svg\" *ngIf=\"activeTab !=1\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==1 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Vé máy bay</div>\n    </div>\n\n    <div (click)=\"setActiveTab(2)\" [ngClass]=\"activeTab ==2 ? 'div-combo' : 'div-combo home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/combo_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/combo_disabled.svg\" *ngIf=\"activeTab !=2\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==2 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Combo</div>\n    </div>\n\n    <div (click)=\"setActiveTab(3)\" [ngClass]=\"activeTab ==3 ? 'div-food' : 'div-food home-deactive-tab'\">\n      <div class=\"div-icon-home text-center\">\n          <img src=\"./assets/ic_home/food_enable.svg\" />\n          <!-- <img src=\"./assets/ic_home/food_disabled.svg\" *ngIf=\"activeTab !=3\"/> -->\n      </div>\n      <div [ngClass]=\"activeTab ==3 ? 'div-text-home text-center home-active-tab' : 'div-text-home text-center ' \">Bữa trưa</div>\n    </div>\n\n    <!-- <div class=\"div-food\" (click)=\"setActiveTab(3)\">Ăn uống</div> -->\n    \n    <!-- <div class=\"active-mark\"></div> -->\n  </div>\n  <ion-slides (ionSlideDidChange)=\"slidechange()\" #myHomeSlider class=\"home-slider\" >\n    <ion-slide class=\"slide-hotel\">\n       \n    </ion-slide>\n\n    <ion-slide class=\"slide-flight\">\n        \n    </ion-slide>\n\n    <ion-slide class=\"slide-combo\">\n        \n    </ion-slide>\n\n    <ion-slide class=\"slide-food\">\n        \n    </ion-slide>\n\n   \n  </ion-slides>\n</div>\n<div [ngClass]=\"activeTab ==0 ? 'div-wraper-hotel cls-visible' : 'div-wraper-hotel cls-disabled'\">\n  <div [ngClass]=\"isNotice ? 'background-notice' : 'background'\">\n    <img class=\"img-background\" src=\"./assets/blue.jpg\">\n    <div class=\"div-wrap-background\"></div>\n    \n    <div class=\"div-wrap-search\" style=\"text-align: center\">\n      <img class=\"img-logo\" src=\"./assets/logo/logo.svg\" />\n    </div>\n    <div *ngIf=\"ischeckvmb == true\"></div>\n    <div *ngIf=\"ischeckks == true\" padding=\"\">\n      <div [ngClass]=\"isNotice ? 'text-home-hotel-notice' : 'text-home-hotel'\">\n        <label class=\"label-home-hotel\">\n          Trải nghiệm kỳ nghỉ tuyệt vời\n        </label>\n      </div>\n      <div class=\"div-wrap-search-input\"></div>\n        <ion-row class=\"row-search-home\" (click)=\"change()\">\n          <div class=\"div-width\">\n            <div class=\"img-input\">\n              <img\n                class=\"img-padding img-location\"\n                src=\"./assets/iocnsearch/ic_location.svg\"\n              />\n            </div>\n  \n            <div class=\"div-input-right text-input-search\">\n              <div *ngIf=\"!input\" class=\"text-placeholder text-middle\">\n                Bạn muốn đi đâu?\n              </div>\n              <div *ngIf=\"input\" class=\"text-search text-middle\">\n                {{ input }}\n              </div>\n            </div>\n          </div>\n        </ion-row>\n        \n        <div *ngIf=\"ischecksearch == false\">\n          <ion-row\n            style=\"background: #ffffff;border-radius: 2px;height:48px;margin-top: 8px\"\n            (click)=\"openPickupCalendar(false)\"\n          >\n          <div class=\"div-width\">\n            <div class=\"div-cin\">\n                <div class=\"img-cin-cout\"><img class=\"img-padding img-checkin\" src=\"./assets/iocnsearch/ic_checkin.svg\"/></div>\n  \n                <div class=\"div-input-right text-input-cin\">\n                  <div *ngIf=\"searchhotel.cindisplay else loaddingcin\">\n                    <div class=\"text-cin\">\n                      <label class=\"text-cin-input\">{{ searchhotel.cindisplay }}</label>\n                    </div>\n                    <div class=\"font-thu\" *ngIf=\"cofdate==0\">\n                      <label class=\"text-color text-cinthu\">{{ searchhotel.cinthu }}</label>\n                    </div>\n                    <div class=\"font-thu\" *ngIf=\"cofdate==1\" >\n                      <label class=\"text-color text-cinthu\" style=\"color: #e52822;\">{{searchhotel.cinthu}}</label>\n                    </div>\n                  </div>\n                  <ng-template #loaddingcin>\n                    <div class=\"div-loadingcin\">\n                      <ion-skeleton-text\n                        animated\n                        style=\"width:100px;margin: 0;height: 32px\"\n                      ></ion-skeleton-text>\n                    </div>\n                  </ng-template>\n                  \n                </div>\n                \n            </div>\n            <div class=\"div-cout\">\n              <div class=\"img-cin-cout p-top-12 p-l-0\">\n                <img class=\"img-padding img-checkout\" src=\"./assets/ic_flight/icon_arrow_gray.svg\">\n            </div>\n  \n                <div class=\"div-input-right text-input-cout m-l-36\">\n                  <div *ngIf=\"searchhotel.coutdisplay else loaddingcout\">\n                    <div class=\"text-cin\">\n                      <label class=\"text-cin-input\">{{ searchhotel.coutdisplay }}</label>\n                    </div>\n                    <div  class=\"font-thu\" >\n                      <label  *ngIf=\"cotdate==0\" class=\"text-color text-cinthu\">{{searchhotel.coutthu}}</label>\n                      <label style=\"color: #e52822\" *ngIf=\"cotdate==1\" class=\"text-color text-cinthu\" >{{searchhotel.coutthu}}</label>\n                    </div>\n                  </div>\n                   <ng-template #loaddingcout>\n                      <div class=\"div-loadingcin\">\n                        <ion-skeleton-text\n                          animated\n                          style=\"width:100px;margin: 0;height: 32px\"\n                        ></ion-skeleton-text>\n                      </div>\n                   </ng-template>\n                </div>\n            </div>\n          </div>\n          </ion-row>\n  \n          <ion-row (click)=\"openmnu()\" style=\"background: #ffffff;border-radius: 2px;margin-top: 8px;height:48px\" >\n            <div class=\"div-width\">\n                <div class=\"img-cin-cout\"><img class=\"img-padding img-people\" src=\"./assets/iocnsearch/ic_people.svg\"/></div>\n  \n                <div class=\"div-input-right\">\n                    <div class=\"text-pax\">\n                        <label class=\"text-cin-input\">{{ adult }} người lớn, {{ child }} trẻ em</label>\n                      </div>\n                      <div class=\"font-thu\">\n                        <label class=\"text-color text-cinthu\">{{ roomnumber }} phòng</label>\n                    </div>\n                </div>\n            </div>\n          </ion-row>\n          <ion-row>\n            <button\n              ion-button\n              round\n              style=\"margin-top: 16px\"\n              (click)=\"search()\"\n              class=\"button btn-search\"\n              clear\n            >\n              Tìm kiếm\n            </button>\n          </ion-row>\n      </div>\n      \n      \n    </div>\n  </div>\n\n  <div\n    *ngIf=\"ischeck == true && ischeckks == true \"\n    [ngClass]=\"isNotice ? 'cls-content-slide-notice' : 'cls-content-slide'\"\n  >\n    <ion-row\n      *ngIf=\"blogtrips.length > 0\"\n      style=\"margin-left: -5px;padding-top:16px\"\n      class=\"p-left-16\"\n    >\n      <ion-col size=\"8\" style=\"padding-bottom: 0\">\n        <ion-label class=\"text-title2\">\n          Vi Vu {{ regionnamesuggest }}\n        </ion-label>\n      </ion-col>\n      <ion-col size=\"4\" style=\"padding: 5px 0 0 0\">\n        <div style=\"margin-top: 5px;text-align: right\">\n          <ion-label (click)=\"seemoreblog(1)\" style=\"color: #26bed6\">\n            Xem thêm\n          </ion-label>\n          <img src=\"./assets/imgs/vector.svg\" />\n        </div>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"blogtrips.length > 0\" class=\"sub-title p-left-16 p-bottom-0\">\n      <ion-label class=\"text-subtitle\">\n        Tự do khám phá. Tận hưởng trọn vẹn\n      </ion-label>\n    </div>\n    <div\n      *ngIf=\"blogtrips.length > 0\"\n      class=\"innerdeals1 slideblogtrips-scroll\"\n      style=\"overflow-x: scroll; margin-left:0\"\n      padding\n      (scroll)=\"onScrollBlogTrip($event)\"\n    >\n      <div\n        style=\"padding-left: 16px;position: relative;\"\n        class=\"cls-deal cls-blogtrip\"\n        *ngFor=\"let slide of blogtrips; let idx = index\"\n      >\n\n        <div class=\"div-wrap-deal\"> \n          <div class=\"div-wrap-image\">\n            <img\n            (click)=\"clickitemblogtrips(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"slide.avatar\"\n            [src]=\"slide.avatar\"\n          />\n          <img\n            (click)=\"clickitemblogtrips(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"!slide.avatar\"\n            src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\"\n          />\n          </div>\n          <div (click)=\"clickitemblogtrips(slide)\" class=\"float-info\">\n            <h2 class=\"text-title-blog\">\n              {{ slide.title }}\n            </h2>\n          </div>\n        </div>\n        <!-- <div [ngClass]=\"idx == 0 ? 'float-infoicon top-16' : 'float-infoicon top-16 left-28'\" (click)=\"share(slide.url)\">\n          <div class=\"div-wrap-icon\">\n            <img class=\"img-share\"\n            src=\"./assets/imgs/ic_share.svg\"\n          />\n          </div>\n          \n        </div>\n        <div [ngClass]=\"idx == 0 ? 'float-infoiconheart top-16' : 'float-infoiconheart top-16 left-72'\" >\n          <div class=\"div-wrap-icon-heart\">\n            <img\n              *ngIf=\"!slide.Like\"\n              class=\"img-heart\"\n              (click)=\"likeItemblogtrips(slide.id)\"\n              src=\"./assets/imgs/heart-empty.svg\"\n            />\n            <img\n              *ngIf=\"slide.Like\"\n              class=\"img-heart\"\n              (click)=\"unlikeItemblogtrips(slide.id)\"\n              src=\"./assets/imgs/heart-red.svg\"\n            />\n          </div>\n        </div> -->\n       \n      </div>\n      <div *ngIf=\"showloadmoreblogtrip\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n    <div [ngClass]=\"blogtrips.length > 0 ? 'title-padding p-left-16 p-top-21' : 'title-padding p-left-16 p-top-30' \" *ngIf=\"slideData1.length >0\">\n      <ion-label class=\"text-title2\">\n        Ưu đãi tốt nhất hôm nay\n      </ion-label>\n      <div style=\"margin-top: 5px;text-align: right;float: right;\">\n        <ion-label (click)=\"seemoredeal()\" style=\"color: #26bed6\">\n          Xem thêm\n        </ion-label>\n        <img src=\"./assets/imgs/vector.svg\" />\n      </div>\n    </div>\n    <div class=\"sub-title p-left-16 \" *ngIf=\"slideData1.length >0\">\n      <ion-label class=\"text-subtitle\">\n        Nhanh tay đặt ngay. Để mai sẽ lỡ\n      </ion-label>\n    </div>\n    <div\n      class=\"innerdeals1 slide2-scroll\"\n      style=\"overflow-x: scroll;overflow-y: hidden; margin-left: -4px;\"\n      padding\n      (scroll)=\"onScroll($event)\">\n    <div\n        (click)=\"itemclickht(slide)\"\n        class=\"cls-deal\"\n        style=\"padding-left: 16px;position: relative\"\n        *ngFor=\"let slide of slideData1\">\n\n        <div class=\"div-wrap-deal\"> \n          <div class=\"div-wrap-image\">\n            <img class=\"slide2 img\" [src]=\"slide.imageUrl\" />\n            <div class=\"float-promo\">\n              <p class=\"float-promo-description\" *ngIf=\"slide.priceshow\">\n                {{ slide.description }} | {{ slide.priceshow }} triệu/<span *ngIf=\"slide.priceFor!=0\">khách</span><span *ngIf=\"slide.priceFor==0\">phòng</span>\n              </p>\n    \n              <p class=\"float-promo-description\" *ngIf=\"!slide.priceshow\">\n                {{ slide.description }}\n              </p>\n            </div>\n          </div>\n          <div class=\"float-info\">\n            <h2 class=\"hotel-name\" style=\"margin:0\">\n              {{ slide.name }}\n            </h2>\n            <p style=\"margin: 0\">\n              <img *ngIf=\"slide.rating != 0\" src=\"{{ slide.rating }}\" />\n            </p>\n          </div>\n        </div>\n       \n      </div>\n      <div *ngIf=\"showloadmore\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n    <div class=\"title-padding  p-left-16 p-top-24 bg-white\">\n      <ion-label class=\"text-title2\">\n        <!-- Du lịch ngay! Vì bạn xứng đáng -->\n        Du lịch an toàn\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16 bg-white\">\n      <ion-label class=\"text-subtitle\">\n        <!-- Làm việc cả năm. Đến lúc tưởng thưởng -->\n        Nâng cao sức khỏe, cân bằng cuộc sống\n      </ion-label>\n    </div>\n    <div\n      class=\"inner2 slide3-scroll bg-white\"\n      style=\"overflow-x: scroll; margin-left: 0\"\n      padding\n    >\n      <div\n        class=\"cls-mood\"\n        style=\"padding-left: 16px;position: relative;\"\n        *ngFor=\"let slide of slideMood\"\n        (click)=\"itemSelectedmood(slide)\"\n      >\n        <img class=\"slide3 img\" [src]=\"slide.avatar\" />\n        <div class=\"float-info bottom-18\">\n          <p class=\"text-titledes f-20 p-bottom-2\" [innerHTML]=\"slide.title\"></p>\n          <p class=\"cls-subtitle\">\n            {{ slide.shortDescription }} - {{ slide.totalHotel }} Khách sạn\n          </p>\n        </div>\n        <div class=\"grad2\"></div>\n      </div>\n    </div>\n    <div class=\"title-padding-1 p-left-16  bg-white\">\n      <ion-label class=\"text-title2\">\n        Điểm đến yêu thích trong nước\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16  bg-white\">\n      <ion-label class=\"text-subtitle\">\n        Lên rừng xuống biển. Trọn vẹn Việt Nam\n      </ion-label>\n    </div>\n   \n    <div\n      class=\"cls-destination p-left-16  bg-white\"\n      style=\"padding-top:8px;padding-bottom: 16px;\"\n      *ngIf=\"regionsend.length > 0\"\n    >\n      <ion-grid style=\"padding:0\">\n        <!-- row 1 -->\n        <ion-row>\n          <ion-col size=\"8\" class=\"nopadding\">\n            <!-- item 1 -->\n            <ion-row\n              style=\"padding-bottom:8px;padding-right:8px\"\n              (click)=\"itemclickregion(regionsend[0])\" *ngIf=\"regionsend[0]\"\n            >\n              <div class=\" div-info-cover-auto-width\">\n                <img class=\"img-region\" [src]=\"regionsend[0].image\" />\n                <div class=\"float-info-region\">\n                  <p class=\"text-titledes\" [innerHTML]=\"regionsend[0].name\"></p>\n                </div>\n                <div class=\"grad3\"></div>\n              </div>\n            </ion-row>\n\n            <ion-row style=\"padding-right:8px\">\n              <!-- item 2 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                style=\"padding-right:8px\"\n                (click)=\"itemclickregion(regionsend[2])\"  *ngIf=\"regionsend[2]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[2].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[2].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n              <!-- item 3 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                (click)=\"itemclickregion(regionsend[3])\"  *ngIf=\"regionsend[3]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[3].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[3].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n          <!-- item 4 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\"\n            (click)=\"itemclickregion(regionsend[1])\"  *ngIf=\"regionsend[1]\"\n          >\n            <div class=\"div-info-cover-auto-height\">\n              <img class=\"img-region\" [src]=\"regionsend[1].image\" />\n              <div class=\"float-info-region\">\n                <p class=\"text-titledes\" [innerHTML]=\"regionsend[1].name\"></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- row 2 -->\n        <ion-row style=\"padding-top: 8px;\">\n          <!-- item 5 -->\n          <ion-col\n            size=\"3.59\"\n            class=\"nopadding\"\n            (click)=\"itemclickregion(regionsend[5])\"  *ngIf=\"regionsend[5]\"\n          >\n            <div class=\"div-info-cover-auto-height\">\n              <img class=\"img-region\" [src]=\"regionsend[5].image\" />\n              <div class=\"float-info-region\">\n                <p class=\"text-titledes\" [innerHTML]=\"regionsend[5].name\"></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <ion-col class=\"nopadding\" style=\"padding-left:8px\">\n            <!-- item 6 -->\n            <ion-row\n              style=\"padding-bottom:8px;\"\n              (click)=\"itemclickregion(regionsend[6])\"  *ngIf=\"regionsend[6]\"\n            >\n              <div class=\" div-info-cover-auto-width\">\n                <img class=\"img-region\" [src]=\"regionsend[6].image\" />\n                <div class=\"float-info-region\">\n                  <p class=\"text-titledes\" [innerHTML]=\"regionsend[6].name\"></p>\n                </div>\n                <div class=\"grad3\"></div>\n              </div>\n            </ion-row>\n\n            <ion-row>\n              <!-- item 7 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                style=\"padding-right:8px\"\n                (click)=\"itemclickregion(regionsend[4])\"  *ngIf=\"regionsend[4]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[4].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[4].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n              <!-- item 8 -->\n              <ion-col\n                size=\"6\"\n                class=\"nopadding\"\n                (click)=\"itemclickregion(regionsend[7])\"  *ngIf=\"regionsend[7]\"\n              >\n                <div class=\"div-info-cover-auto-width\">\n                  <img class=\"img-region\" [src]=\"regionsend[7].image\" />\n                  <div class=\"float-info-region\">\n                    <p\n                      class=\"text-titledes\"\n                      [innerHTML]=\"regionsend[7].name\"\n                    ></p>\n                  </div>\n                  <div class=\"grad3\"></div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <!-- Điểm đến nước ngoài -->\n    <div class=\"title-padding-1 p-left-16 bg-white\">\n      <ion-label class=\"text-title2\">\n        Điểm đến yêu thích nước ngoài\n      </ion-label>\n    </div>\n    <div class=\"sub-title p-left-16 bg-white\">\n      <ion-label class=\"text-subtitle\">\n        Bao la thế giới. Bốn bể là nhà\n      </ion-label>\n    </div>\n    <div\n      class=\"cls-destination p-left-16 bg-white\"\n      style=\"padding-top:8px;padding-bottom: 16px;\"\n      *ngIf=\"regionintersend.length > 0\"\n    >\n      <ion-grid style=\"padding:0\">\n        <!-- row 1 -->\n        <ion-row>\n          <!-- col 1 -->\n          <ion-col\n            size=\"8\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[0]\"\n            (click)=\"itemclickregion(regionintersend[0])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[0].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[0].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 2 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\" *ngIf=\"regionintersend[1]\"\n            (click)=\"itemclickregion(regionintersend[1])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[1].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[1].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div></div\n          ></ion-col>\n        </ion-row>\n        <!-- row 2 -->\n        <ion-row style=\"padding-top:8px\">\n          <!-- col 1 -->\n          <ion-col\n            size=\"4\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[2]\"\n            (click)=\"itemclickregion(regionintersend[2])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[2].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[2].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 2 -->\n          <ion-col\n            size=\"4\"\n            style=\"padding-right:8px\"\n            class=\"nopadding\" *ngIf=\"regionintersend[3]\"\n            (click)=\"itemclickregion(regionintersend[3])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[3].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[3].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n          <!-- col 3 -->\n          <ion-col\n            size=\"4\"\n            class=\"nopadding\" *ngIf=\"regionintersend[4]\"\n            (click)=\"itemclickregion(regionintersend[4])\"\n          >\n            <div class=\" div-info-cover-auto-width\">\n              <img class=\"img-region\" [src]=\"regionintersend[4].image\" />\n              <div class=\"float-info-region\">\n                <p\n                  class=\"text-titledes\"\n                  [innerHTML]=\"regionintersend[4].name\"\n                ></p>\n              </div>\n              <div class=\"grad3\"></div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n    <div class=\"title-padding-1 p-left-16\" style=\"position: relative;\">\n      <ion-label class=\"text-title2\">\n        Cẩm nang du lịch\n      </ion-label>\n      <div style=\"margin-top: 5px;text-align: right;float: right;\">\n        <ion-label (click)=\"seemoreblog(2)\" style=\"color: #26bed6\">\n          Xem thêm\n        </ion-label>\n        <img src=\"./assets/imgs/vector.svg\" />\n      </div>\n    </div>\n    <div class=\"sub-title p-left-16 p-bottom-0\">\n      <ion-label class=\"text-subtitle\">\n        Cập nhật thông tin. Chuyến đi tuyệt vời\n      </ion-label>\n    </div>\n    <div\n      class=\"innerdeals1 slide5-scroll\"\n      style=\"overflow-x: scroll; overflow-y: hidden; margin-left: 0px;--padding-top: 0px\"\n      padding\n      (scroll)=\"onScrollBlog($event)\"\n    >\n      <div\n        style=\"padding-left: 16px;position: relative;\"\n        class=\"cls-deal cls-blog\"\n        *ngFor=\"let slide of blog; let idx = index\"\n      >\n      <div class=\"div-wrap-deal\"> \n        <div class=\"div-wrap-image\">\n          <img\n          (click)=\"clickitemblog(slide)\"\n          class=\"slide2 img\"\n          *ngIf=\"slide.Avatar\"\n          [src]=\"slide.Avatar\"\n          />\n          <img\n            (click)=\"clickitemblog(slide)\"\n            class=\"slide2 img\"\n            *ngIf=\"!slide.Avatar\"\n            src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage.png\"\n          />\n        </div>\n        <div (click)=\"clickitemblog(slide)\" class=\"float-info\">\n          <h2 class=\"text-title-blog\">\n            {{ slide.Title }}\n          </h2>\n        </div>\n\n      </div>\n       \n        \n        <!-- <div [ngClass]=\"idx == 0 ? 'float-infoicon top-16' : 'float-infoicon top-16 left-28'\"(click)=\"share(slide.Url)\">\n          <div class=\"div-wrap-icon\">\n            <img class=\"img-share\"\n            src=\"./assets/imgs/ic_share.svg\"\n          />\n          </div>\n          \n        </div>\n        <div [ngClass]=\"idx == 0 ? 'float-infoiconheart top-16' : 'float-infoiconheart top-16 left-72'\" >\n          <div class=\"div-wrap-icon-heart\">\n          <img\n            *ngIf=\"!slide.Like\"\n            class=\"img-heart\"\n            (click)=\"likeItemblog(slide.Id)\"\n            src=\"./assets/imgs/heart-empty.svg\"\n          />\n          <img\n            *ngIf=\"slide.Like\"\n            class=\"img-heart\"\n            (click)=\"unlikeItemblog(slide.Id)\"\n            src=\"./assets/imgs/heart-red.svg\"\n          />\n        </div>\n        </div> -->\n        \n        <!-- <div class=\"grad-blog\" (click)=\"clickitemblog(slide)\"></div> -->\n      </div>\n      <div *ngIf=\"showloadmoreblog\" class=\"div-loadmore\">\n        <ion-spinner\n          name=\"bubbles\"\n          class=\"spinner-bubbles hydrated\"\n        ></ion-spinner>\n      </div>\n    </div>\n  </div>\n  <div\n    *ngIf=\"slideData1.length == 0 && totalItem >0 && isConnected\"\n    style=\"background-color:#ffffff\"\n  >\n    <div *ngIf=\"slideData1.length == 0\" padding>\n      <ion-row>\n        <ion-skeleton-text\n          animated\n          style=\"width:30%;margin: 0;height: 16px;\"\n        ></ion-skeleton-text>\n      </ion-row>\n\n      <ion-row style=\"margin-top:16px\">\n        <ion-col style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n          ></ion-skeleton-text>\n        </ion-col>\n        <ion-col style=\"padding: 0;margin-left:8px\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:35%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:60%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:35%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:60%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;margin: 0;height: 16px; margin-top: 32px\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-skeleton-text\n            animated\n            style=\"width:100%;margin: 0;height: 16px\"\n          ></ion-skeleton-text>\n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col size=\"4\" style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"4\" style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:98px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:75%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top: 32px\">\n        <ion-skeleton-text\n          animated\n          style=\"width:20%;margin: 0;height: 16px\"\n        ></ion-skeleton-text>\n      </ion-row>\n      <ion-row style=\"margin-top:16px\">\n        <ion-col style=\"padding: 0\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n        <ion-col style=\"padding: 0; margin-left: 8px\">\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:100%;height:118px;border-radius: 6px;margin:0\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:30%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n          <ion-row>\n            <ion-skeleton-text\n              animated\n              style=\"width:85%;margin: 0;height: 16px;margin-top: 8px\"\n            ></ion-skeleton-text>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</div>\n\n<div [ngClass]=\"activeTab ==1 ? 'div-wraper-flight cls-visible' : 'div-wraper-flight cls-disabled' \" style=\"height: 100%\">\n  <app-homeflight ></app-homeflight>\n</div>\n\n<div [ngClass]=\"activeTab ==2 ? 'div-wraper-combo cls-visible' :  'div-wraper-food cls-disabled'\">\n  <app-homecombo></app-homecombo>\n</div>\n\n<!-- <div [ngClass]=\"activeTab ==3 ? 'div-wraper-food cls-visible' :  'div-wraper-food cls-disabled'\">\n  <app-homefood></app-homefood>\n</div> -->\n\n\n  <div\n    *ngIf=\"!isConnected\"\n    style=\"background-color: #ffffff; height: 400px;padding: 16px;\"\n  >\n    <div class=\"img-lostconnection\">\n      <img class=\"img-empty\" src=\"./assets/empty/trip_empty.svg\" />\n    </div>\n    <div class=\"text-lostconnection\">\n      <label\n        >Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</label\n      >\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background {\n  height: calc(env(safe-area-inset-top) + 568px);\n  position: relative;\n  z-index: 1;\n}\n.background .div-wrap-background {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 568px);\n  width: 100%;\n  z-index: -1;\n}\n.background .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 568px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.background .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 287px;\n  margin-top: -36px;\n}\n.background .div-wrap-search {\n  z-index: 1;\n  position: relative;\n}\n.background .text-home-hotel {\n  margin-top: 120px;\n}\n.background .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background .text-home-hotel-notice {\n  margin-top: 197px;\n}\n.background .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background .row-search-home {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 50px;\n  margin-top: 12px;\n}\n.background-notice {\n  height: calc(env(safe-area-inset-top) + 568px);\n  position: relative;\n  z-index: 1;\n}\n.background-notice .div-wrap-background {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 568px);\n  width: 100%;\n  z-index: -1;\n}\n.background-notice .img-background {\n  width: 100% !important;\n  height: calc(env(safe-area-inset-top) + 568px);\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n}\n.background-notice .div-wrap-search-input {\n  position: absolute;\n  margin: -8px;\n  padding: 8px;\n  opacity: 0.4;\n  border-radius: 4px;\n  background-color: #222222;\n  z-index: -1;\n  width: 95.8%;\n  height: 287px;\n  margin-top: -36px;\n}\n.background-notice .div-wrap-search {\n  z-index: 1;\n  position: relative;\n}\n.background-notice .text-home-hotel {\n  margin-top: 120px;\n}\n.background-notice .text-home-hotel .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background-notice .text-home-hotel-notice {\n  margin-top: 197px;\n}\n.background-notice .text-home-hotel-notice .label-home-hotel {\n  color: #ffffff;\n  font-size: 17px;\n  line-height: 23px;\n  font-weight: 600;\n}\n.background-notice .row-search-home {\n  background: #ffffff;\n  border-radius: 2px;\n  height: 50px;\n  margin-top: 12px;\n}\n.cls-content-slide {\n  background-color: #f2f2f2;\n  margin-top: -72px;\n  z-index: 1;\n  position: relative;\n}\n.cls-content-slide-notice {\n  background-color: #ffffff;\n  z-index: 1;\n  margin-bottom: 48px;\n  position: relative;\n}\n.text-title1 {\n  margin-top: 0.6rem;\n  font-size: 12px;\n  color: #8F8F8F;\n  letter-spacing: 0.2ch;\n  text-transform: uppercase;\n  font-weight: 500;\n}\n.text-titledes {\n  margin: 0;\n  font-size: 17px;\n  font-weight: bold;\n  color: #fff;\n  padding-bottom: 6px;\n}\n.text-title-blog {\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  margin: 0;\n  color: #fff;\n  padding-bottom: 2px;\n  overflow: hidden;\n  max-width: 265px;\n  max-height: 39px;\n  -webkit-line-clamp: 2;\n  height: auto;\n  display: -webkit-box;\n  /* autoprefixer: ignore next */\n  -webkit-box-orient: vertical;\n}\n.text-title2 {\n  font-weight: bold;\n  font-size: 20px;\n}\n.text-subtitle {\n  font-size: 14px;\n  color: #333333;\n}\n.grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad2 {\n  position: absolute;\n  width: 215px;\n  height: 80px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 16px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad3 {\n  position: absolute;\n  width: 100%;\n  height: 48px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad-blog {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 8px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-blog:first-child .grad1 {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 4px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-mood:first-child .grad2 {\n  position: absolute;\n  width: 100%;\n  height: 80px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad-blog {\n  position: absolute;\n  width: 99%;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 4px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-blog:first-child .grad-blog {\n  position: absolute;\n  width: 272px;\n  height: 80px;\n  /* For browsers that do not support gradients */\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));\n  z-index: 10;\n  bottom: 4px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.grad-icon-blog {\n  position: absolute;\n  width: 94.5%;\n  height: 56px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  z-index: 10;\n  top: 0px;\n  left: 16px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.cls-deal:first-child .grad-icon-blog {\n  position: absolute;\n  width: 100%;\n  height: 56px;\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));\n  z-index: 10;\n  top: 0px;\n  left: 0px;\n  border-radius: 6px;\n  opacity: 0.5;\n}\n.img {\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cls-deal:first-child .float-infoicon {\n  position: absolute;\n  left: 8px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n}\n.float-infoicon {\n  position: absolute;\n  left: 16px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n}\n.div-wrap-icon {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  padding: 2px;\n  width: 28px;\n  height: 28px;\n}\n.div-wrap-icon .img-share {\n  width: 18px;\n  margin-left: 3px;\n  margin-top: 1px;\n}\n.div-wrap-icon-heart {\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 50%;\n  padding: 2px;\n  width: 28px;\n  height: 28px;\n}\n.div-wrap-icon-heart .img-heart {\n  padding-top: 2px;\n  width: 20px;\n  height: 18px;\n  margin-left: 2px;\n  margin-top: 2px;\n}\n.cls-deal:first-child .float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n.float-infoiconheart {\n  position: absolute;\n  bottom: 59px;\n  left: 56px;\n  z-index: 11;\n  width: 48px;\n  height: 48px;\n  padding: 0px 8px 8px 8px;\n}\n.float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 24px;\n  z-index: 11;\n}\n.float-info-region {\n  position: absolute;\n  bottom: 0px;\n  left: 8px;\n  z-index: 11;\n}\n.float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  max-width: 95%;\n}\n.cls-deal:first-child .float-promo {\n  position: absolute;\n  top: 19px;\n  left: -4px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  height: 22px;\n  padding: 3px 8px 0px 12px;\n  font-weight: bold;\n  max-width: 95%;\n}\n.float-promo-description {\n  margin: 0;\n  width: 100%;\n  color: #fff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: bold;\n}\n.cls-deal:first-child .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 4px solid #851f1c;\n  border-left: 4px solid transparent;\n  border-bottom: none;\n}\n.cls-deal:first-child .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.cls-mood:first-child .float-info {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n.cls-subtitle {\n  font-size: 14px;\n  color: #fff;\n  padding-right: 15px;\n  margin: 0;\n  height: 29px;\n}\n.div-info-cover-auto-width {\n  position: relative;\n  height: 104px;\n  width: 100%;\n}\n.div-info-cover-auto-height {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n.img-region {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nopadding {\n  padding: 0;\n}\n.slideblogtrips-scroll {\n  height: 234px;\n}\n@media (min-width: 800px) {\n  .slideblogtrips-scroll {\n    height: 540px;\n  }\n}\n.slide2 {\n  min-width: 272px;\n  height: 208px;\n}\n.slide2-scroll {\n  height: 320px;\n  margin-left: -19px;\n  padding-top: 8px;\n}\n@media (min-width: 320px) and (max-width: 360px) {\n  .slide2-scroll {\n    height: 320px;\n    width: 100%;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide2-scroll {\n    height: 320px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide2-scroll {\n    height: 330px;\n  }\n}\n@media (min-width: 800px) {\n  .slide2-scroll {\n    height: 570px;\n  }\n}\n.slide5-scroll {\n  height: 234px;\n  margin-left: -15px;\n}\n@media (min-width: 800px) {\n  .slide5-scroll {\n    height: 540px;\n  }\n}\n.slide3-scroll {\n  height: 300px;\n  margin-left: -15px;\n  padding-top: 8px;\n}\n@media (min-width: 300px) and (max-width: 360px) {\n  .slide3-scroll {\n    height: 160px;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide3-scroll {\n    height: 180px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide3-scroll {\n    height: 190px;\n  }\n}\n@media (min-width: 800px) {\n  .slide3-scroll {\n    height: 330px;\n  }\n}\n.slide4-scroll {\n  height: 300px;\n  margin-left: -15px;\n  margin-top: -10px;\n}\n@media (min-width: 300px) and (max-width: 360px) {\n  .slide4-scroll {\n    height: 166px;\n  }\n}\n@media (min-width: 360px) and (max-width: 375px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 375px) and (max-width: 384px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 384px) and (max-width: 412px) {\n  .slide4-scroll {\n    height: 186px;\n  }\n}\n@media (min-width: 412px) and (max-width: 480px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 480px) and (max-width: 600px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 600px) and (max-width: 720px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 720px) and (max-width: 768px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 768px) and (max-width: 800px) {\n  .slide4-scroll {\n    height: 196px;\n  }\n}\n@media (min-width: 800px) {\n  .slide4-scroll {\n    height: 320px;\n  }\n}\n.slide3 {\n  min-width: 216px;\n  height: 282px;\n}\n.innerdeals1 {\n  height: 100%;\n}\n.innerdeals1 div {\n  display: table-cell;\n}\n.innerdeals2 {\n  width: 570px;\n  height: 100%;\n}\n.innerdeals2 div {\n  display: table-cell;\n}\n.innerdeals3 {\n  width: 850px;\n  height: 100%;\n}\n.innerdeals3 div {\n  display: table-cell;\n}\n.innerdeals4 {\n  width: 1120px;\n  height: 100%;\n}\n.innerdeals4 div {\n  display: table-cell;\n}\n.innerdeals5 {\n  width: 1400px;\n  height: 100%;\n}\n.innerdeals5 div {\n  display: table-cell;\n}\n.innerdeals6 {\n  width: 1680px;\n  height: 100%;\n}\n.innerdeals6 div {\n  display: table-cell;\n}\n.innerdeals7 {\n  width: 1950px;\n  height: 100%;\n}\n.innerdeals7 div {\n  display: table-cell;\n}\n.innerdeals8 {\n  width: 2230px;\n  height: 100%;\n}\n.innerdeals8 div {\n  display: table-cell;\n}\n.innerdeals9 {\n  width: 2500px;\n  height: 100%;\n}\n.innerdeals9 div {\n  display: table-cell;\n}\n.innerdeals10 {\n  width: 2780px;\n  height: 100%;\n}\n.innerdeals10 div {\n  display: table-cell;\n}\n.innerdeals11 {\n  width: 3060px;\n  height: 100%;\n}\n.innerdeals11 div {\n  display: table-cell;\n}\n.innerdeals12 {\n  width: 3340px;\n  height: 100%;\n}\n.innerdeals12 div {\n  display: table-cell;\n}\n.innerdeals13 {\n  width: 3610px;\n  height: 100%;\n}\n.innerdeals13 div {\n  display: table-cell;\n}\n.innerdeals14 {\n  width: 3890px;\n  height: 100%;\n}\n.innerdeals14 div {\n  display: table-cell;\n}\n.innerdeals15 {\n  width: 4170px;\n  height: 100%;\n}\n.innerdeals15 div {\n  display: table-cell;\n}\n.innerdeals16 {\n  width: 4450px;\n  height: 100%;\n}\n.innerdeals16 div {\n  display: table-cell;\n}\n.innerdeals17 {\n  width: 4720px;\n  height: 100%;\n}\n.innerdeals17 div {\n  display: table-cell;\n}\n.innerdeals18 {\n  width: 5000px;\n  height: 100%;\n}\n.innerdeals18 div {\n  display: table-cell;\n}\n.innerdeals19 {\n  width: 5280px;\n  height: 100%;\n}\n.innerdeals19 div {\n  display: table-cell;\n}\n.innerdeals20 {\n  width: 5550px;\n  height: 100%;\n}\n.innerdeals20 div {\n  display: table-cell;\n}\n.inner2 {\n  height: 100%;\n}\n.inner2 div {\n  display: table-cell;\n}\n.inner3 {\n  width: 510px;\n  height: 100%;\n}\n.inner3 div {\n  display: table-cell;\n}\n.inner4 {\n  width: 195%;\n  height: 100%;\n}\n.inner4 div {\n  display: table-cell;\n}\n.inner5 {\n  width: 850px;\n  height: 100%;\n}\n.inner5 div {\n  display: table-cell;\n}\n.inner6 {\n  width: 1000px;\n  height: 100%;\n}\n.inner6 div {\n  display: table-cell;\n}\n.inner7 {\n  width: 1170px;\n  height: 100%;\n}\n.inner7 div {\n  display: table-cell;\n}\n.inner8 {\n  width: 1330px;\n  height: 100%;\n}\n.inner8 div {\n  display: table-cell;\n}\n.inner9 {\n  width: 1520px;\n  height: 100%;\n}\n.inner9 div {\n  display: table-cell;\n}\n.inner10 {\n  width: 1690px;\n  height: 100%;\n}\n.inner10 div {\n  display: table-cell;\n}\n.text-price {\n  font-size: 14px;\n  text-align: left;\n  margin-top: 0px;\n  color: #26bed6;\n  font-weight: bold;\n  margin-top: -10px;\n}\n.hotel-name {\n  font-size: 16px;\n  margin-top: -10px;\n  text-align: left;\n  font-weight: bold;\n  white-space: nowrap;\n  width: 260px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n}\n.title-blog {\n  font-size: 14px;\n  margin-top: 0px;\n  text-align: left;\n  width: 260px;\n  padding-top: 8px;\n}\ninput[type=text] {\n  width: 100%;\n  border: 0px solid #aaa;\n  margin: 9px -20px;\n  outline: none;\n  box-sizing: border-box;\n  transition: 0.3s;\n  font-size: 16px;\n}\n.item-md ion-avatar {\n  min-width: 0px;\n  min-height: 0px;\n}\n.vl {\n  border-left: 1px solid #bdbdbd;\n  height: 36px;\n  margin-left: 5px;\n}\n.btn-search {\n  border-color: #f59233;\n  color: #ffffff;\n  background: #f59233;\n  width: 100%;\n  height: 52px !important;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n}\n.list-header-md {\n  padding-left: 0px;\n  margin-bottom: 0px;\n  min-height: 0px;\n  border-top: 0px solid #dedede;\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #222222;\n}\n.item-md {\n  padding-left: 0px;\n}\n/*Style calendar*/\n.col-calendar {\n  z-index: 99;\n}\n.col-calendar {\n  margin-top: 4px;\n}\n.col-calendar .calendar-date.cin {\n  width: 200px;\n  position: absolute;\n  left: -71px;\n  top: 32px;\n}\n.col-calendar .calendar-date.cout {\n  width: 200px;\n  position: absolute;\n  left: -88px;\n  top: 32px;\n}\n.page-main .calendar-date .button {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n}\n.ion-md-calendar:before {\n  content: none;\n}\n.calendar-date .item-inner {\n  margin-left: 0px !important;\n}\n.calendar-date .item-block {\n  min-height: 2.4rem;\n  height: 0px;\n}\npage-main .slide3 {\n  height: 98px;\n  width: 160px !important;\n}\n.item-md ion-thumbnail img {\n  border-radius: 5px;\n}\n.item-ios ion-thumbnail img {\n  border-radius: 5px;\n}\n.cls-deal:first-child {\n  padding-left: 4px !important;\n  overflow: hidden;\n}\n.cls-blog:first-child {\n  padding-left: 0px !important;\n  overflow: hidden;\n}\n.cls-deal:last-child {\n  padding-right: 16px !important;\n}\n.cls-mood:first-child {\n  padding-left: 0px !important;\n}\n.cls-mood:last-child {\n  padding-right: 16px !important;\n}\n.cls-destination:first-child {\n  padding-left: 0px !important;\n}\n.cls-destination:last-child {\n  padding-right: 16px !important;\n}\n/*Style calendar*/\n.range-md-xanh .range-bar-active,\n.range-md-xanh .range-knob,\n.range-md-xanh .range-pin,\n.range-md-xanh .range-pin::before {\n  background: #26bed6 !important;\n}\n.m-left-10 {\n  margin-left: -10px;\n}\n.div-padding {\n  width: 48px;\n  height: 48px;\n  justify-content: center;\n  margin-top: -14px;\n}\nlabel {\n  padding: 18px 0px 18px 0px;\n}\n.text-cinthu {\n  padding: 18px 18px 18px 0px;\n}\n@media (min-width: 300px) and (max-width: 350px) {\n  .img-padding.img-location {\n    margin-left: -2px !important;\n  }\n\n  .img-padding.img-checkin {\n    margin-left: -4px !important;\n  }\n\n  .img-padding.img-checkout {\n    margin-left: -22px !important;\n  }\n\n  .img-padding.img-people {\n    margin-left: -4px !important;\n  }\n\n  .col-calendar {\n    padding-right: 0;\n  }\n}\nbody .alert-title {\n  text-align: center;\n  color: #26bed6;\n}\nbody .toolbar-content-ios {\n  padding-left: 8px;\n}\nbody ion-app.ios [padding] .scroll-content {\n  padding: 16px;\n  padding-top: 16px !important;\n}\nbody .ct-1, body .ct-2, body .ct-8 {\n  margin: 0 0 10px;\n}\nbody .alert-button {\n  color: #fff !important;\n  background-color: #f79221 !important;\n  border-radius: 5px !important;\n}\nbody .range-knob-handle {\n  width: 48px !important;\n  height: 48px !important;\n}\nbody .bar-button-md, body .bar-button-ios {\n  height: 48px;\n}\n.text-loadding {\n  text-align: center;\n}\n.cls-content {\n  background-color: #ffffff;\n}\n.statusbar-margin-top {\n  margin-top: calc(env(safe-area-inset-top) + 22px );\n}\n::ng-deep .cls-content-cover .statusbar-margin-top {\n  margin-top: calc(env(safe-area-inset-top) + 22px );\n}\n@media (min-width: 300px) and (max-width: 412px) {\n  ::ng-deep ion-spinner {\n    height: 160px;\n  }\n}\n@media (min-width: 412px) and (max-width: 800px) {\n  ::ng-deep ion-spinner {\n    height: 160px;\n  }\n  ::ng-deep .div-wrap-search-input {\n    width: 96.2% !important;\n  }\n  ::ng-deep .swiper-pagination {\n    width: 96.2% !important;\n  }\n}\n::ng-deep .lunarcalendar {\n  border: 0.5px solid #e52822;\n  border-radius: 36px !important;\n  width: 30px;\n  height: 30px;\n}\n::ng-deep .lunarcalendar p {\n  color: #e52822 !important;\n}\n::ng-deep .days {\n  margin-bottom: 20px !important;\n}\n::ng-deep .between .days-btn {\n  border-radius: 0 !important;\n  border: 0 !important;\n}\n::ng-deep .startSelection .days-btn {\n  border: 0 !important;\n}\n::ng-deep .startSelection .days-btn p {\n  color: #fff !important;\n}\n::ng-deep .endSelection .days-btn {\n  border: 0 !important;\n}\n::ng-deep .endSelection .days-btn p {\n  color: #fff !important;\n}\n::ng-deep small {\n  margin: -6px !important;\n  color: #e52822 !important;\n  font-weight: 300 !important;\n  bottom: -6px !important;\n  width: 100px !important;\n  left: -25px !important;\n}\n::ng-deep .p-left-16 {\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-container.sc-ion-action-sheet-ios {\n  justify-content: flex-start;\n  margin-top: calc(env(safe-area-inset-top)*2 - 14px );\n  -webkit-padding-start: 8px;\n  padding-inline-start: 8px;\n  -webkit-padding-end: 8px;\n  padding-inline-end: 8px;\n}\n::ng-deep .action-sheets-notification .action-sheet-title.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  background-position: unset;\n  text-align: left;\n  font-weight: bold;\n  color: #222222;\n  padding-top: 10px;\n  padding-bottom: 0px;\n  padding-left: 44px;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .ic_bus2 .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .action-sheet-group.sc-ion-action-sheet-ios::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .action-sheets-notification .action-sheet-group.sc-ion-action-sheet-ios {\n  background-color: #ffffff;\n  box-shadow: 1px 1px 8px 0px #828282;\n  border-radius: 10px !important;\n}\n::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 60px;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n  margin: 0;\n  width: 100%;\n}\n::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 44px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 80px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n  -webkit-padding-start: 44px;\n          padding-inline-start: 44px;\n  text-align: left;\n  padding-top: 0px;\n  padding-bottom: 13px;\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 15px;\n  -webkit-padding-end: 10px;\n  padding-inline-end: 10px;\n  height: auto;\n  min-height: 90px !important;\n  --background-activated:#fff;\n  --background-selected:#fff;\n  border-bottom: none;\n}\n::ng-deep .action-sheets-notification .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 18px;\n}\n@media (min-width: 250px) and (max-width: 329px) {\n  ::ng-deep .action-sheets-notification .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 72px;\n  }\n  ::ng-deep .fixheight-44 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 44px;\n  }\n  ::ng-deep .fixheight-80 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 80px;\n  }\n  ::ng-deep .fixheight-90 .action-sheet-button.sc-ion-action-sheet-ios {\n    min-height: 102px;\n  }\n}\n::ng-deep .ic_bus2 .toast-container::before {\n  float: left;\n  content: url('ic_bus2.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_home .toast-wrapper.toast-top .toast-container .toast-content::before {\n  float: left;\n  content: url('ic_home.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_paper .toast-content::before {\n  float: left;\n  content: url('ic_paper.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .ic_message .toast-content::before {\n  float: left;\n  content: url('ic_message.svg');\n  padding-top: 0px;\n  margin-left: 10px;\n  margin-right: 10px;\n  position: absolute;\n  left: 8px;\n  margin-top: 13px;\n}\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n::ng-deep .cls-alert-showmore .done1-combo-css .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  text-transform: none;\n  font-size: 15px !important;\n}\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-md {\n  text-transform: none;\n  font-size: 14px;\n  padding: 10px 0;\n}\n::ng-deep .alert-button-group.sc-ion-alert-md {\n  flex-wrap: nowrap;\n}\n::ng-deep .alert-button-inner.sc-ion-alert-md {\n  justify-content: center;\n}\n::ng-deep .alert-button.sc-ion-alert-md {\n  padding-right: 0;\n  width: 100%;\n  text-transform: none;\n}\n::ng-deep .home-slider ion-segment-button {\n  text-transform: capitalize;\n  color: #fff;\n}\n::ng-deep .home-slider ion-slide {\n  color: #fff;\n  font-size: 17px;\n  font-weight: 600;\n  height: 50px;\n}\n::ng-deep .home-slider {\n  position: absolute;\n  top: 106px;\n  width: 100%;\n  z-index: 10;\n}\n.img-lostconnection {\n  padding-top: 70px;\n  text-align: center;\n}\n.text-lostconnection {\n  color: #828282;\n  padding: 0 50px;\n  text-align: center;\n}\n.cls-content-cover {\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  scroll-behavior: smooth;\n  --offset-bottom:0px;\n}\n.cls-content-slide:after {\n  content: \" \";\n  height: 200px;\n  background-color: #dedede;\n}\n.div-statusbar-float {\n  position: absolute;\n  z-index: 12;\n  width: 100%;\n  background-color: #ffffff;\n  color: #222222;\n  padding-left: 16px;\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n}\n.float-statusbar-enabled {\n  visibility: visible;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  opacity: 1;\n  height: 40px;\n}\n.float-statusbar-disabled {\n  visibility: hidden;\n  opacity: 0;\n  transition: visibility 0.2s, opacity 0.2s linear;\n  z-index: 0;\n}\n.cls-experiencemusttry {\n  padding-top: 7px;\n  padding-bottom: 16px;\n}\n.p-right-8 {\n  margin-right: 8px;\n}\n.m-bottom-8 {\n  margin-bottom: 8px;\n}\n.p-top-30 {\n  padding-top: 30px !important;\n}\n.p-top-21 {\n  padding-top: 21px !important;\n}\n.title-padding {\n  padding: 16px 0px 0px 0px;\n}\n.title-padding-1 {\n  padding: 24px 0px 0px 0px;\n}\n.img-region {\n  height: 100%;\n  width: 100%;\n  margin: 0;\n  border-radius: 5px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.nopadding {\n  padding: 0;\n}\n.float-info-region {\n  position: absolute;\n  bottom: 0px;\n  left: 8px;\n  z-index: 11;\n}\n.float-info-experience {\n  position: absolute;\n  bottom: 0px;\n  text-align: center;\n  z-index: 11;\n  width: 100%;\n}\n.img-float-experience {\n  position: absolute;\n  bottom: 8px;\n  text-align: center;\n  z-index: 11;\n  width: 100%;\n}\n.img-musttry {\n  height: 96px;\n}\n.text-titleexp {\n  margin: 0;\n  font-size: 16px;\n  font-weight: bold;\n  color: #fff;\n  padding-bottom: 8px;\n  letter-spacing: -0.34px;\n  text-align: center;\n}\n.grad-experience {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 10;\n  bottom: 0px;\n  left: 0px;\n  border-radius: 4px;\n}\n.sub-title {\n  line-height: 15px;\n  padding-top: 4px;\n  padding-bottom: 8px;\n}\n.text-placeholder {\n  color: #828282;\n  font-size: 16px;\n  line-height: 20px;\n}\n.text-search {\n  font-size: 16px;\n  line-height: 20px;\n}\n.col-placeholder {\n  align-self: center;\n  padding-top: 0;\n}\n.cls-blogtrip:first-child {\n  padding-left: 0 !important;\n}\n.cls-blogtrip:first-child .grad-blog {\n  left: 0 !important;\n}\n.m-top-7 {\n  margin-top: 7px;\n}\n.div-width {\n  width: 100%;\n}\n.img-input {\n  height: 48px;\n  padding: 16px 20px 16px 18px;\n  width: 50px;\n  position: absolute;\n}\n.img-cin-cout {\n  padding: 14px 20px 14px 17px;\n  position: absolute;\n}\n.p-l-0 {\n  padding-left: 0 !important;\n}\n.img-checkin, .img-people {\n  width: 16px;\n  height: 16px;\n}\n.img-checkout {\n  width: 16px;\n  height: 12px;\n}\n.div-input-right {\n  margin-left: 51px;\n}\n.m-l-36 {\n  margin-left: 36px !important;\n}\n.div-cin {\n  position: absolute;\n  width: 46%;\n  height: 48px;\n}\n.text-input-search {\n  margin: 0px 0 14px 51px;\n}\n.text-input-search-wraptext {\n  margin: 4px 0 14px 51px;\n}\n.text-middle {\n  display: table-cell;\n  vertical-align: middle;\n  height: 48px;\n}\n.text-cin, .text-pax {\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333333;\n  letter-spacing: -0.34px;\n  margin-top: 6px;\n}\n.text-color {\n  color: #828282;\n}\n.font-thu {\n  margin-top: 1px;\n  font-size: 12px;\n  letter-spacing: -0.34px;\n}\n.div-cout {\n  position: absolute;\n  margin-left: 158px;\n  height: 48px;\n}\n.div-img-coffee {\n  bottom: 40px;\n}\n.img-coffee {\n  height: 32px;\n}\n.img-logo {\n  width: 76px;\n  margin-top: calc(env(safe-area-inset-top) + 22px );\n  z-index: 10;\n  position: relative;\n}\n.div-wraper-slide {\n  position: absolute;\n  height: calc(env(safe-area-inset-top) + 128px) !important;\n  width: 100%;\n  background-color: rgba(0, 60, 113, 0.2);\n  z-index: 10;\n}\n.swiper-pagination {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 94px);\n  background: #fff;\n  height: 86px;\n  padding: 16px 0;\n  margin-left: 8px;\n  width: 95.8%;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.42px;\n  color: #222222;\n}\n.swiper-pagination .div-hotel, .swiper-pagination .div-flight, .swiper-pagination .div-combo, .swiper-pagination .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n}\n.swiper-pagination .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.swiper-pagination .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.swiper-pagination .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.swiper-pagination .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.swiper-pagination .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.cls-visible {\n  visibility: visible;\n  transition: visibility 2s, opacity 0.5s linear;\n  opacity: 1;\n}\n.cls-disabled {\n  visibility: hidden;\n  height: 0px;\n  opacity: 0;\n  transition: visibility 2s, opacity 0.5s linear;\n  z-index: 0;\n  display: none;\n}\n.div-wraper-food {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.swiper-pagination.main-color {\n  color: #ffffff !important;\n}\n.div-hotel.main-color {\n  color: #ffffff !important;\n}\n.div-flight.main-color {\n  color: #ffffff !important;\n}\n.home-active-tab {\n  color: #26bed6;\n  font-weight: bold;\n}\n.home-deactive-tab {\n  color: #333333;\n  opacity: 0.65;\n  letter-spacing: -0.4px !important;\n}\n.div-icon-home {\n  margin-bottom: 6px;\n}\n.cls-notice {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 94px);\n  background-color: #feeec7;\n  height: 67px;\n  padding: 16px 0;\n  margin-left: 8px;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  letter-spacing: -0.69px;\n  color: #333333;\n  margin-right: 8px;\n}\n.cls-notice .div-hotel, .cls-notice .div-flight, .cls-notice .div-combo, .cls-notice .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 300;\n}\n.cls-notice .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.cls-notice .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.cls-notice .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.cls-notice .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.cls-notice .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.swiper-pagination-notice {\n  display: flex;\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 171px);\n  width: 100%;\n  background: #fff;\n  height: 86px;\n  padding: 16px 0;\n  margin-left: 8px;\n  width: 95.2%;\n  border-radius: 4px;\n  z-index: 99;\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: -0.34px;\n  color: #222222;\n}\n.swiper-pagination-notice .div-hotel, .swiper-pagination-notice .div-flight, .swiper-pagination-notice .div-combo, .swiper-pagination-notice .div-food {\n  width: 25%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 300;\n}\n.swiper-pagination-notice .active-mark {\n  position: absolute;\n  bottom: 0;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 30%;\n  left: 0%;\n  height: 100%;\n  background: #cdcdcd;\n  z-index: -1;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  margin-left: 16px;\n  top: -3px;\n}\n.swiper-pagination-notice .sub-color {\n  font-weight: 300;\n  opacity: 0.7;\n}\n.swiper-pagination-notice .left-50 {\n  left: 37%;\n  margin-left: -6px;\n}\n.swiper-pagination-notice .left-66 {\n  left: 70%;\n  margin-left: -4px;\n  width: 27%;\n}\n.swiper-pagination-notice .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n.div-notice {\n  align-self: center;\n  margin-left: 6px;\n  margin-top: 5px;\n}\n.margin-left-11 {\n  margin-left: 11px;\n}\n.img-notice {\n  width: 32px;\n  height: 32px;\n}\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #333333;\n}\n.top-12 {\n  top: 12px;\n}\n.div-wrap-deal {\n  display: flex !important;\n  flex-direction: column;\n}\n.div-wrap-deal .float-infoicon {\n  left: 12px !important;\n}\n.div-wrap-deal .div-wrap-image {\n  position: relative;\n  height: 170px;\n}\n.div-wrap-deal .hotel-name {\n  color: #222222;\n}\n.div-wrap-deal .float-info {\n  position: relative !important;\n  left: 0 !important;\n  height: 54px;\n  bottom: 0px !important;\n  background: #fff;\n  padding: 8px;\n  border-radius: 0 0 4px 4px;\n}\n.div-wrap-deal .img {\n  border-radius: 5px 5px 0 0px !important;\n}\n.div-wrap-deal .slide2 {\n  height: 170px !important;\n}\n.div-wrap-deal .text-title-blog {\n  color: #222222;\n}\n.float-infoicon {\n  left: 12px !important;\n}\n.left-28 {\n  left: 28px !important;\n}\n.left-72 {\n  left: 72px !important;\n}\n.top-4 {\n  top: 4px !important;\n}\n.top-16 {\n  top: 16px;\n}\n.bg-white {\n  background-color: #ffffff;\n}\n.p-bottom-0 {\n  padding-bottom: 0 !important;\n}\n.p-top-24 {\n  padding-top: 24px;\n}\n.bottom-18 {\n  bottom: 18px !important;\n}\n.f-20 {\n  font-size: 20px !important;\n}\n.p-bottom-2 {\n  padding-bottom: 2px !important;\n}\n.div-loadingcin {\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQUY7QURFRTtFQUVFLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0RKO0FER0U7RUFDRSxzQkFBQTtFQUVBLDhDQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtFO0VBR0UsaUJBQUE7QUNMSjtBRE9JO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTE47QURRRTtFQUdFLGlCQUFBO0FDUko7QURVSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JOO0FEV0U7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVEo7QURZQTtFQUVFLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDVkY7QURZRTtFQUVFLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEYUU7RUFDRSxzQkFBQTtFQUVBLDhDQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1pKO0FEY0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VB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QlI7QUR3Qkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ3JCTjtBRHNCTTtFQUNFLG1CQUFBO0FDcEJSO0FEdUJJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNwQk47QURxQk07RUFDRSxtQkFBQTtBQ25CUjtBRHNCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDbkJOO0FEb0JNO0VBQ0UsbUJBQUE7QUNsQlI7QURxQkk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ2xCTjtBRG1CTTtFQUNFLG1CQUFBO0FDakJSO0FEb0JJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNqQk47QURrQk07RUFDRSxtQkFBQTtBQ2hCUjtBRG1CSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDaEJOO0FEaUJNO0VBQ0UsbUJBQUE7QUNmUjtBRGtCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDZk47QURnQk07RUFDRSxtQkFBQTtBQ2RSO0FEaUJJO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNkTjtBRGVNO0VBQ0UsbUJBQUE7QUNiUjtBRGdCSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDYk47QURjTTtFQUNFLG1CQUFBO0FDWlI7QURnQkk7RUFDRSxZQUFBO0FDYk47QURjTTtFQUNFLG1CQUFBO0FDWlI7QURlSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDWk47QURhTTtFQUNFLG1CQUFBO0FDWFI7QURjSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDWE47QURZTTtFQUNFLG1CQUFBO0FDVlI7QURhSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDVk47QURXTTtFQUNFLG1CQUFBO0FDVFI7QURZSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDVE47QURVTTtFQUNFLG1CQUFBO0FDUlI7QURXSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUk47QURTTTtFQUNFLG1CQUFBO0FDUFI7QURVSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDUE47QURRTTtFQUNFLG1CQUFBO0FDTlI7QURTSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDTk47QURPTTtFQUNFLG1CQUFBO0FDTFI7QURRSTtFQUNFLGFB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RiIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZHtcclxuICBcclxuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAuZGl2LXdyYXAtYmFja2dyb3VuZHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5pbWctYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuZGl2LXdyYXAtc2VhcmNoLWlucHV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDk1LjglO1xyXG4gICAgaGVpZ2h0OiAyODdweDtcclxuICAgIG1hcmdpbi10b3A6IC0zNnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpdi13cmFwLXNlYXJjaHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC50ZXh0LWhvbWUtaG90ZWx7XHJcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vbWFyZ2luLXRvcDogNDZweDtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG5cclxuICAgIC5sYWJlbC1ob21lLWhvdGVse1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2V7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA0NnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTk3cHg7XHJcblxyXG4gICAgLmxhYmVsLWhvbWUtaG90ZWx7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93LXNlYXJjaC1ob21le1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG59XHJcbi5iYWNrZ3JvdW5kLW5vdGljZXtcclxuICBcclxuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAuZGl2LXdyYXAtYmFja2dyb3VuZHtcclxuICAgIFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIC5pbWctYmFja2dyb3VuZHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICAuZGl2LXdyYXAtc2VhcmNoLWlucHV0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiAtOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgd2lkdGg6IDk1LjglO1xyXG4gICAgaGVpZ2h0OiAyODdweDtcclxuICAgIG1hcmdpbi10b3A6IC0zNnB4O1xyXG4gIH1cclxuXHJcbiAgLmRpdi13cmFwLXNlYXJjaHtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC50ZXh0LWhvbWUtaG90ZWx7XHJcbiAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vbWFyZ2luLXRvcDogNDZweDtcclxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xyXG5cclxuICAgIC5sYWJlbC1ob21lLWhvdGVse1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcbiAgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2V7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiA0NnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTk3cHg7XHJcblxyXG4gICAgLmxhYmVsLWhvbWUtaG90ZWx7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAucm93LXNlYXJjaC1ob21le1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgfVxyXG59XHJcbi5jbHMtY29udGVudC1zbGlkZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tdG9wOiAtNzJweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAvL3BhZGRpbmctYm90dG9tOiA0OHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5jbHMtY29udGVudC1zbGlkZS1ub3RpY2V7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB6LWluZGV4OiAxO1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbiAgICAudGV4dC10aXRsZTFcclxuICAgIHtcclxuICAgICAgbWFyZ2luLXRvcDogMC42cmVtO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjOEY4RjhGO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yY2g7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGVkZXNcclxuICAgIHtcclxuICAgICAgLy9tYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxlLWJsb2d7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgbWF4LXdpZHRoOiAyNjVweDtcclxuICAgICAgbWF4LWhlaWdodDogMzlweDtcclxuICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xyXG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAvKiBhdXRvcHJlZml4ZXI6IGlnbm9yZSBuZXh0ICovIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZTJcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtc3VidGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IzMzMzMzMztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmdyYWQxIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5ncmFkMiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAyMTVweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpOyAvLyBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgL1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogMTZweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcbiAgICAuZ3JhZDMge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0OHB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpOyAvLyBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgL1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5ncmFkLWJsb2d7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAyNzJweDtcclxuICAgICAgaGVpZ2h0OiA4MHB4OyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTo0cHg7XHJcbiAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcbiAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5jbHMtYmxvZzpmaXJzdC1jaGlsZCAuZ3JhZDEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICB3aWR0aDogMjcycHg7XHJcbiAgICAgIGhlaWdodDogODBweDsgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICBib3R0b206NHB4O1xyXG4gICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgIC8vb3BhY2l0eTogMC41O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgfVxyXG4gICAgLmNscy1tb29kOmZpcnN0LWNoaWxkIC5ncmFkMntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogODBweDsgLy8gRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzIC9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTsgLy8gU3RhbmRhcmQgc3ludGF4IChtdXN0IGJlIGxhc3QpIC9cclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTo0cHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcbiAgICAuY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDk5JTtcclxuICAgICAgaGVpZ2h0OiA4MHB4OyAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTo0cHg7XHJcbiAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcbiAgICAuY2xzLWJsb2c6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZ3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICAgICAgd2lkdGg6IDI3MnB4O1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7IC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgYm90dG9tOjRweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAvL29wYWNpdHk6IDAuNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuXHJcbiAgICAuZ3JhZC1pY29uLWJsb2d7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiA5NC41JTtcclxuICAgICAgaGVpZ2h0OiA1NnB4OyAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMiksIHJnYmEoMCwgMCwgMCwgMCkpOyAvLyBTdGFuZGFyZCBzeW50YXggKG11c3QgYmUgbGFzdCkgL1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgdG9wOjBweDtcclxuICAgICAgbGVmdDogMTZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvcGFjaXR5OjAuNTtcclxuICAgIH1cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZC1pY29uLWJsb2d7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDU2cHg7IC8vIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAvXHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7IC8vIFN0YW5kYXJkIHN5bnRheCAobXVzdCBiZSBsYXN0KSAvXHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICB0b3A6MHB4O1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZyBcclxuICAgIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC8vIC5mbG9hdC1pbmZvaWNvbntcclxuICAgIC8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICBib3R0b206IDYwcHg7XHJcbiAgICAvLyAgIGxlZnQ6IDE2cHg7XHJcbiAgICAvLyAgIHotaW5kZXg6IDExO1xyXG4gICAgLy8gfVxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZvaWNvbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mbG9hdC1pbmZvaWNvbntcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxNnB4O1xyXG4gICAgICB6LWluZGV4OiAxMTtcclxuICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgIGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5kaXYtd3JhcC1pY29ue1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjIpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuXHJcbiAgICAgIC5pbWctc2hhcmV7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LXdyYXAtaWNvbi1oZWFydHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC4yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICBoZWlnaHQ6IDI4cHg7XHJcblxyXG4gICAgICAuaW1nLWhlYXJ0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgd2lkdGg6MjBweDtcclxuICAgICAgICBoZWlnaHQ6MThweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZvaWNvbmhlYXJ0e1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogNTlweDtcclxuICAgICAgbGVmdDogNTZweDtcclxuICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvYXQtaW5mb2ljb25oZWFydHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDU5cHg7XHJcbiAgICAgIGxlZnQ6IDU2cHg7XHJcbiAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICB3aWR0aDogNDhweDtcclxuICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHggOHB4IDhweCA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0LWluZm97XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiA4cHg7XHJcbiAgICAgIGxlZnQ6IDI0cHg7XHJcbiAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgfVxyXG4gICAgLmZsb2F0LWluZm8tcmVnaW9ue1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZmxvYXQtcHJvbW97XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICBsZWZ0OiAtNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgIC8vIHdpZHRoOiA4OCU7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcclxuICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC8vIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW97XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAxOXB4O1xyXG4gICAgICBsZWZ0OiAtNHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOjEycHg7XHJcbiAgICAgIC8vIHdpZHRoOiA4OCU7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIG1heC13aWR0aDogOTUlO1xyXG4gICAgICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZsb2F0LXByb21vLWRlc2NyaXB0aW9ue1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW86YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIiBcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgIHRvcDogMjJweDtcclxuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmZsb2F0LXByb21vOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICB0b3A6IDIycHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjODUxZjFjO1xyXG4gICAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDhweDtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5jbHMtbW9vZDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb3tcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDhweDtcclxuICAgICAgbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmNscy1zdWJ0aXRsZXtcclxuICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1pbmZvLWNvdmVyLWF1dG8td2lkdGh7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGl2LWluZm8tY292ZXItYXV0by1oZWlnaHR7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5pbWctcmVnaW9ue1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICBvYmplY3QtZml0OmNvdmVyO1xyXG4gICAgfVxyXG4gICAgLm5vcGFkZGluZ3tcclxuICAgICAgcGFkZGluZzowO1xyXG4gICAgfVxyXG5cclxuICAgIC5zbGlkZWJsb2d0cmlwcy1zY3JvbGxcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAyMzRweDtcclxuXHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNTQwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zbGlkZTJcclxuICAgIHtcclxuICAgICAgbWluLXdpZHRoOiAyNzJweDtcclxuICAgICAgaGVpZ2h0OiAyMDhweDtcclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTc0cHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAyNjBweDsgXHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAvLyAgIGhlaWdodDogMTc0cHg7XHJcbiAgICAgIC8vICAgbWluLXdpZHRoOiAyNjBweDsgXHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE3NHB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMjgycHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE3NHB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMjgycHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgLy8gICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgICAvLyAgIG1pbi13aWR0aDogMzEwcHg7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgIC8vICAgaGVpZ2h0OiA0MzJweDtcclxuICAgICAgLy8gICBtaW4td2lkdGg6IDcwMHB4O1xyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICAuc2xpZGUyLXNjcm9sbFxyXG4gICAge1xyXG4gICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE5cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOjMyMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOjM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzODRweCkgYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcbiAgICAgICAgLy9tYXJnaW4tdG9wOiAtMjBweDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogMzIwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MDBweCkgYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogMzMwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MDBweCkge1xyXG4gICAgICAgIGhlaWdodDogNTcwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgLnNsaWRlNS1zY3JvbGxcclxuICAgIHtcclxuICAgICAgaGVpZ2h0OiAyMzRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1NDBweDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZTMtc2Nyb2xsXHJcbiAgICB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6MzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDEycHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTBweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMzBweDtcclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5zbGlkZTQtc2Nyb2xsXHJcbiAgICB7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOjMwMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE2NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDozNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxODZweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE4NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xyXG4gICAgICAgIGhlaWdodDogMTg2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTZweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gICAgICAgIGhlaWdodDogMTk2cHg7XHJcblxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOTZweDtcclxuXHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDE5NnB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAgICAgICBoZWlnaHQ6IDMyMHB4O1xyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNsaWRlM1xyXG4gICAge1xyXG4gICAgICBtaW4td2lkdGg6IDIxNnB4O1xyXG4gICAgICBoZWlnaHQ6IDI4MnB4O1xyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxe1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczJ7XHJcbiAgICAgIHdpZHRoOiA1NzBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczN7XHJcbiAgICAgIHdpZHRoOiA4NTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczR7XHJcbiAgICAgIHdpZHRoOiAxMTIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHM1e1xyXG4gICAgICB3aWR0aDogMTQwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzNntcclxuICAgICAgd2lkdGg6IDE2ODBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczd7XHJcbiAgICAgIHdpZHRoOiAxOTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHM4e1xyXG4gICAgICB3aWR0aDogMjIzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzOXtcclxuICAgICAgd2lkdGg6IDI1MDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczEwe1xyXG4gICAgICB3aWR0aDogMjc4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTF7XHJcbiAgICAgIHdpZHRoOiAzMDYwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxMntcclxuICAgICAgd2lkdGg6IDMzNDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczEze1xyXG4gICAgICB3aWR0aDogMzYxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTR7XHJcbiAgICAgIHdpZHRoOiAzODkwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxNXtcclxuICAgICAgd2lkdGg6IDQxNzBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczE2e1xyXG4gICAgICB3aWR0aDogNDQ1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMTd7XHJcbiAgICAgIHdpZHRoOiA0NzIwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyZGVhbHMxOHtcclxuICAgICAgd2lkdGg6IDUwMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXJkZWFsczE5e1xyXG4gICAgICB3aWR0aDogNTI4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcmRlYWxzMjB7XHJcbiAgICAgIHdpZHRoOiA1NTUwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5uZXIye1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjN7XHJcbiAgICAgIHdpZHRoOiA1MTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXI0e1xyXG4gICAgICB3aWR0aDogMTk1JTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXI1e1xyXG4gICAgICB3aWR0aDogODUwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyNntcclxuICAgICAgd2lkdGg6IDEwMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXI3e1xyXG4gICAgICB3aWR0aDogMTE3MHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGRpdntcclxuICAgICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5pbm5lcjh7XHJcbiAgICAgIHdpZHRoOiAxMzMwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6dGFibGUtY2VsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmlubmVyOXtcclxuICAgICAgd2lkdGg6IDE1MjBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5uZXIxMHtcclxuICAgICAgd2lkdGg6IDE2OTBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTp0YWJsZS1jZWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLnRleHQtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICB9XHJcbiAgLmhvdGVsLW5hbWVcclxuICB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICAudGl0bGUtYmxvZ1xyXG4gIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDo4cHg7XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2FhYTtcclxuICAgIG1hcmdpbjogOXB4IC0yMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbiAgfVxyXG5cclxuICAvLyAuYmFja2dyb3VuZHtcclxuICAvLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JsdWUucG5nJyk7XHJcbiAgLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC8vIH1cclxuICAvLyAuaW5wdXRXaXRoSWNvbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgLy8gICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIC5pbnB1dFdpdGhJY29uIHtcclxuICAvLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyB9XHJcbiAgXHJcbiAgLy8gLmlucHV0V2l0aEljb24gaSB7XHJcbiAgLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gICBsZWZ0OiAwO1xyXG4gIC8vICAgdG9wOiAwcHg7XHJcbiAgLy8gICBwYWRkaW5nOiAyNHB4IDE1cHg7XHJcbiAgLy8gICBjb2xvcjogI2FhYTtcclxuICAvLyAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC8vIFtjbGFzc149XCJpY29uLVwiXSwgW2NsYXNzKj1cIiBpY29uLVwiXSB7XHJcbiAgLy8gICAvKiB1c2UgIWltcG9ydGFudCB0byBwcmV2ZW50IGlzc3VlcyB3aXRoIGJyb3dzZXIgZXh0ZW5zaW9ucyB0aGF0IGNoYW5nZSBmb250cyAqL1xyXG4gIC8vICAgZm9udC1mYW1pbHk6ICdpY29tb29uJyAhaW1wb3J0YW50O1xyXG4gIC8vICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIC8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAvLyAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xyXG4gIC8vICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgLy8gICBsaW5lLWhlaWdodDogMTtcclxuICBcclxuICAvLyAgIC8qIEJldHRlciBGb250IFJlbmRlcmluZyA9PT09PT09PT09PSAqL1xyXG4gIC8vICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLy8gICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gIC8vIH1cclxuIFxyXG4gIC5pdGVtLW1kIGlvbi1hdmF0YXIge1xyXG4gICAgIG1pbi13aWR0aDogMHB4OyBcclxuICAgICBtaW4taGVpZ2h0OiAwcHg7IFxyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnZsIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxuICB9XHJcbiAgLmJ0bi1zZWFyY2hcclxuICB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2Y1OTIzMztcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDUycHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubGlzdC1oZWFkZXItbWQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZGVkZTtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG4uaXRlbS1tZCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG4gIC8qU3R5bGUgY2FsZW5kYXIqL1xyXG4gIC5jb2wtY2FsZW5kYXJ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICB9XHJcbiAgLmNvbC1jYWxlbmRhcntcclxuICAgIG1hcmdpbi10b3A6NHB4O1xyXG4gICAgLy9tYXJnaW4tbGVmdDo0cHg7XHJcbiAgfVxyXG4gIC5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY2lue1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTcxcHg7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgfSBcclxuICAuY29sLWNhbGVuZGFyIC5jYWxlbmRhci1kYXRlLmNvdXR7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtODhweDtcclxuICAgIHRvcDogMzJweDtcclxuICB9IFxyXG4gIC5wYWdlLW1haW4gLmNhbGVuZGFyLWRhdGUgLmJ1dHRvbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XHJcbiAgfVxyXG4gIC5pb24tbWQtY2FsZW5kYXI6YmVmb3Jle1xyXG4gICAgY29udGVudDogbm9uZTtcclxuICB9XHJcblxyXG4gIFxyXG4gIC5jYWxlbmRhci1kYXRlIC5pdGVtLWlubmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2FsZW5kYXItZGF0ZSAuaXRlbS1ibG9ja3tcclxuICAgIG1pbi1oZWlnaHQ6IDIuNHJlbTtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gIH1cclxuICBwYWdlLW1haW4gLnNsaWRlMyB7XHJcbiAgICBoZWlnaHQ6IDk4cHg7XHJcbiAgICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcclxuICAgIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLml0ZW0taW9zIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLmNscy1kZWFsOmZpcnN0LWNoaWxke1xyXG4gIHBhZGRpbmctbGVmdDogNHB4ICFpbXBvcnRhbnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uY2xzLWJsb2c6Zmlyc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5jbHMtZGVhbDpsYXN0LWNoaWxke1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4uY2xzLW1vb2Q6Zmlyc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxufVxyXG4uY2xzLW1vb2Q6bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNscy1kZXN0aW5hdGlvbjpmaXJzdC1jaGlsZHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5jbHMtZGVzdGluYXRpb246bGFzdC1jaGlsZHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLypTdHlsZSBjYWxlbmRhciovXHJcbiAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLWJhci1hY3RpdmUsXHJcbiAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLWtub2IsXHJcbiAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbixcclxuICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluOjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubS1sZWZ0LTEwe1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZGl2LXBhZGRpbmd7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbn1cclxuLy8gLmltZy1wYWRkaW5ne1xyXG4vLyAgIGhlaWdodDogNDhweDtcclxuLy8gICBwYWRkaW5nOiAxNXB4O1xyXG4vLyB9XHJcblxyXG5sYWJlbCB7XHJcbiAgcGFkZGluZzogMThweCAwcHggMThweCAwcHg7XHJcbn1cclxuLnRleHQtY2ludGh1e1xyXG4gIHBhZGRpbmc6IDE4cHggMThweCAxOHB4IDBweDtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6MzUwcHgpe1xyXG4gIC5pbWctcGFkZGluZy5pbWctbG9jYXRpb257XHJcbiAgICBtYXJnaW4tbGVmdDogLTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nLXBhZGRpbmcuaW1nLWNoZWNraW57XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuaW1nLXBhZGRpbmcuaW1nLWNoZWNrb3V0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5pbWctcGFkZGluZy5pbWctcGVvcGxle1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNvbC1jYWxlbmRhcntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbiAgXHJcbmJvZHl7XHJcbiAgLmFsZXJ0LXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgfVxyXG4gIC50b29sYmFyLWNvbnRlbnQtaW9zIHtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIH1cclxuICBpb24tYXBwLmlvcyBbcGFkZGluZ10gLnNjcm9sbC1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuY3QtMSwuY3QtMiwuY3QtOHtcclxuICAgIG1hcmdpbjowIDAgMTBweDtcclxuICB9XHJcbiAgLmFsZXJ0LWJ1dHRvbntcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5yYW5nZS1rbm9iLWhhbmRsZXtcclxuICAgIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBcclxuICAuYmFyLWJ1dHRvbi1tZCwuYmFyLWJ1dHRvbi1pb3N7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICBcclxufVxyXG4udGV4dC1sb2FkZGluZ3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC5jbHMtY29udGVudC1jb3ZlcntcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9ibHVlLnBuZycpO1xyXG4vLyAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vIH1cclxuLmNscy1jb250ZW50e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgXHJcbn1cclxuLnN0YXR1c2Jhci1tYXJnaW4tdG9we1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCApO1xyXG4gIC8vdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG5cclxuOjpuZy1kZWVwe1xyXG4gIC5jbHMtY29udGVudC1jb3ZlciAuc3RhdHVzYmFyLW1hcmdpbi10b3B7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHggKTtcclxuICAgIC8vdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG4gIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMDBweCkgYW5kIChtYXgtd2lkdGg6IDQxMnB4KSB7XHJcbiAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXR7XHJcbiAgICAgICAgd2lkdGg6IDk2LjIlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zd2lwZXItcGFnaW5hdGlvbntcclxuICAgICAgICB3aWR0aDogOTYuMiUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgIC8vY3NzIGzhu4tjaCDDom1cclxuICAubHVuYXJjYWxlbmRhclxyXG4gIHtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI2U1MjgyMiA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMzBweCA7XHJcbiAgICBoZWlnaHQ6IDMwcHggO1xyXG4gICAgcHtcclxuICAgICAgY29sb3I6ICAjZTUyODIyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5kYXlzXHJcbiAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmJldHdlZW4ge1xyXG4gIC5kYXlzLWJ0blxyXG4gIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc3RhcnRTZWxlY3Rpb24ge1xyXG4gIC5kYXlzLWJ0biBcclxuICB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgIHB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5lbmRTZWxlY3Rpb24ge1xyXG4gIC5kYXlzLWJ0blxyXG4gIHtcclxuICAgIHB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuICBzbWFsbFxyXG4gIHtcclxuICAgIG1hcmdpbjogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNlNTI4MjIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgIGJvdHRvbTogLTZweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZWZ0OiAtMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvL1xyXG4gIC5wLWxlZnQtMTYge1xyXG4gICAgcGFkZGluZy1sZWZ0OjE2cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctcmlnaHQ6MTZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkqMiAtIDE0cHggKTtcclxuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDhweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDhweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbiAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICB9XHJcbiAgLmljX2hvbWUgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2hvbWUuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICAgIC8vdG9wOjEzcHg7XHJcbiAgfVxyXG4gIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICB9XHJcbiAgLmljX21lc3NhZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3Jle1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb250ZW50OiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICB9XHJcbiAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XHJcbiAgIGJvcmRlci1yYWRpdXM6MTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6NjBweDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDo0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XHJcbiAgYm9yZGVyLWJvdHRvbTpub25lO1xyXG4gIH1cclxuXHJcbiAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTNweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OjgwcHggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcclxuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcclxuICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgfVxyXG5cclxuICAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxM3B4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6OTBweCAhaW1wb3J0YW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XHJcbiAgfVxyXG4gIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogMzI5cHgpIHtcclxuICAgIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgbWluLWhlaWdodDo3MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgIG1pbi1oZWlnaHQ6NDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xyXG4gICAgICBtaW4taGVpZ2h0OjgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpeGhlaWdodC05MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgbWluLWhlaWdodDoxMDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLy8vL25ldyBzdHlsZVxyXG4gIC5pY19idXMyIC50b2FzdC1jb250YWluZXI6OmJlZm9yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIFxyXG4gIC5pY19ob21lIC50b2FzdC13cmFwcGVyLnRvYXN0LXRvcCAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jb250ZW50OjpiZWZvcmV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmcnKTtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIG1hcmdpbi10b3A6IDEzcHggO1xyXG4gICAgLy90b3A6MTNweDtcclxuICB9XHJcbiAgLmljX3BhcGVyIC50b2FzdC1jb250ZW50OjpiZWZvcmV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbnRlbnQ6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnJyk7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxM3B4IDtcclxuICB9XHJcbiAgLmljX21lc3NhZ2UgLnRvYXN0LWNvbnRlbnQ6OmJlZm9yZXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29udGVudDogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19tZXNzYWdlLnN2ZycpO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTNweCA7XHJcbiAgfVxyXG4gIC5jbHMtYWxlcnQtc2hvd21vcmUge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAuZG9uZTEtY29tYm8tY3NzIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIH1cclxuICAgIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtbWR7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LW1kIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWUtc2xpZGVyIGlvbi1zZWdtZW50LWJ1dHRvbntcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2xpZGVyIGlvbi1zbGlkZXtcclxuICAgICAgLy9ib3JkZXItYm90dG9tOiBzb2xpZCAycHggI2ZmZjtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWUtc2xpZGVye1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTA2cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxufVxyXG4uaW1nLWxvc3Rjb25uZWN0aW9ue1xyXG4gIHBhZGRpbmctdG9wOiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1sb3N0Y29ubmVjdGlvbntcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2xzLWNvbnRlbnQtY292ZXJ7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7ICAvLyBJRSAxMCtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8vIEZpcmVmb3hcclxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgLS1vZmZzZXQtYm90dG9tOjBweDtcclxufVxyXG4uY2xzLWNvbnRlbnQtc2xpZGU6YWZ0ZXJ7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcblxyXG4uZGl2LXN0YXR1c2Jhci1mbG9hdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xyXG59XHJcbi5mbG9hdC1zdGF0dXNiYXItZW5hYmxlZHtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG4uZmxvYXQtc3RhdHVzYmFyLWRpc2FibGVke1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMC4ycywgb3BhY2l0eSAwLjJzIGxpbmVhcjtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4vLy8vIGV4cGVyaWVuY2VtdXN0dHJ5XHJcbi5jbHMtZXhwZXJpZW5jZW11c3R0cnl7XHJcbiAgcGFkZGluZy10b3A6IDdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG4ucC1yaWdodC04e1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcblxyXG4ubS1ib3R0b20tOHtcclxuICBtYXJnaW4tYm90dG9tOjhweDtcclxufVxyXG4ucC10b3AtMzB7XHJcbiAgcGFkZGluZy10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG4ucC10b3AtMjF7XHJcbiAgcGFkZGluZy10b3A6IDIxcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRpdGxlLXBhZGRpbmd7XHJcbiAgcGFkZGluZzoxNnB4IDBweCAwcHggMHB4O1xyXG59XHJcbi50aXRsZS1wYWRkaW5nLTF7XHJcbiAgcGFkZGluZzoyNHB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uaW1nLXJlZ2lvbntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcbi5ub3BhZGRpbmd7XHJcbiAgcGFkZGluZzowO1xyXG59XHJcblxyXG4uZmxvYXQtaW5mby1yZWdpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDhweDtcclxuICB6LWluZGV4OiAxMTtcclxufVxyXG4uZmxvYXQtaW5mby1leHBlcmllbmNle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZy1mbG9hdC1leHBlcmllbmNle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmltZy1tdXN0dHJ5e1xyXG4gIGhlaWdodDogOTZweDtcclxufVxyXG4udGV4dC10aXRsZWV4cFxyXG4gICAge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbi5ncmFkLWV4cGVyaWVuY2V7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7IC8vIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAvXHJcbiAgICAgIGJhY2tncm91bmQ6ICByZ2JhKDAsIDAsIDAsIDAuNSk7Ly8gU3RhbmRhcmQgc3ludGF4IChtdXN0IGJlIGxhc3QpIC9cclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgLy9vcGFjaXR5OiAwLjI1O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi10aXRsZXtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOjRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbi50ZXh0LXBsYWNlaG9sZGVye1xyXG4gIGNvbG9yOiAjODI4MjgyIDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuLnRleHQtc2VhcmNoe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4uY29sLXBsYWNlaG9sZGVye1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDowO1xyXG59XHJcbi5jbHMtYmxvZ3RyaXA6Zmlyc3QtY2hpbGR7XHJcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNscy1ibG9ndHJpcDpmaXJzdC1jaGlsZCAuZ3JhZC1ibG9ne1xyXG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubS10b3AtN3tcclxuICBtYXJnaW4tdG9wOjdweDtcclxufVxyXG5cclxuLy9TdHlsZSBpbnB1dCB1cGRhdGVcclxuICAuZGl2LXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5pbWctaW5wdXR7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDE4cHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIC5pbWctY2luLWNvdXR7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDIwcHggMTRweCAxN3B4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICAucC1sLTB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmltZy1jaGVja2luLCAgLmltZy1wZW9wbGV7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICB9XHJcbiAgLmltZy1jaGVja291dCB7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTJweDtcclxuICB9XHJcbiAgLmRpdi1pbnB1dC1yaWdodHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MXB4O1xyXG4gICAgXHJcbiAgfVxyXG4gIC5tLWwtMzZ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzZweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGl2LWNpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA0NiU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWlucHV0LXNlYXJjaHtcclxuICAgIG1hcmdpbjogMHB4IDAgMTRweCA1MXB4O1xyXG4gIH1cclxuICAudGV4dC1pbnB1dC1zZWFyY2gtd3JhcHRleHR7XHJcbiAgICBtYXJnaW46IDRweCAwIDE0cHggNTFweDtcclxuICB9XHJcbiAgLnRleHQtbWlkZGxle1xyXG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1jaW4sIC50ZXh0LXBheHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtY29sb3JcclxuICAgIHtcclxuICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG4gIC5mb250LXRodVxyXG4gICAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWNvdXR7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1OHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIC8vYm9yZGVyLWxlZnQ6IHNvbGlkIDAuNXB4ICM4MjgyODI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWltZy1jb2ZmZWV7XHJcbiAgICAgIGJvdHRvbTo0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1jb2ZmZWV7XHJcbiAgICAgIGhlaWdodDogMzJweDtcclxuICAgIH1cclxuXHJcbiAgICBcclxuLmltZy1sb2dve1xyXG4gIHdpZHRoOiA3NnB4O1xyXG4gIC8vd2lkdGg6IDkwcHg7XHJcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4ICk7XHJcbiAgei1pbmRleDogMTA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi8vLy8vLy8vLy9cclxuLmRpdi13cmFwZXItc2xpZGV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxMjhweCkgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMik7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuLnN3aXBlci1wYWdpbmF0aW9ue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vdG9wOiAxNTZweDtcclxuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgOTRweCkgO1xyXG4gIC8vd2lkdGg6IDEwMCU7XHJcbiAgLy8gY29sb3I6ICNmZmY7XHJcbiAgLy8gZm9udC1zaXplOiAxN3B4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGhlaWdodDogODZweDtcclxuICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB3aWR0aDogOTUuOCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICB6LWluZGV4OiA5OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNDJweDtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuICBcclxuICAuZGl2LWhvdGVsLCAuZGl2LWZsaWdodCwgLmRpdi1jb21ibywgLmRpdi1mb29ke1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlLW1hcmt7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyBib3R0b206IDA7XHJcbiAgICAvLyBib3JkZXItYm90dG9tOiBzb2xpZCAycHggcmdiYSgyNTUsMjU1LDI1NSwgMSk7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyB0cmFuc2l0aW9uOiBsZWZ0IDAuNXMgZWFzZS1vdXQ7XHJcbiAgICAvLyB3aWR0aDogNTAlO1xyXG4gICAgLy8gbGVmdDogMCU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGxlZnQ6IDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI2KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgdG9wOiAtM3B4O1xyXG4gIH1cclxuICAuc3ViLWNvbG9ye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuICB9XHJcbiAgLmxlZnQtNTB7XHJcbiAgICBsZWZ0OiAzNyU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTZweDtcclxuICB9XHJcbiAgLmxlZnQtNjZ7XHJcbiAgICBsZWZ0OiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTRweDtcclxuICAgIHdpZHRoOiAyNyU7XHJcbiAgfVxyXG4gIC5mb2N1c3tcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5jbHMtdmlzaWJsZXtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvL2hlaWdodDogNDhweDtcclxufVxyXG4uY2xzLWRpc2FibGVke1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBoZWlnaHQ6IDBweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgei1pbmRleDogMDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5kaXYtd3JhcGVyLWZvb2R7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnN3aXBlci1wYWdpbmF0aW9uLm1haW4tY29sb3J7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uZGl2LWhvdGVsLm1haW4tY29sb3J7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uZGl2LWZsaWdodC5tYWluLWNvbG9ye1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ob21lLWFjdGl2ZS10YWJ7XHJcbiAgY29sb3I6ICMyNmJlZDY7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ob21lLWRlYWN0aXZlLXRhYntcclxuICBjb2xvcjogIzMzMzMzMztcclxuICBvcGFjaXR5OiAwLjY1O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHggIWltcG9ydGFudDtcclxufVxyXG4uZGl2LWljb24taG9tZXtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuLy9ub3RpY2VcclxuLmNscy1ub3RpY2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWVlYzc7XHJcbiAgaGVpZ2h0OiA2N3B4O1xyXG4gIHBhZGRpbmc6IDE2cHggMDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB6LWluZGV4OiA5OTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIC5kaXYtaG90ZWwsIC5kaXYtZmxpZ2h0LCAuZGl2LWNvbWJvLCAuZGl2LWZvb2R7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtbWFya3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHRvcDogLTNweDtcclxuICB9XHJcbiAgLnN1Yi1jb2xvcntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5sZWZ0LTUwe1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgfVxyXG4gIC5sZWZ0LTY2e1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gIH1cclxuICAuZm9jdXN7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2V7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy90b3A6IDE1NnB4O1xyXG4gIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxNzFweCkgO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGNvbG9yOiAjZmZmO1xyXG4gIC8vIGZvbnQtc2l6ZTogMTdweDtcclxuICAvLyB6LWluZGV4OiA5OTtcclxuXHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBoZWlnaHQ6IDg2cHg7XHJcbiAgcGFkZGluZzogMTZweCAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgd2lkdGg6IDk1LjIlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgei1pbmRleDogOTk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgY29sb3I6ICMyMjIyMjI7XHJcbiAgXHJcbiAgLy8gLmRpdi1ob3RlbHtcclxuICAvLyAgIHdpZHRoOiAzMyU7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8vICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAuZGl2LWZvb2R7XHJcbiAgLy8gICB3aWR0aDogMzMlO1xyXG4gIC8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLy8gICBvcGFjaXR5OiAwLjc7XHJcbiAgLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgLy8gfVxyXG5cclxuICAvLyAuZGl2LWZsaWdodHtcclxuICAvLyAgIHdpZHRoOiA0MCU7XHJcbiAgLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG4gIC8vICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC8vICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAvLyAgIG9wYWNpdHk6IDAuNztcclxuICAvLyB9XHJcbiAgLmRpdi1ob3RlbCwgLmRpdi1mbGlnaHQsIC5kaXYtY29tYm8sIC5kaXYtZm9vZHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1tYXJre1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHJnYmEoMjU1LDI1NSwyNTUsIDEpO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xyXG4gICAgLy8gd2lkdGg6IDUwJTtcclxuICAgIC8vIGxlZnQ6IDAlO1xyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNjZGNkY2Q7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNik7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHRvcDogLTNweDtcclxuICB9XHJcbiAgLnN1Yi1jb2xvcntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgfVxyXG4gIC5sZWZ0LTUwe1xyXG4gICAgbGVmdDogMzclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgfVxyXG4gIC5sZWZ0LTY2e1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB3aWR0aDogMjclO1xyXG4gIH1cclxuICAuZm9jdXN7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5kaXYtbm90aWNle1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLm1hcmdpbi1sZWZ0LTExe1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG59XHJcbi5pbWctbm90aWNle1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG4udGV4dC1pbmZve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi50b3AtMTJ7XHJcbiAgdG9wOiAxMnB4O1xyXG59XHJcbi5kaXYtd3JhcC1kZWFse1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIC8vbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBcclxuXHJcbiAgLmZsb2F0LWluZm9pY29ue1xyXG4gICAgbGVmdDogMTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGl2LXdyYXAtaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gIH1cclxuICAuaG90ZWwtbmFtZXtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuXHJcbiAgLmZsb2F0LWluZm97XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxuICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XHJcbiAgfVxyXG5cclxuICAuaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5zbGlkZTIge1xyXG4gICAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtdGl0bGUtYmxvZ3tcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5mbG9hdC1pbmZvaWNvbntcclxuICBsZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxlZnQtMjh7XHJcbiAgbGVmdDogMjhweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sZWZ0LTcye1xyXG4gIGxlZnQ6IDcycHggIWltcG9ydGFudDtcclxufVxyXG4udG9wLTR7XHJcbiAgdG9wOiA0cHggIWltcG9ydGFudFxyXG59XHJcbi50b3AtMTZ7XHJcbiAgdG9wOiAxNnB4O1xyXG59XHJcbi5iZy13aGl0ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4ucC1ib3R0b20tMHtcclxuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5wLXRvcC0yNHtcclxuICBwYWRkaW5nLXRvcDogMjRweDtcclxufVxyXG4uYm90dG9tLTE4e1xyXG4gIGJvdHRvbTogMThweCAhaW1wb3J0YW50O1xyXG59XHJcbi5mLTIwe1xyXG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wLWJvdHRvbS0ye1xyXG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRpdi1sb2FkaW5nY2lue1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG59XG4uYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTY4cHgpO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cbi5iYWNrZ3JvdW5kIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5NS44JTtcbiAgaGVpZ2h0OiAyODdweDtcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG59XG4uYmFja2dyb3VuZCAuZGl2LXdyYXAtc2VhcmNoIHtcbiAgei1pbmRleDogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbCB7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbCAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhY2tncm91bmQgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2Uge1xuICBtYXJnaW4tdG9wOiAxOTdweDtcbn1cbi5iYWNrZ3JvdW5kIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNlIC5sYWJlbC1ob21lLWhvdGVsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uYmFja2dyb3VuZCAucm93LXNlYXJjaC1ob21lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5iYWNrZ3JvdW5kLW5vdGljZSB7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAuZGl2LXdyYXAtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDU2OHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC5pbWctYmFja2dyb3VuZCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1NjhweCk7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC5kaXYtd3JhcC1zZWFyY2gtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogLThweDtcbiAgcGFkZGluZzogOHB4O1xuICBvcGFjaXR5OiAwLjQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjIyMjtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiA5NS44JTtcbiAgaGVpZ2h0OiAyODdweDtcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLmRpdi13cmFwLXNlYXJjaCB7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAudGV4dC1ob21lLWhvdGVsIHtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLnRleHQtaG9tZS1ob3RlbCAubGFiZWwtaG9tZS1ob3RlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJhY2tncm91bmQtbm90aWNlIC50ZXh0LWhvbWUtaG90ZWwtbm90aWNlIHtcbiAgbWFyZ2luLXRvcDogMTk3cHg7XG59XG4uYmFja2dyb3VuZC1ub3RpY2UgLnRleHQtaG9tZS1ob3RlbC1ub3RpY2UgLmxhYmVsLWhvbWUtaG90ZWwge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5iYWNrZ3JvdW5kLW5vdGljZSAucm93LXNlYXJjaC1ob21lIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5jbHMtY29udGVudC1zbGlkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IC03MnB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jbHMtY29udGVudC1zbGlkZS1ub3RpY2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50ZXh0LXRpdGxlMSB7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzhGOEY4RjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMmNoO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGV4dC10aXRsZWRlcyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi50ZXh0LXRpdGxlLWJsb2cge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDI2NXB4O1xuICBtYXgtaGVpZ2h0OiAzOXB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIGF1dG9wcmVmaXhlcjogaWdub3JlIG5leHQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLnRleHQtdGl0bGUyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRleHQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ3JhZDIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZ3JhZDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZDEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWJsb2c6Zmlyc3QtY2hpbGQgLmdyYWQxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMjcycHg7XG4gIGhlaWdodDogODBweDtcbiAgLyogRm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgZ3JhZGllbnRzICovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCksIHJnYmEoMCwgMCwgMCwgMC4zKSk7XG4gIHotaW5kZXg6IDEwO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogNHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNscy1tb29kOmZpcnN0LWNoaWxkIC5ncmFkMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk5JTtcbiAgaGVpZ2h0OiA4MHB4O1xuICAvKiBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBncmFkaWVudHMgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjMpKTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY2xzLWJsb2c6Zmlyc3QtY2hpbGQgLmdyYWQtYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDI3MnB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIEZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGdyYWRpZW50cyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICB6LWluZGV4OiAxMDtcbiAgYm90dG9tOiA0cHg7XG4gIGxlZnQ6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5ncmFkLWljb24tYmxvZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDk0LjUlO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMTZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZ3JhZC1pY29uLWJsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDU2cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4yKSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIHotaW5kZXg6IDEwO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtaW5mb2ljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5mbG9hdC1pbmZvaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5kaXYtd3JhcC1pY29uIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBhZGRpbmc6IDJweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbn1cbi5kaXYtd3JhcC1pY29uIC5pbWctc2hhcmUge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uZGl2LXdyYXAtaWNvbi1oZWFydCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwYWRkaW5nOiAycHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uZGl2LXdyYXAtaWNvbi1oZWFydCAuaW1nLWhlYXJ0IHtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4uY2xzLWRlYWw6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm9pY29uaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTlweDtcbiAgbGVmdDogNTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcbn1cblxuLmZsb2F0LWluZm9pY29uaGVhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTlweDtcbiAgbGVmdDogNTZweDtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDBweCA4cHggOHB4IDhweDtcbn1cblxuLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiAyNHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmZsb2F0LWluZm8tcmVnaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmZsb2F0LXByb21vIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE5cHg7XG4gIGxlZnQ6IC00cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDhweCAwcHggMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTlweDtcbiAgbGVmdDogLTRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBwYWRkaW5nOiAzcHggOHB4IDBweCAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWF4LXdpZHRoOiA5NSU7XG59XG5cbi5mbG9hdC1wcm9tby1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtZGVhbDpmaXJzdC1jaGlsZCAuZmxvYXQtcHJvbW86YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5mbG9hdC1wcm9tbzphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgdG9wOiAyMnB4O1xuICBib3JkZXItdG9wOiA0cHggc29saWQgIzg1MWYxYztcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNscy1kZWFsOmZpcnN0LWNoaWxkIC5mbG9hdC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDhweDtcbiAgbGVmdDogOHB4O1xufVxuXG4uY2xzLW1vb2Q6Zmlyc3QtY2hpbGQgLmZsb2F0LWluZm8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiA4cHg7XG59XG5cbi5jbHMtc3VidGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBtYXJnaW46IDA7XG4gIGhlaWdodDogMjlweDtcbn1cblxuLmRpdi1pbmZvLWNvdmVyLWF1dG8td2lkdGgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTA0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LWluZm8tY292ZXItYXV0by1oZWlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctcmVnaW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNsaWRlYmxvZ3RyaXBzLXNjcm9sbCB7XG4gIGhlaWdodDogMjM0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlYmxvZ3RyaXBzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiA1NDBweDtcbiAgfVxufVxuXG4uc2xpZGUyIHtcbiAgbWluLXdpZHRoOiAyNzJweDtcbiAgaGVpZ2h0OiAyMDhweDtcbn1cblxuLnNsaWRlMi1zY3JvbGwge1xuICBoZWlnaHQ6IDMyMHB4O1xuICBtYXJnaW4tbGVmdDogLTE5cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGUyLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTItc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMzMHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlMi1zY3JvbGwge1xuICAgIGhlaWdodDogNTcwcHg7XG4gIH1cbn1cblxuLnNsaWRlNS1zY3JvbGwge1xuICBoZWlnaHQ6IDIzNHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlNS1zY3JvbGwge1xuICAgIGhlaWdodDogNTQwcHg7XG4gIH1cbn1cblxuLnNsaWRlMy1zY3JvbGwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzg0cHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxMnB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0ODBweCkgYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuc2xpZGUzLXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTBweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMTkwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTMtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5MHB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgLnNsaWRlMy1zY3JvbGwge1xuICAgIGhlaWdodDogMzMwcHg7XG4gIH1cbn1cblxuLnNsaWRlNC1zY3JvbGwge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTY2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE4NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxODZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDM4NHB4KSBhbmQgKG1heC13aWR0aDogNDEycHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTg2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDYwMHB4KSBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLnNsaWRlNC1zY3JvbGwge1xuICAgIGhlaWdodDogMTk2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDE5NnB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc2xpZGU0LXNjcm9sbCB7XG4gICAgaGVpZ2h0OiAxOTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5zbGlkZTQtc2Nyb2xsIHtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICB9XG59XG5cbi5zbGlkZTMge1xuICBtaW4td2lkdGg6IDIxNnB4O1xuICBoZWlnaHQ6IDI4MnB4O1xufVxuXG4uaW5uZXJkZWFsczEge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMyIHtcbiAgd2lkdGg6IDU3MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMzIHtcbiAgd2lkdGg6IDg1MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczMgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHM0IHtcbiAgd2lkdGg6IDExMjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyZGVhbHM0IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbm5lcmRlYWxzNSB7XG4gIHdpZHRoOiAxNDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzNSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXJkZWFsczYge1xuICB3aWR0aDogMTY4MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczYgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHM3IHtcbiAgd2lkdGg6IDE5NTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyZGVhbHM3IGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi5pbm5lcmRlYWxzOCB7XG4gIHdpZHRoOiAyMjMwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzOCBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXJkZWFsczkge1xuICB3aWR0aDogMjUwMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaW5uZXJkZWFsczkgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMCB7XG4gIHdpZHRoOiAyNzgwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTAgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMSB7XG4gIHdpZHRoOiAzMDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTEgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMiB7XG4gIHdpZHRoOiAzMzQwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxMyB7XG4gIHdpZHRoOiAzNjEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTMgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNCB7XG4gIHdpZHRoOiAzODkwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTQgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNSB7XG4gIHdpZHRoOiA0MTcwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTUgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNiB7XG4gIHdpZHRoOiA0NDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTYgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxNyB7XG4gIHdpZHRoOiA0NzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTcgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxOCB7XG4gIHdpZHRoOiA1MDAwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTggZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMxOSB7XG4gIHdpZHRoOiA1MjgwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMTkgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyZGVhbHMyMCB7XG4gIHdpZHRoOiA1NTUwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcmRlYWxzMjAgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyMiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjIgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyMyB7XG4gIHdpZHRoOiA1MTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyMyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI0IHtcbiAgd2lkdGg6IDE5NSU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjQgZGl2IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmlubmVyNSB7XG4gIHdpZHRoOiA4NTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI2IHtcbiAgd2lkdGg6IDEwMDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNiBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI3IHtcbiAgd2lkdGg6IDExNzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyNyBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI4IHtcbiAgd2lkdGg6IDEzMzBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyOCBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXI5IHtcbiAgd2lkdGg6IDE1MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmlubmVyOSBkaXYge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4uaW5uZXIxMCB7XG4gIHdpZHRoOiAxNjkwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pbm5lcjEwIGRpdiB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG59XG5cbi50ZXh0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAyNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4udGl0bGUtYmxvZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB3aWR0aDogMjYwcHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF0ge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgI2FhYTtcbiAgbWFyZ2luOiA5cHggLTIwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjNzO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pdGVtLW1kIGlvbi1hdmF0YXIge1xuICBtaW4td2lkdGg6IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xufVxuXG4udmwge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmJ0bi1zZWFyY2gge1xuICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MnB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmxpc3QtaGVhZGVyLW1kIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWluLWhlaWdodDogMHB4O1xuICBib3JkZXItdG9wOiAwcHggc29saWQgI2RlZGVkZTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLml0ZW0tbWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLypTdHlsZSBjYWxlbmRhciovXG4uY29sLWNhbGVuZGFyIHtcbiAgei1pbmRleDogOTk7XG59XG5cbi5jb2wtY2FsZW5kYXIge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY2luIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC03MXB4O1xuICB0b3A6IDMycHg7XG59XG5cbi5jb2wtY2FsZW5kYXIgLmNhbGVuZGFyLWRhdGUuY291dCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtODhweDtcbiAgdG9wOiAzMnB4O1xufVxuXG4ucGFnZS1tYWluIC5jYWxlbmRhci1kYXRlIC5idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xufVxuXG4uaW9uLW1kLWNhbGVuZGFyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG5cbi5jYWxlbmRhci1kYXRlIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2FsZW5kYXItZGF0ZSAuaXRlbS1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDIuNHJlbTtcbiAgaGVpZ2h0OiAwcHg7XG59XG5cbnBhZ2UtbWFpbiAuc2xpZGUzIHtcbiAgaGVpZ2h0OiA5OHB4O1xuICB3aWR0aDogMTYwcHggIWltcG9ydGFudDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pdGVtLWlvcyBpb24tdGh1bWJuYWlsIGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNscy1kZWFsOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiA0cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNscy1ibG9nOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNscy1kZWFsOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtbW9vZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jbHMtbW9vZDpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWRlc3RpbmF0aW9uOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNscy1kZXN0aW5hdGlvbjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xufVxuXG4vKlN0eWxlIGNhbGVuZGFyKi9cbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1iYXItYWN0aXZlLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLWtub2IsXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4ubS1sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uZGl2LXBhZGRpbmcge1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbmxhYmVsIHtcbiAgcGFkZGluZzogMThweCAwcHggMThweCAwcHg7XG59XG5cbi50ZXh0LWNpbnRodSB7XG4gIHBhZGRpbmc6IDE4cHggMThweCAxOHB4IDBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMwMHB4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLmltZy1wYWRkaW5nLmltZy1sb2NhdGlvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC00cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcGFkZGluZy5pbWctY2hlY2tvdXQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1wYWRkaW5nLmltZy1wZW9wbGUge1xuICAgIG1hcmdpbi1sZWZ0OiAtNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sLWNhbGVuZGFyIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5ib2R5IC5hbGVydC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5ib2R5IC50b29sYmFyLWNvbnRlbnQtaW9zIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5ib2R5IGlvbi1hcHAuaW9zIFtwYWRkaW5nXSAuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTZweCAhaW1wb3J0YW50O1xufVxuYm9keSAuY3QtMSwgYm9keSAuY3QtMiwgYm9keSAuY3QtOCB7XG4gIG1hcmdpbjogMCAwIDEwcHg7XG59XG5ib2R5IC5hbGVydC1idXR0b24ge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xufVxuYm9keSAucmFuZ2Uta25vYi1oYW5kbGUge1xuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cbmJvZHkgLmJhci1idXR0b24tbWQsIGJvZHkgLmJhci1idXR0b24taW9zIHtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1sb2FkZGluZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNscy1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnN0YXR1c2Jhci1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4ICk7XG59XG5cbjo6bmctZGVlcCAuY2xzLWNvbnRlbnQtY292ZXIgLnN0YXR1c2Jhci1tYXJnaW4tdG9wIHtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAyMnB4ICk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzAwcHgpIGFuZCAobWF4LXdpZHRoOiA0MTJweCkge1xuICA6Om5nLWRlZXAgaW9uLXNwaW5uZXIge1xuICAgIGhlaWdodDogMTYwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA0MTJweCkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIDo6bmctZGVlcCBpb24tc3Bpbm5lciB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxuICA6Om5nLWRlZXAgLmRpdi13cmFwLXNlYXJjaC1pbnB1dCB7XG4gICAgd2lkdGg6IDk2LjIlICFpbXBvcnRhbnQ7XG4gIH1cbiAgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gICAgd2lkdGg6IDk2LjIlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbjo6bmctZGVlcCAubHVuYXJjYWxlbmRhciB7XG4gIGJvcmRlcjogMC41cHggc29saWQgI2U1MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogMzZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuOjpuZy1kZWVwIC5sdW5hcmNhbGVuZGFyIHAge1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5kYXlzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5iZXR3ZWVuIC5kYXlzLWJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLnN0YXJ0U2VsZWN0aW9uIC5kYXlzLWJ0biB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5zdGFydFNlbGVjdGlvbiAuZGF5cy1idG4gcCB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmVuZFNlbGVjdGlvbiAuZGF5cy1idG4ge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuZW5kU2VsZWN0aW9uIC5kYXlzLWJ0biBwIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCBzbWFsbCB7XG4gIG1hcmdpbjogLTZweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2U1MjgyMiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogLTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgbGVmdDogLTI1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAucC1sZWZ0LTE2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApKjIgLSAxNHB4ICk7XG4gIC13ZWJraXQtcGFkZGluZy1zdGFydDogOHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogOHB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiA4cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdW5zZXQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogNDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmljX2J1czIgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2J1czIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfaG9tZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfaG9tZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5pY19wYXBlciAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfbWVzc2FnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfbWVzc2FnZS5zdmdcIik7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxM3B4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA4cHggMHB4ICM4MjgyODI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1ub3RpZmljYXRpb24gLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuOjpuZy1kZWVwIC5maXhoZWlnaHQtNDQgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogNDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEzcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIC13ZWJraXQtcGFkZGluZy1lbmQ6IDEwcHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogMTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6I2ZmZjtcbiAgLS1iYWNrZ3JvdW5kLXNlbGVjdGVkOiNmZmY7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG46Om5nLWRlZXAgLmZpeGhlaWdodC04MCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA0NHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgLXdlYmtpdC1wYWRkaW5nLWVuZDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAxMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDojZmZmO1xuICAtLWJhY2tncm91bmQtc2VsZWN0ZWQ6I2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbjo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDQ0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAxM3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDEwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogOTBweCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiNmZmY7XG4gIC0tYmFja2dyb3VuZC1zZWxlY3RlZDojZmZmO1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLW5vdGlmaWNhdGlvbiAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjUwcHgpIGFuZCAobWF4LXdpZHRoOiAzMjlweCkge1xuICA6Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtbm90aWZpY2F0aW9uIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA3MnB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTQ0IC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTgwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xuICB9XG4gIDo6bmctZGVlcCAuZml4aGVpZ2h0LTkwIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgICBtaW4taGVpZ2h0OiAxMDJweDtcbiAgfVxufVxuOjpuZy1kZWVwIC5pY19idXMyIC50b2FzdC1jb250YWluZXI6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19idXMyLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX2hvbWUgLnRvYXN0LXdyYXBwZXIudG9hc3QtdG9wIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNvbnRlbnQ6OmJlZm9yZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBjb250ZW50OiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19ob21lLnN2Z1wiKTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEzcHg7XG59XG46Om5nLWRlZXAgLmljX3BhcGVyIC50b2FzdC1jb250ZW50OjpiZWZvcmUge1xuICBmbG9hdDogbGVmdDtcbiAgY29udGVudDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfcGFwZXIuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuaWNfbWVzc2FnZSAudG9hc3QtY29udGVudDo6YmVmb3JlIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbnRlbnQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX21lc3NhZ2Uuc3ZnXCIpO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTNweDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5kb25lMS1jb21iby1jc3MgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuZG9uZTEtY29tYm8tY3NzIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmRvbmUxLWNvbWJvLWNzcyAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kIHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOjpuZy1kZWVwIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LW1kIHtcbiAgZmxleC13cmFwOiBub3dyYXA7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtbWQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cbjo6bmctZGVlcCAuaG9tZS1zbGlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmO1xufVxuOjpuZy1kZWVwIC5ob21lLXNsaWRlciBpb24tc2xpZGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBoZWlnaHQ6IDUwcHg7XG59XG46Om5nLWRlZXAgLmhvbWUtc2xpZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5pbWctbG9zdGNvbm5lY3Rpb24ge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1sb3N0Y29ubmVjdGlvbiB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwYWRkaW5nOiAwIDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNscy1jb250ZW50LWNvdmVyIHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgLS1vZmZzZXQtYm90dG9tOjBweDtcbn1cblxuLmNscy1jb250ZW50LXNsaWRlOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG59XG5cbi5kaXYtc3RhdHVzYmFyLWZsb2F0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xufVxuXG4uZmxvYXQtc3RhdHVzYmFyLWVuYWJsZWQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDAuMnMsIG9wYWNpdHkgMC4ycyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmZsb2F0LXN0YXR1c2Jhci1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwLjJzLCBvcGFjaXR5IDAuMnMgbGluZWFyO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY2xzLWV4cGVyaWVuY2VtdXN0dHJ5IHtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5wLXJpZ2h0LTgge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLm0tYm90dG9tLTgge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5wLXRvcC0zMCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLXRvcC0yMSB7XG4gIHBhZGRpbmctdG9wOiAyMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1wYWRkaW5nIHtcbiAgcGFkZGluZzogMTZweCAwcHggMHB4IDBweDtcbn1cblxuLnRpdGxlLXBhZGRpbmctMSB7XG4gIHBhZGRpbmc6IDI0cHggMHB4IDBweCAwcHg7XG59XG5cbi5pbWctcmVnaW9uIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmZsb2F0LWluZm8tcmVnaW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogOHB4O1xuICB6LWluZGV4OiAxMTtcbn1cblxuLmZsb2F0LWluZm8tZXhwZXJpZW5jZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTE7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1nLWZsb2F0LWV4cGVyaWVuY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDExO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmltZy1tdXN0dHJ5IHtcbiAgaGVpZ2h0OiA5NnB4O1xufVxuXG4udGV4dC10aXRsZWV4cCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmFkLWV4cGVyaWVuY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogMTA7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuXG4udGV4dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4udGV4dC1zZWFyY2gge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuXG4uY29sLXBsYWNlaG9sZGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cblxuLmNscy1ibG9ndHJpcDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uY2xzLWJsb2d0cmlwOmZpcnN0LWNoaWxkIC5ncmFkLWJsb2cge1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tLXRvcC03IHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuXG4uZGl2LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWctaW5wdXQge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDE2cHggMjBweCAxNnB4IDE4cHg7XG4gIHdpZHRoOiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5pbWctY2luLWNvdXQge1xuICBwYWRkaW5nOiAxNHB4IDIwcHggMTRweCAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wLWwtMCB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWNoZWNraW4sIC5pbWctcGVvcGxlIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLmltZy1jaGVja291dCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5kaXYtaW5wdXQtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogNTFweDtcbn1cblxuLm0tbC0zNiB7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtY2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWlucHV0LXNlYXJjaCB7XG4gIG1hcmdpbjogMHB4IDAgMTRweCA1MXB4O1xufVxuXG4udGV4dC1pbnB1dC1zZWFyY2gtd3JhcHRleHQge1xuICBtYXJnaW46IDRweCAwIDE0cHggNTFweDtcbn1cblxuLnRleHQtbWlkZGxlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1jaW4sIC50ZXh0LXBheCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZm9udC10aHUge1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59XG5cbi5kaXYtY291dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE1OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5kaXYtaW1nLWNvZmZlZSB7XG4gIGJvdHRvbTogNDBweDtcbn1cblxuLmltZy1jb2ZmZWUge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NnB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHggKTtcbiAgei1pbmRleDogMTA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi13cmFwZXItc2xpZGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxMjhweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgNjAsIDExMywgMC4yKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBoZWlnaHQ6IDg2cHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDk1LjglO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHotaW5kZXg6IDk5O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40MnB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbiAuZGl2LWhvdGVsLCAuc3dpcGVyLXBhZ2luYXRpb24gLmRpdi1mbGlnaHQsIC5zd2lwZXItcGFnaW5hdGlvbiAuZGl2LWNvbWJvLCAuc3dpcGVyLXBhZ2luYXRpb24gLmRpdi1mb29kIHtcbiAgd2lkdGg6IDI1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24gLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIC5zdWItY29sb3Ige1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjc7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24gLmxlZnQtNTAge1xuICBsZWZ0OiAzNyU7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbiAuZm9jdXMge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmNscy12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNscy1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXYtd3JhcGVyLWZvb2Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi5tYWluLWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1ob3RlbC5tYWluLWNvbG9yIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmRpdi1mbGlnaHQubWFpbi1jb2xvciB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWFjdGl2ZS10YWIge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ob21lLWRlYWN0aXZlLXRhYiB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvcGFjaXR5OiAwLjY1O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtaWNvbi1ob21lIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4uY2xzLW5vdGljZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDk0cHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVlZWM3O1xuICBoZWlnaHQ6IDY3cHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNscy1ub3RpY2UgLmRpdi1ob3RlbCwgLmNscy1ub3RpY2UgLmRpdi1mbGlnaHQsIC5jbHMtbm90aWNlIC5kaXYtY29tYm8sIC5jbHMtbm90aWNlIC5kaXYtZm9vZCB7XG4gIHdpZHRoOiAyNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmNscy1ub3RpY2UgLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLmNscy1ub3RpY2UgLnN1Yi1jb2xvciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5jbHMtbm90aWNlIC5sZWZ0LTUwIHtcbiAgbGVmdDogMzclO1xuICBtYXJnaW4tbGVmdDogLTZweDtcbn1cbi5jbHMtbm90aWNlIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5jbHMtbm90aWNlIC5mb2N1cyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMTcxcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiA4NnB4O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHdpZHRoOiA5NS4yJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB6LWluZGV4OiA5OTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIC5kaXYtaG90ZWwsIC5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmRpdi1mbGlnaHQsIC5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmRpdi1jb21ibywgLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAuZGl2LWZvb2Qge1xuICB3aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmFjdGl2ZS1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjVzIGVhc2Utb3V0O1xuICB3aWR0aDogMzAlO1xuICBsZWZ0OiAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjY2RjZGNkO1xuICB6LWluZGV4OiAtMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjYpO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgdG9wOiAtM3B4O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAuc3ViLWNvbG9yIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgb3BhY2l0eTogMC43O1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLW5vdGljZSAubGVmdC01MCB7XG4gIGxlZnQ6IDM3JTtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbm90aWNlIC5sZWZ0LTY2IHtcbiAgbGVmdDogNzAlO1xuICBtYXJnaW4tbGVmdDogLTRweDtcbiAgd2lkdGg6IDI3JTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ub3RpY2UgLmZvY3VzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtbm90aWNlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tYXJnaW4tbGVmdC0xMSB7XG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xufVxuXG4uaW1nLW5vdGljZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udG9wLTEyIHtcbiAgdG9wOiAxMnB4O1xufVxuXG4uZGl2LXdyYXAtZGVhbCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtd3JhcC1kZWFsIC5mbG9hdC1pbmZvaWNvbiB7XG4gIGxlZnQ6IDEycHggIWltcG9ydGFudDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5kaXYtd3JhcC1pbWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNzBweDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5ob3RlbC1uYW1lIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZGl2LXdyYXAtZGVhbCAuZmxvYXQtaW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNTRweDtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNHB4IDRweDtcbn1cbi5kaXYtd3JhcC1kZWFsIC5pbWcge1xuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXdyYXAtZGVhbCAuc2xpZGUyIHtcbiAgaGVpZ2h0OiAxNzBweCAhaW1wb3J0YW50O1xufVxuLmRpdi13cmFwLWRlYWwgLnRleHQtdGl0bGUtYmxvZyB7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uZmxvYXQtaW5mb2ljb24ge1xuICBsZWZ0OiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5sZWZ0LTI4IHtcbiAgbGVmdDogMjhweCAhaW1wb3J0YW50O1xufVxuXG4ubGVmdC03MiB7XG4gIGxlZnQ6IDcycHggIWltcG9ydGFudDtcbn1cblxuLnRvcC00IHtcbiAgdG9wOiA0cHggIWltcG9ydGFudDtcbn1cblxuLnRvcC0xNiB7XG4gIHRvcDogMTZweDtcbn1cblxuLmJnLXdoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLnAtYm90dG9tLTAge1xuICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xufVxuXG4ucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLmJvdHRvbS0xOCB7XG4gIGJvdHRvbTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uZi0yMCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xufVxuXG4ucC1ib3R0b20tMiB7XG4gIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1sb2FkaW5nY2luIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ion2-calendar */ "./node_modules/ion2-calendar/dist/index.js");
/* harmony import */ var ion2_calendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ion2_calendar__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _search_hotel_filter_search_hotel_filter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../search-hotel-filter/search-hotel-filter */ "./src/app/search-hotel-filter/search-hotel-filter.ts");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/firebase-messaging/ngx */ "./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/firebase-dynamic-links/ngx */ "./node_modules/@ionic-native/firebase-dynamic-links/ngx/index.js");
/* harmony import */ var _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ionic-native/native-page-transitions/ngx */ "./node_modules/@ionic-native/native-page-transitions/ngx/index.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");































let Tab1Page = class Tab1Page {
    constructor(iab, navCtrl, authService, modalCtrl, http, zone, platform, searchhotel, valueGlobal, splashScreen, gf, activeRoute, router, loadCtrl, loadingCtrl, safariViewController, element, network, networkProvider, alertCtrl, storage, socialSharing, fcm, fcmNative, appVersion, firebaseDynamicLinks, actionSheetCtrl, nativePageTransitions, activityService, foodService, flightService, _mytripservice, bizTravelService) {
        this.iab = iab;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.zone = zone;
        this.platform = platform;
        this.searchhotel = searchhotel;
        this.valueGlobal = valueGlobal;
        this.splashScreen = splashScreen;
        this.gf = gf;
        this.activeRoute = activeRoute;
        this.router = router;
        this.loadCtrl = loadCtrl;
        this.loadingCtrl = loadingCtrl;
        this.safariViewController = safariViewController;
        this.element = element;
        this.network = network;
        this.networkProvider = networkProvider;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.socialSharing = socialSharing;
        this.fcm = fcm;
        this.fcmNative = fcmNative;
        this.appVersion = appVersion;
        this.firebaseDynamicLinks = firebaseDynamicLinks;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nativePageTransitions = nativePageTransitions;
        this.activityService = activityService;
        this.foodService = foodService;
        this.flightService = flightService;
        this._mytripservice = _mytripservice;
        this.bizTravelService = bizTravelService;
        this.pet = "khachsan";
        this.slideData1 = [];
        this.slideData = [];
        this.slideData2 = [];
        this.regions = [];
        this.regionsinter = [];
        this.regionshtml = [];
        this.regionscheck = [];
        this.regionsend = [];
        this.regionintersend = [];
        this.recom = [];
        this.recoms = [];
        this.arrtempdeal = [];
        this.ischeck = false;
        this.ischeckks = true;
        this.showCalCin = false;
        this.showCalCout = false;
        this.ischecklist = false;
        this.isenabled = true;
        this.ischeckclose = false;
        this.blog = [];
        this.adult = 2;
        this.child = 0;
        this.roomnumber = 1;
        this.ischecksearch = false;
        this.page = 1;
        this.pageSize = 5;
        this.totalItem = 200;
        this.pageBlog = 1;
        this.pageSizeBlog = 5;
        this.showloadmore = true;
        this.showloadmoreblog = true;
        this.showloadmoreblogtrip = true;
        this.listBlog = [];
        this.blogtrips = [];
        this.regionnamesuggest = "";
        this.canLoadBlog = true;
        this.pageBlogTrip = 1;
        this.canLoadDeal = true;
        this.cofdate = 0;
        this.cotdate = 0;
        this.isrefreshlist = "false";
        this.activeTab = 0;
        this.arrDistrict = [];
        this.arrCity = [];
        this.allowclickcalendar = true;
        this.isNotice = false;
        this.allowShowCalendarFirstTime = true;
        this.scrollFunction = (event) => {
            var se = this;
            let el = document.getElementsByClassName('div-statusbar-float');
            if (el.length > 0) {
                if (event.detail.scrollTop > 100) {
                    if (!el[0].classList.contains("float-statusbar-enabled")) {
                        el[0].classList.add('float-statusbar-enabled');
                        el[0].classList.remove('float-statusbar-disabled');
                    }
                }
                else {
                    el[0].classList.remove('float-statusbar-enabled');
                    el[0].classList.add('float-statusbar-disabled');
                }
            }
            if (se.activeTab == 3 && se.foodService.tabFoodIndex == 1 && se.router.url.indexOf("foodcombodetail") == -1) {
                if (event.detail.scrollTop >= 400) {
                    if (!jquery__WEBPACK_IMPORTED_MODULE_18__(".homefood-header").hasClass("cls-visible")) {
                        jquery__WEBPACK_IMPORTED_MODULE_18__(".homefood-header").removeClass("cls-disabled").addClass("cls-visible");
                    }
                }
                else {
                    jquery__WEBPACK_IMPORTED_MODULE_18__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_18__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
            }
            if (se.activeTab == 1) {
                if (se.flightService.tabFlightIndex != 1) {
                    se.hideStatusBar();
                }
                let el = document.getElementsByClassName('div-flight-topdeal');
                let eluseful = document.getElementsByClassName('div-useful-title');
                if (el && el.length > 0) {
                    if (event.detail.scrollTop >= 1230) {
                        if (el.length > 0 && !el[0].classList.contains("cls-topdeal-float")) {
                            el[0].classList.add('cls-topdeal-float');
                        }
                    }
                    else {
                        el[0].classList.remove('cls-topdeal-float');
                    }
                }
                if (eluseful && eluseful.length > 0) {
                    if (event.detail.scrollTop >= 2156) {
                        if (eluseful.length > 0 && !eluseful[0].classList.contains("cls-topdeal-float")) {
                            eluseful[0].classList.add('cls-topdeal-float');
                        }
                    }
                    else {
                        eluseful[0].classList.remove('cls-topdeal-float');
                    }
                }
            }
        };
        bizTravelService.isCompany = true;
        this.storage.get('jti').then((memberid) => {
            this.storage.get('deviceToken').then((devicetoken) => {
                if (devicetoken) {
                    this.gf.refreshToken(memberid, devicetoken);
                }
                else {
                    this.fcmNative.onTokenRefresh().subscribe(token => {
                        this.storage.set('deviceToken', token);
                        this.gf.refreshToken(memberid, token);
                    });
                }
            });
        });
        this.getCalendarholidays();
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
        this.valueGlobal.notRefreshDetail = false;
        if (this.valueGlobal.fbObject) {
            var obj = this.valueGlobal.fbObject;
            if (obj && obj.deepLink) {
                var arrParams = obj.deepLink.split("?");
                if (arrParams && arrParams.length > 1) {
                    var id = arrParams[1];
                    this.valueGlobal.logingoback = "/hoteldetail/" + id;
                    this.navCtrl.navigateForward('/hoteldetail/' + id);
                }
            }
            this.valueGlobal.fbObject = null;
        }
        storage.get("jti").then((uid) => {
            this.memberid = uid;
        });
        var se = this;
        se.platform.resume.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            se.networkProvider.getNetworkStatus().subscribe((connected) => {
                se.isConnected = connected;
                if (se.isConnected) {
                    se.networkProvider.setNetworkStatus(true);
                    se.zone.run(() => {
                        se.loaddata();
                    });
                    se.getNewsBlog(0);
                    se.storage.get("listtopdealdefault").then((data) => {
                        if (data && data.length > 0) {
                            se.loadTopDeal(data);
                            se.getHotelDealPaging();
                            se.getRegions();
                            se.getRegionsInternational();
                        }
                        else {
                            se.getHoteldeal();
                            setTimeout(() => {
                                if (se.myloader) {
                                    se.myloader.dismiss();
                                }
                            }, 2000);
                        }
                    });
                }
                else {
                    setTimeout(() => {
                        se.isConnected = false;
                        se.ischeck = false;
                        se.slideData1 = [];
                    }, 100);
                    se.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
                }
            });
        }));
        if (!se.intervalTrip) {
            se.intervalTrip = setInterval(() => {
                storage.remove("listblogtripdefault");
                storage.remove("listtopdealdefault");
                storage.remove("regionnamesuggest");
            }, 24 * 60 * 60 * 1000);
        }
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.onEnter();
            this.gbmsg = this.searchhotel.gbmsg;
            this.gbitem = this.searchhotel.gbitem;
            this.co = this.searchhotel.flag;
            this.input = this.searchhotel.input;
            this.chuoi = this.searchhotel.chuoi;
            this.recent = this.searchhotel.recent;
            this.subscription = this.router.events.subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_12__["NavigationEnd"] &&
                    (event.url === "/" ||
                        event.url == "/tabs/tab1" ||
                        event.url === "/app/tabs/tab1")) {
                    this.onEnter();
                    if (this.gf.getParams("resetBlogTrips")) {
                        this.blogtrips = [];
                        this.pageBlogTrip = 1;
                        this.gf.setParams(false, "resetBlogTrips");
                    }
                    else {
                    }
                }
            });
        });
    }
    onEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (se.activeTab == 0) {
                se._mytripservice.rootPage = "homehotel";
            }
            if (se.activeTab == 1) {
                return;
            }
            se.flightService.itemTabFlightActive.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(1);
                }
            });
            se.foodService.itemTabFood.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(3);
                }
            });
            se.searchhotel.itemTabHotel.pipe().subscribe((data) => {
                if (data) {
                    se.setActiveTab(0);
                }
            });
            se.flightService.itemUseFulClick.pipe().subscribe((data) => {
                if (data) {
                    if (se.content) {
                        se.content.scrollToPoint(0, data, 200);
                    }
                }
            });
            se.flightService.itemHomeFlightScrollTop.pipe().subscribe((data) => {
                if (data) {
                    setTimeout(() => {
                        if (se.content) {
                            se.content.scrollToTop(200);
                        }
                    }, 300);
                }
            });
            se.searchhotel.itemSearchHotelHome.pipe().subscribe((data) => {
                setTimeout(() => {
                    if (data && !se.searchhotel.hasShowCalendarFirstTime) {
                        se.searchhotel.hasShowCalendarFirstTime = true;
                        se.checkDefaultDateFocus();
                    }
                }, 100);
            });
            se.storage.get('auth_token').then((data) => {
                if (!data) {
                    se.blogtrips = [];
                    se.valueGlobal.countNotifi = 0;
                }
                else {
                    if (this.valueGlobal.blogid) {
                        this.likeItemblog(this.valueGlobal.blogid);
                    }
                    else {
                        this.getbloglike(1);
                    }
                }
            });
            if (se.blogtrips.length == 0) {
                se.storage.get("listblogtripdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.blogtrips = data;
                    }
                    else {
                        se.getblogtrips();
                    }
                });
                se.storage.get("regionnamesuggest").then((regionname) => {
                    se.regionnamesuggest = regionname;
                });
            }
            if (se.blog.length == 0) {
                se.storage.get("listblogdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.blog = data;
                    }
                    else {
                        se.getNewsBlog(0);
                    }
                });
                se.getNewsBlog(1);
            }
            if (se.slideData || se.slideData.length == 0) {
                se.storage.get("listtopdealdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.slideData = data;
                    }
                    else {
                        se.getHoteldeal();
                    }
                });
            }
            if (se.slideData1 || se.slideData1.length == 0) {
                se.slideData1 = se.activityService.listTopDeal;
                se.loaddata();
                se.getHotelDealPaging();
                se.storage.get('listtopregions').then(dataregion => {
                    if (dataregion) {
                        se.loadCacheRegion();
                    }
                    else {
                        se.getRegions();
                    }
                });
                se.storage.get('listtopregioninternational').then(dataregionnation => {
                    if (dataregionnation) {
                        se.loadRegionsInternational(dataregionnation);
                    }
                    else {
                        se.getRegionsInternational();
                    }
                });
            }
            if (se.slideData1.length == 0) {
                se.loaddata();
                se.storage.get("listtopdealdefault").then((data) => {
                    if (data && data.length > 0) {
                        se.loadTopDeal(data);
                        se.getHotelDealPaging();
                        se.storage.get('listtopregions').then(dataregion => {
                            if (dataregion) {
                                se.loadCacheRegion();
                            }
                            else {
                                se.getRegions();
                            }
                        });
                        se.storage.get('listtopregioninternational').then(dataregionnation => {
                            if (dataregionnation) {
                                se.loadRegionsInternational(dataregionnation);
                            }
                            else {
                                se.getRegionsInternational();
                            }
                        });
                    }
                    else {
                        setTimeout(() => {
                            se.getHoteldeal();
                        }, 100);
                    }
                });
            }
            else {
                se.loaddata();
            }
        });
    }
    showNotification(data) {
        if (data && data.BookingCode && data.notifyAction != "cancel") {
            if (data.notifyAction == "sharereviewofhotel") {
                this.navCtrl.navigateForward('/app/tabs/tab3');
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(2, 'selectedTab3');
            }
            else if (data.NotifyType == "blog" && data.notifyAction == "blogofmytrip") {
                this.valueGlobal.backValue = "tab4";
                this.navCtrl.navigateForward("/blog/" + data.BookingCode);
            }
            else if (data.NotifyType == "fly" && data.notifyAction == "flychangeinfo") {
                this.navCtrl.navigateForward('/app/tabs/tab3');
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.gf.setParams(data.switchObj, 'notifiSwitchObj');
            }
            else {
                this.gf.setParams(data.BookingCode, 'notifiBookingCode');
                this.navCtrl.navigateForward('/app/tabs/tab3');
            }
        }
        else {
            this.showToast(data.message);
        }
    }
    showActionSheetNoti(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var iconStr = 'ic_home';
            var subclass = '';
            if (data.NotifyType == 'bookingbegoingcombotransfer') {
                iconStr = 'ic_bus2';
            }
            else if (data.NotifyType == 'blog') {
                iconStr = 'ic_message';
            }
            else if (data.notifyAction == 'bookingbegoingcombofly' || data.notifyAction == 'flychangeinfo') {
                iconStr = 'ic_paper';
            }
            if (data.notifyAction == 'cancel') {
                subclass = 'fixheight-90';
            }
            if (data.notifyAction == 'flychangeinfo' || data.notifyAction == 'blogofmytrip') {
                subclass = 'fixheight-44';
            }
            let actionSheet = yield se.actionSheetCtrl.create({
                cssClass: 'action-sheets-notification ' + iconStr + ' ' + subclass,
                header: data.title,
                animated: true,
                backdropDismiss: true,
                mode: 'ios',
                buttons: [
                    {
                        text: data.message,
                        handler: () => {
                            se.showNotification(data);
                        }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    showToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.alertCtrl.create({
                message: msg,
                position: 'top',
                duration: 5000
            });
            toast.present();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    presentLoadingData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.myloader = yield this.loadingCtrl.create({
                duration: 3000
            });
            this.myloader.present();
        });
    }
    presentLoadingNavigate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                duration: 250,
            });
            loading.present();
        });
    }
    loaddata() {
        this.page = 1;
        this.pageSize = 5;
        this.pageBlog = 1;
        this.pageBlogTrip = 1;
        this.pageSizeBlog = 5;
        this.totalItem = 200;
        this.isenabled = true;
        this.ischeck = true;
        this.gbmsg = this.searchhotel.gbmsg;
        this.gbitem = this.searchhotel.gbitem;
        this.co = this.searchhotel.flag;
        this.input = this.searchhotel.input;
        this.chuoi = this.searchhotel.chuoi;
        this.recent = this.searchhotel.recent;
        if (!this.searchhotel.chuoi) {
            if (this.searchhotel.star) {
                for (let i = 0; i < this.searchhotel.star.length; i++) {
                    if (i == 0) {
                        if (i == this.searchhotel.star.length - 1) {
                            this.chuoi = "* " + this.searchhotel.star[i];
                        }
                        else {
                            this.chuoi = "* " + this.searchhotel.star[i] + ",";
                        }
                    }
                    else if (i != 0) {
                        if (i != this.searchhotel.star.length - 1) {
                            this.chuoi = this.chuoi + this.searchhotel.star[i] + ",";
                        }
                        else {
                            this.chuoi = this.chuoi + this.searchhotel.star[i];
                        }
                    }
                }
            }
            if (this.searchhotel.minprice) {
                if (this.chuoi) {
                    this.chuoi =
                        this.chuoi +
                            " | " +
                            "đ " +
                            this.searchhotel.minprice.toLocaleString() +
                            " -" +
                            " " +
                            this.searchhotel.maxprice.toLocaleString();
                }
                else {
                    this.chuoi =
                        "đ " +
                            this.searchhotel.minprice.toLocaleString() +
                            " -" +
                            " " +
                            this.searchhotel.maxprice.toLocaleString();
                }
            }
            if (this.searchhotel.review > 0) {
                if (this.chuoi) {
                    this.chuoi =
                        this.chuoi + " | " + "Nhận xét " + this.searchhotel.review + "+";
                }
                else {
                    this.chuoi = "Nhận xét " + this.searchhotel.review + "+";
                }
            }
            else {
                this.chuoi = this.chuoi;
            }
        }
        else {
            this.chuoi = this.searchhotel.chuoi;
        }
        if (this.searchhotel.CheckInDate) {
            if (this.searchhotel.adult) {
                this.adult = this.searchhotel.adult;
            }
            if (this.searchhotel.child != null) {
                this.child = this.searchhotel.child;
            }
            if (this.searchhotel.child == 0) {
                this.child = this.searchhotel.child;
            }
            if (this.searchhotel.roomnumber) {
                this.roomnumber = this.searchhotel.roomnumber;
            }
            if (this.searchhotel.CheckInDate && moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.CheckInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days') >= 0) {
                this.cin = this.searchhotel.CheckInDate;
                this.cout = this.searchhotel.CheckOutDate;
                this.datecin = new Date(this.searchhotel.CheckInDate);
                this.datecout = new Date(this.searchhotel.CheckOutDate);
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecin).format("DD-MM-YYYY");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
                this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
            }
            else {
                this.cin = new Date();
                var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                var datein = new Date(rescin);
                this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                this.datecin = new Date(rescin);
                this.cout = new Date();
                var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                var date = new Date(res);
                this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                this.datecout = new Date(res);
                this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
            }
            this.getCinCoutDayName();
        }
        else {
            this.storage.get('cacheSearchHotelInfo').then((data) => {
                if (data && data.checkInDate) {
                    if (data.adult) {
                        this.adult = data.adult;
                        this.searchhotel.adult = data.adult;
                    }
                    if (data.child != null) {
                        this.child = data.child;
                        this.searchhotel.child = data.child;
                    }
                    if (data.child == 0) {
                        this.child = data.child;
                        this.searchhotel.child = data.child;
                    }
                    if (data.childAge) {
                        this.searchhotel.arrchild = data.childAge;
                    }
                    if (data.roomNumber) {
                        this.roomnumber = data.roomNumber;
                        this.searchhotel.roomnumber = data.roomNumber;
                    }
                    let diffdate = moment__WEBPACK_IMPORTED_MODULE_7__(data.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('YYYY-MM-DD')), 'days');
                    if (data.checkInDate && diffdate >= 0) {
                        this.cin = data.checkInDate;
                        this.cout = data.checkOutDate;
                        this.datecin = new Date(data.checkInDate);
                        this.datecout = new Date(data.checkOutDate);
                        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecin).format("DD-MM-YYYY");
                        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
                        this.searchhotel.CheckInDate = this.cin;
                        this.searchhotel.CheckOutDate = this.cout;
                        this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                        this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                        this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                        this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    }
                    else {
                        this.cin = new Date();
                        var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                        var datein = new Date(rescin);
                        this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                        this.datecin = new Date(rescin);
                        this.cout = new Date();
                        var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                        var date = new Date(res);
                        this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                        this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                        this.datecout = new Date(res);
                        this.searchhotel.CheckInDate = this.cin;
                        this.searchhotel.CheckOutDate = this.cout;
                        this.searchhotel.datecin = new Date(this.searchhotel.CheckInDate);
                        this.searchhotel.datecout = new Date(this.searchhotel.CheckOutDate);
                        this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                        this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    }
                    this.getCinCoutDayName();
                }
                else if (!this.cin || !this.searchhotel.CheckInDate) {
                    this.cin = new Date();
                    var rescin = this.cin.setTime(this.cin.getTime() + (1 * 24 * 60 * 60 * 1000));
                    var datein = new Date(rescin);
                    this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("YYYY-MM-DD");
                    this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(datein).format("DD-MM-YYYY");
                    this.datecin = new Date(rescin);
                    this.cout = new Date();
                    var res = this.cout.setTime(this.cout.getTime() + (2 * 24 * 60 * 60 * 1000));
                    var date = new Date(res);
                    this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
                    this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("DD-MM-YYYY");
                    this.datecout = new Date(res);
                    this.searchhotel.CheckInDate = this.cin;
                    this.searchhotel.CheckOutDate = this.cout;
                    this.searchhotel.datecin = new Date(this.cin);
                    this.searchhotel.datecout = new Date(this.cout);
                    this.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("DD-MM-YYYY");
                    this.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("DD-MM-YYYY");
                    this.getCinCoutDayName();
                }
            });
        }
        this.getCalendarholidays();
    }
    getCinCoutDayName() {
        if (this.searchhotel.datecin) {
            this.searchhotel.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecin).format("dddd");
            switch (this.searchhotel.cinthu) {
                case "Monday":
                    this.searchhotel.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.searchhotel.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.searchhotel.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.searchhotel.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.searchhotel.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.searchhotel.cinthu = "Thứ 7";
                    break;
                default:
                    this.searchhotel.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (this.searchhotel.datecout) {
            this.searchhotel.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.searchhotel.datecout).format("dddd");
            switch (this.searchhotel.coutthu) {
                case "Monday":
                    this.searchhotel.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.searchhotel.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.searchhotel.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.searchhotel.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.searchhotel.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.searchhotel.coutthu = "Thứ 7";
                    break;
                default:
                    this.searchhotel.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    getDayName(datecin, datecout) {
        if (!this.cinthu) {
            this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecin).format('dddd');
            switch (this.cinthu) {
                case "Monday":
                    this.cinthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.cinthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.cinthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.cinthu = "Thứ 5";
                    break;
                case "Friday":
                    this.cinthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.cinthu = "Thứ 7";
                    break;
                default:
                    this.cinthu = "Chủ nhật";
                    break;
            }
        }
        if (!this.coutthu) {
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecout).format('dddd');
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
    }
    cin_click() { }
    showcalendarcin() {
        this.showCalCin = !this.showCalCin;
        if (this.showCalCout) {
            this.showCalCout = !this.showCalCout;
        }
    }
    showcalendarcout() {
        if (this.showCalCin) {
            this.showCalCin = !this.showCalCin;
        }
        this.showCalCout = !this.showCalCout;
    }
    getRegions() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RegionsBanner' + (se.memberid ? '?memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getRegions",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getRegions";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                se.regions = JSON.parse(body);
                se.loadRegions(se.regions);
                se.storage.get('listtopregions').then((data) => {
                    if (data) {
                        se.storage.remove('listtopregions').then((datanew) => {
                            se.storage.set('listtopregions', datanew);
                        });
                    }
                    else {
                        se.storage.set('listtopregions', se.regions);
                    }
                });
            });
        });
    }
    loadRegions(listregions) {
        var se = this;
        se.regions = listregions;
        for (let i = 0; i < se.regions.length; i++) {
            if (se.regions[i].image.indexOf('https') == -1) {
                se.regions[i].image = 'https:' + se.regions[i].image;
            }
            if (i == 0 || i == 4) {
                if (se.regions[i].image.indexOf('755x190') == -1) {
                    se.regions[i].image = se.regions[i].image.replace(".jpg", "-755x190.jpg");
                }
            }
            if (i == 2 || i == 5) {
                if (se.regions[i].image.indexOf('370x395') == -1) {
                    se.regions[i].image = se.regions[i].image.replace(".jpg", "-370x395.jpg");
                }
            }
            var item = { image: se.regions[i].image, name: se.regions[i].title, id: se.regions[i].regionId, regionCode: se.regions[i].code, totalHotel: se.regions[i].total };
            if (!se.checkExistsItemInArray(se.regionsend, item, 2)) {
                se.regionsend.push(item);
            }
        }
        se.slregion = se.regionsend.length;
        se.storage.get('listtopmoods').then((data) => {
            if (data) {
                se.loadMoods(data);
                setTimeout(() => {
                    se.zone.run(() => {
                        se.getmood();
                    });
                }, 30000);
            }
            else {
                se.getmood();
            }
        });
    }
    getRegionsInternational() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/RegionsBanner?isInternation=true' + (se.memberid ? '&memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getRegions",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getRegions";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            se.zone.run(() => {
                se.regionsinter = JSON.parse(body);
                se.storage.get('listtopregioninternational').then((data) => {
                    if (data) {
                        se.storage.remove('listtopregioninternational').then(() => {
                            se.storage.set('listtopregioninternational', se.regionsinter);
                        });
                    }
                    else {
                        se.storage.set('listtopregioninternational', se.regionsinter);
                    }
                });
                se.loadRegionsInternational(se.regionsinter);
            });
        });
    }
    loadRegionsInternational(listregions) {
        var se = this;
        se.regionsinter = listregions;
        for (let i = 0; i < se.regionsinter.length; i++) {
            if (se.regionsinter[i].image.indexOf('https') == -1) {
                se.regionsinter[i].image = 'https:' + se.regionsinter[i].image;
            }
            if (i == 0) {
                if (se.regionsinter[i].image.indexOf('755x190') == -1) {
                    se.regionsinter[i].image = se.regionsinter[i].image.replace(".jpg", "-755x190.jpg");
                }
            }
            var item = { image: se.regionsinter[i].image, name: se.regionsinter[i].title, id: se.regionsinter[i].regionId, regionCode: se.regionsinter[i].code, totalHotel: se.regionsinter[i].total };
            if (!se.checkExistsItemInArray(se.regionintersend, item, 2)) {
                se.regionintersend.push(item);
            }
        }
    }
    getHoteldeal() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/TopDeals?pageIndex=' + se.page + '&pageSize=' + se.totalItem + (se.memberid ? '&memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getHoteldeal",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getHoteldeal";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            ;
            se.slideData = JSON.parse(body);
            se.storage.get('listtopdealdefault').then((data) => {
                if (data) {
                    se.storage.remove('listtopdealdefault').then(() => {
                        se.storage.set('listtopdealdefault', se.slideData);
                    });
                }
                else {
                    se.storage.set('listtopdealdefault', se.slideData);
                }
            });
            se.loadTopDeal(se.slideData);
        });
    }
    loadTopDeal(listtopdeal) {
        var se = this;
        se.slideData = listtopdeal;
        se.totalItem = se.slideData.length;
        se.showloadmore = se.slideData.length == se.totalItem ? false : true;
        var chuoi = "";
        se.zone.run(() => {
            for (let i = 0; i < se.pageSize; i++) {
                if (se.slideData && se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url = 'https:' + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice.toLocaleString();
                    chuoi = "";
                    var name = se.slideData[i].name.split('|');
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = { ischecked: 0, id: se.slideData[i].id, name: name[0], imageUrl: se.slideData[i].images[0].url, regionName: se.slideData[i].regionName, minPrice: minPrice, description: chuoi, rating: se.slideData[i].rating, priceshow: (se.slideData[i].minPrice / 1000 > 1000) ? ((se.slideData[i].minPrice / 1000)
                            .toLocaleString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                            .replace(",", ".")) : 0, priceFor: se.slideData[i].priceFor };
                    if (!se.gf.checkExistsItemInArray(se.slideData1, item, 1)) {
                        se.slideData1.push(item);
                    }
                }
            }
            se.activityService.listTopDeal = se.slideData1;
            se.sl = se.slideData1.length;
            se.ischeck = true;
            if (se.myloader) {
                se.myloader.dismiss();
            }
            se.loadCacheRegion();
        });
    }
    loadCacheRegion() {
        var se = this;
        se.storage.get('listtopregions').then(data => {
            if (data) {
                se.loadRegions(data);
                setTimeout(() => {
                    se.zone.run(() => {
                        se.getRegions();
                    });
                }, 30000);
            }
            else {
                se.getRegions();
            }
        });
        se.storage.get('listtopregioninternational').then(data => {
            if (data) {
                se.loadRegionsInternational(data);
                setTimeout(() => {
                    se.getRegionsInternational();
                }, 30000);
            }
            else {
                se.getRegionsInternational();
            }
        });
    }
    checkExistsItemInArray(arrays, item, type) {
        var res = false;
        if (type == 1 || type == 3 || type == 2) {
            res = arrays.some(r => r.id == item.id);
        }
        if (type == 4) {
            res = arrays.some(r => r.Id == item.Id);
        }
        return res;
    }
    getHotelDealPaging() {
        var se = this;
        se.canLoadDeal = (se.slideData1.length == se.slideData.length) ? false : true;
        let start = se.slideData1.length;
        var chuoi = "";
        se.zone.run(() => {
            for (let i = start; i < start + se.pageSize; i++) {
                if (se.slideData[i] && se.slideData[i].images[0]) {
                    var res = se.slideData[i].images[0].url.substring(0, 4);
                    if (res != "http") {
                        se.slideData[i].images[0].url =
                            "https:" + se.slideData[i].images[0].url;
                    }
                    var minPrice = se.slideData[i].minPrice.toLocaleString();
                    chuoi = "";
                    var name = se.slideData[i].name.split("|");
                    for (let x = 1; x < name.length; x++) {
                        if (x == name.length - 1) {
                            chuoi = chuoi + name[x];
                        }
                        else {
                            chuoi = chuoi + name[x] + "|";
                        }
                    }
                    switch (se.slideData[i].rating) {
                        case 50:
                            se.slideData[i].rating = "./assets/star/ic_star_5.svg";
                            break;
                        case 45:
                            se.slideData[i].rating = "./assets/star/ic_star_4.5.svg";
                            break;
                        case 40:
                            se.slideData[i].rating = "./assets/star/ic_star_4.svg";
                            break;
                        case 35:
                            se.slideData[i].rating = "./assets/star/ic_star_3.5.svg";
                            break;
                        case 30:
                            se.slideData[i].rating = "./assets/star/ic_star_3.svg";
                            break;
                        case 25:
                            se.slideData[i].rating = "./assets/star/ic_star_2.5.svg";
                            break;
                        case 20:
                            se.slideData[i].rating = "./assets/star/ic_star_2.svg";
                            break;
                        case 15:
                            se.slideData[i].rating = "./assets/star/ic_star_1.5.svg";
                            break;
                        case 10:
                            se.slideData[i].rating = "./assets/star/ic_star.svg";
                            break;
                        case 5:
                            se.slideData[i].rating = "./assets/star/ic_star_0.5.svg";
                            break;
                        default:
                            break;
                    }
                    var item = {
                        ischecked: 0,
                        id: se.slideData[i].id,
                        name: name[0],
                        imageUrl: se.slideData[i].images[0].url,
                        regionName: se.slideData[i].regionName,
                        minPrice: minPrice,
                        description: chuoi,
                        rating: se.slideData[i].rating,
                        priceshow: (se.slideData[i].minPrice / 1000 > 1000) ? ((se.slideData[i].minPrice / 1000)
                            .toLocaleString()
                            .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
                            .replace(",", ".")) : 0, priceFor: se.slideData[i].priceFor
                    };
                    se.slideData1.push(item);
                }
            }
            se.sl = se.slideData1.length;
            se.ischeck = true;
            se.canLoadDeal = true;
            if (se.myloader) {
                se.myloader.dismiss();
            }
        });
    }
    getmood() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/Moods' + (se.memberid ? '?memberid=' + se.memberid : ''),
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'postman-token': 'f0589249-bf19-001c-f359-9b33dcf6db86',
                'cache-control': 'no-cache',
                apisecret: '2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU',
                apikey: '0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getmood",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getmood";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            ;
            se.zone.run(() => {
                se.slideMood = JSON.parse(body);
                se.storage.get('listtopmoods').then((data) => {
                    if (data) {
                        se.storage.remove('listtopmoods').then((datanew) => {
                            se.storage.set('listtopmoods', datanew);
                        });
                    }
                    else {
                        se.storage.set('listtopmoods', se.slideMood);
                    }
                });
                se.loadMoods(se.slideMood);
            });
        });
    }
    loadMoods(listmoods) {
        var se = this;
        se.slideMood = listmoods;
        for (let i = 0; i < listmoods.length; i++) {
            var res = listmoods[i].avatar.substring(0, 4);
            if (res != "http") {
                listmoods[i].avatar = 'https:' + listmoods[i].avatar;
            }
        }
        se.slmood = se.slideMood.length;
    }
    clickks() {
        this.ischeckks = true;
        this.ischeckvmb = false;
    }
    clickvmb() {
        this.ischeckks = false;
        this.ischeckvmb = true;
    }
    selectcin(selectdate) {
        var sdate = new Date(selectdate);
        this.datecin = new Date(selectdate);
        this.cin = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("YYYY-MM-DD");
        this.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("DD-MM-YYYY");
        if (selectdate >= this.datecout) {
            var res = sdate.setTime(sdate.getTime() + 1 * 24 * 60 * 60 * 1000);
            var date = new Date(res);
            this.datecout = date;
            this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(sdate).format("DD-MM-YYYY");
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("dddd");
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
        }
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(selectdate).format("dddd");
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                break;
        }
        this.showCalCin = !this.showCalCin;
    }
    selectcout(selectdate) {
        if (selectdate > this.datecin) {
            this.datecout = new Date(selectdate);
            this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("YYYY-MM-DD");
            this.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("DD-MM-YYYY");
            this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.datecout).format("dddd");
            switch (this.coutthu) {
                case "Monday":
                    this.coutthu = "Thứ 2";
                    break;
                case "Tuesday":
                    this.coutthu = "Thứ 3";
                    break;
                case "Wednesday":
                    this.coutthu = "Thứ 4";
                    break;
                case "Thursday":
                    this.coutthu = "Thứ 5";
                    break;
                case "Friday":
                    this.coutthu = "Thứ 6";
                    break;
                case "Saturday":
                    this.coutthu = "Thứ 7";
                    break;
                default:
                    this.coutthu = "Chủ nhật";
                    break;
            }
            this.showCalCout = !this.showCalCout;
        }
    }
    selectclickcin() {
        this.cout = new Date(this.cin);
        var res = this.cout.setTime(this.cout.getTime() + 1 * 24 * 60 * 60 * 1000);
        var date = new Date(res);
        this.cout = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD");
        this.cinthu = moment__WEBPACK_IMPORTED_MODULE_7__(this.cin).format("dddd");
        switch (this.cinthu) {
            case "Monday":
                this.cinthu = "Thứ 2";
                break;
            case "Tuesday":
                this.cinthu = "Thứ 3";
                break;
            case "Wednesday":
                this.cinthu = "Thứ 4";
                break;
            case "Thursday":
                this.cinthu = "Thứ 5";
                break;
            case "Friday":
                this.cinthu = "Thứ 6";
                break;
            case "Saturday":
                this.cinthu = "Thứ 7";
                break;
            default:
                this.cinthu = "Chủ nhật";
                break;
        }
    }
    selectclickcout() {
        var datecin = Date.parse(this.cin);
        var datecout = Date.parse(this.cout);
        this.coutthu = moment__WEBPACK_IMPORTED_MODULE_7__(datecout).format("dddd");
        switch (this.coutthu) {
            case "Monday":
                this.coutthu = "Thứ 2";
                break;
            case "Tuesday":
                this.coutthu = "Thứ 3";
                break;
            case "Wednesday":
                this.coutthu = "Thứ 4";
                break;
            case "Thursday":
                this.coutthu = "Thứ 5";
                break;
            case "Friday":
                this.coutthu = "Thứ 6";
                break;
            case "Saturday":
                this.coutthu = "Thứ 7";
                break;
            default:
                this.coutthu = "Chủ nhật";
                break;
        }
    }
    presentToastwarming(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.alertCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    openmnu() {
        this.hideStatusBar();
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.ChildAgeTo = 16;
        this.searchhotel.input = this.input;
        this.searchhotel.flag = this.co;
        this.searchhotel.chuoi = this.chuoi;
        this.gf.setParams(false, "requestcombo");
        this.navCtrl.navigateForward("/occupancy");
    }
    openmnu1() {
        this.hideStatusBar();
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.input = this.input;
        this.searchhotel.flag = this.co;
        this.searchhotel.chuoi = this.chuoi;
        this.presentModal();
        this.gf.googleAnalytion("mainpage", "Search", "" + this.input + "|" + this.chuoi + "|" + this.cin + "|" + this.cout);
    }
    presentModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _search_hotel_filter_search_hotel_filter__WEBPACK_IMPORTED_MODULE_15__["SearchHotelFilterPage"],
                componentProps: {
                    aParameter: true
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.zone.run(() => {
                    this.loaddata();
                });
            });
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                message: "",
                duration: 1500
            });
            loader.present();
        });
    }
    presentLoadingnavi() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var loader = yield this.loadingCtrl.create({
                id: '99',
                message: "",
                duration: 10
            });
            loader.present();
        });
    }
    clickedElement(e, openDefault) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var obj = e.currentTarget;
            if (jquery__WEBPACK_IMPORTED_MODULE_18__(obj.parentNode).hasClass("endSelection") ||
                jquery__WEBPACK_IMPORTED_MODULE_18__(obj.parentNode).hasClass("startSelection")) {
                if (this.modalCtrl) {
                    let fday;
                    let tday;
                    var monthenddate;
                    var yearenddate;
                    var monthstartdate;
                    var yearstartdate;
                    var objTextMonthEndDate;
                    var objTextMonthStartDate;
                    this.cofdate = 0;
                    this.cotdate = 0;
                    this.cinthu = "";
                    this.coutthu = "";
                    if (jquery__WEBPACK_IMPORTED_MODULE_18__(obj.parentNode).hasClass('endSelection')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_18__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_18__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_18__('.on-selected')[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_18__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_18__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_18__(obj)[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_18__('.on-selected').closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_18__(obj).closest('.month-box').children()[0].textContent;
                    }
                    else {
                        if (jquery__WEBPACK_IMPORTED_MODULE_18__('.days-btn.lunarcalendar.on-selected > p')[0]) {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_18__('.days-btn.lunarcalendar.on-selected > p')[0].innerText;
                        }
                        else {
                            fday = jquery__WEBPACK_IMPORTED_MODULE_18__(obj)[0].textContent;
                        }
                        if (jquery__WEBPACK_IMPORTED_MODULE_18__('.days.endSelection .days-btn.lunarcalendar > p')[0]) {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_18__('.days.endSelection .days-btn.lunarcalendar > p')[0].innerText;
                        }
                        else {
                            tday = jquery__WEBPACK_IMPORTED_MODULE_18__('.endSelection').children('.days-btn')[0].textContent;
                        }
                        objTextMonthStartDate = jquery__WEBPACK_IMPORTED_MODULE_18__(obj).closest('.month-box').children()[0].textContent;
                        objTextMonthEndDate = jquery__WEBPACK_IMPORTED_MODULE_18__('.endSelection').closest('.month-box').children()[0].textContent;
                    }
                    if (objTextMonthEndDate &&
                        objTextMonthEndDate.length > 0 &&
                        objTextMonthStartDate &&
                        objTextMonthStartDate.length > 0) {
                        monthstartdate = objTextMonthStartDate.split("/")[0];
                        yearstartdate = objTextMonthStartDate.split("/")[1];
                        monthenddate = objTextMonthEndDate.split("/")[0];
                        yearenddate = objTextMonthEndDate.split("/")[1];
                        var fromdate = new Date(yearstartdate, monthstartdate - 1, fday);
                        var todate = new Date(yearenddate, monthenddate - 1, tday);
                        if (fromdate && todate && moment__WEBPACK_IMPORTED_MODULE_7__(todate).diff(fromdate, "days") > 0) {
                            var se = this;
                            setTimeout(() => {
                                se.modalCtrl.dismiss();
                            }, 300);
                            se.zone.run(() => {
                                se.cin = moment__WEBPACK_IMPORTED_MODULE_7__(fromdate).format("YYYY-MM-DD");
                                se.cout = moment__WEBPACK_IMPORTED_MODULE_7__(todate).format("YYYY-MM-DD");
                                se.searchhotel.CheckInDate = moment__WEBPACK_IMPORTED_MODULE_7__(fromdate).format("YYYY-MM-DD");
                                se.searchhotel.CheckOutDate = moment__WEBPACK_IMPORTED_MODULE_7__(todate).format("YYYY-MM-DD");
                                se.datecin = new Date(se.searchhotel.CheckInDate);
                                se.datecout = new Date(se.searchhotel.CheckOutDate);
                                se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                                se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                                se.searchhotel.datecin = new Date(se.searchhotel.CheckInDate);
                                se.searchhotel.datecout = new Date(se.searchhotel.CheckOutDate);
                                se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                                se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                                this.bindlunar();
                            });
                            se.storage.set('hasChangeDate', true);
                            se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
                        }
                    }
                }
            }
        });
    }
    openPickupCalendar(openDefault) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.hideStatusBar();
            if (!this.allowclickcalendar) {
                return;
            }
            this.allowclickcalendar = false;
            let fromdate = new Date(this.searchhotel.CheckInDate ? this.searchhotel.CheckInDate : this.cin);
            let todate = new Date(this.searchhotel.CheckOutDate ? this.searchhotel.CheckOutDate : this.cout);
            let _daysConfig = [];
            for (let j = 0; j < this.valueGlobal.listlunar.length; j++) {
                _daysConfig.push({
                    date: this.valueGlobal.listlunar[j].date,
                    subTitle: this.valueGlobal.listlunar[j].name,
                    cssClass: 'lunarcalendar'
                });
            }
            const options = {
                pickMode: "range",
                title: "Chọn ngày",
                monthFormat: "MM / YYYY",
                weekdays: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
                closeLabel: "Thoát",
                doneLabel: "",
                step: 0,
                defaultScrollTo: fromdate,
                defaultDateRange: { from: fromdate, to: todate },
                daysConfig: _daysConfig
            };
            this.myCalendar = yield this.modalCtrl.create({
                component: ion2_calendar__WEBPACK_IMPORTED_MODULE_13__["CalendarModal"],
                animated: true,
                componentProps: { options }
            });
            this.myCalendar.present().then(() => {
                se.allowclickcalendar = true;
                jquery__WEBPACK_IMPORTED_MODULE_18__(".days-btn").click(e => this.clickedElement(e, openDefault));
            });
            var se = this;
            const event = yield this.myCalendar.onDidDismiss();
            if (event) {
                se.allowclickcalendar = true;
            }
            const date = event.data;
            if (event.data) {
                const from = date.from;
                const to = date.to;
                se.cin = moment__WEBPACK_IMPORTED_MODULE_7__(from.dateObj).format("YYYY-MM-DD");
                se.cout = moment__WEBPACK_IMPORTED_MODULE_7__(to.dateObj).format("YYYY-MM-DD");
                se.zone.run(() => {
                    se.searchhotel.CheckInDate = se.cin;
                    se.searchhotel.CheckOutDate = se.cout;
                    se.datecin = new Date(se.cin);
                    se.datecout = new Date(se.cout);
                    se.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                    se.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.datecout).format("DD-MM-YYYY");
                    se.getDayName(se.datecin, se.datecout);
                });
                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
            }
            if (se.searchhotel.CheckInDate && se.searchhotel.CheckOutDate) {
                se.zone.run(() => {
                    se.searchhotel.datecin = new Date(se.searchhotel.CheckInDate);
                    se.searchhotel.datecout = new Date(se.searchhotel.CheckOutDate);
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                    se.searchhotel.cindisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecin).format("DD-MM-YYYY");
                    se.searchhotel.coutdisplay = moment__WEBPACK_IMPORTED_MODULE_7__(se.searchhotel.datecout).format("DD-MM-YYYY");
                    se.getCinCoutDayName();
                });
                se.gf.setCacheSearchHotelInfo({ checkInDate: se.searchhotel.CheckInDate, checkOutDate: se.searchhotel.CheckOutDate, adult: se.searchhotel.adult, child: se.searchhotel.child, childAge: se.searchhotel.arrchild, roomNumber: se.searchhotel.roomnumber });
            }
        });
    }
    getNewsBlog(value) {
        var se = this;
        se.canLoadBlog = false;
        var options = {
            method: "GET",
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlBlog +
                "/GetNewsBlog?pageIndex=" +
                se.pageBlog +
                "&pageSize=" +
                se.pageSizeBlog +
                (se.memberid ? "&memberid=" + se.memberid : ""),
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getNewsBlog",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getNewsBlog";
                (error.param = JSON.stringify(options)), _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            se.zone.run(() => {
                var listBlogtemp = JSON.parse(body);
                se.listBlog = [];
                se.showloadmoreblog = listBlogtemp.length == 0 ? false : true;
                for (let i = 0; i < listBlogtemp.length; i++) {
                    listBlogtemp[i].Date = moment__WEBPACK_IMPORTED_MODULE_7__(listBlogtemp[i].Date).format("DD/MM/YYYY");
                }
                if (se.arrbloglike && se.arrbloglike.length > 0) {
                    var itemblog;
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = {
                            Avatar: listBlogtemp[i].Avatar,
                            Date: listBlogtemp[i].Date,
                            Id: listBlogtemp[i].id,
                            Title: listBlogtemp[i].Title,
                            Url: listBlogtemp[i].Url,
                            Like: false
                        };
                        for (let j = 0; j < se.arrbloglike.length; j++) {
                            if (se.arrbloglike[j].id == listBlogtemp[i].id) {
                                itemblog = {
                                    Avatar: listBlogtemp[i].Avatar,
                                    Date: listBlogtemp[i].Date,
                                    Id: listBlogtemp[i].id,
                                    Title: listBlogtemp[i].Title,
                                    Url: listBlogtemp[i].Url,
                                    Like: true
                                };
                                break;
                            }
                        }
                        se.listBlog.push(itemblog);
                    }
                }
                else {
                    for (let i = 0; i < listBlogtemp.length; i++) {
                        itemblog = {
                            Avatar: listBlogtemp[i].Avatar,
                            Date: listBlogtemp[i].Date,
                            Id: listBlogtemp[i].id,
                            Title: listBlogtemp[i].Title,
                            Url: listBlogtemp[i].Url,
                            Like: false
                        };
                        se.listBlog.push(itemblog);
                    }
                }
                if (!se.checkExistsItemInArray(se.blog, listBlogtemp[0], 4)) {
                    se.blog.push(...se.listBlog);
                    se.canLoadBlog = true;
                }
                else {
                    if (value == 1) {
                        for (let i = 0; i < se.blog.length; i++) {
                            se.blog[i].Like = false;
                        }
                    }
                    se.showloadmoreblog = false;
                }
                se.storage.set("listblogdefault", se.blog);
                if (value == 0) {
                    se.getblogtrips();
                }
                se.storage.get("auth_token").then(auth_token => {
                    if (!auth_token) {
                        se.bindItemunLike();
                    }
                });
            });
        });
    }
    clickitemblog(item) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.valueGlobal.urlblog = item.Url;
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = "/blog/" + item.Id;
        this.navCtrl.navigateForward("/blog/" + item.Id);
        this.gf.googleAnalytion("main", "Search", "blog");
        this.hideStatusBar();
    }
    clickitemblogmain() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        var url = "https://www.ivivu.com/blog";
        this.openWebpage(url);
        this.gf.googleAnalytion("main", "Search", "blog");
        this.hideStatusBar();
    }
    openWebpage(url) {
        this.safariViewController.isAvailable().then((available) => {
            if (available) {
                this.safariViewController
                    .show({
                    url: url,
                    hidden: false,
                    animated: true,
                    transition: "curl",
                    enterReaderModeIfAvailable: true,
                    tintColor: "#ff0000"
                })
                    .subscribe((result) => {
                    if (result.event === "opened")
                        console.log("Opened");
                    else if (result.event === "loaded")
                        console.log("Loaded");
                    else if (result.event === "closed")
                        console.log("Closed");
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    getItems(ev) {
        if (this.input) {
            this.ischeckclose = true;
            var se = this;
            const val = ev.target.value;
            var options = {
                method: "GET",
                url: "https://www.ivivu.com/GListSuggestion",
                timeout: 10000,
                maxAttempts: 5,
                retryDelay: 2000,
                qs: { key: val },
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "main",
                        func: "getItems",
                        message: response.statusMessage,
                        content: response.body,
                        param: JSON.stringify(options),
                        type: "warning"
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "main";
                    error.func = "getItems";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                }
                se.zone.run(() => {
                    se.items = JSON.parse(body);
                    if (val && val.trim() != "") {
                        se.items;
                        se.ischecklist = true;
                    }
                    else {
                        se.items = [];
                        se.ischecklist = false;
                    }
                });
            });
        }
        else {
            this.ischeckclose = false;
            this.ischecklist = false;
        }
        this.gf.googleAnalytion("main", "searchregion", "");
    }
    change() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.storage.get("listregion").then((data) => {
            if (!data) {
                this.presentLoadingnavi();
            }
        });
        if (this.input) {
            this.ischeckclose = true;
        }
        this.recent = this.searchhotel.recent;
        this.navCtrl.navigateForward("/searchhotel");
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el && el != null) {
                    el.remove();
                }
            });
        }
    }
    itemclick(item) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.gbitem = item;
        if (item.HotelName) {
            this.input = item.HotelName;
        }
        else {
            this.input = item.RegionName;
        }
        this.ischeckclose = false;
        this.ischecksearch = false;
        this.co = 0;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    next1(msg) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.gbmsg = msg;
        this.ischeckclose = false;
        this.searchhotel.gbmsg = msg;
        this.ischecksearch = false;
        if (msg.regionName) {
            this.input = msg.regionName;
        }
        else {
            this.input = msg.HotelName;
        }
        this.isenabled = false;
        this.co = 2;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    close() {
        this.ischecksearch = false;
        if (!this.input) {
            this.isenabled = true;
        }
    }
    next(msg, i) {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.ischeckclose = false;
        this.gbmsg = msg;
        this.searchhotel.gbmsg = msg;
        this.ischecksearch = false;
        this.index = i;
        this.input = msg.regionName;
        this.isenabled = false;
        this.co = 1;
        this.gf.googleAnalytion("main", "Search", "" + this.input + "|" + this.cin + "|" + this.cout);
    }
    getdata() {
        var se = this;
        var options = {
            method: "GET",
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile +
                "/mobile/OliviaApis/Regions" +
                (se.memberid ? "?memberid=" + se.memberid : ""),
            headers: {
                apisecret: "2Vg_RTAccmT1mb1NaiirtyY2Y3OHaqUfQ6zU_8gD8SU",
                apikey: "0HY9qKyvwty1hSzcTydn0AHAXPb0e2QzYQlMuQowS8U"
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "main",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    param: JSON.stringify(options),
                    type: "warning"
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "main";
                error.func = "getdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            se.json = JSON.parse(body);
            se.getRegions();
        });
    }
    search() {
        if (!this.isConnected) {
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.searchhotel.backPage = "";
        if (this.input) {
            this.searchhotel.chuoi = this.chuoi;
            this.searchhotel.child = this.child;
            this.searchhotel.adult = this.adult;
            this.searchhotel.input = this.input;
            var se = this;
            if (this.co == 1) {
                this.authService.region = this.gbmsg.regionName;
                this.authService.regionid = this.gbmsg.regionId;
                this.authService.regioncode = this.gbmsg.regionCode;
                if (this.recent) {
                    var cocheck = 0;
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[i].regionId == this.gbmsg.regionId) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        var item1 = {
                            type: "2",
                            hotelId: "",
                            hotelName: "",
                            regionId: this.gbmsg.regionId,
                            regionCode: this.gbmsg.regionCode,
                            regionName: this.gbmsg.regionName,
                            flag: "1",
                            totalHotels: this.gbmsg.totalHotels
                        };
                        se.searchhotel.recent = [];
                        if (this.recent.length > 1) {
                            se.searchhotel.recent.push(this.recent[1]);
                        }
                        else {
                            se.searchhotel.recent.push(this.recent[0]);
                        }
                        se.searchhotel.recent.push(item1);
                        se.isrefreshlist = "true";
                    }
                }
                else {
                    var item1 = {
                        type: "2",
                        hotelId: "",
                        hotelName: "",
                        regionId: this.gbmsg.regionId,
                        regionCode: this.gbmsg.regionCode,
                        regionName: this.gbmsg.regionName,
                        flag: "1",
                        totalHotels: this.gbmsg.totalHotels
                    };
                    se.searchhotel.recent = [];
                    se.searchhotel.recent.push(item1);
                }
                this.valueGlobal.logingoback = '/app/tabs/hotellist/true';
                this.navCtrl.navigateForward('/hotellist/' + se.isrefreshlist);
                this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                    "|" +
                    this.input +
                    "|" +
                    this.cin +
                    "|" +
                    this.cout);
            }
            else if (this.co == 0) {
                if (this.gbitem.type == 1) {
                    var id1 = { id: this.gbitem.hotelId };
                    if (this.recent) {
                        var cocheck = 0;
                        for (let i = 0; i < this.recent.length; i++) {
                            var temp = this.recent[i].hotelId;
                            if (temp == id1.id) {
                                cocheck = 1;
                                break;
                            }
                        }
                        if (cocheck == 0) {
                            var item2 = {
                                type: "1",
                                hotelId: this.gbitem.hotelId,
                                hotelName: this.gbitem.hotelName,
                                regionId: "",
                                regionCode: "",
                                regionName: "",
                                flag: "0",
                                totalHotels: ""
                            };
                            se.searchhotel.recent = [];
                            if (this.recent.length > 1) {
                                se.searchhotel.recent.push(this.recent[1]);
                            }
                            else {
                                se.searchhotel.recent.push(this.recent[0]);
                            }
                            this.searchhotel.recent.push(item2);
                            se.isrefreshlist = "true";
                        }
                    }
                    else {
                        var item2 = {
                            type: "1",
                            hotelId: this.gbitem.hotelId,
                            hotelName: this.gbitem.hotelName,
                            regionId: "",
                            regionCode: "",
                            regionName: "",
                            flag: "0",
                            totalHotels: ""
                        };
                        se.searchhotel.recent = [];
                        this.searchhotel.recent.push(item2);
                    }
                    this.searchhotel.rootPage = "mainpage";
                    this.valueGlobal.logingoback = "/hoteldetail/" + se.gbitem.hotelId;
                    se.navCtrl.navigateForward('/hoteldetail/' + se.gbitem.hotelId);
                    this.gf.googleAnalytion("main", "Search", this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.hotelId +
                        "|" +
                        this.gbitem.hotelName);
                }
                else {
                    if (this.recent) {
                        var cocheck = 0;
                        for (let i = 0; i < this.recent.length; i++) {
                            if (this.recent[i].regionId == this.gbitem.regionId) {
                                cocheck = 1;
                                break;
                            }
                        }
                        if (cocheck == 0) {
                            var item3 = {
                                type: "2",
                                hotelId: "",
                                hotelName: "",
                                regionId: this.gbitem.regionId,
                                regionCode: this.gbitem.regionCode,
                                regionName: this.gbitem.regionName,
                                flag: "0",
                                totalHotels: this.gbitem.totalHotels
                            };
                            se.searchhotel.recent = [];
                            if (this.recent.length > 1) {
                                se.searchhotel.recent.push(this.recent[1]);
                            }
                            else {
                                se.searchhotel.recent.push(this.recent[0]);
                            }
                            this.searchhotel.recent.push(item3);
                            se.isrefreshlist = "true";
                        }
                    }
                    else {
                        var item3 = {
                            type: "2",
                            hotelId: "",
                            hotelName: "",
                            regionId: this.gbitem.regionId,
                            regionCode: this.gbitem.regionCode,
                            regionName: this.gbitem.regionName,
                            flag: "0",
                            totalHotels: this.gbitem.totalHotels
                        };
                        se.searchhotel.recent = [];
                        this.searchhotel.recent.push(item3);
                    }
                    this.authService.region = this.gbitem.regionName;
                    this.authService.regionid = this.gbitem.regionId;
                    this.authService.regioncode = this.gbitem.regionCode;
                    var obj = {
                        regionName: this.authService.region,
                        regionId: this.authService.regionid,
                        regionCode: this.authService.regioncode
                    };
                    this.searchhotel.gbmsg = obj;
                    this.valueGlobal.logingoback = "/hotellist/false";
                    this.navCtrl.navigateForward('/hotellist/' + se.isrefreshlist);
                    this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                        "|" +
                        this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.RegionCode);
                }
            }
            else if (this.co == 2) {
                if (this.gbmsg.type == 1) {
                    var id1 = { id: this.gbmsg.hotelId };
                    this.searchhotel.rootPage = "mainpage";
                    this.searchhotel.gbitem.hotelId = this.gbmsg.hotelId;
                    this.valueGlobal.logingoback = "/hoteldetail/" + id1;
                    this.navCtrl.navigateForward("/hoteldetail/" + id1);
                    this.gf.googleAnalytion("main", "Search", this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbitem.hotelId);
                }
                else {
                    this.authService.region = this.gbmsg.regionName;
                    this.authService.regionid = this.gbmsg.regionId;
                    this.authService.regioncode = this.gbmsg.regionCode;
                    var cocheck = 0;
                    for (let i = 0; i < this.recent.length; i++) {
                        if (this.recent[i].regionId == this.gbmsg.regionId) {
                            cocheck = 1;
                            break;
                        }
                    }
                    if (cocheck == 0) {
                        se.isrefreshlist = "true";
                    }
                    this.navCtrl.navigateForward("/hotellist/" + se.isrefreshlist);
                    this.gf.googleAnalytion("main", "Search", this.authService.regioncode +
                        "|" +
                        this.input +
                        "|" +
                        this.cin +
                        "|" +
                        this.cout +
                        "|" +
                        this.gbmsg.regionCode);
                }
            }
            else if (this.input && !this.co) {
                this.input = "";
                this.navCtrl.navigateForward("/searchhotel");
            }
        }
        else {
            this.navCtrl.navigateForward("/searchhotel");
            this.gf.googleAnalytion("main", "Search", "");
        }
    }
    deletetext() {
        this.input = "";
        this.ischeckclose = false;
        this.ischecklist = false;
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(key => {
                elements[key].style.display = "flex";
            });
        }
    }
    hideStatusBar() {
        var se = this;
        let el = document.getElementsByClassName('div-statusbar-float');
        el[0].classList.remove('float-statusbar-enabled');
        el[0].classList.add('float-statusbar-disabled');
    }
    ionViewWillEnter() {
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
        }
        else {
            this.isConnected = false;
            this.gf.showWarning("Không có kết nối mạng", "Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng", "Đóng");
            return;
        }
        this.valueGlobal.logingoback = '/app/tabs/tab1';
        if (this.searchhotel.backPage == 'foodpaymentdonepage' || this.searchhotel.backPage == 'foodplaceotherpage'
            || this.searchhotel.backPage == 'foodpaymentchoosebank' || this.searchhotel.backPage == 'foodpaymentselect' || this.searchhotel.backPage == 'foodinstallmentdone' || this.valueGlobal.backValue == "homefood") {
        }
        else if (this.valueGlobal.backValue == "homeflight") {
            this.hideStatusBar();
            if (this.foodService.firstload == 0) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    this.valueGlobal.backValue = "";
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.valueGlobal.backValue = "";
                }, 100);
            }
        }
        else if (this.valueGlobal.backValue == "flightmytrip") {
            if (this.foodService.firstload == 0) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    this.flightService.itemMenuFlightClick.emit(2);
                    jquery__WEBPACK_IMPORTED_MODULE_18__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.flightService.itemMenuFlightClick.emit(2);
                    jquery__WEBPACK_IMPORTED_MODULE_18__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                }, 100);
            }
        }
        else {
            this.gf.clearActivatedTab();
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'flex';
            }
            this.setActiveTab(0);
        }
        if (this.valueGlobal.backValue == "foodbill" || this.valueGlobal.backValue == "foodaccount") {
            if (!this.foodService.firstload) {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    this.foodService.firstload += 1;
                    if (this.valueGlobal.backValue == "foodaccount") {
                        this.foodService.menuFooterClick.emit(4);
                        this.valueGlobal.backValue = "";
                    }
                }, 700);
            }
            else {
                setTimeout(() => {
                    this.activeTab = 1;
                    this.setActiveTab(1);
                    if (this.valueGlobal.backValue == "foodaccount") {
                        this.foodService.menuFooterClick.emit(4);
                        this.valueGlobal.backValue = "";
                    }
                }, 100);
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_18__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
        this.searchhotel.backPage = "";
    }
    itemclickht(item) {
        this.hideStatusBar();
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        this.searchhotel.hotelID = item.id;
        this.searchhotel.rootPage = "topdeal";
        this.valueGlobal.logingoback = "/hoteldetail/" + item.id;
        setTimeout(() => {
            this.navCtrl.navigateForward('/hoteldetail/' + item.id);
        }, 10);
    }
    itemSelectedmood(item) {
        this.valueGlobal.logingoback = '/hotellistmood/' + item.id + '/' + item.title;
        var id1 = { id: item.id, title: item.title };
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        setTimeout(() => {
            this.navCtrl.navigateForward("/hotellistmood/" + item.id + "/" + item.title);
        }, 10);
        this.hideStatusBar();
        this.gf.googleAnalytion("hotellistmood", "Search", item.title);
    }
    itemclickregion(item) {
        this.searchhotel.child = this.child;
        this.searchhotel.adult = this.adult;
        this.searchhotel.roomnumber = this.roomnumber;
        this.searchhotel.rootPage = "topregion";
        this.authService.region = item.name;
        this.authService.regionid = item.id;
        this.authService.regioncode = item.regionCode;
        this.searchhotel.location = "";
        this.searchhotel.chuoi = this.chuoi;
        this.zone.run(() => {
            this.input = item.name;
            this.searchhotel.input = item.name;
        });
        this.searchhotel.local0check = false;
        this.searchhotel.local1check = false;
        this.searchhotel.local2check = false;
        this.searchhotel.local3check = false;
        this.searchhotel.local4check = false;
        this.searchhotel.local5check = false;
        this.searchhotel.local6check = false;
        this.searchhotel.local7check = false;
        this.searchhotel.local8check = false;
        this.searchhotel.local9check = false;
        this.searchhotel.local10check = false;
        this.searchhotel.local11check = false;
        this.searchhotel.local12check = false;
        this.searchhotel.local13check = false;
        this.searchhotel.local14check = false;
        this.searchhotel.local15check = false;
        this.searchhotel.local16check = false;
        this.searchhotel.local17check = false;
        this.searchhotel.local18check = false;
        this.searchhotel.local19check = false;
        this.searchhotel.location = "";
        var obj = {
            regionName: this.authService.region,
            regionId: this.authService.regionid,
            regionCode: this.authService.regioncode
        };
        this.searchhotel.gbmsg = obj;
        this.searchhotel.flag = 1;
        this.valueGlobal.logingoback = "/hotellist/true";
        this.navCtrl.navigateForward("/hotellist/true");
        this.hideStatusBar();
        this.gf.googleAnalytion("main", "Search", "topregion:" + this.authService.regioncode);
    }
    onScroll(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slide2-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfinite();
            }, 500);
        }
    }
    doInfinite() {
        this.zone.run(() => {
            if (this.ischeck == true && this.canLoadDeal) {
                this.page = this.page + 1;
                this.getHotelDealPaging();
            }
        });
    }
    onScrollBlog(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slide5-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfiniteBlog();
            }, 500);
        }
    }
    onScrollBlogTrip(event) {
        let scrolled = 0;
        let el = document.getElementsByClassName("slideblogtrips-scroll");
        if (el.length > 0) {
            scrolled = Math.round(el[0].scrollWidth - el[0].scrollLeft);
        }
        if (scrolled == el[0].offsetWidth || scrolled + 1 == el[0].offsetWidth) {
            setTimeout(() => {
                this.doInfiniteBlogTrip();
            }, 500);
        }
    }
    doInfiniteBlog() {
        this.zone.run(() => {
            if (this.ischeck == true) {
                this.pageBlog = this.pageBlog + 1;
                this.getNewsBlog(0);
            }
        });
    }
    doInfiniteBlogTrip() {
        this.zone.run(() => {
            if (this.ischeck == true) {
                this.pageBlogTrip = this.pageBlogTrip + 1;
                this.getblogtrips();
            }
        });
    }
    getblogtrips() {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: "GET",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/GeBlogByTripLatestOfUser" +
                        "?pageIndex=" +
                        se.pageBlogTrip +
                        "&pageSize=10",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        "cache-control": "no-cache",
                        "content-type": "application/json",
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        var data = JSON.parse(body);
                        var listBlogtemp = data.items;
                        if (listBlogtemp && listBlogtemp.length > 0) {
                            se.regionnamesuggest = data.regionName;
                            if (se.arrbloglike && se.arrbloglike.length > 0) {
                                var itemblog;
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    itemblog = {
                                        avatar: listBlogtemp[i].avatar,
                                        date: listBlogtemp[i].Date,
                                        id: listBlogtemp[i].id,
                                        title: listBlogtemp[i].title,
                                        url: listBlogtemp[i].url,
                                        Like: false
                                    };
                                    for (let j = 0; j < se.arrbloglike.length; j++) {
                                        if (se.arrbloglike[j].id == listBlogtemp[i].Id) {
                                            itemblog = {
                                                avatar: listBlogtemp[i].avatar,
                                                date: listBlogtemp[i].date,
                                                id: listBlogtemp[i].id,
                                                title: listBlogtemp[i].title,
                                                url: listBlogtemp[i].url,
                                                Like: true
                                            };
                                            break;
                                        }
                                    }
                                    if (!se.checkExistsItemInArray(se.blogtrips, itemblog, 1)) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            else {
                                for (let i = 0; i < listBlogtemp.length; i++) {
                                    itemblog = {
                                        avatar: listBlogtemp[i].avatar,
                                        date: listBlogtemp[i].date,
                                        id: listBlogtemp[i].id,
                                        title: listBlogtemp[i].title,
                                        url: listBlogtemp[i].url,
                                        Like: false
                                    };
                                    if (!se.checkExistsItemInArray(se.blogtrips, itemblog, 1)) {
                                        se.blogtrips.push(itemblog);
                                    }
                                }
                            }
                            if (se.arrbloglike && se.arrbloglike.length > 0) {
                                se.bindItemLiketrips(se.arrbloglike);
                            }
                            se.storage.set("listblogtripdefault", se.blogtrips);
                            se.storage.set("regionnamesuggest", data.regionName);
                        }
                        else {
                            se.showloadmoreblogtrip = false;
                        }
                    });
                });
            }
            else {
                se.blogtrips = [];
                se.showloadmoreblogtrip = false;
            }
        });
    }
    bindItemunLike() {
        if (this.blog.length > 0) {
            this.zone.run(() => {
                for (let i = 0; i < this.blog.length; i++) {
                    this.blog[i].Like = false;
                }
            });
        }
    }
    bindItemLike(listLike) {
        var se = this;
        if (listLike.length > 0) {
            se.blog.forEach(element => {
                if (listLike && listLike.length > 0) {
                    var itemlikemap = listLike.filter(item => {
                        return item.id == element.Id;
                    });
                    if (itemlikemap && itemlikemap.length > 0) {
                        se.zone.run(() => {
                            element.Like = true;
                        });
                    }
                    else {
                        se.zone.run(() => {
                            element.Like = false;
                        });
                    }
                }
            });
        }
        else {
            for (let i = 0; i < se.blog.length; i++) {
                se.blog[i].Like = false;
            }
        }
        if (se.blogtrips && se.blogtrips.length > 0) {
            this.bindItemLiketrips(se.arrbloglike);
        }
        else {
            this.getblogtrips();
        }
    }
    bindItemLiketrips(listLike) {
        var se = this;
        if (listLike && listLike.length > 0) {
            se.blogtrips.forEach(element => {
                var itemlikemap = listLike.filter(item => {
                    return item.id == element.id;
                });
                if (itemlikemap && itemlikemap.length > 0) {
                    se.zone.run(() => {
                        element.Like = true;
                    });
                }
                else {
                    se.zone.run(() => {
                        element.Like = false;
                    });
                }
            });
        }
        else {
            for (let i = 0; i < se.blogtrips.length; i++) {
                se.blogtrips[i].Like = false;
            }
        }
    }
    getbloglike(value) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: "GET",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/GetFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        "cache-control": "no-cache",
                        "content-type": "application/json",
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "hotellike";
                        error.func = "getblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                        throw new Error(error);
                    }
                    se.zone.run(() => {
                        se.arrbloglike = JSON.parse(body);
                        if (se.arrbloglike.msg) {
                            se.arrbloglike = [];
                        }
                        if (value == 0) {
                            se.getNewsBlog(0);
                            se.storage.get('blogtripdefault').then(data => {
                                if (data) {
                                    se.blogtrips = data;
                                }
                                else {
                                    se.getblogtrips();
                                }
                            });
                        }
                        else {
                            se.bindItemLike(se.arrbloglike);
                        }
                    });
                });
            }
            else {
                se.arrbloglike = [];
                se.getNewsBlog(1);
            }
        });
    }
    seemoreblog(value) {
        this.gf.setParams(value, "seemoreblog");
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = 'bloglist';
        this.navCtrl.navigateForward("/bloglist");
        this.hideStatusBar();
    }
    itemblog(item) {
        this.valueGlobal.urlblog = item.Url;
        this.valueGlobal.logingoback = '/blog/' + item.Id;
        this.navCtrl.navigateForward("/blog/" + item.Id);
        this.gf.googleAnalytion("blog", "Search", "");
        this.hideStatusBar();
    }
    clickitemblogtrips(item) {
        this.valueGlobal.urlblog = item.url;
        this.valueGlobal.backValue = "blog";
        this.valueGlobal.logingoback = '/blog/' + item.id;
        this.navCtrl.navigateForward("/blog/" + item.id);
        this.gf.googleAnalytion("blog", "Search", "");
        this.hideStatusBar();
    }
    share(url) {
        this.socialSharing
            .share(null, null, null, url)
            .then(() => {
        })
            .catch(() => {
        });
    }
    likeItemblog(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 1);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + "/mobile/OliviaApis/AddFavouriteBlog",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "likeItemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    if (se.valueGlobal.blogid) {
                        se.getbloglike(1);
                        se.valueGlobal.blogid = null;
                    }
                });
            }
            else {
                se.valueGlobal.logingoback = '/app/tabs/tab1';
                se.valueGlobal.blogid = id;
                let el = document.getElementsByClassName('div-statusbar-float');
                if (el.length > 0) {
                    el[0].classList.remove('float-statusbar-enabled');
                    el[0].classList.add('float-statusbar-disabled');
                }
                se.navCtrl.navigateForward("/login");
            }
        });
    }
    likeItemblogtrips(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocaltrips(id, 1);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + "/mobile/OliviaApis/AddFavouriteBlog",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "likeItemblogtrips";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                se.navCtrl.navigateForward("/login");
            }
        });
    }
    unlikeItemblog(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocal(id, 0);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/RemoveFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "unlikeItemblog";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                this.navCtrl.navigateForward("/login");
            }
        });
    }
    unlikeItemblogtrips(id) {
        var se = this;
        se.storage.get("auth_token").then(auth_token => {
            if (auth_token) {
                se.getbloglikelocaltrips(id, 0);
                var text = "Bearer " + auth_token;
                var options = {
                    method: "POST",
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile +
                        "/mobile/OliviaApis/RemoveFavouriteBlogByUser",
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        authorization: text
                    },
                    body: { postId: id },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mainpage";
                        error.func = "unlikeItemblogtrips";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                });
            }
            else {
                this.navCtrl.navigateForward("/login");
            }
        });
    }
    getbloglikelocaltrips(id, value) {
        this.zone.run(() => {
            for (let i = 0; i < this.blogtrips.length; i++) {
                if (this.blogtrips[i].id == id) {
                    if (value == 1) {
                        this.blogtrips[i].Like = true;
                    }
                    else {
                        this.blogtrips[i].Like = false;
                    }
                    break;
                }
            }
        });
    }
    getbloglikelocal(id, value) {
        this.zone.run(() => {
            for (let i = 0; i < this.blog.length; i++) {
                if (this.blog[i].Id == id) {
                    if (value == 1) {
                        this.blog[i].Like = true;
                    }
                    else {
                        this.blog[i].Like = false;
                    }
                    break;
                }
            }
        });
    }
    seemoredeal() {
        this.valueGlobal.backValue = "topdeallist";
        this.valueGlobal.logingoback = "topdeallist";
        setTimeout(() => {
            this.navCtrl.navigateForward("/topdeallist");
        }, 250);
        this.hideStatusBar();
    }
    doRefresh(event) {
        if (this.activeTab == 3) {
            event.target.complete();
            return;
        }
        this.loaddata();
        this.storage.remove("listblogtripdefault");
        this.storage.remove("listtopdealdefault");
        this.storage.remove("regionnamesuggest");
        this.storage.remove("listtopmoods");
        this.onEnter();
        this.blogtrips = [];
        this.pageBlogTrip = 1;
        this.getbloglike(0);
        this.gf.setParams(false, "resetBlogTrips");
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    getTagByTypeName() {
        var se = this;
        if (se.searchhotel.ef_arrhoteltypenamecheck.length > 0) {
            se.searchhotel.ef_arrhoteltypenamecheck.forEach(element => {
                if (element == 'Ăn gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 3, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(3);
                }
                else if (element == 'Xem gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 6, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(6);
                }
                else if (element == 'Chơi gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 7, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(7);
                }
                else if (element == 'Ở đâu' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 4, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(4);
                }
                else if (element == 'Sống ảo' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 9, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(9);
                }
                else if (element == 'Uống gì' && !se.gf.checkExistsItemInArray(se.searchhotel.ef_arrhoteltypecheck, 22, 'filtername')) {
                    se.searchhotel.ef_arrhoteltypecheck.push(22);
                }
            });
        }
    }
    getFilterName(type) {
        if (type == 3) {
            return "Ăn gì";
        }
        if (type == 6) {
            return "Xem gì";
        }
        if (type == 7) {
            return "Chơi gì";
        }
        if (type == 4) {
            return "Ở đâu";
        }
        if (type == 9) {
            return "Sống ảo";
        }
        if (type == 22) {
            return "Uống gì";
        }
    }
    getdatamytrip() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/dashboard/getmytrip?getall=true',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getdata";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                let lstTrips = JSON.parse(body);
                                se.storage.get('listmytrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listmytrips').then(() => {
                                            se.storage.set('listmytrips', lstTrips);
                                        });
                                    }
                                    else {
                                        se.storage.set('listmytrips', lstTrips);
                                    }
                                });
                                se.getCombineRequestTrip();
                            });
                        }
                    }
                });
            }
        });
    }
    getCombineRequestTrip() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/dashboard/GetMyRequestPrice',
                    headers: {
                        'accept': 'application/json',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "mytrips",
                            func: "getRequestTrip",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options),
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "mytrips";
                        error.func = "getRequestTrip";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            se.zone.run(() => {
                                var result = JSON.parse(body);
                                se.storage.get('listrequesttrips').then(data => {
                                    if (data) {
                                        se.storage.remove('listrequesttrips').then(() => {
                                            se.storage.set('listrequesttrips', result);
                                        });
                                    }
                                    else {
                                        se.storage.set('listrequesttrips', result);
                                    }
                                });
                            });
                        }
                    }
                });
            }
        });
    }
    getCalendarholidays() {
        var se = this;
        var options = {
            method: 'GET',
            url: 'https://gate.ivivu.com/api/Data/calendarholidays',
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            se.valueGlobal.listlunar = [];
            var json = JSON.parse(body);
            se.valueGlobal.listlunar = json;
            se.cofdate = 0;
            se.cotdate = 0;
            se.bindlunar();
        });
    }
    checklunar(s) {
        return s.indexOf('Mùng') >= 0;
    }
    bindlunar() {
        var se = this;
        for (let i = 0; i < se.valueGlobal.listlunar.length; i++) {
            var checkdate = moment__WEBPACK_IMPORTED_MODULE_7__(se.valueGlobal.listlunar[i].date).format('YYYY-MM-DD');
            if (checkdate == se.cin) {
                se.cofdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.cinthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.cinthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                this.getDayName(this.datecin, this.datecout);
            }
            if (checkdate == se.cout) {
                se.cotdate = 1;
                if (se.valueGlobal.listlunar[i].isNameDisplay == 1) {
                    var ischecklunar = se.checklunar(se.valueGlobal.listlunar[i].name);
                    if (ischecklunar) {
                        se.coutthu = se.valueGlobal.listlunar[i].name + ' ' + 'tết';
                    }
                    else {
                        se.coutthu = se.valueGlobal.listlunar[i].name;
                    }
                }
            }
            else {
                this.getDayName(this.datecin, this.datecout);
            }
        }
    }
    clickhotel() {
        this.activeTab = 1;
        this.tabhome = "hotel";
    }
    clickfood() {
        this.activeTab = 2;
        this.tabhome = "food";
    }
    slidechange() {
        var se = this;
        se.slider.getActiveIndex().then((currentIndex) => {
            se.activeTab = currentIndex;
            se.setActiveTab(currentIndex);
        });
    }
    setActiveTab(currentIndex) {
        if (currentIndex != 2 && currentIndex != 3) {
            this.activeTab = currentIndex;
            this.valueGlobal.activeTab = currentIndex;
        }
        if (currentIndex === 3) {
            this.countcart = this.foodService.listItemsCart.length;
            this.getAddress();
            this.valueGlobal.backValue = "";
            this._mytripservice.rootPage = "homefood";
            this.navCtrl.navigateForward('/homefood');
        }
        else if (currentIndex === 2) {
            this.valueGlobal.backValue = "";
            this.navCtrl.navigateForward('/topdeallist');
        }
        else if (currentIndex === 1) {
            this.valueGlobal.logingoback = "";
            this._mytripservice.rootPage = "homeflight";
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'none';
                if (document.querySelector(".tabbar")[1]) {
                    document.querySelector(".tabbar")[0]['style'].display = 'none';
                    document.querySelector(".tabbar")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homefood-footer").length > 0) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homefood-footer")[1]) {
                    document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homeflight-footer").length > 0) {
                document.getElementsByClassName("homeflight-footer")[0]['style'].display = 'block';
                if (document.getElementsByClassName("homeflight-footer")[1]) {
                    document.getElementsByClassName("homeflight-footer")[1]['style'].display = 'block';
                }
            }
            this.getAddress();
            this.flightService.itemTabFlightFocus.emit(1);
        }
        else {
            this._mytripservice.rootPage = "homehotel";
            jquery__WEBPACK_IMPORTED_MODULE_18__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            if (document.querySelector(".tabbar")) {
                document.querySelector(".tabbar")['style'].display = 'flex';
                if (document.querySelector(".tabbar")[1]) {
                    document.querySelector(".tabbar")[0]['style'].display = 'flex';
                    document.querySelector(".tabbar")[1]['style'].display = 'flex';
                }
            }
            if (document.getElementsByClassName("homefood-footer").length > 0) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homefood-footer")[1]) {
                    document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
                }
            }
            if (document.getElementsByClassName("homeflight-footer").length > 0) {
                document.getElementsByClassName("homeflight-footer")[0]['style'].display = 'none';
                if (document.getElementsByClassName("homeflight-footer")[1]) {
                    document.getElementsByClassName("homeflight-footer")[1]['style'].display = 'none';
                }
            }
            this.foodService.listimagereview = null;
            this.foodService.objFoodReview = null;
            this.valueGlobal.backValue = "";
        }
        this.gf.setActivatedTab(1);
    }
    getAddress() {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlFood + "/api/FOAdmin/GetData";
        this.gf.RequestApi("GET", url, {}, {}, "", "").then((data) => {
            se.arrDistrict = [];
            se.arrCity = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].levelId == 1) {
                    se.arrCity.push(data[i]);
                }
                if (data[i].levelId == 2) {
                    se.arrDistrict.push(data[i]);
                }
            }
            se.dataDist();
        });
    }
    dataDist() {
        var se = this;
        se.foodService.district = [];
        for (let i = 0; i < se.arrCity.length; i++) {
            var item;
            var chuoi = "";
            if (se.foodService.district.length > 0) {
                var str = se.foodService.district[i - 1].namedist.length;
                se.foodService.district[i - 1].namedist = se.foodService.district[i - 1].namedist.slice(0, str - 2);
            }
            for (let j = 0; j < se.arrDistrict.length; j++) {
                if (se.arrCity[i].id == se.arrDistrict[j].parentId) {
                    if (j == se.arrDistrict.length - 1) {
                        chuoi = chuoi + se.arrDistrict[j].name;
                    }
                    else {
                        chuoi = chuoi + se.arrDistrict[j].name + ', ';
                    }
                }
            }
            item = { namecity: se.arrCity[i].name, namedist: chuoi };
            se.foodService.district.push(item);
        }
    }
    getShowNotice() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/getCovidNotify',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var data = JSON.parse(response.body);
            se.isNotice = data.show;
        });
    }
    checkDefaultDateFocus() {
        var se = this;
        se.zone.run(() => {
            se.storage.get('cacheSearchHotelInfo').then((data) => {
                if (!data || (data && data.checkInDate && moment__WEBPACK_IMPORTED_MODULE_7__(data.checkInDate).diff(moment__WEBPACK_IMPORTED_MODULE_7__(new Date()), 'days') <= 0)) {
                    se.storage.get('hasChangeDate').then((data) => {
                        if (!data) {
                            se.openPickupCalendar(true);
                            se.allowclickcalendar = false;
                            se.storage.set('hasChangeDate', true);
                        }
                    });
                }
            });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('myHomeSlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], Tab1Page.prototype, "slider", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('scrollArea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], Tab1Page.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRouterOutlet"])
], Tab1Page.prototype, "routerOutlets", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab1",
        template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
        styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_10__["SplashScreen"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_14__["SafariViewController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_16__["Network"],
        _network_provider_service__WEBPACK_IMPORTED_MODULE_17__["NetworkProvider"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_19__["Storage"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__["SocialSharing"],
        _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_22__["FirebaseMessaging"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_21__["FCM"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_23__["AppVersion"],
        _ionic_native_firebase_dynamic_links_ngx__WEBPACK_IMPORTED_MODULE_24__["FirebaseDynamicLinks"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_native_page_transitions_ngx__WEBPACK_IMPORTED_MODULE_25__["NativePageTransitions"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_11__["ActivityService"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_26__["foodService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_27__["flightService"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_28__["MytripService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_29__["BizTravelService"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map