(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodpaymentbank-foodpaymentbank-module"],{

/***/ "./src/app/foodpaymentbank/foodpaymentbank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentbank/foodpaymentbank.module.ts ***!
  \***********************************************************/
/*! exports provided: FoodpaymentbankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentbankPageModule", function() { return FoodpaymentbankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodpaymentbank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodpaymentbank.page */ "./src/app/foodpaymentbank/foodpaymentbank.page.ts");







const routes = [
    {
        path: '',
        component: _foodpaymentbank_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentbankPage"]
    }
];
let FoodpaymentbankPageModule = class FoodpaymentbankPageModule {
};
FoodpaymentbankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodpaymentbank_page__WEBPACK_IMPORTED_MODULE_6__["FoodpaymentbankPage"]]
    })
], FoodpaymentbankPageModule);



/***/ }),

/***/ "./src/app/foodpaymentbank/foodpaymentbank.page.html":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentbank/foodpaymentbank.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center;\">\n    <img src=\"./assets/step/food_step_2.svg\">\n  </div>\n\n  <ion-grid class=\"grid-row-1\">\n    <ion-row>\n      <ion-col (click)=\"vcb()\" size=\"3\">\n        <img *ngIf=\"ischeckvcbactive\" src=\"./assets/ic_bank/iv_vcb_active.png\">\n        <img *ngIf=\"ischeckvcb\" src=\"./assets/ic_bank/iv_vcb.png\">\n      </ion-col>\n      <ion-col (click)=\"acb()\" size=\"3\">\n        <img *ngIf=\"ischeckacbactive\" src=\"./assets/ic_bank/ic_acb_active.png\">\n        <img *ngIf=\"ischeckacb\" src=\"./assets/ic_bank/ic_acb.png\">\n      </ion-col>\n      <ion-col (click)=\"vietin()\" size=\"3\">\n        <img *ngIf=\"ischeckvietinactive\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n        <img *ngIf=\"ischeckvietin\" src=\"./assets/ic_bank/ic_vietin.png\">\n      </ion-col>\n      <ion-col (click)=\"techcom()\" size=\"3\">\n        <img *ngIf=\"ischecktechcomactive\" src=\"./assets/ic_bank/ic_techcom_active.png\">\n        <img *ngIf=\"ischecktechcom\" src=\"./assets/ic_bank/ic_techcom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"rowoneactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n          <span *ngIf=\"bookingCode\">\n            <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n          </span>\n          \n        </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong\n            vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n        <ion-col col-12 class=\"no-padding\">\n          <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n        </ion-col>\n      </ion-row>\n    </div>\n\n  </ion-grid>\n\n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"donga()\" size=\"3\">\n        <img *ngIf=\"ischeckdongaactive\" src=\"./assets/ic_bank/ic_donga_active.png\">\n        <img *ngIf=\"ischeckdonga\" src=\"./assets/ic_bank/ic_donga.png\">\n      </ion-col>\n      <ion-col (click)=\"agri()\" size=\"3\">\n        <img *ngIf=\"ischeckagriactive\" src=\"./assets/ic_bank/ic_agri_active.png\">\n        <img *ngIf=\"ischeckagri\" src=\"./assets/ic_bank/ic_agri.png\">\n      </ion-col>\n      <ion-col (click)=\"bidv()\" size=\"3\">\n        <img *ngIf=\"ischeckbidvactive\" src=\"./assets/ic_bank/ic_bidv_active.png\">\n        <img *ngIf=\"ischeckbidv\" src=\"./assets/ic_bank/ic_bidv.png\">\n      </ion-col>\n      <ion-col (click)=\"sacom()\" size=\"3\">\n        <img *ngIf=\"ischecksacomactive\" src=\"./assets/ic_bank/ic_sacom_active.png\">\n        <img *ngIf=\"ischecksacom\" src=\"./assets/ic_bank/ic_sacom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"rowtwoactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n          <span *ngIf=\"bookingCode\">\n            <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n          </span>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong\n            vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt món ăn</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n        <ion-col col-12 class=\"no-padding\">\n          <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n\n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"hd()\" size=\"3\">\n        <img *ngIf=\"ischeckhdactive\" src=\"./assets/ic_bank/ic_hd_active.svg\">\n        <img *ngIf=\"ischeckhd\" src=\"./assets/ic_bank/ic_hd.svg\">\n      </ion-col>\n      <ion-col (click)=\"scb()\" size=\"3\">\n        <img *ngIf=\"ischeckscbactive\" src=\"./assets/ic_bank/ic_scb_active.svg\">\n        <img *ngIf=\"ischeckscb\" src=\"./assets/ic_bank/ic_scb.svg\">\n      </ion-col>\n      <ion-col (click)=\"ocb()\" size=\"3\">\n        <img *ngIf=\"ischeckocbactive\" class=\"imgbank\" src=\"./assets/ic_bank/ocbactive.png\">\n        <img *ngIf=\"ischeckocb\" class=\"imgbank\" style=\"opacity: 0.5;\" src=\"./assets/ic_bank/ocb.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"rowthreeactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n          <span *ngIf=\"bookingCode\">\n            <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n          </span>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong\n            vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n        <ion-col col-12 class=\"no-padding\">\n          <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodpaymentbank/foodpaymentbank.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/foodpaymentbank/foodpaymentbank.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.row-payment-info {\n  margin-left: -10px;\n  margin-top: -30px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RwYXltZW50YmFuay9mb29kcGF5bWVudGJhbmsucGFnZS5zY3NzIiwic3JjL2FwcC9mb29kcGF5bWVudGJhbmsvZm9vZHBheW1lbnRiYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENBO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDR2xEOztBRERBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0lKOztBREZFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ01KOztBREpBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNPSjs7QURMQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0FDU0o7O0FEUEE7RUFDSSxVQUFBO0FDVUo7O0FEUkE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNXSjs7QURUQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDWUo7O0FEVkE7RUFDSSxtQkFBQTtBQ2FKOztBRFhBO0VBQ0ksaUJBQUE7QUNjSiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RwYXltZW50YmFuay9mb29kcGF5bWVudGJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xyXG59XHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLmJ1dHRvbjFcclxue1xyXG4gICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZGl2LWJ0blxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxyXG59XHJcbi50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9ICBcclxuICAucm93LXBheW1lbnQtaW5mb3tcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4XHJcbiAgfVxyXG4udGV4dC1wYXltZW50LWluZm97XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi50ZXh0LWluZm97XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLnRleHQtbGlua3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxufVxyXG4udGV4dC1ib2xke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubm8tcGFkZGluZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuLmdyaWQtcm93LTF7XHJcbiAgICBtYXJnaW46IC01cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgcGFkZGluZy10b3A6IDExcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbi5ncmlkLXJvdy0ye1xyXG4gICAgbWFyZ2luOiAtNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4ubS1ib3R0b20tMjN7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG59XHJcbi50ZXh0LWNvcHl7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxufSIsIi5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmJ1dHRvbjEge1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZGl2LWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLnJvdy1wYXltZW50LWluZm8ge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4udGV4dC1wYXltZW50LWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udGV4dC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ncmlkLXJvdy0xIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmdyaWQtcm93LTIge1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tLWJvdHRvbS0yMyB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/foodpaymentbank/foodpaymentbank.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/foodpaymentbank/foodpaymentbank.page.ts ***!
  \*********************************************************/
