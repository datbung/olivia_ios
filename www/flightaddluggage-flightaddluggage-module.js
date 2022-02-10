(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightaddluggage-flightaddluggage-module"],{

/***/ "./src/app/flightaddluggage/flightaddluggage.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/flightaddluggage/flightaddluggage.module.ts ***!
  \*************************************************************/
/*! exports provided: FlightaddluggagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddluggagePageModule", function() { return FlightaddluggagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaddluggage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightaddluggage.page */ "./src/app/flightaddluggage/flightaddluggage.page.ts");







let FlightaddluggagePageModule = class FlightaddluggagePageModule {
};
FlightaddluggagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightaddluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddluggagePage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _flightaddluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddluggagePage"]
                }]),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaddluggagePageModule);



/***/ }),

/***/ "./src/app/flightaddluggage/flightaddluggage.page.html":
/*!*************************************************************!*\
  !*** ./src/app/flightaddluggage/flightaddluggage.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thêm hành lý ký gửi</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-segment [(ngModel)]=\"tabluggage\" class=\"div-segment\"  mode=\"md\">\n      <ion-segment-button (click)=\"SelectTab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\" >\n        Chiều đi\n        </ion-segment-button>\n        <ion-segment-button (click)=\"SelectTab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\" *ngIf=\"roundtrip\">\n        Chiều về\n        </ion-segment-button>\n      </ion-segment>\n  </ion-row>\n\n</ion-header>\n  <ion-content #scrollFlightAddLuggage>\n    <div class=\"content-flightaddluggage\">\n      <ion-slides #slideTab (ionSlideDidChange)=\"slidetabchange()\" [options]=\"slideOpts\">\n        <!-- Chiều đi -->\n        <ion-slide style=\"display: block;\" *ngIf=\"(departLuggage && departLuggage.length>0) else nodepartluggage\">\n            <div *ngIf=\"departLuggage && departLuggage.length>0\">\n              <!-- <div class=\"text-title \">Chiều đi</div> -->\n              <div *ngFor=\"let lug of departLuggage\">\n                  <div class=\"d-flex\" *ngIf=\"lug.weight >0\">\n                    <div class=\"text-left-lug div-center-vertical\">\n                      <label class=\"text-room\" class=\"text-room\">{{lug.weight}}kg</label>\n                      <label *ngIf=\"lug.title.indexOf('Oversize') != -1\" class=\"text-oversize\">Quá kích cỡ</label>\n                    </div>\n      \n                    <div class=\"text-price div-center-vertical\">\n                      <label class=\"text-room\" class=\"text-room\">{{lug.priceshow}}</label>\n                    </div>\n      \n                    <div class=\"div-justify-center\">\n                      <div  class=\"t-center ic-minus\" (click)=\"minusroom(lug,true)\">\n                        <div >\n                          <img *ngIf=\"!lug.quantity\" class=\"cls-hidden\" src=\"./assets/ic_facility/ic_minus.svg\">\n                          <img *ngIf=\"lug.quantity\" src=\"./assets/ic_facility/ic_minus.svg\">\n                        </div>\n                      </div>\n                      <div class=\"div-center-vertical\">{{lug.quantity}}</div>\n                      <div text-right class=\"t-center ic-plus\" (click)=\"plusroom(lug,true)\">\n                        <img  src=\"./assets/ic_facility/ic_plus.svg\">\n                      </div>\n                    </div>\n                </div>\n                  \n                \n              </div>\n            </div>\n         \n        </ion-slide>\n        <ng-template #nodepartluggage>\n          <ion-slide style=\"display: block;\" *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && departLuggage.length ==0)\">\n            <div class=\"div-empty text-center\">\n              <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n            </div>\n            <div class=\"div-text-empty text-center div-width-100 m-top-16\">Đã bao gồm trong vé máy bay ({{ departConditionInfo.luggageSigned }} kg/1 khách).</div>\n          </ion-slide>\n\n         \n            <ion-slide style=\"display: block;\" *ngIf=\"(departConditionInfo && !departConditionInfo.luggageSigned && departLuggage.length ==0)\">\n              <div class=\"div-empty text-center\">\n                <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n              </div>\n              <div class=\"div-text-empty text-center div-width-100 m-top-16\">Không được phép mua hành lý.</div>\n            </ion-slide>\n         \n        </ng-template>\n\n        \n\n        <!-- Chiều về -->\n        <ion-slide style=\"display: block;\" *ngIf=\"(returnLuggage && returnLuggage.length>0)  else noreturnluggage\">\n            <div *ngIf=\"returnLuggage && returnLuggage.length>0\">\n              <div *ngFor=\"let lug of returnLuggage\">\n                <div class=\"d-flex\" *ngIf=\"lug.weight >0\">\n                  <div class=\"text-left-lug div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.weight}}kg</label>\n                    <label *ngIf=\"lug.title.indexOf('Oversize') != -1\" class=\"text-oversize\">Quá kích cỡ</label>\n                  </div>\n    \n                  <div class=\"text-price div-center-vertical\">\n                    <label class=\"text-room\" class=\"text-room\">{{lug.priceshow}}</label>\n                  </div>\n    \n                  <div class=\"div-justify-center\">\n                    <div  class=\"t-center ic-minus\" (click)=\"minusroom(lug,false)\">\n                      <div >\n                        <img *ngIf=\"!lug.quantity\" class=\"cls-hidden\" src=\"./assets/ic_facility/ic_minus.svg\">\n                        <img *ngIf=\"lug.quantity\" src=\"./assets/ic_facility/ic_minus.svg\">\n                      </div>\n                    </div>\n                    <div class=\"div-center-vertical\">{{lug.quantity}}</div>\n                    <div text-right class=\"t-center ic-plus\" (click)=\"plusroom(lug,false)\">\n                      <img  src=\"./assets/ic_facility/ic_plus.svg\">\n                    </div>\n                  </div>\n                </div>\n                  \n                \n              </div>\n            </div>\n           \n          </ion-slide>\n          <ng-template #noreturnluggage>\n            <ion-slide style=\"display: block;\" *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && returnLuggage.length == 0) else noreturnluggageSigned\">\n              <div class=\"div-empty text-center\">\n                <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n              </div>\n              <div class=\"div-text-empty text-center div-width-100 m-top-16\">Đã bao gồm trong vé máy bay ({{ returnConditionInfo.luggageSigned }} kg/1 khách).</div>\n            </ion-slide>\n              \n                <ion-slide style=\"display: block;\" *ngIf=\"(returnConditionInfo && !returnConditionInfo.luggageSigned && returnLuggage.length ==0)\">\n                  <div class=\"div-empty text-center\">\n                    <img class=\"img-empty-lug\" src=\"./assets/ic_flight/luggage_empty.svg\">\n                  </div>\n                  <div class=\"div-text-empty text-center div-width-100 m-top-16\">Không được phép mua hành lý.</div>\n                </ion-slide>\n              \n          </ng-template>\n      </ion-slides>\n    </div>\n  \n  </ion-content>\n  <ion-footer>\n    <div class=\"div-footer d-flex-footer\">\n      <div class=\"div-total\">\n        <div class=\"d-flex-footer text-sub-total\" *ngIf=\"(departLuggage && departLuggage.length>0) || (returnLuggage && returnLuggage.length>0)\">\n          <div *ngIf=\"(departLuggage && departLuggage.length>0)\">Đi: {{quantitydisplay}}</div>\n          <div *ngIf=\"returnLuggage && returnLuggage.length>0 \">| Về: {{quantityreturndisplay}}</div>\n        </div>\n        <div class=\"text-total\" *ngIf=\"totalprice >0\">{{totalpricedisplay}} \n      </div>\n      </div>\n      <div class=\"div-button\">\n        <button (click)=\"confirm()\" ion-button round outline class=\"button button-done\">Xác nhận</button>\n      </div>\n      \n    </div>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/flightaddluggage/flightaddluggage.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/flightaddluggage/flightaddluggage.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-header .d-flex {\n  display: flex;\n  border-bottom: none !important;\n}\n.col-header .div-header-title {\n  padding-top: 11px;\n}\n.content-flightaddluggage {\n  padding: 16px;\n}\n.content-flightaddluggage .btn-close {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 48px;\n  height: 48px;\n  background-color: #fff;\n  font-size: 2em;\n  color: #828282;\n}\n.content-flightaddluggage .t-center {\n  align-self: center;\n}\n.content-flightaddluggage .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.content-flightaddluggage .text-center {\n  text-align: center;\n}\n.content-flightaddluggage .div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n.content-flightaddluggage .div-empty {\n  margin-top: 64px;\n}\n.content-flightaddluggage .m-top-24 {\n  margin-top: 24px;\n}\n.content-flightaddluggage .div-justify-center {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.content-flightaddluggage .div-center-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content-flightaddluggage .text-left-lug {\n  width: 100px;\n  text-align: left;\n}\n.content-flightaddluggage .text-bold {\n  font-weight: 600;\n}\n.content-flightaddluggage .div-width-100 {\n  width: 100% !important;\n}\n.content-flightaddluggage .d-flex {\n  display: flex;\n  border-bottom: solid 0.5px #f2f2f2;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .d-flex .text-price {\n  width: 180px;\n  text-align: left;\n}\n.content-flightaddluggage .d-flex .ic-plus {\n  width: 26px;\n}\n.content-flightaddluggage .d-flex .ic-minus {\n  width: 32px;\n}\n.content-flightaddluggage .d-flex .number-room {\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.content-flightaddluggage .text-oversize {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.content-flightaddluggage .text-room {\n  font-size: 14px;\n  letter-spacing: -0.69px;\n  color: #222222;\n  font-weight: 100;\n}\n.content-flightaddluggage .cls-hidden {\n  visibility: hidden;\n}\n.content-flightaddluggage .no-border-bottom {\n  border-bottom: none;\n}\n.content-flightaddluggage .p-top-20 {\n  padding-top: 20px;\n}\n.content-flightaddluggage .text-child-age {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .div-age {\n  position: relative;\n}\n.content-flightaddluggage .div-age .p-right-8 {\n  padding-right: 8px;\n}\n.content-flightaddluggage .div-age .div-text-age {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.content-flightaddluggage .div-age .text-child {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n.content-flightaddluggage .div-age .selected-age {\n  font-size: 18px;\n  color: #26bed6;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n}\n.d-flex-footer {\n  display: flex;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n::ng-deep .action-sheets-select-age .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-select-age .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n  overflow: auto;\n}\n::ng-deep .action-sheets-select-age .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #222222;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 17px;\n  color: #bdbdbd;\n  height: 48px;\n}\n::ng-deep .action-sheets-select-age .no-border-bottom.action-sheet-button.sc-ion-action-sheet-ios {\n  border-bottom: none;\n  background-position: no;\n}\n::ng-deep .action-sheets-select-age .picker-wrapper.sc-ion-picker-ios {\n  height: 332px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 0px);\n  position: fixed;\n}\n::ng-deep .action-sheets-select-age .picker-toolbar-button.sc-ion-picker-ios {\n  text-align: center;\n}\n::ng-deep .action-sheets-select-age .picker-button.ion-activatable.picker-header.sc-ion-picker-ios {\n  font-weight: 300;\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-select-age .button-done {\n  color: #ffffff !important;\n  font-size: 17px !important;\n  background: #ec971f;\n  border-radius: 4px;\n  height: 48px !important;\n  width: 92%;\n  margin: 8px 16px;\n}\n.action-sheets-select-age .img-filter {\n  width: 30px;\n  height: 30px;\n  margin-right: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGFkZGx1Z2dhZ2UvZmxpZ2h0YWRkbHVnZ2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFkZGx1Z2dhZ2UvZmxpZ2h0YWRkbHVnZ2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNEWjtBREdRO0VBQ0ksaUJBQUE7QUNEWjtBRElHO0VBQ0ksYUFBQTtBQ0RQO0FER087RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0FDRFI7QURHSTtFQUNJLGdCQUFBO0FDRFI7QURHSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNEUjtBREdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNEUjtBRElJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRlI7QURJSTtFQUNJLGdCQUFBO0FDRlI7QURJSTtFQUNJLHNCQUFBO0FDRlI7QURJSTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0hSO0FETVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNKWjtBRE1RO0VBQ0ksV0FBQTtBQ0paO0FETVE7RUFDSSxXQUFBO0FDSlo7QURNUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0paO0FEU0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNQUjtBRFNJO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURTSTtFQUNJLG1CQUFBO0FDUFI7QURTSTtFQUNJLGlCQUFBO0FDUFI7QURTSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURTUTtFQUNJLGtCQUFBO0FDUFo7QURTUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNQWjtBRFNRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1BaO0FEU1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNQWjtBRGFBO0VBQ0ksYUFBQTtBQ1ZKO0FEWUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1RKO0FEV0k7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNUUjtBRFdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVFo7QURZUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVlo7QURjSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ1pSO0FEZUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ2RSO0FEdUJRO0VBQ0ksVUFBQTtBQ3BCWjtBRHNCUTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNwQlo7QURzQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNwQlo7QURzQlE7RUFDSSx1QkFBQTtBQ3BCWjtBRHNCUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ3BCWjtBRHNCUTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNwQlo7QUR1Qlk7RUFDSSxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0FDckJoQjtBRHVCWTtFQUNJLGtCQUFBO0FDckJoQjtBRHVCWTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNyQmhCO0FEd0JZO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ3RCaEI7QUQ2QlE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDMUJWIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0YWRkbHVnZ2FnZS9mbGlnaHRhZGRsdWdnYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgLmNvbC1oZWFkZXJ7XG4gICAgICAgIC5kLWZsZXh7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtaGVhZGVyLXRpdGxle1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgIH1cbiAgIH1cbiAgIC5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2V7XG4gICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgIC5idG4tY2xvc2V7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6MHB4O1xuICAgICAgICB0b3A6IDRweDtcbiAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAudC1jZW50ZXJ7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB9XG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtdGV4dC1lbXB0eSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC5kaXYtZW1wdHl7XG4gICAgICAgIG1hcmdpbi10b3A6IDY0cHg7XG4gICAgfVxuICAgIC5tLXRvcC0yNHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB9XG4gICAgLmRpdi1qdXN0aWZ5LWNlbnRlcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgfVxuICAgIC5kaXYtY2VudGVyLXZlcnRpY2Fse1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgfVxuICAgIC50ZXh0LWxlZnQtbHVne1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5kaXYtd2lkdGgtMTAwe1xuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZC1mbGV4e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZjJmMmYyO1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuXG4gICAgICAgIFxuICAgICAgICAudGV4dC1wcmljZXtcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmljLXBsdXN7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgfVxuICAgICAgICAuaWMtbWludXN7XG4gICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgfVxuICAgICAgICAubnVtYmVyLXJvb217XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgfVxuICAgIC50ZXh0LW92ZXJzaXple1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuICAgIC50ZXh0LXJvb217XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgIH1cbiAgICAuY2xzLWhpZGRlbntcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICAubm8tYm9yZGVyLWJvdHRvbXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTpub25lO1xuICAgIH1cbiAgICAucC10b3AtMjB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICAudGV4dC1jaGlsZC1hZ2V7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICB9XG4gICAgLmRpdi1hZ2V7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAucC1yaWdodC04e1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kaXYtdGV4dC1hZ2V7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1jaGlsZHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0ZWQtYWdle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICB9XG5cbi5kLWZsZXgtZm9vdGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgLmRpdi10b3RhbHtcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRleHQtdG90YWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnV0dG9uXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICB9IFxufVxuICAgIFxuICAgIFxuICAgIC8vL3N0eWxlIGlvc1xuICAgIDo6bmctZGVlcHtcbiAgXG4gICAgICAgIC8vc3R5bGUgY2hvIGlvc1xuICAgICAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XG4gICAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5uby1ib3JkZXItYm90dG9tLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbm87XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSB7XG4gICAgICAgICAgICAucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMzJweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDBweCk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvc3tcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucGlja2VyLWJ1dHRvbi5pb24tYWN0aXZhdGFibGUucGlja2VyLWhlYWRlci5zYy1pb24tcGlja2VyLWlvc3tcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbi1kb25le1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDhweCAxNnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZXtcbiAgICAgICAgLmltZy1maWx0ZXJ7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTFweDtcbiAgICAgICAgfVxuICAgICAgICAgXG4gICAgICB9IiwiLmNvbC1oZWFkZXIgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jb2wtaGVhZGVyIC5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDExcHg7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2Uge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuYnRuLWNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICB0b3A6IDRweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyZW07XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudC1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtdGV4dC1lbXB0eSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtZW1wdHkge1xuICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAubS10b3AtMjQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWp1c3RpZnktY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTA0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtY2VudGVyLXZlcnRpY2FsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWxlZnQtbHVnIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLnRleHQtcHJpY2Uge1xuICB3aWR0aDogMTgwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLmljLXBsdXMge1xuICB3aWR0aDogMjZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAuaWMtbWludXMge1xuICB3aWR0aDogMzJweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAubnVtYmVyLXJvb20ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtb3ZlcnNpemUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LXJvb20ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmNscy1oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5uby1ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnAtdG9wLTIwIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWNoaWxkLWFnZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5wLXJpZ2h0LTgge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5kaXYtdGV4dC1hZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC50ZXh0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2UgLnNlbGVjdGVkLWFnZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZC1mbGV4LWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDYwcHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtc3ViLXRvdGFsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwgLnRleHQtdG90YWwge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtYnV0dG9uIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIHBhZGRpbmc6IDA7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIGhlaWdodDogNDhweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5uby1ib3JkZXItYm90dG9tLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBubztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItd3JhcHBlci5zYy1pb24tcGlja2VyLWlvcyB7XG4gIGhlaWdodDogMzMycHg7XG4gIG1hcmdpbi1ib3R0b206IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMHB4KTtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLnBpY2tlci10b29sYmFyLWJ1dHRvbi5zYy1pb24tcGlja2VyLWlvcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5waWNrZXItaGVhZGVyLnNjLWlvbi1waWNrZXItaW9zIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5idXR0b24tZG9uZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWM5NzFmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTIlO1xuICBtYXJnaW46IDhweCAxNnB4O1xufVxuXG4uYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5pbWctZmlsdGVyIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightaddluggage/flightaddluggage.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightaddluggage/flightaddluggage.page.ts ***!
  \***********************************************************/
