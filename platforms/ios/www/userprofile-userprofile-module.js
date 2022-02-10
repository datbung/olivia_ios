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

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userprofile-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.lbl-changepass .item-inner {\n  padding-right: 8px;\n  border-bottom: none !important;\n}\n\n.lbl-changepass .checkbox-md {\n  margin: 12px 8px 12px 0px !important;\n}\n\n.btn-cancel {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-cancel:hover {\n  border-color: #f79221 !important;\n  color: #f79221 !important;\n  background: #ffffff !important;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 44%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-sendOTP {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  margin-top: 16px;\n  height: 48px;\n}\n\n.input-otp {\n  border: solid 1px #cdcdcd;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 16px;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red !important;\n  white-space: normal;\n}\n\n.text-company {\n  font-size: 14px;\n  font-weight: bold;\n  color: #333333;\n  margin-left: 8px;\n  margin-top: 12px;\n}\n\n.margin-top-30 {\n  margin-top: 30px;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -webkit-user-select: none !important;\n     -moz-user-select: none !important;\n      -ms-user-select: none !important;\n          user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n}\n\n::ng-deep .ippassword button {\n  display: none;\n}\n\n::ng-deep .sc-ion-card-ios-h {\n  box-shadow: none;\n}\n\n::ng-deep .sc-ion-card-md-h {\n  box-shadow: none;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnNjc3MiLCJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLDRCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDSixjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSjs7QURESTtFQUNJLGtCQUFBO0FDSVI7O0FERkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREhJO0VBQ0ksMEJBQUE7QUNNUjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7QUNNUjs7QURISTtFQUNJLG9DQUFBO0FDTVI7O0FESEk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURISTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNPUjs7QURMSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNRUjs7QURMSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNRUjs7QUROSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1NSOztBRFBJO0VBQ0ksd0JBQUE7QUNVUjs7QURSSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1dSOztBRFRJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDWVI7O0FEVkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDYVI7O0FEWEk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2NSOztBRFpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNlUjs7QURiSTtFQUNJLGdCQUFBO0FDZ0JSOztBRGJRO0VBQ0UsOEJBQUE7QUNnQlY7O0FEZFE7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0tBQUEsaUNBQUE7TUFBQSxnQ0FBQTtVQUFBLDRCQUFBO0FDZVo7O0FEWlE7RUFDRSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ2NWOztBRFpRO0VBQ0UsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLHdDQUFBO0FDY1Y7O0FEWlE7RUFDRSxnQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0FDY1Y7O0FEWlE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNjVjs7QURaUTtFQUNFLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtBQ2NWOztBRFpRO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ2NaOztBRFZRO0VBQ0ksYUFBQTtBQ1laOztBRFRRO0VBQ0ksZ0JBQUE7QUNXWjs7QURUUTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7QUNXWiIsImZpbGUiOiJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICByaWdodDogNiU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWFycm93e1xyXG4gICAgICAgIG1hcmdpbjogM3B4IDExcHg7XHJcbiAgICB9XHJcbiAgICAudXNlcnByb2ZpbGUtY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi13cmFwaW1nIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmltZy11c2VyLWF2YXRhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudGV4dC1jb2xvcntcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCwuaXRlbS1pb3Mge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5sYmwtY2hhbmdlcGFzcyAuaXRlbS1pbm5lciB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGJsLWNoYW5nZXBhc3MgLmNoZWNrYm94LW1kIHtcclxuICAgICAgICBtYXJnaW46IDEycHggOHB4IDEycHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1jYW5jZWx7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDQ2JTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5idG4tY2FuY2VsOmhvdmVye1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zYXZle1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA0NCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zYXZlLXBob25le1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLXNlbmRPVFB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAuaW5wdXQtb3Rwe1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5sYWJlbC1vdHB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgLm5vLXBhZGRpbmd7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDhweCAwcHggMHB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5yb3ctb3Rwe1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLXNlbnQtb3Rwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLmxhYmVsLXdhcm5pbmd7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY29tcGFueXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm1hcmdpbi10b3AtMzB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgICAgLmNscy1hbGVydC1zaG93bW9yZSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAuc2MtaW9uLWFsZXJ0LWlvcy1oIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tb3ZlcmxheS1iYWNrZ3JvdW5kLWNvbG9yLHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwjZjlmOWY5KSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1tYXgtd2lkdGg6IDI3MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1pbi13aWR0aDogMjUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS13aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1tYXgtaGVpZ2h0OiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSxpbmhlcml0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IHZhcigtLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3N7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3cgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICAgICAgLmlwcGFzc3dvcmQgYnV0dG9ue1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5zYy1pb24tY2FyZC1pb3MtaHtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNjLWlvbi1jYXJkLW1kLWh7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfSIsIi5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICByaWdodDogNiU7XG59XG5cbi5oZWFkZXItYXJyb3cge1xuICBtYXJnaW46IDNweCAxMXB4O1xufVxuXG4udXNlcnByb2ZpbGUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDE2cHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmltZy11c2VyLWF2YXRhciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiA2MHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LWNvbG9yIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLml0ZW0tbWQsIC5pdGVtLWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG4ubGJsLWNoYW5nZXBhc3MgLml0ZW0taW5uZXIge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmxibC1jaGFuZ2VwYXNzIC5jaGVja2JveC1tZCB7XG4gIG1hcmdpbjogMTJweCA4cHggMTJweCAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1jYW5jZWwge1xuICBib3JkZXItY29sb3I6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICB3aWR0aDogNDYlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tY2FuY2VsOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuLXNhdmUge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICB3aWR0aDogNDQlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tc2F2ZS1waG9uZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5idG4tc2VuZE9UUCB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pbnB1dC1vdHAge1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2RjZGNkO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5sYWJlbC1vdHAge1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ucm93LW90cCB7XG4gIGhlaWdodDogMzJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmxhYmVsLXNlbnQtb3RwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxhYmVsLXdhcm5pbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRleHQtY29tcGFueSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubWFyZ2luLXRvcC0zMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLnNjLWlvbi1hbGVydC1pb3MtaCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XG4gIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksIGluaGVyaXQpICFpbXBvcnRhbnQ7XG4gIHRvdWNoLWFjdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICB1c2VyLXNlbGVjdDogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWhlYWQuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLXJhZGl1czogMTNweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiB2YXIoLS1taW4td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXdpZHRoKSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogdmFyKC0tbWluLWhlaWdodCkgIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogdmFyKC0tbWF4LWhlaWdodCkgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24taW5uZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xuICBmbGV4LXNocmluazogMCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgd2lkdGg6IGF1dG87XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWdyb3VwLnNjLWlvbi1hbGVydC1pb3MgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuOjpuZy1kZWVwIC5pcHBhc3N3b3JkIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1jYXJkLWlvcy1oIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWNhcmQtbWQtaCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufSJdfQ== */"

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
        se.phone = data.phone;
        se.name = data.name;
        se.userProfileData = se.formBuilder.group({
            name: [data.fullname || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            phone: [data.phone || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("0[9|8|1|7|3|5]([0-9]|\s|-|\.){8,12}")])],
            email: [data.email || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            confirmnewpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            otp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
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