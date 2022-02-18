(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodinstallment-foodinstallment-module"],{

/***/ "./src/app/foodinstallment/foodinstallment.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/foodinstallment/foodinstallment.module.ts ***!
  \***********************************************************/
/*! exports provided: FoodinstallmentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinstallmentPageModule", function() { return FoodinstallmentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodinstallment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodinstallment.page */ "./src/app/foodinstallment/foodinstallment.page.ts");







const routes = [
    {
        path: '',
        component: _foodinstallment_page__WEBPACK_IMPORTED_MODULE_6__["FoodinstallmentPage"]
    }
];
let FoodinstallmentPageModule = class FoodinstallmentPageModule {
};
FoodinstallmentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodinstallment_page__WEBPACK_IMPORTED_MODULE_6__["FoodinstallmentPage"]]
    })
], FoodinstallmentPageModule);



/***/ }),

/***/ "./src/app/foodinstallment/foodinstallment.page.html":
/*!***********************************************************!*\
  !*** ./src/app/foodinstallment/foodinstallment.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-payment-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div class=\"align-self-center\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Trả góp 0%</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"installment-payment-content\">\n    <div class=\"cls-divpayment\">\n      <ion-grid style=\"margin-left: -5px;\">\n        <ion-row *ngFor=\"let item of listmenu\">\n          <ion-col size=\"8\">\n            <ion-row>\n              <ion-col style=\"padding:0\">\n                <ion-label class=\"text-food\">{{item.quantity}} x {{item.name}}\n                  <span class=\"div-star\">\n                    <img *ngIf=\"item && item.typePriceId && item.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n                    <img *ngIf=\"item && item.typePriceId && item.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n                    <img *ngIf=\"item && item.typePriceId && item.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n                  </span>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n            <p class=\"text-note\">{{item.chuoi}}</p>\n  \n          </ion-col>\n          <ion-col size=\"4\">\n            <ion-row class=\"text-price-food\">\n              <ion-col style=\"padding:0\">\n                <ion-label class=\"text-food\">{{item.totalPrice}}<span class=\"text-d\">đ</span></ion-label>\n              </ion-col>\n            </ion-row>\n  \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <hr>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-col style=\"padding:0\">\n              <ion-label class=\"text-total\">Tổng cộng</ion-label>\n              <p class=\"text-tax\">Giá đã bao gồm thuế & phí</p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-col style=\"padding:0\">\n              <p class=\"total-price\" style=\"text-align: right\">\n                {{priceshow}}<span class=\"total-price-d\"> đ</span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class=\"div-split-panel\"></div>\n    <div class=\"text-title p-top-16\">Chọn ngân hàng trả góp</div>\n      <div class=\"div-bank\">\n        <div [ngClass]=\" (idx==0 || idx ==4 || idx == 8 || idx == 12 || idx == 16 || idx == 20 || idx == 24)? 'item-bank' : 'item-bank m-left-8' \" *ngFor=\"let bank of banks; let idx = index\" id={{bank.bankCode}} (click)=\"itemBankClick(bank)\">\n          <div >\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SACOMBANK'\" src=\"./assets/ic_bank/ic_SACOMBANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'HOMECREDIT'\" src=\"./assets/ic_bank/ic_HOMECREDIT.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'BIDV'\" src=\"./assets/ic_bank/ic_BIDV_1.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'TECHCOMBANK'\" src=\"./assets/ic_bank/ic_TECHCOMBANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VIETINBANK'\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'HSBC'\" src=\"./assets/ic_bank/ic_HSBC.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SC'\" src=\"./assets/ic_bank/ic_SC.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'FE'\" src=\"./assets/ic_bank/ic_FE.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'CTB'\" src=\"./assets/ic_bank/ic_CTB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VPBANK'\" src=\"./assets/ic_bank/ic_VPBANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'ACB'\" src=\"./assets/ic_bank/ic_ACB_1.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'ANZ'\" src=\"./assets/ic_bank/ic_ANZ.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SHINHANBANK'\" src=\"./assets/ic_bank/ic_SHINHANBANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'EXIMBANK'\" src=\"./assets/ic_bank/ic_EXIMBANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VIB'\" src=\"./assets/ic_bank/ic_VIB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SEABANK'\" src=\"./assets/ic_bank/ic_SEABANK.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'TPB'\" src=\"./assets/ic_bank/ic_TPB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SCB'\" src=\"./assets/ic_bank/ic_SCB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'NAB'\" src=\"./assets/ic_bank/ic_NAB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'OCB'\" src=\"./assets/ic_bank/ic_OCB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'KLB'\" src=\"./assets/ic_bank/ic_KLB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SHB'\" src=\"./assets/ic_bank/ic_SHB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VCB'\" src=\"./assets/ic_bank/ic_VCB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'MB'\" src=\"./assets/ic_bank/ic_MB.png\">\n            <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'BVB'\" src=\"./assets/ic_bank/ic_BVB.png\">\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"text-title p-top-32\" *ngIf=\"cards && cards.length >0\">Chọn loại thẻ</div>\n      <div class=\"div-card p-top-6\" *ngIf=\"cards && cards.length >0\">\n        <div [ngClass]=\" (idx==0)? 'item-card' : 'item-card m-left-8' \" id={{card.paymentMethod}} *ngFor=\"let card of cards; let idx = index\" (click)=\"itemCardClick(card)\">\n          <div >\n            <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'VISA'\" src=\"./assets/ic_bank/ic_VISA.png\">\n            <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'JCB'\" src=\"./assets/ic_bank/ic_JCB.png\">\n            <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'MASTERCARD'\" src=\"./assets/ic_bank/ic_MASTERCARD.png\">\n          </div>\n        </div>\n      </div>\n  \n      <div class=\"text-title p-top-32\" *ngIf=\"periods && periods.length >0\">Trả góp qua thẻ {{paymentMethod}} - {{bankCode}}</div>\n      <div class=\"div-option p-top-6\" *ngIf=\"periods && periods.length >0\">\n        <div [ngClass]=\"idx ==0 ? 'item-option' : 'item-option m-left-8'\" id={{period.month}} *ngFor=\"let period of periods; let idx=index\" (click)=\"itemPeriodClick(period)\"><div class=\"div-month\">{{ period.month }} tháng</div></div>\n      </div>\n      \n      <div *ngIf=\"periodSelected\">\n        <div class=\"row-flex\" >\n          <div class=\"col-flex border-right\">\n            <div class=\"price-permonth\">{{amountByMonth}}đ</div>\n            <div class=\"text-sub\">Góp mỗi tháng</div>\n          </div>\n          <div class=\"col-flex\">\n            <div class=\"price-text\">{{amountFinal}}đ</div>\n            <div class=\"text-sub\">Tổng tiền trả góp</div>\n          </div>\n        </div>\n        <div class=\"row-flex border-top\">\n          <div class=\"col-flex border-right\">\n            <div class=\"price-text\">{{amountFee}}đ</div>\n            <div class=\"text-sub\">Chênh lệch với trả thẳng</div>\n          </div>\n          <div class=\"col-flex\">\n            <div class=\"price-text\">{{priceshow}}đ</div>\n            <div class=\"text-sub\">Giá mua trả thẳng</div>\n          </div>\n        </div>\n      </div>\n  </div>\n \n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center;\">\n    <button (click)=\"installment()\" ion-button round outline class=\"button button2\">Trả góp</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodinstallment/foodinstallment.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/foodinstallment/foodinstallment.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-divpayment {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-price-food {\n  text-align: right;\n}\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n.div-star {\n  padding: 2px;\n}\n.installment-payment-header .text-center {\n  text-align: center;\n}\n.installment-payment-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-content .p-top-16 {\n  padding-top: 16px;\n}\n.installment-payment-content .p-top-32 {\n  padding-top: 32px;\n}\n.installment-payment-content .p-top-6 {\n  padding-top: 6px;\n}\n.installment-payment-content .p-top-10 {\n  padding-top: 10px;\n}\n.installment-payment-content .m-left-8 {\n  margin-left: 8px;\n}\n.installment-payment-content .text-title {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.4px;\n}\n.installment-payment-content .selected {\n  opacity: 1 !important;\n}\n.installment-payment-content .period-selected {\n  color: #ffffff !important;\n  background: #26bed6 !important;\n  border: none !important;\n}\n.installment-payment-content .booking-info {\n  padding-top: 16px;\n}\n.installment-payment-content .booking-info .hotel-name {\n  font-size: 16px;\n  color: #003c71;\n  font-weight: 600;\n}\n.installment-payment-content .booking-info .booking-info-detail {\n  display: flex;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left {\n  height: 104px;\n  width: 104px;\n  min-width: 104px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left .img-left {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  padding-left: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right .p-left-6 {\n  padding-left: 6px;\n}\n.installment-payment-content .div-price {\n  text-align: right;\n  font-size: 18px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.installment-payment-content .div-bank {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-bank .item-bank {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  margin-top: 8px;\n}\n.installment-payment-content .div-bank .img-bank {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-card {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-card .item-card {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n}\n.installment-payment-content .div-card .img-card {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-option {\n  display: flex;\n}\n.installment-payment-content .div-option .item-option {\n  min-width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  display: flex;\n}\n.installment-payment-content .div-option .item-option .div-month {\n  margin: auto;\n}\n.installment-payment-content .row-flex {\n  display: flex;\n}\n.installment-payment-content .row-flex .col-flex {\n  width: 100%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.installment-payment-content .row-flex .col-flex .price-permonth {\n  color: #26bed6;\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .row-flex .col-flex .text-sub {\n  font-size: 14px;\n  font-weight: 200;\n}\n.installment-payment-content .row-flex .col-flex .price-text {\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .border-right {\n  border-right: solid 0.5px #f4f4f4;\n}\n.installment-payment-content .border-top {\n  border-top: solid 0.5px #f4f4f4;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RpbnN0YWxsbWVudC9mb29kaW5zdGFsbG1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kaW5zdGFsbG1lbnQvZm9vZGluc3RhbGxtZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FERU07RUFFRSxjQUFBO0FDRFI7QURJSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0UsMkJBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNBTjtBREVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ1I7QURDSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNDUjtBREVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDTjtBRENJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNFTjtBREFJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDR047QURERTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREZFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNLSjtBREhBO0VBRUUsc0JBQUE7QUNLRjtBREhBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0tGO0FESEE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQ01GO0FBQ0Y7QURIQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNJSjtBREZBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLTjtBREhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNNSjtBREpFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDT0o7QURMRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNRSjtBRE5BO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDUUo7QUROQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDU047QURQRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDVUo7QURSRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1dKO0FEVEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1lKO0FEVkU7RUFDRSxnQkFBQTtBQ2FKO0FEWkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDY1I7QURaSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNjUjtBRFpJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDY047QURYQTtFQUVFLGtCQUFBO0FDYUY7QURYQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNhRjtBRFhBO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ2FGO0FEWEE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0FDYUY7QURYQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDYUY7QURYQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDYUo7QURYQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDYUY7QURWQTtFQUVJLGlCQUFBO0FDWUo7QURWQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1lGO0FEVkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1lGO0FEVkE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNZRjtBRFRBO0VBQ0UsWUFBQTtBQ1lGO0FEUkk7RUFDSSxrQkFBQTtBQ1dSO0FEVEk7RUFDSSxrQkFBQTtBQ1dSO0FEVEk7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNjcEQ7QURaUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ2NaO0FEWEk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2FSO0FEUkk7RUFDSSxpQkFBQTtBQ1dSO0FEVEk7RUFDSSxpQkFBQTtBQ1dSO0FEVEk7RUFDSSxnQkFBQTtBQ1dSO0FEVEk7RUFDSSxpQkFBQTtBQ1dSO0FEVEk7RUFDSSxnQkFBQTtBQ1dSO0FEVEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FDV1I7QURUSTtFQUNJLHFCQUFBO0FDV1I7QURUSTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQ1dSO0FEVEk7RUFDSSxpQkFBQTtBQ1dSO0FEVFE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDV1o7QURSUTtFQUNJLGFBQUE7QUNVWjtBRFJZO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VoQjtBRFJnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGtCQUFBO0FDVXBCO0FETlk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDUWhCO0FETmdCO0VBQ0ksaUJBQUE7QUNRcEI7QURISTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tSO0FERkk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0lSO0FESFE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDS1o7QURIUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNLWjtBRERJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNHUjtBREZRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDSVo7QURGUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNJWjtBREFJO0VBQ0ksYUFBQTtBQ0VSO0FERFE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDR1o7QUREWTtFQUNJLFlBQUE7QUNHaEI7QURDSTtFQUNJLGFBQUE7QUNDUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDWjtBREFZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBREFZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDRWhCO0FEQVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNFaEI7QURHSTtFQUNJLGlDQUFBO0FDRFI7QURHSTtFQUNJLCtCQUFBO0FDRFI7QURLQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RpbnN0YWxsbWVudC9mb29kaW5zdGFsbG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAudGV4dC1uYW1lXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIC50ZXh0LWdyZWVuXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1kYXRlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgfVxyXG4gICAgLmltYWdlLWNhcmR7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZS1ke1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgfVxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgICAgY29sb3I6IzgyODI4MjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIC50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9ICBcclxuICAuZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0Ojg3cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5jbHMtaHJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudHtcclxuICAgIG1heC13aWR0aDogMTg4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbn1cclxuLnRleHQtaW5mb2NhclxyXG57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG59XHJcbi50ZXh0LWxvY2F0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNlYzk3MWY7XHJcbiAgfVxyXG4gIC5kaXYtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXN1Yi10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5jbHMtbGlzdFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcbi5jbHMtZGl2cGF5bWVudFxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTVweFxyXG59XHJcbi50ZXh0LXBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG59XHJcbi5kaXYtaW5mb1xyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uY2xzLXJvd2hlaWdodDFcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGhlaWdodDogODFweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi50ZXh0LW5vdGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4udGV4dC1wcmljZS1mb29kXHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0LXRheFxyXG57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtZFxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi50ZXh0LXRvdGFsXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4uZGl2LXN0YXJ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlclxyXG57XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudHtcclxuICAgIC5wLXRvcC0xNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0zMntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC02e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubS1sZWZ0LTh7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICB9XHJcbiAgICAuc2VsZWN0ZWR7XHJcbiAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnBlcmlvZC1zZWxlY3RlZHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ib29raW5nLWluZm97XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmhvdGVsLW5hbWV7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYm9va2luZy1pbmZvLWRldGFpbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC5kaXYtaW1nLWxlZnR7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAuaW1nLWxlZnR7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmRpdi1jb250ZW50LXJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLnAtbGVmdC02e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRpdi1wcmljZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRpdi1iYW5re1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5pdGVtLWJhbmt7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1iYW5re1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAuaXRlbS1jYXJke1xyXG4gICAgICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWNhcmR7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1vcHRpb257XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAuaXRlbS1vcHRpb257XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogNzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgLmRpdi1tb250aHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yb3ctZmxleHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5jb2wtZmxleHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC5wcmljZS1wZXJtb250aHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGV4dC1zdWJ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wcmljZS10ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmJvcmRlci1yaWdodHtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4ICNmNGY0ZjQ7XHJcbiAgICB9XHJcbiAgICAuYm9yZGVyLXRvcHtcclxuICAgICAgICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjZjRmNGY0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uMlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG59ICIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnRvdGFsLXByaWNlLWQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LXRpdGxlIC5jb21iby1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2Y1OTIzMztcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNscy1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5kaXYtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLXJvd2hlaWdodDEge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtcHJpY2UtZm9vZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC10YXgge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1kIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1zdGFyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC0xNiB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtMzIge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnAtdG9wLTYge1xuICBwYWRkaW5nLXRvcDogNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtMTAge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLm0tbGVmdC04IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wZXJpb2Qtc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmhvdGVsLW5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCAuZGl2LWltZy1sZWZ0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBtaW4td2lkdGg6IDEwNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtaW1nLWxlZnQgLmltZy1sZWZ0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCAuZGl2LWNvbnRlbnQtcmlnaHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwgLmRpdi1jb250ZW50LXJpZ2h0IC5wLWxlZnQtNiB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LXByaWNlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtYmFuayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1iYW5rIC5pdGVtLWJhbmsge1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtYmFuayAuaW1nLWJhbmsge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1jYXJkIC5pdGVtLWNhcmQge1xuICB3aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC43O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWNhcmQgLmltZy1jYXJkIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggNHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LW9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtb3B0aW9uIC5pdGVtLW9wdGlvbiB7XG4gIG1pbi13aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgb3BhY2l0eTogMC43O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LW9wdGlvbiAuaXRlbS1vcHRpb24gLmRpdi1tb250aCB7XG4gIG1hcmdpbjogYXV0bztcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IC5jb2wtZmxleCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXggLmNvbC1mbGV4IC5wcmljZS1wZXJtb250aCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXggLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMjAwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXggLmNvbC1mbGV4IC5wcmljZS10ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9yZGVyLXJpZ2h0IHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCAjZjRmNGY0O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9yZGVyLXRvcCB7XG4gIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNmNGY0ZjQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodinstallment/foodinstallment.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodinstallment/foodinstallment.page.ts ***!
  \*********************************************************/
