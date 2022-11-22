(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bizTravel-confirmpaymentdone-confirmpaymentdone-module"],{

/***/ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.module.ts ***!
  \***************************************************************************/
/*! exports provided: ConfirmPaymentDonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentDonePageModule", function() { return ConfirmPaymentDonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirmpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmpaymentdone.page */ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.ts");







const routes = [
    {
        path: '',
        component: _confirmpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPaymentDonePage"]
    }
];
let ConfirmPaymentDonePageModule = class ConfirmPaymentDonePageModule {
};
ConfirmPaymentDonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_confirmpaymentdone_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPaymentDonePage"]]
    })
], ConfirmPaymentDonePageModule);



/***/ }),

/***/ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-header class=\"biztravel-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <!-- <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div> -->\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Xác thực thanh toán</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content padding>\n<div style=\"text-align: center\">\n  <img  src=\"./assets/ic_flight/step_4.svg\">\n  </div>\n  <div class=\"img-trip-empty\">\n    <img class=\"img-empty\" src=\"./assets/empty/imgdone.svg\">\n</div>\n<div class=\"text\">\n  <div>\n    <ion-label class=\"text\">\n      Cảm ơn Quý khách đã sử dụng dịch vụ iVIVU.com\n    </ion-label>\n  </div>\n  <div>\n    <div class=\"p-top-12\">  \n      <ion-label class=\"text\">\n        Quý khách đã thanh toán <span class=\"text-bold\">{{totaldisplay}}đ</span> thành công cho đơn hàng <span class=\"text-bold text-tealish\">{{bookingCode}}</span>\n      </ion-label>\n    </div>\n    <!-- <div class=\"p-top-12\">\n      <ion-label class=\"text\" text-wrap>\n        Thông tin đơn hàng sẽ được gửi đến email <span class=\"text-tealish\">{{_email}}</span> trong vòng vài phút. Nếu không tìm thấy vui lòng kiểm tra trong hộp thư <span class=\"text-bold\">Spam</span> hoặc <span class=\"text-bold\">Junk Folder</span>\n      </ion-label>\n    </div> -->\n    \n    <div class=\"p-top-12\">\n      <ion-label class=\"text\" text-wrap>\n        Credit còn lại: <span class=\"text-bold\">{{gf.numberToCurrency(bizTravelService.bizAccount.balanceAvaiable, '.')}}đ</span>\n      </ion-label>\n    </div>\n\n  </div>\n</div>\n</ion-content>\n<ion-footer>\n<div class=\"div-button-payment-done\">\n  <button (click)=\"next()\" ion-button round outline class=\"button btn-home\">Quay về trang chủ</button>\n</div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-home {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  font-size: 16px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.text-ivivu {\n  color: #26bed6;\n  padding-left: 10px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  padding: 0 16px;\n}\n\n.text-normal {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #333333;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.text-see-more {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  text-align: right;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.text-bold {\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.text-tealish {\n  color: #26bed6 !important;\n}\n\n.p-top-12 {\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9iaXpUcmF2ZWwvY29uZmlybXBheW1lbnRkb25lL2NvbmZpcm1wYXltZW50ZG9uZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2JpelRyYXZlbC9jb25maXJtcGF5bWVudGRvbmUvY29uZmlybXBheW1lbnRkb25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0RSOztBRElJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQ0ZSOztBRElRO0VBQ0ksd0JBQUE7QUNGWjs7QURNQTtFQUNJLGFBQUE7QUNISjs7QURLQTtFQUVJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBREtBO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURHQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURBQTtFQUNJLDJCQUFBO0VBQ0Esa0NBQUE7QUNHSjs7QURBQTtFQUNJLHlCQUFBO0FDR0o7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvYml6VHJhdmVsL2NvbmZpcm1wYXltZW50ZG9uZS9jb25maXJtcGF5bWVudGRvbmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAuYnRuLWhvbWVcclxuICAgIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGl2LWJ1dHRvbi1wYXltZW50LWRvbmV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5tLXRvcC0we1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4vLy8vLy8vLy8vLy8vL1xyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmltZy10cmlwLWVtcHR5XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG59XHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi50ZXh0LWl2aXZ1IHtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGl2LXNwbGl0LXBhbmVse1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG59XHJcbi50ZXh0LW5vcm1hbHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XHJcbn1cclxuLnRleHQtc2VlLW1vcmV7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4udGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi50ZXh0LWJvbGR7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGV4dC10ZWFsaXNoe1xyXG4gICAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnAtdG9wLTEye1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbn0iLCIuYnRuLWhvbWUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uZGl2LWJ1dHRvbi1wYXltZW50LWRvbmUgLm0tdG9wLTAge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW1nLXRyaXAtZW1wdHkge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQycHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi50ZXh0LWl2aXZ1IHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cblxuLnRleHQtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMzMzMzMzM7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xufVxuXG4udGV4dC1zZWUtbW9yZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC10ZWFsaXNoIHtcbiAgY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbn1cblxuLnAtdG9wLTEyIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.ts ***!
  \*************************************************************************/
