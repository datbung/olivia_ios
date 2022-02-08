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

module.exports = ".header-title {\n  padding-top: 12px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-arrow {\n  margin: 3px 11px;\n}\n\n.userprofile-content {\n  padding: 16px 16px 16px 16px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 140px;\n  overflow: hidden;\n}\n\n.img-user-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  max-width: initial;\n  background-color: #dedede;\n  border-radius: 60px;\n  height: 100%;\n  width: 110px;\n  margin: 0 auto;\n  padding: 2px;\n  border: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-color {\n  color: #26bed6;\n  font-size: 14px;\n}\n\n.item-md, .item-ios {\n  padding-left: 0 !important;\n}\n\n.lbl-changepass .item-inner {\n  padding-right: 8px;\n  border-bottom: none !important;\n}\n\n.lbl-changepass .checkbox-md {\n  margin: 12px 8px 12px 0px !important;\n}\n\n.btn-cancel {\n  border-color: #bdbdbd;\n  color: #bdbdbd;\n  background: #ffffff;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-cancel:hover {\n  border-color: #f79221 !important;\n  color: #f79221 !important;\n  background: #ffffff !important;\n  width: 46%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 44%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n}\n\n.btn-sendOTP {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 100%;\n  margin-top: 16px;\n  height: 48px;\n}\n\n.input-otp {\n  border: solid 1px #cdcdcd;\n  border-radius: 5px;\n  width: 100%;\n  height: 100%;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 16px;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red !important;\n  white-space: normal;\n}\n\n.text-company {\n  font-size: 14px;\n  font-weight: bold;\n  color: #333333;\n  margin-left: 8px;\n  margin-top: 12px;\n}\n\n.margin-top-30 {\n  margin-top: 30px;\n}\n\n::ng-deep .cls-alert-showmore {\n  align-items: center !important;\n}\n\n::ng-deep .cls-alert-showmore .sc-ion-alert-ios-h {\n  --background: var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9)) !important;\n  --max-width: 270px !important;\n  font-size: 14px !important;\n  --min-width: 250px !important;\n  --width: auto !important;\n  --min-height: auto !important;\n  --height: auto !important;\n  --max-height: 90% !important;\n  -webkit-font-smoothing: antialiased !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 0 !important;\n  bottom: 0 !important;\n  display: flex !important;\n  position: fixed !important;\n  align-items: center !important;\n  justify-content: center !important;\n  font-family: var(--ion-font-family, inherit) !important;\n  touch-action: none !important;\n  -moz-user-select: none !important;\n   -ms-user-select: none !important;\n       user-select: none !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-head.sc-ion-alert-ios {\n  padding-top: 12px !important;\n  padding-bottom: 7px !important;\n  text-align: center !important;\n  display: block !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-wrapper.sc-ion-alert-ios {\n  border-radius: 13px !important;\n  box-shadow: none !important;\n  overflow: hidden !important;\n  display: flex !important;\n  flex-direction: column !important;\n  width: var(--width) !important;\n  min-width: var(--min-width) !important;\n  max-width: var(--max-width) !important;\n  height: var(--height) !important;\n  min-height: var(--min-height) !important;\n  max-height: var(--max-height) !important;\n  background: var(--background) !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-inner.sc-ion-alert-ios {\n  flex-flow: row nowrap !important;\n  flex-shrink: 0 !important;\n  align-items: center !important;\n  justify-content: center !important;\n  height: 100% !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 15px !important;\n  overflow: hidden !important;\n  width: auto;\n}\n\n::ng-deep .cls-alert-showmore .alert-button-group.sc-ion-alert-ios button:first-child {\n  display: flex !important;\n  flex-direction: row !important;\n  flex-wrap: wrap !important;\n}\n\n::ng-deep .cls-alert-showmore .alert-button.sc-ion-alert-ios {\n  border-color: none;\n  background: none;\n}\n\n::ng-deep .ippassword button {\n  display: none;\n}\n\n::ng-deep .sc-ion-card-ios-h {\n  box-shadow: none;\n}\n\n::ng-deep .sc-ion-card-md-h {\n  box-shadow: none;\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnNjc3MiLCJzcmMvYXBwL3VzZXJwcm9maWxlL3VzZXJwcm9maWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVJO0VBQ0ksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLDRCQUFBO0FDRVI7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0dSOztBRERJO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUVBLFlBQUE7RUFDSixjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSjs7QURESTtFQUNJLGtCQUFBO0FDSVI7O0FERkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0tSOztBREhJO0VBQ0ksMEJBQUE7QUNNUjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsOEJBQUE7QUNNUjs7QURISTtFQUNJLG9DQUFBO0FDTVI7O0FESEk7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURISTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNPUjs7QURMSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNRUjs7QURMSTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNRUjs7QUROSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1NSOztBRFBJO0VBQ0ksd0JBQUE7QUNVUjs7QURSSTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1dSOztBRFRJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDWVI7O0FEVkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDYVI7O0FEWEk7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ2NSOztBRFpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNlUjs7QURiSTtFQUNJLGdCQUFBO0FDZ0JSOztBRGJRO0VBQ0UsOEJBQUE7QUNnQlY7O0FEZFE7RUFDSSw4RkFBQTtFQUNBLDZCQUFBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsdURBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0dBQUEsZ0NBQUE7T0FBQSw0QkFBQTtBQ2VaOztBRFpRO0VBQ0UsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNjVjs7QURaUTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtBQ2NWOztBRFpRO0VBQ0UsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1QkFBQTtBQ2NWOztBRFpRO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDY1Y7O0FEWlE7RUFDRSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7QUNjVjs7QURaUTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNjWjs7QURWUTtFQUNJLGFBQUE7QUNZWjs7QURUUTtFQUNJLGdCQUFBO0FDV1o7O0FEVFE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FDV1oiLCJmaWxlIjoic3JjL2FwcC91c2VycHJvZmlsZS91c2VycHJvZmlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuaGVhZGVyLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgcmlnaHQ6IDYlO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlci1hcnJvd3tcclxuICAgICAgICBtYXJnaW46IDNweCAxMXB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXJwcm9maWxlLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTZweDtcclxuICAgIH1cclxuICAgIC5kaXYtd3JhcGltZyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5pbWctdXNlci1hdmF0YXIge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnRleHQtY29sb3J7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQsLml0ZW0taW9zIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubGJsLWNoYW5nZXBhc3MgLml0ZW0taW5uZXIge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmxibC1jaGFuZ2VwYXNzIC5jaGVja2JveC1tZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDhweCAxMnB4IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tY2FuY2Vse1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA0NiU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYnRuLWNhbmNlbDpob3ZlcntcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNDYlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5idG4tc2F2ZXtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogNDQlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5idG4tc2F2ZS1waG9uZXtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zZW5kT1RQe1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0LW90cHtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtb3Rwe1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcclxuICAgIH1cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICAucm93LW90cHtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1zZW50LW90cHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM4NDg0ODQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC5sYWJlbC13YXJuaW5ne1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIH1cclxuICAgIC50ZXh0LWNvbXBhbnl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIH1cclxuICAgIC5tYXJnaW4tdG9wLTMwe1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgIC5jbHMtYWxlcnQtc2hvd21vcmUge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgLnNjLWlvbi1hbGVydC1pb3MtaCB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLW92ZXJsYXktYmFja2dyb3VuZC1jb2xvcix2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsI2Y5ZjlmOSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tbWF4LXdpZHRoOiAyNzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1taW4td2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0td2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC0tbWF4LWhlaWdodDogOTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHksaW5oZXJpdCkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdG91Y2gtYWN0aW9uOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAuYWxlcnQtaGVhZC5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA3cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvc3tcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgICAgICAgIHdpZHRoOiB2YXIoLS13aWR0aCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtaGVpZ2h0KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9ze1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydC1idXR0b24tZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyBidXR0b246Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAgIC5pcHBhc3N3b3JkIGJ1dHRvbntcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc2MtaW9uLWNhcmQtaW9zLWh7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zYy1pb24tY2FyZC1tZC1oe1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH0iLCIuaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcmlnaHQ6IDYlO1xufVxuXG4uaGVhZGVyLWFycm93IHtcbiAgbWFyZ2luOiAzcHggMTFweDtcbn1cblxuLnVzZXJwcm9maWxlLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCAxNnB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTQwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pbWctdXNlci1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTEwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pdGVtLW1kLCAuaXRlbS1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmxibC1jaGFuZ2VwYXNzIC5pdGVtLWlubmVyIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5sYmwtY2hhbmdlcGFzcyAuY2hlY2tib3gtbWQge1xuICBtYXJnaW46IDEycHggOHB4IDEycHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tY2FuY2VsIHtcbiAgYm9yZGVyLWNvbG9yOiAjYmRiZGJkO1xuICBjb2xvcjogI2JkYmRiZDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ2JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuLWNhbmNlbDpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0NiU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmJ0bi1zYXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDQ0JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuLXNhdmUtcGhvbmUge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYnRuLXNlbmRPVFAge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaW5wdXQtb3RwIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGFiZWwtb3RwIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnJvdy1vdHAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5sYWJlbC1zZW50LW90cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5sYWJlbC13YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi50ZXh0LWNvbXBhbnkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm1hcmdpbi10b3AtMzAge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5zYy1pb24tYWxlcnQtaW9zLWgge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1vdmVybGF5LWJhY2tncm91bmQtY29sb3IsdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCNmOWY5ZjkpKSAhaW1wb3J0YW50O1xuICAtLW1heC13aWR0aDogMjcwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tbWluLXdpZHRoOiAyNTBweCAhaW1wb3J0YW50O1xuICAtLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIC0tbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLWhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAtLW1heC1oZWlnaHQ6IDkwJSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogZml4ZWQgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBpbmhlcml0KSAhaW1wb3J0YW50O1xuICB0b3VjaC1hY3Rpb246IG5vbmUgIWltcG9ydGFudDtcbiAgdXNlci1zZWxlY3Q6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1oZWFkLnNjLWlvbi1hbGVydC1pb3Mge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogN3B4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LXdyYXBwZXIuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1yYWRpdXM6IDEzcHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICB3aWR0aDogdmFyKC0td2lkdGgpICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogdmFyKC0tbWluLXdpZHRoKSAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC13aWR0aCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLW1pbi1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IHZhcigtLW1heC1oZWlnaHQpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNscy1hbGVydC1zaG93bW9yZSAuYWxlcnQtYnV0dG9uLWlubmVyLnNjLWlvbi1hbGVydC1pb3Mge1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXAgIWltcG9ydGFudDtcbiAgZmxleC1zaHJpbms6IDAgIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xufVxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtc2hvd21vcmUgLmFsZXJ0LWJ1dHRvbi1ncm91cC5zYy1pb24tYWxlcnQtaW9zIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXNob3dtb3JlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIGJvcmRlci1jb2xvcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbjo6bmctZGVlcCAuaXBwYXNzd29yZCBidXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tY2FyZC1pb3MtaCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1jYXJkLW1kLWgge1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn0iXX0= */"

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