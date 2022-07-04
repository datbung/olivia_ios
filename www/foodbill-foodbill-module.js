(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodbill-foodbill-module"],{

/***/ "./src/app/foodbill/foodbill.module.ts":
/*!*********************************************!*\
  !*** ./src/app/foodbill/foodbill.module.ts ***!
  \*********************************************/
/*! exports provided: FoodbillPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodbillPageModule", function() { return FoodbillPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodbill_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodbill.page */ "./src/app/foodbill/foodbill.page.ts");
/* harmony import */ var _fooditemlike_fooditemlike_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fooditemlike/fooditemlike.module */ "./src/app/fooditemlike/fooditemlike.module.ts");
/* harmony import */ var ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionic-image-loader */ "./node_modules/ionic-image-loader/fesm2015/ionic-image-loader.js");
/* harmony import */ var _fooddinneritemlike_fooddinneritemlike_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../fooddinneritemlike/fooddinneritemlike.module */ "./src/app/fooddinneritemlike/fooddinneritemlike.module.ts");










const routes = [
    {
        path: '',
        component: _foodbill_page__WEBPACK_IMPORTED_MODULE_6__["FoodbillPage"]
    }
];
let FoodbillPageModule = class FoodbillPageModule {
};
FoodbillPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _fooditemlike_fooditemlike_module__WEBPACK_IMPORTED_MODULE_7__["FoodItemLikePageModule"],
            ionic_image_loader__WEBPACK_IMPORTED_MODULE_8__["IonicImageLoader"],
            _fooddinneritemlike_fooddinneritemlike_module__WEBPACK_IMPORTED_MODULE_9__["FoodDinnerItemLikePageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodbill_page__WEBPACK_IMPORTED_MODULE_6__["FoodbillPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodbillPageModule);



/***/ }),

