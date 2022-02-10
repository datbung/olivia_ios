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

module.exports = ".foodcombolist-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombolist-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombolist-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombolist-header .img-cart {\n  width: 20px;\n}\n.div-wraper-combo {\n  padding: 16px;\n}\n.div-wraper-combo .div-item-combo {\n  position: relative;\n  margin: 0;\n  margin-bottom: 24px;\n  border-radius: 4px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2Rjb21ib2xpc3QvZm9vZGNvbWJvbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2Rjb21ib2xpc3QvZm9vZGNvbWJvbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0FSO0FERUk7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdJO0VBQ0ksV0FBQTtFQUFZLGNBQUE7RUFBZSxzQkFBQTtFQUFnRCxnQkFBQTtFQUMzRSxZQUFBO0FDR1I7QURETTtFQUNFLFdBQUE7QUNHUjtBRENBO0VBQ0ksYUFBQTtBQ0VKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL2Zvb2Rjb21ib2xpc3QvZm9vZGNvbWJvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZGNvbWJvbGlzdC1oZWFkZXJ7XHJcbiAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxlXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIDtcclxuICAgIH1cclxuICAgIC5idG4taGVhZGVye1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O2NvbG9yOiAjNGY0ZjRmO2JhY2tncm91bmQtY29sb3I6ICNmZmY7LXdlYmtpdC1ib3gtc2hhZG93OiBub25lO2JveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctY2FydHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgfVxyXG59XHJcblxyXG4uZGl2LXdyYXBlci1jb21ib3tcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgLmRpdi1pdGVtLWNvbWJve1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxufSIsIi5mb29kY29tYm9saXN0LWhlYWRlciAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmZvb2Rjb21ib2xpc3QtaGVhZGVyIC50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vZGNvbWJvbGlzdC1oZWFkZXIgLmJ0bi1oZWFkZXIge1xuICB3aWR0aDogNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmZvb2Rjb21ib2xpc3QtaGVhZGVyIC5pbWctY2FydCB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uZGl2LXdyYXBlci1jb21ibyB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZGl2LXdyYXBlci1jb21ibyAuZGl2LWl0ZW0tY29tYm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDNweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufSJdfQ== */"

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