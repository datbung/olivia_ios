(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomadddetails-ean-roomadddetails-ean-module"],{

/***/ "./src/app/roomadddetails-ean/roomadddetails-ean.html":
/*!************************************************************!*\
  !*** ./src/app/roomadddetails-ean/roomadddetails-ean.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomadddetailsEanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thông tin\n              khách</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div *ngIf=\"ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/step_2.svg\">\n  </div>\n  <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img src=\"./assets/step/fc_step_2.svg\">\n  </div>\n\n  <div *ngIf=\"roomnumber==1\">\n    <div >\n      <ion-label class=\"text\">\n        Khách nhận phòng\n      </ion-label>\n    </div>\n    <div style=\"margin-left: -5px\">\n      <ion-row>\n          <ion-col size=\"12\">\n              <ion-item style=\"--padding-start: 5px\">\n                  <ion-label  class=\"cls-label\" position=\"floating\">Họ Tên</ion-label>\n                  <ion-input class=\"label-input\" [(ngModel)]=\"hoten\" type=\"text\" (ionInput)=\"inputFocus(null, $event)\" (ionBlur)=\"inputLostFocus(null)\"  (ionFocus)=\"inputOnFocus(null, 9)\" required></ion-input>\n              </ion-item>\n          </ion-col>\n        \n        <!-- <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"floating\">Họ Tên</ion-label>\n            <ion-input [(ngModel)]=\"ho\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Tên</ion-label>\n            <ion-input [(ngModel)]=\"ten\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 5px\">\n            <ion-label  class=\"cls-label\" position=\"floating\">Điện thoại</ion-label>\n            <ion-input  class=\"label-input\" [(ngModel)]=\"phone\"  maxlength=10 type=\"tel\"  required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!validemail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label  class=\"cls-label\" position=\"floating\">Email</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"email\"  required></ion-input>\n    \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"arrbed.length>1\">\n        <ion-list style=\"margin-left: 5px\">\n          <label  style=\"color: #828282;font-size: 12px\">Loại giường</label>\n          <ion-radio-group>\n            <ion-item class=\"ion-item\" style=\"margin-left: -5px\" (ionSelect)=\"itemrd(item.text,0)\" *ngFor=\"let item of arrbed; let itemindex = index\">\n              <ion-radio color=\"secondary\" value={{item.text.description}} style=\"width: 12px;height: 12px\"\n                checked=\"{{item.ischeck}}\"></ion-radio>\n              <label class=\"rd-text\" style=\"font-size: 14px\">{{item.text.description}}</label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n       \n\n      </ion-row>\n      <!-- <ion-row *ngIf=\"textbed\" style=\"margin-top: 10px;margin-left: 5px\">\n        <label class=\"rd-text\" style=\"color: #828282;font-size: 14px\">Loại giường: </label>\n        <label class=\"rd-text\" style=\"font-weight: bold\">{{textbed}}</label>\n      </ion-row> -->\n    </div>\n    <div class=\"div-title-other-request\">\n      <ion-label class=\"text\">\n        Thông tin yêu cầu khác\n      </ion-label>\n    </div>\n    <div >\n      <!-- <textarea style=\"margin-top: 5px\" [(ngModel)]=\"note\" style=\"width: 100%;margin-top: 15px;height: 40px\"></textarea> -->\n      <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n              <ion-label class=\"cls-label\" position=\"floating\">Yêu cầu khác</ion-label>\n              <ion-input class=\"label-input\"  [(ngModel)]=\"note\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n  <div style=\"margin-top: 10px\" *ngIf=\"roomnumber>1\">\n\n    <div *ngFor=\"let m of arr;let i=index\">\n      <div  >\n        <ion-label class=\"text\">\n          {{m.text}}\n        </ion-label>\n      </div>\n      <ion-row style=\"margin-left: -5px\">\n        <!-- <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Họ</ion-label>\n            <ion-input [(ngModel)]=\"m.lastname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Tên</ion-label>\n            <ion-input [(ngModel)]=\"m.fristname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col> -->\n        <ion-col size=\"12\">\n            <ion-item style=\"--padding-start: 5px\">\n                <ion-label class=\"cls-label\" position=\"floating\">Họ Tên</ion-label>\n                <ion-input class=\"label-input\" [(ngModel)]=\"m.hoten\" type=\"text\" (ionInput)=\"inputFocus(m, $event)\" (ionBlur)=\"inputLostFocus(m)\"  (ionFocus)=\"inputOnFocus(m, 9)\" required></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"i==0\" style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 5px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Điện thoại</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"m.phone\" maxlength=10 type=\"tel\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!validemail && i == 0\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Email</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"email\" required></ion-input>\n    \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"m.arrbed.length>1\">\n          <ion-list style=\"    margin-bottom: 20px;\">\n          <label  class=\"cls-label\">Loại giường</label>\n          <ion-radio-group>\n              <ion-item class=\"ion-item\" style=\"margin-left: -5px\" (ionSelect)=\"itemrd(item.text,0)\" *ngFor=\"let item of m.arrbed; let itemindex = index\">\n                <ion-radio value={{item.text.description}} checked=\"{{item.ischeck}}\" color=\"secondary\" class=\"rd-departure\" style=\"width: 12px;height: 12px\"\n                  (ionSelect)=\"itemrd(item.text,i)\"></ion-radio>\n                <label class=\"rd-text\" style=\"font-size: 14px\" >{{item.text.description}}</label>\n              </ion-item >\n            </ion-radio-group>\n        </ion-list>\n       \n\n      </ion-row>\n      <!-- <ion-row *ngIf=\"textbed\" style=\"margin-bottom: 20px\">\n        <label  style=\"color: #828282;font-size: 12px\" class=\"rd-text\">Loại giường: </label>\n        <label class=\"rd-text\" style=\"font-weight: bold;font-size: 12px\">{{textbed}}</label>\n      </ion-row> -->\n    </div>\n    <div style=\"margin-top: 32px\">\n      <ion-label class=\"text\">\n        Yêu cầu khác\n      </ion-label>\n        <ion-row>\n            <ion-col size=\"12\">\n              <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n                <ion-label class=\"cls-label\" position=\"floating\">Thông tin yêu cầu khác</ion-label>\n                <ion-input class=\"label-input\" [(ngModel)]=\"note\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n    </div>\n  </div>\n  <ion-row *ngIf=\"!Roomif.ExcludeVAT\" style=\"margin-top: 10px\">\n    <ion-checkbox (ionChange)=\"edit(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n    <ion-label style=\"margin: 4px 10px\">Xuất hóa đơn điện tử</ion-label>\n  </ion-row>\n  <div *ngIf=\"ischeck && !Roomif.ExcludeVAT\">\n      <ion-row style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Tên công ty</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Địa chỉ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Mã số thuế</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n  \n      </ion-row>\n      <div style=\"margin-left: 5px;margin-top: 10px\">\n        <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n      </div>\n      <div *ngIf=\"!ishideNameMail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Họ tên</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"floating\">Email nhận HĐ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n  <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                  \n    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n        <div class=\"icon-pax\">\n                <img src=\"./assets/ic_flight/icon-pax.svg\">\n        </div>\n        <div class=\"text-pax-hint\">\n            {{itempax.fullName}}\n        </div>\n    </div>\n    \n  </div>\n  \n  <div *ngIf=\" (priceshow>0||ischeckbtn==true)\" style=\"background-color: #ffffff; text-align: center\">\n    <div *ngIf=\"showInstallmentButton else hideInstallmentButton\" class=\"div-button-flex\">\n      <button  (click)=\"next(1)\" ion-button round outline class=\"button button-installment\">Trả góp <br><p class=\"text-sub\">chỉ từ {{installmentPriceStr}}</p></button>\n      <button (click)=\"next(0)\" ion-button round outline class=\"button button-payment\">Thanh toán ngay</button>\n    </div>\n    <ng-template #hideInstallmentButton>\n      <button (click)=\"next(0)\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n    </ng-template>\n  </div>\n  <div *ngIf=\"priceshow==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next1()\" ion-button round outline class=\"button button2\">Hoàn thành đặt phòng</button>\n  </div>\n</ion-footer>"

/***/ }),

