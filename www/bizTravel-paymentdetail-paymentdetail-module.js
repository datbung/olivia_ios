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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-top-3 {\n  margin-top: 3px;\n}\n\n.m-top-1 {\n  margin-top: 1px;\n}\n\n.div-button-refresh {\n  display: flex;\n  position: absolute;\n  right: 16px;\n  top: 18px;\n}\n\n.div-paymentdetail-content {\n  padding: 16px;\n  padding-top: 0;\n}\n\n.div-paymentdetail-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 0px -16px;\n  line-height: 1.4;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-paymentdetail-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px 4px 0px;\n  padding: 8px;\n}\n\n.div-paymentdetail-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-paymentdetail-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-paymentdetail-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-paymentdetail-content .text-right {\n  text-align: right;\n}\n\n.div-paymentdetail-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-paymentdetail-content .div-transaction-history-list {\n  margin: 0 -8px;\n  overflow: scroll;\n}\n\n.div-paymentdetail-content .div-empty-tran {\n  text-align: center;\n}\n\n.div-paymentdetail-content .div-empty-tran .img-trip-empty {\n  text-align: center;\n  margin-top: 32px;\n  margin-bottom: 16px;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text {\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  text-align: center;\n  color: #333;\n}\n\n.div-paymentdetail-content .div-empty-tran .cls-text-sub {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: center;\n  color: #828282;\n}\n\n.div-paymentdetail-content .div-loading-content .cls-border-bottom {\n  padding: 12px 0px;\n  margin: 0 16px;\n  border-bottom: solid 1px rgba(201, 201, 201, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvYml6VHJhdmVsL3BheW1lbnRkZXRhaWwvcGF5bWVudGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JpelRyYXZlbC9wYXltZW50ZGV0YWlsL3BheW1lbnRkZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNJSjs7QURGQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FDS0o7O0FESEk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDS1I7O0FESFE7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNLVjs7QURGUTtFQUNFLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDSVY7O0FERUk7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQ0FOOztBREVNO0VBQ0Esb0NBQUE7QUNBTjs7QURHSTtFQUNFLDJCQUFBO0FDRE47O0FESUU7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNGTjs7QURJRTtFQUNJLGlCQUFBO0FDRk47O0FESUU7RUFDSSwwQkFBQTtBQ0ZOOztBREtFO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDSE47O0FETUU7RUFDSSxrQkFBQTtBQ0pOOztBRE1NO0VBRU0sa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDTFo7O0FET1E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDTFo7O0FEUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ05aOztBRFdJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2JpelRyYXZlbC9wYXltZW50ZGV0YWlsL3BheW1lbnRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tLXRvcC0ze1xuICAgIG1hcmdpbi10b3A6IDNweDtcbn1cbi5tLXRvcC0xe1xuICAgIG1hcmdpbi10b3A6IDFweDtcbn1cbi5kaXYtYnV0dG9uLXJlZnJlc2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHRvcDogMThweDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5e1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBtYXJnaW46IDBweCAtMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICAgICAgICAuZGl2LWJ1dHRvbi1pdGVtIHtcbiAgICAgICAgICBtYXJnaW46IDAgMTNweCAxcHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXYtYnV0dG9uLWl0ZW0uYnRuLWFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICAuZGl2LWl0ZW0tdHJhbnNhY3Rpb257XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgbWFyZ2luOiA4cHggMHB4IDRweCAwcHg7XG4gICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICAuY2xzLWV2ZW57XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjICFpbXBvcnRhbnQ7XG4gICAgICBcbiAgICAgIH1cbiAgICAuY2xzLWJvbGR7XG4gICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuY2xzLXRleHQtc3Vie1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBjb2xvcjogIzg2ODk5ODtcbiAgfVxuICAudGV4dC1yaWdodHtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC5mLTEye1xuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnktbGlzdHtcbiAgICAgIG1hcmdpbjogMCAtOHB4O1xuICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuXG4gIC5kaXYtZW1wdHktdHJhbntcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmltZy10cmlwLWVtcHR5XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5jbHMtdGV4dHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNscy10ZXh0LXN1YntcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIH1cbiAgfVxuXG4gIC5kaXYtbG9hZGluZy1jb250ZW50e1xuICAgIC5jbHMtYm9yZGVyLWJvdHRvbXtcbiAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggcmdiYSgyMDEsIDIwMSwgMjAxLCAwLjUpO1xuICAgICAgfVxuICB9XG4gIFxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubS10b3AtMyB7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cblxuLm0tdG9wLTEge1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG5cbi5kaXYtYnV0dG9uLXJlZnJlc2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNnB4O1xuICB0b3A6IDE4cHg7XG59XG5cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3Rvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDBweCAtMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSAuZGl2LWJ1dHRvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIDEzcHggMXB4IDA7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnkgLmRpdi1idXR0b24taXRlbS5idG4tYWN0aXZlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtaXRlbS10cmFuc2FjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogOHB4IDBweCA0cHggMHB4O1xuICBwYWRkaW5nOiA4cHg7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuY2xzLWV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjICFpbXBvcnRhbnQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuY2xzLWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuY2xzLXRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzg2ODk5ODtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZi0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5LWxpc3Qge1xuICBtYXJnaW46IDAgLThweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtZW1wdHktdHJhbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5kaXYtcGF5bWVudGRldGFpbC1jb250ZW50IC5kaXYtZW1wdHktdHJhbiAuaW1nLXRyaXAtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDMycHg7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWVtcHR5LXRyYW4gLmNscy10ZXh0IHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi1wYXltZW50ZGV0YWlsLWNvbnRlbnQgLmRpdi1lbXB0eS10cmFuIC5jbHMtdGV4dC1zdWIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LXBheW1lbnRkZXRhaWwtY29udGVudCAuZGl2LWxvYWRpbmctY29udGVudCAuY2xzLWJvcmRlci1ib3R0b20ge1xuICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDIwMSwgMjAxLCAyMDEsIDAuNSk7XG59Il19 */"

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