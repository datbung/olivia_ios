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

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div style=\"margin-top: 15px\" class=\"div-title mt-11\">\n    <ion-label class=\"combo-title\">{{titlecombo}}</ion-label>\n  </div>\n\n  <div  class=\"div-title mt-5\">\n    <ion-label class=\"hotel-name\">{{Name}}</ion-label>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"text-flight-datetime\">{{ cin }} </div>\n    <div class=\"div-flight-inout\">\n      <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\">\n  </div> \n  <div class=\"text-flight-datetime\">{{ cout }} </div>\n  <div (click)=\"showFlightDetail()\" class=\"div-icon-down\" >\n    <img src=\"./assets/ic_flight/icon_down.svg\">\n </div>\n  </div>\n  \n  <hr >\n  <div class=\"d-flex mt-16\">\n    <div class=\"div-width-100\">\n        <div class=\"text-pax\">{{ adults }} người lớn</div>\n        <div class=\"text-pax\" *ngIf=\"children && children >0\">{{ children }} trẻ em</div>\n    </div>\n    <div class=\"div-width-100 text-right\">\n      <div class=\"text-total-price\">{{priceshow}}<span class=\"text-d\">đ</span>\n      </div>\n      <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n      \n    </div>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n      <label  class=\"text-list m-bottom-8\">\n        Tài khoản công ty\n      </label>\n      <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n    </ion-item>\n\n    <ion-item *ngIf=\"!ischeckpaymentCard\"  (click)=\"roompaymentatm()\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentvisa()\" class=\"ion-item1\">\n      <label>\n        Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n      </label>\n      <ion-icon  slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa&&!ischeckpaymentCard\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio  mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" [checked]=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px\">\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentCard\" (click)=\"roompaymentpayooqr()\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\" (click)=\"roompaymentpayoolive()\">\n      <label>\n        Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\" (click)=\"roompaymentbank()\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"!ischeckpaymentLater\"  (click)=\"roompaymentlive()\">\n      <label>\n        Trực tiếp tại văn phòng iVIVU\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"isbtn&&!ischeckpaymentCard\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombopayment/flightcombopayment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/flightcombopayment/flightcombopayment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .hotel-name {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.cls-label {\n  align-self: center;\n  margin-left: 12px;\n}\n.cls-img {\n  width: 36px;\n  height: 36px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.d-flex {\n  display: flex;\n  margin-top: 8px;\n}\n.div-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin: 0px 10px 0 10px;\n}\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -5px;\n}\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-11 {\n  margin-top: 11px;\n}\n.text-center {\n  text-align: center;\n}\n.div-width-60 {\n  width: 60%;\n}\n.div-icon-down {\n  position: absolute;\n  right: 16px;\n}\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n.text-pax {\n  font-size: 14px;\n  font-weight: 300;\n  color: #222222;\n}\n.text-sub {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.text-d {\n  font-size: 14px;\n  font-weight: 300;\n  margin-left: 5px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvcGF5bWVudC9mbGlnaHRjb21ib3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib3BheW1lbnQvZmxpZ2h0Y29tYm9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FERU07RUFFRSxjQUFBO0FDRFI7QURJSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0UsMkJBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERUk7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQVI7QURHSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQU47QURFSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDQ047QURDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURGQTtFQUVFLHNCQUFBO0FDSUY7QURGQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNJRjtBREZBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUNLRjtBQUNGO0FERkE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0o7QUREQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSU47QURGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDS0o7QURIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNPSjtBRExBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDT0o7QURMQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDUU47QURORTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU0o7QURQRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1VKO0FEUkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1dKO0FEVEU7RUFDRSxnQkFBQTtBQ1lKO0FEWEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2FOO0FEWEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDYVI7QURYSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDYU47QURWQTtFQUVFLGtCQUFBO0FDWUY7QURWQTtFQUVFLFlBQUE7QUNZRjtBRFZBO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtBQ1lGO0FEVkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDWUo7QURWQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNZRjtBRFZBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNZRjtBRFZBO0VBRUksa0JBQUE7RUFDQSxpQkFBQTtBQ1lKO0FEVkE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ1lKO0FEVkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEscUJBQUE7RUFDQSx5QkFBQTtVQUFBLHdCQUFBO0VBQ0EsdUJBQUE7VUFBQSxzQkFBQTtBQ2FGO0FEWEE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ2NGO0FEWkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNlRjtBRGJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDZUo7QURaQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDZUY7QURiQTtFQUVFLGVBQUE7QUNlRjtBRGJBO0VBRUUsZ0JBQUE7QUNlRjtBRGJBO0VBRUUsa0JBQUE7QUNlRjtBRGJBO0VBQ0UsVUFBQTtBQ2dCRjtBRGRBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDaUJGO0FEZkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNrQkY7QURoQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRSxjQUFBO0FDbUJKO0FEakJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDb0JGO0FEbEJBO0VBRUUsZ0JBQUE7QUNvQkY7QURsQkE7RUFDRSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ3FCSjtBRG5CQTtFQUVFLFdBQUE7RUFDQSxzQkFBQTtBQ3FCRjtBRG5CQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDcUJGO0FEbkJBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDcUJSO0FEbkJJO0VBRUUsZ0JBQUE7QUNxQk47QURuQkk7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ3FCTjtBRG5CSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3NCTjtBRHBCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3VCTjtBRHJCSTtFQUVFLCtCQUFBO0FDdUJOO0FEckJJO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ3VCTiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvcGF5bWVudC9mbGlnaHRjb21ib3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRleHQtbmFtZVxuICAgIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgLnRleHQtZ3JlZW5cbiAgICAgIHtcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcbiAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtZGF0ZVxuICAgIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XG4gICAgfVxuICAgIC5pbWFnZS1jYXJke1xuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAudG90YWwtcHJpY2V7XG4gICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgfVxuICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICB9XG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG4gICAgfVxuICAgIC50ZXh0LXJvb20tcHJpY2Utb3Rhe1xuICAgICAgY29sb3I6IzgyODI4MjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICBtYXJnaW46IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgfSAgXG4gIC5kaXYtd3JhcGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDo4N3B4O1xuICAgIHdpZHRoOiAxMDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmhyXG57XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4uY2xzLWhyXG57XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cblxufVxuLnRleHQtaW5mb2Nhclxue1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgZm9udC1zaXplOiAxMnB4XG59XG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gIH1cbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwM2M3MTtcbiAgfVxuICAuZmxpZ2h0LXByaWNle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuZGl2LXNwbGl0LXBhbmVse1xuICAgIGhlaWdodDogN3B4O1xuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi50ZXh0LWxvY2F0aW9uXG57XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkXG59XG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gIH1cbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwM2M3MTtcbiAgfVxuICAuZmxpZ2h0LXByaWNle1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2VjOTcxZjtcbiAgfVxuICAuZGl2LXRpdGxle1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgLmNvbWJvLXRpdGxle1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAuY29tYm8tc3ViLXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2Y1OTIzMztcbiAgICB9XG4gICAgLmhvdGVsLW5hbWV7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxufVxuLmNscy1saXN0XG57XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5jbHMtcm93aGVpZ2h0XG57XG4gIGhlaWdodDogNjBweDtcbn1cbi5jbHMtZGl2cGF5bWVudFxue1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHhcbn1cbi50ZXh0LXBcbntcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4uZGl2LWluZm9cbntcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG4uY2xzLXJvd2hlaWdodDFcbntcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5jbHMtbGFiZWxcbntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4uY2xzLWltZ1xue1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMzZweDtcbn1cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuLmQtZmxleHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmRpdi1mbGlnaHQtaW5vdXR7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwcHggMTBweCAwIDEwcHg7XG5cbiAgLmltZy1mbGlnaHQtaW5vdXR7XG4gICAgd2lkdGg6IDMycHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTVweDtcbiAgfVxufVxuLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLm10LTVcbntcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm10LTExXG57XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG4udGV4dC1jZW50ZXJcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi13aWR0aC02MHtcbiAgd2lkdGg6IDYwJTtcbn1cbi5kaXYtaWNvbi1kb3due1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xufVxuLnRleHQtdG90YWwtcHJpY2V7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLnRleHQtcGF4e1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMyMjIyMjI7XG59XG4udGV4dC1zdWJ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLm10LTE2XG57XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG4udGV4dC1ke1xuICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmltZy1wYXlvb1xue1xuICB3aWR0aDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5pbWdjYXJkXG57XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cbi50ZXh0LWluZm9iYW5rXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB9XG4gICAgLm1sOFxuICAgIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgfVxuICAgIC5pb24taXRlbVxuICAgIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAgIC0tbWluLWhlaWdodDogMHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDMycHg7XG4gICAgfVxuICAgIC5sYWJlbC1pbnB1dHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5pb24tY2hlY2tib3h7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogLTJweDtcbiAgICB9XG4gICAgLmlvbi1pdGVtMVxuICAgIHtcbiAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgfVxuICAgIC5pbWctdmlzYVxuICAgIHtcbiAgICAgIHdpZHRoOiAxMThweDtcbiAgICAgIGhlaWdodDogMjJweDtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgfVxuXG5cbiIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNscy1yb3doZWlnaHQge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5jbHMtZGl2cGF5bWVudCB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXYtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLXJvd2hlaWdodDEge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2xzLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmNscy1pbWcge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmRpdi1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IDEwcHggMCAxMHB4O1xufVxuLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTVweDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm10LTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tdC0xMSB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi13aWR0aC02MCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5kaXYtaWNvbi1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cblxuLnRleHQtdG90YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5tdC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pbWctcGF5b28ge1xuICB3aWR0aDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZ2NhcmQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG5cbi50ZXh0LWluZm9iYW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufVxuXG4uaW9uLWl0ZW0xIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmltZy12aXNhIHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

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
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");















let FlightcombopaymentPage = class FlightcombopaymentPage {
    constructor(platform, searchhotel, navCtrl, storage, Roomif, booking1, booking, authService, modalCtrl, loadingCtrl, gf, zone, router, bookCombo, valueGlobal, safariViewController, bizTravelService) {
        this.platform = platform;
        this.searchhotel = searchhotel;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.Roomif = Roomif;
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
        var thu = moment__WEBPACK_IMPORTED_MODULE_12__(cintemp).format('dddd');
        var textthu = this.getDay(thu);
        this.cin = textthu + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(cintemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(cintemp).format('MM');
        var couttemp = new Date(this.cout);
        var thu = moment__WEBPACK_IMPORTED_MODULE_12__(couttemp).format('dddd');
        var textthu = this.getDay(thu);
        this.cout = textthu + ', ' + moment__WEBPACK_IMPORTED_MODULE_12__(couttemp).format('DD') + ' ' + 'thg' + ' ' + moment__WEBPACK_IMPORTED_MODULE_12__(couttemp).format('MM');
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
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data) => {
                    if (data && data.bizAccount) {
                        this.zone.run(() => {
                            this.bizTravelService.bizAccount = data.bizAccount;
                            this.bizTravelService.isCompany = true;
                        });
                    }
                    else {
                        this.bizTravelService.isCompany = false;
                    }
                });
            }
            else {
                this.bizTravelService.isCompany = false;
            }
        });
        _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writePaymentLog("flightcombo", "paymentselect", "purchase", this.bookCombo.bookingcode);
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
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_12__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_12__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                se.timestamp = Date.now();
                var options = {
                    'method': 'POST',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + se.bookCombo.bookingcode + '&paymentMethod=' + paymentMethod,
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
                                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                                        }
                                        else {
                                            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomchoosebank";
                error.func = "roomchoosebank-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].writeErrorLog(error, response);
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
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
        }
        else {
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
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
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
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
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_12__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_12__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
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
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&buyerPhone=' + se.listfly.HotelBooking.CPhone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_9__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["ValueGlobal"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__["SafariViewController"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_13__["BizTravelService"]])
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