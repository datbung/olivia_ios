(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["foodadddetail-foodadddetail-module"],{

/***/ "./src/app/foodadddetail/foodadddetail.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/foodadddetail/foodadddetail.module.ts ***!
  \*******************************************************/
/*! exports provided: FoodadddetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodadddetailPageModule", function() { return FoodadddetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _foodadddetail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foodadddetail.page */ "./src/app/foodadddetail/foodadddetail.page.ts");







const routes = [
    {
        path: '',
        component: _foodadddetail_page__WEBPACK_IMPORTED_MODULE_6__["FoodadddetailPage"]
    }
];
let FoodadddetailPageModule = class FoodadddetailPageModule {
};
FoodadddetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_foodadddetail_page__WEBPACK_IMPORTED_MODULE_6__["FoodadddetailPage"]]
    })
], FoodadddetailPageModule);



/***/ }),

/***/ "./src/app/foodadddetail/foodadddetail.page.html":
/*!*******************************************************!*\
  !*** ./src/app/foodadddetail/foodadddetail.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label >Thông tin\n              khách</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center\">\n    <img src=\"./assets/step/food_step_1.svg\">\n  </div>\n\n  <div *ngIf=\"!ischeckedit\" class=\"div-1\">\n    <ion-row class=\"cls-ion-row\">\n      <ion-col class=\"cls-ion-col\" size=\"9\">\n        <ion-label class=\"text\">\n          Thông tin liên lạc\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"!ischeckedit&&!ischecklogin\" class=\"div-background\" style=\"margin-top: 10px;\">\n      <div class=\"div-content1\">\n        <ion-label class=\"text-login\">\n          Đã có tài khoản? <span class=\"text-select\" (click)=\"goToLogin()\">Đăng nhập ngay</span> \n        </ion-label>\n      </div>\n     \n    </div>\n    <ion-row >\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Họ Tên</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"hoten\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Số điện thoại</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Email</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"mt34\">\n      <ion-label class=\"text\">\n        Địa chỉ giao hàng\n      </ion-label>\n    </div>\n  \n    <ion-radio-group>\n      <label class=\"text-title\">Tỉnh/Thành phố</label>\n      <ion-row *ngIf=\"arrCity.length==1\" style=\"margin-left: -5px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of arrCity\">\n          <ion-item class=\"ion-item\">\n            <ion-checkbox disabled  checked class=\"rd-departure\">\n            </ion-checkbox>\n            <label class=\"text-select\"\n              class=\"rd-text\">{{item.name}}</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"arrCity.length>1\" style=\"margin-left: -5px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of arrCity\">\n          <ion-item class=\"ion-item\">\n            <ion-radio  (click)=\"clickCity(item)\" [checked]=\"Province==item.id?true:false\" class=\"rd-departure\">\n            </ion-radio>\n            <label [ngClass]=\"Province==item.id ? 'text-select': ''\" style=\"margin-left: 5px\"\n              class=\"rd-text\">{{item.name}}</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <ion-row (click)=\"presentActionSheetDistrict()\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-ion-label color-text\"  [ngClass]=\"ischeckdist==1 ? 'color-text-select': ''\">{{textdist}}</ion-label>\n          <div slot=\"end\">\n            <img src=\"./assets/imgs/ic_down_b.svg\">\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row (click)=\"presentActionSheetWard()\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-ion-label color-text\"  [ngClass]=\"ischeckward==1 ? 'color-text-select': ''\">{{textward}}</ion-label>\n          <div slot=\"end\" >\n            <img src=\"./assets/imgs/ic_down_b.svg\">\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Số nhà, tên đường</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"shipaddress\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"mt29\">\n      <ion-label class=\"text\">\n        Khung giờ nhận hàng\n      </ion-label>\n    </div>\n  \n    <ion-radio-group *ngIf=\"isFood\">\n      <label class=\"text-title\">Buổi trưa</label>\n      <ion-row class=\"ml5\">\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('11h15 - 11h30',0)\" [checked]=\"texttimeFood=='11h15 - 11h30'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">11h15 - 11h30</label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('11h30 - 12h00',0)\" [checked]=\"texttimeFood=='11h30 - 12h00'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">11h30 - 12h00</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  \n    <ion-radio-group *ngIf=\"isDinner\">\n      <label class=\"text-title\">Buổi tối</label>\n      <ion-row class=\"ml5\">\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('16h00 - 16h30',1)\" [checked]=\"texttimeDinner=='16h00 - 16h30'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">16h00 - 16h30</label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('16h30 - 17h00',1)\" [checked]=\"texttimeDinner=='16h30 - 17h00'?'true':'false'\"  class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">16h30 - 17h00</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  </div>\n  \n  <div *ngIf=\"ischeckedit\" class=\"div-info\">\n    <div class=\"div-2\">\n      <div >\n        <ion-label class=\"text-info\"  >Thông tin giao hàng</ion-label>\n      </div>\n      <div class=\"div-change\">\n        <ion-label *ngIf=\"ischeckedit\" class=\"text-change\" (click)=\"change()\" >Thay đổi</ion-label>\n      </div>\n    </div>\n    <div>\n      <ion-label class=\"text-contact\">\n        {{hoten}} - {{phone}}\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text-info\">\n        {{cusaddress}}\n      </ion-label>\n    </div>\n  </div>\n  <div  class=\"div-auto\">\n    <div>\n      <ion-checkbox class=\"chkbox\"  [(ngModel)]=\"Repeat\" color=\"secondary\"></ion-checkbox>\n    </div>\n   <div  style=\"margin: 0px 10px\">\n    <div>\n      <ion-label class=\"text-content\" >Tự động đặt thực đơn này hàng tuần</ion-label>\n    </div>\n    <div >\n      <ion-label class=\"text-note\" >iVIVU sẽ email thông tin thanh toán vào thứ 4 hàng tuần cho Quý khách</ion-label>\n    </div>\n   </div>\n \n  </div>\n \n  <ion-row *ngIf=\"!ischeckedit\"  style=\"margin-top: 20px\">\n    <ion-checkbox (ionChange)=\"(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n    <ion-label class=\"label-input\" style=\"margin: 3px 10px\">Xuất hóa đơn điện tử</ion-label>\n  </ion-row>\n  \n  <div *ngIf=\"ischeckedit==false\">\n    <div *ngIf=\"ischeck\">\n      <ion-row style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Tên công ty</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Địa chỉ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Mã số thuế</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div style=\"margin-left: 5px;margin-top: 10px\">\n        <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n      </div>\n      <div *ngIf=\"!ishideNameMail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Họ tên</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Email nhận HĐ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </div>\n    </div>\n  </div>\n  <div  *ngIf=\"!ischeckedit\" class=\"div-background\">\n    <div class=\"div-content\">\n      <div class=\"mt5\">\n        <ion-label class=\"text-content\">\n          - Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách trong thời gian sớm nhất. <span (click)=\"changeplace()\" class=\"text-yck\"> Yêu cầu giao khu vực khác<img class=\"cls-img\" src=\"./assets/imgs/vector.svg\"></span>\n        </ion-label>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div [ngClass]=\"totalPrice>=3000000?'div-footer-flex':'div-footer'\">\n    <button *ngIf=\"totalPrice>=3000000\" (click)=\"installment()\" ion-button round outline class=\"button button-installment\">Trả góp <br>\n      <p class=\"text-sub\">Chỉ từ {{installmentPriceStr}}</p>\n    </button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán ngay</button>\n  </div>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodadddetail/foodadddetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/foodadddetail/foodadddetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 16px 8px;\n  padding: 0px;\n}\n\n.button4 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 30%;\n  font-size: 12px;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.cls-label {\n  color: #828282;\n  font-size: 12px;\n}\n\n.label-name {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 12px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n}\n\n.button-edit {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  height: 27px !important;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.cls-ion-col {\n  align-self: center;\n}\n\n.cls-ion-row {\n  height: 45px;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #000000;\n  line-height: 21px;\n}\n\n.div-info {\n  margin-left: 3px;\n  margin-top: 20px;\n}\n\n.div-flex {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n\n.div-img {\n  margin-right: -15px;\n}\n\n.cls-ion-label {\n  width: 100%;\n}\n\n.div-split-panel {\n  height: 0.5px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.color-text {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #828282;\n  line-height: 21px;\n}\n\n.color-text-select {\n  color: #000000;\n}\n\n.div-footer-flex {\n  text-align: center;\n  display: flex;\n}\n\n.div-footer {\n  text-align: center;\n}\n\n.mt34 {\n  margin-top: 34px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.div-1 {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n\n.text-change {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n}\n\n.text-contact {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.13px;\n}\n\n.div-2 {\n  display: flex;\n  position: relative;\n}\n\n.div-3 {\n  width: 84%;\n}\n\n.div-change {\n  position: absolute;\n  right: 0px;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n::ng-deep .cssdistrict .action-sheet-group.sc-ion-action-sheet-ios {\n  overflow: scroll;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n::ng-deep .sc-ion-action-sheet-ios-h.cssdistrict {\n  margin-top: calc(env(safe-area-inset-top) + 50px);\n  --height: 90%;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.text-title {\n  font-size: 10px;\n  color: #bdbdbd;\n  margin-left: 5px;\n}\n\n.text-select {\n  color: #26bed6;\n}\n\n.chkbox {\n  vertical-align: bottom;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n.mt25 {\n  margin-top: 25px;\n}\n\n.mt29 {\n  margin-top: 29px;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.mt15px {\n  margin-top: -15px;\n}\n\n.text-login {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-auto {\n  margin-top: 20px;\n  display: flex;\n}\n\n.div-content1 {\n  margin-left: 20px;\n  margin-right: 16px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfbmV3IDA5MTEyMDIxL3NyYy9hcHAvZm9vZGFkZGRldGFpbC9mb29kYWRkZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9vZGFkZGRldGFpbC9mb29kYWRkZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxxQkFBQTtBQ0VKOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0dKOztBRERBO0VBRUksY0FBQTtFQUNBLGVBQUE7QUNHSjs7QURDRTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNFTjs7QURBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0lKOztBREZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkU7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNLSjs7QURIRTtFQUVFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ0tKOztBREhBO0VBRUksa0JBQUE7QUNLSjs7QURIQTtFQUVJLFlBQUE7QUNLSjs7QURIQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFFSSxnQkFBQTtFQUNBLGdCQUFBO0FDS0o7O0FESEE7RUFFSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBRUUsbUJBQUE7QUNLRjs7QURIQTtFQUVFLFdBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBR0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURGQTtFQUVFLGNBQUE7QUNJRjs7QURGQTtFQUVJLGtCQUFBO0VBQ0EsYUFBQTtBQ0lKOztBREZBO0VBRUksa0JBQUE7QUNJSjs7QURGQTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDTUY7O0FESkE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDTUY7O0FESkE7RUFFRSxhQUFBO0VBQ0Esa0JBQUE7QUNNRjs7QURKQTtFQUVFLFVBQUE7QUNNRjs7QURKQTtFQUVFLGtCQUFBO0VBQ0UsVUFBQTtBQ01KOztBREpBO0VBRUkseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNNSjs7QURKQTtFQUVJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KOztBREpBO0VBRUksZUFBQTtBQ01KOztBREpBO0VBRUksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDTUo7O0FESkE7RUFFSSxnQkFBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURIRTtFQUVFLGdCQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tOOztBREhFO0VBQ0UsaURBQUE7RUFDQSxhQUFBO0FDS0o7O0FERkE7RUFFRSxnQkFBQTtBQ0lGOztBREZBO0VBRUksZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0lKOztBRERBO0VBRUUsY0FBQTtBQ0dGOztBRERBO0VBRUUsc0JBQUE7QUNHRjs7QUREQTtFQUVFLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFBO0VBRUUsZ0JBQUE7QUNFRjs7QURBQTtFQUVFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBRUUsaUJBQUE7QUNFRjs7QURBQTtFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBRUUsZ0JBQUE7RUFDQSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNLRjs7QURIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvZm9vZGFkZGRldGFpbC9mb29kYWRkZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRcclxufVxyXG4uYnV0dG9uMlxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn0gXHJcbi5idXR0b24taW5zdGFsbG1lbnRcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBtYXJnaW46IDE2cHggOHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59IFxyXG4uYnV0dG9uNFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1kZXBhcnR1cmV7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG5cclxuLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbntcclxuICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ucmFkaW8tbWQgLnJhZGlvLWlubmVye1xyXG4gICAgbGVmdDogMXB4O1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbn1cclxuLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcclxufVxyXG4udG9vbGJhci10aXRsZS1tZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XHJcbiAgfSAgXHJcbi5jbHMtbGFiZWxcclxue1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG5cclxuICBcclxuICAubGFiZWwtbmFtZXtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBjb2xvcjogIzgyODI4MjtcclxuICB9XHJcbiAgLmxhYmVsLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICAubGFiZWwtaW5wdXQtb3JkZXJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG5cclxuICAuZGl2LXRpdGxlLW90aGVyLXJlcXVlc3R7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICB9XHJcbiAgLmRpdi10aXRsZS1leHBvcnQtb3JkZXJ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcclxuICB9XHJcblxyXG4gIC50ZXh0LXN1YntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XHJcbiAgfVxyXG4gIC5idXR0b24tZWRpdFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG59IFxyXG4uY2xzLWlvbi1jb2xcclxue1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbi5jbHMtaW9uLXJvd1xyXG57XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuLnRleHQtaW5mb1xyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbn1cclxuLmRpdi1pbmZvXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5kaXYtZmxleFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmRpdi1pbWdcclxue1xyXG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbn1cclxuLmNscy1pb24tbGFiZWxcclxue1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kaXYtc3BsaXQtcGFuZWx7XHJcbiAgaGVpZ2h0OiAwLjVweDtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4uY29sb3ItdGV4dFxyXG57XHJcblxyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4XHJcblxyXG59XHJcbi5jb2xvci10ZXh0LXNlbGVjdFxyXG57XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmRpdi1mb290ZXItZmxleFxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZGl2LWZvb3RlclxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcbi5tdDM0XHJcbntcclxuICBtYXJnaW4tdG9wOiAzNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5kaXYtMXtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG59XHJcbi50ZXh0LWNoYW5nZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICMyNmJlZDY7XHJcbn1cclxuLnRleHQtY29udGFjdFxyXG57XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcclxufVxyXG4uZGl2LTJcclxue1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5kaXYtM1xyXG57XHJcbiAgd2lkdGg6IDg0JTtcclxufVxyXG4uZGl2LWNoYW5nZVxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDBweDtcclxufVxyXG4uZGl2LWJhY2tncm91bmRcclxue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xyXG59XHJcbi50ZXh0LWNvbnRlbnRcclxue1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5kaXYtY29udGVudFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuLm10NVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnRleHQteWNrXHJcbntcclxuICAgIGNvbG9yOiAjMjZiZWQ2O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMTRweFxyXG59XHJcbi5kaXYteWNrXHJcbntcclxuICAgIHBhZGRpbmc6IDlweCAwcHg7XHJcbn1cclxuLmNscy1pbWdcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxufVxyXG46Om5nLWRlZXB7XHJcbiAgLmNzc2Rpc3RyaWN0IC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3NcclxuICB7XHJcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICB9XHJcbiAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWguY3NzZGlzdHJpY3R7IFxyXG4gICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1MHB4KTtcclxuICAgIC0taGVpZ2h0OiA5MCU7XHJcbiAgfVxyXG59XHJcbi5tdDE1XHJcbntcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi50ZXh0LXRpdGxlXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGNvbG9yOiAjYmRiZGJkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnRleHQtc2VsZWN0XHJcbntcclxuICBjb2xvcjogIzI2YmVkNjtcclxufVxyXG4uY2hrYm94XHJcbntcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcbi5pb24taXRlbVxyXG57XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAtLW1pbi1oZWlnaHQ6IDBweDtcclxufVxyXG5cclxuLm10MjVcclxue1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLm10Mjlcclxue1xyXG4gIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLm10MTVweFxyXG57XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbn1cclxuLnRleHQtbG9naW5cclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4udGV4dC1ub3Rle1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG59XHJcbi5kaXYtYXV0b1xyXG57XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5kaXYtY29udGVudDEge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG4ubGFiZWwtaW5wdXR7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uaW9uLWNoZWNrYm94e1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogMTZweDtcclxuICBtYXJnaW46IC0ycHg7XHJcbn1cclxuXHJcbiIsIi50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5idXR0b24taW5zdGFsbG1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbjogMTZweCA4cHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ1dHRvbjQge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogMzAlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5saXN0LWRlcGFydHVyZSB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbi5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb24ge1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xufVxuXG4ucmFkaW8tbWQgLnJhZGlvLWlubmVyIHtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDFweDtcbiAgd2lkdGg6IDZweDtcbiAgaGVpZ2h0OiA2cHg7XG59XG5cbi5yYWRpby1tZCAucmFkaW8tY2hlY2tlZCB7XG4gIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbn1cblxuLnRvb2xiYXItdGl0bGUtbWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbn1cblxuLmNscy1sYWJlbCB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sYWJlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmxhYmVsLWlucHV0LW9yZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi10aXRsZS1vdGhlci1yZXF1ZXN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5kaXYtdGl0bGUtZXhwb3J0LW9yZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi50ZXh0LXN1YiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM2cHg7XG59XG5cbi5idXR0b24tZWRpdCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG59XG5cbi5jbHMtaW9uLWNvbCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLmNscy1pb24tcm93IHtcbiAgaGVpZ2h0OiA0NXB4O1xufVxuXG4udGV4dC1pbmZvIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4uZGl2LWluZm8ge1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZGl2LWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZGl2LWltZyB7XG4gIG1hcmdpbi1yaWdodDogLTE1cHg7XG59XG5cbi5jbHMtaW9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kaXYtc3BsaXQtcGFuZWwge1xuICBoZWlnaHQ6IDAuNXB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmNvbG9yLXRleHQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzgyODI4MjtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5jb2xvci10ZXh0LXNlbGVjdCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LWZvb3Rlci1mbGV4IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWZvb3RlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm10MzQge1xuICBtYXJnaW4tdG9wOiAzNHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5kaXYtMSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xufVxuXG4udGV4dC1jaGFuZ2Uge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLnRleHQtY29udGFjdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XG59XG5cbi5kaXYtMiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRpdi0zIHtcbiAgd2lkdGg6IDg0JTtcbn1cblxuLmRpdi1jaGFuZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5kaXYtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcbn1cblxuLnRleHQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5tdDUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi50ZXh0LXljayB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbn1cblxuLmRpdi15Y2sge1xuICBwYWRkaW5nOiA5cHggMHB4O1xufVxuXG4uY2xzLWltZyB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbjo6bmctZGVlcCAuY3NzZGlzdHJpY3QgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcyB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oLmNzc2Rpc3RyaWN0IHtcbiAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1MHB4KTtcbiAgLS1oZWlnaHQ6IDkwJTtcbn1cblxuLm10MTUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udGV4dC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICNiZGJkYmQ7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi50ZXh0LXNlbGVjdCB7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4uY2hrYm94IHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cblxuLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xufVxuXG4ubXQyNSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tdDI5IHtcbiAgbWFyZ2luLXRvcDogMjlweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubXQxNXB4IHtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5cbi50ZXh0LWxvZ2luIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLnRleHQtbm90ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNHB4O1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi1hdXRvIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1jb250ZW50MSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/foodadddetail/foodadddetail.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/foodadddetail/foodadddetail.page.ts ***!
  \*****************************************************/
