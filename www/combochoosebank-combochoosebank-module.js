(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combochoosebank-combochoosebank-module"],{

/***/ "./src/app/combochoosebank/combochoosebank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/combochoosebank/combochoosebank.module.ts ***!
  \***********************************************************/
/*! exports provided: CombochoosebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombochoosebankPageModule", function() { return CombochoosebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combochoosebank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combochoosebank.page */ "./src/app/combochoosebank/combochoosebank.page.ts");







const routes = [
    {
        path: '',
        component: _combochoosebank_page__WEBPACK_IMPORTED_MODULE_6__["CombochoosebankPage"]
    }
];
let CombochoosebankPageModule = class CombochoosebankPageModule {
};
CombochoosebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combochoosebank_page__WEBPACK_IMPORTED_MODULE_6__["CombochoosebankPage"]]
    })
], CombochoosebankPageModule);



/***/ }),

/***/ "./src/app/combochoosebank/combochoosebank.page.html":
/*!***********************************************************!*\
  !*** ./src/app/combochoosebank/combochoosebank.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomchoosebankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n  <!-- Thanh toán bằng thẻ đã lưu -->\n  <div *ngIf=\"arrbankrmb.length>0\" class=\"mt16\">\n    <ion-label class=\"text-option\">Thanh toán bằng thẻ đã lưu</ion-label>\n    <div *ngFor=\"let item of arrbankrmb\" class=\"div-border\">\n      <div class=\"div-flex\">\n        <!-- <ion-radio  [checked]=\"item.checked\" (click)=\"checkacc(item)\"></ion-radio> -->\n        <div class=\"mt28\">\n          <ion-checkbox class=\"ml18\" [checked]=\"item.checked\" (ionChange)=\"checkacc(item,$event)\"></ion-checkbox>\n        </div>\n        <div>\n          <img class=\"ml12\" class=\"img1\" src={{item.imgbank}}>\n        </div>\n      </div>\n        <div class=\"div-2\">\n          <ion-label class=\"text-infobank\"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n            {{item.vpc_CardNum}}</ion-label>\n          <ion-label class=\"text-infobank\">{{item.name_Bank}}</ion-label>\n        </div>\n      </div>\n\n    </div>\n    <!-- Hoặc chọn ngân hàng khác -->\n    <div class=\"mt24\">\n      <ion-label *ngIf=\"arrbankrmb.length>0\" class=\"text-option\">Hoặc chọn ngân hàng khác</ion-label>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970407')\" [class.active]=\"id=='970407' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970407.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970423')\" [class.active]=\"id=='970423' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970423.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970415')\" [class.active]=\"id=='970415' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970415.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970441')\" [class.active]=\"id=='970441' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970441.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970427')\" [class.active]=\"id=='970427' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970427.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970426')\" [class.active]=\"id=='970426' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970426.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970431')\" [class.active]=\"id=='970431' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970431.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970443')\" [class.active]=\"id=='970443' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970443.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970437')\" [class.active]=\"id=='970437' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970437.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970436')\" [class.active]=\"id=='970436' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970436.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970406')\" [class.active]=\"id=='970406' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970406.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970422')\" [class.active]=\"id=='970422' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970422.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970428')\" [class.active]=\"id=='970428' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970428.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970440')\" [class.active]=\"id=='970440' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970440.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970414')\" [class.active]=\"id=='970414' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970414.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970418')\" [class.active]=\"id=='970418' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970418.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970409')\" [class.active]=\"id=='970409' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970409.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970432')\" [class.active]=\"id=='970432' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970432.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970419')\" [class.active]=\"id=='970419' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970419.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970405')\" [class.active]=\"id=='970405' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970405.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970429')\" [class.active]=\"id=='970429' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970429.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970403')\" [class.active]=\"id=='970403' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970403.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970425')\" [class.active]=\"id=='970425' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970425.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970412')\" [class.active]=\"id=='970412' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970412.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970454')\" [class.active]=\"id=='970454' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970454.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704331')\" [class.active]=\"id=='9704331' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/vietbank.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704161')\" [class.active]=\"id=='9704161' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/bank-acb.jpg\">\n          </ion-col>\n          <!-- them ngan hang 02-06-2022 -->\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704081')\" [class.active]=\"id=='9704081' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704081.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704491')\" [class.active]=\"id=='9704491' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704491.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704381')\" [class.active]=\"id=='9704381' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704381.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704521')\" [class.active]=\"id=='9704521' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704521.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704211')\" [class.active]=\"id=='9704211' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704211.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704391')\" [class.active]=\"id=='9704391' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704391.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704001')\" [class.active]=\"id=='9704001' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704001.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704301')\" [class.active]=\"id=='9704301' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704301.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704341')\" [class.active]=\"id=='9704341' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704341.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704571')\" [class.active]=\"id=='9704571' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704571.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704581')\" [class.active]=\"id=='9704581' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704581.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704241')\" [class.active]=\"id=='9704241' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/9704241.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" checked=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n  <!-- <ion-row>\n      <ion-col size=\"1\">\n          <ion-checkbox color=\"secondary\" (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"ischecktext\">\n          <ion-label text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"!ischecktext\">\n          <ion-label style=\"color: red\" text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n  </ion-row> -->\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" class=\"button button2\">Thanh toán và đặt phòng\n      ngay</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combochoosebank/combochoosebank.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/combochoosebank/combochoosebank.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.img.active {\n  border: 3px solid #23BFD8;\n}\n\n.img {\n  border: 1px solid #CCCCCC;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n}\n\n.text-option {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #4f4f4f;\n}\n\n.chkbox {\n  margin-left: 18px;\n}\n\n.div-border {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #26bed6;\n  display: flex;\n  height: 74px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.img1 {\n  width: 77px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 12px;\n  margin-top: 16px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.ml18 {\n  margin-left: 18px;\n  width: 18px;\n  height: 18px;\n  --border-radius: 24px;\n  --border-width: 0.5px;\n}\n\n.ml12 {\n  margin-left: 12px;\n}\n\n.div-2 {\n  display: grid;\n  margin-top: 16px;\n  margin-left: 13px;\n  margin-bottom: 16px;\n}\n\n.mt29 {\n  margin-top: 29px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.text-infobank {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.mt28 {\n  margin-top: 28px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.top5 {\n  top: 5px;\n}\n\n.mt24 {\n  margin-top: 24px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin: -18px;\n  padding: 8px;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib2Nob29zZWJhbmsvY29tYm9jaG9vc2ViYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tYm9jaG9vc2ViYW5rL2NvbWJvY2hvb3NlYmFuay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtBQ0FSOztBREVJO0VBQ0ksWUFBQTtBQ0NSOztBRENJO0VBRUUsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7QUNDTjs7QURDSTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ1I7O0FEQ0k7RUFFSSxpQkFBQTtBQ0NSOztBRENJO0VBRUksMkNBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ0k7RUFFSSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGFBQUE7QUNDUjs7QURDSTtFQUVJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxpQkFBQTtBQ0NSOztBRENJO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksUUFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0VSOztBREFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDR1I7O0FERE07RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNJUjs7QURGTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDS1I7O0FESE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNNUjs7QURKTTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDT1I7O0FETEk7RUFDRSxjQUFBO0FDUU4iLCJmaWxlIjoic3JjL2FwcC9jb21ib2Nob29zZWJhbmsvY29tYm9jaG9vc2ViYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgICB9IFxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfSBcclxuICAgIC5pbWcuYWN0aXZlXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzIzQkZEODtcclxuICAgIH1cclxuICAgIC5pbWdcclxuICAgIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xyXG4gICAgfVxyXG4gICAgLmdyaWQge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweFxyXG4gICAgfVxyXG4gICAgLmlvbi1pdGVtXHJcbiAgICB7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgICB3aWR0aDogMTA4JTtcclxuICAgIH1cclxuICAgIC50ZXh0LW9wdGlvblxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICB9XHJcbiAgICAuY2hrYm94XHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWJvcmRlclxyXG4gICAge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMjZiZWQ2O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nMVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3N3B4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWZsZXhcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLm1sMThcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgICAgICB3aWR0aDogMThweDsgXHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjRweDtcclxuICAgICAgICAtLWJvcmRlci13aWR0aDogMC41cHg7XHJcbiAgICB9XHJcbiAgICAubWwxMlxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi0yXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxM3B4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbiAgICAubXQyOVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICB9XHJcbiAgICAubXQxNlxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1pbmZvYmFua1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLm10MjhcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgfVxyXG4gICAgLm10MTBcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnRvcDVcclxuICAgIHtcclxuICAgICAgICB0b3A6NXB4XHJcbiAgICB9XHJcbiAgICAubXQyNFxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAubGFiZWwtaW5wdXR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuaW9uLWNoZWNrYm94e1xyXG4gICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICBtYXJnaW46IC0ycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi1ES3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XHJcbiAgICAgICAgbWFyZ2luOiAtMThweDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jaGVja2JveC1ES3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LURLe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIGNvbG9yOiAjNzE3NDg0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmJ0bi1kaXNhYmxlZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtbGluay1ES3tcclxuICAgICAgY29sb3I6ICMyZjgwZWRcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG4iLCIudG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5pbWcuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzIzQkZEODtcbn1cblxuLmltZyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0NDQ0M7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbi5ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgd2lkdGg6IDEwOCU7XG59XG5cbi50ZXh0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuXG4uY2hrYm94IHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG59XG5cbi5kaXYtYm9yZGVyIHtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjMjZiZWQ2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDc0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4uaW1nMSB7XG4gIHdpZHRoOiA3N3B4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tbDE4IHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xufVxuXG4ubWwxMiB7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uZGl2LTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tbGVmdDogMTNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLm10Mjkge1xuICBtYXJnaW4tdG9wOiAyOXB4O1xufVxuXG4ubXQxNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LWluZm9iYW5rIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tdDI4IHtcbiAgbWFyZ2luLXRvcDogMjhweDtcbn1cblxuLm10MTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udG9wNSB7XG4gIHRvcDogNXB4O1xufVxuXG4ubXQyNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5kaXYtREsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICBtYXJnaW46IC0xOHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaGVja2JveC1ESyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50ZXh0LURLIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzcxNzQ4NDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWxpbmstREsge1xuICBjb2xvcjogIzJmODBlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/combochoosebank/combochoosebank.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/combochoosebank/combochoosebank.page.ts ***!
  \*********************************************************/
