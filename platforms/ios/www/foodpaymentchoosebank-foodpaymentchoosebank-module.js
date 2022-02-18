(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodpaymentchoosebank-foodpaymentchoosebank-module"],{

/***/ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/foodpaymentchoosebank/foodpaymentchoosebank.module.ts ***!
  \***********************************************************************/
/*! exports provided: FoodpaymentchoosebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentchoosebankPageModule", function() { return FoodpaymentchoosebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodpaymentchoosebank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodpaymentchoosebank.page */ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.ts");







const routes = [
    {
        path: '',
        component: _foodpaymentchoosebank_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentchoosebankPage"]
    }
];
let FoodpaymentchoosebankPageModule = class FoodpaymentchoosebankPageModule {
};
FoodpaymentchoosebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodpaymentchoosebank_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentchoosebankPage"]]
    })
], FoodpaymentchoosebankPageModule);



/***/ }),

/***/ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomchoosebankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/step/food_step_2.svg\">\n  </div>\n  <!-- Thanh toán bằng thẻ đã lưu -->\n  <div *ngIf=\"arrbankrmb.length>0\" class=\"mt16\">\n    <ion-label class=\"text-option\">Thanh toán bằng thẻ đã lưu</ion-label>\n    <div *ngFor=\"let item of arrbankrmb\" class=\"div-border\">\n      <div class=\"div-flex\">\n        <div class=\"mt28\">\n          <ion-checkbox class=\"ml18\" [checked]=\"item.checked\" (ionChange)=\"checkacc(item,$event)\"></ion-checkbox>\n        </div>\n        <div>\n          <img class=\"ml12\" class=\"img1\" src={{item.imgbank}}>\n        </div>\n      </div>\n        <div class=\"div-2\">\n          <ion-label class=\"text-infobank\"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n            {{item.vpc_CardNum}}</ion-label>\n          <ion-label class=\"text-infobank\">{{item.name_Bank}}</ion-label>\n        </div>\n    </div>\n\n  </div>\n  <!-- Hoặc chọn ngân hàng khác -->\n  <div class=\"mt24\">\n    <ion-label *ngIf=\"arrbankrmb.length>0\" class=\"text-option\">Hoặc chọn ngân hàng khác</ion-label>\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970407')\" [class.active]=\"id=='970407' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970407.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970423')\" [class.active]=\"id=='970423' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970423.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970415')\" [class.active]=\"id=='970415' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970415.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970441')\" [class.active]=\"id=='970441' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970441.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970427')\" [class.active]=\"id=='970427' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970427.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970426')\" [class.active]=\"id=='970426' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970426.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970431')\" [class.active]=\"id=='970431' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970431.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970443')\" [class.active]=\"id=='970443' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970443.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970437')\" [class.active]=\"id=='970437' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970437.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970436')\" [class.active]=\"id=='970436' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970436.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970406')\" [class.active]=\"id=='970406' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970406.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970422')\" [class.active]=\"id=='970422' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970422.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970428')\" [class.active]=\"id=='970428' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970428.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970440')\" [class.active]=\"id=='970440' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970440.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970414')\" [class.active]=\"id=='970414' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970414.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970418')\" [class.active]=\"id=='970418' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970418.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970409')\" [class.active]=\"id=='970409' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970409.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970432')\" [class.active]=\"id=='970432' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970432.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970419')\" [class.active]=\"id=='970419' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970419.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970405')\" [class.active]=\"id=='970405' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970405.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970429')\" [class.active]=\"id=='970429' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970429.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970403')\" [class.active]=\"id=='970403' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970403.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970425')\" [class.active]=\"id=='970425' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970425.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970412')\" [class.active]=\"id=='970412' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970412.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970454')\" [class.active]=\"id=='970454' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970454.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('9704331')\" [class.active]=\"id=='9704331' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/vietbank.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div style=\"margin-top: 22px\">\n    <ion-checkbox [disabled]=\"isdisable\" (ionChange)=\"rememberCard()\"  class=\"ion-checkbox\" checked=\"isremember\" color=\"secondary\"></ion-checkbox>\n    <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n  </div>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán ngay</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.img.active {\n  border: 3px solid #23BFD8;\n}\n\n.img {\n  border: 1px solid #CCCCCC;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n}\n\n.text-option {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #4f4f4f;\n}\n\n.chkbox {\n  margin-left: 18px;\n}\n\n.div-border {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #26bed6;\n  display: flex;\n  height: 74px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.img1 {\n  width: 77px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 12px;\n  margin-top: 16px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.ml18 {\n  margin-left: 18px;\n  width: 18px;\n  height: 18px;\n  --border-radius: 24px;\n  --border-width: 0.5px;\n}\n\n.ml12 {\n  margin-left: 12px;\n}\n\n.div-2 {\n  display: grid;\n  margin-top: 16px;\n  margin-left: 13px;\n  margin-bottom: 16px;\n}\n\n.mt29 {\n  margin-top: 29px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.text-infobank {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.mt28 {\n  margin-top: 28px;\n}\n\n.mt24 {\n  margin-top: 24px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RwYXltZW50Y2hvb3NlYmFuay9mb29kcGF5bWVudGNob29zZWJhbmsucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kcGF5bWVudGNob29zZWJhbmsvZm9vZHBheW1lbnRjaG9vc2ViYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0FDQ1I7O0FEQ0k7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUVJLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0NSOztBRENJO0VBRUksYUFBQTtBQ0NSOztBRENJO0VBRUksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURBTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvZm9vZHBheW1lbnRjaG9vc2ViYW5rL2Zvb2RwYXltZW50Y2hvb3NlYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gICAgfSBcclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH0gXHJcbiAgICAuaW1nLmFjdGl2ZVxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyM0JGRDg7XHJcbiAgICB9XHJcbiAgICAuaW1nXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuICAgIH1cclxuICAgIC5ncmlkIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHhcclxuICAgIH1cclxuICAgIC5pb24taXRlbVxyXG4gICAge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAgICAgd2lkdGg6IDEwOCU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1vcHRpb25cclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgfVxyXG4gICAgLmNoa2JveFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1ib3JkZXJcclxuICAgIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNzRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmltZzFcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNzdweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1mbGV4XHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5tbDE4XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7IFxyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gICAgfVxyXG4gICAgLm1sMTJcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgIC5kaXYtMlxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm10MjlcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xyXG4gICAgfVxyXG4gICAgLm10MTZcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtaW5mb2JhbmtcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5tdDI4XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIH1cclxuICAgIC5tdDI0XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxuICAgIC5sYWJlbC1pbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5pb24tY2hlY2tib3h7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbjogLTJweDtcclxuICAgICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHJcbiIsIi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmltZy5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjMjNCRkQ4O1xufVxuXG4uaW1nIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0NDQ0NDQztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cblxuLmdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICB3aWR0aDogMTA4JTtcbn1cblxuLnRleHQtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG59XG5cbi5jaGtib3gge1xuICBtYXJnaW4tbGVmdDogMThweDtcbn1cblxuLmRpdi1ib3JkZXIge1xuICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogNzRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5pbWcxIHtcbiAgd2lkdGg6IDc3cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1sMTgge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLWJvcmRlci13aWR0aDogMC41cHg7XG59XG5cbi5tbDEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5kaXYtMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubXQyOSB7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG59XG5cbi5tdDE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm10Mjgge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4ubXQyNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.ts ***!
  \*********************************************************************/
