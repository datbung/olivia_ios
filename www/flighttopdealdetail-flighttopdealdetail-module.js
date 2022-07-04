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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-title {\n  font-size: 18px !important;\n  position: relative;\n  padding: 0 40px;\n  line-height: 1.2 !important;\n}\n\n.flighttopdealdetailpage-content .p-16 {\n  padding: 16px;\n}\n\n.flighttopdealdetailpage-content .p-top-8 {\n  padding-top: 8px;\n}\n\n.flighttopdealdetailpage-content .text-content {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.flighttopdealdetailpage-content .text-content .text-seemore {\n  letter-spacing: -0.14px;\n  color: #2f80ed;\n  text-decoration: underline;\n}\n\n.div-flighttopdealdetail-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n\n.div-flighttopdealdetail-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.div-flighttopdealdetail-footer .button-book {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  padding: 0;\n  margin: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0dG9wZGVhbGRldGFpbC9mbGlnaHR0b3BkZWFsZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0dG9wZGVhbGRldGFpbC9mbGlnaHR0b3BkZWFsZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURFQTtFQUNJLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURJSTtFQUNJLGFBQUE7QUNEUjs7QURHSTtFQUNJLGdCQUFBO0FDRFI7O0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNGUjs7QURJUTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDRlo7O0FET0E7RUFDSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFvQixhQUFBO0FDRm5EOztBREdJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNEUjs7QURHTTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDRlYiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHR0b3BkZWFsZGV0YWlsL2ZsaWdodHRvcGRlYWxkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xufVxuXG4uZmxpZ2h0dG9wZGVhbGRldGFpbHBhZ2UtY29udGVudHtcblxuICAgIC5wLTE2e1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgIH1cbiAgICAucC10b3AtOHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG5cbiAgICAudGV4dC1jb250ZW50e1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuXG4gICAgICAgIC50ZXh0LXNlZW1vcmV7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMmY4MGVkO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5kaXYtZmxpZ2h0dG9wZGVhbGRldGFpbC1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBmbGV4O1xuICAgIC5kaXYtYnV0dG9uLWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLmJ1dHRvbi1ib29rXG4gICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xuICAgICAgfSBcbiAgICAgIFxuICB9IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjIgIWltcG9ydGFudDtcbn1cblxuLmZsaWdodHRvcGRlYWxkZXRhaWxwYWdlLWNvbnRlbnQgLnAtMTYge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmZsaWdodHRvcGRlYWxkZXRhaWxwYWdlLWNvbnRlbnQgLnAtdG9wLTgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmZsaWdodHRvcGRlYWxkZXRhaWxwYWdlLWNvbnRlbnQgLnRleHQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZmxpZ2h0dG9wZGVhbGRldGFpbHBhZ2UtY29udGVudCAudGV4dC1jb250ZW50IC50ZXh0LXNlZW1vcmUge1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyZjgwZWQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZGl2LWZsaWdodHRvcGRlYWxkZXRhaWwtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mbGlnaHR0b3BkZWFsZGV0YWlsLWZvb3RlciAuZGl2LWJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWZsaWdodHRvcGRlYWxkZXRhaWwtZm9vdGVyIC5idXR0b24tYm9vayB7XG4gIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggMTZweDtcbn0iXX0= */"

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