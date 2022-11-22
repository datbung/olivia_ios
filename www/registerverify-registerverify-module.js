(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registerverify-registerverify-module"],{

/***/ "./src/app/registerverify/registerverify.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/registerverify/registerverify.module.ts ***!
  \*********************************************************/
/*! exports provided: RegisterverifyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterverifyPageModule", function() { return RegisterverifyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registerverify_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registerverify.page */ "./src/app/registerverify/registerverify.page.ts");







const routes = [
    {
        path: '',
        component: _registerverify_page__WEBPACK_IMPORTED_MODULE_6__["RegisterverifyPage"]
    }
];
let RegisterverifyPageModule = class RegisterverifyPageModule {
};
RegisterverifyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_registerverify_page__WEBPACK_IMPORTED_MODULE_6__["RegisterverifyPage"]]
    })
], RegisterverifyPageModule);



/***/ }),

/***/ "./src/app/registerverify/registerverify.page.html":
/*!*********************************************************!*\
  !*** ./src/app/registerverify/registerverify.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Mã xác minh</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"content-confirm\">\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 14px\">\n      Vui lòng nhập mã xác minh được gửi đến số\n    </label>\n  </div>\n  <div style=\"text-align: center\">\n    <label style=\"font-size: 16px;color: #333333\">\n      {{phone}}\n    </label>\n  </div>\n  <ion-row class=\"row-otp\">\n    <ion-col size=\"2\" class=\"no-padding\">\n      <ion-label class=\"label-otp\">IVV-</ion-label>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change1()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num1\" #ipOTP1 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change2()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num2\" #ipOTP2 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change3()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num3\" #ipOTP3 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change4()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num4\" #ipOTP4 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" (ionChange)=\"change5()\" class=\"no-padding\">\n      <ion-input [(ngModel)]=\"num5\" #ipOTP5 maxlength=1 type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n    <ion-col size=\"1.5\" class=\"no-padding\">\n      <ion-input #ipOTP6 maxlength=1 [(ngModel)]=\"num6\" type=tel class=\"input-otp\" autofocus></ion-input>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-row>\n    <ion-col style=\"padding-top: 12px;text-align: center\" class=\"no-padding\">\n      <ion-label class=\"label-sent-otp\">Mã OTP đã gửi về SĐT của Quý Khách, hiệu lực trong vòng 3 phút.</ion-label>\n    </ion-col>\n  </ion-row> -->\n  <ion-row *ngIf=\"strwarning\" style=\"margin-top: 10px;margin-right: 30px\">\n    <ion-col class=\"no-padding\"><ion-label class=\"label-warning\">{{strwarning}}</ion-label></ion-col>\n</ion-row>\n  <div style=\"margin-top: 25px\"><button (click)=\"confirm()\" ion-button round outline class=\"button btn-save-phone\">Xác nhận</button></div>\n  <ion-row style=\"margin-top: 10px;\">\n    <ion-col style=\"text-align: center\" >\n      <ion-label style=\"color: #828282;font-size: 14px\">Chưa nhận được tin nhắn? <span (click)=\"sendOTP()\"\n          style=\"color: #26bed6;font-size: 14px\">Gửi lại mã xác minh</span></ion-label>\n    </ion-col>\n  </ion-row>\n</ion-content>"

/***/ }),

/***/ "./src/app/registerverify/registerverify.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/registerverify/registerverify.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-confirm .input-otp {\n  border: solid 1px #bdbdbd;\n  border-radius: 4px;\n  width: 40px;\n  height: 40px;\n  text-align: center;\n  margin-right: 10px;\n}\n\n.row-otp {\n  height: 32px;\n  margin-top: 25px;\n}\n\n.no-padding {\n  padding: 0px 8px 0px 0px;\n  align-self: center;\n  text-align: right;\n}\n\n.label-otp {\n  margin: 10px 0px 0px 0px;\n}\n\n::ng-deep .content-confirm .native-input.sc-ion-input-md {\n  text-align: center;\n  margin-right: 10px;\n}\n\n.label-warning {\n  font-size: 12px;\n  color: red;\n  white-space: normal;\n}\n\n.label-sent-otp {\n  font-size: 12px;\n  color: #848484;\n  white-space: normal;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 100%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yZWdpc3RlcnZlcmlmeS9yZWdpc3RlcnZlcmlmeS5wYWdlLnNjc3MiLCJzcmMvYXBwL3JlZ2lzdGVydmVyaWZ5L3JlZ2lzdGVydmVyaWZ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7RUFDSSx3QkFBQTtBQ0dKOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBREFBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXJ2ZXJpZnkvcmVnaXN0ZXJ2ZXJpZnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtY29uZmlybVxuLmlucHV0LW90cHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5yb3ctb3Rwe1xuICAgIGhlaWdodDogMzJweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuLm5vLXBhZGRpbmd7XG4gICAgcGFkZGluZzogMHB4IDhweCAwcHggMHB4O1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5sYWJlbC1vdHB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuOjpuZy1kZWVwe1xuICAgIC5jb250ZW50LWNvbmZpcm0gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG4ubGFiZWwtd2FybmluZ3tcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJlZCA7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5sYWJlbC1zZW50LW90cHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM4NDg0ODQ7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbi5idG4tc2F2ZS1waG9uZXtcbiAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG59IiwiLmNvbnRlbnQtY29uZmlybSAuaW5wdXQtb3RwIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJvdy1vdHAge1xuICBoZWlnaHQ6IDMycHg7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMHB4IDhweCAwcHggMHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubGFiZWwtb3RwIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtY29uZmlybSAubmF0aXZlLWlucHV0LnNjLWlvbi1pbnB1dC1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubGFiZWwtd2FybmluZyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHJlZDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmxhYmVsLXNlbnQtb3RwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzg0ODQ4NDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmJ0bi1zYXZlLXBob25lIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/registerverify/registerverify.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/registerverify/registerverify.page.ts ***!
  \*******************************************************/
/*! exports provided: RegisterverifyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterverifyPage", function() { return RegisterverifyPage; });
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
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_11__);













let RegisterverifyPage = class RegisterverifyPage {
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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/OTPRegisterSMS',
                headers: {
                    'postman-token': 'aac9e726-944b-2180-2416-63d2b1031a7a',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { PhoneNumber: this.phone, Token: se.obj },
                json: true
            };
            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body.result) {
                    if (body.auth_token) {
                        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_11___default()(body.auth_token);
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
                        if (!se.checkreview) {
                            se.storage.set("checkreview", 0);
                        }
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
            se.presentToast("Xin nhập đầy đủ mã OTP");
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
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
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_9__["C"].urls.baseUrl.urlMobile + '/api/account/OTPLoginSMS',
            headers: {
                'postman-token': '0b9f3a80-3e35-1af7-058f-597d733e7cee',
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: { PhoneNumber: this.phone },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            if (!body.result) {
                alert(body.msg);
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP1'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP2'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP2", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP3'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP3", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP4'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP4", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP5'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP5", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('ipOTP6'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], RegisterverifyPage.prototype, "ipOTP6", void 0);
RegisterverifyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-registerverify',
        template: __webpack_require__(/*! ./registerverify.page.html */ "./src/app/registerverify/registerverify.page.html"),
        styles: [__webpack_require__(/*! ./registerverify.page.scss */ "./src/app/registerverify/registerverify.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_10__["FCM"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Keyboard"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], src_app_providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"]])
], RegisterverifyPage);



/***/ })

}]);
//# sourceMappingURL=registerverify-registerverify-module.js.map