(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytripaymentflightselect-mytripaymentflightselect-module"],{

/***/ "./src/app/mytripaymentflightselect/mytripaymentflightselect.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/mytripaymentflightselect/mytripaymentflightselect.module.ts ***!
  \*****************************************************************************/
/*! exports provided: MytripaymentflightselectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightselectPageModule", function() { return MytripaymentflightselectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytripaymentflightselect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytripaymentflightselect.page */ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.ts");







const routes = [
    {
        path: '',
        component: _mytripaymentflightselect_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightselectPage"]
    }
];
let MytripaymentflightselectPageModule = class MytripaymentflightselectPageModule {
};
MytripaymentflightselectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytripaymentflightselect_page__WEBPACK_IMPORTED_MODULE_6__["MytripaymentflightselectPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], MytripaymentflightselectPageModule);



/***/ }),

/***/ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/mytripaymentflightselect/mytripaymentflightselect.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thanh toán</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-img-step m-bottom-16\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div class=\"cls-divpayment\">\n    \n    <div class=\"d-flex\">\n    \n        <div class=\"text-flight-title div-width-600 d-flex\">\n            <div>\n                <div>{{ departCity }} ({{ departCode }})</div>\n                <div class=\"text-flight-datetime\">{{ checkInDisplayFullYear }} </div>\n            </div>\n            <div class=\"div-flight-inout\">\n                <img class=\"img-flight-inout\" *ngIf=\"activityService.objPaymentMytrip.trip.bookingsComboData.length >1\" src=\"./assets/ic_flight/ic_flight_inout.svg\">\n                <img class=\"img-flight-inout img-oneway\" *ngIf=\"activityService.objPaymentMytrip.trip.bookingsComboData.length ==1\" src=\"./assets/imgs/ic_arrow.svg\">\n            </div> \n            <div *ngIf=\"returnCity&&returnCode\">\n                <div>{{ returnCity }}  ({{ returnCode }})</div>\n                <div *ngIf=\"activityService.objPaymentMytrip.trip.bookingsComboData.length >1\" class=\"text-flight-datetime\" >{{ checkOutDisplayFullYear }} </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"div-split\"></div>\n    <div class=\"d-flex \">\n      <div class=\"div-width-100\">\n          <div class=\"text-pax\">{{totalPaxStr}}</div>\n      </div>\n      <div class=\"div-width-100 text-right m-bottom-16\" >\n        <div class=\"text-total-price\">{{totalpricedisplay}}đ\n        </div>\n        <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n      </div>\n    </div>\n\n  </div>\n      <div class=\"div-split-panel\"></div>\n      <ion-list class=\"cls-list\">\n        <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" class=\"=cls-minheight h-54\">\n          <label  class=\"text-list m-bottom-8\">\n            Tài khoản công ty\n          </label>\n          <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - totalPrice) >0\" class='cls-arrow-payment-align-right'></ion-icon>\n        </ion-item>\n        \n        <ion-item (click)=\"flightpaymentatm()\" >\n            <label  class=\"text-list\">\n              Thẻ ATM nội địa /Internet Banking\n            </label>\n            <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  class='m-right-16  cls-arrow-opt' *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        <ion-item [ngClass]=\"(arrbankrmb.length>0&&ischeckvisa) ? 'cls-minheight no-border-bottom' : 'cls-minheight no-border-bottom'  \" (click)=\"flightpaymentvisa()\">\n          <label  class=\"text-list\" >\n            Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n          </label>\n          <ion-icon slot=\"end\"  *ngIf=\"!ischeckvisa && !blockPayCard\" name=\"ios-arrow-round-forward\" class='m-right-16 cls-arrow-opt'></ion-icon>\n          <img slot=\"end\"  *ngIf=\"ischeckvisa\" style=\"margin-right: -9px;\" src=\"./assets/imgs/ic_down.svg\">\n        </ion-item>\n        <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n          <ion-item *ngFor=\"let item of arrbankrmb\" [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n            <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n            <ion-label  class=\"text-list text-infobank ml8\">\n              {{item.name_Bank}}\n            </ion-label>\n            <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n              {{item.vpc_CardNum}}</ion-label>\n          </ion-item>\n          <ion-item [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n            <ion-label  class=\"text-list text-infobank ml8\">\n              Chọn tài khoản khác\n            </ion-label>\n            </ion-item>\n        </ion-radio-group>\n        <div style=\"margin-left: 15px;margin-bottom: 15px\">\n          <ion-checkbox [disabled]=\"isdisable\" (ionChange)=\"rememberCard()\"  class=\"ion-checkbox\" [checked]=\"isremember\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n        </div>\n        <div class=\"div-split-item\"></div>\n        <ion-item  (click)=\"flightpaymentmomo()\" >\n          <label class=\"text-list\">\n            Thanh toán qua  <img class=\"img-momo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"m-right-16 cls-arrow-opt\" *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        \n        <ion-item (click)=\"flightpaymentpayooqr()\" >\n          <label class=\"text-list\">\n            Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  [ngClass]=\"blockPayCard ? 'm-right-2 cls-arrow-opt' : 'm-right-16 cls-arrow-opt' \"  *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        <ion-item (click)=\"roompaymentbank()\">\n          <label class=\"text-list\">\n            Chuyển khoản ngân hàng\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" class=\"m-right-16 cls-arrow-opt\"  *ngIf=\"!blockPaylate\"></ion-icon>\n        </ion-item>\n      </ion-list>\n      <div class=\"div-DK\">\n        <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n        <div class=\"text-DK\">\n          Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n        </div>\n      </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn\">\n  <div  style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline [disabled]=\"!ischeckedDK\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" class=\"button button2\">Thanh toán và xuất vé</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/mytripaymentflightselect/mytripaymentflightselect.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.sp-title {\n  color: #828282;\n}\n\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-split {\n  height: 0.5px;\n  background-color: #bdbdbd;\n  margin: 16px 0;\n}\n\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.image-card {\n  display: initial !important;\n}\n\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n\n.div-title {\n  margin-top: 15px;\n}\n\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.cls-list {\n  margin-left: -16px;\n}\n\n.cls-list .text-list {\n  height: 22px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.cls-divpayment {\n  margin-top: 10px;\n}\n\n.cls-divpayment .div-promotion-ticket {\n  margin: 23px 0px 16px 0px;\n}\n\n.cls-divpayment .div-promotion-ticket .lbl-promotion-ticket {\n  padding: 5px 14px 5px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 0 8px 0 rgba(38, 190, 214, 0.2);\n  background-color: #e52822;\n}\n\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-price-food {\n  text-align: right;\n}\n\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-star {\n  padding: 2px;\n}\n\n.img-payoo {\n  width: 50px;\n  vertical-align: middle;\n}\n\n.img-momo {\n  width: 32px;\n  position: absolute;\n  top: 6px;\n  margin-left: 100px;\n}\n\n.cls-minheight {\n  --min-height: 48px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.ml8 {\n  margin-left: 8px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n}\n\n.m-right-16 {\n  margin-right: -12px;\n}\n\n.div-img-step {\n  text-align: center;\n}\n\n.div-line {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.div-depart-title, .div-return-title {\n  font-size: 13px;\n  font-weight: 100;\n  line-height: 17px;\n  letter-spacing: -0.7px;\n  padding-left: 16px;\n}\n\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 18px;\n  width: 1px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 20px;\n  top: 63px;\n}\n\n.placepoint {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.point-top {\n  top: 55px;\n}\n\n.point-bottom {\n  top: 81px;\n}\n\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n\n.div-width-600 {\n  width: 600%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-flight-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-split {\n  margin: 16px 0;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n\n.img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n\n.div-split-item {\n  margin-left: 16px;\n  border-bottom: solid 1px #c8c7cc;\n}\n\n.no-border-bottom {\n  --border-style: none;\n}\n\n.item-disabled {\n  --background: #bdbdbd;\n  opacity: 0.5;\n  margin-right: -16px;\n}\n\n.text-hotfare {\n  color: #828282;\n  position: absolute;\n  bottom: 2px;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.logo-vna {\n  height: 34px !important;\n}\n\n::ng-deep .cls-alert-refreshPrice .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 14px !important;\n  overflow: hidden !important;\n}\n\n@media (min-width: 360px) and (max-width: 375px) {\n  ::ng-deep .text-flight-datetime {\n    font-size: 13px !important;\n  }\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9teXRyaXBheW1lbnRmbGlnaHRzZWxlY3QvbXl0cmlwYXltZW50ZmxpZ2h0c2VsZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbXl0cmlwYXltZW50ZmxpZ2h0c2VsZWN0L215dHJpcGF5bWVudGZsaWdodHNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0FDRFI7O0FESUk7RUFDSSwyQkFBQTtBQ0RSOztBREVRO0VBQ0UsZUFBQTtBQ0FWOztBRElJO0VBQ0UsY0FBQTtBQ0ROOztBRElJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDRE47O0FESUk7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRFI7O0FER0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRSxjQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDUjs7QURFTTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRENRO0VBRUUsY0FBQTtBQ0FWOztBREdNO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RWOztBREdNO0VBQ0UsMkJBQUE7QUNBUjs7QURFTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQ007RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFVjs7QURBTTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFVjs7QURDTTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRVI7O0FEQU07RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFD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O0FDd0JKOztBRHRCQTtFQUNFLGNBQUE7QUN5QkYiLCJmaWxlIjoic3JjL2FwcC9teXRyaXBheW1lbnRmbGlnaHRzZWxlY3QvbXl0cmlwYXltZW50ZmxpZ2h0c2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIFxuICAgIC5kLWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIFxuICAgIC5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xuICAgICAgICAuZGl2LXRpdGxle1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgXG4gICAgLnNwLXRpdGxle1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICBcbiAgICAudGV4dC1zdWJ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gIFxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIGhlaWdodDogMC41cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgIH1cbiAgICAudGV4dC1wYXh7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG4gICAgLnRleHQtdG90YWwtcHJpY2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgXG4gICAgICAudGV4dC1uYW1lXG4gICAgICB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIC50ZXh0LWdyZWVuXG4gICAgICAgIHtcbiAgICAgICAgICBjb2xvcjogIzI2YmVkNlxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudGV4dC1kYXRlXG4gICAgICB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweFxuICAgICAgfVxuICAgICAgLmltYWdlLWNhcmR7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgIH1cbiAgICAgIC50b3RhbC1wcmljZXtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIH1cbiAgICAgIC50b3RhbC1wcmljZS1ke1xuICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgfVxuICAgICAgLmJ1dHRvbjJcbiAgICAgIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgXG4gICAgICB9XG4gICAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgfVxuICAgICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1yb29tLXByaWNlLW90YXtcbiAgICAgICAgY29sb3I6IzgyODI4MjtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICB9ICBcbiAgICAuZGl2LXdyYXBpbWcge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0Ojg3cHg7XG4gICAgICB3aWR0aDogMTA0cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gIGhyXG4gIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG4gIC5jbHMtaHJcbiAge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIGhlaWdodDogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gICAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudHtcbiAgICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgICBsZWZ0OiAxMnB4O1xuICAgIH1cbiAgXG4gIH1cbiAgLnRleHQtaW5mb2NhclxuICB7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICM0ZjRmNGY7XG4gICAgICBmb250LXNpemU6IDEycHhcbiAgfVxuICAuY29tYm8tZGVwYXJ0dXJlLXRpbWV7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMDAzYzcxO1xuICAgIH1cbiAgICAuZmxpZ2h0LXByaWNle1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5kaXYtc3BsaXQtcGFuZWx7XG4gICAgICBoZWlnaHQ6IDdweDtcbiAgICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICB9XG4gIC50ZXh0LWxvY2F0aW9uXG4gIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gIH1cbiAgLmNvbWJvLWRlcGFydHVyZS10aW1le1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIH1cbiAgICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzAwM2M3MTtcbiAgICB9XG4gICAgLmZsaWdodC1wcmljZXtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICNlYzk3MWY7XG4gICAgfVxuICAgIC5kaXYtdGl0bGV7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgLmNvbWJvLXRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xuICAgICAgfVxuICAgICAgLmNvbWJvLXN1Yi10aXRsZXtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgICB9XG4gICAgICAuY29tYm8tdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG4gIC5jbHMtbGlzdFxuICB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgICAgLnRleHQtbGlzdHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgfVxuICB9XG4gIC5jbHMtZGl2cGF5bWVudFxuICB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgXG4gICAgLmRpdi1wcm9tb3Rpb24tdGlja2V0e1xuICAgICAgbWFyZ2luOiAyM3B4IDBweCAxNnB4IDBweDtcbiAgXG4gICAgICAgIC5sYmwtcHJvbW90aW9uLXRpY2tldHtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTRweCA1cHggMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDM4LCAxOTAsIDIxNCwgMC4yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xuICAgICAgICB9XG4gICAgfVxuICB9XG4gIC50ZXh0LXBcbiAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzRmNGY0ZjtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICB9XG4gIFxuICAuY2xzLXJvd2hlaWdodDFcbiAge1xuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICAgIGhlaWdodDogODFweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC50ZXh0LW5vdGVcbiAge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gIH1cbiAgLnRleHQtZm9vZFxuICB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBcbiAgfVxuICAudGV4dC1wcmljZS1mb29kXG4gIHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC50ZXh0LXRheFxuICB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIC50ZXh0LWZvb2RcbiAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gIH1cbiAgLnRleHQtZFxuICB7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xuICB9XG4gIC50ZXh0LXRvdGFsXG4gIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBcbiAgfVxuICAuZGl2LXN0YXJ7XG4gICAgcGFkZGluZzogMnB4O1xuICB9XG4gIC5pbWctcGF5b29cbiAge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmltZy1tb21ve1xuICAgIHdpZHRoOiAzMnB4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiA2cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIH1cbiAgLmNscy1taW5oZWlnaHRcbiAge1xuICAgIC0tbWluLWhlaWdodDogNDhweDtcbiAgfVxuICAuaW9uLWl0ZW1cbiAge1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgLS1taW4taGVpZ2h0OiAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIH1cbiAgLmltZ2NhcmRcbiAge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogMTIuOHB4O1xuICB9XG4gIC50ZXh0LWluZm9iYW5rXG4gICAgICB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG4gICAgICAubWw4XG4gICAgICB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgICAuYnV0dG9uMlxuICAgICAge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICB9IFxuICBcbiAgICAgIC8vLy8vLy8vL0BleHRlbmQucGxhY2VsaW5lXG4gICAgICAubS1yaWdodC0xNntcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbiAgICAgIH1cbiAgICAgIC5kaXYtaW1nLXN0ZXB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICAgIC5kaXYtbGluZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgICAgIH1cbiAgICAgIC5kaXYtZGVwYXJ0LXRpdGxlLCAuZGl2LXJldHVybi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgfVxuICAgICAgICAgICAgLnBsYWNlbGluZXsgICBcbiAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMS41cHggI2JkYmRiZDtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgdG9wOiA2M3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBsYWNlcG9pbnR7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gICAgICAgICAgICAgICAgbGVmdDogMTdweDtcbiAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBsYWNlcG9pbnQtcmV0dXJue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDE3cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnQtdG9we1xuICAgICAgICAgICAgICB0b3A6IDU1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucG9pbnQtYm90dG9te1xuICAgICAgICAgICAgICB0b3A6IDgxcHg7XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vXG4gICAgICAuZGl2LWZsaWdodC1pbm91dHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICAgICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGl2LXdpZHRoLTYwMHtcbiAgICAgICAgICB3aWR0aDogNjAwJTtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXdpZHRoLTYwe1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtcmlnaHR7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLnRleHQtZmxpZ2h0LXRpdGxle1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgLnYtYWxpZ24tY2VudGVye1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXNwbGl0e1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gICAgICAgIH1cbiAgICAgICAgLmltZy1vbmV3YXl7XG4gICAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLy8vLy8vLy8vL0BleHRlbmQgXG4gICAgICAgIC5kaXYtc3BsaXQtaXRlbXtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcbiAgICAgICAgfVxuICBcbiAgICAgICAgLm5vLWJvcmRlci1ib3R0b217XG4gICAgICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5pdGVtLWRpc2FibGVke1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1ob3RmYXJle1xuICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgfVxuICBcbiAgICAgICAgLmxvZ28tdm5he1xuICAgICAgICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gIDo6bmctZGVlcHtcbiAgICAuY2xzLWFsZXJ0LXJlZnJlc2hQcmljZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICAgICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAgICAgLW1zLWZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICAgICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XG4gICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgICAgICAgXG4gIDo6bmctZGVlcHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICAgICAgLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAubGFiZWwtaW5wdXR7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgfVxuICAuaW9uLWNoZWNrYm94e1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIGhlaWdodDogMTZweDtcbiAgICBtYXJnaW46IC0ycHg7XG4gIH1cbiAgLmltZy12aXNhXG4gIHtcbiAgICB3aWR0aDogMTE4cHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLmRpdi1ES3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLmNoZWNrYm94LURLe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cbiAgLnRleHQtREt7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgY29sb3I6ICM3MTc0ODQ7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgfVxuICAuYnRuLWRpc2FibGVke1xuICAgIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDQ4cHg7XG59XG4udGV4dC1saW5rLURLe1xuICBjb2xvcjogIzJmODBlZFxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxlIC5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4udGV4dC1wYXgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC10b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi50b3RhbC1wcmljZS1kIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODdweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5jbHMtbGlzdCAudGV4dC1saXN0IHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNscy1kaXZwYXltZW50IC5kaXYtcHJvbW90aW9uLXRpY2tldCB7XG4gIG1hcmdpbjogMjNweCAwcHggMTZweCAwcHg7XG59XG4uY2xzLWRpdnBheW1lbnQgLmRpdi1wcm9tb3Rpb24tdGlja2V0IC5sYmwtcHJvbW90aW9uLXRpY2tldCB7XG4gIHBhZGRpbmc6IDVweCAxNHB4IDVweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzOCwgMTkwLCAyMTQsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uY2xzLXJvd2hlaWdodDEge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtcHJpY2UtZm9vZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC10YXgge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1kIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1zdGFyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uaW1nLXBheW9vIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWctbW9tbyB7XG4gIHdpZHRoOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5jbHMtbWluaGVpZ2h0IHtcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaW1nY2FyZCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXJpZ2h0LTE2IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTJweDtcbn1cblxuLmRpdi1pbWctc3RlcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmRpdi1kZXBhcnQtdGl0bGUsIC5kaXYtcmV0dXJuLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucGxhY2VsaW5lIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMS41cHggI2JkYmRiZDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiA2M3B4O1xufVxuXG4ucGxhY2Vwb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbGVmdDogMTdweDtcbn1cblxuLnBsYWNlcG9pbnQtcmV0dXJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBsZWZ0OiAxN3B4O1xufVxuXG4ucG9pbnQtdG9wIHtcbiAgdG9wOiA1NXB4O1xufVxuXG4ucG9pbnQtYm90dG9tIHtcbiAgdG9wOiA4MXB4O1xufVxuXG4uZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuXG4uZGl2LXdpZHRoLTYwMCB7XG4gIHdpZHRoOiA2MDAlO1xufVxuXG4uZGl2LXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZmxpZ2h0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG59XG5cbi5pbWctb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5kaXYtc3BsaXQtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcbn1cblxuLm5vLWJvcmRlci1ib3R0b20ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLml0ZW0tZGlzYWJsZWQge1xuICAtLWJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtaG90ZmFyZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubG9nby12bmEge1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtcmVmcmVzaFByaWNlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbXMtZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgOjpuZy1kZWVwIC50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLmltZy12aXNhIHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5kaXYtREsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmNoZWNrYm94LURLIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDJweDtcbn1cblxuLnRleHQtREsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjNzE3NDg0O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4uYnRuLWRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLnRleHQtbGluay1ESyB7XG4gIGNvbG9yOiAjMmY4MGVkO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/mytripaymentflightselect/mytripaymentflightselect.page.ts ***!
  \***************************************************************************/
