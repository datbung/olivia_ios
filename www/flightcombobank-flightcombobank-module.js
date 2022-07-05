(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["flightcombobank-flightcombobank-module"],{

/***/ "./src/app/flightcombobank/flightcombobank.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/flightcombobank/flightcombobank.module.ts ***!
  \***********************************************************/
/*! exports provided: FlightcombobankPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombobankPageModule", function() { return FlightcombobankPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _flightcombobank_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./flightcombobank.page */ "./src/app/flightcombobank/flightcombobank.page.ts");







const routes = [
    {
        path: '',
        component: _flightcombobank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombobankPage"]
    }
];
let FlightcombobankPageModule = class FlightcombobankPageModule {
};
FlightcombobankPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_flightcombobank_page__WEBPACK_IMPORTED_MODULE_6__["FlightcombobankPage"]]
    })
], FlightcombobankPageModule);



/***/ }),

/***/ "./src/app/flightcombobank/flightcombobank.page.html":
/*!***********************************************************!*\
  !*** ./src/app/flightcombobank/flightcombobank.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Chuyển khoản ngân hàng</label>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div class=\"text-center\">\n    <img class=\"img-step\" src=\"./assets/ic_flight/step_3.svg\">\n  </div>\n\n  <ion-grid class=\"grid-row-1\">\n    <ion-row>\n      <ion-col (click)=\"vcb()\" size=\"3\">\n        <img *ngIf=\"ischeckvcbactive\" src=\"./assets/ic_bank/iv_vcb_active.png\">\n        <img *ngIf=\"ischeckvcb\" src=\"./assets/ic_bank/iv_vcb.png\">\n      </ion-col>\n      <ion-col (click)=\"acb()\" size=\"3\">\n        <img *ngIf=\"ischeckacbactive\" src=\"./assets/ic_bank/ic_acb_active.png\">\n        <img *ngIf=\"ischeckacb\" src=\"./assets/ic_bank/ic_acb.png\">\n      </ion-col>\n      <ion-col (click)=\"vietin()\" size=\"3\">\n        <img *ngIf=\"ischeckvietinactive\" src=\"./assets/ic_bank/ic_vietin_active.png\">\n        <img *ngIf=\"ischeckvietin\" src=\"./assets/ic_bank/ic_vietin.png\">\n      </ion-col>\n      <ion-col (click)=\"techcom()\" size=\"3\">\n        <img *ngIf=\"ischecktechcomactive\" src=\"./assets/ic_bank/ic_techcom_active.png\">\n        <img *ngIf=\"ischecktechcom\" src=\"./assets/ic_bank/ic_techcom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"donga()\" size=\"3\">\n        <img *ngIf=\"ischeckdongaactive\" src=\"./assets/ic_bank/ic_donga_active.png\">\n        <img *ngIf=\"ischeckdonga\" src=\"./assets/ic_bank/ic_donga.png\">\n      </ion-col>\n      <ion-col (click)=\"agri()\" size=\"3\">\n        <img *ngIf=\"ischeckagriactive\" src=\"./assets/ic_bank/ic_agri_active.png\">\n        <img *ngIf=\"ischeckagri\" src=\"./assets/ic_bank/ic_agri.png\">\n      </ion-col>\n      <ion-col (click)=\"bidv()\" size=\"3\">\n        <img *ngIf=\"ischeckbidvactive\" src=\"./assets/ic_bank/ic_bidv_active.png\">\n        <img *ngIf=\"ischeckbidv\" src=\"./assets/ic_bank/ic_bidv.png\">\n      </ion-col>\n      <ion-col (click)=\"sacom()\" size=\"3\">\n        <img *ngIf=\"ischecksacomactive\" src=\"./assets/ic_bank/ic_sacom_active.png\">\n        <img *ngIf=\"ischecksacom\" src=\"./assets/ic_bank/ic_sacom.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n  <ion-grid class=\"grid-row-2\">\n    <ion-row>\n      <ion-col (click)=\"hd()\" size=\"3\">\n        <img *ngIf=\"ischeckhdactive\" src=\"./assets/ic_bank/ic_hd_active.svg\">\n        <img *ngIf=\"ischeckhd\" src=\"./assets/ic_bank/ic_hd.svg\">\n      </ion-col>\n      <ion-col (click)=\"scb()\" size=\"3\">\n        <img *ngIf=\"ischeckscbactive\" src=\"./assets/ic_bank/ic_scb_active.svg\">\n        <img *ngIf=\"ischeckscb\" src=\"./assets/ic_bank/ic_scb.svg\">\n      </ion-col>\n      <ion-col (click)=\"ocb()\" size=\"3\">\n        <img *ngIf=\"ischeckocbactive\" class=\"imgbank\" src=\"./assets/ic_bank/ocbactive.png\">\n        <img *ngIf=\"ischeckocb\" class=\"imgbank\" style=\"opacity: 0.5;\" src=\"./assets/ic_bank/ocb.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  <ion-grid *ngIf=\"rowtwoactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n         \n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid *ngIf=\"rowoneactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n          \n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid *ngIf=\"rowthreeactive\" class=\"no-padding\">\n    <ion-row>\n      <ion-col col-12 class=\"no-padding\">\n        <p class=\"text-payment-info\" text-wrap>\n          {{bankName}}\n         \n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <div style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Chuyển khoản {{textbank}}<span><img class=\"img\" src=\"./assets/imgs/ic_next.svg\"></span></button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/flightcombobank/flightcombobank.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/flightcombobank/flightcombobank.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  font-weight: 500 !important;\n  font-size: 20px !important;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.btn-next {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #ffffff;\n  background-color: #f59233;\n  width: 90%;\n  margin: 0px !important;\n}\n\n.btn-load {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #f59233;\n  background-color: rgba(245, 146, 51, 0.1);\n  width: 90%;\n  margin: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.img {\n  width: 8px;\n  margin-left: 5px;\n}\n\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43L3NyYy9hcHAvZmxpZ2h0Y29tYm9iYW5rL2ZsaWdodGNvbWJvYmFuay5wYWdlLnNjc3MiLCJzcmMvYXBwL2ZsaWdodGNvbWJvYmFuay9mbGlnaHRjb21ib2JhbmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kscUJBQUE7RUFDQSx5QkFBQTtBQ0FSOztBREVJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ0FSOztBREVJO0VBRUksY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFSTtFQUVJLHlCQUFBO0VBQTJCLGtCQUFBO0VBQW1CLGdCQUFBO0FDRXREOztBREFJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQ0lSOztBREZJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNLUjs7QURISTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLGdCQUFBO0FDT1I7O0FETEk7RUFDSSxVQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNTUjs7QURQSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0FDVVI7O0FEUkk7RUFDSSxtQkFBQTtBQ1dSOztBRFRJO0VBQ0ksaUJBQUE7QUNZUjs7QURWSTtFQUNJLG1DQUFBO0VBQ0EsaUJBQUE7QUNhUjs7QURYSTtFQUVJLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FDYVI7O0FEWEk7RUFFSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ2FSOztBRFhJO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDYVI7O0FEWEk7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7QUNhUjs7QURYSTtFQUVGLGtCQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9mbGlnaHRjb21ib2JhbmsvZmxpZ2h0Y29tYm9iYW5rLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5jaGVja2JveC1tZC1zZWNvbmRhcnkgLmNoZWNrYm94LWNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH1cbiAgICAuYnV0dG9uMVxuICAgIHtcbiAgICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgLmRpdi1idG5cbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IHRleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tdG9wOiAyMHB4XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgICB9ICBcbiAgICAgIC50ZXh0LXBheW1lbnQtaW5mb3tcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC50ZXh0LWluZm97XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICAudGV4dC1saW5re1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcbiAgICB9XG4gICAgLnRleHQtYm9sZHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLm5vLXBhZGRpbmd7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuICAgIC5ncmlkLXJvdy0xe1xuICAgICAgICBtYXJnaW46IC01cHg7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMXB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cbiAgICAuZ3JpZC1yb3ctMntcbiAgICAgICAgbWFyZ2luOiAtNXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAubS1ib3R0b20tMjN7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgfVxuICAgIC50ZXh0LWNvcHl7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIH1cbiAgICAuY2xzLWlvbi1mb290ZXJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4IDBweCAjZGVkZWRlO1xuICAgICAgICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgICB9XG4gICAgLmJ0bi1uZXh0XG4gICAge1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5MjMzO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuYnRuLWxvYWRcbiAgICB7XG4gICAgICAgIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6ICNmNTkyMzM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxNDYsIDUxLCAwLjEpO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuZGl2LWZvb3RlclxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICAuaW1nXG4gICAge1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIH1cbiAgICAudGV4dC1jZW50ZXJcbntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4iLCIuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmRpdi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi50ZXh0LXBheW1lbnQtaW5mbyB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4udGV4dC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi50ZXh0LWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cblxuLnRleHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmdyaWQtcm93LTEge1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmc6IDA7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uZ3JpZC1yb3ctMiB7XG4gIG1hcmdpbjogLTVweDtcbiAgcGFkZGluZzogMDtcbn1cblxuLm0tYm90dG9tLTIzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cblxuLnRleHQtY29weSB7XG4gIHBhZGRpbmctbGVmdDogNHB4O1xufVxuXG4uY2xzLWlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgcG9zaXRpb246IGluaXRpYWw7XG59XG5cbi5idG4tbmV4dCB7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTkyMzM7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tbG9hZCB7XG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmNTkyMzM7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ1LCAxNDYsIDUxLCAwLjEpO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"
=======
module.exports = ".checkbox-md-secondary .checkbox-checked {\n  border-color: #26bed6;\n  background-color: #26bed6;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  font-weight: 500 !important;\n  font-size: 20px !important;\n  width: 90%;\n}\n\n.button1 {\n  color: #ff9500;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 12px;\n}\n\n.div-btn {\n  background-color: #ffffff;\n  text-align: center;\n  margin-top: 20px;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.text-payment-info {\n  white-space: normal !important;\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  line-height: 28px;\n  margin: 0;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.4px;\n  margin: 0;\n  margin-bottom: 16px;\n}\n\n.text-link {\n  text-decoration: underline;\n  margin-bottom: 23px;\n}\n\n.text-bold {\n  font-weight: 600;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.grid-row-1 {\n  margin: -5px;\n  padding: 0;\n  padding-top: 11px;\n  padding-bottom: 5px;\n}\n\n.grid-row-2 {\n  margin: -5px;\n  padding: 0;\n}\n\n.m-bottom-23 {\n  margin-bottom: 23px;\n}\n\n.text-copy {\n  padding-left: 4px;\n}\n\n.cls-ion-footer {\n  box-shadow: 2px 4px 5px 0px #dedede;\n  position: initial;\n}\n\n.btn-next {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #ffffff;\n  background-color: #f59233;\n  width: 90%;\n  margin: 0px !important;\n}\n\n.btn-load {\n  height: 44px !important;\n  font-size: 17px !important;\n  border-radius: 6px !important;\n  font-weight: 600 !important;\n  color: #f59233;\n  background-color: rgba(245, 146, 51, 0.1);\n  width: 90%;\n  margin: 0px !important;\n}\n\n.div-footer {\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 4px;\n}\n\n.img {\n  width: 8px;\n  margin-left: 5px;\n}\n\n.text-center {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2ZsaWdodGNvbWJvYmFuay9mbGlnaHRjb21ib2JhbmsucGFnZS5zY3NzIiwic3JjL2FwcC9mbGlnaHRjb21ib2JhbmsvZmxpZ2h0Y29tYm9iYW5rLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7QUNBUjs7QURFSTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUNBUjs7QURFSTtFQUVJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQVI7O0FERUk7RUFFSSx5QkFBQTtFQUEyQixrQkFBQTtFQUFtQixnQkFBQTtBQ0V0RDs7QURBSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHUjs7QURETTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFNBQUE7QUNJUjs7QURGSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDS1I7O0FESEk7RUFDSSwwQkFBQTtFQUNBLG1CQUFBO0FDTVI7O0FESkk7RUFDSSxnQkFBQTtBQ09SOztBRExJO0VBQ0ksVUFBQTtBQ1FSOztBRE5JO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDU1I7O0FEUEk7RUFDSSxZQUFBO0VBQ0EsVUFBQTtBQ1VSOztBRFJJO0VBQ0ksbUJBQUE7QUNXUjs7QURUSTtFQUNJLGlCQUFBO0FDWVI7O0FEVkk7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0FDYVI7O0FEWEk7RUFFSSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ2FSOztBRFhJO0VBRUksdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNhUjs7QURYSTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ2FSOztBRFhJO0VBRUksVUFBQTtFQUNBLGdCQUFBO0FDYVI7O0FEWEk7RUFFRixrQkFBQTtBQ2FGIiwiZmlsZSI6InNyYy9hcHAvZmxpZ2h0Y29tYm9iYW5rL2ZsaWdodGNvbWJvYmFuay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAuY2hlY2tib3gtbWQtc2Vjb25kYXJ5IC5jaGVja2JveC1jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZiZWQ2O1xuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9XG4gICAgLmJ1dHRvbjFcbiAgICB7XG4gICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIC5kaXYtYnRuXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmOyB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLXRvcDogMjBweFxuICAgIH1cbiAgICAudG9vbGJhci10aXRsZS1tZCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xuICAgICAgfSAgXG4gICAgICAudGV4dC1wYXltZW50LWluZm97XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAudGV4dC1pbmZve1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICB9XG4gICAgLnRleHQtbGlua3tcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XG4gICAgfVxuICAgIC50ZXh0LWJvbGR7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5uby1wYWRkaW5ne1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICAuZ3JpZC1yb3ctMXtcbiAgICAgICAgbWFyZ2luOiAtNXB4O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTFweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICB9XG4gICAgLmdyaWQtcm93LTJ7XG4gICAgICAgIG1hcmdpbjogLTVweDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gICAgLm0tYm90dG9tLTIze1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgIH1cbiAgICAudGV4dC1jb3B5e1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcbiAgICB9XG4gICAgLmNscy1pb24tZm9vdGVye1xuICAgICAgICBib3gtc2hhZG93OiAycHggNHB4IDVweCAwcHggI2RlZGVkZTtcbiAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XG4gICAgfVxuICAgIC5idG4tbmV4dFxuICAgIHtcbiAgICAgICAgaGVpZ2h0OiA0NHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1OTIzMztcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmJ0bi1sb2FkXG4gICAge1xuICAgICAgICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZjU5MjMzO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMTQ2LCA1MSwgMC4xKTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmRpdi1mb290ZXJcbiAgICB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gICAgLmltZ1xuICAgIHtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLnRleHQtY2VudGVyXG57XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIiwiLmNoZWNrYm94LW1kLXNlY29uZGFyeSAuY2hlY2tib3gtY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2YmVkNjtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogOTAlO1xufVxuXG4uYnV0dG9uMSB7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kaXYtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4udGV4dC1wYXltZW50LWluZm8ge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udGV4dC1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi50ZXh0LWJvbGQge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubm8tcGFkZGluZyB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5ncmlkLXJvdy0xIHtcbiAgbWFyZ2luOiAtNXB4O1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cblxuLmdyaWQtcm93LTIge1xuICBtYXJnaW46IC01cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5tLWJvdHRvbS0yMyB7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi50ZXh0LWNvcHkge1xuICBwYWRkaW5nLWxlZnQ6IDRweDtcbn1cblxuLmNscy1pb24tZm9vdGVyIHtcbiAgYm94LXNoYWRvdzogMnB4IDRweCA1cHggMHB4ICNkZWRlZGU7XG4gIHBvc2l0aW9uOiBpbml0aWFsO1xufVxuXG4uYnRuLW5leHQge1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU5MjMzO1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWxvYWQge1xuICBoZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjU5MjMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMTQ2LCA1MSwgMC4xKTtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRpdi1mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cblxuLmltZyB7XG4gIHdpZHRoOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"
>>>>>>> 76dafe597a6de74d5d436cb1bfbd518c95b82a61

/***/ }),

