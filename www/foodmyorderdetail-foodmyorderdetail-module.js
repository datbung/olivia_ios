(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodmyorderdetail-foodmyorderdetail-module"],{

/***/ "./src/app/foodmyorderdetail/foodmyorderdetail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/foodmyorderdetail/foodmyorderdetail.module.ts ***!
  \***************************************************************/
/*! exports provided: FoodMyOrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMyOrderDetailPageModule", function() { return FoodMyOrderDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodmyorderdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodmyorderdetail.page */ "./src/app/foodmyorderdetail/foodmyorderdetail.page.ts");







const routes = [
    {
        path: '',
        component: _foodmyorderdetail_page__WEBPACK_IMPORTED_MODULE_6__["FoodMyOrderDetailPage"]
    }
];
let FoodMyOrderDetailPageModule = class FoodMyOrderDetailPageModule {
};
FoodMyOrderDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodmyorderdetail_page__WEBPACK_IMPORTED_MODULE_6__["FoodMyOrderDetailPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodMyOrderDetailPageModule);



/***/ }),

/***/ "./src/app/foodmyorderdetail/foodmyorderdetail.page.html":
/*!***************************************************************!*\
  !*** ./src/app/foodmyorderdetail/foodmyorderdetail.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"foodmyorderdetail-header\">\r\n    <ion-toolbar class=\"toolbar-header\">\r\n          <ion-row>\r\n            <ion-col class=\"col-header-back\">\r\n              <div style=\"align-self: center\">\r\n                <div class=\"div-goback\" (click)=\"goback()\">\r\n                  <img class=\"img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\r\n                </div>\r\n                <div class=\"div-title\">\r\n                  <label class=\"text-title\">{{ order.bookingCode }}</label>\r\n              </div>\r\n              <div class=\"div-subtitle\">\r\n                <div *ngIf=\"!order.isOver\">\r\n                  <div *ngIf=\"order.status == 1 \">Yêu cầu đặt</div>\r\n                  <div *ngIf=\"order.status == 2 \">Chờ thanh toán</div>\r\n                  <div *ngIf=\"order.status == 3 \">Đã thanh toán</div>\r\n                  <div *ngIf=\"order.status == 4 \">Hủy</div>\r\n                </div>\r\n                <div *ngIf=\"order.isOver\">Hoàn tất</div>\r\n              </div>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n    <div class=\"div-foodmyorderdetail-content\">\r\n        <div class=\" d-flex\">\r\n            <div class=\"text-bkg\"><ion-label class=\"label-bkg\">Mã đặt:</ion-label></div>\r\n            <div class=\"text-bkgcode\">{{ order.bookingCode }}</div>\r\n            <div class=\"text-status\">\r\n              <div *ngIf=\"order.status == 2 else other\" class=\"text-right\">Chờ thanh toán</div>\r\n              <ng-template #other>\r\n                    <div *ngIf=\"order.status == 4 else paymented\" class=\"text-right\">Hủy</div>\r\n                    <ng-template #paymented>\r\n                          <div class=\"text-right\" *ngIf=\"order.status == 3 else request\">Đã thanh toán</div>\r\n                          <ng-template request><div class=\"text-right\">Yêu cầu đặt</div></ng-template>\r\n                        </ng-template>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n        <div class=\"div-line-bottom\"></div>\r\n\r\n        <div *ngIf=\"!order.isOver\" [ngClass]=\"detail.isDinner ? 'p-bottom-16' : ''\">\r\n            <div class=\"text-menu\">{{order.nameDisplay}}</div>\r\n            <div class=\"text-menu-title\" *ngIf=\"detail.isDinner\">{{detail.weekDisplay}}</div>\r\n            <div class=\"text-menu-name\" *ngIf=\"detail.isDinner\">{{detail.extraDisplay}}</div>\r\n\r\n            <div class=\"div-order-statusbar\">\r\n                <img src=\"../../assets/ic_food/status_1.svg\" *ngIf=\"order.statusOrderDetail == 1\">\r\n                <img src=\"../../assets/ic_food/status_2.svg\" *ngIf=\"order.statusOrderDetail == 2\">\r\n                <img src=\"../../assets/ic_food/status_3.svg\" *ngIf=\"order.statusOrderDetail == 3\">\r\n                <img src=\"../../assets/ic_food/status_4.svg\" *ngIf=\"order.statusOrderDetail == 4\">\r\n            </div>\r\n    \r\n            <div class=\"div-list-item\">\r\n                <div class=\"text-title\" *ngIf=\"order.statusOrderDetail != 1 else nextweektitle\">\r\n                  <div *ngIf=\"!detail.isDinner else dinner\">Hôm nay ăn gì?</div>\r\n                  <ng-template #dinner>Hôm nay có gì?</ng-template>\r\n                </div>\r\n                <ng-template #nextweektitle> \r\n                  <div class=\"text-title\" *ngIf=\"!detail.isDinner else dinner\">Thứ 2 tuần sau ăn gì?</div>\r\n                  <ng-template #dinner><div class=\"text-title\">Thứ 2 tuần sau có gì?</div></ng-template>\r\n                </ng-template>\r\n    \r\n                  <div class=\"div-relative\">\r\n                    <div *ngFor=\"let mn of detail.menu.listmenu\" class=\"item-menu\">\r\n                      {{ mn.name }} <span class=\"text-quantity\" *ngIf=\"mn.quantity >0\">{{mn.quantity}} {{mn.unit}}</span>\r\n                    </div>\r\n                          \r\n                    <div class=\"div-right\" *ngIf=\"detail.isDinner\">\r\n                      <div class=\"div-image\">\r\n                        <img class=\"img-cook\" [src]=\"detail.menu.avatarRecommend\" *ngIf=\"detail.menu.avatarRecommend else tempimage\">\r\n                        <ng-template #tempimage>\r\n                          <img class=\"img-cook\" [src]=\"detail.menu.avata\" backgroundSize=\"cover\">\r\n                        </ng-template>\r\n                      </div>\r\n                      <div class=\"div-howtocook\" (click)=\"showBlog(detail.menu)\">\r\n                        <div class=\"text-howtocook\">Xem cách nấu<span class=\"img-span\"><img src=\"./assets/imgs/vector.svg\"></span></div>\r\n                      </div>\r\n                    </div> \r\n                        \r\n                \r\n                            <div class=\"text-menu-name d-flex\" *ngIf=\"!detail.isDinner\">\r\n                                <div>{{detail.quantity}} x {{detail.name}}</div>\r\n                                <div class=\"div-star\">\r\n                                  <img *ngIf=\"detail && detail.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\r\n                                  <img *ngIf=\"detail && detail.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\r\n                                  <img *ngIf=\"detail && detail.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"text-menu-name\" *ngIf=\"!detail.isDinner\">{{detail.extraDisplay}}</div>\r\n    \r\n                            <div class=\"text-review\" (click)=\"showFoodReview(detail, order)\" *ngIf=\"order.statusOrderDetail != 1 && order.status == 3\">Đánh giá</div>\r\n                </div>\r\n    \r\n                \r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"order.isOver\">\r\n                    <div class=\"text-menu-title d-flex\">\r\n                        <div class=\"div-100\">{{detail.quantity}} x {{detail.name}}</div>\r\n                        <div class=\"div-star\">\r\n                          <img *ngIf=\"detail && detail.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\r\n                          <img *ngIf=\"detail && detail.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\r\n                          <img *ngIf=\"detail && detail.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\r\n                        </div>\r\n                        <div class=\"div-price\">{{detail.totalPriceDisplay}}</div>\r\n                    </div>\r\n                    <div class=\"text-menu-name\">{{detail.extraDisplay}}</div>\r\n                    <div class=\"d-flex\" *ngIf=\"order.statusOrderDetail != 1\">\r\n                        <div class=\"text-review\" (click)=\"showFoodReview(detail, order)\">Đánh giá</div>\r\n                    </div>\r\n       \r\n        </div>\r\n        <div class=\"div-line-bottom\" [ngClass]=\"detail.menu.listmenu.length <3 ? 'p-top-32' : ''\"></div>\r\n        <div class=\"div-total\">\r\n          <div class=\"label-total\">Thành tiền</div>\r\n          <div class=\"text-price-total\">{{detail.totalPriceDisplay}} đ</div>\r\n        </div>\r\n        \r\n\r\n        <div class=\"div-split\">\r\n        </div>\r\n        <div class=\"d-flex\" *ngIf=\"hoten\">\r\n          <div><img class=\"img-contact\" src=\"../../assets/imgs/ic_people.svg\"></div>\r\n          <div><ion-label class=\"text-contact\">\r\n              {{hoten}} - {{phone}}\r\n            </ion-label></div>\r\n          \r\n        </div>\r\n        <div class=\"d-flex\" *ngIf=\"cusaddress\">\r\n          <div><img class=\"img-contact\" src=\"../../assets/ic_facility/Group.svg\"></div>\r\n          <div><ion-label class=\"text-contact\">\r\n              {{cusaddress}}\r\n            </ion-label></div>\r\n        </div>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/foodmyorderdetail/foodmyorderdetail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/foodmyorderdetail/foodmyorderdetail.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".foodmyorderdetail-header .toolbar-header {\n  text-align: center;\n}\n.foodmyorderdetail-header .col-header-back {\n  text-align: center;\n  height: 48px;\n}\n.foodmyorderdetail-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 8px;\n}\n.foodmyorderdetail-header .div-goback .img-back {\n  height: 48px;\n  padding: 8px;\n  margin-top: -9px;\n  margin-left: -14px;\n}\n.foodmyorderdetail-header .div-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n.foodmyorderdetail-header .div-title .text-title {\n  font-weight: 600;\n  font-size: 18px;\n}\n.foodmyorderdetail-header .div-subtitle {\n  font-size: 11px;\n  font-weight: 300;\n  letter-spacing: -0.31px;\n  text-align: center;\n  color: #222222;\n}\n.div-foodmyorderdetail-content {\n  padding: 16px;\n}\n.div-foodmyorderdetail-content .p-top-24 {\n  padding-top: 24px;\n}\n.div-foodmyorderdetail-content .d-flex {\n  display: flex;\n}\n.div-foodmyorderdetail-content .d-flex .text-bkg {\n  font-size: 14px;\n  font-weight: 200;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .d-flex .text-bkgcode {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  padding-left: 4px;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .d-flex .text-status {\n  width: 300%;\n  text-align: right;\n}\n.div-foodmyorderdetail-content .d-flex .text-right {\n  font-size: 12px;\n  color: #003c71;\n}\n.div-foodmyorderdetail-content .div-line-bottom {\n  margin: 16px 0;\n  border-bottom: solid 1px #dedede;\n}\n.div-foodmyorderdetail-content .text-menu {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: -0.48px;\n  width: 150%;\n}\n.div-foodmyorderdetail-content .div-order-statusbar {\n  text-align: center;\n  margin: 12px 0px 25px 0px;\n}\n.div-foodmyorderdetail-content .div-list-item .text-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.48px;\n}\n.div-foodmyorderdetail-content .item-menu {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-relative {\n  position: relative;\n}\n.div-foodmyorderdetail-content .p-top-32 {\n  padding-top: 32px !important;\n}\n.div-foodmyorderdetail-content .div-left {\n  width: 70%;\n}\n.div-foodmyorderdetail-content .div-right {\n  width: 32%;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.div-foodmyorderdetail-content .div-right .img-cook {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.div-foodmyorderdetail-content .div-right .div-howtocook {\n  font-size: 14px;\n  font-weight: 300;\n  color: #26bed6;\n  letter-spacing: -0.4px;\n}\n.div-foodmyorderdetail-content .div-right .div-howtocook .img-span {\n  padding-left: 8px;\n}\n.div-foodmyorderdetail-content .p-bottom-16 {\n  padding-bottom: 16px;\n}\n.div-foodmyorderdetail-content .text-menu-title {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .text-menu-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .text-quantity {\n  font-size: 14px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .div-100 {\n  width: 100%;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .div-price {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n  text-align: right;\n}\n.div-foodmyorderdetail-content .text-review, .div-foodmyorderdetail-content .text-reorder {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  width: 30%;\n}\n.div-foodmyorderdetail-content .text-contact {\n  font-size: 14px;\n  color: #222222;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  border-bottom: none;\n}\n.div-foodmyorderdetail-content .img-contact {\n  width: 12px;\n  height: 12px;\n  margin-right: 12px;\n}\n.div-foodmyorderdetail-content .div-total {\n  display: flex;\n}\n.div-foodmyorderdetail-content .div-total .label-total {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .div-total .text-price-total {\n  font-size: 18px;\n  font-weight: bold;\n  color: #26bed6;\n  text-align: right;\n  width: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RteW9yZGVyZGV0YWlsL2Zvb2RteW9yZGVyZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZG15b3JkZXJkZXRhaWwvZm9vZG15b3JkZXJkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQVI7QURFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FaO0FER0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNEUjtBREdRO0VBRUUsZ0JBQUE7RUFDQSxlQUFBO0FDRlY7QURLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSFI7QURPQTtFQUNJLGFBQUE7QUNKSjtBRE1JO0VBQ0ksaUJBQUE7QUNKUjtBRE1JO0VBQ0ksYUFBQTtBQ0pSO0FETVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0paO0FEUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ05aO0FEUVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNOWjtBRFFRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNOWjtBRFVJO0VBQ0ksY0FBQTtFQUNBLGdDQUFBO0FDUlI7QURXSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ1RSO0FEYUk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDWFI7QURnQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDZFo7QURpQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ2ZSO0FEbUJJO0VBQ0ksa0JBQUE7QUNqQlI7QURtQkk7RUFDSSw0QkFBQTtBQ2pCUjtBRG1CSTtFQUNJLFVBQUE7QUNqQlI7QURtQkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQ2pCUjtBRGtCUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDaEJaO0FEbUJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDakJaO0FEa0JZO0VBQ0ksaUJBQUE7QUNoQmhCO0FEb0JHO0VBQ0ksb0JBQUE7QUNsQlA7QURvQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNsQlI7QURvQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ2xCUjtBRG9CSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDbEJSO0FEb0JJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNsQlI7QURvQkk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNsQlI7QURxQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ25CUjtBRHNCSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNwQlI7QUR1Qkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNyQlI7QUR1Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckJSO0FEd0JJO0VBQ0ksYUFBQTtBQ3RCUjtBRHdCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ3RCWjtBRHlCUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUN2QloiLCJmaWxlIjoic3JjL2FwcC9mb29kbXlvcmRlcmRldGFpbC9mb29kbXlvcmRlcmRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vZG15b3JkZXJkZXRhaWwtaGVhZGVye1xyXG4gICAgLnRvb2xiYXItaGVhZGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5jb2wtaGVhZGVyLWJhY2t7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgdG9wOiA4cHg7XHJcblxyXG4gICAgICAgIC5pbWctYmFja3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC05cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAudGV4dC10aXRsZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi1zdWJ0aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcblxyXG4gICAgLnAtdG9wLTI0e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLmQtZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAudGV4dC1ia2d7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWJrZ2NvZGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1zdGF0dXN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMDAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtcmlnaHR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtbGluZS1ib3R0b217XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNkZWRlZGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtbWVudXtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgICAgICB3aWR0aDogMTUwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1vcmRlci1zdGF0dXNiYXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTJweCAwcHggMjVweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1saXN0LWl0ZW17XHJcblxyXG4gICAgICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZW51e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmRpdi1yZWxhdGl2ZXtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMzJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5kaXYtbGVmdHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmRpdi1yaWdodHtcclxuICAgICAgICB3aWR0aDogMzIlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgLmltZy1jb29re1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRpdi1ob3d0b2Nvb2t7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgIC5pbWctc3BhbntcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAucC1ib3R0b20tMTZ7XHJcbiAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgfVxyXG4gICAgLnRleHQtbWVudS10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtbWVudS1uYW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLnRleHQtcXVhbnRpdHl7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuICAgIC5kaXYtc3RhcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG4gICAgLmRpdi0xMDB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICB9XHJcbiAgICAuZGl2LXByaWNle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgfVxyXG4gICAgLnRleHQtcmV2aWV3LC50ZXh0LXJlb3JkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtY29udGFjdHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLmRpdi1zcGxpdHtcclxuICAgICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmltZy1jb250YWN0e1xyXG4gICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi10b3RhbHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAubGFiZWwtdG90YWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LXByaWNlLXRvdGFse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59IiwiLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAudG9vbGJhci1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZm9vZG15b3JkZXJkZXRhaWwtaGVhZGVyIC5jb2wtaGVhZGVyLWJhY2sge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDhweDtcbn1cbi5mb29kbXlvcmRlcmRldGFpbC1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogOHB4O1xufVxuLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWJhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTlweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAuZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb29kbXlvcmRlcmRldGFpbC1oZWFkZXIgLmRpdi10aXRsZSAudGV4dC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5mb29kbXlvcmRlcmRldGFpbC1oZWFkZXIgLmRpdi1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjMxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnAtdG9wLTI0IHtcbiAgcGFkZGluZy10b3A6IDI0cHg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmQtZmxleCAudGV4dC1ia2cge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmQtZmxleCAudGV4dC1ia2djb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmQtZmxleCAudGV4dC1zdGF0dXMge1xuICB3aWR0aDogMzAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmQtZmxleCAudGV4dC1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1saW5lLWJvdHRvbSB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAudGV4dC1tZW51IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICB3aWR0aDogMTUwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LW9yZGVyLXN0YXR1c2JhciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDBweCAyNXB4IDBweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LWxpc3QtaXRlbSAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5pdGVtLW1lbnUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5wLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1sZWZ0IHtcbiAgd2lkdGg6IDcwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXJpZ2h0IHtcbiAgd2lkdGg6IDMyJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcmlnaHQgLmltZy1jb29rIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXJpZ2h0IC5kaXYtaG93dG9jb29rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXJpZ2h0IC5kaXYtaG93dG9jb29rIC5pbWctc3BhbiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5wLWJvdHRvbS0xNiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC50ZXh0LW1lbnUtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtbWVudS1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC50ZXh0LXF1YW50aXR5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1zdGFyIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcHJpY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC50ZXh0LXJldmlldywgLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC50ZXh0LXJlb3JkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHdpZHRoOiAzMCU7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5pbWctY29udGFjdCB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXRvdGFsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXRvdGFsIC5sYWJlbC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXRvdGFsIC50ZXh0LXByaWNlLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodmyorderdetail/foodmyorderdetail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/foodmyorderdetail/foodmyorderdetail.page.ts ***!
  \*************************************************************/
