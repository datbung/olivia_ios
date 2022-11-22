(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordersupportdone-ordersupportdone-module"],{

/***/ "./src/app/ordersupportdone/ordersupportdone.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/ordersupportdone/ordersupportdone.module.ts ***!
  \*************************************************************/
/*! exports provided: OrdersupportdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersupportdonePageModule", function() { return OrdersupportdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ordersupportdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordersupportdone.page */ "./src/app/ordersupportdone/ordersupportdone.page.ts");







const routes = [
    {
        path: '',
        component: _ordersupportdone_page__WEBPACK_IMPORTED_MODULE_6__["OrdersupportdonePage"]
    }
];
let OrdersupportdonePageModule = class OrdersupportdonePageModule {
};
OrdersupportdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ordersupportdone_page__WEBPACK_IMPORTED_MODULE_6__["OrdersupportdonePage"]]
    })
], OrdersupportdonePageModule);



/***/ }),

/***/ "./src/app/ordersupportdone/ordersupportdone.page.html":
/*!*************************************************************!*\
  !*** ./src/app/ordersupportdone/ordersupportdone.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center\">\n          <div style=\"align-self: center\" >\n              <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Hoàn thành</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"img-trip-empty\" >\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n</div>\n<div style=\"margin-top: 5px\">\n  <div>\n    <ion-label class=\"text\">\n     Gửi yêu cầu thành công\n    </ion-label>\n   \n  </div>\n  <div style=\"margin-top: 5px\">\n    <ion-label class=\"text-1\">\n      iVIVU đã nhận được yêu cầu hỗ trợ của quý khách. Chúng tôi sẽ kiểm tra thông tin và phản hồi quý khách trong vòng 60 phút trong thời gian làm việc (8:00 - 20:00)\n    </ion-label>\n  </div>\n  \n  \n</div>\n</ion-content>\n<ion-footer>\n<div class=\"div-button-payment-done\">\n  <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Quay về trang chủ</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/ordersupportdone/ordersupportdone.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/ordersupportdone/ordersupportdone.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 16px;\n  font-weight: 700;\n  color: #00c1de;\n}\n\n.text-1 {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 1.5;\n}\n\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 16px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9vcmRlcnN1cHBvcnRkb25lL29yZGVyc3VwcG9ydGRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlcnN1cHBvcnRkb25lL29yZGVyc3VwcG9ydGRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBRUEsY0FBQTtBQ0RKOztBREdBO0VBRUksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTtFQUVRLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNEUjs7QURJSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7QUNGUjs7QURJUTtFQUNJLHdCQUFBO0FDRlo7O0FES0k7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL29yZGVyc3VwcG9ydGRvbmUvb3JkZXJzdXBwb3J0ZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcblxuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuXG4gICAgY29sb3I6ICMwMGMxZGU7XG59XG4udGV4dC0xe1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cbi5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuICAgIC5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5tLXRvcC0we1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbWctdHJpcC1lbXB0eVxue1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59IiwiLnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDBjMWRlO1xufVxuXG4udGV4dC0xIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSAubS10b3AtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLmltZy10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/ordersupportdone/ordersupportdone.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/ordersupportdone/ordersupportdone.page.ts ***!
  \***********************************************************/
/*! exports provided: OrdersupportdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersupportdonePage", function() { return OrdersupportdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



let OrdersupportdonePage = class OrdersupportdonePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    next() {
        this.navCtrl.navigateBack(['/app/tabs/tab3']);
    }
};
OrdersupportdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordersupportdone',
        template: __webpack_require__(/*! ./ordersupportdone.page.html */ "./src/app/ordersupportdone/ordersupportdone.page.html"),
        styles: [__webpack_require__(/*! ./ordersupportdone.page.scss */ "./src/app/ordersupportdone/ordersupportdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], OrdersupportdonePage);



/***/ })

}]);
//# sourceMappingURL=ordersupportdone-ordersupportdone-module.js.map