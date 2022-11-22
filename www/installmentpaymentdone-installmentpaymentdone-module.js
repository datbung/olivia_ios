(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["installmentpaymentdone-installmentpaymentdone-module"],{

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.module.ts ***!
  \*************************************************************************/
/*! exports provided: InstallmentpaymentdonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentdonePageModule", function() { return InstallmentpaymentdonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./installmentpaymentdone.page */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.ts");







const routes = [
    {
        path: '',
        component: _installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentdonePage"]
    }
];
let InstallmentpaymentdonePageModule = class InstallmentpaymentdonePageModule {
};
InstallmentpaymentdonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_installmentpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["InstallmentpaymentdonePage"]]
    })
], InstallmentpaymentdonePageModule);



/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"installment-payment-done-header\">\n  <ion-toolbar class=\"text-center\">\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <div  class=\"align-self-center\" >\n          <div class=\"title-header\"><label class=\"text-title\">Hoàn thành</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"installment-payment-done-content\">\n    <img src=\"./assets/step/step_4.svg\">\n    <div class=\"div-label-title\">\n      <ion-label class=\"cls-primary f-bold\">\n        Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n      </ion-label>\n    </div>\n    \n    <div *ngIf=\"paymentsuccess else paymentcancel\">\n      <div>\n        <ion-label class=\"f-bold\">\n          Mã đặt phòng của quý khách là\n          <span class=\"f-bold cls-code\">{{code}}</span>\n        </ion-label>\n      </div>\n      <div>\n        <ion-label text-wrap>\n          Thông tin thanh toán đã được gửi đến email của Quý khách.\n        </ion-label>\n      </div>\n    </div>\n    <ng-template #paymentcancel>\n      <div *ngIf=\"!errorcode else haserrorcode\">\n        <ion-label text-wrap>\n          Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">Khách hàng hủy giao dịch</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n        </ion-label>\n      </div>\n      <ng-template #haserrorcode>\n        <div >\n          <ion-label text-wrap>\n            Rất tiếc, thanh toán trả góp qua thẻ Tín dụng của Quý khách chưa thành công vì lý do <span class=\"cls-cancel\">{{errorcode}}</span>. Vui lòng liên hệ với iVIVU.com để được hỗ trợ.\n          </ion-label>\n        </div>\n      </ng-template>\n    </ng-template>\n    \n    <div>\n      <ion-label text-wrap>\n        Nếu cần sự hỗ trợ vui lòng liên hệ tổng đài 1900 1870 hoặc email tc@ivivu.com để được trợ giúp.\n      </ion-label>\n    </div>\n    <div>\n      <ion-label text-wrap>\n        Hồ Chí Minh: 1900 1870\n      </ion-label>\n    </div>\n    <div>\n      <ion-label text-wrap>\n        Hà Nội: 1900 2045\n      </ion-label>\n    </div>\n    <div>\n    <ion-label text-wrap>\n      Cần Thơ: 1900 2087\n    </ion-label>\n    </div>\n  </div>\n  \n</ion-content>\n<ion-footer>\n  <div class=\"div-button-payment-done\">\n    <button (click)=\"addToCalendar()\" ion-button round outline class=\"button button2\">Thêm chuyến đi vào lịch</button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2 m-top-0\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".installment-payment-done-header .text-center {\n  text-align: center;\n}\n.installment-payment-done-header .align-self-center {\n  align-self: center;\n}\n.installment-payment-done-header .div-goback {\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  top: 0px;\n}\n.installment-payment-done-header .div-goback .img-goback {\n  height: 48px;\n  padding: 8px;\n  margin-top: -2px;\n  margin-left: -14px;\n}\n.installment-payment-done-header .title-header {\n  padding-top: 6px;\n  font-size: 20px;\n  font-weight: bold;\n}\n.installment-payment-done-content {\n  padding: 16px;\n}\n.installment-payment-done-content .div-label-title {\n  padding-top: 12px;\n  padding-bottom: 16px;\n  text-align: center;\n}\n.installment-payment-done-content .f-bold {\n  font-weight: 600;\n}\n.installment-payment-done-content .cls-primary {\n  color: #26bed6;\n}\n.installment-payment-done-content .cls-cancel {\n  color: red;\n}\n.installment-payment-done-content .cls-code {\n  color: #ff9500;\n}\n.button2 {\n  background: #fff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9pbnN0YWxsbWVudHBheW1lbnRkb25lL2luc3RhbGxtZW50cGF5bWVudGRvbmUucGFnZS5zY3NzIiwic3JjL2FwcC9pbnN0YWxsbWVudHBheW1lbnRkb25lL2luc3RhbGxtZW50cGF5bWVudGRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREdJO0VBQ0ksa0JBQUE7RUFBbUIsWUFBQTtFQUFhLFdBQUE7RUFBWSxRQUFBO0FDRXBEO0FEQVE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRENJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtBQ0FKO0FEQ0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRENJO0VBQ0ksZ0JBQUE7QUNDUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FEQ0k7RUFDSSxVQUFBO0FDQ1I7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdBO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNESjtBREdBO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvaW5zdGFsbG1lbnRwYXltZW50ZG9uZS9pbnN0YWxsbWVudHBheW1lbnRkb25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyXHJcbntcclxuICAgIC50ZXh0LWNlbnRlcntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYWxpZ24tc2VsZi1jZW50ZXJ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmRpdi1nb2JhY2t7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO2hlaWdodDogNDhweDt3aWR0aDogNDhweDt0b3A6IDBweDtcclxuXHJcbiAgICAgICAgLmltZy1nb2JhY2t7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDhweDsgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6LTE0cHhcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUtaGVhZGVye1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgLmRpdi1sYWJlbC10aXRsZXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZi1ib2xke1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgICAuY2xzLXByaW1hcnl7XHJcbiAgICAgICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICB9XHJcbiAgICAuY2xzLWNhbmNlbHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gICAgLmNscy1jb2Rle1xyXG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uMlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSIsIi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyIC50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyIC5hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyIC5kaXYtZ29iYWNrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICB0b3A6IDBweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyIC5kaXYtZ29iYWNrIC5pbWctZ29iYWNrIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTRweDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtaGVhZGVyIC50aXRsZS1oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmluc3RhbGxtZW50LXBheW1lbnQtZG9uZS1jb250ZW50IC5kaXYtbGFiZWwtdGl0bGUge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuZi1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuY2xzLXByaW1hcnkge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cbi5pbnN0YWxsbWVudC1wYXltZW50LWRvbmUtY29udGVudCAuY2xzLWNhbmNlbCB7XG4gIGNvbG9yOiByZWQ7XG59XG4uaW5zdGFsbG1lbnQtcGF5bWVudC1kb25lLWNvbnRlbnQgLmNscy1jb2RlIHtcbiAgY29sb3I6ICNmZjk1MDA7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/installmentpaymentdone/installmentpaymentdone.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/installmentpaymentdone/installmentpaymentdone.page.ts ***!
  \***********************************************************************/
