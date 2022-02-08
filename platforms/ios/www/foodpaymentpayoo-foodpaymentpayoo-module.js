(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodpaymentpayoo-foodpaymentpayoo-module"],{

/***/ "./src/app/foodpaymentpayoo/foodpaymentpayoo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/foodpaymentpayoo/foodpaymentpayoo.module.ts ***!
  \*************************************************************/
/*! exports provided: FoodpaymentpayooPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentpayooPageModule", function() { return FoodpaymentpayooPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodpaymentpayoo.page */ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.ts");







const routes = [
    {
        path: '',
        component: _foodpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentpayooPage"]
    }
];
let FoodpaymentpayooPageModule = class FoodpaymentpayooPageModule {
};
FoodpaymentpayooPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodpaymentpayoo_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentpayooPage"]]
    })
], FoodpaymentpayooPageModule);



/***/ }),

/***/ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.html":
/*!*************************************************************!*\
  !*** ./src/app/foodpaymentpayoo/foodpaymentpayoo.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/step/food_step_2.svg\">\n  </div>\n  <div *ngIf=\"stt=='0'\">\n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Mã thanh toán Payoo: {{BillingCode}}, số tiền: <span class=\"totalPrice\">{{total}} VND</span>  vui lòng thanh toán trước <span class=\"textpayment\">{{PeriodPaymentDate}}</span>\n      </ion-label>\n    </div>\n    <div (click)=\"openWebpagePayoo()\">\n      <label class=\"text\" >Để tìm cửa hàng gần nhất, hãy <a target=\"_blank\" >xem tại đây</a></label>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/payoo_store.jpg\">\n    </div>\n  </div>\n  <div *ngIf=\"stt=='1'&&qrimg\">\n    <p>\n      Quý khách vui lòng quét mã QR dưới đây để thanh toán \t\t\t\t\t\t\t\t\t\t\t\t\n    </p>\n    <div>\n      <img style=\"width:170px\"  src={{qrimg}}>\n    </div>\n    <div class=\"mt15\">\n      <img src=\"./assets/imgpayoo/help_qrcode.jpg\">\n    </div>\n  </div>\n </ion-content>\n <ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/foodpaymentpayoo/foodpaymentpayoo.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .totalPrice {\n  color: #26BED6;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.totalPrice {\n  font-weight: bold;\n  color: #26BED6;\n}\n\n.textpayment {\n  color: #003C71;\n  font-weight: bold;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RwYXltZW50cGF5b28vZm9vZHBheW1lbnRwYXlvby5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RwYXltZW50cGF5b28vZm9vZHBheW1lbnRwYXlvby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0ZKOztBREtBO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNEbEQ7O0FER0E7RUFFSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RwYXltZW50cGF5b28vZm9vZHBheW1lbnRwYXlvby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAge1xuICAgIC50b3RhbFByaWNlXG57XG4gICAgY29sb3I6ICMyNkJFRDY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG59XG4uYnV0dG9uMlxue1xuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiA5MCU7XG59XG5cbi5kaXYtYnRuXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi10b3A6IDIwcHhcbn1cbi5tdDE1XG57XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi50b3RhbFByaWNlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzI2QkVENjtcbn1cbi50ZXh0cGF5bWVudHtcbiAgICBjb2xvcjojMDAzQzcxOyBcbiAgICBmb250LXdlaWdodDpib2xkXG59XG4udGV4dHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBsaW5lLWhlaWdodDogMjtcbn1cbiIsIjo6bmctZGVlcCAudG90YWxQcmljZSB7XG4gIGNvbG9yOiAjMjZCRUQ2O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udG90YWxQcmljZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI2QkVENjtcbn1cblxuLnRleHRwYXltZW50IHtcbiAgY29sb3I6ICMwMDNDNzE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentpayoo/foodpaymentpayoo.page.ts ***!
  \***********************************************************/
/*! exports provided: FoodpaymentpayooPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentpayooPage", function() { return FoodpaymentpayooPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");










let FoodpaymentpayooPage = class FoodpaymentpayooPage {
    constructor(navCtrl, gf, activatedRoute, foodService, safariViewController) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.foodService = foodService;
        this.safariViewController = safariViewController;
    }
    ngOnInit() {
        this.bookingCode = this.activatedRoute.snapshot.paramMap.get('code');
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        if (this.stt == '0') {
            this.BillingCode = this.foodService.BillingCode;
        }
        else {
            this.qrimg = this.foodService.qrimg;
            this.intervalID = setInterval(() => {
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + this.bookingCode + '';
                this.gf.CheckpaymentFood(url).then((data) => {
                    console.log(data);
                    var checkpay = data;
                    if (checkpay == "true") {
                        clearInterval(this.intervalID);
                        this.checkqrcode();
                    }
                });
            }, 1000 * 5);
            setTimeout(() => {
                clearInterval(this.intervalID);
            }, 60000 * 15);
        }
        this.total = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.PeriodPaymentDate = moment__WEBPACK_IMPORTED_MODULE_8__(this.foodService.PeriodPaymentDate).format('HH:mm DD/MM/YYYY');
    }
    goback() {
        if (this.stt == '1') {
            clearInterval(this.intervalID);
        }
        this.navCtrl.back();
    }
    next() {
        var se = this;
        if (this.stt == '0') {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request=" + se.bookingCode;
            se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
                var options = {
                    'method': 'GET',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
                    'headers': {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
                    var rs = JSON.parse(response.body);
                    se.foodService.qrimg = "";
                    se.foodService.ischeckpayment = '0';
                    se.navCtrl.navigateForward('foodpaymentdonepayoo/' + se.bookingCode + '/' + rs.response.startDate + '/' + rs.response.endDate);
                });
            });
        }
        else {
            clearInterval(this.intervalID);
            se.checkqrcode();
        }
    }
    checkqrcode() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var rs = JSON.parse(response.body);
            if (rs.response.status == 3) {
                se.foodService.ischeckpayment = '1';
                se.navCtrl.navigateForward('foodpaymentdonepayoo/' + se.bookingCode + '/' + rs.response.startDate + '/' + rs.response.endDate);
            }
            else {
                se.foodService.ischeckpayment = '0';
                se.foodService.BillingCode = "";
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request=" + se.bookingCode;
                se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
                    se.navCtrl.navigateForward('foodpaymentdonepayoo/' + se.bookingCode + '/' + rs.response.startDate + '/' + rs.response.endDate);
                });
            }
        });
    }
    openWebpagePayoo() {
        var url = "https://payoo.vn/mapv2/public/index.php?verify=true";
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
};
FoodpaymentpayooPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-foodpaymentpayoo',
        template: __webpack_require__(/*! ./foodpaymentpayoo.page.html */ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.html"),
        styles: [__webpack_require__(/*! ./foodpaymentpayoo.page.scss */ "./src/app/foodpaymentpayoo/foodpaymentpayoo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _providers_foodService__WEBPACK_IMPORTED_MODULE_3__["foodService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"]])
], FoodpaymentpayooPage);



/***/ })

}]);
//# sourceMappingURL=foodpaymentpayoo-foodpaymentpayoo-module.js.map