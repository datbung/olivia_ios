(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentwarning-flightpaymentwarning-module"],{

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.module.ts ***!
  \*********************************************************************/
/*! exports provided: FlightpaymentwarningPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentwarningPageModule", function() { return FlightpaymentwarningPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentwarning.page */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentwarningPage"]
    }
];
let FlightpaymentwarningPageModule = class FlightpaymentwarningPageModule {
};
FlightpaymentwarningPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentwarning_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymentwarningPage"]]
    })
], FlightpaymentwarningPageModule);



/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n            \n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Hoàn thành</div>\n          </div>\n          <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n            ...\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"flight-payment-warning-content\">\n        \n            <div class=\"text-center\">\n                <div class=\"m-top-8\">\n                    <img  src=\"./assets/ic_flight/step_4.svg\">\n                </div>\n\n                <img class=\"img-payment-warning\" src=\"./assets/ic_flight/payment_warning.svg\" >\n\n                \n            </div>\n            <div class=\"text-title\">Giao dịch không thành công</div>\n\n                <div class=\"text-warning\">Quý khách thanh toán số tiền {{ totalpricedisplay }}đ thành công.</div>\n                <div class=\"text-warning\">Tuy nhiên đã hết thời hạn giao dịch, vé đã hết hạn giữ.</div>\n                <div class=\"text-warning\">Chúng tôi sẽ liên lạc lại trong vòng 30 phút (trong thời gian hành chính) qua số điện thoại <span class=\"text-bold\"> {{ phone }} </span> để hoàn tiển hoặc hỗ trợ đặt vé khác.</div>\n                <div class=\"text-warning\">Mong Quý khách thông cảm vì sự bất tiện này.</div>\n\n                <div class=\"div-button\">\n                    <button (click)=\"gohome()\" ion-button round outline class=\"button btnhome\">Quay về trang chủ</button>\n                </div>\n      </div>\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.flight-payment-warning-content {\n  padding: 16px;\n}\n\n.flight-payment-warning-content .text-center {\n  text-align: center;\n}\n\n.flight-payment-warning-content .text-center .img-payment-warning {\n  margin: 24px 0 24px 0;\n}\n\n.flight-payment-warning-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n  margin-bottom: 16px;\n}\n\n.flight-payment-warning-content .text-warning {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.flight-payment-warning-content .div-button {\n  position: absolute;\n  width: 91%;\n  bottom: 16px;\n}\n\n.flight-payment-warning-content .div-button .btnhome {\n  border: solid 0.5px #F79221;\n  background-color: #fff;\n  color: #F79221;\n  width: 100%;\n  height: 48px;\n  font-size: 17px !important;\n}\n\n.flight-payment-warning-content .text-bold {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRwYXltZW50d2FybmluZy9mbGlnaHRwYXltZW50d2FybmluZy5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHBheW1lbnR3YXJuaW5nL2ZsaWdodHBheW1lbnR3YXJuaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7QUNESjs7QURJQTtFQUNJLDJCQUFBO0FDREo7O0FERUk7RUFDRSxlQUFBO0FDQU47O0FESUE7RUFDSSxhQUFBO0FDREo7O0FER0k7RUFDSSxrQkFBQTtBQ0RSOztBREdRO0VBQ0kscUJBQUE7QUNEWjs7QURNSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSlI7O0FET0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0xSOztBRFVJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ1JSOztBRFVRO0VBQ0ssMkJBQUE7RUFDRCxzQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDUlo7O0FEWUk7RUFDSSxpQkFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0cGF5bWVudHdhcm5pbmcvZmxpZ2h0cGF5bWVudHdhcm5pbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbiAgICAuZGl2LXRpdGxle1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgIH1cbn1cblxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgLmltZy1wYXltZW50LXdhcm5pbmd7XG4gICAgICAgICAgICBtYXJnaW46IDI0cHggMCAyNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgIFxuICAgIH1cbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLnRleHQtd2FybmluZ3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG5cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDkxJTtcbiAgICAgICAgYm90dG9tOiAxNnB4O1xuXG4gICAgICAgIC5idG5ob21le1xuICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI0Y3OTIyMTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuLmRpdi1oZWFkZXItdGl0bGUgLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtcGF5bWVudC13YXJuaW5nLWNvbnRlbnQgLnRleHQtY2VudGVyIC5pbWctcGF5bWVudC13YXJuaW5nIHtcbiAgbWFyZ2luOiAyNHB4IDAgMjRweCAwO1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmZsaWdodC1wYXltZW50LXdhcm5pbmctY29udGVudCAudGV4dC13YXJuaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC5kaXYtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOTElO1xuICBib3R0b206IDE2cHg7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC5kaXYtYnV0dG9uIC5idG5ob21lIHtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogI0Y3OTIyMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG4uZmxpZ2h0LXBheW1lbnQtd2FybmluZy1jb250ZW50IC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightpaymentwarning/flightpaymentwarning.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentwarning/flightpaymentwarning.page.ts ***!
  \*******************************************************************/
/*! exports provided: FlightpaymentwarningPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymentwarningPage", function() { return FlightpaymentwarningPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");












let FlightpaymentwarningPage = class FlightpaymentwarningPage {
    constructor(navCtrl, gf, activatedRoute, _flightService, safariViewController, backgroundmode, platform, valueGlobal, modalCtrl, _voucherService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.backgroundmode = backgroundmode;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.modalCtrl = modalCtrl;
        this._voucherService = _voucherService;
        this.allowCheck = true;
        this.totalpricedisplay = this._flightService.itemFlightCache.totalPriceDisplay;
        this.phone = this._flightService.itemFlightCache.phone;
        this.bookingNo = this._flightService.itemFlightCache.pnr.resNo;
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
        if (this._voucherService.selectVoucher) {
            this._voucherService.rollbackSelectedVoucher.emit(this._voucherService.selectVoucher);
            this._voucherService.selectVoucher = null;
        }
        this._voucherService.publicClearVoucherAfterPaymentDone(1);
        this._flightService.itemFlightCache.promotionCode = "";
        this._flightService.itemFlightCache.promocode = "";
        this._flightService.itemFlightCache.discount = 0;
    }
    gohome() {
        this.clearItemCache();
        this._flightService.itemTabFlightActive.emit(true);
        this.valueGlobal.backValue = "homeflight";
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    goback() {
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_9__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_10__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
};
FlightpaymentwarningPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightpaymentwarning',
        template: __webpack_require__(/*! ./flightpaymentwarning.page.html */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentwarning.page.scss */ "./src/app/flightpaymentwarning/flightpaymentwarning.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_5__["SafariViewController"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_7__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_8__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_11__["voucherService"]])
], FlightpaymentwarningPage);



/***/ })

}]);
//# sourceMappingURL=flightpaymentwarning-flightpaymentwarning-module.js.map