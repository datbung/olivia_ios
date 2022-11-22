(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~homefood-homefood-module~tabs-tabs-module"],{

/***/ "./src/app/foodmenufooter/foodmenufooter.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodmenufooter/foodmenufooter.module.ts ***!
  \*********************************************************/
/*! exports provided: FoodMenuFooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuFooterPageModule", function() { return FoodMenuFooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodmenufooter_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foodmenufooter.page */ "./src/app/foodmenufooter/foodmenufooter.page.ts");






let FoodMenuFooterPageModule = class FoodMenuFooterPageModule {
};
FoodMenuFooterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ],
        declarations: [_foodmenufooter_page__WEBPACK_IMPORTED_MODULE_5__["FoodMenuFooterPage"]],
        exports: [_foodmenufooter_page__WEBPACK_IMPORTED_MODULE_5__["FoodMenuFooterPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FoodMenuFooterPageModule);



/***/ }),

/***/ "./src/app/foodmenufooter/foodmenufooter.page.html":
/*!*********************************************************!*\
  !*** ./src/app/foodmenufooter/foodmenufooter.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"homefood-footer\">\r\n        <div class=\"div-menu-footer\">\r\n          <div class=\"div-button-menu\" (click)=\"menuFooterClick(1)\">\r\n           \r\n            <ion-icon [ngClass]=\"menuindex ==1 ? 'icon-food-menu activated' : 'icon-food-menu'\" name=\"home\"></ion-icon>\r\n            <div [ngClass]=\"menuindex ==1 ? 'text-menu activated' : 'text-menu'\">Trang chủ</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFooterClick(2)\">\r\n              <div class=\"icon-menu\">\r\n                <img *ngIf=\"menuindex == 2 else menu2LostFocus\" src=\"../../assets/ic_food/icon_food_tealish.svg\">\r\n                <ng-template #menu2LostFocus><img src=\"../../assets/ic_food/icon_food_gray.svg\"></ng-template>\r\n              </div>\r\n              <div [ngClass]=\"menuindex ==2 ? 'text-menu activated' : 'text-menu'\">Đơn hàng</div>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFooterClick(3)\">\r\n              <ion-icon [ngClass]=\"menuindex ==3 ? 'icon-food-menu activated' : 'icon-food-menu'\" name=\"text\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==3 ? 'text-menu activated' : 'text-menu'\">Thông báo</div>\r\n              <ion-badge *ngIf=\"countcart\" color=\"danger\">{{countcart}}</ion-badge>\r\n          </div>\r\n          <div class=\"div-button-menu\" (click)=\"menuFooterClick(4)\">\r\n              <ion-icon [ngClass]=\"menuindex ==4 ? 'icon-food-menu activated' : 'icon-food-menu'\" name=\"contact\"></ion-icon>\r\n              <div [ngClass]=\"menuindex ==4 ? 'text-menu activated' : 'text-menu'\">Tài khoản</div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/foodmenufooter/foodmenufooter.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/foodmenufooter/foodmenufooter.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homefood-footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 5px 3px #ccc;\n}\n.homefood-footer .div-menu-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.homefood-footer .div-menu-footer .div-button-menu {\n  display: flex;\n  flex-direction: column;\n  width: 72px;\n  height: 56px;\n}\n.homefood-footer .div-menu-footer .div-button-menu .text-menu {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 500;\n  letter-spacing: -0.8px;\n  line-height: 20px;\n  margin-top: -12px;\n  text-align: center;\n}\n.homefood-footer .div-menu-footer .div-button-menu .icon-menu {\n  width: 44px;\n  height: 44px;\n  margin-top: -2px;\n  margin-left: 14px;\n}\n.homefood-footer .activated {\n  color: #26bed6 !important;\n  opacity: 1 !important;\n}\n.homefood-footer .icon-food-menu {\n  color: #828282;\n  opacity: 0.7;\n  width: 24px;\n  height: 24px;\n  padding: 9px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kbWVudWZvb3Rlci9mb29kbWVudWZvb3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RtZW51Zm9vdGVyL2Zvb2RtZW51Zm9vdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDQ1I7QURDUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ1o7QURDWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NoQjtBREVZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQWhCO0FESUk7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0FDRlI7QURLSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RtZW51Zm9vdGVyL2Zvb2RtZW51Zm9vdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lZm9vZC1mb290ZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggM3B4ICNjY2M7XHJcblxyXG4gICAgLmRpdi1tZW51LWZvb3RlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG4gICAgICAgIC5kaXYtYnV0dG9uLW1lbnV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBcclxuICAgICAgICAgICAgLnRleHQtbWVudXtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgLmljb24tbWVudXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFjdGl2YXRlZHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1mb29kLW1lbnV7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbn0iLCIuaG9tZWZvb2QtZm9vdGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDk5OTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjY2NjO1xufVxuLmhvbWVmb29kLWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmhvbWVmb29kLWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIC5kaXYtYnV0dG9uLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNzJweDtcbiAgaGVpZ2h0OiA1NnB4O1xufVxuLmhvbWVmb29kLWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIC5kaXYtYnV0dG9uLW1lbnUgLnRleHQtbWVudSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC44cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhvbWVmb29kLWZvb3RlciAuZGl2LW1lbnUtZm9vdGVyIC5kaXYtYnV0dG9uLW1lbnUgLmljb24tbWVudSB7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xufVxuLmhvbWVmb29kLWZvb3RlciAuYWN0aXZhdGVkIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmhvbWVmb29kLWZvb3RlciAuaWNvbi1mb29kLW1lbnUge1xuICBjb2xvcjogIzgyODI4MjtcbiAgb3BhY2l0eTogMC43O1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBwYWRkaW5nOiA5cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/foodmenufooter/foodmenufooter.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/foodmenufooter/foodmenufooter.page.ts ***!
  \*******************************************************/
