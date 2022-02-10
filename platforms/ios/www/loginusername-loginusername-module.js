(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginusername-loginusername-module"],{

/***/ "./src/app/loginusername/loginusername.html":
/*!**************************************************!*\
  !*** ./src/app/loginusername/loginusername.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"center\">\n    <div style=\"margin-top: -20px\">\n      <ion-card-title style=\"text-align: center\">\n        <img style=\"height: 90px;\" src=\"./assets/logo/logo.svg\" />\n      </ion-card-title>\n      <div class=\"div-go-back\" (click)=\"goback()\">\n        <!-- <ion-icon (click)=\"goback()\" style=\"font-size: 2em;float: left;\" name=\"arrow-back\" class=\"card-title\">\n        </ion-icon> -->\n        <img style=\"margin-top: 6px;height: 36px;\" src=\"./assets/imgs/ios-arrow-round-back-white.svg\" >\n      </div>\n    </div>\n    <ion-grid>\n      <ion-row justify-content-around>\n        <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center>\n          <form padding=\"true\" [formGroup]=\"loginData\" >\n              <ion-item style=\"--padding-start: 0px\">\n              <ion-label style=\"color:white\" position=\"stacked\">Nhập bằng email hoặc số điện thoại</ion-label>\n              <ion-input  #user  clearInput type=\"text\" style=\"color:white\" [(ngModel)]=\"emailorphone\" formControlName=\"emailorphone\" autofocus></ion-input>\n            </ion-item>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label style=\"color:white\"position=\"stacked\">Mật khẩu</ion-label>\n              <ion-input clearInput type=\"password\" style=\"color:white\" [(ngModel)]=\"password\" formControlName=\"password\"></ion-input>\n            </ion-item>\n            <ion-row style=\"margin-left: -5px\">\n              <ion-col size=\"0.5\">\n                  <ion-checkbox formControlName=\"ischeck\" [(ngModel)]=\"ischeck\"  color=\"secondary\" style=\"width: 20px;height: 20px;\"></ion-checkbox>\n              </ion-col>\n              <ion-col size=\"10.5\">\n                  <ion-label  style=\"color: white;margin: 0px 10px 0px 5px;margin-left: 10px\" text-wrap>Nhớ mật khẩu</ion-label>\n              </ion-col>\n          </ion-row>\n            <div style=\"text-align: right;color: #fff;font-size: 13px\" >\n              <label (click)=\"resetpassword()\">\n                Quên mật khẩu?\n            </label>\n            </div>\n            <div style=\"text-align:center\">\n              <button style=\"text-transform: none;font-weight: 400;margin-top: 10px;border: solid 1px #fff;background-color: transparent;\"\n                (click)=\"next()\" class=\"button text-button\">Đăng\n                nhập</button>\n            </div>\n          </form>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n\n  \n\n \n"

/***/ }),

/***/ "./src/app/loginusername/loginusername.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/loginusername/loginusername.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginusernamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginusernamePageModule", function() { return LoginusernamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loginusername__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginusername */ "./src/app/loginusername/loginusername.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let LoginusernamePageModule = class LoginusernamePageModule {
};
LoginusernamePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _loginusername__WEBPACK_IMPORTED_MODULE_5__["LoginusernamePage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _loginusername__WEBPACK_IMPORTED_MODULE_5__["LoginusernamePage"]
                }
            ])
        ],
    })
], LoginusernamePageModule);



/***/ }),

