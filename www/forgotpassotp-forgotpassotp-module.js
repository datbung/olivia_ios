(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpassotp-forgotpassotp-module"],{

/***/ "./src/app/forgotpassotp/forgotpassotp.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassotp/forgotpassotp.module.ts ***!
  \*******************************************************/
/*! exports provided: ForgotpassotpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassotpPageModule", function() { return ForgotpassotpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpassotp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpassotp.page */ "./src/app/forgotpassotp/forgotpassotp.page.ts");







const routes = [
    {
        path: '',
        component: _forgotpassotp_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassotpPage"]
    }
];
let ForgotpassotpPageModule = class ForgotpassotpPageModule {
};
ForgotpassotpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgotpassotp_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassotpPage"]]
    })
], ForgotpassotpPageModule);



/***/ }),

/***/ "./src/app/forgotpassotp/forgotpassotp.page.html":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassotp/forgotpassotp.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Mã xác minh</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"content-confirm\">\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 14px\">\n      Vui lòng nhập mã xác minh được gửi đến email/số\n    </label>\n  </div>\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 16px;color: #333333\">\n      {{phone}}\n    </label>\n  </div>\n  <ion-row class=\"row-otp\">\n    <ion-col size=\"2\" class=\"no-padding\">\n      <ion-label class=\"label-otp\">IVV-</ion-label>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change1()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num1\" #ipOTP1 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change2()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num2\" #ipOTP2 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change3()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num3\" #ipOTP3 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change4()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num4\" #ipOTP4 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change5()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num5\" #ipOTP5 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" class=\"no-padding\">\n      <ion-input #ipOTP6 maxlength=1 [(ngModel)]=\"num6\" type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row>\n    <ion-col style=\"padding-top: 12px;text-align: center\" class=\"no-padding\">\n      <ion-label class=\"label-sent-otp\">Mã OTP đã gửi về SĐT của Quý Khách, hiệu lực trong vòng 3 phút.</ion-label>\n    </ion-col>\n  </ion-row> -->\n  <ion-row *ngIf=\"strwarning\" style=\"margin-top: 10px;margin-right: 30px\">\n    <ion-col class=\"no-padding\"><ion-label class=\"label-warning\">{{strwarning}}</ion-label></ion-col>\n</ion-row>\n  <div style=\"margin-top: 25px\"><button (click)=\"confirm()\" ion-button round outline class=\"button btn-save-phone\">Xác nhận</button></div>\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center\" >\n      <ion-label style=\"color: #828282;font-size: 14px\">Chưa nhận được tin nhắn? <span (click)=\"sendOTP()\"\n          style=\"color: #26bed6;font-size: 14px\">Gửi lại mã xác minh</span></ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpassotp/forgotpassotp.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/forgotpassotp/forgotpassotp.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-confirm .input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 25px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n::ng-deep .content-confirm .native-input.sc-ion-input-md {\n  text-align: center;\n  margin-right: 10px;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red;\n  white-space: normal;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb3Jnb3RwYXNzb3RwL2ZvcmdvdHBhc3NvdHAucGFnZS5zY3NzIiwic3JjL2FwcC9mb3Jnb3RwYXNzb3RwL2ZvcmdvdHBhc3NvdHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBQTtFQUNJLHdCQUFBO0FDR0o7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1I7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9mb3Jnb3RwYXNzb3RwL2ZvcmdvdHBhc3NvdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29uZmlybVxyXG4uaW5wdXQtb3Rwe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5yb3ctb3Rwe1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ubm8tcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5sYWJlbC1vdHB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHg7XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gICAgLmNvbnRlbnQtY29uZmlybSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxufVxyXG4ubGFiZWwtd2FybmluZ3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZWQgO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxufVxyXG4ubGFiZWwtc2VudC1vdHB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogIzg0ODQ4NDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuLmJ0bi1zYXZlLXBob25le1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxufSIsIi5jb250ZW50LWNvbmZpcm0gLmlucHV0LW90cCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5yb3ctb3RwIHtcbiAgaGVpZ2h0OiAzMnB4O1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDBweCA4cHggMHB4IDBweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmxhYmVsLW90cCB7XG4gIG1hcmdpbjogMTBweCAwcHggMHB4IDBweDtcbn1cblxuOjpuZy1kZWVwIC5jb250ZW50LWNvbmZpcm0gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxhYmVsLXdhcm5pbmcge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiByZWQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5sYWJlbC1zZW50LW90cCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4NDg0ODQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5idG4tc2F2ZS1waG9uZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgotpassotp/forgotpassotp.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/forgotpassotp/forgotpassotp.page.ts ***!
  \*****************************************************/
