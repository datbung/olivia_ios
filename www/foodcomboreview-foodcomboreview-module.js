(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodcomboreview-foodcomboreview-module"],{

/***/ "./src/app/foodcomboreview/foodcomboreview.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/foodcomboreview/foodcomboreview.module.ts ***!
  \***********************************************************/
/*! exports provided: FoodcomboreviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodcomboreviewPageModule", function() { return FoodcomboreviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodcomboreview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodcomboreview.page */ "./src/app/foodcomboreview/foodcomboreview.page.ts");
/* harmony import */ var _foodchefitem_foodchefitem_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../foodchefitem/foodchefitem.module */ "./src/app/foodchefitem/foodchefitem.module.ts");








const routes = [
    {
        path: '',
        component: _foodcomboreview_page__WEBPACK_IMPORTED_MODULE_6__["FoodcomboreviewPage"]
    }
];
let FoodcomboreviewPageModule = class FoodcomboreviewPageModule {
};
FoodcomboreviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _foodchefitem_foodchefitem_module__WEBPACK_IMPORTED_MODULE_7__["FoodChefItemPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodcomboreview_page__WEBPACK_IMPORTED_MODULE_6__["FoodcomboreviewPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodcomboreviewPageModule);



/***/ }),

/***/ "./src/app/foodcomboreview/foodcomboreview.page.html":
/*!***********************************************************!*\
  !*** ./src/app/foodcomboreview/foodcomboreview.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodcombo-review-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"secondary\" style=\"position: absolute;\" (click)=\"goback()\">\n          <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </ion-buttons>\n  \n        <ion-title class=\"text-title\">\n          {{comboname}}\n        </ion-title>\n  \n        <ion-buttons slot=\"primary\">\n            <button ion-button icon-only class=\"btn-header\">\n                <img  src=\"./assets/imgs/ic_share_black.svg\" >\n              </button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\">\n            <button ion-button icon-only class=\"btn-header\">\n                <img class=\"img-cart\" src=\"./assets/ic_food/cart-outline.svg\" >\n              </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div-wraper-foodcomboreview\">\n      <app-foodchefitem [item]=\"chef\"></app-foodchefitem>\n  </div>\n</ion-content>\n<ion-footer>\n    <div class=\"div-footer\">\n      <div class=\"div-button-flex\">\n        <button ion-button round outline class=\"button button-cart\">Thêm vào giỏ hàng</button>\n        <button ion-button round outline class=\"button button2\">Đặt ngay</button>\n      </div>\n    </div>\n   \n  </ion-footer>"

/***/ }),

/***/ "./src/app/foodcomboreview/foodcomboreview.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/foodcomboreview/foodcomboreview.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodcombo-review-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombo-review-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombo-review-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombo-review-header .img-cart {\n  width: 20px;\n}\n.div-wraper-foodcomboreview {\n  padding: 16px;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n.div-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n.div-footer .button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.div-footer .button-cart {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZGNvbWJvcmV2aWV3L2Zvb2Rjb21ib3Jldmlldy5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2Rjb21ib3Jldmlldy9mb29kY29tYm9yZXZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNEUjtBREdJO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRlI7QURJSTtFQUNJLFdBQUE7RUFBWSxjQUFBO0VBQWUsc0JBQUE7RUFBZ0QsZ0JBQUE7RUFDM0UsWUFBQTtBQ0VSO0FEQU07RUFDRSxXQUFBO0FDRVI7QURFQTtFQUNJLGFBQUE7QUNDSjtBREdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNBUjtBREdNO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0ZSO0FESUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9mb29kY29tYm9yZXZpZXcvZm9vZGNvbWJvcmV2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kY29tYm8tcmV2aWV3LWhlYWRlcntcclxuICBcclxuICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGVcclxuICAgIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAgO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1jYXJ0e1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5kaXYtd3JhcGVyLWZvb2Rjb21ib3Jldmlld3tcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG59XHJcblxyXG4uZGl2LWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmRpdi1idXR0b24tZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICB9IFxyXG4gICAgLmJ1dHRvbi1jYXJ0XHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH0gXHJcbn0iLCIuZm9vZGNvbWJvLXJldmlldy1oZWFkZXIgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5mb29kY29tYm8tcmV2aWV3LWhlYWRlciAudGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb2Rjb21iby1yZXZpZXctaGVhZGVyIC5idG4taGVhZGVyIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbn1cbi5mb29kY29tYm8tcmV2aWV3LWhlYWRlciAuaW1nLWNhcnQge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmRpdi13cmFwZXItZm9vZGNvbWJvcmV2aWV3IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24tY2FydCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodcomboreview/foodcomboreview.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodcomboreview/foodcomboreview.page.ts ***!
  \*********************************************************/
/*! exports provided: FoodcomboreviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodcomboreviewPage", function() { return FoodcomboreviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let FoodcomboreviewPage = class FoodcomboreviewPage {
    constructor(_foodService, navCtrl) {
        this._foodService = _foodService;
        this.navCtrl = navCtrl;
        this.comboname = "Thanh đạm vị Bắc";
    }
    ngOnInit() {
        this.chef = this._foodService.chef;
    }
    goback() {
        this.navCtrl.back();
    }
};
FoodcomboreviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foodcomboreview',
        template: __webpack_require__(/*! ./foodcomboreview.page.html */ "./src/app/foodcomboreview/foodcomboreview.page.html"),
        styles: [__webpack_require__(/*! ./foodcomboreview.page.scss */ "./src/app/foodcomboreview/foodcomboreview.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_foodService__WEBPACK_IMPORTED_MODULE_2__["foodService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], FoodcomboreviewPage);



/***/ })

}]);
//# sourceMappingURL=foodcomboreview-foodcomboreview-module.js.map