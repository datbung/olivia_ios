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

module.exports = "<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -9px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label >Thông tin\n              khách</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div style=\"text-align: center\">\n    <img src=\"./assets/step/food_step_1.svg\">\n  </div>\n\n  <div *ngIf=\"!ischeckedit\" class=\"div-1\">\n    <ion-row class=\"cls-ion-row\">\n      <ion-col class=\"cls-ion-col\" size=\"9\">\n        <ion-label class=\"text\">\n          Thông tin liên lạc\n        </ion-label>\n      </ion-col>\n    </ion-row>\n    <div *ngIf=\"!ischeckedit&&!ischecklogin\" class=\"div-background\" style=\"margin-top: 10px;\">\n      <div class=\"div-content1\">\n        <ion-label class=\"text-login\">\n          Đã có tài khoản? <span class=\"text-select\" (click)=\"goToLogin()\">Đăng nhập ngay</span> \n        </ion-label>\n      </div>\n     \n    </div>\n    <ion-row >\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Họ Tên</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"hoten\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Số điện thoại</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"phone\" maxlength=10 type=\"tel\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Email</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"mt34\">\n      <ion-label class=\"text\">\n        Địa chỉ giao hàng\n      </ion-label>\n    </div>\n  \n    <ion-radio-group>\n      <label class=\"text-title\">Tỉnh/Thành phố</label>\n      <ion-row *ngIf=\"arrCity.length==1\" style=\"margin-left: -5px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of arrCity\">\n          <ion-item class=\"ion-item\">\n            <ion-checkbox disabled  checked class=\"rd-departure\">\n            </ion-checkbox>\n            <label class=\"text-select\"\n              class=\"rd-text\">{{item.name}}</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"arrCity.length>1\" style=\"margin-left: -5px;\">\n        <ion-col size=\"6\" *ngFor=\"let item of arrCity\">\n          <ion-item class=\"ion-item\">\n            <ion-radio  (click)=\"clickCity(item)\" [checked]=\"Province==item.id?true:false\" class=\"rd-departure\">\n            </ion-radio>\n            <label [ngClass]=\"Province==item.id ? 'text-select': ''\" style=\"margin-left: 5px\"\n              class=\"rd-text\">{{item.name}}</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n\n    <ion-row (click)=\"presentActionSheetDistrict()\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-ion-label color-text\"  [ngClass]=\"ischeckdist==1 ? 'color-text-select': ''\">{{textdist}}</ion-label>\n          <div slot=\"end\">\n            <img src=\"./assets/imgs/ic_down_b.svg\">\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row (click)=\"presentActionSheetWard()\">\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"cls-ion-label color-text\"  [ngClass]=\"ischeckward==1 ? 'color-text-select': ''\">{{textward}}</ion-label>\n          <div slot=\"end\" >\n            <img src=\"./assets/imgs/ic_down_b.svg\">\n          </div>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"--padding-start: 0px\">\n          <ion-label class=\"label-name\" position=\"floating\">Số nhà, tên đường</ion-label>\n          <ion-input class=\"label-input\" [(ngModel)]=\"shipaddress\" type=\"text\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <div class=\"mt29\">\n      <ion-label class=\"text\">\n        Khung giờ nhận hàng\n      </ion-label>\n    </div>\n  \n    <ion-radio-group *ngIf=\"isFood\">\n      <label class=\"text-title\">Buổi trưa</label>\n      <ion-row class=\"ml5\">\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('11h - 12h',0)\" [checked]=\"texttimeFood=='11h - 12h'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">11h - 12h</label>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('11h30 - 12h00',0)\" [checked]=\"texttimeFood=='11h30 - 12h00'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">11h30 - 12h00</label>\n          </ion-item>\n        </ion-col> -->\n      </ion-row>\n    </ion-radio-group>\n  \n    <ion-radio-group *ngIf=\"isDinner\">\n      <label class=\"text-title\">Buổi tối</label>\n      <ion-row class=\"ml5\">\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('16h00 - 16h30',1)\" [checked]=\"texttimeDinner=='16h00 - 16h30'?'true':'false'\" class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">16h00 - 16h30</label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\" >\n          <ion-item class=\"ion-item\">\n            <ion-radio mode=\"md\" (click)=\"clickTime('16h30 - 17h00',1)\" [checked]=\"texttimeDinner=='16h30 - 17h00'?'true':'false'\"  class=\"rd-departure\">\n            </ion-radio>\n            <label  style=\"margin-left: 5px\" class=\"rd-text\">16h30 - 17h00</label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-radio-group>\n  </div>\n  \n  <div *ngIf=\"ischeckedit\" class=\"div-info\">\n    <div class=\"div-2\">\n      <div >\n        <ion-label class=\"text-info\"  >Thông tin giao hàng</ion-label>\n      </div>\n      <div class=\"div-change\">\n        <ion-label *ngIf=\"ischeckedit\" class=\"text-change\" (click)=\"change()\" >Thay đổi</ion-label>\n      </div>\n    </div>\n    <div>\n      <ion-label class=\"text-contact\">\n        {{hoten}} - {{phone}}\n      </ion-label>\n    </div>\n    <div>\n      <ion-label class=\"text-info\">\n        {{cusaddress}}\n      </ion-label>\n    </div>\n  </div>\n  <div  class=\"div-auto\">\n    <div>\n      <ion-checkbox class=\"chkbox\"  [(ngModel)]=\"Repeat\" color=\"secondary\"></ion-checkbox>\n    </div>\n   <div  style=\"margin: 0px 10px\">\n    <div>\n      <ion-label class=\"text-content\" >Tự động đặt thực đơn này hàng tuần</ion-label>\n    </div>\n    <div >\n      <ion-label class=\"text-note\" >iVIVU sẽ email thông tin thanh toán vào thứ 4 hàng tuần cho Quý khách</ion-label>\n    </div>\n   </div>\n \n  </div>\n \n  <ion-row *ngIf=\"!ischeckedit\"  style=\"margin-top: 20px\">\n    <ion-checkbox (ionChange)=\"(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n    <ion-label class=\"label-input\" style=\"margin: 3px 10px\">Xuất hóa đơn điện tử</ion-label>\n  </ion-row>\n  \n  <div *ngIf=\"ischeckedit==false\">\n    <div *ngIf=\"ischeck\">\n      <ion-row style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Tên công ty</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Địa chỉ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"label-input-order\" position=\"floating\">Mã số thuế</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <div style=\"margin-left: 5px;margin-top: 10px\">\n        <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n      </div>\n      <div *ngIf=\"!ishideNameMail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Họ tên</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Email nhận HĐ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </div>\n    </div>\n  </div>\n  <div  *ngIf=\"!ischeckedit\" class=\"div-background\">\n    <div class=\"div-content\">\n      <div class=\"mt5\">\n        <ion-label class=\"text-content\">\n          - Quý khách ngoài khu vực trên vui lòng để lại thông tin liên lạc, iVIVU sẽ cố gắng hỗ trợ Quý khách trong thời gian sớm nhất. <span (click)=\"changeplace()\" class=\"text-yck\"> Yêu cầu giao khu vực khác<img class=\"cls-img\" src=\"./assets/imgs/vector.svg\"></span>\n        </ion-label>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div [ngClass]=\"totalPrice>=3000000?'div-footer-flex':'div-footer'\">\n    <button *ngIf=\"totalPrice>=3000000\" (click)=\"installment()\" ion-button round outline class=\"button button-installment\">Trả góp <br>\n      <p class=\"text-sub\">Chỉ từ {{installmentPriceStr}}</p>\n    </button>\n    <button (click)=\"next()\" ion-button round outline class=\"button button2\">Thanh toán ngay</button>\n  </div>\n\n</ion-footer>"

