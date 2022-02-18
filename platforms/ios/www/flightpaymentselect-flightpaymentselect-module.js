(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightpaymentselect-flightpaymentselect-module"],{

/***/ "./src/app/flightpaymentselect/flightpaymentselect.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentselect/flightpaymentselect.module.ts ***!
  \*******************************************************************/
/*! exports provided: FlightPaymentSelectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightPaymentSelectPageModule", function() { return FlightPaymentSelectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightpaymentselect.page */ "./src/app/flightpaymentselect/flightpaymentselect.page.ts");







const routes = [
    {
        path: '',
        component: _flightpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__["FlightPaymentSelectPage"]
    }
];
let FlightPaymentSelectPageModule = class FlightPaymentSelectPageModule {
};
FlightPaymentSelectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightpaymentselect_page__WEBPACK_IMPORTED_MODULE_6__["FlightPaymentSelectPage"]]
    })
], FlightPaymentSelectPageModule);



/***/ }),

/***/ "./src/app/flightpaymentselect/flightpaymentselect.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentselect/flightpaymentselect.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thanh toán</div>\n        </div>\n\n        <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n          ...\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-img-step m-bottom-16\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div class=\"cls-divpayment\">\n    \n    <div class=\"d-flex\" (click)=\"showFlightDetail()\">\n    \n        <div class=\"text-flight-title div-width-600 d-flex\">\n            <div>\n                <div>{{ itemflight.departCity }} ({{ itemflight.departCode }})</div>\n                <div class=\"text-flight-datetime\">{{ checkInDisplayFullYear }} </div>\n            </div>\n            <div class=\"div-flight-inout\">\n                <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"itemflight.roundTrip else oneway\">\n                <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"./assets/imgs/ic_arrow.svg\"></ng-template>\n            </div> \n            <div>\n                <div>{{ itemflight.returnCity }}  ({{ itemflight.returnCode }})</div>\n                <div class=\"text-flight-datetime\" *ngIf=\"itemflight.roundTrip\">{{ checkOutDisplayFullYear }} </div>\n            </div>\n        </div>\n      \n        <div class=\"div-width-60 v-align-center\" >\n           <img src=\"./assets/ic_flight/icon_down.svg\">\n        </div>\n    </div>\n    <!-- City Hotel -->\n    <div class=\"div-hotelcity\" *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected\">\n        <div class=\"div-hotel-name\">\n          <span>{{_flightService.itemFlightCache.objHotelCitySelected.HotelName}} \n            <span class=\"m-l-4\">\n              <img *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected.RatingStar\" src=\"{{_flightService.itemFlightCache.objHotelCitySelected.RatingStar}}\"/>\n            </span> \n          </span>\n        </div>\n        <div class=\"div-wrapimg img-list\" >\n          <img *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected.Avatar else noavatar\" class=\"img-avatar ava-list\" src=\"{{_flightService.itemFlightCache.objHotelCitySelected.Avatar}}\">\n          <ng-template #noavatar>\n            <img class=\"img-avatar ava-list\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-104x104.png\">\n          </ng-template>\n        </div>\n        \n          <div class=\"col-mytrip-text-description \">\n            <div class=\"text-left\">\n              <!-- check in, checkout -->\n              <ion-row class=\"row-height-listtrip p-top-4\" >\n                <ion-col size=\"1\" class=\"col-address\">\n                  <img class=\"img-height-12\" src=\"./assets/imgs/ic_date.svg\">\n                  \n                </ion-col>\n                <ion-col  class=\"col-address\">\n                  {{checkInDisplay}} → {{checkOutDisplay}}\n                </ion-col>\n              </ion-row>\n              <!-- pax -->\n            <ion-row class=\"row-height-listtrip\" *ngIf=\"totalPaxStr \">\n              <ion-col size=\"1\" class=\"col-address\">\n                <img src=\"./assets/imgs/ic_people.svg\">\n                \n              </ion-col>\n              <ion-col  class=\"col-address\">\n                {{totalPaxStr}}\n              </ion-col>\n            </ion-row>\n              <!-- Loại phòng -->\n            <ion-row class=\"row-height-listtrip\" *ngIf=\"totalRoom\">\n                  <ion-col size=\"1\"  class=\"col-address\">\n                    <img src=\"./assets/ic_facility/ic_food_b.svg\">\n                  </ion-col>\n                  <ion-col class=\"col-address\">\n                      <label>{{totalRoom}}</label>\n                  </ion-col>\n                </ion-row>\n          </div>\n        </div>\n    </div>\n    <!-- thêm đi chung nếu có -->\n    <div class=\"div-DC\" *ngIf=\"_flightService.itemFlightCache && _flightService.itemFlightCache.DICHUNGParam\">\n      <div class=\"text-DC\">\n        Dịch vụ thêm: <span class=\"text-DC text-bold\">Xe đưa đón sân bay</span>\n      </div>\n    </div>\n\n    <div class=\"div-DC\" *ngIf=\"_flightService.itemFlightCache && _flightService.itemFlightCache.priceCathay>0\">\n      <div class=\"text-DC\">\n        Dịch vụ thêm: <span class=\"text-DC text-bold\">Bảo hiểm trễ chuyến</span>\n      </div>\n    </div>\n    <div class=\"div-split\"></div>\n    <div class=\"d-flex \">\n      <div class=\"div-width-100\">\n          <div class=\"text-pax\">{{ adult }} người lớn</div>\n          <div class=\"text-pax\" *ngIf=\"child && child >0\">{{ child }} trẻ em</div>\n          <div class=\"text-pax\" *ngIf=\"infant && infant >0\">{{ infant }} em bé</div>\n      </div>\n      <div class=\"div-width-100 text-right m-bottom-16\" (click)=\"showPriceDetail()\">\n        <div class=\"text-total-price\">{{totalpricedisplay}}đ\n          <sup>\n            <img src=\"./assets/ic_green/ic_info.svg\">\n          </sup>\n        </div>\n        <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n        \n      </div>\n    </div>\n\n  </div>\n      <div class=\"div-split-panel\"></div>\n      <ion-list class=\"cls-list\">\n\n        <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" [ngClass]=\"blockPayCard ? 'cls-minheight h-54' : 'cls-minheight h-54'\">\n          <label  class=\"text-list m-bottom-8\">\n            Tài khoản công ty\n          </label>\n          <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - _flightService.itemFlightCache.totalPrice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - _flightService.itemFlightCache.totalPrice) >0\" class='m-right-16'></ion-icon>\n        </ion-item>\n\n        <ion-item (click)=\"flightpaymentatm()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight'\">\n            <label  class=\"text-list\">\n              Thẻ ATM nội địa /Internet Banking\n            </label>\n            <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"!blockPayCard\" class='m-right-16'></ion-icon>\n        </ion-item>\n        <ion-item [ngClass]=\"(arrbankrmb.length>0&&ischeckvisa) ? 'cls-minheight no-border-bottom ion-item1' : 'cls-minheight no-border-bottom ion-item1'  \" (click)=\"flightpaymentvisa()\">\n          <label  class=\"text-list ion-item1\" >\n            Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n          </label>\n          <ion-icon slot=\"end\"  *ngIf=\"!ischeckvisa && !blockPayCard\" name=\"ios-arrow-round-forward\" class='m-right-16'></ion-icon>\n          <img slot=\"end\"  *ngIf=\"ischeckvisa\" style=\"margin-right: -9px;\" src=\"./assets/imgs/ic_down.svg\">\n        </ion-item>\n        <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n          <ion-item *ngFor=\"let item of arrbankrmb\" [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n            <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n            <ion-label  class=\"text-list text-infobank ml8\">\n              {{item.name_Bank}}\n            </ion-label>\n            <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n              {{item.vpc_CardNum}}</ion-label>\n          </ion-item>\n          <ion-item [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n            <ion-label  class=\"text-list text-infobank ml8\">\n              Chọn tài khoản khác\n            </ion-label>\n            </ion-item>\n        </ion-radio-group>\n        <div style=\"margin-left: 15px;margin-bottom: 15px\">\n          <ion-checkbox [disabled]=\"isdisable\" (ionChange)=\"rememberCard()\"  class=\"ion-checkbox\" [checked]=\"isremember\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n        </div>\n        <div class=\"div-split-item\"></div>\n        <ion-item  (click)=\"flightpaymentmomo()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight' \">\n          <label class=\"text-list\">\n            Thanh toán qua  <img class=\"img-momo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" [ngClass]=\"blockPayCard ? 'm-right-16' : 'm-right-16' \" *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        \n        <ion-item (click)=\"flightpaymentpayooqr()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  [ngClass]=\"blockPayCard ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        \n        <ion-item  (click)=\"flightpaymentpayoostore()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  [ngClass]=\"blockPaylate ? 'm-right-16' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n          <div  class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n        <ion-item (click)=\"flightpaymentbank()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n            <label class=\"text-list\">\n              Chuyển khoản ngân hàng\n            </label>\n            <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" [ngClass]=\"blockPaylate ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n            <div class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n        <ion-item (click)=\"flightpaymentatoffice()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Trực tiếp tại văn phòng\n          </label>\n          <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" [ngClass]=\"blockPaylate ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n          <div class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n      </ion-list>\n</ion-content>\n<ion-footer *ngIf=\"isbtn && !blockPayCard\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán và xuất vé</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentselect/flightpaymentselect.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentselect/flightpaymentselect.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.sp-title {\n  color: #828282;\n}\n\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-split {\n  height: 0.5px;\n  background-color: #bdbdbd;\n  margin: 16px 0;\n}\n\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.image-card {\n  display: initial !important;\n}\n\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n\n.div-title {\n  margin-top: 15px;\n}\n\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.cls-list {\n  margin-left: -16px;\n}\n\n.cls-list .text-list {\n  height: 22px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.cls-divpayment {\n  margin-top: 10px;\n}\n\n.cls-divpayment .div-promotion-ticket {\n  margin: 23px 0px 16px 0px;\n}\n\n.cls-divpayment .div-promotion-ticket .lbl-promotion-ticket {\n  padding: 5px 14px 5px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 0 8px 0 rgba(38, 190, 214, 0.2);\n  background-color: #e52822;\n}\n\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-price-food {\n  text-align: right;\n}\n\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-star {\n  padding: 2px;\n}\n\n.img-payoo {\n  width: 50px;\n  vertical-align: middle;\n}\n\n.img-momo {\n  width: 32px;\n  position: absolute;\n  top: 6px;\n  margin-left: 100px;\n}\n\n.cls-minheight {\n  --min-height: 48px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.ml8 {\n  margin-left: 8px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n}\n\n.m-right-16 {\n  margin-right: -14px;\n}\n\n.div-img-step {\n  text-align: center;\n}\n\n.div-line {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.div-depart-title, .div-return-title {\n  font-size: 13px;\n  font-weight: 100;\n  line-height: 17px;\n  letter-spacing: -0.7px;\n  padding-left: 16px;\n}\n\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 18px;\n  width: 1px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 20px;\n  top: 63px;\n}\n\n.placepoint {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.point-top {\n  top: 55px;\n}\n\n.point-bottom {\n  top: 81px;\n}\n\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n\n.div-width-600 {\n  width: 600%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-flight-title {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-split {\n  margin: 16px 0;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n\n.img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n\n.div-split-item {\n  margin-left: 16px;\n  border-bottom: solid 1px #c8c7cc;\n}\n\n.no-border-bottom {\n  --border-style: none;\n}\n\n.item-disabled {\n  --background: #bdbdbd;\n  opacity: 0.5;\n  margin-right: -16px;\n}\n\n.text-hotfare {\n  color: #828282;\n  position: absolute;\n  bottom: 2px;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.logo-vna {\n  height: 34px !important;\n}\n\n::ng-deep .cls-alert-refreshPrice .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 14px !important;\n  overflow: hidden !important;\n}\n\n@media (min-width: 360px) and (max-width: 375px) {\n  ::ng-deep .text-flight-datetime {\n    font-size: 13px !important;\n  }\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.div-hotelcity .m-l-4 {\n  margin-left: 4px;\n}\n\n.div-hotelcity .div-hotel-name {\n  padding-top: 16px;\n  padding-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-hotelcity .img-height-12 {\n  height: 12px;\n}\n\n.div-hotelcity .div-wrapimg {\n  position: absolute;\n  height: 78px;\n  width: 104px;\n  overflow: hidden;\n}\n\n.div-hotelcity .div-wrapimg.img-list {\n  height: 104px;\n}\n\n.div-hotelcity .img-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-hotelcity .img-avatar.ava-list {\n  border-radius: 4px;\n}\n\n.div-hotelcity .col-mytrip-text-description, .div-hotelcity .col-historytrip-text-description {\n  padding-left: 112px;\n}\n\n.div-hotelcity .text-left {\n  font-size: 13px;\n}\n\n.div-hotelcity .row-height-listtrip {\n  height: 28px;\n}\n\n.div-hotelcity .col-address {\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.text-DC {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.div-DC {\n  margin-top: 17px;\n}\n\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodHBheW1lbnRzZWxlY3QvZmxpZ2h0cGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHBheW1lbnRzZWxlY3QvZmxpZ2h0cGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0FDRE47O0FESUU7RUFDSSwyQkFBQTtBQ0ROOztBREVNO0VBQ0UsZUFBQTtBQ0FSOztBRElFO0VBQ0UsY0FBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRE47O0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRSxjQUFBO0FDQU47O0FERUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDTjs7QURFSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBRENNO0VBRUUsY0FBQTtBQ0FSOztBREdJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREdJO0VBQ0UsMkJBQUE7QUNBTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ047O0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFUjs7QURBSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFUjs7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRU47O0FEQUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0dOOztBRERJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSU47O0FERkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBRUUsc0JBQUE7QUNNRjs7QURKQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNNRjs7QURKQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDTU47O0FESkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDVU47O0FEUkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2FKOztBRFhFO0VBQ0UsZ0JBQUE7QUNjSjs7QURiSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNlUjs7QURiSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNlUjs7QURiSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2VOOztBRFpBO0VBRUUsa0JBQUE7QUNjRjs7QURiSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNlTjs7QURaQTtFQUVFLGdCQUFBO0FDY0Y7O0FEWkU7RUFDRSx5QkFBQTtBQ2NKOztBRFpNO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EseUJBQUE7QUNhUjs7QURUQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNXRjs7QURSQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEUkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFJBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNVRjs7QURQQTtFQUVJLGlCQUFBO0FDU0o7O0FEUEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNTRjs7QURQQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FEUEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7RUFFRSxXQUFBO0VBQ0Esc0JBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBRUUsa0JBQUE7QUNVRjs7QURSQTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ1VGOztBRFJBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDVVI7O0FEUkk7RUFFRSxnQkFBQTtBQ1VOOztBRFJJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNVUjs7QUROSTtFQUNFLG1CQUFBO0FDU047O0FEUEk7RUFDRSxrQkFBQTtBQ1VOOztBRFJJO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDV047O0FEVEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNZTjs7QURWVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2FaOztBRFhVO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDY2Q7O0FEWFU7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNjZDs7QURaVTtFQUNFLFNBQUE7QUNlWjs7QURiVTtFQUNFLFNBQUE7QUNnQlo7O0FEWkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNlUjs7QURiUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ2VWOztBRFpNO0VBQ0UsV0FBQTtBQ2VSOztBRGJNO0VBQ0UsVUFBQTtBQ2dCUjs7QURkTTtFQUNFLGlCQUFBO0FDaUJSOztBRGZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNrQlI7O0FEZk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2tCUjs7QURoQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ21CUjs7QURqQk07RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNvQlI7O0FEbEJNO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ3FCUjs7QURqQk07RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FDb0JSOztBRGpCTTtFQUNFLG9CQUFBO0FDb0JSOztBRGpCTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDb0JSOztBRGxCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDcUJSOztBRGxCTTtFQUNFLHVCQUFBO0FDcUJSOztBRGxCRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFFQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLG1GQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNxQko7O0FEaEJFO0VBQ0U7SUFDSSwwQkFBQTtFQ21CTjtBQUNGOztBRGhCQTtFQUVFLHNCQUFBO0FDa0JGOztBRGhCQTtFQUVFLCtCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNvQkY7O0FEbEJBO0VBRUUsK0JBQUE7QUNvQkY7O0FEaEJFO0VBQ0UsZ0JBQUE7QUNtQko7O0FEaEJFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDa0JKOztBRGhCRTtFQUNFLFlBQUE7QUNrQko7O0FEaEJJO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCSTtFQUNJLGFBQUE7QUNrQlI7O0FEaEJJO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDa0JSOztBRGhCSTtFQUNJLGtCQUFBO0FDa0JSOztBRGhCSTtFQUNJLG1CQUFBO0FDa0JSOztBRGZJO0VBQ0UsZUFBQTtBQ2lCTjs7QURmRztFQUNDLFlBQUE7QUNpQko7O0FEZkc7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDaUJKOztBRGJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNnQkY7O0FEZEM7RUFDRSxpQkFBQTtBQ2lCSDs7QURmQztFQUNFLGdCQUFBO0FDa0JIOztBRGhCQztFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNrQkgiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRwYXltZW50c2VsZWN0L2ZsaWdodHBheW1lbnRzZWxlY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBcclxuICAgIC5kLWZsZXh7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXYtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xyXG4gICAgICAuZGl2LXRpdGxle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgLnNwLXRpdGxle1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zdWJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICB9XHJcblxyXG4gIC5kaXYtc3BsaXR7XHJcbiAgICAgIGhlaWdodDogMC41cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XHJcbiAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gIH1cclxuICAudGV4dC1wYXh7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICB9XHJcbiAgLnRleHQtdG90YWwtcHJpY2V7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gIH1cclxuXHJcbiAgICAudGV4dC1uYW1lXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIC50ZXh0LWdyZWVuXHJcbiAgICAgIHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAudGV4dC1kYXRlXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweFxyXG4gICAgfVxyXG4gICAgLmltYWdlLWNhcmR7XHJcbiAgICAgIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZXtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIH1cclxuICAgIC50b3RhbC1wcmljZS1ke1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgfVxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuXHJcbiAgICB9XHJcbiAgICAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwNHB4O1xyXG4gICAgfVxyXG4gICAgLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XHJcbiAgICB9XHJcbiAgICAudGV4dC1yb29tLXByaWNlLW90YXtcclxuICAgICAgY29sb3I6IzgyODI4MjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIG1hcmdpbjogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIC50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9ICBcclxuICAuZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0Ojg3cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbmhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5jbHMtaHJcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDoyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XHJcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudHtcclxuICAgIG1heC13aWR0aDogMTg4cHg7XHJcbiAgICBsZWZ0OiAxMnB4O1xyXG4gIH1cclxuXHJcbn1cclxuLnRleHQtaW5mb2NhclxyXG57XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG59XHJcbi50ZXh0LWxvY2F0aW9uXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwe1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICNlYzk3MWY7XHJcbiAgfVxyXG4gIC5kaXYtdGl0bGV7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXN1Yi10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi5jbHMtbGlzdFxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgLnRleHQtbGlzdHtcclxuICAgICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gICAgfVxyXG59XHJcbi5jbHMtZGl2cGF5bWVudFxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgLmRpdi1wcm9tb3Rpb24tdGlja2V0e1xyXG4gICAgbWFyZ2luOiAyM3B4IDBweCAxNnB4IDBweDtcclxuXHJcbiAgICAgIC5sYmwtcHJvbW90aW9uLXRpY2tldHtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTRweCA1cHggMTJweDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDM4LCAxOTAsIDIxNCwgMC4yKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbi50ZXh0LXBcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzRmNGY0ZjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG59XHJcblxyXG4uY2xzLXJvd2hlaWdodDFcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gIGhlaWdodDogODFweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcbi50ZXh0LW5vdGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4udGV4dC1wcmljZS1mb29kXHJcbntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi50ZXh0LXRheFxyXG57XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtZFxyXG57XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi50ZXh0LXRvdGFsXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBcclxufVxyXG4uZGl2LXN0YXJ7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcbi5pbWctcGF5b29cclxue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmltZy1tb21ve1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA2cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuLmNscy1taW5oZWlnaHRcclxue1xyXG4gIC0tbWluLWhlaWdodDogNDhweDtcclxufVxyXG4uaW9uLWl0ZW1cclxue1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgLS1taW4taGVpZ2h0OiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbn1cclxuLmltZ2NhcmRcclxue1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMTIuOHB4O1xyXG59XHJcbi50ZXh0LWluZm9iYW5rXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB9XHJcbiAgICAubWw4XHJcbiAgICB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9IFxyXG5cclxuICAgIC8vLy8vLy8vL0BleHRlbmQucGxhY2VsaW5lXHJcbiAgICAubS1yaWdodC0xNntcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAtMTRweDtcclxuICAgIH1cclxuICAgIC5kaXYtaW1nLXN0ZXB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtbGluZXtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcclxuICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIH1cclxuICAgIC5kaXYtZGVwYXJ0LXRpdGxlLCAuZGl2LXJldHVybi10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gICAgICAgICAgLnBsYWNlbGluZXsgICBcclxuICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMS41cHggI2JkYmRiZDtcclxuICAgICAgICAgICAgbGVmdDogMjBweDtcclxuICAgICAgICAgICAgdG9wOiA2M3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBsYWNlcG9pbnR7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBsYWNlcG9pbnQtcmV0dXJue1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9pbnQtdG9we1xyXG4gICAgICAgICAgICB0b3A6IDU1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucG9pbnQtYm90dG9te1xyXG4gICAgICAgICAgICB0b3A6IDgxcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8vLy8vLy8vLy8vXHJcbiAgICAuZGl2LWZsaWdodC1pbm91dHtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMThweDtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gICAgICAgIC5pbWctZmxpZ2h0LWlub3V0e1xyXG4gICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZGl2LXdpZHRoLTYwMHtcclxuICAgICAgICB3aWR0aDogNjAwJTtcclxuICAgICAgfVxyXG4gICAgICAuZGl2LXdpZHRoLTYwe1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtcmlnaHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRleHQtZmxpZ2h0LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIH1cclxuICAgICAgLnYtYWxpZ24tY2VudGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAuZGl2LXNwbGl0e1xyXG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XHJcbiAgICAgIH1cclxuICAgICAgLmltZy1vbmV3YXl7XHJcbiAgICAgICAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8vLy8vLy8vL0BleHRlbmQgXHJcbiAgICAgIC5kaXYtc3BsaXQtaXRlbXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5vLWJvcmRlci1ib3R0b217XHJcbiAgICAgICAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pdGVtLWRpc2FibGVke1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2JkYmRiZDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1ob3RmYXJle1xyXG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ28tdm5he1xyXG4gICAgICAgIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbjo6bmctZGVlcHtcclxuICAuY2xzLWFsZXJ0LXJlZnJlc2hQcmljZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXRvcDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCMzODgwZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuICAgICAgXHJcbjo6bmctZGVlcHtcclxuICBAbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgLnRleHQtZmxpZ2h0LWRhdGV0aW1le1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5oclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uaW9uLWl0ZW0xXHJcbntcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG59XHJcbi5sYWJlbC1pbnB1dHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pb24tY2hlY2tib3h7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogLTJweDtcclxufVxyXG4uaW9uLWl0ZW0xXHJcbntcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG59XHJcbiAgICBcclxuLmRpdi1ob3RlbGNpdHl7XHJcbiAgLm0tbC00e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICB9XHJcblxyXG4gIC5kaXYtaG90ZWwtbmFtZXtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmltZy1oZWlnaHQtMTJ7XHJcbiAgICBoZWlnaHQ6MTJweFxyXG4gIH1cclxuICAgIC5kaXYtd3JhcGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6NzhweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuZGl2LXdyYXBpbWcuaW1nLWxpc3R7XHJcbiAgICAgICAgaGVpZ2h0OjEwNHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy1hdmF0YXIge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gICAgLmltZy1hdmF0YXIuYXZhLWxpc3R7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbC1teXRyaXAtdGV4dC1kZXNjcmlwdGlvbiwuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb257XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMTJweDtcclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1sZWZ0e1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgIH1cclxuICAgLnJvdy1oZWlnaHQtbGlzdHRyaXB7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgIH1cclxuICAgLmNvbC1hZGRyZXNze1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgIH1cclxuICBcclxufVxyXG4udGV4dC1EQ3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gfVxyXG4gLnRleHQtYm9sZHtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiB9XHJcbiAuZGl2LURDe1xyXG4gICBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gfVxyXG4gLmltZy12aXNhXHJcbiB7XHJcbiAgIHdpZHRoOiAxMThweDtcclxuICAgaGVpZ2h0OiAyMnB4O1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gfVxyXG4iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWhlYWRlci10aXRsZSAuZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uc3AtdGl0bGUge1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLnRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtc3BsaXQge1xuICBoZWlnaHQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xuICBtYXJnaW46IDE2cHggMDtcbn1cblxuLnRleHQtcGF4IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLnRleHQtdG90YWwtcHJpY2Uge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGV4dC1uYW1lIC50ZXh0LWdyZWVuIHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWRhdGUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbWFnZS1jYXJkIHtcbiAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4udG90YWwtcHJpY2Uge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4udG90YWwtcHJpY2UtZCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbn1cblxuLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcbiAgcG9zaXRpb246IHN0YXRpYztcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xufVxuXG4udGV4dC1yb29tLXByaWNlLW90YSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDg3cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5jbHMtaHIge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAyODdweCkgYW5kIChtYXgtd2lkdGg6IDM1OXB4KSB7XG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnQge1xuICAgIG1heC13aWR0aDogMTg4cHg7XG4gICAgbGVmdDogMTJweDtcbiAgfVxufVxuLnRleHQtaW5mb2NhciB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDdweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1sb2NhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1kZXBhcnR1cmUtdGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3duIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cblxuLmZsaWdodC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjZWM5NzFmO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2xzLWxpc3Qge1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG59XG4uY2xzLWxpc3QgLnRleHQtbGlzdCB7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmNscy1kaXZwYXltZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jbHMtZGl2cGF5bWVudCAuZGl2LXByb21vdGlvbi10aWNrZXQge1xuICBtYXJnaW46IDIzcHggMHB4IDE2cHggMHB4O1xufVxuLmNscy1kaXZwYXltZW50IC5kaXYtcHJvbW90aW9uLXRpY2tldCAubGJsLXByb21vdGlvbi10aWNrZXQge1xuICBwYWRkaW5nOiA1cHggMTRweCA1cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMzgsIDE5MCwgMjE0LCAwLjIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUyODIyO1xufVxuXG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmNscy1yb3doZWlnaHQxIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGhlaWdodDogODFweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LXByaWNlLWZvb2Qge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtdGF4IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xufVxuXG4udGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtc3RhciB7XG4gIHBhZGRpbmc6IDJweDtcbn1cblxuLmltZy1wYXlvbyB7XG4gIHdpZHRoOiA1MHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uaW1nLW1vbW8ge1xuICB3aWR0aDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDZweDtcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuXG4uY2xzLW1pbmhlaWdodCB7XG4gIC0tbWluLWhlaWdodDogNDhweDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLmltZ2NhcmQge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAxMi44cHg7XG59XG5cbi50ZXh0LWluZm9iYW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5tbDgge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xufVxuXG4ubS1yaWdodC0xNiB7XG4gIG1hcmdpbi1yaWdodDogLTE0cHg7XG59XG5cbi5kaXYtaW1nLXN0ZXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kaXYtbGluZSB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5kaXYtZGVwYXJ0LXRpdGxlLCAuZGl2LXJldHVybi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnBsYWNlbGluZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogMXB4O1xuICBib3JkZXItbGVmdDogZG90dGVkIDEuNXB4ICNiZGJkYmQ7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogNjNweDtcbn1cblxuLnBsYWNlcG9pbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5wbGFjZXBvaW50LXJldHVybiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbGVmdDogMTdweDtcbn1cblxuLnBvaW50LXRvcCB7XG4gIHRvcDogNTVweDtcbn1cblxuLnBvaW50LWJvdHRvbSB7XG4gIHRvcDogODFweDtcbn1cblxuLmRpdi1mbGlnaHQtaW5vdXQge1xuICBwYWRkaW5nOiAwcHggMThweDtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1mbGlnaHQtaW5vdXQgLmltZy1mbGlnaHQtaW5vdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTJweDtcbn1cblxuLmRpdi13aWR0aC02MDAge1xuICB3aWR0aDogNjAwJTtcbn1cblxuLmRpdi13aWR0aC02MCB7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LWZsaWdodC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udi1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xufVxuXG4uaW1nLW9uZXdheSB7XG4gIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xufVxuXG4uZGl2LXNwbGl0LWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM3Y2M7XG59XG5cbi5uby1ib3JkZXItYm90dG9tIHtcbiAgLS1ib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi5pdGVtLWRpc2FibGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICBvcGFjaXR5OiAwLjU7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWhvdGZhcmUge1xuICBjb2xvcjogIzgyODI4MjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDJweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLmxvZ28tdm5hIHtcbiAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuY2xzLWFsZXJ0LXJlZnJlc2hQcmljZSAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3Mge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIDo6bmctZGVlcCAudGV4dC1mbGlnaHQtZGF0ZXRpbWUge1xuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICB9XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmlvbi1pdGVtMSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5pb24taXRlbTEge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4uZGl2LWhvdGVsY2l0eSAubS1sLTQge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLmRpdi1ob3RlbC1uYW1lIHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi1ob3RlbGNpdHkgLmltZy1oZWlnaHQtMTIge1xuICBoZWlnaHQ6IDEycHg7XG59XG4uZGl2LWhvdGVsY2l0eSAuZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNzhweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRpdi1ob3RlbGNpdHkgLmRpdi13cmFwaW1nLmltZy1saXN0IHtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5pbWctYXZhdGFyIHtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cbi5kaXYtaG90ZWxjaXR5IC5pbWctYXZhdGFyLmF2YS1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLmNvbC1teXRyaXAtdGV4dC1kZXNjcmlwdGlvbiwgLmRpdi1ob3RlbGNpdHkgLmNvbC1oaXN0b3J5dHJpcC10ZXh0LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiAxMTJweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC50ZXh0LWxlZnQge1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uZGl2LWhvdGVsY2l0eSAucm93LWhlaWdodC1saXN0dHJpcCB7XG4gIGhlaWdodDogMjhweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5jb2wtYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGV4dC1EQyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LURDIHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cblxuLmltZy12aXNhIHtcbiAgd2lkdGg6IDExOHB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/flightpaymentselect/flightpaymentselect.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightpaymentselect/flightpaymentselect.page.ts ***!
  \*****************************************************************/
