(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab5-tab5-module"],{

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ }),

/***/ "./src/app/tab5/tab5.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.module.ts ***!
  \*************************************/
/*! exports provided: Tab5PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5PageModule", function() { return Tab5PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab5_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab5.page */ "./src/app/tab5/tab5.page.ts");







const routes = [
    {
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]
    }
];
let Tab5PageModule = class Tab5PageModule {
};
Tab5PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_6__["Tab5Page"]]
    })
], Tab5PageModule);



/***/ }),

/***/ "./src/app/tab5/tab5.page.html":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row style=\"height: 56px;\">\r\n        <ion-title *ngIf=\"!username\" class=\"title-header\">Thêm</ion-title>\r\n        <ion-title *ngIf=\"username\" class=\"title-header\">Chào {{username}}</ion-title>\r\n    </ion-row>\r\n</ion-header>\r\n<ion-content  style=\"background-color: #ffffff\">\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n                <ion-refresher-content\r\n                pullingIcon=\"none\"\r\n                refreshingSpinner=\"circles\"\r\n                refreshingText=\"\"></ion-refresher-content>\r\n        </ion-refresher>\r\n    <div class=\"no-margin-bottom\" *ngIf=\"isConnected\">\r\n \r\n                            <div class=\"div-wrapimg\" (click)=\"changeAvatar()\"  *ngIf=\"loginuser\">\r\n                                <ion-card class=\"avatar\">\r\n                                        <img *ngIf=\"avatar && !croppedImagepath\" class=\"img-user-avatar\" src=\"{{avatar}}\">\r\n                                        <img *ngIf=\"croppedImagepath\" class=\"img-user-avatar\" [src]=\"croppedImagepath\">\r\n                                </ion-card>\r\n                            </div>\r\n              \r\n              \r\n                            <div *ngIf=\"loginuser\" (click)=\"changeAvatar()\" class=\"text-color text-KH\">Khách hàng thân thiết</div>\r\n\r\n      \r\n        <div class=\"div-item\" *ngIf=\"!loginuser\">\r\n            <div class=\"label-header padding-bottom-16\" >\r\n                Tài khoản của tôi\r\n            </div>\r\n            <!-- <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_login.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogin()\">Đăng nhập/Đăng ký</span>\r\n                </ion-col>\r\n            </ion-row> -->\r\n            <div (click)=\"goToLogin()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/login.svg\">\r\n                <span class=\"item-list margin-left-4\">Đăng nhập/Đăng ký</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser\" [ngClass]=\"loginuser ? 'p-top-24' : ''\" >\r\n            <div class=\"label-header padding-bottom-16\" >\r\n                Tài khoản của tôi\r\n            </div>\r\n            <div (click)=\"Point()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/ivvpoint.svg\">\r\n                <span  class=\"item-list margin-left-4\">iVIVUPoint</span>\r\n                <div class=\"text-color text-right\">\r\n                     {{ point }} điểm\r\n                </div>\r\n              \r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <div class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/user.svg\">\r\n                <span (click)=\"showUserProfile()\" class=\"item-list margin-left-4\">Hồ sơ của tôi</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <div (click)=\"showUserTravelHobby()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/heart.svg\">\r\n                <span class=\"item-list margin-left-4\">Sở thích du lịch</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\" >\r\n            <div (click)=\"showUserVoucher()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/ic_voucher/ticket.svg\">\r\n                <span class=\"item-list margin-left-4\">Voucher của tôi</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\">\r\n            <div (click)=\"linkProfile()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/link.svg\">\r\n                <span class=\"item-list margin-left-4\">Liên kết tài khoản</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\" *ngIf=\"loginuser && bizTravelService.isCompany\">\r\n            <div (click)=\"showCompanyInfo()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/ic_biztravel/suit.svg\">\r\n                <span class=\"item-list margin-left-4\">Thông tin công ty</span>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!loginuser\" class=\"item-support div-item\">\r\n        <div class=\"support\">\r\n        \r\n                        <div class=\"label-header padding-bottom-16\">Nhân viên hỗ trợ</div>\r\n     \r\n                <div class=\"div-flex div-item\" >\r\n                            <img class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                    <div class=\"text-color margin-left-4\"  (click)=\"makeCallSupport(1)\">\r\n                          iVIVU Hà Nội - 19002045\r\n                    </div>\r\n                    <div class=\"support-text s-text text-right\"  (click)=\"makeCallSupport(1)\"><img class=\"icon-style\" src=\"./assets/imgs/ic_call.svg\"></div>\r\n                    <!-- <div class=\"support-text t-right img-review\"> <img class=\"icon-style\" src=\"./assets/imgs/ic_mail.svg\"><div> -->\r\n                    </div>\r\n                <div class=\"div-flex div-item\"  >\r\n                 \r\n                                <img class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                  \r\n                        <div class=\"text-color margin-left-4\" (click)=\"makeCallSupport(2)\">\r\n                                iVIVU Hồ Chí Minh - 19001870\r\n                        </div>\r\n                        <div class=\"support-text s-text text-right\" (click)=\"makeCallSupport(2)\"><img class=\"icon-style\" src=\"./assets/imgs/ic_call.svg\"></div>\r\n                        <!-- <div class=\"support-text t-right img-review\"> <img class=\"icon-style\" src=\"./assets/imgs/ic_mail.svg\"><div> -->\r\n                    </div>\r\n                  \r\n                    <div class=\"div-flex div-item\"  >\r\n                            \r\n                                    <img class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                         \r\n                            <div (click)=\"makeCallSupport(3)\" class=\"text-color margin-left-4\">\r\n                                     iVIVU Cần Thơ - 19002087\r\n                            </div>\r\n                            <div class=\"support-text s-text text-right\"  (click)=\"makeCallSupport(3)\"><img class=\"icon-style\" src=\"./assets/imgs/ic_call.svg\"></div>\r\n                            <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\"> <img class=\"icon-style\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                    </div>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"item-support div-item\">\r\n                <div class=\"support\">\r\n                    <div class=\"label-header padding-bottom-16\">Nhân viên hỗ trợ</div>\r\n                        <div *ngFor=\"let sp of listSupport\">\r\n                                <div class=\"div-flex div-item\" *ngIf=\"sp.isStaffOnline && sp.phone\">\r\n                                            \r\n                                            \r\n                                                        <img *ngIf=\"sp.isStaffOnline && sp.phone\" class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                                   \r\n                                                <div class=\"text-color margin-left-4\" *ngIf=\"sp.phone && sp.isStaffOnline\">\r\n                                                   {{sp.name}}\r\n                                                </div>\r\n                                              \r\n                                                <div  *ngIf=\"sp.isStaffOnline && sp.phone\" class=\"support-text s-text text-right\" (click)=\"makeCallSupport(sp.phone)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></div>\r\n                                               \r\n                                    \r\n                                    </div>\r\n                            </div>\r\n                            <div class=\"div-flex div-item\" >\r\n                                <div>\r\n                                        <img class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                                </div>\r\n                                <div class=\"support-text margin-left-4\" (click)=\"makeCallSupport(2)\">\r\n                                        <span class=\"text-color\">iViVu -19001870</span>\r\n                                </div>\r\n                                <div class=\"support-text s-text text-right\"  (click)=\"makeCallSupport(2)\"><img class=\"img-support\" src=\"./assets/imgs/ic_call.svg\"></div>\r\n                                <!-- <ion-col size=\"1\" class=\"support-text t-right img-review\" (click)=\"sendSMSSupport()\"> <img class=\"img-support\" src=\"./assets/imgs/ic_mail.svg\"></ion-col> -->\r\n                            </div>\r\n                            <div *ngFor=\"let sp of listSupport\">\r\n                                <div class=\"div-flex div-item\" *ngIf=\"!sp.isStaffOnline && sp.phone\">\r\n                              \r\n                                            \r\n                                                        <img class=\"icon-style\" src=\"./assets/iconaccount/support.svg\">\r\n                                   \r\n                                                \r\n                                                <div class=\"support-text-offline margin-left-4\" *ngIf=\"!sp.phone || !sp.isStaffOnline\">\r\n                                                   {{sp.name}}\r\n                                                </div>\r\n                                               \r\n                                                <div  *ngIf=\"!sp.isStaffOnline && sp.phone\" class=\"support-text s-text text-right\"><img class=\"img-support\" src=\"./assets/imgs/ic_call_offline.svg\"></div>\r\n                                    \r\n                                    </div>\r\n                            </div>\r\n                        \r\n                        \r\n                    </div>\r\n                </div>\r\n   \r\n            <div class=\"setting padding-bottom-16\">\r\n            \r\n                            <div class=\"label-header\">Cài đặt</div>\r\n           \r\n                <!-- <ion-row>\r\n                    <ion-col size=\"1\">  \r\n                            <img src=\"./assets/imgs/ic_noti.svg\">\r\n                    </ion-col>\r\n                    <ion-col >\r\n                            <span class=\"item-list\">Thông báo</span>\r\n                    </ion-col>\r\n                </ion-row> -->\r\n            </div>\r\n            <div class=\"div-item\">\r\n  \r\n                <div  class=\"div-flex\">\r\n                    <img class=\"icon-style\" src=\"./assets/iconaccount/info.svg\">\r\n                    <span  class=\"item-list margin-left-4\">Phiên bản</span>\r\n                    <div class=\"text-right\">\r\n                        {{ version }} \r\n                   </div>\r\n                </div>\r\n            </div>\r\n        <div class=\"div-item\">\r\n  \r\n            <div (click)=\"showCondition()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/info.svg\">\r\n                <span  class=\"item-list margin-left-4\">Điều khoản và điều kiện</span>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-item\">\r\n         \r\n            <div (click)=\"showPrivacyPolicy()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/iconaccount/shield.svg\">\r\n                <span  class=\"item-list margin-left-4\">Chính sách quyền riêng tư</span>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"loginuser\" class=\"div-item\">\r\n         \r\n            <div (click)=\"deleteAcc()\" class=\"div-flex\">\r\n                <img class=\"icon-style\" src=\"./assets/imgs/ic_delacc.svg\">\r\n                <span  class=\"item-list margin-left-4\">Xóa tài khoản liên kết</span>\r\n            </div>\r\n        </div>\r\n        <!-- <div *ngIf=\"loginuser\" class=\"div-item\">\r\n            <ion-row >\r\n                <ion-col size=\"1\">\r\n                    <img src=\"./assets/imgs/ic_logout.svg\">\r\n                </ion-col>\r\n                <ion-col>\r\n                    <span class=\"item-list\" (click)=\"goToLogout()\">Đăng xuất</span>\r\n                </ion-col>\r\n            </ion-row>\r\n        </div> -->\r\n        <div *ngIf=\"loginuser\" class=\"padding-top-28\">\r\n            <button ion-button round outline class=\"btn-logout\" (click)=\"goToLogout()\">Đăng xuất</button>\r\n            </div>\r\n        </div>\r\n        <!-- div hiển thị không có kết nối -->\r\n        <div class=\"no-margin-bottom\" *ngIf=\"!isConnected\" style=\"text-align: center;margin-top: 55px\">\r\n            <img src=\"./assets/imgs/empty.svg\">\r\n            <div>\r\n              <p class=\"text-empty\">Vui lòng kết nối mạng để sử dụng các tính năng của ứng dụng.</p>\r\n            </div>\r\n\r\n        </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab5/tab5.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab5/tab5.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  padding-top: 2px;\n}\n\n.label-md {\n  margin: 10px 0px 10px 0;\n}\n\n.no-margin-bottom {\n  padding: 16px;\n  margin-bottom: 0px;\n}\n\n.div-item {\n  padding-bottom: 12px;\n}\n\n.title-header {\n  text-align: center;\n  padding: 0;\n  padding-top: env(safe-area-inset-top);\n}\n\n.img-suit {\n  width: 14px;\n}\n\n.label-header {\n  font-size: 14px;\n  color: #868998;\n}\n\n.item-list {\n  font-size: 16px;\n  color: #3f3b3b;\n}\n\n.icon-list {\n  opacity: 0.7;\n}\n\n.support {\n  padding-top: 18px;\n}\n\n.support-text {\n  color: #26bed6;\n}\n\n.support-text-offline {\n  color: #bdbdbd;\n}\n\n.setting {\n  padding-top: 8px;\n}\n\n.item-support .item-inner {\n  border-bottom: none !important;\n}\n\n.item-call {\n  font-weight: 300;\n}\n\n.list-md .item-block .item-inner {\n  margin-right: 16px;\n}\n\n.img-review img {\n  fill: #26bed6;\n}\n\n.t-right {\n  text-align: right;\n  padding: 5px 0px 5px 0px;\n}\n\n.s-text {\n  padding: 5px 0px 5px 0px;\n}\n\n.img-support {\n  width: 16px;\n  height: 16px;\n}\n\n.item-md.item-block .item-inner {\n  padding-right: 0px;\n}\n\n.img-support-offline {\n  width: 16px;\n  height: 16px;\n  opacity: 0.4;\n}\n\n.p-top-24 {\n  padding-top: 24px;\n}\n\n@media (min-width: 351px) and (max-width: 400px) {\n  .support-text {\n    color: #26bed6;\n    padding-right: 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding-right: 0;\n  }\n}\n\n@media (min-width: 287px) and (max-width: 350px) {\n  .support-text {\n    color: #26bed6;\n    padding: 5px 0;\n  }\n\n  .support-text-offline {\n    color: #bdbdbd;\n    padding: 5px 0;\n  }\n\n  .item-list {\n    font-size: 12px;\n  }\n}\n\n::ng-deep cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 290px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n  border-color: #bdbdbd;\n}\n\n@media (max-height: 1024px) and (min-height: 812px) {\n  ::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n    margin-bottom: 0px;\n  }\n}\n\n::ng-deep .sc-ion-alert-ios-h.cls-alert-showmore {\n  --background: var(--ion-overlay-background-color,#fff);\n  font-size: 14px;\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n  padding: 0;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios {\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button-group.sc-ion-alert-ios {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  flex-wrap: nowrap;\n  font-size: 14px !important;\n  margin-bottom: 0px;\n}\n\n::ng-deep .alert-button.sc-ion-alert-ios {\n  font-size: 14px;\n}\n\n.div-wrapimg {\n  position: relative;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.img-callcenter {\n  width: 12px;\n  height: 12px;\n}\n\n.img-heart {\n  width: 13px;\n  height: 12px;\n  opacity: 0.7;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.logo-fb {\n  height: 22px;\n  width: 22px;\n}\n\n.ico-lock {\n  opacity: 0.6;\n  width: 16px;\n  margin-top: 2px;\n}\n\n.m-t-1 {\n  margin-top: 1px;\n}\n\n.h-27 {\n  height: 27px;\n}\n\n.p-l-3 {\n  padding-left: 3px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.icon-style {\n  width: 16px;\n  height: 16px;\n}\n\n.text-right {\n  position: absolute;\n  right: 16px;\n}\n\n.margin-left-4 {\n  margin-left: 4px;\n}\n\n.padding-bottom-16 {\n  padding-bottom: 16px;\n}\n\n.btn-logout {\n  font-size: 16px;\n  height: 44px;\n  width: 100%;\n  background-color: #fff;\n  border: solid 1px #bdbdbd;\n  color: #3f3b3b;\n  border-radius: 4px;\n}\n\n.padding-top-28 {\n  padding-top: 28px;\n}\n\n.avatar {\n  height: 110px !important;\n  box-shadow: none !important;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n.text-KH {\n  margin-top: 8px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIiwic3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7QUNBUjs7QURFSTtFQUNJLHVCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNFUjs7QURBSTtFQUNJLG9CQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFFQSxxQ0FBQTtBQ0dSOztBRERJO0VBQ0ksV0FBQTtBQ0lSOztBRERJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDS1I7O0FESEk7RUFDSSxZQUFBO0FDTVI7O0FESkk7RUFDSSxpQkFBQTtBQ09SOztBREpJO0VBQ0ksY0FBQTtBQ09SOztBRExJO0VBQ0ksY0FBQTtBQ1FSOztBRE5JO0VBQ0ksZ0JBQUE7QUNTUjs7QURQSTtFQUNJLDhCQUFBO0FDVVI7O0FEUkk7RUFDSSxnQkFBQTtBQ1dSOztBRFRJO0VBQ0ksa0JBQUE7QUNZUjs7QURUaUI7RUFDVCxhQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtFQUNBLHdCQUFBO0FDYVI7O0FEWEk7RUFDSSx3QkFBQTtBQ2NSOztBRFpJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNlUjs7QURiSTtFQUNJLGtCQUFBO0FDZ0JSOztBRGRJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDaUJSOztBRGZJO0VBQ0ksaUJBQUE7QUNrQlI7O0FEaEJJO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsZ0JBQUE7RUNtQlY7O0VEakJNO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0VDb0JWO0FBQ0Y7O0FEbEJJO0VBQ0k7SUFDSSxjQUFBO0lBQ0EsY0FBQTtFQ29CVjs7RURsQk07SUFDSSxjQUFBO0lBQ0EsY0FBQTtFQ3FCVjs7RURuQk07SUFDSSxlQUFBO0VDc0JWO0FBQ0Y7O0FEbEJJO0VBQ0ksOEZBQUE7RUFDQSw2QkFBQTtFQUVBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtHQUFBLGdDQUFBO09BQUEsNEJBQUE7QUNtQlI7O0FEaEJJO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNrQk47O0FEaEJJO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDa0JOOztBRGhCSTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUNrQk47O0FEaEJJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDa0JSOztBRGhCTTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0FDa0JSOztBRGhCSTtFQUNJO0lBQ0Esa0JBQUE7RUNrQk47QUFDRjs7QURoQkk7RUFDSSxzREFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ2tCUjs7QURoQkk7RUFDRSw4QkFBQTtBQ2tCTjs7QURoQkk7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ2lCUjs7QURkSTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDZ0JOOztBRGRJO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDZ0JOOztBRGRJO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ2dCTjs7QURkSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2dCTjs7QURkSTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ2dCTjs7QURkSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDZ0JSOztBRGJRO0VBQ0ksa0JBQUE7QUNlWjs7QURYSTtFQUVJLGFBQUE7RUFFQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUNhUjs7QURYSTtFQUNJLGVBQUE7QUNhUjs7QURQQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNVSjs7QURSQTtFQUNJLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUkE7RUFDSSxrQkFBQTtBQ1dKOztBRFRBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksMEJBQUE7QUNhSjs7QURWQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNjSjs7QURaQTtFQUNJLDBCQUFBO0FDZUo7O0FEYkE7RUFDSSxVQUFBO0FDZ0JKOztBRGRBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNpQko7O0FEZkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZUFBQTtBQ21CSjs7QURqQkE7RUFDSSxZQUFBO0FDb0JKOztBRGxCQTtFQUNJLGlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLGFBQUE7QUNzQko7O0FEcEJBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUN1Qko7O0FEckJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FDd0JKOztBRHRCQTtFQUNJLGdCQUFBO0FDeUJKOztBRHZCQTtFQUNJLG9CQUFBO0FDMEJKOztBRHhCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUMyQko7O0FEekJBO0VBQ0ksaUJBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksd0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzZCSjs7QUQzQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUM4QkoiLCJmaWxlIjoic3JjL2FwcC90YWI1L3RhYjUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAucm93e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtbWQge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwO1xyXG4gICAgfVxyXG4gICAgLm5vLW1hcmdpbi1ib3R0b217XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWl0ZW17XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIC8vcGFkZGluZzogMTZweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcclxuICAgIH1cclxuICAgIC5pbWctc3VpdHtcclxuICAgICAgICB3aWR0aDogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubGFiZWwtaGVhZGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzg2ODk5ODtcclxuICAgIH1cclxuICAgIC5pdGVtLWxpc3R7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjM2YzYjNiO1xyXG4gICAgfVxyXG4gICAgLmljb24tbGlzdHtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxOHB4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICAuc3VwcG9ydC10ZXh0e1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgfVxyXG4gICAgLnN1cHBvcnQtdGV4dC1vZmZsaW5le1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgfVxyXG4gICAgLnNldHRpbmd7XHJcbiAgICAgICAgcGFkZGluZy10b3A6OHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lcntcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jYWxse1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5pbWctcmV2aWV3IHtpbWd7XHJcbiAgICAgICAgZmlsbDogIzI2YmVkNjtcclxuICAgIH19XHJcbiAgICAudC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XHJcbiAgICB9XHJcbiAgICAucy10ZXh0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAwcHggNXB4IDBweDtcclxuICAgIH1cclxuICAgIC5pbWctc3VwcG9ydCB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1zdXBwb3J0LW9mZmxpbmV7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0yNHtcclxuICAgICAgICBwYWRkaW5nLXRvcDoyNHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6MzUxcHgpIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgIC5zdXBwb3J0LXRleHR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VwcG9ydC10ZXh0LW9mZmxpbmV7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcclxuICAgICAgICAuc3VwcG9ydC10ZXh0e1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdXBwb3J0LXRleHQtb2ZmbGluZXtcclxuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1saXN0e1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcbjo6bmctZGVlcCB7XHJcbiAgICBjbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe1xyXG4gICAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICB9XHJcbiAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zaG93bW9yZXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsI2ZmZik7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICAgICAgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpe31cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gIH1cclxuXHJcbiAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICBcclxuICB9XHJcblxyXG4vL2F2YXRhciBzdHlsZVxyXG4uZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4uaW1nLXVzZXItYXZhdGFyIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbi50ZXh0LWNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dC1jb2xvcntcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uaXRlbS1tZCwuaXRlbS1pb3Mge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbWctY2FsbGNlbnRlcntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcbi5pbWctaGVhcnR7XHJcbiAgICB3aWR0aDoxM3B4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcbi5pdGVtLW1kLC5pdGVtLWlvcyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ubm8tcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmxvZ28tZmIge1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbn1cclxuLmljby1sb2Nre1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAycHg7XHJcbn1cclxuLm0tdC0xIHtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4uaC0yN3tcclxuICAgIGhlaWdodDogMjdweDtcclxufVxyXG4ucC1sLTMge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbn1cclxuLmRpdi1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleFxyXG59XHJcbi5pY29uLXN0eWxle1xyXG4gICAgd2lkdGg6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuLnRleHQtcmlnaHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTZweDtcclxufVxyXG4ubWFyZ2luLWxlZnQtNHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLnBhZGRpbmctYm90dG9tLTE2e1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuLmJ0bi1sb2dvdXR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgY29sb3I6ICMzZjNiM2I7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuLnBhZGRpbmctdG9wLTI4e1xyXG4gICAgcGFkZGluZy10b3A6IDI4cHg7XHJcbn1cclxuLmF2YXRhcntcclxuICAgIGhlaWdodDogMTEwcHggIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG4udGV4dC1LSHtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIiwiLnJvdyB7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5sYWJlbC1tZCB7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCAwO1xufVxuXG4ubm8tbWFyZ2luLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmRpdi1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG59XG5cbi50aXRsZS1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG59XG5cbi5pbWctc3VpdCB7XG4gIHdpZHRoOiAxNHB4O1xufVxuXG4ubGFiZWwtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzg2ODk5ODtcbn1cblxuLml0ZW0tbGlzdCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMzZjNiM2I7XG59XG5cbi5pY29uLWxpc3Qge1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbi5zdXBwb3J0IHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG5cbi5zdXBwb3J0LXRleHQge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnN1cHBvcnQtdGV4dC1vZmZsaW5lIHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5zZXR0aW5nIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cblxuLml0ZW0tc3VwcG9ydCAuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tY2FsbCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5saXN0LW1kIC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uaW1nLXJldmlldyBpbWcge1xuICBmaWxsOiAjMjZiZWQ2O1xufVxuXG4udC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5zLXRleHQge1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwcHg7XG59XG5cbi5pbWctc3VwcG9ydCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5pbWctc3VwcG9ydC1vZmZsaW5lIHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgb3BhY2l0eTogMC40O1xufVxuXG4ucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM1MXB4KSBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG4gIC5zdXBwb3J0LXRleHQtb2ZmbGluZSB7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzUwcHgpIHtcbiAgLnN1cHBvcnQtdGV4dCB7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAuc3VwcG9ydC10ZXh0LW9mZmxpbmUge1xuICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgLml0ZW0tbGlzdCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG46Om5nLWRlZXAgY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjkwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xufVxuQG1lZGlhIChtYXgtaGVpZ2h0OiAxMDI0cHgpIGFuZCAobWluLWhlaWdodDogODEycHgpIHtcbiAgOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFsZXJ0LWlvcy1oLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvciwjZmZmKTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbjo6bmctZGVlcCAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy11c2VyLWF2YXRhciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLml0ZW0tbWQsIC5pdGVtLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4uaW1nLWNhbGxjZW50ZXIge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4uaW1nLWhlYXJ0IHtcbiAgd2lkdGg6IDEzcHg7XG4gIGhlaWdodDogMTJweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaXRlbS1tZCwgLml0ZW0taW9zIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28tZmIge1xuICBoZWlnaHQ6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xufVxuXG4uaWNvLWxvY2sge1xuICBvcGFjaXR5OiAwLjY7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi5tLXQtMSB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmgtMjcge1xuICBoZWlnaHQ6IDI3cHg7XG59XG5cbi5wLWwtMyB7XG4gIHBhZGRpbmctbGVmdDogM3B4O1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaWNvbi1zdHlsZSB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ucGFkZGluZy1ib3R0b20tMTYge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLmJ0bi1sb2dvdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogNDRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIGNvbG9yOiAjM2YzYjNiO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5wYWRkaW5nLXRvcC0yOCB7XG4gIHBhZGRpbmctdG9wOiAyOHB4O1xufVxuXG4uYXZhdGFyIHtcbiAgaGVpZ2h0OiAxMTBweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4udGV4dC1LSCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab5/tab5.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab5/tab5.page.ts ***!
  \***********************************/
