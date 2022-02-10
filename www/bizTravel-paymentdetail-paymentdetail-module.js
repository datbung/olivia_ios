(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bizTravel-paymentdetail-paymentdetail-module"],{

/***/ "./src/app/bizTravel/paymentdetail/paymentdetail.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/bizTravel/paymentdetail/paymentdetail.module.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPageModule", function() { return PaymentDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paymentdetail.page */ "./src/app/bizTravel/paymentdetail/paymentdetail.page.ts");







const routes = [
    {
        path: '',
        component: _paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailPage"]
    }
];
let PaymentDetailPageModule = class PaymentDetailPageModule {
};
PaymentDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_paymentdetail_page__WEBPACK_IMPORTED_MODULE_6__["PaymentDetailPage"]]
    })
], PaymentDetailPageModule);



/***/ }),

/***/ "./src/app/bizTravel/paymentdetail/paymentdetail.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/bizTravel/paymentdetail/paymentdetail.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"biztravel-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Chi tiết thanh toán</div>\n          </div>\n\n          <div class=\"div-button-refresh\" (click)=\"refresh()\"><img class=\"img-refresh\" src=\"./assets/imgs/refresh.svg\" ></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"div-paymentdetail-content\">\n        <div >\n            <div class=\"div-transaction-history d-flex\">\n              <div class=\"div-button-item m-r-12 btn-active btn-all\" (click)=\"filterItem(0)\">Tất cả</div>\n              <div class=\"div-button-item m-r-12 btn-in\"  (click)=\"filterItem(1)\">Tiền vào</div>\n              <div class=\"div-button-item btn-out\"  (click)=\"filterItem(2)\">Tiền ra</div>\n              \n            </div>\n        \n            <div class=\"div-transaction-history-list\" *ngIf=\"(bizTravelService.actionHistory && bizTravelService.actionHistory.length >0) else emptyTrans\">\n              <div *ngFor=\"let itemTransaction of bizTravelService.actionHistory; let idx = index\">\n                  <div [ngClass]=\"idx % 2 == 0 ? 'div-item-transaction m-t-12' : 'div-item-transaction cls-even m-t-12' \" *ngIf=\"typeSearch == 0 || ((typeSearch == 1 && itemTransaction.actionType == 1) || (typeSearch ==2 && itemTransaction.actionType == 2))\">\n                    <div class=\"d-flex \">\n                      <div class=\"cls-text div-width-100\">{{ itemTransaction.BookingDateDisplay }}</div>\n                      <div class=\"cls-text cls-bold div-width-100 text-right\"><span *ngIf=\"itemTransaction.actionType == 1\">+</span>{{ gf.numberToCurrency(itemTransaction.value, '.') }}</div>\n                    </div>\n      \n                    <div class=\"d-flex \">\n                      <div class=\"div-width-100\">\n                        <div class=\"cls-text-sub m-top-3\">{{ itemTransaction.BookingHourDisplay }}</div>\n                        <div class=\"cls-text f-12 m-top-1\">{{ itemTransaction.note }}</div>\n                      </div>\n                      \n                      <div class=\"cls-text-sub div-width-100 text-right\">{{ itemTransaction.referenceId}}</div>\n                    </div>\n      \n                  \n                  </div>\n              </div>\n              <div *ngIf=\"emptyCredit && typeSearch == 1\" class=\"div-empty-tran\">\n                <div class=\"img-trip-empty\">\n                  <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                </div>\n                <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n              </div>\n\n              <div *ngIf=\"emptyDedit && typeSearch == 2\" class=\"div-empty-tran\">\n                <div class=\"img-trip-empty\">\n                  <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                </div>\n                <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n              </div>\n\n              <ion-infinite-scroll (ionInfinite)=\"loadMorePage($event)\">\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang xử lý...\">\n                </ion-infinite-scroll-content>\n              </ion-infinite-scroll>\n            </div>\n            <ng-template #emptyTrans>\n                <div class=\"div-empty-tran\" *ngIf=\"loadDataDone\">\n                    <div class=\"img-trip-empty\">\n                        <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                    </div>\n                    <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                    <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n                </div>\n\n                <div class=\"div-loading-content\" *ngIf=\"!loadDataDone\">\n                  <ion-row *ngFor=\"let item of itemskeleton\">\n                      <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\n                              <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--padding-end:0;width:100%\">\n                                <ion-row style=\"width:100%\">\n                                      <ion-col size=\"12\" style=\"padding: 0\">\n                                        <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                        <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                        <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                    </ion-col>\n                                </ion-row>\n                              </ion-item>\n                    </ion-row>\n                  </ion-row>\n                </div>\n              </ng-template>\n          </div>\n\n         \n          \n      </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/bizTravel/paymentdetail/paymentdetail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/bizTravel/paymentdetail/paymentdetail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-top-3 {\n  margin-top: 3px;\n}\n\n.m-top-1 {\n  margin-top: 1px;\n}\n\n.div-button-refresh {\n  display: flex;\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.div-paymentdetail-content {\n  padding: 16px;\n  padding-top: 0;\n}\n\n.div-paymentdetail-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 0px -16px;\n  line-height: 1.4;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px 4px 0px;\n  padding: 8px;\n}\n\n.div-paymentdetail-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-paymentdetail-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-paymentdetail-content .text-right {\n  text-align: right;\n}\n\n.div-paymentdetail-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-paymentdetail-content .div-transaction-history-list {\n  margin: 0 -8px;\n  overflow: scroll;\n}\n\n.div-paymentdetail-content .div-empty-tran {\n  text-align: center;\n}\n\n.div-paymentdetail-content .div-empty-tran .img-trip-empty {\n  text-align: center;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text {\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: center;\n  color: #333;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text-sub {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: center;\n  color: #828282;\n}\n\n.div-paymentdetail-content .div-loading-content .cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2JpelRyYXZlbC9wYXltZW50ZGV0YWlsL3BheW1lbnRkZXRhaWwucGFnZS5zY3NzIiwic3JjL2FwcC9iaXpUcmF2ZWwvcGF5bWVudGRldGFpbC9wYXltZW50ZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FDSUo7O0FERkE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQ0tKOztBREhJO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhRO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDS1Y7O0FERlE7RUFDRSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0lWOztBREVJO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNBTjs7QURFTTtFQUNBLG9DQUFBO0FDQU47O0FER0k7RUFDRSwyQkFBQTtBQ0ROOztBRElFO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRk47O0FESUU7RUFDSSxpQkFBQTtBQ0ZOOztBRElFO0VBQ0ksMEJBQUE7QUNGTjs7QURLRTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0hOOztBRE1FO0VBQ0ksa0JBQUE7QUNKTjs7QURNTTtFQUVNLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0xaOztBRE9RO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0xaOztBRFFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNOWjs7QURXSTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FDVFIiLCJmaWxlIjoic3JjL2FwcC9iaXpUcmF2ZWwvcGF5bWVudGRldGFpbC9wYXltZW50ZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubS10b3AtM3tcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG59XG4ubS10b3AtMXtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uZGl2LWJ1dHRvbi1yZWZyZXNoIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB0b3A6IDE4cHg7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwYWRkaW5nLXRvcDogMDtcblxuICAgIC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbWFyZ2luOiAwcHggLTE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG5cbiAgICAgICAgLmRpdi1idXR0b24taXRlbSB7XG4gICAgICAgICAgbWFyZ2luOiAwIDEzcHggMXB4IDA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2LWJ1dHRvbi1pdGVtLmJ0bi1hY3RpdmUge1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgLmRpdi1pdGVtLXRyYW5zYWN0aW9ue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIG1hcmdpbjogOHB4IDBweCA0cHggMHB4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgLmNscy1ldmVue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYyAhaW1wb3J0YW50O1xuICAgICAgXG4gICAgICB9XG4gICAgLmNscy1ib2xke1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNscy10ZXh0LXN1YntcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgY29sb3I6ICM4Njg5OTg7XG4gIH1cbiAgLnRleHQtcmlnaHR7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAuZi0xMntcbiAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5LWxpc3R7XG4gICAgICBtYXJnaW46IDAgLThweDtcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cblxuICAuZGl2LWVtcHR5LXRyYW57XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5pbWctdHJpcC1lbXB0eVxuICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgfVxuICAgICAgICAuY2xzLXRleHR7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jbHMtdGV4dC1zdWJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICB9XG4gIH1cblxuICAuZGl2LWxvYWRpbmctY29udGVudHtcbiAgICAuY2xzLWJvcmRlci1ib3R0b217XG4gICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgICAgICBtYXJnaW46IDAgMTZweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbiAgICAgIH1cbiAgfVxuICBcbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tdG9wLTMge1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5tLXRvcC0xIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4uZGl2LWJ1dHRvbi1yZWZyZXNoIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTZweDtcbiAgdG9wOiAxOHB4O1xufVxuXG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAwcHggLTE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnkgLmRpdi1idXR0b24taXRlbSB7XG4gIG1hcmdpbjogMCAxM3B4IDFweCAwO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IC5kaXYtYnV0dG9uLWl0ZW0uYnRuLWFjdGl2ZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWl0ZW0tdHJhbnNhY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDhweCAwcHggNHB4IDBweDtcbiAgcGFkZGluZzogOHB4O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmNscy1ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYyAhaW1wb3J0YW50O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmNscy1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmNscy10ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmYtMTIge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeS1saXN0IHtcbiAgbWFyZ2luOiAwIC04cHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWVtcHR5LXRyYW4ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWVtcHR5LXRyYW4gLmltZy10cmlwLWVtcHR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1lbXB0eS10cmFuIC5jbHMtdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMzMztcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtZW1wdHktdHJhbiAuY2xzLXRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1sb2FkaW5nLWNvbnRlbnQgLmNscy1ib3JkZXItYm90dG9tIHtcbiAgcGFkZGluZzogMTJweCAwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bizTravel/paymentdetail/paymentdetail.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/bizTravel/paymentdetail/paymentdetail.page.ts ***!
  \***************************************************************/
