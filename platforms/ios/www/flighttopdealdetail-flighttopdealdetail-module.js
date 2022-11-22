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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-title {\n  font-size: 18px !important;\n  position: relative;\n  padding: 0 40px;\n  line-height: 1.2 !important;\n}\n\n.flighttopdealdetailpage-content .p-16 {\n  padding: 16px;\n}\n\n.flighttopdealdetailpage-content .p-top-8 {\n  padding-top: 8px;\n}\n\n.flighttopdealdetailpage-content .text-content {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.flighttopdealdetailpage-content .text-content .text-seemore {\n  letter-spacing: -0.14px;\n  color: #2f80ed;\n  text-decoration: underline;\n}\n\n.div-flighttopdealdetail-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n\n.div-flighttopdealdetail-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n\n.div-flighttopdealdetail-footer .button-book {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  padding: 0;\n  margin: 8px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHR0b3BkZWFsZGV0YWlsL2ZsaWdodHRvcGRlYWxkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHR0b3BkZWFsZGV0YWlsL2ZsaWdodHRvcGRlYWxkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREVBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtBQ0NKOztBRElJO0VBQ0ksYUFBQTtBQ0RSOztBREdJO0VBQ0ksZ0JBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZSOztBRElRO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUNGWjs7QURPQTtFQUNJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW9CLGFBQUE7QUNGbkQ7O0FER0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0RSOztBREdNO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNGViIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHRvcGRlYWxkZXRhaWwvZmxpZ2h0dG9wZGVhbGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICBsaW5lLWhlaWdodDogMS4yICFpbXBvcnRhbnQ7XG59XG5cbi5mbGlnaHR0b3BkZWFsZGV0YWlscGFnZS1jb250ZW50e1xuXG4gICAgLnAtMTZ7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgfVxuICAgIC5wLXRvcC04e1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cblxuICAgIC50ZXh0LWNvbnRlbnR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG5cbiAgICAgICAgLnRleHQtc2VlbW9yZXtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyZjgwZWQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRpdi1mbGlnaHR0b3BkZWFsZGV0YWlsLWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGRpc3BsYXk6IGZsZXg7XG4gICAgLmRpdi1idXR0b24tZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAuYnV0dG9uLWJvb2tcbiAgICAgIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2Y1OTIzMztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgICB9IFxuICAgICAgXG4gIH0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgNDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMiAhaW1wb3J0YW50O1xufVxuXG4uZmxpZ2h0dG9wZGVhbGRldGFpbHBhZ2UtY29udGVudCAucC0xNiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZmxpZ2h0dG9wZGVhbGRldGFpbHBhZ2UtY29udGVudCAucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uZmxpZ2h0dG9wZGVhbGRldGFpbHBhZ2UtY29udGVudCAudGV4dC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5mbGlnaHR0b3BkZWFsZGV0YWlscGFnZS1jb250ZW50IC50ZXh0LWNvbnRlbnQgLnRleHQtc2VlbW9yZSB7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzJmODBlZDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5kaXYtZmxpZ2h0dG9wZGVhbGRldGFpbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZsaWdodHRvcGRlYWxkZXRhaWwtZm9vdGVyIC5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZmxpZ2h0dG9wZGVhbGRldGFpbC1mb290ZXIgLmJ1dHRvbi1ib29rIHtcbiAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDhweCAxNnB4O1xufSJdfQ== */"

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