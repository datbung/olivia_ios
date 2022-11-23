(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightdcdetail-flightdcdetail-module"],{

/***/ "./src/app/flightdcdetail/flightdcdetail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/flightdcdetail/flightdcdetail.module.ts ***!
  \*********************************************************/
/*! exports provided: FlightdcdetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightdcdetailPageModule", function() { return FlightdcdetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightdcdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightdcdetail.page */ "./src/app/flightdcdetail/flightdcdetail.page.ts");







const routes = [
    {
        path: '',
        component: _flightdcdetail_page__WEBPACK_IMPORTED_MODULE_6__["FlightdcdetailPage"]
    }
];
let FlightdcdetailPageModule = class FlightdcdetailPageModule {
};
FlightdcdetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightdcdetail_page__WEBPACK_IMPORTED_MODULE_6__["FlightdcdetailPage"]]
    })
], FlightdcdetailPageModule);



/***/ }),

/***/ "./src/app/flightdcdetail/flightdcdetail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/flightdcdetail/flightdcdetail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thêm đưa\n              đón</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngIf=\"_flightService.itemFlightCache.isAirportFirst\" class=\"ion-item margin-top-10\">\n    <label slot=\"start\" class=\"text-title\">Đón tiễn tại {{_flightService.itemFlightCache.departCity}}</label>\n    <ion-toggle mode=\"ios\" class=\"margin-right-16\" slot=\"end\" [(ngModel)]=\"isblocktextDepart\" (ionChange)=\"toggleChangeDepart($event)\" \n      color=\"success\"></ion-toggle>\n  </ion-item>\n\n  <div *ngIf=\"!loaddonedepart && isblocktextDepart\" class=\"div-load-price\">\n   \n        <div [ngClass]=\"idx == loadsk.length-1 ? 'div-item-flight-other':'div-item-flight-other m-b-8'\"  *ngFor=\"let itemsk of loadsk; let idx = index\" style=\"height: 80px;margin-top: 20px;\">\n          <ion-skeleton-text animated style=\"height: 22px;margin-bottom: 10px\"></ion-skeleton-text>\n          <div class=\"div-first d-flex\">\n            <div >\n              <ion-skeleton-text animated style=\"height: 22px\"></ion-skeleton-text>\n                <div class=\"d-flex\">\n                  <ion-skeleton-text animated style=\"width: 150px;height: 16px\"></ion-skeleton-text>\n                </div>\n              </div>\n          </div>\n\n          <div class=\"div-second d-flex p-top-8\" style=\"margin-top: -5px\">\n            <div class=\"div-button\">\n              <ion-skeleton-text animated style=\"width: 100px;height: 30px;top: -28px\"></ion-skeleton-text>\n            </div>\n          </div>\n        </div>\n  </div>\n\n  <div *ngIf=\"loaddonedepart\" class=\"div-item-service\">\n    <div *ngIf=\"isblocktextDepart&&!departTotalPrice&&textDepart\" class=\"div-flex padding-10\" >\n      <div (click)=\"showmsg(textDepart)\" class=\"div-title-place\">\n        <label class=\"margin-label\">\n          {{textDepart}}\n        </label>\n      </div>   \n      <div (click)=\"edit('From')\">\n        <img class=\"img-edit\" src=\"./assets/ic_flight/edit.svg\">\n       </div>\n    </div>\n    <div *ngIf=\"isblocktextDepart&&departTotalPrice\" class=\"padding-10\">\n      <div class=\"div-flex\">\n        <div class=\"div-title-place\">\n          <label class=\"margin-label\">\n            {{textDepart}}\n          </label>\n        </div>\n       <div (click)=\"edit('From')\">\n        <img class=\"img-edit\" src=\"./assets/ic_flight/edit.svg\">\n       </div>\n      </div>\n\n      <div *ngIf=\"Vehicle_Go\" class=\"div-info-car\">\n        <div class=\"margin-left-10 align-center text-info\">\n          Chiều đi\n        </div>\n        <div class=\"text-label-right align-center text-info\">\n          Xe {{Vehicle_Go}}\n        </div>\n      </div>\n\n      <ion-row *ngIf=\"PhaseGo\">\n        <ion-col size=\"8\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{PhaseGo.pickUpTime.text}}\n                </div>\n                <div (click)=\"showmsg(textDepart)\" class=\"text-info-place\">\n                  {{textDepart}}\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\">\n              <img src=\"./assets/ic_flight/ic_car.svg\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <div *ngIf=\"PhaseGo\">\n                <div class=\"text-info-time\">\n                  {{PhaseGo.dropOffTime.text}}\n                </div>\n                <div (click)=\"showmsg(_flightService.itemFlightCache.departAirport)\" class=\"text-info-place\">\n                  {{_flightService.itemFlightCache.departAirport}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"align-center\">\n          <div class=\"text-price\">\n            {{gf.numberToCurrency(departPriceGo, '.')}}đ\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"Vehicle_Return\" class=\"div-info-car\">\n        <div class=\"margin-left-10 align-center text-info\">\n          Chiều về\n        </div>\n        <div class=\"text-label-right align-center text-info\">\n          Xe {{Vehicle_Return}}\n        </div>\n      </div>\n\n      <ion-row *ngIf=\"PhaseReturn\">\n        <ion-col size=\"8\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{PhaseReturn.pickUpTime.text}}\n                </div>\n                <div (click)=\"showmsg(_flightService.itemFlightCache.departAirport)\" class=\"text-info-place\">\n                  {{_flightService.itemFlightCache.departAirport}}\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\">\n              <img src=\"./assets/ic_flight/ic_car.svg\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{PhaseReturn.dropOffTime.text}}\n                </div>\n                <div (click)=\"showmsg(textDepart)\" class=\"text-info-place\">\n                  {{textDepart}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"align-center\">\n          <div class=\"text-price\">\n            {{gf.numberToCurrency(departPriceTo, '.')}}đ\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <hr class=\"cls-hr\">\n\n      <ion-row>\n        <ion-col size=\"5\" class=\"align-center\">\n          <label>\n            Tổng cộng\n          </label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <div style=\"text-align: right;\">\n            <label class=\"text-price-total\">\n              + {{gf.numberToCurrency(departTotalPrice, '.')}}đ\n            </label>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </div>\n    \n  </div>\n  <div *ngIf=\"loaddonedepart && isblocktextDepart&&!departTotalPrice && textDepart\">\n    <span class=\"font-gif\">Không có chuyến xe...</span>\n</div>\n<ion-row *ngIf=\"loaddonedepart && isblocktextDepart&&!departTotalPrice && !textDepart\"  class=\"row-search\">\n  <ion-col (click)=\"edit('From')\" size=\"1\" class=\"align-self\">\n    <div>\n      <img *ngIf=\"isblocktextDepart\" src=\"./assets/ic_flight/icfilght_location.svg\">\n    </div>\n  </ion-col>\n  <ion-col  (click)=\"edit('From')\" size=\"11\" class=\"align-self\">\n    <div class=\"div-title-place\">\n      <label class=\"text-place\">\n        Nhập sân bay, địa điểm hoặc tên khách sạn\n       </label>\n    </div>\n   \n  </ion-col>\n</ion-row>\n  <!-- return -->\n  <ion-item *ngIf=\"_flightService.itemFlightCache.isAirportSecond\" class=\"ion-item\">\n    <label slot=\"start\" class=\"text-title\">Đón tiễn tại {{_flightService.itemFlightCache.returnCity}}</label>\n    <ion-toggle mode=\"ios\" class=\"margin-right-16\" slot=\"end\" [(ngModel)]=\"isblocktextReturn\" (ionChange)=\"toggleChangeReturn($event)\" name=\"kiwi\"\n      color=\"success\"></ion-toggle>\n  </ion-item>\n  <div *ngIf=\"!loaddonereturn && isblocktextReturn\" class=\"div-load-price\">\n   \n    <div [ngClass]=\"idx == loadsk.length-1 ? 'div-item-flight-other':'div-item-flight-other m-b-8'\"  *ngFor=\"let itemsk of loadsk; let idx = index\" style=\"height: 80px;margin-top: 20px;\">\n      <ion-skeleton-text animated style=\"height: 22px;margin-bottom: 10px\"></ion-skeleton-text>\n      <div class=\"div-first d-flex\">\n        <div >\n          <ion-skeleton-text animated style=\"height: 22px\"></ion-skeleton-text>\n            <div class=\"d-flex\">\n              <ion-skeleton-text animated style=\"width: 150px;height: 16px\"></ion-skeleton-text>\n            </div>\n          </div>\n      </div>\n\n      <div class=\"div-second d-flex p-top-8\" style=\"margin-top: -5px\">\n        <div class=\"div-button\">\n          <ion-skeleton-text animated style=\"width: 100px;height: 30px;top: -28px\"></ion-skeleton-text>\n        </div>\n      </div>\n    </div>\n</div>\n  <div *ngIf=\"loaddonereturn\" class=\"div-item-service\">\n    <div *ngIf=\"isblocktextReturn&&!returnTotalPrice&&textReturn\" class=\"div-flex padding-10\" >\n      <div (click)=\"showmsg(textReturn)\" class=\"div-title-place\">\n        <label class=\"margin-label\">\n          {{textReturn}}\n        </label>\n      </div>   \n      <div (click)=\"edit('To')\">\n        <img class=\"img-edit\" src=\"./assets/ic_flight/edit.svg\">\n       </div>\n    </div>\n    <div *ngIf=\"isblocktextReturn&&returnTotalPrice\" class=\"padding-10\">\n      <div  class=\"div-flex\" >\n        <div (click)=\"showmsg(textReturn)\" class=\"div-title-place\">\n          <label class=\"margin-label\">\n            {{textReturn}}\n          </label>\n        </div>   \n        <div (click)=\"edit('To')\">\n          <img class=\"img-edit\" src=\"./assets/ic_flight/edit.svg\">\n         </div>\n      </div>\n\n      <div *ngIf=\"returnVehicle_Go\" class=\"div-info-car\">\n        <div class=\"margin-left-10 align-center text-info\">\n          Chiều đi\n        </div>\n        <div class=\"text-label-right align-center text-info\">\n          Xe {{returnVehicle_Go}}\n        </div>\n      </div>\n\n      <ion-row *ngIf=\"returnPhaseGo\">\n        <ion-col size=\"8\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{returnPhaseGo.pickUpTime.text}}\n                </div>\n                <div (click)=\"showmsg(_flightService.itemFlightCache.returnAirport)\" class=\"text-info-place\">\n                  {{_flightService.itemFlightCache.returnAirport}}\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\">\n              <img src=\"./assets/ic_flight/ic_car.svg\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{returnPhaseGo.dropOffTime.text}}\n                </div>\n                <div (click)=\"showmsg(textReturn)\" class=\"text-info-place\">\n                  {{textReturn}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col *ngIf=\"returnTotalPrice\" size=\"4\" class=\"align-center\">\n          <div class=\"text-price\">\n            {{gf.numberToCurrency(returnPriceGo, '.')}}đ\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      <div *ngIf=\"returnVehicle_Return\" class=\"div-info-car\">\n        <div class=\"margin-left-10 align-center text-info\">\n          Chiều về\n        </div>\n        <div class=\"text-label-right align-center text-info\">\n          Xe {{returnVehicle_Return}}\n        </div>\n      </div>\n\n      <ion-row *ngIf=\"returnPhaseReturn\">\n        <ion-col size=\"8\">\n          <ion-row>\n            <ion-col size=\"5\">\n              <div>\n                <div class=\"text-info-time\">\n                  {{returnPhaseReturn.pickUpTime.text}}\n                </div>\n                <div (click)=\"showmsg(textReturn)\" class=\"text-info-place\">\n                  {{textReturn}}\n                </div>\n              </div>\n            </ion-col>\n            <ion-col size=\"2\">\n              <img src=\"./assets/ic_flight/ic_car.svg\">\n            </ion-col>\n            <ion-col size=\"5\">\n              <div *ngIf=\"returnPhaseReturn\">\n                <div class=\"text-info-time\">\n                  {{returnPhaseReturn.dropOffTime.text}}\n                </div>\n                <div (click)=\"showmsg(_flightService.itemFlightCache.returnAirport)\" class=\"text-info-place\">\n                  {{_flightService.itemFlightCache.returnAirport}}\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"align-center\">\n          <div class=\"text-price\">\n            {{gf.numberToCurrency(returnPriceTo, '.')}}đ\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <hr class=\"cls-hr\">\n\n      <ion-row>\n        <ion-col size=\"5\" class=\"align-center\">\n          <label>\n            Tổng cộng\n          </label>\n        </ion-col>\n        <ion-col size=\"7\">\n          <div style=\"text-align: right;\">\n            <label class=\"text-price-total\">\n              + {{gf.numberToCurrency(returnTotalPrice, '.')}}đ\n            </label>\n          </div>\n\n        </ion-col>\n      </ion-row>\n    </div>\n    \n  </div>\n  <div  *ngIf=\"loaddonereturn && isblocktextReturn&&!returnTotalPrice && textReturn\">\n      <span class=\"font-gif\">Không có chuyến xe...</span>\n  </div>\n  <ion-row *ngIf=\"loaddonereturn && isblocktextReturn&&!returnTotalPrice && !textReturn\"  class=\"row-search\">\n    <ion-col (click)=\"edit('To')\" size=\"1\" class=\"align-self\">\n      <div>\n        <img *ngIf=\"isblocktextReturn\" src=\"./assets/ic_flight/icfilght_location.svg\">\n      </div>\n    </ion-col>\n    <ion-col  (click)=\"edit('To')\" size=\"11\" class=\"align-self\">\n      <div class=\"div-title-place\">\n        <label class=\"text-place\">\n          Nhập sân bay, địa điểm hoặc tên khách sạn\n         </label>\n      </div>\n     \n    </ion-col>\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <div *ngIf=\"TotalPrice\" class=\"div-footer d-flex-footer\">\n    <div class=\"d-flex-footer div-width-100\">\n      <div  class=\"div-total\">\n        <div class=\"d-flex-footer text-sub-total\">\n          Tổng {{CountTrip}} chuyến\n        </div>\n        <div class=\"text-total\">\n          {{gf.numberToCurrency(TotalPrice, '.')}}đ\n        </div>\n      </div>\n      <div class=\"div-button\">\n        <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Thêm đưa đón</button>\n      </div>\n    </div>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightdcdetail/flightdcdetail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/flightdcdetail/flightdcdetail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: 300;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n\n.row-search {\n  border-radius: 2px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  height: 50px;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #828282;\n}\n\n.align-self {\n  align-self: center;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n\n.text-block {\n  color: #bdbdbd;\n}\n\n.div-item-service {\n  border-radius: 3px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  margin-top: 12px;\n  margin-bottom: 18px;\n}\n\n.div-title-place {\n  width: 100%;\n  font-size: 16px;\n  line-height: 1.4;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n\n.padding-10 {\n  padding: 10px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.div-info-car {\n  display: flex;\n  background-color: #ecf0f5;\n  margin-top: 15px;\n  height: 30px;\n}\n\n.margin-label {\n  margin-top: 19px;\n  margin-left: 4px;\n}\n\n.margin-left-10 {\n  margin-left: 10px;\n}\n\n.text-label-right {\n  right: 33px;\n  position: absolute;\n}\n\n.align-center {\n  align-self: center;\n}\n\n.cls-hr {\n  background-color: #ecf0f5;\n  height: 2px;\n}\n\n.text-info {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-time {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-place {\n  font-size: 12px;\n  line-height: 1.2;\n  color: #828282;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-price {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #26bed6;\n  text-align: right;\n}\n\n.text-price-total {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.4;\n  color: #26bed6;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 14px;\n  color: #333333;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.margin-right-16 {\n  margin-right: -16px;\n}\n\n.div-first {\n  position: relative;\n}\n\n.div-first .div-departcode {\n  width: 33px;\n  height: 14px;\n  border-radius: 12px;\n  background-color: #f3f3f3;\n  font-size: 10px;\n  letter-spacing: 0.12px;\n  color: #828282;\n  text-align: center;\n}\n\n.div-first .flight-price {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-item-flight-other {\n  border: none !important;\n}\n\n.m-b-8 {\n  margin-bottom: 8px;\n}\n\n.div-second {\n  margin-top: 12px;\n  position: relative;\n}\n\n.div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: -6px;\n}\n\n.div-second .div-button .btn-select {\n  width: 80px !important;\n  height: 29px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  margin: 0;\n}\n\n.img-edit {\n  width: 20px;\n  height: 20px;\n}\n\n.font-gif {\n  color: grey;\n  font-size: 14px;\n}\n\n.div-item-service-none {\n  box-shadow: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRkY2RldGFpbC9mbGlnaHRkY2RldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGRjZGV0YWlsL2ZsaWdodGRjZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0FDTUo7O0FESkE7RUFDSSxjQUFBO0FDT0o7O0FETEE7RUFDSSxrQkFBQTtFQUNBLDJDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1NKOztBRE5BO0VBQ0ksYUFBQTtBQ1NKOztBRFBBO0VBQ0ksYUFBQTtBQ1VKOztBRFJBO0VBQ0ksYUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDV0o7O0FEVEE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDWUo7O0FEVkE7RUFDSSxpQkFBQTtBQ2FKOztBRFhBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDY0o7O0FEWkE7RUFDSSxrQkFBQTtBQ2VKOztBRGJBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0FDZ0JKOztBRGRBO0VBQ0ksZUFBQTtFQUNGLGdCQUFBO0VBQ0EsY0FBQTtBQ2lCRjs7QURmQTtFQUNJLGVBQUE7RUFDRixnQkFBQTtFQUNBLGNBQUE7QUNrQkY7O0FEaEJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ21CSjs7QURqQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNvQko7O0FEbEJBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcUJKOztBRG5CQTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDc0JKOztBRHBCSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ3NCUjs7QURwQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ3NCWjs7QURuQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ3FCWjs7QURqQkk7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNtQlI7O0FEaEJJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FDaUJSOztBRGRBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNpQko7O0FEZkE7RUFDSSxtQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxrQkFBQTtBQ21CSjs7QURqQkc7RUFDSyxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNrQlI7O0FEZEk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ2dCUjs7QURiQTtFQUNJLGFBQUE7QUNnQko7O0FEZEE7RUFDSSx1QkFBQTtBQ2lCSjs7QURmQTtFQUNJLGtCQUFBO0FDa0JKOztBRGhCQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNtQko7O0FEZkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNpQlI7O0FEZlE7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBRUEsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUVBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ2VaOztBRFhBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNjSjs7QURaSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDZVI7O0FEYkk7RUFDSSwwQkFBQTtBQ2dCUiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGRjZGV0YWlsL2ZsaWdodGRjZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uaW9uLWl0ZW17XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cbi5yb3ctc2VhcmNoe1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4udGV4dC1wbGFjZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi5hbGlnbi1zZWxme1xuICAgIGFsaWduLXNlbGY6IGNlbnRlclxufVxuLm1hcmdpbi10b3AtMTB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi50ZXh0LWJsb2Nre1xuICAgIGNvbG9yOiAjYmRiZGJkO1xufVxuLmRpdi1pdGVtLXNlcnZpY2V7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuLmRpdi10aXRsZS1wbGFjZXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG59XG4ucGFkZGluZy0xMHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLmRpdi1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWluZm8tY2Fye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmNTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIGhlaWdodDogMzBweDtcbn1cbi5tYXJnaW4tbGFiZWx7XG4gICAgbWFyZ2luLXRvcDogMTlweDtcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xufVxuLm1hcmdpbi1sZWZ0LTEwe1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnRleHQtbGFiZWwtcmlnaHR7XG4gICAgcmlnaHQ6IDMzcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmFsaWduLWNlbnRlcntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IDtcbn1cbi5jbHMtaHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmNTtcbiAgICBoZWlnaHQ6IDJweDtcbn1cbi50ZXh0LWluZm97XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzQ5NGI1NTsgXG59XG4udGV4dC1pbmZvLXRpbWV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzQ5NGI1NTsgXG59XG4udGV4dC1pbmZvLXBsYWNle1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi50ZXh0LXByaWNle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnRleHQtcHJpY2UtdG90YWx7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMyNmJlZDY7XG59XG4uZGl2LWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmRpdi10b3RhbHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuLmQtZmxleC1mb290ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5tYXJnaW4tcmlnaHQtMTZ7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cbi5kaXYtZmlyc3R7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAuZGl2LWRlcGFydGNvZGV7XG4gICAgICAgIHdpZHRoOiAzM3B4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG5cbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xMnB4O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuIFxuXG4gICAgLmZsaWdodC1wcmljZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gICAgICAgIGNvbG9yOiAjNDk0YjU1O1xuICAgIH1cbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaXRlbS1mbGlnaHQtb3RoZXJ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG4ubS1iLTh7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLmRpdi1zZWNvbmR7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgIFxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB0b3A6IC02cHg7XG5cbiAgICAgICAgLmJ0bi1zZWxlY3R7XG4gICAgICAgICAgICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuLmltZy1lZGl0e1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbiAgICAuZm9udC1naWYge1xuICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZGl2LWl0ZW0tc2VydmljZS1ub25le1xuICAgICAgICBib3gtc2hhZG93OiAwcHggIWltcG9ydGFudDtcblxuICAgIH1cbiAgIFxuIiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbn1cblxuLnJvdy1zZWFyY2gge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4udGV4dC1wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5hbGlnbi1zZWxmIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubWFyZ2luLXRvcC0xMCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0LWJsb2NrIHtcbiAgY29sb3I6ICNiZGJkYmQ7XG59XG5cbi5kaXYtaXRlbS1zZXJ2aWNlIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uZGl2LXRpdGxlLXBsYWNlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5wYWRkaW5nLTEwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1pbmZvLWNhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLm1hcmdpbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDE5cHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbi5tYXJnaW4tbGVmdC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGV4dC1sYWJlbC1yaWdodCB7XG4gIHJpZ2h0OiAzM3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5hbGlnbi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtaHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGY1O1xuICBoZWlnaHQ6IDJweDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM0OTRiNTU7XG59XG5cbi50ZXh0LWluZm8tdGltZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM0OTRiNTU7XG59XG5cbi50ZXh0LWluZm8tcGxhY2Uge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnRleHQtcHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtcHJpY2UtdG90YWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwge1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFyZ2luLXJpZ2h0LTE2IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLmRpdi1maXJzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtZmlyc3QgLmRpdi1kZXBhcnRjb2RlIHtcbiAgd2lkdGg6IDMzcHg7XG4gIGhlaWdodDogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4xMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1maXJzdCAuZmxpZ2h0LXByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ4cHg7XG4gIGNvbG9yOiAjNDk0YjU1O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1pdGVtLWZsaWdodC1vdGhlciB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubS1iLTgge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5kaXYtc2Vjb25kIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1zZWNvbmQgLmRpdi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgdG9wOiAtNnB4O1xufVxuLmRpdi1zZWNvbmQgLmRpdi1idXR0b24gLmJ0bi1zZWxlY3Qge1xuICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmltZy1lZGl0IHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmZvbnQtZ2lmIHtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRpdi1pdGVtLXNlcnZpY2Utbm9uZSB7XG4gIGJveC1zaGFkb3c6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightdcdetail/flightdcdetail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/flightdcdetail/flightdcdetail.page.ts ***!
  \*******************************************************/
