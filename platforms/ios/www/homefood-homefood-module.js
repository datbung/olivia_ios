(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homefood-homefood-module"],{

/***/ "./src/app/foodaccount/foodaccount.module.ts":
/*!***************************************************!*\
  !*** ./src/app/foodaccount/foodaccount.module.ts ***!
  \***************************************************/
/*! exports provided: FoodAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAccountPageModule", function() { return FoodAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodaccount_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodaccount.page */ "./src/app/foodaccount/foodaccount.page.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");







let FoodAccountPageModule = class FoodAccountPageModule {
};
FoodAccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [_foodaccount_page__WEBPACK_IMPORTED_MODULE_5__["FoodAccountPage"]],
        exports: [_foodaccount_page__WEBPACK_IMPORTED_MODULE_5__["FoodAccountPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodAccountPageModule);



/***/ }),

/***/ "./src/app/foodaccount/foodaccount.page.html":
/*!***************************************************!*\
  !*** ./src/app/foodaccount/foodaccount.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodaccount-header\">\r\n    <ion-row style=\"height: 56px;\">\r\n        <ion-title *ngIf=\"!username\" class=\"title-header\">Thêm</ion-title>\r\n        <ion-title *ngIf=\"username\" class=\"title-header\">Chào {{username}}</ion-title>\r\n    </ion-row>\r\n</ion-header>\r\n    <div class=\"foodaccount-content no-margin-bottom\" *ngIf=\"isConnected\">\r\n        <div  *ngIf=\"loginuser\">\r\n                <ion-row>\r\n                        <ion-col class=\"text-center\" style=\"padding:0\">\r\n                            <div class=\"div-wrapimg\" (click)=\"changeAvatar()\">\r\n                                <ion-card style=\"height:110px !important; box-shadow:none !important;margin-top:14px\">\r\n                                        <img *ngIf=\"avatar && !croppedImagepath\" class=\"img-user-avatar\" src=\"{{avatar}}\">\r\n                                        <img *ngIf=\"croppedImagepath\" class=\"img-user-avatar\" [src]=\"croppedImagepath\">\r\n                                </ion-card>\r\n                            </div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                    <ion-row  (click)=\"changeAvatar()\">\r\n                        <ion-col class=\"text-center\"  style=\"padding:0\">\r\n                            <div class=\"text-color\">Khách hàng thân thiết</div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"!loginuser\">\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_login.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogin()\">Đăng nhập/Đăng ký</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser\" [ngClass]=\"loginuser ? 'p-top-20' : ''\" >\r\n            <ion-row>\r\n                <ion-col>\r\n                        <span class=\"label-header\">Tài khoản của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_i_p.svg\">\r\n                </ion-col>\r\n                <ion-col size=\"6\">\r\n                    <span (click)=\"Point()\" class=\"item-list\">iVIVUPoint</span>\r\n                </ion-col>\r\n                <ion-col size=\"5\" style=\"text-align: right\" *ngIf=\"point\">\r\n                    <label style=\"font-size:16px; color: #26bed6; font-weight: 500\">{{ point }} điểm</label>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <ion-row (click)=\"showUserProfile()\">\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_people.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Hồ sơ của tôi</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        \r\n        <div class=\"div-item\" *ngIf=\"loginuser && bizTravelService.isCompany\">\r\n            <ion-row (click)=\"showCompanyInfo()\">\r\n                <ion-col size=\"1\">\r\n                    <img class=\"img-suit\" src=\"./assets/ic_biztravel/suit.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\">Thông tin công ty</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n\r\n        <div *ngIf=\"!loginuser\" class=\"item-support div-item\">\r\n\r\n        <div class=\"support\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                        <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                    <ion-col size=\"1\">\r\n                            <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                    </ion-col>\r\n                    <ion-col size=\"10\" class=\"support-text\"  (click)=\"makeCallSupport(1)\">\r\n                            <span class=\"item-list item-call\">iVIVU Hà Nội - 19002045</span>\r\n                    </ion-col>\r\n                    <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(1)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                    <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                </ion-row>\r\n                <ion-row >\r\n                        <ion-col size=\"1\">\r\n                                <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                        </ion-col>\r\n                        <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                <span class=\"item-list item-call\">iVIVU Hồ Chí Minh - 19001870</span>\r\n                        </ion-col>\r\n                        <ion-col size=\"1\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                        <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                    </ion-row>\r\n                    <ion-row >\r\n                            <ion-col size=\"1\">\r\n                                    <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                            </ion-col>\r\n                            <ion-col size=\"10\" class=\"support-text\">\r\n                                    <span class=\"item-list item-call\" (click)=\"makeCallSupport(3)\">iVIVU Cần Thơ - 19002087</span>\r\n                            </ion-col>\r\n                            <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(3)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                            <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                        </ion-row>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"item-support div-item\">\r\n                <div class=\"support\">\r\n                        <ion-row>\r\n                            <ion-col>\r\n                                    <span class=\"label-header\">Nhân viên hỗ trợ</span>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                        <ion-row *ngFor=\"let sp of listSupport\">\r\n                                <ion-col style=\"padding:0\" *ngIf=\"sp.name\">\r\n                                        <ion-row>\r\n\r\n                                                <ion-col size=\"1\" >\r\n                                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text\" *ngIf=\"sp.phone && sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"10\" class=\"support-text-offline\" *ngIf=\"!sp.phone || !sp.isStaffOnline\">\r\n                                                        <span class=\"item-list item-call\">{{sp.name}}</span>\r\n                                                </ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\" (click)=\"makeCallSupport(sp.phone)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                                                <ion-col size=\"1\" *ngIf=\"!sp.isStaffOnline && sp.phone\" class=\"support-text s-text t-right\"><img class=\"img-support\" src=\"./assets/imgs/ic_call_offline.svg\"></ion-col>\r\n                                        </ion-row>\r\n                                </ion-col>\r\n                        </ion-row>\r\n                        <ion-row >\r\n                                <ion-col size=\"1\">\r\n                                        <img class=\"img-callcenter\" src=\"./assets/imgs/ic_callcenter.svg\">\r\n                                </ion-col>\r\n                                <ion-col size=\"10\" class=\"support-text\" (click)=\"makeCallSupport(2)\">\r\n                                        <span class=\"item-list item-call\">19001870</span>\r\n                                </ion-col>\r\n                                <ion-col size=\"1\" class=\"support-text s-text t-right\"  (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></ion-col>\r\n                                <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\" (click)=\"sendSMSSupport()\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                        </ion-row>\r\n                        \r\n                    </div>\r\n                </div>\r\n        <div>\r\n            <div class=\"setting div-item\">\r\n                <ion-row>\r\n                    <ion-col>\r\n                            <span class=\"label-header\">Cài đặt</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n                <ion-row>\r\n                    <ion-col size=\"1\">  \r\n                            <img src=\"./assets/imgs/ic_noti.svg\">\r\n                    </ion-col>\r\n                    <ion-col >\r\n                            <span class=\"item-list\">Thông báo</span>\r\n                    </ion-col>\r\n                </ion-row>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"div-item\">\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_logout.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogout()\">Đăng xuất</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div>\r\n        <!-- div hiển thị không có kết nối -->\r\n        <div class=\"no-margin-bottom\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 55px\">\r\n            <img src=\"./assets/imgs/empty.svg\">\r\n            <div>\r\n              <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n        "

/***/ }),

/***/ "./src/app/foodaccount/foodaccount.page.scss":
/*!***************************************************!*\
  !*** ./src/app/foodaccount/foodaccount.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-top: 2px;\n}\n\n.label-md {\n  margin: 10px 0px 10px 0;\n}\n\n.no-margin-bottom {\n  padding: 16px 16px 16px 11px;\n  margin-bottom: 0px;\n}\n\n.div-item {\n  padding-bottom: 10px;\n}\n\n.title-header {\n  text-align: center;\n  padding: 0;\n  padding-top: env(safe-area-inset-top);\n}\n\n.label-header {\n  font-size: 12px;\n  font-weight: 300;\n  color: #4f4f4f;\n  letter-spacing: -0.34px;\n}\n\n.item-list {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n\n.icon-list {\n  opacity: 0.7;\n}\n\n.support {\n  padding-top: 20px;\n}\n\n.support-text {\n  color: #26bed6;\n}\n\n.support-text-offline {\n  color: #bdbdbd;\n}\n\n.setting {\n  padding-top: 20px;\n}\n\n.item-support .item-inner {\n  border-bottom: none !important;\n}\n\n.item-call {\n  font-weight: 300;\n}\n\n.list-md .item-block .item-inner {\n  margin-right: 16px;\n}\n\n.img-review img {\n  fill: #26bed6;\n}\n\n.t-right {\n  text-align: right;\n  padding: 5px 0px 5px 0px;\n}\n\n.s-text {\n  padding: 5px 0px 5px 0px;\n}\n\n.img-support {\n  width: 16px;\n  height: 16px;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.img-support-offline {\n  width: 16px;\n  height: 16px;\n  opacity: 0.4;\n}\n\n.p-top-20 {\n  padding-top: 20px;\n}\n\n@media (min-width: 351px) and (max-width: 400px) {\n  .support-text {\n    color: #26bed6;\n    padding-right: 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding-right: 0;\n  }\n}\n\n@media (min-width: 287px) and (max-width: 350px) {\n  .support-text {\n    color: #26bed6;\n    padding: 5px 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding: 5px 0;\n  }\n\n  .item-list {\n    font-size: 12px;\n  }\n}\n\n.foodaccount-header {\n  position: fixed;\n}\n\n.foodaccount-content {\n  padding: calc( env(safe-area-inset-bottom) + 80px) 16px 90px 11px;\n  position: -webkit-sticky;\n}\n\n::ng-deep cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  border-color: #bdbdbd;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-showmore {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  padding: 0;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n\n.img-heart {\n  width: 13px;\n  height: 12px;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZGFjY291bnQvZm9vZGFjY291bnQucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kYWNjb3VudC9mb29kYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksdUJBQUE7QUNDUjs7QURDSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLG9CQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQ0lSOztBRERJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDSVI7O0FERkk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0ksWUFBQTtBQ01SOztBREpJO0VBQ0ksaUJBQUE7QUNPUjs7QURKSTtFQUNJLGNBQUE7QUNPUjs7QURMSTtFQUNJLGNBQUE7QUNRUjs7QUROSTtFQUNJLGlCQUFBO0FDU1I7O0FEUEk7RUFDSSw4QkFBQTtBQ1VSOztBRFJJO0VBQ0ksZ0JBQUE7QUNXUjs7QURUSTtFQUNJLGtCQUFBO0FDWVI7O0FEVGlCO0VBQ1QsYUFBQTtBQ1lSOztBRFZJO0VBQ0ksaUJBQUE7RUFDQSx3QkFBQTtBQ2FSOztBRFhJO0VBQ0ksd0JBQUE7QUNjUjs7QURaSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZVI7O0FEYkk7RUFDSSxrQkFBQTtBQ2dCUjs7QURkSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2lCUjs7QURmSTtFQUNJLGlCQUFBO0FDa0JSOztBRGhCSTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDbUJWOztFRGpCTTtJQUNJLGNBQUE7SUFDQSxnQkFBQTtFQ29CVjtBQUNGOztBRGxCSTtFQUNJO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNvQlY7O0VEbEJNO0lBQ0ksY0FBQTtJQUNBLGNBQUE7RUNxQlY7O0VEbkJNO0lBQ0ksZUFBQTtFQ3NCVjtBQUNGOztBRHBCSTtFQUNJLGVBQUE7QUNzQlI7O0FEcEJJO0VBQ0ksaUVBQUE7RUFDQSx3QkFBQTtBQ3VCUjs7QURuQkk7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0tBQUEsaUNBQUE7TUFBQSxnQ0FBQTtVQUFBLDRCQUFBO0FDcUJSOztBRGxCSTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDb0JOOztBRGxCSTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ29CTjs7QURsQkk7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDb0JOOztBRGxCSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ29CUjs7QURsQk07RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ29CUjs7QURsQkk7RUFDSTtJQUNBLGtCQUFBO0VDb0JOO0FBQ0Y7O0FEbEJJO0VBQ0ksc0RBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNvQlI7O0FEbEJJO0VBQ0UsOEJBQUE7QUNvQk47O0FEbEJJO0VBQ0ksOEZBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtLQUFBLGlDQUFBO01BQUEsZ0NBQUE7VUFBQSw0QkFBQTtBQ21CUjs7QURoQkk7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ2tCTjs7QURoQkk7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNrQk47O0FEaEJJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ2tCTjs7QURoQkk7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNrQk47O0FEaEJJO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDa0JOOztBRGhCSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDa0JSOztBRGZRO0VBQ0ksa0JBQUE7QUNpQlo7O0FEYkk7RUFFSSxhQUFBO0VBRUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDZVI7O0FEYkk7RUFDSSxlQUFBO0FDZVI7O0FEVEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNZSjs7QURWQTtFQUNJLGtCQUFBO0FDYUo7O0FEWEE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ2NKOztBRFpBO0VBQ0ksMEJBQUE7QUNlSjs7QURaQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDZUo7O0FEYkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNnQkoiLCJmaWxlIjoic3JjL2FwcC9mb29kYWNjb3VudC9mb29kYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5yb3d7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDJweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1tZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubm8tbWFyZ2luLWJvdHRvbXtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5kaXYtaXRlbXtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGNvbG9yOiM0ZjRmNGY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuaWNvbi1saXN0e1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgIH1cclxuICAgIC5zdXBwb3J0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICB9XHJcbiAgICAuc2V0dGluZ3tcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jYWxse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5pbWctcmV2aWV3IHtpbWd7XHJcbiAgICAgICAgZmlsbDogIzI2YmVkNjtcclxuICAgIH19XHJcbiAgICAudC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucy10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctc3VwcG9ydCB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1zdXBwb3J0LW9mZmxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0yMHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzUxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAuc3VwcG9ydC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdXBwb3J0LXRleHQtb2ZmbGluZXtcclxuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9vZGFjY291bnQtaGVhZGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIH1cclxuICAgIC5mb29kYWNjb3VudC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpIDE2cHggOTBweCAxMXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIH1cclxuLy8vLy8vLy8vLy8vLy9cclxuOjpuZy1kZWVwIHtcclxuICAgIGNscy1hbGVydC1zaG93bW9yZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyOTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICB9XHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7XHJcbiAgICAgICAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIH1cclxuICAgIC5zYy1pb24tYWxlcnQtaW9zLWguY2xzLWFsZXJ0LXNob3dtb3Jle1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1zaG93bW9yZSB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgXHJcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgXHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBcclxuICAgIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC1oZWlnaHQ6IDEwMjRweCkgYW5kIChtaW4taGVpZ2h0OiA4MTJweCl7fVxyXG4gICAgICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgfVxyXG5cclxuICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgIFxyXG4gIH1cclxuXHJcbi8vYXZhdGFyIHN0eWxlXHJcbi5kaXYtd3JhcGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1nLXVzZXItYXZhdGFyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5pdGVtLW1kLC5pdGVtLWlvcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1jYWxsY2VudGVye1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuLmltZy1oZWFydHtcclxuICAgIHdpZHRoOjEzcHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn0iLCIucm93IHtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmxhYmVsLW1kIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDA7XG59XG5cbi5uby1tYXJnaW4tYm90dG9tIHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTFweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uZGl2LWl0ZW0ge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnRpdGxlLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbn1cblxuLmxhYmVsLWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufVxuXG4uaXRlbS1saXN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaWNvbi1saXN0IHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uc3VwcG9ydCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc3VwcG9ydC10ZXh0IHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5zdXBwb3J0LXRleHQtb2ZmbGluZSB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG4uc2V0dGluZyB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uaXRlbS1zdXBwb3J0IC5pdGVtLWlubmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1jYWxsIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5pbWctcmV2aWV3IGltZyB7XG4gIGZpbGw6ICMyNmJlZDY7XG59XG5cbi50LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcbn1cblxuLnMtdGV4dCB7XG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcbn1cblxuLmltZy1zdXBwb3J0IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbn1cblxuLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmltZy1zdXBwb3J0LW9mZmxpbmUge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBvcGFjaXR5OiAwLjQ7XG59XG5cbi5wLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzUxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuc3VwcG9ydC10ZXh0IHtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG5cbiAgLnN1cHBvcnQtdGV4dC1vZmZsaW5lIHtcbiAgICBjb2xvcjogI2JkYmRiZDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTBweCkge1xuICAuc3VwcG9ydC10ZXh0IHtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICBwYWRkaW5nOiA1cHggMDtcbiAgfVxuXG4gIC5zdXBwb3J0LXRleHQtb2ZmbGluZSB7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAuaXRlbS1saXN0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbn1cbi5mb29kYWNjb3VudC1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5mb29kYWNjb3VudC1jb250ZW50IHtcbiAgcGFkZGluZzogY2FsYyggZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgODBweCkgMTZweCA5MHB4IDExcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbn1cblxuOjpuZy1kZWVwIGNscy1hbGVydC1zaG93bW9yZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI5MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcbn1cbkBtZWRpYSAobWF4LWhlaWdodDogMTAyNHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDgxMnB4KSB7XG4gIDo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hbGVydC1pb3MtaC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG46Om5nLWRlZXAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWctdXNlci1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pdGVtLW1kLCAuaXRlbS1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmltZy1jYWxsY2VudGVyIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLmltZy1oZWFydCB7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG9wYWNpdHk6IDAuNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodaccount/foodaccount.page.ts":
/*!*************************************************!*\
  !*** ./src/app/foodaccount/foodaccount.page.ts ***!
  \*************************************************/
/*! exports provided: FoodAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodAccountPage", function() { return FoodAccountPage; });
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
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../cuspoints/cuspoints */ "./src/app/cuspoints/cuspoints.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");



















