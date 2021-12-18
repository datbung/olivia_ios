(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentbank-roompaymentbank-module"],{

/***/ "./src/app/roompaymentbank/roompaymentbank.html":
/*!******************************************************!*\
  !*** ./src/app/roompaymentbank/roompaymentbank.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoompaymentbankPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n      <ion-row>\n        <ion-col style=\"text-align: center;height: 48px;\">\n          <div style=\"align-self: center\" >\n            <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n                <!-- <ion-icon color=\"dark-tint\" (click)=\"goback()\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n                <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\" src=\"./assets/imgs/ios-arrow-round-back.svg\" >\n            </div>\n            \n            <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thanh toán</label></div>\n          </div>\n        </ion-col>\n      </ion-row>\n      </ion-toolbar>\n</ion-header>\n<ion-content padding>\n<img src=\"./assets/step/step_3.svg\">\n<ion-grid class=\"grid-row-1\">\n  <ion-row >\n    <ion-col (click)=\"vcb()\" size=\"3\">\n      <img *ngIf=\"ischeckvcbactive\" src=\"./assets/ic_bank/iv_vcb_active.png\">\n      <img *ngIf=\"ischeckvcb\" src=\"./assets/ic_bank/iv_vcb.png\">\n    </ion-col>\n    <ion-col (click)=\"acb()\" size=\"3\">\n      <img *ngIf=\"ischeckacbactive\" src=\"./assets/ic_bank/ic_acb_active.png\">\n      <img *ngIf=\"ischeckacb\" src=\"./assets/ic_bank/ic_acb.png\">\n    </ion-col>\n    <ion-col (click)=\"vietin()\" size=\"3\">\n      <img *ngIf=\"ischeckvietinactive\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n      <img *ngIf=\"ischeckvietin\" src=\"./assets/ic_bank/ic_vietin.png\">\n    </ion-col>\n    <ion-col (click)=\"techcom()\" size=\"3\">\n      <img *ngIf=\"ischecktechcomactive\" src=\"./assets/ic_bank/ic_techcom_active.png\">\n      <img *ngIf=\"ischecktechcom\" src=\"./assets/ic_bank/ic_techcom.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid *ngIf=\"rowoneactive\" class=\"no-padding\">\n    <ion-row >\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap >\n            {{bankName}}\n            <br>{{bankBranch}}\n            <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n            <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a> \n            <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a>\n        </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row >\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n              <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n    \n</ion-grid>\n\n<ion-grid class=\"grid-row-2\">\n  <ion-row>\n    <ion-col (click)=\"donga()\" size=\"3\">\n      <img *ngIf=\"ischeckdongaactive\" src=\"./assets/ic_bank/ic_donga_active.png\">\n      <img *ngIf=\"ischeckdonga\" src=\"./assets/ic_bank/ic_donga.png\">\n    </ion-col>\n    <ion-col (click)=\"agri()\" size=\"3\">\n      <img *ngIf=\"ischeckagriactive\" src=\"./assets/ic_bank/ic_agri_active.png\">\n      <img *ngIf=\"ischeckagri\" src=\"./assets/ic_bank/ic_agri.png\">\n    </ion-col>\n    <ion-col (click)=\"bidv()\" size=\"3\">\n      <img *ngIf=\"ischeckbidvactive\" src=\"./assets/ic_bank/ic_bidv_active.png\">\n      <img *ngIf=\"ischeckbidv\" src=\"./assets/ic_bank/ic_bidv.png\">\n    </ion-col>\n    <ion-col (click)=\"sacom()\" size=\"3\">\n      <img *ngIf=\"ischecksacomactive\" src=\"./assets/ic_bank/ic_sacom_active.png\">\n      <img *ngIf=\"ischecksacom\" src=\"./assets/ic_bank/ic_sacom.png\">\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid *ngIf=\"rowtwoactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-payment-info\" text-wrap >\n              {{bankName}}\n              <br>{{bankBranch}}\n              <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n              <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-grid>\n\n<ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"hd()\" size=\"3\">\n        <img *ngIf=\"ischeckhdactive\" src=\"./assets/ic_bank/ic_hd_active.svg\">\n        <img *ngIf=\"ischeckhd\" src=\"./assets/ic_bank/ic_hd.svg\">\n      </ion-col>\n      <ion-col (click)=\"scb()\" size=\"3\">\n        <img *ngIf=\"ischeckscbactive\" src=\"./assets/ic_bank/ic_scb_active.svg\">\n        <img *ngIf=\"ischeckscb\" src=\"./assets/ic_bank/ic_scb.svg\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-grid *ngIf=\"rowthreeactive\" class=\"no-padding\">\n    <ion-row >\n      <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-payment-info\" text-wrap >\n              {{bankName}}\n              <br>{{bankBranch}}\n              <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> \n              <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          </p>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"isPaymentFromMytrip\">\n      <ion-row>\n        <ion-col col-12 class=\"no-padding\">\n          <p class=\"text-info\">Mời quý khách thanh toán số tiền <span class=\"text-bold\">{{totalPrice}}</span> VND trong vòng <span class=\"text-bold\">12 tiếng</span> để hoàn tất việc đặt phòng.</p>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"m-bottom-23\" (click)=\"openPaymentLink()\">\n          <ion-col col-12 class=\"no-padding\">\n            <a class=\"text-info text-link\">Mở website/ứng dụng {{textbank}}</a>\n          </ion-col>\n      </ion-row>\n    </div>\n</ion-grid>\n<!-- <ion-row style=\"margin-top: 20px\">\n  <ion-checkbox (ionChange)=\"check()\"  [(ngModel)]=\"ischeck\" color=\"secondary\"  ></ion-checkbox>\n  <ion-label style=\"margin: 0 10px\" text-wrap>Tôi đồng ý các\n    <a href=\"https://www.ivivu.com/dieu-kien-dieu-khoan#_ga=2.57476458.1764320674.1515981153-1221826856.1508314634&amp;_gac=1.220489260.1514193346.EAIaIQobChMIt66T4Omk2AIV0UQrCh1dIwosEAEYASAAEgI48PD_BwE\" target=\"_blank\">điều khoản</a> đặt phòng và hủy phòng của khách sạn và iVIVU.com</ion-label>\n</ion-row> -->\n<!-- <div class=\"div-btn\">\n  <button (click)=\"select()\" ion-button round outline class=\"button1\">Chọn phương thức thanh toán khác</button>\n</div> -->\n</ion-content>\n<ion-footer>\n<div style=\"background-color: #ffffff; text-align: center\" *ngIf=\"!isPaymentFromMytrip else paymentmytrip\">\n  <button [disabled]=\"isenabledbtn\" (click)=\"next()\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n</div>\n<ng-template #paymentmytrip>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button [disabled]=\"isenabledbtn\" (click)=\"done()\" ion-button round outline class=\"button button2\">Hoàn thành</button>\n  </div>\n</ng-template>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roompaymentbank/roompaymentbank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/roompaymentbank/roompaymentbank.module.ts ***!
  \***********************************************************/
/*! exports provided: RoompaymentbankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbankPageModule", function() { return RoompaymentbankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roompaymentbank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roompaymentbank */ "./src/app/roompaymentbank/roompaymentbank.ts");






