(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymenttimeout-flightpaymenttimeout-module"],{

/***/ "./src/app/flightpaymenttimeout/flightpaymenttimeout.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymenttimeout/flightpaymenttimeout.module.ts ***!
  \*********************************************************************/
/*! exports provided: FlightpaymenttimeoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymenttimeoutPageModule", function() { return FlightpaymenttimeoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymenttimeout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymenttimeout.page */ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymenttimeout_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymenttimeoutPage"]
    }
];
let FlightpaymenttimeoutPageModule = class FlightpaymenttimeoutPageModule {
};
FlightpaymenttimeoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymenttimeout_page__WEBPACK_IMPORTED_MODULE_6__["FlightpaymenttimeoutPage"]]
    })
], FlightpaymenttimeoutPageModule);



/***/ }),

/***/ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymenttimeout/flightpaymenttimeout.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Đặt vé máy bay</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"flight-payment-error-content\">\n          <div  class=\"text-center\">\n            <img  src=\"./assets/ic_flight/step_4.svg\">\n          </div>\n\n            <div class=\"text-center m-top-24\">\n                <img class=\"img-payment-err\" src=\"./assets/ic_flight/ic_timeout.svg\" >\n\n                <div class=\"text-title\">Thanh toán không thành công. {{errorMsg}}</div>\n\n                <div class=\"text-err\">\n                  <div>Quý khách vui lòng thanh toán lại hoặc chọn lại chuyến bay khác</div>\n                  <div class=\"m-top-8\">Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài (028) 3933 8008 hoặc email vemaybay@ivivu.com để được trợ giúp.</div>\n                </div>\n            </div>\n      </div>\n  </ion-content>\n  <ion-footer>\n    <div class=\"div-footer\">\n      <div class=\"div-button-flex\">\n        <button (click)=\"gotoSearchPage()\" ion-button round outline [ngClass]=\"showbutton ? 'button button-change-flight' : 'button button-change-flight btn-disabled' \">Chọn chuyến khác</button>\n        <button (click)=\"rePayment()\" ion-button round outline [ngClass]=\"allowrepay ? 'button button-payment' : 'button button-payment btn-disabled'\">Thanh toán lại</button>\n      </div>\n    </div>\n  </ion-footer>\n"

/***/ }),