let FoodAccountPage = class FoodAccountPage {
    constructor(platform, navCtrl, storage, modalCtrl, router, callNumber, valueGlobal, zone, alertCtrl, gf, loadingCtrl, network, networkProvider, actionsheetCtrl, camera, crop, file, fcm, foodService, bizTravelService) {
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
        this.foodService = foodService;
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
        this.handleSplashScreen();
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
            yield se.onRefreshAvatar();
            se.foodService.menuFooterClick.pipe().subscribe(data => {
                if (data == 4) {
                    if (document.getElementsByClassName("homefood-footer").length > 0) {
                        document.getElementsByClassName("homefood-footer")[0]['style'].display = 'block';
                        if (document.getElementsByClassName("homefood-footer")[1]) {
                            document.getElementsByClassName("homefood-footer")[1]['style'].display = 'block';
                        }
                    }
                    this.isConnected = true;
                    setTimeout(() => {
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
                                se.loadUserInfo();
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
                        se.bizTravelService.accountBizTravelChange.emit(1);
                    }
                    else {
                        se.bizTravelService.bizAccount = null;
                        se.bizTravelService.isCompany = false;
                        se.bizTravelService.accountBizTravelChange.emit(2);
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
            this.point = point;
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
        this.valueGlobal.logingoback = '/app/tabs/tab5';
        if (this.networkProvider.isOnline()) {
            this.isConnected = true;
            setTimeout(() => {
                this.loadEmployeeSupport();
                this.GetUserInfo();
            }, 100);
            this.loadUserInfo();
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
                        se.point = point;
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
        this.valueGlobal.backValue = 'foodaccount';
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
                            this.valueGlobal.backValue = 'foodaccount';
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
    showCompanyInfo() {
        this.navCtrl.navigateForward('/companyinfo');
    }
};
FoodAccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-foodaccount',
        template: __webpack_require__(/*! ./foodaccount.page.html */ "./src/app/foodaccount/foodaccount.page.html"),
        styles: [__webpack_require__(/*! ./foodaccount.page.scss */ "./src/app/foodaccount/foodaccount.page.scss")]
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
        _providers_foodService__WEBPACK_IMPORTED_MODULE_15__["foodService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_18__["BizTravelService"]])
], FoodAccountPage);



/***/ }),

/***/ "./src/app/fooddinneritem/fooddinneritem.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/fooddinneritem/fooddinneritem.module.ts ***!
  \*********************************************************/
/*! exports provided: FoodDinnerItemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDinnerItemPageModule", function() { return FoodDinnerItemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fooddinneritem_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fooddinneritem.page */ "./src/app/fooddinneritem/fooddinneritem.page.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");







let FoodDinnerItemPageModule = class FoodDinnerItemPageModule {
};
FoodDinnerItemPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_6__["IonicImageLoader"]
        ],
        declarations: [_fooddinneritem_page__WEBPACK_IMPORTED_MODULE_5__["FoodDinnerItemPage"]],
        exports: [_fooddinneritem_page__WEBPACK_IMPORTED_MODULE_5__["FoodDinnerItemPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodDinnerItemPageModule);



/***/ }),

/***/ "./src/app/fooddinneritem/fooddinneritem.page.html":
/*!*********************************************************!*\
  !*** ./src/app/fooddinneritem/fooddinneritem.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n          <div class=\"div-img\">\r\n            <!-- <img class=\"img-item\" src=\"{{item.image}}\"> -->\r\n            <img-loader class=\"img-item\" [src]=\"item.image\" backgroundSize=\"cover\" spinner=\"true\" ></img-loader>\r\n          </div>\r\n          <div *ngIf=\"item.promoTitle\" class=\"float-promo\">\r\n              <div>{{item.promoTitle}}</div>\r\n            </div>\r\n          <div class=\"p-l-8\"> \r\n            <div class=\"d-flex\">\r\n              <div class=\"text-catname\">{{item.name}}</div>\r\n              \r\n            </div>\r\n            <div class=\"div-point\">\r\n              <div class=\"d-flex\" *ngIf=\"item.avgPoint else noPoint\" [ngClass]=\"item.avgPoint ? 'p-bottom-12' : ''\">\r\n                  <div class=\"div-badge\">{{item.avgPoint}}</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=9\">Tuyệt vời</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=8 && item.avgPoint <9\">Rất tốt</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=7 && item.avgPoint <8\">Khá tốt</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >=6 && item.avgPoint <7\">Tạm được</div>\r\n                  <div class=\"div-text-point text-point\" *ngIf=\"item.avgPoint >= 5 && item.avgPoint <6\">Không tốt</div>\r\n                  <div class=\"text-recommend text-point\"> |<span class=\"p-left-8\">{{item.numOfReview}} đánh giá</span></div>\r\n      \r\n              </div>\r\n              <ng-template #noPoint>\r\n              </ng-template>\r\n            \r\n            <div class=\"description\">\r\n              {{item.description}}\r\n            </div>\r\n             \r\n              <div class=\"div-price\">\r\n                <div class=\"hot-deal\" *ngIf='item.totalBook24H'>\r\n                  <div>{{item.totalBook24H}} Khách đặt trong 24h qua</div>\r\n                </div>\r\n                <div class=\"text-price\">\r\n                  <div class=\"text-sub-price\">1 tuần chỉ</div>\r\n                  <div>{{item.priceDisplay}} <span class=\"s-text\">đ</span></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n     "

/***/ }),

/***/ "./src/app/fooddinneritem/fooddinneritem.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/fooddinneritem/fooddinneritem.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".p-l-8 {\n  padding-left: 8px;\n}\n\n.p-left-8 {\n  padding-left: 8px;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.div-img {\n  width: 100%;\n  height: 202px;\n  position: relative;\n}\n\n.img-item {\n  height: 202px !important;\n  width: 100% !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n}\n\nimg-loader > img {\n  height: 202px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n\n.no-img-background {\n  background: #bdbdbd;\n}\n\n.float-promo {\n  position: absolute;\n  top: 24px;\n  left: -6px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 12px 0px 13px;\n  z-index: 11;\n}\n\n.float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #851f1c;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-point {\n  position: relative;\n  padding-bottom: 8px;\n}\n\n.div-point .d-flex {\n  display: flex;\n}\n\n.div-point .d-flex .text-recommend {\n  padding-left: 8px;\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .div-badge {\n  width: 32px;\n  height: 17px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .p-bottom-12 {\n  padding-bottom: 12px;\n}\n\n.div-point .description {\n  font-size: 14px;\n  line-height: 21px;\n  color: #000000;\n  letter-spacing: -0.4px;\n  padding-bottom: 8px;\n  text-align: left;\n}\n\n.div-point .div-chef {\n  display: flex;\n}\n\n.div-point .div-chef .chef-avatar .img-chef {\n  width: 48px;\n  height: 48px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 48px;\n}\n\n.div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n}\n\n.div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n\n.div-point .div-chef .chef-desc .text-restanrant-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n  font-weight: 600;\n}\n\n.div-point .div-price {\n  display: flex;\n  width: 100%;\n}\n\n.div-point .div-price .hot-deal {\n  width: 100%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  line-height: 20px;\n  color: #e52822;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.div-point .div-price .text-price {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  text-align: right;\n  font-size: 32px;\n  letter-spacing: -0.92px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-point .div-price .text-price .s-text {\n  font-size: 18px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-point .div-price .text-price .text-sub-price {\n  font-size: 13px;\n  line-height: 18px;\n  color: #4f4f4f;\n  text-align: right;\n  margin-bottom: -6px;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZGRpbm5lcml0ZW0vZm9vZGRpbm5lcml0ZW0ucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kZGlubmVyaXRlbS9mb29kZGlubmVyaXRlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtBQ0FSOztBREVJO0VBQ0ksaUJBQUE7QUNDUjs7QURDSTtFQUNJLGFBQUE7QUNFUjs7QUREUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0daOztBRENRO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0VaOztBREFRO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSwwQkFBQTtBQ0daOztBRERRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ0laOztBREZRO0VBQ0ksbUJBQUE7QUNLWjs7QURIUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNNWjs7QURKUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FDT1o7O0FETFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUNRWjs7QURMUTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUNRWjs7QURQWTtFQUNJLGFBQUE7QUNTaEI7O0FEUGdCO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNTcEI7O0FETlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1FoQjs7QURMWTtFQUNJLGlCQUFBO0FDT2hCOztBREpZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDTWhCOztBREpZO0VBQ0ksb0JBQUE7QUNNaEI7O0FESlk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDTWhCOztBREhZO0VBQ0ksYUFBQTtBQ0toQjs7QURGb0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ0l4Qjs7QUREZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0dwQjs7QUREb0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0d4Qjs7QUREb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0d4Qjs7QUREb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0d4Qjs7QURHWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRGhCOztBREdnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ0RwQjs7QURHZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZwQjs7QURJb0I7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRnhCOztBRElvQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGeEIiLCJmaWxlIjoic3JjL2FwcC9mb29kZGlubmVyaXRlbS9mb29kZGlubmVyaXRlbS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5wLWwtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5wLWxlZnQtOHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuZGl2LXN0YXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICAgICAuZGl2LWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZy1sb2FkZXIgPiBpbWcge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uby1pbWctYmFja2dyb3VuZHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2JkYmRiZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZsb2F0LXByb21ve1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMjRweDtcclxuICAgICAgICAgICAgbGVmdDogLTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDEycHggMHB4IDEzcHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5mbG9hdC1wcm9tbzphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItdG9wOiA2cHggc29saWQgIzg1MWYxYztcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAudGV4dC1jYXRuYW1le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdi1wb2ludHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAuZC1mbGV4e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1yZWNvbW1lbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXYtYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhMGMyNDU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXRleHQtcG9pbnR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRleHQtcG9pbnR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnAtYm90dG9tLTEye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1jaGVme1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgICAgICAuY2hlZi1hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgLmltZy1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0OHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jaGVmLWRlc2N7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuY2hlZi1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNoZWYtb2ZmaWNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXJlc3RhbnJhbnQtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXByaWNle1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5ob3QtZGVhbHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGV4dC1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOTJweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnMtdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0LXN1Yi1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIFxyXG5cclxuICAiLCIucC1sLTgge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnAtbGVmdC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmQtZmxleCAuZGl2LXN0YXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uZGl2LWltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIwMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbWctaXRlbSB7XG4gIGhlaWdodDogMjAycHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuXG5pbWctbG9hZGVyID4gaW1nIHtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubm8taW1nLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xufVxuXG4uZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDEycHggMHB4IDEzcHg7XG4gIHotaW5kZXg6IDExO1xufVxuXG4uZmxvYXQtcHJvbW86YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50ZXh0LWNhdG5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuXG4uZGl2LXBvaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuLmRpdi1wb2ludCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtcG9pbnQgLmQtZmxleCAudGV4dC1yZWNvbW1lbmQge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1wb2ludCAuZGl2LWJhZGdlIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjMjQ1O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXBvaW50IC5kaXYtdGV4dC1wb2ludCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1wb2ludCAudGV4dC1wb2ludCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtcG9pbnQgLnAtYm90dG9tLTEyIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG4uZGl2LXBvaW50IC5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1wb2ludCAuZGl2LWNoZWYge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtYXZhdGFyIC5pbWctY2hlZiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIG9iamVjdC1maXQ6IGZpbGw7XG4gIGJvcmRlci1yYWRpdXM6IDQ4cHg7XG59XG4uZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC5jaGVmLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtcG9pbnQgLmRpdi1jaGVmIC5jaGVmLWRlc2MgLmNoZWYtb2ZmaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAudGV4dC1yZXN0YW5yYW50LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXBvaW50IC5kaXYtcHJpY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtcG9pbnQgLmRpdi1wcmljZSAuaG90LWRlYWwge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZTUyODIyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmRpdi1wb2ludCAuZGl2LXByaWNlIC50ZXh0LXByaWNlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC45MnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmRpdi1wb2ludCAuZGl2LXByaWNlIC50ZXh0LXByaWNlIC5zLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5kaXYtcG9pbnQgLmRpdi1wcmljZSAudGV4dC1wcmljZSAudGV4dC1zdWItcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IC02cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/fooddinneritem/fooddinneritem.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/fooddinneritem/fooddinneritem.page.ts ***!
  \*******************************************************/
/*! exports provided: FoodDinnerItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDinnerItemPage", function() { return FoodDinnerItemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");






let FoodDinnerItemPage = class FoodDinnerItemPage {
    constructor(navCtrl, gf, foodService, imageLoaderConfig) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
        this.imageLoaderConfig = imageLoaderConfig;
        imageLoaderConfig.enableSpinner(false);
        imageLoaderConfig.setConcurrency(10);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], FoodDinnerItemPage.prototype, "item", void 0);
FoodDinnerItemPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fooddinneritem',
        template: __webpack_require__(/*! ./fooddinneritem.page.html */ "./src/app/fooddinneritem/fooddinneritem.page.html"),
        styles: [__webpack_require__(/*! ./fooddinneritem.page.scss */ "./src/app/fooddinneritem/fooddinneritem.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_4__["foodService"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_5__["ImageLoaderConfigService"]])
], FoodDinnerItemPage);



/***/ }),

/***/ "./src/app/foodnotify/foodnotify.module.ts":
/*!*************************************************!*\
  !*** ./src/app/foodnotify/foodnotify.module.ts ***!
  \*************************************************/
/*! exports provided: FoodNotifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodNotifyPageModule", function() { return FoodNotifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodnotify_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodnotify.page */ "./src/app/foodnotify/foodnotify.page.ts");






let FoodNotifyPageModule = class FoodNotifyPageModule {
};
FoodNotifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        declarations: [_foodnotify_page__WEBPACK_IMPORTED_MODULE_5__["FoodNotifyPage"]],
        exports: [_foodnotify_page__WEBPACK_IMPORTED_MODULE_5__["FoodNotifyPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodNotifyPageModule);



/***/ }),

/***/ "./src/app/foodnotify/foodnotify.page.html":
/*!*************************************************!*\
  !*** ./src/app/foodnotify/foodnotify.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodnotify-header\">\r\n    \r\n      <ion-row>\r\n        <ion-col class=\"header-title\"><label>Thông báo</label>\r\n        </ion-col>\r\n    </ion-row>\r\n</ion-header>\r\n<div class=\"foodnotify-content\">\r\n    <div class=\"inbox-content-empty\" *ngIf=\"items.length == 0 && loaddatadone\">\r\n        <div class=\"img-inbox-empty\">\r\n          <div class=\"img-empty\"><img  src=\"../../assets/ic_food/fried.svg\"></div>\r\n        </div>\r\n        <div class=\"text-trip-empty\">\r\n          <label>Hiện chưa có thư mới nào.</label>\r\n        </div>\r\n    </div>\r\n\r\n      <div class=\"inbox-content\" *ngIf=\"!loaddatadone\">\r\n      <ion-row *ngFor=\"let item of itemskeleton\">\r\n          <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\r\n                  <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--inner-padding-end:0;width: 100%;\">\r\n                    <ion-row style=\"width:100%\">\r\n                        <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                            <div>\r\n                              <ion-skeleton-text animated style=\"width:100%;margin-top: 6px;height: 24px;width: 24px;border-radius:24px\"></ion-skeleton-text>\r\n                            </div>\r\n                          </ion-col>\r\n                          <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                            <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                            <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                            <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\r\n                        </ion-col>\r\n                    </ion-row>\r\n                  </ion-item>\r\n        </ion-row>\r\n      </ion-row>\r\n    </div>\r\n    \r\n    <div class=\"inbox-content\" *ngIf=\"items && items.length > 0 && loaddatadone\">\r\n        <ion-row *ngFor=\"let item of items\" [ngClass]=\"items && items.length > 0 && !item.status ? 'item-unread' : '' \">\r\n          <div *ngIf=\"!item.deleted\" style=\"width:100%\">\r\n            <ion-row class=\"cls-border-bottom\">\r\n              <ion-item-sliding>\r\n                    <ion-item style=\"--padding-start:0;--inner-padding-end:0;--background: transparent;--border-style:none\"  (click)=\"updateStatusMessage(item)\">\r\n                      <ion-row style=\"width:100%\">\r\n                          <ion-col size=\"1.2\" style=\"padding: 0\">\r\n                              <div>\r\n                                <img style=\"margin-top: 4px;\" name=\"home\" src=\"./assets/imgs/ic_home.svg\" *ngIf=\" item.notifyAction == 'approve' || item.notifyAction == 'cancel' || item.notifyAction == 'sharereviewofhotel' || item.notifyAction== 'waitingconfirmtopayment' || item.notifyAction == 'paymented' || item.notifyAction == 'bookingbegoingroom'\" >\r\n                                <img style=\"margin-top: 4px;\" name=\"bus\" src=\"./assets/imgs/ic_bus2.svg\" *ngIf=\"item.notifyType == 'bookingbegoingcombotransfer'\" >\r\n                                <img style=\"margin-top: 4px;\" name=\"message\" src=\"./assets/imgs/ic_message.svg\" *ngIf=\"item.notifyAction == 'blogofmytrip'\" >\r\n                                <img style=\"margin-top: 4px;\" name=\"paper\" src=\"./assets/imgs/ic_paper.svg\" *ngIf=\"item.notifyAction == 'bookingbegoingcombofly' || item.notifyAction == 'flychangeinfo'\" >\r\n                              </div>\r\n                            </ion-col>\r\n                            <ion-col size=\"10.8\" style=\"padding: 0\">\r\n                              <div><ion-label class=\"inbox-title\">{{item.title}}</ion-label></div>\r\n                              <div><ion-label [ngClass]=\"!item.status ? 'inbox-message hidden-text' : 'inbox-message readed-text' \">{{item.message}}</ion-label></div>\r\n                              <div><ion-label class=\"inbox-date\">{{item.date}}</ion-label></div>\r\n                          </ion-col>\r\n                      </ion-row>\r\n                    </ion-item>\r\n                    <ion-item-options side=\"end\">\r\n                      <ion-item-option  side=\"end\" color=\"danger\" (click)=\"deleteNotifi(item)\">\r\n                        Xóa\r\n                      </ion-item-option>\r\n                    </ion-item-options>\r\n                   \r\n              </ion-item-sliding>\r\n          </ion-row>\r\n          </div>\r\n        </ion-row>\r\n    </div>\r\n</div>\r\n    <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\" *ngIf=\"!loadend\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n"

/***/ }),

