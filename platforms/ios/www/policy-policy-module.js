(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["policy-policy-module"],{

/***/ "./src/app/policy/policy.html":
/*!************************************!*\
  !*** ./src/app/policy/policy.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the PolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <!-- <ion-navbar>\n    <div>\n      <label class=\"text-title\">\n        Chính sách\n      </label>\n    </div>\n    <div>\n      <label style=\"font-size: 11px\">\n        {{Name}}\n      </label>\n    </div>\n  </ion-navbar> -->\n  <ion-row style=\"padding-top:11px\">\n    <ion-col style=\"text-align: center\">\n      <div style=\"align-self: center\" >\n        <!-- <div style=\"position: absolute;height: 48px;width: 48px;top:8px\" (click)=\"goback()\">\n            <ion-icon color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon>\n        </div> -->\n        <div style=\"position: absolute;height: 48px;width: 48px;align-self: center;\" (click)=\"goback()\">\n          <img  class=\"header-img-twoline\" src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          <!-- <ion-icon color=\"dark-tint\" style=\"font-size: 20px; margin-top: 10px;\" name=\"arrow-back\" class=\"card-title\">\n          </ion-icon> -->\n        </div>\n        \n        <div><label class=\"text-title\">Chính sách</label></div>\n        <div><label style=\"font-size: 11px;color: #828282\">{{Name}}</label></div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n<ion-content class=\"content-policy\">\n  <div style=\"margin: 5px 16px\">\n    <div>\n      <label style=\"font-size: 14px;font-weight: 500\">\n        Thời gian nhận phòng\n      </label>\n\n    </div>\n    <div>\n      <label>\n        {{cin}}\n      </label>\n\n    </div>\n    <div>\n      <label style=\"font-size: 14px;font-weight: 500\">\n        Thời gian trả phòng\n      </label>\n\n    </div>\n    <div>\n      <label>\n        {{cout}}\n      </label>\n    </div>\n\n  </div>\n  <div>\n    <ion-list no-lines *ngFor=\"let msg of HotelPolicies\">\n      <ion-item>\n        <label style=\"font-weight: 500;font-size: 14px;\">\n          {{msg.Key}}\n        </label>\n      </ion-item>\n      <ion-item style=\"margin-top: -12px;\">\n        <label [innerHTML]=\"msg.PolicyDes\" text-wrap>\n        </label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>"

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

module.exports = ".text-title {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n::ng-deep .content-policy {\n  font-weight: 300;\n  font-size: 14px;\n}\n\n::ng-deep .content-policy label > p {\n  margin: 2px 0;\n  line-height: 20px;\n  font-weight: 300;\n  font-size: 14px;\n}\n\n::ng-deep .content-policy p > em > strong {\n  font-style: normal;\n  font-weight: 300 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvcG9saWN5L3BvbGljeS5zY3NzIiwic3JjL2FwcC9wb2xpY3kvcG9saWN5LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURJUTtFQUVJLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBRElZO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDRmhCOztBREtZO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtBQ0hoQiIsImZpbGUiOiJzcmMvYXBwL3BvbGljeS9wb2xpY3kuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgfVxuXG4gICAgOjpuZy1kZWVwe1xuICAgICAgICAuY29udGVudC1wb2xpY3lcbiAgICAgICAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBcbiAgICAgICAgICAgIGxhYmVsID4gcCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcCA+IGVtID4gc3Ryb25ne1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgIiwiLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG46Om5nLWRlZXAgLmNvbnRlbnQtcG9saWN5IHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50LXBvbGljeSBsYWJlbCA+IHAge1xuICBtYXJnaW46IDJweCAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOjpuZy1kZWVwIC5jb250ZW50LXBvbGljeSBwID4gZW0gPiBzdHJvbmcge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn0iXX0= */"

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
    constructor(platform, navCtrl, gf, activatedRoute, zone, storage) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.gf = gf;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.storage = storage;
        this.HotelID = this.activatedRoute.snapshot.paramMap.get('id');
        this.Name = this.activatedRoute.snapshot.paramMap.get('name');
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
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_3__["C"].urls.baseUrl.urlPost + "/mhoteldetail/" + this.HotelID;
        var options = {
            method: 'POST',
            url: url,
            timeout: 180000, maxAttempts: 5, retryDelay: 2000,
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
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
};
PolicyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-policy',
        template: __webpack_require__(/*! ./policy.html */ "./src/app/policy/policy.html"),
        styles: [__webpack_require__(/*! ./policy.scss */ "./src/app/policy/policy.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]])
], PolicyPage);



/***/ })

}]);
//# sourceMappingURL=policy-policy-module.js.map