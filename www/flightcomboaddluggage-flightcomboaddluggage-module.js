(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcomboaddluggage-flightcomboaddluggage-module"],{

/***/ "./src/app/flightcomboaddluggage/flightcomboaddluggage.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightcomboaddluggage/flightcomboaddluggage.module.ts ***!
  \***********************************************************************/
/*! exports provided: FlightcomboaddluggagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcomboaddluggagePageModule", function() { return FlightcomboaddluggagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcomboaddluggage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcomboaddluggage.page */ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.ts");







const routes = [
    {
        path: '',
        component: _flightcomboaddluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightcomboaddluggagePage"]
    }
];
let FlightcomboaddluggagePageModule = class FlightcomboaddluggagePageModule {
};
FlightcomboaddluggagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcomboaddluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightcomboaddluggagePage"]]
    })
], FlightcomboaddluggagePageModule);



/***/ }),

/***/ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/flightcomboaddluggage/flightcomboaddluggage.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thêm hành lý ký gửi</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-segment [(ngModel)]=\"tabluggage\" class=\"div-segment\"  mode=\"md\">\n      <ion-segment-button (click)=\"SelectTab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\" >\n        Chiều đi\n        </ion-segment-button>\n        <ion-segment-button (click)=\"SelectTab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\">\n        Chiều về\n        </ion-segment-button>\n      </ion-segment>\n  </ion-row>\n\n</ion-header>\n  <ion-content #scrollFlightAddLuggage>\n    <div class=\"content-flightaddluggage\">\n      <ion-slides #slideTab (ionSlideDidChange)=\"slidetabchange()\" [options]=\"slideOpts\">\n        <!-- Chiều đi -->\n        <ion-slide style=\"display: block;\" *ngIf=\"(departLuggage && departLuggage.length>0) else nodepartluggage\">\n            <div *ngIf=\"departLuggage && departLuggage.length>0\">\n              <!-- <div class=\"text-title \">Chiều đi</div> -->\n              <div  *ngFor=\"let lug of departLuggage\">\n                <div class=\"d-flex\" *ngIf=\"lug.Weight >0\">\n                  <div class=\"text-left-lug div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.Weight}}kg</label>\n                    <label *ngIf=\"lug.Title.indexOf('Oversize') != -1\" class=\"text-oversize\">Quá kích cỡ</label>\n                  </div>\n    \n                  <div class=\"text-price div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.priceshow}}</label>\n                  </div>\n    \n                  <div class=\"div-justify-center\">\n                    <div  class=\"t-center ic-minus\" (click)=\"minusroom(lug,true)\">\n                      <div >\n                        <img *ngIf=\"!lug.quantity\" class=\"cls-hidden\" src=\"./assets/ic_facility/ic_minus.svg\">\n                        <img *ngIf=\"lug.quantity\" src=\"./assets/ic_facility/ic_minus.svg\">\n                      </div>\n                    </div>\n                    <div class=\"div-center-vertical\">{{lug.quantity}}</div>\n                    <div text-right class=\"t-center ic-plus\" (click)=\"plusroom(lug,true)\">\n                      <img  src=\"./assets/ic_facility/ic_plus.svg\">\n                    </div>\n                  </div>\n                </div>\n                  \n                \n              </div>\n            </div>\n            <!-- <div class=\"div-width-100\" *ngIf=\"departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && departLuggage.length ==0\">\n              <div class=\"text-title \">Chiều đi</div>\n              <div class=\"div-empty text-center\">\n                <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n              </div>\n              <div class=\"div-text-empty text-center div-width-100 m-top-16\">Đã bao gồm trong vé máy bay ({{ departConditionInfo.luggageSigned }} kg/1 khách).</div>\n            </div> -->\n        </ion-slide>\n        <ng-template #nodepartluggage>\n          <ion-slide style=\"display: block;\" *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && departLuggage.length ==0)\">\n            <div class=\"div-empty text-center\">\n              <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n            </div>\n            <div class=\"div-text-empty text-center div-width-100 m-top-16\">Đã bao gồm trong vé máy bay ({{ departConditionInfo.luggageSigned }} kg/1 khách).</div>\n          </ion-slide>\n\n         \n            <ion-slide style=\"display: block;\" *ngIf=\"(departConditionInfo && !departConditionInfo.luggageSigned && departLuggage.length ==0)\">\n              <div class=\"div-empty text-center\">\n                <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n              </div>\n              <div class=\"div-text-empty text-center div-width-100 m-top-16\">Không được phép mua hành lý.</div>\n            </ion-slide>\n         \n        </ng-template>\n\n        \n\n        <!-- Chiều về -->\n        <ion-slide style=\"display: block;\" *ngIf=\"(returnLuggage && returnLuggage.length>0)  else noreturnluggage\">\n            <div *ngIf=\"returnLuggage && returnLuggage.length>0\">\n              <!-- <div class=\"text-title\">Chiều về</div> -->\n              <div *ngFor=\"let lug of returnLuggage\">\n                <div class=\"d-flex\" *ngIf=\"lug.Weight >0\">\n                  <div class=\"text-left-lug div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.Weight}}kg</label>\n                    <label *ngIf=\"lug.Title.indexOf('Oversize') != -1\" class=\"text-oversize\">Quá kích cỡ</label>\n                  </div>\n    \n                  <div class=\"text-price div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.priceshow}}</label>\n                  </div>\n    \n                  <div class=\"div-justify-center\">\n                    <div  class=\"t-center ic-minus\" (click)=\"minusroom(lug,false)\">\n                      <div >\n                        <img *ngIf=\"!lug.quantity\" class=\"cls-hidden\" src=\"./assets/ic_facility/ic_minus.svg\">\n                        <img *ngIf=\"lug.quantity\" src=\"./assets/ic_facility/ic_minus.svg\">\n                      </div>\n                    </div>\n                    <div class=\"div-center-vertical\">{{lug.quantity}}</div>\n                    <div text-right class=\"t-center ic-plus\" (click)=\"plusroom(lug,false)\">\n                      <img  src=\"./assets/ic_facility/ic_plus.svg\">\n                    </div>\n                  </div>\n                </div>\n                  \n                \n              </div>\n            </div>\n          </ion-slide>\n          <ng-template #noreturnluggage>\n            <ion-slide style=\"display: block;\" *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && returnLuggage.length == 0)\">\n              <div class=\"div-empty text-center\">\n                <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n              </div>\n              <div class=\"div-text-empty text-center div-width-100 m-top-16\">Đã bao gồm trong vé máy bay ({{ returnConditionInfo.luggageSigned }} kg/1 khách).</div>\n            </ion-slide>\n              \n                <ion-slide style=\"display: block;\" *ngIf=\"(returnConditionInfo && !returnConditionInfo.luggageSigned && returnLuggage.length ==0)\">\n                  <div class=\"div-empty text-center\">\n                    <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n                  </div>\n                  <div class=\"div-text-empty text-center div-width-100 m-top-16\">Không được phép mua hành lý.</div>\n                </ion-slide>\n              \n          </ng-template>\n      </ion-slides>\n    </div>\n  \n  </ion-content>\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n      <div class=\"div-total\">\n        <div class=\"d-flex-footer text-sub-total\" *ngIf=\"(departLuggage && departLuggage.length>0) || (returnLuggage && returnLuggage.length>0)\">\n          <div *ngIf=\"(departLuggage && departLuggage.length>0)\">Đi: {{quantitydisplay}}</div>\n          <div *ngIf=\"returnLuggage && returnLuggage.length>0 \">| Về: {{quantityreturndisplay}}</div>\n        </div>\n        <div class=\"text-total\" *ngIf=\"totalprice >=0\">{{totalpricedisplay}} \n      </div>\n      </div>\n      <div class=\"div-button\">\n        <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Mua hành lý</button>\n      </div>\n      \n    </div>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/flightcomboaddluggage/flightcomboaddluggage.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-header .d-flex {\n  display: flex;\n  border-bottom: none !important;\n}\n.col-header .div-header-title {\n  padding-top: 11px;\n}\n.content-flightaddluggage {\n  padding: 16px;\n}\n.content-flightaddluggage .btn-close {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 48px;\n  height: 48px;\n  background-color: #fff;\n  font-size: 2em;\n  color: #828282;\n}\n.content-flightaddluggage .t-center {\n  align-self: center;\n}\n.content-flightaddluggage .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.content-flightaddluggage .text-center {\n  text-align: center;\n}\n.content-flightaddluggage .div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n.content-flightaddluggage .div-empty {\n  margin-top: 64px;\n}\n.content-flightaddluggage .m-top-24 {\n  margin-top: 24px;\n}\n.content-flightaddluggage .div-justify-center {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.content-flightaddluggage .div-center-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content-flightaddluggage .text-left-lug {\n  width: 100px;\n  text-align: left;\n}\n.content-flightaddluggage .text-bold {\n  font-weight: 600;\n}\n.content-flightaddluggage .div-width-100 {\n  width: 100% !important;\n}\n.content-flightaddluggage .d-flex {\n  display: flex;\n  border-bottom: solid 0.5px #f2f2f2;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .d-flex .text-price {\n  width: 180px;\n  text-align: left;\n}\n.content-flightaddluggage .d-flex .ic-plus {\n  width: 26px;\n}\n.content-flightaddluggage .d-flex .ic-minus {\n  width: 32px;\n}\n.content-flightaddluggage .d-flex .number-room {\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.content-flightaddluggage .text-oversize {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.content-flightaddluggage .text-room {\n  font-size: 14px;\n  letter-spacing: -0.69px;\n  color: #222222;\n  font-weight: 100;\n}\n.content-flightaddluggage .cls-hidden {\n  visibility: hidden;\n}\n.content-flightaddluggage .no-border-bottom {\n  border-bottom: none;\n}\n.content-flightaddluggage .p-top-20 {\n  padding-top: 20px;\n}\n.content-flightaddluggage .text-child-age {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .div-age {\n  position: relative;\n}\n.content-flightaddluggage .div-age .p-right-8 {\n  padding-right: 8px;\n}\n.content-flightaddluggage .div-age .div-text-age {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.content-flightaddluggage .div-age .text-child {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n.content-flightaddluggage .div-age .selected-age {\n  font-size: 18px;\n  color: #26bed6;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n}\n.d-flex-footer {\n  display: flex;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n::ng-deep .action-sheets-select-age .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-select-age .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n  overflow: auto;\n}\n::ng-deep .action-sheets-select-age .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #222222;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 17px;\n  color: #bdbdbd;\n  height: 48px;\n}\n::ng-deep .action-sheets-select-age .no-border-bottom.action-sheet-button.sc-ion-action-sheet-ios {\n  border-bottom: none;\n  background-position: no;\n}\n::ng-deep .action-sheets-select-age .picker-wrapper.sc-ion-picker-ios {\n  height: 332px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 0px);\n  position: fixed;\n}\n::ng-deep .action-sheets-select-age .picker-toolbar-button.sc-ion-picker-ios {\n  text-align: center;\n}\n::ng-deep .action-sheets-select-age .picker-button.ion-activatable.picker-header.sc-ion-picker-ios {\n  font-weight: 300;\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-select-age .button-done {\n  color: #ffffff !important;\n  font-size: 17px !important;\n  background: #ec971f;\n  border-radius: 4px;\n  height: 48px !important;\n  width: 92%;\n  margin: 8px 16px;\n}\n.action-sheets-select-age .img-filter {\n  width: 30px;\n  height: 30px;\n  margin-right: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDRFI7QURHSTtFQUNJLGlCQUFBO0FDRFI7QURJQTtFQUNHLGFBQUE7QUNESDtBREdHO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0E7RUFDSSxrQkFBQTtBQ0RKO0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREo7QURHQTtFQUNJLGtCQUFBO0FDREo7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RKO0FER0E7RUFDSSxnQkFBQTtBQ0RKO0FER0E7RUFDSSxnQkFBQTtBQ0RKO0FER0E7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDREo7QURHQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDREo7QURJQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUE7RUFDSSxnQkFBQTtBQ0ZKO0FESUE7RUFDSSxzQkFBQTtBQ0ZKO0FESUE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNISjtBRE1JO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDSlI7QURNSTtFQUNJLFdBQUE7QUNKUjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FETUk7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRFNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDUEo7QURTQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1BKO0FEU0E7RUFDSSxrQkFBQTtBQ1BKO0FEU0E7RUFDSSxtQkFBQTtBQ1BKO0FEU0E7RUFDSSxpQkFBQTtBQ1BKO0FEU0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEU0E7RUFDSSxrQkFBQTtBQ1BKO0FEU0k7RUFDSSxrQkFBQTtBQ1BSO0FEU0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDUFI7QURTSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNQUjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDUFI7QURhQTtFQUNBLGFBQUE7QUNWQTtBRFlBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNUQTtBRFdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDVEo7QURXSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1RSO0FEWUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZSO0FEY0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGVBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNkSjtBRGtDSTtFQUNJLFVBQUE7QUMvQlI7QURpQ0k7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDL0JSO0FEaUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDL0JSO0FEaUNJO0VBQ0ksdUJBQUE7QUMvQlI7QURpQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUMvQlI7QURpQ0k7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDL0JSO0FEa0NRO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtBQ2hDWjtBRGtDUTtFQUNJLGtCQUFBO0FDaENaO0FEa0NRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ2hDWjtBRG1DUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNqQ1o7QUR3Q0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckNOIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIC5jb2wtaGVhZGVye1xuICAgIC5kLWZsZXh7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdi1oZWFkZXItdGl0bGV7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgIH1cbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2V7XG4gICBwYWRkaW5nOiAxNnB4O1xuXG4gICAuYnRuLWNsb3Nle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDowcHg7XG4gICAgdG9wOiA0cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4udC1jZW50ZXJ7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLnRleHQtdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtdGV4dC1lbXB0eSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtZW1wdHl7XG4gICAgbWFyZ2luLXRvcDogNjRweDtcbn1cbi5tLXRvcC0yNHtcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmRpdi1qdXN0aWZ5LWNlbnRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMTA0cHg7XG59XG4uZGl2LWNlbnRlci12ZXJ0aWNhbHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgXG59XG4udGV4dC1sZWZ0LWx1Z3tcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LWJvbGR7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgXG4gICAgLnRleHQtcHJpY2V7XG4gICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLmljLXBsdXN7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgIH1cbiAgICAuaWMtbWludXN7XG4gICAgICAgIHdpZHRoOiAzMnB4O1xuICAgIH1cbiAgICAubnVtYmVyLXJvb217XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICBcbn1cbi50ZXh0LW92ZXJzaXple1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi50ZXh0LXJvb217XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uY2xzLWhpZGRlbntcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4ubm8tYm9yZGVyLWJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOm5vbmU7XG59XG4ucC10b3AtMjB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4udGV4dC1jaGlsZC1hZ2V7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5kaXYtYWdle1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5wLXJpZ2h0LTh7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgLmRpdi10ZXh0LWFnZXtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAudGV4dC1jaGlsZHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG4gICAgLnNlbGVjdGVkLWFnZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxufVxuXG59XG5cbi5kLWZsZXgtZm9vdGVye1xuZGlzcGxheTogZmxleDtcbn1cbi5kaXYtZm9vdGVye1xuYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG50ZXh0LWFsaWduOiBjZW50ZXI7XG5oZWlnaHQ6IDYwcHg7XG5cbi5kaXYtdG90YWx7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuXG4gICAgLnRleHQtc3ViLXRvdGFse1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cblxuICAgIC50ZXh0LXRvdGFse1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG59XG5cbi5kaXYtYnV0dG9ue1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4uYnV0dG9uXG57XG4gICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufSBcbn1cblxuXG4vLy9zdHlsZSBpb3Ncbjo6bmctZGVlcHtcbiAgICAvLyBAbWVkaWEgKG1pbi13aWR0aDogMzc1cHgpIGFuZCAobWF4LXdpZHRoOiAzODRweCkge1xuICAgIC8vICAgICAudGV4dC1sZWZ0e1xuICAgIC8vICAgICAgICAgbWluLXdpZHRoOiA3MyU7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgfVxuICAgIC8vICAgQG1lZGlhIChtaW4td2lkdGg6IDQxNHB4KSBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgICAvLyAgICAgLnRleHQtbGVmdHtcbiAgICAvLyAgICAgICAgIG1pbi13aWR0aDogNzUuOCU7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgfVxuICAgIC8vc3R5bGUgY2hvIGlvc1xuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxke1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAubm8tYm9yZGVyLWJvdHRvbS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBubztcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSB7XG4gICAgICAgIC5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLWlvc3tcbiAgICAgICAgICAgIGhlaWdodDogMzMycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDBweCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvc3tcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAucGlja2VyLWJ1dHRvbi5pb24tYWN0aXZhdGFibGUucGlja2VyLWhlYWRlci5zYy1pb24tcGlja2VyLWlvc3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24tZG9uZXtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzk3MWY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgXG59XG5cbi5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2V7XG4gICAgLmltZy1maWx0ZXJ7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcbiAgICB9XG4gICAgIFxuICB9IiwiLmNvbC1oZWFkZXIgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jb2wtaGVhZGVyIC5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDRweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudC1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtdGV4dC1lbXB0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtZW1wdHkge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAubS10b3AtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWp1c3RpZnktY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTA0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtY2VudGVyLXZlcnRpY2FsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWxlZnQtbHVnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLnRleHQtcHJpY2Uge1xuICB3aWR0aDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLmljLXBsdXMge1xuICB3aWR0aDogMjZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAuaWMtbWludXMge1xuICB3aWR0aDogMzJweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAubnVtYmVyLXJvb20ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtb3ZlcnNpemUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LXJvb20ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmNscy1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5uby1ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnAtdG9wLTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWNoaWxkLWFnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5wLXJpZ2h0LTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5kaXYtdGV4dC1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC50ZXh0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2UgLnNlbGVjdGVkLWFnZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGhlaWdodDogNDhweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5uby1ib3JkZXItYm90dG9tLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBubztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLWlvcyB7XG4gIGhlaWdodDogMzMycHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5waWNrZXItaGVhZGVyLnNjLWlvbi1waWNrZXItaW9zIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5idXR0b24tZG9uZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWM5NzFmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDhweCAxNnB4O1xufVxuXG4uYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5pbWctZmlsdGVyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/flightcomboaddluggage/flightcomboaddluggage.page.ts ***!
  \*********************************************************************/
