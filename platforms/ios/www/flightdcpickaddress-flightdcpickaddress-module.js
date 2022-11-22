(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightdcpickaddress-flightdcpickaddress-module"],{

/***/ "./src/app/flightdcpickaddress/flightdcpickaddress.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/flightdcpickaddress/flightdcpickaddress.module.ts ***!
  \*******************************************************************/
/*! exports provided: FlightdcpickaddressPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightdcpickaddressPageModule", function() { return FlightdcpickaddressPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightdcpickaddress_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightdcpickaddress.page */ "./src/app/flightdcpickaddress/flightdcpickaddress.page.ts");







const routes = [
    {
        path: '',
        component: _flightdcpickaddress_page__WEBPACK_IMPORTED_MODULE_6__["FlightdcpickaddressPage"]
    }
];
let FlightdcpickaddressPageModule = class FlightdcpickaddressPageModule {
};
FlightdcpickaddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightdcpickaddress_page__WEBPACK_IMPORTED_MODULE_6__["FlightdcpickaddressPage"]]
    })
], FlightdcpickaddressPageModule);



/***/ }),

/***/ "./src/app/flightdcpickaddress/flightdcpickaddress.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/flightdcpickaddress/flightdcpickaddress.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thêm đưa đón</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"_flightService.itemFlightCache.isAirportFirst\">\n    <div class=\"div-title div-flex margin-top-10\">\n      <div class=\"text-title div-width-80\">\n        Đón tiễn tại {{_flightService.itemFlightCache.departCity}}\n      </div>\n      <div class=\"div-width-20 text-right\">\n        <ion-toggle mode=\"ios\"  [(ngModel)]=\"isblocktextDepart\" (ionChange)=\"toggleChangeDepart($event)\" name=\"kiwi\" color=\"success\"></ion-toggle>\n      </div>\n      \n    </div>\n    <ion-row  class=\"row-search\">\n      <ion-col (click)=\"searchDepart()\" size=\"1\" class=\"align-self\">\n        <div>\n          <img *ngIf=\"isblocktextDepart\" src=\"./assets/ic_flight/icfilght_location.svg\">\n          <img *ngIf=\"!isblocktextDepart\" src=\"./assets/ic_flight/location_block.svg\">\n        </div>\n      </ion-col>\n      <ion-col  (click)=\"searchDepart()\" size=\"11\" class=\"align-self\">\n        <div class=\"div-title-place\">\n          <label class=\"text-place\" [ngClass]=\"!isblocktextDepart?'text-block':''\">\n            {{inputFrom}} \n           </label>\n        </div>\n       \n      </ion-col>\n    </ion-row>\n  </div>\n  \n  <!-- return -->\n  <div *ngIf=\"_flightService.itemFlightCache.isAirportSecond\">\n    <div class=\"div-title div-flex margin-top-26\">\n      <div class=\"text-title div-width-80\">\n        Đón tiễn tại {{_flightService.itemFlightCache.returnCity}}\n      </div>\n      <div class=\"div-width-20 text-right\">\n        <ion-toggle mode=\"ios\"  [(ngModel)]=\"isblocktextReturn\" (ionChange)=\"toggleChangeReturn($event)\" name=\"kiwi\" color=\"success\"></ion-toggle>\n      </div>\n    </div>\n    \n    <!-- <ion-item class=\"ion-item margin-top-26\">\n      <label slot=\"start\" class=\"text-title\">Đón tiễn tại {{_flightService.itemFlightCache.returnCity}}</label>\n      <ion-toggle mode=\"ios\" slot=\"end\" [(ngModel)]=\"isblocktextReturn\" (ionChange)=\"toggleChangeReturn($event)\" name=\"kiwi\" color=\"success\"></ion-toggle>\n    </ion-item> -->\n    <ion-row  class=\"row-search\">\n      <ion-col (click)=\"searchReturn()\" size=\"1\" class=\"align-self\">\n        <div>\n          <img *ngIf=\"isblocktextReturn\" src=\"./assets/ic_flight/icfilght_location.svg\">\n          <img *ngIf=\"!isblocktextReturn\"  src=\"./assets/ic_flight/location_block.svg\">\n        </div>\n      </ion-col>\n      <ion-col (click)=\"searchReturn()\" size=\"11\" class=\"align-self\">\n        <div class=\"div-title-place\">\n          <label class=\"text-place\" [ngClass]=\"!isblocktextReturn?'text-block':''\">\n            {{inputTo}} \n          </label>\n          </div>\n       \n      </ion-col>\n    </ion-row>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\"  ion-button round outline class=\"button button2\">Tìm đưa đón</button>\n  </div>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/flightdcpickaddress/flightdcpickaddress.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/flightdcpickaddress/flightdcpickaddress.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-title {\n  font-size: 18px;\n  line-height: 1.4;\n  color: #333333;\n  font-weight: 300;\n}\n\n.ion-item {\n  --inner-border-width: 0 0 0px 0;\n}\n\n.row-search {\n  border-radius: 2px;\n  border: solid 0.5px #bdbdbd;\n  background-color: #ffffff;\n  margin: 0px 16px;\n  height: 50px;\n}\n\n.text-place {\n  font-size: 13px;\n  line-height: 1.4;\n  color: #828282;\n}\n\n.align-self {\n  align-self: center;\n}\n\n.margin-top-26 {\n  margin-top: 26px;\n}\n\n.text-block {\n  color: #bdbdbd;\n}\n\n.div-title-place {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.div-flex {\n  display: flex;\n}\n\n.div-width-80 {\n  width: 80%;\n  align-self: center;\n}\n\n.div-width-20 {\n  width: 20%;\n}\n\n.div-title {\n  margin-left: 16px;\n  margin-right: 16px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.margin-top-10 {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRkY3BpY2thZGRyZXNzL2ZsaWdodGRjcGlja2FkZHJlc3MucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRkY3BpY2thZGRyZXNzL2ZsaWdodGRjcGlja2FkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBRERBO0VBQ0ksZ0JBQUE7QUNJSjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtBQ09KOztBRExBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDUUo7O0FETkE7RUFDSSxVQUFBO0FDU0o7O0FEUEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDVUo7O0FEUkE7RUFDSSxpQkFBQTtBQ1dKOztBRFRBO0VBQ0ksZ0JBQUE7QUNZSiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGRjcGlja2FkZHJlc3MvZmxpZ2h0ZGNwaWNrYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uMlxue1xuICAgIGJvcmRlci1jb2xvcjogI0Y3OTIyMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA0OHB4O1xuXG59XG4udGV4dC10aXRsZXtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuLmlvbi1pdGVte1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG4ucm93LXNlYXJjaHtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYm9yZGVyOiBzb2xpZCAwLjVweCAjYmRiZGJkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgbWFyZ2luOiAwcHggMTZweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG4udGV4dC1wbGFjZXtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICBjb2xvcjogIzgyODI4Mjtcbn1cbi5hbGlnbi1zZWxme1xuICAgIGFsaWduLXNlbGY6IGNlbnRlclxufVxuXG4ubWFyZ2luLXRvcC0yNntcbiAgICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuLnRleHQtYmxvY2t7XG4gICAgY29sb3I6ICNiZGJkYmQ7XG59XG4uZGl2LXRpdGxlLXBsYWNle1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kaXYtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi13aWR0aC04MHtcbiAgICB3aWR0aDogODAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5kaXYtd2lkdGgtMjB7XG4gICAgd2lkdGg6IDIwJTtcbn1cbi5kaXYtdGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuLnRleHQtcmlnaHR7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ubWFyZ2luLXRvcC0xMHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSIsIi5idXR0b24yIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjc5MjIxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjc5MjIxO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5pb24taXRlbSB7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG59XG5cbi5yb3ctc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXI6IHNvbGlkIDAuNXB4ICNiZGJkYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogMHB4IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRleHQtcGxhY2Uge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uYWxpZ24tc2VsZiB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm1hcmdpbi10b3AtMjYge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xufVxuXG4udGV4dC1ibG9jayB7XG4gIGNvbG9yOiAjYmRiZGJkO1xufVxuXG4uZGl2LXRpdGxlLXBsYWNlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtd2lkdGgtODAge1xuICB3aWR0aDogODAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kaXYtd2lkdGgtMjAge1xuICB3aWR0aDogMjAlO1xufVxuXG4uZGl2LXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hcmdpbi10b3AtMTAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/flightdcpickaddress/flightdcpickaddress.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/flightdcpickaddress/flightdcpickaddress.page.ts ***!
  \*****************************************************************/