/*! exports provided: FlightaddluggagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddluggagePage", function() { return FlightaddluggagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_7__);









let FlightaddluggagePage = class FlightaddluggagePage {
    constructor(platform, navCtrl, modalCtrl, valueGlobal, searchhotel, gf, actionsheetCtrl, pickerController, zone, _flightService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pickerController = pickerController;
        this.zone = zone;
        this._flightService = _flightService;
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
        if (this._flightService.itemFlightCache.departFlight) {
            this.roundtrip = this._flightService.itemFlightCache.roundTrip;
            this.departLuggage = [];
            this.returnLuggage = [];
            if (this._flightService.itemFlightCache.departFlight) {
                this.departLuggage = this._flightService.itemFlightCache.departFlight.airLineLuggage;
            }
            if (this._flightService.itemFlightCache.returnFlight) {
                this.returnLuggage = this._flightService.itemFlightCache.returnFlight.airLineLuggage;
            }
            if (this._flightService.itemFlightCache.departLuggage && this._flightService.itemFlightCache.departLuggage.length > 0) {
                this.departLuggage = this._flightService.itemFlightCache.departLuggage;
            }
            if (this._flightService.itemFlightCache.returnLuggage && this._flightService.itemFlightCache.returnLuggage.length > 0) {
                this.returnLuggage = this._flightService.itemFlightCache.returnLuggage;
            }
            if (this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.departCondition) {
                this.getDetailTicket(this._flightService.itemFlightCache.departFlight).then((data) => {
                    if (data.ticketCondition) {
                        this.departConditionInfo = data.ticketCondition;
                    }
                });
            }
            if (this._flightService.itemFlightCache.dataBooking && this._flightService.itemFlightCache.dataBooking.returnCondition) {
                this.getDetailTicket(this._flightService.itemFlightCache.returnFlight).then((data) => {
                    if (data.ticketCondition) {
                        this.returnConditionInfo = data.ticketCondition;
                    }
                });
            }
            if (this.departLuggage && this.departLuggage.length > 0) {
                this.departLuggage.forEach(element => {
                    element.priceshow = "x " + this.gf.convertNumberToString(element.amount) + "đ";
                    if (!element.quantity) {
                        element.quantity = 0;
                    }
                    else {
                        this.totalprice += element.quantity * element.amount;
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
                    element.priceshow = "x " + this.gf.convertNumberToString(element.amount) + "đ";
                    if (!element.quantity) {
                        element.quantity = 0;
                    }
                    else {
                        this.totalprice += element.quantity * element.amount;
                        this.totalreturnquantity += element.quantity;
                        this.totalquantity += element.quantity;
                        this.hasReturnLuggage = true;
                    }
                });
                if (this.totalreturnquantity > 0) {
                    this.quantityreturndisplay = this.totalreturnquantity + " kiện";
                }
            }
            if (this.totalprice > 0) {
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            }
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
        this.navCtrl.navigateBack('/flightaddservice');
    }
    plusroom(item, isdepart) {
        this.zone.run(() => {
            let maxluggagepax = this._flightService.itemFlightCache.pax - (this._flightService.itemFlightCache.infant ? this._flightService.itemFlightCache.infant : 0);
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
                this.totalprice = this.departLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                this.totalprice += this.returnLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            }
            else {
                if (this._flightService.itemFlightCache.infant) {
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
                this.totalprice = this.departLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                this.totalprice += this.returnLuggage.reduce((total, b) => { return total + (b.quantity * b.amount); }, 0);
                this.totalpricedisplay = this.gf.convertNumberToString(this.totalprice) + "đ";
            }
        });
    }
    confirm() {
        if (this.tabluggage == 1 && this.roundtrip) {
            this.SelectTab(2);
        }
        else {
            this._flightService.itemFlightLuggagePriceChange.emit(true);
            this.navCtrl.navigateBack('/flightaddservice');
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
    getDetailTicket(item) {
        var se = this;
        return new Promise((resolve, reject) => {
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode=" + item.airlineCode + "&ticketType=" + item.ticketType + "&airbusCode=" + item.aircraft + "&flightNumber=" + item.flightNumber + "&fromPlace=" + item.fromPlaceCode + "&toPlace=" + item.toPlaceCode,
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_7__(options, function (error, response, body) {
                let objError = {
                    page: "flightsearchresult",
                    func: "selectTicket",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                if (error) {
                    error.page = "flightsearchresult";
                    error.func = "selectTicket";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(objError, response);
                }
                if (response.statusCode == 200) {
                    let result = JSON.parse(body);
                    resolve(result);
                }
            });
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideTab'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], FlightaddluggagePage.prototype, "sliderTab", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollFlightAddLuggage'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
], FlightaddluggagePage.prototype, "contentFlightAddLuggage", void 0);
FlightaddluggagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightaddluggage',
        template: __webpack_require__(/*! ./flightaddluggage.page.html */ "./src/app/flightaddluggage/flightaddluggage.page.html"),
        styles: [__webpack_require__(/*! ./flightaddluggage.page.scss */ "./src/app/flightaddluggage/flightaddluggage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"]])
], FlightaddluggagePage);



/***/ })

}]);
//# sourceMappingURL=flightaddluggage-flightaddluggage-module.js.map