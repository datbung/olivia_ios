(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodinstallmentdone-foodinstallmentdone-module"],{

/***/ "./src/app/foodinstallmentdone/foodinstallmentdone.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/foodinstallmentdone/foodinstallmentdone.module.ts ***!
  \*******************************************************************/
/*! exports provided: FoodinstallmentdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinstallmentdonePageModule", function() { return FoodinstallmentdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodinstallmentdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodinstallmentdone.page */ "./src/app/foodinstallmentdone/foodinstallmentdone.page.ts");







const routes = [
    {
        path: '',
        component: _foodinstallmentdone_page__WEBPACK_IMPORTED_MODULE_6__["FoodinstallmentdonePage"]
    }
];
let FoodinstallmentdonePageModule = class FoodinstallmentdonePageModule {
};
FoodinstallmentdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodinstallmentdone_page__WEBPACK_IMPORTED_MODULE_6__["FoodinstallmentdonePage"]]
    })
], FoodinstallmentdonePageModule);



/***/ }),

/***/ "./src/app/foodinstallmentdone/foodinstallmentdone.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/foodinstallmentdone/foodinstallmentdone.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-payment-done-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"title-header\"><label class=\"text-title\">Hoàn thành</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"installment-payment-done-content\">\n    <div  style=\"text-align: center\">\n      <img src=\"./assets/step/food_step_3.svg\">\n    </div>\n   \n    <div class=\"div-label-title\">\n      <ion-label class=\"cls-primary f-bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n      </ion-label>\n    </div>\n    <div *ngIf=\"paymentsuccess\">\n     \n      <ion-label *ngIf=\"!isDinner else isdinner\" class=\"text\">\n        Mã đặt bữa trưa của Quý khách là\n        <span style=\"font-weight: bold\">{{code}}</span>\n      </ion-label>\n      <ng-template #isdinner>\n          <ion-label class=\"text\">\n              Mã đặt nguyên liệu bữa tối của Quý khách là\n              <span style=\"font-weight: bold\">{{code}}</span>\n            </ion-label>\n      </ng-template>\n    </div>\n    <div *ngIf='!isDinner'>\n      <ion-label text-wrap>\n        Bữa trưa sẽ giao cho quý khách từ thứ 2, {{startdate}} đến thứ 6, {{enddate}} trong khung giờ 11:30 - 12:15\n      </ion-label>\n    </div>\n    <div *ngIf='isDinner'>\n      <ion-label text-wrap>\n        Nguyên liệu bữa tối sẽ giao cho quý khách từ thứ 2, {{startdate}} đến thứ 6, {{enddate}} trong khung giờ 16:30 - 17:30\n      </ion-label>\n    </div>\n    <div *ngIf=\"paymentsuccess else paymentcancel\">\n      <div>\n        <ion-label text-wrap>\n          Quý khách đã thanh toán trả góp thành công. Xác nhận đơn hàng sẽ gửi đến {{email}}\n        </ion-label>\n      </div>\n     \n    </div>\n    <ng-template #paymentcancel>\n      <div *ngIf=\"!errorcode else haserrorcode\">\n        <ion-label text-wrap>\n          Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">Khách hàng hủy giao dịch</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n        </ion-label>\n      </div>\n      <ng-template #haserrorcode>\n        <div >\n          <ion-label text-wrap>\n            Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">{{errorcode}}</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n          </ion-label>\n        </div>\n      </ng-template>\n    </ng-template>\n    \n    <div>\n      <ion-label class=\"text\" text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài <b>(028) 3933 8000</b>, thời gian làm việc: từ <b>8:30-18:30</b>. Hoặc email <b>food@ivivu.com</b> để được trợ giúp.\n      </ion-label>\n    </div>\n    \n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodinstallmentdone/foodinstallmentdone.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/foodinstallmentdone/foodinstallmentdone.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".installment-payment-done-header .text-center {\n  text-align: center;\n}\n.installment-payment-done-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-done-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-done-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-done-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-done-content {\n  padding: 16px;\n}\n.installment-payment-done-content .div-label-title {\n  padding-top: 12px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.installment-payment-done-content .f-bold {\n  font-weight: 600;\n}\n.installment-payment-done-content .cls-primary {\n  color: #26bed6;\n}\n.installment-payment-done-content .cls-cancel {\n  color: red;\n}\n.installment-payment-done-content .cls-code {\n  color: #ff9500;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2Zvb2RpbnN0YWxsbWVudGRvbmUvZm9vZGluc3RhbGxtZW50ZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RpbnN0YWxsbWVudGRvbmUvZm9vZGluc3RhbGxtZW50ZG9uZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtBQ0RSO0FER0k7RUFDSSxrQkFBQTtFQUFtQixZQUFBO0VBQWEsV0FBQTtFQUFZLFFBQUE7QUNFcEQ7QURBUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0VaO0FEQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0FDQUo7QURDSTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NSO0FEQ0k7RUFDSSxnQkFBQTtBQ0NSO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURDSTtFQUNJLFVBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FER0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDREo7QURHQTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RpbnN0YWxsbWVudGRvbmUvZm9vZGluc3RhbGxtZW50ZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlclxyXG57XHJcbiAgICAudGV4dC1jZW50ZXJ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmFsaWduLXNlbGYtY2VudGVye1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5kaXYtZ29iYWNre1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtoZWlnaHQ6IDQ4cHg7d2lkdGg6IDQ4cHg7dG9wOiAwcHg7XHJcblxyXG4gICAgICAgIC5pbWctZ29iYWNre1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7IFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0Oi0xNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRpdGxlLWhlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxufVxyXG5cclxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50e1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIC5kaXYtbGFiZWwtdGl0bGV7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmYtYm9sZHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gICAgLmNscy1wcmltYXJ5e1xyXG4gICAgICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgfVxyXG4gICAgLmNscy1jYW5jZWx7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIC5jbHMtY29kZXtcclxuICAgICAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufSBcclxuLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn0iLCIuaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAudGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuZGl2LWdvYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgdG9wOiAwcHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAuZGl2LWdvYmFjayAuaW1nLWdvYmFjayB7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tbGVmdDogLTE0cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWhlYWRlciAudGl0bGUtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDZweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuZGl2LWxhYmVsLXRpdGxlIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmYtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmNscy1wcmltYXJ5IHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmNscy1jYW5jZWwge1xuICBjb2xvcjogcmVkO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtY29kZSB7XG4gIGNvbG9yOiAjZmY5NTAwO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodinstallmentdone/foodinstallmentdone.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/foodinstallmentdone/foodinstallmentdone.page.ts ***!
  \*****************************************************************/
