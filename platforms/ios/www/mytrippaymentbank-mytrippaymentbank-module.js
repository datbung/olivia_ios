(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mytrippaymentbank-mytrippaymentbank-module"],{

/***/ "./src/app/mytrippaymentbank/mytrippaymentbank.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/mytrippaymentbank/mytrippaymentbank.module.ts ***!
  \***************************************************************/
/*! exports provided: MytrippaymentbankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytrippaymentbankPageModule", function() { return MytrippaymentbankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mytrippaymentbank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mytrippaymentbank.page */ "./src/app/mytrippaymentbank/mytrippaymentbank.page.ts");







const routes = [
    {
        path: '',
        component: _mytrippaymentbank_page__WEBPACK_IMPORTED_MODULE_6__["MytrippaymentbankPage"]
    }
];
let MytrippaymentbankPageModule = class MytrippaymentbankPageModule {
};
MytrippaymentbankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_mytrippaymentbank_page__WEBPACK_IMPORTED_MODULE_6__["MytrippaymentbankPage"]]
    })
], MytrippaymentbankPageModule);



/***/ }),

/***/ "./src/app/mytrippaymentbank/mytrippaymentbank.page.html":
/*!***************************************************************!*\
  !*** ./src/app/mytrippaymentbank/mytrippaymentbank.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n                <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n                <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            \n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<img src=\"./assets/step/step_3.svg\">\n<ion-grid class=\"grid-row-1\">\n  <ion-row >\n    <ion-col (click)=\"vcb()\" size=\"3\">\n      <img *ngIf=\"ischeckvcbactive\" src=\"./assets/ic_bank/iv_vcb_active.png\">\n      <img *ngIf=\"ischeckvcb\" src=\"./assets/ic_bank/iv_vcb.png\">\n    </ion-col>\n    <ion-col (click)=\"acb()\" size=\"3\">\n      <img *ngIf=\"ischeckacbactive\" src=\"./assets/ic_bank/ic_acb_active.png\">\n      <img *ngIf=\"ischeckacb\" src=\"./assets/ic_bank/ic_acb.png\">\n    </ion-col>\n    <ion-col (click)=\"vietin()\" size=\"3\">\n      <img *ngIf=\"ischeckvietinactive\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n      <img *ngIf=\"ischeckvietin\" src=\"./assets/ic_bank/ic_vietin.png\">\n    </ion-col>\n    <ion-col (click)=\"techcom()\" size=\"3\">\n      <img *ngIf=\"ischecktechcomactive\" src=\"./assets/ic_bank/ic_techcom_active.png\">\n      <img *ngIf=\"ischecktechcom\" src=\"./assets/ic_bank/ic_techcom.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid *ngIf=\"rowoneactive\" class=\"no-padding\">\n    <ion-row >\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap >\n            {{bankName}}\n            <br>{{bankBranch}}\n            <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n            <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a> \n            <br>Nội dung thanh toán: <b class=\"color-red\">{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row >\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n              <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n    \n</ion-grid>\n\n<ion-grid class=\"grid-row-2\">\n  <ion-row>\n    <ion-col (click)=\"donga()\" size=\"3\">\n      <img *ngIf=\"ischeckdongaactive\" src=\"./assets/ic_bank/ic_donga_active.png\">\n      <img *ngIf=\"ischeckdonga\" src=\"./assets/ic_bank/ic_donga.png\">\n    </ion-col>\n    <ion-col (click)=\"agri()\" size=\"3\">\n      <img *ngIf=\"ischeckagriactive\" src=\"./assets/ic_bank/ic_agri_active.png\">\n      <img *ngIf=\"ischeckagri\" src=\"./assets/ic_bank/ic_agri.png\">\n    </ion-col>\n    <ion-col (click)=\"bidv()\" size=\"3\">\n      <img *ngIf=\"ischeckbidvactive\" src=\"./assets/ic_bank/ic_bidv_active.png\">\n      <img *ngIf=\"ischeckbidv\" src=\"./assets/ic_bank/ic_bidv.png\">\n    </ion-col>\n    <ion-col (click)=\"sacom()\" size=\"3\">\n      <img *ngIf=\"ischecksacomactive\" src=\"./assets/ic_bank/ic_sacom_active.png\">\n      <img *ngIf=\"ischecksacom\" src=\"./assets/ic_bank/ic_sacom.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid *ngIf=\"rowtwoactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-payment-info\" text-wrap >\n              {{bankName}}\n              <br>{{bankBranch}}\n              <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Nội dung thanh toán: <b class=\"color-red\">{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n              <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-grid>\n\n<ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"hd()\" size=\"3\">\n        <img *ngIf=\"ischeckhdactive\" src=\"./assets/ic_bank/ic_hd_active.svg\">\n        <img *ngIf=\"ischeckhd\" src=\"./assets/ic_bank/ic_hd.svg\">\n      </ion-col>\n      <ion-col (click)=\"scb()\" size=\"3\">\n        <img *ngIf=\"ischeckscbactive\" src=\"./assets/ic_bank/ic_scb_active.svg\">\n        <img *ngIf=\"ischeckscb\" src=\"./assets/ic_bank/ic_scb.svg\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-grid *ngIf=\"rowthreeactive\" class=\"no-padding\">\n    <ion-row >\n      <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-payment-info\" text-wrap >\n              {{bankName}}\n              <br>{{bankBranch}}\n              <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Nội dung thanh toán: <b class=\"color-red\">{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n            <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-grid>\n<!-- <ion-row style=\"margin-top: 20px\">\n  <ion-checkbox (ionChange)=\"check()\"  [(ngModel)]=\"ischeck\" color=\"secondary\"  ></ion-checkbox>\n  <ion-label style=\"margin: 0 10px\" text-wrap>Tôi đồng ý các\n    <a href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\" target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n</ion-row> -->\n<!-- <div class=\"div-btn\">\n  <button (click)=\"select()\" ion-button round outline class=\"button1\">Chọn phương thức thanh toán khác</button>\n</div> -->\n</ion-content>\n<ion-footer>\n  <!-- <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"uppayment()\" ion-button round outline class=\"button button3\">Tải lên biên lai chuyển tiền</button>\n  </div> -->\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/mytrippaymentbank/mytrippaymentbank.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/mytrippaymentbank/mytrippaymentbank.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n  font-weight: 500 !important;\n  font-size: 20px !important;\n  border-radius: 6px;\n}\n\n.button3 {\n  color: #ff9500;\n  border-radius: 6px;\n  background-color: rgba(245, 146, 51, 0.1);\n  font-weight: 600;\n  width: 90%;\n  margin: 8px 0 !important;\n  font-weight: 500 !important;\n  font-size: 20px !important;\n  border-radius: 6px;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.row-payment-info {\n  margin-left: -10px;\n  margin-top: -30px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n\n.color-red {\n  color: #e52822;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9teXRyaXBwYXltZW50YmFuay9teXRyaXBwYXltZW50YmFuay5wYWdlLnNjc3MiLCJzcmMvYXBwL215dHJpcHBheW1lbnRiYW5rL215dHJpcHBheW1lbnRiYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFFSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQVI7O0FERUk7RUFFSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREVJO0VBRUkseUJBQUE7RUFBMkIsa0JBQUE7RUFBbUIsZ0JBQUE7QUNFdEQ7O0FEQUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDR1I7O0FERE07RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDSVI7O0FERkk7RUFDSSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDS1I7O0FESEk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQ01SOztBREpJO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtBQ09SOztBRExJO0VBQ0ksZ0JBQUE7QUNRUjs7QUROSTtFQUNJLFVBQUE7QUNTUjs7QURQSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1VSOztBRFJJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7QUNXUjs7QURUSTtFQUNJLG1CQUFBO0FDWVI7O0FEVkk7RUFDSSxpQkFBQTtBQ2FSOztBRFhJO0VBQ0ksY0FBQTtBQ2NSIiwiZmlsZSI6InNyYy9hcHAvbXl0cmlwcGF5bWVudGJhbmsvbXl0cmlwcGF5bWVudGJhbmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICAgLmJ1dHRvbjJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAuYnV0dG9uM1xuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDE0NiwgNTEsIDAuMSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIH1cbiAgICAuYnV0dG9uMVxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1idG5cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgICB9ICBcbiAgICAgIC5yb3ctcGF5bWVudC1pbmZve1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4XG4gICAgICB9XG4gICAgLnRleHQtcGF5bWVudC1pbmZve1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnRleHQtaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWxpbmt7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgIH1cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAubm8tcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmdyaWQtcm93LTF7XG4gICAgICAgIG1hcmdpbjogLTVweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5ncmlkLXJvdy0ye1xuICAgICAgICBtYXJnaW46IC01cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5tLWJvdHRvbS0yM3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICB9XG4gICAgLnRleHQtY29weXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxuICAgIC5jb2xvci1yZWR7XG4gICAgICAgIGNvbG9yOiAjZTUyODIyXG4gICAgfSIsIi5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG5cbi5idXR0b24zIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDE0NiwgNTEsIDAuMSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogOHB4IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uYnV0dG9uMSB7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaXYtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4ucm93LXBheW1lbnQtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi50ZXh0LXBheW1lbnQtaW5mbyB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50ZXh0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdyaWQtcm93LTEge1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZ3JpZC1yb3ctMiB7XG4gIG1hcmdpbjogLTVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm0tYm90dG9tLTIzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cblxuLnRleHQtY29weSB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uY29sb3ItcmVkIHtcbiAgY29sb3I6ICNlNTI4MjI7XG59Il19 */"

