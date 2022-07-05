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

module.exports = "<!--\n  Generated template for the RoompaymentselectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/step/food_step_2.svg\">\n  </div>\n  <div class=\"cls-divpayment\">\n<ion-grid style=\"margin-left: -5px;\">\n  <ion-row *ngFor=\"let item of listmenu\">\n    <ion-col size=\"8.5\">\n      <ion-row>\n        <ion-col style=\"padding:0\">\n      <ion-label class=\"text-food\">{{item.quantity}} x {{item.name}} \n        <span class=\"div-star\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 1\" src=\"../../assets/star/ic_star_1.svg\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 2\" src=\"../../assets/star/ic_star_2.svg\">\n            <img *ngIf=\"item && item.typePriceId && item.typePriceId == 3\" src=\"../../assets/star/ic_star_3.svg\">\n        </span>\n      </ion-label>\n      </ion-col>\n      </ion-row>\n      <p class=\"text-note\">{{item.chuoi}}</p>\n      \n    </ion-col>\n    <ion-col size=\"3.5\">\n      <ion-row class=\"text-price-food\">\n        <ion-col style=\"padding:0\">\n          <ion-label class=\"text-food\">{{item.totalPrice}}<span class=\"text-d\">đ</span></ion-label>\n        </ion-col>\n      </ion-row>\n      \n    </ion-col>\n  </ion-row>\n</ion-grid>\n<hr>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col style=\"padding:0\">\n        <ion-label class=\"text-total\">Tổng cộng</ion-label>\n        <p class=\"text-tax\">Giá đã bao gồm thuế & phí</p>\n        </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-row>\n          <ion-col style=\"padding:0\">\n        <p class=\"total-price\" style=\"text-align: right\">\n          {{priceshow}}<span class=\"total-price-d\"> đ</span>\n        </p>\n        </ion-col>\n      </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"ischeckpay\" (click)=\"foodpaymentbank()\" class=\"cls-minheight\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item  (click)=\"foodpaymentatm()\" class=\"cls-minheight\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item  class=\"cls-minheight ion-item1\">\n      <label  (click)=\"foodpaymentvisa()\">\n        Thẻ thanh toán quốc tế\n      </label>\n      <ion-icon slot=\"end\"  (click)=\"foodpaymentvisa()\"  *ngIf=\"!ischeckvisa\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n      <img slot=\"end\"  *ngIf=\"ischeckvisa\" style=\"margin-right: 15px;\" src=\"./assets/imgs/ic_down_b.svg\">\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <img class=\"imgcard ml8\" src={{item.imgbank}}>\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox (click)=\"rememberCard()\" checked=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px;\">\n    <ion-item (click)=\"foodpaymentpayoolive()\" class=\"cls-minheight\">\n      <label>\n        Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"foodpaymentpayooqr()\" class=\"cls-minheight\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"foodpaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button [disabled]=\"!ischeckedDK\" (click)=\"next()\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" ion-button round outline class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentselect/foodpaymentselect.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/foodpaymentselect/foodpaymentselect.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-divpayment {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-price-food {\n  text-align: right;\n}\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n.div-star {\n  padding: 2px;\n}\n.img-payoo {\n  vertical-align: middle;\n  height: 20px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.cls-minheight {\n  --min-height: 48px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  padding: 8px;\n  margin-top: 24px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RwYXltZW50c2VsZWN0L2Zvb2RwYXltZW50c2VsZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZHBheW1lbnRzZWxlY3QvZm9vZHBheW1lbnRzZWxlY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FOO0FERUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDUjtBRENJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0NSO0FERUk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FEQ0k7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0VOO0FEQUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNHTjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ0lKO0FERkU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0tKO0FESEE7RUFFRSxzQkFBQTtBQ0tGO0FESEE7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0FDS0Y7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDTUY7QUFDRjtBREhBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0lKO0FERkE7RUFDSSxlQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tOO0FESEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ01KO0FESkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRExFO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1FKO0FETkE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNRSjtBRE5BO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNTTjtBRFBFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNVSjtBRFJFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDV0o7QURURTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURaSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNjUjtBRFpJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2NSO0FEWkk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNjTjtBRFhBO0VBRUUsa0JBQUE7QUNhRjtBRFhBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ2FGO0FEWEE7RUFFRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDYUY7QURYQTtFQUVFLGdCQUFBO0VBQ0EsaUJBQUE7QUNhRjtBRFhBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNhRjtBRFhBO0VBRUksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFhBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhRjtBRFZBO0VBRUksaUJBQUE7QUNZSjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWUY7QURWQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNZRjtBRFZBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1lGO0FEVEE7RUFDRSxZQUFBO0FDWUY7QURWQTtFQUVFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUNZRjtBRFZBO0VBRUUsa0JBQUE7QUNZRjtBRFZBO0VBRUUsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNZRjtBRFZBO0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNZRjtBRFZBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWVI7QURWSTtFQUVFLGdCQUFBO0FDWU47QURWSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ1lSO0FEVkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNhTjtBRFhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDY047QURaSTtFQUVFLCtCQUFBO0FDY047QURaSTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNlTjtBRGJJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNnQk47QURkSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2lCTjtBRGZJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNrQk47QURoQkU7RUFDRSxjQUFBO0FDbUJKIiwiZmlsZSI6InNyYy9hcHAvZm9vZHBheW1lbnRzZWxlY3QvZm9vZHBheW1lbnRzZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAudGV4dC1uYW1lXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIC50ZXh0LWdyZWVuXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1kYXRlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgfVxyXG4gICAgLmltYWdlLWNhcmR7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZS1ke1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgfVxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgICAgY29sb3I6IzgyODI4MjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIC50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9ICBcclxuICAuZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0Ojg3cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5jbHMtaHJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudHtcclxuICAgIG1heC13aWR0aDogMTg4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbn1cclxuLnRleHQtaW5mb2NhclxyXG57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG59XHJcbi50ZXh0LWxvY2F0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNlYzk3MWY7XHJcbiAgfVxyXG4gIC5kaXYtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXN1Yi10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5jbHMtbGlzdFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG59XHJcbi5jbHMtZGl2cGF5bWVudFxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTVweFxyXG59XHJcbi50ZXh0LXBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG59XHJcbi5kaXYtaW5mb1xyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxufVxyXG4uY2xzLXJvd2hlaWdodDFcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGhlaWdodDogODFweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi50ZXh0LW5vdGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4udGV4dC1wcmljZS1mb29kXHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0LXRheFxyXG57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtZFxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi50ZXh0LXRvdGFsXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4uZGl2LXN0YXJ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5pbWctcGF5b29cclxue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbn1cclxuLmNscy1taW5oZWlnaHRcclxue1xyXG4gIC0tbWluLWhlaWdodDogNDhweDtcclxufVxyXG4uaW9uLWl0ZW1cclxue1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgLS1taW4taGVpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuLmltZ2NhcmRcclxue1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMTIuOHB4O1xyXG59XHJcbi50ZXh0LWluZm9iYW5rXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAubWw4XHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9IFxyXG4gICAgLmxhYmVsLWlucHV0e1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmlvbi1jaGVja2JveHtcclxuICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgbWFyZ2luOiAtMnB4O1xyXG4gICAgfVxyXG4gICAgLmlvbi1pdGVtMVxyXG4gICAge1xyXG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgfVxyXG4gICAgLmRpdi1ES3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcclxuICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgICB9XHJcbiAgICAuY2hlY2tib3gtREt7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1ES3tcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICBjb2xvcjogIzcxNzQ4NDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIH1cclxuICAgIC5idG4tZGlzYWJsZWR7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG4gIC50ZXh0LWxpbmstREt7XHJcbiAgICBjb2xvcjogIzJmODBlZFxyXG4gIH1cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAiLCIudGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi50b3RhbC1wcmljZS1kIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODdweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNscy1kaXZwYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uZGl2LWluZm8ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmNscy1yb3doZWlnaHQxIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LXByaWNlLWZvb2Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtdGF4IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtc3RhciB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmltZy1wYXlvbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMjBweDtcbiAgb2JqZWN0LWZpdDogc2NhbGUtZG93bjtcbn1cblxuLmNscy1taW5oZWlnaHQge1xuICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufVxuXG4uaW9uLWl0ZW0xIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmRpdi1ESyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4uY2hlY2tib3gtREsge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGV4dC1ESyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM3MTc0ODQ7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1saW5rLURLIHtcbiAgY29sb3I6ICMyZjgwZWQ7XG59Il19 */"

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
        this.ischeckedDK = true;
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
                this.checkBooking().then((data) => {
                    if (data) {
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
        }, 900000);
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
        }, 600000);
    }
    rememberCard() {
        this.isremember = !this.isremember;
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