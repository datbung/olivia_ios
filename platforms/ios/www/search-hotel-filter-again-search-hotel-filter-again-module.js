(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-hotel-filter-again-search-hotel-filter-again-module"],{

/***/ "./src/app/search-hotel-filter-again/search-hotel-filter-again.html":
/*!**************************************************************************!*\
  !*** ./src/app/search-hotel-filter-again/search-hotel-filter-again.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the SearchHotelFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row class=\"row-header\">\n    <ion-col size=\"1\" style=\"text-align: left\">\n      <ion-note class=\"button-header\" routerLink=\"/\" routerDirection=\"root\">\n        <div class=\"div-close\">\n          <img class=\"header-img-close m-top-0\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n      </ion-note>\n</ion-col>\n    <ion-col size=\"11\" style=\"align-self: center\"><ion-title class=\"text-title\">Tìm kiếm</ion-title></ion-col>\n   \n</ion-row>\n</ion-header>\n<ion-content padding>\n  <ion-label class=\"text-title1\">\n    Giá\n  </ion-label>\n  <ion-row>\n    <ion-col>\n      <label class=\"text-range\">\n        {{minprice}}đ\n      </label>\n    </ion-col>\n    <ion-col text-right>\n      <label class=\"text-range\">\n        {{maxprice}}đ\n      </label>\n    </ion-col>\n  </ion-row>\n  <!-- <ion-range step=50000 (ionChange)=\"test()\" min=\"100000\" max=\"15000000\" dualKnobs=\"true\" [(ngModel)]=\"structure\"\n    color=\"xanh\">\n  </ion-range> -->\n  <ion-range style=\"--bar-background: #ccc !important;--ion-color-primary: #26bed6;\" step=50000 (ionChange)=\"test()\" min=\"100000\" max=\"15000000\" dualKnobs=\"true\" [(ngModel)]=\"structure\"></ion-range>\n  <ion-label class=\"text-title1\">\n    Sao\n  </ion-label>\n  <ion-row>\n    <ion-col (click)=\"star1()\" col-2.5>\n      <img *ngIf=\"star_1\" src=\"./assets/star/1_star.svg\">\n      <img *ngIf=\"star_1active\" src=\"./assets/star/1_star_active.svg\">\n    </ion-col>\n    <ion-col (click)=\"star2()\" col-2.5>\n      <img *ngIf=\"star_2\" src=\"./assets/star/2_star.svg\">\n      <img *ngIf=\"star_2active\" src=\"./assets/star/2_star_active.svg\">\n    </ion-col>\n    <ion-col (click)=\"star3()\" col-2.5>\n      <img *ngIf=\"star_3\" src=\"./assets/star/3_star.svg\">\n      <img *ngIf=\"star_3active\" src=\"./assets/star/3_star_active.svg\">\n    </ion-col>\n    <ion-col (click)=\"star4()\" col-2.5>\n      <img *ngIf=\"star_4\" src=\"./assets/star/4_star.svg\">\n      <img *ngIf=\"star_4active\" src=\"./assets/star/4_star_active.svg\">\n    </ion-col>\n    <ion-col (click)=\"star5()\" col-2.5>\n      <img *ngIf=\"star_5\" src=\"./assets/star/5_star.svg\">\n      <img *ngIf=\"star_5active\" src=\"./assets/star/5_star_active.svg\">\n    </ion-col>\n  </ion-row>\n  <ion-label class=\"text-title1\">\n    Đánh giá\n  </ion-label>\n  <ion-row>\n    <ion-col>\n      <label class=\"text-range\">\n        Điểm đánh giá {{review}} và cao hơn\n      </label>\n    </ion-col>\n  </ion-row>\n  <ion-range style=\"--bar-background: #26bed6 !important;--knob-background: #26bed6;--bar-background-active:#ccc\" class=\"range-review\" step=\"1\" pin=\"true\" (ionChange)=\"reviewchange()\" min=\"0\" max=\"10\" [(ngModel)]=\"review\">\n  </ion-range>\n  <ion-item class=\"ion-item\">\n    <ion-label slot=\"start\" class=\"text-title1\">Còn phòng</ion-label>\n    <ion-toggle style=\"left: 16px;\" [(ngModel)]=\"ischeckAL\"  slot=\"end\" name=\"blueberry\"></ion-toggle>\n  </ion-item>\n</ion-content>\n<ion-footer style=\"text-align: center\">\n  <button ion-button round outline class=\"button button-footer\" style=\"margin-right:4px\" (click)=\"Cancel()\">Xóa</button>\n  <button ion-button round outline class=\"button button-footer\" style=\"margin-left:4px\" (click)=\"Ok()\">Chọn</button>\n</ion-footer>"

/***/ }),

