(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userprofile-userprofile-module"],{

/***/ "./src/app/userprofile/userprofile.html":
/*!**********************************************!*\
  !*** ./src/app/userprofile/userprofile.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n        <ion-col style=\"text-align: center;height: 56px;\">\r\n            <div style=\"align-self: center\" >\r\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\r\n                <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n              </div>\r\n            <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hồ sơ của tôi</label></div>\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n    </ion-header>\r\n    \r\n    <ion-content >\r\n        <div class=\"userprofile-content\" *ngIf=\"userInfoData\">\r\n            <ion-row>\r\n                <ion-col class=\"text-center\">\r\n                    <!-- <div class=\"div-wrapimg\"> -->\r\n                        <!-- <img class=\"img-user-avatar\" src=\"{{userInfoData.avatar}}\"> -->\r\n                        <!-- <img [src]=\"DomSanitizer.bypassSecurityTrustUrl(htmlImageFromCamera)\" (click)=\"changeAvatar()\" *ngIf=\"htmlImageFromCamera\" /> -->\r\n                    <!-- </div> -->\r\n                    <div class=\"div-wrapimg\" (click)=\"changeAvatar()\">\r\n                        <ion-card style=\"height:110px !important; box-shadow:none !important;\">\r\n                                <img *ngIf=\"userInfoData.avatar && !croppedImagepath\" class=\"img-user-avatar\" src=\"{{userInfoData.avatar}}\">\r\n                                <img *ngIf=\"croppedImagepath\" class=\"img-user-avatar\" [src]=\"croppedImagepath\">\r\n                        </ion-card>\r\n                    </div>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row  (click)=\"changeAvatar()\">\r\n                <ion-col class=\"text-center\">\r\n                    <div class=\"text-color\">Khách hàng thân thiết</div>\r\n                </ion-col>\r\n            </ion-row>\r\n            <!-- <ion-row>\r\n                    <ion-col col-6 *ngFor=\"let photo of photos; let id = index\">\r\n                        <ion-card-content>\r\n                        <img src=\"../../assets/img/sarah-avatar.png.jpeg\" id =\"myimg\">\r\n                          <img [src]=\"DomSanitizer.bypassSecurityTrustUrl(htmlImageFromCamera)\" *ngIf=\"htmlImageFromCamera\" />\r\n                        </ion-card-content>\r\n                    </ion-col>\r\n            </ion-row> -->\r\n            <form *ngIf='userProfileData' [formGroup]=\"userProfileData\" style=\"margin-top: 24px\" >\r\n                <ion-item style=\"background-color: initial;--padding-start:0\">\r\n                    <ion-label style=\"color:#828282;font-size:14px\" position=\"floating\">Tên đầy đủ</ion-label>\r\n                    <ion-input  clearInput type=\"text\" formControlName=\"name\" (ionChange)=\"nameChange($event)\"></ion-input>\r\n                </ion-item>\r\n                <ion-item style=\"background-color: initial;--padding-start:0\">\r\n                    <ion-label  style=\"color:#828282;font-size:14px\"  position=\"floating\">Số điện thoại</ion-label>\r\n                    <ion-input id=\"ipPhone\" clearInput type=\"text\" formControlName=\"phone\" (ionChange)=\"phoneChange($event)\"></ion-input>\r\n                </ion-item>\r\n                <div *ngIf=\"changephone\" >\r\n                    <button ion-button round outline class=\"button btn-sendOTP\"  (click)=\"sendOTP()\">Gửi mã OTP</button>\r\n                    <!-- <ion-row class=\"row-otp\">\r\n                        <ion-col size=\"2\" class=\"no-padding\"><ion-label class=\"label-otp\">IVV-</ion-label></ion-col>\r\n                        <ion-col class=\"no-padding\"><ion-input id=\"ipOTP\" formControlName=\"otp\" type=\"text\" class=\"input-otp\"></ion-input></ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"sentOTP\">\r\n                        <ion-col style=\"padding-top: 12px;\" class=\"no-padding\"><ion-label class=\"label-sent-otp\">Mã OTP đã gửi về SĐT của Quý Khách, hiệu lực trong vòng 3 phút.</ion-label></ion-col>\r\n                    </ion-row>\r\n                    <ion-row *ngIf=\"strwarning\">\r\n                        <ion-col class=\"no-padding\"><ion-label class=\"label-warning\">{{strwarning}}</ion-label></ion-col>\r\n                    </ion-row> -->\r\n                </div>\r\n                <ion-item style=\"background-color: initial;--padding-start:0\">\r\n                  <ion-label  style=\"font-size:14px\"  position=\"floating\">Email</ion-label>\r\n                  <ion-input  clearInput type=\"text\"  (ionChange)=\"mailChange($event)\" formControlName=\"email\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item *ngIf=\"haspassword\" class=\"lbl-changepass\" style=\"background-color: initial;--padding-start:0\">\r\n                    <ion-label  style=\"color:#828282;font-size:14px\"  position=\"floating\">Mật khẩu</ion-label>\r\n                    <label style=\"right: 0;bottom: -6px;color:#26bed6;font-size:14px;font-weight:bold;position:absolute;padding:16px 0;z-index: 14;\" position=\"stacked\" (click)=\"changepassword()\">Đổi mật khẩu</label>\r\n                    <ion-input readonly class=\"ippassword\" clearInput type=\"password\" value=\"********\" style=\"z-index: 13;width: 200px;justify-content: left;align-self: flex-start;\"></ion-input>\r\n                </ion-item>\r\n                <!-- <ion-item class=\"lbl-changepass\">\r\n                    <ion-label  style=\"color:#828282;font-size:14px\">Đổi mật khẩu:</ion-label>\r\n                    <ion-checkbox (click)=\"changePass()\"></ion-checkbox>\r\n                </ion-item>\r\n                <div *ngIf=\"changepass\">\r\n                    <ion-item *ngIf=\"haspassword\" style=\"background-color: initial\">\r\n                        <ion-label  style=\"color:#828282;font-size:14px\" floating>Mật khẩu cũ:</ion-label>\r\n                        <ion-label  style=\"color:#828282;font-size:14px\" floating *ngIf=\"strwarningoldpass\" class=\"label-warning\">{{strwarningoldpass}}</ion-label>\r\n                        <ion-input  clearInput type=\"password\" formControlName=\"oldpassword\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item style=\"background-color: initial\">\r\n                        <ion-label  style=\"color:#828282;font-size:14px\" floating>Mật khẩu mới:</ion-label>\r\n                        <ion-input  clearInput type=\"password\" formControlName=\"newpassword\"></ion-input>\r\n                    </ion-item>\r\n                    <ion-item style=\"background-color: initial\">\r\n                        <ion-label  style=\"color:#828282;font-size:14px\" floating>Xác nhận mật khẩu mới:</ion-label>\r\n                        <ion-input clearInput type=\"password\" formControlName=\"confirmnewpassword\"></ion-input>\r\n                    </ion-item>\r\n                    <div style=\"text-align:center;padding: 16px 0;\" class=\"div-button\">\r\n                        <button ion-button round outline class=\"button btn-save\" (click)=\"cancel()\">Hủy</button>\r\n                        <button ion-button round outline class=\"button btn-save\">Thay đổi</button>\r\n                    </div>\r\n                </div> -->\r\n                <div style=\"padding:16px 0\" *ngIf=\"!changepass && changename||changemail\"><button (click)=\"saveChange()\" ion-button round outline class=\"button btn-save-phone\" >Lưu thay đổi</button></div>\r\n        </form>\r\n        <!-- <div class=\"margin-top-30\">\r\n            <div style=\"color:#828282;font-size:14px\">\r\n                Công ty\r\n            </div>\r\n            <div class=\"text-company\">\r\n                CT TNHH MTV Forever Young\r\n            </div>\r\n            </div> -->\r\n        </div>\r\n    </ion-content>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userprofile/userprofile.module.ts ***!
  \***************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userprofile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile */ "./src/app/userprofile/userprofile.ts");







