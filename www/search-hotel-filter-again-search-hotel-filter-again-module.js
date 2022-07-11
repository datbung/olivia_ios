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

<<<<<<< HEAD
module.exports = ".row-header {\n  height: 56px;\n  padding-top: 11px;\n}\n\n.m-top-0 {\n  margin-top: 0 !important;\n}\n\n.text-title1 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.range-md.range-has-pin {\n  padding-top: 0px;\n}\n\n.text-range {\n  font-size: 12px;\n  color: #828282;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.button {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 45%;\n  height: 48px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-left: 36px;\n}\n\n.range-md-xanh .range-bar-active,\n.range-md-xanh .range-knob,\n.range-md-xanh .range-pin,\n.range-md-xanh .range-pin::before {\n  background: #26bed6 !important;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluLnNjc3MiLCJzcmMvYXBwL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4vc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDQU47O0FERUk7RUFDRSx3QkFBQTtBQ0NOOztBRENJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDQ047O0FEQ0k7RUFDSyxnQkFBQTtBQ0VUOztBRENJO0VBRUksZUFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUNLLFlBQUE7RUFDRCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUdBLGFBQUE7RUFJQSxZQUFBO0VBQ0EsZUFBQTtBQ0VSOztBREFJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VSOztBRENJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NOOztBRENJOzs7O0VBSUksOEJBQUE7QUNFUjs7QURBRTtFQUNFLCtCQUFBO0VBQ0Usb0JBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4vc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnJvdy1oZWFkZXJ7XG4gICAgICBoZWlnaHQ6IDU2cHg7XG4gICAgICBwYWRkaW5nLXRvcDoxMXB4O1xuICAgIH1cbiAgICAubS10b3AtMHtcbiAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRleHQtdGl0bGUxXG4gICAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5yYW5nZS1tZC5yYW5nZS1oYXMtcGluIHtcbiAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7IFxuICAgIH1cbiAgIFxuICAgIC50ZXh0LXJhbmdlXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyXG4gICAgfVxuICAgIC5jb2wge1xuICAgICAgICAgcGFkZGluZzogMHB4OyBcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgICAgIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA0NSU7XG4gICAgICAgIGhlaWdodDogNDhweDtcblxuICAgIH1cbiAgICAudGV4dC10aXRsZVxuICAgIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWxlZnQ6IDM2cHg7XG4gICAgfVxuICAgIC5yYW5nZS1tZC14YW5oIC5yYW5nZS1iYXItYWN0aXZlLFxuICAgIC5yYW5nZS1tZC14YW5oIC5yYW5nZS1rbm9iLFxuICAgIC5yYW5nZS1tZC14YW5oIC5yYW5nZS1waW4sXG4gICAgLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbjo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xuICB9XG4gIC5pb24taXRlbXtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIH1cbiIsIi5yb3ctaGVhZGVyIHtcbiAgaGVpZ2h0OiA1NnB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cblxuLm0tdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRpdGxlMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yYW5nZS1tZC5yYW5nZS1oYXMtcGluIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuLnRleHQtcmFuZ2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMDtcbiAgZmxleC1iYXNpczogMDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4LWdyb3c6IDE7XG4gIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xuICBmbGV4LWdyb3c6IDE7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLmJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA0NSU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAzNnB4O1xufVxuXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2UtYmFyLWFjdGl2ZSxcbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1rbm9iLFxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLXBpbixcbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1waW46OmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59Il19 */"
=======
module.exports = ".row-header {\n  height: 56px;\n  padding-top: 11px;\n}\n\n.m-top-0 {\n  margin-top: 0 !important;\n}\n\n.text-title1 {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.range-md.range-has-pin {\n  padding-top: 0px;\n}\n\n.text-range {\n  font-size: 12px;\n  color: #828282;\n}\n\n.col {\n  padding: 0px;\n  position: relative;\n  width: 100%;\n  margin: 0;\n  min-height: 1px;\n  flex-basis: 0;\n  flex-grow: 1;\n  max-width: 100%;\n}\n\n.button {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 45%;\n  height: 48px;\n}\n\n.text-title {\n  font-weight: bold;\n  font-size: 18px;\n  text-align: center;\n  margin-left: 36px;\n}\n\n.range-md-xanh .range-bar-active,\n.range-md-xanh .range-knob,\n.range-md-xanh .range-pin,\n.range-md-xanh .range-pin::before {\n  background: #26bed6 !important;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4vc2VhcmNoLWhvdGVsLWZpbHRlci1hZ2Fpbi5zY3NzIiwic3JjL2FwcC9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREVJO0VBQ0Usd0JBQUE7QUNDTjs7QURDSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0NOOztBRENJO0VBQ0ssZ0JBQUE7QUNFVDs7QURDSTtFQUVJLGVBQUE7RUFDQSxjQUFBO0FDQ1I7O0FEQ0k7RUFDSyxZQUFBO0VBQ0Qsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFHQSxhQUFBO0VBSUEsWUFBQTtFQUNBLGVBQUE7QUNFUjs7QURBSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFUjs7QURDSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDTjs7QURDSTs7OztFQUlJLDhCQUFBO0FDRVI7O0FEQUU7RUFDRSwrQkFBQTtFQUNFLG9CQUFBO0FDR04iLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gtaG90ZWwtZmlsdGVyLWFnYWluL3NlYXJjaC1ob3RlbC1maWx0ZXItYWdhaW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5yb3ctaGVhZGVye1xuICAgICAgaGVpZ2h0OiA1NnB4O1xuICAgICAgcGFkZGluZy10b3A6MTFweDtcbiAgICB9XG4gICAgLm0tdG9wLTB7XG4gICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50ZXh0LXRpdGxlMVxuICAgIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAucmFuZ2UtbWQucmFuZ2UtaGFzLXBpbiB7XG4gICAgICAgICBwYWRkaW5nLXRvcDogMHB4OyBcbiAgICB9XG4gICBcbiAgICAudGV4dC1yYW5nZVxuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MlxuICAgIH1cbiAgICAuY29sIHtcbiAgICAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWluLWhlaWdodDogMXB4O1xuICAgICAgICAtd2Via2l0LWZsZXgtYmFzaXM6IDA7XG4gICAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICAgICAgICBmbGV4LWJhc2lzOiAwO1xuICAgICAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtd2Via2l0LWZsZXgtZ3JvdzogMTtcbiAgICAgICAgLW1zLWZsZXgtcG9zaXRpdmU6IDE7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogNDUlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICB9XG4gICAgLnRleHQtdGl0bGVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xuICAgIH1cbiAgICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtYmFyLWFjdGl2ZSxcbiAgICAucmFuZ2UtbWQteGFuaCAucmFuZ2Uta25vYixcbiAgICAucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluLFxuICAgIC5yYW5nZS1tZC14YW5oIC5yYW5nZS1waW46OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgfVxuICAuaW9uLWl0ZW17XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICB9XG4iLCIucm93LWhlYWRlciB7XG4gIGhlaWdodDogNTZweDtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG5cbi5tLXRvcC0wIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10aXRsZTEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ucmFuZ2UtbWQucmFuZ2UtaGFzLXBpbiB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi50ZXh0LXJhbmdlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIC13ZWJraXQtZmxleC1iYXNpczogMDtcbiAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDA7XG4gIGZsZXgtYmFzaXM6IDA7XG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gIC13ZWJraXQtZmxleC1ncm93OiAxO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24ge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogNDUlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cblxuLnJhbmdlLW1kLXhhbmggLnJhbmdlLWJhci1hY3RpdmUsXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2Uta25vYixcbi5yYW5nZS1tZC14YW5oIC5yYW5nZS1waW4sXG4ucmFuZ2UtbWQteGFuaCAucmFuZ2UtcGluOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufSJdfQ== */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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