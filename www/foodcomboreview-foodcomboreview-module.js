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

module.exports = ".foodcombo-review-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombo-review-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombo-review-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombo-review-header .img-cart {\n  width: 20px;\n}\n.div-wraper-foodcomboreview {\n  padding: 16px;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n}\n.div-footer .div-button-flex {\n  display: flex;\n  width: 100%;\n}\n.div-footer .button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.div-footer .button-cart {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2Rjb21ib3Jldmlldy9mb29kY29tYm9yZXZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kY29tYm9yZXZpZXcvZm9vZGNvbWJvcmV2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FESUk7RUFDSSxXQUFBO0VBQVksY0FBQTtFQUFlLHNCQUFBO0VBQWdELGdCQUFBO0VBQzNFLFlBQUE7QUNFUjtBREFNO0VBQ0UsV0FBQTtBQ0VSO0FERUE7RUFDSSxhQUFBO0FDQ0o7QURHQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQUo7QURFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQVI7QURHTTtFQUVFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNGUjtBRElJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvZm9vZGNvbWJvcmV2aWV3L2Zvb2Rjb21ib3Jldmlldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZGNvbWJvLXJldmlldy1oZWFkZXJ7XHJcbiAgXHJcbiAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxlXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIDtcclxuICAgIH1cclxuICAgIC5idG4taGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctY2FydHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG59XHJcblxyXG4uZGl2LXdyYXBlci1mb29kY29tYm9yZXZpZXd7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxufVxyXG5cclxuLmRpdi1mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5kaXYtYnV0dG9uLWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgfSBcclxuICAgIC5idXR0b24tY2FydFxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICB9IFxyXG59IiwiLmZvb2Rjb21iby1yZXZpZXctaGVhZGVyIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZm9vZGNvbWJvLXJldmlldy1oZWFkZXIgLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb29kY29tYm8tcmV2aWV3LWhlYWRlciAuYnRuLWhlYWRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZm9vZGNvbWJvLXJldmlldy1oZWFkZXIgLmltZy1jYXJ0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5kaXYtd3JhcGVyLWZvb2Rjb21ib3JldmlldyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24tZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uLWNhcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59Il19 */"

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