let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _userprofile__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _userprofile__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]
                }]),
        ],
    })
], UserProfilePageModule);



/***/ }),

/***/ "./src/app/userprofile/userprofile.scss":
/*!**********************************************!*\
  !*** ./src/app/userprofile/userprofile.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userprofile-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.lbl-changepass .item-inner {\n  padding-right: 8px;\n  border-bottom: none !important;\n}\n\n.lbl-changepass .checkbox-md {\n  margin: 12px 8px 12px 0px !important;\n}\n\n.btn-cancel {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-cancel:hover {\n  border-color: #f79221 !important;\n  color: #f79221 !important;\n  background: #ffffff !important;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 44%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-sendOTP {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  margin-top: 16px;\n  height: 48px;\n}\n\n.input-otp {\n  border: solid 1px #cdcdcd;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 16px;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red !important;\n  white-space: normal;\n}\n\n.text-company {\n  font-size: 14px;\n  font-weight: bold;\n  color: #333333;\n  margin-left: 8px;\n  margin-top: 12px;\n}\n\n.margin-top-30 {\n  margin-top: 30px;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n}\n\n::ng-deep .ippassword button {\n  display: none;\n}\n\n::ng-deep .sc-ion-card-ios-h {\n  box-shadow: none;\n}\n\n::ng-deep .sc-ion-card-md-h {\n  box-shadow: none;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuc2NzcyIsInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQVI7O0FERUk7RUFDSSxnQkFBQTtBQ0NSOztBRENJO0VBQ0ksNEJBQUE7QUNFUjs7QURBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDR1I7O0FEREk7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBRUEsWUFBQTtFQUNKLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERJO0VBQ0ksa0JBQUE7QUNJUjs7QURGSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDS1I7O0FESEk7RUFDSSwwQkFBQTtBQ01SOztBREhJO0VBQ0ksa0JBQUE7RUFDQSw4QkFBQTtBQ01SOztBREhJO0VBQ0ksb0NBQUE7QUNNUjs7QURISTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ01SOztBREhJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ01SOztBREpJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ09SOztBRExJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ1FSOztBRExJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1FSOztBRE5JO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDU1I7O0FEUEk7RUFDSSx3QkFBQTtBQ1VSOztBRFJJO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDV1I7O0FEVEk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNZUjs7QURWSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNhUjs7QURYSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDY1I7O0FEWkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2VSOztBRGJJO0VBQ0ksZ0JBQUE7QUNnQlI7O0FEYlE7RUFDRSw4QkFBQTtBQ2dCVjs7QURkUTtFQUNJLDhGQUFBO0VBQ0EsNkJBQUE7RUFFQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1REFBQTtFQUNBLDZCQUFBO0VBQ0Esb0NBQUE7S0FBQSxpQ0FBQTtNQUFBLGdDQUFBO1VBQUEsNEJBQUE7QUNlWjs7QURaUTtFQUNFLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0FDY1Y7O0FEWlE7RUFDRSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUNjVjs7QURaUTtFQUNFLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUNjVjs7QURaUTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLHdDQUFBO0VBQ0EsbURBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ2NWOztBRFpRO0VBQ0Usd0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FDY1Y7O0FEWlE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDY1o7O0FEVlE7RUFDSSxhQUFBO0FDWVo7O0FEVFE7RUFDSSxnQkFBQTtBQ1daOztBRFRRO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtBQ1daIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItYXJyb3d7XHJcbiAgICAgICAgbWFyZ2luOiAzcHggMTFweDtcclxuICAgIH1cclxuICAgIC51c2VycHJvZmlsZS1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LXdyYXBpbWcge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuaW1nLXVzZXItYXZhdGFyIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC50ZXh0LWNvbG9ye1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5pdGVtLW1kLC5pdGVtLWlvcyB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxibC1jaGFuZ2VwYXNzIC5pdGVtLWlubmVyIHtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYmwtY2hhbmdlcGFzcyAuY2hlY2tib3gtbWQge1xyXG4gICAgICAgIG1hcmdpbjogMTJweCA4cHggMTJweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWNhbmNlbHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJ0bi1jYW5jZWw6aG92ZXJ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuYnRuLXNhdmV7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDQ0JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAuYnRuLXNhdmUtcGhvbmV7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc2VuZE9UUHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5pbnB1dC1vdHB7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NkY2RjZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLW90cHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbiAgICB9XHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBwYWRkaW5nOiAwcHggOHB4IDBweCAwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnJvdy1vdHB7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtc2VudC1vdHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODQ4NDg0O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtd2FybmluZ3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICAudGV4dC1jb21wYW55e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubWFyZ2luLXRvcC0zMHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIFxyXG4gICAgICAgIC5zYy1pb24tYWxlcnQtaW9zLWgge1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LGluaGVyaXQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgICAuaXBwYXNzd29yZCBidXR0b257XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnNjLWlvbi1jYXJkLWlvcy1oe1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2MtaW9uLWNhcmQtbWQtaHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9IiwiLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHJpZ2h0OiA2JTtcbn1cblxuLmhlYWRlci1hcnJvdyB7XG4gIG1hcmdpbjogM3B4IDExcHg7XG59XG5cbi51c2VycHJvZmlsZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDE0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaW1nLXVzZXItYXZhdGFyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXgtd2lkdGg6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDExMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaXRlbS1tZCwgLml0ZW0taW9zIHtcbiAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5sYmwtY2hhbmdlcGFzcyAuaXRlbS1pbm5lciB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubGJsLWNoYW5nZXBhc3MgLmNoZWNrYm94LW1kIHtcbiAgbWFyZ2luOiAxMnB4IDhweCAxMnB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWNhbmNlbCB7XG4gIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIHdpZHRoOiA0NiU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1jYW5jZWw6aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tc2F2ZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0NCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1zYXZlLXBob25lIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1zZW5kT1RQIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLmlucHV0LW90cCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjZGNkY2Q7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmxhYmVsLW90cCB7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggOHB4IDBweCAwcHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5yb3ctb3RwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4ubGFiZWwtc2VudC1vdHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODQ4NDg0O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4ubGFiZWwtd2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4udGV4dC1jb21wYW55IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5tYXJnaW4tdG9wLTMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcbiAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcbiAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcbiAgbGVmdDogMCAhaW1wb3J0YW50O1xuICByaWdodDogMCAhaW1wb3J0YW50O1xuICB0b3A6IDAgIWltcG9ydGFudDtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgaW5oZXJpdCkgIWltcG9ydGFudDtcbiAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XG4gIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9zIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IHZhcigtLW1pbi13aWR0aCkgIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB2YXIoLS1taW4taGVpZ2h0KSAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XG4gIGZsZXgtc2hyaW5rOiAwICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB3aWR0aDogYXV0bztcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGQge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBib3JkZXItY29sb3I6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46Om5nLWRlZXAgLmlwcGFzc3dvcmQgYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWNhcmQtaW9zLWgge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tY2FyZC1tZC1oIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.ts":
/*!********************************************!*\
  !*** ./src/app/userprofile/userprofile.ts ***!
  \********************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var src_app_confirmotp_confirmotp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/confirmotp/confirmotp */ "./src/app/confirmotp/confirmotp.ts");