/***/ "./src/app/loginusername/loginusername.scss":
/*!**************************************************!*\
  !*** ./src/app/loginusername/loginusername.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-go-back {\n  position: absolute;\n  top: calc(env(safe-area-inset-top) + 16px);\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n  padding-left: 16px;\n}\n\n.center {\n  padding: 57px 0 0 0;\n  height: 100%;\n  background-image: url('backgroundnew.jpg');\n}\n\nion-item {\n  --background: initial;\n  --border-color: #fff;\n}\n\n.text-button {\n  text-align: center;\n  width: 60%;\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.button-outline {\n  --border-color:#ffffff;\n  --border-width: 1px;\n  --border-style: solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2xvZ2ludXNlcm5hbWUvbG9naW51c2VybmFtZS5zY3NzIiwic3JjL2FwcC9sb2dpbnVzZXJuYW1lL2xvZ2ludXNlcm5hbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRztFQUNDLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVJO0VBQ0YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNDRjs7QURDSTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUNFUjs7QURBSTtFQUNGLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDR0Y7O0FEREM7RUFDQyxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ludXNlcm5hbWUvbG9naW51c2VybmFtZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAuZGl2LWdvLWJhY2t7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyAxNnB4KTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICB9XG4gICAgLmNlbnRlciB7XG5cdFx0cGFkZGluZzogNTdweCAwIDAgMDtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZG5ldy5qcGcnKVxuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLnRleHQtYnV0dG9ue1xuXHRcdHRleHQtYWxpZ246Y2VudGVyO1xuXHRcdHdpZHRoOiA2MCU7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGNvbG9yOiAjZmZmZmZmXG5cdH1cblx0LmJ1dHRvbi1vdXRsaW5lIHtcblx0XHQtLWJvcmRlci1jb2xvcjojZmZmZmZmO1xuXHRcdC0tYm9yZGVyLXdpZHRoOiAxcHg7XG5cdFx0LS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuXG5cdH1cbiAgICBcbiAgXG5cbiIsIi5kaXYtZ28tYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDE2cHgpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4uY2VudGVyIHtcbiAgcGFkZGluZzogNTdweCAwIDAgMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZG5ldy5qcGdcIik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNjAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uLW91dGxpbmUge1xuICAtLWJvcmRlci1jb2xvcjojZmZmZmZmO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/loginusername/loginusername.ts":
/*!************************************************!*\
  !*** ./src/app/loginusername/loginusername.ts ***!
  \************************************************/