let RoompaymentbankPageModule = class RoompaymentbankPageModule {
};
RoompaymentbankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roompaymentbank__WEBPACK_IMPORTED_MODULE_5__["RoompaymentbankPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roompaymentbank__WEBPACK_IMPORTED_MODULE_5__["RoompaymentbankPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoompaymentbankPageModule);



/***/ }),

/***/ "./src/app/roompaymentbank/roompaymentbank.scss":
/*!******************************************************!*\
  !*** ./src/app/roompaymentbank/roompaymentbank.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.row-payment-info {\n  margin-left: -10px;\n  margin-top: -30px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvcm9vbXBheW1lbnRiYW5rL3Jvb21wYXltZW50YmFuay5zY3NzIiwic3JjL2FwcC9yb29tcGF5bWVudGJhbmsvcm9vbXBheW1lbnRiYW5rLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxxQkFBQTtFQUNBLHlCQUFBO0FDQVI7O0FERUk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0V0RDs7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURETTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNJUjs7QURGSTtFQUNJLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNLUjs7QURISTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDTVI7O0FESkk7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FDT1I7O0FETEk7RUFDSSxnQkFBQTtBQ1FSOztBRE5JO0VBQ0ksVUFBQTtBQ1NSOztBRFBJO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDVVI7O0FEUkk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ1dSOztBRFRJO0VBQ0ksbUJBQUE7QUNZUjs7QURWSTtFQUNJLGlCQUFBO0FDYVIiLCJmaWxlIjoic3JjL2FwcC9yb29tcGF5bWVudGJhbmsvcm9vbXBheW1lbnRiYW5rLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmJ1dHRvbjFcbiAgICB7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtYnRuXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxuICAgIH1cbiAgICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgfSAgXG4gICAgICAucm93LXBheW1lbnQtaW5mb3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMzBweFxuICAgICAgfVxuICAgIC50ZXh0LXBheW1lbnQtaW5mb3tcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC50ZXh0LWluZm97XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1saW5re1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICB9XG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm5vLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5ncmlkLXJvdy0xe1xuICAgICAgICBtYXJnaW46IC01cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuZ3JpZC1yb3ctMntcbiAgICAgICAgbWFyZ2luOiAtNXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAubS1ib3R0b20tMjN7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgfVxuICAgIC50ZXh0LWNvcHl7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH0iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5yb3ctcGF5bWVudC1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRleHQtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ3JpZC1yb3ctMSB7XG4gIG1hcmdpbjogLTVweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5ncmlkLXJvdy0yIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubS1ib3R0b20tMjMge1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4udGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/roompaymentbank/roompaymentbank.ts":
/*!****************************************************!*\
  !*** ./src/app/roompaymentbank/roompaymentbank.ts ***!
  \****************************************************/
