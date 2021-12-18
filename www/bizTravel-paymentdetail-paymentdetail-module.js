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

module.exports = "<ion-header class=\"biztravel-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Chi tiết thanh toán</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n\n  <ion-content>\n      <div class=\"div-paymentdetail-content\">\n        <div >\n            <div class=\"div-transaction-history d-flex\">\n              <div class=\"div-button-item m-r-12 btn-active btn-all\" (click)=\"filterItem(0)\">Tất cả</div>\n              <div class=\"div-button-item m-r-12 btn-in\"  (click)=\"filterItem(1)\">Tiền vào</div>\n              <div class=\"div-button-item btn-out\"  (click)=\"filterItem(2)\">Tiền ra</div>\n            </div>\n        \n            <div class=\"div-transaction-history-list\" *ngIf=\"(bizTravelService.actionHistory && bizTravelService.actionHistory.length >0) else emptyTrans\">\n              <div *ngFor=\"let itemTransaction of bizTravelService.actionHistory; let idx = index\">\n                  <div [ngClass]=\"idx % 2 == 0 ? 'div-item-transaction m-t-12' : 'div-item-transaction cls-even m-t-12' \" *ngIf=\"typeSearch == 0 || ((typeSearch == 1 && itemTransaction.actionType == 1) || (typeSearch ==2 && itemTransaction.actionType == 2))\">\n                    <div class=\"d-flex \">\n                      <div class=\"cls-text div-width-100\">{{ itemTransaction.BookingDateDisplay }}</div>\n                      <div class=\"cls-text cls-bold div-width-100 text-right\"><span *ngIf=\"itemTransaction.actionType == 1\">+</span>{{ gf.numberToCurrency(itemTransaction.value, '.') }}</div>\n                    </div>\n      \n                    <div class=\"d-flex \">\n                      <div class=\"div-width-100\">\n                        <div class=\"cls-text-sub m-top-3\">{{ itemTransaction.BookingHourDisplay }}</div>\n                        <div class=\"cls-text f-12 m-top-1\">{{ itemTransaction.note }}</div>\n                      </div>\n                      \n                      <div class=\"cls-text-sub div-width-100 text-right\">{{ itemTransaction.referenceId}}</div>\n                    </div>\n      \n                  \n                  </div>\n              </div>\n              <div *ngIf=\"emptyCredit && typeSearch == 1\" class=\"div-empty-tran\">\n                <div class=\"img-trip-empty\">\n                  <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                </div>\n                <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n              </div>\n\n              <div *ngIf=\"emptyDedit && typeSearch == 2\" class=\"div-empty-tran\">\n                <div class=\"img-trip-empty\">\n                  <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                </div>\n                <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n              </div>\n\n              <ion-infinite-scroll (ionInfinite)=\"loadMorePage($event)\">\n                <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Đang xử lý...\">\n                </ion-infinite-scroll-content>\n              </ion-infinite-scroll>\n            </div>\n            <ng-template #emptyTrans>\n                <div class=\"div-empty-tran\" *ngIf=\"loadDataDone\">\n                    <div class=\"img-trip-empty\">\n                        <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n                    </div>\n                    <div class=\"cls-text-sub\">Quý khách chưa thực hiện giao dịch nào</div>\n                    <div class=\"cls-text\">Bắt đầu sử dụng dịch vụ iVIVU ngay hôm nay</div>\n                </div>\n\n                <div class=\"div-loading-content\" *ngIf=\"!loadDataDone\">\n                  <ion-row *ngFor=\"let item of itemskeleton\">\n                      <ion-row class=\"cls-border-bottom\" style=\"width:100%\">\n                              <ion-item style=\"--padding-start:0;--background: transparent;--border-style:none;--padding-end:0;width:100%\">\n                                <ion-row style=\"width:100%\">\n                                      <ion-col size=\"12\" style=\"padding: 0\">\n                                        <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                        <div><ion-skeleton-text animated style=\"width:100%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                        <div><ion-skeleton-text animated style=\"width:25%;margin-top: 8px;height: 16px;\"></ion-skeleton-text></div>\n                                    </ion-col>\n                                </ion-row>\n                              </ion-item>\n                    </ion-row>\n                  </ion-row>\n                </div>\n              </ng-template>\n          </div>\n\n         \n          \n      </div>\n  </ion-content>"

/***/ }),

