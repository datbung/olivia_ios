(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.html":
/*!****************************************!*\
  !*** ./src/app/register/register.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"center\">\n    <div style=\"margin-top: -20px\">\n      <ion-card-title style=\"text-align: center\">\n        <img style=\"height: 90px;\" src=\"./assets/logo/logo.svg\" />\n      </ion-card-title>\n      <div class=\"div-go-back\"  (click)=\"goback()\">\n        <!-- <ion-icon (click)=\"goback()\" style=\"font-size: 2em;float: left;\" name=\"arrow-back\"\n          class=\"card-title\">\n        </ion-icon> -->\n        <img style=\"margin-top: 6px;height: 36px;\" src=\"./assets/imgs/ios-arrow-round-back-white.svg\" >\n      </div>\n    </div>\n    <ion-grid style=\"margin-top: -20px\">\n      <ion-row justify-content-around>\n        <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center>\n          <form padding=\"true\" [formGroup]=\"regData\">\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label  style=\"color: white\" position=\"stacked\">Email/ Số di động</ion-label>\n              <ion-input #user class=\"text-color\" clearInput type=\"text\" formControlName=\"emailorphone\">\n              </ion-input>\n            </ion-item>\n            <ion-item style=\"--padding-start: 0px\">\n              <ion-label style=\"color: white\" position=\"stacked\">Mật khẩu</ion-label>\n              <ion-input class=\"text-color\" formControlName=\"password\" [type]=\"passwordType\" clearOnEdit=\"false\">\n              </ion-input>\n              <ion-icon style=\"color: whitesmoke\" slot=\"end\" [name]=\"passwordIcon\" class=\"passwordIcon\"\n                (click)='hideShowPassword()'></ion-icon>\n            </ion-item>\n            <ion-row >\n                <ion-col size=\"1\">\n                    <ion-checkbox formControlName=\"ischeck\" style=\"margin-top: 2px\" color=\"secondary\"  [(ngModel)]=\"ischeck\"></ion-checkbox>\n                </ion-col>\n                <ion-col size=\"11\">\n                    <ion-label style=\"color: white;margin: 1px 10px 0px 5px\" text-wrap>Bằng việc tham gia\n                        iVIVU, tôi đồng ý tất cả\n                        <a style=\"color: #26bed6\"\n                          href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n                          target=\"_blank\">điều kiện & điều khoản</a></ion-label>\n                </ion-col>\n            </ion-row>\n             \n              \n          </form>\n          <div style=\"text-align:center;margin-top: -10px;\">\n              <ion-button (click)=\"register()\" [disabled]=\"!ischeck\" style=\"text-transform: none;font-weight: 400\"   shape=\"round\" fill=\"outline\" class=\"button text-button\">Đăng ký</ion-button >\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n"

/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register */ "./src/app/register/register.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _register__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _register__WEBPACK_IMPORTED_MODULE_5__["RegisterPage"]
                }
            ])
        ],
    })
], RegisterPageModule);



/***/ }),

