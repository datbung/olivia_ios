(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassword-forgotpassword-module"],{

/***/ "./src/app/forgotpassword/forgotpassword.html":
/*!****************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"center\">\r\n        <div style=\"margin-top: -20px\">\r\n          <ion-card-title style=\"text-align: center\">\r\n            <img style=\"height: 90px;\" src=\"./assets/logo/logo.svg\" />\r\n          </ion-card-title>\r\n          <div class=\"div-go-back\" (click)=\"goback()\">\r\n            <img style=\"margin-top: 6px;height: 36px;\" src=\"./assets/imgs/ios-arrow-round-back-white.svg\" >\r\n          </div>\r\n        </div>\r\n        <ion-grid>\r\n          <ion-row justify-content-around>\r\n            <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center>\r\n                <div padding class=\"forgot-password-email\">\r\n                        <ion-item  style=\"--padding-start: 0px;width: 100%;margin: 0 5px;--background-focused: transparent;background: transparent;\">\r\n                            <ion-label position=\"stacked\" style=\"color:#fff\">Email*</ion-label>\r\n                            <ion-label position=\"stacked\" *ngIf=\"!emailvalidate\" [ngClass]=\"!emailvalidate ? 'validate-error' : ''\">Email không hợp lệ</ion-label>\r\n                            <ion-input #user id=\"cusEmail\" [(ngModel)]=\"usermail\" type=\"text\" style=\"color:#fff\"></ion-input>\r\n                        </ion-item>\r\n\r\n                        <div class=\"button-reset\">\r\n                            <ion-button  shape=\"round\" fill=\"outline\" class=\"button text-button\" (click)=\"resetPassword()\">Đặt lại mật khẩu</ion-button>\r\n                        </div>\r\n                </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    \r\n     \r\n    "

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.module.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _forgotpassword__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassword */ "./src/app/forgotpassword/forgotpassword.ts");







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _forgotpassword__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
                }
            ])
        ],
        declarations: [_forgotpassword__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.scss":
/*!****************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  padding: 76px 0 0 0;\n  text-align: center;\n  height: 100%;\n  background-image: url('backgroundnew.jpg');\n}\n\n.div-go-back {\n  position: absolute;\n  top: 16px;\n  color: #ffffff;\n  width: 48px;\n  height: 48px;\n}\n\n.text-button {\n  text-align: center;\n  width: 100%;\n  font-size: 16px;\n  color: #ffffff;\n  text-transform: none;\n  font-weight: 400;\n  margin-top: 30px;\n}\n\n.validate-error {\n  color: #f79221;\n}\n\n:host(.ion-focused) .item-native {\n  background: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5zY3NzIiwic3JjL2FwcC9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7O0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQXFCLGdCQUFBO0VBQWlCLGdCQUFBO0FDQzFDOztBRENBO0VBQ0ksY0FBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHBhZGRpbmc6IDc2cHggMCAwIDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kbmV3LmpwZycpXHJcbn1cclxuXHJcblxyXG4uZGl2LWdvLWJhY2t7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgLnRleHQtYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7Zm9udC13ZWlnaHQ6IDQwMDttYXJnaW4tdG9wOiAzMHB4XHJcbn1cclxuLnZhbGlkYXRlLWVycm9ye1xyXG4gICAgY29sb3I6ICNmNzkyMjE7XHJcbn1cclxuOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn0iLCIuY2VudGVyIHtcbiAgcGFkZGluZzogNzZweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kbmV3LmpwZ1wiKTtcbn1cblxuLmRpdi1nby1iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnZhbGlkYXRlLWVycm9yIHtcbiAgY29sb3I6ICNmNzkyMjE7XG59XG5cbjpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.ts":
/*!**************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.ts ***!
  \**************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");













let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(keyboard, platform, valueGlobal, navCtrl, formBuilder, authService, storage, toastCtrl, zone, gf, alertCtrl) {
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
        this.alertCtrl = alertCtrl;
        this.emailvalidate = true;
    }
    ngOnInit() {
    }
    resetPassword() {
        if (!this.filterEmail(this.usermail)) {
            this.emailvalidate = false;
            return;
        }
        else if (this.filterEmail(this.usermail)) {
            this.emailvalidate = true;
            var se = this;
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Account/ForgotPass',
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: {
                    email: this.usermail,
                },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                if (error) {
                    error.page = "forgotpassword";
                    error.func = "resetPassword";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                }
                ;
                var rs = body;
                if (rs.result) {
                    se.showAlertMsg();
                }
            });
        }
    }
    showAlertMsg() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "Quên mật khẩu",
                message: "Hệ thống đã gửi link lấy lại mật khẩu đến email của quý khách!. Trong vòng 5 phút vẫn chưa nhận được mail, quý khách vui lòng thử lại bước này.",
                cssClass: "cls-alert-flightcomboreview",
                buttons: [{
                        text: 'Về đăng nhập',
                        role: 'OK',
                        handler: () => {
                            this.navCtrl.navigateBack('/loginusername');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    filterEmail(email) {
        var regex = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
        return regex.test(email);
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.input.setFocus();
        }, 150);
        this.keyboard.show();
        const ionSelects = document.querySelectorAll('ion-item');
        let img = null;
        const selectItemNavtiveInner = ionSelects[0].shadowRoot.querySelector('.item-native');
        if (selectItemNavtiveInner) {
            selectItemNavtiveInner.setAttribute('style', 'background: transparent !important');
        }
    }
    ionViewWillEnter() {
        const ionSelects = document.querySelectorAll('ion-item');
        let img = null;
        var item = ionSelects[0];
        if (ionSelects.length > 1) {
            let idx = ionSelects.length - 1;
            item = ionSelects[idx];
        }
        const selectItemNavtiveInner = item.shadowRoot.querySelector('.item-native');
        if (selectItemNavtiveInner) {
            selectItemNavtiveInner.setAttribute('style', 'background: transparent !important');
        }
    }
    goback() {
        this.navCtrl.back();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('user'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotPasswordPage.prototype, "input", void 0);
ForgotPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgotpassword',
        template: __webpack_require__(/*! ./forgotpassword.html */ "./src/app/forgotpassword/forgotpassword.html"),
        styles: [__webpack_require__(/*! ./forgotpassword.scss */ "./src/app/forgotpassword/forgotpassword.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_10__["Keyboard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
], ForgotPasswordPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassword-forgotpassword-module.js.map