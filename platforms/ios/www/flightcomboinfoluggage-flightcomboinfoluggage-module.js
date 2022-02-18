(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcomboinfoluggage-flightcomboinfoluggage-module"],{

/***/ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/flightcomboinfoluggage/flightcomboinfoluggage.module.ts ***!
  \*************************************************************************/
/*! exports provided: FlightcomboinfoluggagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcomboinfoluggagePageModule", function() { return FlightcomboinfoluggagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcomboinfoluggage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcomboinfoluggage.page */ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.ts");







const routes = [
    {
        path: '',
        component: _flightcomboinfoluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightcomboinfoluggagePage"]
    }
];
let FlightcomboinfoluggagePageModule = class FlightcomboinfoluggagePageModule {
};
FlightcomboinfoluggagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcomboinfoluggage_page__WEBPACK_IMPORTED_MODULE_6__["FlightcomboinfoluggagePage"]]
    })
], FlightcomboinfoluggagePageModule);



/***/ }),

/***/ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightcomboinfoluggageheader\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"div-goback\" (click)=\"goback()\" >\n              <img class=\"img-goback\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"title-header\"><label class=\"text-title\">Thông tin hành lý</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div-desc\"\n    *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded ) || (returnConditionInfo && returnConditionInfo.baggageHanded )\">\n\n    <div class=\"div-sub-title m-bottom-6 div-width-50\">Xách tay</div>\n    <div\n      *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10) || (returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10)\"\n      class=\"d-flex\">\n\n      <div class=\"div-width-50\"\n        *ngIf=\"(departConditionInfo && departConditionInfo.baggageHanded && departConditionInfo.baggageHanded.length <10)\">\n        Chiều đi: <span class=\"text-bold\">{{ departConditionInfo.baggageHanded }}/1 khách</span></div>\n      <div class=\"div-width-50\" *ngIf=\"!(departConditionInfo && departConditionInfo.baggageHanded)\">\n        Chiều đi: <span class=\"text-bold\">Không có</span></div>\n      <div class=\"div-width-50\"\n        *ngIf=\"(returnConditionInfo && returnConditionInfo.baggageHanded && returnConditionInfo.baggageHanded.length <10)\">\n        <div class=\"text-desc\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.baggageHanded }}/1 khách</span>\n        </div>\n      </div>\n      <div class=\"div-width-50\" *ngIf=\"!(returnConditionInfo && returnConditionInfo.baggageHanded)\">\n        <div class=\"text-desc\">Chiều về: <span class=\"text-bold\">Không có</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"(departLuggage && departLuggage.length >0) || (returnLuggage && returnLuggage.length >0) \">\n    <div class=\"div-sub-title m-top-16 m-bottom-6 d-flex\">\n      <div class=\"div-width-100\">Ký gửi</div>\n    </div>\n\n    <div class=\"d-flex\">\n      <div class=\"d-flex div-width-100\">\n        <div\n          *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && !hasdepartluggage) else nodepartlugsign\"\n          class=\"div-width-50\">\n          <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span\n              class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n        </div>\n        <div\n          *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage\"\n          class=\"div-width-50\">\n          <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n        </div>\n\n        <div\n          [ngClass]=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) ?  'div-width-50 ' : 'div-width-50'\"\n          *ngIf=\" (departLuggage && departLuggage.length >0) && hasdepartluggage\">\n          <div class=\"text-desc m-bottom-6\">Chiều đi</div>\n          <div class=\"div-desc\"\n            *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 && hasdepartluggage)\">\n            <span class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n          <div *ngFor=\"let itemlug of departLuggage\">\n            <div *ngIf=\"itemlug.quantity >0\" class=\"div-des div-width-50\">\n              {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.Weight}} kg</span>\n            </div>\n          </div>\n        </div>\n\n        <div\n          *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4  && !hasreturnluggage) else noreturnlugsign\"\n          class=\"div-width-50\">\n          <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }}\n              kg</span>/1 khách.</div>\n        </div>\n        <div\n          *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage\"\n          class=\"div-width-50\">\n          <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n        </div>\n\n        <div\n          [ngClass]=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4)? 'div-width-50 ' : 'div-width-50'\"\n          *ngIf=\" (returnLuggage && returnLuggage.length >0) && hasreturnluggage \">\n          <div class=\"text-desc m-bottom-6\">Chiều về</div>\n          <div class=\"div-desc\"\n            *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 && hasreturnluggage)\">\n            <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n          <div *ngFor=\"let itemlug of returnLuggage\">\n            <div *ngIf=\"itemlug.quantity >0\" class=\"div-desc\">\n              {{ itemlug.quantity}} x <span class=\"text-bold\">{{itemlug.Weight}} kg</span>\n            </div>\n          </div>\n\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n  <div\n    *ngIf=\"((departConditionInfo &&departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4 ) || (returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) )&& !(departLuggage && departLuggage.length >0) && !(returnLuggage && returnLuggage.length >0)\">\n    <div class=\"div-sub-title m-top-16 m-bottom-6\">\n      <div class=\"div-width-100\">Ký gửi</div>\n    </div>\n    <div class=\"d-flex m-top-6 div-width-100\">\n      <div class=\"div-width-50\"\n        *ngIf=\"(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) else nodepartlugsign\">\n        <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span\n            class=\"text-bold\">{{ departConditionInfo.luggageSigned }} kg</span>/1 khách.</div>\n      </div>\n      <div class=\"div-width-50\"\n        *ngIf=\"!(departConditionInfo && departConditionInfo.luggageSigned && departConditionInfo.luggageSigned.length <=4) && !hasdepartluggage\">\n        <div class=\"text-desc m-bottom-6 p-right-4\">Chiều đi: <span class=\"text-bold\">Không có.</span></div>\n      </div>\n\n      <div class=\"div-width-50\"\n        *ngIf=\"(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4 ) else noreturnlugsign\">\n        <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">{{ returnConditionInfo.luggageSigned }}\n            kg</span>/1 khách.</div>\n      </div>\n      <div class=\"div-width-50\"\n        *ngIf=\"!(returnConditionInfo && returnConditionInfo.luggageSigned && returnConditionInfo.luggageSigned.length <=4) && !hasreturnluggage \">\n        <div class=\"text-desc m-bottom-6\">Chiều về: <span class=\"text-bold\">Không có.</span></div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"ischeckinfant\" class=\"m-top-16\">\n    <label class=\"text-note\">*Vui lòng không chọn mua thêm hành lý ký gửi cho trẻ em dưới 2 tuổi</label>\n  </div>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Mua thêm hành lý<span><img class=\"img\"\n          src=\"./assets/imgs/ic_next.svg\"></span></button>\n  </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flightcomboinfoluggageheader .text-center {\n  text-align: center;\n}\n.flightcomboinfoluggageheader .align-self-center {\n  align-self: center;\n}\n.flightcomboinfoluggageheader .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.flightcomboinfoluggageheader .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.flightcomboinfoluggageheader .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n}\n.img {\n  width: 8px;\n  margin-left: 10px;\n}\n.div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.p-right-4 {\n  padding-right: 4px;\n}\n.m-bottom-6 {\n  margin-bottom: 6px;\n}\n.margin-left-25 {\n  margin-left: 25px;\n}\n.text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n.text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n.d-flex {\n  display: flex;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-width-50 {\n  width: 50%;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtBQ0FSO0FERUk7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNHcEQ7QUREUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0daO0FEQUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQ0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0NKO0FEQ0E7RUFFSSxVQUFBO0VBQ0EsaUJBQUE7QUNDSjtBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRUo7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDR0o7QUREQTtFQUNJLGtCQUFBO0FDSUo7QURGQTtFQUNJLGtCQUFBO0FDS0o7QURIQTtFQUNJLGlCQUFBO0FDTUo7QURKQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ09KO0FETEE7RUFDSSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7QUNRSjtBRE5BO0VBQ0ksYUFBQTtBQ1NKO0FEUEE7RUFDSSxXQUFBO0FDVUo7QURSQTtFQUNJLFVBQUE7QUNXSjtBRFRBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib2luZm9sdWdnYWdlL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXJ7XG4gICAgLnRleHQtY2VudGVye1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hbGlnbi1zZWxmLWNlbnRlcntcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIH1cbiAgICAuZGl2LWdvYmFja3tcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcblxuICAgICAgICAuaW1nLWdvYmFja3tcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcbiAgICAgICAgfVxuICAgIH1cbiAgICAudGl0bGUtaGVhZGVye1xuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbn1cbi5idXR0b24yXG57XG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG59XG4uaW1nXG57XG4gICAgd2lkdGg6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5kaXYtZGVzY3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLmRpdi1zdWItdGl0bGV7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbi5wLXJpZ2h0LTR7XG4gICAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLm0tYm90dG9tLTZ7XG4gICAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuLm1hcmdpbi1sZWZ0LTI1e1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuLnRleHQtZGVzY3tcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLnRleHQtYm9sZHtcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHggIWltcG9ydGFudDtcbn1cbi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmRpdi13aWR0aC01MHtcbiAgICB3aWR0aDogNTAlO1xufVxuLnRleHQtbm90ZXtcbiAgICBmb250LXNpemU6MTJweDtcbiAgICBjb2xvcjojODI4MjgyO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgfVxuIiwiLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXIgLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogMHB4O1xufVxuLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmZsaWdodGNvbWJvaW5mb2x1Z2dhZ2VoZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5kaXYtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNTFweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wLXJpZ2h0LTQge1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5tLWJvdHRvbS02IHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubWFyZ2luLWxlZnQtMjUge1xuICBtYXJnaW4tbGVmdDogMjVweDtcbn1cblxuLnRleHQtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xufVxuXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi13aWR0aC01MCB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.ts ***!
  \***********************************************************************/