/***/ "./src/app/foodbill/foodbill.page.html":
/*!*********************************************!*\
  !*** ./src/app/foodbill/foodbill.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border >\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Giỏ hàng</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div *ngIf=\"listItems && listItems.length >0\">\n      <div *ngFor=\"let item of listItems; let idx = index\">\n          <div class=\"row-item-hotellist\" >\n             <!-- left image region-->\n          <div class=\"col-img-hotellist\">\n              <img class=\"img-radius\" [src]=\"item.image164\" style=\"position:relative\">\n            </div>\n            <!-- right content region -->\n            <div class=\"col-description-hotellist\">\n              <div>\n                <div class=\"div-foodname\">\n                  <div class=\" d-flex\">\n                      <div class=\"text-food\" *ngIf=\"item && item.focategory\">{{item.focategory.name}}</div>\n                      <div class=\"div-star\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n                      </div>\n                  </div>\n                  <p class=\"text-note\" *ngIf=\"item.extraDisplay else weekdisplayonly\">{{item.weekdisplay}} · {{item.extraDisplay}}</p>\n                  <ng-template #weekdisplayonly>\n                    <p class=\"text-note\">{{item.weekdisplay}}</p>\n                  </ng-template>\n                </div>\n              </div>\n              <!-- price -->\n              <div *ngIf=\"item && item.focategory\">\n                <ion-label class=\"text-price\">\n                  <span class=\"text-d\">{{item.totalPriceItemDisplay}} đ</span>\n                </ion-label>\n              </div>\n              <!-- plus or minus -->\n              <div class=\"div-position\">\n                <div class=\"d-flex\">\n                  <div class=\"div-minus\" (click)=\"minusItem(item)\">\n                    <img src=\"./assets/minus.svg\">\n                  </div>\n                  <div class=\"div-top-bottom\" *ngIf=\"item && item.quantity\">\n                    <ion-label>{{item.quantity}}</ion-label>\n                  </div>\n                  <div class=\"div-plus\" (click)=\"plusItem(item)\">\n                    <img src=\"./assets/plus.svg\">\n                  </div>\n                </div>\n                <p class=\"text-delete\" (click)=\"deleteItem(idx)\">\n                  Xóa\n                </p>\n              </div>\n            </div>\n          </div>\n          <div>\n              <p class=\"h-line\"></p>\n          </div>\n        </div>\n       \n      <div class=\"div-background\">\n        <div class=\"div-content\">\n          <div>\n            <ion-label class=\"text-content\">\n             - Giao hàng miễn phí từ bữa trưa (11h - 12h) hàng ngày tại các khu vực:\n              <!-- - Giao hàng miễn phí khu vực quận 1, 3, Phú Nhuận, Tân Bình, Bình Thạnh. -->\n              <!-- Hiện tại iVIVU chỉ giao tại <span class=\"cls-district\">Quận 1, Quận 3, Quận 10, Phú Nhuận, Tân Bình, Bình Thạnh</span> -->\n            </ion-label>\n            <div class=\"div-dist\" *ngFor=\"let item of District\">\n              <ion-label class=\"text-content\" >\n                <span class=\"namecity\">+ {{item.namecity}}</span>: {{item.namedist}}\n              </ion-label>\n            </div>\n          </div>\n          <div class=\"mt5\">\n            <ion-label class=\"text-content\">\n              - Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách trong thời gian sớm nhất. <span (click)=\"changeplace()\" class=\"text-yck\"> Yêu cầu giao khu vực khác<img class=\"cls-img\" src=\"./assets/imgs/vector.svg\"></span>\n            </ion-label>\n          </div>\n         \n        </div>\n      </div>\n  </div>\n  <div *ngIf=\"listItems && listItems.length ==0\">\n      <div class=\"text-empty\">\n        <div><img src=\"../../assets/ic_food/cart.svg\"></div>\n        <div class=\"m-16\">Bạn chưa có sản phẩm nào trong giỏ hàng. Nhanh tay chọn ngay thực đơn hấp dẫn bên dưới</div>\n        <div><button class=\"button button2\" (click)=\"goToHomeFood()\">Xem thêm thực đơn</button></div>\n      </div>\n  \n      <div class=\"div-split\"></div>\n      <div class=\"text-title m-bottom-16\">Bữa trưa được yêu thích</div>\n      <div class=\"div-wrap-slide\">\n          <div class=\"div-slide-item\" *ngFor=\"let item of listItemsFood; let idx = index\">\n                <app-fooditemlike [item]=\"item\"></app-fooditemlike>\n          </div>\n      </div>\n\n      <!-- <div class=\"div-split\"></div>\n      <div class=\"text-title m-bottom-16\">Bữa tối được yêu thích</div>\n      <div class=\"div-wrap-slide slide-dinner\">\n          <div class=\"div-slide-item\" *ngFor=\"let item of listItemsDinnerFood; let idx = index\">\n            <app-fooddinneritemlike [item]=\"item\"></app-fooddinneritemlike>\n          </div>\n      </div> -->\n    </div> \n</ion-content>\n<ion-footer class=\"cls-ion-footer\" no-border *ngIf=\"listItems && listItems.length >0\">\n  <div class=\"div-total\">\n    <div >\n      <ion-label class=\"cls-text-total\">\n        Thành tiền:\n      </ion-label>\n    </div>\n    <div class=\"div-total-2\"> \n        <ion-label class=\"text-total\">\n          <span class=\"text-total-d\"></span>{{totalPriceDisplay}}<span class=\"text-sub-total\"> đ/tuần</span>\n        </ion-label>\n  \n    </div>\n  </div>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\"  ion-button round outline class=\"button button2\">Tiến hành đặt hàng</button>\n  </div>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/foodbill/foodbill.page.scss":
/*!*********************************************!*\
  !*** ./src/app/foodbill/foodbill.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n  position: relative;\n}\n\n.div-position {\n  width: 100%;\n  position: relative;\n}\n\n.div-plus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-top-bottom {\n  border-top: solid 1px #bdbdbd;\n  border-bottom: solid 1px #bdbdbd;\n  width: 50px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-minus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 3px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.col-img-hotellist {\n  margin-top: 4px;\n  height: 104px;\n  min-width: 104px;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n  margin-top: 12px;\n  margin-bottom: 20px;\n  display: flex;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 4px;\n  width: 104px;\n  height: 104px;\n}\n\n.text-price {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.text-d {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.div-foodname {\n  min-height: 52px;\n}\n\n.text-delete {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  margin: 0px;\n}\n\n.div-delete {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n  margin-bottom: 30px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.cls-district {\n  font-weight: bold;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n.cls-text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-total {\n  margin-top: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-total-1 {\n  position: absolute;\n  top: 10px;\n}\n\n.div-total-2 {\n  position: absolute;\n  right: 18px;\n  top: -5px;\n}\n\n.text-total {\n  line-height: 27px;\n  font-size: 32px;\n  letter-spacing: -0.92px;\n  color: #26bed6;\n  font-weight: 600;\n}\n\n.text-sub-total {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text-total-d {\n  font-size: 16px;\n}\n\n.text-empty {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 14px;\n}\n\n.m-16 {\n  margin: 16px 0;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n}\n\n.button-outline {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n  margin-right: 0;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  background: #fff;\n}\n\n.div-star {\n  padding-left: 8px;\n  padding-top: 2px;\n}\n\n.div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px 16px -16px;\n}\n\n.float-promo {\n  padding-left: 10px !important;\n}\n\n.text-title {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n  margin-left: 16px;\n}\n\n.div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n  margin-bottom: 16px;\n  margin-right: -16px;\n}\n\n.div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 312px;\n  padding-left: 16px;\n}\n\n.div-wrap-slide .div-slide-item:first-child {\n  margin-left: 0px !important;\n}\n\n.div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n  padding-right: 32px;\n}\n\n@media (min-width: 768px) and (max-width: 1600px) {\n  .row-item-hotellist {\n    height: 164px !important;\n  }\n\n  .col-img-hotellist {\n    height: 164px !important;\n    min-width: 164px !important;\n  }\n\n  .img-radius {\n    width: 164px !important;\n    height: 164px !important;\n  }\n}\n\n.div-dist {\n  margin-top: 10px;\n}\n\n.namecity {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZGJpbGwvZm9vZGJpbGwucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kYmlsbC9mb29kYmlsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUVJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFFSSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUkseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURERTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ01KOztBREpBO0VBRUUsa0JBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUVJLGdCQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ01KOztBREpBO0VBRUksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBRUksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7QUNNSjs7QURKQTtFQUVJLGlCQUFBO0FDTUo7O0FESkE7RUFFSSx5QkFBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFFSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNNSjs7QURKQTtFQUVJLGdCQUFBO0FDTUo7O0FESkE7RUFFSSxnQkFBQTtBQ01KOztBREpBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBRUksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUVJLGtCQUFBO0VBQ0EsU0FBQTtBQ01KOztBREpBO0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ01KOztBREpBO0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDT0o7O0FETEE7RUFFSSxlQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1FKOztBRE5BO0VBQ0ksY0FBQTtBQ1NKOztBRE5BO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNRSjs7QURMQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ09KOztBRExBO0VBQ0ksbUNBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRE5BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ1NKOztBRFBBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUNVSjs7QURSQTtFQUNJLDZCQUFBO0FDV0o7O0FEVEE7RUFFVSxnQkFBQTtFQUNBLGVBQUE7QUNXVjs7QURUUTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNZWjs7QURWQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNhSjs7QURYUTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDYVo7O0FEVFE7RUFDSSwyQkFBQTtBQ1daOztBRFRRO0VBQ0ksNEJBQUE7RUFDQSxtQkFBQTtBQ1daOztBRExBO0VBQ1E7SUFDSSx3QkFBQTtFQ1FWOztFRExNO0lBQ0ksd0JBQUE7SUFDQSwyQkFBQTtFQ1FWOztFRExNO0lBQ0ksdUJBQUE7SUFDQSx3QkFBQTtFQ1FWO0FBQ0Y7O0FETkk7RUFFQSxnQkFBQTtBQ09KOztBRExBO0VBRUUsaUJBQUE7QUNPRiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RiaWxsL2Zvb2RiaWxsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kaXYtcG9zaXRpb25cclxue1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdi1wbHVzXHJcbntcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweDsgICAgICAgIFxyXG59XHJcbi5kaXYtdG9wLWJvdHRvbVxyXG57XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7ICAgICAgICBcclxufVxyXG4uZGl2LW1pbnVzXHJcbntcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICB3aWR0aDogMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDNweDsgICAgICAgIFxyXG59XHJcbi5oLWxpbmV7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcclxuICAgIG1hcmdpbjogMCAxNnB4O1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuICAuY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIC5yb3ctaXRlbS1ob3RlbGxpc3Qtc2t7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDoxNnB4O1xyXG4gIH1cclxuICAuY29sLWltZy1ob3RlbGxpc3R7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgbWluLXdpZHRoOiAxMDRweDtcclxuICB9XHJcbiAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcclxuICAgIG1hcmdpbjogMTZweDtcclxuICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50ZXh0LW5vdGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uaW1nLXJhZGl1c1xyXG57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4IDtcclxuICAgIGhlaWdodDogMTA0cHggO1xyXG59XHJcbi50ZXh0LXByaWNlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4udGV4dC1kXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG4uZGl2LWZvb2RuYW1lXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDUycHg7XHJcbn1cclxuLnRleHQtZGVsZXRlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLmRpdi1kZWxldGV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbn1cclxuLnRleHQtY29udGVudFxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmRpdi1jb250ZW50XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLm10NVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLmNscy1kaXN0cmljdFxyXG57XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZGl2LWJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuLnRleHQteWNrXHJcbntcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweFxyXG59XHJcbi5kaXYteWNrXHJcbntcclxuICAgIHBhZGRpbmc6IDlweCAwcHg7XHJcbn1cclxuLmNscy1pbWdcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG4uY2xzLXRleHQtdG90YWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5kaXYtdG90YWxcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kaXYtdG90YWwtMVxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbn1cclxuLmRpdi10b3RhbC0yXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxOHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG59XHJcbi50ZXh0LXRvdGFsXHJcbntcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjkycHg7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRleHQtc3ViLXRvdGFse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbn1cclxuLnRleHQtdG90YWwtZFxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnRleHQtZW1wdHl7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5tLTE2e1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbn1cclxuXHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxufSBcclxuXHJcbi5idXR0b24tb3V0bGluZVxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59IFxyXG4uY2xzLWlvbi1mb290ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbi5kaXYtc3RhcntcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDJweDtcclxufVxyXG4uZGl2LXNwbGl0e1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luOiAxNnB4IC0xNnB4IDE2cHggLTE2cHg7XHJcbn1cclxuLmZsb2F0LXByb21ve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtdGl0bGVcclxuICAgICAgICB7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubS1ib3R0b20tMTZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuLmRpdi13cmFwLXNsaWRle1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG5cclxuICAgICAgICAuZGl2LXNsaWRlLWl0ZW17XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDMxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1zbGlkZS1pdGVtOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtc2xpZGUtaXRlbTpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSAge1xyXG4gICAgICAgIC5yb3ctaXRlbS1ob3RlbGxpc3R7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb2wtaW1nLWhvdGVsbGlzdCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxNjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltZy1yYWRpdXMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTY0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtZGlzdFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5uYW1lY2l0eVxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi1wb3NpdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtcGx1cyB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIHdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmRpdi10b3AtYm90dG9tIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNiZGJkYmQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYmRiZGJkO1xuICB3aWR0aDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5kaXYtbWludXMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICB3aWR0aDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5oLWxpbmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qtc2sge1xuICBwYWRkaW5nOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4uY29sLWltZy1ob3RlbGxpc3Qge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1pbi13aWR0aDogMTA0cHg7XG59XG5cbi5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICBtYXJnaW46IDE2cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW1nLXJhZGl1cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi50ZXh0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLmRpdi1mb29kbmFtZSB7XG4gIG1pbi1oZWlnaHQ6IDUycHg7XG59XG5cbi50ZXh0LWRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4uZGl2LWRlbGV0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubXQ1IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uY2xzLWRpc3RyaWN0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi50ZXh0LXljayB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbn1cblxuLmRpdi15Y2sge1xuICBwYWRkaW5nOiA5cHggMHB4O1xufVxuXG4uY2xzLWltZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5jbHMtdGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtdG90YWwge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtdG90YWwtMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xufVxuXG4uZGl2LXRvdGFsLTIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxOHB4O1xuICB0b3A6IC01cHg7XG59XG5cbi50ZXh0LXRvdGFsIHtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjkycHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4udGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC10b3RhbC1kIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4udGV4dC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubS0xNiB7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDhweDtcbn1cblxuLmJ1dHRvbi1vdXRsaW5lIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2xzLWlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbi5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4IDE2cHggLTE2cHg7XG59XG5cbi5mbG9hdC1wcm9tbyB7XG4gIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLm0tYm90dG9tLTE2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbi5kaXYtd3JhcC1zbGlkZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbSB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDMxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4uZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5yb3ctaXRlbS1ob3RlbGxpc3Qge1xuICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xuICAgIG1pbi13aWR0aDogMTY0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pbWctcmFkaXVzIHtcbiAgICB3aWR0aDogMTY0cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kaXYtZGlzdCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYW1lY2l0eSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/foodbill/foodbill.page.ts":
/*!*******************************************!*\
  !*** ./src/app/foodbill/foodbill.page.ts ***!
  \*******************************************/