/*! exports provided: CombochoosebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombochoosebankPage", function() { return CombochoosebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");











let CombochoosebankPage = class CombochoosebankPage {
    constructor(navCtrl, toastCtrl, booking, Roomif, storage, zone, searchhotel, alertCtrl, loadingCtrl, platform, gf, bookCombo, safariViewController) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.Roomif = Roomif;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.gf = gf;
        this.bookCombo = bookCombo;
        this.safariViewController = safariViewController;
        this.auth_token = '';
        this.arrbankrmb = [];
        this.totalPrice = 0;
        this.isckb = false;
        this.bankid = "";
        this.isremember = true;
        this.isdisable = false;
        this.ischeckedDK = true;
        this.searchhotel.rootPage = "combochoosebank";
        this.listcars = this.gf.getParams('carscombo');
        this.hoten = this.Roomif.hoten;
        this.phone = this.Roomif.phone;
        this.totalAdult = bookCombo.totalAdult;
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.storage.get('email').then(e => {
            if (e !== null) {
                this.email = e;
            }
        });
        gf.googleAnalytion('roomchoosebank', 'load', '');
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
    postapibook(bankid) {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/booking',
            headers: {
                apikey: 'sx25k7TABO6W4ULFjfxoJJaLjQr0wUGxYCph1TQiTBM',
                apisecret: 'wZH8vCalp5-ZsUzJiP1IP6V2beWUm0ej8G_25gzg2xg'
            },
            body: {
                departParams: {
                    trip_code: this.listcars.TransferBooking.departTransfer.TransferNumber,
                    total_seats: this.bookCombo.totalseatsdep,
                    total_price: this.bookCombo.pricedep,
                    code: '',
                    dropoff_place: this.listcars.TransferBooking.departTransfer.DropoffPlaceName,
                    pickup_place: this.listcars.TransferBooking.departTransfer.PickupPlaceName
                },
                returnParams: {
                    trip_code: this.listcars.TransferBooking.returnTransfer.TransferNumber,
                    total_seats: this.bookCombo.totalseatsret,
                    total_price: this.bookCombo.priceret,
                    code: '',
                    pickup_place: this.listcars.TransferBooking.returnTransfer.PickupPlaceName,
                    dropoff_place: this.listcars.TransferBooking.returnTransfer.DropoffPlaceName
                },
                customer_phone: se.phone,
                customer_name: se.hoten,
                customer_email: 'tc@ivivu.com',
                pay_status: 0
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (body.status == 0) {
                var json = body.data;
                if (json.length > 0) {
                    se.listcars.TransferBooking.departTransfer.ReservedTickets = JSON.stringify(json[0].data.reserve_Tickets);
                    se.listcars.TransferBooking.returnTransfer.ReservedTickets = JSON.stringify(json[1].data.reserve_Tickets);
                    var Seatsde = json[0].data.seats;
                    var Seatsre = json[1].data.seats;
                    var seatstextde = "";
                    var seatstextre = "";
                    for (let i = 0; i < Seatsde.length; i++) {
                        if (i == Seatsde.length - 1) {
                            seatstextde = seatstextde + Seatsde[i].seat_code;
                        }
                        else {
                            seatstextde = seatstextde + Seatsde[i].seat_code + ',';
                        }
                    }
                    for (let i = 0; i < Seatsre.length; i++) {
                        if (i == Seatsre.length - 1) {
                            seatstextre = seatstextre + Seatsre[i].seat_code;
                        }
                        else {
                            seatstextre = seatstextre + Seatsre[i].seat_code + ',';
                        }
                    }
                    se.listcars.TransferBooking.departTransfer.Seats = seatstextde;
                    se.listcars.TransferBooking.returnTransfer.Seats = seatstextre;
                    var expiredtimedep = moment__WEBPACK_IMPORTED_MODULE_8__(json[0].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
                    var expiredtimeret = moment__WEBPACK_IMPORTED_MODULE_8__(json[1].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
                    if (Number(expiredtimedep) == Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[0].data.reserve_Tickets.expired_time;
                    }
                    else if (Number(expiredtimedep) > Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[1].data.reserve_Tickets.expired_time;
                    }
                    else if (Number(expiredtimedep) < Number(expiredtimeret)) {
                        se.Roomif.expiredtime = json[0].data.reserve_Tickets.expired_time;
                    }
                    var textfullname = se.hoten.split(' ');
                    var FirstName;
                    var LastName;
                    if (textfullname.length > 2) {
                        let name = '';
                        for (let i = 1; i < textfullname.length; i++) {
                            if (i == 1) {
                                name += textfullname[i];
                            }
                            else {
                                name += ' ' + textfullname[i];
                            }
                        }
                        FirstName = textfullname[0];
                        LastName = name;
                    }
                    else if (textfullname.length > 1) {
                        FirstName = textfullname[0];
                        LastName = textfullname[1];
                    }
                    else if (textfullname.length == 1) {
                        FirstName = textfullname[0];
                        LastName = "";
                    }
                    se.listcars.TransferBooking.passengerInfo.FirstName = FirstName;
                    se.listcars.TransferBooking.passengerInfo.LastName = LastName;
                    se.listcars.TransferBooking.passengerInfo.Email = se.email;
                    se.listcars.TransferBooking.passengerInfo.MobileNumber = se.phone;
                    se.listcars.HotelBooking.CPhone = se.phone;
                    se.listcars.HotelBooking.LeadingName = se.hoten;
                    se.listcars.HotelBooking.LeadingEmail = se.email;
                    se.listcars.HotelBooking.LeadingPhone = se.phone;
                    se.CreateComboTransferBooking(bankid);
                }
                else {
                    se.loader.dismiss();
                    alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
                    se.navCtrl.navigateForward('/combocarnew');
                }
            }
            else {
                se.loader.dismiss();
                alert("Không còn ghế xe, vui lòng chọn Nhà xe khác!");
                se.navCtrl.navigateForward('/combocarnew');
            }
        });
    }
    CreateComboTransferBooking(bankid) {
        this.timestamp = Date.now();
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                this.timestamp = Date.now();
                var se = this;
                var form = this.listcars;
                form.HotelBooking.PaymentMethod = "0";
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    form
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                    if (error)
                        throw new Error(error);
                    se.loader.dismiss();
                    var obj = JSON.parse(body);
                    se.book = {
                        code: obj.Code,
                        timestamp: se.timestamp,
                        cost: se.priceshow,
                        BanhkID: se.id,
                        paymentType: "1",
                        DepartATCode: obj.TransferReserveCode.DepartReserveCode,
                        ReturnATCode: obj.TransferReserveCode.ReturnReserveCode
                    };
                    se.bookingCode = obj.Code;
                    var options = {
                        method: 'POST',
                        url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
                        headers: {},
                        form: {
                            BookingCode: obj.Code,
                            DepartATCode: obj.TransferReserveCode.DepartReserveCode,
                            ReturnATCode: obj.TransferReserveCode.ReturnReserveCode,
                            FromPlaceCode: se.listcars.TransferBooking.fromPlaceCode
                        }
                    };
                    requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                        if (error)
                            throw new Error(error);
                        var json = JSON.parse(body);
                        if (json.Error == 0) {
                            se.CreateUrlOnePay(bankid);
                        }
                    });
                });
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
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        if (se.Roomif.point && se.bookingCode) {
                            se.showInfo("Điểm tích luỹ " + se.Roomif.point + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                        }
                        if (se.Roomif.promocode && se.bookingCode) {
                            se.showInfo("Mã giảm giá " + se.Roomif.promocode + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                        }
                    }
                    clearInterval(se.intervalID);
                    this.intervalID = setInterval(() => {
                        this.checkPayment();
                    }, 1000 * 1);
                    setTimeout(() => {
                        clearInterval(this.intervalID);
                    }, 60000 * 15);
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el != null && el.length > 0) {
                    el.remove();
                }
            });
        }
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
        if ((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode)) {
            this.Roomif.bookingCode = this.bookingCode;
            this.navCtrl.navigateBack('/combocarnew');
        }
        else {
            this.navCtrl.back();
        }
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
            this.id = "";
        }
        else {
            item.checked = false;
            ev.target.checked = false;
            ev.target.classList.remove("radio-checked");
        }
    }
    CreateUrlOnePay(bankid) {
        var se = this;
        se.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_8__(timestamp).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + this.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                this.gf.CreateUrl(url).then(datapayoo => {
                    datapayoo = JSON.parse(datapayoo);
                    se.openWebpage(datapayoo.returnUrl);
                });
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                alert('Đã hết phòng, vui lòng chọn phòng khác');
                se.navCtrl.navigateBack('/hoteldetail/' + se.booking.HotelId);
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
        let _id = "";
        if (this.TokenId) {
            _id = this.bankid;
        }
        else {
            if (this.id) {
                _id = this.id;
            }
            else {
                this.presentToast();
                return;
            }
        }
        if (this.bookCombo.mealTypeRates.Supplier == 'SERI' && this.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal) {
            this.gf.checkAllotmentSeri(this.booking.HotelId, this.bookCombo.mealTypeRates.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.bookCombo.mealTypeRates.TotalRoom, 'SERI', this.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal).then((allow) => {
                if (allow) {
                    this.presentLoading();
                    this.postapibook(_id);
                }
                else {
                    this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
            });
        }
        else {
            this.presentLoading();
            this.postapibook(_id);
        }
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
    checkPayment() {
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
                    page: "roompaymentselect",
                    func: "roompaymentatm-mCheckBooking",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    para: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "roompaymentatm-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3) {
                    var id = rs.BookingCode;
                    var total = se.priceshow;
                    se.Roomif.priceshowtt = se.priceshow;
                    var ischeck = '0';
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    clearInterval(se.intervalID);
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    se.navCtrl.navigateForward('/combodoneprepay/' + id + '/' + total + '/' + ischeck);
                }
                else if (rs.StatusBooking == 9 || rs.StatusBooking == 2) {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    clearInterval(se.intervalID);
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    if (se.Roomif.point && se.bookingCode) {
                        se.showInfo("Điểm tích luỹ " + se.Roomif.point + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                    }
                    if (se.Roomif.promocode && se.bookingCode) {
                        se.showInfo("Mã giảm giá " + se.Roomif.promocode + " đã được dùng cho booking " + se.bookingCode + ".Xin vui lòng thao tác lại booking!");
                    }
                }
            }
            else {
                error.page = "combopayment";
                error.func = "combopayment-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
    showInfo(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: "Thông báo",
                message: msg,
                buttons: [{
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            alert.dismiss();
                            this.Roomif.promocode = "";
                            this.navCtrl.navigateForward('/combocarnew');
                        }
                    }
                ]
            });
            alert.present();
        });
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
CombochoosebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-combochoosebank',
        template: __webpack_require__(/*! ./combochoosebank.page.html */ "./src/app/combochoosebank/combochoosebank.page.html"),
        styles: [__webpack_require__(/*! ./combochoosebank.page.scss */ "./src/app/combochoosebank/combochoosebank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"]])
], CombochoosebankPage);



/***/ })

}]);
//# sourceMappingURL=combochoosebank-combochoosebank-module.js.map