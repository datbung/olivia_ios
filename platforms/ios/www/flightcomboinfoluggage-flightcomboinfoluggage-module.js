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

module.exports = ".flightcomboinfoluggageheader .text-center {\n  text-align: center;\n}\n.flightcomboinfoluggageheader .align-self-center {\n  align-self: center;\n}\n.flightcomboinfoluggageheader .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.flightcomboinfoluggageheader .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.flightcomboinfoluggageheader .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n}\n.img {\n  width: 8px;\n  margin-left: 10px;\n}\n.div-desc {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n.div-sub-title {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.51px;\n  color: #000000;\n}\n.p-right-4 {\n  padding-right: 4px;\n}\n.m-bottom-6 {\n  margin-bottom: 6px;\n}\n.margin-left-25 {\n  margin-left: 25px;\n}\n.text-desc {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.4;\n  color: #000000;\n}\n.text-bold {\n  font-size: 14px !important;\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n.d-flex {\n  display: flex;\n}\n.div-width-100 {\n  width: 100%;\n}\n.div-width-50 {\n  width: 50%;\n}\n.text-note {\n  font-size: 12px;\n  color: #828282;\n  font-style: italic;\n  letter-spacing: -0.34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRjb21ib2luZm9sdWdnYWdlL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2luZm9sdWdnYWdlL2ZsaWdodGNvbWJvaW5mb2x1Z2dhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDR3BEO0FERFE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHWjtBREFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNFUjtBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNDSjtBRENBO0VBRUksVUFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEREE7RUFDSSxrQkFBQTtBQ0lKO0FERkE7RUFDSSxrQkFBQTtBQ0tKO0FESEE7RUFDSSxpQkFBQTtBQ01KO0FESkE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNPSjtBRExBO0VBQ0ksMEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0FDUUo7QUROQTtFQUNJLGFBQUE7QUNTSjtBRFBBO0VBQ0ksV0FBQTtBQ1VKO0FEUkE7RUFDSSxVQUFBO0FDV0o7QURUQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQ1lKIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9pbmZvbHVnZ2FnZS9mbGlnaHRjb21ib2luZm9sdWdnYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVye1xuICAgIC50ZXh0LWNlbnRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgLmRpdi1nb2JhY2t7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XG5cbiAgICAgICAgLmltZy1nb2JhY2t7XG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlLWhlYWRlcntcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG59XG4uYnV0dG9uMlxue1xuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xufVxuLmltZ1xue1xuICAgIHdpZHRoOiA4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uZGl2LWRlc2N7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbi5kaXYtc3ViLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG4ucC1yaWdodC00e1xuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcbn1cbi5tLWJvdHRvbS02e1xuICAgIG1hcmdpbi1ib3R0b206IDZweDtcbn1cbi5tYXJnaW4tbGVmdC0yNXtcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcbn1cbi50ZXh0LWRlc2N7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cbi50ZXh0LWJvbGR7XG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG59XG4uZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtd2lkdGgtNTB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi50ZXh0LW5vdGV7XG4gICAgZm9udC1zaXplOjEycHg7XG4gICAgY29sb3I6IzgyODI4MjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIH1cbiIsIi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5mbGlnaHRjb21ib2luZm9sdWdnYWdlaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2LWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LXN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjUxcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ucC1yaWdodC00IHtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuXG4ubS1ib3R0b20tNiB7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLm1hcmdpbi1sZWZ0LTI1IHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG59XG5cbi50ZXh0LWRlc2Mge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHggIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtd2lkdGgtNTAge1xuICB3aWR0aDogNTAlO1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbn0iXX0= */"

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