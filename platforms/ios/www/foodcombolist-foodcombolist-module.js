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

module.exports = ".foodcombolist-header .img-goback {\n  height: 48px;\n  padding: 8px;\n}\n.foodcombolist-header .text-title {\n  font-weight: 600;\n  font-size: 20px;\n  padding: 0;\n  text-align: center;\n}\n.foodcombolist-header .btn-header {\n  width: 48px;\n  color: #4f4f4f;\n  background-color: #fff;\n  box-shadow: none;\n  height: 48px;\n}\n.foodcombolist-header .img-cart {\n  width: 20px;\n}\n.div-wraper-combo {\n  padding: 16px;\n}\n.div-wraper-combo .div-item-combo {\n  position: relative;\n  margin: 0;\n  margin-bottom: 24px;\n  border-radius: 4px;\n  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kY29tYm9saXN0L2Zvb2Rjb21ib2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kY29tYm9saXN0L2Zvb2Rjb21ib2xpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLFdBQUE7RUFBWSxjQUFBO0VBQWUsc0JBQUE7RUFBZ0QsZ0JBQUE7RUFDM0UsWUFBQTtBQ0dSO0FERE07RUFDRSxXQUFBO0FDR1I7QURDQTtFQUNJLGFBQUE7QUNFSjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0FDRVIiLCJmaWxlIjoic3JjL2FwcC9mb29kY29tYm9saXN0L2Zvb2Rjb21ib2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb2Rjb21ib2xpc3QtaGVhZGVye1xyXG4gICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyICA7XHJcbiAgICB9XHJcbiAgICAuYnRuLWhlYWRlcntcclxuICAgICAgICB3aWR0aDogNDhweDtjb2xvcjogIzRmNGY0ZjtiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOy13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgfVxyXG4gICAgICAuaW1nLWNhcnR7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmRpdi13cmFwZXItY29tYm97XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIC5kaXYtaXRlbS1jb21ib3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcbn0iLCIuZm9vZGNvbWJvbGlzdC1oZWFkZXIgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5mb29kY29tYm9saXN0LWhlYWRlciAudGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZvb2Rjb21ib2xpc3QtaGVhZGVyIC5idG4taGVhZGVyIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDhweDtcbn1cbi5mb29kY29tYm9saXN0LWhlYWRlciAuaW1nLWNhcnQge1xuICB3aWR0aDogMjBweDtcbn1cblxuLmRpdi13cmFwZXItY29tYm8ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmRpdi13cmFwZXItY29tYm8gLmRpdi1pdGVtLWNvbWJvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAzcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn0iXX0= */"

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