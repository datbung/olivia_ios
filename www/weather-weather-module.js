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

module.exports = ".header-title {\n  padding-top: 10px;\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n  right: 6%;\n}\n\n.header-icon {\n  width: 48px;\n  height: 48px;\n  padding-top: 8px;\n  text-align: center;\n}\n\n.weather-content {\n  padding: 16px 16px 16px 11px;\n}\n\n.weather-datestr {\n  font-size: 12px;\n  color: #4f4f4f;\n  padding: 0;\n}\n\n.weather-tempstr {\n  font-size: 36px;\n}\n\n.weather-img {\n  align-self: center;\n  padding-top: 12px;\n}\n\n.list-md {\n  margin: 0;\n}\n\nhr {\n  border-bottom: solid 1px #cdcdcd;\n  margin-left: 5px;\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3dlYXRoZXIvd2VhdGhlci5zY3NzIiwic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDQVI7O0FERUk7RUFDTSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNDVjs7QURDSTtFQUNJLDRCQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNHUjs7QURESTtFQUNJLGVBQUE7QUNJUjs7QURGSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUNLUjs7QURISTtFQUNJLFNBQUE7QUNNUjs7QURKSTtFQUNJLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC93ZWF0aGVyL3dlYXRoZXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHJpZ2h0OiA2JTtcclxuICAgIH1cclxuICAgIC5oZWFkZXItaWNvbntcclxuICAgICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC53ZWF0aGVyLWNvbnRlbnR7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTFweDtcclxuICAgIH1cclxuICAgIC53ZWF0aGVyLWRhdGVzdHJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICAud2VhdGhlci10ZW1wc3Rye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIH1cclxuICAgIC53ZWF0aGVyLWltZ3tcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1tZCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gICAgaHJ7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjZGNkY2Q7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9IiwiLmhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHJpZ2h0OiA2JTtcbn1cblxuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ud2VhdGhlci1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweCAxNnB4IDE2cHggMTFweDtcbn1cblxuLndlYXRoZXItZGF0ZXN0ciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi53ZWF0aGVyLXRlbXBzdHIge1xuICBmb250LXNpemU6IDM2cHg7XG59XG5cbi53ZWF0aGVyLWltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5saXN0LW1kIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5ociB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjY2RjZGNkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBvcGFjaXR5OiAwLjU7XG59Il19 */"

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