/*! exports provided: LoginusernamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginusernamePage", function() { return LoginusernamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");

















let LoginusernamePage = class LoginusernamePage {
    constructor(keyboard, platform, valueGlobal, navCtrl, formBuilder, authService, storage, toastCtrl, zone, gf, searchhotel, fcm, appVersion, foodService, _flightService) {
        this.keyboard = keyboard;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.gf = gf;
        this.searchhotel = searchhotel;
        this.fcm = fcm;
        this.appVersion = appVersion;
        this.foodService = foodService;
        this._flightService = _flightService;
        this.emailorphone = '';
        this.password = '';
        this.loginData = this.formBuilder.group({
            emailorphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)])],
            ischeck: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
        });
        this.storage.get('checkreview').then(checkreview => {
            this.checkreview = checkreview;
        });
        this.storage.get('emailrmb').then(emailrmb => {
            this.emailorphone = emailrmb;
        });
        this.storage.get('password').then(password => {
            if (password) {
                this.password = password;
                this.ischeck = true;
            }
        });
    }
    ngOnInit() {
    }
    next() {
        if (this.loginData.value.emailorphone) {
            var checkmail = this.validateEmail(this.loginData.value.emailorphone);
            if (checkmail) {
                if (this.loginData.value.password) {
                    var test = this.loginData.value.password.length;
                    if (test >= 6) {
                        this.logintk();
                    }
                    else {
                        this.presentToast("Mật khẩu phải ít nhất 6 ký tự");
                    }
                }
                else {
                    this.presentToast("Vui lòng nhập mật khẩu");
                }
            }
            else {
                if (this.phonenumber(this.loginData.value.emailorphone)) {
                    this.logintk();
                }
                else {
                    this.presentToast("Định dạng email không đúng hoặc số điện thoại không chính xác");
                }
            }
        }
        else {
            this.presentToast("Vui lòng nhập email hoặc số điện thoại");
        }
    }
    logintk() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/Account/Login',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                emailOrPhone: this.loginData.value.emailorphone,
                password: this.loginData.value.password,
                rememberMe: true
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error) {
                error.page = "loginusername";
                error.func = "logintk";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
            }
            ;
            if (body.auth_token) {
                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_7___default()(body.auth_token);
                se.refreshTokenTimer = decoded.refreshTokenTimer;
                se.storage.set("savepassword", se.loginData.value.password);
                se.storage.set("saveemail", decoded.email);
                se.zone.run(() => {
                    se.storage.set("email", decoded.email);
                    se.storage.set("auth_token", body.auth_token);
                    se.storage.set("username", decoded.fullname);
                    se.storage.set("phone", decoded.phone);
                    se.storage.remove('deviceToken');
                    se.fcm.getToken().then(token => {
                        se.deviceToken = token;
                        se.storage.set('deviceToken', token);
                        if (se.deviceToken) {
                            se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
                        }
                    });
                    se.valueGlobal.countNotifi = 0;
                    var checkfullname = se.validateEmail(decoded.fullname);
                    var info;
                    if (!checkfullname) {
                        var textfullname = decoded.fullname.split(' ');
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
                        info = { ho: "", ten: "", phone: decoded.phone };
                        se.storage.set("infocus", info);
                    }
                    if (Array.isArray(decoded.jti)) {
                        se.storage.set("jti", decoded.jti[0]);
                    }
                    else {
                        se.storage.set("jti", decoded.jti);
                    }
                    if (!se.checkreview) {
                        se.storage.set("checkreview", 0);
                    }
                    se.storage.set("point", decoded.point);
                    if (se.loginData.value.ischeck) {
                        se.storage.remove("password");
                        se.storage.remove("emailrmb");
                        se.storage.set("password", se.loginData.value.password);
                        se.storage.set("emailrmb", se.loginData.value.emailorphone);
                    }
                    else {
                        se.storage.remove("password");
                        se.storage.remove("emailrmb");
                    }
                    se.storage.remove('blogtripdefault');
                    se.storage.remove('regionnamesuggest');
                    se.storage.remove('listtopdealdefault');
                    se.gf.setParams(true, 'resetBlogTrips');
                    se.searchhotel.rootPage = 'login';
                    if (document.getElementsByClassName("homefood-footer").length > 0) {
                        document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                    }
                    if (se.valueGlobal.backValue == 'foodaccount') {
                        se.foodService.menuFooterClick.emit(4);
                    }
                    if (se.valueGlobal.backValue == "flightaccount") {
                        se._flightService.itemMenuFlightClick.emit(4);
                    }
                    if (se.valueGlobal.logingoback) {
                        if (se.valueGlobal.logingoback == "flightadddetails") {
                            se._flightService.itemFlightLogin.emit(1);
                        }
                        se.navCtrl.navigateBack([se.valueGlobal.logingoback]);
                    }
                    else {
                        se.navCtrl.navigateRoot('/');
                    }
                }, 10);
            }
            else {
                se.presentToast(body.msg);
            }
        });
        this.gf.googleAnalytion('loginusername', 'login', '');
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    redirectToHome() {
        this.storage.get('id_token').then(id_token => {
            if (id_token !== null) {
            }
            else {
                this.presentToast("Email hoặc mật khẩu không đúng.");
            }
        });
    }
    presentToast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    ionViewWillEnter() {
        this.platform.ready().then(() => {
            this.fcm.getToken().then(token => {
                console.log(token);
                this.deviceToken = token;
            });
        });
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
    }
    countdownRefreshToken() {
        var timer = parseInt(this.refreshTokenTimer);
        this.countdownTimer(timer);
    }
    countdownTimer(timer) {
        if (timer >= 0) {
            clearInterval(this.valueGlobal.interval);
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var json = JSON.parse(body);
                        if (json.auth_token) {
                            se.storage.remove('auth_token').then(() => {
                                se.storage.set("auth_token", json.auth_token);
                            });
                        }
                    }
                });
            }
        });
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.input.setFocus();
        }, 150);
        this.keyboard.show();
    }
    goback() {
        this.navCtrl.back();
    }
    resetpassword() {
        this.navCtrl.navigateForward('/forgotpass');
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    phonenumber(inputtxt) {
        var n = Number(inputtxt);
        if (n) {
            var test1 = inputtxt.length;
            if (inputtxt) {
                if (test1 == 10) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('user'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginusernamePage.prototype, "input", void 0);
LoginusernamePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginusername',
        template: __webpack_require__(/*! ./loginusername.html */ "./src/app/loginusername/loginusername.html"),
        styles: [__webpack_require__(/*! ./loginusername.scss */ "./src/app/loginusername/loginusername.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["SearchHotel"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_12__["FCM"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_13__["AppVersion"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_14__["foodService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_15__["flightService"]])
], LoginusernamePage);



/***/ })

}]);
//# sourceMappingURL=loginusername-loginusername-module.js.map