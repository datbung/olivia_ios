(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roomadddetails-ean-roomadddetails-ean-module"],{

/***/ "./src/app/roomadddetails-ean/roomadddetails-ean.html":
/*!************************************************************!*\
  !*** ./src/app/roomadddetails-ean/roomadddetails-ean.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n  Generated template for the RoomadddetailsEanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar style=\"min-height: 0px;text-align: center\">\n    <ion-row>\n      <ion-col style=\"text-align: center;height: 48px;\">\n        <div style=\"align-self: center\">\n          <div style=\"position: absolute;height: 48px;width: 48px;top: 8px;\" (click)=\"goback()\">\n            <!-- <ion-icon (click)=\"goback()\" color=\"dark-tint\" style=\"font-size: 2em;\" name=\"arrow-back\" class=\"card-title\"></ion-icon> -->\n            <img style=\"height: 48px; padding: 8px;margin-top: -7px;margin-left:-14px\"\n              src=\"./assets/imgs/ios-arrow-round-back.svg\">\n          </div>\n\n          <div style=\"padding-top: 6px;font-size: 20px;font-weight: bold;\"><label class=\"text-title\">Thông tin\n              khách</label></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <div *ngIf=\"ischeckpayment\" style=\"text-align: center\">\n      <img  src=\"./assets/step/step_2.svg\">\n  </div>\n  <div *ngIf=\"!ischeckpayment\" style=\"text-align: center\">\n    <img src=\"./assets/step/fc_step_2.svg\">\n  </div>\n\n  <div *ngIf=\"roomnumber==1\">\n    <div >\n      <ion-label class=\"text\">\n        Khách nhận phòng\n      </ion-label>\n    </div>\n    <div style=\"margin-left: -5px\">\n      <ion-row>\n          <ion-col size=\"12\">\n              <ion-item style=\"--padding-start: 5px\">\n                  <ion-label  class=\"cls-label\" position=\"stacked\">Họ Tên</ion-label>\n                  <ion-input class=\"label-input\" [(ngModel)]=\"hoten\" type=\"text\" (ionInput)=\"inputFocus(null, $event)\" (ionBlur)=\"inputLostFocus(null)\"  (ionFocus)=\"inputOnFocus(null, 9)\" required></ion-input>\n              </ion-item>\n          </ion-col>\n        \n        <!-- <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"floating\">Họ Tên</ion-label>\n            <ion-input [(ngModel)]=\"ho\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Tên</ion-label>\n            <ion-input [(ngModel)]=\"ten\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 5px\">\n            <ion-label  class=\"cls-label\" position=\"stacked\">Điện thoại</ion-label>\n            <ion-input  class=\"label-input\" [(ngModel)]=\"phone\"  maxlength=10 type=\"tel\"  required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!validemail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label  class=\"cls-label\" position=\"stacked\">Email</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"email\"  required></ion-input>\n    \n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"arrbed.length>1\">\n        <ion-list style=\"margin-left: 5px\">\n          <label  style=\"color: #828282;font-size: 12px\">Loại giường</label>\n          <ion-radio-group>\n            <ion-item class=\"ion-item\" style=\"margin-left: -5px\" (ionSelect)=\"itemrd(item.text,0)\" *ngFor=\"let item of arrbed; let itemindex = index\">\n              <ion-radio color=\"secondary\" value={{item.text.description}} style=\"width: 12px;height: 12px\"\n                checked=\"{{item.ischeck}}\"></ion-radio>\n              <label class=\"rd-text\" style=\"font-size: 14px\">{{item.text.description}}</label>\n            </ion-item>\n          </ion-radio-group>\n        </ion-list>\n       \n\n      </ion-row>\n      <!-- <ion-row *ngIf=\"textbed\" style=\"margin-top: 10px;margin-left: 5px\">\n        <label class=\"rd-text\" style=\"color: #828282;font-size: 14px\">Loại giường: </label>\n        <label class=\"rd-text\" style=\"font-weight: bold\">{{textbed}}</label>\n      </ion-row> -->\n    </div>\n    <div class=\"div-title-other-request\">\n      <ion-label class=\"text\">\n        Thông tin yêu cầu khác\n      </ion-label>\n    </div>\n    <div >\n      <!-- <textarea style=\"margin-top: 5px\" [(ngModel)]=\"note\" style=\"width: 100%;margin-top: 15px;height: 40px\"></textarea> -->\n      <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n              <ion-label class=\"cls-label\" position=\"stacked\">Yêu cầu khác</ion-label>\n              <ion-input class=\"label-input\"  [(ngModel)]=\"note\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n    </div>\n  </div>\n  <div style=\"margin-top: 10px\" *ngIf=\"roomnumber>1\">\n\n    <div *ngFor=\"let m of arr;let i=index\">\n      <div  >\n        <ion-label class=\"text\">\n          {{m.text}}\n        </ion-label>\n      </div>\n      <ion-row style=\"margin-left: -5px\">\n        <!-- <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Họ</ion-label>\n            <ion-input [(ngModel)]=\"m.lastname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label position=\"stacked\">Tên</ion-label>\n            <ion-input [(ngModel)]=\"m.fristname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col> -->\n        <ion-col size=\"12\">\n            <ion-item style=\"--padding-start: 5px\">\n                <ion-label class=\"cls-label\" position=\"stacked\">Họ Tên</ion-label>\n                <ion-input class=\"label-input\" [(ngModel)]=\"m.hoten\" type=\"text\" (ionInput)=\"inputFocus(m, $event)\" (ionBlur)=\"inputLostFocus(m)\"  (ionFocus)=\"inputOnFocus(m, 9)\" required></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"i==0\" style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 5px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Điện thoại</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"m.phone\" maxlength=10 type=\"tel\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf=\"!validemail && i == 0\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Email</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"_email\" type=\"email\" required></ion-input>\n    \n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf=\"m.arrbed.length>1\">\n          <ion-list style=\"    margin-bottom: 20px;\">\n          <label  class=\"cls-label\">Loại giường</label>\n          <ion-radio-group>\n              <ion-item class=\"ion-item\" style=\"margin-left: -5px\" (ionSelect)=\"itemrd(item.text,0)\" *ngFor=\"let item of m.arrbed; let itemindex = index\">\n                <ion-radio value={{item.text.description}} checked=\"{{item.ischeck}}\" color=\"secondary\" class=\"rd-departure\" style=\"width: 12px;height: 12px\"\n                  (ionSelect)=\"itemrd(item.text,i)\"></ion-radio>\n                <label class=\"rd-text\" style=\"font-size: 14px\" >{{item.text.description}}</label>\n              </ion-item >\n            </ion-radio-group>\n        </ion-list>\n       \n\n      </ion-row>\n      <!-- <ion-row *ngIf=\"textbed\" style=\"margin-bottom: 20px\">\n        <label  style=\"color: #828282;font-size: 12px\" class=\"rd-text\">Loại giường: </label>\n        <label class=\"rd-text\" style=\"font-weight: bold;font-size: 12px\">{{textbed}}</label>\n      </ion-row> -->\n    </div>\n    <div style=\"margin-top: 32px\">\n      <ion-label class=\"text\">\n        Yêu cầu khác\n      </ion-label>\n        <ion-row>\n            <ion-col size=\"12\">\n              <ion-item style=\"--padding-start: 0px;margin-left: -5px;\">\n                <ion-label class=\"cls-label\" position=\"stacked\">Thông tin yêu cầu khác</ion-label>\n                <ion-input class=\"label-input\" [(ngModel)]=\"note\"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n    </div>\n  </div>\n  <ion-row *ngIf=\"!Roomif.ExcludeVAT\" style=\"margin-top: 10px\">\n    <ion-checkbox (ionChange)=\"edit(0)\" [(ngModel)]=\"ischeck\" color=\"secondary\"></ion-checkbox>\n    <ion-label style=\"margin: 4px 10px\">Xuất hóa đơn điện tử</ion-label>\n  </ion-row>\n  <div *ngIf=\"ischeck && !Roomif.ExcludeVAT\">\n      <ion-row style=\"margin-left: -5px\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Tên công ty</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"companyname\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Địa chỉ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"address\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Mã số thuế</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"tax\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n  \n      </ion-row>\n      <div style=\"margin-left: 5px;margin-top: 10px\">\n        <ion-checkbox (ionChange)=\"showNameMail($event)\" [checked]=\"ishideNameMail\" class=\"ion-checkbox\" color=\"secondary\"></ion-checkbox>\n        <ion-label class=\"label-input\" >Dùng họ tên & email của người đặt dịch vụ để xuất hoá đơn</ion-label>\n      </div>\n      <div *ngIf=\"!ishideNameMail\">\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Họ tên</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"hotenhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"12\">\n          <ion-item style=\"--padding-start: 0px\">\n            <ion-label class=\"cls-label\" position=\"stacked\">Email nhận HĐ</ion-label>\n            <ion-input class=\"label-input\" [(ngModel)]=\"emailhddt\" type=\"text\" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class='div-close-paxhint' *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\" (click)=\"hidePaxHint()\"><img src='./assets/ic_close_b.svg'></div>\n  <div class=\"div-pax-hint\" *ngIf=\"inputtext && listpaxhint && listpaxhint.length >0\">\n                  \n    <div *ngFor=\"let itempax of listpaxhint\" class=\"d-flex m-bottom-16\" (click)=\"selectPaxHint(itempax)\">\n        <div class=\"icon-pax\">\n                <img src=\"./assets/ic_flight/icon-pax.svg\">\n        </div>\n        <div class=\"text-pax-hint\">\n            {{itempax.fullName}}\n        </div>\n    </div>\n    \n  </div>\n  \n  <div *ngIf=\" (priceshow>0||ischeckbtn==true)\" style=\"background-color: #ffffff; text-align: center\">\n    <div *ngIf=\"showInstallmentButton else hideInstallmentButton\" class=\"div-button-flex\">\n      <button  (click)=\"next(1)\" ion-button round outline class=\"button button-installment\">Trả góp <br><p class=\"text-sub\">chỉ từ {{installmentPriceStr}}</p></button>\n      <button (click)=\"next(0)\" ion-button round outline class=\"button button-payment\">Thanh toán ngay</button>\n    </div>\n    <ng-template #hideInstallmentButton>\n      <button (click)=\"next(0)\" ion-button round outline class=\"button button2\">Tiếp tục</button>\n    </ng-template>\n  </div>\n  <div *ngIf=\"priceshow==0\" style=\"background-color: #ffffff; text-align: center\">\n    <button (click)=\"next1()\" ion-button round outline class=\"button button2\">Hoàn thành đặt phòng</button>\n  </div>\n</ion-footer>"

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

module.exports = ".text {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.button2 {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 90%;\n}\n\n.list-departure {\n  margin: 0;\n  display: inline-flex;\n}\n\n.rd-departure .radio-icon {\n  width: 12px;\n  height: 12px;\n}\n\n.radio-md .radio-inner {\n  left: 1px;\n  top: 1px;\n  width: 6px;\n  height: 6px;\n}\n\n.radio-md .radio-checked {\n  border-color: #26bed6;\n}\n\n.toolbar-title-md {\n  text-align: center;\n  margin-right: 70px;\n}\n\n.button4 {\n  background: #ffffff;\n  color: #ff9500;\n  border-color: #ff9500;\n  margin-top: -5px;\n  font-size: 12px;\n}\n\n::ng-deep .radiocss {\n  border-radius: 50%;\n  border: solid 1px #bdbdbd;\n  box-sizing: content-box;\n  width: 12px;\n  height: 12px;\n}\n\n::ng-deep .ion-item {\n  --padding-start: 0px;\n  --inner-border-width: 0 0 0px 0;\n  --min-height: 0px;\n}\n\n::ng-deep .rd-text {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.cls-label {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-name {\n  font-size: 14px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.label-input {\n  font-size: 16px;\n  font-weight: 300;\n  color: #222222;\n}\n\n.label-input-order {\n  font-size: 16px;\n  font-weight: 300;\n  color: #828282;\n}\n\n.div-title-other-request {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 30px;\n}\n\n.div-title-export-order {\n  font-size: 18px;\n  font-weight: 600;\n  color: #222222;\n  padding-top: 12px;\n}\n\n.label-input {\n  font-size: 16px;\n  font-weight: 300;\n  color: #000000;\n  margin-left: 5px;\n}\n\n.ion-checkbox {\n  width: 16px;\n  height: 16px;\n  margin: -2px;\n}\n\n.div-button-flex {\n  display: flex;\n  width: 100%;\n  margin: 0 8px;\n}\n\n.button-installment {\n  background: #ffffff;\n  color: #ff9500;\n  border: solid 1px #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n  margin-right: 8px;\n  padding: 0;\n  text-align: center !important;\n}\n\n.button-payment {\n  background: #ff9500;\n  color: #ffffff;\n  border-color: #ff9500;\n  width: 100%;\n  font-size: 17px !important;\n  letter-spacing: -0.4px;\n}\n\n.text-sub {\n  margin: 0;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: -0.36px;\n  text-align: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pdGRldi9Eb2N1bWVudHMvRGV2ZWxvcC9PbGl2aWFfaU9TL29saXZpYV9pb3MgaG90Zml4IDIuOS43IHRvdXIvc3JjL2FwcC9yb29tYWRkZGV0YWlscy1lYW4vcm9vbWFkZGRldGFpbHMtZWFuLnNjc3MiLCJzcmMvYXBwL3Jvb21hZGRkZXRhaWxzLWVhbi9yb29tYWRkZGV0YWlscy1lYW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0NSOztBRENJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDQ1I7O0FEQ0k7RUFDSSxTQUFBO0VBQ0Esb0JBQUE7QUNFUjs7QURDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRVI7O0FEQ0k7RUFDSSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDRVI7O0FEQUk7RUFDSSxxQkFBQTtBQ0dSOztBRERJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtBQ0lSOztBREZNO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNJVjs7QUREUTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR1Y7O0FERFE7RUFFRixvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNFTjs7QURBUTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0VaOztBRENNO0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREVNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0VOOztBREFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ0dOOztBREFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDR047O0FEREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNJTjs7QURGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0tOOztBREhJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDTU47O0FESkk7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNPTjs7QURMSTtFQUVFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtBQ09OOztBRExJO0VBRUksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ09SOztBRExJO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7QUNRTiIsImZpbGUiOiJzcmMvYXBwL3Jvb21hZGRkZXRhaWxzLWVhbi9yb29tYWRkZGV0YWlscy1lYW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICAudGV4dHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZFxuICAgIH1cbiAgICAuYnV0dG9uMlxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICB9IFxuICAgIC5saXN0LWRlcGFydHVyZXtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG5cbiAgICAucmQtZGVwYXJ0dXJlIC5yYWRpby1pY29ue1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgIH1cbiAgIFxuICAgIC5yYWRpby1tZCAucmFkaW8taW5uZXJ7XG4gICAgICAgIGxlZnQ6IDFweDtcbiAgICAgICAgdG9wOiAxcHg7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgIH1cbiAgICAucmFkaW8tbWQgLnJhZGlvLWNoZWNrZWQge1xuICAgICAgICBib3JkZXItY29sb3I6ICMyNmJlZDY7XG4gICAgfVxuICAgIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gICAgICB9ICBcbiAgICAgIC5idXR0b240XG4gICAgICB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBjb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgICA6Om5nLWRlZXB7XG4gICAgICAgIC5yYWRpb2Nzc1xuICAgICAgICB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogc29saWQgIDFweCAjYmRiZGJkO1xuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAuaW9uLWl0ZW1cbiAgICB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDBweDtcbiAgICB9XG4gICAgICAgIC5yZC10ZXh0e1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLmNscy1sYWJlbFxuICAgICAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgfVxuXG4gICAgICAubGFiZWwtbmFtZXtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICB9XG4gICAgLmxhYmVsLWlucHV0e1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgIH1cbiAgICAubGFiZWwtaW5wdXQtb3JkZXJ7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgfVxuXG4gICAgLmRpdi10aXRsZS1vdGhlci1yZXF1ZXN0e1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgfVxuICAgIC5kaXYtdGl0bGUtZXhwb3J0LW9yZGVye1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMjIyMjIyO1xuICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgfVxuICAgIC5sYWJlbC1pbnB1dHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgfVxuICAgIC5pb24tY2hlY2tib3h7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIG1hcmdpbjogLTJweDtcbiAgICB9XG4gICAgLmRpdi1idXR0b24tZmxleHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgfVxuICAgIC5idXR0b24taW5zdGFsbG1lbnRcbiAgICB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgICAgY29sb3I6ICNmZjk1MDA7XG4gICAgICBib3JkZXI6IHNvbGlkIDFweCAjZmY5NTAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMC40cHg7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICB9IFxuICAgIC5idXR0b24tcGF5bWVudFxuICAgIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICAgIH0gXG4gICAgLnRleHQtc3Vie1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgIH0iLCIudGV4dCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24yIHtcbiAgYmFja2dyb3VuZDogI2ZmOTUwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1jb2xvcjogI2ZmOTUwMDtcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmxpc3QtZGVwYXJ0dXJlIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbn1cblxuLnJkLWRlcGFydHVyZSAucmFkaW8taWNvbiB7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG5cbi5yYWRpby1tZCAucmFkaW8taW5uZXIge1xuICBsZWZ0OiAxcHg7XG4gIHRvcDogMXB4O1xuICB3aWR0aDogNnB4O1xuICBoZWlnaHQ6IDZweDtcbn1cblxuLnJhZGlvLW1kIC5yYWRpby1jaGVja2VkIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjZiZWQ2O1xufVxuXG4udG9vbGJhci10aXRsZS1tZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xufVxuXG4uYnV0dG9uNCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZmY5NTAwO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIG1hcmdpbi10b3A6IC01cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuOjpuZy1kZWVwIC5yYWRpb2NzcyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2JkYmRiZDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHdpZHRoOiAxMnB4O1xuICBoZWlnaHQ6IDEycHg7XG59XG46Om5nLWRlZXAgLmlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XG4gIC0tbWluLWhlaWdodDogMHB4O1xufVxuOjpuZy1kZWVwIC5yZC10ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jbHMtbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjODI4MjgyO1xufVxuXG4ubGFiZWwtbmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5sYWJlbC1pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5sYWJlbC1pbnB1dC1vcmRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM4MjgyODI7XG59XG5cbi5kaXYtdGl0bGUtb3RoZXItcmVxdWVzdCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufVxuXG4uZGl2LXRpdGxlLWV4cG9ydC1vcmRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4ubGFiZWwtaW5wdXQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uaW9uLWNoZWNrYm94IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbWFyZ2luOiAtMnB4O1xufVxuXG4uZGl2LWJ1dHRvbi1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5idXR0b24taW5zdGFsbG1lbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogI2ZmOTUwMDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmOTUwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogLTAuNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24tcGF5bWVudCB7XG4gIGJhY2tncm91bmQ6ICNmZjk1MDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBib3JkZXItY29sb3I6ICNmZjk1MDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE3cHggIWltcG9ydGFudDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjRweDtcbn1cblxuLnRleHQtc3ViIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMzZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59Il19 */"

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
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);











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
                                item1 = {
                                    text: "Khách nhận phòng " + number + "",
                                    hoten: infocus.ho + ' ' + infocus.ten,
                                    arrbed: this.arrbed,
                                    phone: infocus.phone
                                };
                            }
                            else {
                                if (infocus.ho) {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: infocus.ho,
                                        arrbed: this.arrbed,
                                        phone: infocus.phone
                                    };
                                }
                                else if (infocus.ten) {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: infocus.ten,
                                        arrbed: this.arrbed,
                                        phone: infocus.phone
                                    };
                                }
                                else {
                                    item1 = {
                                        text: "Khách nhận phòng " + number + "",
                                        hoten: "",
                                        arrbed: this.arrbed,
                                        phone: infocus.phone ? infocus.phone : ""
                                    };
                                }
                            }
                        }
                        else {
                            item1 = {
                                text: "Khách nhận phòng " + number + "",
                                hoten: "",
                                arrbed: this.arrbed,
                                phone: ""
                            };
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
                        item1 = {
                            text: "Khách nhận phòng " + number + "",
                            fristname: "",
                            lastname: "",
                            arrbed: this.arrbed,
                            phone: ""
                        };
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
                                item = {
                                    text: this.bed[i],
                                    ischeck: true
                                };
                                this.bedchuoi = this.bed[i];
                            }
                            else {
                                item = {
                                    text: this.bed[i],
                                    ischeck: false
                                };
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
                            item = {
                                text: this.bed[i],
                                ischeck: true
                            };
                            this.bedchuoi = this.bed[i];
                        }
                        else {
                            item = {
                                text: this.bed[i],
                                ischeck: false
                            };
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
                                    item = {
                                        text: this.bed[i],
                                        ischeck: true
                                    };
                                    this.bedchuoi = this.bed[i];
                                }
                                else {
                                    item = {
                                        text: this.bed[i],
                                        ischeck: false
                                    };
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
        this.showInstallmentButton = (priceBooking * 1 >= 3000000 && this.Roomif.payment == 'AL' && (mealtype && mealtype.Supplier == "VINPEARL" || mealtype.Supplier == "SMD" || mealtype.Supplier == 'SERI')) ? true : false;
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
    ngOnInit() { }
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
                    timeout: 10000,
                    maxAttempts: 5,
                    retryDelay: 2000,
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
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (this.hoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (this.hoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
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
                            var order1 = {
                                companyname: this.companyname,
                                address: this.address,
                                tax: this.tax,
                                addressorder: this.addressorder,
                                ishideNameMail: this.ishideNameMail,
                                hotenhddt: this.hotenhddt,
                                emailhddt: this.emailhddt
                            };
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
                                        if (this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED') {
                                            if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                                this.checkhbed(this.Roomif.roomtype);
                                            }
                                            else {
                                                if (this.Roomif.roomtype.Penaltys.length == 0) {
                                                    this.checkhbed(this.Roomif.roomtype);
                                                }
                                                else {
                                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                                }
                                            }
                                        }
                                        else {
                                            this.navCtrl.navigateForward("roompaymentselect-ean");
                                        }
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
                            item1 = {
                                Title: "MR",
                                FirstName: name,
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
                        }
                        else if (texthoten.length > 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: texthoten[1],
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
                        }
                        else if (texthoten.length == 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: "",
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
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
                                    if (this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED') {
                                        if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                            this.checkhbed(this.Roomif.roomtype);
                                        }
                                        else {
                                            if (this.Roomif.roomtype.Penaltys.length == 0) {
                                                this.checkhbed(this.Roomif.roomtype);
                                            }
                                            else {
                                                this.navCtrl.navigateForward("roompaymentselect-ean");
                                            }
                                        }
                                    }
                                    else {
                                        this.navCtrl.navigateForward("roompaymentselect-ean");
                                    }
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
                    var order1 = {
                        companyname: this.companyname,
                        address: this.address,
                        tax: this.tax,
                        addressorder: this.addressorder,
                        ishideNameMail: this.ishideNameMail,
                        hotenhddt: this.hotenhddt,
                        emailhddt: this.emailhddt
                    };
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
            if (this.arr[i].hoten) {
                this.arr[i].hoten = this.arr[i].hoten.trim();
            }
            else {
                this.presentToastName();
                return;
            }
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
                        item1 = {
                            Title: "MR",
                            FirstName: name,
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        };
                    }
                    else if (texthoten.length > 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: texthoten[1],
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        };
                    }
                    else if (texthoten.length == 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: "",
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.arrpush[i]
                        };
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
                        item1 = {
                            Title: "MR",
                            FirstName: name,
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        };
                    }
                    else if (texthoten.length > 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: texthoten[1],
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        };
                    }
                    else if (texthoten.length == 1) {
                        item1 = {
                            Title: "MR",
                            FirstName: "",
                            LastName: texthoten[0],
                            Phone: this.arr[0].phone,
                            Email: this.booking.CEmail,
                            BedType: this.BedType
                        };
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
                        if (this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED') {
                            if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                this.checkhbed(this.Roomif.roomtype);
                            }
                            else {
                                if (this.Roomif.roomtype.Penaltys.length == 0) {
                                    this.checkhbed(this.Roomif.roomtype);
                                }
                                else {
                                    this.navCtrl.navigateForward("roompaymentselect-ean");
                                }
                            }
                        }
                        else {
                            this.navCtrl.navigateForward("roompaymentselect-ean");
                        }
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
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
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
                            var order1 = {
                                companyname: this.companyname,
                                address: this.address,
                                tax: this.tax,
                                addressorder: this.addressorder,
                                ishideNameMail: this.ishideNameMail,
                                hotenhddt: this.hotenhddt,
                                emailhddt: this.emailhddt
                            };
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
                            item1 = {
                                Title: "MR",
                                FirstName: name,
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
                        }
                        else if (texthoten.length > 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: texthoten[1],
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
                        }
                        else if (texthoten.length == 1) {
                            item1 = {
                                Title: "MR",
                                FirstName: "",
                                LastName: texthoten[0],
                                Phone: this.phone,
                                Email: this.booking.CEmail,
                                BedType: this.BedType
                            };
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
                    var order1 = {
                        companyname: this.companyname,
                        address: this.address,
                        tax: this.tax,
                        addressorder: this.addressorder,
                        ishideNameMail: this.ishideNameMail,
                        hotenhddt: this.hotenhddt,
                        emailhddt: this.emailhddt
                    };
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
                                    item1 = {
                                        Title: "MR",
                                        FirstName: name,
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    };
                                }
                                else if (texthoten.length > 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: texthoten[1],
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    };
                                }
                                else if (texthoten.length == 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: "",
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.arrpush[i]
                                    };
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
                                    item1 = {
                                        Title: "MR",
                                        FirstName: name,
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    };
                                }
                                else if (texthoten.length > 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: texthoten[1],
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    };
                                }
                                else if (texthoten.length == 1) {
                                    item1 = {
                                        Title: "MR",
                                        FirstName: "",
                                        LastName: texthoten[0],
                                        Phone: this.arr[0].phone,
                                        Email: this.booking.CEmail,
                                        BedType: this.BedType
                                    };
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
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                };
                            }
                            else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                };
                            }
                            else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.arrpush[i]
                                };
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
                                item1 = {
                                    Title: "MR",
                                    FirstName: name,
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (texthoten.length > 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: texthoten[1],
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
                            }
                            else if (texthoten.length == 1) {
                                item1 = {
                                    Title: "MR",
                                    FirstName: "",
                                    LastName: texthoten[0],
                                    Phone: this.arr[0].phone,
                                    Email: this.booking.CEmail,
                                    BedType: this.BedType
                                };
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
            let toast = yield this.toastCtrl.create({ message: "Xin vui lòng nhập họ tên", duration: 3000, position: 'top' });
            toast.present();
        });
    }
    presentToastOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: "Xin vui lòng nhập thông tin xuất hóa đơn", duration: 3000, position: 'top' });
            toast.present();
        });
    }
    presentToastName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: "Xin vui lòng nhập đầy đủ họ tên", duration: 3000, position: 'top' });
            toast.present();
        });
    }
    presentToastPhone() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: "Xin vui lòng nhập số điện thoại", duration: 3000, position: 'top' });
            toast.present();
        });
    }
    pushdata() {
        if (this.checkchangeemail) {
            return;
        }
        if (this.Roomif.roomtype.Supplier == 'SERI') {
            this.gf.checkAllotmentSeri(this.booking.HotelId, this.Roomif.RoomId, this.booking.CheckInDate, this.booking.CheckOutDate, this.Roomif.roomnumber, 'SERI', this.Roomif.roomtype.HotelCheckDetailTokenInternal).then((allow) => {
                if (allow) {
                    this.continueBook();
                }
                else {
                    if (this.loader) {
                        this.loader.dismiss();
                    }
                    this.gf.showToastWarning('Hiện tại khách sạn đã hết phòng loại này.');
                }
            });
        }
        else {
            this.continueBook();
        }
    }
    continueBook() {
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
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
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
            let toast = yield this.toastCtrl.create({ message: "Số điểm không đủ để tạo booking", duration: 3000, position: 'top' });
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
                    }
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
            timeout: 10000,
            maxAttempts: 5,
            retryDelay: 2000,
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
                error.page = "roomadddetails-ean";
                error.func = "paymentnotAL";
                error.param = JSON.stringify(options);
                _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].writeErrorLog(error, response);
                se.loader.dismiss();
                alert("Đã có sự cố xảy ra, vui lòng thử lại!");
            }
        });
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
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    presentToastEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({ message: "Thông tin email không hợp lệ. Vui lòng nhập lại.", duration: 3000, position: 'top' });
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
                    aParameter: true
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
                                    if (this.room[0].MealTypeRates[this.booking.indexmealtype].Supplier == 'HBED') {
                                        if (this.Roomif.roomtype.HotelRoomHBedReservationRequest.rooms[0].rateType == 'RECHECK') {
                                            this.checkhbed(this.Roomif.roomtype);
                                        }
                                        else {
                                            if (this.Roomif.roomtype.Penaltys.length == 0) {
                                                this.checkhbed(this.Roomif.roomtype);
                                            }
                                            else {
                                                this.navCtrl.navigateForward("roompaymentselect-ean");
                                            }
                                        }
                                    }
                                    else {
                                        this.navCtrl.navigateForward("roompaymentselect-ean");
                                    }
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
            let toast = yield this.toastCtrl.create({ message: msg, duration: 3000, position: 'top' });
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
    checkhbed(MealTypeRates) {
        var self = this;
        this.presentLoading();
        var form = {
            GrossProfitOnline: MealTypeRates.HotelRoomHBedReservationRequest.GrossProfitOnline,
            rooms: MealTypeRates.HotelRoomHBedReservationRequest.rooms,
            rateCommentId: MealTypeRates.HotelRoomHBedReservationRequest.rateCommentId
        };
        var options = {
            method: 'POST',
            url: _providers_constants__WEBPACK_IMPORTED_MODULE_5__["C"].urls.baseUrl.urlContracting + '/api/contracting/GetRateCommonHbedAjax',
            headers: {},
            form
        };
        requestretry__WEBPACK_IMPORTED_MODULE_6__(options, function (error, response, body) {
            if (error)
                throw new Error(error);
            var json = JSON.parse(body);
            self.loader.dismiss();
            if (json.totalNetTa && json.totalNetTa > MealTypeRates.PriceAvgPlusTotalTA) {
                self.gf.showAlertMessage("Giá đã thay đổi, vui lòng thực hiện lại booking !", '');
                return;
            }
            if (json.cancelPolicy) {
                self.Roomif.payment = json.cancelPolicy[0].IsPenaltyFree;
                self.Roomif.ischeckpayment = true;
                var Penalty_Datetemp = json.cancelPolicy[0].Penalty_Date;
                var Penalty_Date1 = new Date(Penalty_Datetemp);
                var Penalty_Date = Penalty_Date1.setTime(Penalty_Date1.getTime() - (1 * 24 * 60 * 60 * 1000));
                var Penalty_Date2 = moment__WEBPACK_IMPORTED_MODULE_10__(Penalty_Date).format('DD-MM-YYYY');
                var thu = moment__WEBPACK_IMPORTED_MODULE_10__(Penalty_Date).format('dddd');
                switch (thu) {
                    case "Monday":
                        thu = "Thứ 2";
                        break;
                    case "Tuesday":
                        thu = "Thứ 3";
                        break;
                    case "Wednesday":
                        thu = "Thứ 4";
                        break;
                    case "Thursday":
                        thu = "Thứ 5";
                        break;
                    case "Friday":
                        thu = "Thứ 6";
                        break;
                    case "Saturday":
                        thu = "Thứ 7";
                        break;
                    default:
                        thu = "Chủ nhật";
                        break;
                }
                var a = json.cancelPolicy[0].Penalty_Val_OTA;
                var money = Math.ceil(a / 100) * 100;
                var money1 = money.toLocaleString();
                var text = "Sau 12:00 PM ngày " + thu + ", " + Penalty_Date2 + " sẽ bị tính phí là: " + money1 + " VND";
                self.Roomif.objMealType = MealTypeRates;
                self.Roomif.textcancel = text;
                self.Roomif.roomcancelhbed = 0;
                self.navCtrl.navigateForward('/roompaymentselect-ean');
            }
            else {
                alert("Đã hết phòng, vui lòng chọn lại phòng khác!");
            }
        });
    }
};
RoomadddetailsEanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({ selector: 'app-roomadddetails-ean', template: __webpack_require__(/*! ./roomadddetails-ean.html */ "./src/app/roomadddetails-ean/roomadddetails-ean.html"), styles: [__webpack_require__(/*! ./roomadddetails-ean.scss */ "./src/app/roomadddetails-ean/roomadddetails-ean.scss")] }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["RoomInfo"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Booking"], _providers_book_service__WEBPACK_IMPORTED_MODULE_1__["Bookcombo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["GlobalFunction"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"], _providers_globalfunction__WEBPACK_IMPORTED_MODULE_7__["ActivityService"]])
], RoomadddetailsEanPage);



/***/ })

}]);
//# sourceMappingURL=roomadddetails-ean-roomadddetails-ean-module.js.map