/*! exports provided: InstallmentpaymentdonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallmentpaymentdonePage", function() { return InstallmentpaymentdonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");






let InstallmentpaymentdonePage = class InstallmentpaymentdonePage {
    constructor(activityService, navCtrl, booking, valueGlobal, _platform, _calendar, Roomif) {
        this.activityService = activityService;
        this.navCtrl = navCtrl;
        this.booking = booking;
        this.valueGlobal = valueGlobal;
        this._platform = _platform;
        this._calendar = _calendar;
        this.Roomif = Roomif;
        this.paymentsuccess = false;
        this.errorcode = "";
        this.nameroom = "";
        this.isaddCalendar = 0;
        var se = this;
        this.room = Roomif.arrroom;
        this.nameroom = this.room[0].ClassName;
        if (se.activityService.installmentPaymentSuccess) {
            se.paymentsuccess = true;
            se.activityService.installmentPaymentSuccess = false;
            se.code = se.booking.code;
            se.booking.code = null;
        }
        else {
            if (se.activityService.installmentPaymentErrorCode) {
                se.errorcode = se.activityService.installmentPaymentErrorCode;
            }
        }
    }
    ngOnInit() {
    }
    next() {
        this.activityService.objBankInStallment = null;
        this.valueGlobal.backValue = "";
        this.navCtrl.navigateBack('/');
    }
    addToCalendar() {
        let se = this;
        if (se._platform.is("cordova")) {
            se.createCalendar(true);
        }
    }
    createCalendar(createOrModify) {
        var se = this;
        this.isaddCalendar = 1;
        let calOptions = se._calendar.getCalendarOptions();
        let strmess = `Mã đặt phòng: ` + se.code + `

Tên phòng: ` + this.nameroom +
            `

Khách hàng: ` + this.Roomif.hoten;
        strmess += `

`;
        strmess += "Quý khách nhớ mang theo giấy tờ tuỳ thân.";
        calOptions.firstReminderMinutes = 120;
        calOptions.calendarId = 1;
        let event = {
            title: se.booking.HotelName,
            location: "",
            message: strmess,
            startDate: se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00",
            endDate: se.booking.CheckInDate + "T" + se.booking.CheckoutTime + ":00",
            calOptions
        };
        se._calendar.hasReadWritePermission().then((allow) => {
            let sdate = new Date(event.startDate), edate = new Date(event.endDate);
            if (allow) {
                if (createOrModify) {
                    se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                        se._calendar.openCalendar(new Date(se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00")).then(() => {
                        });
                    });
                }
                se.navCtrl.navigateBack(['/app/tabs/tab3']);
            }
            else {
                se._calendar.requestReadWritePermission().then(() => {
                    if (createOrModify) {
                        se._calendar.createEventWithOptions(event.title, event.location, event.message, sdate, edate, event.calOptions).then(() => {
                            se._calendar.openCalendar(new Date(se.booking.CheckInDate + "T" + se.booking.CheckinTime + ":00")).then(() => {
                            });
                        });
                    }
                    else {
                    }
                });
            }
        });
    }
};
InstallmentpaymentdonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-installmentpaymentdone',
        template: __webpack_require__(/*! ./installmentpaymentdone.page.html */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.html"),
        styles: [__webpack_require__(/*! ./installmentpaymentdone.page.scss */ "./src/app/installmentpaymentdone/installmentpaymentdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_globalfunction__WEBPACK_IMPORTED_MODULE_2__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["Booking"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_5__["Calendar"], _providers_book_service__WEBPACK_IMPORTED_MODULE_4__["RoomInfo"]])
], InstallmentpaymentdonePage);



/***/ })

}]);
//# sourceMappingURL=installmentpaymentdone-installmentpaymentdone-module.js.map