/***/ "./src/app/search-hotel-filter-again/search-hotel-filter-again.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/search-hotel-filter-again/search-hotel-filter-again.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchHotelFilterAgainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHotelFilterAgainPageModule", function() { return SearchHotelFilterAgainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _search_hotel_filter_again__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-hotel-filter-again */ "./src/app/search-hotel-filter-again/search-hotel-filter-again.ts");







let SearchHotelFilterAgainPageModule = class SearchHotelFilterAgainPageModule {
};
SearchHotelFilterAgainPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _search_hotel_filter_again__WEBPACK_IMPORTED_MODULE_6__["SearchHotelFilterAgainPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _search_hotel_filter_again__WEBPACK_IMPORTED_MODULE_6__["SearchHotelFilterAgainPage"]
                }]),
        ],
    })
], SearchHotelFilterAgainPageModule);



/***/ }),

/***/ "./src/app/search-hotel-filter-again/search-hotel-filter-again.scss":
/*!**************************************************************************!*\
  !*** ./src/app/search-hotel-filter-again/search-hotel-filter-again.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-header {\n  height: 56px;\n  padding-top: 11px;\n}\n\n.m-top-0 {\n  margin-top: 0 !important;\n}\n\n.text-title1 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.range-md.range-has-pin {\n  padding-top: 0px;\n}\n\n.text-range {\n  font-size: 12px;\n  color: #828282;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.button {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 45%;\n  height: 48px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-left: 36px;\n}\n\n.range-md-xanh .range-bar-active,\n.range-md-xanh .range-knob,\n.range-md-xanh .range-pin,\n.range-md-xanh .range-pin::before {\n  background: #26bed6 !important;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4uc2NzcyIsInNyYy9hcHAvc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNBTjs7QURFSTtFQUNFLHdCQUFBO0FDQ047O0FEQ0k7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNLLGdCQUFBO0FDRVQ7O0FEQ0k7RUFFSSxlQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBQ0ssWUFBQTtFQUNELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUlBLFlBQUE7RUFDQSxlQUFBO0FDRVI7O0FEQUk7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQ0k7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDQ047O0FEQ0k7Ozs7RUFJSSw4QkFBQTtBQ0VSOztBREFFO0VBQ0UsK0JBQUE7RUFDRSxvQkFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAucm93LWhlYWRlcntcbiAgICAgIGhlaWdodDogNTZweDtcbiAgICAgIHBhZGRpbmctdG9wOjExcHg7XG4gICAgfVxuICAgIC5tLXRvcC0we1xuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudGV4dC10aXRsZTFcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gICAgLnJhbmdlLW1kLnJhbmdlLWhhcy1waW4ge1xuICAgICAgICAgcGFkZGluZy10b3A6IDBweDsgXG4gICAgfVxuICAgXG4gICAgLnRleHQtcmFuZ2VcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODJcbiAgICB9XG4gICAgLmNvbCB7XG4gICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAgICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgICAgICAgZmxleC1iYXNpczogMDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gICAgICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDQ1JTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgfVxuICAgIC50ZXh0LXRpdGxlXG4gICAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tbGVmdDogMzZweDtcbiAgICB9XG4gICAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLWJhci1hY3RpdmUsXG4gICAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLWtub2IsXG4gICAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbixcbiAgICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgfVxuIiwiLnJvdy1oZWFkZXIge1xuICBoZWlnaHQ6IDU2cHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuXG4ubS10b3AtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLnRleHQtdGl0bGUxIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJhbmdlLW1kLnJhbmdlLWhhcy1waW4ge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG4udGV4dC1yYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgbWluLWhlaWdodDogMXB4O1xuICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gIGZsZXgtZ3JvdzogMTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDQ1JTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG5cbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1iYXItYWN0aXZlLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLWtub2IsXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/search-hotel-filter-again/search-hotel-filter-again.ts":
/*!************************************************************************!*\
  !*** ./src/app/search-hotel-filter-again/search-hotel-filter-again.ts ***!
  \************************************************************************/
