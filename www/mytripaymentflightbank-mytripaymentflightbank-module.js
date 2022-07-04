(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentflightbank-mytripaymentflightbank-module"],{

/***/ "./src/app/mytripaymentflightbank/mytripaymentflightbank.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mytripaymentflightbank/mytripaymentflightbank.module.ts ***!
  \*************************************************************************/
/*! exports provided: MytripaymentflightbankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightbankPageModule", function() { return MytripaymentflightbankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentflightbank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentflightbank.page */ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentflightbank_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightbankPage"]
    }
];
let MytripaymentflightbankPageModule = class MytripaymentflightbankPageModule {
};
MytripaymentflightbankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentflightbank_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightbankPage"]]
    })
], MytripaymentflightbankPageModule);



/***/ }),

/***/ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/mytripaymentflightbank/mytripaymentflightbank.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomchoosebankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <!-- Thanh toán bằng thẻ đã lưu -->\n  <div *ngIf=\"arrbankrmb.length>0\" class=\"mt16\">\n    <ion-label class=\"text-option\">Thanh toán bằng thẻ đã lưu</ion-label>\n    <div *ngFor=\"let item of arrbankrmb\" class=\"div-border\">\n      <div class=\"mt28\">\n        <ion-checkbox class=\"ml18\"  [checked]=\"item.checked\" (ionChange)=\"checkacc(item,$event)\"></ion-checkbox>\n        <img class=\"ml12\" class=\"img1\" src={{item.imgbank}}>\n      </div>\n      <div class=\"div-2\">\n        <ion-label class=\"text-infobank\"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n        <ion-label class=\"text-infobank\">{{item.name_Bank}}</ion-label>\n      </div>\n    </div>\n\n  </div>\n  <!-- Hoặc chọn ngân hàng khác -->\n  <div class=\"mt24\">\n    <ion-label *ngIf=\"arrbankrmb.length>0\" class=\"text-option\">Hoặc chọn ngân hàng khác</ion-label>\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970407')\" [class.active]=\"id=='970407' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970407.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970423')\" [class.active]=\"id=='970423' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970423.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970415')\" [class.active]=\"id=='970415' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970415.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970441')\" [class.active]=\"id=='970441' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970441.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970427')\" [class.active]=\"id=='970427' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970427.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970426')\" [class.active]=\"id=='970426' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970426.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970431')\" [class.active]=\"id=='970431' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970431.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970443')\" [class.active]=\"id=='970443' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970443.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970437')\" [class.active]=\"id=='970437' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970437.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970436')\" [class.active]=\"id=='970436' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970436.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970406')\" [class.active]=\"id=='970406' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970406.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970422')\" [class.active]=\"id=='970422' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970422.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970428')\" [class.active]=\"id=='970428' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970428.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970440')\" [class.active]=\"id=='970440' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970440.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970414')\" [class.active]=\"id=='970414' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970414.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970418')\" [class.active]=\"id=='970418' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970418.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970409')\" [class.active]=\"id=='970409' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970409.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970432')\" [class.active]=\"id=='970432' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970432.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970419')\" [class.active]=\"id=='970419' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970419.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970405')\" [class.active]=\"id=='970405' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970405.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970429')\" [class.active]=\"id=='970429' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970429.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970403')\" [class.active]=\"id=='970403' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970403.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970425')\" [class.active]=\"id=='970425' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970425.png\">\n\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970412')\" [class.active]=\"id=='970412' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970412.png\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-grid>\n      <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('970454')\" [class.active]=\"id=='970454' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/970454.png\">\n        </ion-col>\n        <ion-col size=\"3\">\n          <img class=\"img\" (click)=\"clickitem('9704161')\" [class.active]=\"id=='9704161' \"\n            src=\"https://res.ivivu.com/payment/img/onepay/bank-acb.jpg\">\n        </ion-col>\n    <!-- them ngan hang 02-06-2022 -->\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704081')\" [class.active]=\"id=='9704081' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704081.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704491')\" [class.active]=\"id=='9704491' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704491.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704381')\" [class.active]=\"id=='9704381' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704381.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704521')\" [class.active]=\"id=='9704521' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704521.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704211')\" [class.active]=\"id=='9704211' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704211.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704391')\" [class.active]=\"id=='9704391' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704391.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704001')\" [class.active]=\"id=='9704001' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704001.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704301')\" [class.active]=\"id=='9704301' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704301.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704341')\" [class.active]=\"id=='9704341' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704341.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid>\n  <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704571')\" [class.active]=\"id=='9704571' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704571.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704581')\" [class.active]=\"id=='9704581' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704581.png\">\n    </ion-col>\n    <ion-col size=\"3\">\n      <img class=\"img\" (click)=\"clickitem('9704241')\" [class.active]=\"id=='9704241' \"\n        src=\"https://res.ivivu.com/payment/img/onepay/9704241.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n  </div>\n  <div style=\"margin-top: 22px\">\n    <ion-checkbox [disabled]=\"isdisable\" (ionChange)=\"rememberCard()\"  class=\"ion-checkbox\" checked=\"isremember\" color=\"secondary\"></ion-checkbox>\n    <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n  </div>\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" class=\"button button2\">Thanh toán và xuất vé</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/mytripaymentflightbank/mytripaymentflightbank.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.img.active {\n  border: 3px solid #23BFD8;\n}\n\n.img {\n  border: 1px solid #CCCCCC;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n}\n\n.text-option {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #4f4f4f;\n}\n\n.chkbox {\n  margin-left: 18px;\n}\n\n.div-border {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #26bed6;\n  display: flex;\n  height: 74px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.img1 {\n  width: 77px;\n  height: 17.1px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 12px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.ml18 {\n  margin-left: 18px;\n  width: 18px;\n  height: 18px;\n  --border-radius: 24px;\n  --border-width: 0.5px;\n}\n\n.ml12 {\n  margin-left: 12px;\n}\n\n.div-2 {\n  display: grid;\n  margin-top: 16px;\n  margin-left: 13px;\n  margin-bottom: 16px;\n}\n\n.mt29 {\n  margin-top: 29px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.text-infobank {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.mt28 {\n  margin-top: 28px;\n}\n\n.mt24 {\n  margin-top: 24px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin: -18px;\n  padding: 8px;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0YmFuay9teXRyaXBheW1lbnRmbGlnaHRiYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0YmFuay9teXRyaXBheW1lbnRmbGlnaHRiYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO0FDQVI7O0FERUk7RUFDSSxZQUFBO0FDQ1I7O0FEQ0k7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsV0FBQTtBQ0NOOztBRENJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSwyQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDSTtFQUVJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxhQUFBO0FDQ1I7O0FEQ0k7RUFFSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NSOztBRENJO0VBRUksaUJBQUE7QUNDUjs7QURDSTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR1I7O0FEQU07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNHUjs7QURETTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDSVI7O0FERk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLUjs7QURITTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDTVI7O0FESkk7RUFDRSxjQUFBO0FDT04iLCJmaWxlIjoic3JjL2FwcC9teXRyaXBheW1lbnRmbGlnaHRiYW5rL215dHJpcGF5bWVudGZsaWdodGJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICB9IFxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH0gXG4gICAgLmltZy5hY3RpdmVcbiAgICB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICMyM0JGRDg7XG4gICAgfVxuICAgIC5pbWdcbiAgICB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gICAgfVxuICAgIC5ncmlkIHtcbiAgICAgICAgcGFkZGluZzogMHB4XG4gICAgfVxuICAgIC5pb24taXRlbVxuICAgIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAgIHdpZHRoOiAxMDglO1xuICAgIH1cbiAgICAudGV4dC1vcHRpb25cbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIH1cbiAgICAuY2hrYm94XG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICB9XG4gICAgLmRpdi1ib3JkZXJcbiAgICB7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgICAgIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICB9XG4gICAgLmltZzFcbiAgICB7XG4gICAgICAgIHdpZHRoOiA3N3B4O1xuICAgICAgICBoZWlnaHQ6IDE3LjFweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cbiAgICAuZGl2LWZsZXhcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5tbDE4XG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7IFxuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xuICAgIH1cbiAgICAubWwxMlxuICAgIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtMlxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5tdDI5XG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgIH1cbiAgICAubXQxNlxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtaW5mb2JhbmtcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubXQyOFxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG4gICAgLm10MjRcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC5sYWJlbC1pbnB1dHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICAgIC5pb24tY2hlY2tib3h7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogLTJweDtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5kaXYtREt7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gICAgICAgIG1hcmdpbjogLTE4cHg7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5jaGVja2JveC1ES3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LURLe1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIGNvbG9yOiAjNzE3NDg0O1xuICAgICAgICBtYXJnaW4tbGVmdDogM3B4O1xuICAgICAgfVxuICAgICAgLmJ0bi1kaXNhYmxlZHtcbiAgICAgICAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gICAgLnRleHQtbGluay1ES3tcbiAgICAgIGNvbG9yOiAjMmY4MGVkXG4gICAgfVxuXG5cblxuXG5cblxuIiwiLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uaW1nLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyM0JGRDg7XG59XG5cbi5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuXG4uZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIHdpZHRoOiAxMDglO1xufVxuXG4udGV4dC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLmNoa2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuXG4uZGl2LWJvcmRlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmltZzEge1xuICB3aWR0aDogNzdweDtcbiAgaGVpZ2h0OiAxNy4xcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1sMTgge1xuICBtYXJnaW4tbGVmdDogMThweDtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNHB4O1xuICAtLWJvcmRlci13aWR0aDogMC41cHg7XG59XG5cbi5tbDEyIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5kaXYtMiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ubXQyOSB7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG59XG5cbi5tdDE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm10Mjgge1xuICBtYXJnaW4tdG9wOiAyOHB4O1xufVxuXG4ubXQyNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5kaXYtREsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICBtYXJnaW46IC0xOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaGVja2JveC1ESyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50ZXh0LURLIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzcxNzQ4NDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWxpbmstREsge1xuICBjb2xvcjogIzJmODBlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/mytripaymentflightbank/mytripaymentflightbank.page.ts ***!
  \***********************************************************************/