/***/ "./src/app/register/register.scss":
/*!****************************************!*\
  !*** ./src/app/register/register.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item.item-ios {\n  padding-left: 0;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 15px !important;\n  margin: 0 auto !important;\n}\n\n.center {\n  padding: 57px 0 0 0;\n  text-align: center;\n  height: 100%;\n  background-image: url('backgroundnew.jpg');\n}\n\nion-item {\n  --background: initial;\n  --border-color: #fff;\n}\n\n.text-button {\n  text-align: center;\n  width: 50%;\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.button-outline {\n  --border-color:#ffffff;\n  --border-width: 1px;\n  --border-style: solid;\n}\n\n.div-go-back {\n  position: absolute;\n  top: 16px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.text-color {\n  color: white;\n}\n\n.passwordIcon[_ngcontent-c0] {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 10px !important;\n  margin: 0 auto !important;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5zY3NzIiwic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZUFBQTtBQ0NSOztBRENNO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURBSztFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7QUNHTjs7QURETTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7QUNJVjs7QURGTTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDS047O0FESEk7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNNTjs7QURKSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09OOztBRExJO0VBRUUsWUFBQTtBQ09OOztBRExJO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNRTjs7QURORTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24taXRlbS5pdGVtLWlvcyB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgIH1cbiAgICAgIC5wYXNzd29yZEljb257XG4gICAgICAgIGZvbnQtc2l6ZToycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgICAgfVxuICAgICAuY2VudGVyIHtcbiAgICAgIHBhZGRpbmc6IDU3cHggMCAwIDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kbmV3LmpwZycpXG4gICAgICB9XG4gICAgICBpb24taXRlbXtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IGluaXRpYWw7XG4gICAgICAgICAgLS1ib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAudGV4dC1idXR0b257XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZlxuICAgIH1cbiAgICAuYnV0dG9uLW91dGxpbmUge1xuICAgICAgLS1ib3JkZXItY29sb3I6I2ZmZmZmZjtcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgfVxuICAgIC5kaXYtZ28tYmFja3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMTZweDtcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC50ZXh0LWNvbG9yXG4gICAge1xuICAgICAgY29sb3I6d2hpdGVcbiAgICB9XG4gICAgLnBhc3N3b3JkSWNvbltfbmdjb250ZW50LWMwXSB7XG4gICAgICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICAgICAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC5pb24taXRlbVxuICB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICB3aWR0aDogMTA4JTtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgLy8gbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cblxuIiwiaW9uLWl0ZW0uaXRlbS1pb3Mge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5wYXNzd29yZEljb24ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uY2VudGVyIHtcbiAgcGFkZGluZzogNTdweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kbmV3LmpwZ1wiKTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IGluaXRpYWw7XG4gIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG4udGV4dC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5idXR0b24tb3V0bGluZSB7XG4gIC0tYm9yZGVyLWNvbG9yOiNmZmZmZmY7XG4gIC0tYm9yZGVyLXdpZHRoOiAxcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmRpdi1nby1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1jb2xvciB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhc3N3b3JkSWNvbltfbmdjb250ZW50LWMwXSB7XG4gIGZvbnQtc2l6ZTogMnJlbSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICB3aWR0aDogMTA4JTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.ts":
/*!**************************************!*\
  !*** ./src/app/register/register.ts ***!
  \**************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");














let RegisterPage = class RegisterPage {
    constructor(keyboard, navCtrl, menuCtrl, formBuilder, platform, toastCtrl, storage, gf, zone, appVersion, valueGlobal, fcm) {
        this.keyboard = keyboard;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.formBuilder = formBuilder;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.gf = gf;
        this.zone = zone;
        this.appVersion = appVersion;
        this.valueGlobal = valueGlobal;
        this.fcm = fcm;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.regData = this.formBuilder.group({
            emailorphone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            ischeck: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    hideShowPassword() {
        this.zone.run(() => {
            this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
            this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
        });
    }
    ionViewDidLoad() {
        this.menuCtrl.enable(false);
    }
    register() {
        if (this.regData.value.emailorphone) {
            var checkmail = this.validateEmail(this.regData.value.emailorphone);
            if (checkmail) {
                if (this.regData.value.password) {
                    var test = this.regData.value.password.length;
                    if (test >= 6) {
                        this.funcregister();
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
                if (this.phonenumber(this.regData.value.emailorphone)) {
                    var test = this.regData.value.password.length;
                    if (test > 0) {
                        if (test >= 6) {
                            this.postapiRegisterByPhone();
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
                    this.presentToast("Định dạng email không đúng hoặc số điện thoại không chính xác");
                }
            }
        }
        else {
            this.presentToast("Vui lòng nhập email hoặc số điện thoại");
        }
    }
    postapiRegisterByPhone() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/RegisterByPhone',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: { phoneNumber: this.regData.value.emailorphone, password: this.regData.value.password, password2: this.regData.value.password },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            if (body) {
                if (body.result) {
                    se.valueGlobal.phone = se.regData.value.emailorphone;
                    se.navCtrl.navigateForward('registerverify');
                }
                else {
                    alert(body.msg);
                }
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    funcregister() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/Register',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                email: this.regData.value.emailorphone,
                password: this.regData.value.password,
                password2: this.regData.value.password
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
            if (error) {
                error.page = "register";
                error.func = "funcregister";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            if (response.statusCode != 200) {
                var objError = {
                    page: "register",
                    func: "funcregister",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            console.log(body.result);
            if (body.result) {
                alert(body.msg);
                se.logintk();
            }
            else {
                alert(body.msg);
            }
        });
    }
    logintk() {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/Login',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: {
                emailOrPhone: this.regData.value.emailorphone,
                password: this.regData.value.password,
                rememberMe: true
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
            if (error) {
                error.page = "register";
                error.func = "logintk";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            if (body.auth_token) {
                var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(body.auth_token);
                se.zone.run(() => {
                    se.storage.set("email", decoded.email);
                    se.storage.set("auth_token", body.auth_token);
                    se.storage.set("username", decoded.fullname);
                    if (Array.isArray(decoded.jti)) {
                        se.storage.set("jti", decoded.jti[0]);
                    }
                    else {
                        se.storage.set("jti", decoded.jti);
                    }
                    se.storage.set("point", decoded.point);
                    if (se.deviceToken) {
                        se.gf.pushTokenAndMemberID(body.auth_token, se.deviceToken, se.appversion);
                    }
                    se.navCtrl.navigateBack('/');
                }, 10);
            }
        });
        this.gf.googleAnalytion('loginusername', 'login', '');
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('user'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterPage.prototype, "input", void 0);
RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! ./register.html */ "./src/app/register/register.html"),
        styles: [__webpack_require__(/*! ./register.scss */ "./src/app/register/register.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Keyboard"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_10__["AppVersion"], _providers_book_service__WEBPACK_IMPORTED_MODULE_12__["ValueGlobal"],
        _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_11__["FCM"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map