/*! exports provided: FlightdcpickaddressPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightdcpickaddressPage", function() { return FlightdcpickaddressPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _flightdcpickaddressinput_flightdcpickaddressinput_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../flightdcpickaddressinput/flightdcpickaddressinput.page */ "./src/app/flightdcpickaddressinput/flightdcpickaddressinput.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/flightService */ "./src/app/providers/flightService.ts");







let FlightdcpickaddressPage = class FlightdcpickaddressPage {
    constructor(navCtrl, loadingCtrl, _flightService, modalCtrl, zone) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this._flightService = _flightService;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.isblocktextDepart = false;
        this.isblocktextReturn = false;
        this.inputFrom = "Nhập sân bay, địa điểm hoặc tên khách sạn";
        this.inputTo = "Nhập sân bay, địa điểm hoặc tên khách sạn";
        this.isenabledbtn = true;
        this.isLoaderDepart = true;
        this.isLoaderReturn = true;
        this.getLocationFrom(0);
        this.getLocationTo(0);
    }
    ngOnInit() {
        this._flightService.itemTranferChange.pipe().subscribe((data) => {
            if (data) {
                this.isblocktextDepart = this._flightService.itemFlightCache.isblocktextDepart;
                if (this._flightService.itemFlightCache.departDCPlace) {
                    this.inputFrom = this._flightService.itemFlightCache.departDCPlace.description;
                }
                this.isblocktextReturn = this._flightService.itemFlightCache.isblocktextReturn;
                if (this.isblocktextReturn) {
                    if (this._flightService.itemFlightCache.returnDCPlace) {
                        this.inputTo = this._flightService.itemFlightCache.returnDCPlace.description;
                    }
                    else {
                        if (this._flightService.itemFlightCache.objHotelCitySelected) {
                            this.inputTo = this._flightService.itemFlightCache.objHotelCitySelected.Address;
                            this.location = this._flightService.itemFlightCache.objHotelCitySelected.Location;
                            this.getInput();
                        }
                        else {
                            this.inputTo = "Nhập sân bay, địa điểm hoặc tên khách sạn";
                        }
                    }
                }
                else {
                    this.inputTo = "Nhập sân bay, địa điểm hoặc tên khách sạn";
                }
            }
        });
    }
    getInput() {
        var se = this;
        if (this.inputTo) {
            this.presentLoading();
            var options = {
                method: 'GET',
                url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/AutoCompleteFromGG?AirportLocation=' + this.location + '&Place=' + this.inputTo,
                timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                headers: {}
            };
            requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
                if (error) {
                    error.page = "hotellike";
                    error.func = "getblog";
                    error.param = JSON.stringify(options);
                    _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                    throw new Error(error);
                }
                if (se.loader) {
                    se.loader.dismiss();
                }
                var body = JSON.parse(body);
                se._flightService.itemFlightCache.returnDCPlace = body.data.predictions[0];
            });
        }
    }
    goback() {
        this._flightService.itemFlightCache.isblocktextDepart = this.isblocktextDepart;
        this._flightService.itemFlightCache.isblocktextReturn = this.isblocktextReturn;
        if (!this.isblocktextDepart && !this.isblocktextReturn) {
            this._flightService.itemFlightCache.DICHUNGParam = null;
        }
        this._flightService.itemTranferChange.emit(true);
        this.navCtrl.navigateBack('/flightaddservice');
    }
    toggleChangeDepart(ev) {
        this.isblocktextDepart = ev.detail.checked;
        if (this.isblocktextDepart) {
            if (this._flightService.itemFlightCache.departDCPlace) {
                this.inputFrom = this._flightService.itemFlightCache.departDCPlace.description;
            }
            else {
                this.inputFrom = "Nhập sân bay, địa điểm hoặc tên khách sạn";
            }
        }
        else {
            this.inputFrom = "Nhập sân bay, địa điểm hoặc tên khách sạn";
        }
    }
    toggleChangeReturn(ev) {
        this.isblocktextReturn = ev.detail.checked;
        if (this.isblocktextReturn) {
            if (this._flightService.itemFlightCache.objHotelCitySelected) {
                this.inputTo = this._flightService.itemFlightCache.objHotelCitySelected.Address;
                this.location = this._flightService.itemFlightCache.objHotelCitySelected.Location;
                this.getInput();
            }
            else {
                if (this._flightService.itemFlightCache.returnDCPlace) {
                    this.inputTo = this._flightService.itemFlightCache.returnDCPlace.description;
                }
                else {
                    this.inputTo = "Nhập sân bay, địa điểm hoặc tên khách sạn";
                }
            }
        }
        else {
            this.inputTo = "Nhập sân bay, địa điểm hoặc tên khách sạn";
        }
    }
    searchDepart() {
        if (this.isLoaderDepart) {
            this.isLoaderDepart = false;
            this.getLocationFrom(1);
        }
    }
    searchReturn() {
        if (this.isLoaderReturn) {
            this.isLoaderReturn = false;
            this.getLocationTo(1);
        }
    }
    getLocationFrom(value) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/FindPlaceFromGG?input=' + this._flightService.itemFlightCache.departAirport,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (error) {
                error.page = "hotellike";
                error.func = "getblog";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            var body = JSON.parse(body);
            se.locationFrom = body.data.location;
            se._flightService.itemFlightCache.departDCAirport = body.data.placeId;
            if (se.locationFrom && value == 1) {
                se.isblocktextDepart = true;
                se.isLoaderDepart = true;
                se.showInput('From');
            }
        });
    }
    getLocationTo(value) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/FindPlaceFromGG?input=' + this._flightService.itemFlightCache.returnAirport,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_5__(options, function (error, response, body) {
            if (error) {
                error.page = "hotellike";
                error.func = "getblog";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_4__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            var body = JSON.parse(body);
            se.locationTo = body.data.location;
            se._flightService.itemFlightCache.returnDCAirport = body.data.placeId;
            if (se.locationTo && value == 1) {
                se.isblocktextReturn = true;
                se.isLoaderReturn = true;
                se.showInput('To');
            }
        });
    }
    showInput(text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var location;
            if (text == 'From') {
                location = this.locationFrom;
            }
            else {
                location = this.locationTo;
            }
            const modal = yield this.modalCtrl.create({
                component: _flightdcpickaddressinput_flightdcpickaddressinput_page__WEBPACK_IMPORTED_MODULE_1__["FlightdcpickaddressinputPage"],
                componentProps: {
                    'value': text,
                    'location': location
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data.data) {
                    if (data.data.FromTo == 'From') {
                        this.inputFrom = data.data.item.description;
                        this._flightService.itemFlightCache.departDCPlace = data.data.item;
                    }
                    else if (data.data.FromTo == 'To') {
                        this.inputTo = data.data.item.description;
                        this._flightService.itemFlightCache.returnDCPlace = data.data.item;
                    }
                }
            });
        });
    }
    next() {
        if (!this.isblocktextDepart && !this.isblocktextReturn) {
            alert('Vui lòng chọn địa điểm đón tiễn');
            return;
        }
        if (!this._flightService.itemFlightCache.departDCPlace && !this._flightService.itemFlightCache.returnDCPlace) {
            alert('Vui lòng chọn địa điểm đón tiễn');
            return;
        }
        if (this.isblocktextDepart) {
            if (!this._flightService.itemFlightCache.departDCPlace) {
                alert('Vui lòng chọn địa điểm đón tiễn tại ' + this._flightService.itemFlightCache.departCity);
                return;
            }
        }
        else {
            this._flightService.itemFlightCache.departDCPlace = null;
        }
        if (this.isblocktextReturn) {
            if (!this._flightService.itemFlightCache.returnDCPlace) {
                alert('Vui lòng chọn địa điểm đón tiễn tại ' + this._flightService.itemFlightCache.returnCity);
                return;
            }
        }
        else {
            this._flightService.itemFlightCache.returnDCPlace = null;
        }
        if (this.locationFrom) {
            this._flightService.itemFlightCache.locationFrom = this.locationFrom;
        }
        else {
            this._flightService.itemFlightCache.locationFrom = null;
        }
        if (this.locationTo) {
            this._flightService.itemFlightCache.locationTo = this.locationTo;
        }
        else {
            this._flightService.itemFlightCache.locationTo = null;
        }
        this.navCtrl.navigateForward('/flightdcdetail/' + this.isblocktextDepart + '/' + this.isblocktextReturn);
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
};
FlightdcpickaddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-flightdcpickaddress',
        template: __webpack_require__(/*! ./flightdcpickaddress.page.html */ "./src/app/flightdcpickaddress/flightdcpickaddress.page.html"),
        styles: [__webpack_require__(/*! ./flightdcpickaddress.page.scss */ "./src/app/flightdcpickaddress/flightdcpickaddress.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
], FlightdcpickaddressPage);



/***/ })

}]);
//# sourceMappingURL=flightdcpickaddress-flightdcpickaddress-module.js.map