/*! exports provided: RoompaymentbankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbankPage", function() { return RoompaymentbankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");













let RoompaymentbankPage = class RoompaymentbankPage {
    constructor(platform, Roomif, zone, storage, navCtrl, booking, loadingCtrl, gf, toastCtrl, bookCombo, activityService, iab, clipboard, safariViewController) {
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
        this.iab = iab;
        this.clipboard = clipboard;
        this.safariViewController = safariViewController;
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
        this.room = Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.rowoneactive = true;
        this.textbank = "Vietcombank";
        this.bankName = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)";
        this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
        this.accountNumber = "007 1000 895 230";
        if (this.Roomif && this.Roomif.priceshow) {
            this.totalPrice = this.Roomif.priceshow;
        }
        if (this.activityService.objPaymentMytrip && this.activityService.objPaymentMytrip.trip.priceShow) {
            this.totalPrice = this.activityService.objPaymentMytrip.trip.priceShow;
            this.bookingCode = this.activityService.objPaymentMytrip.trip.booking_id;
            this.isPaymentFromMytrip = true;
        }
        gf.googleAnalytion('roompaymentbank', 'load', '');
    }
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
    next() {
        var se = this;
        if (!this.activityService.objPaymentMytrip) {
            this.presentLoading();
            this.jsonroom.RoomClasses = this.room;
            this.timestamp = Date.now();
            if (se.booking.CEmail) {
                var Invoice = 0;
                if (se.Roomif.order) {
                    Invoice = 1;
                }
                var options = {
                    method: 'POST',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: {
                        RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                        CName: se.Roomif.hoten,
                        CEmail: se.booking.CEmail,
                        CPhone: se.Roomif.phone,
                        timestamp: se.timestamp,
                        HotelID: se.booking.HotelId,
                        paymentMethod: se.paymentMethod,
                        note: se.Roomif.notetotal,
                        source: '6',
                        MemberToken: se.auth_token,
                        CustomersStr: JSON.stringify(se.Roomif.arrcustomer),
                        UsePointPrice: se.Roomif.pricepoint,
                        NoteCorp: se.Roomif.order,
                        Invoice: Invoice,
                        UserPoints: se.Roomif.point,
                        CheckInDate: se.jsonroom.CheckInDate,
                        CheckOutDate: se.jsonroom.CheckOutDate,
                        TotalNight: se.jsonroom.TotalNight,
                        MealTypeIndex: se.booking.indexmealtype,
                        CompanyName: se.Roomif.companyname,
                        CompanyAddress: se.Roomif.address,
                        CompanyTaxCode: se.Roomif.tax,
                        BillingAddress: se.Roomif.addressorder,
                        promotionCode: se.Roomif.promocode,
                        comboid: se.bookCombo.ComboId,
                        PenaltyDescription: se.Roomif.textcancel,
                        companycontactname: this.Roomif.nameOrder
                    },
                    json: true
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentbank",
                            func: "next",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentbank";
                        error.func = "next";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    ;
                    if (body) {
                        if (body.error == 0) {
                            var code = body.code;
                            var stt = body.bookingStatus;
                            se.clearClonePage('page-roompaymentdone');
                            se.loader.dismiss();
                            se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + stt);
                        }
                        else {
                            se.loader.dismiss();
                            alert(body.Msg);
                        }
                    }
                    else {
                        error.page = "roompaymentbank";
                        error.func = "next";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                        se.loader.dismiss();
                        alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                    }
                });
            }
            else {
                se.loader.dismiss();
                se.presentToastr('Email không hợp lệ. Vui lòng kiểm tra lại.');
            }
        }
        else {
            let trip = this.activityService.objPaymentMytrip.trip;
            var code = trip.booking_id;
            var stt = trip.payment_status;
            se.activityService.objPaymentMytrip.textPayment = se.text;
            se.activityService.objPaymentMytrip.textLinkPayment = "Mở website/ứng dụng " + se.textbank;
            se.activityService.objPaymentMytrip.bankName = se.bankName;
            se.activityService.objPaymentMytrip.bankBranch = se.bankBranch;
            se.activityService.objPaymentMytrip.accountNumber = se.accountNumber;
            let url = '';
            if (se.ischeckvcbactive) {
                url = 'https://www.vietcombank.com.vn/IBanking2020';
            }
            else if (se.ischeckacbactive) {
                url = 'https://online.acb.com.vn/acbib';
            }
            else if (se.ischeckvietinactive) {
                url = 'https://ebanking.vietinbank.vn/rcas';
            }
            else if (se.ischecktechcomactive) {
                url = 'https://ib.techcombank.com.vn/servlet/BrowserServlet';
            }
            else if (se.ischeckdongaactive) {
                url = 'https://ebanking.dongabank.com.vn/khcn/';
            }
            else if (se.ischeckagriactive) {
                url = 'https://ibank.agribank.com.vn/ibank';
            }
            else if (se.ischeckbidvactive) {
                url = 'https://www.bidv.vn:81/iportalweb/iRetail@1';
            }
            else if (se.ischecksacomactive) {
                url = 'https://www.isacombank.com.vn/corp/AuthenticationController?FORMSGROUP_ID__=AuthenticationFG&__START_TRAN_FLAG__=Y&FG_BUTTONS__=LOAD&ACTION.LOAD=Y&AuthenticationFG.LOGIN_FLAG=1&BANK_ID=303&LANGUAGE_ID=003';
            }
            else if (se.ischeckhdactive) {
                url = 'https://ebanking.hdbank.vn/ipc/vi/';
            }
            else if (se.ischeckscbactive) {
                url = 'https://ebanking.scb.com.vn/?module=login';
            }
            se.activityService.objPaymentMytrip.urlPayment = url;
            se.navCtrl.navigateForward('/roompaymentdoneean/' + code + '/' + se.totalPrice + '/' + 1);
        }
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentbank",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning",
                            param: JSON.stringify(options)
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentbank";
                        error.func = "refreshToken";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                    }
                    else {
                        var au = JSON.parse(body);
                        se.zone.run(() => {
                            se.storage.remove('auth_token');
                            se.storage.set('auth_token', au.auth_token);
                            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_8___default()(au.auth_token);
                            se.storage.remove('point');
                            se.storage.set('point', decoded.point);
                        });
                    }
                });
            }
        });
    }
    clearClonePage(pagename) {
        let elements = [];
        elements = Array.from(document.querySelectorAll(pagename));
        if (elements != null && elements.length > 0) {
            elements.forEach(el => {
                if (el != null && el.length > 0) {
                    el.remove();
                }
            });
        }
    }
    select() {
        this.navCtrl.back();
    }
    check() {
        if (this.ischeck) {
            this.isenabled = false;
        }
        else {
            this.isenabled = true;
        }
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
            se.openWebpage(url);
        }
        else {
            se.gf.showToastWarning('Vui lòng chọn ngân hàng thanh toán.');
        }
    }
    openWebpage(url) {
        var se = this;
        this.safariViewController.isAvailable()
            .then((available) => {
            if (available) {
                this.safariViewController.show({
                    url: url,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#23BFD8'
                })
                    .subscribe((result) => {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed') {
                        var options = {
                            method: 'GET',
                            url: _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlPost + '/mCheckBooking',
                            qs: { code: se.activityService.objPaymentMytrip.trip.code },
                            headers: {}
                        };
                        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response, body) {
                            if (response.statusCode != 200) {
                                var objError = {
                                    page: "roomchoosebank",
                                    func: "roomchoosebank-mCheckBooking",
                                    message: response.statusMessage,
                                    content: response.body,
                                    type: "warning",
                                    param: JSON.stringify(options)
                                };
                                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(objError, response);
                            }
                            if (error) {
                                error.page = "roomchoosebank";
                                error.func = "roomchoosebank-mCheckBooking";
                                error.param = JSON.stringify(options);
                                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                            }
                            ;
                            if (body) {
                                var rs = JSON.parse(body);
                                if (rs.StatusBooking == 3) {
                                    var id = rs.BookingCode;
                                    var total = se.activityService.objPaymentMytrip.trip.priceShow;
                                    se.Roomif.priceshowtt = se.activityService.objPaymentMytrip.trip.priceShow;
                                    var ischeck = '0';
                                    se.activityService.objPaymentMytrip.trip.payment_status = 1;
                                }
                                else {
                                    alert("Hiện tại, giao dịch của bạn hết hiệu lực, xin vui lòng thử lại sau!");
                                }
                            }
                            else {
                                error.page = "roomchoosebank";
                                error.func = "mCheckBooking";
                                error.param = JSON.stringify(options);
                                _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].writeErrorLog(error, response);
                                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
                            }
                        });
                        se.navCtrl.navigateBack(['/app/tabs/tab3/']);
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
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
    done() {
        this.navCtrl.navigateBack(['/app/tabs/tab3/']);
    }
};
RoompaymentbankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roompaymentbank',
        template: __webpack_require__(/*! ./roompaymentbank.html */ "./src/app/roompaymentbank/roompaymentbank.html"),
        styles: [__webpack_require__(/*! ./roompaymentbank.scss */ "./src/app/roompaymentbank/roompaymentbank.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"],
        _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_9__["InAppBrowser"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_11__["Clipboard"],
        _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_10__["SafariViewController"]])
], RoompaymentbankPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentbank-roompaymentbank-module.js.map