/*! exports provided: ConfirmPaymentDonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPaymentDonePage", function() { return ConfirmPaymentDonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/flightService */ "./src/app/providers/flightService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "./node_modules/@ionic-native/calendar/ngx/index.js");
/* harmony import */ var src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/launch-review/ngx */ "./node_modules/@ionic-native/launch-review/ngx/index.js");












let ConfirmPaymentDonePage = class ConfirmPaymentDonePage {
    constructor(activatedRoute, _flightService, navCtrl, searchhotel, storage, zone, valueGlobal, gf, modalCtrl, fb, _platform, _calendar, bizTravelService, bookCombo, roomInfo, activityService, alertCtrl, launchReview) {
        this.activatedRoute = activatedRoute;
        this._flightService = _flightService;
        this.navCtrl = navCtrl;
        this.searchhotel = searchhotel;
        this.storage = storage;
        this.zone = zone;
        this.valueGlobal = valueGlobal;
        this.gf = gf;
        this.modalCtrl = modalCtrl;
        this.fb = fb;
        this._platform = _platform;
        this._calendar = _calendar;
        this.bizTravelService = bizTravelService;
        this.bookCombo = bookCombo;
        this.roomInfo = roomInfo;
        this.activityService = activityService;
        this.alertCtrl = alertCtrl;
        this.launchReview = launchReview;
        this.code = "";
        this._email = "";
        this.stt = 1;
        this.pacificVNA = "";
        this.pacificVNAReturn = "";
        this.listDiChung = "";
        if (this.bizTravelService.paymentType == 1 && this._flightService.itemFlightCache && this._flightService.itemFlightCache.pnr) {
            this.total = this._flightService.itemFlightCache.totalPrice;
            this._email = this._flightService.itemFlightCache.email;
            this.bookingCode = this._flightService.itemFlightCache.pnr.bookingCode ? this._flightService.itemFlightCache.pnr.bookingCode : this._flightService.itemFlightCache.pnr.resNo;
            this.bookingFlight = this._flightService.itemFlightCache;
            this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this._flightService.itemFlightCache.totalPrice;
            this.totaldisplay = this.gf.convertNumberToString(this._flightService.itemFlightCache.totalPrice);
        }
        else if (this.bizTravelService.paymentType == 3) {
            this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.bookCombo.totalprice;
            this.total = this.bookCombo.totalprice;
            this.totaldisplay = this.gf.convertNumberToString(this.bookCombo.totalprice);
            this.bookingCode = this.bookCombo.bookingcode;
        }
        else if (this.bizTravelService.paymentType == 2) {
            if (roomInfo.priceshow) {
                this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.gf.convertStringToNumber(this.roomInfo.priceshow);
                this.totaldisplay = this.gf.convertNumberToString(roomInfo.priceshow);
                this.total = this.roomInfo.priceshow;
            }
            else {
                this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.gf.convertStringToNumber(roomInfo.roomtype.PriceAvgPlusTAStr);
                this.totaldisplay = this.gf.convertNumberToString(roomInfo.roomtype.PriceAvgPlusTAStr);
                this.total = roomInfo.roomtype.PriceAvgPlusTAStr;
            }
            this.bookingCode = this.roomInfo.bookingCode;
        }
        else if (this.bizTravelService.paymentType == 4) {
            this.total = this.activityService.objPaymentMytrip.trip.priceShow.toString().replace(/\./g, '').replace(/\,/g, '');
            this.bizTravelService.bizAccount.balanceAvaiable = this.bizTravelService.bizAccount.balanceAvaiable - this.total;
            this.totaldisplay = this.activityService.objPaymentMytrip.trip.priceShow;
            this.bookingCode = this.bizTravelService.mytripPaymentBookingCode;
        }
        this.storage.get('checkreview').then(checkreview => {
            if (checkreview == 0) {
                this.checkreview = 0;
            }
            else {
                this.checkreview = checkreview;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    next() {
        if (this.checkreview == 0) {
            this.showConfirm();
        }
        this.gf.hideLoading();
        this.clearItemCache();
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    showBooking() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            if (this.checkreview == 0) {
                this.showConfirm();
            }
            se.clearItemCache();
            se.navCtrl.navigateBack('/tabs/tab1');
        });
    }
    clearItemCache() {
        this._flightService.itemFlightCache = {};
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.jsonSeats = null;
        this._flightService.itemFlightCache.listdepartseatselected = "";
        this._flightService.itemFlightCache.listreturnseatselected = "";
        this._flightService.itemFlightCache.departLuggage = [];
        this._flightService.itemFlightCache.returnLuggage = [];
        this._flightService.itemFlightCache.hasChoiceLuggage = false;
        this._flightService.itemFlightCache.listSeatNormal = [];
        this._flightService.itemFlightCache.listReturnSeatNormal = [];
        this._flightService.itemFlightCache.departConditionInfo = null;
        this._flightService.itemFlightCache.returnConditionInfo = null;
        this._flightService.itemFlightCache.isnewmodelseat = false;
        this._flightService.itemFlightCache.isnewmodelreturnseat = false;
    }
    showConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.storage.set("checkreview", 1);
            let alert = yield this.alertCtrl.create({
                header: 'Bạn thích iVIVU.com?',
                message: 'Đánh giá ứng dụng trên App Store',
                mode: "ios",
                cssClass: 'cls-reivewapp',
                buttons: [
                    {
                        text: 'Hủy',
                        handler: () => {
                        }
                    },
                    {
                        text: 'Đánh giá',
                        role: 'OK',
                        handler: () => {
                            this.launchReview.launch()
                                .then(() => console.log('Successfully launched store app'));
                        }
                    }
                ]
            });
            alert.present();
            alert.onDidDismiss().then((data) => {
            });
        });
    }
};
ConfirmPaymentDonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-confirmpaymentdone',
        template: __webpack_require__(/*! ./confirmpaymentdone.page.html */ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.html"),
        styles: [__webpack_require__(/*! ./confirmpaymentdone.page.scss */ "./src/app/bizTravel/confirmpaymentdone/confirmpaymentdone.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _providers_flightService__WEBPACK_IMPORTED_MODULE_6__["flightService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["SearchHotel"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_9__["Calendar"],
        src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_10__["BizTravelService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"], _ionic_native_launch_review_ngx__WEBPACK_IMPORTED_MODULE_11__["LaunchReview"]])
], ConfirmPaymentDonePage);



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
//# sourceMappingURL=bizTravel-confirmpaymentdone-confirmpaymentdone-module.js.map