/*! exports provided: FoodbillPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodbillPage", function() { return FoodbillPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foodplaceother_foodplaceother_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../foodplaceother/foodplaceother.page */ "./src/app/foodplaceother/foodplaceother.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);











let FoodbillPage = class FoodbillPage {
    constructor(navCtrl, modalCtrl, _foodService, gf, valueGlobal, zone, storage, searchhotel) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._foodService = _foodService;
        this.gf = gf;
        this.valueGlobal = valueGlobal;
        this.zone = zone;
        this.storage = storage;
        this.searchhotel = searchhotel;
        this.listItems = [];
        this.totalPrice = 0;
        this.totalPriceDisplay = "0";
        this.listItemsFood = [];
        this.arrDistrict = [];
        this.District = [];
        this.dayofweek = 5;
        this.loaddata();
        if (this._foodService.listItemsFood.length > 0) {
            this.listItemsFood = this._foodService.listItemsFoodNextweek;
        }
        if (this._foodService.listItemsDinnerNextWeek && this._foodService.listItemsDinnerNextWeek.length > 0) {
            this.listItemsDinnerFood = this._foodService.listItemsDinnerNextWeek;
        }
    }
    loaddata() {
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_8__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
            if (document.getElementsByClassName("homefood-footer")[1]) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
            }
        }, 200);
        if (this._foodService.listItemsCart.length > 0) {
            this.gf.checkData(this._foodService.listItemsCart).then(() => {
                this.dayofweek = 0;
                this.dayofweek += this._foodService.listItemsCart[0].menuId2 && !this._foodService.listItemsCart[0].menuId2.remove ? 1 : 0;
                this.dayofweek += this._foodService.listItemsCart[0].menuId3 && !this._foodService.listItemsCart[0].menuId3.remove ? 1 : 0;
                this.dayofweek += this._foodService.listItemsCart[0].menuId4 && !this._foodService.listItemsCart[0].menuId4.remove ? 1 : 0;
                this.dayofweek += this._foodService.listItemsCart[0].menuId5 && !this._foodService.listItemsCart[0].menuId5.remove ? 1 : 0;
                this.dayofweek += this._foodService.listItemsCart[0].menuId6 && !this._foodService.listItemsCart[0].menuId6.remove ? 1 : 0;
                this.listItems = this._foodService.listItemsCart;
                this._foodService.listItemsCart = this.listItems;
                this.listItems.forEach(element => {
                    element.totalPriceItem = 0;
                    if (!element.quantity) {
                        element.quantity = 1;
                    }
                    element.hadread = true;
                    if (element.image.indexOf("640x480") != -1) {
                        element.image164 = element.image.replace("640x480", "164x164");
                    }
                    else {
                        if (element.image.indexOf("104x104") == -1) {
                            let urlimage = element.image.substring(0, element.image.length - 4);
                            let tail = element.image.substring(element.image.length - 4, element.image.length);
                            element.image = urlimage + "-104x104" + tail;
                        }
                        if (element.image.indexOf("164x164") == -1) {
                            if (element.image.indexOf("104x104") != -1) {
                                element.image164 = element.image.replace('104x104', '164x164');
                            }
                            else {
                                let urlimage = element.image.substring(0, element.image.length - 4);
                                let tail = element.image.substring(element.image.length - 4, element.image.length);
                                element.image164 = urlimage + "-164x164" + tail;
                            }
                        }
                    }
                    element.extraDisplay = "";
                    if (element.itemExtraOther && element.itemExtraOther.length > 0) {
                        element.itemExtraOther.forEach(extra => {
                            if (!element.extraDisplay) {
                                element.extraDisplay += extra.name;
                            }
                            else {
                                element.extraDisplay += " · " + extra.name;
                            }
                            this.totalPrice = this.totalPrice + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
                            element.totalPriceItem += (this.gf.convertStringToNumber(extra.price) * 1 * element.focategory.dayofweek);
                        });
                    }
                    if (element.itemExtraWater && element.itemExtraWater.length > 0) {
                        element.itemExtraWater.forEach(extra => {
                            if (!element.extraDisplay) {
                                element.extraDisplay += extra.name;
                            }
                            else {
                                element.extraDisplay += " · " + extra.name;
                            }
                            this.totalPrice = this.totalPrice + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
                            element.totalPriceItem += (this.gf.convertStringToNumber(extra.price) * 1 * element.focategory.dayofweek);
                        });
                    }
                    this.storage.set("listItemsCart", this.listItems);
                    this._foodService.countcart = this.listItems.length;
                    this.totalPrice += (element.focategory.pricePerDay * element.focategory.dayofweek) * element.quantity;
                    element.totalPriceItem = element.totalPriceItem + element.focategory.pricePerDay * element.focategory.dayofweek;
                    element.totalPriceItemDisplay = this.gf.convertNumberToString(element.totalPriceItem);
                    element.focategory.totalPriceItem = element.totalPriceItem;
                    this.totalPriceDisplay = this.gf.convertNumberToString(this.totalPrice);
                    element.applyFor = "";
                    element.applyFor += element.menuId2 && !element.menuId2.remove ? "1" : "0";
                    element.applyFor += element.menuId3 && !element.menuId3.remove ? "|1" : "|0";
                    element.applyFor += element.menuId4 && !element.menuId4.remove ? "|1" : "|0";
                    element.applyFor += element.menuId5 && !element.menuId5.remove ? "|1" : "|0";
                    element.applyFor += element.menuId6 && !element.menuId6.remove ? "|1" : "|0";
                    element.applyFor += "|0|0";
                });
            });
        }
        else {
            this.listItems = [];
            this.storage.remove("listItemsCart");
        }
        if (this._foodService.listItemsFood.length > 0) {
            this.listItemsFood = this._foodService.listItemsFood;
        }
        this.District = this._foodService.district;
    }
    ngOnInit() {
        this._foodService.itemAddToCartFromFoodbill.pipe().subscribe((data) => {
            if (data) {
                this.loaddata();
                if (this._foodService.listItemsFood.length > 0) {
                    this.listItemsFood = this._foodService.listItemsFoodNextweek;
                }
                if (this._foodService.listItemsDinnerNextWeek && this._foodService.listItemsDinnerNextWeek.length > 0) {
                    this.listItemsDinnerFood = this._foodService.listItemsDinnerNextWeek;
                }
            }
        });
    }
    goback() {
        if (this._foodService.fromPage == "homefood") {
            this.searchhotel.backPage = 'foodbill';
            this.navCtrl.navigateBack('/homefood');
        }
        else if (this._foodService.fromPage == "fooddinnerorder") {
            this._foodService.fromPage = '';
            this.navCtrl.navigateBack('/fooddinnerdetail');
        }
        else {
            this.setCacheCart();
            this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
            this.navCtrl.navigateBack('/foodcombodetail');
        }
        this._foodService.itemActiveFoodTab.emit(1);
    }
    changeplace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this._foodService.listItemsCart.length > 0) {
                this._foodService.listItemsCart.forEach(element => {
                    var itemPrice = 0;
                    itemPrice += (element.focategory.pricePerDay * element.focategory.dayofweek);
                    if (element.itemExtraOther && element.itemExtraOther.length > 0) {
                        element.itemExtraOther.forEach(elementother => {
                            itemPrice += this.gf.convertStringToNumber(elementother.price * element.focategory.dayofweek);
                        });
                    }
                    if (element.itemExtraWater && element.itemExtraWater.length > 0) {
                        element.itemExtraWater.forEach(elementwater => {
                            itemPrice += this.gf.convertStringToNumber(elementwater.price * element.focategory.dayofweek);
                        });
                    }
                    element.itemPrice = itemPrice;
                });
            }
            this._foodService.totalPrice = this.totalPrice;
            this._foodService.ischeckchangeplace = "0";
            const modal = yield this.modalCtrl.create({
                component: _foodplaceother_foodplaceother_page__WEBPACK_IMPORTED_MODULE_1__["FoodplaceotherPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.navCtrl.navigateForward(['/app/tabs/tab1']);
            });
        });
    }
    setCacheCart() {
        this.storage.get("listItemsCart").then((data) => {
            if (data) {
                this.storage.remove("listItemsCart").then(() => {
                    this.storage.set("listItemsCart", this.listItems);
                });
            }
            else {
                this.storage.set("listItemsCart", this.listItems);
            }
        });
    }
    next() {
        if (this.checkpaymentTime()) {
            if (this._foodService.listItemsCart.length == 0) {
                this.navCtrl.back();
            }
            return;
        }
        if (this._foodService.listItemsCart.length > 0) {
            this.setCacheCart();
            this._foodService.listItemsCart.forEach(element => {
                var itemPrice = 0;
                itemPrice += (element.focategory.pricePerDay * element.focategory.dayofweek);
                if (element.itemExtraOther && element.itemExtraOther.length > 0) {
                    element.itemExtraOther.forEach(elementother => {
                        itemPrice += this.gf.convertStringToNumber(elementother.price * element.focategory.dayofweek);
                    });
                }
                if (element.itemExtraWater && element.itemExtraWater.length > 0) {
                    element.itemExtraWater.forEach(elementwater => {
                        itemPrice += this.gf.convertStringToNumber(elementwater.price * element.focategory.dayofweek);
                    });
                }
                element.itemPrice = itemPrice;
            });
        }
        this._foodService.totalPrice = this.totalPrice;
        this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
        this.navCtrl.navigateForward('/foodadddetail');
    }
    deleteItem(index) {
        if (this.listItems.length > 0) {
            this.listItems.splice(index, 1);
            if (this._foodService.countcart > 0) {
                this._foodService.countcart -= 1;
            }
            else {
                this._foodService.countcart = 0;
            }
            this.setCacheCart();
            this.reTotalAll();
            this._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
        }
    }
    minusItem(item) {
        var se = this;
        if (item.isDinner && item.quantity == 2) {
            item.quantity = 2;
            se.gf.showToastWarning("Số lượng tối thiểu cần đặt là 2");
        }
        else {
            se.zone.run(() => {
                if (item.quantity == 1) {
                    item.quantity = 1;
                }
                else {
                    item.quantity -= 1;
                    se.callTotalPriceAll(false, item);
                }
            });
        }
    }
    reTotalAll() {
        var total = 0;
        this.listItems.forEach(element => {
            if (element.itemExtraOther && element.itemExtraOther.length > 0) {
                element.itemExtraOther.forEach(extra => {
                    total = total + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
                });
            }
            if (element.itemExtraWater && element.itemExtraWater.length > 0) {
                element.itemExtraWater.forEach(extra => {
                    total = total + (this.gf.convertStringToNumber(extra.price) * element.quantity * element.focategory.dayofweek);
                });
            }
            total += ((element.focategory.pricePerDay * element.focategory.dayofweek) * element.quantity);
        });
        this.zone.run(() => {
            this.totalPrice = total;
            this.totalPriceDisplay = this.gf.convertNumberToString(total);
        });
    }
    callTotalPriceAll(isPlus, item) {
        var se = this;
        if (se._foodService.listItemsCart && se._foodService.listItemsCart.length > 0) {
            let totalPriceItem = 0;
            totalPriceItem = (item.focategory.pricePerDay * item.focategory.dayofweek);
            if (item.itemExtraOther && item.itemExtraOther.length > 0) {
                item.itemExtraOther.forEach(element => {
                    totalPriceItem = totalPriceItem + (se.gf.convertStringToNumber(element.price) * item.focategory.dayofweek);
                });
            }
            if (item.itemExtraWater && item.itemExtraWater.length > 0) {
                item.itemExtraWater.forEach(element => {
                    totalPriceItem = totalPriceItem + (se.gf.convertStringToNumber(element.price) * item.focategory.dayofweek);
                });
            }
            se.zone.run(() => {
                if (isPlus) {
                    se.totalPrice = se.totalPrice + totalPriceItem;
                }
                else {
                    se.totalPrice = se.totalPrice - totalPriceItem;
                }
                se.totalPriceDisplay = se.gf.convertNumberToString(se.totalPrice);
            });
        }
    }
    plusItem(item) {
        var se = this;
        item.quantity += 1;
        se.callTotalPriceAll(true, item);
    }
    goToHomeFood() {
        var se = this;
        se.valueGlobal.backValue = "foodbill";
        se._foodService.itemCartChange.emit(this._foodService.listItemsCart.length);
        se.navCtrl.navigateBack("/homefood");
    }
    checkpaymentTime() {
        if (this._foodService.listItemsCart.length > 0) {
            for (let i = 0; i < this._foodService.listItemsCart.length; i++) {
                const element = this._foodService.listItemsCart[i];
                var arr = element.applyFor.split('|');
                for (let j = 0; j < arr.length - 2; j++) {
                    if (arr[j] == '1') {
                        if (j == 0) {
                            var ischeckTime = this.checkItemMenuEnable(element, 2);
                            if (ischeckTime) {
                                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                                this.deleteItem(i);
                                return true;
                            }
                        }
                        else if (j == 1) {
                            var ischeckTime = this.checkItemMenuEnable(element, 3);
                            if (ischeckTime) {
                                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                                this.deleteItem(i);
                                return true;
                            }
                        }
                        else if (j == 2) {
                            var ischeckTime = this.checkItemMenuEnable(element, 4);
                            if (ischeckTime) {
                                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                                this.deleteItem(i);
                                return true;
                            }
                        }
                        else if (j == 3) {
                            var ischeckTime = this.checkItemMenuEnable(element, 5);
                            if (ischeckTime) {
                                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                                this.deleteItem(i);
                                return true;
                            }
                        }
                        else if (j == 4) {
                            var ischeckTime = this.checkItemMenuEnable(element, 6);
                            if (ischeckTime) {
                                alert("Giỏ hàng tồn tại ngày không thoả điều kiện giao hàng, vui lòng chọn lại menu!");
                                this.deleteItem(i);
                                return true;
                            }
                        }
                    }
                }
            }
        }
        return false;
    }
    checkItemMenuEnable(itemcombo, dayofweek) {
        let today = new Date();
        let startdate = moment__WEBPACK_IMPORTED_MODULE_9__(itemcombo.startDate).add(dayofweek - 2, 'days');
        let difftime = moment__WEBPACK_IMPORTED_MODULE_9__(startdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(today), 'hours');
        let diffday = moment__WEBPACK_IMPORTED_MODULE_9__(startdate).diff(moment__WEBPACK_IMPORTED_MODULE_9__(moment__WEBPACK_IMPORTED_MODULE_9__(today).format('YYYY-MM-DD')), 'days');
        return (diffday == 0 || difftime <= 11) ? true : false;
    }
};
FoodbillPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foodbill',
        template: __webpack_require__(/*! ./foodbill.page.html */ "./src/app/foodbill/foodbill.page.html"),
        styles: [__webpack_require__(/*! ./foodbill.page.scss */ "./src/app/foodbill/foodbill.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_4__["foodService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["ValueGlobal"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_6__["SearchHotel"]])
], FoodbillPage);



/***/ })

}]);
//# sourceMappingURL=foodbill-foodbill-module.js.map