/*! exports provided: ForgotpassotpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassotpPage", function() { return ForgotpassotpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");












let ForgotpassotpPage = class ForgotpassotpPage {
    constructor(modalCtrl, appVersion, searchhotel, fcm, zone, navCtrl, keyboard, storage, valueGlobal, toastCtrl, gf) {
        this.modalCtrl = modalCtrl;
        this.appVersion = appVersion;
        this.searchhotel = searchhotel;
        this.fcm = fcm;
        this.zone = zone;
        this.navCtrl = navCtrl;
        this.keyboard = keyboard;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this.toastCtrl = toastCtrl;
        this.gf = gf;
        this.num1 = "";
        this.num2 = "";
        this.num3 = "";
        this.num4 = "";
        this.num5 = "";
        this.num6 = "";
        this.phone = this.valueGlobal.phone;
        this.storage.get('checkreview').then(checkreview => {
            this.checkreview = checkreview;
        });
        this.appVersion.getVersionNumber().then(version => {
            this.appversion = version;
        });
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.ipOTP1.setFocus();
        }, 150);
        this.keyboard.show();
    }
    change1() {
        if (this.num1) {
            this.ipOTP2.setFocus();
            this.keyboard.show();
        }
    }
    change2() {
        if (this.num2) {
            this.ipOTP3.setFocus();
            this.keyboard.show();
        }
    }
    change3() {
        if (this.num3) {
            this.ipOTP4.setFocus();
            this.keyboard.show();
        }
    }
    change4() {
        if (this.num4) {
            this.ipOTP5.setFocus();
            this.keyboard.show();
        }
    }
    change5() {
        if (this.num5) {
            this.ipOTP6.setFocus();
            this.keyboard.show();
        }
    }
    confirm() {
        var se = this;
        if (this.num1 && this.num2 && this.num3 && this.num4 && this.num6) {
            se.obj = this.num1 + this.num2 + this.num3 + this.num4 + this.num5 + this.num6;
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/CheckTokenForgotPassWord',
                headers: {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { EmailOrPhone: this.phone, Token: se.obj },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body.result) {
                    se.valueGlobal.resettoken = body.resettoken;
                    se.valueGlobal.userid = body.userid;
                    se.valueGlobal.token = se.obj;
                    se.navCtrl.navigateForward('forgotpasschange');
                }
                else {
                    alert(body.msg);
                }
            });
        }
        else {
            se.presentToast("Xin nhập đầy đủ mã OTP");
        }
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
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/OTPForgotPassWord',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: { EmailOrPhone: this.phone },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            alert(body.msg);
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP1'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP2'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP3'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP4'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP5'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP5", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP6'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ForgotpassotpPage.prototype, "ipOTP6", void 0);
ForgotpassotpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-forgotpassotp',
        template: __webpack_require__(/*! ./forgotpassotp.page.html */ "./src/app/forgotpassotp/forgotpassotp.page.html"),
        styles: [__webpack_require__(/*! ./forgotpassotp.page.scss */ "./src/app/forgotpassotp/forgotpassotp.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"]])
], ForgotpassotpPage);



/***/ })

}]);
//# sourceMappingURL=forgotpassotp-forgotpassotp-module.js.map