/*! exports provided: FoodMyOrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMyOrderDetailPage", function() { return FoodMyOrderDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_9__);










let FoodMyOrderDetailPage = class FoodMyOrderDetailPage {
    constructor(navCtrl, modalCtrl, _foodService, gf, valueGlobal, zone, storage, foodInfo) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._foodService = _foodService;
        this.gf = gf;
        this.valueGlobal = valueGlobal;
        this.zone = zone;
        this.storage = storage;
        this.foodInfo = foodInfo;
        this.listItems = [];
        this.totalPrice = 0;
        this.totalPriceDisplay = "0";
        this.listItemsFood = [];
        this.arrDistrict = [];
        this.District = "";
        this.dayofweek = 5;
        this.bookingDetails = [];
        if (this._foodService.itemOrderDetail) {
            var se = this;
            se.order = se._foodService.itemOrder;
            se.orderdetail = se._foodService.itemOrderDetail;
            let id = se.orderdetail.combo.categoryId;
            if (id) {
                let element = se._foodService.itemOrderDetail;
                se.combodetail = element;
                let timediffminutes = 0, timediffhours = 0, timediffdays = 0;
                if (se.combodetail.startDate) {
                    timediffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.combodetail.startDate), 'minutes');
                    timediffhours = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.combodetail.startDate), 'hours');
                    timediffdays = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.combodetail.startDate), 'days');
                }
                else {
                    timediffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'minutes');
                    timediffhours = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'hours');
                    timediffdays = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'days');
                }
                element.menu = {};
                if (se.combodetail.detailCombo.menuId2) {
                    element.menu = se.combodetail.detailCombo.menuId2;
                }
                if (timediffdays == 0) {
                    element.menu = se.combodetail.detailCombo.menuId2;
                    se.setOrderStatus(element, 0);
                }
                else if (timediffdays == 1) {
                    if (se.combodetail.detailCombo.menuId3) {
                        element.menu = se.combodetail.detailCombo.menuId3;
                        se.setOrderStatus(element, 1);
                    }
                }
                else if (timediffdays == 2) {
                    if (se.combodetail.detailCombo.menuId4) {
                        element.menu = se.combodetail.detailCombo.menuId4;
                        se.setOrderStatus(element, 2);
                    }
                }
                else if (timediffdays == 3) {
                    if (se.combodetail.detailCombo.menuId5) {
                        element.menu = se.combodetail.detailCombo.menuId5;
                        se.setOrderStatus(element, 3);
                    }
                }
                else if (timediffdays == 4) {
                    if (se.combodetail.detailCombo.menuId6) {
                        element.menu = se.combodetail.detailCombo.menuId6;
                        se.setOrderStatus(element, 4);
                    }
                }
                else if (timediffdays > 4) {
                    se.order.statusOrderDetail = 4;
                }
                else {
                    se.order.statusOrderDetail = 1;
                }
                se.orderMenu(element.menu);
                element.typePriceId = element.combo.category.typePriceId;
                element.totalPriceDisplay = this.gf.convertNumberToString(element.itemPrice * element.quantity);
                let extraitem = JSON.parse(element.extra);
                var extraText = "";
                if (extraitem && extraitem.length > 0) {
                    extraText = extraitem.map((item) => item.name).join(" · ");
                }
                element.extraDisplay = extraText;
                se.detail = element;
            }
            se.hoten = se.order.customerName;
            se.phone = se.order.customerPhone;
            se.cusaddress = se.order.fullAddress;
        }
    }
    ngOnInit() {
    }
    setOrderStatus(element, count) {
        var se = this;
        let curdate = moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate).add(count, 'days');
        let days = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(curdate, 'days');
        let minutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(curdate), 'minutes');
        if (se.order.isDinner) {
            se.order.statusOrderDetail = days <= 0 ? (days == 0 ? (minutes < 990 ? 2 : (minutes <= 1050 ? 3 : 4)) : 1) : 1;
        }
        else {
            se.order.statusOrderDetail = days <= 0 ? (days == 0 ? (minutes < 690 ? 2 : (minutes <= 750 ? 3 : 4)) : 1) : 1;
        }
    }
    loadMenuOrderDetail(id, date) {
        var se = this;
        let newdate = moment__WEBPACK_IMPORTED_MODULE_8__(date).format('YYYY-MM-DD');
        if (se.order && se.order.fobookingDetail && se.order.fobookingDetail.length > 0) {
            se.order.fobookingDetail.forEach(element => {
                const id = element.combo.categoryId;
                let url = '';
                if (se.order.isDinner) {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + "/api/FODetail/GetDetailByCategoryIdDinner?id=" + id + "&date=" + newdate;
                }
                else {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + "/api/FODetail/GetDetailByCategoryId?id=" + id + "&date=" + newdate;
                }
                se.gf.RequestApi("GET", url, {}, {}, "HomeFood", "LoadCategoryHome").then((data) => {
                    if (data && data.id) {
                        se.combodetail = data;
                        let timediffminutes = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'minutes');
                        let timediffhours = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'hours');
                        let timediffdays = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).diff(moment__WEBPACK_IMPORTED_MODULE_8__(se.order.startDate), 'days');
                        element.menu = {};
                        if (se.combodetail.menuId2) {
                            element.menu = se.combodetail.menuId2;
                        }
                        if (timediffdays == 0) {
                            element.menu = se.combodetail.menuId2;
                            se.setOrderStatus(element, 0);
                        }
                        else if (timediffdays == 1) {
                            if (se.combodetail.menuId3) {
                                element.menu = se.combodetail.menuId3;
                                se.setOrderStatus(element, 1);
                            }
                        }
                        else if (timediffdays == 2) {
                            if (se.combodetail.menuId4) {
                                element.menu = se.combodetail.menuId4;
                                se.setOrderStatus(element, 2);
                            }
                        }
                        else if (timediffdays == 3) {
                            if (se.combodetail.menuId5) {
                                element.menu = se.combodetail.menuId5;
                                se.setOrderStatus(element, 3);
                            }
                        }
                        else if (timediffdays == 4) {
                            if (se.combodetail.menuId6) {
                                element.menu = se.combodetail.menuId6;
                                se.setOrderStatus(element, 4);
                            }
                        }
                        else if (timediffdays > 4) {
                            se.order.statusOrderDetail = 4;
                        }
                        else {
                            se.order.statusOrderDetail = 1;
                        }
                        se.orderMenu(element.menu);
                        element.typePriceId = data.focategory.typePriceId;
                        element.totalPriceDisplay = se.gf.convertNumberToString(element.itemPrice);
                        let extraitem = JSON.parse(element.extra);
                        var extraText = "";
                        if (extraitem && extraitem.length > 0) {
                            extraText = extraitem.map((item) => item.name).join(" · ");
                        }
                        element.extraDisplay = extraText;
                        se.bookingDetails.push(element);
                    }
                });
            });
        }
    }
    orderMenu(menu) {
        this.zone.run(() => {
            menu.listmenu = [];
            if (menu && menu.forecipe && menu.forecipe.length > 0) {
                menu.forecipe.forEach(element => {
                    if (element.type == 5) {
                        menu.listmenu.push(element);
                    }
                    if (element.type == 4 || element.type == 7 || element.type == 6) {
                        menu.listmenu.push(element);
                    }
                    if (element.type == 3 || element.type == 8) {
                        menu.listmenu.push(element);
                    }
                });
            }
        });
    }
    goback() {
        this.navCtrl.back();
    }
    showFoodReview(detail, order) {
        this.gf.hideStatusBar();
        this._foodService.itemOrderBookingDetail = detail;
        this._foodService.itemOrder = order;
        this._foodService.itemOrderDetail = detail;
        this.navCtrl.navigateForward('/foodreview');
    }
    foodReOrder(item) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let newdate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date()).format('YYYY-MM-DD');
            if (item && item.extra != "[]") {
                var objExtra = JSON.parse(item.extra);
                if (objExtra && objExtra.length > 0) {
                    item.itemExtraWater = [];
                    item.itemExtraOther = [];
                    objExtra.forEach(element => {
                        if (element.type == 1) {
                            item.itemExtraWater.push(element);
                        }
                        else {
                            item.itemExtraOther.push(element);
                        }
                    });
                }
                se._foodService.listItemsCart.push(item);
                se._foodService.isBook = true;
                se._foodService.itemCartChange.emit(se._foodService.listItemsCart.length);
                se.navCtrl.navigateForward('/foodbill');
            }
        });
    }
    showBlog(menu) {
        var se = this;
        if (menu.linkBlog) {
            se.gf.showLoading();
            se.mapBlogId(menu.linkBlog).then((id) => {
                se.gf.hideLoading();
                if (id) {
                    se.valueGlobal.backValue = "fooddinner";
                    se.navCtrl.navigateForward("/blog/" + id);
                }
                else {
                    se.gf.showToastWarning("Không tìm thấy bài viết. Xin vui lòng quay lại sau!");
                }
            });
        }
    }
    mapBlogId(item) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: 'https://svc3.ivivu.com/GetBlogByUrl',
                qs: { url: item },
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
                if (error)
                    throw new Error(error);
                se.zone.run(() => {
                    var data = JSON.parse(body);
                    resolve(data.post.ID);
                });
            });
        });
    }
};
FoodMyOrderDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-foodmyorderdetail',
        template: __webpack_require__(/*! ./foodmyorderdetail.page.html */ "./src/app/foodmyorderdetail/foodmyorderdetail.page.html"),
        styles: [__webpack_require__(/*! ./foodmyorderdetail.page.scss */ "./src/app/foodmyorderdetail/foodmyorderdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_3__["foodService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["ValueGlobal"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["foodInfo"]])
], FoodMyOrderDetailPage);



/***/ })

}]);
//# sourceMappingURL=foodmyorderdetail-foodmyorderdetail-module.js.map