/*! exports provided: FoodpaymentchoosebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentchoosebankPage", function() { return FoodpaymentchoosebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");











let FoodpaymentchoosebankPage = class FoodpaymentchoosebankPage {
    constructor(navCtrl, toastCtrl, booking, Roomif, storage, zone, searchhotel, safariViewController, loadingCtrl, foodService, platform, gf, bookCombo) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.Roomif = Roomif;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.safariViewController = safariViewController;
        this.loadingCtrl = loadingCtrl;
        this.foodService = foodService;
        this.platform = platform;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.ischecktext = true;
        this.arrbankrmb = [];
        this.auth_token = '';
        this.bookingCode = "";
        this.isckb = false;
        this.bankid = "";
        this.isremember = true;
        this.isdisable = false;
        this.priceshow = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember();
            }
        });
    }
    next() {
        this.TokenId = "";
        this.bankid = "";
        this.arrbankrmb.forEach(element => {
            if (element.checked) {
                this.TokenId = element.id;
                this.bankid = element.vpc_Card;
            }
        });
        if (this.TokenId) {
            this.presentLoading();
            if (this.bookingCode) {
                this.CreateUrlOnePay(this.bankid);
            }
            else {
                this.CreateBooking(this.bankid);
            }
        }
        else {
            if (this.id) {
                this.presentLoading();
                if (this.bookingCode) {
                    this.CreateUrlOnePay(this.id);
                }
                else {
                    this.CreateBooking(this.id);
                }
            }
            else {
                this.presentToast();
            }
        }
    }
    openWebpage(url) {
        var se = this;
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8',
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                        se.checkBooking().then((data) => {
                            if (data) {
                                se.foodService.ischeckpayment = '1';
                                se.storage.set("payment", "atm");
                                se.safariViewController.hide();
                                se.navCtrl.navigateForward('foodpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                            }
                        });
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin chọn 1 ngân hàng",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    clickitem(id) {
        this.zone.run(() => {
            this.id = id;
            this.TokenId = "";
            this.isdisable = false;
            this.arrbankrmb.forEach(element => {
                element.checked = false;
            });
        });
    }
    edit() {
        this.zone.run(() => {
            if (this.ischeck) {
                this.ischecktext = true;
            }
            else {
                this.ischecktext = false;
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.navigateBack('foodpaymentselect');
    }
    presentToastr(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    CreateUrlOnePay(bankid) {
        var se = this;
        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=atm&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankFoodOpenPay';
        se.gf.CreatePayoo(url).then(datapayoo => {
            datapayoo = JSON.parse(datapayoo);
            se.openWebpage(datapayoo.returnUrl);
            se.setinterval();
        });
    }
    setinterval() {
        var se = this;
        if (se.loader) {
            se.loader.dismiss();
        }
        clearInterval(se.intervalID);
        se.intervalID = setInterval(() => {
            se.zone.run(() => {
                se.checkBooking().then((data) => {
                    if (data) {
                        se.foodService.ischeckpayment = '1';
                        se.storage.set("payment", "atm");
                        clearInterval(se.intervalID);
                        window.close();
                        se.safariViewController.hide();
                        se.navCtrl.navigateForward('foodpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                    }
                });
            });
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(se.intervalID);
        }, 60000 * 15);
    }
    GeTokensOfMember() {
        var se = this;
        se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
            if (dataTokens) {
                dataTokens = JSON.parse(dataTokens);
                if (dataTokens.tokens.length > 0) {
                    for (let i = 0; i < dataTokens.tokens.length; i++) {
                        if (dataTokens.tokens[i].vpc_Card != 'VC' && dataTokens.tokens[i].vpc_Card != 'MC' && dataTokens.tokens[i].vpc_Card != 'JC' && dataTokens.tokens[i].vpc_Card != 'AE') {
                            var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
                            vpc_CardNum = vpc_CardNum[1];
                            var name_Bank = this.getnameBank(dataTokens.tokens[i].vpc_Card);
                            var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: name_Bank, checked: false, vpc_Card: dataTokens.tokens[i].vpc_Card };
                            this.arrbankrmb.push(item);
                        }
                    }
                    if (this.arrbankrmb.length > 0) {
                        this.arrbankrmb[0].checked = true;
                        this.isdisable = true;
                        this.TokenId = this.arrbankrmb[0].id;
                    }
                }
            }
        });
    }
    getnameBank(text) {
        var cardStr = "";
        switch (text) {
            case "970436":
                cardStr = "VietcomBank";
                break;
            case "970412":
                cardStr = "VRBank";
                break;
            case "970407":
                cardStr = "TechcomBank";
                break;
            case "970423":
                cardStr = "TienPhongBank";
                break;
            case "970415":
                cardStr = "ViettinBank";
                break;
            case "970441":
                cardStr = "VIB";
                break;
            case "970406":
                cardStr = "DongABank";
                break;
            case "970437":
                cardStr = "HDBank";
                break;
            case "970422":
                cardStr = "MB";
                break;
            case "970427":
                cardStr = "VietABank";
                break;
            case "970426":
                cardStr = "MaritimeBank";
                break;
            case "970431":
                cardStr = "EximBank";
                break;
            case "970443":
                cardStr = "SHB";
                break;
            case "970432":
                cardStr = "VPBank";
                break;
            case "970425":
                cardStr = "AnBinhBank";
                break;
            case "970403":
                cardStr = "SacomBank";
                break;
            case "970428":
                cardStr = "NamABank";
                break;
            case "970414":
                cardStr = "OceanBank";
                break;
            case "970418":
                cardStr = "BIDV";
                break;
            case "970440":
                cardStr = "SeaBank";
                break;
            case "970409":
                cardStr = "BacABank";
                break;
            case "970419":
                cardStr = "NaviBank";
                break;
            case "970405":
                cardStr = "AgriBank";
                break;
            case "970429":
                cardStr = "SaigonBank";
                break;
            case "970454":
                cardStr = "VietCapital";
                break;
            default:
                break;
        }
        return cardStr;
    }
    checkacc(item, ev) {
        this.zone.run(() => {
        });
        var se = this;
        if (ev.target.checked) {
            se.arrbankrmb.forEach(element => {
                element.checked = false;
            });
            item.checked = true;
            this.isdisable = true;
            this.isremember = true;
        }
        else {
            item.checked = false;
            ev.target.checked = false;
            ev.target.classList.remove("radio-checked");
        }
    }
    CreateBooking(bankid) {
        var se = this;
        se.gf.CreateBooking(se.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                se.bookingCode = data.response.bookingCode;
                se.startDate = data.response.startDate;
                se.endDate = data.response.endDate;
                se.gf.Updatefoodpaytype(se.bookingCode, 1).then(datatype => {
                    if (datatype) {
                        se.CreateUrlOnePay(bankid);
                    }
                });
            }
        });
    }
    checkBooking() {
        var se = this;
        return new Promise((resolve, rejec) => {
            setTimeout(() => {
                var options = {
                    'method': 'GET',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
                    'headers': {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
                    if (error)
                        throw new Error(error);
                    var rs = JSON.parse(response.body);
                    if (rs.response.status == 3) {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        resolve(true);
                    }
                    else {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        resolve(false);
                    }
                });
            }, 10000);
        });
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
};
FoodpaymentchoosebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foodpaymentchoosebank',
        template: __webpack_require__(/*! ./foodpaymentchoosebank.page.html */ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.html"),
        styles: [__webpack_require__(/*! ./foodpaymentchoosebank.page.scss */ "./src/app/foodpaymentchoosebank/foodpaymentchoosebank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"]])
], FoodpaymentchoosebankPage);



/***/ })

}]);
//# sourceMappingURL=foodpaymentchoosebank-foodpaymentchoosebank-module.js.map