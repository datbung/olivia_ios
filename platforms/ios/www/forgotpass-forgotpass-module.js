(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgotpass-forgotpass-module"],{

/***/ "./src/app/forgotpass/forgotpass.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.module.ts ***!
  \*************************************************/
/*! exports provided: ForgotpassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPageModule", function() { return ForgotpassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgotpass.page */ "./src/app/forgotpass/forgotpass.page.ts");







const routes = [
    {
        path: '',
        component: _forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]
    }
];
let ForgotpassPageModule = class ForgotpassPageModule {
};
ForgotpassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_forgotpass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpassPage"]]
    })
], ForgotpassPageModule);



/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.html":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -5px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold\"><label class=\"text-title\">Đăng nhập với\n              SMS</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div style=\"text-align: center\">\n    <label class=\"textv\">\n      Vui lòng nhập email hoặc số điện thoại bạn đã đăng ký với iVIVU.com\n    </label>\n  </div>\n  <!-- <div class=\"textv\" style=\"text-align: center\">\n    <label>\n      iVIVU.com\n    </label>\n  </div> -->\n  <ion-row>\n    <ion-col size=\"12\">\n      <ion-item style=\"--padding-start: 0px\">\n        <ion-label style=\"color: #828282;font-size: 12px\" position=\"floating\">Email/Số điện thoại</ion-label>\n        <ion-input [(ngModel)]=\"phoneoremail\" required></ion-input>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div style=\"margin-top: 24px\"><button ion-button round outline class=\"button btn-save-phone\" (click)=\"next()\">Tiếp tục</button></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.scss":
/*!*************************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.textv {\n  font-size: 14px;\n  color: #333333;\n}\n\n.btn-save-phone {\n  border-color: #f79221;\n  color: #ffffff;\n  background: #f79221;\n  width: 98%;\n  height: 48px;\n  text-transform: none;\n  font-size: 17px;\n  font-weight: normal;\n  margin-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZvcmdvdHBhc3MvZm9yZ290cGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvZm9yZ290cGFzcy9mb3Jnb3RwYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4udGV4dHZ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzM1xyXG59XHJcbi5idG4tc2F2ZS1waG9uZXtcclxuICAgIGJvcmRlci1jb2xvcjogI2Y3OTIyMTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59IiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dHYge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uYnRuLXNhdmUtcGhvbmUge1xuICBib3JkZXItY29sb3I6ICNmNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICB3aWR0aDogOTglO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/forgotpass/forgotpass.page.ts":
/*!***********************************************!*\
  !*** ./src/app/forgotpass/forgotpass.page.ts ***!
  \***********************************************/
/*! exports provided: ForgotpassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpassPage", function() { return ForgotpassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");




var request = __webpack_require__(/*! request */ "./node_modules/request/index.js");

let ForgotpassPage = class ForgotpassPage {
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
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/account/OTPForgotPassWord',
            headers: {
                'cache-control': 'no-cache',
                'content-type': 'application/json'
            },
            body: { EmailOrPhone: this.phoneoremail },
            json: true
        };
        request(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            if (body.result) {
                se.valueGlobal.phone = se.phoneoremail;
                se.navCtrl.navigateForward('forgotpassotp');
            }
            else {
                alert(body.msg);
            }
        });
    }
};
ForgotpassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgotpass',
        template: __webpack_require__(/*! ./forgotpass.page.html */ "./src/app/forgotpass/forgotpass.page.html"),
        styles: [__webpack_require__(/*! ./forgotpass.page.scss */ "./src/app/forgotpass/forgotpass.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"]])
], ForgotpassPage);



/***/ })

}]);
//# sourceMappingURL=forgotpass-forgotpass-module.js.map