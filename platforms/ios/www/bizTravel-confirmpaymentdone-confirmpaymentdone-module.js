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

module.exports = ".btn-home {\n  background: #fff;\n  color: #ff9500;\n  border-color: #ff9500;\n  border: solid 1px #ff9500;\n  font-size: 16px !important;\n  margin: 8px 16px !important;\n  padding: 0;\n}\n\n.div-button-payment-done {\n  background-color: #ffffff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.div-button-payment-done .m-top-0 {\n  margin-top: 0 !important;\n}\n\n.d-flex {\n  display: flex;\n}\n\n.img-trip-empty {\n  text-align: center;\n  margin-top: 42px;\n  margin-bottom: 25px;\n}\n\n.text {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  line-height: 2;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.text-ivivu {\n  color: #26bed6;\n  padding-left: 10px;\n}\n\n.div-split-panel {\n  height: 6px;\n  background: #f2f2f2;\n  margin: 16px -16px;\n  padding: 0 16px;\n}\n\n.text-normal {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.text-bold {\n  font-size: 14px;\n  line-height: 1.5;\n  color: #333333;\n  font-weight: 600;\n  letter-spacing: -0.28px;\n}\n\n.text-see-more {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n  text-align: right;\n}\n\n.text {\n  font-size: 14px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #333333;\n}\n\n.text-bold {\n  font-weight: 600 !important;\n  letter-spacing: -0.28px !important;\n}\n\n.text-tealish {\n  color: #26bed6 !important;\n}\n\n.p-top-12 {\n  padding-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2JpelRyYXZlbC9jb25maXJtcGF5bWVudGRvbmUvY29uZmlybXBheW1lbnRkb25lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYml6VHJhdmVsL2NvbmZpcm1wYXltZW50ZG9uZS9jb25maXJtcGF5bWVudGRvbmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDRFI7O0FESUk7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0FDRlI7O0FESVE7RUFDSSx3QkFBQTtBQ0ZaOztBRE1BO0VBQ0ksYUFBQTtBQ0hKOztBREtBO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDSEo7O0FES0E7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRko7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREFBO0VBQ0ksMkJBQUE7RUFDQSxrQ0FBQTtBQ0dKOztBREFBO0VBQ0kseUJBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9iaXpUcmF2ZWwvY29uZmlybXBheW1lbnRkb25lL2NvbmZpcm1wYXltZW50ZG9uZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5idG4taG9tZVxyXG4gICAge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLm0tdG9wLTB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbi8vLy8vLy8vLy8vLy8vXHJcbi5kLWZsZXgge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaW1nLXRyaXAtZW1wdHlcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbn1cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLnRleHQtaXZpdnUge1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgICBtYXJnaW46IDE2cHggLTE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuLnRleHQtbm9ybWFse1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcclxufVxyXG4udGV4dC1zZWUtbW9yZXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxufVxyXG5cclxuLnRleHQtYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LXRlYWxpc2h7XHJcbiAgICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucC10b3AtMTJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxufSIsIi5idG4taG9tZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDhweCAxNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5kaXYtYnV0dG9uLXBheW1lbnQtZG9uZSAubS10b3AtMCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5pbWctdHJpcC1lbXB0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNDJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRleHQtaXZpdnUge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuXG4udGV4dC1ub3JtYWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzMzMzMzMztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG59XG5cbi50ZXh0LXNlZS1tb3JlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXRlYWxpc2gge1xuICBjb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xufVxuXG4ucC10b3AtMTIge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn0iXX0= */"

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