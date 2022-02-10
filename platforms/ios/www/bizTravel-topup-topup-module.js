(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bizTravel-topup-topup-module"],{

/***/ "./src/app/bizTravel/topup/topup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/bizTravel/topup/topup.module.ts ***!
  \*************************************************/
/*! exports provided: TopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopupPageModule", function() { return TopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _topup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./topup.page */ "./src/app/bizTravel/topup/topup.page.ts");







const routes = [
    {
        path: '',
        component: _topup_page__WEBPACK_IMPORTED_MODULE_6__["TopupPage"]
    }
];
let TopupPageModule = class TopupPageModule {
};
TopupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_topup_page__WEBPACK_IMPORTED_MODULE_6__["TopupPage"]]
    })
], TopupPageModule);



/***/ }),

/***/ "./src/app/bizTravel/topup/topup.page.html":
/*!*************************************************!*\
  !*** ./src/app/bizTravel/topup/topup.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"biztravel-header\">\n    <ion-row>\n      <ion-col class=\"col-header\">\n        <div class=\"d-flex\">\n          <div class=\"div-goback\" (click)=\"goback()\">\n              <img class=\"header-img-back\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n          </div>\n          <div class=\"div-header-title\">\n            <div class=\"div-title\">Nạp tiền</div>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-header>\n  <ion-content>\n    <div class=\"div-topup-content\">\n        <div class=\"text-bold\">Quý khách vui lòng chọn ngân hàng chuyển khoản</div>\n        <div class=\"text-sub m-top-4 lh-13\">Sau khi nhận được Email xác nhận, số dư khả dụng của bạn sẽ được hệ thống cập nhật tự động.</div>\n\n        <div class=\"div-split-panel m-top-16\">\n        </div>\n        <div *ngFor=\"let itemBank of listBanks; let idx =index\">\n            <div class=\"div-row-bank d-flex\" (click)=\"expandClick(itemBank)\">\n                <div class=\"div-icon v-align-center\"><img src={{itemBank.imgBank}}></div>\n                <div class=\"div-text w-220\">\n                    <div><ion-label>{{itemBank.bankName}} <span class=\"text-bold\">({{itemBank.bankNameShort}})</span></ion-label></div>\n                    <div class=\"m-top-4\"><ion-label class=\"text-sub f-13\">{{itemBank.bankBranch}}</ion-label></div>\n                </div>\n                <div class=\"div-btn-expand v-align-center\" *ngIf=\"!itemBank.expanded else expanddivvcb\">\n                    <img src=\"./assets/ic_biztravel/expand.svg\">\n                </div>\n                <ng-template #expanddivvcb>\n                    <div class=\"div-btn-expand v-align-center\">\n                        <img src=\"./assets/ic_biztravel/expand_down.svg\">\n                    </div>\n                </ng-template>\n            </div>\n            <div class=\"div-expand-info\" *ngIf=\"itemBank.expanded\">\n                <div class=\"text-label m-top-9\">\n                    Số tài khoản\n                </div>\n                <div class=\"text-blue d-flex \">\n                    <div class=\"v-align-center\">{{itemBank.accountNumber}}</div>\n                    <div class=\"div-copy v-align-center\"  (click)=\"copyClipboard(itemBank,1)\"><img src=\"./assets/ic_biztravel/copy.svg\"></div>\n                </div>\n\n                <div class=\"text-label m-top-9\">\n                    Tên đơn vị thụ hưởng\n                </div>\n                <div class=\"text-blue  d-flex\">\n                    <div class=\" v-align-center\">Công ty Cổ Phần IVIVU.COM</div>\n                    <div class=\"div-copy v-align-center\" (click)=\"copyClipboard(itemBank, 2)\"><img src=\"./assets/ic_biztravel/copy.svg\"></div>\n                </div>\n\n                <div class=\"text-label m-top-9\">\n                    Nội dung chuyển khoản\n                </div>\n                <div class=\"text-blue  d-flex\">\n                    <div class=\" v-align-center\">TOPUP <{{bizTravelService.bizAccount.phone}}></div>\n                    <div class=\"div-copy v-align-center\" (click)=\"copyClipboard(itemBank, 3)\"><img src=\"./assets/ic_biztravel/copy.svg\"></div>\n                </div>\n            </div>\n\n        <div class=\"div-split-panel\">\n        </div>\n\n       \n        </div>\n        \n        <div class=\"m-top-16\" *ngIf=\"bizTravelService.bizAccount.supporter && bizTravelService.bizAccount.supporter.name\">\n            <div class=\"text-title\">Liên hệ hỗ trợ</div>\n            <div class=\"d-flex m-top-8\">\n                <div class=\"d-flex div-width-200\">\n                    <div class=\"cls-icon m-right-6\">\n                        <img class=\"img-support\"  src=\"./assets/imgs/ic_callcenter.svg\">\n                    </div>\n                    <div class=\"text-label\">{{bizTravelService.bizAccount.supporter.name}}</div>\n                </div>\n                <div class=\"d-flex div-width-100 f-end\">\n                    <div (click)=\"callsupport()\"><img class=\"img-call\"  src=\"./assets/ic_biztravel/call.svg\"></div>\n                    <div class=\"m-left-24\" (click)=\"emailsupport()\"><img class=\"img-mail\"  src=\"./assets/ic_biztravel/mail.svg\"></div>\n                </div>\n               \n                \n            </div>\n        </div>\n\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/bizTravel/topup/topup.page.scss":
/*!*************************************************!*\
  !*** ./src/app/bizTravel/topup/topup.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-top-4 {\n  margin-top: 4px;\n}\n\n.m-top-16 {\n  margin-top: 16px;\n}\n\n.m-top-8 {\n  margin-top: 8px;\n}\n\n.m-left-24 {\n  margin-left: 24px;\n}\n\n.m-right-6 {\n  margin-right: 6px;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-width-200 {\n  width: 200%;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.f-end {\n  justify-content: flex-end;\n}\n\n.icon-arrow {\n  width: 16px;\n  opacity: 0.7;\n}\n\n.div-topup-content {\n  padding: 16px;\n  font-size: 14px;\n  line-height: 1.3;\n  text-align: left;\n  letter-spacing: -0.28px;\n  color: #333333;\n}\n\n.div-topup-content .lh-13 {\n  line-height: 1.3;\n}\n\n.div-topup-content .f-13 {\n  font-size: 13px;\n}\n\n.div-topup-content .text-sub {\n  line-height: 1.4;\n  color: #828282;\n}\n\n.div-topup-content .text-bold {\n  font-weight: 600;\n}\n\n.div-topup-content .div-split-panel {\n  height: 6px;\n  margin: 8px -16px 7px;\n  background-color: #f2f2f2;\n}\n\n.div-topup-content .div-icon {\n  width: 22%;\n  margin-right: 8px;\n}\n\n.div-topup-content .div-text {\n  width: 70%;\n  white-space: normal;\n}\n\n.div-topup-content .div-btn-expand {\n  margin-left: 5px;\n  width: 18px;\n}\n\n.div-topup-content .m-top-18 {\n  margin-top: 18px;\n}\n\n.div-topup-content .m-top-9 {\n  margin-top: 9px;\n}\n\n.div-topup-content .div-expand-info {\n  background: #f9fbfc;\n  margin: 9px -16px -8px -16px;\n  padding: 9px 16px;\n}\n\n.div-topup-content .div-expand-info .text-label {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: left;\n  color: #868998;\n}\n\n.div-topup-content .div-expand-info .text-blue {\n  color: #003c71;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 4px;\n}\n\n.div-topup-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  text-align: left;\n  color: #333;\n}\n\n.div-topup-content .div-copy {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgY29weS9zcmMvYXBwL2JpelRyYXZlbC90b3B1cC90b3B1cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2JpelRyYXZlbC90b3B1cC90b3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxnQkFBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURIQTtFQUNJLGlCQUFBO0FDTUo7O0FESkE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQ09KOztBRExBO0VBQ0ksV0FBQTtBQ1FKOztBRE5BO0VBQ0ksV0FBQTtBQ1NKOztBRFBBO0VBQ0ksaUJBQUE7QUNVSjs7QURSQTtFQUNJLHlCQUFBO0FDV0o7O0FEVEE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1lKOztBRFZBO0VBQ0ksYUFBQTtFQUVBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDWUo7O0FEVkk7RUFDSSxnQkFBQTtBQ1lSOztBRFZJO0VBQ0ksZUFBQTtBQ1lSOztBRFZJO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FDWVI7O0FEVEk7RUFDSSxnQkFBQTtBQ1dSOztBRFJJO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNVUjs7QURQSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ1NSOztBRE5JO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDUVI7O0FETkk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNRUjs7QURMSTtFQUNJLGdCQUFBO0FDT1I7O0FETEk7RUFDSSxlQUFBO0FDT1I7O0FESkk7RUFDSSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUJBQUE7QUNNUjs7QURKUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTVo7O0FESFE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNLWjs7QURGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNJUjs7QURESTtFQUNJLGtCQUFBO0FDR1IiLCJmaWxlIjoic3JjL2FwcC9iaXpUcmF2ZWwvdG9wdXAvdG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmQtZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5tLXRvcC00e1xuICAgIG1hcmdpbi10b3A6IDRweDtcbn1cbi5tLXRvcC0xNiB7XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbn1cbi5tLXRvcC04e1xuICAgIG1hcmdpbi10b3A6IDhweDtcbn1cbi5tLWxlZnQtMjR7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG4ubS1yaWdodC02e1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLnYtYWxpZ24tY2VudGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5kaXYtd2lkdGgtMjAwIHtcbiAgICB3aWR0aDogMjAwJTtcbn1cbi5kaXYtd2lkdGgtMTAwIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi50ZXh0LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mLWVuZHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLmljb24tYXJyb3cge1xuICAgIHdpZHRoOiAxNnB4O1xuICAgIG9wYWNpdHk6IDAuNztcbn1cbi5kaXYtdG9wdXAtY29udGVudHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgICBjb2xvcjogIzMzMzMzMztcblxuICAgIC5saC0xM3tcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG4gICAgLmYtMTN7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gICAgLnRleHQtc3ViIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLnRleHQtYm9sZCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgLmRpdi1zcGxpdC1wYW5lbCB7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgICBtYXJnaW46IDhweCAtMTZweCA3cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgfVxuXG4gICAgLmRpdi1pY29uIHtcbiAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgfVxuXG4gICAgLmRpdi10ZXh0IHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gICAgLmRpdi1idG4tZXhwYW5ke1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICB9XG5cbiAgICAubS10b3AtMTh7XG4gICAgICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gICAgfVxuICAgIC5tLXRvcC05e1xuICAgICAgICBtYXJnaW4tdG9wOiA5cHg7XG4gICAgfVxuXG4gICAgLmRpdi1leHBhbmQtaW5mbyB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOWZiZmM7XG4gICAgICAgIG1hcmdpbjogOXB4IC0xNnB4IC04cHggLTE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDlweCAxNnB4O1xuXG4gICAgICAgIC50ZXh0LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGNvbG9yOiAjODY4OTk4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudGV4dC1ibHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAzYzcxO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtdGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgfVxuXG4gICAgLmRpdi1jb3B5e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgfVxufSIsIi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubS10b3AtNCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLm0tdG9wLTE2IHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm0tdG9wLTgge1xuICBtYXJnaW4tdG9wOiA4cHg7XG59XG5cbi5tLWxlZnQtMjQge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLm0tcmlnaHQtNiB7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuXG4udi1hbGlnbi1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpdi13aWR0aC0yMDAge1xuICB3aWR0aDogMjAwJTtcbn1cblxuLmRpdi13aWR0aC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmYtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmljb24tYXJyb3cge1xuICB3aWR0aDogMTZweDtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uZGl2LXRvcHVwLWNvbnRlbnQge1xuICBwYWRkaW5nOiAxNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4yOHB4O1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5kaXYtdG9wdXAtY29udGVudCAubGgtMTMge1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5mLTEzIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmRpdi10b3B1cC1jb250ZW50IC50ZXh0LXN1YiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDZweDtcbiAgbWFyZ2luOiA4cHggLTE2cHggN3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtaWNvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtdGV4dCB7XG4gIHdpZHRoOiA3MCU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmRpdi1idG4tZXhwYW5kIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgd2lkdGg6IDE4cHg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLm0tdG9wLTE4IHtcbiAgbWFyZ2luLXRvcDogMThweDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAubS10b3AtOSB7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAuZGl2LWV4cGFuZC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2Y5ZmJmYztcbiAgbWFyZ2luOiA5cHggLTE2cHggLThweCAtMTZweDtcbiAgcGFkZGluZzogOXB4IDE2cHg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmRpdi1leHBhbmQtaW5mbyAudGV4dC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM4Njg5OTg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmRpdi1leHBhbmQtaW5mbyAudGV4dC1ibHVlIHtcbiAgY29sb3I6ICMwMDNjNzE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAudGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMzMzM7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmRpdi1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/bizTravel/topup/topup.page.ts":
/*!***********************************************!*\
  !*** ./src/app/bizTravel/topup/topup.page.ts ***!
  \***********************************************/
