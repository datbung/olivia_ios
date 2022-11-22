(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["insurrancedone-insurrancedone-module"],{

/***/ "./src/app/insurrancedone/insurrancedone.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.module.ts ***!
  \*********************************************************/
/*! exports provided: InsurrancedonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedonePageModule", function() { return InsurrancedonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurrancedone.page */ "./src/app/insurrancedone/insurrancedone.page.ts");







const routes = [
    {
        path: '',
        component: _insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedonePage"]
    }
];
let InsurrancedonePageModule = class InsurrancedonePageModule {
};
InsurrancedonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_insurrancedone_page__WEBPACK_IMPORTED_MODULE_6__["InsurrancedonePage"]]
    })
], InsurrancedonePageModule);



/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.html":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"insurrance-done-header\">\n  <ion-toolbar class=\"header-toolbar\">\n    <ion-row>\n      <ion-col style=\"text-align: center\">\n        <div style=\"align-self: center\">\n          <div class=\"header-title\"><label>Hoàn thành</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding class=\"insurrance-done-page\">\n    <div class=\"img-trip-empty\">\n        <img class=\"img-empty\" src=\"./assets/empty/trip_empty.svg\">\n      </div>\n      <div>\n        <div class=\"text-center p-top-16\">\n          <div><ion-label class=\"text-title\">Gửi yêu cầu bảo hiểm thành công!</ion-label></div>\n          <div class=\"p-top-8\">\n            <ion-label class=\"text\">\n              Quý khách đã hoàn tất gửi yêu cầu bồi thường Bảo hiểm đến Cathay. Vui lòng kiểm tra email để xem thêm chi tiết.\n            </ion-label>\n          </div>\n          \n        </div>\n      </div>\n</ion-content>\n<ion-footer class=\"insurrance-done-footer\">\n    <div class=\"text-center\">\n        <button (click)=\"next()\" ion-button round outline class=\"button2\">Hoàn thành</button>\n      </div>\n  </ion-footer>"