/***/ "./src/app/flightcombobank/flightcombobank.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/flightcombobank/flightcombobank.page.ts ***!
  \*********************************************************/
/*! exports provided: FlightcombobankPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightcombobankPage", function() { return FlightcombobankPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");










let FlightcombobankPage = class FlightcombobankPage {
    constructor(platform, Roomif, zone, storage, navCtrl, booking, loadingCtrl, bookCombo, gf, fb, searchhotel) {
        this.platform = platform;
        this.Roomif = Roomif;
        this.zone = zone;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.booking = booking;
        this.loadingCtrl = loadingCtrl;
        this.bookCombo = bookCombo;
        this.gf = gf;
        this.fb = fb;
        this.searchhotel = searchhotel;
        this.ischeckvcbactive = true;
        this.isenabled = true;
        this.rowoneactive = false;
        this.ischeckocbactive = false;
        this.rowtwoactive = false;
        this.rowthreeactive = false;
        this.textbank = '';
        this.hoten = this.Roomif.hoten;
        this.phone = this.Roomif.phone;
        this.totalAdult = bookCombo.totalAdult;
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
        this.textbank = "Vietcombank";
        this.bankName = "Ngân TMCP Ngoại Thương Việt Nam (VCB)";
        this.bankBranch = "Chi nhánh Tp. Hồ Chí Minh";
        this.accountNumber = "007 1000 895 230";
        this.rowoneactive = true;
        this.text = "Ngân hàng Thương Mại Cổ Phần Ngoại Thương Việt Nam (VCB)<br>Chi nhánh Tp. Hồ Chí Minh<br>Số TK: <b>007 1000 895 230</b><br>Chủ TK: <b>Công ty Cổ Phần IVIVU.COM</b></li>";
        this.room = Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.storage.get('email').then(e => {
            if (e !== null) {
                this.email = e;
            }
        });
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
            }
        });
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
        se.presentLoading();
        var options = {
            'method': 'POST',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/UpdatePaymentMethod?HotelCode=' + this.bookCombo.bookingcode + '&paymentMethod=' + this.paymentMethod + '',
            'headers': {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_4__(options, function (error, response) {
            if (error)
                throw new Error(error);
            if (se.bookCombo.mealTypeRates.Supplier == 'SERI' && se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal) {
                se.gf.checkAllotmentSeri(se.booking.HotelId, se.bookCombo.mealTypeRates.RoomId, se.booking.CheckInDate, se.booking.CheckOutDate, se.bookCombo.mealTypeRates.TotalRoom, 'SERI', se.bookCombo.mealTypeRates.HotelCheckDetailTokenInternal).then((allow) => {
                    if (allow) {
                        se.continueBook();
                    }
                    else {
                        if (se.loader) {
                            se.loader.dismiss();
                        }
                        this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                    }
                });
            }
            else {
                se.continueBook();
            }
        });
    }
    continueBook() {
        var se = this;
        se.gf.holdflight(se.bookCombo.FlightCode, se.bookCombo.iddepart, se.bookCombo.idreturn).then(datafly => {
            se.gf.createTransactionCombo(se.bookCombo.bookingcode, se.bookCombo.FlightCode, datafly.depcode, datafly.retcode).then(data => {
                if (data) {
                    if (se.loader) {
                        se.loader.dismiss();
                    }
                    se.gf.createFlightTransactionCombo(se.bookCombo.FlightCode);
                    se.Roomif.accountNumber = se.accountNumber;
                    se.Roomif.textbank = se.textbank;
                    se.Roomif.bankName = se.bankName;
                    se.Roomif.bankBranch = se.bankBranch;
                    se.Roomif.paymentbank = se.paymentMethod;
                    if (se.jti) {
                        var url = _providers_constants__WEBPACK_IMPORTED_MODULE_6__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=tranfer&BanksTranfer=' + se.textbank + '&source=app&amount=' + se.bookCombo.totalprice.toString().replace(/\./g, '').replace(/\,/g, '') + '&orderCode=' + se.bookCombo.bookingcode + '&memberId=' + se.jti;
                        se.gf.CreatePayoo(url);
                    }
                    if (se.Roomif.payment == 'AL' && datafly.depcode && datafly.retcode) {
                        se.navCtrl.navigateForward('/flightcombopaymentdonebank/AL');
                    }
                    else {
                        se.navCtrl.navigateForward('/flightcombopaymentdone/RQ');
                    }
                }
                else {
                    alert('Gặp sự cố, vui lòng thử lại');
                }
            });
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
    }
};
FlightcombobankPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flightcombobank',
        template: __webpack_require__(/*! ./flightcombobank.page.html */ "./src/app/flightcombobank/flightcombobank.page.html"),
        styles: [__webpack_require__(/*! ./flightcombobank.page.scss */ "./src/app/flightcombobank/flightcombobank.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["RoomInfo"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Booking"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["Bookcombo"],
        _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_8__["Facebook"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_3__["SearchHotel"]])
], FlightcombobankPage);



/***/ })

}]);
//# sourceMappingURL=flightcombobank-flightcombobank-module.js.map