/*! exports provided: MytripaymentflightselectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripaymentflightselectPage", function() { return MytripaymentflightselectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);













let MytripaymentflightselectPage = class MytripaymentflightselectPage {
    constructor(activityService, gf, navCtrl, storage, loadingCtrl, _flightService, safariViewController, zone, activatedRoute, _mytripService, bizTravelService) {
        this.activityService = activityService;
        this.gf = gf;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this._flightService = _flightService;
        this.safariViewController = safariViewController;
        this.zone = zone;
        this.activatedRoute = activatedRoute;
        this._mytripService = _mytripService;
        this.bizTravelService = bizTravelService;
        this.arrbankrmb = [];
        this.bookingCode = "";
        this.ischeckpay = true;
        this.isbtn = false;
        this.paymentfirst = false;
        this.allowCheckHoldTicket = true;
        this.ischeckvisa = false;
        this.isremember = true;
        this.isdisable = false;
        this.ischeckedDK = true;
        this.departCity = this.activityService.objPaymentMytrip.trip.flightFrom;
        this.departCode = this.activityService.objPaymentMytrip.trip.bookingsComboData[0].departCode;
        this.checkInDisplayFullYear = this.activityService.objPaymentMytrip.trip.checkInDisplay;
        if (this.activityService.objPaymentMytrip.trip.delivery_payment_date && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            this._flightService.itemFlightCache.periodPaymentDate = this.activityService.objPaymentMytrip.trip.delivery_payment_date;
        }
        if (this.activityService.objPaymentMytrip.trip.flightTo) {
            this.returnCity = this.activityService.objPaymentMytrip.trip.flightTo;
            this.returnCode = this.activityService.objPaymentMytrip.trip.bookingsComboData[0].arrivalCode;
        }
        if (this.activityService.objPaymentMytrip.trip.checkOutDisplay) {
            this.checkOutDisplayFullYear = this.activityService.objPaymentMytrip.trip.checkOutDisplay;
        }
        this.totalPaxStr = this.activityService.objPaymentMytrip.trip.totalPaxStr;
        this.totalpricedisplay = this.activityService.objPaymentMytrip.trip.priceShow;
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        this.cus_phone = this.activityService.objPaymentMytrip.trip.cus_phone;
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.GeTokensOfMember(0);
            }
        });
        this.loadCheckPayment();
        this.totalPrice = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
        this.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                let text = "Bearer " + auth_token;
                let headers = {
                    'cache-control': 'no-cache',
                    'content-type': 'application/json',
                    authorization: text
                };
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightpaymentselect', 'initpage').then((data) => {
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
    loadCheckPayment() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type != "CB_FLY_HOTEL") {
                let datacheck = yield this.gf.checkAllowPayment(this.bookingCode);
                this.blockPayCard = datacheck.response.blockPaymentCard;
                this.blockPaylate = datacheck.response.blockPaymentLate;
            }
        });
    }
    ngOnInit() {
        this.stt = this.activatedRoute.snapshot.paramMap.get('stt');
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
                    if (this.bookingCode) {
                        this.NoCreateBooking();
                    }
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
    gobac() {
        this.navCtrl.back();
    }
    flightpaymentvisa() {
        var se = this;
        if (se.blockPayCard) {
            return;
        }
        se.presentLoading();
        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            se.buildLinkPaymentVisa();
        }
        else {
            se.gf.updatePaymentMethodNew(se.bookingCode, 3, "", "").then(datatype => {
                if (datatype && datatype.isHoldSuccess) {
                    se.buildLinkPaymentVisa();
                }
                else {
                    se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                    clearInterval(se.intervalID);
                    se.hideLoading();
                }
            });
        }
    }
    flightpaymentatm() {
        if (this.blockPayCard) {
            return;
        }
        if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            clearInterval(this.intervalID);
            this.navCtrl.navigateForward('mytripaymentflightbank');
        }
        else {
            this.presentLoading();
            this.checkAllowRepay().then((check) => {
                if (check) {
                    clearInterval(this.intervalID);
                    this.navCtrl.navigateForward('mytripaymentflightbank');
                    this.hideLoading();
                }
                else {
                    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                        if (check) {
                            clearInterval(this.intervalID);
                            this.navCtrl.navigateForward('mytripaymentflightbank');
                            this.hideLoading();
                        }
                        else {
                            this.hideLoading();
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                            clearInterval(this.intervalID);
                        }
                    });
                }
            });
        }
    }
    buildLinkPayment(type) {
        var totalPrice = this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=' + type + '&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + this.jti + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight';
        this.gf.CreatePayoo(url).then(datapayoo => {
            if (datapayoo.success) {
                this._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
                this.openWebpage(datapayoo.returnUrl.payUrl);
                this.zone.run(() => {
                    this.setinterval(null);
                });
            }
            else {
                this.hideLoading();
                this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
            }
        });
    }
    flightpaymentmomo() {
        if (this.blockPayCard) {
            return;
        }
        var totalPrice = this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
        if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            this.buildLinkPayment('momo');
        }
        else {
            this.presentLoading();
            this.checkAllowRepay().then((check) => {
                if (check) {
                    clearInterval(this.intervalID);
                    this.gf.updatePaymentMethodNew(this.bookingCode, 4, "", "").then(datatype => {
                        if (datatype && datatype.isHoldSuccess) {
                            this.buildLinkPayment('momo');
                        }
                        else {
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                            clearInterval(this.intervalID);
                            this.hideLoading();
                        }
                    });
                }
                else {
                    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                        if (check) {
                            this.gf.updatePaymentMethodNew(this.bookingCode, 4, "", "").then(datatype => {
                                if (datatype && datatype.isHoldSuccess) {
                                    this.buildLinkPayment('momo');
                                }
                                else {
                                    this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                                    clearInterval(this.intervalID);
                                    this.hideLoading();
                                }
                            });
                        }
                        else {
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                            clearInterval(this.intervalID);
                        }
                    });
                }
            });
        }
    }
    buildLinkPaymentPayoo() {
        var totalPrice = this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + totalPrice + '&orderCode=' + this.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + this.jti;
        this.gf.CreatePayoo(url).then(datapayoo => {
            this.hideLoading();
            if (datapayoo.success) {
                this._flightService.itemFlightCache.qrimg = datapayoo.payooQrData.QRCodeUrl;
                this.navCtrl.navigateForward('mytripaymentflightpayoo/' + this.bookingCode + '/1');
            }
            else {
                this.hideLoading();
                this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
            }
        });
    }
    flightpaymentpayooqr() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            this.buildLinkPaymentPayoo();
            this.hideLoading();
        }
        else {
            var totalPrice = this.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
            this.checkAllowRepay().then((check) => {
                if (check) {
                    this.gf.updatePaymentMethodNew(this.bookingCode, 6, "", "").then(datatype => {
                        if (datatype && datatype.isHoldSuccess) {
                            this.buildLinkPaymentPayoo();
                        }
                        else {
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                            clearInterval(this.intervalID);
                            this.hideLoading();
                        }
                    });
                }
                else {
                    this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                        if (check) {
                            this.gf.updatePaymentMethodNew(this.bookingCode, 6, "", "").then(datatype => {
                                if (datatype && datatype.isHoldSuccess) {
                                    this.buildLinkPaymentPayoo();
                                }
                                else {
                                    this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 2);
                                    clearInterval(this.intervalID);
                                    this.hideLoading();
                                }
                            });
                        }
                        else {
                            this.gf.showAlertOutOfTicketFromMytrip(this._flightService.itemFlightCache, 1);
                            clearInterval(this.intervalID);
                        }
                    });
                }
            });
        }
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    checkAllowRepay() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.callCheckHoldTicket().then((check) => {
                let databkg = se._flightService.itemFlightCache.dataSummaryBooking;
                let data = se._flightService.itemFlightCache;
                if (data.ischeckpayment == 0) {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                }
                else {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain) {
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
    callCheckHoldTicket() {
        var res = false;
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "globalfunction";
                    error.func = "updatePaymentMethod";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    if (se._flightService) {
                        se._flightService.itemFlightCache.dataSummaryBooking = result;
                    }
                    if (result.expIssueTicket) {
                        se.allowCheckHoldTicket = false;
                        resolve(false);
                    }
                    else {
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
                }
            });
        });
    }
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
        });
    }
    goback() {
        this.navCtrl.back();
    }
    buildLinkPaymentVisa() {
        var se = this;
        var totalPrice = se.totalpricedisplay.toString().replace(/\./g, '').replace(/\,/g, '');
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + se.cus_phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
        se.gf.CreatePayoo(url).then(datapayoo => {
            if (datapayoo.success) {
                se._flightService.itemFlightCache.periodPaymentDate = datapayoo.periodPaymentDate;
                se._flightService.itemFlightCache.ischeckpayment = 1;
                se.openWebpage(datapayoo.returnUrl);
                se.setinterval(null);
            }
            else {
                se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                se.hideLoading();
            }
        });
    }
    NoCreateBooking() {
        var se = this;
        if (se.blockPayCard) {
            return;
        }
        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
            se.buildLinkPaymentVisa();
        }
        else {
            se.gf.updatePaymentMethodNew(se.bookingCode, 3, "", "").then(datatype => {
                if (datatype && datatype.isHoldSuccess) {
                    se.buildLinkPaymentVisa();
                }
                else {
                    se.gf.showAlertOutOfTicketFromMytrip(se._flightService.itemFlightCache, 2);
                    clearInterval(se.intervalID);
                    se.hideLoading();
                }
            });
        }
    }
    setinterval(timeout) {
        if (this.loader) {
            this.loader.dismiss();
        }
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            if (this.activityService.objPaymentMytrip.trip && this.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
                this.checkComboHotelCityPayment();
            }
            else {
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + this.bookingCode;
                this.zone.run(() => {
                    this.gf.Checkpayment(url).then((data) => {
                        var checkpay = JSON.parse(data);
                        if (checkpay.ipnCall == "CALLED_OK") {
                            this._flightService.itemFlightCache.ischeckpayment = 1;
                            this.hideLoading();
                            this.gf.hideLoading();
                            this.safariViewController.hide();
                            clearInterval(this.intervalID);
                            this.getSummaryBooking().then((databkg) => {
                                this._flightService.itemFlightCache.dataSummaryBooking = databkg;
                            });
                            this.navCtrl.navigateForward('/mytripaymentflighdone');
                        }
                        else if (checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL") {
                            this.hideLoading();
                            this.gf.hideLoading();
                            this.safariViewController.hide();
                            clearInterval(this.intervalID);
                            this._flightService.paymentError = checkpay;
                            this.navCtrl.navigateForward('/flightpaymenttimeout/1');
                        }
                    });
                });
            }
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, timeout ? timeout : 60000 * 9.1);
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
                        if (se.activityService.objPaymentMytrip.trip && se.activityService.objPaymentMytrip.trip.booking_type == "CB_FLY_HOTEL") {
                            se.checkComboHotelCityPayment();
                        }
                        else {
                            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se.bookingCode;
                            se.gf.Checkpayment(url).then((datapayment) => {
                                let checkpay = JSON.parse(datapayment);
                                if (checkpay.ipnCall == "CALLED_OK") {
                                    se._flightService.itemFlightCache.ischeckpayment = 1;
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se.getSummaryBooking().then((databkg) => {
                                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                                    });
                                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                                }
                                else {
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se._flightService.paymentError = checkpay;
                                    se.navCtrl.navigateForward('/flightpaymenttimeout/1');
                                }
                            });
                        }
                    }
                }, (error) => console.error(error));
            }
            else {
                se.hideLoading();
                se.gf.hideLoading();
            }
        });
    }
    checkComboHotelCityPayment() {
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
                    page: "mytrippaymentflightselect",
                    func: "checkComboHotelCityPayment",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "mytrippaymentflightselect";
                error.func = "checkComboHotelCityPayment";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                var rs = JSON.parse(body);
                if (rs.StatusBooking == 3 && !rs.error) {
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.getSummaryBooking().then((databkg) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    });
                    se.navCtrl.navigateForward('/mytripaymentflighdone');
                }
                else if (rs.error) {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se._flightService.paymentError = rs.error;
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                }
            }
            else {
                error.page = "roomchoosebank";
                error.func = "mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                se.hideLoading();
                se.gf.hideLoading();
                se.safariViewController.hide();
                clearInterval(se.intervalID);
                se._flightService.paymentError = rs.error;
                se.navCtrl.navigateForward('/flightpaymenttimeout/0');
            }
        });
    }
    getSummaryBooking() {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + this.bookingCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8',
                },
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "flightpaymentselect";
                    error.func = "getSummaryBooking";
                    error.param = JSON.stringify(options);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
    next() {
        this.presentLoading();
        if (this.bookingCode) {
            this.NoCreateBooking();
        }
    }
    rememberCard() {
        this.isremember = !this.isremember;
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
    roompaymentbank() {
        this._mytripService.isFlightPaymentBank = true;
        this.navCtrl.navigateForward("/mytrippaymentbank");
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
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
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
            var paymentTime = moment__WEBPACK_IMPORTED_MODULE_12__(temptime).format('YYYYMMDDHHmmss');
            var paymentDate = moment__WEBPACK_IMPORTED_MODULE_12__(data.booking.DeliveryPaymentDate).format('YYYYMMDDHHmmss');
            if (paymentTime < paymentDate) {
                se.buildLinkPaymentFlight().then((checkvalid) => {
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
    buildLinkPaymentFlight() {
        let se = this;
        return new Promise((resolve, reject) => {
            let url;
            url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + this.totalPrice + '&orderCode=' + se.bookingCode + '&buyerPhone=' + this.cus_phone + '&memberId=' + se.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
            se.gf.CreateUrl(url).then(dataBuildLink => {
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
MytripaymentflightselectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mytripaymentflightselect',
        template: __webpack_require__(/*! ./mytripaymentflightselect.page.html */ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.html"),
        styles: [__webpack_require__(/*! ./mytripaymentflightselect.page.scss */ "./src/app/mytripaymentflightselect/mytripaymentflightselect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _providers_flightService__WEBPACK_IMPORTED_MODULE_7__["flightService"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_10__["MytripService"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_11__["BizTravelService"]])
], MytripaymentflightselectPage);



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



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=mytripaymentflightselect-mytripaymentflightselect-module.js.map