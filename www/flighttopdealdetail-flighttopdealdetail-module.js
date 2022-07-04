(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flighttopdealdetail-flighttopdealdetail-module"],{

/***/ "./src/app/flighttopdealdetail/flighttopdealdetail.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flighttopdealdetail/flighttopdealdetail.module.ts ***!
  \*******************************************************************/
/*! exports provided: FlighttopdealdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealdetailPageModule", function() { return FlighttopdealdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flighttopdealdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flighttopdealdetail.page */ "./src/app/flighttopdealdetail/flighttopdealdetail.page.ts");







const routes = [
    {
        path: '',
        component: _flighttopdealdetail_page__WEBPACK_IMPORTED_MODULE_6__["FlighttopdealdetailPage"]
    }
];
let FlighttopdealdetailPageModule = class FlighttopdealdetailPageModule {
};
FlighttopdealdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flighttopdealdetail_page__WEBPACK_IMPORTED_MODULE_6__["FlighttopdealdetailPage"]]
    })
], FlighttopdealdetailPageModule);



/***/ }),

/***/ "./src/app/flighttopdealdetail/flighttopdealdetail.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/flighttopdealdetail/flighttopdealdetail.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n            <div class=\"div-goback\" (click)=\"goback()\">\n                <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n\n            <div class=\"div-header-title\">\n                <div class=\"div-title\">{{item.promoTitle}}</div>\n            </div>\n         \n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  \n  <ion-content class=\"flighttopdealdetailpage-content\">\n    <div class=\"p-16 \" >\n        <div class=\"text-content p-top-8\" [innerHTML]=\"item.content\"></div>\n        </div>\n        \n  </ion-content>\n\n  <ion-footer>\n    <ion-row>\n        <ion-col style=\"padding:0\">\n          <div class=\"div-flighttopdealdetail-footer\">\n            <div class=\"div-button-flex\">\n              <button  (click)=\"book()\" ion-button round outline class=\"button button-book\">Đặt vé</button>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/flighttopdealdetail/flighttopdealdetail.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/flighttopdealdetail/flighttopdealdetail.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-title {\n  font-size: 18px !important;\n  position: relative;\n  padding: 0 40px;\n  line-height: 1.2 !important;\n}\n\n.flighttopdealdetailpage-content .p-16 {\n  padding: 16px;\n}\n\n.flighttopdealdetailpage-content .p-top-8 {\n  padding-top: 8px;\n}\n\n.flighttopdealdetailpage-content .text-content {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.flighttopdealdetailpage-content .text-content .text-seemore {\n  letter-spacing: -0.14px;\n  color: #2f80ed;\n  text-decoration: underline;\n}\n\n.div-flighttopdealdetail-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n\n.div-flighttopdealdetail-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.div-flighttopdealdetail-footer .button-book {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  padding: 0;\n  margin: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodHRvcGRlYWxkZXRhaWwvZmxpZ2h0dG9wZGVhbGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHRvcGRlYWxkZXRhaWwvZmxpZ2h0dG9wZGVhbGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FDQUo7O0FERUE7RUFDSSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FESUk7RUFDSSxhQUFBO0FDRFI7O0FER0k7RUFDSSxnQkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRlI7O0FESVE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0ZaOztBRE9BO0VBQ0kseUJBQUE7RUFBMkIsa0JBQUE7RUFBb0IsYUFBQTtBQ0ZuRDs7QURHSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDRFI7O0FER007RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0ZWIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0dG9wZGVhbGRldGFpbC9mbGlnaHR0b3BkZWFsZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi10aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbn1cblxuLmZsaWdodHRvcGRlYWxkZXRhaWxwYWdlLWNvbnRlbnR7XG5cbiAgICAucC0xNntcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICB9XG4gICAgLnAtdG9wLTh7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgfVxuXG4gICAgLnRleHQtY29udGVudHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBjb2xvcjogIzMzMzMzMztcblxuICAgICAgICAudGV4dC1zZWVtb3Jle1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzJmODBlZDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGl2LWZsaWdodHRvcGRlYWxkZXRhaWwtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjsgZGlzcGxheTogZmxleDtcbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5idXR0b24tYm9va1xuICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjU5MjMzO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMTZweDtcbiAgICAgIH0gXG4gICAgICBcbiAgfSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG59XG5cbi5mbGlnaHR0b3BkZWFsZGV0YWlscGFnZS1jb250ZW50IC5wLTE2IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5mbGlnaHR0b3BkZWFsZGV0YWlscGFnZS1jb250ZW50IC5wLXRvcC04IHtcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbi5mbGlnaHR0b3BkZWFsZGV0YWlscGFnZS1jb250ZW50IC50ZXh0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuLmZsaWdodHRvcGRlYWxkZXRhaWxwYWdlLWNvbnRlbnQgLnRleHQtY29udGVudCAudGV4dC1zZWVtb3JlIHtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMmY4MGVkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmRpdi1mbGlnaHR0b3BkZWFsZGV0YWlsLWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZmxpZ2h0dG9wZGVhbGRldGFpbC1mb290ZXIgLmRpdi1idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1mbGlnaHR0b3BkZWFsZGV0YWlsLWZvb3RlciAuYnV0dG9uLWJvb2sge1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/flighttopdealdetail/flighttopdealdetail.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flighttopdealdetail/flighttopdealdetail.page.ts ***!
  \*****************************************************************/
/*! exports provided: FlighttopdealdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlighttopdealdetailPage", function() { return FlighttopdealdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");







let FlighttopdealdetailPage = class FlighttopdealdetailPage {
    constructor(navCtrl, gf, zone, storage, valueGlobal, _flightService) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.zone = zone;
        this.storage = storage;
        this.valueGlobal = valueGlobal;
        this._flightService = _flightService;
        if (this._flightService.itemFlightTopDeal) {
            this.item = this._flightService.itemFlightTopDeal;
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    book() {
        this._flightService.itemHomeFlightScrollTop.emit(1);
        this.navCtrl.back();
    }
};
FlighttopdealdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flighttopdealdetail',
        template: __webpack_require__(/*! ./flighttopdealdetail.page.html */ "./src/app/flighttopdealdetail/flighttopdealdetail.page.html"),
        styles: [__webpack_require__(/*! ./flighttopdealdetail.page.scss */ "./src/app/flighttopdealdetail/flighttopdealdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["ValueGlobal"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"]])
], FlighttopdealdetailPage);



/***/ })

}]);
//# sourceMappingURL=flighttopdealdetail-flighttopdealdetail-module.js.map