/*! exports provided: FoodMenuFooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuFooterPage", function() { return FoodMenuFooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");






let FoodMenuFooterPage = class FoodMenuFooterPage {
    constructor(navCtrl, gf, foodService, modalCtrl, toastCtrl, zone) {
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.foodService = foodService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.menuindex = 1;
        this.countcart = 0;
    }
    ngOnInit() {
        this.foodService.menuFooterClick.pipe().subscribe(data => {
            this.zone.run(() => {
                this.menuindex = data;
                this.showHiddenMenuByTabIndex(data);
            });
        });
    }
    menuFooterClick(menuindex) {
        var se = this;
        se.zone.run(() => {
            se.menuindex = menuindex;
            se.foodService.tabFoodIndex = menuindex;
            se.foodService.menuFooterClick.emit(menuindex);
        });
        se.showHiddenMenuByTabIndex(menuindex);
    }
    showHiddenMenuByTabIndex(menuindex) {
        if (menuindex == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".homefoodheader").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-disabled").addClass("cls-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-home").removeClass("cls-disabled").addClass("cls-visible");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-home").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
        }
        else if (menuindex == 2) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-myorder").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            }, 50);
        }
        else if (menuindex == 3) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-account").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-notify").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            }, 50);
        }
        else if (menuindex == 4) {
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-home").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-myorder").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".div-notify").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            jquery__WEBPACK_IMPORTED_MODULE_4__(".homefoodheader").removeClass("cls-tab-visible").addClass("cls-tab-disabled");
            setTimeout(() => {
                jquery__WEBPACK_IMPORTED_MODULE_4__(".food-combo-detail-header").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-wraper-slide").removeClass("cls-visible").addClass("cls-disabled");
                jquery__WEBPACK_IMPORTED_MODULE_4__(".div-account").removeClass("cls-tab-disabled").addClass("cls-tab-visible");
            }, 50);
        }
    }
};
FoodMenuFooterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-foodmenufooter',
        template: __webpack_require__(/*! ./foodmenufooter.page.html */ "./src/app/foodmenufooter/foodmenufooter.page.html"),
        styles: [__webpack_require__(/*! ./foodmenufooter.page.scss */ "./src/app/foodmenufooter/foodmenufooter.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_5__["foodService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], FoodMenuFooterPage);



/***/ })

}]);
//# sourceMappingURL=default~homefood-homefood-module~tabs-tabs-module.js.map