/*! exports provided: FlightdcdetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightdcdetailPage", function() { return FlightdcdetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _flightdcpickaddressinput_flightdcpickaddressinput_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../flightdcpickaddressinput/flightdcpickaddressinput.page */ "./src/app/flightdcpickaddressinput/flightdcpickaddressinput.page.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let FlightdcdetailPage = class FlightdcdetailPage {
    constructor(_flightService, gf, navCtrl, activatedRoute, loadingCtrl, toastCtrl, modalCtrl) {
        this._flightService = _flightService;
        this.gf = gf;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.selectedTimePhaseGo = [];
        this.selectedTimeReturnPhaseGo = [];
        this.selectedTimePhaseTo = [];
        this.selectedTimeReturnPhaseTo = [];
        this.departPriceGo = 0;
        this.departPriceTo = 0;
        this.returnPriceGo = 0;
        this.returnPriceTo = 0;
        this.departTotalPrice = 0;
        this.returnTotalPrice = 0;
        this.TotalPrice = 0;
        this.CountTrip = 0;
        this.CountGo = 0;
        this.CountReturn = 0;
        this.loaddonedepart = false;
        this.loaddonereturn = false;
        this.loadsk = [1, 2];
    }
    goback() {
        this._flightService.itemFlightCache.isblocktextDepart = this.isblocktextDepart;
        this._flightService.itemFlightCache.isblocktextReturn = this.isblocktextReturn;
        this._flightService.itemTranferChange.emit(true);
        this.navCtrl.navigateBack('/flightdcpickaddress');
    }
    ngOnInit() {
        this.isblocktextDepart = this.activatedRoute.snapshot.paramMap.get('isDepart');
        this.isblocktextReturn = this.activatedRoute.snapshot.paramMap.get('isReturn');
        if (this.isblocktextDepart == 'true') {
            this.isblocktextDepart = true;
        }
        else {
            this.isblocktextDepart = false;
        }
        if (this.isblocktextReturn == 'true') {
            this.isblocktextReturn = true;
        }
        else {
            this.isblocktextReturn = false;
        }
        if (this.isblocktextDepart) {
            this.textDepart = this._flightService.itemFlightCache.departDCPlace.description;
            this.gf.getDirection(this._flightService.itemFlightCache.departDCPlace.place_id, this._flightService.itemFlightCache.departDCAirport, this._flightService.itemFlightCache.departFlight.departTime, true).then(data => {
                this.getDirectionFrom(data.data, 0);
            });
        }
        else {
            this.loaddonedepart = true;
        }
        if (this.isblocktextReturn) {
            this.textReturn = this._flightService.itemFlightCache.returnDCPlace.description;
            this.gf.getDirection(this._flightService.itemFlightCache.returnDCAirport, this._flightService.itemFlightCache.returnDCPlace.place_id, this._flightService.itemFlightCache.departFlight.landingTime, false).then(data => {
                this.getDirectionFrom(data.data, 1);
            });
        }
        else {
            this.loaddonereturn = true;
        }
    }
    toggleChangeDepart(ev) {
        this.isblocktextDepart = ev.detail.checked;
        this.loaddonedepart = false;
        if (this.isblocktextDepart) {
            if (this._flightService.itemFlightCache.departDCPlace) {
                this.textDepart = this._flightService.itemFlightCache.departDCPlace.description;
                this.gf.getDirection(this._flightService.itemFlightCache.departDCPlace.place_id, this._flightService.itemFlightCache.departDCAirport, this._flightService.itemFlightCache.departFlight.departTime, true).then(data => {
                    this.getDirectionFrom(data.data, 0);
                });
            }
            else {
                this.loaddonedepart = true;
            }
        }
        else {
            this.funcTotalPrice(0);
        }
    }
    toggleChangeReturn(ev) {
        this.isblocktextReturn = ev.detail.checked;
        this.loaddonereturn = false;
        if (this.isblocktextReturn) {
            if (this._flightService.itemFlightCache.returnDCPlace) {
                this.textReturn = this._flightService.itemFlightCache.returnDCPlace.description;
                this.gf.getDirection(this._flightService.itemFlightCache.returnDCAirport, this._flightService.itemFlightCache.returnDCPlace.place_id, this._flightService.itemFlightCache.departFlight.landingTime, false).then(data => {
                    this.getDirectionFrom(data.data, 1);
                });
            }
            else {
                this.loaddonereturn = true;
            }
        }
        else {
            this.funcTotalPrice(1);
        }
    }
    confirm() {
        if (!this.loaddonedepart || !this.loaddonereturn) {
            this.presentToastwarming("Đang tìm chuyến xe vui lòng đợi trong giây lát!!!");
            return;
        }
        if (this.TotalPrice > 0 && this.loaddonedepart && this.loaddonereturn) {
            let AllParam = {
                PhaseGo: {},
                ListProductsGo: {},
                Date_Go: {},
                Time_Go: {},
                Go_planenumber: {},
                PhaseGo_RoundTrip: {},
                ListProductsGo_RoundTrip: {},
                PassiveTimeGo_RoundTrip: {},
                Date_Go_RoundTrip: {},
                Time_Go_RoundTrip: {},
                Go_RoundTrip_planenumber: {},
                PhaseReturn: {},
                ListProductsReturn: {},
                PassiveTimeReturn: {},
                Date_Return: {},
                Time_Return: {},
                Return_planenumber: {},
                PhaseReturn_RoundTrip: {},
                ListProductsReturn_RoundTrip: {},
                PassiveTimeReturn_RoundTrip: {},
                Date_Return_RoundTrip: {},
                Time_Return_RoundTrip: {},
                Return_RoundTrip_planenumber: {},
                slot: this._flightService.itemFlightCache.pax,
                TotalPriceReturn: 0,
                TotalPriceGo: 0,
                User: { email: "", phone: "", fullName: "" }
            };
            if (this.isblocktextDepart && this.departTotalPrice) {
                if (this.PhaseGo != undefined) {
                    AllParam.PhaseGo = this.PhaseGo;
                    AllParam.ListProductsGo = this.ListProductsGo;
                    AllParam.Date_Go = this.DateGoResult;
                    AllParam.Time_Go = moment__WEBPACK_IMPORTED_MODULE_7__(this.DateGoResult).add(this.PhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    ;
                    AllParam.Go_planenumber = (this._flightService.itemFlightCache != undefined && this._flightService.itemFlightCache.departFlight != undefined) ? this._flightService.itemFlightCache.departFlight.flightNumber : "";
                }
                else {
                    AllParam.PhaseGo = null;
                    AllParam.ListProductsGo = null;
                    AllParam.Date_Go = null;
                    AllParam.Time_Go = null;
                    AllParam.Go_planenumber = "";
                }
                if (this.PhaseReturn != undefined) {
                    AllParam.PhaseGo_RoundTrip = this.PhaseReturn;
                    AllParam.ListProductsGo_RoundTrip = this.ListProductsGo_RoundTrip;
                    AllParam.Date_Go_RoundTrip = this.Date_Go_RoundTrip;
                    AllParam.Time_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Go_RoundTrip).add(this.PhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    ;
                    AllParam.Go_RoundTrip_planenumber = (this._flightService.itemFlightCache != undefined && this._flightService.itemFlightCache.returnFlight != undefined) ? this._flightService.itemFlightCache.returnFlight.flightNumber : "";
                }
                else {
                    AllParam.PhaseGo_RoundTrip = null;
                    AllParam.ListProductsGo_RoundTrip = null;
                    AllParam.Date_Go_RoundTrip = null;
                    AllParam.Time_Go_RoundTrip = null;
                    AllParam.Go_RoundTrip_planenumber = "";
                }
            }
            else {
                AllParam.PhaseGo = null;
                AllParam.ListProductsGo = null;
                AllParam.PhaseGo_RoundTrip = null;
                AllParam.ListProductsGo_RoundTrip = null;
                AllParam.Date_Go = null;
                AllParam.Time_Go = null;
                AllParam.Date_Go_RoundTrip = null;
                AllParam.Time_Go_RoundTrip = null;
                AllParam.Go_planenumber = "";
                AllParam.Go_RoundTrip_planenumber = "";
            }
            if (this.isblocktextReturn && this.returnTotalPrice) {
                if (this.returnPhaseGo != undefined) {
                    AllParam.PhaseReturn = this.returnPhaseGo;
                    AllParam.ListProductsReturn = this.ListProductsReturn;
                    AllParam.Date_Return = this.Date_Return;
                    AllParam.Time_Return = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Return).add(this.returnPhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    ;
                    AllParam.Return_planenumber = (this._flightService.itemFlightCache != undefined && this._flightService.itemFlightCache.departFlight != undefined) ? this._flightService.itemFlightCache.departFlight.flightNumber : "";
                }
                else {
                    AllParam.PhaseReturn = null;
                    AllParam.ListProductsReturn = null;
                    AllParam.Date_Return = null;
                    AllParam.Time_Return = null;
                    AllParam.Return_planenumber = "";
                }
                if (this.returnPhaseReturn != null) {
                    AllParam.PhaseReturn_RoundTrip = this.returnPhaseReturn;
                    AllParam.ListProductsReturn_RoundTrip = this.ListProductsReturn_RoundTrip;
                    AllParam.Date_Return_RoundTrip = this.Date_Return_RoundTrip;
                    AllParam.Time_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Return_RoundTrip).add(this.returnPhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    AllParam.Return_RoundTrip_planenumber = (this._flightService.itemFlightCache != undefined && this._flightService.itemFlightCache.returnFlight != undefined) ? this._flightService.itemFlightCache.returnFlight.flightNumber : "";
                }
                else {
                    AllParam.PhaseReturn_RoundTrip = null;
                    AllParam.ListProductsReturn_RoundTrip = null;
                    AllParam.Date_Return_RoundTrip = null;
                    AllParam.Time_Return_RoundTrip = null;
                    AllParam.Return_RoundTrip_planenumber = "";
                }
            }
            else {
                AllParam.PhaseReturn = null;
                AllParam.ListProductsReturn = null;
                AllParam.PhaseReturn_RoundTrip = null;
                AllParam.ListProductsReturn_RoundTrip = null;
                AllParam.Date_Return = null;
                AllParam.Time_Return = null;
                AllParam.Date_Return_RoundTrip = null;
                AllParam.Time_Return_RoundTrip = null;
                AllParam.Return_planenumber = "";
                AllParam.Return_RoundTrip_planenumber = "";
            }
            if (this.isblocktextDepart) {
                AllParam.TotalPriceGo = this.departTotalPrice;
            }
            if (this.isblocktextReturn) {
                AllParam.TotalPriceReturn = this.returnTotalPrice;
            }
            this._flightService.itemFlightCache.isblocktextDepart = this.isblocktextDepart;
            this._flightService.itemFlightCache.isblocktextReturn = this.isblocktextReturn;
            this._flightService.itemFlightCache.DICHUNGParam = AllParam;
            this._flightService.itemTranferChange.emit(true);
            this.navCtrl.navigateBack('/flightaddservice');
        }
        else {
            this._flightService.itemTranferChange.emit(true);
            this._flightService.itemFlightCache.DICHUNGParam = null;
            this.navCtrl.navigateBack('/flightaddservice');
        }
    }
    getDirectionFrom(data, stt) {
        var se = this;
        if (stt == 0) {
            se.PhaseGo = data;
            let numberAddOrReduceDay = data.addOrReduceDay;
            if (se.PhaseGo != undefined && se.PhaseGo.pickUpTime) {
                se.selectedTimePhaseGo =
                    [{ name: se.PhaseGo.pickUpTime.text, value: se.PhaseGo.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 2700000) }
                    ];
                let dateProductDICHUNG = se._flightService.itemFlightCache.departFlight.departTime;
                this.DateGoResult = "";
                let tempDate;
                switch (numberAddOrReduceDay) {
                    case 0:
                        this.DateGoResult = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.departFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case 1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).add(1, 'days');
                        this.DateGoResult = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case -1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).subtract(1, 'days');
                        this.DateGoResult = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    default:
                        break;
                }
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(this.DateGoResult).add(se.PhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                this.gf.GetListProduct(TimeGo, se._flightService.itemFlightCache.departDCPlace.place_id, se._flightService.itemFlightCache.departDCAirport, se._flightService.itemFlightCache.pax, "v_transfer", "dichungtaxi", "price", "Go").then(data => {
                    se.GetListProductGo(data.data, stt);
                });
            }
            else {
                this.loaddonedepart = true;
                this.departTotalPrice = 0;
            }
        }
        else {
            se.returnPhaseGo = data;
            let numberAddOrReduceDay = data.addOrReduceDay;
            if (se.returnPhaseGo != undefined && se.returnPhaseGo.pickUpTime) {
                se.selectedTimeReturnPhaseGo =
                    [{ name: se.returnPhaseGo.pickUpTime.text, value: se.returnPhaseGo.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 2700000) }
                    ];
                let dateProductDICHUNG = this._flightService.itemFlightCache.departFlight.landingTime;
                this.Date_Return = "";
                let tempDate;
                switch (numberAddOrReduceDay) {
                    case 0:
                        this.Date_Return = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.departFlight.landingTime).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case 1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).add(1, 'days');
                        this.Date_Return = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case -1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).subtract(1, 'days');
                        this.Date_Return = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    default:
                        break;
                }
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Return).add(se.returnPhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                this.gf.GetListProduct(TimeGo, this._flightService.itemFlightCache.returnDCAirport, this._flightService.itemFlightCache.returnDCPlace.place_id, se._flightService.itemFlightCache.pax, "v_transfer", "dichungtaxi", "price", "Go_RoundTrip").then(data => {
                    se.GetListProductGo(data.data, stt);
                });
            }
            else {
                this.loaddonereturn = true;
                this.returnTotalPrice = 0;
            }
        }
    }
    getDirectionTo(data, stt) {
        var se = this;
        if (stt == 0) {
            se.PhaseReturn = data;
            let numberAddOrReduceDay = data.addOrReduceDay;
            if (se.PhaseReturn != undefined && se.PhaseReturn.pickUpTime) {
                se.selectedTimePhaseTo =
                    [{ name: se.PhaseReturn.pickUpTime.text, value: se.PhaseReturn.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 2700000) }
                    ];
                let dateProductDICHUNG = se._flightService.itemFlightCache.returnFlight.departTime;
                this.Date_Go_RoundTrip = "";
                let tempDate;
                switch (numberAddOrReduceDay) {
                    case 0:
                        this.Date_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case 1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).add(1, 'days');
                        this.Date_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case -1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).subtract(1, 'days');
                        this.Date_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    default:
                        break;
                }
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Go_RoundTrip).add(se.PhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                this.gf.GetListProduct(TimeGo, se._flightService.itemFlightCache.departDCAirport, se._flightService.itemFlightCache.departDCPlace.place_id, se._flightService.itemFlightCache.pax, "v_transfer", "dichungtaxi", "price", "Return").then(data => {
                    se.GetListProductReturn(data.data, stt);
                });
            }
            else {
                this.loaddonedepart = true;
                this.departTotalPrice = 0;
            }
        }
        else {
            se.returnPhaseReturn = data;
            let numberAddOrReduceDay = data.addOrReduceDay;
            if (se.returnPhaseReturn != undefined && se.returnPhaseReturn.pickUpTime) {
                se.selectedTimeReturnPhaseTo =
                    [{ name: se.returnPhaseReturn.pickUpTime.text, value: se.returnPhaseReturn.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 2700000) }
                    ];
                let dateProductDICHUNG = this._flightService.itemFlightCache.returnFlight.departTime;
                this.Date_Return_RoundTrip = "";
                let tempDate;
                switch (numberAddOrReduceDay) {
                    case 0:
                        this.Date_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case 1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).add(1, 'days');
                        this.Date_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    case -1:
                        tempDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(dateProductDICHUNG)).subtract(1, 'days');
                        this.Date_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(tempDate).format("YYYY-MM-DDT00:00:00.000");
                        break;
                    default:
                        break;
                }
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(this.Date_Return_RoundTrip).add(se.returnPhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                this.gf.GetListProduct(TimeGo, se._flightService.itemFlightCache.returnDCPlace.place_id, se._flightService.itemFlightCache.returnDCAirport, se._flightService.itemFlightCache.pax, "v_transfer", "dichungtaxi", "price", "Return_RoundTrip").then(data => {
                    se.GetListProductReturn(data.data, stt);
                });
            }
            else {
                this.loaddonereturn = true;
                this.returnTotalPrice = 0;
            }
        }
    }
    GetListProductGo(Product, stt) {
        var se = this;
        if (stt == 0) {
            if (Product != undefined) {
                let dataGet = Product;
                this.ListProductsGo = Product;
                se.InfoGo = dataGet.info;
                se.SendGo = dataGet.send;
                se.departPriceGo = this.RoundPrice((this.InfoGo != undefined && this.InfoGo.price ? this.InfoGo.price.value : 0) * 1.08);
                if (se.InfoGo != undefined && se.InfoGo.hasOwnProperty('price')) {
                    this.CountTrip++;
                    se.Vehicle_Go = se.SendGo != undefined ? se.SendGo.vehicle.type.search("Xe") != -1 ? se.SendGo.vehicle.type.slice(3) : se.SendGo.vehicle.type : "";
                }
                else {
                    se.PhaseGo = null;
                    se.InfoGo = null;
                    se.SendGo = null;
                    se.Vehicle_Go = "";
                }
            }
            if (this._flightService.itemFlightCache.roundTrip) {
                this.gf.getDirection(this._flightService.itemFlightCache.departDCAirport, this._flightService.itemFlightCache.departDCPlace.place_id, this._flightService.itemFlightCache.returnFlight.landingTime, false).then(data => {
                    this.getDirectionTo(data.data, stt);
                });
            }
            else {
                this.funcTotalPrice(stt);
            }
        }
        else {
            if (Product != undefined) {
                let dataGet = Product;
                se.ListProductsReturn = Product;
                se.returnInfoGo = dataGet.info;
                se.returnSendGo = dataGet.send;
                se.returnPriceGo = se.RoundPrice((se.returnInfoGo != undefined && se.returnInfoGo.price ? se.returnInfoGo.price.value : 0) * 1.08);
                if (se.returnInfoGo != undefined && se.returnInfoGo.hasOwnProperty('price')) {
                    this.CountTrip++;
                    se.returnVehicle_Go = se.returnSendGo != undefined ? se.returnSendGo.vehicle.name.search("Xe") != -1 ? se.returnSendGo.vehicle.name.slice(3) : se.returnSendGo.vehicle.name : "";
                }
                else {
                    se.returnPhaseGo = null;
                    se.returnInfoGo = null;
                    se.returnSendGo = null;
                    se.returnVehicle_Go = "";
                }
            }
            if (this._flightService.itemFlightCache.roundTrip) {
                this.gf.getDirection(this._flightService.itemFlightCache.returnDCPlace.place_id, this._flightService.itemFlightCache.returnDCAirport, this._flightService.itemFlightCache.returnFlight.departTime, true).then(data => {
                    this.getDirectionTo(data.data, stt);
                });
            }
            else {
                this.funcTotalPrice(stt);
            }
        }
    }
    GetListProductReturn(Product, stt) {
        var se = this;
        if (stt == 0) {
            if (Product != undefined) {
                let dataGet = Product;
                this.ListProductsGo_RoundTrip = Product;
                se.InfoReturn = dataGet.info;
                se.SendReturn = dataGet.send;
                se.departPriceTo = se.RoundPrice((se.InfoReturn != undefined && se.InfoReturn.price ? se.InfoReturn.price.value : 0) * 1.08);
                if (se.departPriceTo == 0) {
                    se.funcTotalPrice(stt);
                }
                if (se.InfoReturn != undefined && se.InfoReturn.hasOwnProperty('price')) {
                    this.CountTrip++;
                    se.Vehicle_Return = se.SendReturn != undefined ? se.SendReturn.vehicle.type.search("Xe") != -1 ? se.SendReturn.vehicle.type.slice(3) : se.SendReturn.vehicle.type : "";
                }
                else {
                    se.PhaseReturn = null;
                    se.InfoReturn = null;
                    se.SendReturn = null;
                    se.Vehicle_Return = "";
                }
            }
        }
        else {
            if (Product != undefined) {
                let dataGet = Product;
                this.ListProductsReturn_RoundTrip = Product;
                se.returnInfoReturn = dataGet.info;
                se.returnSendReturn = dataGet.send;
                se.returnPriceTo = se.RoundPrice((se.returnInfoReturn != undefined && se.returnInfoReturn.price ? se.returnInfoReturn.price.value : 0) * 1.08);
                if (se.returnInfoReturn != undefined && se.returnInfoReturn.hasOwnProperty('price')) {
                    this.CountTrip++;
                    se.returnVehicle_Return = se.returnSendReturn != undefined ? se.returnSendReturn.vehicle.name.search("Xe") != -1 ? se.returnSendReturn.vehicle.name.slice(3) : se.returnSendReturn.vehicle.name : "";
                }
                else {
                    se.returnPhaseReturn = null;
                    se.returnInfoReturn = null;
                    se.returnSendReturn = null;
                    se.returnVehicle_Return = "";
                }
            }
        }
        this.funcTotalPrice(stt);
    }
    funcTotalPrice(stt) {
        this.TotalPrice = 0;
        this.departTotalPrice = 0;
        this.returnTotalPrice = 0;
        if (this._flightService.itemFlightCache.roundTrip) {
            if (this.departPriceGo == 0 || this.departPriceTo == 0) {
                this.departTotalPrice = 0;
            }
            else {
                this.departTotalPrice = this.departPriceGo + this.departPriceTo;
            }
            if (this.returnPriceGo == 0 || this.returnPriceTo == 0) {
                this.returnTotalPrice = 0;
            }
            else {
                this.returnTotalPrice = this.returnPriceGo + this.returnPriceTo;
            }
        }
        else {
            this.departTotalPrice = this.departPriceGo + this.departPriceTo;
            this.returnTotalPrice = this.returnPriceGo + this.returnPriceTo;
        }
        if (this.isblocktextDepart && this.isblocktextReturn) {
            this.TotalPrice = this.departTotalPrice + this.returnTotalPrice;
        }
        else {
            if (this.isblocktextDepart) {
                this.TotalPrice = this.departTotalPrice;
            }
            else if (this.isblocktextReturn) {
                this.TotalPrice = this.returnTotalPrice;
            }
        }
        this.funcCountTrip();
        if (stt == 0) {
            this.loaddonedepart = true;
        }
        else {
            this.loaddonereturn = true;
        }
    }
    funcCountTrip() {
        this.CountTrip = 0;
        this.CountGo = 0;
        this.CountReturn = 0;
        if (this.isblocktextDepart) {
            if (this._flightService.itemFlightCache.roundTrip == true) {
                if (this.departTotalPrice != 0) {
                    this.CountGo = 2;
                }
            }
            else {
                if (this.departTotalPrice != 0) {
                    this.CountGo = 1;
                }
            }
        }
        if (this.isblocktextReturn) {
            if (this._flightService.itemFlightCache.roundTrip == true) {
                if (this.returnTotalPrice != 0) {
                    this.CountReturn = 2;
                }
            }
            else {
                if (this.returnTotalPrice != 0) {
                    this.CountReturn = 1;
                }
            }
        }
        this.CountTrip = this.CountGo + this.CountReturn;
    }
    RoundPrice(price) {
        if (price != undefined && price > 0) {
            let priceTemp = 0;
            priceTemp = price % 1000;
            if (priceTemp > 1) {
                priceTemp = (Math.trunc(price / 1000) + 1) * 1000;
            }
            else {
                priceTemp = (Math.trunc(price / 1000)) * 1000;
            }
            return priceTemp;
        }
        else {
            return 0;
        }
    }
    showmsg(msg) {
        alert(msg);
    }
    presentToastwarming(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top',
            });
            toast.present();
        });
    }
    edit(text) {
        this.showInput(text);
    }
    showInput(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var location;
            if (text == 'From') {
                location = this._flightService.itemFlightCache.locationFrom;
            }
            else {
                location = this._flightService.itemFlightCache.locationTo;
            }
            const modal = yield this.modalCtrl.create({
                component: _flightdcpickaddressinput_flightdcpickaddressinput_page__WEBPACK_IMPORTED_MODULE_6__["FlightdcpickaddressinputPage"],
                componentProps: {
                    'value': text,
                    'location': location
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    if (data.data.FromTo == 'From') {
                        this.loaddonedepart = false;
                        this.TotalPrice = 0;
                        this._flightService.itemFlightCache.departDCPlace = data.data.item;
                        this.textDepart = this._flightService.itemFlightCache.departDCPlace.description;
                        this.gf.getDirection(this._flightService.itemFlightCache.departDCPlace.place_id, this._flightService.itemFlightCache.departDCAirport, this._flightService.itemFlightCache.departFlight.departTime, true).then(data => {
                            this.getDirectionFrom(data.data, 0);
                        });
                    }
                    else if (data.data.FromTo == 'To') {
                        this.loaddonereturn = false;
                        this.TotalPrice = 0;
                        this._flightService.itemFlightCache.returnDCPlace = data.data.item;
                        this.textReturn = this._flightService.itemFlightCache.returnDCPlace.description;
                        this.gf.getDirection(this._flightService.itemFlightCache.returnDCAirport, this._flightService.itemFlightCache.returnDCPlace.place_id, this._flightService.itemFlightCache.departFlight.landingTime, false).then(data => {
                            this.getDirectionFrom(data.data, 1);
                        });
                    }
                }
            });
        });
    }
};
FlightdcdetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flightdcdetail',
        template: __webpack_require__(/*! ./flightdcdetail.page.html */ "./src/app/flightdcdetail/flightdcdetail.page.html"),
        styles: [__webpack_require__(/*! ./flightdcdetail.page.scss */ "./src/app/flightdcdetail/flightdcdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_flightService__WEBPACK_IMPORTED_MODULE_4__["flightService"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], FlightdcdetailPage);



/***/ })

}]);
//# sourceMappingURL=flightdcdetail-flightdcdetail-module.js.map