/*! exports provided: FlightcomboaddluggagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcomboaddluggagePage", function() { return FlightcomboaddluggagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");





let FlightcomboaddluggagePage = class FlightcomboaddluggagePage {
    constructor(gf, navCtrl, zone, bookCombo) {
        this.gf = gf;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.bookCombo = bookCombo;
        this.slideOpts = {
            loop: false,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
            zoom: {
                toggle: false
            }
        };
        this.tabluggage = 1;
        this.adults = 2;
        this.child = 0;
        this.room = 1;
        this.arrchild = [];
        this.ischeckadults = true;
        this.ischeckchild = false;
        this.ischeckroom = false;
        this.showpopupfromrequestcombo = false;
        this.departLuggage = [];
        this.returnLuggage = [];
        this.quantitydisplay = "chưa chọn";
        this.quantityreturndisplay = "chưa chọn";
        this.totalprice = 0;
        this.totalquantity = 0;
        this.totaldepartquantity = 0;
        this.totalreturnquantity = 0;
        this.totalquantityreturn = 0;
        this.objectFlight = this.gf.getParams('flightcombo');
        this.departLuggage = this.objectFlight.airLineLuggageDepart;
        this.returnLuggage = this.objectFlight.airLineLuggageReturn;
        if (this.departLuggage && this.departLuggage.length > 0) {
            this.departLuggage.forEach(element => {
                element.priceshow = "x " + this.gf.convertNumberToString(element.Amount) + "đ";
                if (!element.quantity) {
                    element.quantity = 0;
                }
                else {
                    this.totalprice += element.quantity * element.Amount;
                    this.totaldepartquantity += element.quantity;
                    this.totalquantity += element.quantity;
                    this.hasDepartLuggage = true;
                }
            });
            if (this.totaldepartquantity > 0) {
                this.quantitydisplay = this.totaldepartquantity + " kiện";
            }
        }
        if (this.returnLuggage && this.returnLuggage.length > 0) {
            this.returnLuggage.forEach(element => {
                element.priceshow = "x " + this.gf.convertNumberToString(element.Amount) + "đ";
                if (!element.quantity) {
                    element.quantity = 0;
                }
                else {
                    this.totalprice += element.quantity * element.Amount;
                    this.totalreturnquantity += element.quantity;
                    this.totalquantity += element.quantity;
                    this.hasReturnLuggage = true;
                }
            });
            if (this.totalreturnquantity > 0) {
                this.quantityreturndisplay = this.totalreturnquantity + " kiện";
            }
        }
        this.departConditionInfo = this.bookCombo.departConditionInfo;
        this.returnConditionInfo = this.bookCombo.returnConditionInfo;
        if (this.totalprice > 0) {
            this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
        }
    }
    ngOnInit() {
    }
    goback() {
        if (!this.hasDepartLuggage) {
            if (this.departLuggage && this.departLuggage.length > 0) {
                this.departLuggage.forEach(element => {
                    element.quantity = 0;
                });
            }
        }
        if (!this.hasReturnLuggage) {
            if (this.returnLuggage && this.returnLuggage.length > 0) {
                this.returnLuggage.forEach(element => {
                    element.quantity = 0;
                });
            }
        }
        this.navCtrl.navigateBack('/flightcomboreviews');
    }
    plusroom(item, isdepart) {
        this.zone.run(() => {
            let maxluggagepax = this.objectFlight.FlightBooking.adult + this.objectFlight.FlightBooking.child;
            if ((this.totaldepartquantity < maxluggagepax && isdepart) || (this.totalreturnquantity < maxluggagepax && !isdepart)) {
                item.quantity++;
                if (isdepart) {
                    this.totalquantity++;
                }
                else {
                    this.totalquantityreturn++;
                }
                if (isdepart) {
                    this.totaldepartquantity++;
                    this.quantitydisplay = this.totaldepartquantity + " kiện";
                }
                else {
                    this.totalreturnquantity++;
                    this.quantityreturndisplay = this.totalreturnquantity + " kiện";
                }
                this.totalprice = this.departLuggage.reduce((total, b) => { return total + (b.quantity * b.Amount); }, 0);
                this.totalprice += this.returnLuggage.reduce((total, b) => { return total + (b.quantity * b.Amount); }, 0);
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            }
            else {
                if (this.objectFlight.FlightBooking.infant) {
                    this.gf.showToastWarning("Không chọn hành lý cho em bé. Xin vui lòng kiểm tra lại!");
                }
                else {
                    this.gf.showToastWarning("Số kiện không được vượt quá số khách. Xin vui lòng kiểm tra lại!");
                }
            }
        });
    }
    minusroom(item, isdepart) {
        this.zone.run(() => {
            if (item.quantity >= 1) {
                item.quantity--;
                this.totalquantity--;
                if (isdepart) {
                    this.totaldepartquantity--;
                    this.quantitydisplay = this.totaldepartquantity > 0 ? (this.totaldepartquantity + " kiện") : "Chưa chọn";
                }
                else {
                    this.totalreturnquantity--;
                    this.quantityreturndisplay = this.totalreturnquantity > 0 ? (this.totalreturnquantity + " kiện") : "Chưa chọn";
                }
                this.totalprice = this.departLuggage.reduce((total, b) => { return total + (b.quantity * b.Amount); }, 0);
                this.totalprice += this.returnLuggage.reduce((total, b) => { return total + (b.quantity * b.Amount); }, 0);
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            }
        });
    }
    confirm() {
        if (this.tabluggage == 1) {
            this.SelectTab(2);
        }
        else {
            this.bookCombo.Luggage = this.totalprice;
            this.objectFlight.airLineLuggageDepart = this.departLuggage;
            this.objectFlight.airLineLuggageReturn = this.returnLuggage;
            this.gf.setParams(this.objectFlight, 'flightcombo');
            this.bookCombo.itemFlightLuggagePriceChange.emit(true);
            this.navCtrl.navigateBack('/flightcomboreviews');
        }
    }
    slidetabchange() {
        this.sliderTab.getActiveIndex().then(index => {
            this.tabluggage = index + 1;
        });
        this.contentFlightAddLuggage.scrollToTop(200);
    }
    SelectTab(tabindex) {
        this.tabluggage = tabindex;
        this.sliderTab.slideTo(tabindex - 1);
        this.contentFlightAddLuggage.scrollToTop(200);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('slideTab'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
], FlightcomboaddluggagePage.prototype, "sliderTab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('scrollFlightAddLuggage'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"])
], FlightcomboaddluggagePage.prototype, "contentFlightAddLuggage", void 0);
FlightcomboaddluggagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-flightcomboaddluggage',
        template: __webpack_require__(/*! ./flightcomboaddluggage.page.html */ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.html"),
        styles: [__webpack_require__(/*! ./flightcomboaddluggage.page.scss */ "./src/app/flightcomboaddluggage/flightcomboaddluggage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"]])
], FlightcomboaddluggagePage);



/***/ })

}]);
//# sourceMappingURL=flightcomboaddluggage-flightcomboaddluggage-module.js.map