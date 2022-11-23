(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bizTravel-companyinfo-companyinfo-module"],{

/***/ "./src/app/bizTravel/companyinfo/companyinfo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/bizTravel/companyinfo/companyinfo.module.ts ***!
  \*************************************************************/
/*! exports provided: CompanyinfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyinfoPageModule", function() { return CompanyinfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _companyinfo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companyinfo.page */ "./src/app/bizTravel/companyinfo/companyinfo.page.ts");







const routes = [
    {
        path: '',
        component: _companyinfo_page__WEBPACK_IMPORTED_MODULE_6__["CompanyinfoPage"]
    }
];
let CompanyinfoPageModule = class CompanyinfoPageModule {
};
CompanyinfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_companyinfo_page__WEBPACK_IMPORTED_MODULE_6__["CompanyinfoPage"]]
    })
], CompanyinfoPageModule);



/***/ }),

/***/ "./src/app/bizTravel/companyinfo/companyinfo.page.html":
/*!*************************************************************!*\
  !*** ./src/app/bizTravel/companyinfo/companyinfo.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"biztravel-header\">\n  <ion-row>\n    <ion-col class=\"col-header\">\n      <div class=\"d-flex\">\n        <div class=\"div-goback\" (click)=\"goback()\">\n            <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n        </div>\n        <div class=\"div-header-title\">\n          <div class=\"div-title\">Thông tin công ty</div>\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-header>\n\n<ion-content class=\"content-background\">\n  <div class=\"div-company-info-content\">\n    <div class=\"div-change-info d-flex\">\n        <div class=\"div-icon\">\n          <span><img class=\"img-info\" src=\"./assets/ic_biztravel/info.svg\" > <span class=\"text-info\">Quý khách có nhu cầu muốn thay đổi thông tin, vui lòng liên lạc với đại diện chăm sóc khách hàng của iVIVU</span> </span>\n        </div>\n    </div>\n\n    <div class=\"cls-label m-t-12\">Mã số thuế</div>\n    <div class=\"cls-text m-t-6\">{{ bizTravelService.bizAccount.taxCode }}</div>\n\n    <div class=\"cls-label m-t-12\">Tên công ty</div>\n    <div class=\"cls-text m-t-6\">{{ bizTravelService.bizAccount.legalName }}</div>\n\n    <div class=\"cls-label m-t-12\">Địa chỉ công ty</div>\n    <div class=\"cls-text m-t-6\">{{ bizTravelService.bizAccount.address }}</div>\n\n    <div class=\"div-split-panel\"></div>\n\n    <div class=\"cls-label m-t-12\">Số điện thoại nhập mã OTP</div>\n    <div class=\"cls-text m-t-6\">{{ bizTravelService.bizAccount.phone }}</div>\n\n    <div class=\"div-split-panel\"></div>\n\n    \n    <div class=\"d-flex m-t-12\">\n      <div class=\"div-balance div-width-100\">\n        <div class=\"cls-label\">Số dư khả dụng</div>\n        <div class=\"cls-text m-t-6 div-total-balance\">{{ gf.numberToCurrency(bizTravelService.bizAccount.balanceAvaiable, '.')  }} VND</div>\n      </div>\n      \n    </div>\n\n    \n    \n  </div>\n</ion-content>\n<ion-footer>\n  <div class=\"div-button d-flex div-width-100\">\n    <button (click)=\"showDetail()\" ion-button round outline class=\"button button-detail\">Chi tiết</button>\n    <button (click)=\"topup()\" ion-button round outline class=\"button button-purchase\">Nạp tiền</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/bizTravel/companyinfo/companyinfo.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/bizTravel/companyinfo/companyinfo.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-t-12 {\n  margin-top: 12px;\n}\n\n.m-t-6 {\n  margin-top: 6px;\n}\n\n.m-t-8 {\n  margin-top: 8px;\n}\n\n.m-r-12 {\n  margin-right: 12px;\n}\n\n.content-background {\n  --background: #f9fbfc;\n}\n\n.button-detail {\n  background: #ffffff;\n  color: #f59233;\n  border: solid 1px #f59233;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px 8px 8px 16px;\n}\n\n.button-purchase {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.6px;\n  padding: 0;\n  margin: 8px 16px 8px 0px;\n}\n\n.div-company-info-content {\n  padding: 16px;\n  background: #fff;\n}\n\n.div-company-info-content .div-split-panel {\n  height: 8px;\n  margin: 16px -16px;\n  background-color: #f9fbfc;\n}\n\n.div-company-info-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-change-info {\n  margin: 0 -8px;\n  padding: 4px 8px;\n  background-color: #f9fbfc;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .cls-label {\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  color: #828282;\n}\n\n.div-company-info-content .cls-text {\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-total-balance {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-balance {\n  margin-right: 8px;\n}\n\n.div-company-info-content .div-width-100 {\n  width: 100%;\n}\n\n.div-company-info-content .div-button {\n  text-align: right;\n}\n\n.div-company-info-content .img-info {\n  width: 16px;\n  max-width: initial !important;\n  margin-right: 6px;\n  position: absolute;\n  margin-top: 1px;\n}\n\n.div-company-info-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 16px -16px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px;\n  padding: 8px 8px 9px;\n}\n\n.div-company-info-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-company-info-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .text-right {\n  text-align: right;\n}\n\n.div-company-info-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-company-info-content .div-transaction-history-list {\n  margin: 0 -8px;\n  height: 290px;\n  overflow: scroll;\n}\n\n.div-company-info-content .text-info {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9iaXpUcmF2ZWwvY29tcGFueWluZm8vY29tcGFueWluZm8ucGFnZS5zY3NzIiwic3JjL2FwcC9iaXpUcmF2ZWwvY29tcGFueWluZm8vY29tcGFueWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtBQ0FKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNJLGVBQUE7QUNHSjs7QUREQTtFQUNJLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxxQkFBQTtBQ0tKOztBREZBO0VBRVEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDSVI7O0FERk07RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0FDSVI7O0FEQ0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDRVI7O0FEQUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0VSOztBRENJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNBUjs7QURHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRlI7O0FES0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0hSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURNSTtFQUNJLFdBQUE7QUNKUjs7QURNSTtFQUNJLGlCQUFBO0FDSlI7O0FETUk7RUFDSSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0pSOztBRFFNO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNOVjs7QURRVTtFQUNFLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ05aOztBRFNVO0VBQ0Usb0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNQWjs7QURhTTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDWFI7O0FEYVE7RUFDQSxvQ0FBQTtBQ1hSOztBRGNNO0VBQ0UsMkJBQUE7QUNaUjs7QURlSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ2JSOztBRGVJO0VBQ0ksaUJBQUE7QUNiUjs7QURlSTtFQUNJLDBCQUFBO0FDYlI7O0FEZ0JJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2RSOztBRGlCSTtFQUNJLGtCQUFBO0FDZlIiLCJmaWxlIjoic3JjL2FwcC9iaXpUcmF2ZWwvY29tcGFueWluZm8vY29tcGFueWluZm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZC1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLm0tdC0xMiB7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbn1cbi5tLXQtNiB7XG4gICAgbWFyZ2luLXRvcDogNnB4O1xufVxuLm0tdC04IHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubS1yLTEye1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5jb250ZW50LWJhY2tncm91bmQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y5ZmJmYztcbn1cblxuLmJ1dHRvbi1kZXRhaWxcbiAgICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBtYXJnaW46IDhweCA4cHggOHB4IDE2cHg7XG4gICAgICB9IFxuICAgICAgLmJ1dHRvbi1wdXJjaGFzZVxuICAgICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjU5MjMzO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHggOHB4IDBweDtcbiAgICAgICAgICBcbiAgICAgIH0gXG5cblxuLmRpdi1jb21wYW55LWluZm8tY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgICAuZGl2LXNwbGl0LXBhbmVsIHtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgICB9XG4gICAgLmRpdi10aXRsZXtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAuZGl2LWNoYW5nZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gICAgICAgIFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjODY4OTk4O1xuICAgIH1cblxuICAgIC5jbHMtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cblxuICAgIC5jbHMtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi10b3RhbC1iYWxhbmNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAuZGl2LWJhbGFuY2V7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cbiAgICAuZGl2LXdpZHRoLTEwMCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAuZGl2LWJ1dHRvbntcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5pbWctaW5mb3tcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7XG4gICAgfVxuXG4gICAgXG4gICAgICAuZGl2LXRyYW5zYWN0aW9uLWhpc3Rvcnl7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMTZweCAtMTZweDtcblxuICAgICAgICAgIC5kaXYtYnV0dG9uLWl0ZW0ge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDEzcHggMXB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRpdi1idXR0b24taXRlbS5idG4tYWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICB9XG5cbiAgICAgIC5kaXYtaXRlbS10cmFuc2FjdGlvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDlweDtcbiAgICAgICAgfVxuICAgICAgICAuY2xzLWV2ZW57XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmMgIWltcG9ydGFudDtcbiAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIC5jbHMtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5jbHMtdGV4dC1zdWJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM4Njg5OTg7XG4gICAgfVxuICAgIC50ZXh0LXJpZ2h0e1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLmYtMTJ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeS1saXN0e1xuICAgICAgICBtYXJnaW46IDAgLThweDtcbiAgICAgICAgaGVpZ2h0OiAyOTBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB9XG5cbiAgICAudGV4dC1pbmZve1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubS10LTEyIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLm0tdC02IHtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ubS10LTgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tLXItMTIge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5jb250ZW50LWJhY2tncm91bmQge1xuICAtLWJhY2tncm91bmQ6ICNmOWZiZmM7XG59XG5cbi5idXR0b24tZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmNTkyMzM7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmNTkyMzM7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDhweCA4cHggOHB4IDE2cHg7XG59XG5cbi5idXR0b24tcHVyY2hhc2Uge1xuICBiYWNrZ3JvdW5kOiAjZjU5MjMzO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZjU5MjMzO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogOHB4IDE2cHggOHB4IDBweDtcbn1cblxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDhweDtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMztcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi1jaGFuZ2UtaW5mbyB7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuY2xzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmNscy10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMztcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10b3RhbC1iYWxhbmNlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzMzMztcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi1iYWxhbmNlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5pbWctaW5mbyB7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXgtd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3Rvcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICBwYWRkaW5nOiAxNnB4O1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSAuZGl2LWJ1dHRvbi1pdGVtIHtcbiAgbWFyZ2luOiAwIDEzcHggMXB4IDA7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSAuZGl2LWJ1dHRvbi1pdGVtLmJ0bi1hY3RpdmUge1xuICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LWl0ZW0tdHJhbnNhY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW46IDhweCAwcHg7XG4gIHBhZGRpbmc6IDhweCA4cHggOXB4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuY2xzLWV2ZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5jbHMtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmNscy10ZXh0LXN1YiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5mLTEyIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeS1saXN0IHtcbiAgbWFyZ2luOiAwIC04cHg7XG4gIGhlaWdodDogMjkwcHg7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC50ZXh0LWluZm8ge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/bizTravel/companyinfo/companyinfo.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/bizTravel/companyinfo/companyinfo.page.ts ***!
  \***********************************************************/
/*! exports provided: CompanyinfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyinfoPage", function() { return CompanyinfoPage; });
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









let CompanyinfoPage = class CompanyinfoPage {
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
        this.bizTravelService.actionHistory = [];
        this.loadData();
        if (bizTravelService.bizAccount && bizTravelService.bizAccount.balanceAvaiable) {
            bizTravelService.bizAccount.balanceAvailableStr = this.gf.convertNumberToString(bizTravelService.bizAccount.balanceAvaiable);
        }
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
        this.navCtrl.navigateForward('paymentdetail');
    }
    topup() {
        this.navCtrl.navigateForward('topup');
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
CompanyinfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-companyinfo',
        template: __webpack_require__(/*! ./companyinfo.page.html */ "./src/app/bizTravel/companyinfo/companyinfo.page.html"),
        styles: [__webpack_require__(/*! ./companyinfo.page.scss */ "./src/app/bizTravel/companyinfo/companyinfo.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_5__["BizTravelService"],
        src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CompanyinfoPage);



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
//# sourceMappingURL=bizTravel-companyinfo-companyinfo-module.js.map