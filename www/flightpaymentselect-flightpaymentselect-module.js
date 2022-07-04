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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 9px !important;\n}\n\n.div-header-title .div-title {\n  margin-top: 4px;\n}\n\n.sp-title {\n  color: #828282;\n}\n\n.text-sub {\n  font-size: 12px;\n  font-weight: 100;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-split {\n  height: 0.5px;\n  background-color: #bdbdbd;\n  margin: 16px 0;\n}\n\n.text-pax {\n  font-size: 14px;\n  font-weight: 100;\n  color: #222222;\n}\n\n.text-total-price {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n}\n\n.text-name {\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.text-name .text-green {\n  color: #26bed6;\n}\n\n.text-date {\n  margin-top: 0px;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.image-card {\n  display: initial !important;\n}\n\n.total-price {\n  color: #26bed6;\n  font-size: 24px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n  margin: 0;\n  margin-top: 3px;\n}\n\n.total-price-d {\n  color: #26bed6;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: -0.69px;\n}\n\n.button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.item-md ion-thumbnail ion-img, .item-md ion-thumbnail img {\n  width: 104px;\n  height: 104px;\n}\n\n.item.item-md .checkbox-md {\n  position: static;\n  display: block;\n  margin: 9px 9px 9px 4px;\n}\n\n.text-room-price-ota {\n  color: #828282;\n  font-size: 14px;\n  text-align: right;\n  text-decoration: line-through;\n  margin: 20px;\n  margin-top: -20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.div-wrapimg {\n  position: relative;\n  height: 87px;\n  width: 104px;\n  overflow: hidden;\n  border-radius: 5px;\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.cls-hr {\n  margin-left: -16px;\n  margin-right: -16px;\n  height: 6px;\n  background-color: #f2f2f2 !important;\n}\n\n@media (min-width: 287px) and (max-width: 359px) {\n  .col-description-roompayment {\n    max-width: 188px;\n    left: 12px;\n  }\n}\n\n.text-infocar {\n  font-weight: 300;\n  color: #4f4f4f;\n  font-size: 12px;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 300;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.div-split-panel {\n  height: 7px;\n  background: #f2f2f2;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-location {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.combo-departure-time {\n  font-size: 14px;\n  font-weight: 600;\n  padding-top: 4px;\n}\n\n.combo-flight-price-label-down {\n  font-size: 14px;\n  color: #003c71;\n}\n\n.flight-price {\n  font-size: 13px;\n  font-weight: bold;\n}\n\n.combo-flight-price-label-up {\n  font-size: 14px;\n  color: #ec971f;\n}\n\n.div-title {\n  margin-top: 15px;\n}\n\n.div-title .combo-title {\n  font-size: 16px;\n  font-weight: 600;\n  color: #003c71;\n}\n\n.div-title .combo-sub-title {\n  font-size: 18px;\n  font-weight: bold;\n  color: #f59233;\n}\n\n.div-title .combo-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.cls-list {\n  margin-left: -16px;\n}\n\n.cls-list .text-list {\n  height: 22px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n  color: #222222;\n}\n\n.cls-divpayment {\n  margin-top: 10px;\n}\n\n.cls-divpayment .div-promotion-ticket {\n  margin: 23px 0px 16px 0px;\n}\n\n.cls-divpayment .div-promotion-ticket .lbl-promotion-ticket {\n  padding: 5px 14px 5px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0 0 8px 0 rgba(38, 190, 214, 0.2);\n  background-color: #e52822;\n}\n\n.text-p {\n  font-size: 14px;\n  color: #4f4f4f;\n  letter-spacing: -0.4px;\n}\n\n.cls-rowheight1 {\n  margin-left: -5px;\n  height: 81px;\n  margin-bottom: 30px;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-price-food {\n  text-align: right;\n}\n\n.text-tax {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  color: #828282;\n  margin: 0;\n}\n\n.text-food {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n}\n\n.text-d {\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #000000;\n  font-size: 12px;\n  margin-left: 3px;\n}\n\n.text-total {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.div-star {\n  padding: 2px;\n}\n\n.img-payoo {\n  width: 50px;\n  vertical-align: middle;\n}\n\n.img-momo {\n  width: 32px;\n  position: absolute;\n  top: 6px;\n  margin-left: 100px;\n}\n\n.cls-minheight {\n  --min-height: 48px;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n  margin-left: 25px;\n}\n\n.imgcard {\n  width: 40px;\n  height: 12.8px;\n}\n\n.text-infobank {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.46px;\n  color: #000000;\n}\n\n.ml8 {\n  margin-left: 8px;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n}\n\n.m-right-16 {\n  margin-right: -14px;\n}\n\n.div-img-step {\n  text-align: center;\n}\n\n.div-line {\n  border-bottom: solid 0.5px #cdcdcd;\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n\n.div-depart-title, .div-return-title {\n  font-size: 13px;\n  font-weight: 100;\n  line-height: 17px;\n  letter-spacing: -0.7px;\n  padding-left: 16px;\n}\n\n.placeline {\n  content: \"\";\n  position: absolute;\n  height: 18px;\n  width: 1px;\n  border-left: dotted 1.5px #bdbdbd;\n  left: 20px;\n  top: 63px;\n}\n\n.placepoint {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.placepoint-return {\n  position: absolute;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  border: 1px solid #cccccc;\n  left: 17px;\n}\n\n.point-top {\n  top: 55px;\n}\n\n.point-bottom {\n  top: 81px;\n}\n\n.div-flight-inout {\n  padding: 0px 18px;\n  width: 32px;\n  height: 32px;\n  position: relative;\n}\n\n.div-flight-inout .img-flight-inout {\n  width: 32px;\n  height: 32px;\n  position: absolute;\n  left: 0;\n  top: -2px;\n}\n\n.div-width-600 {\n  width: 600%;\n}\n\n.div-width-60 {\n  width: 60%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-flight-datetime {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-flight-title {\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-split {\n  margin: 16px 0;\n  border-bottom: solid 0.5px #bdbdbd;\n}\n\n.img-oneway {\n  width: 12px !important;\n  margin-left: 12px;\n}\n\n.div-split-item {\n  margin-left: 16px;\n  border-bottom: solid 1px #c8c7cc;\n}\n\n.no-border-bottom {\n  --border-style: none;\n}\n\n.item-disabled {\n  --background: #bdbdbd;\n  opacity: 0.5;\n  margin-right: -16px;\n}\n\n.text-hotfare {\n  color: #828282;\n  position: absolute;\n  bottom: 2px;\n  font-size: 10px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.24px;\n  margin: 0;\n  margin-left: 2px;\n}\n\n.logo-vna {\n  height: 34px !important;\n}\n\n::ng-deep .cls-alert-refreshPrice .alert-button.sc-ion-alert-ios {\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n  border-radius: 0 !important;\n  flex: 1 1 auto !important;\n  min-width: 50% !important;\n  height: 44px !important;\n  border-top: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  border-right: 0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2) !important;\n  background-color: transparent !important;\n  color: var(--ion-color-primary, #3880ff) !important;\n  font-size: 14px !important;\n  overflow: hidden !important;\n}\n\n@media (min-width: 360px) and (max-width: 375px) {\n  ::ng-deep .text-flight-datetime {\n    font-size: 13px !important;\n  }\n}\n\nhr {\n  background-color: #ccc;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.ion-item1 {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.div-hotelcity .m-l-4 {\n  margin-left: 4px;\n}\n\n.div-hotelcity .div-hotel-name {\n  padding-top: 16px;\n  padding-bottom: 12px;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #003c71;\n}\n\n.div-hotelcity .img-height-12 {\n  height: 12px;\n}\n\n.div-hotelcity .div-wrapimg {\n  position: absolute;\n  height: 78px;\n  width: 104px;\n  overflow: hidden;\n}\n\n.div-hotelcity .div-wrapimg.img-list {\n  height: 104px;\n}\n\n.div-hotelcity .img-avatar {\n  left: 0;\n  bottom: 0;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.div-hotelcity .img-avatar.ava-list {\n  border-radius: 4px;\n}\n\n.div-hotelcity .col-mytrip-text-description, .div-hotelcity .col-historytrip-text-description {\n  padding-left: 112px;\n}\n\n.div-hotelcity .text-left {\n  font-size: 13px;\n}\n\n.div-hotelcity .row-height-listtrip {\n  height: 28px;\n}\n\n.div-hotelcity .col-address {\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.text-DC {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n}\n\n.text-bold {\n  font-weight: bold;\n}\n\n.div-DC {\n  margin-top: 17px;\n}\n\n.img-visa {\n  width: 118px;\n  height: 22px;\n  vertical-align: middle;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0cGF5bWVudHNlbGVjdC9mbGlnaHRwYXltZW50c2VsZWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0cGF5bWVudHNlbGVjdC9mbGlnaHRwYXltZW50c2VsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGFBQUE7QUNETjs7QURJRTtFQUNJLDJCQUFBO0FDRE47O0FERU07RUFDRSxlQUFBO0FDQVI7O0FESUU7RUFDRSxjQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNETjs7QURHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNFLGNBQUE7QUNBTjs7QURFRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0NOOztBREVJO0VBRUUsaUJBQUE7RUFDQSxlQUFBO0FDQU47O0FEQ007RUFFRSxjQUFBO0FDQVI7O0FER0k7RUFFSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRFI7O0FER0k7RUFDRSwyQkFBQTtBQ0FOOztBREVJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNDTjs7QURDSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0VSOztBREFJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0VSOztBRENJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNFTjs7QURBSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FDR047O0FEREk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURGRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUNLSjs7QURIRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUo7O0FESkE7RUFFRSxzQkFBQTtBQ01GOztBREpBO0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ01GOztBREpBO0VBQ0U7SUFDRSxnQkFBQTtJQUNBLFVBQUE7RUNPRjtBQUNGOztBREpBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0tKOztBREhBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNNTjs7QURKRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDT0o7O0FETEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNRSjs7QURORTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNTSjs7QURQQTtFQUVJLGVBQUE7RUFDQSxpQkFBQTtBQ1NKOztBRFBBO0VBQ0ksZUFBQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNVTjs7QURSRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDV0o7O0FEVEU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNZSjs7QURWRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDYUo7O0FEWEU7RUFDRSxnQkFBQTtBQ2NKOztBRGJJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2VSOztBRGJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2VSOztBRGJJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDZU47O0FEWkE7RUFFRSxrQkFBQTtBQ2NGOztBRGJJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2VOOztBRFpBO0VBRUUsZ0JBQUE7QUNjRjs7QURaRTtFQUNFLHlCQUFBO0FDY0o7O0FEWk07RUFDRSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUVBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSx5QkFBQTtBQ2FSOztBRFRBO0VBRUUsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ1dGOztBRFJBO0VBRUUsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNVRjs7QURSQTtFQUVJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDVUo7O0FEUkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1VGOztBRFBBO0VBRUksaUJBQUE7QUNTSjs7QURQQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ1NGOztBRFBBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNTRjs7QURQQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNTRjs7QUROQTtFQUNFLFlBQUE7QUNTRjs7QURQQTtFQUVFLFdBQUE7RUFDQSxzQkFBQTtBQ1NGOztBRFBBO0VBQ0UsV0FBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUkE7RUFFRSxrQkFBQTtBQ1VGOztBRFJBO0VBRUUsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNVRjs7QURSQTtFQUVFLFdBQUE7RUFDQSxjQUFBO0FDVUY7O0FEUkE7RUFFUSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNVUjs7QURSSTtFQUVFLGdCQUFBO0FDVU47O0FEUkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtBQ1VSOztBRE5JO0VBQ0UsbUJBQUE7QUNTTjs7QURQSTtFQUNFLGtCQUFBO0FDVU47O0FEUkk7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNXTjs7QURUSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ1lOOztBRFZVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDYVo7O0FEWFU7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUNjZDs7QURYVTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ2NkOztBRFpVO0VBQ0UsU0FBQTtBQ2VaOztBRGJVO0VBQ0UsU0FBQTtBQ2dCWjs7QURaSTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2VSOztBRGJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0FDZVY7O0FEWk07RUFDRSxXQUFBO0FDZVI7O0FEYk07RUFDRSxVQUFBO0FDZ0JSOztBRGRNO0VBQ0UsaUJBQUE7QUNpQlI7O0FEZk07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ2tCUjs7QURmTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDa0JSOztBRGhCTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDbUJSOztBRGpCTTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ29CUjs7QURsQk07RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDcUJSOztBRGpCTTtFQUNFLGlCQUFBO0VBQ0EsZ0NBQUE7QUNvQlI7O0FEakJNO0VBQ0Usb0JBQUE7QUNvQlI7O0FEakJNO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNvQlI7O0FEbEJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNxQlI7O0FEbEJNO0VBQ0UsdUJBQUE7QUNxQlI7O0FEbEJFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUVBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlGQUFBO0VBQ0EsbUZBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBQ3FCSjs7QURoQkU7RUFDRTtJQUNJLDBCQUFBO0VDbUJOO0FBQ0Y7O0FEaEJBO0VBRUUsc0JBQUE7QUNrQkY7O0FEaEJBO0VBRUUsK0JBQUE7QUNrQkY7O0FEaEJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDbUJGOztBRGpCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ29CRjs7QURsQkE7RUFFRSwrQkFBQTtBQ29CRjs7QURoQkU7RUFDRSxnQkFBQTtBQ21CSjs7QURoQkU7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNrQko7O0FEaEJFO0VBQ0UsWUFBQTtBQ2tCSjs7QURoQkk7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNrQko7O0FEaEJJO0VBQ0ksYUFBQTtBQ2tCUjs7QURoQkk7RUFDSSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUNrQlI7O0FEaEJJO0VBQ0ksa0JBQUE7QUNrQlI7O0FEaEJJO0VBQ0ksbUJBQUE7QUNrQlI7O0FEZkk7RUFDRSxlQUFBO0FDaUJOOztBRGZHO0VBQ0MsWUFBQTtBQ2lCSjs7QURmRztFQUNDLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNpQko7O0FEYkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ2dCRjs7QURkQztFQUNFLGlCQUFBO0FDaUJIOztBRGZDO0VBQ0UsZ0JBQUE7QUNrQkg7O0FEaEJDO0VBRUUsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ2tCSDs7QURoQkM7RUFDQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDbUJGOztBRGpCQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDb0JGOztBRGxCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3FCRjs7QURuQkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ3NCRjs7QURwQkE7RUFDQSxjQUFBO0FDdUJBIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0cGF5bWVudHNlbGVjdC9mbGlnaHRwYXltZW50c2VsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgXHJcbiAgICAuZC1mbGV4e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuZGl2LWhlYWRlci10aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA5cHggIWltcG9ydGFudDtcclxuICAgICAgLmRpdi10aXRsZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIC5zcC10aXRsZXtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuXHJcbiAgLnRleHQtc3Vie1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG5cclxuICAuZGl2LXNwbGl0e1xyXG4gICAgICBoZWlnaHQ6IDAuNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkO1xyXG4gICAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcbiAgLnRleHQtcGF4e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgfVxyXG4gIC50ZXh0LXRvdGFsLXByaWNle1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xyXG4gICAgICBjb2xvcjogIzI2YmVkNjtcclxuICB9XHJcblxyXG4gICAgLnRleHQtbmFtZVxyXG4gICAge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAudGV4dC1ncmVlblxyXG4gICAgICB7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDZcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQtZGF0ZVxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHhcclxuICAgIH1cclxuICAgIC5pbWFnZS1jYXJke1xyXG4gICAgICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudG90YWwtcHJpY2V7XHJcbiAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICB9XHJcbiAgICAudG90YWwtcHJpY2UtZHtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XHJcbiAgICAgIH1cclxuICAgIC5idXR0b24yXHJcbiAgICB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLml0ZW0tbWQgaW9uLXRodW1ibmFpbCBpb24taW1nLCAuaXRlbS1tZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDRweDtcclxuICAgICAgaGVpZ2h0OiAxMDRweDtcclxuICAgIH1cclxuICAgIC5pdGVtLml0ZW0tbWQgLmNoZWNrYm94LW1kIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggNHB4O1xyXG4gICAgfVxyXG4gICAgLnRleHQtcm9vbS1wcmljZS1vdGF7XHJcbiAgICAgIGNvbG9yOiM4MjgyODI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIH1cclxuICAudG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfSAgXHJcbiAgLmRpdi13cmFwaW1nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDo4N3B4O1xyXG4gICAgd2lkdGg6IDEwNHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5oclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxufVxyXG4uY2xzLWhyXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6Mjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xyXG4gIC5jb2wtZGVzY3JpcHRpb24tcm9vbXBheW1lbnR7XHJcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICB9XHJcblxyXG59XHJcbi50ZXh0LWluZm9jYXJcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLmNvbWJvLWRlcGFydHVyZS10aW1le1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNHB4O1xyXG4gIH1cclxuICAuY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLWRvd257XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzAwM2M3MTtcclxuICB9XHJcbiAgLmZsaWdodC1wcmljZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGl2LXNwbGl0LXBhbmVse1xyXG4gICAgaGVpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxufVxyXG4udGV4dC1sb2NhdGlvblxyXG57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5jb21iby1kZXBhcnR1cmUtdGltZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC1kb3due1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5mbGlnaHQtcHJpY2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgLmNvbWJvLWZsaWdodC1wcmljZS1sYWJlbC11cHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZWM5NzFmO1xyXG4gIH1cclxuICAuZGl2LXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIC5jb21iby10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogIzAwM2M3MTtcclxuICAgIH1cclxuICAgIC5jb21iby1zdWItdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjZjU5MjMzO1xyXG4gICAgfVxyXG4gICAgLmNvbWJvLXRpdGxle1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4uY2xzLWxpc3Rcclxue1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIC50ZXh0LWxpc3R7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgICBjb2xvcjogIzIyMjIyMjtcclxuICAgIH1cclxufVxyXG4uY2xzLWRpdnBheW1lbnRcclxue1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcblxyXG4gIC5kaXYtcHJvbW90aW9uLXRpY2tldHtcclxuICAgIG1hcmdpbjogMjNweCAwcHggMTZweCAwcHg7XHJcblxyXG4gICAgICAubGJsLXByb21vdGlvbi10aWNrZXR7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDE0cHggNXB4IDEycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgOHB4IDAgcmdiYSgzOCwgMTkwLCAyMTQsIDAuMik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG4udGV4dC1wXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufVxyXG5cclxuLmNscy1yb3doZWlnaHQxXHJcbntcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBoZWlnaHQ6IDgxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4udGV4dC1ub3RlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS42NztcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcbi50ZXh0LWZvb2Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgXHJcbn1cclxuLnRleHQtcHJpY2UtZm9vZFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4udGV4dC10YXhcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4udGV4dC1mb29kXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50ZXh0LWRcclxue1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDNweDtcclxufVxyXG4udGV4dC10b3RhbFxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgXHJcbn1cclxuLmRpdi1zdGFye1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4uaW1nLXBheW9vXHJcbntcclxuICB3aWR0aDogNTBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi5pbWctbW9tb3tcclxuICB3aWR0aDogMzJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG59XHJcbi5jbHMtbWluaGVpZ2h0XHJcbntcclxuICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmlvbi1pdGVtXHJcbntcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gIC0tbWluLWhlaWdodDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG59XHJcbi5pbWdjYXJkXHJcbntcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDEyLjhweDtcclxufVxyXG4udGV4dC1pbmZvYmFua1xyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40NnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgfVxyXG4gICAgLm1sOFxyXG4gICAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgfSBcclxuXHJcbiAgICAvLy8vLy8vLy9AZXh0ZW5kLnBsYWNlbGluZVxyXG4gICAgLm0tcmlnaHQtMTZ7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLTE0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWltZy1zdGVwe1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWxpbmV7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNjZGNkY2Q7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuZGl2LWRlcGFydC10aXRsZSwgLmRpdi1yZXR1cm4tdGl0bGV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgIH1cclxuICAgICAgICAgIC5wbGFjZWxpbmV7ICAgXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICBib3JkZXItbGVmdDogZG90dGVkIDEuNXB4ICNiZGJkYmQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogNjNweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wbGFjZXBvaW50e1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogOHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogOHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IDE3cHg7XHJcbiAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5wbGFjZXBvaW50LXJldHVybntcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgICAgICAgICAgICBsZWZ0OiAxN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvaW50LXRvcHtcclxuICAgICAgICAgICAgdG9wOiA1NXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBvaW50LWJvdHRvbXtcclxuICAgICAgICAgICAgdG9wOiA4MXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC8vLy8vLy8vLy8vL1xyXG4gICAgLmRpdi1mbGlnaHQtaW5vdXR7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE4cHg7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgICAgICAuaW1nLWZsaWdodC1pbm91dHtcclxuICAgICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHRvcDogLTJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi13aWR0aC02MDB7XHJcbiAgICAgICAgd2lkdGg6IDYwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi13aWR0aC02MHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LXJpZ2h0e1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWZsaWdodC1kYXRldGltZXtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0LWZsaWdodC10aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICB9XHJcbiAgICAgIC52LWFsaWduLWNlbnRlcntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmRpdi1zcGxpdHtcclxuICAgICAgICBtYXJnaW46IDE2cHggMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xyXG4gICAgICB9XHJcbiAgICAgIC5pbWctb25ld2F5e1xyXG4gICAgICAgIHdpZHRoOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vLy8vLy8vLy9AZXh0ZW5kIFxyXG4gICAgICAuZGl2LXNwbGl0LWl0ZW17XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjOGM3Y2M7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uby1ib3JkZXItYm90dG9te1xyXG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaXRlbS1kaXNhYmxlZHtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICNiZGJkYmQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtaG90ZmFyZXtcclxuICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dvLXZuYXtcclxuICAgICAgICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG46Om5nLWRlZXB7XHJcbiAgLmNscy1hbGVydC1yZWZyZXNoUHJpY2UgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAgIC1tcy1mbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgZmxleDogMSAxIGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci10b3A6IC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLDAsMCwwKSwuMikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yaWdodDogLjU1cHggc29saWQgcmdiYSh2YXIoLS1pb24tdGV4dC1jb2xvci1yZ2IsMCwwLDApLC4yKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwjMzg4MGZmKSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiAgICAgIFxyXG46Om5nLWRlZXB7XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDM2MHB4KSBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgIC50ZXh0LWZsaWdodC1kYXRldGltZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuaHJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbn1cclxuLmlvbi1pdGVtMVxyXG57XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxufVxyXG4ubGFiZWwtaW5wdXR7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW9uLWNoZWNrYm94e1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW46IC0ycHg7XHJcbn1cclxuLmlvbi1pdGVtMVxyXG57XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxufVxyXG4gICAgXHJcbi5kaXYtaG90ZWxjaXR5e1xyXG4gIC5tLWwtNHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgfVxyXG5cclxuICAuZGl2LWhvdGVsLW5hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgY29sb3I6ICMwMDNjNzE7XHJcbiAgfVxyXG4gIC5pbWctaGVpZ2h0LTEye1xyXG4gICAgaGVpZ2h0OjEycHhcclxuICB9XHJcbiAgICAuZGl2LXdyYXBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0Ojc4cHg7XHJcbiAgICB3aWR0aDogMTA0cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmRpdi13cmFwaW1nLmltZy1saXN0e1xyXG4gICAgICAgIGhlaWdodDoxMDRweDtcclxuICAgIH1cclxuICAgIC5pbWctYXZhdGFyIHtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICAgIC5pbWctYXZhdGFyLmF2YS1saXN0e1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24sLmNvbC1oaXN0b3J5dHJpcC10ZXh0LWRlc2NyaXB0aW9ue1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtbGVmdHtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICB9XHJcbiAgIC5yb3ctaGVpZ2h0LWxpc3R0cmlwe1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICB9XHJcbiAgIC5jb2wtYWRkcmVzc3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICB9XHJcbiAgXHJcbn1cclxuLnRleHQtREN7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuIH1cclxuIC50ZXh0LWJvbGR7XHJcbiAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gfVxyXG4gLmRpdi1EQ3tcclxuICAgbWFyZ2luLXRvcDogMTdweDtcclxuIH1cclxuIC5pbWctdmlzYVxyXG4ge1xyXG4gICB3aWR0aDogMTE4cHg7XHJcbiAgIGhlaWdodDogMjJweDtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuIH1cclxuIC5kaXYtREt7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkY1O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5jaGVja2JveC1ES3tcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB3aWR0aDogMjhweDtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcbi50ZXh0LURLe1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIGNvbG9yOiAjNzE3NDg0O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbn1cclxuLmJ0bi1kaXNhYmxlZHtcclxuICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG59XHJcbi50ZXh0LWxpbmstREt7XHJcbmNvbG9yOiAjMmY4MGVkXHJcbn1cclxuIiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDlweCAhaW1wb3J0YW50O1xufVxuLmRpdi1oZWFkZXItdGl0bGUgLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnNwLXRpdGxlIHtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi50ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXNwbGl0IHtcbiAgaGVpZ2h0OiAwLjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcbiAgbWFyZ2luOiAxNnB4IDA7XG59XG5cbi50ZXh0LXBheCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi50ZXh0LXRvdGFsLXByaWNlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LW5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnRleHQtbmFtZSAudGV4dC1ncmVlbiB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1kYXRlIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW1hZ2UtY2FyZCB7XG4gIGRpc3BsYXk6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuLnRvdGFsLXByaWNlIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLnRvdGFsLXByaWNlLWQge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG59XG5cbi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uaXRlbS1tZCBpb24tdGh1bWJuYWlsIGlvbi1pbWcsIC5pdGVtLW1kIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xufVxuXG4uaXRlbS5pdGVtLW1kIC5jaGVja2JveC1tZCB7XG4gIHBvc2l0aW9uOiBzdGF0aWM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDlweCA5cHggOXB4IDRweDtcbn1cblxuLnRleHQtcm9vbS1wcmljZS1vdGEge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogLTIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5kaXYtd3JhcGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA4N3B4O1xuICB3aWR0aDogMTA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY2xzLWhyIHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBoZWlnaHQ6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMjg3cHgpIGFuZCAobWF4LXdpZHRoOiAzNTlweCkge1xuICAuY29sLWRlc2NyaXB0aW9uLXJvb21wYXltZW50IHtcbiAgICBtYXgtd2lkdGg6IDE4OHB4O1xuICAgIGxlZnQ6IDEycHg7XG4gIH1cbn1cbi50ZXh0LWluZm9jYXIge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtbG9jYXRpb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZGVwYXJ0dXJlLXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG59XG5cbi5jb21iby1mbGlnaHQtcHJpY2UtbGFiZWwtZG93biB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG5cbi5mbGlnaHQtcHJpY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29tYm8tZmxpZ2h0LXByaWNlLWxhYmVsLXVwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2VjOTcxZjtcbn1cblxuLmRpdi10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZGl2LXRpdGxlIC5jb21iby10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDNjNzE7XG59XG4uZGl2LXRpdGxlIC5jb21iby1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2Y1OTIzMztcbn1cbi5kaXYtdGl0bGUgLmNvbWJvLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNscy1saXN0IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xufVxuLmNscy1saXN0IC50ZXh0LWxpc3Qge1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5jbHMtZGl2cGF5bWVudCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2xzLWRpdnBheW1lbnQgLmRpdi1wcm9tb3Rpb24tdGlja2V0IHtcbiAgbWFyZ2luOiAyM3B4IDBweCAxNnB4IDBweDtcbn1cbi5jbHMtZGl2cGF5bWVudCAuZGl2LXByb21vdGlvbi10aWNrZXQgLmxibC1wcm9tb3Rpb24tdGlja2V0IHtcbiAgcGFkZGluZzogNXB4IDE0cHggNXB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggMCByZ2JhKDM4LCAxOTAsIDIxNCwgMC4yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MjgyMjtcbn1cblxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5jbHMtcm93aGVpZ2h0MSB7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuLnRleHQtZm9vZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1wcmljZS1mb29kIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXRheCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1mb29kIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LWQge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LXN0YXIge1xuICBwYWRkaW5nOiAycHg7XG59XG5cbi5pbWctcGF5b28ge1xuICB3aWR0aDogNTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmltZy1tb21vIHtcbiAgd2lkdGg6IDMycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLmNscy1taW5oZWlnaHQge1xuICAtLW1pbi1oZWlnaHQ6IDQ4cHg7XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi5pbWdjYXJkIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMTIuOHB4O1xufVxuXG4udGV4dC1pbmZvYmFuayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubWw4IHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbn1cblxuLm0tcmlnaHQtMTYge1xuICBtYXJnaW4tcmlnaHQ6IC0xNHB4O1xufVxuXG4uZGl2LWltZy1zdGVwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZGl2LWxpbmUge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjY2RjZGNkO1xuICBtYXJnaW4tdG9wOiAxNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4uZGl2LWRlcGFydC10aXRsZSwgLmRpdi1yZXR1cm4tdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5cbi5wbGFjZWxpbmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxLjVweCAjYmRiZGJkO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDYzcHg7XG59XG5cbi5wbGFjZXBvaW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjY2NjO1xuICBsZWZ0OiAxN3B4O1xufVxuXG4ucGxhY2Vwb2ludC1yZXR1cm4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA4cHg7XG4gIGhlaWdodDogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2NjY2M7XG4gIGxlZnQ6IDE3cHg7XG59XG5cbi5wb2ludC10b3Age1xuICB0b3A6IDU1cHg7XG59XG5cbi5wb2ludC1ib3R0b20ge1xuICB0b3A6IDgxcHg7XG59XG5cbi5kaXYtZmxpZ2h0LWlub3V0IHtcbiAgcGFkZGluZzogMHB4IDE4cHg7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmxpZ2h0LWlub3V0IC5pbWctZmxpZ2h0LWlub3V0IHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IC0ycHg7XG59XG5cbi5kaXYtd2lkdGgtNjAwIHtcbiAgd2lkdGg6IDYwMCU7XG59XG5cbi5kaXYtd2lkdGgtNjAge1xuICB3aWR0aDogNjAlO1xufVxuXG4udGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1mbGlnaHQtZGF0ZXRpbWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1mbGlnaHQtdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnYtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXYtc3BsaXQge1xuICBtYXJnaW46IDE2cHggMDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2JkYmRiZDtcbn1cblxuLmltZy1vbmV3YXkge1xuICB3aWR0aDogMTJweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cblxuLmRpdi1zcGxpdC1pdGVtIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYzhjN2NjO1xufVxuXG4ubm8tYm9yZGVyLWJvdHRvbSB7XG4gIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uaXRlbS1kaXNhYmxlZCB7XG4gIC0tYmFja2dyb3VuZDogI2JkYmRiZDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1ob3RmYXJlIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1sZWZ0OiAycHg7XG59XG5cbi5sb2dvLXZuYSB7XG4gIGhlaWdodDogMzRweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNscy1hbGVydC1yZWZyZXNoUHJpY2UgLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zIHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIC1tcy1mbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBmbGV4OiAxIDEgYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMC41NXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLXRleHQtY29sb3ItcmdiLCAwLCAwLCAwKSwgMC4yKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDAuNTVweCBzb2xpZCByZ2JhKHZhcigtLWlvbi10ZXh0LWNvbG9yLXJnYiwgMCwgMCwgMCksIDAuMikgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzYwcHgpIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICA6Om5nLWRlZXAgLnRleHQtZmxpZ2h0LWRhdGV0aW1lIHtcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgfVxufVxuXG5ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5pb24taXRlbTEge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufVxuXG4uaW9uLWl0ZW0xIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbn1cblxuLmRpdi1ob3RlbGNpdHkgLm0tbC00IHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5kaXYtaG90ZWwtbmFtZSB7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzAwM2M3MTtcbn1cbi5kaXYtaG90ZWxjaXR5IC5pbWctaGVpZ2h0LTEyIHtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuLmRpdi1ob3RlbGNpdHkgLmRpdi13cmFwaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDc4cHg7XG4gIHdpZHRoOiAxMDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5kaXYtaG90ZWxjaXR5IC5kaXYtd3JhcGltZy5pbWctbGlzdCB7XG4gIGhlaWdodDogMTA0cHg7XG59XG4uZGl2LWhvdGVsY2l0eSAuaW1nLWF2YXRhciB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uZGl2LWhvdGVsY2l0eSAuaW1nLWF2YXRhci5hdmEtbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5kaXYtaG90ZWxjaXR5IC5jb2wtbXl0cmlwLXRleHQtZGVzY3JpcHRpb24sIC5kaXYtaG90ZWxjaXR5IC5jb2wtaGlzdG9yeXRyaXAtdGV4dC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctbGVmdDogMTEycHg7XG59XG4uZGl2LWhvdGVsY2l0eSAudGV4dC1sZWZ0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRpdi1ob3RlbGNpdHkgLnJvdy1oZWlnaHQtbGlzdHRyaXAge1xuICBoZWlnaHQ6IDI4cHg7XG59XG4uZGl2LWhvdGVsY2l0eSAuY29sLWFkZHJlc3Mge1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnRleHQtREMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRpdi1EQyB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG5cbi5pbWctdmlzYSB7XG4gIHdpZHRoOiAxMThweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uZGl2LURLIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaGVja2JveC1ESyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50ZXh0LURLIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzcxNzQ4NDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWxpbmstREsge1xuICBjb2xvcjogIzJmODBlZDtcbn0iXX0= */"

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