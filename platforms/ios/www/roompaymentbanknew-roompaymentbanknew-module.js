(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roompaymentbanknew-roompaymentbanknew-module"],{

/***/ "./src/app/roompaymentbanknew/roompaymentbanknew.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roompaymentbanknew/roompaymentbanknew.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoompaymentbanknewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbanknewPageModule", function() { return RoompaymentbanknewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _roompaymentbanknew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roompaymentbanknew.page */ "./src/app/roompaymentbanknew/roompaymentbanknew.page.ts");







const routes = [
    {
        path: '',
        component: _roompaymentbanknew_page__WEBPACK_IMPORTED_MODULE_6__["RoompaymentbanknewPage"]
    }
];
let RoompaymentbanknewPageModule = class RoompaymentbanknewPageModule {
};
RoompaymentbanknewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_roompaymentbanknew_page__WEBPACK_IMPORTED_MODULE_6__["RoompaymentbanknewPage"]]
    })
], RoompaymentbanknewPageModule);



/***/ }),

/***/ "./src/app/roompaymentbanknew/roompaymentbanknew.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/roompaymentbanknew/roompaymentbanknew.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Chuyển khoản ngân hàng</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <img src=\"./assets/step/step_3.svg\">\n\n  <ion-grid class=\"grid-row-1\">\n    <ion-row>\n      <ion-col (click)=\"vcb()\" size=\"3\">\n        <img *ngIf=\"ischeckvcbactive\" src=\"./assets/ic_bank/iv_vcb_active.png\">\n        <img *ngIf=\"ischeckvcb\" src=\"./assets/ic_bank/iv_vcb.png\">\n      </ion-col>\n      <ion-col (click)=\"acb()\" size=\"3\">\n        <img *ngIf=\"ischeckacbactive\" src=\"./assets/ic_bank/ic_acb_active.png\">\n        <img *ngIf=\"ischeckacb\" src=\"./assets/ic_bank/ic_acb.png\">\n      </ion-col>\n      <ion-col (click)=\"vietin()\" size=\"3\">\n        <img *ngIf=\"ischeckvietinactive\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n        <img *ngIf=\"ischeckvietin\" src=\"./assets/ic_bank/ic_vietin.png\">\n      </ion-col>\n      <ion-col (click)=\"techcom()\" size=\"3\">\n        <img *ngIf=\"ischecktechcomactive\" src=\"./assets/ic_bank/ic_techcom_active.png\">\n        <img *ngIf=\"ischecktechcom\" src=\"./assets/ic_bank/ic_techcom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"donga()\" size=\"3\">\n        <img *ngIf=\"ischeckdongaactive\" src=\"./assets/ic_bank/ic_donga_active.png\">\n        <img *ngIf=\"ischeckdonga\" src=\"./assets/ic_bank/ic_donga.png\">\n      </ion-col>\n      <ion-col (click)=\"agri()\" size=\"3\">\n        <img *ngIf=\"ischeckagriactive\" src=\"./assets/ic_bank/ic_agri_active.png\">\n        <img *ngIf=\"ischeckagri\" src=\"./assets/ic_bank/ic_agri.png\">\n      </ion-col>\n      <ion-col (click)=\"bidv()\" size=\"3\">\n        <img *ngIf=\"ischeckbidvactive\" src=\"./assets/ic_bank/ic_bidv_active.png\">\n        <img *ngIf=\"ischeckbidv\" src=\"./assets/ic_bank/ic_bidv.png\">\n      </ion-col>\n      <ion-col (click)=\"sacom()\" size=\"3\">\n        <img *ngIf=\"ischecksacomactive\" src=\"./assets/ic_bank/ic_sacom_active.png\">\n        <img *ngIf=\"ischecksacom\" src=\"./assets/ic_bank/ic_sacom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"hd()\" size=\"3\">\n        <img *ngIf=\"ischeckhdactive\" src=\"./assets/ic_bank/ic_hd_active.svg\">\n        <img *ngIf=\"ischeckhd\" src=\"./assets/ic_bank/ic_hd.svg\">\n      </ion-col>\n      <ion-col (click)=\"scb()\" size=\"3\">\n        <img *ngIf=\"ischeckscbactive\" src=\"./assets/ic_bank/ic_scb_active.svg\">\n        <img *ngIf=\"ischeckscb\" src=\"./assets/ic_bank/ic_scb.svg\">\n      </ion-col>\n      <ion-col (click)=\"ocb()\" size=\"3\">\n        <img *ngIf=\"ischeckocbactive\" class=\"imgbank\" src=\"./assets/ic_bank/ocbactive.png\">\n        <img *ngIf=\"ischeckocb\" class=\"imgbank\" style=\"opacity: 0.5;\" src=\"./assets/ic_bank/ocb.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid *ngIf=\"rowtwoactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <!-- <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> -->\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"rowoneactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <!-- <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM<a class='text-copy' (click)='copyClipboard(2)'>Sao chép</a>\n          <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(3)'>Sao chép</a> -->\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"rowthreeactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          <!-- <br>{{bankBranch}}\n          <br>Số TK: <b>{{accountNumber}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Người thụ hưởng: Công ty Cổ Phần IVIVU.COM <a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a>\n          <br>Nội dung thanh toán: <b>{{bookingCode}}</b><a class='text-copy' (click)='copyClipboard(1)'>Sao chép</a> -->\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- <div class=\"div-DK\">\n    <ion-checkbox mode='md' class=\"checkbox-DK\"  [checked]=\"ischeckedDK\" (ionChange)=\"checkDk()\"></ion-checkbox>\n    <div class=\"text-DK\">\n      Tôi đồng ý với các <span (click)=\"openWebpageDK('https://www.ivivu.com/dieu-kien-dieu-khoan')\" class=\"text-link-DK\">điều kiện và điều khoản</span> về đặt dịch vụ trên app iVIVU.com\n    </div>\n  </div> -->\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button [disabled]=\"!ischeckedDK\" (click)=\"next()\" [ngClass]=\"ischeckedDK?'button2':'btn-disabled'\" ion-button round outline class=\"button button2\">Chuyển khoản {{textbank}}<span><img class=\"img\" src=\"./assets/imgs/ic_next.svg\"></span></button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roompaymentbanknew/roompaymentbanknew.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/roompaymentbanknew/roompaymentbanknew.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  margin: 8px 0 !important;\n  font-weight: 500 !important;\n  font-size: 20px !important;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.row-payment-info {\n  margin-left: -10px;\n  margin-top: -30px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.btn-next {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #ffffff;\n  background-color: #f59233;\n  width: 90%;\n  margin: 0px !important;\n}\n\n.btn-load {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #f59233;\n  background-color: rgba(245, 146, 51, 0.1);\n  width: 90%;\n  margin: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.img {\n  width: 8px;\n  margin-left: 5px;\n}\n\n.div-DK {\n  display: flex;\n  background-color: #F2F2F5;\n  margin-left: -16px;\n  margin-right: -16px;\n  padding: 8px;\n  margin-top: 24px;\n  margin-bottom: 20px;\n}\n\n.checkbox-DK {\n  margin-left: 10px;\n  width: 28px;\n  height: 18px;\n  margin-top: 2px;\n}\n\n.text-DK {\n  font-size: 14px;\n  line-height: 1.2;\n  color: #717484;\n  margin-left: 3px;\n}\n\n.btn-disabled {\n  background: #bdbdbd;\n  color: #ffffff;\n  width: 90%;\n  height: 48px;\n}\n\n.text-link-DK {\n  color: #2f80ed;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3Jvb21wYXltZW50YmFua25ldy9yb29tcGF5bWVudGJhbmtuZXcucGFnZS5zY3NzIiwic3JjL2FwcC9yb29tcGF5bWVudGJhbmtuZXcvcm9vbXBheW1lbnRiYW5rbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtBQ0FSOztBREVJO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRXREOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQ0lSOztBREZJO0VBQ0ksOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0tSOztBREhJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNPUjs7QURMSTtFQUNJLGdCQUFBO0FDUVI7O0FETkk7RUFDSSxVQUFBO0FDU1I7O0FEUEk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNVUjs7QURSSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDV1I7O0FEVEk7RUFDSSxtQkFBQTtBQ1lSOztBRFZJO0VBQ0ksaUJBQUE7QUNhUjs7QURYSTtFQUNJLG1DQUFBO0VBQ0EsaUJBQUE7QUNjUjs7QURaSTtFQUVJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDY1I7O0FEWkk7RUFFSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ2NSOztBRFpJO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDY1I7O0FEWkk7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7QUNjUjs7QURaSTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2VSOztBRGJNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNnQlI7O0FEZE07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNpQlI7O0FEZk07RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQ2tCUjs7QURoQkk7RUFDRSxjQUFBO0FDbUJOIiwiZmlsZSI6InNyYy9hcHAvcm9vbXBheW1lbnRiYW5rbmV3L3Jvb21wYXltZW50YmFua25ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiA4cHggMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnV0dG9uMVxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1idG5cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgICB9ICBcbiAgICAgIC5yb3ctcGF5bWVudC1pbmZve1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zMHB4XG4gICAgICB9XG4gICAgLnRleHQtcGF5bWVudC1pbmZve1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLnRleHQtaW5mb3tcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuICAgIC50ZXh0LWxpbmt7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgIH1cbiAgICAudGV4dC1ib2xke1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAubm8tcGFkZGluZ3tcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLmdyaWQtcm93LTF7XG4gICAgICAgIG1hcmdpbjogLTVweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcGFkZGluZy10b3A6IDExcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIC5ncmlkLXJvdy0ye1xuICAgICAgICBtYXJnaW46IC01cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5tLWJvdHRvbS0yM3tcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICB9XG4gICAgLnRleHQtY29weXtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XG4gICAgfVxuICAgIC5jbHMtaW9uLWZvb3RlcntcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xuICAgIH1cbiAgICAuYnRuLW5leHRcbiAgICB7XG4gICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTkyMzM7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5idG4tbG9hZFxuICAgIHtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2Y1OTIzMztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDE0NiwgNTEsIDAuMSk7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5kaXYtZm9vdGVyXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuICAgIC5pbWdcbiAgICB7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5kaXYtREt7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjU7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgfVxuICAgICAgLmNoZWNrYm94LURLe1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgfVxuICAgICAgLnRleHQtREt7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgY29sb3I6ICM3MTc0ODQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICB9XG4gICAgICAuYnRuLWRpc2FibGVke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYmRiZGJkO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgIH1cbiAgICAudGV4dC1saW5rLURLe1xuICAgICAgY29sb3I6ICMyZjgwZWRcbiAgICB9XG4gICAgICBcbiAgXG4gIFxuICBcbiAgIiwiLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDhweCAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5yb3ctcGF5bWVudC1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLnRleHQtcGF5bWVudC1pbmZvIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnRleHQtbGluayB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4udGV4dC1ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZ3JpZC1yb3ctMSB7XG4gIG1hcmdpbjogLTVweDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDExcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbi5ncmlkLXJvdy0yIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubS1ib3R0b20tMjMge1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4udGV4dC1jb3B5IHtcbiAgcGFkZGluZy1sZWZ0OiA0cHg7XG59XG5cbi5jbHMtaW9uLWZvb3RlciB7XG4gIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbn1cblxuLmJ0bi1uZXh0IHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OTIzMztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJ0bi1sb2FkIHtcbiAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y1OTIzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDE0NiwgNTEsIDAuMSk7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5pbWcge1xuICB3aWR0aDogOHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZGl2LURLIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjJGNTtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5jaGVja2JveC1ESyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG59XG5cbi50ZXh0LURLIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBjb2xvcjogIzcxNzQ4NDtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbn1cblxuLmJ0bi1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiZGJkYmQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDQ4cHg7XG59XG5cbi50ZXh0LWxpbmstREsge1xuICBjb2xvcjogIzJmODBlZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roompaymentbanknew/roompaymentbanknew.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/roompaymentbanknew/roompaymentbanknew.page.ts ***!
  \***************************************************************/
