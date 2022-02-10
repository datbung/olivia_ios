(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodpaymentselect-foodpaymentselect-module"],{

/***/ "./src/app/foodpaymentselect/foodpaymentselect.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/foodpaymentselect/foodpaymentselect.module.ts ***!
  \***************************************************************/
/*! exports provided: FoodpaymentselectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentselectPageModule", function() { return FoodpaymentselectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodpaymentselect.page */ "./src/app/foodpaymentselect/foodpaymentselect.page.ts");







const routes = [
    {
        path: '',
        component: _foodpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentselectPage"]
    }
];
let FoodpaymentselectPageModule = class FoodpaymentselectPageModule {
};
FoodpaymentselectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentselectPage"]]
    })
], FoodpaymentselectPageModule);



/***/ }),

/***/ "./src/app/foodpaymentselect/foodpaymentselect.page.html":
/*!***************************************************************!*\
  !*** ./src/app/foodpaymentselect/foodpaymentselect.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/step/food_step_2.svg\">\n  </div>\n  <div class=\"cls-divpayment\">\n<ion-grid style=\"margin-left: -5px;\">\n  <ion-row *ngFor=\"let item of listmenu\">\n    <ion-col size=\"8.5\">\n      <ion-row>\n        <ion-col style=\"padding:0\">\n      <ion-label class=\"text-food\">{{item.quantity}} x {{item.name}} \n        <span class=\"div-star\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n        </span>\n      </ion-label>\n      </ion-col>\n      </ion-row>\n      <p class=\"text-note\">{{item.chuoi}}</p>\n      \n    </ion-col>\n    <ion-col size=\"3.5\">\n      <ion-row class=\"text-price-food\">\n        <ion-col style=\"padding:0\">\n          <ion-label class=\"text-food\">{{item.totalPrice}}<span class=\"text-d\">đ</span></ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n<hr>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col style=\"padding:0\">\n        <ion-label class=\"text-total\">Tổng cộng</ion-label>\n        <p class=\"text-tax\">Giá đã bao gồm thuế & phí</p>\n        </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col style=\"padding:0\">\n        <p class=\"total-price\" style=\"text-align: right\">\n          {{priceshow}}<span class=\"total-price-d\"> đ</span>\n        </p>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"ischeckpay\" (click)=\"foodpaymentbank()\" class=\"cls-minheight\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item  (click)=\"foodpaymentatm()\" class=\"cls-minheight\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item  class=\"cls-minheight ion-item1\">\n      <label  (click)=\"foodpaymentvisa()\">\n        Thẻ thanh toán quốc tế\n      </label>\n      <ion-icon slot=\"end\"  (click)=\"foodpaymentvisa()\"  *ngIf=\"!ischeckvisa\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n      <img slot=\"end\"  *ngIf=\"ischeckvisa\" style=\"margin-right: 15px;\" src=\"./assets/imgs/ic_down_b.svg\">\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <img class=\"imgcard ml8\" src={{item.imgbank}}>\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox (click)=\"rememberCard()\" checked=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px;\">\n    <ion-item (click)=\"foodpaymentpayoolive()\" class=\"cls-minheight\">\n      <label>\n        Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"foodpaymentpayooqr()\" class=\"cls-minheight\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"foodpaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentselect/foodpaymentselect.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/foodpaymentselect/foodpaymentselect.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-divpayment {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-price-food {\n  text-align: right;\n}\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n.div-star {\n  padding: 2px;\n}\n.img-payoo {\n  vertical-align: middle;\n  height: 20px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.cls-minheight {\n  --min-height: 48px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RwYXltZW50c2VsZWN0L2Zvb2RwYXltZW50c2VsZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZHBheW1lbnRzZWxlY3QvZm9vZHBheW1lbnRzZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDUjtBRENJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0VOO0FEQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHTjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEE7RUFFRSxzQkFBQTtBQ0tGO0FESEE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDS0Y7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDTUY7QUFDRjtBREhBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tOO0FESEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRExFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1FKO0FETkE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRE5BO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTTjtBRFBFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNVSjtBRFJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDV0o7QURURTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURaSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNjUjtBRFpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2NSO0FEWkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNjTjtBRFhBO0VBRUUsa0JBQUE7QUNhRjtBRFhBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDYUY7QURYQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNhRjtBRFhBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFhBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFhBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhRjtBRFZBO0VBRUksaUJBQUE7QUNZSjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWUY7QURWQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZRjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1lGO0FEVEE7RUFDRSxZQUFBO0FDWUY7QURWQTtFQUVFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNZRjtBRFZBO0VBRUUsa0JBQUE7QUNZRjtBRFZBO0VBRUUsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNZRjtBRFZBO0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNZRjtBRFZBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWVI7QURWSTtFQUVFLGdCQUFBO0FDWU47QURWSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ1lSO0FEVkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNhTjtBRFhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDY047QURaSTtFQUVFLCtCQUFBO0FDY04iLCJmaWxlIjoic3JjL2FwcC9mb29kcGF5bWVudHNlbGVjdC9mb29kcGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC50ZXh0LW5hbWVcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLnRleHQtZ3JlZW5cclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LWRhdGVcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtY2FyZHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNle1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNlLWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXJvb20tcHJpY2Utb3Rhe1xyXG4gICAgICBjb2xvcjojODI4MjgyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH0gIFxyXG4gIC5kaXYtd3JhcGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6ODdweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaHJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuLmNscy1oclxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcclxuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50e1xyXG4gICAgbWF4LXdpZHRoOiAxODhweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxufVxyXG4udGV4dC1pbmZvY2FyXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRpdi1zcGxpdC1wYW5lbHtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbn1cclxuLnRleHQtbG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLmRpdi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgIH1cclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLmNscy1saXN0XHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbn1cclxuLmNscy1kaXZwYXltZW50XHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4XHJcbn1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn1cclxuLmRpdi1pbmZvXHJcbntcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xyXG59XHJcbi5jbHMtcm93aGVpZ2h0MVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgaGVpZ2h0OiA4MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHQtbm90ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi50ZXh0LXByaWNlLWZvb2Rcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRleHQtdGF4XHJcbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dC1kXHJcbntcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnRleHQtdG90YWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi5kaXYtc3RhcntcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmltZy1wYXlvb1xyXG57XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxufVxyXG4uY2xzLW1pbmhlaWdodFxyXG57XHJcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5pb24taXRlbVxyXG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAtLW1pbi1oZWlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4uaW1nY2FyZFxyXG57XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMi44cHg7XHJcbn1cclxuLnRleHQtaW5mb2JhbmtcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5tbDhcclxuICAgIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH0gXHJcbiAgICAubGFiZWwtaW5wdXR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcbiAgICAuaW9uLWNoZWNrYm94e1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IC0ycHg7XHJcbiAgICB9XHJcbiAgICAuaW9uLWl0ZW0xXHJcbiAgICB7XHJcbiAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICB9XHJcbiAgICAgICAgIiwiLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4udG90YWwtcHJpY2UtZCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xufVxuXG4udGV4dC1yb29tLXByaWNlLW90YSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDg3cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnQge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxufVxuLnRleHQtaW5mb2NhciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWM5NzFmO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbi5jbHMtZGl2cGF5bWVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmRpdi1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0MSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1wcmljZS1mb29kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXRheCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LXN0YXIge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5pbWctcGF5b28ge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG59XG5cbi5jbHMtbWluaGVpZ2h0IHtcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaW1nY2FyZCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLmlvbi1pdGVtMSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodpaymentselect/foodpaymentselect.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/foodpaymentselect/foodpaymentselect.page.ts ***!
  \*************************************************************/