/*! exports provided: FoodpaymentbankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodpaymentbankPage", function() { return FoodpaymentbankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");










let FoodpaymentbankPage = class FoodpaymentbankPage {
    constructor(platform, Roomif, zone, storage, navCtrl, booking, loadingCtrl, gf, toastCtrl, bookCombo, activityService, clipboard, foodService) {
        this.platform = platform;
        this.Roomif = Roomif;
        this.zone = zone;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.booking = booking;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.toastCtrl = toastCtrl;
        this.bookCombo = bookCombo;
        this.activityService = activityService;
        this.clipboard = clipboard;
        this.foodService = foodService;
        this.ischeckvcbactive = true;
        this.isenabled = true;
        this.ischeckocbactive = false;
        this.auth_token = '';
        this.rowoneactive = false;
        this.rowtwoactive = false;
        this.rowthreeactive = false;
        this.textbank = '';
        this.isPaymentFromMytrip = false;
        this.ischeckvietin = true;
        this.ischeckacb = true;
        this.ischecktechcom = true;
        this.ischeckdonga = true;
        this.ischeckagri = true;
        this.ischeckbidv = true;
        this.ischecksacom = true;
        this.ischecktextend = false;
        this.ischecktext = true;
        this.ischeckscb = true;
        this.ischeckocb = true;
        this.text = "";
        this.isenabledbtn = false;
        this.ischeckvcbactive = true;
        this.ischeckhd = true;
        this.paymentMethod = "42";
        this.text = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)<br>Chi nhánh Tp. Hồ Chí Minh<br>Số TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Nội dung thanh toán: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> </li>";
        this.room = Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.rowoneactive = true;
        this.textbank = "Vietcombank";
        this.bankName = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)";
        this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
        this.accountNumber = "007 1000 895 230";
        gf.googleAnalytion('roompaymentbank', 'load', '');
    }
    ;
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
        });
    }
    acb() {
        this.zone.run(() => {
            this.ischeckacbactive = true;
            this.ischeckacb = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckdongaactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckagriactive = false;
            this.ischeckvcbactive = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckdonga = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckagri = true;
            this.ischeckvcb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.text = "Ngân hàng Á Châu (ACB)<br>Chi nhánh Tp. Hồ Chí Minh<br>Số TK: <b>190862589</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b></li>";
            this.ischecktextend = false;
            this.ischecktext = true;
            this.isenabledbtn = false;
            this.paymentMethod = "41";
            this.rowoneactive = true;
            this.rowtwoactive = false;
            this.rowthreeactive = false;
            this.textbank = "ACBbank";
            this.bankName = "Ngân hàng TMCP Á Châu (ACB)";
            this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
            this.accountNumber = "190862589";
        });
    }
    vcb() {
        this.zone.run(() => {
            this.ischeckvcbactive = true;
            this.ischeckvcb = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckdongaactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckagriactive = false;
            this.ischeckacbactive = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckdonga = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckagri = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.ischecktextend = false;
            this.ischecktext = true;
            this.text = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)<br>Chi nhánh Tp. Hồ Chí Minh<br>Số TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Nội dung thanh toán: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> </li>";
            this.isenabledbtn = false;
            this.paymentMethod = "42";
            this.rowoneactive = true;
            this.rowtwoactive = false;
            this.rowthreeactive = false;
            this.textbank = "Vietcombank";
            this.bankName = "Ngân TMCP Ngoại Thương Việt Nam (VCB)";
            this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
            this.accountNumber = "007 1000 895 230";
        });
    }
    vietin() {
        this.zone.run(() => {
            this.ischeckvietinactive = true;
            this.ischeckvcbactive = false;
            this.ischecktechcomactive = false;
            this.ischeckdongaactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckagriactive = false;
            this.ischeckacbactive = false;
            this.ischeckvietin = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischecktechcom = true;
            this.ischeckdonga = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckagri = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.text = "NH VietinBank<br>Chi Nhánh 03, Tp.HCM<br>Số TK: <b>1110 0014 2852</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.ischecktextend = false;
            this.ischecktext = true;
            this.isenabledbtn = false;
            this.paymentMethod = "45";
            this.rowoneactive = true;
            this.rowtwoactive = false;
            this.rowthreeactive = false;
            this.textbank = "Vietinbank";
            this.bankName = "Ngân hàng TMCP Công thương Việt Nam VietinBank";
            this.bankBranch = "Chi Nhánh 03, Tp.HCM";
            this.accountNumber = "1110 0014 2852";
        });
    }
    techcom() {
        this.zone.run(() => {
            this.ischecktechcomactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischeckdongaactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckagriactive = false;
            this.ischeckacbactive = false;
            this.ischecktechcom = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischeckdonga = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckagri = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.text = "NH TMCP Kỹ Thương Việt Nam (Techcombank)<br>Chi nhánh Trần Quang Diệu, Tp.HCM<br>Số TK: <b>19128840912016</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.ischecktextend = false;
            this.ischecktext = true;
            this.isenabledbtn = false;
            this.paymentMethod = "44";
            this.rowoneactive = true;
            this.rowtwoactive = false;
            this.rowthreeactive = false;
            this.textbank = "Techcombank";
            this.bankName = "NH TMCP Kỹ Thương Việt Nam (Techcombank)";
            this.bankBranch = "Chi nhánh Trần Quang Diệu, Tp.HCM";
            this.accountNumber = "19128840912016";
        });
    }
    donga() {
        this.zone.run(() => {
            this.ischeckdongaactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckagriactive = false;
            this.ischeckacbactive = false;
            this.ischeckdonga = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckagri = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "NH TMCP Đông Á (DongABank)<br>Chi nhánh Lê Văn Sỹ, Tp.HCM<br>Số TK: <b>0139 9166 0002</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "43";
            this.rowoneactive = false;
            this.rowtwoactive = true;
            this.rowthreeactive = false;
            this.textbank = "Dongabank";
            this.bankName = "NH TMCP Đông Á (DongABank)";
            this.bankBranch = "Chi nhánh Lê Văn Sỹ, Tp.HCM";
            this.accountNumber = "0139 9166 0002";
        });
    }
    agri() {
        this.zone.run(() => {
            this.ischeckagriactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckbidvactive = false;
            this.ischecksacomactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischeckagri = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckbidv = true;
            this.ischecksacom = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "NH Agribank<br>Chi Nhánh 03, Tp.HCM<br>Số TK: <b>160 2201 361 086</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "47";
            this.rowoneactive = false;
            this.rowtwoactive = true;
            this.rowthreeactive = false;
            this.textbank = "Agribank";
            this.bankName = "Ngân hàng Agribank";
            this.bankBranch = "Chi Nhánh 03, Tp.HCM";
            this.accountNumber = "160 2201 361 086";
        });
    }
    bidv() {
        this.zone.run(() => {
            this.ischeckbidvactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckagriactive = false;
            this.ischecksacomactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischeckbidv = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckagri = true;
            this.ischecksacom = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "NH TM CP Đầu Tư và Phát Triển Việt Nam (BIDV)<br>Chi Nhánh 02, Tp.HCM<br>Số TK: <b>130 1000 147 4890</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "48";
            this.rowoneactive = false;
            this.rowtwoactive = true;
            this.rowthreeactive = false;
            this.textbank = "BIDV";
            this.bankName = "NH TM CP Đầu Tư và Phát Triển Việt Nam (BIDV)";
            this.bankBranch = "Chi Nhánh 02, Tp.HCM";
            this.accountNumber = "130 1000 147 4890";
        });
    }
    sacom() {
        this.zone.run(() => {
            this.ischecksacomactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckagriactive = false;
            this.ischeckbidvactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischecksacom = false;
            this.ischeckscbactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckagri = true;
            this.ischeckbidv = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischeckscb = true;
            this.ischeckhd = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "Ngân Hàng TMCP Sài Gòn Thương Tín (Sacombank)<br>Chi nhánh Cao Thắng, Tp.HCM<br>Số TK: <b>060 0952 73354</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "46";
            this.rowoneactive = false;
            this.rowtwoactive = true;
            this.rowthreeactive = false;
            this.textbank = "Sacombank";
            this.bankName = "Ngân Hàng TMCP Sài Gòn Thương Tín (Sacombank)";
            this.bankBranch = "Chi nhánh Cao Thắng, Tp.HCM";
            this.accountNumber = "060 0952 73354";
        });
    }
    hd() {
        this.zone.run(() => {
            this.ischeckhdactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckagriactive = false;
            this.ischeckbidvactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischeckhd = false;
            this.ischecksacomactive = false;
            this.ischeckscbactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckagri = true;
            this.ischeckbidv = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischecksacom = true;
            this.ischeckscb = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "Ngân hàng HDBANK<br>Chi nhánh Sài gòn<br>Số TK: <b>052704070018649</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "50";
            this.rowoneactive = false;
            this.rowtwoactive = false;
            this.rowthreeactive = true;
            this.textbank = "HDBank";
            this.bankName = "Ngân hàng HDBANK";
            this.bankBranch = "Chi nhánh Sài gòn";
            this.accountNumber = "052704070018649";
        });
    }
    scb() {
        this.zone.run(() => {
            this.ischeckscbactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckagriactive = false;
            this.ischeckbidvactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischecksacom = false;
            this.ischeckscb = false;
            this.ischecksacomactive = false;
            this.ischeckhdactive = false;
            this.ischeckocbactive = false;
            this.ischeckocb = true;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckagri = true;
            this.ischeckbidv = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischecksacom = true;
            this.ischeckhd = true;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.text = "Ngân Hàng Sài Gòn (SCB)<br>Chi nhánh Phú Đông<br>Số TK: <b>023 0109 7937 00001</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b>";
            this.isenabledbtn = false;
            this.paymentMethod = "49";
            this.rowoneactive = false;
            this.rowtwoactive = false;
            this.rowthreeactive = true;
            this.textbank = "SCB";
            this.bankName = "Ngân Hàng Sài Gòn (SCB)";
            this.bankBranch = "Chi nhánh Phú Đông";
            this.accountNumber = "023 0109 7937 00001";
        });
    }
    ocb() {
        this.zone.run(() => {
            this.ischeckocbactive = true;
            this.ischeckvcbactive = false;
            this.ischeckvietinactive = false;
            this.ischecktechcomactive = false;
            this.ischeckagriactive = false;
            this.ischeckbidvactive = false;
            this.ischeckdongaactive = false;
            this.ischeckacbactive = false;
            this.ischecksacom = false;
            this.ischeckscb = false;
            this.ischecksacomactive = false;
            this.ischeckhdactive = false;
            this.ischeckscbactive = false;
            this.ischeckvcb = true;
            this.ischeckvietin = true;
            this.ischecktechcom = true;
            this.ischeckagri = true;
            this.ischeckbidv = true;
            this.ischeckdonga = true;
            this.ischeckacb = true;
            this.ischecksacom = true;
            this.ischeckhd = true;
            this.ischeckscb = true;
            this.ischeckocb = false;
            this.ischecktextend = true;
            this.ischecktext = false;
            this.isenabledbtn = false;
            this.paymentMethod = "53";
            this.rowoneactive = false;
            this.rowtwoactive = false;
            this.rowthreeactive = true;
            this.textbank = "OCB";
            this.bankName = "Ngân hàng Phương Đông (OCB)";
            this.bankBranch = "Chợ Lớn, TP.HCM";
            this.accountNumber = "001 7101 6190 02045";
        });
    }
    next() {
        var se = this;
        this.presentLoading();
        se.gf.CreateBooking(se.foodService.objBooking).then(data => {
            data = JSON.parse(data);
            if (data.status == 1) {
                se.bookingCode = data.response.bookingCode;
                se.foodService.PeriodPaymentDate = data.response.periodPaymentDate;
                se.gf.Updatefoodpaytype(se.bookingCode, se.paymentMethod).then(datatype => {
                    if (datatype) {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_8__["C"].urls.baseUrl.urlERPFood + "/api/erp/Email/getEmail?request=" + data.response.bookingCode;
                        se.gf.RequestApi("GET", url, {}, {}, "", "").then((dataemail) => {
                            se.foodService.ischeckpayment = '0';
                            se.navCtrl.navigateForward('foodpaymentdone/' + data.response.bookingCode + '/' + data.response.startDate + '/' + data.response.endDate);
                        });
                    }
                });
            }
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.back();
    }
    presentToastr(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    openPaymentLink() {
        var se = this, bankid = null, url = '';
        if (se.ischeckvcbactive) {
            bankid = 1;
            url = 'https://www.vietcombank.com.vn/IBanking2020';
        }
        else if (se.ischeckacbactive) {
            url = 'https://online.acb.com.vn/acbib';
        }
        else if (se.ischeckvietinactive) {
            bankid = 4;
            url = 'https://ebanking.vietinbank.vn/rcas';
        }
        else if (se.ischecktechcomactive) {
            bankid = 2;
            url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
        }
        else if (se.ischeckdongaactive) {
            bankid = 6;
            url = 'https://ebanking.dongabank.com.vn/khcn/';
        }
        else if (se.ischeckagriactive) {
            bankid = 24;
            url = 'https://ibank.agribank.com.vn/ibank';
        }
        else if (se.ischeckbidvactive) {
            bankid = 19;
            url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
        }
        else if (se.ischecksacomactive) {
            bankid = 16;
            url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
        }
        else if (se.ischeckhdactive) {
            bankid = 7;
            url = 'https://ebanking.hdbank.vn/ipc/vi/';
        }
        else if (se.ischeckscbactive) {
            bankid = 25;
            url = 'https://ebanking.scb.com.vn/?module=login';
        }
    }
    copyClipboard(type) {
        if (type == 1) {
            this.clipboard.copy(this.accountNumber);
        }
        else if (type == 2) {
            this.clipboard.copy("Người thụ hưởng: Công ty Cổ Phần IVIVU.COM");
        }
        else if (type == 3) {
            this.clipboard.copy(this.bookingCode);
        }
        this.presentToastr('Đã sao chép');
    }
};
FoodpaymentbankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foodpaymentbank',
        template: __webpack_require__(/*! ./foodpaymentbank.page.html */ "./src/app/foodpaymentbank/foodpaymentbank.page.html"),
        styles: [__webpack_require__(/*! ./foodpaymentbank.page.scss */ "./src/app/foodpaymentbank/foodpaymentbank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_2__["Bookcombo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_6__["ActivityService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"], _providers_foodService__WEBPACK_IMPORTED_MODULE_1__["foodService"]])
], FoodpaymentbankPage);



/***/ })

}]);
//# sourceMappingURL=foodpaymentbank-foodpaymentbank-module.js.map