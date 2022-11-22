(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"],{

/***/ "./src/app/policy/policy.html":
/*!************************************!*\
  !*** ./src/app/policy/policy.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <div>\n      <label class=\"text-title\">\n        Chính sách\n      </label>\n    </div>\n    <div>\n      <label style=\"font-size: 11px\">\n        {{Name}}\n      </label>\n    </div>\n  </ion-navbar> -->\n  <ion-row style=\"padding-top:11px\">\n    <ion-col style=\"text-align: center\">\n      <div style=\"align-self: center\" >\n        <!-- <div style=\"position: absolute;height: 48px;width: 48px;top:8px\" (click)=\"goback()\">\n            <ion-icon color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon>\n        </div> -->\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n          <img  class=\"header-img-twoline\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          <!-- <ion-icon color=\"dark-tint\" style=\"font-size: 20px; margin-top: 10px;\" name=\"arrow-back\" class=\"card-title\">\n          </ion-icon> -->\n        </div>\n        \n        <div><label class=\"text-title\">Chính sách</label></div>\n        <div><label style=\"font-size: 11px;color: #828282\">{{Name}}</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content class=\"content-policy\">\n  <div style=\"margin: 5px 16px\">\n    <div *ngIf=\"cin\">\n      <label style=\"font-size: 14px;font-weight: 500\">\n        Thời gian nhận phòng\n      </label>\n\n    </div>\n    <div>\n      <label>\n        {{cin}}\n      </label>\n\n    </div>\n    <div *ngIf=\"cout\">\n      <label style=\"font-size: 14px;font-weight: 500\">\n        Thời gian trả phòng\n      </label>\n\n    </div>\n    <div>\n      <label>\n        {{cout}}\n      </label>\n    </div>\n\n  </div>\n  <div>\n    <ion-list no-lines *ngFor=\"let msg of HotelPolicies\">\n      <ion-item>\n        <label style=\"font-weight: 500;font-size: 14px;\">\n          {{msg.Key}}\n        </label>\n      </ion-item>\n      <ion-item style=\"margin-top: -12px;\">\n        <label [innerHTML]=\"msg.PolicyDes\" text-wrap>\n        </label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/policy/policy.module.ts":
/*!*****************************************!*\
  !*** ./src/app/policy/policy.module.ts ***!
  \*****************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _policy__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy */ "./src/app/policy/policy.ts");







let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _policy__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
                    path: '',
                    component: _policy__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]
                }]),
        ],
    })
], PolicyPageModule);



/***/ }),

/***/ "./src/app/policy/policy.scss":
/*!************************************!*\
  !*** ./src/app/policy/policy.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n::ng-deep .content-policy {\n  font-weight: 300;\n  font-size: 14px;\n}\n\n::ng-deep .content-policy label > p {\n  margin: 2px 0;\n  line-height: 20px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n::ng-deep .content-policy p > em > strong {\n  font-style: normal;\n  font-weight: 300 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9wb2xpY3kvcG9saWN5LnNjc3MiLCJzcmMvYXBwL3BvbGljeS9wb2xpY3kuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0FSOztBRElRO0VBRUksZ0JBQUE7RUFDQSxlQUFBO0FDRlo7O0FESVk7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNGaEI7O0FES1k7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0FDSGhCIiwiZmlsZSI6InNyYy9hcHAvcG9saWN5L3BvbGljeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcbiAgICB9XG5cbiAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5jb250ZW50LXBvbGljeVxuICAgICAgICB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxuICAgICAgICAgICAgbGFiZWwgPiBwIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwID4gZW0gPiBzdHJvbmd7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAiLCIudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbjo6bmctZGVlcCAuY29udGVudC1wb2xpY3kge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQtcG9saWN5IGxhYmVsID4gcCB7XG4gIG1hcmdpbjogMnB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46Om5nLWRlZXAgLmNvbnRlbnQtcG9saWN5IHAgPiBlbSA+IHN0cm9uZyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/policy/policy.ts":
/*!**********************************!*\
  !*** ./src/app/policy/policy.ts ***!
  \**********************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");








let PolicyPage = class PolicyPage {
    constructor(platform, navCtrl, gf, activatedRoute, zone, storage, loadingCtrl) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        this.storage.get('hoteldetail_' + this.HotelID).then((data) => {
            if (data) {
                let jsondata = data;
                this.zone.run(() => {
                    this.Name = jsondata.Name;
                    this.cin = jsondata.CheckinTime;
                    this.cout = jsondata.CheckoutTime;
                    this.HotelPolicies = jsondata.HotelPolicies;
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
        gf.googleAnalytion('policy', 'load', '');
    }
    ngOnInit() {
    }
    getdata() {
        var se = this;
        se.presentLoading();
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + this.HotelID;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            se.loader.dismiss();
            if (response.statusCode != 200) {
                var objError = {
                    page: "policy",
                    func: "getdata",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "policy";
                error.func = "loaddata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].writeErrorLog(objError, response);
            }
            if (response.statusCode == 200) {
                let jsondata = JSON.parse(body);
                se.zone.run(() => {
                    se.Name = jsondata.Name;
                    se.cin = jsondata.CheckinTime;
                    se.cout = jsondata.CheckoutTime;
                    se.HotelPolicies = jsondata.HotelPolicies;
                });
            }
        });
    }
    goback() {
        this.navCtrl.navigateBack('/hoteldetail/' + this.HotelID);
    }
    strip_html_tags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
};
PolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy',
        template: __webpack_require__(/*! ./policy.html */ "./src/app/policy/policy.html"),
        styles: [__webpack_require__(/*! ./policy.scss */ "./src/app/policy/policy.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]])
], PolicyPage);



/***/ })

}]);
//# sourceMappingURL=policy-policy-module.js.map