/*! exports provided: Tab5Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab5Page", function() { return Tab5Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/ngx/index.js");
/* harmony import */ var _network_provider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../network-provider.service */ "./src/app/network-provider.service.ts");
/* harmony import */ var _cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../cuspoints/cuspoints */ "./src/app/cuspoints/cuspoints.ts");
/* harmony import */ var _usertravelhobby_usertravelhobby__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../usertravelhobby/usertravelhobby */ "./src/app/usertravelhobby/usertravelhobby.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _confirmemailaccount_confirmemailaccount_page__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../confirmemailaccount/confirmemailaccount.page */ "./src/app/confirmemailaccount/confirmemailaccount.page.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");






















let Tab5Page = class Tab5Page {
    constructor(platform, navCtrl, storage, modalCtrl, router, callNumber, valueGlobal, zone, alertCtrl, gf, loadingCtrl, network, networkProvider, actionsheetCtrl, camera, crop, file, fcm, bizTravelService, appVersion, activityService, _voucherService) {
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
        this.bizTravelService = bizTravelService;
        this.appVersion = appVersion;
        this.activityService = activityService;
        this._voucherService = _voucherService;
        this.loginuser = null;
        this.username = null;
        this.listSupport = [];
        this.isShowConfirm = false;
        this.point = 0;
        this.validemail = true;
        this.point = 0;
        storage.get('auth_token').then(auth_token => {
            this.loginuser = auth_token;
        });
        this.storage.get('fbaccesstoken').then((accesstoken) => {
            this.linkfb = accesstoken;
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
            se.subscription = se.router.events.subscribe((event) => {
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
                        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__["NavigationEnd"] && (event.url.indexOf("tab5") != -1)) {
                            se.onRefreshAvatar();
                        }
                    }
                });
            });
            se.activityService.itemRefreshDeletionAccount.pipe().subscribe((data) => {
                if (data) {
                    se.checkLogout();
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
            se.storage.get('fbaccesstoken').then((accesstoken) => {
                se.linkfb = accesstoken;
            });
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/mobile/OliviaApis/BookingMemberDetailByUser',
                    timeout: 100000,
                    maxAttempts: 5,
                    retryDelay: 20000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "show-more";
                        error.func = "loadEmployeeSupport";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
                    }
                });
            }
        });
    }
    checkExistEmployee(list, itemcheck) {
        var se = this, res = false;
        var obj = list.filter((item) => {
            return item.name == itemcheck.name;
        });
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
    ionViewDidLeave() {
        this.checkLogout();
    }
    checkLogout() {
        this.gf.checkLogout().then((data) => {
            console.log(data);
            if (!data) {
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
                this.storage.remove('listmytrips');
                this.storage.clear();
                this.zone.run(() => {
                    this.croppedImagepath = null;
                    this.avatar = null;
                    this.valueGlobal.backValue = 'tab5';
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
                    this.storage.get('auth_token').then(id_token => {
                        if (id_token !== null) {
                            this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                        }
                    });
                });
                this.valueGlobal.refreshUserToken.emit(1);
            }
        });
    }
    ionViewWillEnter() {
        var se = this;
        se.point = 0;
        this.appVersion.getVersionNumber().then((version) => {
            console.log(version);
            this.zone.run(() => {
                this.version = version;
            });
        });
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
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, null);
                    throw new Error(error);
                }
                ;
            }
            const splash = document.getElementById('splash-screen');
            if (splash) {
                splash.style.opacity = '0';
                setTimeout(() => {
                    splash.remove();
                }, 300);
            }
        });
    }
    goToLogin() {
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
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, null);
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
                    }, {
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
                            this.navCtrl.navigateBack('/');
                        }
                    }, {
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
                this.isShowConfirm = false;
            });
        });
    }
    showConfirmLogout(msg, id_token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
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
                            this.storage.remove('listmytrips');
                            this.storage.remove('objAppid');
                            this.storage.clear();
                            this.zone.run(() => {
                                this.croppedImagepath = null;
                                this.avatar = null;
                                this.valueGlobal.backValue = 'tab5';
                                this.point = 0;
                                this.loginuser = null;
                                this.username = "";
                                this.valueGlobal.countNotifi = 0;
                                this.isShowConfirm = false;
                                this.bizTravelService.bizAccount = null;
                                this.bizTravelService.actionHistory = null;
                                this.bizTravelService.isCompany = false;
                                this._voucherService.hasVoucher = false;
                                this._voucherService.vouchers = [];
                                this._voucherService.selectVoucher = null;
                            });
                            this.bizTravelService.accountBizTravelChange.emit(2);
                            this.fcm.getToken().then(token => {
                                this.gf.DeleteTokenOfUser(token, id_token, this.gf.getAppVersion());
                            });
                            this.valueGlobal.refreshUserToken.emit(1);
                            this.navCtrl.navigateForward('/login');
                        }
                    }, {
                        text: 'Không',
                        handler: () => { }
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
                this.presentModal(_cuspoints_cuspoints__WEBPACK_IMPORTED_MODULE_13__["CuspointsPage"]);
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
                    aParameter: true
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
            var loader = yield this.loadingCtrl.create({ message: "", duration: 1000 });
            loader.present();
        });
    }
    showUserTravelHobby() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.presentModal(_usertravelhobby_usertravelhobby__WEBPACK_IMPORTED_MODULE_14__["UserTravelHobbyPage"]);
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "loadUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "loadUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                    }
                    else if (response.statusCode == 401) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('deviceToken').then((devicetoken) => {
                                se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                    setTimeout(() => {
                                        se.loadUserInfoRefresh(token);
                                    }, 100);
                                });
                            });
                        });
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.avatar = data.avatar;
                            });
                            se.point = data.point;
                            se.storage.remove('userInfoData').then(() => {
                                se.storage.set('userInfoData', data);
                            });
                            if (data.bizAccount) {
                                se.bizTravelService.bizAccount = data.bizAccount;
                                se.bizTravelService.isCompany = true;
                            }
                            else {
                                se.bizTravelService.bizAccount = null;
                                se.bizTravelService.isCompany = false;
                            }
                            se.storage.get('fbaccesstoken').then((accesstoken) => {
                                se.linkfb = accesstoken;
                            });
                        }
                    }
                });
            }
        });
    }
    loadUserInfoRefresh(token) {
        var se = this;
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000,
                maxAttempts: 5,
                retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "userprofile",
                        func: "loadUserInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "userprofile";
                    error.func = "loadUserInfo";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        var data = JSON.parse(body);
                        se.zone.run(() => {
                            se.avatar = data.avatar;
                        });
                        se.point = data.point;
                        se.storage.remove('userInfoData').then(() => {
                            se.storage.set('userInfoData', data);
                        });
                        if (data.bizAccount) {
                            se.bizTravelService.bizAccount = data.bizAccount;
                            se.bizTravelService.isCompany = true;
                        }
                        se.storage.get('fbaccesstoken').then((accesstoken) => {
                            se.linkfb = accesstoken;
                        });
                    }
                }
            });
        }
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
                    }, {
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
                correctOrientation: true
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
                correctOrientation: true
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
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/dashboard/UploadAvatarBase64',
                        headers: {
                            Authorization: text
                        },
                        body: {
                            "imgBase64Full": data,
                            "imgBase64Crop": image,
                            "fileExtension": se.fileType
                        },
                        json: true
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                        if (error) {
                            error.page = "userprofile";
                            error.func = "captureImage";
                            error.param = JSON.stringify(options);
                            _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
        this.crop.crop(imgPath, { quality: 100 }).then(newPath => {
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomdetailreview",
                            func: "GetUserInfo",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
                                    info = {
                                        ho: textfullname[0],
                                        ten: name,
                                        phone: data.phone
                                    };
                                }
                                else {
                                    info = {
                                        ho: textfullname[0],
                                        ten: textfullname[1],
                                        phone: data.phone
                                    };
                                }
                                se.storage.set("infocus", info);
                            }
                            else {
                                info = {
                                    ho: "",
                                    ten: "",
                                    phone: data.phone
                                };
                                se.storage.set("infocus", info);
                            }
                            let checkappleemail = (data.email.includes("appleid") || data.email.includes('vivumember.info'));
                            if (!checkappleemail) {
                                se.storage.set("email", data.email);
                            }
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
                            se.storage.get('fbaccesstoken').then((accesstoken) => {
                                se.linkfb = accesstoken;
                            });
                        }
                    }
                });
            }
        });
    }
    GetUserInfoRefresh(token) {
        var se = this;
        if (token) {
            var text = "Bearer " + token;
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                timeout: 10000,
                maxAttempts: 5,
                retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (response.statusCode != 200) {
                    var objError = {
                        page: "roomdetailreview",
                        func: "GetUserInfo",
                        message: response.statusMessage,
                        content: response.body,
                        type: "warning",
                        param: JSON.stringify(options)
                    };
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
                }
                if (error) {
                    error.page = "roomdetailreview";
                    error.func = "GetUserInfo";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
                                info = {
                                    ho: textfullname[0],
                                    ten: name,
                                    phone: data.phone
                                };
                            }
                            else {
                                info = {
                                    ho: textfullname[0],
                                    ten: textfullname[1],
                                    phone: data.phone
                                };
                            }
                            se.storage.set("infocus", info);
                        }
                        else {
                            info = {
                                ho: "",
                                ten: "",
                                phone: data.phone
                            };
                            se.storage.set("infocus", info);
                        }
                        let checkappleemail = (data.email.includes("appleid") || data.email.includes('vivumember.info'));
                        if (!checkappleemail) {
                            se.storage.set("email", data.email);
                        }
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
                        se.storage.get('fbaccesstoken').then((accesstoken) => {
                            se.linkfb = accesstoken;
                        });
                    }
                }
            });
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    showCompanyInfo() {
        this.navCtrl.navigateForward('/companyinfo');
    }
    linkProfile() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/userlinkprofile');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
    }
    showPrivacyPolicy() {
        this.navCtrl.navigateForward('/userprivacypolicy');
    }
    showCondition() {
        this.navCtrl.navigateForward('/usercondition');
    }
    deleteAcc() {
        var se = this;
        se.storage.get('jti').then((memberid) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/getActiveBookingByMemberID?memberid=' + memberid + '&pageIndex=1&pageSize=100',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (error) {
                    error.page = "roomdetailreview";
                    error.func = "GetUserInfo";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                }
                else {
                    if (body) {
                        var data = JSON.parse(body);
                        if (data.status == 0) {
                            se.showConfirmEmail();
                        }
                        else if (data.status == 1) {
                            se.navCtrl.navigateForward('accountdeletionsms');
                        }
                        else if (data.status == 2) {
                            alert('Tài khoản của quý khách đang có booking sắp đi. Vui lòng thử lại sau');
                        }
                        else if (data.status == -2) {
                            alert('Tài khoản của quý khách không tồn tại');
                        }
                        else if (data.status == -1) {
                            alert('Gửi mail bị lỗi. Vui lòng thử lại sau');
                        }
                        se.storage.get('objAppid').then(objAppid => {
                            se.postRevokeTokens(objAppid);
                        });
                        console.log(data.status);
                    }
                }
            });
        });
    }
    postRevokeTokens(objAppid) {
        var options = {
            'method': 'POST',
            'url': 'https://appleid.apple.com/auth/revoke',
            'headers': {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
                'client_id': '1464844301',
                'client_secret': objAppid.identityToken,
                'token': objAppid.authorizationCode
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
            if (error)
                throw new Error(error);
            console.log(response.body);
        });
    }
    showConfirmEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield se.modalCtrl.create({
                component: _confirmemailaccount_confirmemailaccount_page__WEBPACK_IMPORTED_MODULE_19__["ConfirmemailaccountPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.email) {
                    if (data.data.email) {
                        se.storage.get('jti').then((memberid) => {
                            se.storage.get('auth_token').then(auth_token => {
                                var text = "Bearer " + auth_token;
                                if (auth_token) {
                                    var options = {
                                        method: 'GET',
                                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/UpdateEmailMemberUser?userid=' + memberid + '&email=' + data.data.email,
                                        timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                                        headers: {
                                            'cache-control': 'no-cache',
                                            'content-type': 'application/json',
                                            authorization: text
                                        }
                                    };
                                    requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                                        if (error) {
                                            error.page = "roomdetailreview";
                                            error.func = "GetUserInfo";
                                            error.param = JSON.stringify(options);
                                            _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                                        }
                                        else {
                                            if (body) {
                                                var data = JSON.parse(body);
                                                if (data.status == 1) {
                                                    se.deleteAcc();
                                                }
                                                else if (data.status == -1) {
                                                    alert('Gửi mail bị lỗi. Vui lòng thử lại sau');
                                                }
                                            }
                                        }
                                    });
                                }
                            });
                        });
                    }
                }
            });
        });
    }
    showUserVoucher() {
        let se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.navCtrl.navigateForward('/myvoucher');
            }
            else {
                if (se.isShowConfirm)
                    return;
                se.showConfirmLogin("Bạn cần đăng nhập để sử dụng chức năng này.");
                se.isShowConfirm = true;
            }
        });
    }
};
Tab5Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({ selector: 'app-tab5', template: __webpack_require__(/*! ./tab5.page.html */ "./src/app/tab5/tab5.page.html"), styles: [__webpack_require__(/*! ./tab5.page.scss */ "./src/app/tab5/tab5.page.scss")] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_10__["CallNumber"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _network_provider_service__WEBPACK_IMPORTED_MODULE_12__["NetworkProvider"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_15__["Camera"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_17__["Crop"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_16__["File"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_18__["FCM"], _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_2__["BizTravelService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_20__["AppVersion"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["ActivityService"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_21__["voucherService"]])
], Tab5Page);



/***/ })

}]);
//# sourceMappingURL=tab5-tab5-module.js.map