(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["installmentpayment-installmentpayment-module"],{

/***/ "./src/app/installmentpayment/installmentpayment.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/installmentpayment/installmentpayment.module.ts ***!
  \*****************************************************************/
/*! exports provided: InstallmentpaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentPageModule", function() { return InstallmentpaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installmentpayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installmentpayment.page */ "./src/app/installmentpayment/installmentpayment.page.ts");







const routes = [
    {
        path: '',
        component: _installmentpayment_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentPage"]
    }
];
let InstallmentpaymentPageModule = class InstallmentpaymentPageModule {
};
InstallmentpaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_installmentpayment_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentPage"]]
    })
], InstallmentpaymentPageModule);



/***/ }),

/***/ "./src/app/installmentpayment/installmentpayment.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/installmentpayment/installmentpayment.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-payment-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"div-goback\" (click)=\"goback()\" >\n              <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Trả góp 0%</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"installment-payment-content\">\n    <img src=\"./assets/step/step_3.svg\">\n    <div class=\"booking-info\">\n      <div class=\"hotel-name\">{{Name}}</div>\n\n      <div class=\"booking-info-detail\">\n\n        <div class=\"div-img-left p-top-10\">\n          <img class=\"img-left\" src=\"{{Avatar}}\">\n        </div>\n\n        <div class=\"div-content-right p-top-10\">\n          <div>\n            <img class=\"img-date\" src=\"./assets/imgs/ic_date.svg\" > \n            <ion-label class=\"p-left-6\">{{cin}} → {{cout}}</ion-label>\n          </div>\n\n          <div>\n            <img class=\"img-people\" src=\"./assets/imgs/ic_people.svg\" > \n            <ion-label class=\"p-left-6\">{{adults}} người lớn | {{children}} trẻ em</ion-label>\n          </div>\n\n          <div>\n            <img class=\"img-food\" src=\"./assets/ic_hoteldetail/ic_food_b.svg\" > \n            <ion-label class=\"p-left-6\">{{nameroom}} | {{breakfast}}</ion-label>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"div-price\">\n      {{PriceAvgPlusTAStr}}đ\n    </div>\n\n    <div class=\"text-title p-top-16\">Chọn ngân hàng trả góp</div>\n    <div class=\"div-bank\">\n      <div [ngClass]=\" (idx==0 || idx ==4 || idx == 8 || idx == 12 || idx == 16 || idx == 20 || idx == 24)? 'item-bank' : 'item-bank m-left-8' \" *ngFor=\"let bank of banks; let idx = index\" id={{bank.bankCode}} (click)=\"itemBankClick(bank)\">\n        <div >\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SACOMBANK'\" src=\"./assets/ic_bank/ic_SACOMBANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'BIDV'\" src=\"./assets/ic_bank/ic_BIDV_1.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'TECHCOMBANK'\" src=\"./assets/ic_bank/ic_TECHCOMBANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VIETINBANK'\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'HSBC'\" src=\"./assets/ic_bank/ic_HSBC.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SC'\" src=\"./assets/ic_bank/ic_SC.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'FE'\" src=\"./assets/ic_bank/ic_FE.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'CTB'\" src=\"./assets/ic_bank/ic_CTB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VPBANK'\" src=\"./assets/ic_bank/ic_VPBANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'ACB'\" src=\"./assets/ic_bank/ic_ACB_1.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'ANZ'\" src=\"./assets/ic_bank/ic_ANZ.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'HOMECREDIT'\" src=\"./assets/ic_bank/ic_HOMECREDIT.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SHINHANBANK'\" src=\"./assets/ic_bank/ic_SHINHANBANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'EXIMBANK'\" src=\"./assets/ic_bank/ic_EXIMBANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VIB'\" src=\"./assets/ic_bank/ic_VIB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SEABANK'\" src=\"./assets/ic_bank/ic_SEABANK.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'TPB'\" src=\"./assets/ic_bank/ic_TPB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SCB'\" src=\"./assets/ic_bank/ic_SCB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'NAB'\" src=\"./assets/ic_bank/ic_NAB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'OCB'\" src=\"./assets/ic_bank/ic_OCB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'KLB'\" src=\"./assets/ic_bank/ic_KLB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'SHB'\" src=\"./assets/ic_bank/ic_SHB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'VCB'\" src=\"./assets/ic_bank/ic_VCB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'MB'\" src=\"./assets/ic_bank/ic_MB.png\">\n          <img class=\"img-bank\" *ngIf=\"bank.bankCode == 'BVB'\" src=\"./assets/ic_bank/ic_BVB.png\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-title p-top-32\" *ngIf=\"cards && cards.length >0\">Chọn loại thẻ</div>\n    <div class=\"div-card p-top-6\" *ngIf=\"cards && cards.length >0\">\n      <div [ngClass]=\" (idx==0)? 'item-card' : 'item-card m-left-8' \" id={{card.paymentMethod}} *ngFor=\"let card of cards; let idx = index\" (click)=\"itemCardClick(card)\">\n        <div >\n          <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'VISA'\" src=\"./assets/ic_bank/ic_VISA.png\">\n          <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'JCB'\" src=\"./assets/ic_bank/ic_JCB.png\">\n          <img class=\"img-card\" *ngIf=\"card.paymentMethod == 'MASTERCARD'\" src=\"./assets/ic_bank/ic_MASTERCARD.png\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"text-title p-top-32\" *ngIf=\"periods && periods.length >0\">Trả góp qua thẻ {{paymentMethod}} - {{bankCode}}</div>\n    <div class=\"div-option p-top-6\" *ngIf=\"periods && periods.length >0\">\n      <div [ngClass]=\"idx ==0 ? 'item-option' : 'item-option m-left-8'\" id={{period.month}} *ngFor=\"let period of periods; let idx=index\" (click)=\"itemPeriodClick(period)\"><div class=\"div-month\">{{ period.month }} tháng</div></div>\n    </div>\n    \n    <div *ngIf=\"periodSelected\">\n      <div class=\"row-flex\" >\n        <div class=\"col-flex border-right\">\n          <div class=\"price-permonth\">{{amountByMonth}}đ</div>\n          <div class=\"text-sub\">Góp mỗi tháng</div>\n        </div>\n        <div class=\"col-flex\">\n          <div class=\"price-text\">{{amountFinal}}đ</div>\n          <div class=\"text-sub\">Tổng tiền trả góp</div>\n        </div>\n      </div>\n      <div class=\"row-flex border-top\">\n        <div class=\"col-flex border-right\">\n          <div class=\"price-text\">{{amountFee}}đ</div>\n          <div class=\"text-sub\">Chênh lệch với trả thẳng</div>\n        </div>\n        <div class=\"col-flex\">\n          <div class=\"price-text\">{{PriceAvgPlusTAStr}}đ</div>\n          <div class=\"text-sub\">Giá mua trả thẳng</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"div-text-note\">\n      <div>* Quý khách sẽ không được thay đổi hoặc huỷ đơn hàng vì bất kỳ lý do gì sau khi đơn hàng đã chuyển sang trả góp.</div>\n      <div class=\"p-top-16\">\n        <span class=\"p-right-6\"><ion-checkbox class=\"ion-checkbox\" checked=\"true\" (ionChange)=\"checknote($event)\" ></ion-checkbox> </span>\n        <span >Tôi đồng ý với các điều khoản và điều kiện về đơn hàng trên website iVIVU.com</span>\n      </div>\n      \n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div *ngIf=\"!ischeckNote\" style=\"background-color: #ffffff; text-align: center;\">\n    <button  ion-button round outline class=\"button btn-disabled\">Trả góp</button>\n  </div>\n  <div *ngIf=\"ischeckNote\"  style=\"background-color: #ffffff; text-align: center;\">\n    <button  (click)=\"installment()\" ion-button round outline class=\"button button2\">Trả góp</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/installmentpayment/installmentpayment.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/installmentpayment/installmentpayment.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".installment-payment-header .text-center {\n  text-align: center;\n}\n.installment-payment-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-content {\n  padding: 16px;\n}\n.installment-payment-content .p-top-16 {\n  padding-top: 16px;\n}\n.installment-payment-content .p-top-32 {\n  padding-top: 32px;\n}\n.installment-payment-content .p-top-6 {\n  padding-top: 6px;\n}\n.installment-payment-content .p-top-10 {\n  padding-top: 10px;\n}\n.installment-payment-content .m-left-8 {\n  margin-left: 8px;\n}\n.installment-payment-content .text-title {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: -0.4px;\n}\n.installment-payment-content .selected {\n  opacity: 1 !important;\n}\n.installment-payment-content .period-selected {\n  color: #ffffff !important;\n  background: #26bed6 !important;\n  border: none !important;\n}\n.installment-payment-content .booking-info {\n  padding-top: 16px;\n}\n.installment-payment-content .booking-info .hotel-name {\n  font-size: 16px;\n  color: #003c71;\n  font-weight: 600;\n}\n.installment-payment-content .booking-info .booking-info-detail {\n  display: flex;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left {\n  height: 104px;\n  width: 104px;\n  min-width: 104px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-img-left .img-left {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  padding-left: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.installment-payment-content .booking-info .booking-info-detail .div-content-right .p-left-6 {\n  padding-left: 6px;\n}\n.installment-payment-content .div-price {\n  text-align: right;\n  font-size: 18px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.installment-payment-content .div-bank {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-bank .item-bank {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  margin-top: 8px;\n}\n.installment-payment-content .div-bank .img-bank {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-text-note {\n  padding-top: 32px;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.installment-payment-content .p-right-6 {\n  padding-right: 6px;\n}\n.installment-payment-content .p-top-16 {\n  padding-top: 16px;\n}\n.installment-payment-content .div-card {\n  display: flex;\n  flex-wrap: wrap;\n}\n.installment-payment-content .div-card .item-card {\n  width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n}\n.installment-payment-content .div-card .img-card {\n  height: 40px;\n  padding: 0px 4px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.installment-payment-content .div-option {\n  display: flex;\n  overflow: scroll;\n}\n.installment-payment-content .div-option .item-option {\n  min-width: 76px;\n  height: 40px;\n  border-radius: 4px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  opacity: 0.7;\n  display: flex;\n}\n.installment-payment-content .div-option .item-option .div-month {\n  margin: auto;\n}\n.installment-payment-content .row-flex {\n  display: flex;\n}\n.installment-payment-content .row-flex .col-flex {\n  width: 100%;\n  padding: 12px 0px;\n  text-align: center;\n}\n.installment-payment-content .row-flex .col-flex .price-permonth {\n  color: #26bed6;\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .row-flex .col-flex .text-sub {\n  font-size: 14px;\n  font-weight: 200;\n}\n.installment-payment-content .row-flex .col-flex .price-text {\n  font-weight: 600;\n  font-size: 18px;\n}\n.installment-payment-content .border-right {\n  border-right: solid 0.5px #f4f4f4;\n}\n.installment-payment-content .border-top {\n  border-top: solid 0.5px #f4f4f4;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n}\n.button-none {\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.btn-disabled {\n  background: #bdbdbd !important;\n  border: solid 1px #bdbdbd !important;\n  color: #ffffff !important;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2luc3RhbGxtZW50cGF5bWVudC9pbnN0YWxsbWVudHBheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9pbnN0YWxsbWVudHBheW1lbnQvaW5zdGFsbG1lbnRwYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ0VwRDtBREFRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRVo7QURDSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQ1I7QURHQTtFQUNJLGFBQUE7QUNBSjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FERUk7RUFDSSxxQkFBQTtBQ0FSO0FERUk7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7QUNBUjtBREVJO0VBQ0ksaUJBQUE7QUNBUjtBREVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0FaO0FER1E7RUFDSSxhQUFBO0FDRFo7QURHWTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNEaEI7QURHZ0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0RwQjtBREtZO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0hoQjtBREtnQjtFQUNJLGlCQUFBO0FDSHBCO0FEUUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNOUjtBRFNJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNQUjtBRFFRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ05aO0FEUVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDTlo7QURVSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUlI7QURXSTtFQUNJLGtCQUFBO0FDVFI7QURZSTtFQUNJLGlCQUFBO0FDVlI7QURhSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDWFI7QURZUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZaO0FEWVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDVlo7QURjSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ1pSO0FEYVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWFo7QURhWTtFQUNJLFlBQUE7QUNYaEI7QURlSTtFQUNJLGFBQUE7QUNiUjtBRGVRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNiWjtBRGNZO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1poQjtBRGNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDWmhCO0FEY1k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNaaEI7QURpQkk7RUFDSSxpQ0FBQTtBQ2ZSO0FEaUJJO0VBQ0ksK0JBQUE7QUNmUjtBRG1CQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNqQko7QURtQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2hCSjtBRGtCQTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDaEJKO0FEa0JBO0VBQ0ksOEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNmSiIsImZpbGUiOiJzcmMvYXBwL2luc3RhbGxtZW50cGF5bWVudC9pbnN0YWxsbWVudHBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyXHJcbntcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuXHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMzJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMycHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtNntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnAtdG9wLTEwe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm0tbGVmdC04e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgfVxyXG4gICAgLnNlbGVjdGVke1xyXG4gICAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5wZXJpb2Qtc2VsZWN0ZWR7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZy1pbmZve1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ob3RlbC1uYW1le1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJvb2tpbmctaW5mby1kZXRhaWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgICAuZGl2LWltZy1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTA0cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLmltZy1sZWZ0e1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kaXYtY29udGVudC1yaWdodHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5wLWxlZnQtNntcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kaXYtcHJpY2V7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXYtYmFua3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAuaXRlbS1iYW5re1xyXG4gICAgICAgICAgICB3aWR0aDogNzZweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctYmFua3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LXRleHQtbm90ZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIH1cclxuXHJcbiAgICAucC1yaWdodC02e1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRpdi1jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIC5pdGVtLWNhcmR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbWctY2FyZHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGl2LW9wdGlvbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgICAgLml0ZW0tb3B0aW9ue1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgICAgIC5kaXYtbW9udGh7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucm93LWZsZXh7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBcclxuICAgICAgICAuY29sLWZsZXh7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAucHJpY2UtcGVybW9udGh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtc3Vie1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJpY2UtdGV4dHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5ib3JkZXItcmlnaHR7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAwLjVweCAjZjRmNGY0O1xyXG4gICAgfVxyXG4gICAgLmJvcmRlci10b3B7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2Y0ZjRmNDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufSBcclxuLmlvbi1jaGVja2JveHtcclxuICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAxNnB4O1xyXG59XHJcbi5idXR0b24tbm9uZVxyXG57XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn0gXHJcbi5idG4tZGlzYWJsZWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufVxyXG4iLCIuaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1oZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC0zMiB7XG4gIHBhZGRpbmctdG9wOiAzMnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtNiB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5wLXRvcC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAubS1sZWZ0LTgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnBlcmlvZC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8ge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuaG90ZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtaW1nLWxlZnQge1xuICBoZWlnaHQ6IDEwNHB4O1xuICB3aWR0aDogMTA0cHg7XG4gIG1pbi13aWR0aDogMTA0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib29raW5nLWluZm8gLmJvb2tpbmctaW5mby1kZXRhaWwgLmRpdi1pbWctbGVmdCAuaW1nLWxlZnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuYm9va2luZy1pbmZvIC5ib29raW5nLWluZm8tZGV0YWlsIC5kaXYtY29udGVudC1yaWdodCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmJvb2tpbmctaW5mbyAuYm9va2luZy1pbmZvLWRldGFpbCAuZGl2LWNvbnRlbnQtcmlnaHQgLnAtbGVmdC02IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtcHJpY2Uge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1iYW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWJhbmsgLml0ZW0tYmFuayB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1iYW5rIC5pbWctYmFuayB7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMHB4IDRweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi10ZXh0LW5vdGUge1xuICBwYWRkaW5nLXRvcDogMzJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC1yaWdodC02IHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucC10b3AtMTYge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAuZGl2LWNhcmQgLml0ZW0tY2FyZCB7XG4gIHdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtY2FyZCAuaW1nLWNhcmQge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCA0cHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtb3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLmRpdi1vcHRpb24gLml0ZW0tb3B0aW9uIHtcbiAgbWluLXdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBvcGFjaXR5OiAwLjc7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5kaXYtb3B0aW9uIC5pdGVtLW9wdGlvbiAuZGl2LW1vbnRoIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtY29udGVudCAucm93LWZsZXggLmNvbC1mbGV4IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXggLnByaWNlLXBlcm1vbnRoIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWNvbnRlbnQgLnJvdy1mbGV4IC5jb2wtZmxleCAudGV4dC1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5yb3ctZmxleCAuY29sLWZsZXggLnByaWNlLXRleHQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib3JkZXItcmlnaHQge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDAuNXB4ICNmNGY0ZjQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1jb250ZW50IC5ib3JkZXItdG9wIHtcbiAgYm9yZGVyLXRvcDogc29saWQgMC41cHggI2Y0ZjRmNDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG59XG5cbi5idXR0b24tbm9uZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uYnRuLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/installmentpayment/installmentpayment.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/installmentpayment/installmentpayment.page.ts ***!
  \***************************************************************/
/*! exports provided: InstallmentpaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentPage", function() { return InstallmentpaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");










let InstallmentpaymentPage = class InstallmentpaymentPage {
    constructor(navCtrl, Roomif, booking, bookCombo, searchhotel, activityService, toastCtrl, storage, loadingCtrl, zone, safariViewController) {
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.booking = booking;
        this.bookCombo = bookCombo;
        this.searchhotel = searchhotel;
        this.activityService = activityService;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.safariViewController = safariViewController;
        this.banks = [];
        this.cards = [];
        this.periods = [];
        this.ischeckNote = true;
        var se = this;
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                se.auth_token = auth_token;
            }
        });
        se.ischeckpayment = Roomif.ischeckpayment;
        se.arrchild = se.searchhotel.arrchild;
        se.titlecombo = se.bookCombo.ComboTitle;
        se.Avatar = se.Roomif.imgHotel;
        se.Name = se.booking.HotelName;
        se.Address = se.Roomif.Address;
        se.cin = se.booking.CheckInDate;
        se.cout = se.booking.CheckOutDate;
        var chuoicin = se.cin.split('-');
        var chuoicout = se.cout.split('-');
        se.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
        se.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
        se.adults = se.booking.Adults;
        se.children = se.booking.Child;
        se.room = se.Roomif.arrroom;
        se.nameroom = se.room[0].ClassName;
        se.breakfast = se.Roomif.objMealType.Name;
        se.roomtype = se.Roomif.roomtype;
        se.jsonroom = se.Roomif.jsonroom;
        if (se.Roomif.priceshow) {
            se.PriceAvgPlusTAStr = se.Roomif.priceshow;
        }
        else if (se.booking.cost) {
            se.PriceAvgPlusTAStr = se.booking.cost;
        }
        if (se.activityService.objBankInStallment) {
            se.banks = se.activityService.objBankInStallment.banks.data;
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
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.bankCode).siblings().removeClass('selected');
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.bankCode).addClass('selected');
            se.bankCode = item.bankCode;
            se.periods = [];
            se.periodSelected = null;
            if (item.paymentMethods && item.paymentMethods.length > 0) {
                se.cards = item.paymentMethods;
            }
        }
    }
    itemCardClick(item) {
        var se = this;
        if (item) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.paymentMethod).siblings().removeClass('selected');
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.paymentMethod).addClass('selected');
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
    itemPeriodClick(item) {
        var se = this;
        if (item) {
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.month).siblings().removeClass('period-selected');
            jquery__WEBPACK_IMPORTED_MODULE_5__("#" + item.month).addClass('period-selected');
            se.month = item.month;
            se.periodSelected = item;
            se.amountByMonth = item.amountByMonth.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            se.amountFinal = item.amountFinal.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
            se.amountFee = item.amountFee.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.');
        }
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
    presentLoader() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.loader = yield this.loadingCtrl.create({
                message: "",
            });
            this.loader.present();
        });
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
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + "/api/toolsapi/sendOrderToAlepay",
                    form: {
                        buyerEmail: se.booking.CEmail,
                        buyerName: se.Roomif.hoten,
                        buyerPhone: se.Roomif.phone,
                        orderCode: data.code,
                        orderDescription: "Thanh toan tra gop don hang:" + data.code,
                        amount: se.PriceAvgPlusTAStr.replace(/\,/g, '').replace(/\./g, ''),
                        bankCode: se.bankCode,
                        paymentMethod: se.paymentMethod,
                        month: se.month,
                        cancelUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankNew?code=111&ivivuapp=1',
                        callbackUrl: 'https://beta-olivia.ivivu.com/payment/Home/BlankNew?code=000&ivivuapp=1'
                    },
                    headers: {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    var rs = JSON.parse(body);
                    se.activityService.objBankInStallment = rs;
                    console.log(rs);
                    if (rs.DataOrder && rs.DataOrder.errorCode == "000") {
                        se.openWebpage(rs.DataOrder.data.checkoutUrl);
                    }
                    else {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
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
    processBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            if (se.booking.CEmail) {
                var Invoice = 0;
                if (se.Roomif.order) {
                    Invoice = 1;
                }
                var jsonroom = se.Roomif.arrroom[0];
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: {
                        RoomClassObj: jsonroom.ListObjRoomClass,
                        CName: se.Roomif.hoten,
                        CEmail: se.booking.CEmail,
                        CPhone: se.Roomif.phone,
                        timestamp: Date.now(),
                        HotelID: se.booking.HotelId,
                        paymentMethod: "2",
                        note: se.Roomif.notetotal,
                        source: '6',
                        MemberToken: se.auth_token,
                        CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
                        UsePointPrice: se.Roomif.pricepoint,
                        NoteCorp: se.Roomif.order,
                        Invoice: Invoice,
                        UserPoints: se.Roomif.point,
                        CheckInDate: se.booking.CheckInDate,
                        CheckOutDate: se.booking.CheckOutDate,
                        TotalNight: se.jsonroom.TotalNight,
                        MealTypeIndex: se.booking.indexmealtype,
                        CompanyName: se.Roomif.companyname,
                        CompanyAddress: se.Roomif.address,
                        CompanyTaxCode: se.Roomif.tax,
                        BillingAddress: se.Roomif.addressorder,
                        promotionCode: se.Roomif.promocode,
                        comboid: se.bookCombo.ComboId
                    },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "installmentPayment",
                            func: "processBooking",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "installmentPayment";
                        error.func = "processBooking";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (body) {
                        if (body.error == 0) {
                            se.booking.code = body.code;
                            var code = body.code;
                            var stt = body.bookingStatus;
                            resolve(body);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        error.page = "roomadddetails";
                        error.func = "paymentnotAL";
                        error.param = JSON.stringify(options);
                        resolve(false);
                    }
                });
            }
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
                                        se.navCtrl.navigateForward('/installmentpaymentdone');
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
                                        se.navCtrl.navigateForward('/installmentpaymentdone');
                                    }
                                }
                            });
                        }
                    }
                    else if (result.event === 'closed') {
                        se.presentLoader();
                        se.checkBooking().then((data) => {
                            if (data) {
                                se.activityService.installmentPaymentSuccess = true;
                            }
                            else {
                                se.activityService.installmentPaymentSuccess = false;
                            }
                            se.navCtrl.navigateForward('/installmentpaymentdone');
                        });
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
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
    checkBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
                    qs: { code: se.booking.code },
                    headers: {}
                };
                requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roomchoosebank",
                            func: "roomchoosebank-mCheckBooking",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roomchoosebank";
                        error.func = "roomchoosebank-mCheckBooking";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (body) {
                        var rs = JSON.parse(body);
                        if (rs.StatusBooking == 3) {
                            console.log(rs);
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
                    }
                    else {
                        error.page = "roomchoosebank";
                        error.func = "mCheckBooking";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                    }
                });
            }, 5000);
        });
    }
    checknote(ev) {
        this.ischeckNote = ev.detail.checked;
    }
};
InstallmentpaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installmentpayment',
        template: __webpack_require__(/*! ./installmentpayment.page.html */ "./src/app/installmentpayment/installmentpayment.page.html"),
        styles: [__webpack_require__(/*! ./installmentpayment.page.scss */ "./src/app/installmentpayment/installmentpayment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"]])
], InstallmentpaymentPage);



/***/ })

}]);
//# sourceMappingURL=installmentpayment-installmentpayment-module.js.map