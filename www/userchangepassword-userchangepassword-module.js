(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userchangepassword-userchangepassword-module"],{

/***/ "./src/app/userchangepassword/userchangepassword.html":
/*!************************************************************!*\
  !*** ./src/app/userchangepassword/userchangepassword.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-row>\n        <ion-col style=\"text-align: center;height: 56px;margin-bottom: 4px;\">\n            <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n                <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px; top:2px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n              </div>\n            <div style=\"padding-top: 10px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Đổi mật khẩu</label></div>\n            </div>\n        </ion-col>\n        </ion-row>\n    </ion-header>\n    <ion-content class=\"content-changepass\">\n        <form *ngIf='userProfileData' [formGroup]=\"userProfileData\" style=\"margin-top: 20px\" (submit)=\"saveChange()\">\n            <ion-item style=\"background-color: initial;width:88%\">\n                <ion-label  style=\"font-size:14px\"  position=\"floating\">Mật khẩu cũ</ion-label>\n                <ion-input  clearInput [type]=\"inputtype\" id=\"oldpassword\" formControlName=\"oldpassword\"></ion-input>\n            </ion-item>\n            <div class=\"img-show-oldpassword\" (click)=\"changetype(1)\">\n                <img src=\"./assets/imgs/ic_eye.svg\" *ngIf=\"inputtype == 'text'\">\n                <img src=\"./assets/imgs/ic_eyeoff.svg\" *ngIf=\"inputtype != 'text'\">\n            </div>\n            <ion-item style=\"background-color: initial;width:88%\">\n                <ion-label  style=\"font-size:14px\"  position=\"floating\">Mật khẩu mới</ion-label>\n                <ion-input  clearInput [type]=\"inputtypenew\" id=\"newpassword\" formControlName=\"newpassword\"></ion-input>\n            </ion-item>\n            <div class=\"img-show-newpassword\" (click)=\"changetype(2)\">\n                <img src=\"./assets/imgs/ic_eye.svg\" *ngIf=\"inputtypenew == 'text'\">\n                <img src=\"./assets/imgs/ic_eyeoff.svg\" *ngIf=\"inputtypenew != 'text'\">\n            </div>\n       </form>\n       <div><button ion-button round outline class=\"button btn-changepass\" (click)=\"saveChange()\">Đổi mật khẩu</button></div>\n    </ion-content>"

/***/ }),

/***/ "./src/app/userchangepassword/userchangepassword.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userchangepassword/userchangepassword.module.ts ***!
  \*****************************************************************/
/*! exports provided: UserChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordPageModule", function() { return UserChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _userchangepassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userchangepassword */ "./src/app/userchangepassword/userchangepassword.ts");







let UserChangePasswordPageModule = class UserChangePasswordPageModule {
};
UserChangePasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _userchangepassword__WEBPACK_IMPORTED_MODULE_6__["UserChangePasswordPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _userchangepassword__WEBPACK_IMPORTED_MODULE_6__["UserChangePasswordPage"]
                }]),
        ],
    })
], UserChangePasswordPageModule);



/***/ }),

/***/ "./src/app/userchangepassword/userchangepassword.scss":
/*!************************************************************!*\
  !*** ./src/app/userchangepassword/userchangepassword.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-show-oldpassword {\n  position: absolute;\n  right: 0;\n  top: 43px;\n  padding: 16px 0;\n  width: 30px;\n  height: 45px;\n  margin-right: 20px;\n  border-bottom: solid 1px #cdcdcd;\n}\n\n.img-show-newpassword {\n  position: absolute;\n  right: 0;\n  top: 111px;\n  padding: 16px 0;\n  width: 30px;\n  height: 45px;\n  margin-right: 20px;\n  border-bottom: solid 1px #cdcdcd;\n}\n\n.btn-changepass {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  width: 91%;\n  margin: 16px;\n}\n\n.ico-eye {\n  width: 28px;\n  height: 33px;\n  border-bottom: solid 1px #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC91c2VyY2hhbmdlcGFzc3dvcmQvdXNlcmNoYW5nZXBhc3N3b3JkLnNjc3MiLCJzcmMvYXBwL3VzZXJjaGFuZ2VwYXNzd29yZC91c2VyY2hhbmdlcGFzc3dvcmQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FDRFI7O0FESUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQ0RSOztBRElJO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNEUjs7QURJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3VzZXJjaGFuZ2VwYXNzd29yZC91c2VyY2hhbmdlcGFzc3dvcmQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgXG4gICAgLmltZy1zaG93LW9sZHBhc3N3b3Jke1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDQzcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICB9XG5cbiAgICAuaW1nLXNob3ctbmV3cGFzc3dvcmR7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMTExcHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgICB9XG5cbiAgICAuYnRuLWNoYW5nZXBhc3N7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiA5MSU7XG4gICAgICAgIG1hcmdpbjogMTZweDtcbiAgICB9XG5cbiAgICAuaWNvLWV5ZXtcbiAgICAgICAgd2lkdGg6MjhweDtcbiAgICAgICAgaGVpZ2h0OiAzM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcbiAgICB9IiwiLmltZy1zaG93LW9sZHBhc3N3b3JkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiA0M3B4O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG59XG5cbi5pbWctc2hvdy1uZXdwYXNzd29yZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTExcHg7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbn1cblxuLmJ0bi1jaGFuZ2VwYXNzIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjEgIWltcG9ydGFudDtcbiAgd2lkdGg6IDkxJTtcbiAgbWFyZ2luOiAxNnB4O1xufVxuXG4uaWNvLWV5ZSB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2NjO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/userchangepassword/userchangepassword.ts":
/*!**********************************************************!*\
  !*** ./src/app/userchangepassword/userchangepassword.ts ***!
  \**********************************************************/
