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

module.exports = ".d-flex {\n  display: flex;\n  position: relative;\n}\n\n.div-position {\n  width: 100%;\n  position: relative;\n}\n\n.div-plus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-top-bottom {\n  border-top: solid 1px #bdbdbd;\n  border-bottom: solid 1px #bdbdbd;\n  width: 50px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-minus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 3px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.col-img-hotellist {\n  margin-top: 4px;\n  height: 104px;\n  min-width: 104px;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n  margin-top: 12px;\n  margin-bottom: 20px;\n  display: flex;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 4px;\n  width: 104px;\n  height: 104px;\n}\n\n.text-price {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.text-d {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.div-foodname {\n  min-height: 52px;\n}\n\n.text-delete {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  margin: 0px;\n}\n\n.div-delete {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n  margin-bottom: 30px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.cls-district {\n  font-weight: bold;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n.cls-text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-total {\n  margin-top: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-total-1 {\n  position: absolute;\n  top: 10px;\n}\n\n.div-total-2 {\n  position: absolute;\n  right: 18px;\n  top: -5px;\n}\n\n.text-total {\n  line-height: 27px;\n  font-size: 32px;\n  letter-spacing: -0.92px;\n  color: #26bed6;\n  font-weight: 600;\n}\n\n.text-sub-total {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text-total-d {\n  font-size: 16px;\n}\n\n.text-empty {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 14px;\n}\n\n.m-16 {\n  margin: 16px 0;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n}\n\n.button-outline {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n  margin-right: 0;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  background: #fff;\n}\n\n.div-star {\n  padding-left: 8px;\n  padding-top: 2px;\n}\n\n.div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px 16px -16px;\n}\n\n.float-promo {\n  padding-left: 10px !important;\n}\n\n.text-title {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n  margin-left: 16px;\n}\n\n.div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n  margin-bottom: 16px;\n  margin-right: -16px;\n}\n\n.div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 312px;\n  padding-left: 16px;\n}\n\n.div-wrap-slide .div-slide-item:first-child {\n  margin-left: 0px !important;\n}\n\n.div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n  padding-right: 32px;\n}\n\n@media (min-width: 768px) and (max-width: 1600px) {\n  .row-item-hotellist {\n    height: 164px !important;\n  }\n\n  .col-img-hotellist {\n    height: 164px !important;\n    min-width: 164px !important;\n  }\n\n  .img-radius {\n    width: 164px !important;\n    height: 164px !important;\n  }\n}\n\n.div-dist {\n  margin-top: 10px;\n}\n\n.namecity {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kYmlsbC9mb29kYmlsbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RiaWxsL2Zvb2RiaWxsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENBO0VBRUksV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUVJLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFFSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQ0dKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSUo7O0FERkU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDTUo7O0FESkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDTUo7O0FESkE7RUFFRSxrQkFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDTUo7O0FESEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpBO0VBRUksZUFBQTtBQ01KOztBREpBO0VBRUksaUJBQUE7QUNNSjs7QURKQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7QUNNSjs7QURKQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURKQTtFQUVJLGdCQUFBO0FDTUo7O0FESkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFFSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBRUksa0JBQUE7RUFDQSxTQUFBO0FDTUo7O0FESkE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDTUo7O0FESkE7RUFFSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNPSjs7QURMQTtFQUVJLGVBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUUo7O0FETkE7RUFDSSxjQUFBO0FDU0o7O0FETkE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1FKOztBRExBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDT0o7O0FETEE7RUFDSSxtQ0FBQTtFQUNBLGdCQUFBO0FDUUo7O0FETkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQ1VKOztBRFJBO0VBQ0ksNkJBQUE7QUNXSjs7QURUQTtFQUVVLGdCQUFBO0VBQ0EsZUFBQTtBQ1dWOztBRFRRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ1laOztBRFZBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ2FKOztBRFhRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNhWjs7QURUUTtFQUNJLDJCQUFBO0FDV1o7O0FEVFE7RUFDSSw0QkFBQTtFQUNBLG1CQUFBO0FDV1o7O0FETEE7RUFDUTtJQUNJLHdCQUFBO0VDUVY7O0VETE07SUFDSSx3QkFBQTtJQUNBLDJCQUFBO0VDUVY7O0VETE07SUFDSSx1QkFBQTtJQUNBLHdCQUFBO0VDUVY7QUFDRjs7QUROSTtFQUVBLGdCQUFBO0FDT0o7O0FETEE7RUFFRSxpQkFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvZm9vZGJpbGwvZm9vZGJpbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdi1wb3NpdGlvblxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGl2LXBsdXNcclxue1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4OyAgICAgICAgXHJcbn1cclxuLmRpdi10b3AtYm90dG9tXHJcbntcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDZweDsgICAgICAgIFxyXG59XHJcbi5kaXYtbWludXNcclxue1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4OyAgICAgICAgXHJcbn1cclxuLmgtbGluZXtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG4gIC5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICB9XHJcbiAgLnJvdy1pdGVtLWhvdGVsbGlzdC1za3tcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOjE2cHg7XHJcbiAgfVxyXG4gIC5jb2wtaW1nLWhvdGVsbGlzdHtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICBtaW4td2lkdGg6IDEwNHB4O1xyXG4gIH1cclxuICAucm93LWl0ZW0taG90ZWxsaXN0e1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtbm90ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5pbWctcmFkaXVzXHJcbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB3aWR0aDogMTA0cHggO1xyXG4gICAgaGVpZ2h0OiAxMDRweCA7XHJcbn1cclxuLnRleHQtcHJpY2Vcclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi50ZXh0LWRcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi5kaXYtZm9vZG5hbWVcclxue1xyXG4gICAgbWluLWhlaWdodDogNTJweDtcclxufVxyXG4udGV4dC1kZWxldGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uZGl2LWRlbGV0ZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxufVxyXG4udGV4dC1jb250ZW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZGl2LWNvbnRlbnRcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4ubXQ1XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4uY2xzLWRpc3RyaWN0XHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kaXYtYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG4udGV4dC15Y2tcclxue1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4XHJcbn1cclxuLmRpdi15Y2tcclxue1xyXG4gICAgcGFkZGluZzogOXB4IDBweDtcclxufVxyXG4uY2xzLWltZ1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbi5jbHMtdGV4dC10b3RhbFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmRpdi10b3RhbFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdi10b3RhbC0xXHJcbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxufVxyXG4uZGl2LXRvdGFsLTJcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE4cHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbn1cclxuLnRleHQtdG90YWxcclxue1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuOTJweDtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4udGV4dC1zdWItdG90YWx7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG4udGV4dC10b3RhbC1kXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4udGV4dC1lbXB0eXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuLm0tMTZ7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxufVxyXG5cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG59IFxyXG5cclxuLmJ1dHRvbi1vdXRsaW5lXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn0gXHJcbi5jbHMtaW9uLWZvb3RlciB7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmRpdi1zdGFye1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcbi5kaXYtc3BsaXR7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW46IDE2cHggLTE2cHggMTZweCAtMTZweDtcclxufVxyXG4uZmxvYXQtcHJvbW97XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG4udGV4dC10aXRsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tLWJvdHRvbS0xNntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4uZGl2LXdyYXAtc2xpZGV7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcblxyXG4gICAgICAgIC5kaXYtc2xpZGUtaXRlbXtcclxuICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMzEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LXNsaWRlLWl0ZW06Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdi1zbGlkZS1pdGVtOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICBcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpICB7XHJcbiAgICAgICAgLnJvdy1pdGVtLWhvdGVsbGlzdHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbC1pbWctaG90ZWxsaXN0IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nLXJhZGl1cyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi1kaXN0XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuLm5hbWVjaXR5XHJcbntcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGl2LXBvc2l0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi1wbHVzIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uZGl2LXRvcC1ib3R0b20ge1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiZGJkYmQ7XG4gIHdpZHRoOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDZweDtcbn1cblxuLmRpdi1taW51cyB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiZGJkYmQ7XG4gIHdpZHRoOiAzNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweDtcbn1cblxuLmgtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW46IDAgMTZweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY29sLWRlc2NyaXB0aW9uLWhvdGVsbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsbGlzdC1zayB7XG4gIHBhZGRpbmc6IDhweDtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5jb2wtaW1nLWhvdGVsbGlzdCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWluLXdpZHRoOiAxMDRweDtcbn1cblxuLnJvdy1pdGVtLWhvdGVsbGlzdCB7XG4gIG1hcmdpbjogMTZweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG59XG5cbi5pbWctcmFkaXVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLnRleHQtcHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnRleHQtZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4uZGl2LWZvb2RuYW1lIHtcbiAgbWluLWhlaWdodDogNTJweDtcbn1cblxuLnRleHQtZGVsZXRlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5kaXYtZGVsZXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDBweDtcbn1cblxuLnRleHQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tdDUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jbHMtZGlzdHJpY3Qge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnRleHQteWNrIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xufVxuXG4uZGl2LXljayB7XG4gIHBhZGRpbmc6IDlweCAwcHg7XG59XG5cbi5jbHMtaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLmNscy10ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi10b3RhbCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi10b3RhbC0xIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG59XG5cbi5kaXYtdG90YWwtMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE4cHg7XG4gIHRvcDogLTVweDtcbn1cblxuLnRleHQtdG90YWwge1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuOTJweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50ZXh0LXRvdGFsLWQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi50ZXh0LWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tLTE2IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uYnV0dG9uLW91dGxpbmUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi5jbHMtaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZGl2LXN0YXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHggMTZweCAtMTZweDtcbn1cblxuLmZsb2F0LXByb21vIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubS1ib3R0b20tMTYge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLmRpdi13cmFwLXNsaWRlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4uZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMzEycHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW06Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXdyYXAtc2xpZGUgLmRpdi1zbGlkZS1pdGVtOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiAxNjAwcHgpIHtcbiAgLnJvdy1pdGVtLWhvdGVsbGlzdCB7XG4gICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNvbC1pbWctaG90ZWxsaXN0IHtcbiAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAxNjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmltZy1yYWRpdXMge1xuICAgIHdpZHRoOiAxNjRweCAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcbiAgfVxufVxuLmRpdi1kaXN0IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm5hbWVjaXR5IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"

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