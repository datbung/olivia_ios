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

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thanh toán</div>\n        </div>\n\n        <div class=\"div-quick-back\" (click)=\"showQuickBack()\">\n          ...\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-img-step m-bottom-16\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n  <div class=\"cls-divpayment\">\n    \n    <div class=\"d-flex\" (click)=\"showFlightDetail()\">\n    \n        <div class=\"text-flight-title div-width-600 d-flex\">\n            <div>\n                <div>{{ itemflight.departCity }} ({{ itemflight.departCode }})</div>\n                <div class=\"text-flight-datetime\">{{ checkInDisplayFullYear }} </div>\n            </div>\n            <div class=\"div-flight-inout\">\n                <img class=\"img-flight-inout\" src=\"./assets/ic_flight/ic_flight_inout.svg\" *ngIf=\"itemflight.roundTrip else oneway\">\n                <ng-template #oneway><img class=\"img-flight-inout img-oneway\" src=\"./assets/imgs/ic_arrow.svg\"></ng-template>\n            </div> \n            <div>\n                <div>{{ itemflight.returnCity }}  ({{ itemflight.returnCode }})</div>\n                <div class=\"text-flight-datetime\" *ngIf=\"itemflight.roundTrip\">{{ checkOutDisplayFullYear }} </div>\n            </div>\n        </div>\n      \n        <div class=\"div-width-60 v-align-center\" >\n           <img src=\"./assets/ic_flight/icon_down.svg\">\n        </div>\n    </div>\n    <!-- City Hotel -->\n    <div class=\"div-hotelcity\" *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected\">\n        <div class=\"div-hotel-name\">\n          <span>{{_flightService.itemFlightCache.objHotelCitySelected.HotelName}} \n            <span class=\"m-l-4\">\n              <img *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected.RatingStar\" src=\"{{_flightService.itemFlightCache.objHotelCitySelected.RatingStar}}\"/>\n            </span> \n          </span>\n        </div>\n        <div class=\"div-wrapimg img-list\" >\n          <img *ngIf=\"_flightService.itemFlightCache.objHotelCitySelected.Avatar else noavatar\" class=\"img-avatar ava-list\" src=\"{{_flightService.itemFlightCache.objHotelCitySelected.Avatar}}\">\n          <ng-template #noavatar>\n            <img class=\"img-avatar ava-list\" src=\"https://cdn1.ivivu.com/iVivu/2018/02/07/15/noimage-104x104.png\">\n          </ng-template>\n        </div>\n        \n          <div class=\"col-mytrip-text-description \">\n            <div class=\"text-left\">\n              <!-- check in, checkout -->\n              <ion-row class=\"row-height-listtrip p-top-4\" >\n                <ion-col size=\"1\" class=\"col-address\">\n                  <img class=\"img-height-12\" src=\"./assets/imgs/ic_date.svg\">\n                  \n                </ion-col>\n                <ion-col  class=\"col-address\">\n                  {{checkInDisplay}} → {{checkOutDisplay}}\n                </ion-col>\n              </ion-row>\n              <!-- pax -->\n            <ion-row class=\"row-height-listtrip\" *ngIf=\"totalPaxStr \">\n              <ion-col size=\"1\" class=\"col-address\">\n                <img src=\"./assets/imgs/ic_people.svg\">\n                \n              </ion-col>\n              <ion-col  class=\"col-address\">\n                {{totalPaxStr}}\n              </ion-col>\n            </ion-row>\n              <!-- Loại phòng -->\n            <ion-row class=\"row-height-listtrip\" *ngIf=\"totalRoom\">\n                  <ion-col size=\"1\"  class=\"col-address\">\n                    <img src=\"./assets/ic_facility/ic_food_b.svg\">\n                  </ion-col>\n                  <ion-col class=\"col-address\">\n                      <label>{{totalRoom}}</label>\n                  </ion-col>\n                </ion-row>\n          </div>\n        </div>\n    </div>\n    <!-- thêm đi chung nếu có -->\n    <div class=\"div-DC\" *ngIf=\"_flightService.itemFlightCache && _flightService.itemFlightCache.DICHUNGParam\">\n      <div class=\"text-DC\">\n        Dịch vụ thêm: <span class=\"text-DC text-bold\">Xe đưa đón sân bay</span>\n      </div>\n    </div>\n\n    <div class=\"div-DC\" *ngIf=\"_flightService.itemFlightCache && _flightService.itemFlightCache.priceCathay>0\">\n      <div class=\"text-DC\">\n        Dịch vụ thêm: <span class=\"text-DC text-bold\">Bảo hiểm trễ chuyến</span>\n      </div>\n    </div>\n    <div class=\"div-split\"></div>\n    <div class=\"d-flex \">\n      <div class=\"div-width-100\">\n          <div class=\"text-pax\">{{ adult }} người lớn</div>\n          <div class=\"text-pax\" *ngIf=\"child && child >0\">{{ child }} trẻ em</div>\n          <div class=\"text-pax\" *ngIf=\"infant && infant >0\">{{ infant }} em bé</div>\n      </div>\n      <div class=\"div-width-100 text-right m-bottom-16\" (click)=\"showPriceDetail()\">\n        <div class=\"text-total-price\">{{totalpricedisplay}}đ\n          <sup>\n            <img src=\"./assets/ic_green/ic_info.svg\">\n          </sup>\n        </div>\n        <div class=\"text-sub\">Giá đã bao gồm thuế & phí.</div>\n        \n      </div>\n    </div>\n\n  </div>\n      <div class=\"div-split-panel\"></div>\n      <ion-list class=\"cls-list\">\n\n        <ion-item *ngIf=\"bizTravelService.isCompany\" (click)=\"paymentbiztravel()\" [ngClass]=\"blockPayCard ? 'cls-minheight h-54' : 'cls-minheight h-54'\">\n          <label  class=\"text-list m-bottom-8\">\n            Tài khoản công ty\n          </label>\n          <div class=\"text-warning-creadit\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - _flightService.itemFlightCache.totalPrice)<=0\">Số dư Credit không đủ để thực hiện thanh toán</div>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"bizTravelService.bizAccount && (bizTravelService.bizAccount.balanceAvaiable - _flightService.itemFlightCache.totalPrice) >0\" class='m-right-16'></ion-icon>\n        </ion-item>\n\n        <ion-item (click)=\"flightpaymentatm()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight'\">\n            <label  class=\"text-list\">\n              Thẻ ATM nội địa /Internet Banking\n            </label>\n            <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" *ngIf=\"!blockPayCard\" class='m-right-16'></ion-icon>\n        </ion-item>\n        <ion-item [ngClass]=\"(arrbankrmb.length>0&&ischeckvisa) ? 'cls-minheight no-border-bottom ion-item1' : 'cls-minheight no-border-bottom ion-item1'  \" (click)=\"flightpaymentvisa()\">\n          <label  class=\"text-list ion-item1\" >\n            Thẻ tín dụng <img class=\"img-visa\" src=\"./assets/imgs/ic_visa.png\">\n          </label>\n          <ion-icon slot=\"end\"  *ngIf=\"!ischeckvisa && !blockPayCard\" name=\"ios-arrow-round-forward\" class='m-right-16'></ion-icon>\n          <img slot=\"end\"  *ngIf=\"ischeckvisa\" style=\"margin-right: -9px;\" src=\"./assets/imgs/ic_down.svg\">\n        </ion-item>\n        <ion-radio-group *ngIf=\"arrbankrmb.length>0&&ischeckvisa\">\n          <ion-item *ngFor=\"let item of arrbankrmb\" [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" [checked]=\"item.checked\" (click)=\"chooseacc(item)\"></ion-radio>\n            <!-- <img class=\"imgcard ml8\" src={{item.imgbank}}> -->\n            <ion-label  class=\"text-list text-infobank ml8\">\n              {{item.name_Bank}}\n            </ion-label>\n            <ion-label class=\"text-infobank \"><span style=\"vertical-align: middle;\"> •••• •••• ••••</span>\n              {{item.vpc_CardNum}}</ion-label>\n          </ion-item>\n          <ion-item [ngClass]=\"blockPayCard ? 'ion-item' : 'ion-item'\">\n            <ion-radio mode=\"md\" (click)=\"nochooseacc()\"></ion-radio>\n            <ion-label  class=\"text-list text-infobank ml8\">\n              Chọn tài khoản khác\n            </ion-label>\n            </ion-item>\n        </ion-radio-group>\n        <div style=\"margin-left: 15px;margin-bottom: 15px\">\n          <ion-checkbox [disabled]=\"isdisable\" (ionChange)=\"rememberCard()\"  class=\"ion-checkbox\" [checked]=\"isremember\" color=\"secondary\"></ion-checkbox>\n          <ion-label class=\"label-input\" >Lưu và bảo mật thẻ để đặt dịch vụ nhanh hơn lần sau</ion-label>\n        </div>\n        <div class=\"div-split-item\"></div>\n        <ion-item  (click)=\"flightpaymentmomo()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight' \">\n          <label class=\"text-list\">\n            Thanh toán qua  <img class=\"img-momo\" src=\"https://res.ivivu.com/payment/img/momo/logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\" [ngClass]=\"blockPayCard ? 'm-right-16' : 'm-right-16' \" *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        \n        <ion-item (click)=\"flightpaymentpayooqr()\" [ngClass]=\"blockPayCard ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Thanh toán bằng mã QR <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  [ngClass]=\"blockPayCard ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPayCard\"></ion-icon>\n        </ion-item>\n        \n        <ion-item  (click)=\"flightpaymentpayoostore()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Trực tiếp tại cửa hàng tiện lợi <img class=\"img-payoo\" src=\"https://res.ivivu.com/payment/img/payoo/payoo-logo.png\">\n          </label>\n          <ion-icon slot=\"end\" name=\"ios-arrow-round-forward\"  [ngClass]=\"blockPaylate ? 'm-right-16' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n          <div  class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n        <ion-item (click)=\"flightpaymentbank()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n            <label class=\"text-list\">\n              Chuyển khoản ngân hàng\n            </label>\n            <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" [ngClass]=\"blockPaylate ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n            <div class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n        <ion-item (click)=\"flightpaymentatoffice()\" [ngClass]=\"blockPaylate ? 'cls-minheight' : 'cls-minheight'\">\n          <label class=\"text-list\">\n            Trực tiếp tại văn phòng\n          </label>\n          <ion-icon slot=\"end\" item-end name=\"ios-arrow-round-forward\" [ngClass]=\"blockPaylate ? 'm-right-2' : 'm-right-16' \" *ngIf=\"!blockPaylate\"></ion-icon>\n          <div class=\"text-hotfare\" *ngIf=\"blockPaylate\">(Không áp dụng cho vé khuyến mãi)</div>\n        </ion-item>\n      </ion-list>\n      <div class=\"div-DK\">\n        <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n        <div class=\"text-DK\">\n          Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n        </div>\n      </div>\n</ion-content>\n<ion-footer *ngIf=\"isbtn && !blockPayCard\">\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button [disabled]=\"!ischeckedDK\" (click)=\"next()\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" ion-button round outline class=\"button button2\">Thanh toán và xuất vé</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightpaymentselect/flightpaymentselect.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/flightpaymentselect/flightpaymentselect.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.sp-title {\n  color: #828282;\n}\n\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-split {\n  height: 0.5px;\n  background-color: #bdbdbd;\n  margin: 16px 0;\n}\n\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.image-card {\n  display: initial !important;\n}\n\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n\n.div-title {\n  margin-top: 15px;\n}\n\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.cls-list {\n  margin-left: -16px;\n}\n\n.cls-list .text-list {\n  height: 22px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.cls-divpayment {\n  margin-top: 10px;\n}\n\n.cls-divpayment .div-promotion-ticket {\n  margin: 23px 0px 16px 0px;\n}\n\n.cls-divpayment .div-promotion-ticket .lbl-promotion-ticket {\n  padding: 5px 14px 5px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 0 8px 0 rgba(38, 190, 214, 0.2);\n  background-color: #e52822;\n}\n\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-price-food {\n  text-align: right;\n}\n\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-star {\n  padding: 2px;\n}\n\n.img-payoo {\n  width: 50px;\n  vertical-align: middle;\n}\n\n.img-momo {\n  width: 32px;\n  position: absolute;\n  top: 6px;\n  margin-left: 100px;\n}\n\n.cls-minheight {\n  --min-height: 48px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.ml8 {\n  margin-left: 8px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n}\n\n.m-right-16 {\n  margin-right: -14px;\n}\n\n.div-img-step {\n  text-align: center;\n}\n\n.div-line {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.div-depart-title, .div-return-title {\n  font-size: 13px;\n  font-weight: 100;\n  line-height: 17px;\n  letter-spacing: -0.7px;\n  padding-left: 16px;\n}\n\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 18px;\n  width: 1px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 20px;\n  top: 63px;\n}\n\n.placepoint {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.point-top {\n  top: 55px;\n}\n\n.point-bottom {\n  top: 81px;\n}\n\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n\n.div-width-600 {\n  width: 600%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-flight-title {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-split {\n  margin: 16px 0;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n\n.img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n\n.div-split-item {\n  margin-left: 16px;\n  border-bottom: solid 1px #c8c7cc;\n}\n\n.no-border-bottom {\n  --border-style: none;\n}\n\n.item-disabled {\n  --background: #bdbdbd;\n  opacity: 0.5;\n  margin-right: -16px;\n}\n\n.text-hotfare {\n  color: #828282;\n  position: absolute;\n  bottom: 2px;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.logo-vna {\n  height: 34px !important;\n}\n\n::ng-deep .cls-alert-refreshPrice .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 14px !important;\n  overflow: hidden !important;\n}\n\n@media (min-width: 360px) and (max-width: 375px) {\n  ::ng-deep .text-flight-datetime {\n    font-size: 13px !important;\n  }\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.div-hotelcity .m-l-4 {\n  margin-left: 4px;\n}\n\n.div-hotelcity .div-hotel-name {\n  padding-top: 16px;\n  padding-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-hotelcity .img-height-12 {\n  height: 12px;\n}\n\n.div-hotelcity .div-wrapimg {\n  position: absolute;\n  height: 78px;\n  width: 104px;\n  overflow: hidden;\n}\n\n.div-hotelcity .div-wrapimg.img-list {\n  height: 104px;\n}\n\n.div-hotelcity .img-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-hotelcity .img-avatar.ava-list {\n  border-radius: 4px;\n}\n\n.div-hotelcity .col-mytrip-text-description, .div-hotelcity .col-historytrip-text-description {\n  padding-left: 112px;\n}\n\n.div-hotelcity .text-left {\n  font-size: 13px;\n}\n\n.div-hotelcity .row-height-listtrip {\n  height: 28px;\n}\n\n.div-hotelcity .col-address {\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.text-DC {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.div-DC {\n  margin-top: 17px;\n}\n\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodHBheW1lbnRzZWxlY3QvZmxpZ2h0cGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodHBheW1lbnRzZWxlY3QvZmxpZ2h0cGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0FDRE47O0FESUU7RUFDSSwyQkFBQTtBQ0ROOztBREVNO0VBQ0UsZUFBQTtBQ0FSOztBRElFO0VBQ0UsY0FBQTtBQ0RKOztBRElFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRE47O0FER0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDRSxjQUFBO0FDQU47O0FERUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNDTjs7QURFSTtFQUVFLGlCQUFBO0VBQ0EsZUFBQTtBQ0FOOztBRENNO0VBRUUsY0FBQTtBQ0FSOztBREdJO0VBRUksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0RSOztBREdJO0VBQ0UsMkJBQUE7QUNBTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDQ047O0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFUjs7QURBSTtFQUVJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNFUjs7QURDSTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDRU47O0FEQUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQ0dOOztBRERJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSU47O0FERkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FESEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBRUUsc0JBQUE7QUNNRjs7QURKQTtFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esb0NBQUE7QUNNRjs7QURKQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxVQUFBO0VDT0Y7QUFDRjs7QURKQTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNLSjs7QURIQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDTU47O0FESkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ09KOztBRExFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDUUo7O0FETkU7RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDU0o7O0FEUEE7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7QUNTSjs7QURQQTtFQUNJLGVBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDVU47O0FEUkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ1dKOztBRFRFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDWUo7O0FEVkU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ2FKOztBRFhFO0VBQ0UsZ0JBQUE7QUNjSjs7QURiSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNlUjs7QURiSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNlUjs7QURiSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ2VOOztBRFpBO0VBRUUsa0JBQUE7QUNjRjs7QURiSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNlTjs7QURaQTtFQUVFLGdCQUFBO0FDY0Y7O0FEWkU7RUFDRSx5QkFBQTtBQ2NKOztBRFpNO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFFQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EseUJBQUE7QUNhUjs7QURUQTtFQUVFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNXRjs7QURSQTtFQUVFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVUY7O0FEUkE7RUFFSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1VKOztBRFJBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNVRjs7QURQQTtFQUVJLGlCQUFBO0FDU0o7O0FEUEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNTRjs7QURQQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDU0Y7O0FEUEE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDU0Y7O0FEUEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDU0Y7O0FETkE7RUFDRSxZQUFBO0FDU0Y7O0FEUEE7RUFFRSxXQUFBO0VBQ0Esc0JBQUE7QUNTRjs7QURQQTtFQUNFLFdBQUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQ1VKOztBRFJBO0VBRUUsa0JBQUE7QUNVRjs7QURSQTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFFRSxXQUFBO0VBQ0EsY0FBQTtBQ1VGOztBRFJBO0VBRVEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDVVI7O0FEUkk7RUFFRSxnQkFBQTtBQ1VOOztBRFJJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUNVUjs7QUROSTtFQUNFLG1CQUFBO0FDU047O0FEUEk7RUFDRSxrQkFBQTtBQ1VOOztBRFJJO0VBQ0Usa0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDV047O0FEVEk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNZTjs7QURWVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2FaOztBRFhVO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FDY2Q7O0FEWFU7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNjZDs7QURaVTtFQUNFLFNBQUE7QUNlWjs7QURiVTtFQUNFLFNBQUE7QUNnQlo7O0FEWkk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNlUjs7QURiUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQ2VWOztBRFpNO0VBQ0UsV0FBQTtBQ2VSOztBRGJNO0VBQ0UsVUFBQTtBQ2dCUjs7QURkTTtFQUNFLGlCQUFBO0FDaUJSOztBRGZNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNrQlI7O0FEZk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2tCUjs7QURoQk07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ21CUjs7QURqQk07RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNvQlI7O0FEbEJNO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ3FCUjs7QURqQk07RUFDRSxpQkFBQTtFQUNBLGdDQUFBO0FDb0JSOztBRGpCTTtFQUNFLG9CQUFBO0FDb0JSOztBRGpCTTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDb0JSOztBRGxCTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDcUJSOztBRGxCTTtFQUNFLHVCQUFBO0FDcUJSOztBRGxCRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFFQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRkFBQTtFQUNBLG1GQUFBO0VBQ0Esd0NBQUE7RUFDQSxtREFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNxQko7O0FEaEJFO0VBQ0U7SUFDSSwwQkFBQTtFQ21CTjtBQUNGOztBRGhCQTtFQUVFLHNCQUFBO0FDa0JGOztBRGhCQTtFQUVFLCtCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNvQkY7O0FEbEJBO0VBRUUsK0JBQUE7QUNvQkY7O0FEaEJFO0VBQ0UsZ0JBQUE7QUNtQko7O0FEaEJFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDa0JKOztBRGhCRTtFQUNFLFlBQUE7QUNrQko7O0FEaEJJO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDa0JKOztBRGhCSTtFQUNJLGFBQUE7QUNrQlI7O0FEaEJJO0VBQ0ksT0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FDa0JSOztBRGhCSTtFQUNJLGtCQUFBO0FDa0JSOztBRGhCSTtFQUNJLG1CQUFBO0FDa0JSOztBRGZJO0VBQ0UsZUFBQTtBQ2lCTjs7QURmRztFQUNDLFlBQUE7QUNpQko7O0FEZkc7RUFDQyxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDaUJKOztBRGJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNnQkY7O0FEZEM7RUFDRSxpQkFBQTtBQ2lCSDs7QURmQztFQUNFLGdCQUFBO0FDa0JIOztBRGhCQztFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNrQkg7O0FEaEJDO0VBQ0MsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ21CRjs7QURqQkE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ29CRjs7QURsQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNxQkY7O0FEbkJBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNzQkY7O0FEcEJBO0VBQ0EsY0FBQTtBQ3VCQSIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodHBheW1lbnRzZWxlY3QvZmxpZ2h0cGF5bWVudHNlbGVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIFxyXG4gICAgLmQtZmxleHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLmRpdi1oZWFkZXItdGl0bGUge1xyXG4gICAgICBwYWRkaW5nLXRvcDogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIC5kaXYtdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAuc3AtdGl0bGV7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICB9XHJcblxyXG4gIC50ZXh0LXN1YntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuXHJcbiAgLmRpdi1zcGxpdHtcclxuICAgICAgaGVpZ2h0OiAwLjVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG4gIC50ZXh0LXBheHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xyXG4gIH1cclxuICAudGV4dC10b3RhbC1wcmljZXtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgfVxyXG5cclxuICAgIC50ZXh0LW5hbWVcclxuICAgIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgLnRleHQtZ3JlZW5cclxuICAgICAge1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC50ZXh0LWRhdGVcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4XHJcbiAgICB9XHJcbiAgICAuaW1hZ2UtY2FyZHtcclxuICAgICAgZGlzcGxheTogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNle1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgfVxyXG4gICAgLnRvdGFsLXByaWNlLWR7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICB9XHJcbiAgICAuYnV0dG9uMlxyXG4gICAge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG5cclxuICAgIH1cclxuICAgIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW9uLWltZywgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpbWcge1xyXG4gICAgICB3aWR0aDogMTA0cHg7XHJcbiAgICAgIGhlaWdodDogMTA0cHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcclxuICAgIH1cclxuICAgIC50ZXh0LXJvb20tcHJpY2Utb3Rhe1xyXG4gICAgICBjb2xvcjojODI4MjgyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICB9XHJcbiAgLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH0gIFxyXG4gIC5kaXYtd3JhcGltZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6ODdweDtcclxuICAgIHdpZHRoOiAxMDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuaHJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuLmNscy1oclxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOjI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcclxuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50e1xyXG4gICAgbWF4LXdpZHRoOiAxODhweDtcclxuICAgIGxlZnQ6IDEycHg7XHJcbiAgfVxyXG5cclxufVxyXG4udGV4dC1pbmZvY2FyXHJcbntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmRpdi1zcGxpdC1wYW5lbHtcclxuICAgIGhlaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbn1cclxuLnRleHQtbG9jYXRpb25cclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93bntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuZmxpZ2h0LXByaWNle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtdXB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2VjOTcxZjtcclxuICB9XHJcbiAgLmRpdi10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAuY29tYm8tdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgICB9XHJcbiAgICAuY29tYm8tc3ViLXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogI2Y1OTIzMztcclxuICAgIH1cclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbn1cclxuLmNscy1saXN0XHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICAudGV4dC1saXN0e1xyXG4gICAgICBoZWlnaHQ6IDIycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICB9XHJcbn1cclxuLmNscy1kaXZwYXltZW50XHJcbntcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG5cclxuICAuZGl2LXByb21vdGlvbi10aWNrZXR7XHJcbiAgICBtYXJnaW46IDIzcHggMHB4IDE2cHggMHB4O1xyXG5cclxuICAgICAgLmxibC1wcm9tb3Rpb24tdGlja2V0e1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxNHB4IDVweCAxMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDhweCAwIHJnYmEoMzgsIDE5MCwgMjE0LCAwLjIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuLnRleHQtcFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNGY0ZjRmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn1cclxuXHJcbi5jbHMtcm93aGVpZ2h0MVxyXG57XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgaGVpZ2h0OiA4MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuLnRleHQtbm90ZVxyXG57XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi50ZXh0LXByaWNlLWZvb2Rcclxue1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnRleHQtdGF4XHJcbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnRleHQtZm9vZFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dC1kXHJcbntcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLnRleHQtdG90YWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIFxyXG59XHJcbi5kaXYtc3RhcntcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuLmltZy1wYXlvb1xyXG57XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaW1nLW1vbW97XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxufVxyXG4uY2xzLW1pbmhlaWdodFxyXG57XHJcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xyXG59XHJcbi5pb24taXRlbVxyXG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAtLW1pbi1oZWlnaHQ6IDBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxufVxyXG4uaW1nY2FyZFxyXG57XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiAxMi44cHg7XHJcbn1cclxuLnRleHQtaW5mb2JhbmtcclxuICAgIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDZweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIH1cclxuICAgIC5tbDhcclxuICAgIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIH0gXHJcblxyXG4gICAgLy8vLy8vLy8vQGV4dGVuZC5wbGFjZWxpbmVcclxuICAgIC5tLXJpZ2h0LTE2e1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1pbWctc3RlcHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1saW5le1xyXG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmRpdi1kZXBhcnQtdGl0bGUsIC5kaXYtcmV0dXJuLXRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAgICAgICAucGxhY2VsaW5leyAgIFxyXG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxLjVweCAjYmRiZGJkO1xyXG4gICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDYzcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGxhY2Vwb2ludHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgICAgICAgICAgICBsZWZ0OiAxN3B4O1xyXG4gICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAucGxhY2Vwb2ludC1yZXR1cm57XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgICAgbGVmdDogMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2ludC10b3B7XHJcbiAgICAgICAgICAgIHRvcDogNTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wb2ludC1ib3R0b217XHJcbiAgICAgICAgICAgIHRvcDogODFweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLy8vLy8vLy8vLy9cclxuICAgIC5kaXYtZmxpZ2h0LWlub3V0e1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgXHJcbiAgICAgICAgLmltZy1mbGlnaHQtaW5vdXR7XHJcbiAgICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IC0ycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtd2lkdGgtNjAwe1xyXG4gICAgICAgIHdpZHRoOiA2MDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtd2lkdGgtNjB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1mbGlnaHQtZGF0ZXRpbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGV4dC1mbGlnaHQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgfVxyXG4gICAgICAudi1hbGlnbi1jZW50ZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5kaXYtc3BsaXR7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2JkYmRiZDtcclxuICAgICAgfVxyXG4gICAgICAuaW1nLW9uZXdheXtcclxuICAgICAgICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLy8vLy8vLy8vQGV4dGVuZCBcclxuICAgICAgLmRpdi1zcGxpdC1pdGVte1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubm8tYm9yZGVyLWJvdHRvbXtcclxuICAgICAgICAtLWJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLml0ZW0tZGlzYWJsZWR7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWhvdGZhcmV7XHJcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9nby12bmF7XHJcbiAgICAgICAgaGVpZ2h0OiAzNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuOjpuZy1kZWVwe1xyXG4gIC5jbHMtYWxlcnQtcmVmcmVzaFByaWNlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAtbXMtZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgIGZsZXg6IDEgMSBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItdG9wOiAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwwLDAsMCksLjIpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksIzM4ODBmZikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4gICAgICBcclxuOjpuZy1kZWVwe1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAzNjBweCkgYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAudGV4dC1mbGlnaHQtZGF0ZXRpbWV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmhyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG59XHJcbi5pb24taXRlbTFcclxue1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuLmxhYmVsLWlucHV0e1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmlvbi1jaGVja2JveHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAtMnB4O1xyXG59XHJcbi5pb24taXRlbTFcclxue1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbn1cclxuICAgIFxyXG4uZGl2LWhvdGVsY2l0eXtcclxuICAubS1sLTR7XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1ob3RlbC1uYW1le1xyXG4gICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGNvbG9yOiAjMDAzYzcxO1xyXG4gIH1cclxuICAuaW1nLWhlaWdodC0xMntcclxuICAgIGhlaWdodDoxMnB4XHJcbiAgfVxyXG4gICAgLmRpdi13cmFwaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDo3OHB4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5kaXYtd3JhcGltZy5pbWctbGlzdHtcclxuICAgICAgICBoZWlnaHQ6MTA0cHg7XHJcbiAgICB9XHJcbiAgICAuaW1nLWF2YXRhciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgICAuaW1nLWF2YXRhci5hdmEtbGlzdHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuY29sLW15dHJpcC10ZXh0LWRlc2NyaXB0aW9uLC5jb2wtaGlzdG9yeXRyaXAtdGV4dC1kZXNjcmlwdGlvbntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWxlZnR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgfVxyXG4gICAucm93LWhlaWdodC1saXN0dHJpcHtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgfVxyXG4gICAuY29sLWFkZHJlc3N7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgfVxyXG4gIFxyXG59XHJcbi50ZXh0LURDe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiB9XHJcbiAudGV4dC1ib2xke1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuIH1cclxuIC5kaXYtREN7XHJcbiAgIG1hcmdpbi10b3A6IDE3cHg7XHJcbiB9XHJcbiAuaW1nLXZpc2FcclxuIHtcclxuICAgd2lkdGg6IDExOHB4O1xyXG4gICBoZWlnaHQ6IDIycHg7XHJcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiB9XHJcbiAuZGl2LURLe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY2hlY2tib3gtREt7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgd2lkdGg6IDI4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDJweDtcclxufVxyXG4udGV4dC1ES3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBjb2xvcjogIzcxNzQ4NDtcclxuICBtYXJnaW4tbGVmdDogM3B4O1xyXG59XHJcbi5idG4tZGlzYWJsZWR7XHJcbiAgYmFja2dyb3VuZDogI2JkYmRiZDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4udGV4dC1saW5rLURLe1xyXG5jb2xvcjogIzJmODBlZFxyXG59XHJcbiIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxlIC5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5zcC10aXRsZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4udGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1zcGxpdCB7XG4gIGhlaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7XG4gIG1hcmdpbjogMTZweCAwO1xufVxuXG4udGV4dC1wYXgge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4udGV4dC10b3RhbC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1uYW1lIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50ZXh0LW5hbWUgLnRleHQtZ3JlZW4ge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtZGF0ZSB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmltYWdlLWNhcmQge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi50b3RhbC1wcmljZS1kIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDhweDtcbn1cblxuLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLml0ZW0uaXRlbS1tZCAuY2hlY2tib3gtbWQge1xuICBwb3NpdGlvbjogc3RhdGljO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiA5cHggOXB4IDlweCA0cHg7XG59XG5cbi50ZXh0LXJvb20tcHJpY2Utb3RhIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uZGl2LXdyYXBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogODdweDtcbiAgd2lkdGg6IDEwNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNscy1ociB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDI4N3B4KSBhbmQgKG1heC13aWR0aDogMzU5cHgpIHtcbiAgLmNvbC1kZXNjcmlwdGlvbi1yb29tcGF5bWVudCB7XG4gICAgbWF4LXdpZHRoOiAxODhweDtcbiAgICBsZWZ0OiAxMnB4O1xuICB9XG59XG4udGV4dC1pbmZvY2FyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogN3B4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWxvY2F0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWRlcGFydHVyZS10aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuXG4uZmxpZ2h0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICNlYzk3MWY7XG59XG5cbi5kaXYtdGl0bGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmRpdi10aXRsZSAuY29tYm8tdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAzYzcxO1xufVxuLmRpdi10aXRsZSAuY29tYm8tc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmNTkyMzM7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jbHMtbGlzdCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbn1cbi5jbHMtbGlzdCAudGV4dC1saXN0IHtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uY2xzLWRpdnBheW1lbnQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmNscy1kaXZwYXltZW50IC5kaXYtcHJvbW90aW9uLXRpY2tldCB7XG4gIG1hcmdpbjogMjNweCAwcHggMTZweCAwcHg7XG59XG4uY2xzLWRpdnBheW1lbnQgLmRpdi1wcm9tb3Rpb24tdGlja2V0IC5sYmwtcHJvbW90aW9uLXRpY2tldCB7XG4gIHBhZGRpbmc6IDVweCAxNHB4IDVweCAxMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzOCwgMTkwLCAyMTQsIDAuMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTI4MjI7XG59XG5cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uY2xzLXJvd2hlaWdodDEge1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi50ZXh0LWZvb2Qge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtcHJpY2UtZm9vZCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC10YXgge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1kIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1zdGFyIHtcbiAgcGFkZGluZzogMnB4O1xufVxuXG4uaW1nLXBheW9vIHtcbiAgd2lkdGg6IDUwcHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5pbWctbW9tbyB7XG4gIHdpZHRoOiAzMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNnB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5jbHMtbWluaGVpZ2h0IHtcbiAgLS1taW4taGVpZ2h0OiA0OHB4O1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4uaW1nY2FyZCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDEyLjhweDtcbn1cblxuLnRleHQtaW5mb2Jhbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1sOCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5tLXJpZ2h0LTE2IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTRweDtcbn1cblxuLmRpdi1pbWctc3RlcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdi1saW5lIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2NkY2RjZDtcbiAgbWFyZ2luLXRvcDogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLmRpdi1kZXBhcnQtdGl0bGUsIC5kaXYtcmV0dXJuLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuXG4ucGxhY2VsaW5lIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMS41cHggI2JkYmRiZDtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiA2M3B4O1xufVxuXG4ucGxhY2Vwb2ludCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcbiAgbGVmdDogMTdweDtcbn1cblxuLnBsYWNlcG9pbnQtcmV0dXJuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBsZWZ0OiAxN3B4O1xufVxuXG4ucG9pbnQtdG9wIHtcbiAgdG9wOiA1NXB4O1xufVxuXG4ucG9pbnQtYm90dG9tIHtcbiAgdG9wOiA4MXB4O1xufVxuXG4uZGl2LWZsaWdodC1pbm91dCB7XG4gIHBhZGRpbmc6IDBweCAxOHB4O1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZsaWdodC1pbm91dCAuaW1nLWZsaWdodC1pbm91dCB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAtMnB4O1xufVxuXG4uZGl2LXdpZHRoLTYwMCB7XG4gIHdpZHRoOiA2MDAlO1xufVxuXG4uZGl2LXdpZHRoLTYwIHtcbiAgd2lkdGg6IDYwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtZmxpZ2h0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi52LWFsaWduLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgbWFyZ2luOiAxNnB4IDA7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG59XG5cbi5pbWctb25ld2F5IHtcbiAgd2lkdGg6IDEycHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5kaXYtc3BsaXQtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2M4YzdjYztcbn1cblxuLm5vLWJvcmRlci1ib3R0b20ge1xuICAtLWJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLml0ZW0tZGlzYWJsZWQge1xuICAtLWJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIG9wYWNpdHk6IDAuNTtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtaG90ZmFyZSB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tbGVmdDogMnB4O1xufVxuXG4ubG9nby12bmEge1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jbHMtYWxlcnQtcmVmcmVzaFByaWNlIC5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICAtbXMtZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3A6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiAwLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsIDAsIDAsIDApLCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZikgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcbiAgOjpuZy1kZWVwIC50ZXh0LWZsaWdodC1kYXRldGltZSB7XG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uaW9uLWl0ZW0xIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn1cblxuLmlvbi1pdGVtMSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5kaXYtaG90ZWxjaXR5IC5tLWwtNCB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4uZGl2LWhvdGVsY2l0eSAuZGl2LWhvdGVsLW5hbWUge1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LWhvdGVsY2l0eSAuaW1nLWhlaWdodC0xMiB7XG4gIGhlaWdodDogMTJweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA3OHB4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uZGl2LWhvdGVsY2l0eSAuZGl2LXdyYXBpbWcuaW1nLWxpc3Qge1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLmltZy1hdmF0YXIge1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuLmRpdi1ob3RlbGNpdHkgLmltZy1hdmF0YXIuYXZhLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uZGl2LWhvdGVsY2l0eSAuY29sLW15dHJpcC10ZXh0LWRlc2NyaXB0aW9uLCAuZGl2LWhvdGVsY2l0eSAuY29sLWhpc3Rvcnl0cmlwLXRleHQtZGVzY3JpcHRpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDExMnB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLnRleHQtbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5yb3ctaGVpZ2h0LWxpc3R0cmlwIHtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLmNvbC1hZGRyZXNzIHtcbiAgcGFkZGluZzogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50ZXh0LURDIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kaXYtREMge1xuICBtYXJnaW4tdG9wOiAxN3B4O1xufVxuXG4uaW1nLXZpc2Ege1xuICB3aWR0aDogMTE4cHg7XG4gIGhlaWdodDogMjJweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRpdi1ESyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uY2hlY2tib3gtREsge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xufVxuXG4udGV4dC1ESyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM3MTc0ODQ7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG59XG5cbi5idG4tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC1saW5rLURLIHtcbiAgY29sb3I6ICMyZjgwZWQ7XG59Il19 */"

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
        this.ischeckedDK = true;
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
        this.gf.hideLoading();
        this.navCtrl.navigateBack('flightadddetails');
    }
    gotoaddservicepage() {
        this._flightService.itemFlightCache.backtochoiceseat = true;
        this._flightService.itemResetCheckSeat.emit(1);
        this.gf.hideLoading();
        this.navCtrl.navigateBack('flightadddetails');
    }
    goback() {
        var se = this;
        se.gf.showLoading();
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
                        let itemcache = this._flightService.itemFlightCache;
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight' + '&memberId=' + this.jti + '&version=2';
                        this.gf.CreatePayoo(url).then((data) => {
                            if (data.success) {
                                this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                                this.openWebpage(data.returnUrl.payUrl);
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
                                let itemcache = this._flightService.itemFlightCache;
                                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=momo&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone + '&rememberToken=' + this.isremember + '&callbackUrl=ivivuapp%3A%2F%2Fapp%2Fhomeflight' + '&memberId=' + this.jti + '&version=2';
                                this.gf.CreatePayoo(url).then((data) => {
                                    if (data.success) {
                                        this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                                        this.openWebpage(data.returnUrl.payUrl);
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
                let itemcache = se._flightService.itemFlightCache;
                let url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=visa&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookingCode + '&buyerPhone=' + itemcache.phone + '&memberId=' + se.jti + '&TokenId=' + se.tokenid + '&rememberToken=' + se.isremember + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink' + '&version=2';
                se.gf.CreatePayoo(url).then((data) => {
                    if (data.success) {
                        se._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                        se._flightService.itemFlightCache.ischeckpayment = 1;
                        se.openWebpage(data.returnUrl);
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
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_store&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti + '&version=2';
                        this.gf.CreatePayoo(url).then((data) => {
                            this.hideLoading();
                            if (data.success) {
                                this._flightService.itemFlightCache.BillingCode = data.payooStoreData.BillingCode;
                                this._flightService.itemFlightCache.periodPaymentDate = data.payooStoreData.periodPayment;
                                console.log(this._flightService.itemFlightCache.periodPaymentDate);
                                if (this.loader) {
                                    this.loader.dismiss();
                                }
                                this.navCtrl.navigateForward('flightpaymentpayoo/' + this.bookingCode + '/0');
                            }
                            else {
                                this.hideLoading();
                                this.gf.showAlertOutOfTicket(this._flightService.itemFlightCache, 2);
                                clearInterval(this.intervalID);
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
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti + '&version=2';
                        this.gf.CreatePayoo(url).then((data) => {
                            this.hideLoading();
                            if (data.success) {
                                this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                                this._flightService.itemFlightCache.qrimg = data.payooQrData.QRCodeUrl;
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
                                var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=payoo_qr&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&rememberToken=' + this.isremember + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti + '&version=2';
                                this.gf.CreatePayoo(url).then((data) => {
                                    this.hideLoading();
                                    if (data.success) {
                                        this._flightService.itemFlightCache.periodPaymentDate = data.periodPaymentDate;
                                        this._flightService.itemFlightCache.qrimg = data.payooQrData.QRCodeUrl;
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
                    var url = _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=companycredit&source=app&amount=' + itemcache.totalPrice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + this.bookingCode + '&buyerPhone=' + itemcache.phone + '&memberId=' + this.jti + '&callbackUrl=' + _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlPayment + '/Home/BlankDeepLink' + '&version=2';
                    this.gf.CreatePayoo(url).then((data) => {
                        if (data.success) {
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