/*! exports provided: FoodinstallmentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinstallmentPage", function() { return FoodinstallmentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");











let FoodinstallmentPage = class FoodinstallmentPage {
    constructor(navCtrl, foodService, gf, loadingCtrl, searchhotel, toastCtrl, zone, activityService, Roomif, safariViewController) {
        this.navCtrl = navCtrl;
        this.foodService = foodService;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.searchhotel = searchhotel;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.activityService = activityService;
        this.Roomif = Roomif;
        this.safariViewController = safariViewController;
        this.listmenu = [];
        this.bookingCode = "";
        this.banks = [];
        this.cards = [];
        this.periods = [];
        this.priceshow = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        if (!this.foodService.isDinner) {
            this.arrmenu = this.foodService.listItemsCart;
        }
        else {
            this.arrmenu = this.foodService.listDinnerItemsCart;
        }
        for (let i = 0; i < this.arrmenu.length; i++) {
            var chuoi = "";
            if (this.arrmenu[i].itemExtraOther && this.arrmenu[i].itemExtraOther.length > 0) {
                for (let j = 0; j < this.arrmenu[i].itemExtraOther.length; j++) {
                    if (j == this.arrmenu[i].itemExtraOther.length - 1) {
                        if (this.arrmenu[i].itemExtraWater.length > 0) {
                            chuoi = chuoi + this.arrmenu[i].itemExtraOther[j].name + ' · ';
                        }
                        else {
                            chuoi = chuoi + this.arrmenu[i].itemExtraOther[j].name;
                        }
                    }
                    else {
                        chuoi = chuoi + this.arrmenu[i].itemExtraOther[j].name + ' · ';
                    }
                }
            }
            if (this.arrmenu[i].itemExtraWater && this.arrmenu[i].itemExtraWater.length > 0) {
                for (let m = 0; m < this.arrmenu[i].itemExtraWater.length; m++) {
                    if (m == this.arrmenu[i].itemExtraWater.length - 1) {
                        chuoi = chuoi + this.arrmenu[i].itemExtraWater[m].name;
                    }
                    else {
                        chuoi = chuoi + this.arrmenu[i].itemExtraWater[m].name + ' · ';
                    }
                }
            }
            this.arrmenu[i].totalPrice = this.arrmenu[i].itemPrice * this.arrmenu[i].quantity;
            var item = { quantity: this.arrmenu[i].quantity, name: this.arrmenu[i].focategory.name, chuoi: chuoi, totalPrice: this.arrmenu[i].totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."), typePriceId: this.arrmenu[i].focategory.typePriceId };
            this.listmenu.push(item);
        }
        if (this.activityService.objBankInStallment) {
            this.banks = this.activityService.objBankInStallment.banks.data;
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    itemBankClick(item) {
        var se = this;
        if (item) {
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.bankCode).siblings().removeClass('selected');
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.bankCode).addClass('selected');
            se.bankCode = item.bankCode;
            se.periods = [];
            se.periodSelected = null;
            if (item.paymentMethods && item.paymentMethods.length > 0) {
                se.cards = item.paymentMethods;
            }
        }
    }
    itemPeriodClick(item) {
        var se = this;
        if (item) {
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.month).siblings().removeClass('period-selected');
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.month).addClass('period-selected');
            se.month = item.month;
            se.periodSelected = item;
            se.amountByMonth = item.amountByMonth.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            se.amountFinal = item.amountFinal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            se.amountFee = item.amountFee.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
        }
    }
    itemCardClick(item) {
        var se = this;
        if (item) {
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.paymentMethod).siblings().removeClass('selected');
            jquery__WEBPACK_IMPORTED_MODULE_6__("#" + item.paymentMethod).addClass('selected');
            se.paymentMethod = item.paymentMethod;
            se.periodSelected = null;
            if (item.periods && item.periods.length > 0) {
                se.periods = item.periods;
                se.zone.run(() => se.periods.sort(function (a, b) {
                    let direction = -1;
                    let property = 'month';
                    if (a[property] * 1 < b[property] * 1) {
                        return 1 * direction;
                    }
                    else if (a[property] * 1 > b[property] * 1) {
                        return -1 * direction;
                    }
                }));
            }
        }
    }
    installment() {
        var se = this;
        if (!se.validInstallment()) {
            return;
        }
        se.presentLoader();
        se.processBooking().then((data) => {
            if (data) {
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + "/api/toolsapi/sendOrderToAlepay",
                    form: {
                        buyerEmail: se.Roomif.email,
                        buyerName: se.Roomif.hoten,
                        buyerPhone: se.Roomif.phone,
                        orderCode: data.response.bookingCode,
                        orderDescription: "Thanh toan tra gop don hang:" + data.code,
                        amount: se.priceshow.replace(/\,/g, '').replace(/\./g, ''),
                        bankCode: se.bankCode,
                        paymentMethod: se.paymentMethod,
                        month: se.month,
                        cancelUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankFoodNew?code=111&ivivuapp=1',
                        callbackUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankFoodNew?code=000&ivivuapp=1'
                    },
                    headers: {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
                    var rs = JSON.parse(body);
                    se.activityService.objBankInStallment = rs;
                    console.log(rs);
                    if (rs.DataOrder && rs.DataOrder.errorCode == "000") {
                        se.openWebpage(rs.DataOrder.data.checkoutUrl);
                    }
                });
            }
            else {
                if (se.loader) {
                    se.loader.dismiss();
                }
                se.presentToastWarning("Đã có lỗi xảy ra. Vui lòng thử lại sau!");
            }
        });
    }
    validInstallment() {
        var se = this, res = true;
        if (!se.bankCode) {
            res = false;
            se.presentToastWarning("Chưa chọn ngân hàng trả góp. Xin vui lòng chọn lại!");
        }
        else if (!se.paymentMethod) {
            res = false;
            se.presentToastWarning("Chưa chọn phương thức thanh toán. Xin vui lòng chọn lại!");
        }
        else if (!se.month) {
            res = false;
            se.presentToastWarning("Chưa số tháng trả góp. Xin vui lòng chọn lại!");
        }
        return res;
    }
    presentToastWarning(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    openWebpage(url) {
        var se = this;
        setTimeout(() => {
            if (se.loader) {
                se.loader.dismiss();
            }
        }, 500);
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
                    else if (result.event === 'loaded') {
                        console.log(result);
                        if (event && result.url.indexOf('ivivuapp') != -1) {
                            let params = result.url.split('&');
                            params.forEach(element => {
                                if (element.indexOf('errorCode') != -1) {
                                    let errorcodes = element.split('=');
                                    let errorvalue = errorcodes[1];
                                    if (errorvalue == "000") {
                                        se.safariViewController.hide();
                                        se.activityService.installmentPaymentSuccess = true;
                                        se.activityService.installmentPaymentErrorCode = "";
                                        se.foodService.bookkingCode = se.bookingCode;
                                        se.gf.Updatefoodpaytype(se.bookingCode, 3).then(datatype => {
                                            se.navCtrl.navigateForward('foodinstallmentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                                        });
                                    }
                                    else {
                                        se.safariViewController.hide();
                                        se.activityService.installmentPaymentSuccess = false;
                                        if (errorvalue == "150") {
                                            se.activityService.installmentPaymentErrorCode = "Thẻ bị review";
                                        }
                                        else if (errorvalue == "155") {
                                            se.activityService.installmentPaymentErrorCode = "Đợi người mua xác nhận trả góp";
                                        }
                                        se.navCtrl.navigateForward('foodinstallmentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                                    }
                                }
                            });
                        }
                    }
                    else if (result.event === 'closed') {
                        se.presentLoader();
                        se.gf.Updatefoodpaytype(se.bookingCode, 3).then(datatype => {
                            se.checkBooking().then((data) => {
                                if (data) {
                                    se.activityService.installmentPaymentSuccess = true;
                                    se.foodService.bookkingCode = se.bookingCode;
                                }
                                else {
                                    se.activityService.installmentPaymentSuccess = false;
                                }
                                se.navCtrl.navigateForward('foodinstallmentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                            });
                        });
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    presentLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.loader = yield this.loadingCtrl.create({
                message: "",
            });
            this.loader.present();
        });
    }
    checkBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var options = {
                    'method': 'GET',
                    'url': _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
                    'headers': {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response) {
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
            }, 5000);
        });
    }
    processBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.gf.CreateBooking(se.foodService.objBooking).then(data => {
                data = JSON.parse(data);
                if (data.status == 1) {
                    se.bookingCode = data.response.bookingCode;
                    se.startDate = data.response.startDate;
                    se.endDate = data.response.endDate;
                    resolve(data);
                }
            });
        });
    }
};
FoodinstallmentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foodinstallment',
        template: __webpack_require__(/*! ./foodinstallment.page.html */ "./src/app/foodinstallment/foodinstallment.page.html"),
        styles: [__webpack_require__(/*! ./foodinstallment.page.scss */ "./src/app/foodinstallment/foodinstallment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"], _providers_book_service__WEBPACK_IMPORTED_MODULE_5__["RoomInfo"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"]])
], FoodinstallmentPage);



/***/ })

}]);
//# sourceMappingURL=foodinstallment-foodinstallment-module.js.map