/***/ "./src/app/bizTravel/paymentdetail/paymentdetail.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/bizTravel/paymentdetail/paymentdetail.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-top-3 {\n  margin-top: 3px;\n}\n\n.m-top-1 {\n  margin-top: 1px;\n}\n\n.div-paymentdetail-content {\n  padding: 16px;\n  padding-top: 0;\n}\n\n.div-paymentdetail-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 0px -16px;\n  line-height: 1.4;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px 4px 0px;\n  padding: 8px;\n}\n\n.div-paymentdetail-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-paymentdetail-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-paymentdetail-content .text-right {\n  text-align: right;\n}\n\n.div-paymentdetail-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-paymentdetail-content .div-transaction-history-list {\n  margin: 0 -8px;\n  overflow: scroll;\n}\n\n.div-paymentdetail-content .div-empty-tran {\n  text-align: center;\n}\n\n.div-paymentdetail-content .div-empty-tran .img-trip-empty {\n  text-align: center;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text {\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: center;\n  color: #333;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text-sub {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: center;\n  color: #828282;\n}\n\n.div-paymentdetail-content .div-loading-content .cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvYml6VHJhdmVsL3BheW1lbnRkZXRhaWwvcGF5bWVudGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JpelRyYXZlbC9wYXltZW50ZGV0YWlsL3BheW1lbnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNJSjs7QURGSTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNJUjs7QURGUTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0lWOztBRERRO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNHVjs7QURHSTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDRE47O0FER007RUFDQSxvQ0FBQTtBQ0ROOztBRElJO0VBQ0UsMkJBQUE7QUNGTjs7QURLRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0hOOztBREtFO0VBQ0ksaUJBQUE7QUNITjs7QURLRTtFQUNJLDBCQUFBO0FDSE47O0FETUU7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNKTjs7QURPRTtFQUNJLGtCQUFBO0FDTE47O0FET007RUFFTSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOWjs7QURRUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNOWjs7QURTUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDUFo7O0FEWUk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtBQ1ZSIiwiZmlsZSI6InNyYy9hcHAvYml6VHJhdmVsL3BheW1lbnRkZXRhaWwvcGF5bWVudGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLm0tdG9wLTN7XG4gICAgbWFyZ2luLXRvcDogM3B4O1xufVxuLm0tdG9wLTF7XG4gICAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgcGFkZGluZy10b3A6IDA7XG5cbiAgICAuZGl2LXRyYW5zYWN0aW9uLWhpc3Rvcnl7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IC0xNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgICAgIC5kaXYtYnV0dG9uLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbjogMCAxM3B4IDFweCAwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdi1idXR0b24taXRlbS5idG4tYWN0aXZlIHtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIC5kaXYtaXRlbS10cmFuc2FjdGlvbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBtYXJnaW46IDhweCAwcHggNHB4IDBweDtcbiAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cbiAgICAgIC5jbHMtZXZlbntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmMgIWltcG9ydGFudDtcbiAgICAgIFxuICAgICAgfVxuICAgIC5jbHMtYm9sZHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5jbHMtdGV4dC1zdWJ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiAjODY4OTk4O1xuICB9XG4gIC50ZXh0LXJpZ2h0e1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbiAgLmYtMTJ7XG4gICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeS1saXN0e1xuICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG5cbiAgLmRpdi1lbXB0eS10cmFue1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuaW1nLXRyaXAtZW1wdHlcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNscy10ZXh0e1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xzLXRleHQtc3Vie1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgfVxuICB9XG5cbiAgLmRpdi1sb2FkaW5nLWNvbnRlbnR7XG4gICAgLmNscy1ib3JkZXItYm90dG9te1xuICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICAgICAgbWFyZ2luOiAwIDE2cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIwMSwgMjAxLCAyMDEsIDAuNSk7XG4gICAgICB9XG4gIH1cbiAgXG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tLXRvcC0zIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4ubS10b3AtMSB7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cblxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMHB4IC0xNnB4O1xuICBsaW5lLWhlaWdodDogMS40O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IC5kaXYtYnV0dG9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMTNweCAxcHggMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSAuZGl2LWJ1dHRvbi1pdGVtLmJ0bi1hY3RpdmUge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1pdGVtLXRyYW5zYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiA4cHggMHB4IDRweCAwcHg7XG4gIHBhZGRpbmc6IDhweDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5jbHMtZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmMgIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5jbHMtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5jbHMtdGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnktbGlzdCB7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1lbXB0eS10cmFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1lbXB0eS10cmFuIC5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtZW1wdHktdHJhbiAuY2xzLXRleHQge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWVtcHR5LXRyYW4gLmNscy10ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtbG9hZGluZy1jb250ZW50IC5jbHMtYm9yZGVyLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDEycHggMHB4O1xuICBtYXJnaW46IDAgMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHJnYmEoMjAxLCAyMDEsIDIwMSwgMC41KTtcbn0iXX0= */"

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
        this.pageSize = 25;
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
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetBizTransactions?type=0&pageIndex=' + this.pageIndex + '&pageSize=' + this.pageSize, headers, {}, 'companyinfo', 'GetBizTransactions').then((data) => {
                    this.loadDataDone = true;
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