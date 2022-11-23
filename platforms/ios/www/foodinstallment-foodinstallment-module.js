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

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-divpayment {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-price-food {\n  text-align: right;\n}\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n.div-star {\n  padding: 2px;\n}\n.installment-payment-header .text-center {\n  text-align: center;\n}\n.installment-payment-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-content .p-top-16 {\n  padding-top: 16px;\n}\n.installment-payment-content .p-top-32 {\n  padding-top: 32px;\n}\n.installment-payment-content .p-top-6 {\n  padding-top: 6px;\n}\n.installment-payment-content .p-top-10 {\n  padding-top: 10px;\n}\n.installment-payment-content .m-left-8 {\n  margin-left: 8px;\n}\n.installment-payment-content .text-title {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.4px;\n}\n.installment-payment-content .selected {\n  opacity: 1 !important;\n}\n.installment-payment-content .period-selected {\n  color: #ffffff !important;\n  background: #26bed6 !important;\n  border: none !important;\n}\n.installment-payment-content .booking-info {\n  padding-top: 16px;\n}\n.installment-payment-content .booking-info .hotel-name {\n  font-size: 16px;\n  color: #003c71;\n  font-weight: 600;\n}\n.installment-payment-content .booking-info .booking-info-detail {\n  display: flex;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left {\n  height: 104px;\n  width: 104px;\n  min-width: 104px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left .img-left {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  padding-left: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right .p-left-6 {\n  padding-left: 6px;\n}\n.installment-payment-content .div-price {\n  text-align: right;\n  font-size: 18px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.installment-payment-content .div-bank {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-bank .item-bank {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  margin-top: 8px;\n}\n.installment-payment-content .div-bank .img-bank {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-card {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-card .item-card {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n}\n.installment-payment-content .div-card .img-card {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-option {\n  display: flex;\n}\n.installment-payment-content .div-option .item-option {\n  min-width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  display: flex;\n}\n.installment-payment-content .div-option .item-option .div-month {\n  margin: auto;\n}\n.installment-payment-content .row-flex {\n  display: flex;\n}\n.installment-payment-content .row-flex .col-flex {\n  width: 100%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.installment-payment-content .row-flex .col-flex .price-permonth {\n  color: #26bed6;\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .row-flex .col-flex .text-sub {\n  font-size: 14px;\n  font-weight: 200;\n}\n.installment-payment-content .row-flex .col-flex .price-text {\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .border-right {\n  border-right: solid 0.5px #f4f4f4;\n}\n.installment-payment-content .border-top {\n  border-top: solid 0.5px #f4f4f4;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kaW5zdGFsbG1lbnQvZm9vZGluc3RhbGxtZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGluc3RhbGxtZW50L2Zvb2RpbnN0YWxsbWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBRUUsY0FBQTtBQ0RSO0FESUk7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNFLDJCQUFBO0FDRE47QURHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQU47QURFSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NSO0FEQ0k7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQ1I7QURFSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ047QURDSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDRU47QURBSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0dOO0FEREU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURGRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDS0o7QURIQTtFQUVFLHNCQUFBO0FDS0Y7QURIQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNLRjtBREhBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUNNRjtBQUNGO0FESEE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDSUo7QURGQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDS047QURIRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTUo7QURKRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ09KO0FETEU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDUUo7QUROQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ1FKO0FETkE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1NOO0FEUEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1VKO0FEUkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNXSjtBRFRFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNZSjtBRFZFO0VBQ0UsZ0JBQUE7QUNhSjtBRFpJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2NSO0FEWkk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDY1I7QURaSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2NOO0FEWEE7RUFFRSxrQkFBQTtBQ2FGO0FEWEE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0FDYUY7QURYQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNhRjtBRFhBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2FGO0FEWEE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2FKO0FEWEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2FGO0FEVkE7RUFFSSxpQkFBQTtBQ1lKO0FEVkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNZRjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNZRjtBRFZBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1lGO0FEVkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDWUY7QURUQTtFQUNFLFlBQUE7QUNZRjtBRFJJO0VBQ0ksa0JBQUE7QUNXUjtBRFRJO0VBQ0ksa0JBQUE7QUNXUjtBRFRJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDY3BEO0FEWlE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNjWjtBRFhJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNhUjtBRFJJO0VBQ0ksaUJBQUE7QUNXUjtBRFRJO0VBQ0ksaUJBQUE7QUNXUjtBRFRJO0VBQ0ksZ0JBQUE7QUNXUjtBRFRJO0VBQ0ksaUJBQUE7QUNXUjtBRFRJO0VBQ0ksZ0JBQUE7QUNXUjtBRFRJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ1dSO0FEVEk7RUFDSSxxQkFBQTtBQ1dSO0FEVEk7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNXUjtBRFRJO0VBQ0ksaUJBQUE7QUNXUjtBRFRRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1daO0FEUlE7RUFDSSxhQUFBO0FDVVo7QURSWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNVaEI7QURSZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ1VwQjtBRE5ZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ1FoQjtBRE5nQjtFQUNJLGlCQUFBO0FDUXBCO0FESEk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREZJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNJUjtBREhRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0taO0FESFE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDS1o7QURESTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDR1I7QURGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0laO0FERlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDSVo7QURBSTtFQUNJLGFBQUE7QUNFUjtBRERRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0daO0FERFk7RUFDSSxZQUFBO0FDR2hCO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ1o7QURBWTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFaEI7QURBWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDRWhCO0FER0k7RUFDSSxpQ0FBQTtBQ0RSO0FER0k7RUFDSSwrQkFBQTtBQ0RSO0FES0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9mb29kaW5zdGFsbG1lbnQvZm9vZGluc3RhbGxtZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLnRleHQtbmFtZVxyXG4gICAge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAudGV4dC1ncmVlblxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQtZGF0ZVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHhcclxuICAgIH1cclxuICAgIC5pbWFnZS1jYXJke1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudG90YWwtcHJpY2V7XHJcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICAudG90YWwtcHJpY2UtZHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIH1cclxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfSAgXHJcbiAgLmRpdi13cmFwaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDo4N3B4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5oclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uY2xzLWhyXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XHJcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcblxyXG59XHJcbi50ZXh0LWluZm9jYXJcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGl2LXNwbGl0LXBhbmVse1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxufVxyXG4udGV4dC1sb2NhdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gIH1cclxuICAuZGl2LXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgIH1cclxuICAgIC5jb21iby1zdWItdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZjU5MjMzO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4uY2xzLWxpc3Rcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxufVxyXG4uY2xzLWRpdnBheW1lbnRcclxue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHhcclxufVxyXG4udGV4dC1wXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufVxyXG4uZGl2LWluZm9cclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuLmNscy1yb3doZWlnaHQxXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBoZWlnaHQ6IDgxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4udGV4dC1ub3RlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42NztcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgXHJcbn1cclxuLnRleHQtcHJpY2UtZm9vZFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGV4dC10YXhcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50ZXh0LWRcclxue1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4udGV4dC10b3RhbFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgXHJcbn1cclxuLmRpdi1zdGFye1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXJcclxue1xyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGlnbi1zZWxmLWNlbnRlcntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdvYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O3RvcDogMHB4O1xyXG5cclxuICAgICAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnR7XHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMzJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTEwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm0tbGVmdC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdGVke1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wZXJpb2Qtc2VsZWN0ZWR7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZy1pbmZve1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ob3RlbC1uYW1le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvb2tpbmctaW5mby1kZXRhaWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAuZGl2LWltZy1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZy1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5wLWxlZnQtNntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtcHJpY2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXYtYmFua3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAuaXRlbS1iYW5re1xyXG4gICAgICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctYmFua3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LWNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgLml0ZW0tY2FyZHtcclxuICAgICAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmltZy1jYXJke1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kaXYtb3B0aW9ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLml0ZW0tb3B0aW9ue1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC5kaXYtbW9udGh7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICAuY29sLWZsZXh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAucHJpY2UtcGVybW9udGh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtc3Vie1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2UtdGV4dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3JkZXItcmlnaHR7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCAjZjRmNGY0O1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci10b3B7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2Y0ZjRmNDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufSAiLCIudGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi50b3RhbC1wcmljZS1kIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODdweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNscy1kaXZwYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uZGl2LWluZm8ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNscy1yb3doZWlnaHQxIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LXByaWNlLWZvb2Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtdGF4IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtc3RhciB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogMHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnAtdG9wLTMyIHtcbiAgcGFkZGluZy10b3A6IDMycHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC02IHtcbiAgcGFkZGluZy10b3A6IDZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnAtdG9wLTEwIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5tLWxlZnQtOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucGVyaW9kLXNlbGVjdGVkIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwM2M3MTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwgLmRpdi1pbWctbGVmdCB7XG4gIGhlaWdodDogMTA0cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgbWluLXdpZHRoOiAxMDRweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCAuZGl2LWltZy1sZWZ0IC5pbWctbGVmdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwgLmRpdi1jb250ZW50LXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtY29udGVudC1yaWdodCAucC1sZWZ0LTYge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1wcmljZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWJhbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtYmFuayAuaXRlbS1iYW5rIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWJhbmsgLmltZy1iYW5rIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBwYWRkaW5nOiAwcHggNHB4O1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtY2FyZCAuaXRlbS1jYXJkIHtcbiAgd2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1jYXJkIC5pbWctY2FyZCB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LW9wdGlvbiAuaXRlbS1vcHRpb24ge1xuICBtaW4td2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG9wYWNpdHk6IDAuNztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1vcHRpb24gLml0ZW0tb3B0aW9uIC5kaXYtbW9udGgge1xuICBtYXJnaW46IGF1dG87XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXgge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IC5jb2wtZmxleCAucHJpY2UtcGVybW9udGgge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXggLmNvbC1mbGV4IC50ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IC5jb2wtZmxleCAucHJpY2UtdGV4dCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvcmRlci1yaWdodCB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMC41cHggI2Y0ZjRmNDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvcmRlci10b3Age1xuICBib3JkZXItdG9wOiBzb2xpZCAwLjVweCAjZjRmNGY0O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufSJdfQ== */"

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