(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilities-facilities-module"],{

/***/ "./src/app/facilities/facilities.html":
/*!********************************************!*\
  !*** ./src/app/facilities/facilities.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <!-- <ion-navbar>\n      <div>\n        <label class=\"text-title\">\n          Tiện ích\n        </label>\n      </div>\n      <div>\n        <label style=\"font-size: 11px\">\n          {{Name}}\n        </label>\n      </div>\n    </ion-navbar> -->\n    <ion-row style=\"padding-top:11px\">\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\" >\n          <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n            <img  class=\"header-img-twoline\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div> \n          <div><label class=\"text-title\">Tiện ích</label></div>\n          <div><label style=\"font-size: 11px;color: #828282\">{{Name}}</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content>\n        <ion-list  lines=\"none\"  *ngFor=\"let msg of HotelFacilities\">\n          <ion-item>\n              * {{msg.Name}}\n          </ion-item>\n        </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/facilities/facilities.module.ts":
/*!*************************************************!*\
  !*** ./src/app/facilities/facilities.module.ts ***!
  \*************************************************/
/*! exports provided: FacilitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesPageModule", function() { return FacilitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _facilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./facilities */ "./src/app/facilities/facilities.ts");







let FacilitiesPageModule = class FacilitiesPageModule {
};
FacilitiesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _facilities__WEBPACK_IMPORTED_MODULE_6__["FacilitiesPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _facilities__WEBPACK_IMPORTED_MODULE_6__["FacilitiesPage"]
                }
            ])
        ],
    })
], FacilitiesPageModule);



/***/ }),

/***/ "./src/app/facilities/facilities.scss":
/*!********************************************!*\
  !*** ./src/app/facilities/facilities.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.list-md {\n  margin: 0;\n}\n\n.list-ios {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZmFjaWxpdGllcy9mYWNpbGl0aWVzLnNjc3MiLCJzcmMvYXBwL2ZhY2lsaXRpZXMvZmFjaWxpdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxTQUFBO0FDQ1I7O0FEQ0k7RUFDSSxnQkFBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvZmFjaWxpdGllcy9mYWNpbGl0aWVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cbiAgICAubGlzdC1tZCB7XG4gICAgICAgIG1hcmdpbjogMFxuICAgIH1cbiAgICAubGlzdC1pb3N7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfSIsIi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpc3QtbWQge1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/facilities/facilities.ts":
/*!******************************************!*\
  !*** ./src/app/facilities/facilities.ts ***!
  \******************************************/
/*! exports provided: FacilitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacilitiesPage", function() { return FacilitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let FacilitiesPage = class FacilitiesPage {
    constructor(platform, navCtrl, gf, activatedRoute, zone, storage) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.storage = storage;
        this.urlpath = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlPost;
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        this.Name = this.activatedRoute.snapshot.paramMap.get('name');
        this.storage.get('hoteldetail_' + this.HotelID).then((data) => {
            if (data) {
                let jsondata = data;
                this.zone.run(() => {
                    this.Name = jsondata.Name;
                    this.HotelFacilities = jsondata.HotelFacilities;
                });
            }
            else {
                this.getdata();
            }
        });
        this.platform.ready().then(() => {
            this.platform.backButton.subscribe(() => {
                this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
            });
        });
        gf.googleAnalytion('facilities', 'load', '');
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
    }
    getdata() {
        var se = this;
        var options = {
            method: 'POST',
            url: se.urlpath + "/mhoteldetail/" + se.HotelID,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "facilities",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "facilities";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se.zone.run(() => {
                    se.Name = jsondata.Name;
                    se.HotelFacilities = jsondata.HotelFacilities;
                });
            }
        });
    }
};
FacilitiesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-facilities',
        template: __webpack_require__(/*! ./facilities.html */ "./src/app/facilities/facilities.html"),
        styles: [__webpack_require__(/*! ./facilities.scss */ "./src/app/facilities/facilities.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], FacilitiesPage);



/***/ })

}]);
//# sourceMappingURL=facilities-facilities-module.js.map