/***/ "./src/app/foodnotify/foodnotify.page.scss":
/*!*************************************************!*\
  !*** ./src/app/foodnotify/foodnotify.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodnotify-header {\n  position: fixed;\n}\n\n.header-title {\n  padding: 10px;\n  text-align: center;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-trip-empty {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.img-inbox-empty {\n  text-align: center;\n}\n\n.foodnotify-content {\n  height: auto;\n  padding: calc( env(safe-area-inset-bottom) + 80px) 16px;\n  padding-bottom: 110px;\n  position: -webkit-sticky;\n}\n\n.cls-icon {\n  background-color: #003c71;\n  border-radius: 20px;\n  width: 24px;\n  height: 24px;\n  text-align: center;\n}\n\n.cls-row-content {\n  padding: 0px 16px 16px 16px;\n}\n\n.inbox-content-empty {\n  padding: 16px;\n}\n\n.cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n\n.inbox-title {\n  font-size: 14px;\n  font-weight: bold;\n  white-space: normal;\n}\n\n.inbox-message {\n  font-size: 14px;\n  line-height: 18px;\n  letter-spacing: -0.4px;\n}\n\n.inbox-date {\n  font-size: 12px;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.item-unread {\n  background-color: rgba(0, 60, 113, 0.1);\n}\n\n.inbox-content:first-child {\n  padding-top: 4px;\n}\n\n.readed-text {\n  white-space: normal;\n}\n\n.img-empty {\n  padding-top: 96px;\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZG5vdGlmeS9mb29kbm90aWZ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZG5vdGlmeS9mb29kbm90aWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGVBQUE7QUNBRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURHTTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBVjs7QURFUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNDWjs7QURDTTtFQUNFLGtCQUFBO0FDRVI7O0FEQUU7RUFFRSxZQUFBO0VBQ0EsdURBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDRUo7O0FEQUk7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dOOztBRERJO0VBQ0UsMkJBQUE7QUNJTjs7QURGSTtFQUNFLGFBQUE7QUNLTjs7QURIRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FDTUo7O0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ09KOztBREpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNPSjs7QURKRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNPSjs7QURKRTtFQUNFLHVDQUFBO0FDT0o7O0FESkU7RUFDRSxnQkFBQTtBQ09KOztBRExFO0VBQ0UsbUJBQUE7QUNRSjs7QURMRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL2Zvb2Rub3RpZnkvZm9vZG5vdGlmeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvb2Rub3RpZnktaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG4uaGVhZGVyLXRpdGxle1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmhlYWRlci1hcnJvd3tcclxuICBtYXJnaW46IDNweCAxMXB4O1xyXG59XHJcblxyXG5cclxuICAgICAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH0gIFxyXG4gICAgICAgIC50ZXh0LXRyaXAtZW1wdHl7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctaW5ib3gtZW1wdHl7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgLmZvb2Rub3RpZnktY29udGVudFxyXG4gIHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpIDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XHJcbiAgICBwb3NpdGlvbjogLXdlYmtpdC1zdGlja3k7XHJcbiAgfVxyXG4gICAgLmNscy1pY29ue1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2xzLXJvdy1jb250ZW50e1xyXG4gICAgICBwYWRkaW5nOiAwcHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuaW5ib3gtY29udGVudC1lbXB0eXtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxuICAuY2xzLWJvcmRlci1ib3R0b217XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcclxuICB9XHJcbiAgLmluYm94LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBcclxuICAuaW5ib3gtbWVzc2FnZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICB9XHJcbiAgXHJcbiAgLmluYm94LWRhdGV7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICBcclxuICAuaXRlbS11bnJlYWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxke1xyXG4gICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLnJlYWRlZC10ZXh0e1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLmltZy1lbXB0eXtcclxuICAgIHBhZGRpbmctdG9wOiA5NnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbn0iLCIuZm9vZG5vdGlmeS1oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDNweCAxMXB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4udGV4dC10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uaW1nLWluYm94LWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9vZG5vdGlmeS1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyA4MHB4KSAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTEwcHg7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbn1cblxuLmNscy1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM2M3MTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xzLXJvdy1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uaW5ib3gtY29udGVudC1lbXB0eSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5jbHMtYm9yZGVyLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbn1cblxuLmluYm94LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmluYm94LW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uaW5ib3gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uaXRlbS11bnJlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDYwLCAxMTMsIDAuMSk7XG59XG5cbi5pbmJveC1jb250ZW50OmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLnJlYWRlZC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmltZy1lbXB0eSB7XG4gIHBhZGRpbmctdG9wOiA5NnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodnotify/foodnotify.page.ts":
/*!***********************************************!*\
  !*** ./src/app/foodnotify/foodnotify.page.ts ***!
  \***********************************************/
/*! exports provided: FoodNotifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodNotifyPage", function() { return FoodNotifyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/badge/ngx */ "./node_modules/@ionic-native/badge/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");











let FoodNotifyPage = class FoodNotifyPage {
    constructor(navCtrl, gf, foodService, platform, badge, storage, zone, toastCtrl, valueGlobal, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
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
    }
    ngOnInit() {
        this.foodService.menuFooterClick.pipe().subscribe(data => {
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/GetNotificationByUser?pageIndex=' + se.pageIndex + '&pageSize=' + se.pageSize,
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body && body != "[]") {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                if (data && data.length > 0) {
                                    data.forEach(element => {
                                        if (element.notifyType == "food") {
                                            let arrdate = moment__WEBPACK_IMPORTED_MODULE_9__(element.created).format('DD/MM/YYYY/HH/mm').split('/');
                                            let d = new Date(Number(arrdate[2]), Number(arrdate[1]) - 1, Number(arrdate[0]), Number(arrdate[3]), Number(arrdate[4]));
                                            let today = new Date();
                                            if (moment__WEBPACK_IMPORTED_MODULE_9__(today).diff(d, 'hours') <= 24) {
                                                let diffhours = moment__WEBPACK_IMPORTED_MODULE_9__(today).diff(d, 'hours');
                                                element.date = moment__WEBPACK_IMPORTED_MODULE_9__(today).diff(d, 'hours') + " giờ trước";
                                                if (diffhours == 0) {
                                                    element.date = moment__WEBPACK_IMPORTED_MODULE_9__(today).diff(d, 'minutes') + " phút trước";
                                                }
                                            }
                                            else {
                                                element.date = moment__WEBPACK_IMPORTED_MODULE_9__(element.created).format('DD/MM/YYYY');
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
                                    let countNoti = se.items.filter(item => { return !item.status; }).length;
                                    se.badge.set(countNoti);
                                    se.valueGlobal.countNotifi = countNoti;
                                    se.sortNotifi(se.items);
                                    se.loaddatadone = true;
                                }
                            });
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
                if (moment__WEBPACK_IMPORTED_MODULE_9__(a['created']).diff(moment__WEBPACK_IMPORTED_MODULE_9__(b['created']), 'minutes') <= 0) {
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/UpdateStatusNotificationOfUser',
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
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/DeleteNotificationOfUser',
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
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "inbox";
                        error.func = "loadUserNotification";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    if (error) {
                        error.page = "tab4";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
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
FoodNotifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-foodnotify',
        template: __webpack_require__(/*! ./foodnotify.page.html */ "./src/app/foodnotify/foodnotify.page.html"),
        styles: [__webpack_require__(/*! ./foodnotify.page.scss */ "./src/app/foodnotify/foodnotify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_badge_ngx__WEBPACK_IMPORTED_MODULE_6__["Badge"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]])
], FoodNotifyPage);



/***/ }),

/***/ "./src/app/homefood/homefood.module.ts":
/*!*********************************************!*\
  !*** ./src/app/homefood/homefood.module.ts ***!
  \*********************************************/
/*! exports provided: HomefoodPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefoodPageModule", function() { return HomefoodPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _homefood_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homefood.page */ "./src/app/homefood/homefood.page.ts");
/* harmony import */ var _fooditem_fooditem_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fooditem/fooditem.module */ "./src/app/fooditem/fooditem.module.ts");
/* harmony import */ var _fooddinneritem_fooddinneritem_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fooddinneritem/fooddinneritem.module */ "./src/app/fooddinneritem/fooddinneritem.module.ts");
/* harmony import */ var _foodmenufooter_foodmenufooter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../foodmenufooter/foodmenufooter.module */ "./src/app/foodmenufooter/foodmenufooter.module.ts");
/* harmony import */ var _foodaccount_foodaccount_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../foodaccount/foodaccount.module */ "./src/app/foodaccount/foodaccount.module.ts");
/* harmony import */ var _foodnotify_foodnotify_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../foodnotify/foodnotify.module */ "./src/app/foodnotify/foodnotify.module.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _order_order_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../order/order.module */ "./src/app/order/order.module.ts");
/* harmony import */ var _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bizTravel/booking/booking.module */ "./src/app/bizTravel/booking/booking.module.ts");















let HomefoodPageModule = class HomefoodPageModule {
};
HomefoodPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _homefood_page__WEBPACK_IMPORTED_MODULE_6__["HomefoodPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _homefood_page__WEBPACK_IMPORTED_MODULE_6__["HomefoodPage"]
                }
            ]),
            _fooditem_fooditem_module__WEBPACK_IMPORTED_MODULE_7__["FoodItemPageModule"],
            _foodmenufooter_foodmenufooter_module__WEBPACK_IMPORTED_MODULE_9__["FoodMenuFooterPageModule"],
            _foodaccount_foodaccount_module__WEBPACK_IMPORTED_MODULE_10__["FoodAccountPageModule"],
            _foodnotify_foodnotify_module__WEBPACK_IMPORTED_MODULE_11__["FoodNotifyPageModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_12__["IonicImageLoader"],
            _fooddinneritem_fooddinneritem_module__WEBPACK_IMPORTED_MODULE_8__["FoodDinnerItemPageModule"],
            _order_order_module__WEBPACK_IMPORTED_MODULE_13__["OrderPageModule"],
            _bizTravel_booking_booking_module__WEBPACK_IMPORTED_MODULE_14__["BookingPageModule"]
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomefoodPageModule);



/***/ }),