/*! exports provided: FoodpaymentselectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentselectPage", function() { return FoodpaymentselectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");











let FoodpaymentselectPage = class FoodpaymentselectPage {
    constructor(navCtrl, foodService, gf, loadingCtrl, searchhotel, safariViewController, storage, zone) {
        this.navCtrl = navCtrl;
        this.foodService = foodService;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.searchhotel = searchhotel;
        this.safariViewController = safariViewController;
        this.storage = storage;
        this.zone = zone;
        this.listmenu = [];
        this.ischeckvisa = false;
        this.arrbankrmb = [];
        this.bookingCode = "";
        this.ischeckpay = true;
        this.isbtn = false;
        this.isremember = true;
        this.priceshow = this.foodService.totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        this.searchhotel.backPage = 'foodpaymentselect';
        this.arrmenu = this.foodService.listItemsCart;
        for (let i = 0; i < this.arrmenu.length; i++) {
            var chuoi = "";
            if (this.arrmenu[i].startDate && this.arrmenu[i].endDate) {
                chuoi += moment__WEBPACK_IMPORTED_MODULE_9__(this.arrmenu[i].startDate).format("DD.MM") + " → " + moment__WEBPACK_IMPORTED_MODULE_9__(this.arrmenu[i].endDate).format("DD.MM");
            }
            if (this.arrmenu[i].itemExtraOther && this.arrmenu[i].itemExtraOther.length > 0) {
                chuoi += ' · ';
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
                if (this.arrmenu[i].itemExtraOther && this.arrmenu[i].itemExtraOther.length == 0) {
                    chuoi += ' · ';
                }
                for (let m = 0; m < this.arrmenu[i].itemExtraWater.length; m++) {
                    if (m == this.arrmenu[i].itemExtraWater.length - 1) {
                        chuoi = chuoi + this.arrmenu[i].itemExtraWater[m].name;
                    }
                    else {
                        chuoi = chuoi + this.arrmenu[i].itemExtraWater[m].name + ' · ';
                    }
                }
            }
            this.arrmenu[i].totalPrice = this.arrmenu[i].focategory.totalPriceItem;
            var item = { quantity: this.arrmenu[i].quantity, name: this.arrmenu[i].focategory.name, chuoi: chuoi, totalPrice: this.arrmenu[i].totalPrice.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."), typePriceId: this.arrmenu[i].focategory.typePriceId };
            this.listmenu.push(item);
        }
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember(0);
            }
        });
    }
    checkpayment() {
        var ti = new Date();
        var thu = moment__WEBPACK_IMPORTED_MODULE_9__(ti).format('dddd');
        var hours = moment__WEBPACK_IMPORTED_MODULE_9__(ti).format('HHmm');
        if (thu == 'Friday') {
            if (parseInt(hours) >= 2100) {
                this.ischeckpay = false;
            }
        }
        else if (thu == 'Saturday' || thu == 'Sunday') {
            this.ischeckpay = false;
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('foodadddetail');
    }
    foodpaymentbank() {
        this.navCtrl.navigateForward('foodpaymentbank');
    }
    foodpaymentatm() {
        this.navCtrl.navigateForward('foodpaymentchoosebank');
    }
    foodpaymentvisa() {
        this.GeTokensOfMember(1);
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
                        clearInterval(se.intervalID);
                        se.presentLoading();
                        se.checkBooking().then((data) => {
                            if (data) {
                                se.foodService.ischeckpayment = '1';
                                se.storage.set("payment", "visa");
                                se.navCtrl.navigateForward('foodpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                            }
                        });
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    foodpaymentpayoolive() {
        this.presentLoading();
        this.gf.CreateBooking(this.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                this.gf.Updatefoodpaytype(this.bookingCode, 4).then(datatype => {
                    if (datatype) {
                        this.bookingCode = data.response.bookingCode;
                        this.startDate = data.response.startDate;
                        this.endDate = data.response.endDate;
                        this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=payoo_store&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '';
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                this.foodService.BillingCode = datapayoo.payooStoreData.BillingCode;
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.navCtrl.navigateForward('foodpaymentpayoo/' + data.response.bookingCode + '/0');
                            }
                        });
                    }
                });
            }
        });
    }
    foodpaymentpayooqr() {
        this.presentLoading();
        this.gf.CreateBooking(this.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                this.gf.Updatefoodpaytype(this.bookingCode, 5).then(datatype => {
                    if (datatype) {
                        this.bookingCode = data.response.bookingCode;
                        this.startDate = data.response.startDate;
                        this.endDate = data.response.endDate;
                        this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=payoo_qr&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '';
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                this.foodService.qrimg = datapayoo.payooQrData.QRCodeUrl;
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.navCtrl.navigateForward('foodpaymentpayoo/' + data.response.bookingCode + '/1');
                            }
                        });
                    }
                });
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
                    }
                }
            }
            if (stt == 1) {
                if (this.arrbankrmb.length > 0) {
                    this.ischeckvisa = true;
                }
                else {
                    this.presentLoading();
                    if (this.bookingCode) {
                        this.NoCreateBooking();
                    }
                    else {
                        this.CreateBooking();
                    }
                }
            }
        });
    }
    next() {
        this.presentLoading();
        if (this.bookingCode) {
            this.NoCreateBooking();
        }
        else {
            this.CreateBooking();
        }
    }
    chooseacc(item) {
        this.tokenid = item.id;
        this.isbtn = true;
    }
    nochooseacc() {
        this.tokenid = "";
        this.isbtn = true;
    }
    CreateBooking() {
        var se = this;
        se.gf.CreateBooking(se.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                se.bookingCode = data.response.bookingCode;
                se.startDate = data.response.startDate;
                se.endDate = data.response.endDate;
                se.gf.Updatefoodpaytype(se.bookingCode, 2).then(datatype => {
                    if (datatype) {
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=visa&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&TokenId=' + this.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankFoodOpenPay';
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            datapayoo = JSON.parse(datapayoo);
                            se.openWebpage(datapayoo.returnUrl);
                            se.setintervalvisa();
                        });
                    }
                });
            }
        });
    }
    NoCreateBooking() {
        var se = this;
        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=visa&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&memberId=' + se.jti + '&TokenId=' + this.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankFoodOpenPay';
        this.gf.CreatePayoo(url).then(datapayoo => {
            datapayoo = JSON.parse(datapayoo);
            se.openWebpage(datapayoo.returnUrl);
            se.setintervalvisa();
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
    checkBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                'method': 'GET',
                'url': _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + se.bookingCode + '',
                'headers': {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response) {
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
        });
    }
    foodpaymentmomo() {
        this.presentLoading();
        if (!this.bookingCode) {
            this.CreateBookingMomo();
        }
        else {
            this.NoCreateBookingMomo();
        }
    }
    CreateBookingMomo() {
        this.gf.CreateBooking(this.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                this.gf.Updatefoodpaytype(this.bookingCode, 6).then(datatype => {
                    if (datatype) {
                        this.bookingCode = data.response.bookingCode;
                        this.startDate = data.response.startDate;
                        this.endDate = data.response.endDate;
                        this.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=momo&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + data.response.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomefood';
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                window.open(datapayoo.returnUrl.payUrl, '_system');
                                this.zone.run(() => {
                                    this.setinterval();
                                });
                            }
                        });
                    }
                });
            }
        });
    }
    NoCreateBookingMomo() {
        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay?paymentType=momo&source=app&amount=' + this.foodService.totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.foodService.objBooking.CustomerPhone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomefood';
        this.gf.CreatePayoo(url).then(datapayoo => {
            datapayoo = JSON.parse(datapayoo);
            if (datapayoo.success) {
                window.open(datapayoo.returnUrl.payUrl, '_system');
                this.zone.run(() => {
                    this.setinterval();
                });
            }
        });
    }
    setinterval() {
        if (this.loader) {
            this.loader.dismiss();
        }
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetBookingByCode?bookingCode=' + this.bookingCode + '';
            this.zone.run(() => {
                this.gf.CheckpaymentFood(url).then((data) => {
                    var checkpay = data;
                    if (checkpay == "true") {
                        clearInterval(this.intervalID);
                        this.foodService.ischeckpayment = '1';
                        window.close();
                        this.navCtrl.navigateForward('foodpaymentdonepayoo/' + this.bookingCode + '/' + this.startDate + '/' + this.endDate);
                    }
                });
            });
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, 60000);
    }
    setintervalvisa() {
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            this.zone.run(() => {
                this.checkBooking().then((data) => {
                    if (data) {
                        this.foodService.ischeckpayment = '1';
                        this.storage.set("payment", "visa");
                        clearInterval(this.intervalID);
                        this.safariViewController.hide();
                        this.navCtrl.navigateForward('foodpaymentdone/' + this.bookingCode + '/' + this.startDate + '/' + this.endDate);
                    }
                });
            });
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, 60000);
    }
    rememberCard() {
        this.isremember = !this.isremember;
    }
};
FoodpaymentselectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foodpaymentselect',
        template: __webpack_require__(/*! ./foodpaymentselect.page.html */ "./src/app/foodpaymentselect/foodpaymentselect.page.html"),
        styles: [__webpack_require__(/*! ./foodpaymentselect.page.scss */ "./src/app/foodpaymentselect/foodpaymentselect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_8__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["SearchHotel"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__["SafariViewController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], FoodpaymentselectPage);



/***/ })

}]);
//# sourceMappingURL=foodpaymentselect-foodpaymentselect-module.js.map