/*! exports provided: FlightcomboinfoluggagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcomboinfoluggagePage", function() { return FlightcomboinfoluggagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





let FlightcomboinfoluggagePage = class FlightcomboinfoluggagePage {
    constructor(navCtrl, bookCombo, gf, zone) {
        this.navCtrl = navCtrl;
        this.bookCombo = bookCombo;
        this.gf = gf;
        this.zone = zone;
        this.departLuggage = [];
        this.returnLuggage = [];
        this.hasdepartluggage = false;
        this.hasreturnluggage = false;
        this.ischeckinfant = false;
        this.objectFlight = this.gf.getParams('flightcombo');
        this.ischeckinfant = this.objectFlight.HotelBooking.Child ? true : false;
        this.departConditionInfo = this.bookCombo.departConditionInfo;
        this.returnConditionInfo = this.bookCombo.returnConditionInfo;
        this.checkLuggageZero();
    }
    checkLuggageZero() {
        if (this.objectFlight.airLineLuggageDepart && this.objectFlight.airLineLuggageDepart.length > 0) {
            this.departLuggage = this.objectFlight.airLineLuggageDepart;
            let chocieDepartLuggage = this.departLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieDepartLuggage && chocieDepartLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasdepartluggage = true;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasdepartluggage = false;
                });
            }
        }
        if (this.objectFlight.airLineLuggageReturn && this.objectFlight.airLineLuggageReturn.length > 0) {
            this.returnLuggage = this.objectFlight.airLineLuggageReturn;
            let chocieReturnLuggage = this.returnLuggage.filter(element => {
                return element.quantity;
            });
            if (chocieReturnLuggage && chocieReturnLuggage.length > 0) {
                this.zone.run(() => {
                    this.hasreturnluggage = true;
                });
            }
            else {
                this.zone.run(() => {
                    this.hasreturnluggage = false;
                });
            }
        }
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    next() {
        var objectFlight = this.gf.getParams('flightcombo');
        if (objectFlight.airLineLuggageDepart.length <= 0 && objectFlight.airLineLuggageReturn.length <= 0) {
            alert("Không có hành lý để mua thêm");
        }
        else {
            this.navCtrl.navigateForward('/flightcomboaddluggage');
        }
    }
};
FlightcomboinfoluggagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-flightcomboinfoluggage',
        template: __webpack_require__(/*! ./flightcomboinfoluggage.page.html */ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.html"),
        styles: [__webpack_require__(/*! ./flightcomboinfoluggage.page.scss */ "./src/app/flightcomboinfoluggage/flightcomboinfoluggage.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]])
], FlightcomboinfoluggagePage);



/***/ })

}]);
//# sourceMappingURL=flightcomboinfoluggage-flightcomboinfoluggage-module.js.map