/***/ }),

/***/ "./src/app/foodadddetail/foodadddetail.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/foodadddetail/foodadddetail.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin: 16px 8px;\n  padding: 0px;\n}\n\n.button4 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 30%;\n  font-size: 12px;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.cls-label {\n  color: #828282;\n  font-size: 12px;\n}\n\n.label-name {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 14px;\n  font-weight: 300;\n  color: #000000;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #000000;\n  padding-top: 12px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n}\n\n.button-edit {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 90%;\n  height: 27px !important;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.cls-ion-col {\n  align-self: center;\n}\n\n.cls-ion-row {\n  height: 45px;\n}\n\n.text-info {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #000000;\n  line-height: 21px;\n}\n\n.div-info {\n  margin-left: 3px;\n  margin-top: 20px;\n}\n\n.div-flex {\n  display: flex;\n  margin-top: 10px;\n  margin-left: 5px;\n}\n\n.div-img {\n  margin-right: -15px;\n}\n\n.cls-ion-label {\n  width: 100%;\n}\n\n.div-split-panel {\n  height: 0.5px;\n  background: #f2f2f2;\n  margin-top: 12px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.color-text {\n  font-size: 14px;\n  font-weight: 300;\n  letter-spacing: -0.14px;\n  color: #828282;\n  line-height: 21px;\n}\n\n.color-text-select {\n  color: #000000;\n}\n\n.div-footer-flex {\n  text-align: center;\n  display: flex;\n}\n\n.div-footer {\n  text-align: center;\n}\n\n.mt34 {\n  margin-top: 34px;\n  margin-left: 5px;\n  margin-bottom: 5px;\n}\n\n.div-1 {\n  margin-top: 10px;\n  margin-left: -5px;\n}\n\n.text-change {\n  font-size: 14px;\n  line-height: 1.5;\n  letter-spacing: -0.14px;\n  color: #26bed6;\n}\n\n.text-contact {\n  font-size: 18px;\n  font-weight: 600;\n  line-height: 1.5;\n  letter-spacing: -0.13px;\n}\n\n.div-2 {\n  display: flex;\n  position: relative;\n}\n\n.div-3 {\n  width: 84%;\n}\n\n.div-change {\n  position: absolute;\n  right: 0px;\n}\n\n.div-background {\n  background-color: #FAFAFA;\n  margin-top: 24px;\n  margin-left: -16px;\n  margin-right: -16px;\n}\n\n.text-content {\n  font-size: 14px;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.div-content {\n  margin-left: 16px;\n  padding-top: 8px;\n  margin-right: 16px;\n}\n\n.mt5 {\n  margin-top: 5px;\n}\n\n.text-yck {\n  color: #26bed6;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: -0.14px;\n}\n\n.div-yck {\n  padding: 9px 0px;\n}\n\n.cls-img {\n  margin-left: 4px;\n}\n\n::ng-deep .cssdistrict .action-sheet-group.sc-ion-action-sheet-ios {\n  overflow: scroll;\n  overflow-y: auto;\n  scroll-behavior: smooth;\n}\n\n::ng-deep .sc-ion-action-sheet-ios-h.sc-ion-action-sheet-ios-s.ios.cssdistrict {\n  margin-top: calc(env(safe-area-inset-top) + 50px);\n  --height: 90%;\n}\n\n::ng-deep .sc-ion-action-sheet-ios-h .cssdistrict {\n  margin-top: calc(env(safe-area-inset-top) + 50px);\n  --height: 90%;\n}\n\n::ng-deep .sc-ion-action-sheet-md-h .cssdistrict {\n  margin-top: calc(env(safe-area-inset-top) + 50px);\n  --height: 90%;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.text-title {\n  font-size: 10px;\n  color: #bdbdbd;\n  margin-left: 5px;\n}\n\n.text-select {\n  color: #26bed6;\n}\n\n.chkbox {\n  vertical-align: bottom;\n}\n\n.ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n.mt25 {\n  margin-top: 25px;\n}\n\n.mt29 {\n  margin-top: 29px;\n  margin-bottom: 5px;\n  margin-left: 5px;\n}\n\n.mt15px {\n  margin-top: -15px;\n}\n\n.text-login {\n  font-size: 14px;\n  font-weight: 300;\n  line-height: 1.5;\n  letter-spacing: -0.4px;\n  color: #000000;\n}\n\n.text-note {\n  font-size: 12px;\n  font-weight: 300;\n  line-height: 1.67;\n  letter-spacing: -0.34px;\n  color: #828282;\n}\n\n.div-auto {\n  margin-top: 20px;\n  display: flex;\n}\n\n.div-content1 {\n  margin-left: 20px;\n  margin-right: 16px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL2Zvb2RhZGRkZXRhaWwvZm9vZGFkZGRldGFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Zvb2RhZGRkZXRhaWwvZm9vZGFkZGRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLG9CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNHSjs7QUREQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0FDR0o7O0FEQ0U7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR0o7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDSUo7O0FEREU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJSjs7QURGRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREZFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDS0o7O0FESEU7RUFFRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7QUNLSjs7QURIQTtFQUVJLGtCQUFBO0FDS0o7O0FESEE7RUFFSSxZQUFBO0FDS0o7O0FESEE7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBRUksYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNLSjs7QURIQTtFQUVFLG1CQUFBO0FDS0Y7O0FESEE7RUFFRSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNNRjs7QURKQTtFQUdFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFFRSxjQUFBO0FDSUY7O0FERkE7RUFFSSxrQkFBQTtFQUNBLGFBQUE7QUNJSjs7QURGQTtFQUVJLGtCQUFBO0FDSUo7O0FERkE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJRjs7QURGQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ01GOztBREpBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ01GOztBREpBO0VBRUUsYUFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFFRSxVQUFBO0FDTUY7O0FESkE7RUFFRSxrQkFBQTtFQUNFLFVBQUE7QUNNSjs7QURKQTtFQUVJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDTUo7O0FESkE7RUFFSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFFSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjs7QURKQTtFQUVJLGVBQUE7QUNNSjs7QURKQTtFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ01KOztBREpBO0VBRUksZ0JBQUE7QUNNSjs7QURKQTtFQUVJLGdCQUFBO0FDTUo7O0FESEU7RUFFRSxnQkFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7QUNLTjs7QURIRTtFQUNFLGlEQUFBO0VBQ0EsYUFBQTtBQ0tKOztBREZFO0VBQ0UsaURBQUE7RUFDQSxhQUFBO0FDSUo7O0FEREU7RUFDRSxpREFBQTtFQUNBLGFBQUE7QUNHSjs7QURBQTtFQUVFLGdCQUFBO0FDRUY7O0FEQUE7RUFFSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRUo7O0FEQ0E7RUFFRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxzQkFBQTtBQ0NGOztBRENBO0VBRUUsb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFFRSxnQkFBQTtBQ0FGOztBREVBO0VBRUUsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FERUE7RUFFRSxpQkFBQTtBQ0FGOztBREVBO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNBRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFFRSxnQkFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9mb29kYWRkZGV0YWlsL2Zvb2RhZGRkZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHR7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5idXR0b24yXHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxufSBcclxuLmJ1dHRvbi1pbnN0YWxsbWVudFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNmZjk1MDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcclxuICAgIG1hcmdpbjogMTZweCA4cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn0gXHJcbi5idXR0b240XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZjk1MDA7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5saXN0LWRlcGFydHVyZXtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG59XHJcblxyXG4ucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29ue1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5yYWRpby1tZCAucmFkaW8taW5uZXJ7XHJcbiAgICBsZWZ0OiAxcHg7XHJcbiAgICB0b3A6IDFweDtcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxufVxyXG4ucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xyXG59XHJcbi50b29sYmFyLXRpdGxlLW1kIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogNzBweDtcclxuICB9ICBcclxuLmNscy1sYWJlbFxyXG57XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcblxyXG4gIFxyXG4gIC5sYWJlbC1uYW1le1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gIH1cclxuICAubGFiZWwtaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5sYWJlbC1pbnB1dC1vcmRlcntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICB9XHJcblxyXG4gIC5kaXYtdGl0bGUtb3RoZXItcmVxdWVzdHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIH1cclxuICAuZGl2LXRpdGxlLWV4cG9ydC1vcmRlcntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLnRleHQtc3Vie1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcclxuICB9XHJcbiAgLmJ1dHRvbi1lZGl0XHJcbntcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogI2ZmOTUwMDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiAyN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XHJcbn0gXHJcbi5jbHMtaW9uLWNvbFxyXG57XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmNscy1pb24tcm93XHJcbntcclxuICAgIGhlaWdodDogNDVweDtcclxufVxyXG4udGV4dC1pbmZvXHJcbntcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBsaW5lLWhlaWdodDogMjFweDtcclxufVxyXG4uZGl2LWluZm9cclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmRpdi1mbGV4XHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4uZGl2LWltZ1xyXG57XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxufVxyXG4uY2xzLWlvbi1sYWJlbFxyXG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmRpdi1zcGxpdC1wYW5lbHtcclxuICBoZWlnaHQ6IDAuNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbi5jb2xvci10ZXh0XHJcbntcclxuXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbiAgbGluZS1oZWlnaHQ6IDIxcHhcclxuXHJcbn1cclxuLmNvbG9yLXRleHQtc2VsZWN0XHJcbntcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uZGl2LWZvb3Rlci1mbGV4XHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5kaXYtZm9vdGVyXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLm10MzRcclxue1xyXG4gIG1hcmdpbi10b3A6IDM0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuLmRpdi0xe1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbn1cclxuLnRleHQtY2hhbmdlIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTRweDtcclxuICBjb2xvcjogIzI2YmVkNjtcclxufVxyXG4udGV4dC1jb250YWN0XHJcbntcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xM3B4O1xyXG59XHJcbi5kaXYtMlxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRpdi0zXHJcbntcclxuICB3aWR0aDogODQlO1xyXG59XHJcbi5kaXYtY2hhbmdlXHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG59XHJcbi5kaXYtYmFja2dyb3VuZFxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTZweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTE2cHg7XHJcbn1cclxuLnRleHQtY29udGVudFxyXG57XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLmRpdi1jb250ZW50XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG4ubXQ1XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG4udGV4dC15Y2tcclxue1xyXG4gICAgY29sb3I6ICMyNmJlZDY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4XHJcbn1cclxuLmRpdi15Y2tcclxue1xyXG4gICAgcGFkZGluZzogOXB4IDBweDtcclxufVxyXG4uY2xzLWltZ1xyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG59XHJcbjo6bmctZGVlcHtcclxuICAuY3NzZGlzdHJpY3QgLmFjdGlvbi1zaGVldC1ncm91cC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvc1xyXG4gIHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gIH1cclxuICAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1zLmlvcy5jc3NkaXN0cmljdCB7IFxyXG4gICAgbWFyZ2luLXRvcDogY2FsYyhlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkgKyA1MHB4KTtcclxuICAgIC0taGVpZ2h0OiA5MCU7XHJcbiAgfVxyXG5cclxuICAuc2MtaW9uLWFjdGlvbi1zaGVldC1pb3MtaCAuY3NzZGlzdHJpY3QgeyBcclxuICAgIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTBweCk7XHJcbiAgICAtLWhlaWdodDogOTAlO1xyXG4gIH1cclxuICBcclxuICAuc2MtaW9uLWFjdGlvbi1zaGVldC1tZC1oIC5jc3NkaXN0cmljdCB7XHJcbiAgICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDUwcHgpO1xyXG4gICAgLS1oZWlnaHQ6IDkwJTtcclxuICB9XHJcbn1cclxuLm10MTVcclxue1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLnRleHQtdGl0bGVcclxue1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgY29sb3I6ICNiZGJkYmQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4udGV4dC1zZWxlY3Rcclxue1xyXG4gIGNvbG9yOiAjMjZiZWQ2O1xyXG59XHJcbi5jaGtib3hcclxue1xyXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XHJcbn1cclxuLmlvbi1pdGVtXHJcbntcclxuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcclxuICAtLWlubmVyLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gIC0tbWluLWhlaWdodDogMHB4O1xyXG59XHJcblxyXG4ubXQyNVxyXG57XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ubXQyOVxyXG57XHJcbiAgbWFyZ2luLXRvcDogMjlweDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4ubXQxNXB4XHJcbntcclxuICBtYXJnaW4tdG9wOiAtMTVweDtcclxufVxyXG4udGV4dC1sb2dpblxyXG57XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi50ZXh0LW5vdGV7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XHJcbiAgY29sb3I6ICM4MjgyODI7XHJcbn1cclxuLmRpdi1hdXRvXHJcbntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmRpdi1jb250ZW50MSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcbi5sYWJlbC1pbnB1dHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcbi5pb24tY2hlY2tib3h7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIG1hcmdpbjogLTJweDtcclxufVxyXG5cclxuIiwiLnRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMiB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmJ1dHRvbi1pbnN0YWxsbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgbWFyZ2luOiAxNnB4IDhweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYnV0dG9uNCB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAzMCU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxpc3QtZGVwYXJ0dXJlIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5yYWRpby1tZCAucmFkaW8taW5uZXIge1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uY2xzLWxhYmVsIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmxhYmVsLW5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4ubGFiZWwtaW5wdXQtb3JkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LXRpdGxlLW90aGVyLXJlcXVlc3Qge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuLmRpdi10aXRsZS1leHBvcnQtb3JkZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLXRvcDogMTJweDtcbn1cblxuLnRleHQtc3ViIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbn1cblxuLmJ1dHRvbi1lZGl0IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLmNscy1pb24tY29sIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4uY2xzLWlvbi1yb3cge1xuICBoZWlnaHQ6IDQ1cHg7XG59XG5cbi50ZXh0LWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG59XG5cbi5kaXYtaW5mbyB7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5kaXYtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5kaXYtaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbn1cblxuLmNscy1pb24tbGFiZWwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpdi1zcGxpdC1wYW5lbCB7XG4gIGhlaWdodDogMC41cHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4uY29sb3ItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBsaW5lLWhlaWdodDogMjFweDtcbn1cblxuLmNvbG9yLXRleHQtc2VsZWN0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5kaXYtZm9vdGVyLWZsZXgge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaXYtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXQzNCB7XG4gIG1hcmdpbi10b3A6IDM0cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmRpdi0xIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG59XG5cbi50ZXh0LWNoYW5nZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE0cHg7XG4gIGNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udGV4dC1jb250YWN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMTNweDtcbn1cblxuLmRpdi0yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZGl2LTMge1xuICB3aWR0aDogODQlO1xufVxuXG4uZGl2LWNoYW5nZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmRpdi1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBRkFGQTtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xuICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xufVxuXG4udGV4dC1jb250ZW50IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmRpdi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLm10NSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLnRleHQteWNrIHtcbiAgY29sb3I6ICMyNmJlZDY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4xNHB4O1xufVxuXG4uZGl2LXljayB7XG4gIHBhZGRpbmc6IDlweCAwcHg7XG59XG5cbi5jbHMtaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cblxuOjpuZy1kZWVwIC5jc3NkaXN0cmljdCAuYWN0aW9uLXNoZWV0LWdyb3VwLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zIHtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtaW9zLWguc2MtaW9uLWFjdGlvbi1zaGVldC1pb3Mtcy5pb3MuY3NzZGlzdHJpY3Qge1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDUwcHgpO1xuICAtLWhlaWdodDogOTAlO1xufVxuOjpuZy1kZWVwIC5zYy1pb24tYWN0aW9uLXNoZWV0LWlvcy1oIC5jc3NkaXN0cmljdCB7XG4gIG1hcmdpbi10b3A6IGNhbGMoZW52KHNhZmUtYXJlYS1pbnNldC10b3ApICsgNTBweCk7XG4gIC0taGVpZ2h0OiA5MCU7XG59XG46Om5nLWRlZXAgLnNjLWlvbi1hY3Rpb24tc2hlZXQtbWQtaCAuY3NzZGlzdHJpY3Qge1xuICBtYXJnaW4tdG9wOiBjYWxjKGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSArIDUwcHgpO1xuICAtLWhlaWdodDogOTAlO1xufVxuXG4ubXQxNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi50ZXh0LXRpdGxlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogI2JkYmRiZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnRleHQtc2VsZWN0IHtcbiAgY29sb3I6ICMyNmJlZDY7XG59XG5cbi5jaGtib3gge1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuXG4uaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG59XG5cbi5tdDI1IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLm10Mjkge1xuICBtYXJnaW4tdG9wOiAyOXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tdDE1cHgge1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cblxuLnRleHQtbG9naW4ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuXG4udGV4dC1ub3RlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS42NztcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjM0cHg7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4uZGl2LWF1dG8ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGl2LWNvbnRlbnQxIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmlvbi1jaGVja2JveCB7XG4gIHdpZHRoOiAxNnB4O1xuICBoZWlnaHQ6IDE2cHg7XG4gIG1hcmdpbjogLTJweDtcbn0iXX0= */"

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
                cssClass: 'cssdistrict',
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
                    this.texttimeFood = "11h - 12h";
                }
                if (timeShip.dinner) {
                    this.texttimeDinner = timeShip.dinner;
                }
                else {
                    this.texttimeDinner = "16h00 - 16h30";
                }
            }
            else {
                this.texttimeFood = "11h - 12h";
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