/*! exports provided: FoodinstallmentdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodinstallmentdonePage", function() { return FoodinstallmentdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");











let FoodinstallmentdonePage = class FoodinstallmentdonePage {
    constructor(activityService, navCtrl, booking, valueGlobal, RoomInfo, activatedRoute, zone, foodService, storage, gf, searchhotel) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.booking = booking;
        this.valueGlobal = valueGlobal;
        this.RoomInfo = RoomInfo;
        this.activatedRoute = activatedRoute;
        this.zone = zone;
        this.foodService = foodService;
        this.storage = storage;
        this.gf = gf;
        this.searchhotel = searchhotel;
        this.paymentsuccess = false;
        this.errorcode = "";
        var se = this;
        this.isDinner = this.foodService.isDinner;
        if (se.activityService.installmentPaymentSuccess) {
            se.paymentsuccess = true;
            se.activityService.installmentPaymentSuccess = false;
            se.email = se.RoomInfo.email;
        }
        else {
            if (se.activityService.installmentPaymentErrorCode) {
                se.errorcode = se.activityService.installmentPaymentErrorCode;
                se.email = se.RoomInfo.email;
            }
        }
    }
    ngOnInit() {
        this.code = this.activatedRoute.snapshot.paramMap.get('code');
        this.startdate = moment__WEBPACK_IMPORTED_MODULE_6__(this.activatedRoute.snapshot.paramMap.get('startdate')).format('DD/MM');
        this.enddate = moment__WEBPACK_IMPORTED_MODULE_6__(this.activatedRoute.snapshot.paramMap.get('enddate')).format('DD/MM');
    }
    next() {
        if (this.paymentsuccess) {
            this.zone.run(() => {
                if (this.foodService.isDinner) {
                    this.foodService.itemActiveFoodTab.emit(2);
                    this.foodService.listDinnerItemsCart = [];
                    this.foodService.itemDinnerAddToCart = [];
                }
                else {
                    this.storage.remove("listItemsCart");
                    this.foodService.itemCartChange.emit(0);
                    this.foodService.countcart = 0;
                    this.foodService.listAddToCart = [];
                    this.foodService.listItemsCart = [];
                }
                this.foodService.totalPrice = 0;
            });
        }
        this.activityService.objBankInStallment = null;
        this.searchhotel.backPage = "foodinstallmentdone";
        this.navCtrl.navigateForward('/homefood');
    }
};
FoodinstallmentdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-foodinstallmentdone',
        template: __webpack_require__(/*! ./foodinstallmentdone.page.html */ "./src/app/foodinstallmentdone/foodinstallmentdone.page.html"),
        styles: [__webpack_require__(/*! ./foodinstallmentdone.page.scss */ "./src/app/foodinstallmentdone/foodinstallmentdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["ValueGlobal"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_7__["foodService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_1__["GlobalFunction"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"]])
], FoodinstallmentdonePage);



/***/ })

}]);
//# sourceMappingURL=foodinstallmentdone-foodinstallmentdone-module.js.map