/*! exports provided: SearchHotelFilterAgainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchHotelFilterAgainPage", function() { return SearchHotelFilterAgainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");






let SearchHotelFilterAgainPage = class SearchHotelFilterAgainPage {
    constructor(platform, navCtrl, zone, searchhotel, authService, gf) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.authService = authService;
        this.gf = gf;
        this.structure = { lower: 100000, upper: 15000000 };
        this.star_1 = true;
        this.star_1active = false;
        this.star_2 = true;
        this.star_2active = false;
        this.star_3 = true;
        this.star_3active = false;
        this.star_4 = true;
        this.star_4active = false;
        this.star_5 = true;
        this.star_5active = false;
        this.chuoi = "";
        this.ischeckAL = false;
        if (searchhotel.minprice && this.searchhotel.maxprice) {
            this.structure.lower = searchhotel.minprice.replace(/\./g, '').replace(/\,/g, '');
            this.structure.upper = searchhotel.maxprice.replace(/\./g, '').replace(/\,/g, '');
            this.minprice = searchhotel.minprice;
            this.maxprice = searchhotel.maxprice;
        }
        else {
            this.minprice = this.structure.lower.toLocaleString();
            this.maxprice = this.structure.upper.toLocaleString();
        }
        if (searchhotel.review) {
            this.review = searchhotel.review;
        }
        if (searchhotel.star) {
            for (let i = 0; i < searchhotel.star.length; i++) {
                if (searchhotel.star[i] == 1) {
                    this.star_1active = true;
                    this.star_1 = false;
                }
                else if (searchhotel.star[i] == 2) {
                    this.star_2active = true;
                    this.star_2 = false;
                }
                else if (searchhotel.star[i] == 3) {
                    this.star_3active = true;
                    this.star_3 = false;
                }
                else if (searchhotel.star[i] == 4) {
                    this.star_4active = true;
                    this.star_4 = false;
                }
                else if (searchhotel.star[i] == 5) {
                    this.star_5active = true;
                    this.star_5 = false;
                }
            }
        }
        this.ischeckAL = this.searchhotel.ischeckAL;
        this.platform.ready().then(() => {
            document.addEventListener("backbutton", () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.navCtrl.navigateBack('/hotellist/true');
            }));
        });
        gf.googleAnalytion('search-hotel-filter', 'load', '');
    }
    ngOnInit() {
    }
    close() {
        this.navCtrl.back();
    }
    test() {
        this.minprice = this.structure.lower.toLocaleString();
        this.maxprice = this.structure.upper.toLocaleString();
    }
    star1() {
        if (this.star_1 == true) {
            this.star_1 = false;
            this.star_1active = true;
        }
        else {
            this.star_1 = true;
            this.star_1active = false;
        }
    }
    star2() {
        if (this.star_2 == true) {
            this.star_2 = false;
            this.star_2active = true;
        }
        else {
            this.star_2 = true;
            this.star_2active = false;
        }
    }
    star3() {
        if (this.star_3 == true) {
            this.star_3 = false;
            this.star_3active = true;
        }
        else {
            this.star_3 = true;
            this.star_3active = false;
        }
    }
    star4() {
        if (this.star_4 == true) {
            this.star_4 = false;
            this.star_4active = true;
        }
        else {
            this.star_4 = true;
            this.star_4active = false;
        }
    }
    star5() {
        if (this.star_5 == true) {
            this.star_5 = false;
            this.star_5active = true;
        }
        else {
            this.star_5 = true;
            this.star_5active = false;
        }
    }
    reviewchange() {
    }
    Cancel() {
        this.structure = { lower: 100000, upper: 15000000 };
        this.star_1 = true;
        this.star_2 = true;
        this.star_3 = true;
        this.star_4 = true;
        this.star_5 = true;
        this.star_1active = false;
        this.star_2active = false;
        this.star_3active = false;
        this.star_4active = false;
        this.star_5active = false;
        this.review = 0;
        this.ischeckAL = false;
        this.searchhotel.ischeckAL = false;
        this.searchhotel.hasSortHotelList = "";
    }
    Ok() {
        this.searchhotel.chuoi = "";
        this.searchhotel.star = [];
        if (this.star_1active == true) {
            this.searchhotel.star.push(1);
        }
        if (this.star_2active == true) {
            this.searchhotel.star.push(2);
        }
        if (this.star_3active == true) {
            this.searchhotel.star.push(3);
        }
        if (this.star_4active == true) {
            this.searchhotel.star.push(4);
        }
        if (this.star_5active == true) {
            this.searchhotel.star.push(5);
        }
        var minprice1 = this.minprice.replace(/\./g, '').replace(/\,/g, '');
        var maxprice1 = this.maxprice.replace(/\./g, '').replace(/\,/g, '');
        if (minprice1 * 1 > 100000 || maxprice1 * 1 < 15000000) {
            this.searchhotel.minprice = this.minprice;
            this.searchhotel.maxprice = this.maxprice;
        }
        else {
            this.searchhotel.minprice = null;
            this.searchhotel.maxprice = null;
        }
        if (this.review >= 0) {
            this.searchhotel.review = this.review;
        }
        if (!this.searchhotel.chuoi) {
            if (this.searchhotel.star) {
                for (let i = 0; i < this.searchhotel.star.length; i++) {
                    if (i == 0) {
                        if (i == this.searchhotel.star.length - 1) {
                            this.chuoi = "* " + this.searchhotel.star[i];
                        }
                        else {
                            this.chuoi = "* " + this.searchhotel.star[i] + ",";
                        }
                    }
                    else if (i != 0) {
                        if (i != this.searchhotel.star.length - 1) {
                            this.chuoi = this.chuoi + this.searchhotel.star[i] + ",";
                        }
                        else {
                            this.chuoi = this.chuoi + this.searchhotel.star[i];
                        }
                    }
                }
            }
            if (this.searchhotel.minprice) {
                if (this.chuoi) {
                    this.chuoi = this.chuoi + " | " + "đ " + this.searchhotel.minprice.toLocaleString() + "-" + " " + this.searchhotel.maxprice.toLocaleString();
                }
                else {
                    this.chuoi = "đ " + this.searchhotel.minprice.toLocaleString() + "-" + " " + this.searchhotel.maxprice.toLocaleString();
                }
            }
            if (this.searchhotel.review > 0) {
                if (this.chuoi) {
                    this.chuoi = this.chuoi + " | " + "Nhận xét " + this.searchhotel.review + "+";
                }
                else {
                    this.chuoi = "Nhận xét " + this.searchhotel.review + "+";
                }
            }
            else {
                this.chuoi = this.chuoi;
            }
        }
        else {
            this.chuoi = this.searchhotel.chuoi;
        }
        if (this.chuoi) {
            this.searchhotel.chuoi = this.chuoi;
        }
        this.searchhotel.ischeckAL = this.ischeckAL;
        this.searchhotel.hasSortHotelList = this.searchhotel.minprice || this.searchhotel.maxprice || this.searchhotel.chuoi || this.searchhotel.location || this.searchhotel.facsearch || this.searchhotel.tagIds || this.searchhotel.classIds || this.searchhotel.tagIds || this.searchhotel.ischeckAL;
        if (this.searchhotel.gbmsg && this.searchhotel.gbmsg.Type == 1) {
            var id1 = { id: this.searchhotel.gbmsg.HotelId };
            this.navCtrl.navigateForward('/hoteldetail/' + this.searchhotel.gbmsg.HotelId);
        }
        else {
            this.authService.region = this.searchhotel.gbmsg.regionName;
            this.authService.regionid = this.searchhotel.gbmsg.regionId;
            this.authService.regioncode = this.searchhotel.gbmsg.regionCode;
            var id2 = { filteragain: true };
            this.navCtrl.navigateForward('/hotellist/true');
            this.gf.googleAnalytion('searchagain', 'Search', this.chuoi + '|' + this.searchhotel.gbmsg.regionCode);
        }
    }
    ionViewDidLoad() {
        let elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map((key) => {
                elements[key].style.display = 'none';
            });
        }
    }
};
SearchHotelFilterAgainPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-search-hotel-filter-again',
        template: __webpack_require__(/*! ./search-hotel-filter-again.html */ "./src/app/search-hotel-filter-again/search-hotel-filter-again.html"),
        styles: [__webpack_require__(/*! ./search-hotel-filter-again.scss */ "./src/app/search-hotel-filter-again/search-hotel-filter-again.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"]])
], SearchHotelFilterAgainPage);



/***/ })

}]);
//# sourceMappingURL=search-hotel-filter-again-search-hotel-filter-again-module.js.map