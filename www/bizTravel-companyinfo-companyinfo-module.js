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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-t-12 {\n  margin-top: 12px;\n}\n\n.m-t-6 {\n  margin-top: 6px;\n}\n\n.m-t-8 {\n  margin-top: 8px;\n}\n\n.m-r-12 {\n  margin-right: 12px;\n}\n\n.content-background {\n  --background: #f9fbfc;\n}\n\n.button-detail {\n  background: #ffffff;\n  color: #f59233;\n  border: solid 1px #f59233;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px 8px 8px 16px;\n}\n\n.button-purchase {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.6px;\n  padding: 0;\n  margin: 8px 16px 8px 0px;\n}\n\n.div-company-info-content {\n  padding: 16px;\n  background: #fff;\n}\n\n.div-company-info-content .div-split-panel {\n  height: 8px;\n  margin: 16px -16px;\n  background-color: #f9fbfc;\n}\n\n.div-company-info-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-change-info {\n  margin: 0 -8px;\n  padding: 4px 8px;\n  background-color: #f9fbfc;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .cls-label {\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  color: #828282;\n}\n\n.div-company-info-content .cls-text {\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-total-balance {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-balance {\n  margin-right: 8px;\n}\n\n.div-company-info-content .div-width-100 {\n  width: 100%;\n}\n\n.div-company-info-content .div-button {\n  text-align: right;\n}\n\n.div-company-info-content .img-info {\n  width: 16px;\n  max-width: initial !important;\n  margin-right: 6px;\n  position: absolute;\n  margin-top: 1px;\n}\n\n.div-company-info-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 16px -16px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px;\n  padding: 8px 8px 9px;\n}\n\n.div-company-info-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-company-info-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .text-right {\n  text-align: right;\n}\n\n.div-company-info-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-company-info-content .div-transaction-history-list {\n  margin: 0 -8px;\n  height: 290px;\n  overflow: scroll;\n}\n\n.div-company-info-content .text-info {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvYml6VHJhdmVsL2NvbXBhbnlpbmZvL2NvbXBhbnlpbmZvLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYml6VHJhdmVsL2NvbXBhbnlpbmZvL2NvbXBhbnlpbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxrQkFBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7QUNLSjs7QURGQTtFQUVRLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQ0lSOztBREZNO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQ0lSOztBRENBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQUk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0VSOztBREFJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNFUjs7QURDSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBRUEsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQVI7O0FER0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNEUjs7QURJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0ZSOztBREtJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNIUjs7QURNSTtFQUNJLGlCQUFBO0FDSlI7O0FETUk7RUFDSSxXQUFBO0FDSlI7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRE1JO0VBQ0ksV0FBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKUjs7QURRTTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDTlY7O0FEUVU7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNOWjs7QURTVTtFQUNFLG9DQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FDUFo7O0FEYU07RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ1hSOztBRGFRO0VBQ0Esb0NBQUE7QUNYUjs7QURjTTtFQUNFLDJCQUFBO0FDWlI7O0FEZUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNiUjs7QURlSTtFQUNJLGlCQUFBO0FDYlI7O0FEZUk7RUFDSSwwQkFBQTtBQ2JSOztBRGdCSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNkUjs7QURpQkk7RUFDSSxrQkFBQTtBQ2ZSIiwiZmlsZSI6InNyYy9hcHAvYml6VHJhdmVsL2NvbXBhbnlpbmZvL2NvbXBhbnlpbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tLXQtMTIge1xuICAgIG1hcmdpbi10b3A6IDEycHg7XG59XG4ubS10LTYge1xuICAgIG1hcmdpbi10b3A6IDZweDtcbn1cbi5tLXQtOCB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xufVxuLm0tci0xMntcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4uY29udGVudC1iYWNrZ3JvdW5kIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmOWZiZmM7XG59XG5cbi5idXR0b24tZGV0YWlsXG4gICAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGNvbG9yOiAjZjU5MjMzO1xuICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luOiA4cHggOHB4IDhweCAxNnB4O1xuICAgICAgfSBcbiAgICAgIC5idXR0b24tcHVyY2hhc2VcbiAgICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2Y1OTIzMztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDhweCAxNnB4IDhweCAwcHg7XG4gICAgICAgICAgXG4gICAgICB9IFxuXG5cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gICAgLmRpdi1zcGxpdC1wYW5lbCB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBtYXJnaW46IDE2cHggLTE2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gICAgfVxuICAgIC5kaXYtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi1jaGFuZ2UtaW5mbyB7XG4gICAgICAgIG1hcmdpbjogMCAtOHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICAgICAgICBcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzg2ODk5ODtcbiAgICB9XG5cbiAgICAuY2xzLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG5cbiAgICAuY2xzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5kaXYtdG90YWwtYmFsYW5jZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi1iYWxhbmNle1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICB9XG4gICAgLmRpdi13aWR0aC0xMDAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLmRpdi1idXR0b257XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAuaW1nLWluZm97XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgIH1cblxuICAgIFxuICAgICAgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5e1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDE2cHggLTE2cHg7XG5cbiAgICAgICAgICAuZGl2LWJ1dHRvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxM3B4IDFweCAwO1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kaXYtYnV0dG9uLWl0ZW0uYnRuLWFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgfVxuXG4gICAgICAuZGl2LWl0ZW0tdHJhbnNhY3Rpb257XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbjogOHB4IDBweDtcbiAgICAgICAgcGFkZGluZzogOHB4IDhweCA5cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNscy1ldmVue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjICFpbXBvcnRhbnQ7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAuY2xzLWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuY2xzLXRleHQtc3Vie1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjODY4OTk4O1xuICAgIH1cbiAgICAudGV4dC1yaWdodHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxuICAgIC5mLTEye1xuICAgICAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnktbGlzdHtcbiAgICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICAgIGhlaWdodDogMjkwcHg7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgfVxuXG4gICAgLnRleHQtaW5mb3tcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tdC0xMiB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5tLXQtNiB7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLm0tdC04IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubS1yLTEyIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uY29udGVudC1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjlmYmZjO1xufVxuXG4uYnV0dG9uLWRldGFpbCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjU5MjMzO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiA4cHggOHB4IDhweCAxNnB4O1xufVxuXG4uYnV0dG9uLXB1cmNoYXNlIHtcbiAgYmFja2dyb3VuZDogI2Y1OTIzMztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDhweCAxNnB4IDhweCAwcHg7XG59XG5cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA4cHg7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtY2hhbmdlLWluZm8ge1xuICBtYXJnaW46IDAgLThweDtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzg2ODk5ODtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmNscy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5jbHMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdG90YWwtYmFsYW5jZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtYmFsYW5jZSB7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXdpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LWJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuaW1nLWluZm8ge1xuICB3aWR0aDogMTZweDtcbiAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDFweDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgcGFkZGluZzogMTZweDtcbiAgbWFyZ2luOiAxNnB4IC0xNnB4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnkgLmRpdi1idXR0b24taXRlbSB7XG4gIG1hcmdpbjogMCAxM3B4IDFweCAwO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjY2NjO1xuICBjb2xvcjogIzMzMztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnkgLmRpdi1idXR0b24taXRlbS5idG4tYWN0aXZlIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi1pdGVtLXRyYW5zYWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiA4cHggMHB4O1xuICBwYWRkaW5nOiA4cHggOHB4IDlweDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmNscy1ldmVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYyAhaW1wb3J0YW50O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuY2xzLWJvbGQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5jbHMtdGV4dC1zdWIge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAudGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZi0xMiB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRyYW5zYWN0aW9uLWhpc3RvcnktbGlzdCB7XG4gIG1hcmdpbjogMCAtOHB4O1xuICBoZWlnaHQ6IDI5MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAudGV4dC1pbmZvIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufSJdfQ== */"

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