/***/ "./src/app/roomadddetails-ean/roomadddetails-ean.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roomadddetails-ean/roomadddetails-ean.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoomadddetailsEanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomadddetailsEanPageModule", function() { return RoomadddetailsEanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roomadddetails_ean__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roomadddetails-ean */ "./src/app/roomadddetails-ean/roomadddetails-ean.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let RoomadddetailsEanPageModule = class RoomadddetailsEanPageModule {
};
RoomadddetailsEanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _roomadddetails_ean__WEBPACK_IMPORTED_MODULE_5__["RoomadddetailsEanPage"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                {
                    path: '',
                    component: _roomadddetails_ean__WEBPACK_IMPORTED_MODULE_5__["RoomadddetailsEanPage"]
                }
            ])
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], RoomadddetailsEanPageModule);



/***/ }),

/***/ "./src/app/roomadddetails-ean/roomadddetails-ean.scss":
/*!************************************************************!*\
  !*** ./src/app/roomadddetails-ean/roomadddetails-ean.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #ff9500;\n  border-color: #ff9500;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n::ng-deep .radiocss {\n  border-radius: 50%;\n  border: solid 1px #bdbdbd;\n  box-sizing: content-box;\n  width: 12px;\n  height: 12px;\n}\n\n::ng-deep .ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n::ng-deep .rd-text {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.cls-label {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-name {\n  font-size: 12px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 14px;\n  font-weight: 300;\n  color: #222222;\n}\n\n.label-input-order {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 12px;\n}\n\n.label-input {\n  font-size: 13px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n  margin: 0 8px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n  padding: 0;\n  text-align: center !important;\n}\n\n.button-payment {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kZXYtaXZpdnUvRG9jdW1lbnRzL0RldmVsb3Avb2xpdmlhX2lvcy9zcmMvYXBwL3Jvb21hZGRkZXRhaWxzLWVhbi9yb29tYWRkZGV0YWlscy1lYW4uc2NzcyIsInNyYy9hcHAvcm9vbWFkZGRldGFpbHMtZWFuL3Jvb21hZGRkZXRhaWxzLWVhbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNDUjs7QURDSTtFQUNJLFNBQUE7RUFDQSxvQkFBQTtBQ0VSOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNFUjs7QURDSTtFQUNJLFNBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNFUjs7QURBSTtFQUNJLHFCQUFBO0FDR1I7O0FEREk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FERk07RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0lWOztBRERRO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHVjs7QUREUTtFQUVGLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0VOOztBREFRO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRVo7O0FEQ007RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1I7O0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQ1I7O0FEQ0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDRU47O0FEQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDR047O0FEQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNHTjs7QURESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0lOOztBREZJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDS047O0FESEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNNTjs7QURKSTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ09OOztBRExJO0VBRUUsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO0FDT047O0FETEk7RUFFSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0FDT1I7O0FETEk7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtBQ1FOIiwiZmlsZSI6InNyYy9hcHAvcm9vbWFkZGRldGFpbHMtZWFuL3Jvb21hZGRkZXRhaWxzLWVhbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC50ZXh0e1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgfVxuICAgIC5idXR0b24yXG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgIH0gXG4gICAgLmxpc3QtZGVwYXJ0dXJle1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIH1cblxuICAgIC5yZC1kZXBhcnR1cmUgLnJhZGlvLWljb257XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgfVxuICAgXG4gICAgLnJhZGlvLW1kIC5yYWRpby1pbm5lcntcbiAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICB0b3A6IDFweDtcbiAgICAgICAgd2lkdGg6IDZweDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgfVxuICAgIC5yYWRpby1tZCAucmFkaW8tY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzI2YmVkNjtcbiAgICB9XG4gICAgLnRvb2xiYXItdGl0bGUtbWQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNzBweDtcbiAgICAgIH0gIFxuICAgICAgLmJ1dHRvbjRcbiAgICAgIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgICAgIGNvbG9yOiAjZmY5NTAwO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICAgIDo6bmctZGVlcHtcbiAgICAgICAgLnJhZGlvY3NzXG4gICAgICAgIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiBzb2xpZCAgMXB4ICNiZGJkYmQ7XG4gICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5pb24taXRlbVxuICAgIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgICAgIC0tbWluLWhlaWdodDogMHB4O1xuICAgIH1cbiAgICAgICAgLnJkLXRleHR7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuY2xzLWxhYmVsXG4gICAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICB9XG5cbiAgICAgIC5sYWJlbC1uYW1le1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgIH1cbiAgICAubGFiZWwtaW5wdXR7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgfVxuICAgIC5sYWJlbC1pbnB1dC1vcmRlcntcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG5cbiAgICAuZGl2LXRpdGxlLW90aGVyLXJlcXVlc3R7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmRpdi10aXRsZS1leHBvcnQtb3JkZXJ7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgY29sb3I6ICMyMjIyMjI7XG4gICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICB9XG4gICAgLmlvbi1jaGVja2JveHtcbiAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgbWFyZ2luOiAtMnB4O1xuICAgIH1cbiAgICAuZGl2LWJ1dHRvbi1mbGV4e1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luOiAwIDhweDtcbiAgICB9XG4gICAgLmJ1dHRvbi1pbnN0YWxsbWVudFxuICAgIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgIGJvcmRlcjogc29saWQgMXB4ICNmZjk1MDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH0gXG4gICAgLmJ1dHRvbi1wYXltZW50XG4gICAge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgfSBcbiAgICAudGV4dC1zdWJ7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgfSIsIi50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJ1dHRvbjIge1xuICBiYWNrZ3JvdW5kOiAjZmY5NTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjZmY5NTAwO1xuICB3aWR0aDogOTAlO1xufVxuXG4ubGlzdC1kZXBhcnR1cmUge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xufVxuXG4ucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29uIHtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1pbm5lciB7XG4gIGxlZnQ6IDFweDtcbiAgdG9wOiAxcHg7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xufVxuXG4ucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xuICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG59XG5cbi50b29sYmFyLXRpdGxlLW1kIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG59XG5cbi5idXR0b240IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICNmZjk1MDA7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG46Om5nLWRlZXAgLnJhZGlvY3NzIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDFweCAjYmRiZGJkO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbn1cbjo6bmctZGVlcCAuaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcbiAgLS1taW4taGVpZ2h0OiAwcHg7XG59XG46Om5nLWRlZXAgLnJkLXRleHQge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNscy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5sYWJlbC1uYW1lIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmxhYmVsLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzIyMjIyMjtcbn1cblxuLmxhYmVsLWlucHV0LW9yZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogIzgyODI4Mjtcbn1cblxuLmRpdi10aXRsZS1vdGhlci1yZXF1ZXN0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbi5kaXYtdGl0bGUtZXhwb3J0LW9yZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIyMjIyMjtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5pb24tY2hlY2tib3gge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IC0ycHg7XG59XG5cbi5kaXYtYnV0dG9uLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLmJ1dHRvbi1pbnN0YWxsbWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1wYXltZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xufVxuXG4udGV4dC1zdWIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4zNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/roomadddetails-ean/roomadddetails-ean.ts":
/*!**********************************************************!*\
  !*** ./src/app/roomadddetails-ean/roomadddetails-ean.ts ***!
  \**********************************************************/
