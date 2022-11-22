(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["combopayment-combopayment-module"],{

/***/ "./src/app/combopayment/combopayment.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/combopayment/combopayment.module.ts ***!
  \*****************************************************/
/*! exports provided: CombopaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombopaymentPageModule", function() { return CombopaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _combopayment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combopayment.page */ "./src/app/combopayment/combopayment.page.ts");
/* harmony import */ var _voucher_voucherslide_voucherslide_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../voucher/voucherslide/voucherslide.module */ "./src/app/voucher/voucherslide/voucherslide.module.ts");








const routes = [
    {
        path: '',
        component: _combopayment_page__WEBPACK_IMPORTED_MODULE_6__["CombopaymentPage"]
    }
];
let CombopaymentPageModule = class CombopaymentPageModule {
};
CombopaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _voucher_voucherslide_voucherslide_module__WEBPACK_IMPORTED_MODULE_7__["VoucherSlidePageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_combopayment_page__WEBPACK_IMPORTED_MODULE_6__["CombopaymentPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], CombopaymentPageModule);



/***/ }),

/***/ "./src/app/combopayment/combopayment.page.html":
/*!*****************************************************!*\
  !*** ./src/app/combopayment/combopayment.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n  <div style=\"margin-top: 15px\" class=\"div-title\">\n    <ion-label class=\"combo-title\">{{Name}}</ion-label>\n  </div>\n  <ion-row  class=\"cls-rowheight1\">\n    <ion-col size=\"4\">\n      <div class=\"div-wrapimg\">\n        <img style=\"border-radius: 5px;height: 100%;object-fit: cover\" src={{Avatar}}>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roompayment\">\n      <div class=\"div-info\">\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_day.svg\"> {{cin}} → {{cout}}\n        </p>\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{adults}} người lớn |\n          {{children}} trẻ em {{textage}}\n        </p>\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}} <span *ngIf=\"breakfast\">| {{roomnumber}} phòng x {{nameroom}}</span>\n        </p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-left: -5px\">\n    <ion-col size=\"6\">\n      <ion-label class=\"text-infocar\">{{departDateTimeStr}}</ion-label>\n      <div class=\"combo-departure-time\">\n        <span>{{departTimeStr}}</span>\n      </div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label class=\"text-infocar\">{{returnDateTimeStr}}</ion-label>\n      <div class=\"combo-departure-time\">\n        <span>{{returnTimeStr}}</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <hr >\n  <div class=\"div-voucher-apply\" *ngIf=\"_voucherService.selectVoucher && _voucherService.selectVoucher.claimed\">\n    <div class=\"width-200\" *ngIf=\"bookCombo.promoCode\"><span class=\"text-normal\">Ưu đãi (</span><span class=\"text-code\">{{bookCombo.promoCode}}</span><span class=\"text-normal\">)</span> </div>\n    <div class=\"width-100 text-normal text-right\" *ngIf=\"bookCombo.discountpromo\">{{gf.convertNumberToString(bookCombo.discountpromo)}}đ</div>\n  </div>\n  <div class=\"cls-divpayment\">\n    <ion-row class=\"cls-rowheight\">\n      <ion-col size=\"5\">\n        <div>\n          <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n          <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <p class=\"total-price\" style=\"text-align: right\">\n          {{priceshow}}đ\n        </p>\n        <p class=\"text-normal text-strike\" *ngIf=\"bookCombo.totalPriceBeforeApplyVoucher\">\n          {{gf.convertNumberToString(bookCombo.totalPriceBeforeApplyVoucher)}}đ\n        </p> \n        <!-- <div class=\"text-total-price\" *ngIf=\"bookCombo.promoCode\">{{priceshow}}<span class=\"text-d\">đ</span></div>\n        <div class=\"width-100 text-normal text-strike\" *ngIf=\"bookCombo.totalPriceBeforeApplyVoucher\">{{gf.convertNumberToString(bookCombo.totalPriceBeforeApplyVoucher)}}đ</div>\n        -->\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n      <label  class=\"text-list m-bottom-8\">\n        Tài khoản công ty\n      </label>\n      <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - bookCombo.totalprice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n    </ion-item>\n    \n    <ion-item *ngIf=\"checkpayment=='AL'\" (click)=\"roompaymentatm()\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"checkpayment=='AL'\" (click)=\"roompaymentvisa()\" class=\"ion-item1\">\n      <label>\n        Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa&&checkpayment=='AL'\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio  mode=\"md\"  [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" checked=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px;\">\n    <ion-item *ngIf=\"checkpayment=='AL'\" (click)=\"roompaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"checkpayment=='AL'\" (click)=\"roompaymentpayooqr()\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentpayoolive()\">\n      <label>\n        Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentbank()\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentlive()\">\n      <label>\n        Trực tiếp tại văn phòng iVIVU\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn&&checkpayment=='AL'\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/combopayment/combopayment.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/combopayment/combopayment.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-bottom: 20px;\n}\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.text-link-DK {\n  color: #2f80ed;\n}\n.div-voucher-apply {\n  display: flex;\n  margin: 14px 0 12px 0;\n}\n.div-voucher-apply .width-100 {\n  width: 100%;\n}\n.div-voucher-apply .width-200 {\n  width: 200%;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-code {\n  font-size: 14px;\n  color: #f79321;\n}\n.div-voucher-apply .text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.div-voucher-apply .text-strike {\n  text-decoration: line-through;\n  text-align: right;\n}\n.text-normal {\n  font-size: 14px;\n  color: #3f3b3b;\n}\n.text-strike {\n  text-decoration: line-through;\n  text-align: right;\n  margin: 0;\n}\n.text-right {\n  text-align: right;\n}\n.m-bottom-20 {\n  margin-bottom: 20px;\n}\n.p-r-24 {\n  padding-right: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9jb21ib3BheW1lbnQvY29tYm9wYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29tYm9wYXltZW50L2NvbWJvcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFFRSxpQkFBQTtFQUNBLGVBQUE7QUNETjtBREVNO0VBRUUsY0FBQTtBQ0RSO0FESUk7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRlI7QURJSTtFQUNFLDJCQUFBO0FDRE47QURHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBTjtBREVJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FSO0FER0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FOO0FERUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0NOO0FEQ0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNFTjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0dKO0FEREU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkE7RUFFRSxzQkFBQTtBQ0lGO0FERkE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDSUY7QURGQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDS0Y7QUFDRjtBREZBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0dKO0FEREE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0lOO0FERkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0tKO0FESEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNNSjtBREpFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDT0o7QURMQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ09KO0FETEE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ1FOO0FETkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1NKO0FEUEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNVSjtBRFJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNXSjtBRFRFO0VBQ0UsZ0JBQUE7QUNZSjtBRFhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEWEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDYVI7QURYSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2FOO0FEVkE7RUFFRSxrQkFBQTtBQ1lGO0FEVkE7RUFFRSxZQUFBO0FDWUY7QURWQTtFQUVFLGlCQUFBO0VBQ0EsaUJBQUE7QUNZRjtBRFZBO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQ1lKO0FEVkE7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0FDWUY7QURWQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDWUY7QURWQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDYUY7QURYQTtFQUVFLFdBQUE7RUFDQSxzQkFBQTtBQ2FGO0FEWEE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ2FGO0FEWEE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ2FGO0FEWEE7RUFFUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhUjtBRFhJO0VBRUUsZ0JBQUE7QUNhTjtBRFhJO0VBRUYsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNhRjtBRFhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDY0Y7QURaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ2VGO0FEYkE7RUFFRSwrQkFBQTtBQ2VGO0FEYkE7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDZUY7QURiQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNnQkY7QURkQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDaUJGO0FEZkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNrQkY7QURoQkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ21CRjtBRGpCQTtFQUNBLGNBQUE7QUNvQkE7QURoQkE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUNtQkY7QURqQkU7RUFDRSxXQUFBO0FDbUJKO0FEakJFO0VBQ0UsV0FBQTtBQ21CSjtBRGhCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDa0JKO0FEaEJFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNrQko7QURmRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDaUJKO0FEZEU7RUFDRSw2QkFBQTtFQUNDLGlCQUFBO0FDZ0JMO0FEWEE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2NGO0FEWEE7RUFDRSw2QkFBQTtFQUNDLGlCQUFBO0VBQ0EsU0FBQTtBQ2NIO0FEWEE7RUFDRSxpQkFBQTtBQ2NGO0FEWEE7RUFDRSxtQkFBQTtBQ2NGO0FEWEE7RUFDRSxtQkFBQTtBQ2NGIiwiZmlsZSI6InNyYy9hcHAvY29tYm9wYXltZW50L2NvbWJvcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC50ZXh0LW5hbWVcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLnRleHQtZ3JlZW5cclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LWRhdGVcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtY2FyZHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNle1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIH1cclxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfSAgXHJcbiAgLmRpdi13cmFwaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDo4N3B4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5oclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uY2xzLWhyXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XHJcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcblxyXG59XHJcbi50ZXh0LWluZm9jYXJcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGl2LXNwbGl0LXBhbmVse1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbn1cclxuLnRleHQtbG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLmRpdi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgIH1cclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLmNscy1saXN0XHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNscy1yb3doZWlnaHRcclxue1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG4uY2xzLWRpdnBheW1lbnRcclxue1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4XHJcbn1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcbi5kaXYtaW5mb1xyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uY2xzLXJvd2hlaWdodDFcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGhlaWdodDogODFweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbnAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG4uaW1nLXBheW9vXHJcbntcclxuICB3aWR0aDogNDBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbWdjYXJkXHJcbntcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEyLjhweDtcclxufVxyXG4uaW1nY2FyZFxyXG57XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMi44cHg7XHJcbn1cclxuLnRleHQtaW5mb2JhbmtcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5tbDhcclxuICAgIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5pb24taXRlbVxyXG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAtLW1pbi1oZWlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG4ubGFiZWwtaW5wdXR7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW9uLWNoZWNrYm94e1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW46IC0ycHg7XHJcbn1cclxuLmlvbi1pdGVtMVxyXG57XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxufVxyXG4uaW1nLXZpc2Fcclxue1xyXG4gIHdpZHRoOiAxMThweDtcclxuICBoZWlnaHQ6IDIycHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uZGl2LURLe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2hlY2tib3gtREt7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4udGV4dC1ES3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBjb2xvcjogIzcxNzQ4NDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5idG4tZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4udGV4dC1saW5rLURLe1xyXG5jb2xvcjogIzJmODBlZFxyXG59XHJcbiAgICBcclxuXHJcbi5kaXYtdm91Y2hlci1hcHBseSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW46IDE0cHggMCAxMnB4IDA7XHJcblxyXG4gIC53aWR0aC0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC53aWR0aC0yMDAge1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ub3JtYWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzZjNiM2I7XHJcbiAgfVxyXG4gIC50ZXh0LWNvZGUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNmNzkzMjE7XHJcbiAgfVxyXG5cclxuICAudGV4dC1ub3JtYWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMzZjNiM2I7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zdHJpa2Uge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnRleHQtbm9ybWFsIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMzZjNiM2I7XHJcbn1cclxuXHJcbi50ZXh0LXN0cmlrZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50ZXh0LXJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLm0tYm90dG9tLTIwIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ucC1yLTI0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xyXG59IiwiLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xufVxuXG4udGV4dC1yb29tLXByaWNlLW90YSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDg3cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnQge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxufVxuLnRleHQtaW5mb2NhciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWM5NzFmO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0IHtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZGl2LWluZm8ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNscy1yb3doZWlnaHQxIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG5cbi5pbWctcGF5b28ge1xuICB3aWR0aDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZ2NhcmQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMzJweDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLmlvbi1pdGVtMSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5pbWctdmlzYSB7XG4gIHdpZHRoOiAxMThweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2LURLIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaGVja2JveC1ESyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50ZXh0LURLIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzcxNzQ4NDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWxpbmstREsge1xuICBjb2xvcjogIzJmODBlZDtcbn1cblxuLmRpdi12b3VjaGVyLWFwcGx5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxNHB4IDAgMTJweCAwO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC53aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAud2lkdGgtMjAwIHtcbiAgd2lkdGg6IDIwMCU7XG59XG4uZGl2LXZvdWNoZXItYXBwbHkgLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1jb2RlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2Y3OTMyMTtcbn1cbi5kaXYtdm91Y2hlci1hcHBseSAudGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjM2YzYjNiO1xufVxuLmRpdi12b3VjaGVyLWFwcGx5IC50ZXh0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzNmM2IzYjtcbn1cblxuLnRleHQtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5tLWJvdHRvbS0yMCB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5wLXItMjQge1xuICBwYWRkaW5nLXJpZ2h0OiAyNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/combopayment/combopayment.page.ts":
/*!***************************************************!*\
  !*** ./src/app/combopayment/combopayment.page.ts ***!
  \***************************************************/
