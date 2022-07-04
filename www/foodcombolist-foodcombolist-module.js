(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodcombolist-foodcombolist-module"],{

/***/ "./src/app/foodcombolist/foodcombolist.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/foodcombolist/foodcombolist.module.ts ***!
  \*******************************************************/
/*! exports provided: FoodcombolistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodcombolistPageModule", function() { return FoodcombolistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodcombolist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodcombolist.page */ "./src/app/foodcombolist/foodcombolist.page.ts");
/* harmony import */ var _fooditem_fooditem_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fooditem/fooditem.module */ "./src/app/fooditem/fooditem.module.ts");








const routes = [
    {
        path: '',
        component: _foodcombolist_page__WEBPACK_IMPORTED_MODULE_6__["FoodcombolistPage"]
    }
];
let FoodcombolistPageModule = class FoodcombolistPageModule {
};
FoodcombolistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fooditem_fooditem_module__WEBPACK_IMPORTED_MODULE_7__["FoodItemPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodcombolist_page__WEBPACK_IMPORTED_MODULE_6__["FoodcombolistPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodcombolistPageModule);



/***/ }),

/***/ "./src/app/foodcombolist/foodcombolist.page.html":
/*!*******************************************************!*\
  !*** ./src/app/foodcombolist/foodcombolist.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodcombolist-header\">\n    <ion-toolbar>\n        <ion-buttons slot=\"secondary\" style=\"position: absolute;\" (click)=\"goback()\">\n          <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </ion-buttons>\n  \n        <ion-title class=\"text-title\">\n          Thực dưỡng\n        </ion-title>\n  \n        <ion-buttons slot=\"primary\" (click)=\"showFilter()\">\n            <button ion-button icon-only class=\"btn-header\">\n                <img  src=\"./assets/imgs/ic_filter_b.svg\" >\n              </button>\n        </ion-buttons>\n        <ion-buttons slot=\"primary\" (click)=\"addToCart()\">\n            <button ion-button icon-only class=\"btn-header\">\n                <img class=\"img-cart\" src=\"./assets/ic_food/cart-outline.svg\" >\n              </button>\n        </ion-buttons>\n      </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div-wraper-combo\">\n      <div class=\"div-item-combo\" *ngFor=\"let item of foods; let idx = index\" (click)=\"itemComboClick(item)\">\n        <app-fooditem [item]=\"item\"></app-fooditem>\n      </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/foodcombolist/foodcombolist.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/foodcombolist/foodcombolist.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodcombolist-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombolist-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombolist-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombolist-header .img-cart {\n  width: 20px;\n}\n.div-wraper-combo {\n  padding: 16px;\n}\n.div-wraper-combo .div-item-combo {\n  position: relative;\n  margin: 0;\n  margin-bottom: 24px;\n  border-radius: 4px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZGNvbWJvbGlzdC9mb29kY29tYm9saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGNvbWJvbGlzdC9mb29kY29tYm9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxXQUFBO0VBQVksY0FBQTtFQUFlLHNCQUFBO0VBQWdELGdCQUFBO0VBQzNFLFlBQUE7QUNHUjtBRERNO0VBQ0UsV0FBQTtBQ0dSO0FEQ0E7RUFDSSxhQUFBO0FDRUo7QURBSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZm9vZGNvbWJvbGlzdC9mb29kY29tYm9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kY29tYm9saXN0LWhlYWRlcntcclxuICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGVcclxuICAgIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAgO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1oZWFkZXJ7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7Y29sb3I6ICM0ZjRmNGY7YmFja2dyb3VuZC1jb2xvcjogI2ZmZjstd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7Ym94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1jYXJ0e1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICB9XHJcbn1cclxuXHJcbi5kaXYtd3JhcGVyLWNvbWJve1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAuZGl2LWl0ZW0tY29tYm97XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgfVxyXG59IiwiLmZvb2Rjb21ib2xpc3QtaGVhZGVyIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZm9vZGNvbWJvbGlzdC1oZWFkZXIgLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb29kY29tYm9saXN0LWhlYWRlciAuYnRuLWhlYWRlciB7XG4gIHdpZHRoOiA0OHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4uZm9vZGNvbWJvbGlzdC1oZWFkZXIgLmltZy1jYXJ0IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5kaXYtd3JhcGVyLWNvbWJvIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5kaXYtd3JhcGVyLWNvbWJvIC5kaXYtaXRlbS1jb21ibyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodcombolist/foodcombolist.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/foodcombolist/foodcombolist.page.ts ***!
  \*****************************************************/
/*! exports provided: FoodcombolistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodcombolistPage", function() { return FoodcombolistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");




let FoodcombolistPage = class FoodcombolistPage {
    constructor(navCtrl, foodService) {
        this.navCtrl = navCtrl;
        this.foodService = foodService;
        this.foods = [
            { id: 3, CategoryName: "Bữa trưa thanh đạm vị Bắc", CategoryCode: "bua-trua-thanh-dam-vi-bac-deluxe", CategoryTypeId: 0, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-bac-it-dau-mo-deluxe.jpg', PromoTitle: "Được yêu thích", AvgPoint: 9.2, commend: 54, TypePriceId: 3 },
            { id: 4, CategoryName: "Bữa trưa đậm đà vị Bắc", CategoryCode: "bua-trua-dam-da-vi-bac-standard", CategoryTypeId: 0, GroupId: 1, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-bac-binh-thuong-standard.jpg', PromoTitle: "", AvgPoint: 9.2, commend: 54, TypePriceId: 1 },
            { id: 7, CategoryName: "Bữa trưa thanh đạm vị Trung", CategoryCode: "bua-trua-thanh-dam-vi-trung-standard", CategoryTypeId: 1, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-trung-it-dau-mo-standard.png', PromoTitle: "", AvgPoint: 9.2, commend: 54, TypePriceId: 1 },
            { id: 13, CategoryName: "Bữa trưa thanh đạm vị Nam", CategoryCode: "bua-trua-thanh-dam-vi-nam-standard", CategoryTypeId: 2, GroupId: 0, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-nam-it-dau-mo-standard.jpg', PromoTitle: "iVIVU Recommend", AvgPoint: 9.2, commend: 54, TypePriceId: 1 },
            { id: 24, CategoryName: "Bữa trưa đậm đà vị 3 miền", CategoryCode: "bua-trua-dam-da-vi-3-mien-deluxe", CategoryTypeId: 3, GroupId: 1, Image: 'https://beta-cdn1.ivivu.com/images/temp/vi-3-mien-binh-thuong-deluxe.jpg', PromoTitle: "Được yêu thích", AvgPoint: 9.2, commend: 54, TypePriceId: 3 },
        ];
    }
    ngOnInit() {
        this.foodService.listItemsFood = this.foods;
    }
    goback() {
    }
    itemComboClick(item) {
        var se = this;
        se.foodService.itemFoodDetail = item;
        se.navCtrl.navigateForward('/foodcombodetail');
    }
    showFilter() {
    }
    addToCart() {
    }
};
FoodcombolistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foodcombolist',
        template: __webpack_require__(/*! ./foodcombolist.page.html */ "./src/app/foodcombolist/foodcombolist.page.html"),
        styles: [__webpack_require__(/*! ./foodcombolist.page.scss */ "./src/app/foodcombolist/foodcombolist.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_3__["foodService"]])
], FoodcombolistPage);



/***/ })

}]);
//# sourceMappingURL=foodcombolist-foodcombolist-module.js.map