/*! exports provided: FlightPaymentSelectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightPaymentSelectPage", function() { return FlightPaymentSelectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../flightpricedetail/flightpricedetail.page */ "./src/app/flightpricedetail/flightpricedetail.page.ts");
/* harmony import */ var _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/background-mode/ngx */ "./node_modules/@ionic-native/background-mode/ngx/index.js");
/* harmony import */ var _flightbookingdetails_flightbookingdetails_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../flightbookingdetails/flightbookingdetails.page */ "./src/app/flightbookingdetails/flightbookingdetails.page.ts");
/* harmony import */ var _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../flightquickback/flightquickback.page */ "./src/app/flightquickback/flightquickback.page.ts");
/* harmony import */ var _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../providers/CustomAnimations */ "./src/app/providers/CustomAnimations.ts");
/* harmony import */ var _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");

















let FlightPaymentSelectPage = class FlightPaymentSelectPage {
    constructor(navCtrl, _flightService, gf, loadingCtrl, searchhotel, safariViewController, storage, modalCtrl, platform, backgroundmode, alertCtrl, zone, bizTravelService) {
        this.navCtrl = navCtrl;
        this._flightService = _flightService;
        this.gf = gf;
        this.loadingCtrl = loadingCtrl;
        this.searchhotel = searchhotel;
        this.safariViewController = safariViewController;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.backgroundmode = backgroundmode;
        this.alertCtrl = alertCtrl;
        this.zone = zone;
        this.bizTravelService = bizTravelService;
        this.listmenu = [];
        this.ischeckvisa = false;
        this.arrbankrmb = [];
        this.bookingCode = "";
        this.ischeckpay = true;
        this.isbtn = false;
        this.paymentfirst = false;
        this.allowCheckHoldTicket = true;
        this.isremember = true;
        this.isdisable = false;
        if (this._flightService.itemFlightCache) {
            this.showline = this._flightService.itemFlightCache.roundTrip ? true : false;
            this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
            this.startDate = moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.checkInDate).format('YYYY-MM-DD');
            this.endDate = moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.checkOutDate).format('YYYY-MM-DD');
            if (this._flightService.itemFlightCache.pnr) {
                this.blockPaylate = this._flightService.itemFlightCache.pnr.blockPaylate;
                this.blockPayCard = this._flightService.itemFlightCache.pnr.blockPayCard;
            }
            this.adult = this._flightService.itemFlightCache.adult;
            this.child = this._flightService.itemFlightCache.child;
            this.infant = this._flightService.itemFlightCache.infant;
            this.totalpricedisplay = this._flightService.itemFlightCache.totalPriceDisplay;
            this.departtitle = this._flightService.itemFlightCache.departPaymentTitleDisplay + moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.departFlight.departTime).format("HH:mm") + " - " + moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.departFlight.landingTime).format("HH:mm") + " · " + this._flightService.itemFlightCache.departFlight.airlineCode;
            if (this._flightService.itemFlightCache.returnFlight) {
                this.returntitle = this._flightService.itemFlightCache.returnPaymentTitleDisplay + moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.returnFlight.departTime).format("HH:mm") + " - " + moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.returnFlight.landingTime).format("HH:mm") + " · " + this._flightService.itemFlightCache.returnFlight.airlineCode;
            }
            this.itemflight = this._flightService.itemFlightCache;
            this.checkInDisplayFullYear = this.itemflight.departTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.itemflight.departFlight.departTime).format("YYYY");
            if (this._flightService.itemFlightCache.returnFlight) {
                this.checkOutDisplayFullYear = this.itemflight.returnTimeDisplay + ", " + moment__WEBPACK_IMPORTED_MODULE_8__(this.itemflight.returnFlight.departTime).format("YYYY");
            }
            if (this._flightService.itemFlightCache.objHotelCitySelected) {
                let itemhotel = this._flightService.itemFlightCache.objHotelCitySelected;
                this.checkInDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.checkInDate).format('DD-MM-YYYY');
                this.checkOutDisplay = moment__WEBPACK_IMPORTED_MODULE_8__(this._flightService.itemFlightCache.checkOutDate).format('DD-MM-YYYY');
                this.totalPaxStr = "" + this.adult + " người lớn" + (this.child ? (" | " + this.child + "trẻ em") : "") + (this.infant ? (" | " + this.infant + "em bé") : "");
                this.totalRoom = "" + itemhotel.TotalRoom + "x" + itemhotel.RoomName + (itemhotel.BreakfastIncludeName ? (" | " + itemhotel.BreakfastIncludeName) : "");
            }
        }
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
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo', headers, {}, 'flightpaymentselect', 'initpage').then((data) => {
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
        this.platform.ready().then(() => {
            this.backgroundmode.on('activate').subscribe(() => {
                this.backgroundmode.enable();
                setTimeout(() => {
                    clearInterval(this.intervalID);
                }, 1000 * 60 * 10);
            });
        });
        _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writePaymentLog("flight", "paymentselect", "purchase", this.bookingCode);
    }
    showPriceDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightpricedetail_flightpricedetail_page__WEBPACK_IMPORTED_MODULE_11__["FlightpricedetailPage"],
            });
            modal.present();
        });
    }
    checkpayment() {
        var ti = new Date();
        var thu = moment__WEBPACK_IMPORTED_MODULE_8__(ti).format('dddd');
        var hours = moment__WEBPACK_IMPORTED_MODULE_8__(ti).format('HHmm');
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
    gobackpage() {
        this._flightService.itemFlightCache.backtochoiceseat = false;
        this.navCtrl.navigateBack('flightadddetails');
    }
    gotoaddservicepage() {
        this._flightService.itemFlightCache.backtochoiceseat = true;
        this._flightService.itemResetCheckSeat.emit(1);
        this.navCtrl.navigateBack('flightadddetails');
    }
    goback() {
        var se = this;
        se._flightService.itemFlightCache.hasvoucher = se._flightService.itemFlightCache.promotionCode;
        se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg) => {
            let data = se._flightService.itemFlightCache;
            let dataancinaly = databkg.paxInfo.passengers[0].ancillaryJson ? JSON.parse(databkg.paxInfo.passengers[0].ancillaryJson) : '';
            let dataancinalyReturn = databkg.paxInfo.passengers[0].ancillaryReturnJson ? JSON.parse(databkg.paxInfo.passengers[0].ancillaryReturnJson) : '';
            if (dataancinaly || dataancinalyReturn) {
                let ancinaly, ancinalyreturn;
                if (dataancinaly && dataancinaly.length > 0) {
                    ancinaly = dataancinaly;
                }
                if (dataancinalyReturn && dataancinalyReturn.length > 0) {
                    ancinalyreturn = dataancinalyReturn;
                }
                let checkseat = false, checkseatreturn = false;
                if (ancinaly && ancinaly.length > 0) {
                    checkseat = ancinaly.some((item) => { return item.Type == "Seat"; });
                }
                if (ancinalyreturn && ancinalyreturn.length > 0) {
                    checkseatreturn = ancinalyreturn.some((item) => { return item.Type == "Seat"; });
                }
                if (data.ischeckpayment == 0) {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && (checkseat || checkseatreturn)) {
                            se.gotoaddservicepage();
                        }
                        else {
                            se.gobackpage();
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && checkseat) {
                            se.gotoaddservicepage();
                        }
                        else {
                            se.gobackpage();
                        }
                    }
                }
                else {
                    if (databkg.isRoundTrip) {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg.returnFlight.atBookingCode != null && databkg.returnFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && (checkseat || checkseatreturn)) {
                            se.gotoaddservicepage();
                        }
                        else {
                            se.gobackpage();
                        }
                    }
                    else {
                        if (databkg.departFlight.atBookingCode != null && databkg.departFlight.atBookingCode.indexOf("T__") == -1
                            && databkg && !databkg.expIssueTicket && databkg.urlPaymentAgain && checkseat) {
                            se.gotoaddservicepage();
                        }
                        else {
                            se.gobackpage();
                        }
                    }
                }
            }
            else {
                se.gobackpage();
            }
        });
    }
    flightpaymentbank() {
        if (this.blockPaylate) {
            return;
        }
        this.presentLoading();
        this.checkAllowRepay().then((check) => {
            if (check) {
                clearInterval(this.intervalID);
                this.navCtrl.navigateForward('flightpaymentbank');
                this.hideLoading();
            }
            else {
                this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                    if (check) {
                        clearInterval(this.intervalID);
                        this.navCtrl.navigateForward('flightpaymentbank');
                        this.hideLoading();
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                        clearInterval(this.intervalID);
                        this.hideLoading();
                    }
                });
            }
        });
    }
    flightpaymentatm() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        this.checkAllowRepay().then((check) => {
            if (check) {
                clearInterval(this.intervalID);
                this.navCtrl.navigateForward('flightpaymentchoosebank');
                this.hideLoading();
            }
            else {
                this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                    if (check) {
                        clearInterval(this.intervalID);
                        this.navCtrl.navigateForward('flightpaymentchoosebank');
                        this.hideLoading();
                    }
                    else {
                        this.hideLoading();
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                        clearInterval(this.intervalID);
                    }
                });
            }
        });
    }
    flightpaymentvisa() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        this.checkAllowRepay().then((check) => {
            if (check) {
                clearInterval(this.intervalID);
                this.GeTokensOfMember(1);
            }
            else {
                this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                    if (check) {
                        clearInterval(this.intervalID);
                        this.GeTokensOfMember(1);
                    }
                    else {
                        this.hideLoading();
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                        clearInterval(this.intervalID);
                    }
                });
            }
        });
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
                    se._flightService.itemFlightCache.hasvoucher = se._flightService.itemFlightCache.promotionCode;
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                        if (se._flightService.itemFlightCache.objHotelCitySelected) {
                            se.checkComboHotelCityPayment();
                        }
                        else {
                            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se._flightService.itemFlightCache.reservationId;
                            se.gf.Checkpayment(url).then((datapayment) => {
                                let checkpay = JSON.parse(datapayment);
                                if (checkpay.ipnCall == "CALLED_OK") {
                                    se._flightService.itemFlightCache.ischeckpayment = 1;
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg) => {
                                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                                    });
                                    se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                                }
                                else {
                                    se.hideLoading();
                                    se.gf.hideLoading();
                                    se.safariViewController.hide();
                                    clearInterval(se.intervalID);
                                    se._flightService.paymentError = checkpay;
                                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
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
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
            qs: { code: se.bookingCode },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "flightpaymentselect",
                    func: "checkComboHotelCityPayment",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "flightpaymentselect";
                error.func = "checkComboHotelCityPayment";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
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
                    se.getSummaryBooking(se._flightService.itemFlightCache).then((databkg) => {
                        se._flightService.itemFlightCache.dataSummaryBooking = databkg;
                    });
                    se.navCtrl.navigateForward('flightpaymentdone/' + se.bookingCode + '/' + se.startDate + '/' + se.endDate);
                }
                else if (rs.error) {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    console.log(rs);
                    se._flightService.paymentError = rs.error;
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                }
            }
            else {
                error.page = "roomchoosebank";
                error.func = "mCheckBooking";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                se.hideLoading();
                se.gf.hideLoading();
                se.safariViewController.hide();
                clearInterval(se.intervalID);
                console.log(rs);
                se._flightService.paymentError = "";
                se.navCtrl.navigateForward('/flightpaymenttimeout/0');
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    hideLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.loader) {
                this.loader.dismiss();
            }
        });
    }
    flightpaymentmomo() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        this.checkAllowRepay().then((check) => {
            if (check) {
                clearInterval(this.intervalID);
                this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 4, "", "").then(datatype => {
                    if (datatype && datatype.isHoldSuccess) {
                        this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                        let itemcache = this._flightService.itemFlightCache;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight' + '&memberId=' + this.jti;
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                this.openWebpage(datapayoo.returnUrl.payUrl);
                                this.zone.run(() => {
                                    this.setinterval(null);
                                });
                            }
                            else {
                                this.hideLoading();
                                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                            }
                        });
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        clearInterval(this.intervalID);
                        this.hideLoading();
                    }
                });
            }
            else {
                this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                    if (check) {
                        this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 4, "", "").then(datatype => {
                            if (datatype && datatype.isHoldSuccess) {
                                this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                                let itemcache = this._flightService.itemFlightCache;
                                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone + '&rememberToken=' + this.isremember + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight' + '&memberId=' + this.jti;
                                this.gf.CreatePayoo(url).then(datapayoo => {
                                    datapayoo = JSON.parse(datapayoo);
                                    if (datapayoo.success) {
                                        this.openWebpage(datapayoo.returnUrl.payUrl);
                                        this.zone.run(() => {
                                            this.setinterval(null);
                                        });
                                    }
                                    else {
                                        this.hideLoading();
                                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                                    }
                                });
                            }
                            else {
                                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                                clearInterval(this.intervalID);
                                this.hideLoading();
                            }
                        });
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                        clearInterval(this.intervalID);
                    }
                });
            }
        });
    }
    setinterval(timeout) {
        if (this.loader) {
            this.loader.dismiss();
        }
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => {
            if (this._flightService.itemFlightCache.objHotelCitySelected) {
                this.checkComboHotelCityPayment();
            }
            else {
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + this._flightService.itemFlightCache.reservationId;
                this.zone.run(() => {
                    this.gf.Checkpayment(url).then((data) => {
                        var checkpay = JSON.parse(data);
                        if (checkpay.ipnCall == "CALLED_OK") {
                            this._flightService.itemFlightCache.ischeckpayment = 1;
                            this.hideLoading();
                            this.gf.hideLoading();
                            this.safariViewController.hide();
                            clearInterval(this.intervalID);
                            this.getSummaryBooking(this._flightService.itemFlightCache).then((databkg) => {
                                this._flightService.itemFlightCache.dataSummaryBooking = databkg;
                            });
                            this.navCtrl.navigateForward('flightpaymentdone/' + this.bookingCode + '/' + this.startDate + '/' + this.endDate);
                        }
                        else if (checkpay.ipnCall == "CALLED_TIMEOUT" || checkpay.ipnCall == "CALLED_FAIL") {
                            this.hideLoading();
                            this.gf.hideLoading();
                            this.safariViewController.hide();
                            clearInterval(this.intervalID);
                            this._flightService.paymentError = checkpay;
                            this.navCtrl.navigateForward('/flightpaymenttimeout/0');
                        }
                    });
                });
            }
        }, 1000 * 1);
        setTimeout(() => {
            clearInterval(this.intervalID);
        }, timeout ? timeout : 60000 * 9.1);
    }
    callCheckHoldTicket(url, data) {
        var res = false;
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
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
                        if (data.ischeckpayment == 0) {
                            if (result.isRoundTrip) {
                                if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1 && result.returnFlight.atBookingCode != null && result.returnFlight.atBookingCode.indexOf("T__") == -1) {
                                    resolve(true);
                                }
                                else {
                                    resolve(false);
                                }
                            }
                            else {
                                if (result.departFlight.atBookingCode != null && result.departFlight.atBookingCode.indexOf("T__") == -1) {
                                    resolve(true);
                                }
                                else {
                                    resolve(false);
                                }
                            }
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
                }
            });
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
                    if (this.bookingCode) {
                        this.NoCreateBooking();
                    }
                }
            }
        });
    }
    next() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        if (this.bookingCode) {
            this.NoCreateBooking();
        }
    }
    chooseacc(item) {
        if (this.blockPayCard) {
            return;
        }
        this.tokenid = item.id;
        this.isbtn = true;
        this.isdisable = true;
        this.isremember = true;
    }
    nochooseacc() {
        if (this.blockPayCard) {
            return;
        }
        this.tokenid = "";
        this.isbtn = true;
        this.isdisable = false;
        this.isremember = true;
    }
    NoCreateBooking() {
        var se = this;
        se.gf.updatePaymentMethod(se._flightService.itemFlightCache, 3, "", "").then(datatype => {
            if (datatype && datatype.isHoldSuccess) {
                se._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                let itemcache = se._flightService.itemFlightCache;
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookingCode + '&buyerPhone=' + itemcache.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                se.gf.CreatePayoo(url).then(datapayoo => {
                    datapayoo = JSON.parse(datapayoo);
                    if (datapayoo.success) {
                        se._flightService.itemFlightCache.ischeckpayment = 1;
                        se.openWebpage(datapayoo.returnUrl);
                        se.setinterval(null);
                    }
                    else {
                        se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                        se.hideLoading();
                    }
                });
            }
            else {
                se.gf.showAlertOutOfTicket(se._flightService.itemFlightCache, 2);
                clearInterval(se.intervalID);
                se.hideLoading();
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
    flightpaymentpayoostore() {
        if (this.blockPaylate) {
            return;
        }
        this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
            if (check) {
                this.presentLoading();
                this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 5, "", "").then(datatype => {
                    if (datatype && datatype.isHoldSuccess) {
                        let itemcache = this._flightService.itemFlightCache;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_store&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti;
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            this.hideLoading();
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                this._flightService.itemFlightCache.BillingCode = datapayoo.payooStoreData.BillingCode;
                                this._flightService.itemFlightCache.periodPaymentDate = datapayoo.payooStoreData.periodPayment;
                                console.log(this._flightService.itemFlightCache.periodPaymentDate);
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/0');
                            }
                        });
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        clearInterval(this.intervalID);
                        this.hideLoading();
                    }
                });
            }
            else {
                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                clearInterval(this.intervalID);
                this.hideLoading();
            }
        });
    }
    flightpaymentpayooqr() {
        if (this.blockPayCard) {
            return;
        }
        this.presentLoading();
        this.checkAllowRepay().then((check) => {
            if (check) {
                this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 6, "", "").then(datatype => {
                    if (datatype && datatype.isHoldSuccess) {
                        let itemcache = this._flightService.itemFlightCache;
                        this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti;
                        this.gf.CreatePayoo(url).then(datapayoo => {
                            this.hideLoading();
                            datapayoo = JSON.parse(datapayoo);
                            if (datapayoo.success) {
                                this._flightService.itemFlightCache.qrimg = datapayoo.payooQrData.QRCodeUrl;
                                this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/1');
                            }
                            else {
                                this.hideLoading();
                                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                            }
                        });
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        clearInterval(this.intervalID);
                        this.hideLoading();
                    }
                });
            }
            else {
                this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                    if (check) {
                        this.gf.updatePaymentMethod(this._flightService.itemFlightCache, 6, "", "").then(datatype => {
                            if (datatype && datatype.isHoldSuccess) {
                                let itemcache = this._flightService.itemFlightCache;
                                this._flightService.itemFlightCache.periodPaymentDate = datatype.periodPaymentDate;
                                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti;
                                this.gf.CreatePayoo(url).then(datapayoo => {
                                    this.hideLoading();
                                    datapayoo = JSON.parse(datapayoo);
                                    if (datapayoo.success) {
                                        this._flightService.itemFlightCache.qrimg = datapayoo.payooQrData.QRCodeUrl;
                                        if (this.loader) {
                                            this.loader.dismiss();
                                        }
                                        this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/1');
                                    }
                                    else {
                                        this.hideLoading();
                                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                                    }
                                });
                            }
                            else {
                                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                                clearInterval(this.intervalID);
                                this.hideLoading();
                            }
                        });
                    }
                    else {
                        this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                        clearInterval(this.intervalID);
                    }
                });
            }
        });
    }
    callCheckPayment() {
        var se = this;
        se.checkpayment();
    }
    checkPayment() {
        var se = this;
        if (se._flightService.itemFlightCache && se._flightService.itemFlightCache.reservationId) {
            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/PaymentCheck?id=" + se._flightService.itemFlightCache.reservationId;
            se.gf.Checkpayment(url).then((data) => {
                var checkpay = JSON.parse(data);
                if (checkpay.status == 0) {
                    setTimeout(() => {
                        se.callCheckPayment();
                    }, 1000);
                }
                else if (checkpay.ipnCall == "CALLED_FAIL" && checkpay.errorCode == '99') {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/flightpaymenterror');
                }
                else if (checkpay.ipnCall == "CALLED_TIMEOUT" && checkpay.errorCode == '253') {
                    se.hideLoading();
                    se.gf.hideLoading();
                    se.safariViewController.hide();
                    clearInterval(se.intervalID);
                    se.navCtrl.navigateForward('/flightpaymenttimeout/0');
                }
                else {
                    se._flightService.itemFlightCache.ischeckpayment = 1;
                }
            });
        }
    }
    showFlightDetail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield se.modalCtrl.create({
                component: _flightbookingdetails_flightbookingdetails_page__WEBPACK_IMPORTED_MODULE_13__["FlightBookingDetailsPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                cssClass: "modal-flight-booking-detail"
            });
            modal.present();
        });
    }
    showQuickBack() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _flightquickback_flightquickback_page__WEBPACK_IMPORTED_MODULE_14__["FlightquickbackPage"],
                componentProps: {
                    aParameter: true,
                },
                showBackdrop: true,
                backdropDismiss: true,
                enterAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_15__["CustomAnimations"].iosCustomEnterAnimation,
                leaveAnimation: _providers_CustomAnimations__WEBPACK_IMPORTED_MODULE_15__["CustomAnimations"].iosCustomLeaveAnimation,
                cssClass: "modal-flight-quick-back",
            });
            modal.present();
        });
    }
    flightpaymentatoffice() {
        if (this.blockPaylate) {
            return;
        }
        this.gf.showLoading();
        this.navCtrl.navigateForward('/flightpaymentatoffice');
    }
    checkAllowRepay() {
        var se = this;
        return new Promise((resolve, reject) => {
            se.callCheckHoldTicket('', se._flightService.itemFlightCache).then((check) => {
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
    rememberCard() {
        this.isremember = !this.isremember;
    }
    getSummaryBooking(data) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "/gate/apiv1/SummaryBooking/" + data.pnr.resNo,
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
    showAlertChoiceSeat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = 'Vui lòng chọn lại ghế ngồi!';
            let alert = yield se.alertCtrl.create({
                message: msg,
                cssClass: "cls-alert-choiceseat",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            se._flightService.itemFlightCache.backtochoiceseat = true;
                            se._flightService.itemFlightReChoiceSeat.emit(1);
                            se.navCtrl.navigateBack('flightaddservice');
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    paymentbiztravel() {
        if (this.bizTravelService.bizAccount.balanceAvaiable - this._flightService.itemFlightCache.totalPrice <= 0) {
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
                var params = { memberid: this.jti, totalprice: this._flightService.itemFlightCache.totalPrice };
                this.presentLoading();
                this.gf.checkAcceptBizCredit('POST', _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/CheckAcceptBizCredit', headers, params, 'companyinfo', 'GetBizTransactions').then((data) => {
                    if (data && data.error == 0) {
                        this.bizTravelService.phoneOtp = data.phoneOtp;
                        this.bizTravelService.phoneOtpShort = data.phoneOtpShort;
                        this.bizTravelService.paymentType = 1;
                        this.flightPayment().then((checkvalid) => {
                            if (checkvalid) {
                                this.bizTravelService.routeBackWhenCancel = 'flightsearchresult';
                                this.navCtrl.navigateForward('confirmpayment');
                            }
                        });
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
    flightPayment() {
        return new Promise((resolve, reject) => {
            this.gf.checkTicketAvaiable(this._flightService.itemFlightCache).then((check) => {
                if (check) {
                    let itemcache = this._flightService.itemFlightCache;
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink';
                    this.gf.CreatePayoo(url).then(datapayoo => {
                        datapayoo = JSON.parse(datapayoo);
                        if (datapayoo.success) {
                            this.hideLoading();
                            resolve(true);
                        }
                        else {
                            this.hideLoading();
                            resolve(false);
                            this.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                        }
                    });
                }
                else {
                    this.hideLoading();
                    resolve(false);
                    this.showAlertOutOfTicket(this._flightService.itemFlightCache, 1);
                }
            });
        });
    }
    showAlertOutOfTicket(itemFlight, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            let msg = '';
            if (itemFlight.errorHoldTicket == 1) {
                msg = 'Chuyến bay ' + itemFlight.departFlight.airlineCode + ' từ ' + itemFlight.departCity + ' đi ' + itemFlight.returnCity + ' vào ' + itemFlight.checkInDisplay + ' lúc ' + moment__WEBPACK_IMPORTED_MODULE_8__(itemFlight.departFlight.departTime).format('HH:mm') + ' → ' + moment__WEBPACK_IMPORTED_MODULE_8__(itemFlight.departFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
            }
            else if (itemFlight.errorHoldTicket == 2) {
                msg = 'Chuyến bay ' + itemFlight.returnFlight.airlineCode + ' từ ' + itemFlight.returnCity + ' đi ' + itemFlight.departCity + ' vào ' + itemFlight.checkOutDisplay + ' lúc ' + moment__WEBPACK_IMPORTED_MODULE_8__(itemFlight.returnFlight.departTime).format('HH:mm') + ' → ' + moment__WEBPACK_IMPORTED_MODULE_8__(itemFlight.returnFlight.landingTime).format('HH:mm') + ' đã hết vé. Vui lòng chọn chuyến bay khác.';
            }
            else {
                msg = 'Các chuyến bay đã chọn không giữ được vé. Vui lòng chọn chuyến bay khác!';
            }
            let alert = yield se.alertCtrl.create({
                message: msg,
                header: type == 1 ? 'Rất tiếc, vé máy bay đã hết' : 'Rất tiếc, vé không giữ được',
                cssClass: "cls-alert-refreshPrice",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
FlightPaymentSelectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightpaymentselect',
        template: __webpack_require__(/*! ./flightpaymentselect.page.html */ "./src/app/flightpaymentselect/flightpaymentselect.page.html"),
        styles: [__webpack_require__(/*! ./flightpaymentselect.page.scss */ "./src/app/flightpaymentselect/flightpaymentselect.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_flightService__WEBPACK_IMPORTED_MODULE_10__["flightService"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_9__["SafariViewController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
        _ionic_native_background_mode_ngx__WEBPACK_IMPORTED_MODULE_12__["BackgroundMode"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"],
        _providers_bizTravelService__WEBPACK_IMPORTED_MODULE_16__["BizTravelService"]])
], FlightPaymentSelectPage);



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
//# sourceMappingURL=flightpaymentselect-flightpaymentselect-module.js.map