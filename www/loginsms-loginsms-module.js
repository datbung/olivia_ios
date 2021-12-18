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

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold\"><label class=\"text-title\">Đăng nhập với\n              SMS</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"text-align: center\">\n    <label class=\"textv\">\n      Vui lòng nhập số điện thoại bạn đã đăng ký với\n    </label>\n  </div>\n  <div class=\"textv\" style=\"text-align: center\">\n    <label>\n      iVIVU.com\n    </label>\n  </div>\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label style=\"color: #828282;font-size: 12px\" position=\"floating\">Số điện thoại</ion-label>\n        <ion-input [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div style=\"margin-top: 24px\"><button ion-button round outline class=\"button btn-save-phone\" (click)=\"next()\">Tiếp tục</button></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/loginsms/loginsms.page.scss":
/*!*********************************************!*\
  !*** ./src/app/loginsms/loginsms.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.textv {\n  font-size: 14px;\n  color: #333333;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvbG9naW5zbXMvbG9naW5zbXMucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbnNtcy9sb2dpbnNtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbG9naW5zbXMvbG9naW5zbXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi50ZXh0dntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzXHJcbn1cclxuLmJ0bi1zYXZlLXBob25le1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZjc5MjIxO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn0iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0diB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5idG4tc2F2ZS1waG9uZSB7XG4gIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIHdpZHRoOiA5OCU7XG4gIGhlaWdodDogNDhweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn0iXX0= */"

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




var request = __webpack_require__(/*! request */ "./node_modules/request/index.js");

let LoginsmsPage = class LoginsmsPage {
    constructor(toastCtrl, navCtrl, valueGlobal) {
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.valueGlobal = valueGlobal;
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
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
LoginsmsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loginsms',
        template: __webpack_require__(/*! ./loginsms.page.html */ "./src/app/loginsms/loginsms.page.html"),
        styles: [__webpack_require__(/*! ./loginsms.page.scss */ "./src/app/loginsms/loginsms.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"]])
], LoginsmsPage);



/***/ })

}]);
//# sourceMappingURL=loginsms-loginsms-module.js.map