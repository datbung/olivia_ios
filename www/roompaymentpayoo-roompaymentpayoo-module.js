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

module.exports = "::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.totalPrice {\n  font-weight: bold;\n  color: #26BED6;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3Jvb21wYXltZW50cGF5b28vcm9vbXBheW1lbnRwYXlvby5wYWdlLnNjc3MiLCJzcmMvYXBwL3Jvb21wYXltZW50cGF5b28vcm9vbXBheW1lbnRwYXlvby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNEbEQ7O0FER0E7RUFFSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3Jvb21wYXltZW50cGF5b28vcm9vbXBheW1lbnRwYXlvby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAgIC50b3RhbFByaWNlXG57XG4gICAgY29sb3I6ICMyNkJFRDY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG59XG4uYnV0dG9uMlxue1xuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5kaXYtYnRuXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbn1cbi5tdDE1XG57XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi50b3RhbFByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzI2QkVENjtcbn1cbi50ZXh0cGF5bWVudHtcbiAgICBjb2xvcjojMDAzQzcxOyBcbiAgICBmb250LXdlaWdodDpib2xkXG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cbiIsIjo6bmctZGVlcCAudG90YWxQcmljZSB7XG4gIGNvbG9yOiAjMjZCRUQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG90YWxQcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI2QkVENjtcbn1cblxuLnRleHRwYXltZW50IHtcbiAgY29sb3I6ICMwMDNDNzE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59Il19 */"

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