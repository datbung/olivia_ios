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

module.exports = ".col-header .d-flex {\n  display: flex;\n  border-bottom: none !important;\n}\n.col-header .div-header-title {\n  padding-top: 11px;\n}\n.content-flightaddluggage {\n  padding: 16px;\n}\n.content-flightaddluggage .btn-close {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 48px;\n  height: 48px;\n  background-color: #fff;\n  font-size: 2em;\n  color: #828282;\n}\n.content-flightaddluggage .t-center {\n  align-self: center;\n}\n.content-flightaddluggage .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.content-flightaddluggage .text-center {\n  text-align: center;\n}\n.content-flightaddluggage .div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n.content-flightaddluggage .div-empty {\n  margin-top: 64px;\n}\n.content-flightaddluggage .m-top-24 {\n  margin-top: 24px;\n}\n.content-flightaddluggage .div-justify-center {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.content-flightaddluggage .div-center-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content-flightaddluggage .text-left-lug {\n  width: 100px;\n  text-align: left;\n}\n.content-flightaddluggage .text-bold {\n  font-weight: 600;\n}\n.content-flightaddluggage .div-width-100 {\n  width: 100% !important;\n}\n.content-flightaddluggage .d-flex {\n  display: flex;\n  border-bottom: solid 0.5px #f2f2f2;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .d-flex .text-price {\n  width: 180px;\n  text-align: left;\n}\n.content-flightaddluggage .d-flex .ic-plus {\n  width: 26px;\n}\n.content-flightaddluggage .d-flex .ic-minus {\n  width: 32px;\n}\n.content-flightaddluggage .d-flex .number-room {\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.content-flightaddluggage .text-oversize {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.content-flightaddluggage .text-room {\n  font-size: 14px;\n  letter-spacing: -0.69px;\n  color: #222222;\n  font-weight: 100;\n}\n.content-flightaddluggage .cls-hidden {\n  visibility: hidden;\n}\n.content-flightaddluggage .no-border-bottom {\n  border-bottom: none;\n}\n.content-flightaddluggage .p-top-20 {\n  padding-top: 20px;\n}\n.content-flightaddluggage .text-child-age {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .div-age {\n  position: relative;\n}\n.content-flightaddluggage .div-age .p-right-8 {\n  padding-right: 8px;\n}\n.content-flightaddluggage .div-age .div-text-age {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.content-flightaddluggage .div-age .text-child {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n.content-flightaddluggage .div-age .selected-age {\n  font-size: 18px;\n  color: #26bed6;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n}\n.d-flex-footer {\n  display: flex;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n::ng-deep .action-sheets-select-age .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-select-age .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n  overflow: auto;\n}\n::ng-deep .action-sheets-select-age .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #222222;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 17px;\n  color: #bdbdbd;\n  height: 48px;\n}\n::ng-deep .action-sheets-select-age .no-border-bottom.action-sheet-button.sc-ion-action-sheet-ios {\n  border-bottom: none;\n  background-position: no;\n}\n::ng-deep .action-sheets-select-age .picker-wrapper.sc-ion-picker-ios {\n  height: 332px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 0px);\n  position: fixed;\n}\n::ng-deep .action-sheets-select-age .picker-toolbar-button.sc-ion-picker-ios {\n  text-align: center;\n}\n::ng-deep .action-sheets-select-age .picker-button.ion-activatable.picker-header.sc-ion-picker-ios {\n  font-weight: 300;\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-select-age .button-done {\n  color: #ffffff !important;\n  font-size: 17px !important;\n  background: #ec971f;\n  border-radius: 4px;\n  height: 48px !important;\n  width: 92%;\n  margin: 8px 16px;\n}\n.action-sheets-select-age .img-filter {\n  width: 30px;\n  height: 30px;\n  margin-right: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQ0RSO0FER0k7RUFDSSxpQkFBQTtBQ0RSO0FESUE7RUFDRyxhQUFBO0FDREg7QURHRztFQUNDLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjtBREdBO0VBQ0ksa0JBQUE7QUNESjtBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0E7RUFDSSxrQkFBQTtBQ0RKO0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNESjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBREdBO0VBQ0ksZ0JBQUE7QUNESjtBREdBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FER0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRElBO0VBQ0ksZ0JBQUE7QUNGSjtBRElBO0VBQ0ksc0JBQUE7QUNGSjtBRElBO0VBQ0ksYUFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDSEo7QURNSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0pSO0FETUk7RUFDSSxXQUFBO0FDSlI7QURNSTtFQUNJLFdBQUE7QUNKUjtBRE1JO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDSlI7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1BKO0FEU0E7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFNBO0VBQ0ksa0JBQUE7QUNQSjtBRFNBO0VBQ0ksbUJBQUE7QUNQSjtBRFNBO0VBQ0ksaUJBQUE7QUNQSjtBRFNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNQSjtBRFNBO0VBQ0ksa0JBQUE7QUNQSjtBRFNJO0VBQ0ksa0JBQUE7QUNQUjtBRFNJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ1BSO0FEU0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDUFI7QURTSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEYUE7RUFDQSxhQUFBO0FDVkE7QURZQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVEE7QURXQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ1RKO0FEV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNUUjtBRFlJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNWUjtBRGNBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDWko7QURlQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDZEo7QURrQ0k7RUFDSSxVQUFBO0FDL0JSO0FEaUNJO0VBQ0ksU0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQy9CUjtBRGlDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQy9CUjtBRGlDSTtFQUNJLHVCQUFBO0FDL0JSO0FEaUNJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDL0JSO0FEaUNJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQy9CUjtBRGtDUTtFQUNJLGFBQUE7RUFDQSxzREFBQTtFQUNBLGVBQUE7QUNoQ1o7QURrQ1E7RUFDSSxrQkFBQTtBQ2hDWjtBRGtDUTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNoQ1o7QURtQ1E7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDakNaO0FEd0NJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ3JDTiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAuY29sLWhlYWRlcntcbiAgICAuZC1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtaGVhZGVyLXRpdGxle1xuICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICB9XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdle1xuICAgcGFkZGluZzogMTZweDtcblxuICAgLmJ0bi1jbG9zZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6MHB4O1xuICAgIHRvcDogNHB4O1xuICAgIHdpZHRoOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLnQtY2VudGVye1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi50ZXh0LXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXRleHQtZW1wdHkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWVtcHR5e1xuICAgIG1hcmdpbi10b3A6IDY0cHg7XG59XG4ubS10b3AtMjR7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5kaXYtanVzdGlmeS1jZW50ZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDEwNHB4O1xufVxuLmRpdi1jZW50ZXItdmVydGljYWx7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIFxufVxuLnRleHQtbGVmdC1sdWd7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNmMmYyZjI7XG4gICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcblxuICAgIFxuICAgIC50ZXh0LXByaWNle1xuICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC5pYy1wbHVze1xuICAgICAgICB3aWR0aDogMjZweDtcbiAgICB9XG4gICAgLmljLW1pbnVze1xuICAgICAgICB3aWR0aDogMzJweDtcbiAgICB9XG4gICAgLm51bWJlci1yb29te1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgXG4gICAgXG59XG4udGV4dC1vdmVyc2l6ZXtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgY29sb3I6ICM4MjgyODI7XG59XG4udGV4dC1yb29te1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICBjb2xvcjogIzIyMjIyMjtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuLmNscy1oaWRkZW57XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLm5vLWJvcmRlci1ib3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTpub25lO1xufVxuLnAtdG9wLTIwe1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRleHQtY2hpbGQtYWdle1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uZGl2LWFnZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAucC1yaWdodC04e1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC5kaXYtdGV4dC1hZ2V7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG4gICAgLnRleHQtY2hpbGR7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5zZWxlY3RlZC1hZ2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbn1cblxufVxuXG4uZC1mbGV4LWZvb3RlcntcbmRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZvb3RlcntcbmJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxudGV4dC1hbGlnbjogY2VudGVyO1xuaGVpZ2h0OiA2MHB4O1xuXG4uZGl2LXRvdGFse1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgIC50ZXh0LXN1Yi10b3RhbHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAudGV4dC10b3RhbHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG4uZGl2LWJ1dHRvbntcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmJ1dHRvblxue1xuICAgIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMDtcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn0gXG59XG5cblxuLy8vc3R5bGUgaW9zXG46Om5nLWRlZXB7XG4gICAgLy8gQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSBhbmQgKG1heC13aWR0aDogMzg0cHgpIHtcbiAgICAvLyAgICAgLnRleHQtbGVmdHtcbiAgICAvLyAgICAgICAgIG1pbi13aWR0aDogNzMlO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgIH1cbiAgICAvLyAgIEBtZWRpYSAobWluLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gICAgLy8gICAgIC50ZXh0LWxlZnR7XG4gICAgLy8gICAgICAgICBtaW4td2lkdGg6IDc1LjglO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgIH1cbiAgICAvL3N0eWxlIGNobyBpb3NcbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLm5vLWJvcmRlci1ib3R0b20uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbm87XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2Uge1xuICAgICAgICAucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICBoZWlnaHQ6IDMzMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAwcHgpO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB9XG4gICAgICAgIC5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnBpY2tlci1idXR0b24uaW9uLWFjdGl2YXRhYmxlLnBpY2tlci1oZWFkZXIuc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYnV0dG9uLWRvbmV7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWM5NzFmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICAgICAgbWFyZ2luOiA4cHggMTZweDtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIFxufVxuXG4uYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdle1xuICAgIC5pbWctZmlsdGVye1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgfVxuICAgICBcbiAgfSIsIi5jb2wtaGVhZGVyIC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29sLWhlYWRlciAuZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnQtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LXRleHQtZW1wdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWVtcHR5IHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLm0tdG9wLTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1qdXN0aWZ5LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWNlbnRlci12ZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1sZWZ0LWx1ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNmMmYyZjI7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC50ZXh0LXByaWNlIHtcbiAgd2lkdGg6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC5pYy1wbHVzIHtcbiAgd2lkdGg6IDI2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLmljLW1pbnVzIHtcbiAgd2lkdGg6IDMycHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLm51bWJlci1yb29tIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LW92ZXJzaXplIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1yb29tIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5jbHMtaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAubm8tYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5wLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1jaGlsZC1hZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAucC1yaWdodC04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAuZGl2LXRleHQtYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAudGV4dC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5zZWxlY3RlZC1hZ2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAubm8tYm9yZGVyLWJvdHRvbS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbm87XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1pb3Mge1xuICBoZWlnaHQ6IDMzMnB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAucGlja2VyLWJ1dHRvbi5pb24tYWN0aXZhdGFibGUucGlja2VyLWhlYWRlci5zYy1pb24tcGlja2VyLWlvcyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYnV0dG9uLWRvbmUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiA4cHggMTZweDtcbn1cblxuLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuaW1nLWZpbHRlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn0iXX0= */"

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