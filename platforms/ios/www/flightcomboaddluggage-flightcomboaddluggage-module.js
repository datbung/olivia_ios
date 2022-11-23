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

module.exports = ".col-header .d-flex {\n  display: flex;\n  border-bottom: none !important;\n}\n.col-header .div-header-title {\n  padding-top: 11px;\n}\n.content-flightaddluggage {\n  padding: 16px;\n}\n.content-flightaddluggage .btn-close {\n  position: absolute;\n  right: 0px;\n  top: 4px;\n  width: 48px;\n  height: 48px;\n  background-color: #fff;\n  font-size: 2em;\n  color: #828282;\n}\n.content-flightaddluggage .t-center {\n  align-self: center;\n}\n.content-flightaddluggage .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  text-align: left;\n}\n.content-flightaddluggage .text-center {\n  text-align: center;\n}\n.content-flightaddluggage .div-text-empty {\n  font-size: 14px;\n  font-weight: 100;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #828282;\n}\n.content-flightaddluggage .div-empty {\n  margin-top: 64px;\n}\n.content-flightaddluggage .m-top-24 {\n  margin-top: 24px;\n}\n.content-flightaddluggage .div-justify-center {\n  display: flex;\n  justify-content: space-between;\n  width: 104px;\n}\n.content-flightaddluggage .div-center-vertical {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.content-flightaddluggage .text-left-lug {\n  width: 100px;\n  text-align: left;\n}\n.content-flightaddluggage .text-bold {\n  font-weight: 600;\n}\n.content-flightaddluggage .div-width-100 {\n  width: 100% !important;\n}\n.content-flightaddluggage .d-flex {\n  display: flex;\n  border-bottom: solid 0.5px #f2f2f2;\n  height: 48px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .d-flex .text-price {\n  width: 180px;\n  text-align: left;\n}\n.content-flightaddluggage .d-flex .ic-plus {\n  width: 26px;\n}\n.content-flightaddluggage .d-flex .ic-minus {\n  width: 32px;\n}\n.content-flightaddluggage .d-flex .number-room {\n  font-size: 24px;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  font-weight: 600;\n}\n.content-flightaddluggage .text-oversize {\n  font-size: 12px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n.content-flightaddluggage .text-room {\n  font-size: 14px;\n  letter-spacing: -0.69px;\n  color: #222222;\n  font-weight: 100;\n}\n.content-flightaddluggage .cls-hidden {\n  visibility: hidden;\n}\n.content-flightaddluggage .no-border-bottom {\n  border-bottom: none;\n}\n.content-flightaddluggage .p-top-20 {\n  padding-top: 20px;\n}\n.content-flightaddluggage .text-child-age {\n  font-size: 14px;\n  font-weight: 600;\n  letter-spacing: -0.4px;\n}\n.content-flightaddluggage .div-age {\n  position: relative;\n}\n.content-flightaddluggage .div-age .p-right-8 {\n  padding-right: 8px;\n}\n.content-flightaddluggage .div-age .div-text-age {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n}\n.content-flightaddluggage .div-age .text-child {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n.content-flightaddluggage .div-age .selected-age {\n  font-size: 18px;\n  color: #26bed6;\n  letter-spacing: -0.51px;\n  font-weight: 600;\n}\n.d-flex-footer {\n  display: flex;\n}\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  height: 60px;\n}\n.div-footer .div-total {\n  width: 210px;\n  margin-left: 16px;\n}\n.div-footer .div-total .text-sub-total {\n  font-size: 12px;\n  font-weight: 300;\n  margin-top: 8px;\n  margin-bottom: 4px;\n}\n.div-footer .div-total .text-total {\n  font-size: 24px;\n  font-weight: 600;\n  letter-spacing: -0.69px;\n  color: #26bed6;\n  text-align: left;\n}\n.div-footer .div-button {\n  width: 50%;\n  margin-right: 16px;\n}\n.div-footer .button {\n  background: #F79221;\n  color: #ffffff;\n  border-color: #F79221;\n  font-size: 22px;\n  height: 40px !important;\n  margin: 10px 0;\n  font-size: 17px !important;\n  width: 100%;\n  border-radius: 4px !important;\n}\n::ng-deep .action-sheets-select-age .action-sheet-container.sc-ion-action-sheet-ios {\n  padding: 0;\n}\n::ng-deep .action-sheets-select-age .action-sheet-group.sc-ion-action-sheet-ios:last-child {\n  margin: 0;\n  border-radius: 0;\n  overflow: auto;\n}\n::ng-deep .action-sheets-select-age .action-sheet-title.sc-ion-action-sheet-ios {\n  font-size: 14px;\n  font-weight: 300;\n  text-align: center;\n  color: #222222;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button-inner.sc-ion-action-sheet-ios {\n  justify-content: center;\n}\n::ng-deep .action-sheets-select-age .action-sheet-button.sc-ion-action-sheet-ios {\n  font-size: 17px;\n  color: #bdbdbd;\n  height: 48px;\n}\n::ng-deep .action-sheets-select-age .no-border-bottom.action-sheet-button.sc-ion-action-sheet-ios {\n  border-bottom: none;\n  background-position: no;\n}\n::ng-deep .action-sheets-select-age .picker-wrapper.sc-ion-picker-ios {\n  height: 332px;\n  margin-bottom: calc(env(safe-area-inset-bottom) + 0px);\n  position: fixed;\n}\n::ng-deep .action-sheets-select-age .picker-toolbar-button.sc-ion-picker-ios {\n  text-align: center;\n}\n::ng-deep .action-sheets-select-age .picker-button.ion-activatable.picker-header.sc-ion-picker-ios {\n  font-weight: 300;\n  color: #222222;\n  font-size: 14px;\n}\n::ng-deep .action-sheets-select-age .button-done {\n  color: #ffffff !important;\n  font-size: 17px !important;\n  background: #ec971f;\n  border-radius: 4px;\n  height: 48px !important;\n  width: 92%;\n  margin: 8px 16px;\n}\n.action-sheets-select-age .img-filter {\n  width: 30px;\n  height: 30px;\n  margin-right: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlL2ZsaWdodGNvbWJvYWRkbHVnZ2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUNEUjtBREdJO0VBQ0ksaUJBQUE7QUNEUjtBRElBO0VBQ0csYUFBQTtBQ0RIO0FER0c7RUFDQyxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDREo7QURHQTtFQUNJLGtCQUFBO0FDREo7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdBO0VBQ0ksa0JBQUE7QUNESjtBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDREo7QURHQTtFQUNJLGdCQUFBO0FDREo7QURHQTtFQUNJLGdCQUFBO0FDREo7QURHQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNESjtBREdBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRko7QURJQTtFQUNJLGdCQUFBO0FDRko7QURJQTtFQUNJLHNCQUFBO0FDRko7QURJQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0hKO0FETUk7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE1JO0VBQ0ksV0FBQTtBQ0pSO0FETUk7RUFDSSxXQUFBO0FDSlI7QURNSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0pSO0FEU0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNQSjtBRFNBO0VBQ0ksZUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDUEo7QURTQTtFQUNJLGtCQUFBO0FDUEo7QURTQTtFQUNJLG1CQUFBO0FDUEo7QURTQTtFQUNJLGlCQUFBO0FDUEo7QURTQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDUEo7QURTQTtFQUNJLGtCQUFBO0FDUEo7QURTSTtFQUNJLGtCQUFBO0FDUFI7QURTSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNQUjtBRFNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ1BSO0FEU0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNQUjtBRGFBO0VBQ0EsYUFBQTtBQ1ZBO0FEWUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ1RBO0FEV0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNUSjtBRFdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDVFI7QURZSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDVlI7QURjQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQ1pKO0FEZUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ2RKO0FEa0NJO0VBQ0ksVUFBQTtBQy9CUjtBRGlDSTtFQUNJLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUMvQlI7QURpQ0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUMvQlI7QURpQ0k7RUFDSSx1QkFBQTtBQy9CUjtBRGlDSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQy9CUjtBRGlDSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUMvQlI7QURrQ1E7RUFDSSxhQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0FDaENaO0FEa0NRO0VBQ0ksa0JBQUE7QUNoQ1o7QURrQ1E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDaENaO0FEbUNRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2pDWjtBRHdDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNyQ04iLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib2FkZGx1Z2dhZ2UvZmxpZ2h0Y29tYm9hZGRsdWdnYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgLmNvbC1oZWFkZXJ7XG4gICAgLmQtZmxleHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWhlYWRlci10aXRsZXtcbiAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgfVxufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZXtcbiAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgIC5idG4tY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OjBweDtcbiAgICB0b3A6IDRweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi50LWNlbnRlcntcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4udGV4dC10aXRsZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi10ZXh0LWVtcHR5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1lbXB0eXtcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xufVxuLm0tdG9wLTI0e1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uZGl2LWp1c3RpZnktY2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiAxMDRweDtcbn1cbi5kaXYtY2VudGVyLXZlcnRpY2Fse1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cbi50ZXh0LWxlZnQtbHVne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnRleHQtYm9sZHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZjJmMmYyO1xuICAgIGhlaWdodDogNDhweDtcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG5cbiAgICBcbiAgICAudGV4dC1wcmljZXtcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbiAgICAuaWMtcGx1c3tcbiAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgfVxuICAgIC5pYy1taW51c3tcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgfVxuICAgIC5udW1iZXItcm9vbXtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNjlweDtcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIFxuICAgIFxufVxuLnRleHQtb3ZlcnNpemV7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICAgIGNvbG9yOiAjODI4MjgyO1xufVxuLnRleHQtcm9vbXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgY29sb3I6ICMyMjIyMjI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5jbHMtaGlkZGVue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5uby1ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206bm9uZTtcbn1cbi5wLXRvcC0yMHtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi50ZXh0LWNoaWxkLWFnZXtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmRpdi1hZ2V7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLnAtcmlnaHQtOHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIH1cbiAgICAuZGl2LXRleHQtYWdle1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuICAgIC50ZXh0LWNoaWxke1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAuc2VsZWN0ZWQtYWdle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG59XG5cbn1cblxuLmQtZmxleC1mb290ZXJ7XG5kaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1mb290ZXJ7XG5iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbnRleHQtYWxpZ246IGNlbnRlcjtcbmhlaWdodDogNjBweDtcblxuLmRpdi10b3RhbHtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAudGV4dC1zdWItdG90YWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgLnRleHQtdG90YWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIH1cbn1cblxuLmRpdi1idXR0b257XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5idXR0b25cbntcbiAgICBiYWNrZ3JvdW5kOiAjRjc5MjIxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59IFxufVxuXG5cbi8vL3N0eWxlIGlvc1xuOjpuZy1kZWVwe1xuICAgIC8vIEBtZWRpYSAobWluLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtd2lkdGg6IDM4NHB4KSB7XG4gICAgLy8gICAgIC50ZXh0LWxlZnR7XG4gICAgLy8gICAgICAgICBtaW4td2lkdGg6IDczJTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICB9XG4gICAgLy8gICBAbWVkaWEgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgIC8vICAgICAudGV4dC1sZWZ0e1xuICAgIC8vICAgICAgICAgbWluLXdpZHRoOiA3NS44JTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICB9XG4gICAgLy9zdHlsZSBjaG8gaW9zXG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWNvbnRhaW5lci5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zOmxhc3QtY2hpbGR7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC10aXRsZS5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLWlubmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9ze1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc3tcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5uby1ib3JkZXItYm90dG9tLmFjdGlvbi1zaGVldC1idXR0b24uc2MtaW9uLWFjdGlvbi1zaGVldC1pb3N7XG4gICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IG5vO1xuICAgIH1cbiAgICAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIHtcbiAgICAgICAgLnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItaW9ze1xuICAgICAgICAgICAgaGVpZ2h0OiAzMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pICsgMHB4KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgfVxuICAgICAgICAucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9ze1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5waWNrZXItYnV0dG9uLmlvbi1hY3RpdmF0YWJsZS5waWNrZXItaGVhZGVyLnNjLWlvbi1waWNrZXItaW9ze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi1kb25le1xuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjOTcxZjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDkyJTtcbiAgICAgICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICBcbn1cblxuLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZXtcbiAgICAuaW1nLWZpbHRlcntcbiAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICAgIH1cbiAgICAgXG4gIH0iLCIuY29sLWhlYWRlciAuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuLmNvbC1oZWFkZXIgLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5idG4tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogNHB4O1xuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50LWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi10ZXh0LWVtcHR5IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1lbXB0eSB7XG4gIG1hcmdpbi10b3A6IDY0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5tLXRvcC0yNCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kaXYtanVzdGlmeS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1jZW50ZXItdmVydGljYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtbGVmdC1sdWcge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRsdWdnYWdlIC5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZjJmMmYyO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAudGV4dC1wcmljZSB7XG4gIHdpZHRoOiAxODBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmQtZmxleCAuaWMtcGx1cyB7XG4gIHdpZHRoOiAyNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC5pYy1taW51cyB7XG4gIHdpZHRoOiAzMnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZC1mbGV4IC5udW1iZXItcm9vbSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAudGV4dC1vdmVyc2l6ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtcm9vbSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjIyMjIyO1xuICBmb250LXdlaWdodDogMTAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuY2xzLWhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLm5vLWJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAucC10b3AtMjAge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLnRleHQtY2hpbGQtYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2UgLnAtcmlnaHQtOCB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2UgLmRpdi10ZXh0LWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZGx1Z2dhZ2UgLmRpdi1hZ2UgLnRleHQtY2hpbGQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbHVnZ2FnZSAuZGl2LWFnZSAuc2VsZWN0ZWQtYWdlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5kLWZsZXgtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNjBweDtcbn1cbi5kaXYtZm9vdGVyIC5kaXYtdG90YWwge1xuICB3aWR0aDogMjEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC1zdWItdG90YWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuLmRpdi1mb290ZXIgLmRpdi10b3RhbCAudGV4dC10b3RhbCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjY5cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmRpdi1mb290ZXIgLmRpdi1idXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG4uZGl2LWZvb3RlciAuYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogI0Y3OTIyMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtY29udGFpbmVyLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgcGFkZGluZzogMDtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3M6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAuYWN0aW9uLXNoZWV0LXRpdGxlLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmFjdGlvbi1zaGVldC1idXR0b24taW5uZXIuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjo6bmctZGVlcCAuYWN0aW9uLXNoZWV0cy1zZWxlY3QtYWdlIC5hY3Rpb24tc2hlZXQtYnV0dG9uLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLm5vLWJvcmRlci1ib3R0b20uYWN0aW9uLXNoZWV0LWJ1dHRvbi5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IG5vO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLnBpY2tlci13cmFwcGVyLnNjLWlvbi1waWNrZXItaW9zIHtcbiAgaGVpZ2h0OiAzMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSkgKyAwcHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG59XG46Om5nLWRlZXAgLmFjdGlvbi1zaGVldHMtc2VsZWN0LWFnZSAucGlja2VyLXRvb2xiYXItYnV0dG9uLnNjLWlvbi1waWNrZXItaW9zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLnBpY2tlci1idXR0b24uaW9uLWFjdGl2YXRhYmxlLnBpY2tlci1oZWFkZXIuc2MtaW9uLXBpY2tlci1pb3Mge1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmJ1dHRvbi1kb25lIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlYzk3MWY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MiU7XG4gIG1hcmdpbjogOHB4IDE2cHg7XG59XG5cbi5hY3Rpb24tc2hlZXRzLXNlbGVjdC1hZ2UgLmltZy1maWx0ZXIge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59Il19 */"

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