(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loginsms-loginsms-module"],{

/***/ "./src/app/loginsms/loginsms.module.ts":
/*!*********************************************!*\
  !*** ./src/app/loginsms/loginsms.module.ts ***!
  \*********************************************/
/*! exports provided: LoginsmsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsmsPageModule", function() { return LoginsmsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _loginsms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginsms.page */ "./src/app/loginsms/loginsms.page.ts");







const routes = [
    {
        path: '',
        component: _loginsms_page__WEBPACK_IMPORTED_MODULE_6__["LoginsmsPage"]
    }
];
let LoginsmsPageModule = class LoginsmsPageModule {
};
LoginsmsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_loginsms_page__WEBPACK_IMPORTED_MODULE_6__["LoginsmsPage"]]
    })
], LoginsmsPageModule);



/***/ }),

/***/ "./src/app/loginsms/loginsms.page.html":
/*!*********************************************!*\
  !*** ./src/app/loginsms/loginsms.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold\"><label class=\"text-title\">Đăng nhập với\n              SMS</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"text-align: center\">\n    <label class=\"textv\">\n      Vui lòng nhập số điện thoại bạn đã đăng ký với\n    </label>\n  </div>\n  <div class=\"textv\" style=\"text-align: center\">\n    <label>\n      iVIVU.com\n    </label>\n  </div>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label style=\"color: #828282;font-size: 12px\" position=\"floating\">Số điện thoại</ion-label>\n        <ion-input #ipphone [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div style=\"margin-top: 24px\"><button ion-button round outline class=\"button btn-save-phone\" (click)=\"next()\">Tiếp tục</button></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/loginsms/loginsms.page.scss":
/*!*********************************************!*\
  !*** ./src/app/loginsms/loginsms.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.textv {\n  font-size: 14px;\n  color: #333333;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9sb2dpbnNtcy9sb2dpbnNtcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luc21zL2xvZ2luc21zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9sb2dpbnNtcy9sb2dpbnNtcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLnRleHR2e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzNcclxufVxyXG4uYnRuLXNhdmUtcGhvbmV7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNzkyMjE7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHR2IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmJ0bi1zYXZlLXBob25lIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgd2lkdGg6IDk4JTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tbGVmdDogNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/loginsms/loginsms.page.ts":
/*!*******************************************!*\
  !*** ./src/app/loginsms/loginsms.page.ts ***!
  \*******************************************/
/*! exports provided: LoginsmsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginsmsPage", function() { return LoginsmsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");




var request = __webpack_require__(/*! request */ "./node_modules/request/index.js");


let LoginsmsPage = class LoginsmsPage {
    constructor(toastCtrl, navCtrl, valueGlobal, keyboard) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.valueGlobal = valueGlobal;
        this.keyboard = keyboard;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    ionViewDidEnter() {
        setTimeout(() => {
            this.ipphone.setFocus();
        }, 150);
        this.keyboard.show();
    }
    next() {
        if (this.phonenumber(this.phone)) {
            var se = this;
            se.valueGlobal.phone = se.phone;
            se.navCtrl.navigateForward('loginsmsverify');
            var options = {
                method: 'POST',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/account/OTPLoginSMS',
                headers: {
                    'postman-token': '0b9f3a80-3e35-1af7-058f-597d733e7cee',
                    'cache-control': 'no-cache',
                    'content-type': 'application/json'
                },
                body: { PhoneNumber: this.phone },
                json: true
            };
            request(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                if (body.result) {
                }
                else {
                    alert(body.msg);
                }
            });
        }
        else {
            this.presentToastPhone();
        }
    }
    presentToastPhone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Số điện thoại không hợp lệ. Xin vui lòng nhập lại.",
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
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('ipphone'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LoginsmsPage.prototype, "ipphone", void 0);
LoginsmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loginsms',
        template: __webpack_require__(/*! ./loginsms.page.html */ "./src/app/loginsms/loginsms.page.html"),
        styles: [__webpack_require__(/*! ./loginsms.page.scss */ "./src/app/loginsms/loginsms.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"], _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]])
], LoginsmsPage);



/***/ })

}]);
//# sourceMappingURL=loginsms-loginsms-module.js.map