/***/ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/flightpaymenttimeout/flightpaymenttimeout.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flight-payment-error-content {\n  padding: 16px;\n}\n.flight-payment-error-content .text-center {\n  text-align: center;\n}\n.flight-payment-error-content .text-center .img-payment-err {\n  margin: 32px 0 24px 0;\n}\n.flight-payment-error-content .text-center .text-title {\n  font-size: 14px;\n  font-weight: bold;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n}\n.flight-payment-error-content .text-center .text-err {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.4;\n  letter-spacing: normal;\n  color: #828282;\n  margin: 12px 0 16px 0;\n}\n.flight-payment-error-content .text-center .div-button .btnhome {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px !important;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  margin: 0px 8px;\n}\n.div-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n.div-footer .button-payment {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-left: 8px;\n}\n.div-footer .button-change-flight {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 16px 0px;\n  padding: 0;\n}\n.div-footer .btn-disabled {\n  background: #bdbdbd !important;\n  border: solid 1px #bdbdbd !important;\n  color: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0cGF5bWVudHRpbWVvdXQvZmxpZ2h0cGF5bWVudHRpbWVvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRwYXltZW50dGltZW91dC9mbGlnaHRwYXltZW50dGltZW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0FDREo7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHUTtFQUNJLHFCQUFBO0FDRFo7QURJUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FES1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFFQSxxQkFBQTtBQ0paO0FEU1k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUNQaEI7QURjQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ1hKO0FEYUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ1hSO0FEY007RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNiUjtBRGVJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ2RSO0FEaUJJO0VBQ0ksOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRwYXltZW50dGltZW91dC9mbGlnaHRwYXltZW50dGltZW91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5pbWctcGF5bWVudC1lcnJ7XG4gICAgICAgICAgICBtYXJnaW46IDMycHggMCAyNHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtZXJye1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcblxuICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDAgMTZweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1idXR0b257XG5cbiAgICAgICAgICAgIC5idG5ob21le1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDBweCA4cHg7XG5cbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmJ1dHRvbi1wYXltZW50XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9IFxuICAgIC5idXR0b24tY2hhbmdlLWZsaWdodFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9IFxuXG4gICAgLmJ0bi1kaXNhYmxlZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2JkYmRiZCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgfVxufSIsIi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHQtcGF5bWVudC1lcnJvci1jb250ZW50IC50ZXh0LWNlbnRlciAuaW1nLXBheW1lbnQtZXJyIHtcbiAgbWFyZ2luOiAzMnB4IDAgMjRweCAwO1xufVxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQgLnRleHQtY2VudGVyIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZmxpZ2h0LXBheW1lbnQtZXJyb3ItY29udGVudCAudGV4dC1jZW50ZXIgLnRleHQtZXJyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAxMnB4IDAgMTZweCAwO1xufVxuLmZsaWdodC1wYXltZW50LWVycm9yLWNvbnRlbnQgLnRleHQtY2VudGVyIC5kaXYtYnV0dG9uIC5idG5ob21lIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMHB4IDhweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24tcGF5bWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbi1jaGFuZ2UtZmxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbiAgcGFkZGluZzogMDtcbn1cbi5kaXYtZm9vdGVyIC5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymenttimeout/flightpaymenttimeout.page.ts ***!
  \*******************************************************************/
/*! exports provided: FlightpaymenttimeoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightpaymenttimeoutPage", function() { return FlightpaymenttimeoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");











let FlightpaymenttimeoutPage = class FlightpaymenttimeoutPage {
    constructor(activityService, navCtrl, gf, activatedRoute, _flightService, safariViewController, platform, valueGlobal, zone, alertCtrl, _mytripservice) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.platform = platform;
        this.valueGlobal = valueGlobal;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this._mytripservice = _mytripservice;
        this.allowCheck = true;
        this.allowrepay = false;
        this.errorCode = '';
        this.errorMsg = '';
        this.showbutton = false;
    }
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
        if (this.stt == 0) {
            this.errorMsg = this._flightService.paymentError.noteIpn;
            this.callCheckHoldTicket('', this._flightService.itemFlightCache).then((check) => {
                if (this._flightService.itemFlightCache.dataSummaryBooking && this._flightService.itemFlightCache.dataSummaryBooking.urlPaymentAgain) {
                    this.zone.run(() => {
                        this.allowrepay = true;
                    });
                }
            });
        }
        else {
            this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
            this.callCheckHoldTicketNew('', this.bookingCode).then((check) => {
                if (this._flightService.itemFlightCache.dataSummaryBooking && this._flightService.itemFlightCache.dataSummaryBooking.urlPaymentAgain) {
                    this.zone.run(() => {
                        this.allowrepay = true;
                    });
                }
            });
        }
    }
    callCheckHoldTicket(url, data) {
        var res = false;
        var se = this;
        se.gf.showLoading();
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "globalfunction";
                    error.func = "updatePaymentMethod";
                    error.param = JSON.stringify(options);
                    se.gf.hideLoading();
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    if (se._flightService) {
                        se._flightService.itemFlightCache.dataSummaryBooking = result;
                        se.zone.run(() => {
                            se.showbutton = true;
                            se.gf.hideLoading();
                            if (result && result.urlPaymentAgain) {
                                se.allowrepay = true;
                            }
                        });
                    }
                }
            });
        });
    }
    callCheckHoldTicketNew(url, bookingCode) {
        var res = false;
        var se = this;
        se.gf.showLoading();
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + bookingCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "globalfunction";
                    error.func = "updatePaymentMethod";
                    error.param = JSON.stringify(options);
                    se.gf.hideLoading();
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    if (se._flightService) {
                        se._flightService.itemFlightCache.dataSummaryBooking = result;
                        se.zone.run(() => {
                            se.showbutton = true;
                            se.gf.hideLoading();
                            if (result && result.urlPaymentAgain) {
                                se.allowrepay = true;
                            }
                        });
                    }
                }
            });
        });
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
    gotoSearchPage() {
        if (this.stt == 0) {
            if (!this.showbutton) {
                return;
            }
            this._flightService.itemChangeTicketFlight.emit(1);
            this.navCtrl.navigateBack('/flightsearchresult');
        }
        else {
            this._flightService.itemTabFlightActive.emit(true);
            setTimeout(() => {
                this._flightService.itemMenuFlightClick.emit(2);
            }, 200);
            this.valueGlobal.backValue = "homeflight";
            this.navCtrl.navigateBack('/tabs/tab1');
        }
    }
    rePayment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.allowrepay) {
                let alert = yield this.alertCtrl.create({
                    message: 'Vé máy bay hết hạn thanh toán. Vui lòng chọn vé khác!',
                    cssClass: "cls-alert-flighttimeout",
                    backdropDismiss: false,
                    buttons: [
                        {
                            text: 'OK',
                            role: 'OK',
                            handler: () => {
                                this._flightService.itemChangeTicketFlight.emit(1);
                                this.navCtrl.navigateBack('/flightsearchresult');
                                alert.dismiss();
                            }
                        }
                    ]
                });
                alert.present();
                return;
            }
            if (this.stt == 0) {
                this.navCtrl.navigateBack('/flightpaymentselect');
            }
            else {
                this.navCtrl.back();
            }
        });
    }
};
FlightpaymenttimeoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightpaymenttimeout',
        template: __webpack_require__(/*! ./flightpaymenttimeout.page.html */ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymenttimeout.page.scss */ "./src/app/flightpaymenttimeout/flightpaymenttimeout.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_8__["flightService"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_7__["SafariViewController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_9__["ValueGlobal"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__["MytripService"]])
], FlightpaymenttimeoutPage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=flightpaymenttimeout-flightpaymenttimeout-module.js.map