/***/ "./src/app/homefood/homefood.page.html":
/*!*********************************************!*\
  !*** ./src/app/homefood/homefood.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"flightpage-header homefoodheader\" >\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          \n            <div class=\"div-slide-food\">\n              <div class=\"swiper-food\">\n                Bữa trưa\n                <!-- <div class=\"div-lunch\" (click)=\"setActiveFoodTab(1)\">Bữa trưa</div>\n                <div class=\"div-diner\" (click)=\"setActiveFoodTab(2)\">Bữa tối</div>\n                <div class=\"active-mark-food left-50\"></div> -->\n              </div>\n             \n            </div>\n        </div>\n        <div class=\"div-icon-cart text-center\">\n          <img class=\"img-cart\" src=\"../../assets/ic_food/cart_black.svg\" (click)=\"showCart()\">\n          <ion-badge *ngIf=\"countcart >0\" color=\"danger\" class=\"cls-badge-cart\">{{countcart}}</ion-badge>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n  \n</ion-header>\n<ion-content>\n  <div class=\"div-home cls-tab-visible\">\n    \n    <div class=\"div-content div-content-lunch cls-tab-visible\">\n      <div class=\"div-week-period\"> \n        <div [ngClass] = \"!activeWeek ? 'div-current-week active-week' : 'div-current-week'\" *ngIf=\"!activeWeek else divhidetextweek\" (click)=\"changeWeek(1)\">\n            <div class=\" d-flex\">\n              <div class=\"text-week-title\">{{weekmenutitle}}</div>\n              <div class=\"text-week-title-date\">{{weekmenutitle1}}</div>\n              <div class=\"text-arrow v-align-center\"><img class=\"img-arrow\" src=\"../../assets/ic_food/ic_arrow_tealish.svg\"></div>\n              <div class=\"text-week-title-date\">{{weekmenutitle2}}</div>\n            </div>\n        </div>\n        <ng-template #divhidetextweek>\n          <div class = \"div-current-week\" (click)=\"changeWeek(0)\">\n            <div class=\"text-week-title text-left\">Tuần này</div>\n          </div>\n        </ng-template>\n        <div class=\"div-split-week\"></div>\n        <div [ngClass] = \"activeWeek ? 'div-next-week active-week m-left-17' : 'div-next-week'\" *ngIf=\"activeWeek else divhidetextnextweek\" (click)=\"changeWeek(0)\">\n          <div class=\" d-flex\">\n            <div class=\"text-week-title\">{{nextweekmenutitle}}</div>\n            <div class=\"text-week-title-date\">{{nextweekmenutitle1}}</div>\n            <div class=\"text-arrow v-align-center\"><img class=\"img-arrow\" src=\"../../assets/ic_food/ic_arrow_tealish.svg\"></div>\n            <div class=\"text-week-title-date\">{{nextweekmenutitle2}}</div>\n          </div>\n        </div>\n        <ng-template #divhidetextnextweek>\n          <div class = \"div-next-week\" (click)=\"changeWeek(1)\"><div class=\"text-week-title text-right\">Tuần sau</div></div>\n        </ng-template>\n      </div>\n  \n      <div class=\"text-filter\">\n        Lựa chọn bữa trưa của bạn\n      </div>\n      <div class=\"div-wrap-filter\">\n          <div class=\"div-filter\">\n  \n            <div class=\"div-filter-item \" (click)=\"filterClick(1)\" *ngIf=\"!itemViBacClick && !itemViTrungClick && !itemViNamClick && !itemCollectionClick\">\n              <div class=\"label-filter min-width-112\">Phong vị<span><img class=\"img-down\" src=\"../../assets/ic_food/ic_down.svg\"></span></div>\n            </div>\n  \n            <div class=\"div-filter-item\" *ngIf=\"itemViBacClick\">\n                <div class=\"label-filter min-width-100 labelvibac\" (click)=\"filterClick(1)\">Vị Bắc</div>\n                <span class=\"div-close\" (click)=\"removeFilter(1)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n              </div>\n                <div class=\"div-filter-item\" *ngIf=\"itemViTrungClick\" >\n                  <div class=\"label-filter min-width-100 labelvitrung\" (click)=\"filterClick(1)\">Vị Trung</div>\n                  <span class=\"div-close\" (click)=\"removeFilter(2)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                </div>\n                  <div class=\"div-filter-item\" *ngIf=\"itemViNamClick\">\n                    <div class=\"label-filter min-width-100 labelvinam\" (click)=\"filterClick(1)\">Vị Nam</div>\n                    <span class=\"div-close\" (click)=\"removeFilter(3)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                  </div>\n                  <div class=\"div-filter-item\" *ngIf=\"itemCollectionClick\">\n                    <div class=\"label-filter min-width-115 labelcollection\" (click)=\"filterClick(1)\">Collection</div>\n                    <span class=\"div-close\" (click)=\"removeFilter(-2)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                  </div>\n  \n            <div class=\"div-filter-item \" (click)=\"filterClick(2)\" *ngIf=\"!itemThanhDamClick && !itemDamDaClick\">\n                <div class=\"label-filter min-width-112\">Cách nấu<span><img class=\"img-down\" src=\"../../assets/ic_food/ic_down.svg\"></span></div>\n              </div>\n  \n              <div class=\"div-filter-item\"  *ngIf=\"itemThanhDamClick\">\n                  <div class=\"label-filter min-width-125 labelthanhdam\" (click)=\"filterClick(2)\">Thanh đạm</div>\n                  <span class=\"div-close\" (click)=\"removeFilter(4)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                </div>\n                <div class=\"div-filter-item\" *ngIf=\"itemDamDaClick\">\n                    <div class=\"label-filter min-width-100 labeldamda\" (click)=\"filterClick(2)\">Đậm đà</div>\n                    <span class=\"div-close\" (click)=\"removeFilter(5)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                  </div>\n  \n              <div class=\"div-filter-item \" (click)=\"filterClick(3)\" *ngIf=\"!item199Click && !item299Click && !item399Click\">\n                  <div class=\"label-filter min-width-100\">Giá tiền<span><img class=\"img-down\" src=\"../../assets/ic_food/ic_down.svg\"></span></div>\n                </div>\n  \n                      <div class=\"div-filter-item\" *ngIf=\"item199Click\">\n                          <div class=\"label-filter min-width-150 label199\" (click)=\"filterClick(3)\">225.000 đ/tuần</div>\n                          <span class=\"div-close\" (click)=\"removeFilter(6)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                        </div>\n                        <div class=\"div-filter-item\" *ngIf=\"item299Click\">\n                            <div class=\"label-filter min-width-150 label299\" (click)=\"filterClick(3)\">325.000 đ/tuần</div>\n                            <span class=\"div-close\" (click)=\"removeFilter(7)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                          </div>\n                          <div class=\"div-filter-item\" *ngIf=\"item399Click\">\n                              <div class=\"label-filter min-width-150 label399\" (click)=\"filterClick(3)\">425.000 đ/tuần</div>\n                              <span class=\"div-close\" (click)=\"removeFilter(8)\"><img class=\"img-close\" src=\"../../assets/ic_food/ic_close_w.svg\"></span>\n                            </div>\n                               \n            </div>\n      </div>\n  \n  \n      <div class=\"div-wraper-combo\">\n        <div *ngIf=\"!activeWeek else combonextweek\">\n          <div class=\"div-item-combo\" *ngFor=\"let item of foods; let idx = index\" (click)=\"itemComboClick(item, 0)\">\n            <app-fooditem [item]=\"item\"></app-fooditem>\n          </div>\n        </div>\n        <ng-template #combonextweek>\n          <div class=\"div-item-combo\" *ngFor=\"let itemnextweek of foodsnextweek; let idx = index\" (click)=\"itemComboClick(itemnextweek, 1)\">\n            <app-fooditem [item]=\"itemnextweek\"></app-fooditem>\n          </div>\n        </ng-template>\n        \n      </div>\n    \n  <!-- Vùng trả góp -->\n  <div class=\"div-installment\">\n    <div class=\"installment-content\">\n      <div class=\"text-installment\">\n        <ion-label>Trả góp chỉ từ <span class=\"text-price\">{{installmentPriceStr}} </span><span class=\"text-price-sub\">đ</span>/tháng qua thẻ tín dụng Visa, Mastercard, JCB với đơn hàng trên 3 triệu</ion-label>\n      </div>\n      <div class=\"text-see-detail\"><span class=\"installment-detail\" (click)=\"showInstallmentDetail()\">Xem chi tiết <img\n          src=\"./assets/imgs/vector.svg\"></span></div>\n    </div>\n  </div>\n  </div>\n  <!-- <div class=\"div-content div-content-diner cls-tab-visible\">\n    <div class=\"div-week-period m-bottom-24\"> \n      <div [ngClass] = \"!activeWeekDinner ? 'div-current-week active-week' : 'div-current-week'\" *ngIf=\"!activeWeekDinner else divhidetextweekdinner\" (click)=\"changeWeekDinner(0)\">\n          <div class=\" d-flex\">\n            <div class=\"text-week-title\">{{weekmenutitle}}</div>\n            <div class=\"text-week-title-date\">{{weekmenutitle1}}</div>\n            <div class=\"text-arrow v-align-center\"><img class=\"img-arrow\" src=\"../../assets/ic_food/ic_arrow_tealish.svg\"></div>\n            <div class=\"text-week-title-date\">{{weekmenutitle2}}</div>\n          </div>\n      </div>\n      <ng-template #divhidetextweekdinner>\n        <div class = \"div-current-week\" (click)=\"changeWeekDinner(0)\">\n          <div class=\"text-week-title text-left\">Tuần này</div>\n        </div>\n      </ng-template>\n      <div class=\"div-split-week\"></div>\n      <div [ngClass] = \"activeWeekDinner ? 'div-next-week active-week m-left-17' : 'div-next-week'\" *ngIf=\"activeWeekDinner else divhidetextnextweekdinner\" (click)=\"changeWeekDinner(1)\">\n        <div class=\" d-flex\">\n          <div class=\"text-week-title\">{{nextweekmenutitle}}</div>\n          <div class=\"text-week-title-date\">{{nextweekmenutitle1}}</div>\n          <div class=\"text-arrow v-align-center\"><img class=\"img-arrow\" src=\"../../assets/ic_food/ic_arrow_tealish.svg\"></div>\n          <div class=\"text-week-title-date\">{{nextweekmenutitle2}}</div>\n        </div>\n      </div>\n      <ng-template #divhidetextnextweekdinner>\n        <div class = \"div-next-week\" (click)=\"changeWeekDinner(1)\"><div class=\"text-week-title text-right\">Tuần sau</div></div>\n      </ng-template>\n    </div>\n  \n    <div class=\"div-wraper-combo leftoffset-6\">\n  \n        <ion-slides (ionSlideDidChange)=\"slidechangedinner()\" #myFoodSliderDinner [options]=\"slideOpts\" class=\"food-slider\" >\n          <ion-slide style=\"display: block;margin-right: 10px;margin-left: 6px;\" class=\"slide-lunch-currentweek main-color\">\n            <div class=\"list-menu\" *ngIf=\"diners && diners.length >0 \">\n              \n                <div class=\"div-group-damda\">\n                  <div class=\"title-text\">Đậm đà nhiều đạm</div>\n                  <div class=\"sub-title-text m-bottom-16\">Giàu năng lượng, cân bằng dinh dưỡng</div>\n\n                  <div class=\"div-item-combo width-98\"  *ngFor=\"let itemDiner of diners; let idx = index\" (click)=\"itemDinerClick(itemDiner)\">\n                    <app-fooddinneritem [item]=\"itemDiner\" *ngIf=\"itemDiner.groupId == 1\"></app-fooddinneritem>\n                  </div>\n                    \n                </div>\n\n                  <div class=\"div-group-thanhdam p-top-40\">\n                    <div class=\"title-text\">Thanh đạm nhiều rau</div>\n                    <div class=\"sub-title-text\">Giàu chất xơ, cơ thể khoẻ đẹp</div>\n\n                    <div class=\"div-item-combo width-98\"  *ngFor=\"let itemDiner of diners; let idx = index\" (click)=\"itemDinerClick(itemDiner)\">\n                      <app-fooddinneritem [item]=\"itemDiner\" *ngIf=\"itemDiner.groupId == 0\"></app-fooddinneritem>\n                    </div>\n                  </div>\n              \n            </div>\n            \n          </ion-slide>\n          <ion-slide style=\"display: block;\" class=\"slide-lunch-nextweek sub-color\" >\n            <div class=\"list-menu\" *ngIf=\"dinersnextweek && dinersnextweek.length >0 \">\n\n              <div class=\"div-group-damda\">\n                <div class=\"title-text\">Đậm đà nhiều đạm</div>\n                <div class=\"sub-title-text m-bottom-16\">Giàu năng lượng, cân bằng dinh dưỡng</div>\n\n                <div class=\"div-item-combo width-98\"  *ngFor=\"let itemDinerNextWeek of dinersnextweek; let idx = index\" (click)=\"itemDinerClick(itemDinerNextWeek)\">\n                  <app-fooddinneritem [item]=\"itemDinerNextWeek\" *ngIf=\"itemDinerNextWeek.groupId == 1\"></app-fooddinneritem>\n                </div>\n                  \n              </div>\n\n                <div class=\"div-group-thanhdam p-top-40\">\n                  <div class=\"title-text\">Thanh đạm nhiều rau</div>\n                  <div class=\"sub-title-text\">Giàu chất xơ, cơ thể khoẻ đẹp</div>\n\n                  <div class=\"div-item-combo width-98\"  *ngFor=\"let itemDinerNextWeek of dinersnextweek; let idx = index\" (click)=\"itemDinerClick(itemDinerNextWeek)\">\n                    <app-fooddinneritem [item]=\"itemDinerNextWeek\" *ngIf=\"itemDinerNextWeek.groupId == 0\"></app-fooddinneritem>\n                  </div>\n                </div>\n            </div>\n            \n          </ion-slide>\n      </ion-slides>\n    </div>\n  </div> -->\n  \n  \n  </div>\n  \n  <div class=\"div-myorder cls-tab-disabled\">\n    <!-- <app-foodmyorder></app-foodmyorder> -->\n    <app-order *ngIf=\"!isBizAccount else bookings\"></app-order>\n    <ng-template #bookings>\n        <app-booking></app-booking>\n    </ng-template>\n  </div>\n  <div class=\"div-notify cls-tab-disabled\">\n    <app-foodnotify></app-foodnotify>\n  </div>\n  <div class=\"div-account cls-tab-disabled\">\n    <app-foodaccount></app-foodaccount>\n  </div>\n</ion-content>\n\n\n\n<ion-footer>\n  <app-foodmenufooter></app-foodmenufooter>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/homefood/homefood.page.scss":
/*!*********************************************!*\
  !*** ./src/app/homefood/homefood.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-header-title {\n  z-index: 1 !important;\n}\n\n.div-icon-cart {\n  position: absolute;\n  right: 0;\n  top: 4px;\n  padding: 16px;\n  z-index: 9;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-goback {\n  z-index: 2 !important;\n}\n\n.homefood-header {\n  height: 48px;\n  position: fixed;\n  padding-top: calc(env(safe-area-inset-top) + 20px);\n}\n\n.homefood-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n\n.homefood-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n\n.homefood-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 40px;\n}\n\n.homefood-header .img-cart {\n  width: 20px;\n}\n\n.homefood-header .btn-header {\n  position: absolute;\n}\n\n.homefood-header .r-60 {\n  right: 60px;\n}\n\n.homefood-header .r-4 {\n  right: 4px;\n}\n\n.p-top-40 {\n  padding-top: 40px;\n}\n\n.p-top-24 {\n  padding-top: 24px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n}\n\n.cls-visible {\n  visibility: visible;\n  transition: visibility 2s, opacity 0.5s linear;\n  opacity: 1;\n}\n\n.cls-disabled {\n  visibility: hidden;\n  height: 0px;\n  opacity: 0;\n  transition: visibility 2s, opacity 0.5s linear;\n  z-index: 0;\n}\n\n.cls-tab-visible {\n  visibility: visible;\n  transition: visibility 2s, opacity 0.5s linear;\n  opacity: 1;\n}\n\n.cls-tab-disabled {\n  visibility: hidden;\n  height: 0px;\n  opacity: 0;\n  transition: visibility 2s, opacity 0.5s linear;\n  z-index: 0;\n  display: none;\n}\n\n.cls-badge-cart {\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n  z-index: 999;\n  position: absolute;\n  top: 6px;\n  right: 6px;\n  padding: 1px;\n}\n\n.cls-badge-cart-header {\n  color: #fff;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n  z-index: 999;\n  position: absolute;\n  top: 0;\n  right: 4px;\n  padding: 1px;\n}\n\n.div-background {\n  color: #fff;\n  height: calc( env(safe-area-inset-top) + 380px);\n  z-index: 9;\n}\n\n.div-background .img-background {\n  width: 100% !important;\n  height: calc( env(safe-area-inset-top) + 380px) !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n  background-position-x: -20px;\n}\n\n.div-background .img-background-dinner {\n  width: 105% !important;\n  height: calc( env(safe-area-inset-top) + 380px) !important;\n  -o-object-fit: cover;\n     object-fit: cover;\n  position: absolute;\n  z-index: -1;\n  background-position-x: -20px;\n  background-position-y: -170px;\n}\n\n.div-background .img-logo {\n  width: 76px;\n  margin-top: calc(env(safe-area-inset-top) + 22px);\n  z-index: 11;\n  position: relative;\n}\n\n.div-background .main-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 18px;\n}\n\n.div-background .main-food-title {\n  margin-top: 154px;\n  font-size: 35px;\n  font-weight: bold;\n  line-height: 40px;\n  text-align: center;\n}\n\n.div-background .sub-title {\n  margin-top: 10px;\n  font-size: 16px;\n  line-height: 22.5px;\n  text-align: center;\n}\n\n.div-background .text-center {\n  text-align: center;\n  position: relative;\n}\n\n.div-background .text-center .img-cart {\n  position: absolute;\n  margin-top: 21px;\n  right: 0;\n  padding: 16px;\n  z-index: 11;\n}\n\n.div-background .cls-mark {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 430px;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: -1;\n}\n\n.div-background .d-flex {\n  display: flex;\n}\n\n.div-background .desc-section {\n  margin-top: 130px;\n  margin-bottom: 4px;\n}\n\n.div-background .desc-section .desc-row {\n  display: flex;\n  margin-top: 16px;\n}\n\n.div-background .desc-section .desc-row .desc-icon {\n  width: 32px;\n  height: 24px;\n}\n\n.div-background .desc-section .desc-row .desc-icon .img-desc {\n  width: 24px;\n  height: 24px;\n}\n\n.div-background .desc-section .desc-row .desc-text {\n  padding-top: 4px;\n}\n\n.div-background .text-title {\n  font-size: 28px;\n  line-height: 27px;\n  font-weight: 600;\n  text-align: center;\n  color: #ffffff;\n}\n\n.div-wrap-filter {\n  height: 48px;\n  position: relative;\n  margin-bottom: 16px;\n  margin-right: 0;\n  margin-right: -16px;\n}\n\n.div-wrap-filter .div-filter {\n  height: 100%;\n  margin-right: -16px;\n  overflow-x: auto;\n  margin-bottom: 16px;\n  display: flex;\n  min-height: 50px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n}\n\n.div-wrap-filter .div-filter .m-l-20 {\n  margin-left: 20px !important;\n}\n\n.div-wrap-filter .div-filter .div-filter-item {\n  margin-left: 8px;\n  align-self: center;\n  position: relative;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .label-filter {\n  white-space: nowrap;\n  background: #26bed6;\n  padding: 10px 12px;\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #ffffff;\n  border-radius: 30px;\n  border: solid 0.5px #26bed6;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-90 {\n  min-width: 90px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-100 {\n  min-width: 100px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-112 {\n  min-width: 112px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-115 {\n  min-width: 115px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-125 {\n  min-width: 125px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .min-width-150 {\n  min-width: 150px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .img-down {\n  padding-left: 10px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item .div-close {\n  position: absolute;\n  height: 36px;\n  top: 2px;\n  right: 2px;\n  padding: 10px;\n}\n\n.div-wrap-filter .div-filter .div-filter-item:first-child {\n  margin-left: 0px !important;\n}\n\n.div-wrap-filter .div-filter .div-filter-item:last-child {\n  margin-right: 0px !important;\n}\n\n.selected {\n  background: #26bed6 !important;\n  color: #fff !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.p-top-3 {\n  padding-top: 3px;\n}\n\n.text-week-menu, .text-timeexpired {\n  font-size: 14px;\n  color: #ffffff;\n  line-height: 24px;\n  justify-content: center;\n  letter-spacing: -0.48px;\n  font-weight: normal;\n  text-align: center;\n}\n\n.text-week-menu .text-arrow, .text-timeexpired .text-arrow {\n  padding: 0 10px;\n}\n\n.text-week-menu .text-arrow .img-arrow, .text-timeexpired .text-arrow .img-arrow {\n  width: 14px;\n  padding-top: 2px;\n}\n\n.text-filter {\n  font-size: 16px;\n  color: #000000;\n  line-height: 24px;\n  letter-spacing: -0.48px;\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n\n.div-installment {\n  background-color: #f2f2f2;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 80px);\n}\n\n.div-installment .installment-content {\n  background: #eaf0e7;\n  border-left: solid 3px #ff9500;\n}\n\n.div-installment .installment-content .text-installment {\n  padding: 7px 0px 6px 12px;\n  color: #003c71;\n  letter-spacing: -0.6px;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.div-installment .installment-content .text-installment-detail {\n  padding: 0px 24px 6px 12px;\n  color: #003c71;\n}\n\n.div-installment .installment-content .installment-detail {\n  color: #26bed6;\n  padding: 16px 4px;\n}\n\n.div-installment .installment-content .text-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.div-installment .installment-content .text-price-sub {\n  color: #26bed6;\n}\n\n.div-installment .installment-content .text-see-detail {\n  padding-left: 8px;\n  letter-spacing: -0.6px;\n  font-size: 14px;\n  line-height: 21px;\n}\n\n.m-left-17 {\n  margin-left: 10px;\n}\n\n.div-content-diner {\n  padding-top: 20px;\n}\n\n.div-content {\n  padding: 16px;\n  padding-top: 0;\n}\n\n.div-content .div-wraper-combo.leftoffset-6 {\n  margin-left: -6px;\n}\n\n.div-content .text-right {\n  text-align: right;\n  padding-right: 0 !important;\n  color: #828282 !important;\n}\n\n.div-content .text-left {\n  text-align: left;\n  padding-right: 0 !important;\n  color: #828282 !important;\n}\n\n.div-content .div-week-period {\n  display: flex;\n  margin-top: 20px;\n  margin-bottom: 16px;\n  padding: 8px 16px 7px 16px;\n  height: 42px;\n  border-radius: 4px;\n  background-color: rgba(242, 242, 242, 0.4);\n}\n\n.div-content .div-week-period .div-split-week {\n  background: #ffffff;\n  width: 4px;\n  margin: -8px 8px -8px 0px;\n}\n\n.div-content .div-week-period .div-current-week, .div-content .div-week-period .div-next-week {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #828282;\n  width: 25%;\n}\n\n.div-content .div-week-period .div-current-week .text-week-title, .div-content .div-week-period .div-next-week .text-week-title {\n  color: #26bed6;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  padding-right: 10px;\n  padding-top: 5px;\n}\n\n.div-content .div-week-period .div-current-week .text-week-title-date, .div-content .div-week-period .div-next-week .text-week-title-date {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5 !important;\n  letter-spacing: -0.51px !important;\n  color: #26bed6 !important;\n}\n\n.div-content .div-week-period .active-week {\n  width: 75% !important;\n}\n\n.div-content .div-week-period .text-arrow {\n  padding: 0 10px;\n}\n\n.div-content .div-week-period .text-arrow .img-arrow {\n  width: 14px;\n  padding-top: 2px;\n}\n\n.div-content .div-wraper-combo .list-menu {\n  padding-bottom: 80px;\n}\n\n.div-content .div-wraper-combo .list-menu .title-text {\n  height: 27px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #222222;\n  text-align: left;\n}\n\n.div-content .div-wraper-combo .list-menu .sub-title-text {\n  height: 15px;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n  text-align: left;\n}\n\n.div-content .div-wraper-combo .p-l-8 {\n  padding-left: 8px;\n  min-height: 153px;\n}\n\n.div-content .div-wraper-combo .d-flex {\n  display: flex;\n}\n\n.div-content .div-wraper-combo .d-flex .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n}\n\n.div-content .div-wraper-combo .width-98 {\n  width: 98% !important;\n}\n\n.div-content .div-wraper-combo .div-item-combo {\n  position: relative;\n  margin: 0;\n  margin-bottom: 24px;\n  border-radius: 4px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);\n  width: 100%;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-img {\n  width: 100%;\n  height: 202px;\n  position: relative;\n}\n\n.div-content .div-wraper-combo .div-item-combo .img-item {\n  height: 202px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px 4px 0 0;\n  position: absolute;\n}\n\n.div-content .div-wraper-combo .div-item-combo .float-promo {\n  position: absolute;\n  top: 24px;\n  left: -6px;\n  background-color: #e52822;\n  color: #fff;\n  font-size: 12px;\n  max-width: 95%;\n  height: 22px;\n  padding: 3px 12px 0px 13px;\n  z-index: 11;\n}\n\n.div-content .div-wraper-combo .div-item-combo .float-promo:after {\n  content: \" \";\n  position: absolute;\n  left: 0px;\n  top: 22px;\n  border-top: 6px solid #851f1c;\n  border-left: 6px solid transparent;\n  border-bottom: none;\n}\n\n.div-content .div-wraper-combo .div-item-combo .text-catname {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  margin: 8px 0;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point {\n  position: relative;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .d-flex {\n  display: flex;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .d-flex .text-recommend {\n  padding-left: 8px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-badge {\n  width: 32px;\n  height: 20px;\n  border-radius: 6px;\n  background-color: #a0c245;\n  color: #fff;\n  text-align: center;\n  padding-top: 1px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-text-point {\n  padding-left: 8px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .text-point {\n  font-size: 12px;\n  color: #333333;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-chef {\n  padding-top: 12px;\n  display: flex;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-chef .chef-avatar .img-chef {\n  width: 32px;\n  height: 32px;\n  -o-object-fit: fill;\n     object-fit: fill;\n  border-radius: 32px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-chef .chef-desc {\n  display: flex;\n  flex-direction: column;\n  padding-left: 8px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-chef .chef-desc .chef-name {\n  font-size: 12px;\n  line-height: 20px;\n  letter-spacing: -0.24px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-chef .chef-desc .chef-office {\n  font-size: 12px;\n  color: #828282;\n  line-height: 14px;\n  letter-spacing: -0.24px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-price {\n  position: absolute;\n  display: flex;\n  width: 100%;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-price .hot-deal {\n  width: 60%;\n  font-size: 12px;\n  letter-spacing: -0.24px;\n  color: #e52822;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-price .text-price {\n  width: 40%;\n  text-align: right;\n  font-size: 27px;\n  letter-spacing: -0.27px;\n  color: #26bed6;\n  font-weight: 600;\n  padding-right: 8px;\n}\n\n.div-content .div-wraper-combo .div-item-combo .div-point .div-price .text-price .s-text {\n  font-size: 12px;\n  letter-spacing: -0.36px;\n  color: #26bed6;\n}\n\n.div-content .selected {\n  background: #26bed6 !important;\n  border: solid 0.5px #26bed6 !important;\n  color: #fff !important;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-group.sc-ion-action-sheet-ios {\n  margin: 0;\n  border-radius: 0;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-button.sc-ion-action-sheet-ios {\n  padding: 0;\n  border-bottom: solid 0.5px #f2f2f2;\n  margin-left: 16px;\n  margin-right: 16px !important;\n  width: 92%;\n}\n\n::ng-deep .action-sheets-filter-food .sc-ion-action-sheet-ios.selected {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 92%;\n}\n\n::ng-deep .action-sheets-filter-food .sc-ion-action-sheet-md.selected {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 100%;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 18px;\n  color: #000000;\n  line-height: 27px;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n  text-align: left;\n  padding-left: 16px;\n}\n\n::ng-deep .cls-border-bottom .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  border-bottom: solid 0.5px #f2f2f2;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  width: 100%;\n  height: 100%;\n  color: black;\n  font-size: 14px;\n  justify-content: left;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-button.sc-ion-action-sheet-ios {\n  padding: 0;\n  border-bottom: solid 0.5px #f2f2f2;\n  margin-left: 16px;\n  margin-right: 16px !important;\n  width: 92%;\n  height: 56px;\n}\n\n::ng-deep .action-sheets-filter-food .action-sheet-selected.sc-ion-action-sheet-ios {\n  background-image: url('ic_check.svg');\n  background-repeat: no-repeat;\n  background-position: right;\n  width: 92%;\n}\n\n::ng-deep ion-modal {\n  transform: none !important;\n  -webkit-transform: none !important;\n}\n\n@media (min-height: 812px) and (max-height: 1024px) {\n  ::ng-deep .action-sheets-filter-food .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 30px;\n  }\n}\n\n::ng-deep .food-slider ion-segment-button {\n  text-transform: capitalize;\n  color: #fff;\n}\n\n.div-slide-food {\n  padding-top: 8px;\n  position: relative;\n}\n\n.div-slide-food .swiper-food {\n  text-align: center;\n  width: 100%;\n  color: #222222;\n  font-size: 16px;\n  z-index: 99;\n}\n\n.div-slide-food .swiper-food .div-lunch {\n  width: 50%;\n  text-align: center;\n  padding-bottom: 6px;\n  font-size: 16px;\n  padding-left: 50px;\n}\n\n.div-slide-food .swiper-food .div-diner {\n  width: 50%;\n  text-align: center;\n  padding-bottom: 12px;\n  font-size: 16px;\n  font-weight: 300;\n  opacity: 0.7;\n  padding-right: 48px;\n}\n\n.div-slide-food .swiper-food .active-mark-food {\n  position: absolute;\n  bottom: -8px;\n  border-bottom: solid 3px #26bed6;\n  font-weight: 600 !important;\n  transition: left 0.5s ease-out;\n  width: 19%;\n  left: 22%;\n}\n\n.div-slide-food .swiper-food .sub-color {\n  font-weight: 300 !important;\n  opacity: 0.7;\n}\n\n.div-slide-food .swiper-food .left-50 {\n  left: 61%;\n  width: 16%;\n}\n\n.div-slide-food .swiper-food .focus {\n  font-weight: 600 !important;\n  opacity: 1 !important;\n}\n\n.div-slide-food .div-wraper-food {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.div-slide-food .swiper-food.main-color {\n  color: #26bed6 !important;\n}\n\n.div-slide-food .div-lunch.main-color {\n  color: #26bed6 !important;\n  font-weight: bold !important;\n}\n\n.div-slide-food .div-lunch.sub-color {\n  color: #222222 !important;\n  opacity: 0.7;\n}\n\n.div-slide-food .div-diner.main-color {\n  color: #26bed6 !important;\n  font-weight: bold !important;\n}\n\n.div-slide-food .div-diner.sub-color {\n  color: #222222 !important;\n  opacity: 0.7;\n}\n\n.div-slide-food .active-mark-food.main-color {\n  border-bottom: solid 3px #26bed6 !important;\n}\n\n.div-slide-food .cls-tab-visible {\n  visibility: visible;\n  transition: visibility 2s, opacity 0.5s linear;\n  opacity: 1;\n  height: 48px;\n  display: block;\n}\n\n.div-slide-food .cls-tab-disabled {\n  visibility: hidden;\n  height: 0px;\n  opacity: 0;\n  transition: visibility 2s, opacity 0.5s linear;\n  z-index: 0;\n  display: none;\n}\n\n.div-content-diner .title-text {\n  height: 27px;\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  color: #222222;\n  text-align: left;\n}\n\n.div-content-diner .sub-title-text {\n  height: 15px;\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #333333;\n  text-align: left;\n}\n\n.div-content-diner .p-top-40 {\n  padding-top: 40px;\n}\n\n.div-content-diner .p-top-24 {\n  padding-top: 24px;\n}\n\n.div-content-diner .m-bottom-16 {\n  margin-bottom: 16px;\n}\n\n.div-myorder {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvaG9tZWZvb2QvaG9tZWZvb2QucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lZm9vZC9ob21lZm9vZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0FDRUo7O0FEQUU7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0dOOztBRERFO0VBQ0kscUJBQUE7QUNJTjs7QURGQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUNLSjs7QURGSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDSVI7O0FERkk7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURESTtFQUNJLFdBQUE7RUFBWSxjQUFBO0VBQWUsc0JBQUE7RUFBZ0QsZ0JBQUE7RUFDM0UsWUFBQTtBQ09SOztBRExNO0VBQ0UsV0FBQTtBQ09SOztBRExNO0VBQ0ksa0JBQUE7QUNPVjs7QURMTTtFQUNJLFdBQUE7QUNPVjs7QURMTTtFQUNJLFVBQUE7QUNPVjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksbUJBQUE7QUNPSjs7QURMQTtFQUNJLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxVQUFBO0FDUUo7O0FETEU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7RUFDQSxVQUFBO0FDUUo7O0FETkU7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtBQ1NKOztBRE5FO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNTSjs7QURQRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBR0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtBQ1VKOztBRFJJO0VBQ0ksc0JBQUE7RUFDQSwwREFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ1VSOztBRFJJO0VBQ0ksc0JBQUE7RUFDQSwwREFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDVVI7O0FEUkk7RUFDSSxXQUFBO0VBQ0EsaURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURSSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDVVI7O0FEUkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURSSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNVUjs7QURQSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNTUjs7QURQUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNTWjs7QUROSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDUVI7O0FETkk7RUFDSSxhQUFBO0FDUVI7O0FETkk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDUVI7O0FESlE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNNWjs7QURKWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTWhCOztBREpnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTXBCOztBREhZO0VBQ0ksZ0JBQUE7QUNLaEI7O0FEREk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dSOztBREFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNHSjs7QURESTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0FDR1I7O0FERFE7RUFDSSw0QkFBQTtBQ0daOztBREFRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRVo7O0FEQVk7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNFaEI7O0FEQ1k7RUFDSSxlQUFBO0FDQ2hCOztBRENZO0VBQ0ksZ0JBQUE7QUNDaEI7O0FEQ1k7RUFDSSxnQkFBQTtBQ0NoQjs7QURDWTtFQUNJLGdCQUFBO0FDQ2hCOztBRENZO0VBQ0ksZ0JBQUE7QUNDaEI7O0FEQ1k7RUFDSSxnQkFBQTtBQ0NoQjs7QURFWTtFQUNJLGtCQUFBO0FDQWhCOztBREVZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDQWhCOztBREdRO0VBQ0ksMkJBQUE7QUNEWjs7QURHUTtFQUNJLDRCQUFBO0FDRFo7O0FETUE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FDSEo7O0FES0E7RUFDSSxhQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FERVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNBWjs7QURLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUNJLHlCQUFBO0VBQ0EsdURBQUE7QUNGSjs7QURJSTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUNGUjs7QURJUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlo7O0FESVE7RUFDSSwwQkFBQTtFQUNBLGNBQUE7QUNGWjs7QURJUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQ0ZaOztBRElRO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0ZaOztBRElRO0VBQ0ksY0FBQTtBQ0ZaOztBRElRO0VBQ0ksaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZaOztBRE1BO0VBQ0ksaUJBQUE7QUNISjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FESUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0RKOztBREVJO0VBQ0ksaUJBQUE7QUNBUjs7QURFSTtFQUNJLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNBUjs7QURFUTtFQUNJLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FDQVo7O0FERVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDQVo7O0FERVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNBaEI7O0FERVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUNBaEI7O0FER1E7RUFDSSxxQkFBQTtBQ0RaOztBREdRO0VBQ0ksZUFBQTtBQ0RaOztBREdZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRGhCOztBRFFVO0VBQ0Usb0JBQUE7QUNOWjs7QURRWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05oQjs7QURRWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ05oQjs7QURVUTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNSWjs7QURVUTtFQUNJLGFBQUE7QUNSWjs7QURTWTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1BoQjs7QURVUTtFQUNJLHFCQUFBO0FDUlo7O0FEVVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FDUlo7O0FEVVk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDUmhCOztBRFVZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtBQ1JoQjs7QURVWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7QUNSaEI7O0FEVVk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ1JoQjs7QURVWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtBQ1JoQjs7QURXWTtFQUNJLGtCQUFBO0FDVGhCOztBRFVnQjtFQUNJLGFBQUE7QUNScEI7O0FEVW9CO0VBQ0ksaUJBQUE7QUNSeEI7O0FEV2dCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNUcEI7O0FEWWdCO0VBQ0ksaUJBQUE7QUNWcEI7O0FEYWdCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDWHBCOztBRGNnQjtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQ1pwQjs7QURld0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0tBQUEsZ0JBQUE7RUFDQSxtQkFBQTtBQ2I1Qjs7QURnQm9CO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNkeEI7O0FEZ0J3QjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDZDVCOztBRGdCd0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNkNUI7O0FEbUJnQjtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNqQnBCOztBRG1Cb0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2pCeEI7O0FEbUJvQjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDakJ4Qjs7QURtQndCO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2pCNUI7O0FEeUJNO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0FDdkJSOztBRDRCSTtFQUNJLFVBQUE7QUN6QlI7O0FENEJJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0FDMUJSOztBRDZCSTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDM0JSOztBRDZCSTtFQUNJLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUMzQlI7O0FENkJJO0VBQ0UscUNBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtBQzNCTjs7QUQ4Qkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Ysa0JBQUE7QUM1Qko7O0FEK0JJO0VBQ0ksa0NBQUE7QUM3QlI7O0FEZ0NJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDOUJSOztBRGdDSTtFQUNJLFVBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQzlCUjs7QURnQ0k7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0FDOUJSOztBRGlDSTtFQUNJLDBCQUFBO0VBQ0Esa0NBQUE7QUMvQlI7O0FEaUNJO0VBQ0k7SUFDRSxtQkFBQTtFQy9CUjtBQUNGOztBRGtDTTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtBQ2hDUjs7QURzQ0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbkNKOztBRHFDUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ25DWjs7QURxQ1k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ25DZDs7QURzQ1k7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3BDZDs7QUR1Q1k7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ3JDZDs7QUR3Q1k7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUN0Q2Q7O0FEd0NZO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUN0Q2hCOztBRHdDWTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUN0Q2Q7O0FEMkNVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3pDWjs7QUQ0Q1U7RUFDRSx5QkFBQTtBQzFDWjs7QUQ0Q1U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDMUNaOztBRDRDVTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQzFDWjs7QUQ2Q1U7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FDM0NaOztBRDZDVTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQzNDWjs7QUQ4Q1U7RUFDRSwyQ0FBQTtBQzVDWjs7QUQ4Q1U7RUFDRSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDNUNaOztBRDhDVTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDNUNaOztBRGlEUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQzlDWjs7QURnRFE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUM5Q1o7O0FEaURRO0VBQ0ksaUJBQUE7QUMvQ1o7O0FEaURRO0VBQ0ksaUJBQUE7QUMvQ1o7O0FEaURRO0VBQ0ksbUJBQUE7QUMvQ1o7O0FEbURJO0VBQ0ksWUFBQTtBQ2hEUiIsImZpbGUiOiJzcmMvYXBwL2hvbWVmb29kL2hvbWVmb29kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtaGVhZGVyLXRpdGxle1xyXG4gICAgei1pbmRleDogMSAhaW1wb3J0YW50O1xyXG59XHJcbi5kaXYtaWNvbi1jYXJ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gIH1cclxuICAudi1hbGlnbi1jZW50ZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuZGl2LWdvYmFja3tcclxuICAgICAgei1pbmRleDogMiAhaW1wb3J0YW50O1xyXG4gIH1cclxuLmhvbWVmb29kLWhlYWRlcntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIwcHgpO1xyXG5cclxuICAgIFxyXG4gICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogNDhweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1nLWNhcnR7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1oZWFkZXJ7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuICAgICAgLnItNjB7XHJcbiAgICAgICAgICByaWdodDogNjBweDtcclxuICAgICAgfVxyXG4gICAgICAuci00e1xyXG4gICAgICAgICAgcmlnaHQ6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgXHJcbn1cclxuLnAtdG9wLTQwe1xyXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbn1cclxuLnAtdG9wLTI0e1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbn1cclxuLm0tYm90dG9tLTE2e1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG4uY2xzLXZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgIFxyXG4gIH1cclxuICAuY2xzLWRpc2FibGVke1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAwcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgfVxyXG4gIC5jbHMtdGFiLXZpc2libGV7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgIFxyXG4gIH1cclxuICAuY2xzLXRhYi1kaXNhYmxlZHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMHB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNscy1iYWRnZS1jYXJ0e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIGhlaWdodDogMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyB0b3A6IDI5cHg7XHJcbiAgICAvLyByaWdodDogOXB4O1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICByaWdodDogNnB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcbi5jbHMtYmFkZ2UtY2FydC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuLmRpdi1iYWNrZ3JvdW5ke1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDM4MHB4KTtcclxuICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgLmltZy1iYWNrZ3JvdW5ke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAzODBweCkgIWltcG9ydGFudDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjBweDtcclxuICAgIH1cclxuICAgIC5pbWctYmFja2dyb3VuZC1kaW5uZXJ7XHJcbiAgICAgICAgd2lkdGg6IDEwNSUgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDM4MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0yMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogLTE3MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1sb2dve1xyXG4gICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgMjJweCk7XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLm1haW4tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAubWFpbi1mb29kLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1NHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuc3ViLXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMi41cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAuaW1nLWNhcnR7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbHMtbWFya3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDMwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwgMC41KTtcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgIC5kLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5kZXNjLXNlY3Rpb257XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLmRlc2Mtcm93e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgLmRlc2MtaWNvbntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctZGVzY3tcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRlc2MtdGV4dHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuLmRpdi13cmFwLWZpbHRlcntcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG5cclxuICAgIC5kaXYtZmlsdGVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgXHJcbiAgICAgICAgLm0tbC0yMHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kaXYtZmlsdGVyLWl0ZW17XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgLmxhYmVsLWZpbHRlcntcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1pbi13aWR0aC05MHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogOTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWluLXdpZHRoLTEwMHtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1pbi13aWR0aC0xMTJ7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDExMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5taW4td2lkdGgtMTE1e1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWluLXdpZHRoLTEyNXtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm1pbi13aWR0aC0xNTB7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaW1nLWRvd257XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpdi1jbG9zZXtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1maWx0ZXItaXRlbTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LWZpbHRlci1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbn1cclxuLnNlbGVjdGVke1xyXG4gICAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucC10b3AtM3tcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcbn1cclxuLnRleHQtd2Vlay1tZW51LCAudGV4dC10aW1lZXhwaXJlZHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAudGV4dC1hcnJvd3tcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICAgIC5pbWctYXJyb3d7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnRleHQtZmlsdGVye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmRpdi1pbnN0YWxsbWVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpO1xyXG5cclxuICAgIC5pbnN0YWxsbWVudC1jb250ZW50e1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlYWYwZTc7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDNweCAjZmY5NTAwO1xyXG5cclxuICAgICAgICAudGV4dC1pbnN0YWxsbWVudHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4IDBweCA2cHggMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWluc3RhbGxtZW50LWRldGFpbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI0cHggNnB4IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5zdGFsbG1lbnQtZGV0YWlse1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTZweCA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXByaWNle1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1wcmljZS1zdWJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1zZWUtZGV0YWlse1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLm0tbGVmdC0xN3tcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5kaXYtY29udGVudC1kaW5lcntcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5kaXYtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDE2cHg7IFxyXG4gICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAuZGl2LXdyYXBlci1jb21iby5sZWZ0b2Zmc2V0LTZ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC02cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50ZXh0LWxlZnR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kaXYtd2Vlay1wZXJpb2R7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHggN3B4IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MiwyNDIsMjQyLCAwLjQpO1xyXG5cclxuICAgICAgICAuZGl2LXNwbGl0LXdlZWt7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogLThweCA4cHggLThweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtY3VycmVudC13ZWVrLCAuZGl2LW5leHQtd2Vla3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XHJcblxyXG4gICAgICAgICAgICAudGV4dC13ZWVrLXRpdGxle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtd2Vlay10aXRsZS1kYXRle1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3RpdmUtd2Vla3tcclxuICAgICAgICAgICAgd2lkdGg6IDc1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1hcnJvd3tcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC5pbWctYXJyb3d7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAgLmRpdi13cmFwZXItY29tYm97XHJcbiAgICAgICAgICAubGlzdC1tZW51e1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZS10ZXh0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN1Yi10aXRsZS10ZXh0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAucC1sLTh7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAxNTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmQtZmxleHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLmRpdi1zdGFye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53aWR0aC05OHtcclxuICAgICAgICAgICAgd2lkdGg6IDk4JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LWl0ZW0tY29tYm97XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmRpdi1pbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjAycHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltZy1pdGVte1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDJweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmxvYXQtcHJvbW97XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtNnB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggMTJweCAwcHggMTNweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDExO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZsb2F0LXByb21vOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM4NTFmMWM7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LWNhdG5hbWV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LXBvaW50e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgLmQtZmxleHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1yZWNvbW1lbmR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kaXYtYmFkZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTBjMjQ1O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kaXYtdGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAudGV4dC1wb2ludHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRpdi1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGVmLWF2YXRhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmltZy1jaGVme1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBmaWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hlZi1kZXNje1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVmLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jaGVmLW9mZmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGl2LXByaWNle1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAuaG90LWRlYWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZTUyODIyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGV4dC1wcmljZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucy10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnNlbGVjdGVke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXB7XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZjJmMmYyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICB9XHJcbiAgICAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Muc2VsZWN0ZWQge1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZ3MvaWNfY2hlY2suc3ZnJyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQuc2VsZWN0ZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWdzL2ljX2NoZWNrLnN2ZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIH1cclxuICAgXHJcbiAgICAuY2xzLWJvcmRlci1ib3R0b20gLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogOTIlO1xyXG4gICAgICAgIGhlaWdodDogNTZweDtcclxuICAgIH1cclxuICAgIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5hY3Rpb24tc2hlZXQtc2VsZWN0ZWQuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmcnKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLW1vZGFseyBcclxuICAgICAgICB0cmFuc2Zvcm06bm9uZSAhaW1wb3J0YW50OyBcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTpub25lICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OjgxMnB4KSBhbmQgKG1heC1oZWlnaHQ6IDEwMjRweCkge1xyXG4gICAgICAgIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuZm9vZC1zbGlkZXIgaW9uLXNlZ21lbnQtYnV0dG9ue1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG59XHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vc3R5bGUgdGFiXHJcbi5kaXYtc2xpZGUtZm9vZHtcclxuICAgIHBhZGRpbmctdG9wOiAgOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbiAgICAgICAgLnN3aXBlci1mb29ke1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5kaXYtbHVuY2h7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgLmRpdi1kaW5lcntcclxuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIC5hY3RpdmUtbWFyay1mb29ke1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICBib3R0b206IC04cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTklO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDIyJTtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWItY29sb3J7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGVmdC01MHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDYxJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNiU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvY3Vze1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuZGl2LXdyYXBlci1mb29ke1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5zd2lwZXItZm9vZC5tYWluLWNvbG9ye1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdi1sdW5jaC5tYWluLWNvbG9ye1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmRpdi1sdW5jaC5zdWItY29sb3J7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIC5kaXYtZGluZXIubWFpbi1jb2xvcntcclxuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kaXYtZGluZXIuc3ViLWNvbG9ye1xyXG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAuYWN0aXZlLW1hcmstZm9vZC5tYWluLWNvbG9ye1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNscy10YWItdmlzaWJsZXtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbHMtdGFiLWRpc2FibGVke1xyXG4gICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfSAgXHJcbiAgICB9XHJcbiAgICAuZGl2LWNvbnRlbnQtZGluZXJ7XHJcbiAgICBcclxuICAgICAgICAudGl0bGUtdGV4dHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLXRpdGxlLXRleHR7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnAtdG9wLTQwe1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnAtdG9wLTI0e1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm0tYm90dG9tLTE2e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdi1teW9yZGVye1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH0iLCIuZGl2LWhlYWRlci10aXRsZSB7XG4gIHotaW5kZXg6IDEgIWltcG9ydGFudDtcbn1cblxuLmRpdi1pY29uLWNhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgei1pbmRleDogOTtcbn1cblxuLnYtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXYtZ29iYWNrIHtcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xufVxuXG4uaG9tZWZvb2QtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHBhZGRpbmctdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIwcHgpO1xufVxuLmhvbWVmb29kLWhlYWRlciAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmhvbWVmb29kLWhlYWRlciAudGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWVmb29kLWhlYWRlciAuYnRuLWhlYWRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQwcHg7XG59XG4uaG9tZWZvb2QtaGVhZGVyIC5pbWctY2FydCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuLmhvbWVmb29kLWhlYWRlciAuYnRuLWhlYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5ob21lZm9vZC1oZWFkZXIgLnItNjAge1xuICByaWdodDogNjBweDtcbn1cbi5ob21lZm9vZC1oZWFkZXIgLnItNCB7XG4gIHJpZ2h0OiA0cHg7XG59XG5cbi5wLXRvcC00MCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG4ucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuLm0tYm90dG9tLTE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmNscy12aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAycywgb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmNscy1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5jbHMtdGFiLXZpc2libGUge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY2xzLXRhYi1kaXNhYmxlZCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgaGVpZ2h0OiAwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIHotaW5kZXg6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jbHMtYmFkZ2UtY2FydCB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIHJpZ2h0OiA2cHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmNscy1iYWRnZS1jYXJ0LWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogNHB4O1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5kaXYtYmFja2dyb3VuZCB7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDM4MHB4KTtcbiAgei1pbmRleDogOTtcbn1cbi5kaXYtYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGNhbGMoIGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDM4MHB4KSAhaW1wb3J0YW50O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAtMjBweDtcbn1cbi5kaXYtYmFja2dyb3VuZCAuaW1nLWJhY2tncm91bmQtZGlubmVyIHtcbiAgd2lkdGg6IDEwNSUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKCBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAzODBweCkgIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teDogLTIwcHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogLTE3MHB4O1xufVxuLmRpdi1iYWNrZ3JvdW5kIC5pbWctbG9nbyB7XG4gIHdpZHRoOiA3NnB4O1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDIycHgpO1xuICB6LWluZGV4OiAxMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1iYWNrZ3JvdW5kIC5tYWluLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbi5kaXYtYmFja2dyb3VuZCAubWFpbi1mb29kLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTU0cHg7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LWJhY2tncm91bmQgLnN1Yi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIyLjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1iYWNrZ3JvdW5kIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1iYWNrZ3JvdW5kIC50ZXh0LWNlbnRlciAuaW1nLWNhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDIxcHg7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAxNnB4O1xuICB6LWluZGV4OiAxMTtcbn1cbi5kaXYtYmFja2dyb3VuZCAuY2xzLW1hcmsge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDMwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgei1pbmRleDogLTE7XG59XG4uZGl2LWJhY2tncm91bmQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWJhY2tncm91bmQgLmRlc2Mtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEzMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWJhY2tncm91bmQgLmRlc2Mtc2VjdGlvbiAuZGVzYy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLmRpdi1iYWNrZ3JvdW5kIC5kZXNjLXNlY3Rpb24gLmRlc2Mtcm93IC5kZXNjLWljb24ge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmRpdi1iYWNrZ3JvdW5kIC5kZXNjLXNlY3Rpb24gLmRlc2Mtcm93IC5kZXNjLWljb24gLmltZy1kZXNjIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kaXYtYmFja2dyb3VuZCAuZGVzYy1zZWN0aW9uIC5kZXNjLXJvdyAuZGVzYy10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cbi5kaXYtYmFja2dyb3VuZCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5kaXYtd3JhcC1maWx0ZXIge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAubS1sLTIwIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5kaXYtd3JhcC1maWx0ZXIgLmRpdi1maWx0ZXIgLmRpdi1maWx0ZXItaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAuZGl2LWZpbHRlci1pdGVtIC5sYWJlbC1maWx0ZXIge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2O1xuICBwYWRkaW5nOiAxMHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG59XG4uZGl2LXdyYXAtZmlsdGVyIC5kaXYtZmlsdGVyIC5kaXYtZmlsdGVyLWl0ZW0gLm1pbi13aWR0aC05MCB7XG4gIG1pbi13aWR0aDogOTBweDtcbn1cbi5kaXYtd3JhcC1maWx0ZXIgLmRpdi1maWx0ZXIgLmRpdi1maWx0ZXItaXRlbSAubWluLXdpZHRoLTEwMCB7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4uZGl2LXdyYXAtZmlsdGVyIC5kaXYtZmlsdGVyIC5kaXYtZmlsdGVyLWl0ZW0gLm1pbi13aWR0aC0xMTIge1xuICBtaW4td2lkdGg6IDExMnB4O1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAuZGl2LWZpbHRlci1pdGVtIC5taW4td2lkdGgtMTE1IHtcbiAgbWluLXdpZHRoOiAxMTVweDtcbn1cbi5kaXYtd3JhcC1maWx0ZXIgLmRpdi1maWx0ZXIgLmRpdi1maWx0ZXItaXRlbSAubWluLXdpZHRoLTEyNSB7XG4gIG1pbi13aWR0aDogMTI1cHg7XG59XG4uZGl2LXdyYXAtZmlsdGVyIC5kaXYtZmlsdGVyIC5kaXYtZmlsdGVyLWl0ZW0gLm1pbi13aWR0aC0xNTAge1xuICBtaW4td2lkdGg6IDE1MHB4O1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAuZGl2LWZpbHRlci1pdGVtIC5pbWctZG93biB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbi5kaXYtd3JhcC1maWx0ZXIgLmRpdi1maWx0ZXIgLmRpdi1maWx0ZXItaXRlbSAuZGl2LWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDM2cHg7XG4gIHRvcDogMnB4O1xuICByaWdodDogMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAuZGl2LWZpbHRlci1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmRpdi13cmFwLWZpbHRlciAuZGl2LWZpbHRlciAuZGl2LWZpbHRlci1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ucC10b3AtMyB7XG4gIHBhZGRpbmctdG9wOiAzcHg7XG59XG5cbi50ZXh0LXdlZWstbWVudSwgLnRleHQtdGltZWV4cGlyZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC13ZWVrLW1lbnUgLnRleHQtYXJyb3csIC50ZXh0LXRpbWVleHBpcmVkIC50ZXh0LWFycm93IHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuLnRleHQtd2Vlay1tZW51IC50ZXh0LWFycm93IC5pbWctYXJyb3csIC50ZXh0LXRpbWVleHBpcmVkIC50ZXh0LWFycm93IC5pbWctYXJyb3cge1xuICB3aWR0aDogMTRweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLnRleHQtZmlsdGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kaXYtaW5zdGFsbG1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDgwcHgpO1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNlYWYwZTc7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAzcHggI2ZmOTUwMDtcbn1cbi5kaXYtaW5zdGFsbG1lbnQgLmluc3RhbGxtZW50LWNvbnRlbnQgLnRleHQtaW5zdGFsbG1lbnQge1xuICBwYWRkaW5nOiA3cHggMHB4IDZweCAxMnB4O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cbi5kaXYtaW5zdGFsbG1lbnQgLmluc3RhbGxtZW50LWNvbnRlbnQgLnRleHQtaW5zdGFsbG1lbnQtZGV0YWlsIHtcbiAgcGFkZGluZzogMHB4IDI0cHggNnB4IDEycHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCAuaW5zdGFsbG1lbnQtZGV0YWlsIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHBhZGRpbmc6IDE2cHggNHB4O1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCAudGV4dC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LWluc3RhbGxtZW50IC5pbnN0YWxsbWVudC1jb250ZW50IC50ZXh0LXByaWNlLXN1YiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmRpdi1pbnN0YWxsbWVudCAuaW5zdGFsbG1lbnQtY29udGVudCAudGV4dC1zZWUtZGV0YWlsIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5tLWxlZnQtMTcge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpdi1jb250ZW50LWRpbmVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5kaXYtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvLmxlZnRvZmZzZXQtNiB7XG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xufVxuLmRpdi1jb250ZW50IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbn1cbi5kaXYtY29udGVudCAudGV4dC1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd2Vlay1wZXJpb2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBwYWRkaW5nOiA4cHggMTZweCA3cHggMTZweDtcbiAgaGVpZ2h0OiA0MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDIsIDI0MiwgMC40KTtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdlZWstcGVyaW9kIC5kaXYtc3BsaXQtd2VlayB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiA0cHg7XG4gIG1hcmdpbjogLThweCA4cHggLThweCAwcHg7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13ZWVrLXBlcmlvZCAuZGl2LWN1cnJlbnQtd2VlaywgLmRpdi1jb250ZW50IC5kaXYtd2Vlay1wZXJpb2QgLmRpdi1uZXh0LXdlZWsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgd2lkdGg6IDI1JTtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdlZWstcGVyaW9kIC5kaXYtY3VycmVudC13ZWVrIC50ZXh0LXdlZWstdGl0bGUsIC5kaXYtY29udGVudCAuZGl2LXdlZWstcGVyaW9kIC5kaXYtbmV4dC13ZWVrIC50ZXh0LXdlZWstdGl0bGUge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdlZWstcGVyaW9kIC5kaXYtY3VycmVudC13ZWVrIC50ZXh0LXdlZWstdGl0bGUtZGF0ZSwgLmRpdi1jb250ZW50IC5kaXYtd2Vlay1wZXJpb2QgLmRpdi1uZXh0LXdlZWsgLnRleHQtd2Vlay10aXRsZS1kYXRlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13ZWVrLXBlcmlvZCAuYWN0aXZlLXdlZWsge1xuICB3aWR0aDogNzUlICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13ZWVrLXBlcmlvZCAudGV4dC1hcnJvdyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdlZWstcGVyaW9kIC50ZXh0LWFycm93IC5pbWctYXJyb3cge1xuICB3aWR0aDogMTRweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAubGlzdC1tZW51IHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmxpc3QtbWVudSAudGl0bGUtdGV4dCB7XG4gIGhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAubGlzdC1tZW51IC5zdWItdGl0bGUtdGV4dCB7XG4gIGhlaWdodDogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLnAtbC04IHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIG1pbi1oZWlnaHQ6IDE1M3B4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kLWZsZXggLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAud2lkdGgtOTgge1xuICB3aWR0aDogOTglICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC5kaXYtaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjAycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAuZGl2LWl0ZW0tY29tYm8gLmltZy1pdGVtIHtcbiAgaGVpZ2h0OiAyMDJweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZmxvYXQtcHJvbW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjRweDtcbiAgbGVmdDogLTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWF4LXdpZHRoOiA5NSU7XG4gIGhlaWdodDogMjJweDtcbiAgcGFkZGluZzogM3B4IDEycHggMHB4IDEzcHg7XG4gIHotaW5kZXg6IDExO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZmxvYXQtcHJvbW86YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHRvcDogMjJweDtcbiAgYm9yZGVyLXRvcDogNnB4IHNvbGlkICM4NTFmMWM7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC50ZXh0LWNhdG5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW46IDhweCAwO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kLWZsZXggLnRleHQtcmVjb21tZW5kIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC5kaXYtcG9pbnQgLmRpdi1iYWRnZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EwYzI0NTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDFweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kaXYtdGV4dC1wb2ludCB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC50ZXh0LXBvaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kaXYtY2hlZiB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1hdmF0YXIgLmltZy1jaGVmIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAuZGl2LWl0ZW0tY29tYm8gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1jb250ZW50IC5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyAuZGl2LXBvaW50IC5kaXYtY2hlZiAuY2hlZi1kZXNjIC5jaGVmLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAuZGl2LWl0ZW0tY29tYm8gLmRpdi1wb2ludCAuZGl2LWNoZWYgLmNoZWYtZGVzYyAuY2hlZi1vZmZpY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC5kaXYtcG9pbnQgLmRpdi1wcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC5kaXYtcG9pbnQgLmRpdi1wcmljZSAuaG90LWRlYWwge1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogI2U1MjgyMjtcbn1cbi5kaXYtY29udGVudCAuZGl2LXdyYXBlci1jb21ibyAuZGl2LWl0ZW0tY29tYm8gLmRpdi1wb2ludCAuZGl2LXByaWNlIC50ZXh0LXByaWNlIHtcbiAgd2lkdGg6IDQwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI3cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uZGl2LWNvbnRlbnQgLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIC5kaXYtcG9pbnQgLmRpdi1wcmljZSAudGV4dC1wcmljZSAucy10ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LWNvbnRlbnQgLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLWZpbHRlci1mb29kIC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWdzL2ljX2NoZWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHdpZHRoOiA5MiU7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQuc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1ncy9pY19jaGVjay5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG46Om5nLWRlZXAgLmNscy1ib3JkZXItYm90dG9tIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtZmlsdGVyLWZvb2QgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZjJmMmYyO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MiU7XG4gIGhlaWdodDogNTZweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWN0aW9uLXNoZWV0LXNlbGVjdGVkLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZ3MvaWNfY2hlY2suc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgd2lkdGg6IDkyJTtcbn1cbjo6bmctZGVlcCBpb24tbW9kYWwge1xuICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLWhlaWdodDogODEycHgpIGFuZCAobWF4LWhlaWdodDogMTAyNHB4KSB7XG4gIDo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1maWx0ZXItZm9vZCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuZm9vZC1zbGlkZXIgaW9uLXNlZ21lbnQtYnV0dG9uIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZGl2LXNsaWRlLWZvb2Qge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LXNsaWRlLWZvb2QgLnN3aXBlci1mb29kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgei1pbmRleDogOTk7XG59XG4uZGl2LXNsaWRlLWZvb2QgLnN3aXBlci1mb29kIC5kaXYtbHVuY2gge1xuICB3aWR0aDogNTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiA1MHB4O1xufVxuLmRpdi1zbGlkZS1mb29kIC5zd2lwZXItZm9vZCAuZGl2LWRpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmctcmlnaHQ6IDQ4cHg7XG59XG4uZGl2LXNsaWRlLWZvb2QgLnN3aXBlci1mb29kIC5hY3RpdmUtbWFyay1mb29kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGxlZnQgMC41cyBlYXNlLW91dDtcbiAgd2lkdGg6IDE5JTtcbiAgbGVmdDogMjIlO1xufVxuLmRpdi1zbGlkZS1mb29kIC5zd2lwZXItZm9vZCAuc3ViLWNvbG9yIHtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGl2LXNsaWRlLWZvb2QgLnN3aXBlci1mb29kIC5sZWZ0LTUwIHtcbiAgbGVmdDogNjElO1xuICB3aWR0aDogMTYlO1xufVxuLmRpdi1zbGlkZS1mb29kIC5zd2lwZXItZm9vZCAuZm9jdXMge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5kaXYtc2xpZGUtZm9vZCAuZGl2LXdyYXBlci1mb29kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1zbGlkZS1mb29kIC5zd2lwZXItZm9vZC5tYWluLWNvbG9yIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbn1cbi5kaXYtc2xpZGUtZm9vZCAuZGl2LWx1bmNoLm1haW4tY29sb3Ige1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xufVxuLmRpdi1zbGlkZS1mb29kIC5kaXYtbHVuY2guc3ViLWNvbG9yIHtcbiAgY29sb3I6ICMyMjIyMjIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMC43O1xufVxuLmRpdi1zbGlkZS1mb29kIC5kaXYtZGluZXIubWFpbi1jb2xvciB7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG59XG4uZGl2LXNsaWRlLWZvb2QgLmRpdi1kaW5lci5zdWItY29sb3Ige1xuICBjb2xvcjogIzIyMjIyMiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwLjc7XG59XG4uZGl2LXNsaWRlLWZvb2QgLmFjdGl2ZS1tYXJrLWZvb2QubWFpbi1jb2xvciB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXNsaWRlLWZvb2QgLmNscy10YWItdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMnMsIG9wYWNpdHkgMC41cyBsaW5lYXI7XG4gIG9wYWNpdHk6IDE7XG4gIGhlaWdodDogNDhweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGl2LXNsaWRlLWZvb2QgLmNscy10YWItZGlzYWJsZWQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGhlaWdodDogMHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDJzLCBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICB6LWluZGV4OiAwO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGl2LWNvbnRlbnQtZGluZXIgLnRpdGxlLXRleHQge1xuICBoZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWNvbnRlbnQtZGluZXIgLnN1Yi10aXRsZS10ZXh0IHtcbiAgaGVpZ2h0OiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtY29udGVudC1kaW5lciAucC10b3AtNDAge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cbi5kaXYtY29udGVudC1kaW5lciAucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5kaXYtY29udGVudC1kaW5lciAubS1ib3R0b20tMTYge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uZGl2LW15b3JkZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/homefood/homefood.page.ts":
/*!*******************************************!*\
  !*** ./src/app/homefood/homefood.page.ts ***!
  \*******************************************/
