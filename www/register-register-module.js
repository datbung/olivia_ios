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

module.exports = "ion-item.item-ios {\n  padding-left: 0;\n}\n\n.passwordIcon {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 15px !important;\n  margin: 0 auto !important;\n}\n\n.center {\n  padding: 57px 0 0 0;\n  text-align: center;\n  height: 100%;\n  background-image: url('backgroundnew.jpg');\n}\n\nion-item {\n  --background: initial;\n  --border-color: #fff;\n}\n\n.text-button {\n  text-align: center;\n  width: 50%;\n  font-size: 16px;\n  color: #ffffff;\n}\n\n.button-outline {\n  --border-color:#ffffff;\n  --border-width: 1px;\n  --border-style: solid;\n}\n\n.div-go-back {\n  position: absolute;\n  top: 16px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.text-color {\n  color: white;\n}\n\n.passwordIcon[_ngcontent-c0] {\n  font-size: 2rem !important;\n  position: relative !important;\n  top: 10px !important;\n  margin: 0 auto !important;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuc2NzcyIsInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGVBQUE7QUNDUjs7QURDTTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQUs7RUFDQyxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0FDR047O0FERE07RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FDSVY7O0FERk07RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0tOOztBREhJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDTU47O0FESkk7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNPTjs7QURMSTtFQUVFLFlBQUE7QUNPTjs7QURMSTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FDUU47O0FETkU7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW9uLWl0ZW0uaXRlbS1pb3Mge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgICAucGFzc3dvcmRJY29ue1xuICAgICAgICBmb250LXNpemU6MnJlbSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgICAgdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gICAgIH1cbiAgICAgLmNlbnRlciB7XG4gICAgICBwYWRkaW5nOiA1N3B4IDAgMCAwO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZG5ldy5qcGcnKVxuICAgICAgfVxuICAgICAgaW9uLWl0ZW17XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgICAgLnRleHQtYnV0dG9ue1xuICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgY29sb3I6ICNmZmZmZmZcbiAgICB9XG4gICAgLmJ1dHRvbi1vdXRsaW5lIHtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiNmZmZmZmY7XG4gICAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgICAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIH1cbiAgICAuZGl2LWdvLWJhY2t7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAudGV4dC1jb2xvclxuICAgIHtcbiAgICAgIGNvbG9yOndoaXRlXG4gICAgfVxuICAgIC5wYXNzd29yZEljb25bX25nY29udGVudC1jMF0ge1xuICAgICAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgICAgIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgfVxuICAuaW9uLWl0ZW1cbiAge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgd2lkdGg6IDEwOCU7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB9XG5cbiIsImlvbi1pdGVtLml0ZW0taW9zIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ucGFzc3dvcmRJY29uIHtcbiAgZm9udC1zaXplOiAycmVtICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmNlbnRlciB7XG4gIHBhZGRpbmc6IDU3cHggMCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvYmFja2dyb3VuZG5ldy5qcGdcIik7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBpbml0aWFsO1xuICAtLWJvcmRlci1jb2xvcjogI2ZmZjtcbn1cblxuLnRleHQtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNTAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYnV0dG9uLW91dGxpbmUge1xuICAtLWJvcmRlci1jb2xvcjojZmZmZmZmO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5kaXYtZ28tYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtY29sb3Ige1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYXNzd29yZEljb25bX25nY29udGVudC1jMF0ge1xuICBmb250LXNpemU6IDJyZW0gIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgd2lkdGg6IDEwOCU7XG4gIG1hcmdpbi10b3A6IDVweDtcbn0iXX0= */"

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