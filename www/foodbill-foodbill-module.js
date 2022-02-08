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

module.exports = "<ion-header no-border >\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Giỏ hàng</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content >\n  <div *ngIf=\"listItems && listItems.length >0\">\n      <div *ngFor=\"let item of listItems; let idx = index\">\n          <div class=\"row-item-hotellist\" >\n             <!-- left image region-->\n          <div class=\"col-img-hotellist\">\n              <img class=\"img-radius\" [src]=\"item.image164\" style=\"position:relative\">\n            </div>\n            <!-- right content region -->\n            <div class=\"col-description-hotellist\">\n              <div>\n                <div class=\"div-foodname\">\n                  <div class=\" d-flex\">\n                      <div class=\"text-food\" *ngIf=\"item && item.focategory\">{{item.focategory.name}}</div>\n                      <div class=\"div-star\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n                        <img *ngIf=\"item && item.focategory && item.focategory.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n                      </div>\n                  </div>\n                  <p class=\"text-note\" *ngIf=\"item.extraDisplay else weekdisplayonly\">{{item.weekdisplay}} · {{item.extraDisplay}}</p>\n                  <ng-template #weekdisplayonly>\n                    <p class=\"text-note\">{{item.weekdisplay}}</p>\n                  </ng-template>\n                </div>\n              </div>\n              <!-- price -->\n              <div *ngIf=\"item && item.focategory\">\n                <ion-label class=\"text-price\">\n                  <span class=\"text-d\">{{item.totalPriceItemDisplay}} đ</span>\n                </ion-label>\n              </div>\n              <!-- plus or minus -->\n              <div class=\"div-position\">\n                <div class=\"d-flex\">\n                  <div class=\"div-minus\" (click)=\"minusItem(item)\">\n                    <img src=\"./assets/minus.svg\">\n                  </div>\n                  <div class=\"div-top-bottom\" *ngIf=\"item && item.quantity\">\n                    <ion-label>{{item.quantity}}</ion-label>\n                  </div>\n                  <div class=\"div-plus\" (click)=\"plusItem(item)\">\n                    <img src=\"./assets/plus.svg\">\n                  </div>\n                </div>\n                <p class=\"text-delete\" (click)=\"deleteItem(idx)\">\n                  Xóa\n                </p>\n              </div>\n            </div>\n          </div>\n          <div>\n              <p class=\"h-line\"></p>\n          </div>\n        </div>\n       \n      <div class=\"div-background\">\n        <div class=\"div-content\">\n          <div>\n            <ion-label class=\"text-content\">\n             - Giao hàng miễn phí từ bữa trưa (11h30 - 12h15), bữa tối (16h30 - 17h30) hàng ngày tại các khu vực:\n              <!-- - Giao hàng miễn phí khu vực quận 1, 3, Phú Nhuận, Tân Bình, Bình Thạnh. -->\n              <!-- Hiện tại iVIVU chỉ giao tại <span class=\"cls-district\">Quận 1, Quận 3, Quận 10, Phú Nhuận, Tân Bình, Bình Thạnh</span> -->\n            </ion-label>\n            <div class=\"div-dist\" *ngFor=\"let item of District\">\n              <ion-label class=\"text-content\" >\n                <span class=\"namecity\">+ {{item.namecity}}</span>: {{item.namedist}}\n              </ion-label>\n            </div>\n          </div>\n          <div class=\"mt5\">\n            <ion-label class=\"text-content\">\n              - Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách trong thời gian sớm nhất. <span (click)=\"changeplace()\" class=\"text-yck\"> Yêu cầu giao khu vực khác<img class=\"cls-img\" src=\"./assets/imgs/vector.svg\"></span>\n            </ion-label>\n          </div>\n         \n        </div>\n      </div>\n  </div>\n  <div *ngIf=\"listItems && listItems.length ==0\">\n      <div class=\"text-empty\">\n        <div><img src=\"../../assets/ic_food/cart.svg\"></div>\n        <div class=\"m-16\">Bạn chưa có sản phẩm nào trong giỏ hàng. Nhanh tay chọn ngay thực đơn hấp dẫn bên dưới</div>\n        <div><button class=\"button button2\" (click)=\"goToHomeFood()\">Xem thêm thực đơn</button></div>\n      </div>\n  \n      <div class=\"div-split\"></div>\n      <div class=\"text-title m-bottom-16\">Bữa trưa được yêu thích</div>\n      <div class=\"div-wrap-slide\">\n          <div class=\"div-slide-item\" *ngFor=\"let item of listItemsFood; let idx = index\">\n                <app-fooditemlike [item]=\"item\"></app-fooditemlike>\n          </div>\n      </div>\n\n      <!-- <div class=\"div-split\"></div>\n      <div class=\"text-title m-bottom-16\">Bữa tối được yêu thích</div>\n      <div class=\"div-wrap-slide slide-dinner\">\n          <div class=\"div-slide-item\" *ngFor=\"let item of listItemsDinnerFood; let idx = index\">\n            <app-fooddinneritemlike [item]=\"item\"></app-fooddinneritemlike>\n          </div>\n      </div> -->\n    </div> \n</ion-content>\n<ion-footer class=\"cls-ion-footer\" no-border *ngIf=\"listItems && listItems.length >0\">\n  <div class=\"div-total\">\n    <div >\n      <ion-label class=\"cls-text-total\">\n        Thành tiền:\n      </ion-label>\n    </div>\n    <div class=\"div-total-2\"> \n        <ion-label class=\"text-total\">\n          <span class=\"text-total-d\"></span>{{totalPriceDisplay}}<span class=\"text-sub-total\"> đ/tuần</span>\n        </ion-label>\n  \n    </div>\n  </div>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\"  ion-button round outline class=\"button button2\">Tiến hành đặt hàng</button>\n  </div>\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/foodbill/foodbill.page.scss":
/*!*********************************************!*\
  !*** ./src/app/foodbill/foodbill.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n  position: relative;\n}\n\n.div-position {\n  width: 100%;\n  position: relative;\n}\n\n.div-plus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-top-bottom {\n  border-top: solid 1px #bdbdbd;\n  border-bottom: solid 1px #bdbdbd;\n  width: 50px;\n  text-align: center;\n  padding: 6px;\n}\n\n.div-minus {\n  border: solid 1px #bdbdbd;\n  width: 35px;\n  text-align: center;\n  padding: 3px;\n}\n\n.h-line {\n  border-bottom: solid 1px #cdcdcd;\n  margin: 0 16px;\n  opacity: 0.5;\n}\n\n.col-description-hotellist {\n  width: 100%;\n  padding-left: 8px;\n}\n\n.row-item-hotellist-sk {\n  padding: 8px;\n  padding-top: 16px;\n}\n\n.col-img-hotellist {\n  margin-top: 4px;\n  height: 104px;\n  min-width: 104px;\n}\n\n.row-item-hotellist {\n  margin: 16px;\n  height: 104px;\n  margin-top: 12px;\n  margin-bottom: 20px;\n  display: flex;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.img-radius {\n  position: relative;\n  border-radius: 4px;\n  width: 104px;\n  height: 104px;\n}\n\n.text-price {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.text-d {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #333333;\n}\n\n.div-foodname {\n  min-height: 52px;\n}\n\n.text-delete {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  color: #333333;\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n  margin: 0px;\n}\n\n.div-delete {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n  margin-bottom: 30px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.cls-district {\n  font-weight: bold;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n.cls-text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-total {\n  margin-top: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  position: relative;\n}\n\n.div-total-1 {\n  position: absolute;\n  top: 10px;\n}\n\n.div-total-2 {\n  position: absolute;\n  right: 18px;\n  top: -5px;\n}\n\n.text-total {\n  line-height: 27px;\n  font-size: 32px;\n  letter-spacing: -0.92px;\n  color: #26bed6;\n  font-weight: 600;\n}\n\n.text-sub-total {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.text-total-d {\n  font-size: 16px;\n}\n\n.text-empty {\n  text-align: center;\n  margin-top: 40px;\n  font-size: 14px;\n}\n\n.m-16 {\n  margin: 16px 0;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n}\n\n.button-outline {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px;\n  margin-right: 0;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  background: #fff;\n}\n\n.div-star {\n  padding-left: 8px;\n  padding-top: 2px;\n}\n\n.div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px 16px -16px;\n}\n\n.float-promo {\n  padding-left: 10px !important;\n}\n\n.text-title {\n  font-weight: 600;\n  font-size: 18px;\n}\n\n.m-bottom-16 {\n  margin-bottom: 16px;\n  margin-left: 16px;\n}\n\n.div-wrap-slide {\n  overflow-x: auto;\n  overflow-y: hidden;\n  position: relative;\n  margin-bottom: 16px;\n  margin-right: -16px;\n}\n\n.div-wrap-slide .div-slide-item {\n  display: table-cell;\n  margin-left: 8px;\n  align-self: center;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 312px;\n  padding-left: 16px;\n}\n\n.div-wrap-slide .div-slide-item:first-child {\n  margin-left: 0px !important;\n}\n\n.div-wrap-slide .div-slide-item:last-child {\n  margin-right: 0px !important;\n  padding-right: 32px;\n}\n\n@media (min-width: 768px) and (max-width: 1600px) {\n  .row-item-hotellist {\n    height: 164px !important;\n  }\n\n  .col-img-hotellist {\n    height: 164px !important;\n    min-width: 164px !important;\n  }\n\n  .img-radius {\n    width: 164px !important;\n    height: 164px !important;\n  }\n}\n\n.div-dist {\n  margin-top: 10px;\n}\n\n.namecity {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RiaWxsL2Zvb2RiaWxsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGJpbGwvZm9vZGJpbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUksNkJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUVJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEREU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNNSjs7QURKQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNNSjs7QURKQTtFQUVFLGtCQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ01KOztBREpBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFFSSxnQkFBQTtBQ01KOztBREpBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNNSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0FDTUo7O0FESkE7RUFFSSxpQkFBQTtBQ01KOztBREpBO0VBRUkseUJBQUE7RUFDQSxnQkFBQTtBQ01KOztBREpBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFFSSxnQkFBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURKQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFFSSxrQkFBQTtFQUNBLFNBQUE7QUNNSjs7QURKQTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNNSjs7QURKQTtFQUVJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExBO0VBRUksZUFBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNRSjs7QUROQTtFQUNJLGNBQUE7QUNTSjs7QUROQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDUUo7O0FETEE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNPSjs7QURMQTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7QUNRSjs7QUROQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNTSjs7QURQQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDVUo7O0FEUkE7RUFDSSw2QkFBQTtBQ1dKOztBRFRBO0VBRVUsZ0JBQUE7RUFDQSxlQUFBO0FDV1Y7O0FEVFE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0FDWVo7O0FEVkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDYUo7O0FEWFE7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2FaOztBRFRRO0VBQ0ksMkJBQUE7QUNXWjs7QURUUTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7QUNXWjs7QURMQTtFQUNRO0lBQ0ksd0JBQUE7RUNRVjs7RURMTTtJQUNJLHdCQUFBO0lBQ0EsMkJBQUE7RUNRVjs7RURMTTtJQUNJLHVCQUFBO0lBQ0Esd0JBQUE7RUNRVjtBQUNGOztBRE5JO0VBRUEsZ0JBQUE7QUNPSjs7QURMQTtFQUVFLGlCQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC9mb29kYmlsbC9mb29kYmlsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGl2LXBvc2l0aW9uXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kaXYtcGx1c1xyXG57XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA2cHg7ICAgICAgICBcclxufVxyXG4uZGl2LXRvcC1ib3R0b21cclxue1xyXG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICNiZGJkYmQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2JkYmRiZDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNnB4OyAgICAgICAgXHJcbn1cclxuLmRpdi1taW51c1xyXG57XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHg7ICAgICAgICBcclxufVxyXG4uaC1saW5le1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICBtYXJnaW46IDAgMTZweDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1ob3RlbGxpc3R7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gIH1cclxuICAucm93LWl0ZW0taG90ZWxsaXN0LXNre1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgcGFkZGluZy10b3A6MTZweDtcclxuICB9XHJcbiAgLmNvbC1pbWctaG90ZWxsaXN0e1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIG1pbi13aWR0aDogMTA0cHg7XHJcbiAgfVxyXG4gIC5yb3ctaXRlbS1ob3RlbGxpc3R7XHJcbiAgICBtYXJnaW46IDE2cHg7XHJcbiAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dC1ub3RlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42NztcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLmltZy1yYWRpdXNcclxue1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHdpZHRoOiAxMDRweCA7XHJcbiAgICBoZWlnaHQ6IDEwNHB4IDtcclxufVxyXG4udGV4dC1wcmljZVxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnRleHQtZFxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLmRpdi1mb29kbmFtZVxyXG57XHJcbiAgICBtaW4taGVpZ2h0OiA1MnB4O1xyXG59XHJcbi50ZXh0LWRlbGV0ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5kaXYtZGVsZXRle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnRcclxue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5kaXYtY29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi5tdDVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5jbHMtZGlzdHJpY3Rcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmRpdi1iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcbi50ZXh0LXlja1xyXG57XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHhcclxufVxyXG4uZGl2LXlja1xyXG57XHJcbiAgICBwYWRkaW5nOiA5cHggMHB4O1xyXG59XHJcbi5jbHMtaW1nXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLmNscy10ZXh0LXRvdGFsXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZGl2LXRvdGFsXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGl2LXRvdGFsLTFcclxue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG59XHJcbi5kaXYtdG90YWwtMlxyXG57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMThweDtcclxuICAgIHRvcDogLTVweDtcclxufVxyXG4udGV4dC10b3RhbFxyXG57XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC45MnB4O1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0LXN1Yi10b3RhbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjMjIyMjIyO1xyXG59XHJcbi50ZXh0LXRvdGFsLWRcclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi50ZXh0LWVtcHR5e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ubS0xNntcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG59XHJcblxyXG4uYnV0dG9uMlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbn0gXHJcblxyXG4uYnV0dG9uLW91dGxpbmVcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufSBcclxuLmNscy1pb24tZm9vdGVyIHtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uZGl2LXN0YXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbn1cclxuLmRpdi1zcGxpdHtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1hcmdpbjogMTZweCAtMTZweCAxNnB4IC0xNnB4O1xyXG59XHJcbi5mbG9hdC1wcm9tb3tcclxuICAgIHBhZGRpbmctbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LXRpdGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm0tYm90dG9tLTE2e1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICB9XHJcbi5kaXYtd3JhcC1zbGlkZXtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuXHJcbiAgICAgICAgLmRpdi1zbGlkZS1pdGVte1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYtc2xpZGUtaXRlbTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2LXNsaWRlLWl0ZW06bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIFxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDo3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkgIHtcclxuICAgICAgICAucm93LWl0ZW0taG90ZWxsaXN0e1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29sLWltZy1ob3RlbGxpc3Qge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTY0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWctcmFkaXVzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGl2LWRpc3Rcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4ubmFtZWNpdHlcclxue1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtcG9zaXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGl2LXBsdXMge1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICB3aWR0aDogMzVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5kaXYtdG9wLWJvdHRvbSB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCAjYmRiZGJkO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgd2lkdGg6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNnB4O1xufVxuXG4uZGl2LW1pbnVzIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgd2lkdGg6IDM1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4uaC1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5jb2wtZGVzY3JpcHRpb24taG90ZWxsaXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuXG4ucm93LWl0ZW0taG90ZWxsaXN0LXNrIHtcbiAgcGFkZGluZzogOHB4O1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cblxuLmNvbC1pbWctaG90ZWxsaXN0IHtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtaW4td2lkdGg6IDEwNHB4O1xufVxuXG4ucm93LWl0ZW0taG90ZWxsaXN0IHtcbiAgbWFyZ2luOiAxNnB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltZy1yYWRpdXMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4udGV4dC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udGV4dC1kIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi5kaXYtZm9vZG5hbWUge1xuICBtaW4taGVpZ2h0OiA1MnB4O1xufVxuXG4udGV4dC1kZWxldGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmRpdi1kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4udGV4dC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLm10NSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmNscy1kaXN0cmljdCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udGV4dC15Y2sge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG59XG5cbi5kaXYteWNrIHtcbiAgcGFkZGluZzogOXB4IDBweDtcbn1cblxuLmNscy1pbWcge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4uY2xzLXRleHQtdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LXRvdGFsIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGl2LXRvdGFsLTEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbn1cblxuLmRpdi10b3RhbC0yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMThweDtcbiAgdG9wOiAtNXB4O1xufVxuXG4udGV4dC10b3RhbCB7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDMycHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC45MnB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtdG90YWwtZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnRleHQtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm0tMTYge1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiA4cHg7XG59XG5cbi5idXR0b24tb3V0bGluZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmNscy1pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5kaXYtc3RhciB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweCAxNnB4IC0xNnB4O1xufVxuXG4uZmxvYXQtcHJvbW8ge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5tLWJvdHRvbS0xNiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uZGl2LXdyYXAtc2xpZGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW0ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAzMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmRpdi13cmFwLXNsaWRlIC5kaXYtc2xpZGUtaXRlbTpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi5kaXYtd3JhcC1zbGlkZSAuZGl2LXNsaWRlLWl0ZW06bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xuICAucm93LWl0ZW0taG90ZWxsaXN0IHtcbiAgICBoZWlnaHQ6IDE2NHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY29sLWltZy1ob3RlbGxpc3Qge1xuICAgIGhlaWdodDogMTY0cHggIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDE2NHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW1nLXJhZGl1cyB7XG4gICAgd2lkdGg6IDE2NHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNjRweCAhaW1wb3J0YW50O1xuICB9XG59XG4uZGl2LWRpc3Qge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubmFtZWNpdHkge1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"

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