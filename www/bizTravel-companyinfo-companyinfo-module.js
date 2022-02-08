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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-t-12 {\n  margin-top: 12px;\n}\n\n.m-t-6 {\n  margin-top: 6px;\n}\n\n.m-t-8 {\n  margin-top: 8px;\n}\n\n.m-r-12 {\n  margin-right: 12px;\n}\n\n.content-background {\n  --background: #f9fbfc;\n}\n\n.button-detail {\n  background: #ffffff;\n  color: #f59233;\n  border: solid 1px #f59233;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 8px 8px 8px 16px;\n}\n\n.button-purchase {\n  background: #f59233;\n  color: #ffffff;\n  border-color: #f59233;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.6px;\n  padding: 0;\n  margin: 8px 16px 8px 0px;\n}\n\n.div-company-info-content {\n  padding: 16px;\n  background: #fff;\n}\n\n.div-company-info-content .div-split-panel {\n  height: 8px;\n  margin: 16px -16px;\n  background-color: #f9fbfc;\n}\n\n.div-company-info-content .div-title {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-change-info {\n  margin: 0 -8px;\n  padding: 4px 8px;\n  background-color: #f9fbfc;\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .cls-label {\n  font-size: 13px;\n  line-height: 1.4;\n  text-align: left;\n  color: #828282;\n}\n\n.div-company-info-content .cls-text {\n  font-size: 14px;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-total-balance {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-align: left;\n  color: #333;\n}\n\n.div-company-info-content .div-balance {\n  margin-right: 8px;\n}\n\n.div-company-info-content .div-width-100 {\n  width: 100%;\n}\n\n.div-company-info-content .div-button {\n  text-align: right;\n}\n\n.div-company-info-content .img-info {\n  width: 16px;\n  max-width: initial !important;\n  margin-right: 6px;\n  position: absolute;\n  margin-top: 1px;\n}\n\n.div-company-info-content .div-transaction-history {\n  background-color: #f9fbfc;\n  padding: 16px;\n  margin: 16px -16px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item {\n  margin: 0 13px 1px 0;\n  padding: 8px 20px;\n  border-radius: 4px;\n  background-color: #ffffff;\n  border: solid 1px #cccccc;\n  color: #333;\n  font-size: 14px;\n}\n\n.div-company-info-content .div-transaction-history .div-button-item.btn-active {\n  border: solid 1px #26bed6 !important;\n  background-color: #26bed6 !important;\n  color: #fff !important;\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .div-item-transaction {\n  background-color: #ffffff;\n  margin: 8px 0px;\n  padding: 8px 8px 9px;\n}\n\n.div-company-info-content .cls-even {\n  background-color: #f9fbfc !important;\n}\n\n.div-company-info-content .cls-bold {\n  font-weight: 600 !important;\n}\n\n.div-company-info-content .cls-text-sub {\n  font-size: 12px;\n  line-height: 1.2;\n  text-align: left;\n  color: #868998;\n}\n\n.div-company-info-content .text-right {\n  text-align: right;\n}\n\n.div-company-info-content .f-12 {\n  font-size: 12px !important;\n}\n\n.div-company-info-content .div-transaction-history-list {\n  margin: 0 -8px;\n  height: 290px;\n  overflow: scroll;\n}\n\n.div-company-info-content .text-info {\n  padding-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2JpelRyYXZlbC9jb21wYW55aW5mby9jb21wYW55aW5mby5wYWdlLnNjc3MiLCJzcmMvYXBwL2JpelRyYXZlbC9jb21wYW55aW5mby9jb21wYW55aW5mby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0FDQUo7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZUFBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSjs7QURGQTtFQUNJLHFCQUFBO0FDS0o7O0FERkE7RUFFUSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUNJUjs7QURGTTtFQUVFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNJUjs7QURDQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0VKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNFUjs7QURBSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDRVI7O0FEQ0k7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0FSOztBREdJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRFI7O0FESUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNGUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSFI7O0FETUk7RUFDSSxpQkFBQTtBQ0pSOztBRE1JO0VBQ0ksV0FBQTtBQ0pSOztBRE1JO0VBQ0ksaUJBQUE7QUNKUjs7QURNSTtFQUNJLFdBQUE7RUFDQSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSlI7O0FEUU07RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ05WOztBRFFVO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDTlo7O0FEU1U7RUFDRSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ1BaOztBRGFNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNYUjs7QURhUTtFQUNBLG9DQUFBO0FDWFI7O0FEY007RUFDRSwyQkFBQTtBQ1pSOztBRGVJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDYlI7O0FEZUk7RUFDSSxpQkFBQTtBQ2JSOztBRGVJO0VBQ0ksMEJBQUE7QUNiUjs7QURnQkk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDZFI7O0FEaUJJO0VBQ0ksa0JBQUE7QUNmUiIsImZpbGUiOiJzcmMvYXBwL2JpelRyYXZlbC9jb21wYW55aW5mby9jb21wYW55aW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubS10LTEyIHtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLm0tdC02IHtcbiAgICBtYXJnaW4tdG9wOiA2cHg7XG59XG4ubS10LTgge1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5tLXItMTJ7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLmNvbnRlbnQtYmFja2dyb3VuZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZjlmYmZjO1xufVxuXG4uYnV0dG9uLWRldGFpbFxuICAgICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICBjb2xvcjogI2Y1OTIzMztcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIG1hcmdpbjogOHB4IDhweCA4cHggMTZweDtcbiAgICAgIH0gXG4gICAgICAuYnV0dG9uLXB1cmNoYXNlXG4gICAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiA4cHggMTZweCA4cHggMHB4O1xuICAgICAgICAgIFxuICAgICAgfSBcblxuXG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50e1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgIC5kaXYtc3BsaXQtcGFuZWwge1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICAgIH1cbiAgICAuZGl2LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5kaXYtY2hhbmdlLWluZm8ge1xuICAgICAgICBtYXJnaW46IDAgLThweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYztcbiAgICAgICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM4Njg5OTg7XG4gICAgfVxuXG4gICAgLmNscy1sYWJlbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLmNscy10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICB9XG5cbiAgICAuZGl2LXRvdGFsLWJhbGFuY2Uge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5kaXYtYmFsYW5jZXtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuICAgIC5kaXYtd2lkdGgtMTAwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5kaXYtYnV0dG9ue1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgLmltZy1pbmZve1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgbWF4LXdpZHRoOiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIG1hcmdpbi10b3A6IDFweDtcbiAgICB9XG5cbiAgICBcbiAgICAgIC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeXtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYmZjO1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAxNnB4IC0xNnB4O1xuXG4gICAgICAgICAgLmRpdi1idXR0b24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTNweCAxcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2NjY2M7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZGl2LWJ1dHRvbi1pdGVtLmJ0bi1hY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggIzI2YmVkNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgIH1cblxuICAgICAgLmRpdi1pdGVtLXRyYW5zYWN0aW9ue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBtYXJnaW46IDhweCAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggOXB4O1xuICAgICAgICB9XG4gICAgICAgIC5jbHMtZXZlbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJmYyAhaW1wb3J0YW50O1xuICAgICAgICBcbiAgICAgICAgfVxuICAgICAgLmNscy1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmNscy10ZXh0LXN1YntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBjb2xvcjogIzg2ODk5ODtcbiAgICB9XG4gICAgLnRleHQtcmlnaHR7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbiAgICAuZi0xMntcbiAgICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5LWxpc3R7XG4gICAgICAgIG1hcmdpbjogMCAtOHB4O1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIH1cblxuICAgIC50ZXh0LWluZm97XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG59IiwiLmQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tLXQtMTIge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4ubS10LTYge1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5tLXQtOCB7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm0tci0xMiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLmNvbnRlbnQtYmFja2dyb3VuZCB7XG4gIC0tYmFja2dyb3VuZDogI2Y5ZmJmYztcbn1cblxuLmJ1dHRvbi1kZXRhaWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2Y1OTIzMztcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2Y1OTIzMztcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogOHB4IDhweCA4cHggMTZweDtcbn1cblxuLmJ1dHRvbi1wdXJjaGFzZSB7XG4gIGJhY2tncm91bmQ6ICNmNTkyMzM7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmNTkyMzM7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiA4cHggMTZweCA4cHggMHB4O1xufVxuXG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogOHB4O1xuICBtYXJnaW46IDE2cHggLTE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LWNoYW5nZS1pbmZvIHtcbiAgbWFyZ2luOiAwIC04cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5jbHMtbGFiZWwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuY2xzLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LXRvdGFsLWJhbGFuY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuZGl2LWJhbGFuY2Uge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmltZy1pbmZvIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1heC13aWR0aDogaW5pdGlhbCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAxcHg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtdHJhbnNhY3Rpb24taGlzdG9yeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmM7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIG1hcmdpbjogMTZweCAtMTZweDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IC5kaXYtYnV0dG9uLWl0ZW0ge1xuICBtYXJnaW46IDAgMTNweCAxcHggMDtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjY2NjYztcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5IC5kaXYtYnV0dG9uLWl0ZW0uYnRuLWFjdGl2ZSB7XG4gIGJvcmRlcjogc29saWQgMXB4ICMyNmJlZDYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5kaXYtaXRlbS10cmFuc2FjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbjogOHB4IDBweDtcbiAgcGFkZGluZzogOHB4IDhweCA5cHg7XG59XG4uZGl2LWNvbXBhbnktaW5mby1jb250ZW50IC5jbHMtZXZlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZiZmMgIWltcG9ydGFudDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmNscy1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmRpdi1jb21wYW55LWluZm8tY29udGVudCAuY2xzLXRleHQtc3ViIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzg2ODk5ODtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmYtMTIge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLmRpdi10cmFuc2FjdGlvbi1oaXN0b3J5LWxpc3Qge1xuICBtYXJnaW46IDAgLThweDtcbiAgaGVpZ2h0OiAyOTBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbi5kaXYtY29tcGFueS1pbmZvLWNvbnRlbnQgLnRleHQtaW5mbyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn0iXX0= */"

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