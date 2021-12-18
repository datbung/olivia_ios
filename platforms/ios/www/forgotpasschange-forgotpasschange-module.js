(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpasschange-forgotpasschange-module"],{

/***/ "./src/app/forgotpasschange/forgotpasschange.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/forgotpasschange/forgotpasschange.module.ts ***!
  \*************************************************************/
/*! exports provided: ForgotpasschangePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasschangePageModule", function() { return ForgotpasschangePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpasschange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpasschange.page */ "./src/app/forgotpasschange/forgotpasschange.page.ts");







const routes = [
    {
        path: '',
        component: _forgotpasschange_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasschangePage"]
    }
];
let ForgotpasschangePageModule = class ForgotpasschangePageModule {
};
ForgotpasschangePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgotpasschange_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasschangePage"]]
    })
], ForgotpasschangePageModule);



/***/ }),

/***/ "./src/app/forgotpasschange/forgotpasschange.page.html":
/*!*************************************************************!*\
  !*** ./src/app/forgotpasschange/forgotpasschange.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-row>\n    <ion-col style=\"text-align: center;height: 48px;margin-bottom: 8px;\">\n      <div style=\"align-self: center\">\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n          <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px; top:2px\"\n            src=\"./assets/imgs/ios-arrow-round-back.svg\">\n        </div>\n        <div style=\"padding-top: 10px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Đổi mật khẩu</label>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content padding>\n\n  <!-- <ion-item style=\"--padding-start:0;\">\n    <ion-label style=\"font-size:14px;color: #828282\" position=\"floating\">Mật khẩu mới</ion-label>\n    <ion-input clearInput  id=\"newpassword\"></ion-input>\n  </ion-item> -->\n  <ion-item style=\"--padding-start: 0px\">\n    <ion-label position=\"floating\">Mật khẩu</ion-label>\n    <ion-input class=\"text-color\"  [type]=\"passwordType\"  [(ngModel)]=\"pass\" clearOnEdit=\"false\">\n    </ion-input>\n    <ion-icon style=\"margin-top: 33px;\" slot=\"end\" class=\"passwordIcon\" [name]=\"passwordIcon\" (click)='hideShowPassword()'></ion-icon>\n  </ion-item>\n  <div style=\"margin-top: 30px;\"><button ion-button round outline class=\"button btn-changepass\" (click)=\"saveChange()\">Đổi mật khẩu</button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpasschange/forgotpasschange.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/forgotpasschange/forgotpasschange.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-changepass {\n  border-color: #f79221 !important;\n  color: #ffffff !important;\n  background: #f79221 !important;\n  margin: 0px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9yZ290cGFzc2NoYW5nZS9mb3Jnb3RwYXNzY2hhbmdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9yZ290cGFzc2NoYW5nZS9mb3Jnb3RwYXNzY2hhbmdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzY2hhbmdlL2ZvcmdvdHBhc3NjaGFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1jaGFuZ2VwYXNze1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2Y3OTIyMSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSIsIi5idG4tY2hhbmdlcGFzcyB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4O1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/forgotpasschange/forgotpasschange.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/forgotpasschange/forgotpasschange.page.ts ***!
  \***********************************************************/