/*! exports provided: MytripaymentflightbankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightbankPage", function() { return MytripaymentflightbankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");












let MytripaymentflightbankPage = class MytripaymentflightbankPage {
    constructor(activityService, navCtrl, toastCtrl, booking, Roomif, storage, zone, searchhotel, safariViewController, loadingCtrl, _flightService, platform, gf, bookCombo, backgroundmode) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.Roomif = Roomif;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.safariViewController = safariViewController;
        this.loadingCtrl = loadingCtrl;
        this._flightService = _flightService;
        this.platform = platform;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.backgroundmode = backgroundmode;
        this.ischecktext = true;
        this.arrbankrmb = [];
        this.auth_token = '';
        this.bookingCode = "";
        this.isckb = false;
        this.bankid = "";
        this.allowCheckHoldTicket = true;
        this.isremember = true;
        this.isdisable = false;
        this.ischeckedDK = true;
        this.priceshow = this._flightService.itemFlightCache.totalPriceDisplay;
        this.platform.ready().then(() => {
            this.backgroundmode.on('activate').subscribe(() => {
                console.log('background mode enabled');
            });
            this.backgroundmode.enable();
        });
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
        this.totalpricedisplay = this.activityService.objPaymentMytrip.trip.priceShow;
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        this.cus_phone = this.activityService.objPaymentMytrip.trip.cus_phone;
    }
    next() {
        this.gf.showLoading();
        this.TokenId = "";
        this.bankid = "";
        this.arrbankrmb.forEach(element => {
            if (element.checked) {
                this.TokenId = element.id;
                this.bankid = element.vpc_Card;
            }
        });
        if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            if (this.TokenId) {
                if (this.bookingCode) {
                    this.CreateUrlOnePay(this.bankid);
                }
            }
            else {
                if (this.id) {
                    if (this.bookingCode) {
                        this.CreateUrlOnePay(this.id);
                    }
                }
                else {
                    this.gf.hideLoading();
                    this.presentToast();
                }
            }
        }
        else {
            this.checkAllowRepay().then((check) => {
                if (check) {
                    if (this.TokenId) {
                        if (this.bookingCode) {
                            this.CreateUrlOnePay(this.bankid);
                        }
                    }
                    else {
                        if (this.id) {
                            if (this.bookingCode) {
                                this.CreateUrlOnePay(this.id);
                            }
                        }
                        else {
                            this.gf.hideLoading();
                            this.presentToast();
                        }
                    }
                }
                else {
                    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                        if (check) {
                            if (this.TokenId) {
                                if (this.bookingCode) {
                                    this.CreateUrlOnePay(this.bankid);
                                }
                            }
                            else {
                                if (this.id) {
                                    if (this.bookingCode) {
                                        this.CreateUrlOnePay(this.id);
                                    }
                                }
                                else {
                                    this.gf.hideLoading();
                                    this.presentToast();
                                }
                            }
                        }
                        else {
                            this.gf.hideLoading();
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                            clearInterval(this.intervalID);
                        }
                    });
                }
            });
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
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened') {
                        console.log(url.link);
                    }
                    else if (result.event === 'loaded') {
                        console.log(url.link);
                    }
                    else if (result.event === 'closed') {
                        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
                            se.checkComboHotelCityPayment();
                        }
                        else {
                            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se._flightService.itemFlightCache.reservationId;
                            se.gf.Checkpayment(url).then((datapayment) => {
                                var checkpay = JSON.parse(datapayment);
                                if (checkpay.ipnCall == "CALLED_OK") {
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se.getSummaryBooking().then((databkg) => {
                                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                                    });
                                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                                }
                                else {
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se._flightService.paymentError = checkpay;
                                    se.navCtrl.navigateForward('/flightpaymenttimeout/1');
                                }
                            });
                        }
                    }
                }, (error) => console.error(error));
            }
            else {
                se.gf.showLoading();
                se.hideLoading();
            }
        });
    }
    checkComboHotelCityPayment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "mytrippaymentflightselect",
                    func: "checkComboHotelCityPayment",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "mytrippaymentflightselect";
                error.func = "checkComboHotelCityPayment";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3 && !rs.error) {
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                }
                else if (rs.error) {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = rs.error;
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                }
            }
            else {
                error.page = "roomchoosebank";
                error.func = "mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.hideLoading();
                se.gf.hideLoading();
                se.safariViewController.hide();
                clearInterval(se.intervalID);
                se._flightService.paymentError = rs.error;
                se.navCtrl.navigateForward('/flightpaymenttimeout/0');
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
            this.isdisable = false;
            this.TokenId = "";
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
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
        });
    }
    goback() {
        this.navCtrl.back();
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
        var totalPrice = this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            se.gf.updatePaymentMethodForCombo(se.bookingCode, "1");
            se._flightService.itemFlightCache.periodPaymentDate = se.activityService.objPaymentMytrip.trip.delivery_payment_date;
            var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
            se.gf.CreatePayoo(url).then(datapayoo => {
                if (datapayoo.success) {
                    se.openWebpage(datapayoo.returnUrl);
                    se.zone.run(() => {
                        se.setinterval(null);
                    });
                }
                else {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                }
            });
        }
        else {
            se.gf.updatePaymentMethodNew(se.bookingCode, 2, se.bankid, "").then((data) => {
                if (data && data.isHoldSuccess) {
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                    se.gf.CreatePayoo(url).then(datapayoo => {
                        if (datapayoo.success) {
                            se._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
                            se.openWebpage(datapayoo.returnUrl);
                            se.zone.run(() => {
                                se.setinterval(null);
                            });
                        }
                        else {
                            se.hideLoading();
                            se.gf.hideLoading();
                            se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                        }
                    });
                }
                else {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                }
            });
        }
    }
    GeTokensOfMember() {
        var se = this;
        se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
            if (dataTokens) {
                dataTokens = JSON.parse(dataTokens);
                if (dataTokens.tokens.length > 0) {
                    this.arrbankrmb = [];
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
        var se = this;
        if (ev.target.checked) {
            se.arrbankrmb.forEach(element => {
                element.checked = false;
            });
            item.checked = true;
            this.isdisable = true;
            this.isremember = true;
            se.id = '';
        }
        else {
            item.checked = false;
            ev.target.checked = false;
            ev.target.classList.remove("radio-checked");
        }
    }
    setinterval(timeout) {
        if (this.loader) {
            this.loader.dismiss();
        }
        this.gf.hideLoading();
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
                this.checkComboHotelCityPayment();
            }
            else {
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + this.bookingCode;
                this.gf.Checkpayment(url).then((data) => {
                    var checkpay = JSON.parse(data);
                    if (checkpay.ipnCall == "CALLED_OK") {
                        this._flightService.itemFlightCache.ischeckpayment = 1;
                        this.hideLoading();
                        this.gf.hideLoading();
                        this.safariViewController.hide();
                        clearInterval(this.intervalID);
                        this.getSummaryBooking().then((databkg) => {
                            this._flightService.itemFlightCache.dataSummaryBooking = databkg;
                        });
                        this.navCtrl.navigateForward('/mytripaymentflighdone');
                    }
                    else if (checkpay.ipnCall == "CALLED_FAIL" || checkpay.ipnCall == "CALLED_TIMEOUT") {
                        this.hideLoading();
                        this.gf.hideLoading();
                        this.safariViewController.hide();
                        clearInterval(this.intervalID);
                        this._flightService.paymentError = checkpay;
                        this.navCtrl.navigateForward('/flightpaymenttimeout/1');
                    }
                });
            }
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, timeout ? timeout : 60000 * 9.1);
    }
    getSummaryBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightpaymentselect";
                    error.func = "getSummaryBooking";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    checkHoldTicket(data) {
        var se = this, res = false;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode;
        se.callCheckHoldTicket().then((check) => {
            if (!check && se.allowCheckHoldTicket) {
                res = false;
                setTimeout(() => {
                    se.checkHoldTicket(data);
                }, 3000);
            }
            else {
                if (check) {
                    se.gf.hideLoading();
                    window.close();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                }
                else {
                    clearInterval(se.intervalID);
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    window.close();
                    se.navCtrl.navigateForward('/flightpaymentwarning');
                }
            }
        });
        setTimeout(() => {
            se.allowCheckHoldTicket = false;
        }, 1000 * 60 * 7);
    }
    callCheckHoldTicket() {
        var res = false;
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "globalfunction";
                    error.func = "updatePaymentMethod";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    if (se._flightService) {
                        se._flightService.itemFlightCache.dataSummaryBooking = result;
                    }
                    if (result.expIssueTicket) {
                        se.allowCheckHoldTicket = false;
                        resolve(false);
                    }
                    else {
                        if (result.isRoundTrip) {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1
                                && result.departFlight.status == 4 && result.returnFlight.status == 4) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                        else {
                            if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.departFlight.status == 4) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        }
                    }
                }
            });
        });
    }
    callCheckPayment() {
        var se = this;
        se.checkPayment();
    }
    checkPayment() {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se._flightService.itemFlightCache.reservationId;
        se.gf.Checkpayment(url).then((data) => {
            var checkpay = JSON.parse(data);
            if (!checkpay.status) {
                setTimeout(() => {
                    se.callCheckPayment();
                }, 1000 * 2);
            }
            else {
                se.backgroundmode.disable();
                se.safariViewController.hide();
            }
        });
    }
    checkAllowRepay() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.callCheckHoldTicket().then((check) => {
                let databkg = se._flightService.itemFlightCache.dataSummaryBooking;
                let data = se._flightService.itemFlightCache;
                if (data.ischeckpayment == 0) {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                }
                else {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                }
            });
        });
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
    checkDk() {
        this.ischeckedDK = !this.ischeckedDK;
    }
    openWebpageDK(url) {
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
};
MytripaymentflightbankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mytripaymentflightbank',
        template: __webpack_require__(/*! ./mytripaymentflightbank.page.html */ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentflightbank.page.scss */ "./src/app/mytripaymentflightbank/mytripaymentflightbank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_10__["BackgroundMode"]])
], MytripaymentflightbankPage);



/***/ })

}]);
//# sourceMappingURL=mytripaymentflightbank-mytripaymentflightbank-module.js.map