/*! exports provided: UserChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChangePasswordPage", function() { return UserChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);











let UserChangePasswordPage = class UserChangePasswordPage {
    constructor(navCtrl, toastCtrl, zone, storage, alertCtrl, formBuilder, actionsheetCtrl, platform, valueGlobal, gf, activeRoute) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.activeRoute = activeRoute;
        this.haspassword = '';
        this.changepass = false;
        this.strwarning = "";
        this.strwarningoldpass = "";
        this.inputtype = "password";
        this.inputtypenew = "password";
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewWillEnter() {
        var se = this;
        se.storage.get('userInfoData').then((data) => {
            if (data) {
                se.zone.run(() => {
                    se.bindFormGroup(data);
                });
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_10__('#oldpassword').children('button').click(e => se.clickedElement(e));
        se.gf.setActivatedTab(5);
    }
    clickedElement(event) {
        debugger;
    }
    ionViewDidEnter() {
        var se = this;
    }
    ionViewWillLeave() {
        this.zone.run(() => {
            clearInterval(this.intervalID);
        });
    }
    checkHasPassword() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckHasPassword',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__["timeout"] = 60000;
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "checkHasPassword",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options),
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "checkHasPassword";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
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
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "userprofile",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                        });
                    }
                });
            }
        });
    }
    bindFormGroup(data) {
        var se = this;
        se.email = data.email;
        se.phone = data.phone;
        se.name = data.fullname;
        se.userProfileData = se.formBuilder.group({
            oldpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
            newpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)])],
        });
    }
    saveChange() {
        var se = this;
        var obj = {};
        if (!se.userProfileData.value.oldpassword) {
            se.presentToast('Mật khẩu cũ không được để trống');
            return;
        }
        if (!se.userProfileData.value.newpassword) {
            se.presentToast('Mật khẩu mới không được để trống');
            return;
        }
        if ((se.userProfileData.value.oldpassword && se.userProfileData.value.oldpassword.length < 6)
            || (se.userProfileData.value.newpassword && se.userProfileData.value.newpassword.length < 6)) {
            se.presentToast('Mật khẩu phải lớn hơn 6 ký tự');
            return;
        }
        obj = { "userInfo": {
                "email": se.email,
                "phone": se.phone,
                "fullname": se.name,
                "passCheckbox": true,
                "oldPassword": se.userProfileData.value.oldpassword,
                "newPassword1": se.userProfileData.value.newpassword,
                "newPassword2": se.userProfileData.value.newpassword
            }
        };
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/ChangeUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json-patch+json',
                        authorization: text
                    },
                    body: JSON.stringify(obj)
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__["timeout"] = 60000;
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode == 400) {
                        var rs = JSON.parse(body);
                        if (se.changepass) {
                            se.strwarning = rs.msg;
                        }
                        else {
                            se.strwarning = rs.msg;
                        }
                        se.presentToast(se.strwarning);
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
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "userprofile";
                        error.func = "saveChange";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var rs = JSON.parse(body);
                        if (rs.result) {
                            se.presentToast("Đổi mật khẩu thành công.");
                            se.goback();
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
    changetype(value) {
        this.zone.run(() => {
            if (value == 1) {
                if (this.inputtype && this.inputtype == "password") {
                    this.inputtype = "text";
                }
                else {
                    this.inputtype = "password";
                }
            }
            else if (value == 2) {
                if (this.inputtypenew && this.inputtypenew == "password") {
                    this.inputtypenew = "text";
                }
                else {
                    this.inputtypenew = "password";
                }
            }
        });
    }
};
UserChangePasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-userchangepassword',
        template: __webpack_require__(/*! ./userchangepassword.html */ "./src/app/userchangepassword/userchangepassword.html"),
        styles: [__webpack_require__(/*! ./userchangepassword.scss */ "./src/app/userchangepassword/userchangepassword.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]])
], UserChangePasswordPage);



/***/ })

}]);
//# sourceMappingURL=userchangepassword-userchangepassword-module.js.map