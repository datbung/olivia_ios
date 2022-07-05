(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentflightcombo-mytripaymentflightcombo-module"],{

/***/ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightcombo/mytripaymentflightcombo.module.ts ***!
  \***************************************************************************/
/*! exports provided: MytripaymentflightcomboPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightcomboPageModule", function() { return MytripaymentflightcomboPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentflightcombo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentflightcombo.page */ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentflightcombo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightcomboPage"]
    }
];
let MytripaymentflightcomboPageModule = class MytripaymentflightcomboPageModule {
};
MytripaymentflightcomboPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentflightcombo_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightcomboPage"]]
    })
], MytripaymentflightcomboPageModule);



/***/ }),

/***/ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div style=\"margin-top: 15px\" class=\"div-title mt-11\">\n    <ion-label class=\"combo-title\">{{titlecombo}}</ion-label>\n  </div>\n\n  <div  class=\"div-title mt-5\">\n    <ion-label class=\"hotel-name\">{{Name}}</ion-label>\n  </div>\n  <div class=\"d-flex\">\n    <div class=\"text-flight-datetime\">{{ cin }} </div>\n    <div class=\"div-flight-inout\">\n      <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\">\n  </div> \n  <div class=\"text-flight-datetime\">{{ cout }} </div>\n  </div>\n  \n  <hr >\n  <div class=\"d-flex mt-16\">\n    <div class=\"div-width-100\">\n      <img class=\"image-card\" src=\"./assets/ic_facility/ic_people.svg\"> {{roomnumber}} phòng | {{totalPaxStr}}\n    </div>\n    <div class=\"div-width-100 text-right\">\n      <div class=\"text-total-price\">{{priceshow}}<span class=\"text-d\">đ</span>\n      </div>\n      <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n      \n    </div>\n  </div>\n  <div class=\"div-split-panel\"></div>\n  <ion-list class=\"cls-list\">\n    <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n      <label  class=\"text-list m-bottom-8\">\n        Tài khoản công ty\n      </label>\n      <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n    </ion-item>\n    \n    <ion-item  (click)=\"roompaymentatm()\">\n      <label>\n        Thẻ ATM nội địa /Internet Banking\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentvisa()\" class=\"ion-item1\">\n      <label>\n        Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n      </label>\n      <ion-icon  slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n      <ion-item class=\"ion-item\" *ngFor=\"let item of arrbankrmb\">\n        <ion-radio  mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n        <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n        <ion-label  class=\"text-infobank ml8\">\n          {{item.name_Bank}}\n        </ion-label>\n        <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n          {{item.vpc_CardNum}}</ion-label>\n      </ion-item>\n      <ion-item class=\"ion-item\">\n        <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n        <ion-label  class=\"text-infobank ml8\">\n          Chon tài khoản khác\n        </ion-label>\n        </ion-item>\n    </ion-radio-group>\n    <div  style=\"margin-left: 15px\">\n      <ion-checkbox [disabled]=\"isdisable\" (click)=\"rememberCard()\" [checked]=\"isremember\" class=\"ion-checkbox\"  color=\"secondary\"></ion-checkbox>\n      <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n    </div>\n    <hr style=\"margin-left: 15px\">\n    <ion-item (click)=\"roompaymentmomo()\">\n      <label>\n        Thanh toán bằng Momo  <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"roompaymentpayooqr()\">\n      <label>\n        Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n    <ion-item *ngIf=\"stt=='1'\" (click)=\"roompaymentbank()\">\n      <label>\n        Chuyển khoản ngân hàng\n      </label>\n      <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"cls-arrow-payment-align-right\"></ion-icon>\n    </ion-item>\n\n  </ion-list>\n  <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\"  class=\"button button2\">Thanh toán và hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n.text-name .text-green {\n  color: #26bed6;\n}\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n.image-card {\n  display: initial !important;\n}\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n}\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\nhr {\n  background-color: #ccc;\n}\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n.div-title {\n  margin-top: 15px;\n}\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #222222;\n}\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n.div-title .hotel-name {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  color: #222222;\n}\n.cls-list {\n  margin-left: -15px;\n}\n.cls-rowheight {\n  height: 60px;\n}\n.cls-divpayment {\n  margin-top: -15px;\n  margin-left: -5px;\n}\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.div-info {\n  margin-left: 3px;\n  margin-top: -10px;\n}\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n.cls-label {\n  align-self: center;\n  margin-left: 12px;\n}\n.cls-img {\n  width: 36px;\n  height: 36px;\n}\np {\n  display: block;\n  -webkit-margin-before: 1em;\n          margin-block-start: 1em;\n  -webkit-margin-after: 1em;\n          margin-block-end: 1em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n}\n.d-flex {\n  display: flex;\n  margin-top: 8px;\n}\n.div-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: relative;\n  margin: 0px 10px 0 10px;\n}\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -5px;\n}\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.mt-5 {\n  margin-top: 5px;\n}\n.mt-11 {\n  margin-top: 11px;\n}\n.text-center {\n  text-align: center;\n}\n.div-width-60 {\n  width: 60%;\n}\n.div-icon-down {\n  position: absolute;\n  right: 16px;\n}\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n.text-pax {\n  font-size: 14px;\n  font-weight: 300;\n  color: #222222;\n}\n.text-sub {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.mt-16 {\n  margin-top: 16px;\n}\n.text-d {\n  font-size: 14px;\n  font-weight: 300;\n  margin-left: 5px;\n}\n.img-payoo {\n  width: 40px;\n  vertical-align: middle;\n}\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n.ml8 {\n  margin-left: 8px;\n}\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 32px;\n}\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL215dHJpcGF5bWVudGZsaWdodGNvbWJvL215dHJpcGF5bWVudGZsaWdodGNvbWJvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0Y29tYm8vbXl0cmlwYXltZW50ZmxpZ2h0Y29tYm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDRE47QURFTTtFQUVFLGNBQUE7QUNEUjtBRElJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESUk7RUFDRSwyQkFBQTtBQ0ROO0FER0k7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQU47QURFSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBUjtBREdJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBTjtBREVJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNDTjtBRENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDRU47QURBRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjtBREZBO0VBRUUsc0JBQUE7QUNJRjtBREZBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ0lGO0FERkE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsVUFBQTtFQ0tGO0FBQ0Y7QURGQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNHSjtBRERBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNJTjtBREZFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNLSjtBREhFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTUo7QURKRTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ09KO0FETEE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRExBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRTjtBRE5FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNTSjtBRFBFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDVUo7QURSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDV0o7QURURTtFQUNFLGdCQUFBO0FDWUo7QURYSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDYU47QURYSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNhUjtBRFhJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNhTjtBRFZBO0VBRUUsa0JBQUE7QUNZRjtBRFZBO0VBRUUsWUFBQTtBQ1lGO0FEVkE7RUFFRSxpQkFBQTtFQUNBLGlCQUFBO0FDWUY7QURWQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNZSjtBRFZBO0VBRUUsZ0JBQUE7RUFDQSxpQkFBQTtBQ1lGO0FEVkE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ1lGO0FEVkE7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDWUo7QURWQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0FDWUo7QURWQTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxxQkFBQTtFQUNBLHlCQUFBO1VBQUEsd0JBQUE7RUFDQSx1QkFBQTtVQUFBLHNCQUFBO0FDYUY7QURYQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FDY0Y7QURaQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ2VGO0FEYkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNlSjtBRFpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNlRjtBRGJBO0VBRUUsZUFBQTtBQ2VGO0FEYkE7RUFFRSxnQkFBQTtBQ2VGO0FEYkE7RUFFRSxrQkFBQTtBQ2VGO0FEYkE7RUFDRSxVQUFBO0FDZ0JGO0FEZEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNpQkY7QURmQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2tCRjtBRGhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNFLGNBQUE7QUNtQko7QURqQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNvQkY7QURsQkE7RUFFRSxnQkFBQTtBQ29CRjtBRGxCQTtFQUNFLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDcUJKO0FEbkJBO0VBRUUsV0FBQTtFQUNBLHNCQUFBO0FDcUJGO0FEbkJBO0VBRUUsV0FBQTtFQUNBLGNBQUE7QUNxQkY7QURuQkE7RUFFUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNxQlI7QURuQkk7RUFFRSxnQkFBQTtBQ3FCTjtBRG5CSTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDcUJOO0FEbkJJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDc0JOO0FEcEJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDdUJOO0FEckJJO0VBRUUsK0JBQUE7QUN1Qk47QURyQkk7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDdUJOO0FEckJJO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDd0JOO0FEdEJJO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUN5Qk47QUR2Qkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUMwQk47QUR4Qkk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQzJCTjtBRHpCRTtFQUNFLGNBQUE7QUM0QkoiLCJmaWxlIjoic3JjL2FwcC9teXRyaXBheW1lbnRmbGlnaHRjb21iby9teXRyaXBheW1lbnRmbGlnaHRjb21iby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGV4dC1uYW1lXG4gICAge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAudGV4dC1ncmVlblxuICAgICAge1xuICAgICAgICBjb2xvcjogIzI2YmVkNlxuICAgICAgfVxuICAgIH1cbiAgICAudGV4dC1kYXRlXG4gICAge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHhcbiAgICB9XG4gICAgLmltYWdlLWNhcmR7XG4gICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC50b3RhbC1wcmljZXtcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICB9XG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gICAgICB3aWR0aDogMTA0cHg7XG4gICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgIH1cbiAgICAuaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbiAgICB9XG4gICAgLnRleHQtcm9vbS1wcmljZS1vdGF7XG4gICAgICBjb2xvcjojODI4MjgyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICB9XG4gIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICB9ICBcbiAgLmRpdi13cmFwaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0Ojg3cHg7XG4gICAgd2lkdGg6IDEwNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuaHJcbntcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cbi5jbHMtaHJcbntcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50e1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxuXG59XG4udGV4dC1pbmZvY2FyXG57XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICBmb250LXNpemU6IDEycHhcbn1cbi5jb21iby1kZXBhcnR1cmUtdGltZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgfVxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAzYzcxO1xuICB9XG4gIC5mbGlnaHQtcHJpY2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5kaXYtc3BsaXQtcGFuZWx7XG4gICAgaGVpZ2h0OiA3cHg7XG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLnRleHQtbG9jYXRpb25cbntcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcbn1cbi5jb21iby1kZXBhcnR1cmUtdGltZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgfVxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAzYzcxO1xuICB9XG4gIC5mbGlnaHQtcHJpY2V7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjZWM5NzFmO1xuICB9XG4gIC5kaXYtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAuY29tYm8tdGl0bGV7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5jb21iby1zdWItdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjZjU5MjMzO1xuICAgIH1cbiAgICAuaG90ZWwtbmFtZXtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG59XG4uY2xzLWxpc3RcbntcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLmNscy1yb3doZWlnaHRcbntcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmNscy1kaXZwYXltZW50XG57XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweFxufVxuLnRleHQtcFxue1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5kaXYtaW5mb1xue1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5jbHMtcm93aGVpZ2h0MVxue1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmNscy1sYWJlbFxue1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5jbHMtaW1nXG57XG4gICAgd2lkdGg6IDM2cHg7XG4gICAgaGVpZ2h0OiAzNnB4O1xufVxucCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDFlbTtcbiAgbWFyZ2luLWJsb2NrLWVuZDogMWVtO1xuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwcHg7XG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwcHg7XG59XG4uZC1mbGV4e1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG4uZGl2LWZsaWdodC1pbm91dHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDBweCAxMHB4IDAgMTBweDtcblxuICAuaW1nLWZsaWdodC1pbm91dHtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAtNXB4O1xuICB9XG59XG4udGV4dC1mbGlnaHQtZGF0ZXRpbWV7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4ubXQtNVxue1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubXQtMTFcbntcbiAgbWFyZ2luLXRvcDogMTFweDtcbn1cbi50ZXh0LWNlbnRlclxue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXdpZHRoLTYwe1xuICB3aWR0aDogNjAlO1xufVxuLmRpdi1pY29uLWRvd257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG59XG4udGV4dC10b3RhbC1wcmljZXtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4udGV4dC1wYXh7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbn1cbi50ZXh0LXN1YntcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4ubXQtMTZcbntcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi50ZXh0LWR7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4uaW1nLXBheW9vXG57XG4gIHdpZHRoOiA0MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmltZ2NhcmRcbntcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuLnRleHQtaW5mb2JhbmtcbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubWw4XG4gICAge1xuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB9XG4gICAgLmlvbi1pdGVtXG4gICAge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgICAgLS1taW4taGVpZ2h0OiAwcHg7XG4gICAgICBtYXJnaW4tbGVmdDogMzJweDtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmlvbi1jaGVja2JveHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiAtMnB4O1xuICAgIH1cbiAgICAuaW9uLWl0ZW0xXG4gICAge1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICB9XG4gICAgLmltZy12aXNhXG4gICAge1xuICAgICAgd2lkdGg6IDExOHB4O1xuICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG4gICAgLmRpdi1ES3tcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbiAgICAuY2hlY2tib3gtREt7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIH1cbiAgICAudGV4dC1ES3tcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICBjb2xvcjogIzcxNzQ4NDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgfVxuICAgIC5idG4tZGlzYWJsZWR7XG4gICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgaGVpZ2h0OiA0OHB4O1xuICB9XG4gIC50ZXh0LWxpbmstREt7XG4gICAgY29sb3I6ICMyZjgwZWRcbiAgfVxuICAgIFxuXG5cblxuXG5cbiIsIi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5ob3RlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cblxuLmNscy1yb3doZWlnaHQge1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5jbHMtZGl2cGF5bWVudCB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5kaXYtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4uY2xzLXJvd2hlaWdodDEge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2xzLWxhYmVsIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmNscy1pbWcge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG5wIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ibG9jay1zdGFydDogMWVtO1xuICBtYXJnaW4tYmxvY2stZW5kOiAxZW07XG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmRpdi1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMHB4IDEwcHggMCAxMHB4O1xufVxuLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTVweDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm10LTUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5tdC0xMSB7XG4gIG1hcmdpbi10b3A6IDExcHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi13aWR0aC02MCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5kaXYtaWNvbi1kb3duIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbn1cblxuLnRleHQtdG90YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5tdC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pbWctcGF5b28ge1xuICB3aWR0aDogNDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZ2NhcmQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG5cbi50ZXh0LWluZm9iYW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufVxuXG4uaW9uLWl0ZW0xIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmltZy12aXNhIHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kaXYtREsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNoZWNrYm94LURLIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnRleHQtREsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjNzE3NDg0O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uYnRuLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtbGluay1ESyB7XG4gIGNvbG9yOiAjMmY4MGVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.ts ***!
  \*************************************************************************/
