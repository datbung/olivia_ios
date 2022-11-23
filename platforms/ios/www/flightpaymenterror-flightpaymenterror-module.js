(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymenterror-flightpaymenterror-module"],{

/***/ "./src/app/flightpaymenterror/flightpaymenterror.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymenterror/flightpaymenterror.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightpaymenterrorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymenterrorPageModule", function() { return FlightpaymenterrorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymenterror_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymenterror.page */ "./src/app/flightpaymenterror/flightpaymenterror.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymenterror_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymenterrorPage"]
    }
];
let FlightpaymenterrorPageModule = class FlightpaymenterrorPageModule {
};
FlightpaymenterrorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymenterror_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymenterrorPage"]]
    })
], FlightpaymenterrorPageModule);



/***/ }),

/***/ "./src/app/flightpaymenterror/flightpaymenterror.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymenterror/flightpaymenterror.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Đặt vé máy bay</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"flight-payment-error-content\">\n            <div class=\"text-center\">\n                <img class=\"img-payment-err\" src=\"./assets/ic_flight/payment_err.svg\" >\n\n                <div class=\"text-title\">Giao dịch thanh toán thất bại</div>\n                \n                <div class=\"text-err\">\n                  <div>Quý khách có thể thực hiện đặt lại vé khác tại website ivivu.com</div>\n                  <div class=\"m-top-8\">Nếu cần sự hỗ trợ vui lòng liên hệ email support@ivivu.com hoặc số tổng đài sau: (028) 3933 8008\n                    Thời gian làm việc: Từ 08h00 đến 20h00</div>\n                </div>\n\n                <div class=\"div-button\">\n                    <button (click)=\"gohome()\" ion-button round outline class=\"button btnhome\">Về lại trang chủ</button>\n                </div>\n            </div>\n      </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/flightpaymenterror/flightpaymenterror.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymenterror/flightpaymenterror.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flight-payment-error-content {\n  padding: 16px;\n}\n.flight-payment-error-content .text-center {\n  text-align: center;\n}\n.flight-payment-error-content .text-center .img-payment-err {\n  margin: 32px 0 24px 0;\n}\n.flight-payment-error-content .text-center .text-title {\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n}\n.flight-payment-error-content .text-center .text-err {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n  margin: 12px 0 16px 0;\n}\n.flight-payment-error-content .text-center .div-button .btnhome {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRwYXltZW50ZXJyb3IvZmxpZ2h0cGF5bWVudGVycm9yLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0cGF5bWVudGVycm9yL2ZsaWdodHBheW1lbnRlcnJvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FDREo7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHUTtFQUNJLHFCQUFBO0FDRFo7QURJUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtBQ0paO0FEU1k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNQaEIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRwYXltZW50ZXJyb3IvZmxpZ2h0cGF5bWVudGVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmltZy1wYXltZW50LWVycntcbiAgICAgICAgICAgIG1hcmdpbjogMzJweCAwIDI0cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC1lcnJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuXG4gICAgICAgICAgICBtYXJnaW46IDEycHggMCAxNnB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWJ1dHRvbntcblxuICAgICAgICAgICAgLmJ0bmhvbWV7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQgLnRleHQtY2VudGVyIC5pbWctcGF5bWVudC1lcnIge1xuICBtYXJnaW46IDMycHggMCAyNHB4IDA7XG59XG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCAudGV4dC1jZW50ZXIgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IC50ZXh0LWNlbnRlciAudGV4dC1lcnIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDEycHggMCAxNnB4IDA7XG59XG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCAudGV4dC1jZW50ZXIgLmRpdi1idXR0b24gLmJ0bmhvbWUge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightpaymenterror/flightpaymenterror.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightpaymenterror/flightpaymenterror.page.ts ***!
  \***************************************************************/
/*! exports provided: FlightpaymenterrorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymenterrorPage", function() { return FlightpaymenterrorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");










let FlightpaymenterrorPage = class FlightpaymenterrorPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal, _voucherService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.backgroundmode = backgroundmode;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this._voucherService = _voucherService;
        this.allowCheck = true;
        this.clearItemCache();
    }
    ngOnInit() {
    }
    clearItemCache() {
        this._flightService.itemFlightCache = {};
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.jsonSeats = null;
        this._flightService.itemFlightCache.listdepartseatselected = "";
        this._flightService.itemFlightCache.listreturnseatselected = "";
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.hasChoiceLuggage = false;
        this._flightService.itemFlightCache.listSeatNormal = [];
        this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this._flightService.itemFlightCache.departConditionInfo = null;
        this._flightService.itemFlightCache.returnConditionInfo = null;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
        if (this._voucherService.selectVoucher) {
            this._voucherService.publicClearVoucherAfterPaymentDone(1);
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
    }
    gohome() {
        this._flightService.itemTabFlightActive.emit(true);
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
        if (this._voucherService.selectVoucher) {
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this._voucherService.publicClearVoucherAfterPaymentDone(1);
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateBack('/tabs/tab1');
    }
};
FlightpaymenterrorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightpaymenterror',
        template: __webpack_require__(/*! ./flightpaymenterror.page.html */ "./src/app/flightpaymenterror/flightpaymenterror.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymenterror.page.scss */ "./src/app/flightpaymenterror/flightpaymenterror.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__["SafariViewController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_9__["voucherService"]])
], FlightpaymenterrorPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymenterror-flightpaymenterror-module.js.map