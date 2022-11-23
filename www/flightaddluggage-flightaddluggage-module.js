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

module.exports = ".col-header .d-flex {\n  display: flex;\n  border-bottom: none !important;\n}\n.col-header .div-header-title {\n  padding-top: 11px;\n}\n.content-flightaddluggage {\n  padding: 16px;\n}\n.content-flightaddluggage .btn-close {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 48px;\n  height: 48px;\n  background-color: #fff;\n  font-size: 2em;\n  color: #828282;\n}\n.content-flightaddluggage .t-center {\n  align-self: center;\n}\n.content-flightaddluggage .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.content-flightaddluggage .text-center {\n  text-align: center;\n}\n.content-flightaddluggage .div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n.content-flightaddluggage .div-empty {\n  margin-top: 64px;\n}\n.content-flightaddluggage .m-top-24 {\n  margin-top: 24px;\n}\n.content-flightaddluggage .div-justify-center {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.content-flightaddluggage .div-center-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content-flightaddluggage .text-left-lug {\n  width: 100px;\n  text-align: left;\n}\n.content-flightaddluggage .text-bold {\n  font-weight: 600;\n}\n.content-flightaddluggage .div-width-100 {\n  width: 100% !important;\n}\n.content-flightaddluggage .d-flex {\n  display: flex;\n  border-bottom: solid 0.5px #f2f2f2;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 100;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .d-flex .text-price {\n  width: 180px;\n  text-align: left;\n}\n.content-flightaddluggage .d-flex .ic-plus {\n  width: 26px;\n}\n.content-flightaddluggage .d-flex .ic-minus {\n  width: 32px;\n}\n.content-flightaddluggage .d-flex .number-room {\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.content-flightaddluggage .text-oversize {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.content-flightaddluggage .text-room {\n  font-size: 14px;\n  letter-spacing: -0.69px;\n  color: #222222;\n  font-weight: 100;\n}\n.content-flightaddluggage .cls-hidden {\n  visibility: hidden;\n}\n.content-flightaddluggage .no-border-bottom {\n  border-bottom: none;\n}\n.content-flightaddluggage .p-top-20 {\n  padding-top: 20px;\n}\n.content-flightaddluggage .text-child-age {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .div-age {\n  position: relative;\n}\n.content-flightaddluggage .div-age .p-right-8 {\n  padding-right: 8px;\n}\n.content-flightaddluggage .div-age .div-text-age {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.content-flightaddluggage .div-age .text-child {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n.content-flightaddluggage .div-age .selected-age {\n  font-size: 18px;\n  color: #26bed6;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n}\n.d-flex-footer {\n  display: flex;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n::ng-deep .action-sheets-select-age .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-select-age .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n  overflow: auto;\n}\n::ng-deep .action-sheets-select-age .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #222222;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 17px;\n  color: #bdbdbd;\n  height: 48px;\n}\n::ng-deep .action-sheets-select-age .no-border-bottom.action-sheet-button.sc-ion-action-sheet-ios {\n  border-bottom: none;\n  background-position: no;\n}\n::ng-deep .action-sheets-select-age .picker-wrapper.sc-ion-picker-ios {\n  height: 332px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 0px);\n  position: fixed;\n}\n::ng-deep .action-sheets-select-age .picker-toolbar-button.sc-ion-picker-ios {\n  text-align: center;\n}\n::ng-deep .action-sheets-select-age .picker-button.ion-activatable.picker-header.sc-ion-picker-ios {\n  font-weight: 300;\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-select-age .button-done {\n  color: #ffffff !important;\n  font-size: 17px !important;\n  background: #ec971f;\n  border-radius: 4px;\n  height: 48px !important;\n  width: 92%;\n  margin: 8px 16px;\n}\n.action-sheets-select-age .img-filter {\n  width: 30px;\n  height: 30px;\n  margin-right: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRhZGRsdWdnYWdlL2ZsaWdodGFkZGx1Z2dhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRhZGRsdWdnYWdlL2ZsaWdodGFkZGx1Z2dhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FDRFo7QURHUTtFQUNJLGlCQUFBO0FDRFo7QURJRztFQUNJLGFBQUE7QUNEUDtBREdPO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDRFI7QURHSTtFQUNJLGtCQUFBO0FDRFI7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0RSO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxnQkFBQTtBQ0RSO0FER0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDRFI7QURHSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FDRFI7QURJSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FESUk7RUFDSSxnQkFBQTtBQ0ZSO0FESUk7RUFDSSxzQkFBQTtBQ0ZSO0FESUk7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNIUjtBRE1RO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDSlo7QURNUTtFQUNJLFdBQUE7QUNKWjtBRE1RO0VBQ0ksV0FBQTtBQ0paO0FETVE7RUFDSSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNKWjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDUFI7QURTSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1BSO0FEU0k7RUFDSSxrQkFBQTtBQ1BSO0FEU0k7RUFDSSxtQkFBQTtBQ1BSO0FEU0k7RUFDSSxpQkFBQTtBQ1BSO0FEU0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BSO0FEU0k7RUFDSSxrQkFBQTtBQ1BSO0FEU1E7RUFDSSxrQkFBQTtBQ1BaO0FEU1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDUFo7QURTUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNQWjtBRFNRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDUFo7QURhQTtFQUNJLGFBQUE7QUNWSjtBRFlBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNUSjtBRFdJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDVFI7QURXUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1RaO0FEWVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZaO0FEY0k7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNaUjtBRGVJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNkUjtBRHVCUTtFQUNJLFVBQUE7QUNwQlo7QURzQlE7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDcEJaO0FEc0JRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDcEJaO0FEc0JRO0VBQ0ksdUJBQUE7QUNwQlo7QURzQlE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNwQlo7QURzQlE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDcEJaO0FEdUJZO0VBQ0ksYUFBQTtFQUNBLHNEQUFBO0VBQ0EsZUFBQTtBQ3JCaEI7QUR1Qlk7RUFDSSxrQkFBQTtBQ3JCaEI7QUR1Qlk7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDckJoQjtBRHdCWTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUN0QmhCO0FENkJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQzFCViIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFkZGx1Z2dhZ2UvZmxpZ2h0YWRkbHVnZ2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgIC5jb2wtaGVhZGVye1xuICAgICAgICAuZC1mbGV4e1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LWhlYWRlci10aXRsZXtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICB9XG4gICB9XG4gICAuY29udGVudC1mbGlnaHRhZGRsdWdnYWdle1xuICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAuYnRuLWNsb3Nle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OjBweDtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIHdpZHRoOiA0OHB4O1xuICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gICAgLnQtY2VudGVye1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LXRleHQtZW1wdHkge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAuZGl2LWVtcHR5e1xuICAgICAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICAgIH1cbiAgICAubS10b3AtMjR7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgfVxuICAgIC5kaXYtanVzdGlmeS1jZW50ZXJ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgIH1cbiAgICAuZGl2LWNlbnRlci12ZXJ0aWNhbHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIFxuICAgIH1cbiAgICAudGV4dC1sZWZ0LWx1Z3tcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTEwMHtcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmQtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2YyZjJmMjtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcblxuICAgICAgICBcbiAgICAgICAgLnRleHQtcHJpY2V7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIC5pYy1wbHVze1xuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmljLW1pbnVze1xuICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgIH1cbiAgICAgICAgLm51bWJlci1yb29te1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgICAgICBjb2xvcjogIzI2YmVkNjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICAudGV4dC1vdmVyc2l6ZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42NztcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAudGV4dC1yb29te1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG4gICAgLmNscy1oaWRkZW57XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLm5vLWJvcmRlci1ib3R0b217XG4gICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcbiAgICB9XG4gICAgLnAtdG9wLTIwe1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gICAgLnRleHQtY2hpbGQtYWdle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfVxuICAgIC5kaXYtYWdle1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgLnAtcmlnaHQtOHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICAgICAgfVxuICAgICAgICAuZGl2LXRleHQtYWdle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtY2hpbGR7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICAgIH1cbiAgICAgICAgLnNlbGVjdGVkLWFnZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgfVxuXG4uZC1mbGV4LWZvb3RlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNjBweDtcblxuICAgIC5kaXYtdG90YWx7XG4gICAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgLnRleHQtc3ViLXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ZXh0LXRvdGFse1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42OXB4O1xuICAgICAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmJ1dHRvblxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG4gICAgfSBcbn1cbiAgICBcbiAgICBcbiAgICAvLy9zdHlsZSBpb3NcbiAgICA6Om5nLWRlZXB7XG4gIFxuICAgICAgICAvL3N0eWxlIGNobyBpb3NcbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAubm8tYm9yZGVyLWJvdHRvbS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IG5vO1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2Uge1xuICAgICAgICAgICAgLnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItaW9ze1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzMycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAwcHgpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBpY2tlci1idXR0b24uaW9uLWFjdGl2YXRhYmxlLnBpY2tlci1oZWFkZXIuc2MtaW9uLXBpY2tlci1pb3N7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIyMjIyMjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b24tZG9uZXtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlYzk3MWY7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MiU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2V7XG4gICAgICAgIC5pbWctZmlsdGVye1xuICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDExcHg7XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgfSIsIi5jb2wtaGVhZGVyIC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG4uY29sLWhlYWRlciAuZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmJ0bi1jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA0cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnQtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LXRleHQtZW1wdHkge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWVtcHR5IHtcbiAgbWFyZ2luLXRvcDogNjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLm0tdG9wLTI0IHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1qdXN0aWZ5LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWNlbnRlci12ZXJ0aWNhbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1sZWZ0LWx1ZyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNmMmYyZjI7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC50ZXh0LXByaWNlIHtcbiAgd2lkdGg6IDE4MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC5pYy1wbHVzIHtcbiAgd2lkdGg6IDI2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLmljLW1pbnVzIHtcbiAgd2lkdGg6IDMycHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXggLm51bWJlci1yb29tIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LW92ZXJzaXplIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1yb29tIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5jbHMtaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAubm8tYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5wLXRvcC0yMCB7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1jaGlsZC1hZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAucC1yaWdodC04IHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAuZGl2LXRleHQtYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAudGV4dC1jaGlsZCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtYWdlIC5zZWxlY3RlZC1hZ2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmQtZmxleC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCB7XG4gIHdpZHRoOiAyMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXN1Yi10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG4uZGl2LWZvb3RlciAuZGl2LXRvdGFsIC50ZXh0LXRvdGFsIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uZGl2LWZvb3RlciAuZGl2LWJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cbi5kaXYtZm9vdGVyIC5idXR0b24ge1xuICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBmb250LXNpemU6IDIycHg7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1jb250YWluZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBwYWRkaW5nOiAwO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtdGl0bGUuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi1pbm5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAubm8tYm9yZGVyLWJvdHRvbS5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbm87XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAucGlja2VyLXdyYXBwZXIuc2MtaW9uLXBpY2tlci1pb3Mge1xuICBoZWlnaHQ6IDMzMnB4O1xuICBtYXJnaW4tYm90dG9tOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKSArIDBweCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5waWNrZXItdG9vbGJhci1idXR0b24uc2MtaW9uLXBpY2tlci1pb3Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAucGlja2VyLWJ1dHRvbi5pb24tYWN0aXZhdGFibGUucGlja2VyLWhlYWRlci5zYy1pb24tcGlja2VyLWlvcyB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYnV0dG9uLWRvbmUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDkyJTtcbiAgbWFyZ2luOiA4cHggMTZweDtcbn1cblxuLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuaW1nLWZpbHRlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1yaWdodDogMTFweDtcbn0iXX0= */"

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_8__);










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
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlFlight + "gate/apiv1/GetDetailTicketAirBus?airlineCode=" + item.airlineCode + "&ticketType=" + item.ticketType + "&airbusCode=" + item.aircraft + "&flightNumber=" + item.flightNumber + "&fromPlace=" + item.fromPlaceCode + "&toPlace=" + item.toPlaceCode + "&departDate=" + moment__WEBPACK_IMPORTED_MODULE_7__(item.departTime).format("MM-DD-YYYY") + "&bookingDate=" + moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format("MM-DD-YYYY"),
                timeout: 180000, maxAttempts: 5, retryDelay: 20000,
                headers: {
                    "Authorization": "Basic YXBwOmNTQmRuWlV6RFFiY1BySXNZdz09",
                    'Content-Type': 'application/json; charset=utf-8'
                }
            };
            requestretry__WEBPACK_IMPORTED_MODULE_8__(options, function (error, response, body) {
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