(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentpayoo-roompaymentpayoo-module"],{

/***/ "./src/app/roompaymentpayoo/roompaymentpayoo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/roompaymentpayoo/roompaymentpayoo.module.ts ***!
  \*************************************************************/
/*! exports provided: RoompaymentpayooPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentpayooPageModule", function() { return RoompaymentpayooPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _roompaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roompaymentpayoo.page */ "./src/app/roompaymentpayoo/roompaymentpayoo.page.ts");







const routes = [
    {
        path: '',
        component: _roompaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["RoompaymentpayooPage"]
    }
];
let RoompaymentpayooPageModule = class RoompaymentpayooPageModule {
};
RoompaymentpayooPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_roompaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["RoompaymentpayooPage"]]
    })
], RoompaymentpayooPageModule);



/***/ }),

/***/ "./src/app/roompaymentpayoo/roompaymentpayoo.page.html":
/*!*************************************************************!*\
  !*** ./src/app/roompaymentpayoo/roompaymentpayoo.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n  <div *ngIf=\"stt=='0'\">\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Mã thanh toán Payoo: {{BillingCode}}, số tiền: <span class=\"totalPrice\">{{priceshow}} VND</span>  vui lòng thanh toán trước <span class=\"textpayment\">{{PeriodPaymentDate}}</span>\n      </ion-label>\n    </div>\n    <div>\n      <label class=\"text\">Để tìm cửa hàng gần nhất, hãy <a target=\"_blank\" href=\"https://payoo.vn/mapv2/public/index.php?verify=true\">xem tại đây</a></label>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/payoo_store.jpg\">\n    </div>\n  </div>\n  <div *ngIf=\"stt=='1'&&qrimg\">\n    <p>\n      Quý khách vui lòng quét mã QR dưới đây để thanh toán \t\t\t\t\t\t\t\t\t\t\t\t\n    </p>\n    <div>\n      <img style=\"width:170px\"  src={{qrimg}}>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/help_qrcode.jpg\">\n    </div>\n  </div>\n </ion-content>\n <ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roompaymentpayoo/roompaymentpayoo.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/roompaymentpayoo/roompaymentpayoo.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.totalPrice {\n  font-weight: bold;\n  color: #26BED6;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tcGF5bWVudHBheW9vL3Jvb21wYXltZW50cGF5b28ucGFnZS5zY3NzIiwic3JjL2FwcC9yb29tcGF5bWVudHBheW9vL3Jvb21wYXltZW50cGF5b28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUEsY0FBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNGSjs7QURLQTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRGxEOztBREdBO0VBRUksZ0JBQUE7QUNESjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9yb29tcGF5bWVudHBheW9vL3Jvb21wYXltZW50cGF5b28ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgICAudG90YWxQcmljZVxue1xuICAgIGNvbG9yOiAjMjZCRUQ2O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxufVxuLmJ1dHRvbjJcbntcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uZGl2LWJ0blxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG59XG4ubXQxNVxue1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4udG90YWxQcmljZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6ICMyNkJFRDY7XG59XG4udGV4dHBheW1lbnR7XG4gICAgY29sb3I6IzAwM0M3MTsgXG4gICAgZm9udC13ZWlnaHQ6Ym9sZFxufVxuLnRleHR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI7XG59XG4iLCI6Om5nLWRlZXAgLnRvdGFsUHJpY2Uge1xuICBjb2xvcjogIzI2QkVENjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tdDE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRvdGFsUHJpY2Uge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNkJFRDY7XG59XG5cbi50ZXh0cGF5bWVudCB7XG4gIGNvbG9yOiAjMDAzQzcxO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/roompaymentpayoo/roompaymentpayoo.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/roompaymentpayoo/roompaymentpayoo.page.ts ***!
  \***********************************************************/
/*! exports provided: RoompaymentpayooPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentpayooPage", function() { return RoompaymentpayooPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let RoompaymentpayooPage = class RoompaymentpayooPage {
    constructor(navCtrl, gf, activatedRoute, Roomif) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.Roomif = Roomif;
    }
    ngOnInit() {
        this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        this.sttbooking = this.activatedRoute.snapshot.paramMap.get('sttbooking');
        this.roomtype = this.Roomif.roomtype;
        this.PriceAvgPlusTAStr = this.roomtype.PriceAvgPlusTAStr;
        if (this.Roomif.priceshow) {
            this.priceshow = this.Roomif.priceshow;
        }
        else {
            this.priceshow = this.PriceAvgPlusTAStr;
        }
        if (this.stt == '0') {
            this.BillingCode = this.Roomif.BillingCode;
        }
        else {
            this.qrimg = this.Roomif.qrimg;
            this.intervalID = setInterval(() => {
                this.checkBooking(0);
            }, 1000 * 1);
            setTimeout(() => {
                clearInterval(this.intervalID);
            }, 60000 * 15);
        }
        this.PeriodPaymentDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.Roomif.PeriodPaymentDate).format('HH:mm DD/MM/YYYY');
    }
    goback() {
        if (this.stt == '1') {
            clearInterval(this.intervalID);
        }
        this.navCtrl.back();
    }
    next() {
        var se = this;
        clearInterval(this.intervalID);
        if (this.stt == '0') {
            se.Roomif.priceshowtt = se.priceshow;
            if (this.Roomif.payment) {
                this.payment = "AL";
            }
            else {
                this.payment = "RQ";
            }
            se.navCtrl.navigateForward('/roompaymentdone/' + se.bookingCode + '/' + this.payment);
        }
        else {
            se.checkBooking(1);
        }
    }
    checkBooking(value) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roompaymentselect",
                    func: "openWebpage",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    para: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3) {
                    var id = rs.BookingCode;
                    var total = se.priceshow;
                    se.Roomif.priceshowtt = se.priceshow;
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/0');
                }
            }
            else {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
};
RoompaymentpayooPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-roompaymentpayoo',
        template: __webpack_require__(/*! ./roompaymentpayoo.page.html */ "./src/app/roompaymentpayoo/roompaymentpayoo.page.html"),
        styles: [__webpack_require__(/*! ./roompaymentpayoo.page.scss */ "./src/app/roompaymentpayoo/roompaymentpayoo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"]])
], RoompaymentpayooPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentpayoo-roompaymentpayoo-module.js.map