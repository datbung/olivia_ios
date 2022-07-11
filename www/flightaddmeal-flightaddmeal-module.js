(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightaddmeal-flightaddmeal-module"],{

/***/ "./src/app/flightaddmeal/flightaddmeal.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/flightaddmeal/flightaddmeal.module.ts ***!
  \*******************************************************/
/*! exports provided: FlightaddmealPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddmealPageModule", function() { return FlightaddmealPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightaddmeal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightaddmeal.page */ "./src/app/flightaddmeal/flightaddmeal.page.ts");







let FlightaddmealPageModule = class FlightaddmealPageModule {
};
FlightaddmealPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _flightaddmeal_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddmealPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{
                    path: '',
                    component: _flightaddmeal_page__WEBPACK_IMPORTED_MODULE_6__["FlightaddmealPage"]
                }]),
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FlightaddmealPageModule);



/***/ }),

/***/ "./src/app/flightaddmeal/flightaddmeal.page.html":
/*!*******************************************************!*\
  !*** ./src/app/flightaddmeal/flightaddmeal.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"flightpage-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Thêm bữa ăn</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-segment [(ngModel)]=\"tabmeal\" class=\"div-segment\"  mode=\"md\">\n          <ion-segment-button (click)=\"SelectTab(1)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"1\">\n            Chiều đi\n            </ion-segment-button>\n            <ion-segment-button (click)=\"SelectTab(2)\" mode=\"md\" style=\"text-transform: inherit;\" value=\"2\">\n            Chiều về\n            </ion-segment-button>\n          </ion-segment>\n      </ion-row>\n  </ion-header>\n\n    <ion-content>\n        <div class=\"content-flightaddmeal\" >\n            <ion-slides #slideTab (ionSlideDidChange)=\"slidetabchange()\" [options]=\"slideOpts\" (ionSlideDoubleTap)=slideDoubleClick()>\n                <!-- Chiều đi -->\n                <ion-slide style=\"display: block;\">\n                    <div *ngFor=\"let item of listMeal\">\n                        <div class=\"d-flex\">\n                            <div class=\"div-left\">\n                                <img class=\"img-left\" [src]=\"item.imagePath\">\n                            </div>\n                            <div class=\"div-right\">\n                                <div class=\"meal-title\">{{item.name}}</div>\n                                <div class=\"meal-desc\">{{item.description}}</div>\n                                <div class=\"div-price d-flex\">\n                                    <div class=\"div-quantity d-flex\">\n                                        <div class=\"div-item\" (click)=\"minusQuantity(item)\">\n                                            <img *ngIf=\"item.quantity >0\" src=\"./assets/ic_facility/ic_minus.svg\">\n                                            <img *ngIf=\"item.quantity ==0\" src=\"./assets/ic_facility/ic_minus_in.svg\">\n                                        </div>\n                                        <div class=\"div-item-center meal-title\" >{{item.quantity}}</div>\n                                        <div class=\"div-item\" (click)=\"plusQuantity(item)\">\n                                            <img src=\"./assets/ic_facility/ic_plus.svg\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text-price\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"div-split\"></div>\n                    </div>\n                    \n                    \n                </ion-slide>\n\n                <!-- Chiều về -->\n                <ion-slide style=\"display: block;\">\n                    <div *ngFor=\"let item of listMeal\">\n                        <div class=\"d-flex\">\n                            <div class=\"div-left\">\n                                <img class=\"img-left\" [src]=\"item.imagePath\">\n                            </div>\n                            <div class=\"div-right\">\n                                <div class=\"meal-title\">{{item.name}}</div>\n                                <div class=\"meal-desc\">{{item.description}}</div>\n                                <div class=\"div-price d-flex\">\n                                    <div class=\"div-quantity d-flex\">\n                                        <div class=\"div-item\" (click)=\"minusQuantity(item)\">\n                                            <img *ngIf=\"item.quantity >0\" src=\"./assets/ic_facility/ic_minus.svg\">\n                                            <img *ngIf=\"item.quantity ==0\" src=\"./assets/ic_facility/ic_minus_in.svg\">\n                                        </div>\n                                        <div class=\"div-item-center meal-title\">{{item.quantity}}</div>\n                                        <div class=\"div-item\" (click)=\"plusQuantity(item)\">\n                                            <img src=\"./assets/ic_facility/ic_plus.svg\">\n                                        </div>\n                                    </div>\n                                    <div class=\"text-price\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"div-split\"></div>\n                    </div>\n                </ion-slide>\n            </ion-slides>\n        </div>\n    </ion-content>"

/***/ }),

