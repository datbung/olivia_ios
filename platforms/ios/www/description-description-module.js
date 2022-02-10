(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["description-description-module"],{

/***/ "./src/app/description/description.html":
/*!**********************************************!*\
  !*** ./src/app/description/description.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-row style=\"padding-top:11px\">\n    <ion-col style=\"text-align: center\">\n      <div style=\"align-self: center\" >\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n          <img class=\"header-img-twoline\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        \n        <div><label class=\"text-title\">Thông tin</label></div>\n        <div><label style=\"font-size: 11px;color: #828282\">{{Name}}</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  </ion-header>\n  <ion-content>\n       <div class=\"description-content\" style=\"padding: 16px\">\n          <label  [innerHTML]=\"FullDescription\" text-wrap>\n            </label>\n       </div>\n\n  </ion-content>"

/***/ }),

/***/ "./src/app/description/description.module.ts":
/*!***************************************************!*\
  !*** ./src/app/description/description.module.ts ***!
  \***************************************************/
/*! exports provided: DescriptionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPageModule", function() { return DescriptionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _description__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./description */ "./src/app/description/description.ts");







let DescriptionPageModule = class DescriptionPageModule {
};
DescriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _description__WEBPACK_IMPORTED_MODULE_6__["DescriptionPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _description__WEBPACK_IMPORTED_MODULE_6__["DescriptionPage"]
                }
            ])
        ],
    })
], DescriptionPageModule);



/***/ }),

/***/ "./src/app/description/description.scss":
/*!**********************************************!*\
  !*** ./src/app/description/description.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.description-content {\n  padding: 16px;\n  line-height: 1.5;\n  text-align: justify;\n  letter-spacing: -0.4px;\n  font-weight: 400;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLnNjc3MiLCJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURHQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAudGV4dC10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cblxuLmRlc2NyaXB0aW9uLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0iLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/description/description.ts":
/*!********************************************!*\
  !*** ./src/app/description/description.ts ***!
  \********************************************/
/*! exports provided: DescriptionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPage", function() { return DescriptionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let DescriptionPage = class DescriptionPage {
    constructor(platform, navCtrl, gf, activatedRoute, zone, storage, loadingCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.urlpath = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlPost;
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        this.Name = this.activatedRoute.snapshot.paramMap.get('name');
        this.storage.get('hoteldetail_' + this.HotelID).then((data) => {
            if (data) {
                let jsondata = data;
                this.zone.run(() => {
                    this.Name = jsondata.Name;
                    this.FullDescription = jsondata.FullDescription;
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
        gf.googleAnalytion('description', 'load', '');
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
    }
    getdata() {
        var se = this;
        se.presentLoading();
        var options = {
            method: 'POST',
            url: se.urlpath + "/mhoteldetail/" + se.HotelID,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            se.loader.dismiss();
            if (response.statusCode != 200) {
                var objError = {
                    page: "description",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "description";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se.zone.run(() => {
                    se.Name = jsondata.Name;
                    se.FullDescription = jsondata.FullDescription;
                });
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
};
DescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-description',
        template: __webpack_require__(/*! ./description.html */ "./src/app/description/description.html"),
        styles: [__webpack_require__(/*! ./description.scss */ "./src/app/description/description.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], DescriptionPage);



/***/ })

}]);
//# sourceMappingURL=description-description-module.js.map