/*! exports provided: CombopaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CombopaymentPage", function() { return CombopaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/auth-service */ "./src/app/providers/auth-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var _providers_voucherService__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../providers/voucherService */ "./src/app/providers/voucherService.ts");















let CombopaymentPage = class CombopaymentPage {
    constructor(platform, searchhotel, navCtrl, storage, Roomif, booking1, booking, authService, modalCtrl, loadingCtrl, alertCtrl, gf, zone, router, bookCombo, safariViewController, bizTravelService, _voucherService) {
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
        this.alertCtrl = alertCtrl;
        this.gf = gf;
        this.zone = zone;
        this.router = router;
        this.bookCombo = bookCombo;
        this.safariViewController = safariViewController;
        this.bizTravelService = bizTravelService;
        this._voucherService = _voucherService;
        this.textage = "";
        this.loadpricedone = false;
        this.arrbankrmb = [];
        this.isbtn = false;
        this.ischeckvisa = false;
        this.isremember = true;
        this.isdisable = false;
        this.ischeckedDK = true;
        this.listcars = this.gf.getParams('carscombo');
        this.priceshow = this.bookCombo.totalprice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.hoten = this.Roomif.hoten;
        this.phone = this.Roomif.phone;
        this.totalAdult = bookCombo.totalAdult;
        this.Avatar = Roomif.imgHotel;
        this.Name = booking.HotelName;
        this.Address = Roomif.Address;
        this.cin = booking.CheckInDate;
        this.cout = booking.CheckOutDate;
        this.dur = moment__WEBPACK_IMPORTED_MODULE_10__(this.cout).diff(moment__WEBPACK_IMPORTED_MODULE_10__(this.cin), 'days');
        this.roomnumber = this.searchhotel.roomnumber;
        this.adults = booking.Adults;
        this.children = booking.Child;
        this.roomtype = Roomif.roomtype;
        this.jsonroom = Roomif.jsonroom;
        this.room = Roomif.arrroom;
        var chuoicin = this.cin.split('-');
        var chuoicout = this.cout.split('-');
        this.cin = chuoicin[2] + "-" + chuoicin[1] + "-" + chuoicin[0];
        this.cout = chuoicout[2] + "-" + chuoicout[1] + "-" + chuoicout[0];
        this.nameroom = this.room[0].ClassName;
        this.breakfast = (this.bookCombo.MealTypeCode == 'CUS' ? 'Ăn 3 bữa' : this.bookCombo.MealTypeName);
        this.titlecombo = this.bookCombo.ComboTitle;
        this.arrchild = this.searchhotel.arrchild;
        this.departObject = this.bookCombo.departObjectCar;
        this.returnObject = this.bookCombo.returnObjectCar;
        this.departTicketSale = this.bookCombo.ComboDetail.comboDetail.departTicketSale;
        this.returnTicketSale = this.bookCombo.ComboDetail.comboDetail.returnTicketSale;
        this.fromPlace = this.bookCombo.ComboDetail.comboDetail.departurePlace;
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
        this.searchhotel.backPage = "roompaymentselect";
        this.searchhotel.rootPage = "roompaymentselect-ean";
        this.checkpayment = Roomif.payment;
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember(0);
            }
        });
        this.storage.get('email').then(e => {
            if (e !== null) {
                this.email = e;
                this.loadTransferInfo();
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
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightcombopaymentselect', 'initpage').then((data) => {
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
        gf.googleAnalytion('roompaymentselect', 'load', '');
    }
    ngOnInit() {
    }
    roompaymentbank() {
        clearInterval(this.Roomif.setInter);
        this.clearClonePage('page-roompaymentbank');
        this.navCtrl.navigateForward("/combocarbank");
        this.gf.googleAnalytion('roompaymentselect', 'roompaymentbankselect', '');
    }
    roompaymentlive() {
        clearInterval(this.Roomif.setInter);
        this.clearClonePage('page-roompaymentlive');
        this.navCtrl.navigateForward("/combocarlive");
        this.gf.googleAnalytion('roompaymentselect', 'roompaymentliveselect', '');
    }
    roompaymentatm() {
        this.navCtrl.navigateForward("/combochoosebank");
        this.gf.googleAnalytion('combopayment', 'combopayment', '');
    }
    roompaymentvisa() {
        if (this.arrbankrmb.length == 0) {
            this.GeTokensOfMember(1);
        }
    }
    postapibook(paymentType) {
        var se = this;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/booking',
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
                    var expiredtimedep = moment__WEBPACK_IMPORTED_MODULE_10__(json[0].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
                    var expiredtimeret = moment__WEBPACK_IMPORTED_MODULE_10__(json[1].data.reserve_Tickets.expired_time).format('YYYYMMDDHHmm');
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
                    se.listcars.HotelBooking.CName = se.hoten;
                    se.listcars.HotelBooking.LeadingName = se.hoten;
                    se.listcars.HotelBooking.LeadingEmail = se.email;
                    se.listcars.HotelBooking.LeadingPhone = se.phone;
                    se.CreateCombo(paymentType);
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
    CreateCombo(paymentType) {
        this.timestamp = Date.now();
        var se = this;
        var form = this.listcars;
        var paymentMethod = se.gf.funcpaymentMethod(paymentType);
        form.HotelBooking.PaymentMethod = paymentMethod;
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateComboTransferBooking',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            var obj = JSON.parse(body);
            se.bookingCode = obj.Code;
            if (se.bookCombo.mealTypeRates.Supplier == 'SERI' && se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal) {
                se.gf.checkAllotmentSeri(se.booking.HotelId, se.bookCombo.mealTypeRates.RoomId, se.booking.CheckInDate, se.booking.CheckOutDate, se.bookCombo.mealTypeRates.TotalRoom, 'SERI', se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal).then((allow) => {
                    if (allow) {
                        var options = {
                            method: 'POST',
                            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
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
                                se.CreateBuildLink(paymentType);
                            }
                        });
                    }
                    else {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        se.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                    }
                });
            }
            else {
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/ToolsAPI/CreateTransactionIDComboTransfer',
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
                        se.CreateBuildLink(paymentType);
                    }
                });
            }
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
    goback() {
        if ((this.Roomif.point && this.bookingCode) || (this.Roomif.promocode && this.bookingCode)) {
            this.Roomif.bookingCode = this.bookingCode;
            this.navCtrl.navigateBack('/combocarnew');
        }
        else {
            this.navCtrl.back();
        }
    }
    roompaymentbreakdow() {
        var dur = this.dur;
        var roomnumber = this.roomnumber;
        this.clearClonePage("page-roompaymentbreakdown");
        this.navCtrl.navigateForward('/roompaymentbreakdown/' + dur + '/' + roomnumber);
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({
                message: "Giao dịch đang xử lý, xin quý khách đợi trong giây lát!",
            });
            this.loader.present();
        });
    }
    openRoomCancel() {
        this.gf.setParams(this.roomcancel, 'roomInfo');
        this.searchhotel.backPage = "roompaymentselect";
        this.navCtrl.navigateForward('/roomcancel');
    }
    loadTransferInfo() {
        var se = this;
        let de_date = this.departObject.route.departure_date;
        se.departDateTimeStr = 'Đi ' + se.getDayOfWeek(de_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_10__(de_date).format('DD-MM-YYYY');
        se.departTimeStr = this.listcars.TransferBooking.departTransfer.DepartTime + ' → ' + this.listcars.TransferBooking.departTransfer.ArrivalTime;
        se.departVehicleStr = this.departObject.company.name;
        this.departTicketSaleshow = this.departObject.route.schedules[0].fare.price - this.departTicketSale;
        if (this.departTicketSaleshow <= 0) {
            this.checkdiscountdepart = true;
            this.departTicketSaleshow = Math.abs(this.departTicketSaleshow);
        }
        else {
            this.checkdiscountdepart = false;
        }
        this.departTicketSaleshow = this.departTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        let re_date = this.returnObject.route.departure_date;
        se.returnDateTimeStr = 'Về ' + se.getDayOfWeek(re_date) + ', ' + moment__WEBPACK_IMPORTED_MODULE_10__(re_date).format('DD-MM-YYYY');
        se.returnTimeStr = this.listcars.TransferBooking.returnTransfer.DepartTime + ' → ' + this.listcars.TransferBooking.returnTransfer.ArrivalTime;
        se.returnVehicleStr = this.returnObject.company.name;
        this.returnTicketSaleshow = this.returnObject.route.schedules[0].fare.price - this.returnTicketSale;
        if (this.returnTicketSaleshow <= 0) {
            this.checkdiscountreturn = true;
            this.returnTicketSaleshow = Math.abs(this.returnTicketSaleshow);
        }
        else {
            this.checkdiscountreturn = false;
        }
        this.returnTicketSaleshow = this.returnTicketSaleshow.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }
    getDayOfWeek(date) {
        let coutthu = moment__WEBPACK_IMPORTED_MODULE_10__(date).format('dddd');
        switch (coutthu) {
            case "Monday":
                coutthu = "thứ 2";
                break;
            case "Tuesday":
                coutthu = "thứ 3";
                break;
            case "Wednesday":
                coutthu = "thứ 4";
                break;
            case "Thursday":
                coutthu = "thứ 5";
                break;
            case "Friday":
                coutthu = "thứ 6";
                break;
            case "Saturday":
                coutthu = "thứ 7";
                break;
            default:
                coutthu = "Chủ nhật";
                break;
        }
        return coutthu;
    }
    CreateBuildLink(paymentType) {
        var se = this;
        se.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var url = "";
            var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
            var timestamp = new Date();
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_10__(timestamp).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_10__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                if (paymentType == 'visa') {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                }
                else {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&memberId=' + se.jti + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                }
                this.gf.CreateUrl(url).then(dataBuildLink => {
                    dataBuildLink = JSON.parse(dataBuildLink);
                    if (dataBuildLink.success) {
                        if (paymentType == 'visa') {
                            if (this.loader) {
                                this.loader.dismiss();
                            }
                            se.openWebpage(dataBuildLink.returnUrl);
                        }
                        else if (paymentType == 'payoo_store') {
                            this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                            this.Roomif.PeriodPaymentDate = dataBuildLink.payooStoreData.periodPayment;
                            if (this.loader) {
                                this.loader.dismiss();
                            }
                            this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/0');
                        }
                        else if (paymentType == 'payoo_qr') {
                            if (dataBuildLink.success) {
                                this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/1');
                            }
                        }
                        else if (paymentType == 'momo') {
                            if (dataBuildLink.success) {
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                window.open(dataBuildLink.returnUrl.payUrl, '_system');
                                this.setinterval();
                            }
                        }
                    }
                });
            }
            else {
                if (paymentType == 'payoo_store') {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&memberId=' + se.jti + '&buyerPhone=' + this.Roomif.phone + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                    this.gf.CreateUrl(url).then(dataBuildLink => {
                        if (this.loader) {
                            this.loader.dismiss();
                        }
                        dataBuildLink = JSON.parse(dataBuildLink);
                        this.Roomif.BillingCode = dataBuildLink.payooStoreData.BillingCode;
                        this.navCtrl.navigateForward('combocarpaymentpayoo/' + this.bookingCode + '/0');
                    });
                }
                else {
                    se.checkpayment = "RQ";
                    if (this.loader) {
                        this.loader.dismiss();
                    }
                    alert('Đã hết phòng, vui lòng chọn phòng khác hoặc chọn phương thức thanh toán khác');
                    se.navCtrl.navigateBack('combocarnew');
                }
            }
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
                    this.presentLoading();
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
    setinterval() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            this.checkPayment();
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, 60000 * 15);
    }
    checkPayment() {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "roompaymentatm-mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
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
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
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
    roompaymentpayoolive() {
        this.presentLoading();
        this.postapibook('payoo_store');
    }
    roompaymentpayooqr() {
        this.presentLoading();
        this.postapibook('payoo_qr');
    }
    roompaymentmomo() {
        this.presentLoading();
        this.postapibook('momo');
    }
    next() {
        this.presentLoading();
        this.postapibook('visa');
    }
    rememberCard() {
        this.isremember = !this.isremember;
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
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
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
        se.gf.showLoading();
        se.gf.CheckPaymentDate(this.bookCombo.bookingcode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_10__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_10__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                se.buildLinkPayment().then((checkvalid) => {
                    if (checkvalid) {
                        se.bizTravelService.routeBackWhenCancel = 'combocarnew';
                        se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                        se.navCtrl.navigateForward('confirmpayment');
                    }
                });
            }
            else {
                se.checkpayment = "RQ";
                se.gf.hideLoading();
                alert('Đã hết phòng, vui lòng chọn phòng khác hoặc chọn phương thức thanh toán khác');
                se.navCtrl.navigateBack('combocarnew');
            }
        });
    }
    buildLinkPayment() {
        let se = this;
        return new Promise((resolve, reject) => {
            let url;
            var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.Roomif.phone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
CombopaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-combopayment',
        template: __webpack_require__(/*! ./combopayment.page.html */ "./src/app/combopayment/combopayment.page.html"),
        styles: [__webpack_require__(/*! ./combopayment.page.scss */ "./src/app/combopayment/combopayment.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _providers_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_11__["SafariViewController"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_12__["BizTravelService"],
        _providers_voucherService__WEBPACK_IMPORTED_MODULE_13__["voucherService"]])
], CombopaymentPage);



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
//# sourceMappingURL=combopayment-combopayment-module.js.map