/*! exports provided: FoodadddetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodadddetailPage", function() { return FoodadddetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _foodplaceother_foodplaceother_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../foodplaceother/foodplaceother.page */ "./src/app/foodplaceother/foodplaceother.page.ts");
/* harmony import */ var _providers_foodService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../providers/foodService */ "./src/app/providers/foodService.ts");
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");















let FoodadddetailPage = class FoodadddetailPage {
    constructor(actionSheetController, navCtrl, storage, zone, gf, _foodService, modalCtrl, router, valueGlobal, loadingCtrl, activityService, toastCtrl, Roomif, searchhotel, alertCtrl) {
        this.actionSheetController = actionSheetController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.zone = zone;
        this.gf = gf;
        this._foodService = _foodService;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.valueGlobal = valueGlobal;
        this.loadingCtrl = loadingCtrl;
        this.activityService = activityService;
        this.toastCtrl = toastCtrl;
        this.Roomif = Roomif;
        this.searchhotel = searchhotel;
        this.alertCtrl = alertCtrl;
        this.auth_token = '';
        this.phone = "";
        this.address = "";
        this.note = "";
        this.ischeckedit = true;
        this.arrCity = [];
        this.arrDistrict = [];
        this.arrWard = [];
        this.textcity = "Hồ Chí Minh";
        this.textdist = "Quận/Huyện";
        this.textward = "Phường/Xã";
        this.ischeckcity = 0;
        this.ischeckdist = 0;
        this.ischeckward = 0;
        this.shipaddress = '';
        this.Province = 1;
        this.ischecklogin = true;
        this.Repeat = false;
        this.isDinner = false;
        this.isFood = false;
        this.texttimeFood = "";
        this.texttimeDinner = "";
        this.checkchangeemail = false;
        this.ishideNameMail = true;
        setTimeout(() => {
            jquery__WEBPACK_IMPORTED_MODULE_11__(".homefood-header").removeClass("cls-visible").addClass("cls-disabled");
            if (document.getElementsByClassName("homefood-footer")[1]) {
                document.getElementsByClassName("homefood-footer")[0]['style'].display = 'none';
                document.getElementsByClassName("homefood-footer")[1]['style'].display = 'none';
            }
        }, 200);
    }
    getInfo() {
        this.storage.get('infocus').then(infocus => {
            if (infocus) {
                if (infocus.ho && infocus.ten) {
                    this.hoten = infocus.ho + ' ' + infocus.ten;
                }
                else {
                    if (infocus.ho) {
                        this.hoten = infocus.ho;
                    }
                    else if (infocus.ten) {
                        this.hoten = infocus.ten;
                    }
                }
                if (infocus.phone) {
                    this.phone = infocus.phone;
                }
                else {
                    this.ischeckedit = false;
                }
            }
            else {
                this.ischeckedit = false;
            }
        });
        this.storage.get('email').then(email => {
            if (email) {
                this._email = email;
            }
        });
        this.storage.get('jti').then((uid) => {
            if (uid) {
                this.memberid = uid;
                this.ischecklogin = true;
            }
            else {
                this.ischecklogin = false;
            }
            this.getAddress();
        });
        this.storage.get('Invoice').then((Invoice) => {
            if (Invoice) {
                this.ischeck = true;
            }
            else {
                this.ischeck = false;
            }
        });
        this.storage.get('Repeat').then((Repeat) => {
            if (Repeat) {
                this.Repeat = Repeat;
            }
            else {
                this.Repeat = false;
            }
        });
        this.totalPrice = this._foodService.totalPrice;
        this.zone.run(() => {
            let priceinstallment = Math.round(this.totalPrice * 1 / 12 * 1.05);
            this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
        });
    }
    getAddress() {
        var se = this;
        let url = _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + "/api/FOAdmin/GetData";
        this.gf.RequestApi("GET", url, {}, {}, "", "").then((data) => {
            se.arrCity = [];
            se.arrDistrict = [];
            se.arrWard = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].levelId == 1 && data[i].status == 1) {
                    se.arrCity.push(data[i]);
                }
                if (data[i].levelId == 2 && data[i].status == 1) {
                    se.arrDistrict.push(data[i]);
                }
                if (data[i].levelId == 3 && data[i].status == 1) {
                    se.arrWard.push(data[i]);
                }
            }
            se.sortDist();
            if (this.searchhotel.backPage && this.searchhotel.backPage == 'foodpaymentselect') {
                this.storage.get('shipaddress').then(shipaddress => {
                    if (shipaddress) {
                        this.cusaddress = shipaddress.address + ', ' + shipaddress.ward.name + ', ' + shipaddress.district.name + ', ' + shipaddress.province.name;
                        this.shipaddress = shipaddress.address;
                        this.Ward = shipaddress.ward.id;
                        this.District = shipaddress.district.id;
                        this.Province = shipaddress.province.id;
                        this.textward = shipaddress.ward.name;
                        this.textdist = shipaddress.district.name;
                        this.textcity = shipaddress.province.name;
                        this.ischeckcity = 1;
                        this.ischeckdist = 1;
                        this.ischeckward = 1;
                    }
                    else {
                        this.ischeckedit = false;
                    }
                });
                this.storage.get('order').then(order => {
                    if (order) {
                        this.companyname = order.companyname;
                        this.address = order.address;
                        this.tax = order.tax;
                        this.addressorder = order.addressorder;
                        this.hotenhddt = order.hotenhddt;
                        this.emailhddt = order.emailhddt;
                        this.ishideNameMail = order.ishideNameMail;
                        this.ishide = true;
                        this.ischeck = true;
                    }
                    else {
                        this.ishide = false;
                        this.ischeck = false;
                    }
                });
            }
            else {
                se.GetLastBookingByMember();
            }
        });
    }
    GetLastBookingByMember() {
        var se = this;
        var options = {
            'method': 'GET',
            'url': _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlFood + '/api/FOBooking/GetLastBookingByMember?memberId=' + this.memberid + '&phone=' + this.phone + '&email=' + this._email + '',
            'headers': {
                'token': '584f470f-7a45-4793-a136-0084fadea81c'
            }
        };
        requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response) {
            if (error)
                throw new Error(error);
            var json = JSON.parse(response.body);
            if (json.status == "1") {
                se.cusaddress = json.response.fullAddress;
                se.shipaddress = json.response.address;
                se.Ward = json.response.ward;
                se.District = json.response.district;
                se.Province = json.response.province;
                var textadd = se.cusaddress.split(',');
                if (textadd[1]) {
                    if (se.Ward == 0) {
                        se.textward = "Phường/Xã";
                        se.ischeckward = 0;
                    }
                    else {
                        se.textward = textadd[1];
                    }
                }
                else {
                    se.textward = "Phường/Xã";
                    se.ischeckward = 0;
                }
                if (textadd[2]) {
                    if (se.Ward == 0) {
                        se.textdist = "Quận/Huyện";
                        se.ischeckdist = 0;
                    }
                    else {
                        se.textdist = textadd[2];
                    }
                }
                else {
                    se.textdist = "Quận/Huyện";
                    se.ischeckdist = 0;
                }
                if (textadd[3]) {
                    se.textcity = textadd[3];
                }
                se.ischeckcity = 1;
                se.ischeckdist = 1;
                se.ischeckward = 1;
                se.paymentType = json.response.paymentType;
                if (json.response.isInvoice) {
                    se.companyname = json.response.companyName;
                    se.address = json.response.companyAddress;
                    se.tax = json.response.companyTaxCode;
                    se.addressorder = json.response.billingAddress;
                    se.ishide = true;
                    se.ischeck = true;
                }
                else {
                    se.ishide = false;
                    se.ischeck = false;
                }
            }
            else {
                se.ischeckedit = false;
            }
        });
    }
    sortDist() {
        this.arrDistrict.sort(function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }
    ngOnInit() {
    }
    edit(co) {
        this.zone.run(() => {
            if (co == 0) {
                if (this.ischeck) {
                    this.ishide = false;
                }
                else {
                    this.ishide = true;
                }
            }
            else {
                this.ishide = false;
                this.ischeck = true;
            }
        });
    }
    goback() {
        if (this.actionSheetDistrict) {
            this.actionSheetDistrict.dismiss();
        }
        if (this.actionSheetWard) {
            this.actionSheetWard.dismiss();
        }
        this.navCtrl.navigateBack('/foodbill');
    }
    installment() {
        var se = this;
        if (!se.checkInput(1)) {
            return;
        }
        if (!se.validateEmail(se._email) || !se.gf.checkUnicodeCharactor(se._email)) {
            se.gf.showToastWarning('email không hợp lệ. Vui lòng kiểm tra lại');
            return;
        }
        let checkappleemail = (se._email.includes("appleid") || se._email.includes('vivumember.info'));
        if (!checkappleemail) {
            se.getInstallment(se.totalPrice * 1);
        }
        else {
            se.showConfirmEmail(2);
        }
    }
    presentToastWarning(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: msg,
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    next() {
        if (!this.checkInput(0)) {
            return;
        }
        if (!this.validateEmail(this._email) || !this.gf.checkUnicodeCharactor(this._email)) {
            this.gf.showToastWarning('email không hợp lệ. Vui lòng kiểm tra lại');
            return;
        }
        if (!this.checkchangeemail) {
            if (this.paymentType) {
                if (this.paymentType == 1) {
                    this.navCtrl.navigateForward('foodpaymentchoosebank');
                }
                else {
                    this.navCtrl.navigateForward('foodpaymentselect');
                }
            }
            else {
                this.navCtrl.navigateForward('foodpaymentselect');
            }
        }
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    change() {
        this.zone.run(() => {
            this.ischeckedit = false;
            this.Province = 1;
            this.textdist = "Quận/Huyện";
            this.textward = "Phường/Xã";
            this.ischeckdist = 0;
            this.ischeckward = 0;
            this.Ward = "";
            this.District = "";
            this.textcity = "Hồ Chí Minh";
        });
    }
    ionViewWillEnter() {
        this.ischeckedit = true;
        for (let i = 0; i < this._foodService.listItemsCart.length; i++) {
            const element = this._foodService.listItemsCart[i];
            if (element.isDinner) {
                this.isDinner = true;
            }
            else {
                this.isFood = true;
            }
        }
        this.funcshipTime();
        this.getInfo();
    }
    presentActionSheetCity() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var arrbtnCity = [];
            for (let i = 0; i < this.arrCity.length; i++) {
                var item = {
                    text: this.arrCity[i].name, handler: () => {
                        this.clickCity(this.arrCity[i]);
                    }
                };
                arrbtnCity.push(item);
            }
            const actionSheet = yield this.actionSheetController.create({
                header: 'Tỉnh / Thành phố',
                buttons: arrbtnCity,
            });
            yield actionSheet.present();
        });
    }
    presentActionSheetDistrict() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var arrbtnDist = [];
            for (let i = 0; i < this.arrDistrict.length; i++) {
                if (this.arrDistrict[i].parentId == this.Province) {
                    var item = {
                        text: this.arrDistrict[i].name, handler: () => {
                            this.clickDist(this.arrDistrict[i]);
                        }
                    };
                    arrbtnDist.push(item);
                }
            }
            this.actionSheetDistrict = yield this.actionSheetController.create({
                header: 'Quận/Huyện',
                buttons: arrbtnDist,
                cssClass: 'cssdistrict',
            });
            yield this.actionSheetDistrict.present();
        });
    }
    presentActionSheetWard() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.ischeckdist != 1) {
                alert("Vui lòng chọn Quận/Huyện");
                return;
            }
            var arrbtnWard = [];
            for (let i = 0; i < this.arrWard.length; i++) {
                if (this.arrWard[i].parentId == this.District) {
                    var item = {
                        text: this.arrWard[i].name, handler: () => {
                            this.clickWard(this.arrWard[i]);
                        }
                    };
                    arrbtnWard.push(item);
                }
            }
            this.actionSheetWard = yield this.actionSheetController.create({
                header: 'Phường/Xã',
                buttons: arrbtnWard,
                cssClass: 'cssdistrict'
            });
            yield this.actionSheetWard.present();
        });
    }
    clickCity(arr) {
        this.ischeckcity = 1;
        this.textcity = arr.name;
        this.Province = arr.id;
        this.District = "";
        this.textdist = "Quận/Huyện";
        this.ischeckdist = 0;
        this.Ward = "";
        this.textward = "Phường/Xã";
        this.ischeckward = 0;
    }
    clickDist(arr) {
        this.ischeckdist = 1;
        this.textdist = arr.name;
        this.District = arr.id;
        this.Ward = "";
        this.textward = "Phường/Xã";
        this.ischeckward = 0;
    }
    clickWard(arr) {
        this.ischeckward = 1;
        this.textward = arr.name;
        this.Ward = arr.id;
    }
    phonenumber(inputtxt) {
        var n = Number(inputtxt);
        if (n) {
            var test1 = inputtxt.length;
            if (inputtxt) {
                if (test1 == 10) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    getInstallment(price) {
        var se = this;
        this.presentLoading();
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_7__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
            qs: {
                amount: price.toString()
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_9__(options, function (error, response, body) {
            var rs = JSON.parse(body);
            se.activityService.objBankInStallment = rs;
            se.Roomif.email = se._email;
            se.Roomif.hoten = se.hoten;
            se.Roomif.phone = se.phone;
            if (se.loader) {
                se.loader.dismiss();
            }
            se.navCtrl.navigateForward('/foodinstallment');
        });
    }
    checkInput(value) {
        this.checkchangeemail = false;
        this.hoten = this.hoten ? this.hoten.trim() : '';
        this._email = this._email ? this._email.trim() : '';
        this.address = this.address ? this.address.trim() : '';
        if (this._foodService.listItemsCart.length == 0) {
            return false;
        }
        if (this._foodService.listItemsCart.length == 0) {
            return false;
        }
        if (!this.hoten) {
            alert("Xin vui lòng nhập họ tên");
            return false;
        }
        if (!this.phone || !this.phonenumber(this.phone)) {
            alert("Số điện thoại không hợp lệ. Xin vui lòng nhập lại.");
            return false;
        }
        if (!this._email) {
            alert("Xin vui lòng nhập email");
            return false;
        }
        if (!this.Province) {
            alert("Xin vui lòng chọn Tỉnh/ Thành phó giao hàng");
            return false;
        }
        else {
            if (this.Province != 1) {
                alert("Dịch vụ bữa trưa chỉ hoạt động ở Hồ Chí Minh");
                this.searchhotel.backPage = "foodbill";
                this.navCtrl.navigateBack('/app/tabs/tab1');
                return false;
            }
        }
        if (!this.District) {
            alert("Xin vui lòng chọn Quận/ Huyện giao hàng");
            return false;
        }
        if (!this.Ward) {
            alert("Xin vui lòng chọn Xã/ Phường giao hàng");
            return false;
        }
        if (!this.shipaddress) {
            alert("Xin vui lòng nhập địa chỉ giao hàng");
            return false;
        }
        if (this.ischeck) {
            if (this.companyname && this.address && this.tax) {
                this.Invoice = true;
                this.addressorder = this._email;
                this.Roomif.nameOrder = this.hoten;
                if (!this.ishideNameMail) {
                    if (this.emailhddt && this.hotenhddt) {
                        if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                            this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                            return;
                        }
                        else {
                            this.addressorder = this.emailhddt;
                            this.Roomif.nameOrder = this.hotenhddt;
                        }
                    }
                    else {
                        alert("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
                        return false;
                    }
                }
                this.storage.set("Invoice", true);
                var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                this.storage.set("order", order1);
            }
            else {
                alert("Xin vui lòng nhập đầy đủ thông tin xuất hóa đơn");
                return false;
            }
        }
        else {
            this.Invoice = false;
            this.storage.set("Invoice", false);
            this.companyname = "";
            this.address = "";
            this.tax = "";
            this.addressorder = "";
        }
        if (this._email) {
            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
            if (checkappleemail && value == 0) {
                this.checkchangeemail = true;
                this.showConfirmEmail(value);
            }
        }
        var currentdate = new Date();
        var currentdate1 = moment__WEBPACK_IMPORTED_MODULE_8__(currentdate).format();
        var dataBooking;
        dataBooking = this._foodService.listItemsCart;
        var FobookingDetail = [];
        for (let i = 0; i < dataBooking.length; i++) {
            var arrExtra = [];
            if (dataBooking[i].itemExtraOther && dataBooking[i].itemExtraOther.length > 0) {
                dataBooking[i].itemExtraOther.forEach(element => {
                    arrExtra.push(element);
                });
            }
            if (dataBooking[i].itemExtraWater && dataBooking[i].itemExtraWater.length > 0) {
                dataBooking[i].itemExtraWater.forEach(element => {
                    arrExtra.push(element);
                });
            }
            var Extra = "";
            if (arrExtra.length > 0) {
                Extra = JSON.stringify(arrExtra);
            }
            else {
                Extra = "[]";
            }
            var item = { ComboId: dataBooking[i].focomboPeriod.comboId, Name: dataBooking[i].focomboPeriod.name, Quantity: dataBooking[i].quantity, Extra: Extra, ItemPrice: dataBooking[i].focategory.totalPriceItem, applyFor: dataBooking[i].applyFor, pricePerDay: dataBooking[i].focategory.pricePerDay, startDate: dataBooking[i].startDate, endDate: dataBooking[i].endDate };
            FobookingDetail.push(item);
        }
        let arrmindate = FobookingDetail.map((md) => { return moment__WEBPACK_IMPORTED_MODULE_8__(md.startDate).format('YYYY-MM-DD'); });
        let arrmaxdate = FobookingDetail.map((md) => { return moment__WEBPACK_IMPORTED_MODULE_8__(md.endDate).format('YYYY-MM-DD'); });
        let mindate = arrmindate.sort()[0], maxdate = arrmaxdate.sort()[arrmaxdate.length - 1];
        if (this.isFood && this.isDinner) {
            this.note = this.texttimeFood + " | " + this.texttimeDinner;
        }
        else {
            if (this.isFood) {
                this.note = this.texttimeFood;
            }
            else if (this.isDinner) {
                this.note = this.texttimeDinner;
            }
        }
        var bookingObject = {
            CustomerName: this.hoten,
            CustomerPhone: this.phone,
            CustomerEmail: this._email,
            Province: this.Province,
            District: this.District,
            Ward: this.Ward,
            Address: this.shipaddress,
            TotalPrice: this._foodService.totalPrice,
            Note: this.note,
            BookingDate: currentdate1,
            StartDate: mindate,
            EndDate: maxdate,
            Source: 6,
            FobookingDetail: FobookingDetail,
            IsInvoice: this.Invoice,
            CompanyName: this.companyname,
            CompanyAddress: this.address,
            CompanyTaxCode: this.tax,
            BillingAddress: this.addressorder,
            companycontactname: this.Roomif.nameOrder,
            MemberId: this.memberid,
            Status: 2,
            Repeat: this.Repeat
        };
        this._foodService.objBooking = bookingObject;
        var itemward = { id: this.Ward, name: this.textward };
        var itemwdist = { id: this.District, name: this.textdist };
        var itempro = { id: this.Province, name: this.textcity };
        var cusadd = { address: this.shipaddress, ward: itemward, district: itemwdist, province: itempro };
        this.storage.set("shipaddress", cusadd);
        var info;
        var textfullname = this.hoten.split(' ');
        if (textfullname.length > 2) {
            let name = '';
            for (let i = 1; i < textfullname.length; i++) {
                if (i == 1) {
                    name += textfullname[i];
                }
                else {
                    name += ' ' + textfullname[i];
                }
            }
            info = { ho: textfullname[0], ten: name, phone: this.phone };
        }
        else if (textfullname.length > 1) {
            info = { ho: textfullname[0], ten: textfullname[1], phone: this.phone };
        }
        else if (textfullname.length == 1) {
            info = { ho: textfullname[0], ten: "", phone: this.phone };
        }
        this.storage.set("infocus", info);
        this.storage.set("email", this._email);
        this.storage.set("Repeat", this.Repeat);
        return true;
    }
    changeplace() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._foodService.ischeckchangeplace = "0";
            const modal = yield this.modalCtrl.create({
                component: _foodplaceother_foodplaceother_page__WEBPACK_IMPORTED_MODULE_1__["FoodplaceotherPage"],
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                this.navCtrl.navigateForward(['/app/tabs/tab1']);
            });
        });
    }
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    goToLogin() {
        this.storage.get('auth_token').then(auth_token => {
            if (!auth_token) {
                this.valueGlobal.logingoback = 'foodadddetail';
                this.router.navigateByUrl('/login');
            }
        });
    }
    showConfirmEmail(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail(value);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield this.modalCtrl.create({
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_13__["ConfirmemailPage"],
                componentProps: {
                    aParameter: true,
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                if (data && data.data && data.data.email) {
                    if (data.data.email) {
                        se.storage.remove("email");
                        se.storage.set("email", data.data.email);
                        se.storage.set("saveemail", data.data.email);
                        se._email = data.data.email;
                        if (se._foodService.objBooking) {
                            se._foodService.objBooking.CustomerEmail = data.data.email;
                        }
                        if (value == 0) {
                            if (se.paymentType) {
                                if (se.paymentType == 1) {
                                    se.navCtrl.navigateForward('foodpaymentchoosebank');
                                }
                                else {
                                    se.navCtrl.navigateForward('foodpaymentselect');
                                }
                            }
                            else {
                                se.navCtrl.navigateForward('foodpaymentselect');
                            }
                        }
                        else {
                            se.getInstallment(se.totalPrice * 1);
                        }
                    }
                }
            });
        });
    }
    funcshipTime() {
        this.storage.get('timeShip').then(timeShip => {
            if (timeShip) {
                if (timeShip.food) {
                    this.texttimeFood = timeShip.food;
                }
                else {
                    this.texttimeFood = "11h15 - 11h30";
                }
                if (timeShip.dinner) {
                    this.texttimeDinner = timeShip.dinner;
                }
                else {
                    this.texttimeDinner = "16h00 - 16h30";
                }
            }
            else {
                this.texttimeFood = "11h15 - 11h30";
                this.texttimeDinner = "16h00 - 16h30";
            }
        });
    }
    clickTime(time, stt) {
        if (stt == 0) {
            this.texttimeFood = "";
            this.texttimeFood = time;
        }
        else {
            this.texttimeDinner = "";
            this.texttimeDinner = time;
        }
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
};
FoodadddetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-foodadddetail',
        template: __webpack_require__(/*! ./foodadddetail.page.html */ "./src/app/foodadddetail/foodadddetail.page.html"),
        styles: [__webpack_require__(/*! ./foodadddetail.page.scss */ "./src/app/foodadddetail/foodadddetail.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgZone"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["GlobalFunction"],
        _providers_foodService__WEBPACK_IMPORTED_MODULE_2__["foodService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"], _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["ValueGlobal"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_3__["ActivityService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["RoomInfo"], _providers_book_service__WEBPACK_IMPORTED_MODULE_10__["SearchHotel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
], FoodadddetailPage);



/***/ })

}]);
//# sourceMappingURL=foodadddetail-foodadddetail-module.js.map