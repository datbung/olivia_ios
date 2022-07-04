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

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-divpayment {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-price-food {\n  text-align: right;\n}\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n.div-star {\n  padding: 2px;\n}\n.installment-payment-header .text-center {\n  text-align: center;\n}\n.installment-payment-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-content .p-top-16 {\n  padding-top: 16px;\n}\n.installment-payment-content .p-top-32 {\n  padding-top: 32px;\n}\n.installment-payment-content .p-top-6 {\n  padding-top: 6px;\n}\n.installment-payment-content .p-top-10 {\n  padding-top: 10px;\n}\n.installment-payment-content .m-left-8 {\n  margin-left: 8px;\n}\n.installment-payment-content .text-title {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.4px;\n}\n.installment-payment-content .selected {\n  opacity: 1 !important;\n}\n.installment-payment-content .period-selected {\n  color: #ffffff !important;\n  background: #26bed6 !important;\n  border: none !important;\n}\n.installment-payment-content .booking-info {\n  padding-top: 16px;\n}\n.installment-payment-content .booking-info .hotel-name {\n  font-size: 16px;\n  color: #003c71;\n  font-weight: 600;\n}\n.installment-payment-content .booking-info .booking-info-detail {\n  display: flex;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left {\n  height: 104px;\n  width: 104px;\n  min-width: 104px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left .img-left {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  padding-left: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right .p-left-6 {\n  padding-left: 6px;\n}\n.installment-payment-content .div-price {\n  text-align: right;\n  font-size: 18px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.installment-payment-content .div-bank {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-bank .item-bank {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  margin-top: 8px;\n}\n.installment-payment-content .div-bank .img-bank {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-card {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-card .item-card {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n}\n.installment-payment-content .div-card .img-card {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-option {\n  display: flex;\n}\n.installment-payment-content .div-option .item-option {\n  min-width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  display: flex;\n}\n.installment-payment-content .div-option .item-option .div-month {\n  margin: auto;\n}\n.installment-payment-content .row-flex {\n  display: flex;\n}\n.installment-payment-content .row-flex .col-flex {\n  width: 100%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.installment-payment-content .row-flex .col-flex .price-permonth {\n  color: #26bed6;\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .row-flex .col-flex .text-sub {\n  font-size: 14px;\n  font-weight: 200;\n}\n.installment-payment-content .row-flex .col-flex .price-text {\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .border-right {\n  border-right: solid 0.5px #f4f4f4;\n}\n.installment-payment-content .border-top {\n  border-top: solid 0.5px #f4f4f4;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZm9vZGluc3RhbGxtZW50L2Zvb2RpbnN0YWxsbWVudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RpbnN0YWxsbWVudC9mb29kaW5zdGFsbG1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDUjtBRENJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0VOO0FEQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHTjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEE7RUFFRSxzQkFBQTtBQ0tGO0FESEE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDS0Y7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDTUY7QUFDRjtBREhBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tOO0FESEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRExFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1FKO0FETkE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRE5BO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTTjtBRFBFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNVSjtBRFJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDV0o7QURURTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURaSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNjUjtBRFpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2NSO0FEWkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNjTjtBRFhBO0VBRUUsa0JBQUE7QUNhRjtBRFhBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDYUY7QURYQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNhRjtBRFhBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFhBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFhBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhRjtBRFZBO0VBRUksaUJBQUE7QUNZSjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWUY7QURWQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZRjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1lGO0FEVEE7RUFDRSxZQUFBO0FDWUY7QURSSTtFQUNJLGtCQUFBO0FDV1I7QURUSTtFQUNJLGtCQUFBO0FDV1I7QURUSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ2NwRDtBRFpRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDY1o7QURYSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDYVI7QURSSTtFQUNJLGlCQUFBO0FDV1I7QURUSTtFQUNJLGlCQUFBO0FDV1I7QURUSTtFQUNJLGdCQUFBO0FDV1I7QURUSTtFQUNJLGlCQUFBO0FDV1I7QURUSTtFQUNJLGdCQUFBO0FDV1I7QURUSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNXUjtBRFRJO0VBQ0kscUJBQUE7QUNXUjtBRFRJO0VBQ0kseUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FDV1I7QURUSTtFQUNJLGlCQUFBO0FDV1I7QURUUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNXWjtBRFJRO0VBQ0ksYUFBQTtBQ1VaO0FEUlk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDVWhCO0FEUmdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7QUNVcEI7QUROWTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNRaEI7QUROZ0I7RUFDSSxpQkFBQTtBQ1FwQjtBREhJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS1I7QURGSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDSVI7QURIUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNLWjtBREhRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0taO0FEREk7RUFDSSxhQUFBO0VBQ0EsZUFBQTtBQ0dSO0FERlE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNJWjtBREZRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtBQ0laO0FEQUk7RUFDSSxhQUFBO0FDRVI7QUREUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHWjtBRERZO0VBQ0ksWUFBQTtBQ0doQjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NaO0FEQVk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRWhCO0FEQVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURBWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0VoQjtBREdJO0VBQ0ksaUNBQUE7QUNEUjtBREdJO0VBQ0ksK0JBQUE7QUNEUjtBREtBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvZm9vZGluc3RhbGxtZW50L2Zvb2RpbnN0YWxsbWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC50ZXh0LW5hbWVcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLnRleHQtZ3JlZW5cclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LWRhdGVcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtY2FyZHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNle1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNlLWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXJvb20tcHJpY2Utb3Rhe1xyXG4gICAgICBjb2xvcjojODI4MjgyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH0gIFxyXG4gIC5kaXYtd3JhcGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6ODdweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaHJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuLmNscy1oclxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcclxuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50e1xyXG4gICAgbWF4LXdpZHRoOiAxODhweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxufVxyXG4udGV4dC1pbmZvY2FyXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRpdi1zcGxpdC1wYW5lbHtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbn1cclxuLnRleHQtbG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLmRpdi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgIH1cclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLmNscy1saXN0XHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNscy1kaXZwYXltZW50XHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4XHJcbn1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn1cclxuLmRpdi1pbmZvXHJcbntcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5jbHMtcm93aGVpZ2h0MVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgaGVpZ2h0OiA4MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHQtbm90ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi50ZXh0LXByaWNlLWZvb2Rcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRleHQtdGF4XHJcbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dC1kXHJcbntcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnRleHQtdG90YWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi5kaXYtc3RhcntcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyXHJcbntcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50e1xyXG4gICAgLnAtdG9wLTE2e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTMye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIH1cclxuICAgIC5wLXRvcC0xMHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuICAgIC5tLWxlZnQtOHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIH1cclxuICAgIC5zZWxlY3RlZHtcclxuICAgICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAucGVyaW9kLXNlbGVjdGVke1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJvb2tpbmctaW5mb3tcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICBcclxuICAgICAgICAuaG90ZWwtbmFtZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib29raW5nLWluZm8tZGV0YWlse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgLmRpdi1pbWctbGVmdHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwNHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC5pbWctbGVmdHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGl2LWNvbnRlbnQtcmlnaHR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAucC1sZWZ0LTZ7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGl2LXByaWNle1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGl2LWJhbmt7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLml0ZW0tYmFua3tcclxuICAgICAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW1nLWJhbmt7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5pdGVtLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctY2FyZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LW9wdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5pdGVtLW9wdGlvbntcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA3NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAuZGl2LW1vbnRoe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJvdy1mbGV4e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmNvbC1mbGV4e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgLnByaWNlLXBlcm1vbnRoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0LXN1YntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByaWNlLXRleHR7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYm9yZGVyLXJpZ2h0e1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogc29saWQgMC41cHggI2Y0ZjRmNDtcclxuICAgIH1cclxuICAgIC5ib3JkZXItdG9we1xyXG4gICAgICAgIGJvcmRlci10b3A6IHNvbGlkIDAuNXB4ICNmNGY0ZjQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn0gIiwiLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4udG90YWwtcHJpY2UtZCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xufVxuXG4udGV4dC1yb29tLXByaWNlLW90YSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDg3cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnQge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxufVxuLnRleHQtaW5mb2NhciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWM5NzFmO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jbHMtZGl2cGF5bWVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmRpdi1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0MSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1wcmljZS1mb29kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXRheCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LXN0YXIge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtNiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAubS1sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnBlcmlvZC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8ge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtaW1nLWxlZnQge1xuICBoZWlnaHQ6IDEwNHB4O1xuICB3aWR0aDogMTA0cHg7XG4gIG1pbi13aWR0aDogMTA0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwgLmRpdi1pbWctbGVmdCAuaW1nLWxlZnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtY29udGVudC1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCAuZGl2LWNvbnRlbnQtcmlnaHQgLnAtbGVmdC02IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1iYW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWJhbmsgLml0ZW0tYmFuayB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1iYW5rIC5pbWctYmFuayB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWNhcmQgLml0ZW0tY2FyZCB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtY2FyZCAuaW1nLWNhcmQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1vcHRpb24gLml0ZW0tb3B0aW9uIHtcbiAgbWluLXdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtb3B0aW9uIC5pdGVtLW9wdGlvbiAuZGl2LW1vbnRoIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXggLmNvbC1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXggLnByaWNlLXBlcm1vbnRoIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IC5jb2wtZmxleCAudGV4dC1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXggLnByaWNlLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4ICNmNGY0ZjQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2Y0ZjRmNDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn0iXX0= */"

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