/***/ }),

/***/ "./src/app/mytrippaymentbank/mytrippaymentbank.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/mytrippaymentbank/mytrippaymentbank.page.ts ***!
  \*************************************************************/
/*! exports provided: MytrippaymentbankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytrippaymentbankPage", function() { return MytrippaymentbankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");
/* harmony import */ var _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../providers/mytrip-service.service */ "./src/app/providers/mytrip-service.service.ts");
/* harmony import */ var _providers_flightService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../providers/flightService */ "./src/app/providers/flightService.ts");











let MytrippaymentbankPage = class MytrippaymentbankPage {
    constructor(platform, zone, storage, navCtrl, booking, loadingCtrl, gf, toastCtrl, bookCombo, activityService, clipboard, safariViewController, _mytripservice, _flightService, valueGlobal) {
        this.platform = platform;
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
        this.safariViewController = safariViewController;
        this._mytripservice = _mytripservice;
        this._flightService = _flightService;
        this.valueGlobal = valueGlobal;
        this.ischeckvcbactive = true;
        this.isenabled = true;
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
        this.text = "";
        this.isenabledbtn = false;
        this.ischeckvcbactive = true;
        this.ischeckhd = true;
        this.paymentMethod = "42";
        this.text = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)<br>Chi nhánh Tp. Hồ Chí Minh<br>Số TK: <b>007 1000 895 230</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> <br>Nội dung thanh toán: <b>{{totalPrice}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> </li>";
        this.rowoneactive = true;
        this.textbank = "Vietcombank";
        this.bankName = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)";
        this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
        this.accountNumber = "007 1000 895 230";
        this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
        gf.googleAnalytion('roompaymentbank', 'load', '');
    }
    ngOnInit() {
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goback() {
        this.navCtrl.back();
        this.activityService.objPaymentMytrip = null;
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
        if (bankid) {
        }
        else {
            se.gf.showToastWarning('Vui lòng chọn ngân hàng thanh toán.');
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
    next() {
        if (this._mytripservice.isFlightPaymentBank) {
            this._flightService.itemTabFlightActive.emit(true);
            this.valueGlobal.backValue = "homeflight";
            this._flightService.itemMenuFlightClick.emit(2);
        }
        this._flightService.bookingCodePayment = this.bookingCode;
        this._flightService.bookingSuccess = true;
        this._mytripservice.isFlightPaymentBank = false;
        this._mytripservice.orderPageState.emit(1);
        this.navCtrl.navigateBack('/tabs/tab1');
    }
    uppayment() {
        this.navCtrl.navigateForward('/mytripuppayment');
    }
};
MytrippaymentbankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-mytrippaymentbank',
        template: __webpack_require__(/*! ./mytrippaymentbank.page.html */ "./src/app/mytrippaymentbank/mytrippaymentbank.page.html"),
        styles: [__webpack_require__(/*! ./mytrippaymentbank.page.scss */ "./src/app/mytrippaymentbank/mytrippaymentbank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_5__["ActivityService"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Clipboard"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_6__["SafariViewController"], _providers_mytrip_service_service__WEBPACK_IMPORTED_MODULE_8__["MytripService"],
        _providers_flightService__WEBPACK_IMPORTED_MODULE_9__["flightService"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["ValueGlobal"]])
], MytrippaymentbankPage);



/***/ }),

/***/ "./src/app/providers/mytrip-service.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/providers/mytrip-service.service.ts ***!
  \*****************************************************/
/*! exports provided: MytripService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripService", function() { return MytripService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MytripService = class MytripService {
    constructor() {
        this.mylistOrders = [];
        this.orderPageState = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemLoginUser = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemEnableHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totalHistoryFoodCountText = "";
    }
};
MytripService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MytripService);



/***/ })

}]);
//# sourceMappingURL=mytrippaymentbank-mytrippaymentbank-module.js.map