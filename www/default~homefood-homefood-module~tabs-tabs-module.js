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

<<<<<<< HEAD
module.exports = ".homefood-footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 5px 3px #ccc;\n}\n.homefood-footer .div-menu-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.homefood-footer .div-menu-footer .div-button-menu {\n  display: flex;\n  flex-direction: column;\n  width: 72px;\n  height: 56px;\n}\n.homefood-footer .div-menu-footer .div-button-menu .text-menu {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 500;\n  letter-spacing: -0.8px;\n  line-height: 20px;\n  margin-top: -12px;\n  text-align: center;\n}\n.homefood-footer .div-menu-footer .div-button-menu .icon-menu {\n  width: 44px;\n  height: 44px;\n  margin-top: -2px;\n  margin-left: 14px;\n}\n.homefood-footer .activated {\n  color: #26bed6 !important;\n  opacity: 1 !important;\n}\n.homefood-footer .icon-food-menu {\n  color: #828282;\n  opacity: 0.7;\n  width: 24px;\n  height: 24px;\n  padding: 9px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZG1lbnVmb290ZXIvZm9vZG1lbnVmb290ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kbWVudWZvb3Rlci9mb29kbWVudWZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0FDQ0o7QURDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NaO0FEQ1k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDaEI7QURFWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FoQjtBRElJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtBQ0ZSO0FES0k7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9mb29kbWVudWZvb3Rlci9mb29kbWVudWZvb3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZWZvb2QtZm9vdGVye1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDNweCAjY2NjO1xyXG5cclxuICAgIC5kaXYtbWVudS1mb290ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBcclxuICAgICAgICAuZGl2LWJ1dHRvbi1tZW51e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIC50ZXh0LW1lbnV7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIC5pY29uLW1lbnV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hY3RpdmF0ZWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24tZm9vZC1tZW51e1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59IiwiLmhvbWVmb29kLWZvb3RlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2NjYztcbn1cbi5ob21lZm9vZC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ob21lZm9vZC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciAuZGl2LWJ1dHRvbi1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDcycHg7XG4gIGhlaWdodDogNTZweDtcbn1cbi5ob21lZm9vZC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciAuZGl2LWJ1dHRvbi1tZW51IC50ZXh0LW1lbnUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuOHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogLTEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5ob21lZm9vZC1mb290ZXIgLmRpdi1tZW51LWZvb3RlciAuZGl2LWJ1dHRvbi1tZW51IC5pY29uLW1lbnUge1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5ob21lZm9vZC1mb290ZXIgLmFjdGl2YXRlZCB7XG4gIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5ob21lZm9vZC1mb290ZXIgLmljb24tZm9vZC1tZW51IHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG9wYWNpdHk6IDAuNztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgcGFkZGluZzogOXB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn0iXX0= */"
=======
module.exports = ".homefood-footer {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background: #fff;\n  width: 100%;\n  box-shadow: 2px 4px 5px 3px #ccc;\n}\n.homefood-footer .div-menu-footer {\n  display: flex;\n  justify-content: space-between;\n}\n.homefood-footer .div-menu-footer .div-button-menu {\n  display: flex;\n  flex-direction: column;\n  width: 72px;\n  height: 56px;\n}\n.homefood-footer .div-menu-footer .div-button-menu .text-menu {\n  font-size: 12px;\n  color: #828282;\n  font-weight: 500;\n  letter-spacing: -0.8px;\n  line-height: 20px;\n  margin-top: -12px;\n  text-align: center;\n}\n.homefood-footer .div-menu-footer .div-button-menu .icon-menu {\n  width: 44px;\n  height: 44px;\n  margin-top: -2px;\n  margin-left: 14px;\n}\n.homefood-footer .activated {\n  color: #26bed6 !important;\n  opacity: 1 !important;\n}\n.homefood-footer .icon-food-menu {\n  color: #828282;\n  opacity: 0.7;\n  width: 24px;\n  height: 24px;\n  padding: 9px;\n  margin-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RtZW51Zm9vdGVyL2Zvb2RtZW51Zm9vdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZG1lbnVmb290ZXIvZm9vZG1lbnVmb290ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNDUjtBRENRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ2hCO0FERVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBaEI7QURJSTtFQUNJLHlCQUFBO0VBQ0EscUJBQUE7QUNGUjtBREtJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hSIiwiZmlsZSI6InNyYy9hcHAvZm9vZG1lbnVmb290ZXIvZm9vZG1lbnVmb290ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVmb29kLWZvb3RlcntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2hhZG93OiAycHggNHB4IDVweCAzcHggI2NjYztcclxuXHJcbiAgICAuZGl2LW1lbnUtZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAgICAgLmRpdi1idXR0b24tbWVudXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTZweDtcclxuICAgIFxyXG4gICAgICAgICAgICAudGV4dC1tZW51e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgICAgICAuaWNvbi1tZW51e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZhdGVke1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWZvb2QtbWVudXtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIH1cclxufSIsIi5ob21lZm9vZC1mb290ZXIge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogOTk5O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggM3B4ICNjY2M7XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIgLmRpdi1idXR0b24tbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiA3MnB4O1xuICBoZWlnaHQ6IDU2cHg7XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIgLmRpdi1idXR0b24tbWVudSAudGV4dC1tZW51IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjhweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0xMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5kaXYtbWVudS1mb290ZXIgLmRpdi1idXR0b24tbWVudSAuaWNvbi1tZW51IHtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5hY3RpdmF0ZWQge1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uaG9tZWZvb2QtZm9vdGVyIC5pY29uLWZvb2QtbWVudSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBvcGFjaXR5OiAwLjc7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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