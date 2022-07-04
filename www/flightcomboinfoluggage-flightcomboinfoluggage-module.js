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

module.exports = ".flightcomboinfoluggageheader .text-center {\n  text-align: center;\n}\n.flightcomboinfoluggageheader .align-self-center {\n  align-self: center;\n}\n.flightcomboinfoluggageheader .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.flightcomboinfoluggageheader .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.flightcomboinfoluggageheader .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n}\n.img {\n  width: 8px;\n  margin-left: 10px;\n}\n.div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.p-right-4 {\n  padding-right: 4px;\n}\n.m-bottom-6 {\n  margin-bottom: 6px;\n}\n.margin-left-25 {\n  margin-left: 25px;\n}\n.text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n.text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n.d-flex {\n  display: flex;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-width-50 {\n  width: 50%;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS9mbGlnaHRjb21ib2luZm9sdWdnYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS9mbGlnaHRjb21ib2luZm9sdWdnYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQW1CLFlBQUE7RUFBYSxXQUFBO0VBQVksUUFBQTtBQ0dwRDtBRERRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR1o7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRVI7QURDQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDQ0o7QURDQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNFSjtBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNHSjtBRERBO0VBQ0ksa0JBQUE7QUNJSjtBREZBO0VBQ0ksa0JBQUE7QUNLSjtBREhBO0VBQ0ksaUJBQUE7QUNNSjtBREpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDT0o7QURMQTtFQUNJLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtBQ1FKO0FETkE7RUFDSSxhQUFBO0FDU0o7QURQQTtFQUNJLFdBQUE7QUNVSjtBRFJBO0VBQ0ksVUFBQTtBQ1dKO0FEVEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlcntcbiAgICAudGV4dC1jZW50ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIC5kaXYtZ29iYWNre1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O3RvcDogMHB4O1xuXG4gICAgICAgIC5pbWctZ29iYWNre1xuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxuICAgICAgICB9XG4gICAgfVxuICAgIC50aXRsZS1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxufVxuLmJ1dHRvbjJcbntcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbn1cbi5pbWdcbntcbiAgICB3aWR0aDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmRpdi1kZXNje1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4uZGl2LXN1Yi10aXRsZXtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufVxuLnAtcmlnaHQtNHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG4ubS1ib3R0b20tNntcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG4ubWFyZ2luLWxlZnQtMjV7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG4udGV4dC1kZXNje1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4udGV4dC1ib2xke1xuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xufVxuLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LXdpZHRoLTUwe1xuICAgIHdpZHRoOiA1MCU7XG59XG4udGV4dC1ub3Rle1xuICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgIGNvbG9yOiM4MjgyODI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICB9XG4iLCIuZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG59XG5cbi5pbWcge1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmRpdi1kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC41MXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnAtcmlnaHQtNCB7XG4gIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cblxuLm0tYm90dG9tLTYge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5tYXJnaW4tbGVmdC0yNSB7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4udGV4dC1kZXNjIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXdpZHRoLTUwIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG59Il19 */"

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