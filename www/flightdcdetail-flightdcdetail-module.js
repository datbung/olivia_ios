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

<<<<<<< HEAD
module.exports = ".text-title {\n  font-size: 18px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: 300;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n\n.row-search {\n  border-radius: 2px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  height: 50px;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #828282;\n}\n\n.align-self {\n  align-self: center;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n\n.text-block {\n  color: #bdbdbd;\n}\n\n.div-item-service {\n  border-radius: 3px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  margin-top: 12px;\n  margin-bottom: 18px;\n}\n\n.div-title-place {\n  width: 100%;\n  font-size: 16px;\n  line-height: 1.4;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n\n.padding-10 {\n  padding: 10px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.div-info-car {\n  display: flex;\n  background-color: #ecf0f5;\n  margin-top: 15px;\n  height: 30px;\n}\n\n.margin-label {\n  margin-top: 19px;\n  margin-left: 4px;\n}\n\n.margin-left-10 {\n  margin-left: 10px;\n}\n\n.text-label-right {\n  right: 33px;\n  position: absolute;\n}\n\n.align-center {\n  align-self: center;\n}\n\n.cls-hr {\n  background-color: #ecf0f5;\n  height: 2px;\n}\n\n.text-info {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-time {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-place {\n  font-size: 12px;\n  line-height: 1.2;\n  color: #828282;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-price {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #26bed6;\n  text-align: right;\n}\n\n.text-price-total {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.4;\n  color: #26bed6;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 14px;\n  color: #333333;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.margin-right-16 {\n  margin-right: -16px;\n}\n\n.div-first {\n  position: relative;\n}\n\n.div-first .div-departcode {\n  width: 33px;\n  height: 14px;\n  border-radius: 12px;\n  background-color: #f3f3f3;\n  font-size: 10px;\n  letter-spacing: 0.12px;\n  color: #828282;\n  text-align: center;\n}\n\n.div-first .flight-price {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-item-flight-other {\n  border: none !important;\n}\n\n.m-b-8 {\n  margin-bottom: 8px;\n}\n\n.div-second {\n  margin-top: 12px;\n  position: relative;\n}\n\n.div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: -6px;\n}\n\n.div-second .div-button .btn-select {\n  width: 80px !important;\n  height: 29px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  margin: 0;\n}\n\n.img-edit {\n  width: 20px;\n  height: 20px;\n}\n\n.font-gif {\n  color: grey;\n  font-size: 14px;\n}\n\n.div-item-service-none {\n  box-shadow: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0ZGNkZXRhaWwvZmxpZ2h0ZGNkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRkY2RldGFpbC9mbGlnaHRkY2RldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURDQTtFQUNJLCtCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FESEE7RUFDSSxnQkFBQTtBQ01KOztBREpBO0VBQ0ksY0FBQTtBQ09KOztBRExBO0VBQ0ksa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNTSjs7QUROQTtFQUNJLGFBQUE7QUNTSjs7QURQQTtFQUNJLGFBQUE7QUNVSjs7QURSQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1lKOztBRFZBO0VBQ0ksaUJBQUE7QUNhSjs7QURYQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ2NKOztBRFpBO0VBQ0ksa0JBQUE7QUNlSjs7QURiQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ2dCSjs7QURkQTtFQUNJLGVBQUE7RUFDRixnQkFBQTtFQUNBLGNBQUE7QUNpQkY7O0FEZkE7RUFDSSxlQUFBO0VBQ0YsZ0JBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGhCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDb0JKOztBRGxCQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ3FCSjs7QURuQkE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ3NCSjs7QURwQkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNzQlI7O0FEcEJRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNzQlo7O0FEbkJRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNxQlo7O0FEakJJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDbUJSOztBRGhCSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQ2lCUjs7QURkQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDaUJKOztBRGZBO0VBQ0ksbUJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksa0JBQUE7QUNtQko7O0FEakJHO0VBQ0ssV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDa0JSOztBRGRJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNnQlI7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKOztBRGRBO0VBQ0ksdUJBQUE7QUNpQko7O0FEZkE7RUFDSSxrQkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDbUJKOztBRGZJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDaUJSOztBRGZRO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFFQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNlWjs7QURYQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDY0o7O0FEWkk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ2VSOztBRGJJO0VBQ0ksMEJBQUE7QUNnQlIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRkY2RldGFpbC9mbGlnaHRkY2RldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC10aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4ucm93LXNlYXJjaHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuLnRleHQtcGxhY2V7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4uYWxpZ24tc2VsZntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcbn1cbi5tYXJnaW4tdG9wLTEwe1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4udGV4dC1ibG9ja3tcbiAgICBjb2xvcjogI2JkYmRiZDtcbn1cbi5kaXYtaXRlbS1zZXJ2aWNle1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cbi5kaXYtdGl0bGUtcGxhY2V7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcblxufVxuLnBhZGRpbmctMTB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5kaXYtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1pbmZvLWNhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjU7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG59XG4ubWFyZ2luLWxhYmVse1xuICAgIG1hcmdpbi10b3A6IDE5cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi5tYXJnaW4tbGVmdC0xMHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi50ZXh0LWxhYmVsLXJpZ2h0e1xuICAgIHJpZ2h0OiAzM3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5hbGlnbi1jZW50ZXJ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyA7XG59XG4uY2xzLWhye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjU7XG4gICAgaGVpZ2h0OiAycHg7XG59XG4udGV4dC1pbmZve1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM0OTRiNTU7IFxufVxuLnRleHQtaW5mby10aW1le1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICM0OTRiNTU7IFxufVxuLnRleHQtaW5mby1wbGFjZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICBjb2xvcjogIzgyODI4MjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udGV4dC1wcmljZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzI2YmVkNjtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi50ZXh0LXByaWNlLXRvdGFse1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmRpdi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIC5kaXYtdG90YWx7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgLnRleHQtc3ViLXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudGV4dC10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgfVxuICAgIFxuICAgIC5idXR0b25cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cbi5kLWZsZXgtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4ubWFyZ2luLXJpZ2h0LTE2e1xuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG4uZGl2LWZpcnN0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgLmRpdi1kZXBhcnRjb2Rle1xuICAgICAgICB3aWR0aDogMzNweDtcbiAgICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTJweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgIH1cbiBcblxuICAgIC5mbGlnaHQtcHJpY2V7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICAgICAgICBjb2xvcjogIzQ5NGI1NTtcbiAgICB9XG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWl0ZW0tZmxpZ2h0LW90aGVye1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuLm0tYi04e1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbi5kaXYtc2Vjb25ke1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICBcblxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdG9wOiAtNnB4O1xuXG4gICAgICAgIC5idG4tc2VsZWN0e1xuICAgICAgICAgICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzkyMjE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5pbWctZWRpdHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG4gICAgLmZvbnQtZ2lmIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLmRpdi1pdGVtLXNlcnZpY2Utbm9uZXtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgICB9XG4gICBcbiIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi5yb3ctc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRleHQtcGxhY2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uYWxpZ24tc2VsZiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcmdpbi10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udGV4dC1ibG9jayB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG4uZGl2LWl0ZW0tc2VydmljZSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmRpdi10aXRsZS1wbGFjZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucGFkZGluZy0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaW5mby1jYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGY1O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBoZWlnaHQ6IDMwcHg7XG59XG5cbi5tYXJnaW4tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxOXB4O1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG4ubWFyZ2luLWxlZnQtMTAge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnRleHQtbGFiZWwtcmlnaHQge1xuICByaWdodDogMzNweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYWxpZ24tY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2xzLWhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmNTtcbiAgaGVpZ2h0OiAycHg7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjNDk0YjU1O1xufVxuXG4udGV4dC1pbmZvLXRpbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjNDk0YjU1O1xufVxuXG4udGV4dC1pbmZvLXBsYWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzgyODI4MjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi50ZXh0LXByaWNlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LXByaWNlLXRvdGFsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hcmdpbi1yaWdodC0xNiB7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi5kaXYtZmlyc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LWZpcnN0IC5kaXYtZGVwYXJ0Y29kZSB7XG4gIHdpZHRoOiAzM3B4O1xuICBoZWlnaHQ6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtZmlyc3QgLmZsaWdodC1wcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40OHB4O1xuICBjb2xvcjogIzQ5NGI1NTtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaXRlbS1mbGlnaHQtb3RoZXIge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm0tYi04IHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4uZGl2LXNlY29uZCB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRvcDogLTZweDtcbn1cbi5kaXYtc2Vjb25kIC5kaXYtYnV0dG9uIC5idG4tc2VsZWN0IHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAyOXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5pbWctZWRpdCB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi5mb250LWdpZiB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5kaXYtaXRlbS1zZXJ2aWNlLW5vbmUge1xuICBib3gtc2hhZG93OiAwcHggIWltcG9ydGFudDtcbn0iXX0= */"
=======
module.exports = ".text-title {\n  font-size: 18px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: 300;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n  --padding-start: 0px;\n}\n\n.row-search {\n  border-radius: 2px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  height: 50px;\n}\n\n.text-place {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #828282;\n}\n\n.align-self {\n  align-self: center;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n\n.text-block {\n  color: #bdbdbd;\n}\n\n.div-item-service {\n  border-radius: 3px;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);\n  margin-top: 12px;\n  margin-bottom: 18px;\n}\n\n.div-title-place {\n  width: 100%;\n  font-size: 16px;\n  line-height: 1.4;\n  color: #333333;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-right: 10px;\n}\n\n.padding-10 {\n  padding: 10px;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.div-info-car {\n  display: flex;\n  background-color: #ecf0f5;\n  margin-top: 15px;\n  height: 30px;\n}\n\n.margin-label {\n  margin-top: 19px;\n  margin-left: 4px;\n}\n\n.margin-left-10 {\n  margin-left: 10px;\n}\n\n.text-label-right {\n  right: 33px;\n  position: absolute;\n}\n\n.align-center {\n  align-self: center;\n}\n\n.cls-hr {\n  background-color: #ecf0f5;\n  height: 2px;\n}\n\n.text-info {\n  font-size: 14px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-time {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #494b55;\n}\n\n.text-info-place {\n  font-size: 12px;\n  line-height: 1.2;\n  color: #828282;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-price {\n  font-size: 16px;\n  line-height: 1.4;\n  color: #26bed6;\n  text-align: right;\n}\n\n.text-price-total {\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 1.4;\n  color: #26bed6;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n\n.div-footer .div-total .text-sub-total {\n  font-size: 14px;\n  color: #333333;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n  padding: 0;\n}\n\n.d-flex-footer {\n  display: flex;\n  width: 100%;\n}\n\n.margin-right-16 {\n  margin-right: -16px;\n}\n\n.div-first {\n  position: relative;\n}\n\n.div-first .div-departcode {\n  width: 33px;\n  height: 14px;\n  border-radius: 12px;\n  background-color: #f3f3f3;\n  font-size: 10px;\n  letter-spacing: 0.12px;\n  color: #828282;\n  text-align: center;\n}\n\n.div-first .flight-price {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  font-size: 16px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.48px;\n  color: #494b55;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.div-item-flight-other {\n  border: none !important;\n}\n\n.m-b-8 {\n  margin-bottom: 8px;\n}\n\n.div-second {\n  margin-top: 12px;\n  position: relative;\n}\n\n.div-second .div-button {\n  position: absolute;\n  right: 0;\n  text-align: right;\n  top: -6px;\n}\n\n.div-second .div-button .btn-select {\n  width: 80px !important;\n  height: 29px !important;\n  color: #ffffff;\n  background: #f79221;\n  border-radius: 4px !important;\n  font-size: 18px !important;\n  font-size: 14px !important;\n  font-weight: 500 !important;\n  line-height: 1.5;\n  letter-spacing: -0.28px;\n  margin: 0;\n}\n\n.img-edit {\n  width: 20px;\n  height: 20px;\n}\n\n.font-gif {\n  color: grey;\n  font-size: 14px;\n}\n\n.div-item-service-none {\n  box-shadow: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGRjZGV0YWlsL2ZsaWdodGRjZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0ZGNkZXRhaWwvZmxpZ2h0ZGNkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQkFBQTtFQUNBLG9CQUFBO0FDRUo7O0FEQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREhBO0VBQ0ksZ0JBQUE7QUNNSjs7QURKQTtFQUNJLGNBQUE7QUNPSjs7QURMQTtFQUNJLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUUo7O0FETkE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDU0o7O0FETkE7RUFDSSxhQUFBO0FDU0o7O0FEUEE7RUFDSSxhQUFBO0FDVUo7O0FEUkE7RUFDSSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNXSjs7QURUQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNZSjs7QURWQTtFQUNJLGlCQUFBO0FDYUo7O0FEWEE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNjSjs7QURaQTtFQUNJLGtCQUFBO0FDZUo7O0FEYkE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNnQko7O0FEZEE7RUFDSSxlQUFBO0VBQ0YsZ0JBQUE7RUFDQSxjQUFBO0FDaUJGOztBRGZBO0VBQ0ksZUFBQTtFQUNGLGdCQUFBO0VBQ0EsY0FBQTtBQ2tCRjs7QURoQkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDbUJKOztBRGpCQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ29CSjs7QURsQkE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNxQko7O0FEbkJBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNzQko7O0FEcEJJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDc0JSOztBRHBCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDc0JaOztBRG5CUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDcUJaOztBRGpCSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ21CUjs7QURoQkk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFVBQUE7QUNpQlI7O0FEZEE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ2lCSjs7QURmQTtFQUNJLG1CQUFBO0FDa0JKOztBRGhCQTtFQUNJLGtCQUFBO0FDbUJKOztBRGpCRztFQUNLLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ2tCUjs7QURkSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDZ0JSOztBRGJBO0VBQ0ksYUFBQTtBQ2dCSjs7QURkQTtFQUNJLHVCQUFBO0FDaUJKOztBRGZBO0VBQ0ksa0JBQUE7QUNrQko7O0FEaEJBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ21CSjs7QURmSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ2lCUjs7QURmUTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBRUEsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0FDZVo7O0FEWEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ2NKOztBRFpJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNlUjs7QURiSTtFQUNJLDBCQUFBO0FDZ0JSIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0ZGNkZXRhaWwvZmxpZ2h0ZGNkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cbi5pb24taXRlbXtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuLnJvdy1zZWFyY2h7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGJvcmRlcjogc29saWQgMC41cHggI2JkYmRiZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGhlaWdodDogNTBweDtcbn1cbi50ZXh0LXBsYWNle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLmFsaWduLXNlbGZ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyXG59XG4ubWFyZ2luLXRvcC0xMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnRleHQtYmxvY2t7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG4uZGl2LWl0ZW0tc2VydmljZXtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uZGl2LXRpdGxlLXBsYWNle1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbn1cbi5wYWRkaW5nLTEwe1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4uZGl2LWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaW5mby1jYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGY1O1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuLm1hcmdpbi1sYWJlbHtcbiAgICBtYXJnaW4tdG9wOiAxOXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4ubWFyZ2luLWxlZnQtMTB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4udGV4dC1sYWJlbC1yaWdodHtcbiAgICByaWdodDogMzNweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uYWxpZ24tY2VudGVye1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgO1xufVxuLmNscy1ocntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMGY1O1xuICAgIGhlaWdodDogMnB4O1xufVxuLnRleHQtaW5mb3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjNDk0YjU1OyBcbn1cbi50ZXh0LWluZm8tdGltZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjNDk0YjU1OyBcbn1cbi50ZXh0LWluZm8tcGxhY2V7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnRleHQtcHJpY2V7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMyNmJlZDY7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udGV4dC1wcmljZS10b3RhbHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzI2YmVkNjtcbn1cbi5kaXYtZm9vdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDYwcHg7XG5cbiAgICAuZGl2LXRvdGFse1xuICAgICAgICB3aWR0aDogMjEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG4uZC1mbGV4LWZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm1hcmdpbi1yaWdodC0xNntcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuLmRpdi1maXJzdHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgIC5kaXYtZGVwYXJ0Y29kZXtcbiAgICAgICAgd2lkdGg6IDMzcHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcblxuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjEycHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICB9XG4gXG5cbiAgICAuZmxpZ2h0LXByaWNle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgICAgICAgY29sb3I6ICM0OTRiNTU7XG4gICAgfVxufVxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1pdGVtLWZsaWdodC1vdGhlcntcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tLWItOHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4uZGl2LXNlY29uZHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgXG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHRvcDogLTZweDtcblxuICAgICAgICAuYnRuLXNlbGVjdHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDI5cHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjc5MjIxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcblxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4uaW1nLWVkaXR7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuICAgIC5mb250LWdpZiB7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5kaXYtaXRlbS1zZXJ2aWNlLW5vbmV7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAhaW1wb3J0YW50O1xuXG4gICAgfVxuICAgXG4iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xufVxuXG4ucm93LXNlYXJjaCB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi50ZXh0LXBsYWNlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmFsaWduLXNlbGYge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5tYXJnaW4tdG9wLTEwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnRleHQtYmxvY2sge1xuICBjb2xvcjogI2JkYmRiZDtcbn1cblxuLmRpdi1pdGVtLXNlcnZpY2Uge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5kaXYtdGl0bGUtcGxhY2Uge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzMzMzMzMztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnBhZGRpbmctMTAge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWluZm8tY2FyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmNTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ubWFyZ2luLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMTlweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTEwIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50ZXh0LWxhYmVsLXJpZ2h0IHtcbiAgcmlnaHQ6IDMzcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmFsaWduLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNscy1ociB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YwZjU7XG4gIGhlaWdodDogMnB4O1xufVxuXG4udGV4dC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzQ5NGI1NTtcbn1cblxuLnRleHQtaW5mby10aW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzQ5NGI1NTtcbn1cblxuLnRleHQtaW5mby1wbGFjZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgY29sb3I6ICM4MjgyODI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4udGV4dC1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dC1wcmljZS10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXJnaW4tcmlnaHQtMTYge1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4uZGl2LWZpcnN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmRpdi1maXJzdCAuZGl2LWRlcGFydGNvZGUge1xuICB3aWR0aDogMzNweDtcbiAgaGVpZ2h0OiAxNHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LWZpcnN0IC5mbGlnaHQtcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNDhweDtcbiAgY29sb3I6ICM0OTRiNTU7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWl0ZW0tZmxpZ2h0LW90aGVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tLWItOCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRpdi1zZWNvbmQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uZGl2LXNlY29uZCAuZGl2LWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB0b3A6IC02cHg7XG59XG4uZGl2LXNlY29uZCAuZGl2LWJ1dHRvbiAuYnRuLXNlbGVjdCB7XG4gIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjlweCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogI2Y3OTIyMTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW1nLWVkaXQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZm9udC1naWYge1xuICBjb2xvcjogZ3JleTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZGl2LWl0ZW0tc2VydmljZS1ub25lIHtcbiAgYm94LXNoYWRvdzogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

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
                slot: 1,
                TotalPriceReturn: 0,
                TotalPriceGo: 0,
                User: { email: "", phone: "", fullName: "" }
            };
            if (this.isblocktextDepart && this.departTotalPrice) {
                if (this.PhaseGo != undefined) {
                    let DateGo = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.departFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                    let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(DateGo).add(this.PhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    AllParam.PhaseGo = this.PhaseGo;
                    AllParam.ListProductsGo = this.ListProductsGo;
                    AllParam.Date_Go = DateGo;
                    AllParam.Time_Go = TimeGo;
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
                    let Date_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.landingTime).format("YYYY-MM-DDT00:00:00.000");
                    let Time_Go_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(Date_Go_RoundTrip).add(this.PhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    AllParam.PhaseGo_RoundTrip = this.PhaseReturn;
                    AllParam.ListProductsGo_RoundTrip = this.ListProductsGo_RoundTrip;
                    AllParam.Date_Go_RoundTrip = Date_Go_RoundTrip;
                    AllParam.Time_Go_RoundTrip = Time_Go_RoundTrip;
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
                    let Date_Return = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.departFlight.landingTime).format("YYYY-MM-DDT00:00:00.000");
                    let Time_Return = moment__WEBPACK_IMPORTED_MODULE_7__(Date_Return).add(this.returnPhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    AllParam.PhaseReturn = this.returnPhaseGo;
                    AllParam.ListProductsReturn = this.ListProductsReturn;
                    AllParam.Date_Return = Date_Return;
                    AllParam.Time_Return = Time_Return;
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
                    let Date_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                    let Time_Return_RoundTrip = moment__WEBPACK_IMPORTED_MODULE_7__(Date_Return_RoundTrip).add(this.returnPhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
                    AllParam.PhaseReturn_RoundTrip = this.returnPhaseReturn;
                    AllParam.ListProductsReturn_RoundTrip = this.ListProductsReturn_RoundTrip;
                    AllParam.Date_Return_RoundTrip = Date_Return_RoundTrip;
                    AllParam.Time_Return_RoundTrip = Time_Return_RoundTrip;
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
            if (se.PhaseGo != undefined && se.PhaseGo.pickUpTime) {
                se.selectedTimePhaseGo =
                    [{ name: se.PhaseGo.pickUpTime.text, value: se.PhaseGo.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseGo.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.PhaseGo.pickUpTime.value - 2700000) }
                    ];
                let DateGo = moment__WEBPACK_IMPORTED_MODULE_7__(se._flightService.itemFlightCache.departFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(DateGo).add(se.PhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
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
            if (se.returnPhaseGo != undefined && se.returnPhaseGo.pickUpTime) {
                se.selectedTimeReturnPhaseGo =
                    [{ name: se.returnPhaseGo.pickUpTime.text, value: se.returnPhaseGo.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseGo.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.returnPhaseGo.pickUpTime.value - 2700000) }
                    ];
                let DateGo = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.departFlight.landingTime).format("YYYY-MM-DDT00:00:00.000");
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(DateGo).add(se.returnPhaseGo.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
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
            if (se.PhaseReturn != undefined && se.PhaseReturn.pickUpTime) {
                se.selectedTimePhaseTo =
                    [{ name: se.PhaseReturn.pickUpTime.text, value: se.PhaseReturn.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.PhaseReturn.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.PhaseReturn.pickUpTime.value - 2700000) }
                    ];
                let DateGo = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(DateGo).add(se.PhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
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
            if (se.returnPhaseReturn != undefined && se.returnPhaseReturn.pickUpTime) {
                se.selectedTimeReturnPhaseTo =
                    [{ name: se.returnPhaseReturn.pickUpTime.text, value: se.returnPhaseReturn.pickUpTime.value },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-15, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 900000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-30, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 1800000) },
                        { name: moment__WEBPACK_IMPORTED_MODULE_7__(se.returnPhaseReturn.pickUpTime.text, 'HH:mm').add(-45, 'minutes').format('HH:mm'), value: (se.returnPhaseReturn.pickUpTime.value - 2700000) }
                    ];
                let DateGo = moment__WEBPACK_IMPORTED_MODULE_7__(this._flightService.itemFlightCache.returnFlight.departTime).format("YYYY-MM-DDT00:00:00.000");
                let TimeGo = moment__WEBPACK_IMPORTED_MODULE_7__(DateGo).add(se.returnPhaseReturn.pickUpTime.value / 1000, 'seconds').utc().format("YYYY-MM-DDTHH:mm:ss.000") + "Z";
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
                se.departPriceGo = this.RoundPrice((this.InfoGo != undefined && this.InfoGo.price ? this.InfoGo.price.value : 0) * 1.1);
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
                se.returnPriceGo = se.RoundPrice((se.returnInfoGo != undefined && se.returnInfoGo.price ? se.returnInfoGo.price.value : 0) * 1.1);
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
                se.departPriceTo = se.RoundPrice((se.InfoReturn != undefined && se.InfoReturn.price ? se.InfoReturn.price.value : 0) * 1.1);
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
                se.returnPriceTo = se.RoundPrice((se.returnInfoReturn != undefined && se.returnInfoReturn.price ? se.returnInfoReturn.price.value : 0) * 1.1);
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