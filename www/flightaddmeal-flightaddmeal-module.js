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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.div-header-title {\n  padding-top: 12px !important;\n}\n\n.col-header {\n  height: 44px !important;\n  padding: 5px 0;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.content-flightaddmeal {\n  padding: 16px;\n}\n\n.content-flightaddmeal .div-left {\n  width: 104px;\n  height: 104px;\n  margin-right: 8px;\n}\n\n.content-flightaddmeal .div-left .img-left {\n  width: 104px;\n  height: 104px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: 104px;\n  border-radius: 4px;\n}\n\n.content-flightaddmeal .div-right {\n  position: relative;\n  text-align: left;\n}\n\n.content-flightaddmeal .div-right .meal-title {\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  line-height: 17px;\n}\n\n.content-flightaddmeal .div-right .meal-desc {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.content-flightaddmeal .div-right .div-price {\n  position: absolute;\n  bottom: 0;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item .seat-icon {\n  width: 24px;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-right .div-price .div-item-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 100;\n  color: #000000;\n  width: 41px;\n  text-align: center;\n  height: 24px;\n}\n\n.content-flightaddmeal .div-split {\n  border-bottom: solid 0.3px #828282;\n  opacity: 0.3;\n  margin: 16px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mbGlnaHRhZGRtZWFsL2ZsaWdodGFkZG1lYWwucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRhZGRtZWFsL2ZsaWdodGFkZG1lYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBQ0ksYUFBQTtBQ0lKOztBREZJO0VBRUksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ0dSOztBRERRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0daOztBRENJO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREVRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQVo7O0FER1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRFo7O0FESVE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNGWjs7QURJWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRmhCOztBRElnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRnBCOztBRFFZO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ05oQjs7QURXSTtFQUNJLGtDQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2ZsaWdodGFkZG1lYWwvZmxpZ2h0YWRkbWVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4uZGl2LWhlYWRlci10aXRsZXtcbiAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuLmNvbC1oZWFkZXJ7XG4gICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNXB4IDA7XG59XG4uZGl2LXdpZHRoLTEwMHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLmRpdi1sZWZ0XG4gICAge1xuICAgICAgICB3aWR0aDogMTA0cHg7XG4gICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuXG4gICAgICAgIC5pbWctbGVmdHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDRweDtcbiAgICAgICAgICAgIGhlaWdodDogMTA0cHg7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LXJpZ2h0XG4gICAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG5cbiAgICAgICAgLm1lYWwtdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZWFsLWRlc2N7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LXByaWNle1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgICAuZGl2LWl0ZW17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAuc2VhdC1pY29ue1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kaXYtaXRlbS1jZW50ZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MXB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGl2LXNwbGl0e1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCAjODI4MjgyO1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgICAgIG1hcmdpbjogMTZweCAwO1xuICAgIH1cbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1oZWFkZXItdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuXG4uY29sLWhlYWRlciB7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtbGVmdCB7XG4gIHdpZHRoOiAxMDRweDtcbiAgaGVpZ2h0OiAxMDRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtbGVmdCAuaW1nLWxlZnQge1xuICB3aWR0aDogMTA0cHg7XG4gIGhlaWdodDogMTA0cHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBtYXgtd2lkdGg6IDEwNHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLm1lYWwtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMTdweDtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAubWVhbC1kZXNjIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5jb250ZW50LWZsaWdodGFkZG1lYWwgLmRpdi1yaWdodCAuZGl2LXByaWNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtcmlnaHQgLmRpdi1wcmljZSAuZGl2LWl0ZW0ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5kaXYtcHJpY2UgLmRpdi1pdGVtIC5zZWF0LWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNvbnRlbnQtZmxpZ2h0YWRkbWVhbCAuZGl2LXJpZ2h0IC5kaXYtcHJpY2UgLmRpdi1pdGVtLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB3aWR0aDogNDFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uY29udGVudC1mbGlnaHRhZGRtZWFsIC5kaXYtc3BsaXQge1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjNweCAjODI4MjgyO1xuICBvcGFjaXR5OiAwLjM7XG4gIG1hcmdpbjogMTZweCAwO1xufSJdfQ== */"

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