/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".insurrance-done-header .header-toolbar {\n  min-height: 0px;\n  text-align: center;\n}\n.insurrance-done-header .header-title {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.insurrance-done-page .text {\n  font-size: 14px;\n}\n.insurrance-done-page .mtp {\n  margin-top: 10px;\n}\n.insurrance-done-page .img-trip-empty {\n  text-align: center;\n}\n.insurrance-done-page .img-empty {\n  padding-top: 20%;\n}\n.insurrance-done-page .text-center {\n  text-align: center;\n  color: #4f4f4f;\n}\n.insurrance-done-page .text-title {\n  font-size: 28px;\n  font-weight: bold;\n}\n.insurrance-done-page .p-top-8 {\n  padding-top: 8px;\n}\n.insurrance-done-page .p-top-16 {\n  padding-top: 16px;\n}\n.insurrance-done-footer {\n  text-align: center;\n  background: #ffffff;\n}\n.insurrance-done-footer .text-center {\n  background: #ffffff;\n  text-align: center;\n}\n.insurrance-done-footer .button2 {\n  border-color: #F79221;\n  background-color: #F79221;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n  font-size: 17px;\n  border-radius: 4px;\n}\n@media (min-width: 414px) and (max-width: 480px) {\n  :ng-deep .text-title {\n    font-size: 28px;\n    font-weight: bold;\n    margin: 0 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9pbnN1cnJhbmNlZG9uZS9pbnN1cnJhbmNlZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc3VycmFuY2Vkb25lL2luc3VycmFuY2Vkb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFBZ0Isa0JBQUE7QUNDeEI7QURDSTtFQUNJLGdCQUFBO0VBQWlCLGVBQUE7RUFBZ0IsaUJBQUE7QUNHekM7QURHSTtFQUVJLGVBQUE7QUNEUjtBREdJO0VBRUksZ0JBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7QUNGUjtBRElJO0VBQ0ksZ0JBQUE7QUNGUjtBREtJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FDSFI7QURLSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0hSO0FES0k7RUFDSSxnQkFBQTtBQ0hSO0FES0k7RUFDSSxpQkFBQTtBQ0hSO0FETUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURJSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNGUjtBRElJO0VBRUkscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hSO0FEU0k7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUNOVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaW5zdXJyYW5jZWRvbmUvaW5zdXJyYW5jZWRvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3VycmFuY2UtZG9uZS1oZWFkZXJ7XHJcbiAgICAuaGVhZGVyLXRvb2xiYXJ7XHJcbiAgICAgICAgbWluLWhlaWdodDogMHB4O3RleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfVxyXG4gICAgLmhlYWRlci10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O2ZvbnQtc2l6ZTogMjBweDtmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG4uaW5zdXJyYW5jZS1kb25lLXBhZ2V7XHJcbiAgICBcclxuXHJcbiAgICAudGV4dFxyXG4gICAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5tdHBcclxuICAgIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmltZy10cmlwLWVtcHR5e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5pbWctZW1wdHl7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIH1cclxuICAgIC50ZXh0LXRpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5wLXRvcC04e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICB9XHJcbiAgICAucC10b3AtMTZ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuLmluc3VycmFuY2UtZG9uZS1mb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbjJcclxuICAgIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICNGNzkyMjE7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3OTIyMTtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuOm5nLWRlZXB7XHJcbiAgICBAbWVkaWEobWluLXdpZHRoOjQxNHB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAudGV4dC10aXRsZXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmluc3VycmFuY2UtZG9uZS1oZWFkZXIgLmhlYWRlci10b29sYmFyIHtcbiAgbWluLWhlaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdXJyYW5jZS1kb25lLWhlYWRlciAuaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC5tdHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAuaW1nLWVtcHR5IHtcbiAgcGFkZGluZy10b3A6IDIwJTtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjNGY0ZjRmO1xufVxuLmluc3VycmFuY2UtZG9uZS1wYWdlIC50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pbnN1cnJhbmNlLWRvbmUtcGFnZSAucC10b3AtOCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG4uaW5zdXJyYW5jZS1kb25lLXBhZ2UgLnAtdG9wLTE2IHtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5cbi5pbnN1cnJhbmNlLWRvbmUtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuLmluc3VycmFuY2UtZG9uZS1mb290ZXIgLnRleHQtY2VudGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3VycmFuY2UtZG9uZS1mb290ZXIgLmJ1dHRvbjIge1xuICBib3JkZXItY29sb3I6ICNGNzkyMjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNzkyMjE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNDE0cHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICA6bmctZGVlcCAudGV4dC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAyNHB4O1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/insurrancedone/insurrancedone.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/insurrancedone/insurrancedone.page.ts ***!
  \*******************************************************/
/*! exports provided: InsurrancedonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsurrancedonePage", function() { return InsurrancedonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");








let InsurrancedonePage = class InsurrancedonePage {
    constructor(gf, modalCtrl, router, _mytripservice, _flightService, valueGlobal, navCtrl) {
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.valueGlobal = valueGlobal;
        this.navCtrl = navCtrl;
        this.paramReturn = this.gf.getParams('insurranceClaimed');
    }
    ngOnInit() {
    }
    next() {
        let navigationExtras = {
            state: {
                param: this.paramReturn
            }
        };
        if (this._mytripservice.rootPage == "homeflight") {
            if (this.valueGlobal.backpageCathay == 'mytripdetail') {
                this.navCtrl.navigateForward('mytripdetail', { animated: true });
            }
            else {
                this.valueGlobal.backValue = "homeflight";
                this._mytripservice.orderPageState.emit(1);
                this._flightService.bookingSuccess = true;
                this._flightService.itemTabFlightActive.emit(true);
                setTimeout(() => {
                    this._flightService.itemMenuFlightClick.emit(2);
                }, 200);
                this.navCtrl.navigateBack('/tabs/tab1');
                this._mytripservice.backfrompage = "";
            }
        }
        else {
            if (this.valueGlobal.backpageCathay == 'mytripdetail') {
                this.navCtrl.navigateForward('mytripdetail', { animated: true });
            }
            else {
                this.router.navigateByUrl("/app/tabs/tab3?refresh=true", navigationExtras);
            }
        }
    }
};
InsurrancedonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-insurrancedone',
        template: __webpack_require__(/*! ./insurrancedone.page.html */ "./src/app/insurrancedone/insurrancedone.page.html"),
        styles: [__webpack_require__(/*! ./insurrancedone.page.scss */ "./src/app/insurrancedone/insurrancedone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_5__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_7__["ValueGlobal"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
], InsurrancedonePage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=insurrancedone-insurrancedone-module.js.map