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

module.exports = ".foodcombo-review-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombo-review-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombo-review-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombo-review-header .img-cart {\n  width: 20px;\n}\n.div-wraper-foodcomboreview {\n  padding: 16px;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n.div-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n.div-footer .button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.div-footer .button-cart {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kY29tYm9yZXZpZXcvZm9vZGNvbWJvcmV2aWV3LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGNvbWJvcmV2aWV3L2Zvb2Rjb21ib3Jldmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER0k7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRElJO0VBQ0ksV0FBQTtFQUFZLGNBQUE7RUFBZSxzQkFBQTtFQUFnRCxnQkFBQTtFQUMzRSxZQUFBO0FDRVI7QURBTTtFQUNFLFdBQUE7QUNFUjtBREVBO0VBQ0ksYUFBQTtBQ0NKO0FER0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FERUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER007RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDRlI7QURJSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2Zvb2Rjb21ib3Jldmlldy9mb29kY29tYm9yZXZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2Rjb21iby1yZXZpZXctaGVhZGVye1xyXG4gIFxyXG4gICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogNDhweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1nLWNhcnR7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmRpdi13cmFwZXItZm9vZGNvbWJvcmV2aWV3e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbn1cclxuXHJcbi5kaXYtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH0gXHJcbiAgICAuYnV0dG9uLWNhcnRcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgfSBcclxufSIsIi5mb29kY29tYm8tcmV2aWV3LWhlYWRlciAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmZvb2Rjb21iby1yZXZpZXctaGVhZGVyIC50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vZGNvbWJvLXJldmlldy1oZWFkZXIgLmJ0bi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmZvb2Rjb21iby1yZXZpZXctaGVhZGVyIC5pbWctY2FydCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uZGl2LXdyYXBlci1mb29kY29tYm9yZXZpZXcge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbi1jYXJ0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufSJdfQ== */"

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