/*! exports provided: RoomadddetailsEanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomadddetailsEanPage", function() { return RoomadddetailsEanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../providers/book-service */ "./src/app/providers/book-service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _providers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../providers/constants */ "./src/app/providers/constants.ts");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! requestretry */ "./node_modules/requestretry/index.js");
/* harmony import */ var requestretry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(requestretry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../providers/globalfunction */ "./src/app/providers/globalfunction.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../confirmemail/confirmemail.page */ "./src/app/confirmemail/confirmemail.page.ts");










let RoomadddetailsEanPage = class RoomadddetailsEanPage {
    constructor(platform, navCtrl, Roomif, toastCtrl, booking, bookcombo, zone, storage, loadingCtrl, gf, alertCtrl, modalCtrl, activityService) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.Roomif = Roomif;
        this.toastCtrl = toastCtrl;
        this.booking = booking;
        this.bookcombo = bookcombo;
        this.zone = zone;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.gf = gf;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.activityService = activityService;
        this.phone = "";
        this.arr = [];
        this.arr1 = [];
        this.arrpush = [];
        this.ishide = false;
        this.arrbed = [];
        this.validemail = true;
        this.ischeck = false;
        this.checkchangeemail = false;
        this.ishideNameMail = true;
        this.showInstallmentButton = false;
        this.inputtext = false;
        this.listPaxSuggestByMemberId = [];
        this.listpaxhint = [];
        this.hidepaxhint = false;
        this.ischeckpayment = Roomif.ischeckpayment;
        this.roomnumber = Roomif.roomnumber;
        this.note = Roomif.notetotal;
        this.room = this.Roomif.arrroom;
        this.jsonroom = Roomif.jsonroom;
        this.ischeckpoint = this.Roomif.ischeckpoint;
        this.storage.get('email').then(email => {
            if (email) {
                this._email = email;
                var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                if (checkappleemail) {
                    this.validemail = false;
                }
            }
            else {
                this.validemail = false;
            }
        });
        if (this.ischeckpoint == true || this.Roomif.promocode) {
            if (this.Roomif.priceshow == "0") {
                this.priceshow = this.Roomif.priceshow;
            }
            else {
                this.priceshow = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
            }
        }
        else {
            this.ischeckbtn = true;
        }
        if (this.Roomif.arrrbed && this.Roomif.arrrbed.length > 1) {
            this.BedType = this.Roomif.arrrbed[0];
        }
        else if (this.Roomif.arrrbed && this.Roomif.arrrbed.length == 1) {
            this.BedType = this.Roomif.arrrbed[0];
            this.textbed = this.Roomif.arrrbed[0];
            this.textbed = this.textbed.description;
        }
        this.storage.get('infocus').then(infocus => {
            this.arrbed = [];
            this.bed = this.Roomif.arrrbed;
            if (this.roomnumber > 1) {
                var item1;
                if (infocus) {
                    for (let i = 0; i < this.roomnumber; i++) {
                        let number = i + 1;
                        if (i == 0) {
                            if (infocus.ho && infocus.ten) {
                                item1 = { text: "Khách nhận phòng " + number + "", hoten: infocus.ho + ' ' + infocus.ten, arrbed: this.arrbed, phone: infocus.phone };
                            }
                            else {
                                if (infocus.ho) {
                                    item1 = { text: "Khách nhận phòng " + number + "", hoten: infocus.ho, arrbed: this.arrbed, phone: infocus.phone };
                                }
                                else if (infocus.ten) {
                                    item1 = { text: "Khách nhận phòng " + number + "", hoten: infocus.ten, arrbed: this.arrbed, phone: infocus.phone };
                                }
                                else {
                                    item1 = { text: "Khách nhận phòng " + number + "", hoten: "", arrbed: this.arrbed, phone: infocus.phone ? infocus.phone : "" };
                                }
                            }
                        }
                        else {
                            item1 = { text: "Khách nhận phòng " + number + "", hoten: "", arrbed: this.arrbed, phone: "" };
                        }
                        this.arr.push(item1);
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[i] = this.bed[0];
                        }
                    }
                }
                else {
                    for (let i = 0; i < this.roomnumber; i++) {
                        let number = i + 1;
                        item1 = { text: "Khách nhận phòng " + number + "", fristname: "", lastname: "", arrbed: this.arrbed, phone: "" };
                        this.arr.push(item1);
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[i] = this.bed[0];
                        }
                    }
                }
                if (this.bed) {
                    if (this.bed.length > 1) {
                        for (let i = 0; i < this.bed.length; i++) {
                            var item;
                            if (i == 0) {
                                item = { text: this.bed[i], ischeck: true };
                                this.bedchuoi = this.bed[i];
                            }
                            else {
                                item = { text: this.bed[i], ischeck: false };
                            }
                            this.arrbed.push(item);
                        }
                    }
                }
            }
            else {
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
                    this.phone = infocus.phone;
                }
                this.room = this.Roomif.arrroom;
                if (this.Roomif.arrrbed && this.Roomif.arrrbed.length > 1) {
                    this.bed = this.Roomif.arrrbed;
                    for (let i = 0; i < this.bed.length; i++) {
                        var item;
                        if (i == 0) {
                            item = { text: this.bed[i], ischeck: true };
                            this.bedchuoi = this.bed[i];
                        }
                        else {
                            item = { text: this.bed[i], ischeck: false };
                        }
                        this.arrbed.push(item);
                    }
                    if (this.bed && this.bed.length > 0) {
                        this.arrpush[0] = this.bed[0];
                    }
                }
                else {
                    this.bed = this.Roomif.arrrbed;
                    if (this.bed) {
                        if (this.bed.length > 1) {
                            for (let i = 0; i < this.bed.length; i++) {
                                var item;
                                if (i == 0) {
                                    item = { text: this.bed[i], ischeck: true };
                                    this.bedchuoi = this.bed[i];
                                }
                                else {
                                    item = { text: this.bed[i], ischeck: false };
                                }
                                this.arrbed.push(item);
                            }
                        }
                        if (this.bed && this.bed.length > 0) {
                            this.arrpush[0] = this.bed[0];
                        }
                    }
                }
            }
        });
        var priceBooking = "";
        if (this.Roomif.priceshow) {
            priceBooking = this.Roomif.priceshow.replace(/\./g, '').replace(/\,/g, '');
        }
        else if (this.booking.cost) {
            priceBooking = this.booking.cost.replace(/\./g, '').replace(/\,/g, '');
        }
        this.jsonroom.RoomClasses = this.room;
        let mealtype = this.jsonroom.RoomClasses[0].MealTypeRates[this.booking.indexmealtype];
        this.showInstallmentButton = (priceBooking * 1 >= 3000000 && this.Roomif.payment == 'AL' && (mealtype && mealtype.Supplier == "VINPEARL" || mealtype.Supplier == "SMD")) ? true : false;
        this.getInstallment(priceBooking * 1);
        this.zone.run(() => {
            let priceinstallment = Math.round(priceBooking * 1 / 12 * 1.05);
            this.installmentPriceStr = priceinstallment.toLocaleString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.").replace(/\,/g, '.') + "đ/tháng";
        });
        this.GetUserInfo();
        this.gf.googleAnalytion('roomadddetails-ean', 'add_payment_info', '');
        this.storage.get('jti').then(jti => {
            if (jti) {
                this.jti = jti;
                this.gf.RequestApi('GET', _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetListNameHotel?memberid=' + jti, {}, {}, 'flightadddetails', 'GetListName').then((data) => {
                    if (data && data.length > 0) {
                        this.listPaxSuggestByMemberId = [...data];
                    }
                });
            }
        });
    }
    ;
    getInstallment(price) {
        var se = this;
        var options = {
            method: 'GET',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/api/toolsapi/getInstallmentInfo',
            qs: {
                amount: price.toString()
            },
            headers: {}
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            var rs = JSON.parse(body);
            se.activityService.objBankInStallment = rs;
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
    }
    GetUserInfo() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            this.auth_token = auth_token;
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Dashboard/GetUserInfo',
                    timeout: 10000, maxAttempts: 5, retryDelay: 2000,
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    }
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (error) {
                        error.page = "roomdetailreview";
                        error.func = "GetUserInfo";
                        error.param = JSON.stringify(options);
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                    }
                    else {
                        if (body) {
                            var data = JSON.parse(body);
                            se.zone.run(() => {
                                se.ishide = false;
                                se.ischeck = false;
                                var corpInfomations = data.corpInfomations[0];
                                if (corpInfomations) {
                                    se.companyname = corpInfomations.legalName;
                                    se.address = corpInfomations.address;
                                    se.tax = corpInfomations.taxCode;
                                    se.ishide = true;
                                    se.ischeck = true;
                                }
                                else {
                                    se.storage.get('order').then(order => {
                                        if (order) {
                                            se.companyname = order.companyname;
                                            se.address = order.address;
                                            se.tax = order.tax;
                                            se.addressorder = order.addressorder;
                                            se.hotenhddt = order.hotenhddt;
                                            se.emailhddt = order.emailhddt;
                                            se.ishideNameMail = order.ishideNameMail;
                                            se.ishide = true;
                                            se.ischeck = true;
                                        }
                                    });
                                }
                            });
                        }
                        else {
                            se.storage.get('order').then(order => {
                                if (order) {
                                    se.companyname = order.companyname;
                                    se.address = order.address;
                                    se.tax = order.tax;
                                    se.addressorder = order.addressorder;
                                    se.hotenhddt = order.hotenhddt;
                                    se.emailhddt = order.emailhddt;
                                    se.ishideNameMail = order.ishideNameMail;
                                    se.ishide = true;
                                    se.ischeck = true;
                                }
                                else {
                                    se.ishide = false;
                                    se.ischeck = false;
                                }
                            });
                        }
                    }
                });
            }
        });
    }
    hasWhiteSpace(s) {
        return s.indexOf(' ') >= 0;
    }
    next(value) {
        this.checkchangeemail = false;
        this.Roomif.notetotal = "";
        if (this.roomnumber == 1) {
            if (this.hoten) {
                this.hoten = this.hoten.trim();
                var checktext = this.hasWhiteSpace(this.hoten);
                if (!checktext) {
                    this.presentToastName();
                    return;
                }
            }
            else {
                this.presentToastName();
                return;
            }
            if (this.ischeck) {
                if (this.hoten) {
                    this.hoten = this.hoten.trim();
                    var checktext = this.hasWhiteSpace(this.hoten);
                    if (!checktext) {
                        this.presentToastName();
                        return;
                    }
                    if (this.phonenumber(this.phone)) {
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        }
                        else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(0, value);
                            }
                        }
                        if (this.companyname && this.address && this.tax) {
                            this.companyname = this.companyname.trim();
                            this.address = this.address.trim();
                            this.tax = this.tax.trim();
                        }
                        else {
                            this.presentToastOrder();
                            return;
                        }
                        if (this.companyname && this.address && this.tax) {
                            this.Roomif.hoten = this.hoten;
                            this.Roomif.notetotal = this.note;
                            this.Roomif.phone = this.phone;
                            var texthoten = this.hoten.split(' ');
                            var item1;
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    }
                                    else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (this.hoten.length > 1) {
                                item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (this.hoten.length == 1) {
                                item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            this.arr1 = [];
                            this.arr1.push(item1);
                            this.Roomif.arrcustomer = this.arr1;
                            this.Roomif.companyname = this.companyname;
                            this.Roomif.address = this.address;
                            this.Roomif.tax = this.tax;
                            this.Roomif.notetotal = this.note;
                            this.Roomif.addressorder = this._email;
                            this.Roomif.nameOrder = this.hoten;
                            if (!this.ishideNameMail) {
                                if (this.emailhddt && this.hotenhddt) {
                                    if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                                        this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                        return;
                                    }
                                    else {
                                        this.Roomif.addressorder = this.emailhddt;
                                        this.Roomif.nameOrder = this.hotenhddt;
                                    }
                                }
                                else {
                                    this.presentToastOrder();
                                    return;
                                }
                            }
                            var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                            this.storage.set("order", order1);
                            this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                            this.storage.set("email", this._email);
                            this.booking.CEmail = this._email;
                            if (!this.checkchangeemail) {
                                if (this.Roomif.payment == 'true') {
                                    this.paymentnotAL();
                                }
                                else {
                                    if (value == 0) {
                                        this.navCtrl.navigateForward("roompaymentselect-ean");
                                    }
                                    else {
                                        this.installment();
                                    }
                                }
                            }
                        }
                        else {
                            this.presentToastOrder();
                        }
                    }
                    else {
                        this.presentToastPhone();
                    }
                }
                else {
                    this.presentToastName();
                }
            }
            else {
                if (this.hoten) {
                    this.hoten = this.hoten.trim();
                    var checktext = this.hasWhiteSpace(this.hoten);
                    if (!checktext) {
                        this.presentToastName();
                        return;
                    }
                    if (this.phonenumber(this.phone)) {
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        }
                        else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(0, value);
                            }
                        }
                        this.booking.CEmail = this._email;
                        this.Roomif.hoten = this.hoten;
                        this.Roomif.phone = this.phone;
                        this.Roomif.notetotal = this.note;
                        var texthoten = this.hoten.split(' ');
                        if (texthoten.length > 2) {
                            let name = '';
                            for (let j = 1; j < texthoten.length; j++) {
                                if (j == 1) {
                                    name += texthoten[j];
                                }
                                else {
                                    name += ' ' + texthoten[j];
                                }
                            }
                            item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        else if (texthoten.length > 1) {
                            item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        else if (texthoten.length == 1) {
                            item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        this.arr1 = [];
                        this.arr1.push(item1);
                        this.Roomif.arrcustomer = this.arr1;
                        this.storage.set("email", this._email);
                        this.booking.CEmail = this._email;
                        if (!this.checkchangeemail) {
                            if (this.Roomif.payment == 'true') {
                                this.paymentnotAL();
                            }
                            else {
                                if (value == 0) {
                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                }
                                else {
                                    this.installment();
                                }
                            }
                        }
                    }
                    else {
                        this.presentToastPhone();
                    }
                }
                else {
                    this.presentToastName();
                }
            }
        }
        else {
            if (this.ischeck) {
                if (this.companyname && this.address && this.tax) {
                    this.companyname = this.companyname.trim();
                    this.address = this.address.trim();
                    this.tax = this.tax.trim();
                }
                else {
                    this.presentToastOrder();
                    return;
                }
                if (this.companyname && this.address && this.tax) {
                    this.Roomif.companyname = this.companyname;
                    this.Roomif.address = this.address;
                    this.Roomif.tax = this.tax;
                    this.Roomif.notetotal = this.note;
                    this.Roomif.addressorder = this.addressorder;
                    this.Roomif.addressorder = this._email;
                    this.Roomif.nameOrder = this.hoten;
                    if (!this.ishideNameMail) {
                        if (this.emailhddt && this.hotenhddt) {
                            if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                                this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                return;
                            }
                            else {
                                this.Roomif.addressorder = this.emailhddt;
                                this.Roomif.nameOrder = this.hotenhddt;
                            }
                        }
                        else {
                            this.presentToastOrder();
                            return;
                        }
                    }
                    var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                    this.storage.set("order", order1);
                    this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                    this.pushdata1(value);
                }
                else {
                    this.presentToastOrder();
                }
            }
            else {
                this.pushdata1(value);
            }
        }
    }
    pushdata1(value) {
        var item1;
        var co = 0;
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i].hoten = this.arr[i].hoten.trim();
            if (i == 0) {
                if (this.arr[i].hoten) {
                    var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                    if (!checktext) {
                        co = 1;
                        break;
                    }
                }
                else {
                    co = 1;
                    break;
                }
                if (!this.arr[i].phone) {
                    co = 2;
                    break;
                }
            }
            else {
                if (this.arr[i].hoten) {
                    var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                    if (!checktext) {
                        co = 1;
                        break;
                    }
                }
                else {
                    co = 1;
                    break;
                }
            }
        }
        if (co == 0) {
            if (!this.validateEmail(this._email) || !this._email) {
                this.presentToastEmail();
                this.validemail = false;
                return;
            }
            else if (this._email) {
                var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                if (checkappleemail) {
                    this.checkchangeemail = true;
                    this.showConfirmEmail(0, value);
                }
            }
            this.arr1 = [];
            if (this.arrbed.length > 1) {
                for (let i = 0; i < this.arr.length; i++) {
                    var texthoten = this.arr[i].hoten.split(' ');
                    if (texthoten.length > 2) {
                        let name = '';
                        for (let j = 1; j < texthoten.length; j++) {
                            if (j == 1) {
                                name += texthoten[j];
                            }
                            else {
                                name += ' ' + texthoten[j];
                            }
                        }
                        item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                    }
                    else if (texthoten.length > 1) {
                        item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                    }
                    else if (texthoten.length == 1) {
                        item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                    }
                    this.arr1.push(item1);
                }
            }
            else {
                for (let i = 0; i < this.arr.length; i++) {
                    var texthoten = this.arr[i].hoten.split(' ');
                    if (texthoten.length > 2) {
                        let name = '';
                        for (let j = 1; j < texthoten.length; j++) {
                            if (j == 1) {
                                name += texthoten[j];
                            }
                            else {
                                name += ' ' + texthoten[j];
                            }
                        }
                        item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                    }
                    else if (texthoten.length > 1) {
                        item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                    }
                    else if (texthoten.length == 1) {
                        item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                    }
                    this.arr1.push(item1);
                }
            }
            this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
            this.Roomif.phone = this.arr1[0].Phone;
            this.Roomif.arrcustomer = this.arr1;
            this.Roomif.notetotal = this.note;
            this.storage.set("email", this._email);
            this.booking.CEmail = this._email;
            if (!this.checkchangeemail) {
                if (this.Roomif.payment == 'true') {
                    this.paymentnotAL();
                }
                else {
                    if (value == 0) {
                        this.navCtrl.navigateForward("roompaymentselect-ean");
                    }
                    else {
                        this.installment();
                    }
                }
            }
        }
        else {
            if (co == 1) {
                this.presentToastName();
            }
            else if (co == 2) {
                this.presentToastPhone();
            }
        }
    }
    next1() {
        this.Roomif.notetotal = "";
        if (this.roomnumber == 1) {
            if (this.hoten) {
                this.hoten = this.hoten.trim();
                var checktext = this.hasWhiteSpace(this.hoten);
                if (!checktext) {
                    this.presentToastName();
                    return;
                }
            }
            else {
                this.presentToastName();
                return;
            }
            if (this.ischeck) {
                if (this.hoten) {
                    if (this.phonenumber(this.phone)) {
                        if (this.companyname && this.address && this.tax) {
                            this.companyname = this.companyname.trim();
                            this.address = this.address.trim();
                            this.tax = this.tax.trim();
                        }
                        else {
                            this.presentToastOrder();
                            return;
                        }
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        }
                        else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }
                        if (this.companyname && this.address && this.tax) {
                            this.Roomif.hoten = this.hoten;
                            this.Roomif.phone = this.phone;
                            var texthoten = this.hoten.split(' ');
                            var item1;
                            if (this.hoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    }
                                    else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (texthoten.length > 1) {
                                item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (texthoten.length == 1) {
                                item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            this.arr1 = [];
                            this.arr1.push(item1);
                            this.Roomif.arrcustomer = this.arr1;
                            this.Roomif.companyname = this.companyname;
                            this.Roomif.address = this.address;
                            this.Roomif.tax = this.tax;
                            this.Roomif.notetotal = this.note;
                            this.Roomif.addressorder = this._email;
                            this.Roomif.nameOrder = this.hoten;
                            if (!this.ishideNameMail) {
                                if (this.emailhddt && this.hotenhddt) {
                                    if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                                        this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                        return;
                                    }
                                    else {
                                        this.Roomif.addressorder = this.emailhddt;
                                        this.Roomif.nameOrder = this.hotenhddt;
                                    }
                                }
                                else {
                                    this.presentToastOrder();
                                    return;
                                }
                            }
                            var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                            this.storage.set("order", order1);
                            this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                            this.pushdata();
                        }
                        else {
                            this.presentToastOrder();
                        }
                    }
                    else {
                        this.presentToastPhone();
                    }
                }
                else {
                    this.presentToastName();
                }
            }
            else {
                if (this.hoten) {
                    if (this.phonenumber(this.phone)) {
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        }
                        else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }
                        this.Roomif.hoten = this.hoten;
                        this.Roomif.phone = this.phone;
                        var texthoten = this.hoten.split(' ');
                        var item1;
                        if (this.hoten.length > 2) {
                            let name = '';
                            for (let j = 1; j < texthoten.length; j++) {
                                if (j == 1) {
                                    name += texthoten[j];
                                }
                                else {
                                    name += ' ' + texthoten[j];
                                }
                            }
                            item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        else if (texthoten.length > 1) {
                            item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        else if (texthoten.length == 1) {
                            item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.phone, Email: this.booking.CEmail, BedType: this.BedType };
                        }
                        this.arr1 = [];
                        this.arr1.push(item1);
                        this.Roomif.arrcustomer = this.arr1;
                        this.pushdata();
                    }
                    else {
                        this.presentToastPhone();
                    }
                }
                else {
                    this.presentToastName();
                }
            }
        }
        else {
            if (this.ischeck) {
                if (this.companyname && this.address && this.tax) {
                    this.companyname = this.companyname.trim();
                    this.address = this.address.trim();
                    this.tax = this.tax.trim();
                }
                else {
                    this.presentToastOrder();
                    return;
                }
                if (this.companyname && this.address && this.tax) {
                    this.Roomif.companyname = this.companyname;
                    this.Roomif.address = this.address;
                    this.Roomif.tax = this.tax;
                    this.Roomif.notetotal = this.note;
                    this.Roomif.addressorder = this._email;
                    this.Roomif.nameOrder = this.hoten;
                    if (!this.ishideNameMail) {
                        if (this.emailhddt && this.hotenhddt) {
                            if (!this.validateEmail(this.emailhddt) || !this.gf.checkUnicodeCharactor(this.emailhddt)) {
                                this.gf.showToastWarning('email xuất hóa đơn không hợp lệ. Vui lòng kiểm tra lại');
                                return;
                            }
                            else {
                                this.Roomif.addressorder = this.emailhddt;
                                this.Roomif.nameOrder = this.hotenhddt;
                            }
                        }
                        else {
                            this.presentToastOrder();
                            return;
                        }
                    }
                    var order1 = { companyname: this.companyname, address: this.address, tax: this.tax, addressorder: this.addressorder, ishideNameMail: this.ishideNameMail, hotenhddt: this.hotenhddt, emailhddt: this.emailhddt };
                    this.storage.set("order", order1);
                    this.Roomif.order = this.companyname + "," + this.address + "," + this.tax + "," + this.addressorder;
                    var co = 0;
                    for (let i = 0; i < this.arr.length; i++) {
                        this.arr[i].hoten = this.arr[i].hoten.trim();
                        if (i == 0) {
                            if (this.arr[i].hoten) {
                                var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                                if (!checktext) {
                                    co = 1;
                                    break;
                                }
                            }
                            else {
                                co = 1;
                                break;
                            }
                            if (!this.arr[i].phone) {
                                co = 2;
                                break;
                            }
                        }
                        else {
                            if (!this.arr[i].hoten) {
                                var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                                if (!checktext) {
                                    co = 1;
                                    break;
                                }
                            }
                        }
                    }
                    if (co == 0) {
                        this.arr1 = [];
                        if (this.arrbed.length > 1) {
                            for (let i = 0; i < this.arr.length; i++) {
                                var texthoten = this.arr[i].hoten.split(' ');
                                if (texthoten.length > 2) {
                                    let name = '';
                                    for (let j = 1; j < texthoten.length; j++) {
                                        if (j == 1) {
                                            name += texthoten[j];
                                        }
                                        else {
                                            name += ' ' + texthoten[j];
                                        }
                                    }
                                    item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                                }
                                else if (texthoten.length > 1) {
                                    item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                                }
                                else if (texthoten.length == 1) {
                                    item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                                }
                                this.arr1.push(item1);
                            }
                        }
                        else {
                            for (let i = 0; i < this.arr.length; i++) {
                                var texthoten = this.arr[i].hoten.split(' ');
                                if (texthoten > 2) {
                                    let name = '';
                                    for (let j = 1; j < texthoten.length; j++) {
                                        if (j == 1) {
                                            name += texthoten[j];
                                        }
                                        else {
                                            name += ' ' + texthoten[j];
                                        }
                                    }
                                    item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                                }
                                else if (texthoten.length > 1) {
                                    item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                                }
                                else if (texthoten.length == 1) {
                                    item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                                }
                                this.arr1.push(item1);
                            }
                        }
                        this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
                        this.Roomif.phone = this.arr1[0].Phone;
                        this.Roomif.arrcustomer = this.arr1;
                        this.Roomif.notetotal = this.note;
                        if (!this.validateEmail(this._email) || !this._email) {
                            this.presentToastEmail();
                            this.validemail = false;
                            return;
                        }
                        else if (this._email) {
                            var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                            if (checkappleemail) {
                                this.checkchangeemail = true;
                                this.showConfirmEmail(1, 0);
                            }
                        }
                        this.pushdata();
                    }
                    else {
                        if (co == 1) {
                            this.presentToastName();
                        }
                        else if (co == 2) {
                            this.presentToastPhone();
                        }
                    }
                }
                else {
                    this.presentToastOrder();
                }
            }
            else {
                var co = 0;
                for (let i = 0; i < this.arr.length; i++) {
                    this.arr[i].hoten = this.arr[i].hoten.trim();
                    if (i == 0) {
                        if (this.arr[i].hoten) {
                            var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                            if (!checktext) {
                                co = 1;
                                break;
                            }
                        }
                        else {
                            co = 1;
                            break;
                        }
                        if (!this.arr[i].phone) {
                            co = 2;
                            break;
                        }
                    }
                    else {
                        if (this.arr[i].hoten) {
                            var checktext = this.hasWhiteSpace(this.arr[i].hoten);
                            if (!checktext) {
                                co = 1;
                                break;
                            }
                        }
                        else {
                            co = 1;
                            break;
                        }
                    }
                }
                if (co == 0) {
                    this.arr1 = [];
                    if (this.arrbed.length > 1) {
                        for (let i = 0; i < this.arr.length; i++) {
                            var texthoten = this.arr[i].hoten.split(' ');
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    }
                                    else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                            }
                            else if (texthoten.length > 1) {
                                item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                            }
                            else if (texthoten.length == 1) {
                                item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.arrpush[i] };
                            }
                            this.arr1.push(item1);
                        }
                    }
                    else {
                        for (let i = 0; i < this.arr.length; i++) {
                            var texthoten = this.arr[i].hoten.split(' ');
                            if (texthoten.length > 2) {
                                let name = '';
                                for (let j = 1; j < texthoten.length; j++) {
                                    if (j == 1) {
                                        name += texthoten[j];
                                    }
                                    else {
                                        name += ' ' + texthoten[j];
                                    }
                                }
                                item1 = { Title: "MR", FirstName: name, LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (texthoten.length > 1) {
                                item1 = { Title: "MR", FirstName: texthoten[1], LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            else if (texthoten.length == 1) {
                                item1 = { Title: "MR", FirstName: "", LastName: texthoten[0], Phone: this.arr[0].phone, Email: this.booking.CEmail, BedType: this.BedType };
                            }
                            this.arr1.push(item1);
                        }
                    }
                    this.Roomif.hoten = this.arr1[0].LastName + ' ' + this.arr1[0].FirstName;
                    this.Roomif.phone = this.arr1[0].Phone;
                    this.Roomif.arrcustomer = this.arr1;
                    this.Roomif.notetotal = this.note;
                    if (!this.validateEmail(this._email) || !this._email) {
                        this.presentToastEmail();
                        this.validemail = false;
                        return;
                    }
                    else if (this._email) {
                        var checkappleemail = (this._email.includes("appleid") || this._email.includes('vivumember.info'));
                        if (checkappleemail) {
                            this.checkchangeemail = true;
                            this.showConfirmEmail(1, 0);
                        }
                    }
                    this.pushdata();
                }
                else {
                    this.presentToastName();
                }
            }
        }
    }
    presentToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập họ tên",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập thông tin xuất hóa đơn",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập đầy đủ họ tên",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    presentToastPhone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Xin vui lòng nhập số điện thoại",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    pushdata() {
        if (this.checkchangeemail) {
            return;
        }
        this.presentLoading();
        var se = this;
        this.jsonroom.RoomClasses = this.room;
        this.timestamp = Date.now();
        var Invoice = 0;
        if (se.Roomif.order) {
            Invoice = 1;
        }
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                CName: se.Roomif.hoten.trim(),
                CEmail: se._email,
                CPhone: se.Roomif.phone,
                timestamp: se.timestamp,
                HotelID: se.booking.HotelId,
                paymentMethod: "51",
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
                comboid: se.bookcombo.ComboId,
                PenaltyDescription: se.Roomif.textcancel
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roomadddetails",
                    func: "next",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomadddetails";
                error.func = "next";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                if (body.error == 0) {
                    var id = body.code;
                    var total = se.Roomif.pricepoint.toString().replace(/\./g, '').replace(/\,/g, '');
                    var ischeck = '1';
                    let mealtype = se.jsonroom.RoomClasses[0].MealTypeRates[se.booking.indexmealtype];
                    let url = _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/build-link-to-pay-aio?paymentType=office&source=app&amount=' + total + '&orderCode=' + body.code + '&buyerPhone=' + se.Roomif.phone + '&memberId=' + se.jti;
                    se.gf.CreateUrl(url);
                    se.clearClonePage('page-roompaymentdoneean');
                    se.loader.dismiss();
                    se.navCtrl.navigateForward('/roompaymentdoneean/' + id + '/' + total + '/' + ischeck);
                }
                else {
                    se.loader.dismiss();
                    alert(body.Msg);
                }
            }
            else {
                error.page = "roomadddetails-ean";
                error.func = "pushdata";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    presentToasterror() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Số điểm không đủ để tạo booking",
                duration: 3000,
                position: 'top'
            });
            toast.present();
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
    itemrd(item, itemindex) {
        if (this.arr.length == 0) {
            this.BedType = item;
        }
        else {
            this.zone.run(() => {
                this.arrpush[itemindex] = item;
            });
        }
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
    presentLoading() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loader = yield this.loadingCtrl.create({});
            this.loader.present();
        });
    }
    phonenumber(inputtxt) {
        if (inputtxt) {
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
        else {
            return false;
        }
    }
    refreshToken() {
        var se = this;
        se.storage.get('auth_token').then(auth_token => {
            if (auth_token) {
                var text = "Bearer " + auth_token;
                var options = {
                    method: 'GET',
                    url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlMobile + '/api/Account/reloadTokenClaims',
                    headers: {
                        'cache-control': 'no-cache',
                        'content-type': 'application/json',
                        authorization: text
                    },
                };
                requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
                    if (response.statusCode != 200) {
                        var objError = {
                            page: "roompaymentdoneean",
                            func: "refreshToken",
                            message: response.statusMessage,
                            content: response.body,
                            type: "warning"
                        };
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
                    }
                    if (error) {
                        error.page = "roompaymentdoneean";
                        error.func = "refreshToken";
                        _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
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
    goback() {
        this.navCtrl.navigateBack('roomdetailreview');
    }
    paymentnotAL() {
        this.presentLoading();
        var se = this;
        se.jsonroom.RoomClasses = se.room;
        se.timestamp = Date.now();
        var Invoice = 0;
        if (se.Roomif.order) {
            Invoice = 1;
        }
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlPost + '/mInsertBooking',
            timeout: 10000, maxAttempts: 5, retryDelay: 2000,
            headers: {
                'content-type': 'application/json'
            },
            body: {
                RoomClassObj: se.jsonroom.RoomClasses[0].ListObjRoomClass,
                CName: se.Roomif.hoten.trim(),
                CEmail: se.booking.CEmail,
                CPhone: se.Roomif.phone,
                timestamp: se.timestamp,
                HotelID: se.booking.HotelId,
                paymentMethod: "51",
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
                comboid: se.bookcombo.ComboId,
                PenaltyDescription: se.Roomif.textcancel
            },
            json: true
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (response.statusCode != 200) {
                var objError = {
                    page: "roomadddetails",
                    func: "next",
                    message: response.statusMessage,
                    content: response.body,
                    type: "warning",
                    param: JSON.stringify(options)
                };
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(objError, response);
            }
            if (error) {
                error.page = "roomadddetails";
                error.func = "next";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
            }
            ;
            if (body) {
                if (body.error == 0) {
                    var code = body.code;
                    var stt = body.bookingStatus;
                    se.navCtrl.navigateForward('/roompaymentdone/' + code + '/' + stt);
                    se.loader.dismiss();
                }
                else {
                    se.loader.dismiss();
                    alert(body.Msg);
                }
            }
            else {
                error.page = "roomadddetails-ean";
                error.func = "paymentnotAL";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
    }
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    presentToastEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: "Thông tin email không hợp lệ. Vui lòng nhập lại.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        });
    }
    showConfirmEmail(input, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: "Vui lòng cập nhật địa chỉ email để đảm bảo quý khách nhận được thông tin booking từ iVIVU!",
                cssClass: "cls-alert-showmore",
                buttons: [
                    {
                        text: 'Đổi email',
                        role: 'OK',
                        handler: () => {
                            this.showChangeEmail(input, value);
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showChangeEmail(type, value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            const modal = yield se.modalCtrl.create({
                component: _confirmemail_confirmemail_page__WEBPACK_IMPORTED_MODULE_9__["ConfirmemailPage"],
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
                        se.booking.CEmail = data.data.email;
                        se.checkchangeemail = false;
                        if (type == 1) {
                            se.pushdata();
                        }
                        else {
                            if (se.Roomif.payment == 'true') {
                                se.paymentnotAL();
                            }
                            else {
                                if (value == 0) {
                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                }
                                else {
                                    this.installment();
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    showNameMail(ev) {
        this.ishideNameMail = ev.detail.checked;
    }
    installment() {
        var se = this;
        if (!se.activityService.objBankInStallment) {
            se.presentToastWarning("Đang tính giá trả góp, xin quý khách vui lòng đợi trong giây lát!");
            return;
        }
        se.navCtrl.navigateForward('/installmentpayment');
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
    inputFocus(item, event) {
        var se = this;
        se.zone.run(() => {
            if (!se.inputtext) {
                if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                    se.inputtext = true;
                    se.createHintPaxName(null, se.listPaxSuggestByMemberId);
                }
            }
            else {
                se.inputtext = true;
                se.updateHintPaxName(item, event.target.value, se.listPaxSuggestByMemberId);
            }
        });
    }
    inputLostFocus(item, isadult) {
        var se = this;
        se.zone.run(() => {
            setTimeout(() => {
                se.inputtext = false;
                if (se.hidepaxhint) {
                    if (item) {
                        item.hidePaxHint = true;
                    }
                    se.hidepaxhint = false;
                }
            }, 400);
        });
    }
    createHintPaxName(item, listpaxhint) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var se = this;
            se.zone.run(() => {
                if (item) {
                    se.currentSelectPax = item;
                }
                se.listpaxhint = [...listpaxhint];
            });
        });
    }
    updateHintPaxName(item, value, listpaxhint) {
        var se = this;
        let arraypax = [];
        se.zone.run(() => {
            se.currentSelectPax = item;
            for (let index = 0; index < listpaxhint.length; index++) {
                const element = listpaxhint[index];
                if (element.fullName && value && se.gf.convertFontVNI(element.fullName).toLowerCase().indexOf(se.gf.convertFontVNI(value).toLowerCase()) != -1) {
                    arraypax.push(element);
                }
            }
            se.listpaxhint = [...arraypax];
        });
    }
    selectPaxHint(paxhint) {
        var se = this;
        se.zone.run(() => {
            if (paxhint) {
                if (se.currentSelectPax) {
                    se.currentSelectPax.hoten = paxhint.fullName ? paxhint.fullName : se.currentSelectPax.hoten;
                    se.currentSelectPax.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.currentSelectPax.phone;
                }
                else {
                    se.hoten = paxhint.fullName ? paxhint.fullName : se.hoten;
                    se.phone = paxhint.phoneNumber ? paxhint.phoneNumber : se.phone;
                }
            }
        });
    }
    hidePaxHint() {
        this.hidepaxhint = true;
    }
    inputOnFocus(item, type) {
        var se = this;
        if (type == 9 && !se.hoten) {
            if (se.listPaxSuggestByMemberId && se.listPaxSuggestByMemberId.length > 0) {
                se.inputtext = true;
                se.createHintPaxName(item, se.listPaxSuggestByMemberId);
            }
            else {
                se.storage.get('listpaxcache').then((data) => {
                    if (data) {
                        se.inputtext = true;
                        se.createHintPaxName(item, se.listPaxSuggestByMemberId);
                    }
                });
            }
        }
    }
};
RoomadddetailsEanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-roomadddetails-ean',
        template: __webpack_require__(/*! ./roomadddetails-ean.html */ "./src/app/roomadddetails-ean/roomadddetails-ean.html"),
        styles: [__webpack_require__(/*! ./roomadddetails-ean.scss */ "./src/app/roomadddetails-ean/roomadddetails-ean.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"]])
], RoomadddetailsEanPage);



/***/ })

}]);
//# sourceMappingURL=roomadddetails-ean-roomadddetails-ean-module.js.map