/*! exports provided: MytripaymentflightcomboPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightcomboPage", function() { return MytripaymentflightcomboPage; });
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













let MytripaymentflightcomboPage = class MytripaymentflightcomboPage {
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
        this.titlecombo = this.activityService.objPaymentMytrip.trip.combo_name;
        this.cin = moment__WEBPACK_IMPORTED_MODULE_9__(this.activityService.objPaymentMytrip.trip.checkInDate).format('DD-MM-YYYY');
        this.cout = moment__WEBPACK_IMPORTED_MODULE_9__(this.activityService.objPaymentMytrip.trip.checkOutDate).format('DD-MM-YYYY');
        this.Name = this.activityService.objPaymentMytrip.trip.hotel_name;
        this.priceshow = this.activityService.objPaymentMytrip.trip.priceShow;
        this.cus_phone = this.activityService.objPaymentMytrip.trip.cus_phone;
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        this.totalPaxStr = this.activityService.objPaymentMytrip.trip.totalPaxStr;
        this.roomnumber = this.activityService.objPaymentMytrip.trip.room_count;
        this.totalPrice = this.priceshow.toString().replace(/\./g, '').replace(/\,/g, '');
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
                        this.isdisable = true;
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
                    url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + se.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
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
MytripaymentflightcomboPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripaymentflightcombo',
        template: __webpack_require__(/*! ./mytripaymentflightcombo.page.html */ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentflightcombo.page.scss */ "./src/app/mytripaymentflightcombo/mytripaymentflightcombo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_11__["BizTravelService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MytripaymentflightcomboPage);



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
//# sourceMappingURL=mytripaymentflightcombo-mytripaymentflightcombo-module.js.map