/***/ "./src/app/flightaddmeal/flightaddmeal.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/flightaddmeal/flightaddmeal.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.content-flightaddmeal {\n  padding: 16px;\n}\n\n.content-flightaddmeal .div-left {\n  width: 104px;\n  height: 104px;\n  margin-right: 8px;\n}\n\n.content-flightaddmeal .div-left .img-left {\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 104px;\n  border-radius: 4px;\n}\n\n.content-flightaddmeal .div-right {\n  position: relative;\n  text-align: left;\n}\n\n.content-flightaddmeal .div-right .meal-title {\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  line-height: 17px;\n}\n\n.content-flightaddmeal .div-right .meal-desc {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightaddmeal .div-right .div-price {\n  position: absolute;\n  bottom: 0;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item .seat-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  width: 41px;\n  text-align: center;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-split {\n  border-bottom: solid 0.3px #828282;\n  opacity: 0.3;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0YWRkbWVhbC9mbGlnaHRhZGRtZWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZmxpZ2h0YWRkbWVhbC9mbGlnaHRhZGRtZWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLDRCQUFBO0FDRUo7O0FEQUE7RUFDSSx1QkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLFdBQUE7QUNJSjs7QUREQTtFQUNJLGFBQUE7QUNJSjs7QURGSTtFQUVJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNHUjs7QUREUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHWjs7QURDSTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0FaOztBREdRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RaOztBRElRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDRlo7O0FESVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZoQjs7QURJZ0I7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0ZwQjs7QURRWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNOaEI7O0FEV0k7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRhZGRtZWFsL2ZsaWdodGFkZG1lYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmRpdi1oZWFkZXItdGl0bGV7XG4gICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cbi5jb2wtaGVhZGVye1xuICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweCAwO1xufVxuLmRpdi13aWR0aC0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZG1lYWx7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5kaXYtbGVmdFxuICAgIHtcbiAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcblxuICAgICAgICAuaW1nLWxlZnR7XG4gICAgICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwNHB4O1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1yaWdodFxuICAgIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG4gICAgICAgIC5tZWFsLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubWVhbC1kZXNje1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1wcmljZXtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcblxuICAgICAgICAgICAgLmRpdi1pdGVte1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgLnNlYXQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZGl2LWl0ZW0tY2VudGVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDFweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4zcHggIzgyODI4MjtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICBtYXJnaW46IDE2cHggMDtcbiAgICB9XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtaGVhZGVyLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1oZWFkZXIge1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250ZW50LWZsaWdodGFkZG1lYWwge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LWxlZnQge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LWxlZnQgLmltZy1sZWZ0IHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiAxMDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5tZWFsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLm1lYWwtZGVzYyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLmRpdi1wcmljZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5kaXYtcHJpY2UgLmRpdi1pdGVtIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAuZGl2LXByaWNlIC5kaXYtaXRlbSAuc2VhdC1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAuZGl2LXByaWNlIC5kaXYtaXRlbS1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgd2lkdGg6IDQxcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXNwbGl0IHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC4zcHggIzgyODI4MjtcbiAgb3BhY2l0eTogMC4zO1xuICBtYXJnaW46IDE2cHggMDtcbn0iXX0= */"
=======
module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.content-flightaddmeal {\n  padding: 16px;\n}\n\n.content-flightaddmeal .div-left {\n  width: 104px;\n  height: 104px;\n  margin-right: 8px;\n}\n\n.content-flightaddmeal .div-left .img-left {\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 104px;\n  border-radius: 4px;\n}\n\n.content-flightaddmeal .div-right {\n  position: relative;\n  text-align: left;\n}\n\n.content-flightaddmeal .div-right .meal-title {\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  line-height: 17px;\n}\n\n.content-flightaddmeal .div-right .meal-desc {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightaddmeal .div-right .div-price {\n  position: absolute;\n  bottom: 0;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item .seat-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  width: 41px;\n  text-align: center;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-split {\n  border-bottom: solid 0.3px #828282;\n  opacity: 0.3;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGFkZG1lYWwvZmxpZ2h0YWRkbWVhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGFkZG1lYWwvZmxpZ2h0YWRkbWVhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREE7RUFDSSxXQUFBO0FDSUo7O0FEREE7RUFDSSxhQUFBO0FDSUo7O0FERkk7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDR1I7O0FERFE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDR1o7O0FEQ0k7RUFFSSxrQkFBQTtFQUNBLGdCQUFBO0FDQVI7O0FERVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNBWjs7QURHUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNEWjs7QURJUTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtBQ0ZaOztBRElZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGaEI7O0FESWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNGcEI7O0FEUVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDTmhCOztBRFdJO0VBQ0ksa0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0YWRkbWVhbC9mbGlnaHRhZGRtZWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXh7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5kaXYtaGVhZGVyLXRpdGxle1xuICAgIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uY29sLWhlYWRlcntcbiAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHggMDtcbn1cbi5kaXYtd2lkdGgtMTAwe1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRtZWFse1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuZGl2LWxlZnRcbiAgICB7XG4gICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG5cbiAgICAgICAgLmltZy1sZWZ0e1xuICAgICAgICAgICAgd2lkdGg6IDEwNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDRweDtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtcmlnaHRcbiAgICB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAubWVhbC10aXRsZXtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lYWwtZGVzY3tcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtcHJpY2V7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDA7XG5cbiAgICAgICAgICAgIC5kaXYtaXRlbXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC5zZWF0LWljb257XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRpdi1pdGVtLWNlbnRlcntcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQxcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kaXYtc3BsaXR7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDAuM3B4ICM4MjgyODI7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcbiAgICAgICAgbWFyZ2luOiAxNnB4IDA7XG4gICAgfVxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWhlYWRlci10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb2wtaGVhZGVyIHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuXG4uZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudC1mbGlnaHRhZGRtZWFsIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1sZWZ0IHtcbiAgd2lkdGg6IDEwNHB4O1xuICBoZWlnaHQ6IDEwNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1sZWZ0IC5pbWctbGVmdCB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogMTA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAubWVhbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5tZWFsLWRlc2Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5kaXYtcHJpY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAuZGl2LXByaWNlIC5kaXYtaXRlbSB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLmRpdi1wcmljZSAuZGl2LWl0ZW0gLnNlYXQtaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLmRpdi1wcmljZSAuZGl2LWl0ZW0tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHdpZHRoOiA0MXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjRweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1zcGxpdCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuM3B4ICM4MjgyODI7XG4gIG9wYWNpdHk6IDAuMztcbiAgbWFyZ2luOiAxNnB4IDA7XG59Il19 */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightaddmeal/flightaddmeal.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/flightaddmeal/flightaddmeal.page.ts ***!
  \*****************************************************/
/*! exports provided: FlightaddmealPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightaddmealPage", function() { return FlightaddmealPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");







let FlightaddmealPage = class FlightaddmealPage {
    constructor(platform, navCtrl, modalCtrl, valueGlobal, searchhotel, gf, actionsheetCtrl, pickerController, zone, _flightService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.valueGlobal = valueGlobal;
        this.searchhotel = searchhotel;
        this.gf = gf;
        this.actionsheetCtrl = actionsheetCtrl;
        this.pickerController = pickerController;
        this.zone = zone;
        this._flightService = _flightService;
        this.tabmeal = 1;
        this.slideOpts = {
            loop: false,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 10,
            zoom: {
                toggle: false
            }
        };
        this.listMeal = [
            { id: 1, name: 'Cơm cá sốt cà ri', description: "Filê cá basa lăn bột và chiên. Vị thơm của nước sốt cà ri quyện với thịt cá sẽ khiến bạn không thể quên", imagePath: "https://cdn1.ivivu.com/images/2020/05/08/16/thanhbac3____horizontal.png", quantity: 0 },
            { id: 2, name: 'Cơm chiên kim chi', description: "Filê cá basa lăn bột và chiên. Vị thơm của nước sốt cà ri quyện với thịt cá sẽ khiến bạn không thể quên", imagePath: "https://cdn1.ivivu.com/images/2020/05/08/16/thanhbac3____horizontal.png", quantity: 0 },
            { id: 3, name: 'Hủ tiếu xào kiểu thái', description: "Filê cá basa lăn bột và chiên. Vị thơm của nước sốt cà ri quyện với thịt cá sẽ khiến bạn không thể quên", imagePath: "https://cdn1.ivivu.com/images/2020/05/08/16/thanhbac3____horizontal.png", quantity: 0 },
            { id: 4, name: 'Miến xào thập cẩm', description: "Filê cá basa lăn bột và chiên. Vị thơm của nước sốt cà ri quyện với thịt cá sẽ khiến bạn không thể quên", imagePath: "https://cdn1.ivivu.com/images/2020/05/08/16/thanhbac3____horizontal.png", quantity: 0 },
        ];
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.navigateBack('/flightaddservice');
    }
    slidetabchange() {
        this.sliderTab.getActiveIndex().then(index => {
            this.tabmeal = index + 1;
        });
    }
    SelectTab(tabindex) {
        this.tabmeal = tabindex;
        this.sliderTab.slideTo(tabindex - 1);
    }
    slideDoubleClick() {
    }
    minusQuantity(item) {
        this.zone.run(() => {
            if (item.quantity >= 1) {
                item.quantity--;
            }
        });
    }
    plusQuantity(item) {
        this.zone.run(() => {
            item.quantity++;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slideTab'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
], FlightaddmealPage.prototype, "sliderTab", void 0);
FlightaddmealPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightaddmeal',
        template: __webpack_require__(/*! ./flightaddmeal.page.html */ "./src/app/flightaddmeal/flightaddmeal.page.html"),
        styles: [__webpack_require__(/*! ./flightaddmeal.page.scss */ "./src/app/flightaddmeal/flightaddmeal.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_4__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PickerController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_5__["flightService"]])
], FlightaddmealPage);



/***/ })

}]);
//# sourceMappingURL=flightaddmeal-flightaddmeal-module.js.map