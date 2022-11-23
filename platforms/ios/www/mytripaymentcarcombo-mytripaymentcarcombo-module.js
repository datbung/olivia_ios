(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentcarcombo-mytripaymentcarcombo-module"],{

/***/ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/mytripaymentcarcombo/mytripaymentcarcombo.module.ts ***!
  \*********************************************************************/
/*! exports provided: MytripaymentcarcomboPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentcarcomboPageModule", function() { return MytripaymentcarcomboPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentcarcombo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentcarcombo.page */ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentcarcombo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentcarcomboPage"]
    }
];
let MytripaymentcarcomboPageModule = class MytripaymentcarcomboPageModule {
};
MytripaymentcarcomboPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentcarcombo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentcarcomboPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MytripaymentcarcomboPageModule);



/***/ }),

/***/ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n  <div style=\"margin-top: 15px\" class=\"div-title\">\n    <ion-label class=\"combo-title\">{{Name}}</ion-label>\n  </div>\n  <ion-row  class=\"cls-rowheight1\">\n    <ion-col size=\"4\">\n      <div class=\"div-wrapimg\">\n        <img style=\"border-radius: 5px;height: 100%;object-fit: cover\" src={{Avatar}}>\n      </div>\n    </ion-col>\n    <ion-col size=\"8\" style=\"padding:3px\" class=\"col-description-roompayment\">\n      <div class=\"div-info\">\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_day.svg\"> {{cin}} → {{cout}}\n        </p>\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{totalPaxStr}}\n        </p>\n        <p class=\"text-p\" text-wrap>\n          <img class=\"image-card\" src=\"./assets/ic_facility/ic_food_b.svg\"> {{breakfast}} <span *ngIf=\"breakfast\">| {{roomnumber}} phòng x {{nameroom}}</span>\n        </p>\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"margin-left: -5px\">\n    <ion-col size=\"6\">\n      <ion-label class=\"text-infocar\">{{cin}}</ion-label>\n      <div class=\"combo-departure-time\">\n        <span>{{departTimeStr}}</span>\n      </div>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-label class=\"text-infocar\">{{cout}}</ion-label>\n      <div class=\"combo-departure-time\">\n        <span>{{returnTimeStr}}</span>\n      </div>\n    </ion-col>\n  </ion-row>\n  <hr >\n  <div class=\"cls-divpayment\">\n    <ion-row class=\"cls-rowheight\">\n      <ion-col size=\"5\">\n        <div>\n          <h2 class=\"text-name\" style=\"font-size: 18px;\" position=\"stacked\">Tổng cộng</h2>\n          <p style=\"font-size: 10px;font-weight: 300;margin-top: -10px\">Giá đã bao gồm thuế & phí</p>\n        </div>\n      </ion-col>\n      <ion-col size=\"7\">\n        <p class=\"total-price\" style=\"text-align: right\">\n          {{priceshow}}đ\n        </p>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n      <label  class=\"text-list m-bottom-8\">\n        Tài khoản công ty\n      </label>\n      <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n    </ion-item>\n    \n    <ion-item  (click)=\"roompaymentatm()\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\n    </ion-item>\n    <ion-item  (click)=\"roompaymentvisa()\" class=\"ion-item1\">\n      <label>\n        Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio  mode=\"md\"  [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" [checked]=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px;\">\n    <ion-item (click)=\"roompaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentpayooqr()\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"stt=='1'\" (click)=\"roompaymentbank()\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-bottom: 20px;\n}\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9teXRyaXBheW1lbnRjYXJjb21iby9teXRyaXBheW1lbnRjYXJjb21iby5wYWdlLnNjc3MiLCJzcmMvYXBwL215dHJpcGF5bWVudGNhcmNvbWJvL215dHJpcGF5bWVudGNhcmNvbWJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FERU07RUFFRSxjQUFBO0FDRFI7QURJSTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNGUjtBRElJO0VBQ0UsMkJBQUE7QUNETjtBREdJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FOO0FERUk7RUFFSSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDQVI7QURHSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQU47QURFSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDQ047QURDSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0VOO0FEQUU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDR0o7QURERTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSUo7QURGQTtFQUVFLHNCQUFBO0FDSUY7QURGQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNJRjtBREZBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUNLRjtBQUNGO0FERkE7RUFFSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0o7QUREQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDSU47QURGRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDS0o7QURIRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNPSjtBRExBO0VBRUksZUFBQTtFQUNBLGlCQUFBO0FDT0o7QURMQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDUU47QURORTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDU0o7QURQRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ1VKO0FEUkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1dKO0FEVEU7RUFDRSxnQkFBQTtBQ1lKO0FEWEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDYVI7QURYSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNhUjtBRFhJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDYU47QURWQTtFQUVFLGtCQUFBO0FDWUY7QURWQTtFQUVFLFlBQUE7QUNZRjtBRFZBO0VBRUUsaUJBQUE7RUFDQSxpQkFBQTtBQ1lGO0FEVkE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDWUo7QURWQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNZRjtBRFZBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNZRjtBRFZBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLHFCQUFBO0VBQ0EseUJBQUE7VUFBQSx3QkFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7QUNhRjtBRFhBO0VBRUUsV0FBQTtFQUNBLHNCQUFBO0FDYUY7QURYQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDYUY7QURYQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDYUY7QURYQTtFQUVRLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2FSO0FEWEk7RUFFRSxnQkFBQTtBQ2FOO0FEWEk7RUFFRixvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNjRjtBRFpBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDZUY7QURiQTtFQUVFLCtCQUFBO0FDZUY7QURiQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNlRjtBRGJBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ2dCRjtBRGRBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNpQkY7QURmQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2tCRjtBRGhCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDbUJGO0FEakJBO0VBQ0EsY0FBQTtBQ29CQSIsImZpbGUiOiJzcmMvYXBwL215dHJpcGF5bWVudGNhcmNvbWJvL215dHJpcGF5bWVudGNhcmNvbWJvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50ZXh0LW5hbWVcbiAgICB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIC50ZXh0LWdyZWVuXG4gICAgICB7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XG4gICAgICB9XG4gICAgfVxuICAgIC50ZXh0LWRhdGVcbiAgICB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgIH1cbiAgICAuaW1hZ2UtY2FyZHtcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvdGFsLXByaWNle1xuICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNDhweDtcblxuICAgIH1cbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgfVxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xuICAgIH1cbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgIGNvbG9yOiM4MjgyODI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cbiAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIH0gIFxuICAuZGl2LXdyYXBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6ODdweDtcbiAgICB3aWR0aDogMTA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5oclxue1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuLmNscy1oclxue1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG5cbn1cbi50ZXh0LWluZm9jYXJcbntcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiAjNGY0ZjRmO1xuICAgIGZvbnQtc2l6ZTogMTJweFxufVxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDNjNzE7XG4gIH1cbiAgLmZsaWdodC1wcmljZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmRpdi1zcGxpdC1wYW5lbHtcbiAgICBoZWlnaHQ6IDdweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4udGV4dC1sb2NhdGlvblxue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZFxufVxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICB9XG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMwMDNjNzE7XG4gIH1cbiAgLmZsaWdodC1wcmljZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNlYzk3MWY7XG4gIH1cbiAgLmRpdi10aXRsZXtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC5jb21iby10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBjb2xvcjogIzAwM2M3MTtcbiAgICB9XG4gICAgLmNvbWJvLXN1Yi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgfVxuICAgIC5jb21iby10aXRsZXtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4uY2xzLWxpc3RcbntcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLmNscy1yb3doZWlnaHRcbntcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmNscy1kaXZwYXltZW50XG57XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweFxufVxuLnRleHQtcFxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5kaXYtaW5mb1xue1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jbHMtcm93aGVpZ2h0MVxue1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uaW1nLXBheW9vXG57XG4gIHdpZHRoOiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmltZ2NhcmRcbntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuLmltZ2NhcmRcbntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuLnRleHQtaW5mb2JhbmtcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubWw4XG4gICAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gICAgLmlvbi1pdGVtXG57XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG4ubGFiZWwtaW5wdXR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaW9uLWNoZWNrYm94e1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG4uaW9uLWl0ZW0xXG57XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG4uaW1nLXZpc2FcbntcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uZGl2LURLe1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5jaGVja2JveC1ES3tcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cbi50ZXh0LURLe1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjNzE3NDg0O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuLmJ0bi1kaXNhYmxlZHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cbi50ZXh0LWxpbmstREt7XG5jb2xvcjogIzJmODBlZFxufSIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LXRpdGxlIC5jb21iby1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2Y1OTIzMztcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNscy1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuXG4uY2xzLXJvd2hlaWdodCB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmNscy1kaXZwYXltZW50IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmRpdi1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0MSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbnAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxZW07XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDFlbTtcbiAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xufVxuXG4uaW1nLXBheW9vIHtcbiAgd2lkdGg6IDQwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4uaW1nY2FyZCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDMycHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5pb24taXRlbTEge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4uaW1nLXZpc2Ege1xuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRpdi1ESyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2hlY2tib3gtREsge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGV4dC1ESyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM3MTc0ODQ7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1saW5rLURLIHtcbiAgY29sb3I6ICMyZjgwZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.ts ***!
  \*******************************************************************/