/*! exports provided: ForgotpasschangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasschangePage", function() { return ForgotpasschangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_9__);











let ForgotpasschangePage = class ForgotpasschangePage {
    constructor(zone, fcm, gf, storage, searchhotel, navCtrl, valueGlobal, toastCtrl) {
        this.zone = zone;
        this.fcm = fcm;
        this.gf = gf;
        this.storage = storage;
        this.searchhotel = searchhotel;
        this.navCtrl = navCtrl;
        this.valueGlobal = valueGlobal;
        this.toastCtrl = toastCtrl;
        this.passwordIcon = 'eye-off';
        this.passwordType = 'password';
    }
    ngOnInit() {
    }
    saveChange() {
        var se = this;
        if (this.pass) {
            if (this.pass.length >= 6) {
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/account/SetForgotPassMobile',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json'
                    },
                    body: {
                        EmailOrPhone: this.valueGlobal.phone,
                        Token: se.valueGlobal.token,
                        Password: this.pass,
                        Password2: this.pass,
                        ResetToken: this.valueGlobal.resettoken,
                        UserId: this.valueGlobal.userid
                    },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (error)
                        throw new Error(error);
                    if (body.result) {
                        if (body.auth_token) {
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_9___default()(body.auth_token);
                            se.refreshTokenTimer = decoded.refreshTokenTimer;
                            se.storage.set("email", decoded.email);
                            se.storage.set("auth_token", body.auth_token);
                            se.storage.set("username", decoded.fullname);
                            se.storage.set("phone", decoded.phone);
                            var checkfullname = se.hasWhiteSpace(decoded.fullname);
                            se.storage.remove('deviceToken');
                            se.fcm.getToken().then(token => {
                                se.deviceToken = token;
                                se.storage.set('deviceToken', token);
                            });
                            var info;
                            if (checkfullname) {
                                var textfullname = decoded.fullname.trim();
                                textfullname = decoded.fullname.split(' ');
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
                                    info = { ho: textfullname[0], ten: name, phone: decoded.phone };
                                }
                                else if (textfullname.length > 1) {
                                    info = { ho: textfullname[0], ten: textfullname[1], phone: decoded.phone };
                                }
                                else if (textfullname.length == 1) {
                                    info = { ho: textfullname[0], ten: "", phone: decoded.phone };
                                }
                                se.storage.set("infocus", info);
                            }
                            else {
                                info = { ho: "", ten: "", phone: decoded.phone, fullname: "" };
                                se.storage.set("infocus", info);
                            }
                            if (Array.isArray(decoded.jti)) {
                                se.storage.set("jti", decoded.jti[0]);
                            }
                            else {
                                se.storage.set("jti", decoded.jti);
                            }
                            if (se.deviceToken) {
                                se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
                            }
                            se.storage.remove('blogtripdefault');
                            se.storage.remove('regionnamesuggest');
                            se.storage.remove('listtopdealdefault');
                            se.valueGlobal.countNotifi = 0;
                            se.gf.setParams(true, 'resetBlogTrips');
                            se.storage.set("point", decoded.point);
                            se.searchhotel.rootPage = 'login';
                            se.countdownRefreshToken();
                            if (se.valueGlobal.logingoback) {
                                se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
                            }
                            else {
                                se.navCtrl.navigateRoot('/');
                            }
                        }
                    }
                    else {
                        alert(body.msg);
                    }
                });
            }
            else {
                this.presentToastpass();
            }
        }
        else {
            alert("Mật khẩu không được để trống");
        }
    }
    countdownRefreshToken() {
        var timer = parseInt(this.refreshTokenTimer);
        this.countdownTimer(timer);
    }
    countdownTimer(timer) {
        if (timer >= 0) {
            this.valueGlobal.interval = setInterval(() => {
                timer--;
                if (timer < 0) {
                    clearInterval(this.valueGlobal.interval);
                    this.reloadToken();
                }
            }, 1000);
        }
    }
    reloadToken() {
        this.refreshToken();
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var json = JSON.parse(body);
                        if (json.auth_token) {
                            se.storage.remove('auth_token');
                            se.storage.set("auth_token", json.auth_token);
                            se.countdownRefreshToken();
                        }
                    }
                });
            }
        });
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    presentToastpass() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Mật khẩu phải ít nhất 6 ký tự",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    goback() {
        this.navCtrl.back();
    }
    hideShowPassword() {
        this.zone.run(() => {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        });
    }
};
ForgotpasschangePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-forgotpasschange',
        template: __webpack_require__(/*! ./forgotpasschange.page.html */ "./src/app/forgotpasschange/forgotpasschange.page.html"),
        styles: [__webpack_require__(/*! ./forgotpasschange.page.scss */ "./src/app/forgotpasschange/forgotpasschange.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_1__["FCM"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], ForgotpasschangePage);



/***/ })

}]);
//# sourceMappingURL=forgotpasschange-forgotpasschange-module.js.map