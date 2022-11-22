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

module.exports = ".installment-payment-done-header .text-center {\n  text-align: center;\n}\n.installment-payment-done-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-done-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-done-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-done-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-done-content {\n  padding: 16px;\n}\n.installment-payment-done-content .div-label-title {\n  padding-top: 12px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.installment-payment-done-content .f-bold {\n  font-weight: 600;\n}\n.installment-payment-done-content .cls-primary {\n  color: #26bed6;\n}\n.installment-payment-done-content .cls-cancel {\n  color: red;\n}\n.installment-payment-done-content .cls-code {\n  color: #ff9500;\n}\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9mb29kaW5zdGFsbG1lbnRkb25lL2Zvb2RpbnN0YWxsbWVudGRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kaW5zdGFsbG1lbnRkb25lL2Zvb2RpbnN0YWxsbWVudGRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDRXBEO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0RKO0FER0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9mb29kaW5zdGFsbG1lbnRkb25lL2Zvb2RpbnN0YWxsbWVudGRvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXJcclxue1xyXG4gICAgLnRleHQtY2VudGVye1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5hbGlnbi1zZWxmLWNlbnRlcntcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZGl2LWdvYmFja3tcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7aGVpZ2h0OiA0OHB4O3dpZHRoOiA0OHB4O3RvcDogMHB4O1xyXG5cclxuICAgICAgICAuaW1nLWdvYmFja3tcclxuICAgICAgICAgICAgaGVpZ2h0OiA0OHB4OyBcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDotMTRweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50aXRsZS1oZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudHtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAuZGl2LWxhYmVsLXRpdGxle1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5mLWJvbGR7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICAgIC5jbHMtcHJpbWFyeXtcclxuICAgICAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIH1cclxuICAgIC5jbHMtY2FuY2Vse1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcbiAgICAuY2xzLWNvZGV7XHJcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn0gXHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59IiwiLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmFsaWduLXNlbGYtY2VudGVyIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmRpdi1nb2JhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIHRvcDogMHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLmRpdi1nb2JhY2sgLmltZy1nb2JhY2sge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNHB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1oZWFkZXIgLnRpdGxlLWhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmRpdi1sYWJlbC10aXRsZSB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5mLWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtcHJpbWFyeSB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5jbHMtY2FuY2VsIHtcbiAgY29sb3I6IHJlZDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuY2xzLWNvZGUge1xuICBjb2xvcjogI2ZmOTUwMDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufSJdfQ== */"

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