/*! exports provided: MytripaymentcarcomboPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentcarcomboPage", function() { return MytripaymentcarcomboPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");













let MytripaymentcarcomboPage = class MytripaymentcarcomboPage {
    constructor(navCtrl, activityService, loadingCtrl, storage, gf, safariViewController, Roomif, activatedRoute, bizTravelService, zone) {
        this.navCtrl = navCtrl;
        this.activityService = activityService;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.gf = gf;
        this.safariViewController = safariViewController;
        this.Roomif = Roomif;
        this.activatedRoute = activatedRoute;
        this.bizTravelService = bizTravelService;
        this.zone = zone;
        this.textage = "";
        this.scheckvisa = false;
        this.arrbankrmb = [];
        this.ischeckpay = true;
        this.isbtn = false;
        this.ischeckvisa = false;
        this.ischeckTransaction = false;
        this.isremember = true;
        this.isdisable = false;
        this.auth_token = '';
        this.bookingCode = "";
        this.cus_phone = "";
        this.ischeckedDK = true;
        this.Avatar = this.activityService.objPaymentMytrip.trip.avatar;
        this.Avatar = (this.Avatar.toLocaleString().trim().indexOf("http") != -1) ? this.Avatar : 'https:' + this.Avatar;
        this.titlecombo = this.activityService.objPaymentMytrip.trip.combo_name;
        this.cin = moment__WEBPACK_IMPORTED_MODULE_9__(this.activityService.objPaymentMytrip.trip.checkInDate).format('DD-MM-YYYY');
        this.cout = moment__WEBPACK_IMPORTED_MODULE_9__(this.activityService.objPaymentMytrip.trip.checkOutDate).format('DD-MM-YYYY');
        this.Name = this.activityService.objPaymentMytrip.trip.hotel_name;
        this.priceshow = this.activityService.objPaymentMytrip.trip.priceShow;
        this.cus_phone = this.activityService.objPaymentMytrip.trip.cus_phone;
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        this.totalPaxStr = this.activityService.objPaymentMytrip.trip.totalPaxStr;
        this.roomnumber = this.activityService.objPaymentMytrip.trip.room_count;
        this.breakfast = this.activityService.objPaymentMytrip.trip.meal_plan;
        this.nameroom = this.activityService.objPaymentMytrip.trip.room_name;
        this.loadTransferInfo();
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember(0);
            }
        });
        this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                let text = "Bearer " + auth_token;
                let headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'mytripflightcombopaymentselect', 'initpage').then((data) => {
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
    }
    loadTransferInfo() {
        var se = this;
        se.departTimeStr = this.activityService.objPaymentMytrip.trip.bookingsComboData[0].departureTime + ' → ' + this.activityService.objPaymentMytrip.trip.bookingsComboData[0].arrivalTime;
        se.returnTimeStr = this.activityService.objPaymentMytrip.trip.bookingsComboData[1].departureTime + ' → ' + this.activityService.objPaymentMytrip.trip.bookingsComboData[1].arrivalTime;
    }
    getDayOfWeek(date) {
        let coutthu = moment__WEBPACK_IMPORTED_MODULE_9__(date).format('dddd');
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
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
    }
    goback() {
        clearInterval(this.intervalID);
        if (this.activityService.backValue == 'tab3') {
            this.navCtrl.navigateBack(['/app/tabs/tab3']);
            this.activityService.backValue = '';
        }
        else {
            this.navCtrl.back();
        }
    }
    roompaymentatm() {
        this.Roomif.point = null;
        this.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_9__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_9__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                this.navCtrl.navigateForward("/roomchoosebank/1");
            }
            else {
                this.goMytrip();
            }
        });
    }
    roompaymentvisa() {
        if (this.arrbankrmb.length == 0) {
            this.GeTokensOfMember(1);
        }
    }
    roompaymentpayooqr() {
        this.buildLink('payoo_qr');
    }
    roompaymentmomo() {
        this.buildLink('momo');
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: this.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roompaymentselect",
                    func: "openWebpage",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    para: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3) {
                    var id = rs.BookingCode;
                    var total = se.priceshow;
                    se.Roomif.priceshowtt = se.priceshow;
                    var ischeck = '0';
                    clearInterval(se.intervalID);
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
                }
                else if (rs.StatusBooking == 9 || rs.StatusBooking == 2) {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    if (se.safariViewController) {
                        se.safariViewController.hide();
                    }
                    clearInterval(se.intervalID);
                }
            }
            else {
                error.page = "roompaymentselect";
                error.func = "openWebpage";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
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
                        this.isdisable = true;
                        this.ischeckvisa = true;
                    }
                }
            }
            if (stt == 1) {
                if (this.arrbankrmb.length > 0) {
                    this.ischeckvisa = true;
                }
                else {
                    this.buildLink('visa');
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
    buildLink(paymentType) {
        var se = this;
        var url = "";
        this.presentLoading();
        var totalPrice = se.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
        this.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_9__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_9__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                if (paymentType == 'visa') {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                }
                else {
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + paymentType + '&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fmyapp';
                }
                this.gf.CreateUrl(url).then(dataBuildLink => {
                    dataBuildLink = JSON.parse(dataBuildLink);
                    if (dataBuildLink.success) {
                        if (paymentType == 'visa') {
                            se.openWebpage(dataBuildLink.returnUrl);
                        }
                        else if (paymentType == 'payoo_qr') {
                            if (dataBuildLink.success) {
                                this.Roomif.qrimg = dataBuildLink.payooQrData.QRCodeUrl;
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.Roomif.roomtype = "";
                                this.Roomif.priceshow = this.priceshow;
                                this.navCtrl.navigateForward('roompaymentpayoo/' + this.bookingCode + '/1');
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
                this.goMytrip();
            }
        });
    }
    next() {
        this.buildLink('visa');
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
    rememberCard() {
        this.isremember = !this.isremember;
    }
    roompaymentbank() {
        this.navCtrl.navigateForward("/mytrippaymentbank");
    }
    goMytrip() {
        alert("Booking không thoả thời hạn thanh toán. Vui lòng tạo booking mới hoặc liên hệ nhân viên tư vấn để được hỗ trợ");
        if (this.loader) {
            this.loader.dismiss();
        }
        clearInterval(this.intervalID);
        this.navCtrl.back();
    }
    paymentbiztravel() {
        if (this.bizTravelService.bizAccount.balanceAvaiable - this.totalPrice <= 0) {
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
                var params = { memberid: this.jti, totalprice: this.totalPrice };
                this.gf.showLoading();
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
                    if (data && data.error == 0) {
                        this.bizTravelService.phoneOtp = data.phoneOtp;
                        this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
                        this.bizTravelService.paymentType = 4;
                        this.carComboPayment();
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
    carComboPayment() {
        var se = this;
        se.gf.CheckPaymentDate(this.bookingCode).then(data => {
            data = JSON.parse(data);
            var timestamp = new Date();
            var temptime = timestamp.setTime(timestamp.getTime() + 15 * 60 * 1000);
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_9__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_9__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                se.buildLinkPayment().then((checkvalid) => {
                    if (checkvalid) {
                        se.bizTravelService.routeBackWhenCancel = 'mybooking';
                        se.bizTravelService.mytripPaymentBookingCode = se.bookingCode;
                        se.navCtrl.navigateForward('confirmpayment');
                    }
                });
            }
            else {
            }
        });
    }
    buildLinkPayment() {
        let se = this;
        return new Promise((resolve, reject) => {
            let url;
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
MytripaymentcarcomboPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripaymentcarcombo',
        template: __webpack_require__(/*! ./mytripaymentcarcombo.page.html */ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentcarcombo.page.scss */ "./src/app/mytripaymentcarcombo/mytripaymentcarcombo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_11__["BizTravelService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MytripaymentcarcomboPage);



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
//# sourceMappingURL=mytripaymentcarcombo-mytripaymentcarcombo-module.js.map