/*! exports provided: TopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopupPage", function() { return TopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/bizTravelService */ "./src/app/providers/bizTravelService.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/constants */ "./src/app/providers/constants.ts");







let TopupPage = class TopupPage {
    constructor(navCtrl, bizTravelService, clipboard, gf) {
        this.navCtrl = navCtrl;
        this.bizTravelService = bizTravelService;
        this.clipboard = clipboard;
        this.gf = gf;
        this.typeSearch = 0;
        this.expandVCB = false;
        this.listBanks = [
            {
                id: 1,
                bankNameShort: "VCB",
                bankName: "Ngân hàng TMCP Ngoại Thương VN",
                bankBranch: "Chi nhánh Tp. Hồ Chí Minh",
                accountNumber: "007 1000 895 230",
                imgBank: "./assets/ic_biztravel/vcb.jpg",
                expanded: false
            },
            {
                id: 2,
                bankNameShort: "ACB",
                bankName: "Ngân hàng TMCP Á Châu",
                bankBranch: "Chi nhánh Tp. Hồ Chí Minh",
                accountNumber: "190862589",
                imgBank: "./assets/ic_biztravel/acb.jpg",
                expanded: false
            },
            {
                id: 3,
                bankNameShort: "VietinBank",
                bankName: "Ngân hàng TMCP Công Thương VN",
                bankBranch: "Chi nhánh 03 TP.HCM",
                imgBank: "./assets/ic_biztravel/vietinbank.jpg",
                accountNumber: "1110 0014 2852",
                expanded: false
            },
            {
                id: 4,
                bankNameShort: "Techcombank",
                bankName: "Ngân hàng TMCP Kỹ Thương VN",
                bankBranch: "Chi nhánh Trần Quang Diệu TP.HCM",
                imgBank: "./assets/ic_biztravel/techcombank.jpg",
                accountNumber: "19128840912016",
                expanded: false
            },
            {
                id: 5,
                bankNameShort: "HDBANK",
                bankName: "Ngân hàng TMCP Phát triển TP HCM",
                bankBranch: "Chi nhánh Sài Gòn",
                imgBank: "./assets/ic_biztravel/hdbank.jpg",
                accountNumber: "052704070018649",
                expanded: false
            },
            {
                id: 6,
                bankNameShort: "DongABank",
                bankName: "Ngân hàng TMCP Đông Á",
                bankBranch: "Chi nhánh Lê Văn Sỹ TP.HCM",
                imgBank: "./assets/ic_biztravel/donga.jpg",
                accountNumber: "0139 9166 0002",
                expanded: false
            },
            {
                id: 7,
                bankNameShort: "Agribank",
                bankName: "Ngân hàng Nông nghiệp và Phát triển Nông thôn VN",
                bankBranch: "Chi Nhánh 03 TP.HCM",
                imgBank: "./assets/ic_biztravel/agribank.jpg",
                accountNumber: "160 2201 361 086",
                expanded: false
            },
            {
                id: 8,
                bankNameShort: "BIDV",
                bankName: "Ngân hàng TMCP Đầu tư và Phát triển VN",
                bankBranch: "Chi nhánh 02 TP.HCM",
                imgBank: "./assets/ic_biztravel/bidv.jpg",
                accountNumber: "130 1000 147 4890",
                expanded: false
            },
            {
                id: 9,
                bankNameShort: "Sacombank",
                bankName: "Ngân hàng TMCP Sài Gòn Thương Tín",
                bankBranch: "Chi nhánh Cao Thắng TP.HCM",
                imgBank: "./assets/ic_biztravel/sacombank.jpg",
                accountNumber: "060 0952 73354",
                expanded: false
            },
            {
                id: 10,
                bankNameShort: "SCB",
                bankName: "Ngân hàng TMCP Sài Gòn",
                bankBranch: "Chi nhánh Phú Đông",
                imgBank: "./assets/ic_biztravel/scb.jpg",
                accountNumber: "023 0109 7937 00001",
                expanded: false
            },
            {
                id: 11,
                bankNameShort: "OCB",
                bankName: "Ngân hàng Phương Đông",
                bankBranch: "Chi nhánh Chợ Lớn TP.HCM",
                imgBank: "./assets/ic_biztravel/ocb.jpg",
                accountNumber: "001 7101 6190 02045",
                expanded: false
            },
        ];
    }
    ngOnInit() {
    }
    goback() {
        this.navCtrl.back();
    }
    expandClick(item) {
        let se = this;
        this.listBanks.forEach(element => {
            if (element.id != item.id) {
                element.expanded = false;
            }
        });
        item.expanded = !item.expanded;
    }
    copyClipboard(item, type) {
        if (type == 1) {
            this.clipboard.copy(item.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy("TOPUP <" + this.bizTravelService.bizAccount.phone + ">");
        }
        this.gf.showToastWarning('Đã sao chép');
    }
    support() {
        if (this.bizTravelService.bizAccount && this.bizTravelService.bizAccount.supporter) {
            this.gf.showAlertMessage(this.bizTravelService.bizAccount.supporter.name + '<br/>' + this.bizTravelService.bizAccount.supporter.phone + '<br/>' + this.bizTravelService.bizAccount.supporter.email, 'Bạn cần hỗ trợ thêm xin vui lòng liên hệ thông tin bên dưới:');
        }
    }
    callsupport() {
        try {
            let phone = this.bizTravelService.bizAccount.supporter.phone.split(" ").join("");
            setTimeout(() => {
                window.open(`tel:${phone}`, '_system');
            }, 10);
        }
        catch (error) {
            if (error) {
                error.page = "listbookings";
                error.func = "callsupport";
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
            }
            ;
        }
    }
    emailsupport() {
        try {
            setTimeout(() => {
                window.open(`mailto:${this.bizTravelService.bizAccount.supporter.email}`, '_system');
            }, 10);
        }
        catch (error) {
            if (error) {
                error.page = "listbookings";
                error.func = "emailsupport";
                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, null);
            }
            ;
        }
    }
};
TopupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-topup',
        template: __webpack_require__(/*! ./topup.page.html */ "./src/app/bizTravel/topup/topup.page.html"),
        styles: [__webpack_require__(/*! ./topup.page.scss */ "./src/app/bizTravel/topup/topup.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_providers_bizTravelService__WEBPACK_IMPORTED_MODULE_3__["BizTravelService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_4__["Clipboard"],
        src_app_providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"]])
], TopupPage);



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
//# sourceMappingURL=bizTravel-topup-topup-module.js.map