/*! exports provided: PaymentDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentDetailPage", function() { return PaymentDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");









let PaymentDetailPage = class PaymentDetailPage {
    constructor(navCtrl, bizTravelService, gf, storage, zone) {
        this.navCtrl = navCtrl;
        this.bizTravelService = bizTravelService;
        this.gf = gf;
        this.storage = storage;
        this.zone = zone;
        this.typeSearch = 0;
        this.showDetailTransaction = false;
        this.pageIndex = 1;
        this.pageSize = 50;
        this.loadDataDone = false;
        this.itemskeleton = [1, 2, 3, 4, 5, 6, 7, 8];
        this.bizTravelService.actionHistory = [];
        this.loadData();
    }
    ngOnInit() {
    }
    loadData() {
        this.storage.get('auth_token').then(auth_token => {
            var text = "Bearer " + auth_token;
            var headers = {
                'cache-control': 'no-cache',
                'content-type': 'application/json',
                authorization: text
            };
            if (auth_token && this.bizTravelService.bizAccount) {
                this.gf.showLoading();
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetBizTransactions?type=0&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize, headers, {}, 'companyinfo', 'GetBizTransactions').then((data) => {
                    this.loadDataDone = true;
                    this.gf.hideLoading();
                    if (data && data.length > 0) {
                        if (this.bizTravelService.actionHistory && this.bizTravelService.actionHistory.length > 0) {
                            this.bizTravelService.actionHistory = [...this.bizTravelService.actionHistory, ...data];
                        }
                        else {
                            this.bizTravelService.actionHistory = data;
                        }
                        if (this.bizTravelService.actionHistory && this.bizTravelService.actionHistory.length > 0) {
                            this.bizTravelService.actionHistory.forEach((e) => {
                                e.BookingDateDisplay = moment__WEBPACK_IMPORTED_MODULE_3__(e.created).format('DD-MM-YYYY');
                                e.BookingHourDisplay = moment__WEBPACK_IMPORTED_MODULE_3__(e.created).format('hh:mm:ss');
                            });
                            this.zone.run(() => this.bizTravelService.actionHistory.sort((a, b) => {
                                let direction = -1;
                                return moment__WEBPACK_IMPORTED_MODULE_3__(a['created']).diff(b['created']) * direction;
                            }));
                            this.emptyCredit = this.bizTravelService.actionHistory.some((cre) => { return cre.actionType == 1; }) ? false : true;
                            this.emptyDedit = this.bizTravelService.actionHistory.some((cre) => { return cre.actionType == 2; }) ? false : true;
                        }
                    }
                });
            }
        });
    }
    goback() {
        this.navCtrl.back();
    }
    showDetail() {
        this.showDetailTransaction = !this.showDetailTransaction;
    }
    filterItem(type) {
        this.typeSearch = type;
        if (type == 0) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-all').siblings().removeClass('btn-active');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-all').addClass('btn-active');
        }
        else if (type == 1) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-in').siblings().removeClass('btn-active');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-in').addClass('btn-active');
        }
        else if (type == 2) {
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-out').siblings().removeClass('btn-active');
            jquery__WEBPACK_IMPORTED_MODULE_4__('.btn-out').addClass('btn-active');
        }
    }
    loadMorePage(infiniteScroll) {
        this.zone.run(() => {
            this.pageIndex++;
            this.loadData();
            this._infiniteScroll = infiniteScroll;
            infiniteScroll.target.complete();
        });
    }
    refresh() {
        this.pageIndex = 1;
        this.loadDataDone = false;
        this.bizTravelService.actionHistory = [];
        this.loadData();
    }
};
PaymentDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paymentdetail',
        template: __webpack_require__(/*! ./paymentdetail.page.html */ "./src/app/bizTravel/paymentdetail/paymentdetail.page.html"),
        styles: [__webpack_require__(/*! ./paymentdetail.page.scss */ "./src/app/bizTravel/paymentdetail/paymentdetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_5__["BizTravelService"],
        src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], PaymentDetailPage);



/***/ }),

/***/ "./src/app/providers/bizTravelService.ts":
/*!***********************************************!*\
  !*** ./src/app/providers/bizTravelService.ts ***!
  \***********************************************/
/*! exports provided: BizTravelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BizTravelService", function() { return BizTravelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BizTravelService = class BizTravelService {
    constructor() {
        this.bizAccount = {
            taxCode: '',
            legalName: '',
            address: '',
            phone: '',
            balanceAvaiable: 0,
            balanceAvailableStr: '0',
            phoneOtp: '',
            supporter: null
        };
        this.accountBizTravelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ;
};
BizTravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BizTravelService);



/***/ })

}]);
//# sourceMappingURL=bizTravel-paymentdetail-paymentdetail-module.js.map