/*! exports provided: HomefoodPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefoodPage", function() { return HomefoodPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _foodfilter_foodfilter_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../foodfilter/foodfilter.page */ "./src/app/foodfilter/foodfilter.page.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_15__);
















let HomefoodPage = class HomefoodPage {
    constructor(navCtrl, gf, foodService, modalCtrl, toastCtrl, zone, imageLoader, storage, actionsheetCtrl, searchhotel, valueGlobal, flightService, _mytripservice, bizTravelService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.imageLoader = imageLoader;
        this.storage = storage;
        this.actionsheetCtrl = actionsheetCtrl;
        this.searchhotel = searchhotel;
        this.valueGlobal = valueGlobal;
        this.flightService = flightService;
        this._mytripservice = _mytripservice;
        this.bizTravelService = bizTravelService;
        this.slideOpts = {
            zoom: false
        };
        this.foods = [];
        this.itemViBacClick = false;
        this.itemViTrungClick = false;
        this.itemViNamClick = false;
        this.itemViBaMienClick = false;
        this.itemThanhDamClick = false;
        this.itemDamDaClick = false;
        this.item199Click = false;
        this.item299Click = false;
        this.item399Click = false;
        this.foodbeforefilter = [];
        this.datafilter = [];
        this.menuindex = 1;
        this.hascachecart = false;
        this.installmentPriceStr = "123.000";
        this.activeFoodTab = 1;
        this.diners = [];
        this.activeWeek = false;
        this.activeWeekDinner = true;
        this.activeFoodTab = 1;
        this.activeWeek = true;
        this.activeWeekDinner = true;
        this.loaddata();
        setTimeout(() => {
            this.storage.get("listItemsCart").then((data) => {
                if (data && data.length > 0) {
                    this.gf.checkData(data).then((result) => {
                        this.zone.run(() => {
                            this.countcart = result.length;
                            this.foodService.countcart = result.length;
                            this.hascachecart = true;
                            this.foodService.listItemsCart = [...result];
                            this.foodService.itemCartChange.emit(this.foodService.countcart);
                            this.gf.setCacheCart();
                        });
                    });
                }
            });
        }, 350);
        setInterval(() => {
            this.zone.run(() => {
                this.countcart = this.foodService.listItemsCart.length;
            });
        }, 300);
        this.loadUserInfo();
    }
    loaddata() {
        this.gf.getCurrentPeriod().then((data) => {
            this.loadcategoryhome(0);
            this.loadcategoryhome(1);
            this.zone.run(() => {
                this.weekmenutitle = "Tuần này ";
                this.weekmenutitle1 = moment__WEBPACK_IMPORTED_MODULE_10__(this.foodService.periodStartDate).format("DD.MM");
                this.weekmenutitle2 = moment__WEBPACK_IMPORTED_MODULE_10__(this.foodService.periodEndDate).format("DD.MM");
                this.nextweekmenutitle = "Tuần sau ";
                this.nextweekmenutitle1 = moment__WEBPACK_IMPORTED_MODULE_10__(this.foodService.periodStartDateNextWeek).format("DD.MM");
                this.nextweekmenutitle2 = moment__WEBPACK_IMPORTED_MODULE_10__(this.foodService.periodEndDateNextWeek).format("DD.MM");
                var dcin = new Date(this.foodService.periodStartDate);
                var res = dcin.setTime(dcin.getTime() + (-1 * 24 * 60 * 60 * 1000));
                var dexpired = new Date(res);
                this.timeexpired = "Đặt đến 12h Chủ nhật " + moment__WEBPACK_IMPORTED_MODULE_10__(dexpired).format("DD.MM");
            });
        });
        let priceinstallment = Math.round(3000000 / 12 * 1.05);
        this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
    }
    ngOnInit() {
        this.foodService.menuFooterClick.pipe().subscribe(data => {
            if (data == 1) {
                this.itemViBacClick = this.foodService.objectFilter.itemViBacClick;
                this.itemViTrungClick = this.foodService.objectFilter.itemViTrungClick;
                this.itemViNamClick = this.foodService.objectFilter.itemViNamClick;
                this.itemViBaMienClick = this.foodService.objectFilter.itemViBaMienClick;
                this.itemThanhDamClick = this.foodService.objectFilter.itemThanhDamClick;
                this.itemDamDaClick = this.foodService.objectFilter.itemDamDaClick;
                this.item199Click = this.foodService.objectFilter.item199Click;
                this.item299Click = this.foodService.objectFilter.item299Click;
                this.item399Click = this.foodService.objectFilter.item399Click;
                this.itemFilterClickNotChangeValue(1);
                this.itemFilterClickNotChangeValue(2);
                this.itemFilterClickNotChangeValue(3);
                this.itemFilterClickNotChangeValue(4);
                this.itemFilterClickNotChangeValue(5);
                this.itemFilterClickNotChangeValue(6);
                this.itemFilterClickNotChangeValue(7);
                this.itemFilterClickNotChangeValue(8);
                this.itemFilterClickNotChangeValue(9);
            }
        });
        this.foodService.itemCartChange.pipe().subscribe(data => {
            this.zone.run(() => {
                this.countcart = data;
            });
        });
        this.foodService.itemActiveFoodTab.pipe().subscribe(data => {
        });
        this.bizTravelService.accountBizTravelChange.pipe().subscribe((check) => {
            if (check == 1) {
                this.loadUserInfo();
            }
            else if (check == 2) {
                this.isBizAccount = false;
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
                requestretry__WEBPACK_IMPORTED_MODULE_15__(options, function (error, response, body) {
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
    goback() {
        if (this._mytripservice.backfrompage == "order") {
            this._mytripservice.backfrompage = "";
            if (this._mytripservice.rootPage == "homeflight") {
                this.valueGlobal.backValue = "homeflight";
                this._mytripservice.orderPageState.emit(1);
                this.flightService.itemTabFlightActive.emit(true);
                setTimeout(() => {
                    this.flightService.itemMenuFlightClick.emit(2);
                }, 200);
                this._mytripservice.backfrompage = "";
                this.navCtrl.navigateBack('/tabs/tab1');
            }
            else if (this._mytripservice.rootPage == 'homehotel') {
                this.navCtrl.navigateBack('app/tabs/tab3');
            }
            else {
                if (this.valueGlobal.backValue == "homeflight") {
                    this.valueGlobal.backValue = "homeflight";
                    this._mytripservice.orderPageState.emit(1);
                    this.flightService.itemTabFlightActive.emit(true);
                    setTimeout(() => {
                        this.flightService.itemMenuFlightClick.emit(2);
                    }, 200);
                    this._mytripservice.backfrompage = "";
                    this.navCtrl.navigateBack('/tabs/tab1');
                }
                else if (this.valueGlobal.backValue == "homehotel") {
                    this.valueGlobal.backValue = "homehotel";
                    this.navCtrl.navigateBack('app/tabs/tab3');
                }
                else {
                    this.valueGlobal.backValue = "homefood";
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-myorder").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
                    jquery__WEBPACK_IMPORTED_MODULE_4__(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
                    this.foodService.tabFoodIndex = 2;
                    this.foodService.menuFooterClick.emit(2);
                    this.foodService.itemActiveFoodTab.emit(2);
                    this.navCtrl.navigateBack('/homefood');
                }
            }
        }
        else if (this._mytripservice.rootPage == "homehotel") {
            this.navCtrl.navigateBack('/tabs/tab1');
        }
        else {
            this._mytripservice.rootPage = "homeflight";
            this.flightService.itemCheckTabActive.emit(1);
            this.navCtrl.navigateBack('/tabs/tab1');
        }
    }
    ionViewWillEnter() {
        if (this.foodService && this.foodService.listItemsCart) {
            this.countcart = this.foodService.listItemsCart.length;
        }
        if (document.getElementsByClassName("homefood-footer").length > 0) {
            document.getElementsByClassName("homefood-footer")[0]['style'].display = 'block';
        }
    }
    loadcategoryhome(type) {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFood + "/api/FOHome/GetCategoryHomePage?currentWeek=" + type;
        se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data) => {
            if (data && data.length > 0) {
                se.foodService.listItemsFood = data;
                data.forEach(element => {
                    let tail1 = element.image.substring(element.image.length - 3, element.image.length);
                    if (tail1 != "png" && tail1 != "jpg") {
                        element.image = element.image.substring(0, element.image.length - 2);
                    }
                    if (element.image.indexOf("640x480") == -1) {
                        let urlimage = element.image.substring(0, element.image.length - 4);
                        let tail = element.image.substring(element.image.length - 4, element.image.length);
                        element.image = urlimage + "-640x480" + tail;
                        se.imageLoader.preload(element.image);
                    }
                    if (element.avgPoint > 0) {
                        element.avgPoint = element.avgPoint.toFixed(1);
                        if (element.avgPoint == 10.0) {
                            element.avgPoint = 10;
                        }
                    }
                    se.getListMenuByTypePrice(data);
                    element.priceDisplay = se.gf.convertNumberToString(element.price);
                    if (!type) {
                        element.startDate = se.foodService.periodStartDateNextWeek;
                        element.endDate = se.foodService.periodEndDateNextWeek;
                    }
                    else {
                        element.startDate = se.foodService.periodStartDate;
                        element.endDate = se.foodService.periodEndDate;
                    }
                    element.currentWeek = type;
                });
            }
            if (!type) {
                se.foodsnextweek = data;
                se.sortfoodnextweek();
                se.foodnextweekbeforefilter = [...se.foodsnextweek];
                se.foodService.listItemsFoodNextweek = [...se.foodsnextweek];
            }
            else {
                se.foods = data;
                se.sortfood();
                se.foodbeforefilter = [...se.foods];
                se.foodService.listItemsFood = [...se.foods];
            }
        });
    }
    sortfood() {
        this.foods.sort(function (a, b) {
            var nameA = a.categoryTypeId;
            var nameB = b.categoryTypeId;
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
    }
    sortfoodnextweek() {
        this.foodsnextweek.sort(function (a, b) {
            var nameA = a.categoryTypeId;
            var nameB = b.categoryTypeId;
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        });
    }
    itemComboClick(item, type) {
        var se = this;
        se.gf.hideStatusBar();
        se.foodService.itemFoodDetail = item;
        se.navCtrl.navigateForward('/foodcombodetail');
    }
    itemFilterClick(idx) {
        var se = this;
        se.foodService.objectFilter = {};
        if (idx == 1) {
            se.itemViBacClick = !se.itemViBacClick;
            if (se.itemViBacClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected");
                if (se.itemViTrungClick) {
                    se.itemViTrungClick = !se.itemViTrungClick;
                }
                if (se.itemViNamClick) {
                    se.itemViNamClick = !se.itemViNamClick;
                }
                if (se.itemCollectionClick) {
                    se.itemCollectionClick = !se.itemCollectionClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected");
            }
        }
        if (idx == 2) {
            se.itemViTrungClick = !se.itemViTrungClick;
            if (se.itemViTrungClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected");
                if (se.itemViBacClick) {
                    se.itemViBacClick = !se.itemViBacClick;
                }
                if (se.itemViNamClick) {
                    se.itemViNamClick = !se.itemViNamClick;
                }
                if (se.itemCollectionClick) {
                    se.itemCollectionClick = !se.itemCollectionClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected");
            }
        }
        if (idx == 3) {
            se.itemViNamClick = !se.itemViNamClick;
            if (se.itemViNamClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected");
                if (se.itemViTrungClick) {
                    se.itemViTrungClick = !se.itemViTrungClick;
                }
                if (se.itemViBacClick) {
                    se.itemViBacClick = !se.itemViBacClick;
                }
                if (se.itemCollectionClick) {
                    se.itemCollectionClick = !se.itemCollectionClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected");
            }
        }
        if (idx == -2) {
            se.itemCollectionClick = !se.itemCollectionClick;
            if (se.itemCollectionClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected");
                if (se.itemViTrungClick) {
                    se.itemViTrungClick = !se.itemViTrungClick;
                }
                if (se.itemViBacClick) {
                    se.itemViBacClick = !se.itemViBacClick;
                }
                if (se.itemViNamClick) {
                    se.itemViNamClick = !se.itemViNamClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected");
            }
        }
        if (idx == 5) {
            se.itemThanhDamClick = !se.itemThanhDamClick;
            if (se.itemThanhDamClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelthanhdam").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labeldamda").removeClass("selected");
                if (se.itemDamDaClick) {
                    se.itemDamDaClick = !se.itemDamDaClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelthanhdam").removeClass("selected");
            }
        }
        if (idx == 6) {
            se.itemDamDaClick = !se.itemDamDaClick;
            if (se.itemDamDaClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labeldamda").removeClass("selected").addClass('selected');
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelthanhdam").removeClass("selected");
                if (se.itemThanhDamClick) {
                    se.itemThanhDamClick = !se.itemThanhDamClick;
                }
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labeldamda").removeClass("selected");
            }
        }
        if (idx == 7) {
            se.item199Click = !se.item199Click;
            if (se.item199Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label199").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label199").removeClass("selected");
            }
        }
        if (idx == 8) {
            se.item299Click = !se.item299Click;
            if (se.item299Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label299").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label299").removeClass("selected");
            }
        }
        if (idx == 9) {
            se.item399Click = !se.item399Click;
            if (se.item399Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label399").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label399").removeClass("selected");
            }
        }
        se.foodService.objectFilter = {};
        se.foodService.objectFilter = {
            itemViBacClick: se.itemViBacClick,
            itemViTrungClick: se.itemViTrungClick,
            itemViNamClick: se.itemViNamClick,
            itemViBaMienClick: se.itemViBaMienClick,
            itemThanhDamClick: se.itemThanhDamClick,
            itemDamDaClick: se.itemDamDaClick,
            item199Click: se.item199Click,
            item299Click: se.item299Click,
            item399Click: se.item399Click
        };
        se.filterItem();
    }
    itemFilterClickNotChangeValue(idx) {
        var se = this;
        if (idx == 1) {
            if (se.itemViBacClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvibac").removeClass("selected");
            }
        }
        if (idx == 2) {
            if (se.itemViTrungClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvitrung").removeClass("selected");
            }
        }
        if (idx == 3) {
            if (se.itemViNamClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelvinam").removeClass("selected");
            }
        }
        if (idx == -2) {
            if (se.itemCollectionClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelcollection").removeClass("selected");
            }
        }
        if (idx == 5) {
            if (se.itemThanhDamClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelthanhdam").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labelthanhdam").removeClass("selected");
            }
        }
        if (idx == 6) {
            if (se.itemDamDaClick) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labeldamda").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".labeldamda").removeClass("selected");
            }
        }
        if (idx == 7) {
            if (se.item199Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label199").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label199").removeClass("selected");
            }
        }
        if (idx == 8) {
            if (se.item299Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label299").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label299").removeClass("selected");
            }
        }
        if (idx == 9) {
            if (se.item399Click) {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label399").removeClass("selected").addClass('selected');
            }
            else {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".label399").removeClass("selected");
            }
        }
        se.filterItem();
    }
    filterItem() {
        var se = this;
        se.datafilter = se.foodbeforefilter;
        se.datafilternextweek = se.foodnextweekbeforefilter;
        var listfilter = [], listfilternextweek = [];
        if (se.itemViBacClick) {
            se.datafilter = se.getItemFilter(1);
            se.datafilternextweek = se.getItemFilterNextWeek(1);
            if (se.datafilter && se.datafilter.length > 0) {
                listfilter = [...se.datafilter];
            }
            if (se.datafilternextweek && se.datafilternextweek.length > 0) {
                listfilternextweek = [...se.datafilternextweek];
            }
        }
        if (se.itemViTrungClick) {
            se.datafilter = se.getItemFilter(2);
            se.datafilternextweek = se.getItemFilterNextWeek(2);
            if (se.datafilter && se.datafilter.length > 0) {
                if (listfilter.length > 0) {
                    listfilter = [...listfilter, ...se.datafilter];
                }
                else {
                    listfilter = [...se.datafilter];
                }
                if (listfilternextweek.length > 0) {
                    listfilternextweek = [...listfilternextweek, ...se.datafilternextweek];
                }
                else {
                    listfilternextweek = [...se.datafilternextweek];
                }
            }
        }
        if (se.itemViNamClick) {
            se.datafilter = se.getItemFilter(3);
            se.datafilternextweek = se.getItemFilterNextWeek(3);
            if (se.datafilter && se.datafilter.length > 0) {
                if (listfilter.length > 0) {
                    listfilter = [...listfilter, ...se.datafilter];
                }
                else {
                    listfilter = [...se.datafilter];
                }
                if (listfilternextweek.length > 0) {
                    listfilternextweek = [...listfilternextweek, ...se.datafilternextweek];
                }
                else {
                    listfilternextweek = [...se.datafilternextweek];
                }
            }
        }
        if (se.itemViBaMienClick) {
            se.datafilter = se.getItemFilter(4);
            se.datafilternextweek = se.getItemFilterNextWeek(4);
            if (se.datafilter && se.datafilter.length > 0) {
                if (listfilter.length > 0) {
                    listfilter = [...listfilter, ...se.datafilter];
                }
                else {
                    listfilter = [...se.datafilter];
                }
                if (listfilternextweek.length > 0) {
                    listfilternextweek = [...listfilternextweek, ...se.datafilternextweek];
                }
                else {
                    listfilternextweek = [...se.datafilternextweek];
                }
            }
        }
        if (se.itemCollectionClick) {
            se.datafilter = se.getItemFilter(-2);
            se.datafilternextweek = se.getItemFilterNextWeek(-2);
            if (se.datafilter && se.datafilter.length > 0) {
                if (listfilter.length > 0) {
                    listfilter = [...listfilter, ...se.datafilter];
                }
                else {
                    listfilter = [...se.datafilter];
                }
                if (listfilternextweek.length > 0) {
                    listfilternextweek = [...listfilternextweek, ...se.datafilternextweek];
                }
                else {
                    listfilternextweek = [...se.datafilternextweek];
                }
            }
        }
        var listthanhdam = [], listdamda = [], listfiltercategory = [...listfilter], listthanhdamnextweek = [], listdamdanextweek = [], listfiltercategorynextweek = [...listfilternextweek];
        if (se.itemThanhDamClick) {
            listthanhdam = se.getItemFilter(5, listfiltercategory);
            listthanhdamnextweek = se.getItemFilterNextWeek(5, listfiltercategorynextweek);
            if (listthanhdam && listthanhdam.length > 0) {
                listfilter = [...listthanhdam];
            }
            if (listthanhdamnextweek && listthanhdamnextweek.length > 0) {
                listfilternextweek = [...listthanhdamnextweek];
            }
        }
        if (se.itemDamDaClick) {
            listdamda = se.getItemFilter(6, listfiltercategory);
            listdamdanextweek = se.getItemFilterNextWeek(6, listfiltercategorynextweek);
            if (listdamda && listdamda.length > 0) {
                if (listthanhdam.length > 0) {
                    listfilter = [...listthanhdam, ...listdamda];
                }
                else {
                    listfilter = [...listdamda];
                }
                if (listthanhdamnextweek.length > 0) {
                    listfilternextweek = [...listthanhdamnextweek, ...listdamdanextweek];
                }
                else {
                    listfilternextweek = [...listdamdanextweek];
                }
            }
        }
        var listfilterprice = [], listfilterpricenextweek = [], listfiltertypeprice = [...listfilter], listfiltertypepricenextweek = [...listfilternextweek], list199 = [], list299 = [], list399 = [], list199nextweek = [], list299nextweek = [], list399nextweek = [];
        if (se.item199Click) {
            se.datafilter = se.getItemFilter(7, listfiltertypeprice);
            if (se.datafilter && se.datafilter.length > 0) {
                listfilter = [...se.datafilter];
                list199 = [...se.datafilter];
            }
            se.datafilternextweek = se.getItemFilterNextWeek(7, listfiltertypepricenextweek);
            if (se.datafilternextweek && se.datafilternextweek.length > 0) {
                listfilternextweek = [...se.datafilternextweek];
                list199nextweek = [...se.datafilternextweek];
            }
        }
        if (se.item299Click) {
            se.datafilter = se.getItemFilter(8, listfiltertypeprice);
            if (se.datafilter && se.datafilter.length > 0) {
                list299 = [...se.datafilter];
                if (list199.length > 0) {
                    listfilter = [...list199, ...se.datafilter];
                }
                else {
                    listfilter = [...se.datafilter];
                }
            }
            se.datafilternextweek = se.getItemFilterNextWeek(8, listfiltertypepricenextweek);
            if (se.datafilternextweek && se.datafilternextweek.length > 0) {
                list299nextweek = [...se.datafilternextweek];
                if (list299nextweek.length > 0) {
                    listfilternextweek = [...list299nextweek, ...se.datafilternextweek];
                }
                else {
                    listfilternextweek = [...se.datafilternextweek];
                }
            }
        }
        if (se.item399Click) {
            se.datafilter = se.getItemFilter(9, listfiltertypeprice);
            if (se.datafilter && se.datafilter.length > 0) {
                if (list199.length > 0) {
                    if (list299.length > 0) {
                        listfilter = [...list199, ...list299, ...se.datafilter];
                    }
                    else {
                        listfilter = [...list199, ...se.datafilter];
                    }
                }
                else {
                    if (list299.length > 0) {
                        listfilter = [...list299, ...se.datafilter];
                    }
                    else {
                        listfilter = [...se.datafilter];
                    }
                }
            }
            se.datafilternextweek = se.getItemFilterNextWeek(9, listfiltertypepricenextweek);
            if (se.datafilternextweek && se.datafilternextweek.length > 0) {
                if (list199nextweek.length > 0) {
                    if (list299nextweek.length > 0) {
                        listfilternextweek = [...list199nextweek, ...list299nextweek, ...se.datafilternextweek];
                    }
                    else {
                        listfilternextweek = [...list199nextweek, ...se.datafilternextweek];
                    }
                }
                else {
                    if (list299nextweek.length > 0) {
                        listfilternextweek = [...list299nextweek, ...se.datafilternextweek];
                    }
                    else {
                        listfilternextweek = [...se.datafilternextweek];
                    }
                }
            }
        }
        if (listfilter && listfilter.length > 0) {
            se.foods = listfilter;
            if (se.itemCollectionClick) {
                se.foods.sort((a, b) => { return a.categoryTypeId < b.categoryTypeId ? -1 : 1; });
            }
            se.foodService.itemCountFilter.emit(1);
        }
        else {
            se.foods = se.foodbeforefilter;
            se.foodService.itemCountFilter.emit(0);
        }
        if (listfilternextweek && listfilternextweek.length > 0) {
            se.foodsnextweek = listfilternextweek;
            if (se.itemCollectionClick) {
                se.foodsnextweek.sort((a, b) => { return a.categoryTypeId < b.categoryTypeId ? -1 : 1; });
            }
            se.foodService.itemCountFilter.emit(1);
        }
        else {
            se.foodsnextweek = se.foodnextweekbeforefilter;
            se.foodService.itemCountFilter.emit(0);
        }
    }
    getItemFilter(idx, listfilter) {
        var se = this;
        var listresult = [];
        var catid = -1;
        var groupid = -1;
        var typepriceid = -1;
        var list = [];
        if (idx == 1) {
            catid = 1;
        }
        else if (idx == 2) {
            catid = 2;
        }
        else if (idx == 3) {
            catid = 3;
        }
        else if (idx == 4) {
            catid = 0;
        }
        else if (idx == -2) {
            catid = -2;
        }
        else if (idx == 5) {
            groupid = 0;
        }
        else if (idx == 6) {
            groupid = 1;
        }
        else if (idx == 7) {
            typepriceid = 1;
        }
        else if (idx == 8) {
            typepriceid = 2;
        }
        else if (idx == 9) {
            typepriceid = 3;
        }
        if (idx <= 4) {
            if (idx != -2) {
                list = se.foodbeforefilter.filter((el) => { return el.categoryTypeId == catid || el.categoryTypeId == 0; });
            }
            else {
                list = se.foodbeforefilter.filter((el) => { return el.categoryTypeId == catid; });
            }
        }
        else if (idx == 5 || idx == 6) {
            if (listfilter && listfilter.length > 0) {
                list = listfilter.filter((el) => { return el.groupId == groupid; });
            }
            else {
                list = se.foodbeforefilter.filter((el) => { return el.groupId == groupid; });
            }
        }
        else {
            if (listfilter && listfilter.length > 0) {
                list = listfilter.filter((el) => { return el.typePriceId == typepriceid; });
            }
            else {
                list = se.foodbeforefilter.filter((el) => { return el.typePriceId == typepriceid; });
            }
        }
        if (list && list.length > 0) {
            if (listresult.length == 0) {
                listresult.push(...list);
            }
            else {
                list.forEach(element => {
                    if (!se.gf.checkExistsItemInArray(listresult, element, 'searchexperience')) {
                        listresult.push(element);
                    }
                });
            }
        }
        return listresult;
    }
    getItemFilterNextWeek(idx, listfilter) {
        var se = this;
        var listresult = [];
        var catid = -1;
        var groupid = -1;
        var typepriceid = -1;
        var list = [];
        if (idx == 1) {
            catid = 1;
        }
        else if (idx == 2) {
            catid = 2;
        }
        else if (idx == 3) {
            catid = 3;
        }
        else if (idx == 4) {
            catid = 0;
        }
        else if (idx == -2) {
            catid = -2;
        }
        else if (idx == 5) {
            groupid = 0;
        }
        else if (idx == 6) {
            groupid = 1;
        }
        else if (idx == 7) {
            typepriceid = 1;
        }
        else if (idx == 8) {
            typepriceid = 2;
        }
        else if (idx == 9) {
            typepriceid = 3;
        }
        if (idx <= 4) {
            if (idx != -2) {
                list = se.foodnextweekbeforefilter.filter((el) => { return el.categoryTypeId == catid || el.categoryTypeId == 0; });
            }
            else {
                list = se.foodnextweekbeforefilter.filter((el) => { return el.categoryTypeId == catid; });
            }
        }
        else if (idx == 5 || idx == 6) {
            if (listfilter && listfilter.length > 0) {
                list = listfilter.filter((el) => { return el.groupId == groupid; });
            }
            else {
                list = se.foodnextweekbeforefilter.filter((el) => { return el.groupId == groupid; });
            }
        }
        else {
            if (listfilter && listfilter.length > 0) {
                list = listfilter.filter((el) => { return el.typePriceId == typepriceid; });
            }
            else {
                list = se.foodnextweekbeforefilter.filter((el) => { return el.typePriceId == typepriceid; });
            }
        }
        if (list && list.length > 0) {
            if (listresult.length == 0) {
                listresult.push(...list);
            }
            else {
                list.forEach(element => {
                    if (!se.gf.checkExistsItemInArray(listresult, element, 'searchexperience')) {
                        listresult.push(element);
                    }
                });
            }
        }
        return listresult;
    }
    showFilter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.gf.hideStatusBar();
            this.foodService.listItemsFood = this.foodbeforefilter;
            const modal = yield this.modalCtrl.create({
                component: _foodfilter_foodfilter_page__WEBPACK_IMPORTED_MODULE_7__["FoodfilterPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.itemViBacClick = this.foodService.objectFilter.itemViBacClick;
                this.itemViTrungClick = this.foodService.objectFilter.itemViTrungClick;
                this.itemViNamClick = this.foodService.objectFilter.itemViNamClick;
                this.itemCollectionClick = this.foodService.objectFilter.itemCollectionClick;
                this.itemViBaMienClick = this.foodService.objectFilter.itemViBaMienClick;
                this.itemThanhDamClick = this.foodService.objectFilter.itemThanhDamClick;
                this.itemDamDaClick = this.foodService.objectFilter.itemDamDaClick;
                this.item199Click = this.foodService.objectFilter.item199Click;
                this.item299Click = this.foodService.objectFilter.item299Click;
                this.item399Click = this.foodService.objectFilter.item399Click;
                this.itemFilterClickNotChangeValue(1);
                this.itemFilterClickNotChangeValue(2);
                this.itemFilterClickNotChangeValue(3);
                this.itemFilterClickNotChangeValue(-2);
                this.itemFilterClickNotChangeValue(4);
                this.itemFilterClickNotChangeValue(5);
                this.itemFilterClickNotChangeValue(6);
                this.itemFilterClickNotChangeValue(7);
                this.itemFilterClickNotChangeValue(8);
                this.itemFilterClickNotChangeValue(9);
            });
        });
    }
    showCart() {
        this.foodService.fromPage = "homefood";
        this.gf.hideStatusBar();
        this.navCtrl.navigateForward('/foodbill');
    }
    presentToastWarning(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    getListMenuByTypePrice(listmenu) {
        var se = this;
        se.listMenu199 = [];
        se.listMenu299 = [];
        se.listMenu399 = [];
        listmenu.forEach(element => {
            if (element.typePriceId == 1) {
                se.listMenu199.push(element);
            }
            else if (element.typePriceId == 2) {
                se.listMenu299.push(element);
            }
            else if (element.typePriceId == 3) {
                se.listMenu399.push(element);
            }
        });
    }
    showInstallmentDetail() {
        var se = this;
        se.navCtrl.navigateForward('/installmentdetail');
    }
    filterClick(idx) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var listButton = [];
            if (idx == 1) {
                listButton = [
                    {
                        text: "Vị Bắc",
                        cssClass: "btn-vibac cls-border-bottom",
                        handler: () => {
                            this.itemViBacClick = !this.itemViBacClick;
                            this.itemViBacClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vibac > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vibac > span").removeClass('selected');
                            if (this.itemViTrungClick) {
                                this.itemViTrungClick = !this.itemViTrungClick;
                            }
                            if (this.itemViNamClick) {
                                this.itemViNamClick = !this.itemViNamClick;
                            }
                            if (this.itemCollectionClick) {
                                this.itemCollectionClick = !this.itemCollectionClick;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "Vị Trung",
                        cssClass: "btn-vitrung cls-border-bottom",
                        handler: () => {
                            this.itemViTrungClick = !this.itemViTrungClick;
                            this.itemViTrungClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vitrung > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vitrung > span").removeClass('selected');
                            if (this.itemViBacClick) {
                                this.itemViBacClick = !this.itemViBacClick;
                            }
                            if (this.itemViNamClick) {
                                this.itemViNamClick = !this.itemViNamClick;
                            }
                            if (this.itemCollectionClick) {
                                this.itemCollectionClick = !this.itemCollectionClick;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "Vị Nam",
                        cssClass: "btn-vinam",
                        handler: () => {
                            this.itemViNamClick = !this.itemViNamClick;
                            this.itemViNamClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vinam > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vinam > span").removeClass('selected');
                            if (this.itemViTrungClick) {
                                this.itemViTrungClick = !this.itemViTrungClick;
                            }
                            if (this.itemViBacClick) {
                                this.itemViBacClick = !this.itemViBacClick;
                            }
                            if (this.itemCollectionClick) {
                                this.itemCollectionClick = !this.itemCollectionClick;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "Collection",
                        cssClass: "btn-collection",
                        handler: () => {
                            this.itemCollectionClick = !this.itemCollectionClick;
                            this.itemCollectionClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-collection > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-collection > span").removeClass('selected');
                            if (this.itemViTrungClick) {
                                this.itemViTrungClick = !this.itemViTrungClick;
                            }
                            if (this.itemViBacClick) {
                                this.itemViBacClick = !this.itemViBacClick;
                            }
                            if (this.itemViNamClick) {
                                this.itemViNamClick = !this.itemViNamClick;
                            }
                            this.executeFilter();
                        }
                    },
                ];
            }
            else if (idx == 2) {
                listButton = [
                    {
                        text: "Thanh Đạm",
                        cssClass: "btn-thanhdam cls-border-bottom",
                        handler: () => {
                            this.itemThanhDamClick = !this.itemThanhDamClick;
                            this.itemThanhDamClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-thanhdam > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-thanhdam > span").removeClass('selected');
                            if (this.itemDamDaClick) {
                                this.itemDamDaClick = !this.itemDamDaClick;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "Đậm Đà",
                        cssClass: "btn-damda",
                        handler: () => {
                            this.itemDamDaClick = !this.itemDamDaClick;
                            this.itemDamDaClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-damda > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-damda > span").removeClass('selected');
                            if (this.itemThanhDamClick) {
                                this.itemThanhDamClick = !this.itemThanhDamClick;
                            }
                            this.executeFilter();
                        }
                    }
                ];
            }
            else if (idx == 3) {
                listButton = [
                    {
                        text: "225.000 đ/tuần",
                        cssClass: "btn-199 cls-border-bottom",
                        handler: () => {
                            this.item199Click = !this.item199Click;
                            this.item199Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-199 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-199 > span").removeClass('selected');
                            if (this.item299Click) {
                                this.item299Click = !this.item299Click;
                            }
                            if (this.item399Click) {
                                this.item399Click = !this.item399Click;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "325.000 đ/tuần",
                        cssClass: "btn-299 cls-border-bottom",
                        handler: () => {
                            this.item299Click = !this.item299Click;
                            this.item299Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-299 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-299 > span").removeClass('selected');
                            if (this.item199Click) {
                                this.item199Click = !this.item199Click;
                            }
                            if (this.item399Click) {
                                this.item399Click = !this.item399Click;
                            }
                            this.executeFilter();
                        }
                    },
                    {
                        text: "425.000 đ/tuần",
                        cssClass: "btn-399",
                        handler: () => {
                            this.item399Click = !this.item399Click;
                            this.item399Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-399 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-399 > span").removeClass('selected');
                            if (this.item199Click) {
                                this.item199Click = !this.item199Click;
                            }
                            if (this.item299Click) {
                                this.item299Click = !this.item299Click;
                            }
                            this.executeFilter();
                        }
                    }
                ];
            }
            let actionSheet = yield this.actionsheetCtrl.create({
                cssClass: 'action-sheets-filter-food',
                buttons: listButton,
                header: idx == 1 ? 'Phong vị' : (idx == 2 ? 'Cách nấu' : 'Giá tiền')
            });
            this.itemViBacClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vibac > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vibac > span").removeClass('selected');
            this.itemViTrungClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vitrung > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vitrung > span").removeClass('selected');
            this.itemViNamClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vinam > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-vinam > span").removeClass('selected');
            this.itemCollectionClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-collection > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-collection > span").removeClass('selected');
            this.itemThanhDamClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-thanhdam > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-thanhdam > span").removeClass('selected');
            this.itemDamDaClick ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-damda > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-damda > span").removeClass('selected');
            this.item199Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-199 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-199 > span").removeClass('selected');
            this.item299Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-299 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-299 > span").removeClass('selected');
            this.item399Click ? jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-399 > span").addClass('selected') : jquery__WEBPACK_IMPORTED_MODULE_4__(".btn-399 > span").removeClass('selected');
            actionSheet.present().then(() => {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".action-sheets-filter-food .action-sheet-title").click(() => {
                    if (jquery__WEBPACK_IMPORTED_MODULE_4__(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Phong vị") {
                        this.removeFilter(this.itemViBacClick ? 1 : (this.itemViTrungClick ? 2 : 3));
                    }
                    else if (jquery__WEBPACK_IMPORTED_MODULE_4__(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Cách nấu") {
                        this.removeFilter(this.itemThanhDamClick ? 4 : 5);
                    }
                    else if (jquery__WEBPACK_IMPORTED_MODULE_4__(".action-sheets-filter-food .action-sheet-title")[0].innerText == "Giá tiền") {
                        this.removeFilter(this.item199Click ? 6 : (this.item299Click ? 7 : 8));
                    }
                    actionSheet.dismiss();
                });
            });
        });
    }
    removeFilter(idx) {
        var se = this;
        if (idx == 1) {
            se.itemViBacClick = false;
        }
        else if (idx == 2) {
            se.itemViTrungClick = false;
        }
        else if (idx == 3) {
            se.itemViNamClick = false;
        }
        else if (idx == -2) {
            se.itemCollectionClick = false;
        }
        else if (idx == 4) {
            se.itemThanhDamClick = false;
        }
        else if (idx == 5) {
            se.itemDamDaClick = false;
        }
        else if (idx == 6) {
            se.item199Click = false;
        }
        else if (idx == 7) {
            se.item299Click = false;
        }
        else if (idx == 8) {
            se.item399Click = false;
        }
        se.executeFilter();
    }
    executeFilter() {
        var se = this;
        se.foodService.objectFilter = {};
        se.foodService.objectFilter = {
            itemViBacClick: se.itemViBacClick,
            itemViTrungClick: se.itemViTrungClick,
            itemViNamClick: se.itemViNamClick,
            itemCollectionClick: se.itemCollectionClick,
            itemViBaMienClick: se.itemViBaMienClick,
            itemThanhDamClick: se.itemThanhDamClick,
            itemDamDaClick: se.itemDamDaClick,
            item199Click: se.item199Click,
            item299Click: se.item299Click,
            item399Click: se.item399Click
        };
        se.filterItem();
    }
    slidechange() {
        var se = this;
        se.sliderfood.getActiveIndex().then((currentIndex) => {
            se.activeWeek = currentIndex == 1 ? true : false;
        });
    }
    setActiveFoodTab(currentIndex) {
        this.activeFoodTab = currentIndex;
        this.setActiveTabNotEmit(currentIndex);
        this.storage.remove('activeFoodTab');
        this.storage.set('activeFoodTab', this.activeFoodTab);
    }
    setActiveTabNotEmit(currentIndex) {
        if (currentIndex === 2) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-diner').removeClass("sub-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-diner').addClass("main-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-lunch').addClass("sub-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.active-mark-food').addClass("main-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-diner').siblings().removeClass('focus');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-diner').addClass('focus');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.active-mark-food').removeClass('left-50').addClass('left-50');
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-content-diner").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-content-lunch").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
        }
        else {
            this.foodService.isDinner = false;
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-diner').removeClass("main-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-lunch').removeClass("sub-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-lunch').addClass("main-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.active-mark-food').removeClass("main-color");
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-lunch').siblings().removeClass('focus');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.div-lunch').addClass('focus');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.active-mark-food').removeClass('left-50');
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-content-lunch").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-content-diner").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
        }
    }
    checkThu() {
        var ti = new Date();
        var thu = moment__WEBPACK_IMPORTED_MODULE_10__(ti).format('dddd');
        if (thu == 'Thursday' || thu == 'Friday' || thu == 'Saturday' || thu == 'Sunday') {
            this.activeWeek = true;
            this.activeWeekDinner = true;
            this.changeWeekDinner(1);
        }
        else {
            this.activeWeek = false;
            this.activeWeekDinner = false;
            this.changeWeekDinner(0);
        }
    }
    itemDinerClick(item) {
        var se = this;
        se.gf.hideStatusBar();
        se.foodService.itemDinnerDetail = item;
        se.navCtrl.navigateForward('fooddinnerdetail');
    }
    getCategoryHomePageDinner(type) {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFood + "/api/FOHome/GetCategoryHomePageDinner?" + (!type ? "currentWeek = 0" : "currentWeek = 1");
        se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data) => {
            if (data && data.length > 0) {
                data.forEach(element => {
                    element.description = element.description.replace("<p>", "");
                    element.description = element.description.replace("</p>", "");
                    if (element.image.indexOf("640x480") == -1) {
                        let urlimage = element.image.substring(0, element.image.length - 4);
                        let tail = element.image.substring(element.image.length - 4, element.image.length);
                        element.image = urlimage + "-640x480" + tail;
                        se.imageLoader.preload(element.image);
                    }
                    if (element.avgPoint > 0) {
                        if (element.avgPoint < 10) {
                            element.avgPoint = element.avgPoint.toFixed(1);
                        }
                    }
                    element.priceDisplay = se.gf.convertNumberToString(element.price);
                    if (!type) {
                        element.startDate = se.foodService.periodStartDate;
                        element.endDate = se.foodService.periodEndDate;
                    }
                    else {
                        element.startDate = se.foodService.periodStartDateNextWeek;
                        element.endDate = se.foodService.periodEndDateNextWeek;
                    }
                    element.currentWeek = !type ? true : false;
                });
            }
            if (!type) {
                se.diners = data;
            }
            else {
                se.dinersnextweek = data;
                se.foodService.listItemsDinnerNextWeek = data;
            }
        });
    }
    changeWeek(type) {
        this.activeWeek = !this.activeWeek;
    }
    changeWeekDinner(type) {
        this.sliderfooddinner.slideTo(!type ? 0 : 1);
    }
    slidechangedinner() {
        var se = this;
        se.sliderfooddinner.getActiveIndex().then((currentIndex) => {
            se.activeWeekDinner = currentIndex == 1 ? true : false;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("countcart"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], HomefoodPage.prototype, "countcart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myFoodSlider'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HomefoodPage.prototype, "sliderfood", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myFoodSliderDinner'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], HomefoodPage.prototype, "sliderfooddinner", void 0);
HomefoodPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homefood',
        template: __webpack_require__(/*! ./homefood.page.html */ "./src/app/homefood/homefood.page.html"),
        styles: [__webpack_require__(/*! ./homefood.page.scss */ "./src/app/homefood/homefood.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_5__["foodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__["ImageLoaderService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_11__["SearchHotel"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_11__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_12__["flightService"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_13__["MytripService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_14__["BizTravelService"]])
], HomefoodPage);



/***/ })

}]);
//# sourceMappingURL=homefood-homefood-module.js.map