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

module.exports = ".foodmyorderdetail-header .toolbar-header {\n  text-align: center;\n}\n.foodmyorderdetail-header .col-header-back {\n  text-align: center;\n  height: 48px;\n}\n.foodmyorderdetail-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 8px;\n}\n.foodmyorderdetail-header .div-goback .img-back {\n  height: 48px;\n  padding: 8px;\n  margin-top: -9px;\n  margin-left: -14px;\n}\n.foodmyorderdetail-header .div-title {\n  font-size: 20px;\n  font-weight: bold;\n}\n.foodmyorderdetail-header .div-title .text-title {\n  font-weight: 600;\n  font-size: 18px;\n}\n.foodmyorderdetail-header .div-subtitle {\n  font-size: 11px;\n  font-weight: 300;\n  letter-spacing: -0.31px;\n  text-align: center;\n  color: #222222;\n}\n.div-foodmyorderdetail-content {\n  padding: 16px;\n}\n.div-foodmyorderdetail-content .p-top-24 {\n  padding-top: 24px;\n}\n.div-foodmyorderdetail-content .d-flex {\n  display: flex;\n}\n.div-foodmyorderdetail-content .d-flex .text-bkg {\n  font-size: 14px;\n  font-weight: 200;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .d-flex .text-bkgcode {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n  padding-left: 4px;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .d-flex .text-status {\n  width: 300%;\n  text-align: right;\n}\n.div-foodmyorderdetail-content .d-flex .text-right {\n  font-size: 12px;\n  color: #003c71;\n}\n.div-foodmyorderdetail-content .div-line-bottom {\n  margin: 16px 0;\n  border-bottom: solid 1px #dedede;\n}\n.div-foodmyorderdetail-content .text-menu {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: -0.48px;\n  width: 150%;\n}\n.div-foodmyorderdetail-content .div-order-statusbar {\n  text-align: center;\n  margin: 12px 0px 25px 0px;\n}\n.div-foodmyorderdetail-content .div-list-item .text-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.48px;\n}\n.div-foodmyorderdetail-content .item-menu {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-relative {\n  position: relative;\n}\n.div-foodmyorderdetail-content .p-top-32 {\n  padding-top: 32px !important;\n}\n.div-foodmyorderdetail-content .div-left {\n  width: 70%;\n}\n.div-foodmyorderdetail-content .div-right {\n  width: 32%;\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.div-foodmyorderdetail-content .div-right .img-cook {\n  width: 80px;\n  height: 80px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.div-foodmyorderdetail-content .div-right .div-howtocook {\n  font-size: 14px;\n  font-weight: 300;\n  color: #26bed6;\n  letter-spacing: -0.4px;\n}\n.div-foodmyorderdetail-content .div-right .div-howtocook .img-span {\n  padding-left: 8px;\n}\n.div-foodmyorderdetail-content .p-bottom-16 {\n  padding-bottom: 16px;\n}\n.div-foodmyorderdetail-content .text-menu-title {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .text-menu-name {\n  font-size: 12px;\n  color: #828282;\n  line-height: 20px;\n  letter-spacing: -0.34px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .text-quantity {\n  font-size: 14px;\n  color: #828282;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-star {\n  padding-left: 8px;\n  display: table-cell;\n  align-self: center;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .div-100 {\n  width: 100%;\n  white-space: nowrap;\n}\n.div-foodmyorderdetail-content .div-price {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n  text-align: right;\n}\n.div-foodmyorderdetail-content .text-review, .div-foodmyorderdetail-content .text-reorder {\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  width: 30%;\n}\n.div-foodmyorderdetail-content .text-contact {\n  font-size: 14px;\n  color: #222222;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n}\n.div-foodmyorderdetail-content .div-split {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  border-bottom: none;\n}\n.div-foodmyorderdetail-content .img-contact {\n  width: 12px;\n  height: 12px;\n  margin-right: 12px;\n}\n.div-foodmyorderdetail-content .div-total {\n  display: flex;\n}\n.div-foodmyorderdetail-content .div-total .label-total {\n  font-size: 14px;\n  color: #000000;\n  line-height: 21px;\n  letter-spacing: -0.4px;\n  font-weight: 300;\n  width: 100%;\n}\n.div-foodmyorderdetail-content .div-total .text-price-total {\n  font-size: 18px;\n  font-weight: bold;\n  color: #26bed6;\n  text-align: right;\n  width: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZG15b3JkZXJkZXRhaWwvZm9vZG15b3JkZXJkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kbXlvcmRlcmRldGFpbC9mb29kbXlvcmRlcmRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUNBUjtBREVRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVo7QURHSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0RSO0FER1E7RUFFRSxnQkFBQTtFQUNBLGVBQUE7QUNGVjtBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNIUjtBRE9BO0VBQ0ksYUFBQTtBQ0pKO0FETUk7RUFDSSxpQkFBQTtBQ0pSO0FETUk7RUFDSSxhQUFBO0FDSlI7QURNUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSlo7QURRUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDTlo7QURRUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtBQ05aO0FEUVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ05aO0FEVUk7RUFDSSxjQUFBO0VBQ0EsZ0NBQUE7QUNSUjtBRFdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDVFI7QURhSTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNYUjtBRGdCUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNkWjtBRGlCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDZlI7QURtQkk7RUFDSSxrQkFBQTtBQ2pCUjtBRG1CSTtFQUNJLDRCQUFBO0FDakJSO0FEbUJJO0VBQ0ksVUFBQTtBQ2pCUjtBRG1CSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FDakJSO0FEa0JRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNoQlo7QURtQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNqQlo7QURrQlk7RUFDSSxpQkFBQTtBQ2hCaEI7QURvQkc7RUFDSSxvQkFBQTtBQ2xCUDtBRG9CSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ2xCUjtBRG9CSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDbEJSO0FEb0JJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNsQlI7QURvQkk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ2xCUjtBRG9CSTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDbkJSO0FEc0JJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQ3BCUjtBRHVCSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDckJSO0FEdUJJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ3JCUjtBRHVCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNyQlI7QUR3Qkk7RUFDSSxhQUFBO0FDdEJSO0FEd0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDdEJaO0FEeUJRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ3ZCWiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RteW9yZGVyZGV0YWlsL2Zvb2RteW9yZGVyZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb29kbXlvcmRlcmRldGFpbC1oZWFkZXJ7XHJcbiAgICAudG9vbGJhci1oZWFkZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmNvbC1oZWFkZXItYmFja3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICB0b3A6IDhweDtcclxuXHJcbiAgICAgICAgLmltZy1iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTlweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgICAgIC50ZXh0LXRpdGxlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGl2LXN1YnRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxufVxyXG5cclxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAucC10b3AtMjR7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuZC1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC50ZXh0LWJrZ3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtYmtnY29kZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXN0YXR1c3tcclxuICAgICAgICAgICAgd2lkdGg6IDMwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1yaWdodHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1saW5lLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2RlZGVkZTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1tZW51e1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTAlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LW9yZGVyLXN0YXR1c2JhcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweCAyNXB4IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWxpc3QtaXRlbXtcclxuXHJcbiAgICAgICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5pdGVtLW1lbnV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZGl2LXJlbGF0aXZle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5wLXRvcC0zMntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmRpdi1sZWZ0e1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAuZGl2LXJpZ2h0e1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICAuaW1nLWNvb2t7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGl2LWhvd3RvY29va3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgLmltZy1zcGFue1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIC5wLWJvdHRvbS0xNntcclxuICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICB9XHJcbiAgICAudGV4dC1tZW51LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1tZW51LW5hbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAudGV4dC1xdWFudGl0eXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG4gICAgLmRpdi1zdGFye1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB9XHJcbiAgICAuZGl2LTEwMHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgIH1cclxuICAgIC5kaXYtcHJpY2V7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICB9XHJcbiAgICAudGV4dC1yZXZpZXcsLnRleHQtcmVvcmRlcntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1jb250YWN0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICAuZGl2LXNwbGl0e1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuaW1nLWNvbnRhY3R7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGl2LXRvdGFse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIC5sYWJlbC10b3RhbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtcHJpY2UtdG90YWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn0iLCIuZm9vZG15b3JkZXJkZXRhaWwtaGVhZGVyIC50b29sYmFyLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb29kbXlvcmRlcmRldGFpbC1oZWFkZXIgLmNvbC1oZWFkZXItYmFjayB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiA4cHg7XG59XG4uZm9vZG15b3JkZXJkZXRhaWwtaGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtOXB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uZm9vZG15b3JkZXJkZXRhaWwtaGVhZGVyIC5kaXYtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAuZGl2LXRpdGxlIC50ZXh0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmZvb2RteW9yZGVyZGV0YWlsLWhlYWRlciAuZGl2LXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAucC10b3AtMjQge1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZC1mbGV4IC50ZXh0LWJrZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZC1mbGV4IC50ZXh0LWJrZ2NvZGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZC1mbGV4IC50ZXh0LXN0YXR1cyB7XG4gIHdpZHRoOiAzMDAlO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZC1mbGV4IC50ZXh0LXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LWxpbmUtYm90dG9tIHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGVkZWRlO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC50ZXh0LW1lbnUge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIHdpZHRoOiAxNTAlO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtb3JkZXItc3RhdHVzYmFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEycHggMHB4IDI1cHggMHB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtbGlzdC1pdGVtIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLml0ZW0tbWVudSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnAtdG9wLTMyIHtcbiAgcGFkZGluZy10b3A6IDMycHggIWltcG9ydGFudDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LWxlZnQge1xuICB3aWR0aDogNzAlO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcmlnaHQge1xuICB3aWR0aDogMzIlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1yaWdodCAuaW1nLWNvb2sge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcmlnaHQgLmRpdi1ob3d0b2Nvb2sge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtcmlnaHQgLmRpdi1ob3d0b2Nvb2sgLmltZy1zcGFuIHtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnAtYm90dG9tLTE2IHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtbWVudS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAudGV4dC1tZW51LW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtcXVhbnRpdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAuZGl2LXN0YXIge1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtcmV2aWV3LCAuZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLnRleHQtcmVvcmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgd2lkdGg6IDMwJTtcbn1cbi5kaXYtZm9vZG15b3JkZXJkZXRhaWwtY29udGVudCAudGV4dC1jb250YWN0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uZGl2LWZvb2RteW9yZGVyZGV0YWlsLWNvbnRlbnQgLmltZy1jb250YWN0IHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtdG90YWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtdG90YWwgLmxhYmVsLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1mb29kbXlvcmRlcmRldGFpbC1jb250ZW50IC5kaXYtdG90YWwgLnRleHQtcHJpY2UtdG90YWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxNTAlO1xufSJdfQ== */"

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