let UserProfilePage = class UserProfilePage {
    constructor(navCtrl, toastCtrl, modalCtrl, zone, storage, alertCtrl, formBuilder, actionsheetCtrl, platform, camera, valueGlobal, DomSanitizer, gf, file, crop) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.camera = camera;
        this.valueGlobal = valueGlobal;
        this.DomSanitizer = DomSanitizer;
        this.gf = gf;
        this.file = file;
        this.crop = crop;
        this.changepass = false;
        this.phone = "";
        this.name = "";
        this.mail = "";
        this.changephone = false;
        this.changename = false;
        this.sentOTP = false;
        this.haspassword = '';
        this.strwarning = "";
        this.isShowWarning = false;
        this.strwarningoldpass = "";
        this.changemail = false;
        let self = this;
        gf.googleAnalytion('userprofile', 'load', '');
    }
    ngOnInit() {
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
                    else if (response.statusCode == 401) {
                        se.refreshToken();
                        setTimeout(() => {
                            se.loadUserInfo();
                        }, 300);
                    }
                    else if (error) {
                        error.page = "userprofile";
                        error.func = "loadUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.userInfoData = data;
                                let checkappleemail = (data.email.includes("appleid") || data.email.includes('vivumember.info'));
                                if (!checkappleemail) {
                                    se.storage.set("email", data.email);
                                }
                                se.bindFormGroup(se.userInfoData);
                            });
                            se.storage.set('userInfoData', data);
                        }
                        else {
                            if (!se.isShowWarning) {
                                se.isShowWarning = true;
                            }
                        }
                    }
                });
            }
            else {
                se.zone.run(() => {
                    se.bindFormGroup(null);
                });
            }
        });
    }
    ionViewWillEnter() {
        var se = this;
        setTimeout(() => {
            se.zone.run(() => {
                se.loadUserInfo();
                se.checkHasPassword();
                if (se.gf.getParams('userAvatar')) {
                    se.croppedImagepath = se.gf.getParams('userAvatar');
                    se.gf.setParams('userAvatar', null);
                }
            });
        }, 100);
        se.gf.setActivatedTab(5);
    }
    goback() {
        var self = this;
        self.sentOTP = false;
        self.navCtrl.back();
    }
    bindFormGroup(data) {
        var se = this;
        se.storage.get('email').then(email => {
            se.phone = data.phone;
            se.name = data.name;
            se.userProfileData = se.formBuilder.group({
                name: [data.fullname || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                phone: [data.phone || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("0[9|8|1|7|3|5]([0-9]|\s|-|\.){8,12}")])],
                email: [email || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
                oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
                newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
                confirmnewpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
                otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            });
        });
    }
    changePass() {
        this.zone.run(() => {
            this.changepass = !this.changepass;
        });
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Phiên đăng nhập hết hạn. Xin vui lòng đăng nhập lại để sử dụng chức năng này.",
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
                            this.storage.remove('listblogtripdefault');
                            this.valueGlobal.countNotifi = 0;
                            this.navCtrl.navigateRoot('/tab5');
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
                            this.storage.remove('listblogtripdefault');
                            this.valueGlobal.countNotifi = 0;
                            this.navCtrl.navigateForward('/login');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    phoneChange(val) {
        var se = this;
        se.zone.run(() => {
            if (se.phone) {
                se.changephone = se.phone != val.detail.value;
            }
            else {
                se.changephone = true;
                se.phone = val.detail.value;
            }
        });
    }
    cancel() {
        var self = this;
        self.sentOTP = false;
        self.navCtrl.back();
    }
    saveChange(val) {
        var se = this;
        var obj = {};
        if (!se.userProfileData.value.name) {
            se.presentToast('Họ tên không được để trống');
            return;
        }
        if (se.changepass && !se.userProfileData.value.oldpassword) {
            se.presentToast('Mật khẩu cũ không được để trống');
            return;
        }
        if (se.changepass && !se.userProfileData.value.newpassword) {
            se.presentToast('Mật khẩu mới không được để trống');
            return;
        }
        if (se.changepass && !se.userProfileData.value.confirmnewpassword) {
            se.presentToast('Xác nhận mật khẩu mới không được để trống');
            return;
        }
        if ((se.changepass && se.userProfileData.value.oldpassword && se.userProfileData.value.oldpassword.length < 6)
            || (se.userProfileData.value.newpassword && se.userProfileData.value.newpassword.length < 6)
            || (se.userProfileData.value.confirmnewpassword && se.userProfileData.value.confirmnewpassword.length < 6)) {
            se.presentToast('Mật khẩu phải lớn hơn 6 ký tự');
            return;
        }
        if (se.changepass && se.userProfileData.value.newpassword != se.userProfileData.value.confirmnewpassword) {
            se.presentToast('Mật khẩu mới không trùng khớp');
            return;
        }
        if (!se.changepass) {
            obj = {
                "userInfo": {
                    "email": se.userProfileData.value.email,
                    "fullname": se.userProfileData.value.name,
                    "phone": se.userProfileData.value.phone,
                    "otpPhone": se.userProfileData.value.otp,
                    "passCheckbox": se.changepass,
                }
            };
        }
        else {
            obj = {
                "userInfo": {
                    "email": se.userProfileData.value.email,
                    "fullname": se.userProfileData.value.name,
                    "phone": se.userProfileData.value.phone,
                    "otpPhone": se.userProfileData.value.otp,
                    "passCheckbox": true,
                    "oldPassword": se.haspassword ? se.userProfileData.value.oldpassword : "",
                    "newPassword1": se.userProfileData.value.newpassword,
                    "newPassword2": se.userProfileData.value.confirmnewpassword
                }
            };
        }
        se.valueGlobal.objchangeinfo = obj;
        se.valueGlobal.phone = se.userProfileData.value.phone;
        se.valueGlobal.name = se.userProfileData.value.name;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/ChangeUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    },
                    body: JSON.stringify(obj)
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__["timeout"] = 60000;
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode == 400) {
                        var rs = JSON.parse(body);
                        if (se.changepass) {
                            se.strwarningoldpass = rs.msg;
                        }
                        else {
                            se.strwarning = rs.msg;
                        }
                    }
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "saveChange",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "saveChange";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var rs = JSON.parse(body);
                        if (rs.result) {
                            var info;
                            var textfullname = se.userProfileData.value.name.split(' ');
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
                                info = { ho: textfullname[0], ten: name, phone: se.userProfileData.value.phone };
                            }
                            else if (textfullname.length > 1) {
                                info = { ho: textfullname[0], ten: textfullname[1], phone: se.userProfileData.value.phone };
                            }
                            else if (textfullname.length == 1) {
                                info = { ho: textfullname[0], ten: "", phone: se.userProfileData.value.phone };
                            }
                            se.storage.remove('infocus');
                            se.storage.remove('userInfoData');
                            se.storage.set("infocus", info);
                            if (se.userProfileData.value.email) {
                                se.storage.set("email", se.userProfileData.value.email);
                            }
                            se.presentToast("Cập nhật hồ sơ thành công.");
                            se.clearSessionOTP();
                            se.loadUserInfo();
                        }
                        else {
                            alert(rs.msg);
                        }
                    }
                });
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                position: 'top',
            });
            toast.present();
        });
    }
    sendOTP() {
        var se = this;
        se.sentOTP = true;
        var elphone = document.getElementById('ipOTP');
        var textphone = se.userProfileData.value.phone || "";
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/OTPChangePhoneNumber',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    },
                    body: JSON.stringify({ "phoneNumber": textphone })
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "sentOTP",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "sentOTP";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var rs = JSON.parse(body);
                        se.showpopup();
                        setTimeout(() => {
                            se.clearSessionOTP();
                        }, 180000);
                    }
                });
            }
        });
    }
    showpopup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            var obj = {};
            if (!se.changepass) {
                obj = {
                    "userInfo": {
                        "email": se.userProfileData.value.email,
                        "fullname": se.userProfileData.value.name,
                        "phone": se.userProfileData.value.phone,
                        "otpPhone": se.userProfileData.value.otp,
                        "passCheckbox": se.changepass,
                    }
                };
            }
            else {
                obj = {
                    "userInfo": {
                        "email": se.userProfileData.value.email,
                        "fullname": se.userProfileData.value.name,
                        "phone": se.userProfileData.value.phone,
                        "otpPhone": se.userProfileData.value.otp,
                        "passCheckbox": true,
                        "oldPassword": se.haspassword ? se.userProfileData.value.oldpassword : "",
                        "newPassword1": se.userProfileData.value.newpassword,
                        "newPassword2": se.userProfileData.value.confirmnewpassword
                    }
                };
            }
            se.valueGlobal.objchangeinfo = obj;
            se.valueGlobal.phone = se.userProfileData.value.phone;
            se.valueGlobal.name = se.userProfileData.value.name;
            const modal = yield this.modalCtrl.create({
                component: src_app_confirmotp_confirmotp__WEBPACK_IMPORTED_MODULE_13__["ConfirmotpPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                se.clearSessionOTP();
                se.loadUserInfo();
            });
        });
    }
    clearSessionOTP() {
        var se = this;
        se.zone.run(() => {
            se.sentOTP = false;
            se.changephone = false;
            se.changename = false;
            se.changepass = false;
            se.strwarning = "";
            se.strwarningoldpass = "";
        });
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            if (se.nameChange) {
                                se.storage.remove('username');
                                se.storage.set('username', se.userProfileData.value.name);
                            }
                        });
                    }
                });
            }
        });
    }
    checkHasPassword() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckHasPassword',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__["timeout"] = 60000;
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "checkHasPassword",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options),
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "checkHasPassword";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else if (body) {
                        var obj = JSON.parse(body);
                        se.zone.run(() => {
                            se.haspassword = obj.hasPassword;
                        });
                    }
                });
            }
        });
    }
    nameChange(val) {
        var se = this;
        se.zone.run(() => {
            if (se.userProfileData.value.name) {
                se.changename = se.name != val.detail.value;
            }
        });
    }
    mailChange(val) {
        this.changemail = true;
    }
    changepassword() {
        this.navCtrl.navigateForward('/userchangepassword');
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
                se.gf.setParams(base64, 'userAvatar');
            });
            const contentType = 'image/' + imageType;
            let b64 = base64.split(',')[1];
            se.uploadAvatar(b64);
        });
    }
};
UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userprofile',
        template: __webpack_require__(/*! ./userprofile.html */ "./src/app/userprofile/userprofile.html"),
        styles: [__webpack_require__(/*! ./userprofile.scss */ "./src/app/userprofile/userprofile.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__["File"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_12__["Crop"]])
], UserProfilePage);



/***/ })

}]);
//# sourceMappingURL=userprofile-userprofile-module.js.map