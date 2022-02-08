(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombochosebank-flightcombochosebank-module"],{

/***/ "./src/app/flightcombochosebank/flightcombochosebank.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightcombochosebank/flightcombochosebank.module.ts ***!
  \*********************************************************************/
/*! exports provided: FlightcombochosebankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombochosebankPageModule", function() { return FlightcombochosebankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombochosebank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombochosebank.page */ "./src/app/flightcombochosebank/flightcombochosebank.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombochosebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombochosebankPage"]
    }
];
let FlightcombochosebankPageModule = class FlightcombochosebankPageModule {
};
FlightcombochosebankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombochosebank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombochosebankPage"]]
    })
], FlightcombochosebankPageModule);



/***/ }),

/***/ "./src/app/flightcombochosebank/flightcombochosebank.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/flightcombochosebank/flightcombochosebank.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomchoosebankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <!-- Thanh toán bằng thẻ đã lưu -->\n  <div *ngIf=\"arrbankrmb.length>0\" class=\"mt16\">\n    <ion-label class=\"text-option\">Thanh toán bằng thẻ đã lưu</ion-label>\n    <div *ngFor=\"let item of arrbankrmb\" class=\"div-border\">\n      <div class=\"div-flex\">\n        <!-- <ion-radio  [checked]=\"item.checked\" (click)=\"checkacc(item)\"></ion-radio> -->\n        <div class=\"mt28\">\n          <ion-checkbox class=\"ml18\" [checked]=\"item.checked\" (ionChange)=\"checkacc(item,$event)\"></ion-checkbox>\n        </div>\n        <div>\n          <img class=\"ml12\" class=\"img1\" src={{item.imgbank}}>\n        </div>\n      </div>\n        <div class=\"div-2\">\n          <ion-label class=\"text-infobank\"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n            {{item.vpc_CardNum}}</ion-label>\n          <ion-label class=\"text-infobank\">{{item.name_Bank}}</ion-label>\n        </div>\n      </div>\n\n    </div>\n    <!-- Hoặc chọn ngân hàng khác -->\n    <div class=\"mt24\">\n      <ion-label *ngIf=\"arrbankrmb.length>0\" class=\"text-option\">Hoặc chọn ngân hàng khác</ion-label>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970407')\" [class.active]=\"id=='970407' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970407.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970423')\" [class.active]=\"id=='970423' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970423.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970415')\" [class.active]=\"id=='970415' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970415.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970441')\" [class.active]=\"id=='970441' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970441.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970427')\" [class.active]=\"id=='970427' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970427.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970426')\" [class.active]=\"id=='970426' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970426.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970431')\" [class.active]=\"id=='970431' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970431.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970443')\" [class.active]=\"id=='970443' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970443.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970437')\" [class.active]=\"id=='970437' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970437.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970436')\" [class.active]=\"id=='970436' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970436.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970406')\" [class.active]=\"id=='970406' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970406.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970422')\" [class.active]=\"id=='970422' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970422.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970428')\" [class.active]=\"id=='970428' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970428.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970440')\" [class.active]=\"id=='970440' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970440.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970414')\" [class.active]=\"id=='970414' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970414.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970418')\" [class.active]=\"id=='970418' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970418.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970409')\" [class.active]=\"id=='970409' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970409.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970432')\" [class.active]=\"id=='970432' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970432.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970419')\" [class.active]=\"id=='970419' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970419.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970405')\" [class.active]=\"id=='970405' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970405.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970429')\" [class.active]=\"id=='970429' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970429.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970403')\" [class.active]=\"id=='970403' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970403.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970425')\" [class.active]=\"id=='970425' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970425.png\">\n\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970412')\" [class.active]=\"id=='970412' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970412.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-grid>\n        <ion-row style=\"margin-left: -10px;margin-top: -15px\">\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('970454')\" [class.active]=\"id=='970454' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/970454.png\">\n          </ion-col>\n          <ion-col size=\"3\">\n            <img class=\"img\" (click)=\"clickitem('9704331')\" [class.active]=\"id=='9704331' \"\n              src=\"https://res.ivivu.com/payment/img/onepay/vietbank.png\">\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div style=\"margin-top: 22px\">\n      <ion-checkbox (ionChange)=\"rememberCard()\" [disabled]=\"isdisable\" class=\"ion-checkbox\" checked=\"isremember\" color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n  <!-- <ion-row>\n      <ion-col size=\"1\">\n          <ion-checkbox color=\"secondary\" (ionChange)=\"edit()\" [(ngModel)]=\"ischeck\"></ion-checkbox>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"ischecktext\">\n          <ion-label text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n        <ion-col size=\"11\" *ngIf=\"!ischecktext\">\n          <ion-label style=\"color: red\" text-wrap>Tôi đồng ý các\n            <a style=\"color: #26bed6\"\n              href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\"\n              target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n        </ion-col>\n  </ion-row> -->\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và đặt phòng\n      ngay</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombochosebank/flightcombochosebank.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/flightcombochosebank/flightcombochosebank.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.img.active {\n  border: 3px solid #23BFD8;\n}\n\n.img {\n  border: 1px solid #CCCCCC;\n  height: 100%;\n  width: 100%;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n\n.grid {\n  padding: 0px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  width: 108%;\n}\n\n.text-option {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #4f4f4f;\n}\n\n.chkbox {\n  margin-left: 18px;\n}\n\n.div-border {\n  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);\n  border: solid 0.5px #26bed6;\n  display: flex;\n  height: 74px;\n  border-radius: 4px;\n  margin-top: 8px;\n}\n\n.img1 {\n  width: 77px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-left: 12px;\n  margin-top: 16px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.ml18 {\n  margin-left: 18px;\n  width: 18px;\n  height: 18px;\n  --border-radius: 24px;\n  --border-width: 0.5px;\n}\n\n.ml12 {\n  margin-left: 12px;\n}\n\n.div-2 {\n  display: grid;\n  margin-top: 16px;\n  margin-left: 13px;\n  margin-bottom: 16px;\n}\n\n.mt29 {\n  margin-top: 29px;\n}\n\n.mt16 {\n  margin-top: 16px;\n}\n\n.text-infobank {\n  font-size: 16px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.mt28 {\n  margin-top: 28px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.top5 {\n  top: 5px;\n}\n\n.mt24 {\n  margin-top: 24px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvY2hvc2ViYW5rL2ZsaWdodGNvbWJvY2hvc2ViYW5rLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29tYm9jaG9zZWJhbmsvZmxpZ2h0Y29tYm9jaG9zZWJhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNBUjs7QURFSTtFQUNJLFlBQUE7QUNDUjs7QURDSTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0FDQ047O0FEQ0k7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBRUksaUJBQUE7QUNDUjs7QURDSTtFQUVJLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSOztBRENJO0VBRUksV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxhQUFBO0FDQ1I7O0FEQ0k7RUFFSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0NSOztBRENJO0VBRUksaUJBQUE7QUNDUjs7QURDSTtFQUVJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ1I7O0FEQ0k7RUFFSSxnQkFBQTtBQ0NSOztBRENJO0VBRUksZ0JBQUE7QUNDUjs7QURDSTtFQUVJLFFBQUE7QUNDUjs7QURDSTtFQUVJLGdCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxrQkFBQTtBQ0NSOztBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHUiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvY2hvc2ViYW5rL2ZsaWdodGNvbWJvY2hvc2ViYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgfSBcbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9IFxuICAgIC5pbWcuYWN0aXZlXG4gICAge1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjMjNCRkQ4O1xuICAgIH1cbiAgICAuaW1nXG4gICAge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgIH1cbiAgICAuZ3JpZCB7XG4gICAgICAgIHBhZGRpbmc6IDBweFxuICAgIH1cbiAgICAuaW9uLWl0ZW1cbiAgICB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgICB3aWR0aDogMTA4JTtcbiAgICB9XG4gICAgLnRleHQtb3B0aW9uXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICB9XG4gICAgLmNoa2JveFxuICAgIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgfVxuICAgIC5kaXYtYm9yZGVyXG4gICAge1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICMyNmJlZDY7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNzRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgfVxuICAgIC5pbWcxXG4gICAge1xuICAgICAgICB3aWR0aDogNzdweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNnB4O1xuICAgIH1cbiAgICAuZGl2LWZsZXhcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIC5tbDE4XG4gICAge1xuICAgICAgICBtYXJnaW4tbGVmdDogMThweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7IFxuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAuNXB4O1xuICAgIH1cbiAgICAubWwxMlxuICAgIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtMlxuICAgIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC5tdDI5XG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgIH1cbiAgICAubXQxNlxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICB9XG4gICAgLnRleHQtaW5mb2JhbmtcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubXQyOFxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICB9XG4gICAgLm10MTBcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC50b3A1XG4gICAge1xuICAgICAgICB0b3A6NXB4XG4gICAgfVxuICAgIC5tdDI0XG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgIH1cbiAgICAudGV4dC1jZW50ZXJcbiAgICB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgfVxuICAgICAgLmlvbi1jaGVja2JveHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgbWFyZ2luOiAtMnB4O1xuICAgICAgfVxuXG5cblxuIiwiLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4uaW1nLmFjdGl2ZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMyM0JGRDg7XG59XG5cbi5pbWcge1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDQ0NDO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xufVxuXG4uZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIHdpZHRoOiAxMDglO1xufVxuXG4udGV4dC1vcHRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzRmNGY0Zjtcbn1cblxuLmNoa2JveCB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xufVxuXG4uZGl2LWJvcmRlciB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlcjogc29saWQgMC41cHggIzI2YmVkNjtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA3NHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmltZzEge1xuICB3aWR0aDogNzdweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWwxOCB7XG4gIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjVweDtcbn1cblxuLm1sMTIge1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmRpdi0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5tdDI5IHtcbiAgbWFyZ2luLXRvcDogMjlweDtcbn1cblxuLm10MTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubXQyOCB7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG5cbi5tdDEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRvcDUge1xuICB0b3A6IDVweDtcbn1cblxuLm10MjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightcombochosebank/flightcombochosebank.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightcombochosebank/flightcombochosebank.page.ts ***!
  \*******************************************************************/
