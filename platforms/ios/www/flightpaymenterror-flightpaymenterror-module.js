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

module.exports = ".flight-payment-error-content {\n  padding: 16px;\n}\n.flight-payment-error-content .text-center {\n  text-align: center;\n}\n.flight-payment-error-content .text-center .img-payment-err {\n  margin: 32px 0 24px 0;\n}\n.flight-payment-error-content .text-center .text-title {\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n}\n.flight-payment-error-content .text-center .text-err {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n  margin: 12px 0 16px 0;\n}\n.flight-payment-error-content .text-center .div-button .btnhome {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodHBheW1lbnRlcnJvci9mbGlnaHRwYXltZW50ZXJyb3IucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRwYXltZW50ZXJyb3IvZmxpZ2h0cGF5bWVudGVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUNESjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREdRO0VBQ0kscUJBQUE7QUNEWjtBRElRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRlo7QURLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUVBLHFCQUFBO0FDSlo7QURTWTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1BoQiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHBheW1lbnRlcnJvci9mbGlnaHRwYXltZW50ZXJyb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAudGV4dC1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW1nLXBheW1lbnQtZXJye1xuICAgICAgICAgICAgbWFyZ2luOiAzMnB4IDAgMjRweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LWVycntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG5cbiAgICAgICAgICAgIG1hcmdpbjogMTJweCAwIDE2cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtYnV0dG9ue1xuXG4gICAgICAgICAgICAuYnRuaG9tZXtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCIuZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCAudGV4dC1jZW50ZXIgLmltZy1wYXltZW50LWVyciB7XG4gIG1hcmdpbjogMzJweCAwIDI0cHggMDtcbn1cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IC50ZXh0LWNlbnRlciAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQgLnRleHQtY2VudGVyIC50ZXh0LWVyciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMTJweCAwIDE2cHggMDtcbn1cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IC50ZXh0LWNlbnRlciAuZGl2LWJ1dHRvbiAuYnRuaG9tZSB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59Il19 */"

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









let FlightpaymenterrorPage = class FlightpaymenterrorPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.backgroundmode = backgroundmode;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
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
    }
    gohome() {
        this._flightService.itemTabFlightActive.emit(true);
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
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"]])
], FlightpaymenterrorPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymenterror-flightpaymenterror-module.js.map