/*! exports provided: RoompaymentbanknewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoompaymentbanknewPage", function() { return RoompaymentbanknewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/safari-view-controller/ngx */ "./node_modules/@ionic-native/safari-view-controller/ngx/index.js");
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ "./node_modules/@ionic-native/clipboard/ngx/index.js");











let RoompaymentbanknewPage = class RoompaymentbanknewPage {
    constructor(platform, Roomif, zone, storage, navCtrl, booking, loadingCtrl, gf, toastCtrl, bookCombo, activityService, alertCtrl, clipboard, safariViewController) {
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
        this.alertCtrl = alertCtrl;
        this.clipboard = clipboard;
        this.safariViewController = safariViewController;
        this.ischeckvcbactive = true;
        this.isenabled = true;
        this.ischeckocbactive = false;
        this.auth_token = '';
        this.rowoneactive = false;
        this.rowtwoactive = false;
        this.rowthreeactive = false;
        this.textbank = '';
        this.ischeckedDK = true;
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
        this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
        this.accountNumber = "007 1000 895 230";
        this.room = Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.rowoneactive = true;
        this.textbank = "Vietcombank";
        this.bankName = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)";
        if (this.Roomif && this.Roomif.priceshow) {
            this.totalPrice = this.Roomif.priceshow;
        }
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
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
            this.textbank = "ACB";
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
            this.textbank = "Viettinbank";
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
            this.textbank = "dongabank";
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
                        se.Roomif.accountNumber = se.accountNumber;
                        se.Roomif.textbank = se.textbank;
                        se.Roomif.bankName = se.bankName;
                        se.Roomif.bankBranch = se.bankBranch;
                        se.Roomif.paymentbank = se.paymentMethod;
                        let totalprice = '';
                        if (se.Roomif.priceshow) {
                            totalprice = se.Roomif.priceshow;
                        }
                        else {
                            totalprice = se.Roomif.roomtype.PriceAvgPlusTAStr;
                        }
                        if (se.jti) {
                            let url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=tranfer&BanksTranfer=' + se.textbank + '&source=app&amount=' + totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + body.code + '&memberId=' + se.jti + '&buyerPhone=' + se.Roomif.phone;
                            se.gf.CreateUrl(url);
                        }
                        se.navCtrl.navigateForward('/roompaymentdonenew/' + code + '/' + stt);
                    }
                    else {
                        se.loader.dismiss();
                        se.storage.get('jti').then((memberid) => {
                            if (memberid) {
                                se.storage.get('deviceToken').then((devicetoken) => {
                                    if (devicetoken) {
                                        se.gf.refreshToken(memberid, devicetoken).then((token) => {
                                            setTimeout(() => {
                                                se.auth_token = token;
                                            }, 100);
                                        });
                                    }
                                    else {
                                        se.showAlertMessageOnly(body.Msg);
                                    }
                                });
                            }
                            else {
                                se.showAlertMessageOnly(body.Msg);
                            }
                        });
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
    showAlertMessageOnly(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: '',
                message: 'Mã đăng nhập đã hết hạn, vui lòng đăng nhập lại!',
                cssClass: "cls-alert-message",
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'OK',
                        role: 'OK',
                        handler: () => {
                            this.navCtrl.navigateForward('/login');
                            alert.dismiss();
                        }
                    }
                ]
            });
            alert.present();
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
    checkDk() {
        this.ischeckedDK = !this.ischeckedDK;
    }
    openWebpageDK(url) {
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
                    }
                }, (error) => console.error(error));
            }
            else {
            }
        });
    }
};
RoompaymentbanknewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roompaymentbanknew',
        template: __webpack_require__(/*! ./roompaymentbanknew.page.html */ "./src/app/roompaymentbanknew/roompaymentbanknew.page.html"),
        styles: [__webpack_require__(/*! ./roompaymentbanknew.page.scss */ "./src/app/roompaymentbanknew/roompaymentbanknew.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_9__["Clipboard"], _ionic_native_safari_view_controller_ngx__WEBPACK_IMPORTED_MODULE_8__["SafariViewController"]])
], RoompaymentbanknewPage);



/***/ })

}]);
//# sourceMappingURL=roompaymentbanknew-roompaymentbanknew-module.js.map