(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombopayment-flightcombopayment-module"],{

/***/ "./src/app/flightcombopayment/flightcombopayment.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombopayment/flightcombopayment.module.ts ***!
  \*****************************************************************/
/*! exports provided: FlightcombopaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombopaymentPageModule", function() { return FlightcombopaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombopayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombopayment.page */ "./src/app/flightcombopayment/flightcombopayment.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombopayment_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombopaymentPage"]
    }
];
let FlightcombopaymentPageModule = class FlightcombopaymentPageModule {
};
FlightcombopaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombopayment_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombopaymentPage"]]
    })
], FlightcombopaymentPageModule);



/***/ }),

/***/ "./src/app/flightcombopayment/flightcombopayment.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombopayment/flightcombopayment.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div style=\"margin-top: 15px\" class=\"div-title mt-11\">\n    <ion-label class=\"combo-title\">{{titlecombo}}</ion-label>\n  </div>\n\n  <div  class=\"div-title mt-5\">\n    <ion-label class=\"hotel-name\">{{Name}}</ion-label>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"text-flight-datetime\">{{ cin }} </div>\n    <div class=\"div-flight-inout\">\n      <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\">\n  </div> \n  <div class=\"text-flight-datetime\">{{ cout }} </div>\n  <div (click)=\"showFlightDetail()\" class=\"div-icon-down\" >\n    <img src=\"./assets/ic_flight/icon_down.svg\">\n </div>\n  </div>\n  \n  <hr >\n  <div class=\"d-flex mt-16\">\n    <div class=\"div-width-100\">\n        <div class=\"text-pax\">{{ adults }} người lớn</div>\n        <div class=\"text-pax\" *ngIf=\"children && children >0\">{{ children }} trẻ em</div>\n    </div>\n    <div class=\"div-width-100 text-right\">\n      <div class=\"text-total-price\">{{priceshow}}<span class=\"text-d\">đ</span>\n      </div>\n      <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n      \n    </div>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n      <label  class=\"text-list m-bottom-8\">\n        Tài khoản công ty\n      </label>\n      <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"!ischeckpaymentCard\"  (click)=\"roompaymentatm()\">\n      <label>\n        Thẻ ATM nội địa\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentvisa()\" class=\"ion-item1\">\n      <label>\n        Thẻ tín dụng (Visa, Master Card)\n      </label>\n      <ion-icon  slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa&&!ischeckpaymentCard\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio  mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" [checked]=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px\">\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentpayooqr()\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\" (click)=\"roompaymentpayoolive()\">\n      <label>\n        Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\" (click)=\"roompaymentbank()\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\"  (click)=\"roompaymentlive()\">\n      <label>\n        Trực tiếp tại văn phòng iVIVU\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"isbtn&&!ischeckpaymentCard\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombopayment/flightcombopayment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombopayment/flightcombopayment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .hotel-name {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.cls-label {\n  align-self: center;\n  margin-left: 12px;\n}\n.cls-img {\n  width: 36px;\n  height: 36px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.d-flex {\n  display: flex;\n  margin-top: 8px;\n}\n.div-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin: 0px 10px 0 10px;\n}\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -5px;\n}\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-11 {\n  margin-top: 11px;\n}\n.text-center {\n  text-align: center;\n}\n.div-width-60 {\n  width: 60%;\n}\n.div-icon-down {\n  position: absolute;\n  right: 16px;\n}\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n.text-pax {\n  font-size: 14px;\n  font-weight: 300;\n  color: #222222;\n}\n.text-sub {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.text-d {\n  font-size: 14px;\n  font-weight: 300;\n  margin-left: 5px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmxpZ2h0Y29tYm9wYXltZW50L2ZsaWdodGNvbWJvcGF5bWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbWJvcGF5bWVudC9mbGlnaHRjb21ib3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURFSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBTjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDTjtBRENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRU47QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREZBO0VBRUUsc0JBQUE7QUNJRjtBREZBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0lGO0FERkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQ0tGO0FBQ0Y7QURGQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjtBRERBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJTjtBREZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNLSjtBREhFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTUo7QURKRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ09KO0FETEE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRExBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRTjtBRE5FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNTSjtBRFBFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDVUo7QURSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDV0o7QURURTtFQUNFLGdCQUFBO0FDWUo7QURYSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDYU47QURYSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNhUjtBRFhJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhTjtBRFZBO0VBRUUsa0JBQUE7QUNZRjtBRFZBO0VBRUUsWUFBQTtBQ1lGO0FEVkE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNZSjtBRFZBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ1lGO0FEVkE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1lGO0FEVkE7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDWUo7QURWQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDWUo7QURWQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDYUY7QURYQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDY0Y7QURaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2VGO0FEYkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNlSjtBRFpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNlRjtBRGJBO0VBRUUsZUFBQTtBQ2VGO0FEYkE7RUFFRSxnQkFBQTtBQ2VGO0FEYkE7RUFFRSxrQkFBQTtBQ2VGO0FEYkE7RUFDRSxVQUFBO0FDZ0JGO0FEZEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNpQkY7QURmQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2tCRjtBRGhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNFLGNBQUE7QUNtQko7QURqQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNvQkY7QURsQkE7RUFFRSxnQkFBQTtBQ29CRjtBRGxCQTtFQUNFLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDcUJKO0FEbkJBO0VBRUUsV0FBQTtFQUNBLHNCQUFBO0FDcUJGO0FEbkJBO0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNxQkY7QURuQkE7RUFFUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFFRSxnQkFBQTtBQ3FCTjtBRG5CSTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDcUJOO0FEbkJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDc0JOO0FEcEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDdUJOO0FEckJJO0VBRUUsK0JBQUE7QUN1Qk4iLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib3BheW1lbnQvZmxpZ2h0Y29tYm9wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50ZXh0LW5hbWVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC50ZXh0LWdyZWVuXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWRhdGVcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIH1cbiAgICAuaW1hZ2UtY2FyZHtcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNDhweDtcblxuICAgIH1cbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xuICAgIH1cbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIH0gIFxuICAuZGl2LXdyYXBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ODdweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5oclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuLmNscy1oclxue1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbn1cbi50ZXh0LWluZm9jYXJcbntcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIGZvbnQtc2l6ZTogMTJweFxufVxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDNjNzE7XG4gIH1cbiAgLmZsaWdodC1wcmljZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmRpdi1zcGxpdC1wYW5lbHtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4udGV4dC1sb2NhdGlvblxue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDNjNzE7XG4gIH1cbiAgLmZsaWdodC1wcmljZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNlYzk3MWY7XG4gIH1cbiAgLmRpdi10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC5jb21iby10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG4gICAgLmNvbWJvLXN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgfVxuICAgIC5ob3RlbC1uYW1le1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbn1cbi5jbHMtbGlzdFxue1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG4uY2xzLXJvd2hlaWdodFxue1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uY2xzLWRpdnBheW1lbnRcbntcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4XG59XG4udGV4dC1wXG57XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLmRpdi1pbmZvXG57XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmNscy1yb3doZWlnaHQxXG57XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uY2xzLWxhYmVsXG57XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuLmNscy1pbWdcbntcbiAgICB3aWR0aDogMzZweDtcbiAgICBoZWlnaHQ6IDM2cHg7XG59XG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cbi5kLWZsZXh7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5kaXYtZmxpZ2h0LWlub3V0e1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IDEwcHggMCAxMHB4O1xuXG4gIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IC01cHg7XG4gIH1cbn1cbi50ZXh0LWZsaWdodC1kYXRldGltZXtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5tdC01XG57XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tdC0xMVxue1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuLnRleHQtY2VudGVyXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtd2lkdGgtNjB7XG4gIHdpZHRoOiA2MCU7XG59XG4uZGl2LWljb24tZG93bntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cbi50ZXh0LXRvdGFsLXByaWNle1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi50ZXh0LXBheHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjMjIyMjIyO1xufVxuLnRleHQtc3Vie1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5tdC0xNlxue1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuLnRleHQtZHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5pbWctcGF5b29cbntcbiAgd2lkdGg6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uaW1nY2FyZFxue1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG4udGV4dC1pbmZvYmFua1xuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIC5tbDhcbiAgICB7XG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIH1cbiAgICAuaW9uLWl0ZW1cbiAgICB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMnB4O1xuICAgIH1cbiAgICAubGFiZWwtaW5wdXR7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgICAuaW9uLWNoZWNrYm94e1xuICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICBtYXJnaW46IC0ycHg7XG4gICAgfVxuICAgIC5pb24taXRlbTFcbiAgICB7XG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIH1cbiAgICBcblxuXG4iLCIudGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODdweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmRpdi10aXRsZSAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2LWluZm8ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNscy1yb3doZWlnaHQxIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmNscy1sYWJlbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5jbHMtaW1nIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5kaXYtZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweCAxMHB4IDAgMTBweDtcbn1cbi5kaXYtZmxpZ2h0LWlub3V0IC5pbWctZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC01cHg7XG59XG5cbi50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tdC01IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4ubXQtMTEge1xuICBtYXJnaW4tdG9wOiAxMXB4O1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtd2lkdGgtNjAge1xuICB3aWR0aDogNjAlO1xufVxuXG4uZGl2LWljb24tZG93biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG5cbi50ZXh0LXRvdGFsLXByaWNlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LXBheCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4ubXQtMTYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGV4dC1kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW1nLXBheW9vIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLmlvbi1pdGVtMSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightcombopayment/flightcombopayment.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/flightcombopayment/flightcombopayment.page.ts ***!
  \***************************************************************/
/*! exports provided: FlightcombopaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombopaymentPage", function() { return FlightcombopaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flightcombobookingdetail_flightcombobookingdetail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../flightcombobookingdetail/flightcombobookingdetail.page */ "./src/app/flightcombobookingdetail/flightcombobookingdetail.page.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
















let FlightcombopaymentPage = class FlightcombopaymentPage {
    constructor(platform, searchhotel, navCtrl, storage, Roomif, iab, booking1, booking, authService, modalCtrl, loadingCtrl, gf, zone, router, bookCombo, valueGlobal, safariViewController, bizTravelService) {
        this.platform = platform;
        this.searchhotel = searchhotel;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.Roomif = Roomif;
        this.iab = iab;
        this.booking1 = booking1;
        this.booking = booking;
        this.authService = authService;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.zone = zone;
        this.router = router;
        this.bookCombo = bookCombo;
        this.valueGlobal = valueGlobal;
        this.safariViewController = safariViewController;
        this.bizTravelService = bizTravelService;
        this.textage = "";
        this.scheckvisa = false;
        this.arrbankrmb = [];
        this.ischeckpay = true;
        this.isbtn = false;
        this.ischeckvisa = false;
        this.ischeckTransaction = false;
        this.isremember = true;
        this.isdisable = false;
        this.listfly = this.gf.getParams('flightcombo');
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.Name = booking.HotelName;
        this.Avatar = Roomif.imgHotel;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.arrchild = this.searchhotel.arrchild;
        var cintemp = new Date(this.cin);
        var thu = moment__WEBPACK_IMPORTED_MODULE_13__(cintemp).format('dddd');
        var textthu = this.getDay(thu);
        this.cin = textthu + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(cintemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(cintemp).format('MM');
        var couttemp = new Date(this.cout);
        var thu = moment__WEBPACK_IMPORTED_MODULE_13__(couttemp).format('dddd');
        var textthu = this.getDay(thu);
        this.cout = textthu + ', ' + moment__WEBPACK_IMPORTED_MODULE_13__(couttemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_13__(couttemp).format('MM');
        this.adults = booking.Adults;
        this.roomnumber = this.searchhotel.roomnumber;
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        this.children = booking.Child;
        this.breakfast = this.bookCombo.MealTypeName;
        this.departDateTimeStr = this.bookCombo.de_departdatestr;
        this.returnDateTimeStr = this.bookCombo.ar_departdatestr;
        this.departTimeStr = this.bookCombo.departTimeStr;
        this.returnTimeStr = this.bookCombo.returnTimeStr;
        this.airlineCodedep = this.listfly.FlightBooking.departFlight.AirlineCode;
        this.airlineCoderet = this.listfly.FlightBooking.returnFlight.AirlineCode;
        this.titlecombo = this.valueGlobal.titlecombo;
        if (this.arrchild) {
            for (let i = 0; i < this.arrchild.length; i++) {
                if (i == this.arrchild.length - 1) {
                    this.textage = this.textage + this.arrchild[i].numage;
                }
                else {
                    this.textage = this.textage + this.arrchild[i].numage + ",";
                }
            }
            if (this.textage) {
                this.textage = "(" + this.textage + ")";
            }
        }
        this.ischeckpaymentCard = this.Roomif.ischeckpaymentCard;
        this.ischeckpaymentLater = this.Roomif.ischeckpaymentLater;
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember(0);
            }
        });
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                let text = "Bearer " + auth_token;
                let headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data) => {
                    if (data && data.bizAccount) {
                        this.zone.run(() => {
                            this.bizTravelService.bizAccount = data.bizAccount;
                            this.bizTravelService.isCompany = true;
                        });
                    }
                });
            }
        });
        _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writePaymentLog("flightcombo", "paymentselect", "purchase", this.bookCombo.bookingcode);
    }
    getDay(thu) {
        switch (thu) {
            case "Monday":
                thu = "Thứ 2";
                break;
            case "Tuesday":
                thu = "Thứ 3";
                break;
            case "Wednesday":
                thu = "Thứ 4";
                break;
            case "Thursday":
                thu = "Thứ 5";
                break;
            case "Friday":
                thu = "Thứ 6";
                break;
            case "Saturday":
                thu = "Thứ 7";
                break;
            default:
                thu = "Chủ nhật";
                break;
        }
        return thu;
    }
    ngOnInit() {
    }
    roompaymentbank() {
        this.navCtrl.navigateForward("/flightcombobank");
        this.gf.googleAnalytion('roompaymentselect', 'roompaymentbankselect', '');
    }
    roompaymentatm() {
        this.navCtrl.navigateForward("/flightcombochosebank");
    }
    postapibook(paymentType) {
        var se = this;
        se.presentLoading();
        this.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
            var paymentMethod = se.gf.funcpaymentMethod(paymentType);
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_13__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_13__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                se.timestamp = Date.now();
                var options = {
                    'method': 'POST',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookCombo.bookingcode + '&paymentMethod=' + paymentMethod,
                    'headers': {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
                    if (error)
                        throw new Error(error);
                    if (se.bookCombo.DepartATCode && se.bookCombo.ReturnATCode) {
                        se.NoTransaction(paymentType);
                    }
                    else {
                        se.gf.holdTicketCombo(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
                            if (datafly.depcode && datafly.retcode) {
                                se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                                    if (data) {
                                        se.ischeckTransaction = true;
                                        se.bookCombo.DepartATCode = datafly.depcode;
                                        se.bookCombo.ReturnATCode = datafly.retcode;
                                        let url;
                                        if (paymentType == 'visa') {
                                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                                        }
                                        else {
                                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                                        }
                                        se.gf.CreateUrl(url).then(dataBuildLink => {
                                            dataBuildLink = JSON.parse(dataBuildLink);
                                            if (dataBuildLink.success) {
                                                if (paymentType == 'visa') {
                                                    se.openWebpage(dataBuildLink.returnUrl);
                                                    se.setinterval();
                                                }
                                                else if (paymentType == 'payoo_store') {
                                                    se.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                                                    se.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                                                    if (se.loader) {
                                                        se.loader.dismiss();
                                                    }
                                                    se.navCtrl.navigateForward('flightcombopaymentpayoo/' + se.bookCombo.bookingcode + '/0');
                                                }
                                                else if (paymentType == 'payoo_qr') {
                                                    if (dataBuildLink.success) {
                                                        se.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                                        if (se.loader) {
                                                            se.loader.dismiss();
                                                        }
                                                        se.navCtrl.navigateForward('flightcombopaymentpayoo/' + se.bookCombo.bookingcode + '/1');
                                                    }
                                                }
                                                else if (paymentType == 'momo') {
                                                    if (dataBuildLink.success) {
                                                        if (se.loader) {
                                                            se.loader.dismiss();
                                                        }
                                                        window.open(dataBuildLink.returnUrl.payUrl, '_system');
                                                        se.setinterval();
                                                    }
                                                }
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
                                if (paymentType == 'payoo_store') {
                                    se.NoTransaction(paymentType);
                                }
                                else {
                                    alert("Vé máy bay không giữ được, vui lòng chọn lại vé khác!");
                                    se.navCtrl.navigateForward('/flightcomboreviews');
                                }
                            }
                        });
                    }
                });
            }
            else {
                alert('Đã hết thời hạn thanh toán, vui lòng thực hiện lại');
                se.navCtrl.navigateForward('/flightcomboreviews');
            }
        });
    }
    roompaymentlive() {
        this.navCtrl.navigateForward("/flightcombolive");
    }
    openWebpage(url) {
        var se = this;
        se.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                se.safariViewController.show({
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
                        this.checkPayment(1);
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookCombo.bookingcode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roomchoosebank",
                    func: "roomchoosebank-mCheckBooking",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomchoosebank";
                error.func = "roomchoosebank-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: "Giao dịch đang xử lý, xin quý khách đợi trong giây lát!",
            });
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.navigateForward('/flightcomboreviews');
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
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
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
    showFlightDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield se.modalCtrl.create({
                component: _flightcombobookingdetail_flightcombobookingdetail_page__WEBPACK_IMPORTED_MODULE_1__["FlightcombobookingdetailPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "modal-flight-booking-detail"
            });
            modal.present();
        });
    }
    GeTokensOfMember(stt) {
        var se = this;
        se.gf.GeTokensOfMember(se.jti).then(dataTokens => {
            if (dataTokens) {
                dataTokens = JSON.parse(dataTokens);
                if (dataTokens.tokens.length > 0) {
                    this.arrbankrmb = [];
                    for (let i = 0; i < dataTokens.tokens.length; i++) {
                        if (dataTokens.tokens[i].vpc_Card == 'VC' || dataTokens.tokens[i].vpc_Card == 'MC' || dataTokens.tokens[i].vpc_Card == 'JC' || dataTokens.tokens[i].vpc_Card == 'AE') {
                            var vpc_CardNum = dataTokens.tokens[i].vpc_CardNum.split('xxx');
                            vpc_CardNum = vpc_CardNum[1];
                            var cardname = this.getCardName(dataTokens.tokens[i].vpc_Card);
                            var item = { id: dataTokens.tokens[i].id, imgbank: 'https://res.ivivu.com/payment/img/onepay/' + dataTokens.tokens[i].vpc_Card + '.png', vpc_CardNum: vpc_CardNum, name_Bank: cardname, checked: false };
                            this.arrbankrmb.push(item);
                        }
                    }
                    if (this.arrbankrmb.length > 0) {
                        this.arrbankrmb[0].checked = true;
                        this.tokenid = this.arrbankrmb[0].id;
                        this.isbtn = true;
                        this.ischeckvisa = true;
                        this.isdisable = true;
                    }
                }
            }
            if (stt == 1) {
                if (this.arrbankrmb.length > 0) {
                    this.ischeckvisa = true;
                }
                else {
                    this.postapibook('visa');
                }
            }
        });
    }
    getCardName(text) {
        var cardStr = "";
        switch (text) {
            case "MC":
                cardStr = "Mastercard";
                break;
            case "VC":
                cardStr = "Visacard";
                break;
            case "JC":
                cardStr = "JCBCard";
                break;
            case "AE":
                cardStr = "AECard";
        }
        return cardStr;
    }
    NoTransaction(paymentType) {
        var se = this;
        let url;
        if (paymentType == 'visa') {
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
        }
        else {
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
        }
        this.gf.CreateUrl(url).then(dataBuildLink => {
            dataBuildLink = JSON.parse(dataBuildLink);
            if (dataBuildLink.success) {
                if (paymentType == 'visa') {
                    se.openWebpage(dataBuildLink.returnUrl);
                    se.setinterval();
                }
                else if (paymentType == 'payoo_store') {
                    this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                    se.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    this.navCtrl.navigateForward('flightcombopaymentpayoo/' + se.bookCombo.bookingcode + '/0');
                }
                else if (paymentType == 'payoo_qr') {
                    if (dataBuildLink.success) {
                        this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        this.navCtrl.navigateForward('flightcombopaymentpayoo/' + se.bookCombo.bookingcode + '/1');
                    }
                }
                else if (paymentType == 'momo') {
                    if (dataBuildLink.success) {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        window.open(dataBuildLink.returnUrl.payUrl, '_system');
                        this.setinterval();
                    }
                }
            }
        });
    }
    setinterval() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            this.checkPayment(0);
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, 60000 * 15);
    }
    roompaymentpayoolive() {
        this.postapibook('payoo_store');
    }
    roompaymentpayooqr() {
        this.postapibook('payoo_qr');
    }
    roompaymentmomo() {
        this.postapibook('momo');
    }
    chooseacc(item) {
        this.tokenid = item.id;
        this.isbtn = true;
        this.isdisable = true;
        this.isremember = true;
    }
    nochooseacc() {
        this.tokenid = "";
        this.isbtn = true;
        this.isdisable = false;
        this.isremember = true;
    }
    next() {
        this.postapibook('visa');
    }
    roompaymentvisa() {
        if (this.arrbankrmb.length == 0) {
            this.GeTokensOfMember(1);
        }
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
    ionViewWillLeave() {
        clearInterval(this.intervalID);
    }
    paymentbiztravel() {
        if (this.bizTravelService.bizAccount.balanceAvaiable - this.bookCombo.totalprice <= 0) {
            return;
        }
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                var params = { memberid: this.jti, totalprice: this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') };
                this.gf.showLoading();
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
                    if (data && data.error == 0) {
                        this.bizTravelService.phoneOtp = data.phoneOtp;
                        this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
                        this.bizTravelService.paymentType = 3;
                        this.flightComboPayment();
                    }
                    else {
                        this.gf.showToastWarning('Account hiện tại không có quyền thanh toán. Vui lòng kiểm tra lại.');
                    }
                });
            }
            else {
            }
        });
    }
    flightComboPayment() {
        var se = this;
        se.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_13__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_13__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                if (se.bookCombo.DepartATCode && se.bookCombo.ReturnATCode) {
                    se.buildLinkPayment().then((checkvalid) => {
                        if (checkvalid) {
                            se.bizTravelService.routeBackWhenCancel = 'flightcomboreviews';
                            se.bizTravelService.mytripPaymentBookingCode = se.bookCombo.bookingcode;
                            se.navCtrl.navigateForward('confirmpayment');
                        }
                    });
                }
                else {
                    se.gf.holdTicketCombo(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
                        if (datafly.depcode && datafly.retcode) {
                            se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                                if (data) {
                                    se.ischeckTransaction = true;
                                    se.bookCombo.DepartATCode = datafly.depcode;
                                    se.bookCombo.ReturnATCode = datafly.retcode;
                                    se.buildLinkPayment().then((checkvalid) => {
                                        if (checkvalid) {
                                            se.bizTravelService.routeBackWhenCancel = 'flightcomboreviews';
                                            se.bizTravelService.mytripPaymentBookingCode = se.bookCombo.bookingcode;
                                            se.navCtrl.navigateForward('confirmpayment');
                                        }
                                    });
                                }
                                else {
                                    alert('Gặp sự cố, vui lòng thử lại');
                                }
                            });
                        }
                        else {
                            se.gf.hideLoading();
                            alert("Vé máy bay không giữ được, vui lòng chọn lại vé khác!");
                            se.navCtrl.navigateForward('/flightcomboreviews');
                        }
                    });
                }
            }
            else {
            }
        });
    }
    buildLinkPayment() {
        let se = this;
        return new Promise((resolve, reject) => {
            let url;
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
            se.gf.CreateUrl(url).then(dataBuildLink => {
                dataBuildLink = JSON.parse(dataBuildLink);
                if (dataBuildLink.success) {
                    se.gf.hideLoading();
                    resolve(true);
                }
                else {
                    se.gf.hideLoading();
                    resolve(false);
                }
            });
        });
    }
};
FlightcombopaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flightcombopayment',
        template: __webpack_require__(/*! ./flightcombopayment.page.html */ "./src/app/flightcombopayment/flightcombopayment.page.html"),
        styles: [__webpack_require__(/*! ./flightcombopayment.page.scss */ "./src/app/flightcombopayment/flightcombopayment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_10__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_12__["SafariViewController"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_14__["BizTravelService"]])
], FlightcombopaymentPage);



/***/ }),

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ })

}]);
//# sourceMappingURL=flightcombopayment-flightcombopayment-module.js.map