/*! exports provided: FlightcombochosebankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombochosebankPage", function() { return FlightcombochosebankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
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











let FlightcombochosebankPage = class FlightcombochosebankPage {
    constructor(navCtrl, toastCtrl, booking, Roomif, storage, zone, searchhotel, loadingCtrl, platform, gf, bookCombo, safariViewController) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.Roomif = Roomif;
        this.storage = storage;
        this.zone = zone;
        this.searchhotel = searchhotel;
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
        this.ischeckTransaction = false;
        this.isremember = true;
        this.isdisable = false;
        this.searchhotel.rootPage = "flightcombochosebank";
        this.listfly = this.gf.getParams('flightcombo');
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
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
                        se.checkPayment(1);
                    }
                    clearInterval(se.intervalID);
                    this.intervalID = setInterval(() => {
                        this.checkPayment(0);
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
    checkPayment(stt) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookCombo.bookingcode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roomchoosebank",
                    func: "roomchoosebank-mCheckBooking",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomchoosebank";
                error.func = "roomchoosebank-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (stt == 0) {
                    if (rs.StatusBooking == 3) {
                        var id = rs.BookingCode;
                        var total = se.priceshow;
                        var ischeck = '0';
                        se.Roomif.priceshowtt = se.priceshow;
                        se.safariViewController.hide();
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('/flightcombodoneprepay/' + id + '/' + total + '/' + ischeck);
                    }
                    else if (rs.StatusBooking == 9 || rs.StatusBooking == 2) {
                        clearInterval(se.intervalID);
                        se.safariViewController.hide();
                    }
                }
                else {
                    if (rs.StatusBooking == 3) {
                        var id = rs.BookingCode;
                        var total = se.priceshow;
                        var ischeck = '0';
                        se.Roomif.priceshowtt = se.priceshow;
                        se.safariViewController.hide();
                        clearInterval(se.intervalID);
                        se.navCtrl.navigateForward('/flightcombodoneprepay/' + id + '/' + total + '/' + ischeck);
                    }
                    else {
                        clearInterval(se.intervalID);
                        se.safariViewController.hide();
                    }
                }
            }
            else {
                error.page = "roomchoosebank";
                error.func = "mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
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
        this.navCtrl.back();
    }
    callCheckHoldTicket(url) {
        var res = false;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: url,
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
            });
        });
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
    CreateUrlOnePay(bankid) {
        var se = this;
        this.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_8__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + se.totalPrice + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                this.gf.CreateUrl(url).then(datapayoo => {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    datapayoo = JSON.parse(datapayoo);
                    se.openWebpage(datapayoo.returnUrl);
                });
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                alert('Đã hết thời hạn thanh toán, vui lòng thực hiện lại');
                se.navCtrl.navigateForward('/flightcomboreviews');
            }
        });
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
    postapibook(bankid) {
        this.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_8__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_8__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                var se = this;
                se.timestamp = Date.now();
                var options = {
                    'method': 'POST',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookCombo.bookingcode + '&paymentMethod=0',
                    'headers': {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response) {
                    if (error)
                        throw new Error(error);
                    if (se.bookCombo.DepartATCode && se.bookCombo.ReturnATCode) {
                        se.CreateUrlOnePay(bankid);
                    }
                    else {
                        se.gf.holdTicketCombo(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
                            if (datafly.depcode && datafly.retcode) {
                                se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                                    if (data) {
                                        se.ischeckTransaction = true;
                                        se.bookCombo.DepartATCode = datafly.depcode;
                                        se.bookCombo.ReturnATCode = datafly.retcode;
                                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=atm&source=app&amount=' + se.totalPrice + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&BankId=' + bankid + '&TokenId=' + se.TokenId + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                                        se.gf.CreateUrl(url).then(dataBuildLink => {
                                            dataBuildLink = JSON.parse(dataBuildLink);
                                            if (dataBuildLink.success) {
                                                if (se.loader) {
                                                    se.loader.dismiss();
                                                }
                                                se.openWebpage(dataBuildLink.returnUrl);
                                            }
                                        });
                                    }
                                    else {
                                        alert('Gặp sự cố, vui lòng thử lại');
                                    }
                                });
                            }
                            else {
                                if (se.loader) {
                                    se.loader.dismiss();
                                }
                                alert("Vé máy bay không giữ được, vui lòng chọn lại vé khác!");
                                se.navCtrl.navigateForward('/flightcomboreviews');
                            }
                        });
                    }
                });
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                alert('Đã hết thời hạn thanh toán, vui lòng thực hiện lại');
                se.navCtrl.navigateForward('/flightcomboreviews');
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
            if (this.ischeckTransaction) {
                this.CreateUrlOnePay(this.bankid);
            }
            else {
                this.postapibook(this.bankid);
            }
        }
        else {
            if (this.id) {
                this.presentLoading();
                if (this.ischeckTransaction) {
                    this.CreateUrlOnePay(this.id);
                }
                else {
                    this.postapibook(this.id);
                }
            }
            else {
                this.presentToast();
            }
        }
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
};
FlightcombochosebankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightcombochosebank',
        template: __webpack_require__(/*! ./flightcombochosebank.page.html */ "./src/app/flightcombochosebank/flightcombochosebank.page.html"),
        styles: [__webpack_require__(/*! ./flightcombochosebank.page.scss */ "./src/app/flightcombochosebank/flightcombochosebank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"]])
], FlightcombochosebankPage);



/***/ })

}]);
//# sourceMappingURL=flightcombochosebank-flightcombochosebank-module.js.map