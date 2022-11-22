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

module.exports = ".d-flex {\n  display: flex;\n}\n\n.m-top-4 {\n  margin-top: 4px;\n}\n\n.m-top-16 {\n  margin-top: 16px;\n}\n\n.m-top-8 {\n  margin-top: 8px;\n}\n\n.m-left-24 {\n  margin-left: 24px;\n}\n\n.m-right-6 {\n  margin-right: 6px;\n}\n\n.v-align-center {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.div-width-200 {\n  width: 200%;\n}\n\n.div-width-100 {\n  width: 100%;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.f-end {\n  justify-content: flex-end;\n}\n\n.icon-arrow {\n  width: 16px;\n  opacity: 0.7;\n}\n\n.div-topup-content {\n  padding: 16px;\n  font-size: 14px;\n  line-height: 1.3;\n  text-align: left;\n  letter-spacing: -0.28px;\n  color: #333333;\n}\n\n.div-topup-content .lh-13 {\n  line-height: 1.3;\n}\n\n.div-topup-content .f-13 {\n  font-size: 13px;\n}\n\n.div-topup-content .text-sub {\n  line-height: 1.4;\n  color: #828282;\n}\n\n.div-topup-content .text-bold {\n  font-weight: 600;\n}\n\n.div-topup-content .div-split-panel {\n  height: 6px;\n  margin: 8px -16px 7px;\n  background-color: #f2f2f2;\n}\n\n.div-topup-content .div-icon {\n  width: 22%;\n  margin-right: 8px;\n}\n\n.div-topup-content .div-text {\n  width: 70%;\n  white-space: normal;\n}\n\n.div-topup-content .div-btn-expand {\n  margin-left: 5px;\n  width: 18px;\n}\n\n.div-topup-content .m-top-18 {\n  margin-top: 18px;\n}\n\n.div-topup-content .m-top-9 {\n  margin-top: 9px;\n}\n\n.div-topup-content .div-expand-info {\n  background: #f9fbfc;\n  margin: 9px -16px -8px -16px;\n  padding: 9px 16px;\n}\n\n.div-topup-content .div-expand-info .text-label {\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 1.5;\n  text-align: left;\n  color: #868998;\n}\n\n.div-topup-content .div-expand-info .text-blue {\n  color: #003c71;\n  font-weight: 500;\n  line-height: 1.5;\n  margin-top: 4px;\n}\n\n.div-topup-content .text-title {\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  text-align: left;\n  color: #333;\n}\n\n.div-topup-content .div-copy {\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9iaXpUcmF2ZWwvdG9wdXAvdG9wdXAucGFnZS5zY3NzIiwic3JjL2FwcC9iaXpUcmF2ZWwvdG9wdXAvdG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksZUFBQTtBQ0VKOztBREFBO0VBQ0ksZ0JBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FESEE7RUFDSSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUNPSjs7QURMQTtFQUNJLFdBQUE7QUNRSjs7QUROQTtFQUNJLFdBQUE7QUNTSjs7QURQQTtFQUNJLGlCQUFBO0FDVUo7O0FEUkE7RUFDSSx5QkFBQTtBQ1dKOztBRFRBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNZSjs7QURWQTtFQUNJLGFBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1lKOztBRFZJO0VBQ0ksZ0JBQUE7QUNZUjs7QURWSTtFQUNJLGVBQUE7QUNZUjs7QURWSTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBQ1lSOztBRFRJO0VBQ0ksZ0JBQUE7QUNXUjs7QURSSTtFQUNJLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FDVVI7O0FEUEk7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUNTUjs7QUROSTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtBQ1FSOztBRE5JO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0FDUVI7O0FETEk7RUFDSSxnQkFBQTtBQ09SOztBRExJO0VBQ0ksZUFBQTtBQ09SOztBREpJO0VBQ0ksbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDTVI7O0FESlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ01aOztBREhRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS1o7O0FERkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSVI7O0FEREk7RUFDSSxrQkFBQTtBQ0dSIiwiZmlsZSI6InNyYy9hcHAvYml6VHJhdmVsL3RvcHVwL3RvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubS10b3AtNHtcbiAgICBtYXJnaW4tdG9wOiA0cHg7XG59XG4ubS10b3AtMTYge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG59XG4ubS10b3AtOHtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG59XG4ubS1sZWZ0LTI0e1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xufVxuLm0tcmlnaHQtNntcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbi52LWFsaWduLWNlbnRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZGl2LXdpZHRoLTIwMCB7XG4gICAgd2lkdGg6IDIwMCU7XG59XG4uZGl2LXdpZHRoLTEwMCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZi1lbmR7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5pY29uLWFycm93IHtcbiAgICB3aWR0aDogMTZweDtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnR7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjI4cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG5cbiAgICAubGgtMTN7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgfVxuICAgIC5mLTEze1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuICAgIC50ZXh0LXN1YiB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cblxuICAgIC50ZXh0LWJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5kaXYtc3BsaXQtcGFuZWwge1xuICAgICAgICBoZWlnaHQ6IDZweDtcbiAgICAgICAgbWFyZ2luOiA4cHggLTE2cHggN3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIH1cblxuICAgIC5kaXYtaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyMiU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIH1cblxuICAgIC5kaXYtdGV4dCB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxuICAgIC5kaXYtYnRuLWV4cGFuZHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgfVxuXG4gICAgLm0tdG9wLTE4e1xuICAgICAgICBtYXJnaW4tdG9wOiAxOHB4O1xuICAgIH1cbiAgICAubS10b3AtOXtcbiAgICAgICAgbWFyZ2luLXRvcDogOXB4O1xuICAgIH1cblxuICAgIC5kaXYtZXhwYW5kLWluZm8ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjlmYmZjO1xuICAgICAgICBtYXJnaW46IDlweCAtMTZweCAtOHB4IC0xNnB4O1xuICAgICAgICBwYWRkaW5nOiA5cHggMTZweDtcblxuICAgICAgICAudGV4dC1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICBjb2xvcjogIzg2ODk5ODtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnRleHQtYmx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzAwM2M3MTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC50ZXh0LXRpdGxle1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgIH1cblxuICAgIC5kaXYtY29weXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIH1cbn0iLCIuZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm0tdG9wLTQge1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG5cbi5tLXRvcC0xNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5tLXRvcC04IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubS1sZWZ0LTI0IHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5tLXJpZ2h0LTYge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLnYtYWxpZ24tY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5kaXYtd2lkdGgtMjAwIHtcbiAgd2lkdGg6IDIwMCU7XG59XG5cbi5kaXYtd2lkdGgtMTAwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5mLWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5pY29uLWFycm93IHtcbiAgd2lkdGg6IDE2cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuLmRpdi10b3B1cC1jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMjhweDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmxoLTEzIHtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cbi5kaXYtdG9wdXAtY29udGVudCAuZi0xMyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAudGV4dC1zdWIge1xuICBsaW5lLWhlaWdodDogMS40O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAudGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAuZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiA2cHg7XG4gIG1hcmdpbjogOHB4IC0xNnB4IDdweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAuZGl2LWljb24ge1xuICB3aWR0aDogMjIlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cbi5kaXYtdG9wdXAtY29udGVudCAuZGl2LXRleHQge1xuICB3aWR0aDogNzAlO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtYnRuLWV4cGFuZCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHdpZHRoOiAxOHB4O1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5tLXRvcC0xOCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLm0tdG9wLTkge1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLmRpdi1leHBhbmQtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmOWZiZmM7XG4gIG1hcmdpbjogOXB4IC0xNnB4IC04cHggLTE2cHg7XG4gIHBhZGRpbmc6IDlweCAxNnB4O1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtZXhwYW5kLWluZm8gLnRleHQtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjODY4OTk4O1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtZXhwYW5kLWluZm8gLnRleHQtYmx1ZSB7XG4gIGNvbG9yOiAjMDAzYzcxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uZGl2LXRvcHVwLWNvbnRlbnQgLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMzMzO1xufVxuLmRpdi10b3B1cC1jb250ZW50IC5kaXYtY29weSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn0iXX0= */"

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