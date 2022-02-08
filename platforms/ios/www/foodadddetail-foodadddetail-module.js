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

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 16px 8px;\n  padding: 0px;\n}\n\n.button4 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 30%;\n  font-size: 12px;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.cls-label {\n  color: #828282;\n  font-size: 12px;\n}\n\n.label-name {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 12px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n}\n\n.button-edit {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  height: 27px !important;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.cls-ion-col {\n  align-self: center;\n}\n\n.cls-ion-row {\n  height: 45px;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #000000;\n  line-height: 21px;\n}\n\n.div-info {\n  margin-left: 3px;\n  margin-top: 20px;\n}\n\n.div-flex {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n\n.div-img {\n  margin-right: -15px;\n}\n\n.cls-ion-label {\n  width: 100%;\n}\n\n.div-split-panel {\n  height: 0.5px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.color-text {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #828282;\n  line-height: 21px;\n}\n\n.color-text-select {\n  color: #000000;\n}\n\n.div-footer-flex {\n  text-align: center;\n  display: flex;\n}\n\n.div-footer {\n  text-align: center;\n}\n\n.mt34 {\n  margin-top: 34px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.div-1 {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n\n.text-change {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n}\n\n.text-contact {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.13px;\n}\n\n.div-2 {\n  display: flex;\n  position: relative;\n}\n\n.div-3 {\n  width: 84%;\n}\n\n.div-change {\n  position: absolute;\n  right: 0px;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n::ng-deep .cssdistrict .action-sheet-group.sc-ion-action-sheet-ios {\n  overflow: scroll;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n::ng-deep .sc-ion-action-sheet-ios-h.cssdistrict {\n  margin-top: calc(env(safe-area-inset-top) + 50px);\n  --height: 90%;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.text-title {\n  font-size: 10px;\n  color: #bdbdbd;\n  margin-left: 5px;\n}\n\n.text-select {\n  color: #26bed6;\n}\n\n.chkbox {\n  vertical-align: bottom;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n.mt25 {\n  margin-top: 25px;\n}\n\n.mt29 {\n  margin-top: 29px;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.mt15px {\n  margin-top: -15px;\n}\n\n.text-login {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-auto {\n  margin-top: 20px;\n  display: flex;\n}\n\n.div-content1 {\n  margin-left: 20px;\n  margin-right: 16px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RhZGRkZXRhaWwvZm9vZGFkZGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RhZGRkZXRhaWwvZm9vZGFkZGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQ0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSUo7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREZFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDS0o7O0FESEU7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURIQTtFQUVJLGtCQUFBO0FDS0o7O0FESEE7RUFFSSxZQUFBO0FDS0o7O0FESEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUVFLG1CQUFBO0FDS0Y7O0FESEE7RUFFRSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFFRSxjQUFBO0FDSUY7O0FERkE7RUFFSSxrQkFBQTtFQUNBLGFBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0FDSUo7O0FERkE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ01GOztBREpBO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFFRSxVQUFBO0FDTUY7O0FESkE7RUFFRSxrQkFBQTtFQUNFLFVBQUE7QUNNSjs7QURKQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7QUNNSjs7QURKQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURKQTtFQUVJLGdCQUFBO0FDTUo7O0FESEU7RUFFRSxnQkFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNLTjs7QURIRTtFQUNFLGlEQUFBO0VBQ0EsYUFBQTtBQ0tKOztBREZBO0VBRUUsZ0JBQUE7QUNJRjs7QURGQTtFQUVJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNJSjs7QUREQTtFQUVFLGNBQUE7QUNHRjs7QUREQTtFQUVFLHNCQUFBO0FDR0Y7O0FEREE7RUFFRSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QURBQTtFQUVFLGdCQUFBO0FDRUY7O0FEQUE7RUFFRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFRjs7QURBQTtFQUVFLGlCQUFBO0FDRUY7O0FEQUE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNHRjs7QUREQTtFQUVFLGdCQUFBO0VBQ0EsYUFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2Zvb2RhZGRkZXRhaWwvZm9vZGFkZGRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkXHJcbn1cclxuLmJ1dHRvbjJcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59IFxyXG4uYnV0dG9uLWluc3RhbGxtZW50XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDhweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSBcclxuLmJ1dHRvbjRcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmxpc3QtZGVwYXJ0dXJle1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb257XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTJweDtcclxufVxyXG5cclxuLnJhZGlvLW1kIC5yYWRpby1pbm5lcntcclxuICAgIGxlZnQ6IDFweDtcclxuICAgIHRvcDogMXB4O1xyXG4gICAgd2lkdGg6IDZweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG59XHJcbi5yYWRpby1tZCAucmFkaW8tY2hlY2tlZCB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XHJcbn1cclxuLnRvb2xiYXItdGl0bGUtbWQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIH0gIFxyXG4uY2xzLWxhYmVsXHJcbntcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuXHJcbiAgXHJcbiAgLmxhYmVsLW5hbWV7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgfVxyXG4gIC5sYWJlbC1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgLmxhYmVsLWlucHV0LW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuXHJcbiAgLmRpdi10aXRsZS1vdGhlci1yZXF1ZXN0e1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5kaXYtdGl0bGUtZXhwb3J0LW9yZGVye1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgfVxyXG5cclxuICAudGV4dC1zdWJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xyXG4gIH1cclxuICAuYnV0dG9uLWVkaXRcclxue1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGNvbG9yOiAjZmY5NTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxufSBcclxuLmNscy1pb24tY29sXHJcbntcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG4uY2xzLWlvbi1yb3dcclxue1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi50ZXh0LWluZm9cclxue1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG59XHJcbi5kaXYtaW5mb1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uZGl2LWZsZXhcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5kaXYtaW1nXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xyXG59XHJcbi5jbHMtaW9uLWxhYmVsXHJcbntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2LXNwbGl0LXBhbmVse1xyXG4gIGhlaWdodDogMC41cHg7XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuLmNvbG9yLXRleHRcclxue1xyXG5cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxuICBsaW5lLWhlaWdodDogMjFweFxyXG5cclxufVxyXG4uY29sb3ItdGV4dC1zZWxlY3Rcclxue1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5kaXYtZm9vdGVyLWZsZXhcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRpdi1mb290ZXJcclxue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG4ubXQzNFxyXG57XHJcbiAgbWFyZ2luLXRvcDogMzRweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG4uZGl2LTF7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxufVxyXG4udGV4dC1jaGFuZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG59XHJcbi50ZXh0LWNvbnRhY3Rcclxue1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjEzcHg7XHJcbn1cclxuLmRpdi0yXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGl2LTNcclxue1xyXG4gIHdpZHRoOiA4NCU7XHJcbn1cclxuLmRpdi1jaGFuZ2Vcclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuLmRpdi1iYWNrZ3JvdW5kXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTZweDtcclxufVxyXG4udGV4dC1jb250ZW50XHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZGl2LWNvbnRlbnRcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5tdDVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi50ZXh0LXlja1xyXG57XHJcbiAgICBjb2xvcjogIzI2YmVkNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHhcclxufVxyXG4uZGl2LXlja1xyXG57XHJcbiAgICBwYWRkaW5nOiA5cHggMHB4O1xyXG59XHJcbi5jbHMtaW1nXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuOjpuZy1kZWVwe1xyXG4gIC5jc3NkaXN0cmljdCAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zXHJcbiAge1xyXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgfVxyXG4gIC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oLmNzc2Rpc3RyaWN0eyBcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTBweCk7XHJcbiAgICAtLWhlaWdodDogOTAlO1xyXG4gIH1cclxufVxyXG4ubXQxNVxyXG57XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4udGV4dC10aXRsZVxyXG57XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBjb2xvcjogI2JkYmRiZDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcbi50ZXh0LXNlbGVjdFxyXG57XHJcbiAgY29sb3I6ICMyNmJlZDY7XHJcbn1cclxuLmNoa2JveFxyXG57XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG4uaW9uLWl0ZW1cclxue1xyXG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xyXG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgLS1taW4taGVpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5tdDI1XHJcbntcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5tdDI5XHJcbntcclxuICBtYXJnaW4tdG9wOiAyOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5tdDE1cHhcclxue1xyXG4gIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcbi50ZXh0LWxvZ2luXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnRleHQtbm90ZXtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS42NztcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcclxuICBjb2xvcjogIzgyODI4MjtcclxufVxyXG4uZGl2LWF1dG9cclxue1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uZGl2LWNvbnRlbnQxIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuLmxhYmVsLWlucHV0e1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuLmlvbi1jaGVja2JveHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgbWFyZ2luOiAtMnB4O1xyXG59XHJcblxyXG4iLCIudGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4uYnV0dG9uLWluc3RhbGxtZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW46IDE2cHggOHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDMwJTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGlzdC1kZXBhcnR1cmUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1pbm5lciB7XG4gIGxlZnQ6IDFweDtcbiAgdG9wOiAxcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xufVxuXG4ucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5jbHMtbGFiZWwge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGFiZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5sYWJlbC1pbnB1dC1vcmRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtdGl0bGUtb3RoZXItcmVxdWVzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uZGl2LXRpdGxlLWV4cG9ydC1vcmRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4udGV4dC1zdWIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xufVxuXG4uYnV0dG9uLWVkaXQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4uY2xzLWlvbi1jb2wge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5jbHMtaW9uLXJvdyB7XG4gIGhlaWdodDogNDVweDtcbn1cblxuLnRleHQtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxuLmRpdi1pbmZvIHtcbiAgbWFyZ2luLWxlZnQ6IDNweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmRpdi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmRpdi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xufVxuXG4uY2xzLWlvbi1sYWJlbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZGl2LXNwbGl0LXBhbmVsIHtcbiAgaGVpZ2h0OiAwLjVweDtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5jb2xvci10ZXh0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xufVxuXG4uY29sb3ItdGV4dC1zZWxlY3Qge1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1mb290ZXItZmxleCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmRpdi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tdDM0IHtcbiAgbWFyZ2luLXRvcDogMzRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uZGl2LTEge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cblxuLnRleHQtY2hhbmdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi50ZXh0LWNvbnRhY3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xufVxuXG4uZGl2LTIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kaXYtMyB7XG4gIHdpZHRoOiA4NCU7XG59XG5cbi5kaXYtY2hhbmdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xufVxuXG4uZGl2LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gIG1hcmdpbi1yaWdodDogLTE2cHg7XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZGl2LWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4ubXQ1IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4udGV4dC15Y2sge1xuICBjb2xvcjogIzI2YmVkNjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjFweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG59XG5cbi5kaXYteWNrIHtcbiAgcGFkZGluZzogOXB4IDBweDtcbn1cblxuLmNscy1pbWcge1xuICBtYXJnaW4tbGVmdDogNHB4O1xufVxuXG46Om5nLWRlZXAgLmNzc2Rpc3RyaWN0IC5hY3Rpb24tc2hlZXQtZ3JvdXAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mge1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cbjo6bmctZGVlcCAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaC5jc3NkaXN0cmljdCB7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTBweCk7XG4gIC0taGVpZ2h0OiA5MCU7XG59XG5cbi5tdDE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnRleHQtdGl0bGUge1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4udGV4dC1zZWxlY3Qge1xuICBjb2xvcjogIzI2YmVkNjtcbn1cblxuLmNoa2JveCB7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5pb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xuICAtLW1pbi1oZWlnaHQ6IDBweDtcbn1cblxuLm10MjUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4ubXQyOSB7XG4gIG1hcmdpbi10b3A6IDI5cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm10MTVweCB7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4udGV4dC1sb2dpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi50ZXh0LW5vdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjY3O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzRweDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtYXV0byB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtY29udGVudDEge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufSJdfQ== */"

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