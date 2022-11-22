(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["weather-weather-module"],{

/***/ "./src/app/weather/weather.html":
/*!**************************************!*\
  !*** ./src/app/weather/weather.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-row>\r\n        <ion-col style=\"text-align: center;height: 48px;\">\r\n            <div style=\"align-self: center\" >\r\n                <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\r\n                    <img style=\"height: 48px; padding: 8px;margin-top: 0px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\r\n                </div>\r\n                <div style=\"padding-top: 11px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thời tiết {{CityName}}</label></div>\r\n            </div>\r\n        </ion-col>\r\n        </ion-row>\r\n</ion-header>\r\n\r\n<ion-content >\r\n    <div class=\"weather-content\">\r\n        <ion-list *ngFor=\"let record of weatherData\">\r\n            <ion-row>\r\n                <ion-col size=\"10\">\r\n                    <div class=\"weather-datestr\">{{record.datetimeStr}}</div>\r\n                    <div class=\"weather-tempstr\">{{record.tempStr}}</div>\r\n                </ion-col>\r\n                <ion-col size=\"2\" class=\"weather-img\">\r\n                    <img src=\"{{record.weather.iconUrl}}\">\r\n                </ion-col>\r\n            </ion-row>\r\n            <hr>\r\n        </ion-list>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/weather/weather.module.ts":
/*!*******************************************!*\
  !*** ./src/app/weather/weather.module.ts ***!
  \*******************************************/
/*! exports provided: WeatherPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPageModule", function() { return WeatherPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./weather */ "./src/app/weather/weather.ts");







let WeatherPageModule = class WeatherPageModule {
};
WeatherPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _weather__WEBPACK_IMPORTED_MODULE_6__["WeatherPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _weather__WEBPACK_IMPORTED_MODULE_6__["WeatherPage"]
                }]),
        ],
    })
], WeatherPageModule);



/***/ }),

/***/ "./src/app/weather/weather.scss":
/*!**************************************!*\
  !*** ./src/app/weather/weather.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-title {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\n\n.weather-content {\n  padding: 16px 16px 16px 11px;\n}\n\n.weather-datestr {\n  font-size: 12px;\n  color: #4f4f4f;\n  padding: 0;\n}\n\n.weather-tempstr {\n  font-size: 36px;\n}\n\n.weather-img {\n  align-self: center;\n  padding-top: 12px;\n}\n\n.list-md {\n  margin: 0;\n}\n\nhr {\n  border-bottom: solid 1px #cdcdcd;\n  margin-left: 5px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC93ZWF0aGVyL3dlYXRoZXIuc2NzcyIsInNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0FSOztBREVJO0VBQ00sV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ1Y7O0FEQ0k7RUFDSSw0QkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDR1I7O0FEREk7RUFDSSxlQUFBO0FDSVI7O0FERkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDS1I7O0FESEk7RUFDSSxTQUFBO0FDTVI7O0FESkk7RUFDSSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ09SIiwiZmlsZSI6InNyYy9hcHAvd2VhdGhlci93ZWF0aGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5oZWFkZXItdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICByaWdodDogNiU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyLWljb257XHJcbiAgICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAud2VhdGhlci1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDExcHg7XHJcbiAgICB9XHJcbiAgICAud2VhdGhlci1kYXRlc3Rye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLndlYXRoZXItdGVtcHN0cntcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAud2VhdGhlci1pbWd7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtbWQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIGhye1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfSIsIi5oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICByaWdodDogNiU7XG59XG5cbi5oZWFkZXItaWNvbiB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLndlYXRoZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAxNnB4IDExcHg7XG59XG5cbi53ZWF0aGVyLWRhdGVzdHIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ud2VhdGhlci10ZW1wc3RyIHtcbiAgZm9udC1zaXplOiAzNnB4O1xufVxuXG4ud2VhdGhlci1pbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4ubGlzdC1tZCB7XG4gIG1hcmdpbjogMDtcbn1cblxuaHIge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NkY2RjZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgb3BhY2l0eTogMC41O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/weather/weather.ts":
/*!************************************!*\
  !*** ./src/app/weather/weather.ts ***!
  \************************************/
/*! exports provided: WeatherPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherPage", function() { return WeatherPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let WeatherPage = class WeatherPage {
    constructor(platform, navCtrl, zone, storage, gf, ActivatedRoute) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.storage = storage;
        this.gf = gf;
        this.ActivatedRoute = ActivatedRoute;
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.back();
            });
        });
        gf.googleAnalytion('wearther', 'load', '');
    }
    ngOnInit() {
        this.CityName = this.ActivatedRoute.snapshot.paramMap.get('cityName');
        this.storage.get('weatherInfo').then((data) => {
            if (data) {
                this.weatherData = data;
            }
            else {
                this.fetWeatherData();
            }
        });
    }
    fetWeatherData() {
        let self = this;
        self.CountryCode = "VN";
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetWeatherByCityAndCountryCode?cityName=' + self.CityName + '&countryCode=' + self.CountryCode,
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {},
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "weather",
                    func: "fetWeatherData",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "weather";
                error.func = "fetWeatherData";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                throw new Error(error);
            }
            else {
                self.zone.run(() => {
                    let result = body.data;
                    self.weatherData = result;
                    self.storage.set('weatherInfo', result);
                });
            }
        });
    }
    goback() {
        this.navCtrl.back();
    }
};
WeatherPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-weather',
        template: __webpack_require__(/*! ./weather.html */ "./src/app/weather/weather.html"),
        styles: [__webpack_require__(/*! ./weather.scss */ "./src/app/weather/weather.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
], WeatherPage);



/***/ })

}]);
//# sourceMappingURL=weather-weather-module.js.map